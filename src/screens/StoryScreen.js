import React from "react";
import { View, Text } from "react-sketchapp";
import { loadLocalStory } from "../utils/fetchData";
import { StoryScreen as styles } from "../styles";
import { Story as Header } from "../components/Headers";
import TabBar from "../components/TabBar";
import StoryRow from "../components/StoryRow";

export default props => {
  const stories = props.data || loadLocalStory(props.story);

  let list = [];
  stories.forEach((row, idx) => {
    list.push(<StoryRow key={idx} id={row} />);
  });

  return (
    <View style={styles.container}>
      <Header />
      <TabBar story={props.story} />
      {list}
    </View>
  );
};
