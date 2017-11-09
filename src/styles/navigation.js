import fonts from "./fonts";

// [react-navigation] Tab Navigation - tabBarOptions
// https://goo.gl/eawcVg
// This style setting can only be used when developing, as long as it is created according to the document for react-navigation.
export const tabBarOptions = {
  scrollEnabled: true, // Whether to enable scrollable tabs.
  activeTintColor: "#212121", //  Label and icon color of the active tab.
  inactiveTintColor: "#bdbdbd", //  Label and icon color of the inactive tab.
  //indicatorStyle: { backgroundColor: "#0686E4" }, // Style object for the tab indicator (line at the bottom of the tab).

  style: {
    // Style object for the tab bar.
    backgroundColor: "#FFFFFF"
  },
  tabStyle: {
    // Style object for the tab.
    width: 80,
    height: 40
  },
  labelStyle: {
    // Style object for the tab label.
    fontFamily: fonts.Regular,
    fontSize: 14
  }
};
