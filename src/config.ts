export interface Config {
  inspectionTypeId: string,
  inspectionName: string,
  inspectionCategory: string,
  inspectionSeverity: string
}

export interface UserConfig {
  inspectionTypeId?: string,
  inspectionName?: string,
  inspectionCategory?: string,
  inspectionSeverity?: string
}

const defaultConfig: Config = {
  inspectionTypeId: 'npm-audit-security-inspection',
  inspectionName: 'NPM audit security inspection',
  inspectionCategory: 'security',
  inspectionSeverity: 'WARNING',
}

const CONFIG_FILENAME = 'npm-audit-reporter.conf.json';

export function getConfig(): Config {
  let config: UserConfig = {};
  try {
    config =
      require(`${process.cwd()}/${CONFIG_FILENAME}`);
  } catch (e) {
    process.env.DEBUG && console.log('Something went wrong:', e);
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }

  config = {
    ...defaultConfig,
    ...config
  };
  process.env.DEBUG && console.log('Config to use:', config);

  return <Config>config;
}

export default defaultConfig;