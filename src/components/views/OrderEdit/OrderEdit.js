import React from 'react';
import styles from './OrderEdit.module.scss';
import PropTypes from 'prop-types';

const OrderEdit = (props) => {
  const {id} = { ...props.match.params };
  return (
    <div className={styles.component}>
      <h2>
        OrderEdit view - {id}
      </h2>
    </div>
  );
};

OrderEdit.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default OrderEdit;