import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>
        Tables view
      </h2>
      <ul>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link></ li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/booking/book222`}>Add / Edit Booking</Link></ li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link></ li>
        <li><Link to={`${process.env.PUBLIC_URL}/tables/events/event222`}>Add / Edit Event</Link></ li>
      </ul>
    </div>
  );
};

export default Tables;