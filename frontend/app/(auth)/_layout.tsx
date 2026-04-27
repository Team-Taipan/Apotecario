import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ 
      headerShown: false,
      animation: 'fade',
      animationDuration: 200,
      contentStyle: { backgroundColor: '#fff' }
    }}>
      {/* O arquivo se chama index.tsx, então o nome da rota é 'index' */}
      <Stack.Screen name="index" options={{ title: 'Login' }}/> 
      
       {/* O arquivo se chama registro.tsx, então o nome da rota é 'registro' */}
      <Stack.Screen name="registro" options={{ title: 'Registro' }}/>
      
       {/* O arquivo se chama perfil.tsx, então o nome da rota é 'perfil' */}
      <Stack.Screen name="perfil" options={{ title: 'Perfil' }}/>
      
    </Stack>
  );
}