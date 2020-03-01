import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "border-top-left-radius":
      return { ...state, "border-top-left-radius": action.payload };
    case "border-top-right-radius":
      return { ...state, "border-top-right-radius": action.payload };
    case "border-bottom-right-radius":
      return { ...state, "border-bottom-right-radius": action.payload };
    case "border-bottom-left-radius":
      return { ...state, "border-bottom-left-radius": action.payload };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    "border-top-left-radius": 0,
    "border-top-right-radius": 0,
    "border-bottom-right-radius": 0,
    "border-bottom-left-radius": 0
  });

  return (
    <View style={styles.container}>
      <View style={styles.previewStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  previewStyle: {
    height: 100,
    width: 100,
    backgroundColor: "purple"
  }
});
