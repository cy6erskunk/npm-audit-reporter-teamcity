import { defaultConfig } from "../src/config";
import { processReport } from "../src/reporter";

import { multipleVulnerabilities, noVulnerability, simpleVulnerability } from "./mocks/index";

const tsm = {
  inspection: jest.fn(),
  inspectionType: jest.fn(),
};

describe('npm audit teamcity reporter', () => {
  beforeEach(() => {
    tsm.inspectionType.mockReset();
    tsm.inspection.mockReset();
  });

  test('one vulnerability found', () => {
    processReport(tsm, defaultConfig, simpleVulnerability);
    expect(tsm.inspectionType).toHaveBeenCalledTimes(1);
    expect(tsm.inspection).toHaveBeenCalledTimes(1);
  });

  test('no vulnerabilities found', () => {
    processReport(tsm, defaultConfig, noVulnerability);
    expect(tsm.inspectionType).not.toHaveBeenCalled();
    expect(tsm.inspection).not.toHaveBeenCalled();
  });

  test('output matches snapshot with some vulnerabilities', () => {
    processReport(tsm, defaultConfig, multipleVulnerabilities);
    expect(tsm.inspection).toHaveBeenLastCalledWith({
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
