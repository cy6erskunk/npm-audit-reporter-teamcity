import defaultConfig, { getConfig } from '../src/config'

describe('getConfig', () => {
  it('returns default config by default', () => {
    expect(getConfig()).toEqual(defaultConfig);
    expect(Object.keys(defaultConfig).length).toBe(4);
  })
})
