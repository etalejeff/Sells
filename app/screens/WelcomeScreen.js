import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Buy Farm Feed</Text>
      </View>
    </ImageBackground>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
  background: {
    flex: 1,
    justifyContent: "flex-centre",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
