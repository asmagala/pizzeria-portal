import React from 'react';
import styles from './BookingEdit.module.scss';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

const BookingEdit = (props) => {
  const {id} = { ...props.match.params };
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Paper className={styles.component}>
        <h2>
          Edit booking id: {id}
        </h2>
      </ Paper>
    </Container>
  );
};


BookingEdit.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default BookingEdit;