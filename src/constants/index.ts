export enum COOKIE_KEYS {
  LANG = 'lang',
  LANGUAGE = 'zh_CN',
}

export enum LOCALSTORAGE_KEYS {
  USERINFO = 'userInfo',
  USERTOKEN = 'userToken',
  NAV_OPEN_KEYS = 'navOpenKeys',
  PROJECT_SETTINGS = 'ProjectSettings',
  SIDE_BAR_COLLAPSED = 'sideBarCollapsed',
}

export enum REDIRECT_URL {
  ROOT = '/', // 路由根路径
  ROOTREDIRECT = '/system', // 路由应用页
  USERLOGIN = '/user/login', // 登陆页
  PAGEREDIRECT = '/system/home/company-info', // 重定向到默认页面
  NOTFOUND = '/404', // 全局404页面
  PAGENOTFOUND = '/system/404', // 应用内404页面
}
