import React, { useReducer } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_borderTopLeftRadius":
      return { ...state, borderTopLeftRadius: action.payload };
    case "change_borderTopRightRadius":
      return { ...state, borderTopRightRadius: action.payload };
    case "change_borderBottomRightRadius":
      return { ...state, borderBottomRightRadius: action.payload };
    case "change_borderBottomLeftRadius":
      return { ...state, borderBottomLeftRadius: action.payload };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  });

  console.log(state);
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View
          style={{
            height: styles.previewStyle.height,
            justifyContent: "space-between"
          }}
        >
          <TextInput
            style={styles.textTLInputStyle}
            placeholder="TL"
            keyboardType="numeric"
            value={state.borderTopLeftRadius.toString()}
            onChangeText={input => {
              const sanitizedInput = input.replace(/[^0-9.]/g, "");
              dispatch({
                type: "change_borderTopLeftRadius",
                payload: sanitizedInput
              });
            }}
          />
          <TextInput
            style={styles.textBLInputStyle}
            placeholder="BL"
            keyboardType="numeric"
            value={state.borderBottomLeftRadius.toString()}
            onChangeText={input => {
              const sanitizedInput = input.replace(/[^0-9.]/g, "");
              dispatch({
                type: "change_borderBottomLeftRadius",
                payload: sanitizedInput
              });
            }}
          />
        </View>
        <View
          style={{
            ...styles.previewStyle,
            borderTopRightRadius: +state.borderTopRightRadius,
            borderTopLeftRadius: +state.borderTopLeftRadius,
            borderBottomRightRadius: +state.borderBottomRightRadius,
            borderBottomLeftRadius: +state.borderBottomLeftRadius
          }}
        />
        <View
          style={{
            height: styles.previewStyle.height,
            justifyContent: "space-between"
          }}
        >
          <TextInput
            style={styles.textTRInputStyle}
            placeholder="TR"
            keyboardType="numeric"
            value={state.borderTopRightRadius.toString()}
            onChangeText={input => {
              const sanitizedInput = input.replace(/[^0-9.]/g, "");
              dispatch({
                type: "change_borderTopRightRadius",
                payload: sanitizedInput
              });
            }}
          />
          <TextInput
            style={styles.textBRInputStyle}
            placeholder="BR"
            keyboardType="numeric"
            value={state.borderBottomRightRadius.toString()}
            onChangeText={input => {
              const sanitizedInput = input.replace(/[^0-9.]/g, "");
              dispatch({
                type: "change_borderBottomRightRadius",
                payload: sanitizedInput
              });
            }}
          />
        </View>
      </View>
      <View style={styles.viewTextCssStyle}>
        <Text selectable={true} style={styles.textCssStyle}>
          borderTopLeftRadius: {state.borderTopLeftRadius};{"\n"}
          borderTopRightRadius: {state.borderTopRightRadius};{"\n"}
          borderBottomLeftRadius: {state.borderBottomLeftRadius};{"\n"}
          borderBottomRightRadius: {state.borderBottomRightRadius};
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222f3e",
    justifyContent: "center",
    alignItems: "center"
  },
  mainView: {
    flexDirection: "row",
    alignItems: "center"
  },
  previewStyle: {
    height: "40%",
    width: "60%",
    backgroundColor: "#8395a7"
  },
  textTLInputStyle: {
    width: 50,
    paddingHorizontal: 5,
    textAlign: "center",
    color: "#8395a7",
    fontSize: 24
  },
  textTRInputStyle: {
    width: 50,
    paddingHorizontal: 5,
    textAlign: "center",
    color: "#8395a7",
    fontSize: 24
  },
  textBLInputStyle: {
    width: 50,
    paddingHorizontal: 5,
    textAlign: "center",
    color: "#8395a7",
    fontSize: 24
  },
  textBRInputStyle: {
    width: 50,
    paddingHorizontal: 5,
    textAlign: "center",
    color: "#8395a7",
    fontSize: 24
  },
  textCssStyle: {
    fontSize: 20,
    color: "#8395a7"
  },
  viewTextCssStyle: {
    backgroundColor: "#2b3b4e",
    borderRadius: 2,
    height: 120,
    width: 285,
    alignItems: "center",
    justifyContent: "center"
  }
});
