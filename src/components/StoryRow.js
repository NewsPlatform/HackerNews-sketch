import React from "react";
import { View, Text } from "react-sketchapp";
import { loadLocalItem } from "../utils/fetchData";
import { StoryRow as styles } from "../styles/index";
import moment from "moment";

export default props => {
  const item = loadLocalItem(props.id);

  const _writer = (
    <View style={styles.writerWrap}>
      <Text style={styles.by}>
        {` ${moment(item.time * 1000).fromNow()} by ${item.by}`}
      </Text>
    </View>
  );

  const _comment = item.kids ? (
    <Text style={styles.comment}>
      {`${item.kids.length} ${item.kids.length > 1 ? "comments" : "comment"}`}
    </Text>
  ) : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.descWrap}>
        {_writer}
        {_comment}
      </View>
    </View>
  );
};
