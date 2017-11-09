import React from "react";
import { View, Text } from "react-sketchapp";
import { tabBarOptions as styles } from "../styles/navigation";
import Constants from "../utils/constants";

export default props => {
  let tabBars = [];

  for (var key in Constants.STORY) {
    const isFocued = props.story ? key == props.story : false;

    let indicator = null;
    if (isFocued)
      indicator = <View styles={[{ flex: 1 }, styles.indicatorStyle]} />;
    tabBars.push(
      <View
        style={[
          {
            alignItems: "center",
            justifyContent: "center"
          },
          styles.tabStyle
        ]}
      >
        <Text
          style={[
            styles.labelStyle,
            {
              color: isFocued
                ? styles.activeTintColor
                : styles.inactiveTintColor
            }
          ]}
        >
          {Constants.STORY[key]}
        </Text>
        <View styles={{ flex: 1, height: 10, backgroundColor: "#0686E4" }} />
      </View>
    );
  }

  return (
    <View style={[{ flexDirection: "row" }, styles.style]}>{tabBars}</View>
  );
};
