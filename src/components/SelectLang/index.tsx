import { GlobalOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { ClickParam } from 'antd/es/menu';
import React from 'react';
import classNames from 'classnames';
import { getCookie, setCookie } from '@/utils';
import { COOKIE_KEYS } from '@/constants';
import { SUPPOER_LOCALES } from '@/common/Locales';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.module.less';

interface SelectLangProps {
  className?: string;
}

const SelectLang: React.FC<SelectLangProps> = (props) => {
  const { className } = props;
  const selectedLang = getCookie(COOKIE_KEYS.LANG) || COOKIE_KEYS.LANGUAGE;

  const changeLang = ({ key }: ClickParam): void => {
    setCookie(COOKIE_KEYS.LANG, key);
    window.location.reload();
  };

  const locales = SUPPOER_LOCALES;

  const languageLabels = {
    zh_CN: '简体中文',
    en_US: 'English',
  };

  const languageIcons = {
    zh_CN: '🇨🇳',
    en_US: '🇺🇸',
  };

  const langMenu = (
    <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map((locale) => (
        <Menu.Item key={locale.value}>
          <span role="img" aria-label={languageLabels[locale.value]}>
            {languageIcons[locale.value]}
          </span>{' '}
          {languageLabels[locale.value]}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span className={classNames(styles.dropDown, className)}>
        <GlobalOutlined title="语言" />
      </span>
    </HeaderDropdown>
  );
};

export default SelectLang;
