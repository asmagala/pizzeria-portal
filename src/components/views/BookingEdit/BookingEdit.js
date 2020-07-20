import React from 'react';
import styles from './BookingEdit.module.scss';
import PropTypes from 'prop-types';

const BookingEdit = (props) => {
  const {id} = { ...props.match.params };
  return (
    <div className={styles.component}>
      <h2>
        BookingEdit view - {id}
      </h2>
    </div>
  );
};


BookingEdit.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default BookingEdit;