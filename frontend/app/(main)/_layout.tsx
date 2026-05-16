import { Tabs } from 'expo-router';
import Toast from 'react-native-toast-message';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import Colors from '../../constants/Colors';
import ButtonTabAdd from '@/components/ButtonTabAdd';
import { ModalOpcoes } from '@/components/ModalOpcoes';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Tabs é a barra inferior de navegação da nossa aplicação
export default function RootLayout() {

  // Estado do botão de adicionar registros
  const [modalVisible, setModalVisible] = useState(false);

  // Retorna os espaços seguros da tela
  const insets = useSafeAreaInsets();

  return (

    <>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.primary_text,
        tabBarHideOnKeyboard: true, // Evita que a barra suba com o teclado
        tabBarStyle: {
          // Altura base de 80 (padrão Android moderno) + insets se houver navegação por gestos, para que o tabs não fique colado na barra
          height: insets.bottom > 0 ? 70 + insets.bottom : 80,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 15,
          paddingTop: 8,
          justifyContent: 'center',
          alignItems: 'center'
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter',
          fontSize: 12,
          fontWeight: '600',
          marginTop: 2,
        },

      }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="agenda"
          options={{
            title: 'Agenda',
            tabBarIcon: ({ color, size }) => (
              <Feather name="calendar" size={size} color={color} />
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
              <Feather name="clock" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen name="(config)/config"
          options={{
            title: 'Configurações',
            tabBarIcon: ({ color, size }) => (
              <Octicons name="gear" size={size} color={color} />
            ),

          }} />

        <Tabs.Screen
          name="chat"
          options={{
            href: null,
            headerShown: false,
          }}
        />

      </Tabs>

      {/* Renderização condicional para evitar que camadas invisíveis bloqueiem o toque */}
      {modalVisible && (
        <ModalOpcoes
          visible={modalVisible}
          onClose={() => setModalVisible(false)} />
      )}
    </>
  );
}