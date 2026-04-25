import { Tabs } from 'expo-router';
import Toast from 'react-native-toast-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import ButtonTabAdd from '@/components/ButtonTabAdd';
import { ModalOpcoes } from '@/components/ModalOpcoes';
import { useState } from 'react';

// Tabs é a barra inferior de navegação da nossa aplicação
export default function RootLayout() {

  // Estado do botão de adicionar registros
  const [modalVisible, setModalVisible] = useState(false);

  return (
    
    <>
      <Tabs screenOptions={{
        headerShown: false,
        animation: 'fade',
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.primary_text,

      }}>
      
        <Tabs.Screen 
          name="index" 
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        
      <Tabs.Screen 
        name="agenda" 
        options={{ 
            title: 'Agenda',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-outline" size={size} color={color} />
            ),
          }}
      /> 

      {/* Botão do meio */}
      <Tabs.Screen 
        name="post"
        options={{
          
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" size={30} color="white" />
          ),
          tabBarButton: (props) => (
              <ButtonTabAdd {...props} onPress={() => setModalVisible(true)} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // Impede a navegação padrão para a tela "post"
            e.preventDefault(); 
            // abre o modal
            setModalVisible(true);
          },
        }}
      />

      <Tabs.Screen 
        name="progresso" 
        options={{ 
            title: 'Progresso',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="progress-clock" size={size} color={color} />
            ),
         }}
      /> 
      <Tabs.Screen name="config" 
      options={{ 
          title: 'Config.',
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-settings-outline" size={size} color={color} />
            ),

        }}/> 

      </Tabs>

      <ModalOpcoes
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} />

      {/* O Toast deve ficar fora do Stack para "flutuar" sobre as telas */}
      <Toast />
    </>
  );
}