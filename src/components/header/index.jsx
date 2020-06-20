import React from 'react';
import styles from './Header.module.css';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import { ExportOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth/index';
import { removeItemDB } from '../../utils/localDB';
import routes from '../../constants/routes.constants/index';
import axios from 'axios';

const Header = ({ isAuth, dispatch, username }) => {
  const handleLogout = () => {
    removeItemDB('currentUser');
    dispatch(
      logout({
        isAuth: false,
        isLoadingAuth: false,
        name: null,
        token: null,
        isFirstValidate: true,
      })
    );
  };

  const renderInfoUser = () => {
    if (isAuth || localStorage.currentUser) {
      return (
        <>
          <h3 className={styles.nameUser}>{username}</h3>
          <ExportOutlined style={{ fontSize: '24px' }} onClick={handleLogout} />
        </>
      );
    } else {
      return (
        <Link to={routes['sign-in']} className={styles.linkUser}>
          <span className={styles.linkUserText}>Sign in</span>
          <HomeOutlined />
        </Link>
      );
    }
  };

  return (
    <div className={styles.header}>
      <Divider orientation="left" style={{ minWidth: '0' }}>
        Blog
      </Divider>
      <div className={styles.info}>{renderInfoUser()}</div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  username: state.reducerAuth.currentUser.username,
  isAuth: state.reducerAuth.currentUser.isAuth,
});

export default connect(mapStateToProps)(Header);
