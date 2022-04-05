import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export function Button() {
  const [clickButton, setClikcButton] = useState(false);

  let diceSide = [
    { side: 1, imageName: "side1.jpg" },
    { side: 2, imageName: "side2.jpg" },
    { side: 3, imageName: "side3.jpg" },
    { side: 4, imageName: "side4.jpg" },
    { side: 5, imageName: "side5.jpg" },
    { side: 6, imageName: "side6.jpg" },
  ];

  let randSide = clickButton
    ? Math.round(Math.random() * (diceSide.length - 1))
    : 0;

  return (
    <View>
      <Image
        style={clickButton ? styles.image : styles.hide}
        source={require("../assets/dice-assets/" +
          diceSide[randSide].imageName)}
      />

      <Text style={clickButton ? styles.hide : ""}> Click Roll </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setClikcButton(!clickButton)}
      >
        <Text>
          {clickButton ? "(" + diceSide[randSide].side + ") Reset" : "Roll"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  image: {
    opacity: 1,
    width: 100,
    height: 100,
  },

  hide: {
    opacity: 0,
  },
});
