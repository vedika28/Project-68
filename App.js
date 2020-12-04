import React from "react";
import { View, Text } from "react-native";
import fb from "./screens/fb";
import insta from "./screens/insta";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const BottomTabs = createBottomTabNavigator({
  facebook: { screen: fb },
  instagram: { screen: insta },
});

const AppContainer = createAppContainer(BottomTabs);
