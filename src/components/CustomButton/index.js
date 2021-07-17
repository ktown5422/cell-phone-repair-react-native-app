import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../assets/theme/colors";
import styles from "./styles";

const CustomButton = ({ title, disabled, onPress }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.wrapper}
    >
      <View>
        {title && (
          <Text
            style={{
              color: colors.white,
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
