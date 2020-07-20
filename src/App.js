import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';

import OrderNew from './components/views/OrderNew/OrderNew';
import OrderEdit from './components/views/OrderEdit/OrderEdit';

import BookingNew from './components/views/BookingNew/BookingNew';
import BookingEdit from './components/views/BookingEdit/BookingEdit';
import EventsNew from './components/views/EventsNew/EventsNew';
import EventsEdit from './components/views/EventsEdit/EventsEdit';

const App = () => {
  return (
    <BrowserRouter>

      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />

          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderEdit} />

          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingEdit} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventsEdit} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
