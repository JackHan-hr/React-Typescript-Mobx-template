import React from 'react';
import { observer, inject } from 'mobx-react';
import { PageLoading } from '@ant-design/pro-layout';
import { LOCALSTORAGE_KEYS } from '@/constants';
import { getLocal, setLocal } from '@/utils/localStorage';
import { queryURL } from '@/utils';
import { Redirect } from 'react-router-dom';
import BasicLayout from '@/layouts/BasicLayout';
// import { stringify } from 'querystring';

interface SecurityLayoutProps {
  userStore: IStore['userStore'];
  routerStore: RouterStore;
  history: any;
}

interface SecurityLayoutState {
  isReady: boolean;
}

@inject('routerStore')
@inject('userStore')
@observer
class SecurityLayout extends React.Component<SecurityLayoutProps, SecurityLayoutState> {
  state: SecurityLayoutState = {
    isReady: false,
  };

  componentDidMount() {
    const { userStore } = this.props;
    this.state.isReady = true;
    userStore.getCurrentUser();
  }

  render() {
    const { userStore, routerStore, history } = this.props;
    const { isReady } = this.state;

    // 全局定义动态路由
    window.g_history = history;
    // 定义动态路由并绑定router的history
    routerStore.history = history;

    const isLogin = userStore.currentUser.id;

    // const queryString = stringify({
    //   redirect: window.location.href,
    // });

    // 如果token不存在则先从url参数中获取，如若参数没有token，再跳转至登陆页面
    let k_token = getLocal(LOCALSTORAGE_KEYS.USERTOKEN);
    if (!k_token) {
      k_token = queryURL('token');
      if (k_token) {
        setLocal(LOCALSTORAGE_KEYS.USERTOKEN, k_token);
      } else {
        // 此处如果当前未登陆并且当前路由不为login时退出到登陆页面
        // if (!isLogin && window.location.pathname !== '/user/login') {
        //   return <Redirect to={`/user/login?${queryString}`} />;
        // }
        // 无权限路由页面
        if (!isLogin && window.location.pathname !== '/404') {
          return <Redirect to="/404" />;
        }
      }
    }

    if ((!isLogin && userStore?.loading) || !isReady) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <BasicLayout />
        {/* 这里可以添加Switch与BasicLayout页面同级的页面路由 */}
      </React.Fragment>
    );
  }
}

export default SecurityLayout;
