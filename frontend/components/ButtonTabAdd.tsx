import { TouchableOpacity, StyleSheet,View } from "react-native";
import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import Colors from "@/constants/Colors";

// children é o icone que ele recebe do TabsBarIcon
const ButtonTabAdd : React.FC<BottomTabBarButtonProps> = ({ children, onPress }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9} 
    >
      <View style={styles.button}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default ButtonTabAdd;
