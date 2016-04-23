var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router; //router configuration property

var Main = require('./components/main');


module.exports = (
    <Router>
      <Route path="/" component={Main}>



      </Route>
    </Router>
);
