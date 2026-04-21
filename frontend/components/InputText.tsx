import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View, ViewStyle, StyleProp } from 'react-native';
import Colors from '../constants/Colors';

type AuthInputProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>; // Melhor tipagem para estilos de View
};

export function InputText({ containerStyle, style, ...props }: AuthInputProps) {
  return (
    <View style={[styles.field, containerStyle]}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#999"
        {...props} // Passa value, onChangeText, etc.
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    width: '100%',
    backgroundColor: Colors.background_text_input,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 58,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.primary_text,
  }
});