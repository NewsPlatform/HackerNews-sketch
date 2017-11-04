import React from "react";
import { View, Text } from "react-sketchapp";
import { HTMLView as styles } from "../styles/index";

export default props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.value}</Text>
  </View>
);
