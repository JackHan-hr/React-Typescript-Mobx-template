import { ReactComponent as CameraIcon } from '@/assets/images/camera.svg';
import { ReactComponent as TextIcon } from '@/assets/images/text.svg';
import { REDIRECT_URL } from './index';

export { REDIRECT_URL };

const router = {
  login: {
    path: REDIRECT_URL.USERLOGIN,
    id: 'user_login',
    name: 'user_login',
    component: 'layouts/UserLayout.tsx',
  },
  security: {
    path: REDIRECT_URL.ROOT,
    component: 'layouts/SecurityLayout.tsx',
    basic: {
      path: REDIRECT_URL.ROOTREDIRECT,
      component: 'layouts/BasicLayout.tsx',
      routes: [
        {
          path: `${REDIRECT_URL.ROOTREDIRECT}/home`,
          id: 'home_page',
          name: 'home_page',
          icon: '',
          authority: ['admin', 'user'],
          hideInMenu: false,
          component: '',
          routes: [
            {
              path: `${REDIRECT_URL.ROOTREDIRECT}/home/company-info`,
              id: 'company_info',
              name: 'home_page.company_info',
              icon: CameraIcon,
              loading: false,
              hideInMenu: false,
              component: 'pages/HomePage/CompanyInfo/index.tsx',
            },
            {
              path: `${REDIRECT_URL.ROOTREDIRECT}/home/order-info`,
              id: 'order_info',
              name: 'home_page.order_info',
              icon: TextIcon,
              loading: false,
              hideInMenu: false,
              component: 'pages/HomePage/OrderInfo/index.tsx',
            },
          ],
        },
        {
          path: `${REDIRECT_URL.ROOTREDIRECT}/user-security`,
          id: 'user_security',
          name: 'user_security',
          icon: '',
          authority: ['admin', 'user'],
          hideInMenu: false,
          component: '',
          routes: [
            {
              path: `${REDIRECT_URL.ROOTREDIRECT}/user-security/department-user`,
              id: 'user_security.department_user',
              name: 'user_security.department_user',
              icon: '',
              loading: false,
              hideInMenu: false,
              component: 'pages/UserSecurity/DepartmentUser/index.tsx',
            },
            {
              path: `${REDIRECT_URL.ROOTREDIRECT}/user-security/role-permission`,
              id: 'user_security.role_permission',
              name: 'user_security.role_permission',
              icon: '',
              loading: false,
              hideInMenu: false,
              component: 'pages/UserSecurity/RolePermission/index.tsx',
            },
          ],
        },
      ],
    },
    execption: [
      {
        path: `${REDIRECT_URL.ROOTREDIRECT}/401`,
        id: 'exception_401',
        name: 'exception_401',
        component: '',
      },
      {
        path: `${REDIRECT_URL.ROOTREDIRECT}/403`,
        id: 'exception_403',
        name: 'exception_403',
        component: '',
      },
      {
        path: `${REDIRECT_URL.ROOTREDIRECT}/404`,
        id: 'exception_404',
        name: 'exception_404',
        component: 'components/Exception/index.tsx',
      },
      {
        path: `${REDIRECT_URL.ROOTREDIRECT}/500`,
        id: 'exception_500',
        name: 'exception_500',
        component: '',
      },
    ],
  },
  exception: [
    {
      path: '/401',
      id: 'exception_401',
      name: 'exception_401',
      component: '',
    },
    {
      path: '/403',
      id: 'exception_403',
      name: 'exception_403',
      component: '',
    },
    {
      path: '/404',
      id: 'exception_404',
      name: 'exception_404',
      component: 'components/Exception/index.tsx',
    },
    {
      path: '/500',
      id: 'exception_500',
      name: 'exception_500',
      component: '',
    },
  ],
  templates: [],
};

export const PageRouter = router.security.basic;

export const PageRoutes = router.security.basic.routes;

export const ExceptionRoutes = router.security.execption;

export default router;
