import { ImageBackground, StyleSheet, View } from "react-native";

import React from "react";

const DEFAULT_OVERLAY_COLOR = "rgba(0, 0, 0, 0.45)";

export const ImageOverlay = (props) => {
  const { style, children, ...imageBackgroundProps } = props;
  const { overlayColor, ...imageBackgroundStyle } = StyleSheet.flatten(style);

  return (
    <ImageBackground {...imageBackgroundProps} style={imageBackgroundStyle}>
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: overlayColor || DEFAULT_OVERLAY_COLOR },
        ]}
      />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: DEFAULT_OVERLAY_COLOR,
    ...StyleSheet.absoluteFillObject,
  },
});
