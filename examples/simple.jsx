var React = require('react/addons')

  , { PureRenderMixin }   = React.addons
  , { List, Item, Value } = require('./')
  ;

var  = React.createClass({
  mixins : [PureRenderMixin]
,
  render : function () {
    var data = [
      { first_name: 'Daiderd', last_name: 'Jordan' }
    , { first_name: 'John', last_name: 'Doe' }
    , { first_name: 'Jane', last_name: 'Doe' }
    ];

    return (
      <List list={this.props.collection}>
        <Item>
          <Value get={el => el.first_name} />
          <Value get={el => el.last_name} />
          <hr />
        </Item>
      </List>
    );
  }
});
