## npm audit reporter for TeamCity
[![Build Status](https://travis-ci.com/cy6erskunk/npm-audit-reporter-teamcity.svg?branch=master)](https://travis-ci.com/cy6erskunk/npm-audit-reporter-teamcity)
[![NPM version](https://img.shields.io/npm/v/npm-audit-reporter-teamcity.svg)](https://www.npmjs.com/package/npm-audit-reporter-teamcity)

Generates TeamCity inspections from the [npm audit](https://docs.npmjs.com/cli/audit.html) report
![Demo report](tc-ui.png)

### Installation
1. Install packages
```
npm i npm-audit-reporter-teamcity
```
2. Add npm scripts to run checks locally and in a CI server, e.g.:
```
"audit:ci": "npm audit --json|npm-audit-reporter-teamcity"
```

3. Configure build step in TeamCity
e.g. Command Line runner with script to install dependencies and run checks:
```
npm install
npm run audit:ci
```

### Configuration
Put `npm-audit-reporter.conf.json` config file in a project root directory to override any of the dafault values:

```json
{
  "inspectionTypeId": "npm-audit-security-inspection",
  "inspectionName": "NPM audit security inspection",
  "inspectionCategory": "security",
  "inspectionSeverity": "WARNING",
}
```

- To debug provide truthy `DEBUG` env variable (e.g. `DEBUG=1 npm run audit:ci`)