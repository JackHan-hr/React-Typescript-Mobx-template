export const APP_ENV: string = process.env.REACT_APP_ENV || 'development';

const apiDomain =
  window.WEB_CONFIG?.env === APP_ENV ? window.WEB_CONFIG.domain : window.location.origin;

const ConfigEnv = {
  development: {
    DOMAIN: apiDomain,
    USERINFO: 'https://user.staging.ukuaiqi.com',
  },
  staging: {
    DOMAIN: apiDomain,
    USERINFO: 'https://user.staging.ukuaiqi.com',
  },
  production: {
    DOMAIN: apiDomain,
    USERINFO: 'https://user.ukuaiqi.com',
  },
};

export default ConfigEnv[APP_ENV];
