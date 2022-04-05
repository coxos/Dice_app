import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Button() {
  const [clickButton, setClikcButton] = useState(false);

  let diceSide = [
    { side: 1, imageName: "side1.jpg" },
    { side: 2, imageName: "side2.jpg" },
    { side: 3, imageName: "side3.jpg" },
    { side: 4, imageName: "side4.jpg" },
    { side: 5, imageName: "side5.jpg" },
    { side: 6, imageName: "side6.jpg" },
  ];

  let randSide = Math.round(Math.random() * (diceSide.length - 1));

  return (
    <View>
      <Text> {clickButton ? diceSide[randSide].side : "Click Roll"} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setClikcButton(!clickButton)}
      >
        <Text> {!clickButton ? "Roll" : "Reset"} </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
