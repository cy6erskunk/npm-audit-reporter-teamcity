const tsm = {
  inspectionType: jest.fn(),
  inspection: jest.fn(),
}

import reporterFactory from '../src/reporter';
import defaultConfig from '../src/config'

const noVulnerabilities = require('./mocks/empty');
const multipleVulnerabilities = require('./mocks/multiple')

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
