import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const demoContent = [
  {id: 1, tableId: 1, hour: '10:00', status: 'events', statusID: 'event-23'},
  {id: 2, tableId: 3, hour: '10:00', status: 'events', statusID: 'event-17'},
  {id: 3, tableId: 1, hour: '12:30', status: 'booking', statusID: 'booking-57'},
  {id: 5, tableId: 2, hour: '14:00', status: 'events', statusID: 'event-8'},
  {id: 6, tableId: 4, hour: '11:30', status: 'booking', statusID: 'booking-87'},
  {id: 7, tableId: 2, hour: '17:00', status: 'booking', statusID: 'booking-62'},
];

const Tables = () => {
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Paper className={styles.component}>
        <h2>BOOKING / EVENTS</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour / Table No.</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.hour}>
                <TableCell>{row.hour}</TableCell>
                <TableCell>{row.tableId === 1 ? <Button><Link to={`${process.env.PUBLIC_URL}/tables/${row.status}/${row.statusID}`}>{row.status}</Link></Button> : null}</TableCell>
                <TableCell>{row.tableId === 2 ? <Button><Link to={`${process.env.PUBLIC_URL}/tables/booking/${row.statusID}`}>{row.status}</Link></Button> : null}</TableCell>
                <TableCell>{row.tableId === 3 ? <Button><Link to={`${process.env.PUBLIC_URL}/tables/booking/${row.statusID}`}>{row.status}</Link></Button> : null}</TableCell>
                <TableCell>{row.tableId === 4 ? <Button><Link to={`${process.env.PUBLIC_URL}/tables/booking/${row.statusID}`}>{row.status}</Link></Button> : null}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Toolbar />

      <Button variant="outlined" color="primary" size="large"><Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link></Button>
      {/*<Button variant="outlined" color="primary" size="large"><Link to={`${process.env.PUBLIC_URL}/tables/booking/book222`}>Edit Booking</Link></Button>*/}
      <Button variant="outlined" color="primary" size="large"><Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link></Button>
      {/*<Button variant="outlined" color="primary" size="large"><Link to={`${process.env.PUBLIC_URL}/tables/events/event222`}>Edit Event</Link></Button>*/}

    </Container>
  );
};

export default Tables;