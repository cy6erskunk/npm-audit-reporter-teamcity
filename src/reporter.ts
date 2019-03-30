import { Config } from './index';

type VersionString = string;
type DateString = string;
type ActionString = "install" | "update";
type Access = "public" | "private";
type Severity = "moderate" | "low" | "high";
type ModuleType = "";
interface ResolvePackage {
  id: number,
  path: string,
  dev: boolean,
  optional: boolean,
  bundled: boolean
}
interface Action {
  module: string,
  resolves: Array<ResolvePackage>,
  target: VersionString,
  action: ActionString,
  isMajor?: boolean,
  depth?: number
}
interface AdvisoryFinding {
  version: string,
  paths: Array<string>,
  dev: boolean,
  optional: boolean,
  bundled: boolean
}

interface AdvisoryObject {
  findings: Array<AdvisoryFinding>,
  id: number,
  created: DateString,
  updated: DateString,
  deleted: null,
  title: string,
  found_by: {
    link?: string,
    name: string
  },
  reported_by: {
    link?: string,
    name: string
  },
  module_name: string,
  cves: Array<string>,
  vulnerable_versions: string,
  patched_versions: string,
  overview: string,
  recommendation: string,
  references: string,
  access: Access,
  severity: Severity,
  cwe: string,
  metadata: {
    module_type: ModuleType,
    exploitability: number,
    affected_components: string
  },
  url: string
}

interface Advisories {
  [id: string]: AdvisoryObject
}

interface AuditMetadata {
  vulnerabilities: {
    info: number,
    low: number,
    moderate: number,
    high: number,
    critical: number
  },
  dependencies: number,
  devDependencies: number,
  optionalDependencies: number,
  totalDependencies: number
}
interface AuditOutput {
  actions: Array<Action>,
  advisories: Advisories,
  muted: Array<string>,
  metadata: AuditMetadata,
  runId: string
}

type TeamcityServiceMessages = any;

function isVulnerable(auditMetadata: AuditMetadata) {
  return auditMetadata.vulnerabilities.info +
    auditMetadata.vulnerabilities.low +
    auditMetadata.vulnerabilities.moderate +
    auditMetadata.vulnerabilities.high +
    auditMetadata.vulnerabilities.critical > 0
}
export default function reporter(
  tsm: TeamcityServiceMessages,
  { inspectionTypeId, inspectionName, inspectionCategory, inspectionSeverity }: Config,
) {

  return function (auditResult: AuditOutput) {
    if (isVulnerable(auditResult.metadata)) {
      tsm.inspectionType({
        id: inspectionTypeId,
        name: inspectionName,
        category: inspectionCategory,
        description: 'https://docs.npmjs.com/cli/audit.html',
      });


      Object.keys(auditResult.advisories).forEach(advisoryId => {
        tsm.inspection({
          typeId: inspectionTypeId,
          message: `${auditResult.advisories[advisoryId].overview}
severity: ${auditResult.advisories[advisoryId].severity},
versions: ${auditResult.advisories[advisoryId].findings.map(f => f.version).join(', ')},
vulnerable_versions: ${auditResult.advisories[advisoryId].vulnerable_versions},
patched_versions: ${auditResult.advisories[advisoryId].patched_versions},
recommendation: ${auditResult.advisories[advisoryId].recommendation},
advisory: ${auditResult.advisories[advisoryId].url}`,
          file: `module: "${auditResult.advisories[advisoryId].module_name}"`,
          SEVERITY: inspectionSeverity,
        })
      })
    }
  }
}
