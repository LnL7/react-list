var React = require('react/addons')

  , { PureRenderMixin } = React.addons
  ;

var List = React.createClass({
  mixins : [PureRenderMixin]
,
  getDefaultProps : () => ({ component: 'ul' })
,
  cloneWithValue : (value, child) => React.cloneElement(child, { value }, child.props.children)
,
  render : function () {
    var { component, list } = this.props;

    var children = [].concat(this.props.children)
      , items    = list.map(value => children.map(this.cloneWithValue.bind(null, value)))
      ;

    return React.createElement(component, null, items);
  }
});

module.exports = List;
