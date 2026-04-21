import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 200,
        contentStyle: { backgroundColor: '#fff' }
      }}>
        {/* Aqui ele vai encontrar a pasta (auth) automaticamente */}
        <Stack.Screen name="(auth)" />

        {/* Caso tenha uma tela inicial fora da pasta auth */}
        <Stack.Screen name="index" options={{ title: 'Home' }} />
      </Stack>

      {/* O Toast deve ficar fora do Stack para "flutuar" sobre as telas */}
      <Toast />
    </>
  );
}