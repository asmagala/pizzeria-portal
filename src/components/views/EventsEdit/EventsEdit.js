import React from 'react';
import styles from './EventsEdit.module.scss';
import PropTypes from 'prop-types';

const EventsEdit = (props) => {
  const {id} = { ...props };
  return (
    <div className={styles.component}>
      <h2>
        EventsEdit view - {id}
      </h2>
    </div>
  );
};

EventsEdit.propTypes = {
  id: PropTypes.string,
};

export default EventsEdit;