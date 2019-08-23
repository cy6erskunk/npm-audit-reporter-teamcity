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
});
