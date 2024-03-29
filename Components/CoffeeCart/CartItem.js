import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class CartItem extends Component {
  handlePress = () => {
    this.props.removeItemFromCart(this.props.item);
  };
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}>
            {" "}
            {item.subject}{" "}
          </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.grade}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{item.year}</Text>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
