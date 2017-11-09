import { StyleSheet } from "react-sketchapp";
import fonts from "./fonts";

export const StoryScreen = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"
  }
});

export const CommentScreen = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"
  }
});

export const PageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  webview: {
    flex: 1,
    /* 디자인을 위한 스타일이므로, 개발할 때는 삭제 할 것!*/
    backgroundColor: "#F1F4FB",
    justifyContent: "center",
    alignItems: "center"
  }
});

export const StoryRow = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.Bold
  },
  descWrap: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  writerWrap: {
    flexDirection: "row"
  },
  by: {
    fontSize: 15,
    fontFamily: fonts.Light,
    color: "#616161"
  },
  comment: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: "#616161"
  }
});

export const CommentRow = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  inline: {
    flexDirection: "row"
  },
  descWrap: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  writerWrap: {
    flexDirection: "row"
  },
  by: {
    fontSize: 15,
    fontFamily: fonts.Regular
  },
  comment: {
    fontSize: 16,
    fontFamily: fonts.Regular
  }
});

export const Header = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 8
  },
  text: {
    paddingLeft: 8,
    color: "#000000",
    fontFamily: fonts.Regular,
    fontSize: 22,
    top: 2
  }
});

export const HTMLView = StyleSheet.create({
  container: {
    flex: 1
  }
});
