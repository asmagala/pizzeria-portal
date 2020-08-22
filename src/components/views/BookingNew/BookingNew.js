import React from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BookingNew = () => {
  const classes = useStyles();
  const date = new Date(Date.now());
  const sDay = (date.getMonth() + 1).toString().padStart(2, '0');
  const localDate = `${date.getFullYear()}-${sDay}-${date.getDate()}`;

  return (
    <div>
      <h2>
        New Booking
      </h2>
      < hr />
      <FormControl className={classes.formControl}>
        <InputLabel id="table-label">Table</InputLabel>
        <Select labelId="table-label" id="table-select" >
          <MenuItem value={1}>Table 1</MenuItem>
          <MenuItem value={2}>Table 2</MenuItem>
          <MenuItem value={3}>Table 3</MenuItem>
          <MenuItem value={4}>Table 4</MenuItem>
        </Select>
      </FormControl>
      <FormControl  className={classes.formControl}>
        <TextField id="date" label="Event day" type="date" defaultValue={localDate} InputLabelProps={{shrink: true}} />
      </FormControl>
      <FormControl  className={classes.formControl}>
        <TextField id="time" label="Start hour" type="time" defaultValue="07:30" InputLabelProps={{shrink: true}} inputProps={{ step: 1800}} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button variant="contained" size="large">Accept</Button>
      </FormControl>
    </div>
  );
};

export default BookingNew;