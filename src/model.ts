type AuditReportVersion = number;
export type TeamcityServiceMessages = any;

interface IPackage {
  severity: string;
  fixAvailable: boolean|IVulnerabilityFix;
  effects: any[];
  nodes: string[];
  name: string;
  range: string;
  isDirect: boolean;
  via: (ISource | string)[];
}

interface IVulnerabilityFix {
  name: string;
  version: string;
  isSemVerMajor: boolean;
}

export interface ISource {
  severity: string;
  cwe: string[];
  dependency: string;
  name: string;
  range: string;
  source: number;
  title: string;
  cvss: { score: number; vectorString: string };
  url: string;
}

interface IVulnerabilities {
  [name: string]: IPackage;
}

export interface IMetadata {
  vulnerabilities: { high: number; total: number; critical: number; low: number; info: number; moderate: number };
  dependencies: { total: number; prod: number; dev: number; peer: number; peerOptional: number; optional: number };
}

export interface IAuditOutput {
  auditReportVersion: AuditReportVersion;
  vulnerabilities: IVulnerabilities;
  metadata: IMetadata;
}
