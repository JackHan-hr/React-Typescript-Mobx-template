import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.module.less';

interface RolePermissionProps {}

class RolePermission extends React.PureComponent<RolePermissionProps> {
  render() {
    return (
      <PageHeaderWrapper>
        <div className={styles.rolePermission}>rolePermission</div>
      </PageHeaderWrapper>
    );
  }
}

export default RolePermission;
