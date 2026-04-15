// app/(auth)/AuthInput.tsx
import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';

type AuthInputProps = TextInputProps & {
  containerStyle?: object;
};

export function InputText({ style, containerStyle, ...props }: AuthInputProps) {
  return (
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#999"
        {...props}
      />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
});