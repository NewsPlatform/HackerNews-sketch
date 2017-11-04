import React from "react";
import { View, Text } from "react-sketchapp";
import { loadLocalItem } from "../utils/fetchData";
import HTMLView from "./HTMLView";
import { CommentRow as styles } from "../styles/index";
import moment from "moment";
import Icons from "./Icons";

const CommentList = props => {
  return (
    <View>
      {props.ids.map(id => <CommentRow key={id} id={id} open={false} />)}
    </View>
  );
};

const CommentRow = props => {
  const open = props.open;
  const item = loadLocalItem(props.id);

  const _body = (
    <View style={styles.commentBody}>
      <HTMLView value={item.text} />
      {item.kids ? <CommentList ids={item.kids} /> : null}
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.disclosureRow, styles.inline]}>
          {open ? (
            <Icons.ChevronDown size={22} />
          ) : (
            <Icons.ChevronUp size={22} />
          )}

          <Text style={styles.muted}>
            {` ${moment(item.time * 1000).fromNow()} by ${item.by}`}
          </Text>
        </View>
      </View>
      {open ? _body : null}
    </View>
  );
};

export default CommentRow;
