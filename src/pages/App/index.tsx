import React from 'react';
import { BrowserRouter, Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import router, { REDIRECT_URL } from '@/constants/router';
import LoadableComponent from '@/common/Loadable';
import * as store from '@/stores';
import ProviderWrapper from './provider';
import IntlWrapper from './intlWrapper';
import styles from './index.module.less';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.routerStore);

// 处理全局页面路由
const UserComponent = LoadableComponent(router.login.component, true);
const SecurityComponent = LoadableComponent(router.security.component);

const AppWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className={styles.appWrapper}>{children}</div>
);

function App() {
  return (
    <ProviderWrapper>
      <IntlWrapper>
        <AppWrapper>
          <Router history={history}>
            <BrowserRouter>
              <Switch>
                <Route exact path={router.login.path} component={UserComponent} />
                <Route
                  exact
                  path={router.security.path}
                  render={() => <Redirect to={router.security.basic.path} />}
                />
                <Route path={router.security.basic.path} component={SecurityComponent} />
                {router.exception.map((route) => (
                  <Route
                    exact
                    key={route.id}
                    path={route.path}
                    component={LoadableComponent(route.component)}
                  />
                ))}
                <Route render={() => <Redirect to={REDIRECT_URL.NOTFOUND} />} />
              </Switch>
            </BrowserRouter>
          </Router>
        </AppWrapper>
      </IntlWrapper>
    </ProviderWrapper>
  );
}

export default App;
