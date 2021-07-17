import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
