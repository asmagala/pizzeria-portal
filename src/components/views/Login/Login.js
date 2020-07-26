import React from 'react';
import styles from './Login.module.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => {
  return (
    <form className={styles.component} autoComplete="off">

      <TextField className={styles.textField} id="login" label="Login" />
      <TextField className={styles.textField} id="password" label="Password" type="password" />
      <Button className={styles.button} variant="contained" color="primary" >
        Sign in
      </Button>

    </form>
  );
};

export default Login;