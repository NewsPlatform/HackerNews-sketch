import React from "react";
import { View, Text } from "react-sketchapp";
import Icons from "../components/Icons";
import { SplashScreen as styles } from "../styles";

export default props => {
  return (
    <View style={styles.container}>
      <Icons.Ycombinator size={50} />
      <Text style={styles.text}>Hacker News</Text>
    </View>
  );
};
