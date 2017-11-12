import React from "react";
import { View, Text } from "react-sketchapp";
import { Header as styles } from "../styles/index";
import Icons from "./Icons";

export const Story = props => (
  <View style={styles.container}>
    <Icons.Ycombinator size={28} />
    <Text style={styles.text}>Hacker News</Text>
  </View>
);

export const WebPage = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Web Page</Text>
  </View>
);

export const Comment = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Comments</Text>
  </View>
);
