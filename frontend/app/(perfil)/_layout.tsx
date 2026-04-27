import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{
      headerShown: true,
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#2d7a6e26', // Cor aproximada da tela no olhometro
      },
      headerShadowVisible: false, // Remove a linha/sombra embaixo
      headerTintColor: Colors.primary_text, // Cor da seta e texto
      animation: 'fade',
      animationDuration: 200,
      contentStyle: {
        backgroundColor: Colors.background,
      },
    }}>

  {/* O arquivo se chama perfil.tsx, então o nome da rota é 'perfil' */ }
  < Stack.Screen name = "perfil" options = {{ title: 'Perfil' }} />

    </Stack >
  );
}