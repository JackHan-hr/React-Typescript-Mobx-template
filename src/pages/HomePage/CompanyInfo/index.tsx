import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.module.less';

interface CompanyInfoProps {}

const CompanyInfo: React.FC<CompanyInfoProps> = () => {
  return (
    <PageHeaderWrapper>
      <div className={styles.companyInfo}>company_info</div>
    </PageHeaderWrapper>
  );
};

export default CompanyInfo;
