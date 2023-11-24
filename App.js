// INTRO TO REACT NATIVE!!

// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   SafeAreaView,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableNativeFeedback,
//   Button,
//   Alert,
//   Platform,
//   StatusBar,
// } from "react-native";
// // import { Button } from "react-native-web";
// // import { Alert } from "react-native-web";

// export default function App() {
//   const handlePress = () => console.log("Text clicked!");
//   console.log(require("./assets/icon.png"));

//   return (
//     <SafeAreaView style={[styles.container, containerStyle]}>
//       <Text numberOfLines={1} onPress={handlePress}>
//         Hello World & native!! And Hello World. Mosh is showing me some text
//         props including number of lines props and we are trying it out! I hope
//         this text is long enough now!
//       </Text>
//       {/* <TouchableNativeFeedback onPress={() => console.log("image tapped")}>
//         <Image
//           blurRadius={5}
//           fadeDuration={1000}
//           source={{
//             width: 200,
//             height: 300,
//             uri: "https://picsum.photos/200/300",
//           }}
//         />
//       </TouchableNativeFeedback> */}

//       {/* <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }} /> */}
//       <Button
//         color={"orange"}
//         title="Click me"
//         onPress={() =>
//           // Alert.alert("My alert", "I miss you!", [
//           //   { text: "Yes", onPress: () => console.log("Yes") },
//           //   { text: "No", onPress: () => console.log("No") },
//           // ])
//           Alert.prompt("My prompt", "I miss you!", (text) =>
//             console.log(text)
//           )
//         }
//       />
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const containerStyle = { backgroundColor: "orange" };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // justifyContent: "center",
//     // alignItems: "center",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });



// DIMENSIONS AND ORIENTATION!!

// import {
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   Platform,
//   SafeAreaView,
// } from "react-native";

// import {
//   useDimensions,
//   useDeviceOrientation,
// } from "@react-native-community/hooks";

// export default function App() {
//   // console.log(useDimensions());
//   // console.log(useDeviceOrientation());
//   const { landscape } = useDeviceOrientation();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: "100%",
//           height: landscape ? "100%" : "30%",
//         }}
//       ></View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });


// FLEX!!

// import React from "react";
// import { View, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={{
//       backgroundColor: "fff",
//       flex: 1,
//     }}>
//       <View style= {{
//         backgroundColor: "dodgerblue",
//         flex: 1,
//       }} />      
//       <View style= {{
//         backgroundColor: "gold",
//         flex: 1,
//       }} />      
//       <View style= {{
//         backgroundColor: "tomato",
//         flex: 1,
//       }} />      
//     </View>
//   );
// }



// FLEX DIRECTION!!

// import React from "react";
// import { View, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={{
//       backgroundColor: "fff",
//       flex: 1,
//       flexDirection: "row",
//     }}>
//       <View style= {{
//         backgroundColor: "dodgerblue",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "gold",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "tomato",
//         width: 100,
//         height: 100,
//       }} />      
//     </View>
//   );
// }


// JUSTIFY CONTENT!!

// import React from "react";
// import { View, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={{
//       backgroundColor: "fff",
//       flex: 1,
//       flexDirection: "row", // main axis(now horizontal - default(row))
//       justifyContent: "center", // main axis
//       alignItems: "center",  // cross axis(now vertical)
//     }}>
//       <View style= {{
//         backgroundColor: "dodgerblue",
//         width: 100,
//         height: 100,
//         alignSelf: "flex-start", // overwrites alignItems
//       }} />      
//       <View style= {{
//         backgroundColor: "gold",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "tomato",
//         width: 100,
//         height: 100,
//       }} />      
//     </View>
//   );
// }


// WRAPPING ITEMS!!

// import React from "react";
// import { View, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={{
//       backgroundColor: "fff",
//       flex: 1,
//       flexDirection: "row", // main axis(now horizontal - default(row))
//       justifyContent: "center", // main axis
//       alignItems: "center",  // cross axis(now vertical)
//       alignContent: "center", // only works when items are wrapped
//       flexWrap: "wrap",
//     }}>
//       <View style= {{
//         backgroundColor: "dodgerblue",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "gold",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "tomato",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "grey",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "greenyellow",
//         width: 100,
//         height: 100,
//       }} />      
//     </View>
//   );
// }

// FLEX BASIS AND FLEX GROW!!

// import React from "react";
// import { View, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={{
//       backgroundColor: "fff",
//       flex: 1,
//       flexDirection: "row", // main axis(now horizontal - default(row))
//       justifyContent: "center", // main axis
//       alignItems: "center",  // cross axis(now vertical)
//       alignContent: "center", // only works when items are wrapped
//       flexWrap: "wrap",
//     }}>
//       <View style= {{
//         backgroundColor: "dodgerblue",
//         // flexBasis: 100, // width or height depending on main axis
//         // flexGrow: 1, // if you want to grow, use flexGrow
//         // flex: 1, // shorthand for flexBasis and flexGrow, FlexShrink is 1 by default
//         // flexShrink: 1, // if you want to shrink, use flexShrink
//         // width: 520,
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "gold",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "tomato",
//         width: 100,
//         height: 100,
//       }} />            
//     </View>
//   );
// }


// ABSOLUTE POSITIONING & RELATIVE POSITIONING!!

// import React from "react";
// import { View, StyleSheet } from "react-native";

// export default function App() {
//   return (
//     <View style={{
//       backgroundColor: "fff",
//       flex: 1,
//       flexDirection: "row", // main axis(now horizontal - default(row))
//       justifyContent: "center", // main axis
//       alignItems: "center",  // cross axis(now vertical)
//     }}>
//       <View style= {{
//         backgroundColor: "dodgerblue",
//         width: 100,
//         height: 100,
//       }} />      
//       <View style= {{
//         backgroundColor: "gold",
//         width: 100,
//         height: 100,
//         top: 20,
//         left: 20,
//         position: "absolute",  // default is relative
//       }} />      
//       <View style= {{
//         backgroundColor: "tomato",
//         width: 100,
//         height: 100,
//       }} />            
//     </View>
//   );
// }

import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

function App(props) {
  return (
    // <WelcomeScreen />
    <ViewImageScreen />
  );
}

export default App;



  