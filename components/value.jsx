var React = require('react/addons')

  , { PureRenderMixin } = React.addons
  ;

var Value = React.createClass({
  mixins : [PureRenderMixin]
,
  getDefaultProps : () => ({ component: 'div' })
,
  render : function () {
    var { component, get, value } = this.props;

    return React.createElement(component, this.props, get ? get(value) : value);
  }
});

module.exports = Value;
