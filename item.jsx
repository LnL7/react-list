var React = require('react/addons')

  , { PureRenderMixin } = React.addons
  ;

var Item = React.createClass({
  mixins : [PureRenderMixin]
,
  getDefaultProps : () => ({ component: 'li' })
,
  cloneWithValue : (value, child, key) => React.cloneElement(child, { key, value }, child.props.children)
,
  render : function () {
    var { component, style, value } = this.props;

    var children = [].concat(this.props.children)
      , items    = children.map(this.cloneWithValue.bind(null, value))
      ;

    return React.createElement(component, this.props, items);
  }
});

module.exports = Item;
