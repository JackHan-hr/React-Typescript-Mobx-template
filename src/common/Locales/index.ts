import { Locale } from 'antd/es/locale-provider';

export enum LOCALES_KEYS {
  EN_US = 'en_US',
  ZH_CN = 'zh_CN',
}

export const SUPPOER_LOCALES = [
  {
    name: 'English',
    value: LOCALES_KEYS.EN_US,
  },
  {
    name: '简体中文',
    value: LOCALES_KEYS.ZH_CN,
  },
];

export interface LocaleResponse {
  localeData: StringObject;
  antdLocaleData: Locale;
}

export function getLocaleLoader(locale: string): Promise<LocaleResponse> {
  switch (locale) {
    case LOCALES_KEYS.ZH_CN:
      return new Promise(async (resolve) => {
        const loc = await import(/* webpackChunkName: "zh-CN" */ '@/locales/zh-CN.ts').then(
          (m) => m.default,
        );
        const antdLoc = await import(
          /* webpackChunkName: "antd-zh-CN" */ 'antd/es/locale-provider/zh_CN'
        ).then((m) => m.default);
        resolve({ localeData: loc, antdLocaleData: antdLoc });
      });
    default:
      return new Promise(async (resolve) => {
        const loc = await import(/* webpackChunkName: "en-US" */ '@/locales/en-US.ts').then(
          (m) => m.default,
        );
        const antdLoc = await import(
          /* webpackChunkName: "antd-en-US" */ 'antd/es/locale-provider/en_US'
        ).then((m) => m.default);
        resolve({ localeData: loc, antdLocaleData: antdLoc });
      });
  }
}
