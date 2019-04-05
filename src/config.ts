import {debug} from './tools'
export interface IConfig {
  inspectionTypeId: string,
  inspectionName: string,
  inspectionCategory: string,
  inspectionSeverity: string
}

export interface IUserConfig {
  inspectionTypeId?: string,
  inspectionName?: string,
  inspectionCategory?: string,
  inspectionSeverity?: string
}

const defaultConfig: IConfig = {
  inspectionCategory: 'security',
  inspectionName: 'NPM audit security inspection',
  inspectionSeverity: 'WARNING',
  inspectionTypeId: 'npm-audit-security-inspection',
}

const CONFIG_FILENAME = 'npm-audit-reporter.conf.json';

export function getConfig(): IConfig {
  let config: IUserConfig = {};
  try {
    config =
      require(`${process.cwd()}/${CONFIG_FILENAME}`);
  } catch (e) {
    debug('Something went wrong:', e);
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }

  config = {
    ...defaultConfig,
    ...config
  };
  
  debug('Config to use:', config.toString());

  return config as IConfig;
  }


export default defaultConfig;