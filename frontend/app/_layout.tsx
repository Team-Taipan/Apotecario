import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Aqui ele vai encontrar a pasta (auth) automaticamente */}
      <Stack.Screen name="(auth)" />
      
      {/* Caso tenha uma tela inicial fora da pasta auth */}
      <Stack.Screen name="index" options={{ title: 'Home' }} />
    </Stack>
  );
}