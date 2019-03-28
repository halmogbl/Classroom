import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

// Actions
import { getClassRoom } from "../../store/actions/coffeeActions";
import AppContainer from "../../Navigation";

class HomePage extends Component {
  componentDidMount() {
    this.props.getClassRoom();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getClassRoom: () => dispatch(getClassRoom())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
