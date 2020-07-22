const tsm = {
  inspection: jest.fn(),
  inspectionType: jest.fn(),
};

import { defaultConfig } from '../src/config';
import reporterFactory from '../src/reporter';

import { multipleVulnerabilities, noVulnerabilities } from './mocks/';

describe('npm audit teamcity reporter', () => {
  beforeEach(() => {
    tsm.inspectionType.mockReset();
    tsm.inspection.mockReset();
  });

  test('a couple of vulnerabilities found', () => {
    reporterFactory(tsm, defaultConfig)(multipleVulnerabilities);
    expect(tsm.inspectionType).toHaveBeenCalledTimes(1);
    expect(tsm.inspection).toHaveBeenCalledTimes(9);
  });

  test('no vulnerabilities found', () => {
    reporterFactory(tsm, defaultConfig)(noVulnerabilities);
    expect(tsm.inspectionType).not.toHaveBeenCalled();
    expect(tsm.inspection).not.toHaveBeenCalled();
  });

  test('output matches snapshot with some vulnerabilities', () => {
    const output = reporterFactory(tsm, defaultConfig)(multipleVulnerabilities);
    expect(tsm.inspection).toHaveBeenLastCalledWith({
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
