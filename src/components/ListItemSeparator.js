import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../assets/theme/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grey,
  },
});

export default ListItemSeparator;
