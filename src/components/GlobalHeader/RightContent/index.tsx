import React from 'react';
import SelectLang from '../../SelectLang';
import styles from './index.module.less';

interface RightContentProps {}

class RightContent extends React.PureComponent<RightContentProps> {
  render() {
    return (
      <div className={styles.rightContent}>
        <SelectLang />
      </div>
    );
  }
}

export default RightContent;
