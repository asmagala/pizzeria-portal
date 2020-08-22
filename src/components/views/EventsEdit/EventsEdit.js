import React from 'react';
import styles from './EventsEdit.module.scss';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

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

 
let tables = {id: '1', table: '3', time: '14:30', duration: '1', date: '2020-10-05'};

const EventsEdit = (props) => {
  const {id} = { ...props.match.params };
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Paper className={styles.component}>
        <h2>Edit {id}</h2>

        <FormControl className={classes.formControl}>
          <InputLabel id="table-label">Table</InputLabel>
          <Select labelId="table-label" id="table-select" value={tables.table} onChange={handleChange}>
            <MenuItem value={1}>Table 1</MenuItem>
            <MenuItem value={2}>Table 2</MenuItem>
            <MenuItem value={3}>Table 3</MenuItem>
            <MenuItem value={4}>Table 4</MenuItem>
          </Select>
        </FormControl>
        <FormControl  className={classes.formControl}>
          <TextField id="date" label="Event day" type="date" value={tables.date} InputLabelProps={{shrink: true}} />
        </FormControl>
        <FormControl  className={classes.formControl}>
          <TextField id="time" label="Start hour" type="time" value={tables.time} InputLabelProps={{shrink: true}} inputProps={{ step: 1800}} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button variant="contained" size="large">Accept</Button>
        </FormControl>
      </ Paper>
    </Container>
  );
};


EventsEdit.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default EventsEdit;