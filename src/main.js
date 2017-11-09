import React from "react";
import { render, View, Text, Artboard, Page, Document } from "react-sketchapp";

import { loadLocalStory } from "./utils/fetchData";
import StoryScreen from "./screens/StoryScreen";
import PageScreen from "./screens/PageScreen";
import CommentScreen from "./screens/CommentScreen";

const WIDTH = 375;
const HEIGHT = 667;
const SPACE = 20;

const getStyle = (x = 1, y = 1) => {
  return {
    position: "absolute",
    width: WIDTH,
    height: HEIGHT,
    left: x >= 2 ? (WIDTH + SPACE) * (x - 1) : 0,
    top: y >= 2 ? (HEIGHT + SPACE) * (y - 1) : 0
  };
};

export default context => {
  const data_news = loadLocalStory("NEWS");
  const data_best = loadLocalStory("BEST");

  render(
    <Document>
      <Page name="NEWS">
        <Artboard name="NEWS" style={getStyle(1, 1)}>
          <StoryScreen story={"NEWS"} data={data_news} />
        </Artboard>
        <Artboard name="Web Page" style={getStyle(2, 1)}>
          <PageScreen item={data_news[0]} />
        </Artboard>

        <Artboard name="BEST" style={getStyle(1, 2)}>
          <StoryScreen story={"BEST"} data={data_best} />
        </Artboard>

        <Artboard name="Comment" style={getStyle(2, 2)}>
          <CommentScreen item={data_best[3]} />
        </Artboard>
      </Page>
    </Document>
  );
};
