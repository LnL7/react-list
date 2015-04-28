var React = require('react/addons')

  , { PureRenderMixin }   = React.addons
  , { List, Item, Value } = require('./')
  ;

var Example = React.createClass({
  mixins : [PureRenderMixin]
,
  render : function () {
    var list = [
      { first_name: 'Daiderd', last_name: 'Jordan' }
    , { first_name: 'John', last_name: 'Doe' }
    , { first_name: 'Jane', last_name: 'Doe' }
    ];

    return (
      <List list={list}>
        <Item>
          <Value get={el => el.first_name} />
          <Value get={el => el.last_name} />
          <hr />
        </Item>
      </List>
    );
  }
});
