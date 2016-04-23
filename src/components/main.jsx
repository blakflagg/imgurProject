var React = require('react');
var Header = require("./header");
var renderCount = 0;

module.exports = React.createClass({

    render: function(){
      console.log(renderCount++);
      return <div>
        <Header />
        {this.props.children}
      </div>
    }
});
