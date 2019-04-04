import { IConfig } from './config';

type VersionString = string;
type DateString = string;
type ActionString = 'install' | 'update';
type Access = 'public' | 'private';
type Severity = 'moderate' | 'low' | 'high';
type ModuleType = '';
interface IResolvePackage {
  id: number,
  path: string,
  dev: boolean,
  optional: boolean,
  bundled: boolean
}
interface IAction {
  module: string,
  resolves: IResolvePackage[],
  target: VersionString,
  action: ActionString,
  isMajor?: boolean,
  depth?: number
}
interface IAdvisoryFinding {
  version: string,
  paths: string[],
  dev: boolean,
  optional: boolean,
  bundled: boolean
}

interface IAdvisoryObject {
  findings: IAdvisoryFinding[],
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
  cves: string[],
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

interface IAdvisories {
  [id: string]: IAdvisoryObject
}

interface IAuditMetadata {
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
export interface IAuditOutput {
  actions: IAction[],
  advisories: IAdvisories,
  muted: string[],
  metadata: IAuditMetadata,
  runId: string
}

type TeamcityServiceMessages = any;

function isVulnerable(auditMetadata: IAuditMetadata) {
  return auditMetadata.vulnerabilities.info +
    auditMetadata.vulnerabilities.low +
    auditMetadata.vulnerabilities.moderate +
    auditMetadata.vulnerabilities.high +
    auditMetadata.vulnerabilities.critical > 0
}
export default function reporter(
  tsm: TeamcityServiceMessages,
  { inspectionTypeId, inspectionName, inspectionCategory, inspectionSeverity }: IConfig,
) {

  return (auditResult: IAuditOutput) => {
    if (isVulnerable(auditResult.metadata)) {
      tsm.inspectionType({
        category: inspectionCategory,
        description: 'https://docs.npmjs.com/cli/audit.html',
        id: inspectionTypeId,
        name: inspectionName,
      });


      Object.keys(auditResult.advisories).forEach(advisoryId => {
        tsm.inspection({
          SEVERITY: inspectionSeverity,
          file: `module: "${auditResult.advisories[advisoryId].module_name}"`,
          message: `${auditResult.advisories[advisoryId].overview}
severity: ${auditResult.advisories[advisoryId].severity},
versions: ${auditResult.advisories[advisoryId].findings.map(f => f.version).join(', ')},
vulnerable_versions: ${auditResult.advisories[advisoryId].vulnerable_versions},
patched_versions: ${auditResult.advisories[advisoryId].patched_versions},
recommendation: ${auditResult.advisories[advisoryId].recommendation},
advisory: ${auditResult.advisories[advisoryId].url}`,
          typeId: inspectionTypeId,
        })
      })
    }
  }
}
