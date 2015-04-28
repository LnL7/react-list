# react-list

A React component for displaying collections of data.

```javascript
var Example = React.createClass({
  mixins : [PureRenderMixin]
,
  render : function () {
    var list = [ 'Daiderd Jordan', 'John Doe', 'Jane Doe' ];

    return (
      <List list={list}>
        <Item>
          <Value />
        </Item>
      </List>
    );
  }
});
```
