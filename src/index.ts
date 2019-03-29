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
};
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
};
interface Advisories {
  [id: string]: AdvisoryObject
};
interface AuditOutput {
  actions: Array<Action>,
  advisories: Advisories,
  muted: Array<string>,
  metadata: {
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
  },
  runId: string
}