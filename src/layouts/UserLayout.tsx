import React from 'react';
import styles from './UserLayout.module.less';

interface UserLayoutProps {}

class UserLayout extends React.Component<UserLayoutProps> {
  componentDidMount() {}

  render() {
    return <div className={styles.UserLayout}>UserLayout</div>;
  }
}

export default UserLayout;
