import React from 'react';
import styles from './EventsEdit.module.scss';
import PropTypes from 'prop-types';

const EventsEdit = (props) => {
  const {id} = { ...props.match.params };
  console.log('id:', props);
  return (
    <div className={styles.component}>
      <h2>
        EventsEdit view - {id}
      </h2>
    </div>
  );
};


EventsEdit.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default EventsEdit;