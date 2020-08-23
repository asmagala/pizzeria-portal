import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.any,
    }),
    tables: PropTypes.any,
    updateTableStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  handleClick = (id, newStatus, order) => {
    let verifiedOrder;
    if (newStatus === 'free') {
      verifiedOrder = null;
    } else {
      verifiedOrder = order;
    }
    this.props.updateTableStatus(id, newStatus, verifiedOrder);
  }

  renderActions(id, status,order){
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.handleClick(id, 'thinking', order)}>thinking</Button>
            <Button onClick={() => this.handleClick(id, 'ordered', order)}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => this.handleClick(id, 'ordered', order)}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.handleClick(id, 'prepared', order)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.handleClick(id, 'delivered', order)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.handleClick(id, 'paid', order)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.handleClick(id, 'free', order)}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.id, row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;