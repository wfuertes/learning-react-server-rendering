import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import CounterPage from './containers/CounterPage';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="counter" component={CounterPage} />
            <Route path="about" component={AboutPage} />
        </Route>
    </Router>
);
