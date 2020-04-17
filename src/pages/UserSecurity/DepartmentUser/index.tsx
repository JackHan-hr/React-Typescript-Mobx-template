import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.module.less';

interface DepartmentUserProps {}

class DepartmentUser extends React.PureComponent<DepartmentUserProps> {
  render() {
    return (
      <PageHeaderWrapper>
        <div className={styles.departmentUser}>departmentUser</div>
      </PageHeaderWrapper>
    );
  }
}

export default DepartmentUser;
