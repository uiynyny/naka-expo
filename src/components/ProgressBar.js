import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

const element=5;

const ProgressBar = (props) => {
  const { progress, element } = props
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseRow}>
        {[...Array(element)].map((v, i) => (
          <Svg viewBox="0 0 12 12" style={styles.ellipse} key={i}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill={progress > i ? "rgb(74,144,226)" : "rgba(230, 230, 230,1)"}
              cx={6}
              cy={6}
              rx={6}
              ry={6}
            ></Ellipse>
          </Svg>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ellipse: {
    width: 11,
    height: 11,
    marginHorizontal: 14,
  },
  ellipseRow: {
    margin: 5,
    flexDirection: "row",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ProgressBar;
