import { observable, reaction } from 'mobx';
import { StoreExt } from '@/utils/reactExt';
import { LOCALSTORAGE_KEYS } from '@/constants';
import { setLocal } from '@/utils/localStorage';
import { IUserStore } from './type';

export class UserStore extends StoreExt {
  @observable
  currentUser: IUserStore.CurrentUser = {};

  @observable
  loading = false;

  constructor() {
    super();
    // 在衍生反应中将当前用户信息存入localStorage
    reaction(
      () => this.currentUser,
      () => {
        setLocal(LOCALSTORAGE_KEYS.USERINFO, this.currentUser);
      },
    );
  }

  // flow内置流自动绑定action
  getCurrentUser = this.flow(function* getCurrentUser() {
    try {
      const currentUserResponse = yield this.api.user.queryCurrent();
      this.currentUser = currentUserResponse;
      this.loading = true;
    } catch (error) {
      console.log(error);
    }
  });
}

export default new UserStore();
