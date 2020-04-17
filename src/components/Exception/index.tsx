import React from 'react';
import styles from './index.module.less';

interface ExceptionProps {}

const Exception: React.FC<ExceptionProps> = () => {
  return <div className={styles.exception}>404</div>;
};

export default Exception;
