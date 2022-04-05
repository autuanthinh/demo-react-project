import { ILogType } from 'app/utils/logger';

declare interface AppConfig {
  LOG_LEVEL?: string | ILogType;

  API_URL: string;
}

global.env = process.env;

const Config: AppConfig = {
  LOG_LEVEL: process.env.LOG_LEVEL,

  API_URL: process.env.REACT_APP_API_URL as string,
};

export default Config;
