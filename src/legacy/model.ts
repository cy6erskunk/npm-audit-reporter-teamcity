/* eslint-disable @typescript-eslint/naming-convention */

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

export interface IAuditLegacyMetadata {
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
export interface IAuditLegacyOutput {
  actions: IAction[];
  advisories: IAdvisories;
  muted: string[];
  metadata: IAuditLegacyMetadata;
  runId: string;
}
