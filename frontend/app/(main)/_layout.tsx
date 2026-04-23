import { Tabs } from 'expo-router';
import Toast from 'react-native-toast-message';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Tabs é a barra inferior de navegação da nossa aplicação
export default function RootLayout() {
  return (
    <>
      <Tabs screenOptions={{
        headerShown: false,
        animation: 'fade',
        tabBarActiveTintColor: '#2D7A6E',
        tabBarInactiveTintColor: '#2B3A32',
        
      }}>
      
        <Tabs.Screen 
          name="main" 
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        


      <Tabs.Screen 
        name="agenda" 
        options={{ 
            title: 'Agenda',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar" size={size} color={color} />
            ),
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
              <MaterialCommunityIcons name="account-settings" size={size} color={color} />
            ),

        }}/> 

      </Tabs>

      {/* O Toast deve ficar fora do Stack para "flutuar" sobre as telas */}
      <Toast />
    </>
  );
}