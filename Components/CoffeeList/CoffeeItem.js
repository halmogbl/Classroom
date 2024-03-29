import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

class CoffeeItem extends Component {
  render() {
    const { coffeeShop } = this.props;
    return (
      // <ImageBackground
      //   source={{ uri: coffeeShop.background }}
      //   style={styles.background}
      // >
      <View>
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() =>
            this.props.navigation.navigate("CoffeeDetail", {
              coffeeShop: coffeeShop
            })
          }
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                {/* <Thumbnail
                  bordered
                  source={{ uri: coffeeShop.img }}
                  style={styles.thumbnail}
                /> */}
                <Text style={styles.text}>{coffeeShop.subject}</Text>
                <Text note style={styles.text}>
                  {coffeeShop.grade}
                </Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
        {/* // </ImageBackground> */}
      </View>
    );
  }
}

export default withNavigation(CoffeeItem);
