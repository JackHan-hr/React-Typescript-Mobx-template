import { observable, action } from 'mobx';
import { StoreExt } from '@/utils/reactExt';

export class GlobalStore extends StoreExt {
  /**
   * 菜单栏折叠
   *
   * @type {boolean}
   * @memberof GlobalStore
   */
  @observable
  sideBarCollapsed: boolean = false;

  @action
  toggleSideBarCollapsed = (collapsed: boolean) => {
    // 这里因为用了antd-ProLayout，每次菜单栏关闭状态页面刷新会自动执行该方法打开，所以此处做缓存无意义
    this.sideBarCollapsed = collapsed;
  };
}

export default new GlobalStore();
