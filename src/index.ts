const tsm = require('teamcity-service-messages');
import reporterFactory from './reporter';

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

let input = '';

process.stdin.on('data', data => {
  input += data.toString();
});

process.stdin.on('end', data => {
  const reporter = reporterFactory(tsm, defaultConfig)
  reporter(JSON.parse(input));
});