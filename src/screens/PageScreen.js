import React from "react";
import { View, Text } from "react-sketchapp";
import { loadLocalItem } from "../utils/fetchData";
import { PageScreen as styles } from "../styles";
import Header from "../components/Header";

export default props => {
  const item = props.data || loadLocalItem(props.item);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.webview}>
        <Text>{item.url}</Text>
      </View>
    </View>
  );
};
