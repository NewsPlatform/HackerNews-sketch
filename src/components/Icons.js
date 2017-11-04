import React from "react";
import { Image } from "react-sketchapp";

const ChevronDown = ({ color, size = 28, strokeWidth }) => (
  <Image
    style={{
      width: size,
      height: size
    }}
    source={"http://localhost:9000/icons/chevronDown.png"}
  />
);

const ChevronUp = ({ color, size = 28, strokeWidth }) => (
  <Image
    style={{
      width: size,
      height: size
    }}
    source={"http://localhost:9000/icons/chevronUp.png"}
  />
);

const Ycombinator = ({ color, size = 28, strokeWidth }) => (
  <Image
    style={{
      width: size,
      height: size
    }}
    source={"http://localhost:9000/icons/ycombinator.png"}
  />
);

export default {
  ChevronDown,
  ChevronUp,
  Ycombinator
};
