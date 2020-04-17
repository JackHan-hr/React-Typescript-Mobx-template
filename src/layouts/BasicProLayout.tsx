import React from 'react';
import { Link } from 'react-router-dom';
import ProLayouts, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
} from '@ant-design/pro-layout';
import Icon, { QuestionOutlined } from '@ant-design/icons';
import { Route } from '@ant-design/pro-layout/es/typings';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import intl from 'react-intl-universal';
import GlobalHeader from '@/components/GlobalHeader';
import { REDIRECT_URL } from '@/constants';
import logo from '@/assets/images/logo.svg';

export interface BasicProLayoutProps extends ProLayoutProps {
  routerStore: RouterStore;
  globalStore: IStore['globalStore'];
  settingStore: IStore['settingStore'];
  userStore: IStore['userStore'];
  route: Route;
}

interface BasicProLayoutState {
  isReady?: boolean;
}

@observer
class BasicProLayout extends React.Component<BasicProLayoutProps, BasicProLayoutState> {
  state: BasicProLayoutState = {
    isReady: false,
  };

  componentDidMount() {
    this.state.isReady = true;
  }

  @computed
  get currentRoute() {
    return this.props.routerStore.location.pathname;
  }

  menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
    menuList.map((item) => {
      const localItem = {
        ...item,
        // @ts-ignore
        icon: item.icon ? <Icon component={item.icon} /> : <QuestionOutlined />,
        name: intl.get(`menu.${item.name}`),
        children: item.children ? this.menuDataRender(item.children) : [],
      };
      // 此处处理路由菜单权限
      return localItem as MenuDataItem;
    });

  render() {
    const { children, globalStore, settingStore, ...reset } = this.props;
    const { settings } = settingStore;
    return (
      <ProLayouts
        logo={window.WEB_CONFIG?.logo || logo}
        title={window.WEB_CONFIG?.name || intl.get('app.name')}
        menuHeaderRender={(logoDom, titleDom) => (
          <Link to={REDIRECT_URL.ROOT}>
            {logoDom}
            {titleDom}
          </Link>
        )}
        onCollapse={globalStore.toggleSideBarCollapsed}
        collapsed={globalStore.sideBarCollapsed}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        breadcrumbRender={(routers = []) => [...routers]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={`/${paths[0]}`}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          );
        }}
        menuDataRender={this.menuDataRender}
        rightContentRender={() => <GlobalHeader />}
        {...reset}
        {...settings}
      >
        <React.Fragment>{children}</React.Fragment>
      </ProLayouts>
    );
  }
}

export default BasicProLayout;
