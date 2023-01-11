import { defaultConfig } from '../src/config';
import { processReport } from '../src/reporter';

import { multipleVulnerabilities, noVulnerability, simpleVulnerability } from './mocks/index';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsm = require('teamcity-service-messages');
jest.mock('teamcity-service-messages');
const mockedTsm = jest.mocked(tsm);

describe('npm audit teamcity reporter', () => {
  beforeEach(() => {
    mockedTsm.inspectionType.mockReset();
    mockedTsm.inspection.mockReset();
  });

  test('one vulnerability found', () => {
    processReport(mockedTsm, defaultConfig, simpleVulnerability);
    expect(mockedTsm.inspectionType).toHaveBeenCalledTimes(1);
    expect(mockedTsm.inspection).toHaveBeenCalledTimes(1);
  });

  test('no vulnerabilities found', () => {
    processReport(mockedTsm, defaultConfig, noVulnerability);
    expect(mockedTsm.inspectionType).not.toHaveBeenCalled();
    expect(mockedTsm.inspection).not.toHaveBeenCalled();
  });

  test('output matches snapshot with some vulnerabilities', () => {
    processReport(mockedTsm, defaultConfig, multipleVulnerabilities);
    expect(mockedTsm.inspection).toHaveBeenLastCalledWith({
      SEVERITY: defaultConfig.inspectionSeverity,
      file: 'module: "video.js"',
      message: `Cross-site Scripting in video.js
severity: moderate,
versions: <7.14.3,
dependency of: n/a,
patched_versions: video.js@7.20.3,
advisory: https://github.com/advisories/GHSA-pp7m-6j83-m7r6`,
      typeId: defaultConfig.inspectionTypeId,
    });
  });
});
