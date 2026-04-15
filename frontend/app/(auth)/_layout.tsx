import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* O arquivo se chama index.tsx, então o nome da rota é 'index' */}
      <Stack.Screen name="index" /> 
      
      {/* O arquivo se chama registro.tsx, então o nome da rota é 'registro' */}
      <Stack.Screen name="registro" />
    </Stack>
  );
}