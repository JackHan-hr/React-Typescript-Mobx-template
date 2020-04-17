import { UserStore as UserStoreModel } from './index';

/**
 * 全局定义并输出IUserStore
 * 声明IUserStore为包含子属性的对象
 */
export declare namespace IUserStore {
  // 声明并输出CurrentUser子属性的对象类型
  export interface CurrentUser {
    id?: string;
    name?: string;
    avatar?: string;
  }

  // 声明并输出UserStore为包含子属性的对象模型
  export interface UserStore extends UserStoreModel {}
}
