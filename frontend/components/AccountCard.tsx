import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface AccountCardProps {
  name: string;
  email: string;
  onEditPress?: () => void;
}

export const AccountCard: React.FC<AccountCardProps> = ({ name, email, onEditPress }) => {
  return (
    <View style={styles.container}>
      {/* Avatar com círculos */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarInner}>
          <Ionicons name="person" size={32} color="#FFFFFF" opacity={0.7} />
        </View>
      </View>

      {/* Informações do Usuário */}
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>

      {/* Botão Editar */}
      <TouchableOpacity 
        style={styles.editButton} 
        onPress={onEditPress}
        activeOpacity={0.8}
      >
        <Text style={styles.editButtonText}>Editar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.accent,
    borderRadius: 24,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    //marginHorizontal: 2, enable para sombra nas laterias do card
    marginBottom: 5,
    marginTop: 16,
    // Sombra para dar profundidade
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatarWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  emailText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  editButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});