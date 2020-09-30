import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('../components/home'));

export default () => {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    );
};
