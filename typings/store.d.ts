import { RouterStore as _RouterStore } from 'mobx-react-router';
import { IGlobalStore } from '@/stores/globalStore/type';
import { IUserStore } from '@/stores/userStore/type';
import { ISettingStore } from '@/stores/settingStore/type';

export {};

declare global {
  /**
   * type from mobx-react-router
   *
   * @interface RouterStore
   * @extends {_RouterStore}
   */
  interface RouterStore extends _RouterStore {}

  /**
   * type for all store
   *
   * @interface IStore
   */
  interface IStore {
    globalStore: IGlobalStore.GlobalStore;
    settingStore: ISettingStore.SettingStore;
    userStore: IUserStore.UserStore;
    routerStore: RouterStore;
  }

  interface Window {
    g_history?: any;
    WEB_CONFIG?: {
      domain: '';
      name: '';
      logo: '';
      env: '';
    };
  }
}
