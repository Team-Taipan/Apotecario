import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface ConfigCardProps {
  children: React.ReactNode;
  style?: ViewStyle; // Permite passar estilos extras se necessário
}

export const ConfigCard: React.FC<ConfigCardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>; 
  // Permite colocar qualquer conteúdo dentro do card
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
    //marginHorizontal: 2, enable para sombra nas laterias do card
    marginBottom: 20,
    // Sombras
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});