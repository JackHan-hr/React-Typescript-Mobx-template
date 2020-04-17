import React from 'react';
import RightContent from './RightContent';
import styles from './index.module.less';

interface GlobalHeaderProps {}

class GlobalHeader extends React.PureComponent<GlobalHeaderProps> {
  render() {
    return (
      <div className={styles.globalHeader}>
        <RightContent />
      </div>
    );
  }
}

export default GlobalHeader;
