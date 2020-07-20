import React from 'react';
import styles from './PageNav.module.scss';
import {NavLink} from 'react-router-dom';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName={styles.active}>Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName={styles.active}>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName={styles.active}>Tables</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName={styles.active}>Waiter</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName={styles.active}>Kitchen</NavLink>

    </nav>
  );
};

export default PageNav;