import React from "react";
import { View, Text } from "react-sketchapp";
import { loadLocalItem } from "../utils/fetchData";
import { CommentScreen as styles } from "../styles";
import CommentRow from "../components/CommentRow";
import { Comment as Header } from "../components/Headers";

export default props => {
  const item = props.data || loadLocalItem(props.item);

  let list = [];
  if (item.kids && item.kids.length > 0) {
    item.kids.forEach((id, idx) => {
      list.push(<CommentRow key={idx} id={id} open={true} />);
    });
  }
  return (
    <View style={styles.container}>
      <Header />
      {list}
    </View>
  );
};
