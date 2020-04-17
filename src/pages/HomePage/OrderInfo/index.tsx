import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.module.less';

interface OrderInfoProps {}

const OrderInfo: React.FC<OrderInfoProps> = () => {
  return (
    <PageHeaderWrapper>
      <div className={styles.orderInfo}>company_info</div>
    </PageHeaderWrapper>
  );
};

export default OrderInfo;
