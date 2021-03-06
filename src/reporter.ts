import { IConfig } from './config';
import { debug } from './util';

type VersionString = string;
type DateString = string;
type ActionString = 'install' | 'update';
type Access = 'public' | 'private';
type Severity = 'moderate' | 'low' | 'high';
type ModuleType = '';
interface IResolvePackage {
  id: number;
  path: string;
  dev: boolean;
  optional: boolean;
  bundled: boolean;
}
interface IAction {
  module: string;
  resolves: IResolvePackage[];
  target: VersionString;
  action: ActionString;
  isMajor?: boolean;
  depth?: number;
}
interface IAdvisoryFinding {
  version: string;
  paths: string[];
  dev: boolean;
  optional: boolean;
  bundled: boolean;
}

interface IAdvisoryObject {
  findings: IAdvisoryFinding[];
  id: number;
  created: DateString;
  updated: DateString;
  deleted: null;
  title: string;
  found_by: {
    link?: string;
    name: string;
  };
  reported_by: {
    link?: string;
    name: string;
  };
  module_name: string;
  cves: string[];
  vulnerable_versions: string;
  patched_versions: string;
  overview: string;
  recommendation: string;
  references: string;
  access: Access;
  severity: Severity;
  cwe: string;
  metadata: {
    module_type: ModuleType;
    exploitability: number;
    affected_components: string;
  };
  url: string;
}

interface IAdvisories {
  [id: string]: IAdvisoryObject;
}

interface IAuditMetadata {
  vulnerabilities: {
    info: number;
    low: number;
    moderate: number;
    high: number;
    critical: number;
  };
  dependencies: number;
  devDependencies: number;
  optionalDependencies: number;
  totalDependencies: number;
}
export interface IAuditOutput {
  actions: IAction[];
  advisories: IAdvisories;
  muted: string[];
  metadata: IAuditMetadata;
  runId: string;
}

type TeamcityServiceMessages = any;

function isVulnerable(auditMetadata: IAuditMetadata) {
  return (
    auditMetadata.vulnerabilities.info +
      auditMetadata.vulnerabilities.low +
      auditMetadata.vulnerabilities.moderate +
      auditMetadata.vulnerabilities.high +
      auditMetadata.vulnerabilities.critical >
    0
  );
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

      Object.keys(auditResult.advisories).forEach((advisoryId) => {
        const advisoryElement = auditResult.advisories[advisoryId];
        debug('current element:', advisoryElement);

        tsm.inspection({
          SEVERITY: inspectionSeverity,
          file: `module: "${advisoryElement.module_name}"`,
          message: `${advisoryElement.overview}
severity: ${advisoryElement.severity},
versions: ${advisoryElement.findings.map((f) => f.version).join(', ')},
dependency of: ${advisoryElement.findings
            .reduce((acc, prev) => {
              prev.paths.forEach((path) => {
                const dependencyOf = path.split('>')[0];
                if (!acc.includes(dependencyOf)) {
                  acc.push(dependencyOf);
                }
              });
              return acc;
            }, [])
            .join(', ')},
vulnerable_versions: ${advisoryElement.vulnerable_versions},
patched_versions: ${advisoryElement.patched_versions},
recommendation: ${advisoryElement.recommendation},
advisory: ${advisoryElement.url}`,
          typeId: inspectionTypeId,
        });
      });
    }
  };
}
