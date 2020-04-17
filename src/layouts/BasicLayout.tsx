import React from 'react';
import { REDIRECT_URL, PageRouter, PageRoutes, ExceptionRoutes } from '@/constants/router';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadableComponent from '@/common/Loadable';
import { RootConsumer } from '@/pages/App/provider';
import BasicProLayout from './BasicProLayout';

const BasicLayout: React.FC = () => {
  // 应用页路由 在此处可以做自定义应用路由
  const getPageRoutes = () => {
    return PageRoutes.map((page) => {
      return page.routes ? (
        [
          // @ts-ignore
          page.routes.map((route: any) => (
            <Route
              exact
              key={route.id}
              path={route.path}
              component={LoadableComponent(route.component)}
            />
          )), // 正常应用页面路由
          <Route
            exact
            key={page.id}
            path={page.path}
            render={() => <Redirect to={page.routes[0].path} />}
          />, // 当路由为应用总栏时重定向到当前第一应用页
        ]
      ) : (
        <Route exact key={page.id} path={page.path} component={LoadableComponent(page.component)} />
      );
    });
  };

  // 异常页路由渲染
  const getExceptionRoutes = () => {
    return ExceptionRoutes.map((route) => (
      <Route
        exact
        key={route.id}
        path={route.path}
        component={LoadableComponent(route.component)}
      />
    ));
  };

  return (
    <RootConsumer>
      {(stores) => (
        <BasicProLayout {...stores} route={PageRouter}>
          <Switch>
            {getPageRoutes()}
            {getExceptionRoutes()}
            <Route
              exact
              path={REDIRECT_URL.ROOTREDIRECT}
              render={() => <Redirect to={REDIRECT_URL.PAGEREDIRECT} />}
            />
            <Route render={() => <Redirect to={REDIRECT_URL.PAGENOTFOUND} />} />
          </Switch>
        </BasicProLayout>
      )}
    </RootConsumer>
  );
};

export default BasicLayout;
