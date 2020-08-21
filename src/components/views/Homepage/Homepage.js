import React from 'react';
import styles from './Homepage.module.scss';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const tables = [
  {id: '1', table: '3', time: '14:30', duration: '1', people: '3'},
  {id: '2', table: '3', time: '15:30', duration: '2', people: '2'},
  {id: '3', table: '3', time: '18:00', duration: '3', people: '5'},
  {id: '4', table: '3', time: '14:00', duration: '1', people: '1'},
];

const statistics = [
  {id: '2', location: 'To Go', status: 'done', payment: 'card'},
  {id: '3', location: 'To Go', status: 'done', payment: 'cash'},
  {id: '1', location: 'Delivery', status: 'done', payment: 'card'},
  {id: '4', location: 'Here', status: 'done', payment: 'cash'},
];

const Homepage = () => {
  return (
    <div className={styles.component}>
      <h3> Tables Booked</h3>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>People</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.table}
                </TableCell>
                <TableCell>
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.duration}
                </TableCell>
                <TableCell>
                  {row.people}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <h3>Statistics</h3>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Place</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statistics.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.location}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.payment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Homepage;