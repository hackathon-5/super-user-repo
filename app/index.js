import React from 'react';
import Router from 'react-router';
import App from './components/App';
import IndexView from './components/IndexView';

var content = document.getElementById('content');

var Route = Router.Route;
var routes = (
  <Route handler={App}>
    <Route handler={IndexView} path='/' />
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, content); 
});

