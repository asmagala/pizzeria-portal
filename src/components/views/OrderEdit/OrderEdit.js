import React from 'react';
import styles from './OrderEdit.module.scss';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const order = [
  {id: 1, dish: 'pizza', options: ['pepper,', 'onion', 'olives']},
  {id: 2, dish: 'coffee', options: ['milk', 'small', 'big', 'sugar', 'sweetener']},
  {id: 3, dish: 'salad', options: ['yellow cheese', 'cheese', 'tomato', 'cucumber', 'olives']},
];

const OrderEdit = (props) => {
  const {id} = { ...props.match.params };
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Container>
      <Toolbar />
      <Paper className={styles.component}>
        <h2>Order {id}</h2>

        <FormControl className={classes.formControl}>
          <InputLabel id="table-label">Table</InputLabel>
          <Select labelId="table-label" id="table-select" value='1' onChange={handleChange}>
            <MenuItem value={1}>Table 1</MenuItem>
            <MenuItem value={2}>Table 2</MenuItem>
            <MenuItem value={3}>Table 3</MenuItem>
            <MenuItem value={4}>Table 4</MenuItem>
          </Select>
        </FormControl>

        <Table>
          <TableBody>
            {order.map(row => (
              <TableRow key={row.id} className={styles.tableRow}>
                <TableCell><Typography variant="h6">{row.dish}</Typography></TableCell>
                {row.options.map(option => (
                  <TableCell key={option}>{option}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <FormControl className={classes.formControl}>
          <Button variant="contained" size="large">Accept</Button>
        </FormControl>
      </ Paper>  
    </ Container>
  );
};

OrderEdit.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default OrderEdit;