import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import loadable from '@loadable/component';

/**
 * 单个路由组件
 */
const LoadableComponent = (component: string, loading?: boolean) =>
  loadable(() => import(`@/${component}`), {
    fallback: loading ? <PageLoading /> : undefined,
  });

export default LoadableComponent;
