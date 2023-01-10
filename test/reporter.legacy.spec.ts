import { defaultConfig } from '../src/config';
import reporterFactory from '../src/legacy/reporter';

import { multipleVulnerabilities, noVulnerabilities } from './mocks/legacy';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsm = require('teamcity-service-messages');
jest.mock('teamcity-service-messages');
const mockedTsm = jest.mocked(tsm);

describe('npm audit teamcity reporter', () => {
  beforeEach(() => {
    mockedTsm.inspectionType.mockReset();
    mockedTsm.inspection.mockReset();
  });

  test('a couple of vulnerabilities found', () => {
    reporterFactory(mockedTsm, defaultConfig, multipleVulnerabilities);
    expect(mockedTsm.inspectionType).toHaveBeenCalledTimes(1);
    expect(mockedTsm.inspection).toHaveBeenCalledTimes(9);
  });

  test('no vulnerabilities found', () => {
    reporterFactory(mockedTsm, defaultConfig, noVulnerabilities);
    expect(mockedTsm.inspectionType).not.toHaveBeenCalled();
    expect(mockedTsm.inspection).not.toHaveBeenCalled();
  });

  test('output matches snapshot with some vulnerabilities', () => {
    reporterFactory(mockedTsm, defaultConfig, multipleVulnerabilities);
    expect(mockedTsm.inspection).toHaveBeenLastCalledWith({
      SEVERITY: defaultConfig.inspectionSeverity,
      file: 'module: "js-yaml"',
      message: `Versions \`js-yaml\` prior to 3.13.0 are vulnerable to Denial of Service. By parsing a carefully-crafted YAML file, the node process stalls and may exhaust system resources leading to a Denial of Service.
severity: moderate,
versions: 3.12.0,
dependency of: eslint, jest,
vulnerable_versions: <3.13.0,
patched_versions: >=3.13.0,
recommendation: Upgrade to version 3.13.0.,
advisory: https://npmjs.com/advisories/788`,
      typeId: defaultConfig.inspectionTypeId,
    });
  });
});
