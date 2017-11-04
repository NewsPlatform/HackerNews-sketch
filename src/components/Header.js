import React from "react";
import { View, Text } from "react-sketchapp";
import { Header as styles } from "../styles/index";
import Icons from "./Icons";

export default props => (
  <View style={styles.container}>
    <Icons.Ycombinator size={28} />
    <Text style={styles.text}>Hacker News</Text>
  </View>
);
