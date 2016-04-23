var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router; //router configuration property

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render: function(){
      return <h1>
      Im child1
      {this.props.children}
      </h1>
  }
});

var Child2 = React.createClass({
  render: function(){
      return <h1>
      Im the other child, child2
      </h1>
  }
});

var routes = (
    <Router>
      <Route path="/" component={Hello}>
        <Route path="1" component={Child1} >
        <Route path="2" component={Child2} />
      </Route>

      </Route>
    </Router>
)


ReactDOM.render(routes, document.querySelector('.container'));
