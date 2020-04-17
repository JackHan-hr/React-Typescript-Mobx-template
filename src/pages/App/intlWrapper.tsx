import React from 'react';
import intl from 'react-intl-universal';
import find from 'lodash/find';
import { ConfigProvider } from 'antd';
import { useOnMount } from '@/utils/hooks';
import { Locale } from 'antd/es/locale-provider';
import { SUPPOER_LOCALES, LOCALES_KEYS, getLocaleLoader } from '@/common/Locales';
import { COOKIE_KEYS } from '@/constants';

export default function IntlWrapper({ children }: { children?: React.ReactNode }) {
  const [currentLocale, setCurrentLocale] = React.useState();
  const [antdLocaleData, setAntdLocaleData] = React.useState<Locale>();

  function loadLocales() {
    let targetLocale = intl.determineLocale({ cookieLocaleKey: COOKIE_KEYS.LANG }) as LOCALES_KEYS;
    // 默认是为 zh_CN
    if (!find(SUPPOER_LOCALES, { value: targetLocale })) {
      targetLocale = LOCALES_KEYS.ZH_CN;
    }
    getLocaleLoader(targetLocale).then((res) => {
      intl
        .init({ currentLocale: targetLocale, locales: { [targetLocale]: res.localeData } })
        .then(() => {
          // @ts-ignore
          setCurrentLocale(targetLocale);
          setAntdLocaleData(res.antdLocaleData);
        });
    });
  }

  useOnMount(loadLocales);

  if (!currentLocale) {
    return null;
  }

  return (
    <ConfigProvider locale={antdLocaleData}>
      <React.Fragment>{children}</React.Fragment>
    </ConfigProvider>
  );
}
