import { observable, action } from 'mobx';
import { LOCALSTORAGE_KEYS } from '@/constants/index';
import { StoreExt } from '@/utils/reactExt';
import { getLocal, setLocal } from '@/utils/localStorage';
import defaultSettings, { DefaultSettings } from '@/constants/defaultSettings';

export class SettingStore extends StoreExt {
  /**
   * 全局设置
   *
   * @type {Settings}
   * @memberof SettingStore
   */
  @observable
  settings: DefaultSettings = getLocal(LOCALSTORAGE_KEYS.PROJECT_SETTINGS) || defaultSettings;

  @action
  changeSettings = (setting: DefaultSettings) => {
    const updateColorWeak = (colorWeak: boolean) => {
      const root = document.getElementById('root');
      if (root) {
        root.className = colorWeak ? 'colorWeak' : '';
      }
    };

    const { colorWeak, contentWidth } = setting;
    if (contentWidth && this.settings.contentWidth !== contentWidth && window.dispatchEvent) {
      window.dispatchEvent(new Event('resize'));
    }

    updateColorWeak(!!colorWeak);

    this.settings = Object.assign(this.settings, setting);
    setLocal(LOCALSTORAGE_KEYS.PROJECT_SETTINGS, this.settings);
  };
}

export default new SettingStore();
