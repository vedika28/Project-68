import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class fb extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Facebook </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
  },
});
