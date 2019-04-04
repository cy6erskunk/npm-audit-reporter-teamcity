const tsm = {
  inspection: jest.fn(),
  inspectionType: jest.fn(),
}

import defaultConfig from '../src/config'
import reporterFactory from '../src/reporter';

import {multipleVulnerabilities, noVulnerabilities}  from './mocks/';

describe('nsp teamcity reporter', () => {
  beforeEach(() => {
    tsm.inspectionType.mockReset()
    tsm.inspection.mockReset()
  })

  test('no vulnerabilities found', () => {
    reporterFactory(tsm, defaultConfig)(noVulnerabilities)
    expect(tsm.inspectionType).not.toBeCalled()
    expect(tsm.inspection).not.toBeCalled()
  })

  test('a couple of vulnerabilities found', () => {
    reporterFactory(tsm, defaultConfig)(multipleVulnerabilities)
    expect(tsm.inspectionType.mock.calls.length).toBe(1)
    expect(tsm.inspection.mock.calls.length).toBe(9)
  })
})
