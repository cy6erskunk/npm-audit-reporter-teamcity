import { join } from 'path';
import { CONFIG_FILENAME, defaultConfig, getConfig, IUserConfig } from '../src/config';

describe('getConfig', () => {
  it('returns default config by default', () => {
    expect(getConfig()).toEqual(defaultConfig);
    expect(getConfig().inspectionCategory).toEqual(defaultConfig.inspectionCategory);
    expect(Object.keys(defaultConfig).length).toBe(4);
  });

  it('uses provided file to override defaults', () => {
    const overrideSettings: IUserConfig = {
      inspectionCategory: 'dummy',
    };
    const mockSettings = jest.mock(join('..', CONFIG_FILENAME), () => overrideSettings, { virtual: true });
    const config = getConfig();

    expect(config.inspectionCategory).toEqual(overrideSettings.inspectionCategory);
    Object.keys(config)
      .filter((key) => !Object.keys(overrideSettings).includes(key))
      .map((key: keyof IUserConfig) => expect(config[key]).toEqual(defaultConfig[key]));
    expect(Object.keys(config).length).toBe(4);
    mockSettings.resetAllMocks();
  });
});
