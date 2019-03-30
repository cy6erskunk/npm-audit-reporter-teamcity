export interface Config {
  inspectionTypeId: string,
  inspectionName: string,
  inspectionCategory: string,
  inspectionSeverity: string
}

const defaultConfig: Config = {
  inspectionTypeId: 'npm-audit-security-inspection',
  inspectionName: 'NPM audit security inspection',
  inspectionCategory: 'security',
  inspectionSeverity: 'WARNING',
}

export default defaultConfig;