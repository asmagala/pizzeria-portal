import React from 'react';
import styles from './BookingEdit.module.scss';
import PropTypes from 'prop-types';

const BookingEdit = (props) => {
  const {id} = { ...props };
  return (
    <div className={styles.component}>
      <h2>
        BookingEdit view - {id}
      </h2>
    </div>
  );
};


BookingEdit.propTypes = {
  id: PropTypes.string,
};

export default BookingEdit;