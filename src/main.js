import React from "react";
import { render, View, Text, Artboard, Page, Document } from "react-sketchapp";

import { loadLocalStory } from "./utils/fetchData";
import SplashScreen from "./screens/SplashScreen";
import StoryScreen from "./screens/StoryScreen";
import WebPageScreen from "./screens/WebPageScreen";
import CommentScreen from "./screens/CommentScreen";

const WIDTH = 375;
const HEIGHT = 667;
const SPACE = 30;

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
  const data_top = loadLocalStory("TOP");
  const data_best = loadLocalStory("BEST");
  const data_ask = loadLocalStory("ASK");
  const data_show = loadLocalStory("SHOW");

  render(
    <Document>
      <Page name="NEWS">
        <Artboard name="NEWS" style={getStyle(1, 1)}>
          <StoryScreen story={"NEWS"} data={data_news} />
        </Artboard>

        <Artboard name="TOP" style={getStyle(2, 1)}>
          <StoryScreen story={"TOP"} data={data_top} />
        </Artboard>

        <Artboard name="BEST" style={getStyle(3, 1)}>
          <StoryScreen story={"BEST"} data={data_best} />
        </Artboard>

        <Artboard name="ASK" style={getStyle(4, 1)}>
          <StoryScreen story={"ASK"} data={data_ask} />
        </Artboard>

        <Artboard name="SHOW" style={getStyle(5, 1)}>
          <StoryScreen story={"SHOW"} data={data_show} />
        </Artboard>

        <Artboard name="Splash" style={getStyle(1, 2)}>
          <SplashScreen />
        </Artboard>

        <Artboard name="Web Page" style={getStyle(2, 2)}>
          <WebPageScreen item={data_news[0]} />
        </Artboard>

        <Artboard name="Comment" style={getStyle(3, 2)}>
          <CommentScreen item={data_best[3]} />
        </Artboard>
      </Page>
    </Document>
  );
};
