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

      {/* O arquivo se chama index.tsx, então o nome da rota é 'index' */}
      <Stack.Screen name="index" options={{ title: 'Home' }}/> 
      </Stack>

      {/* O Toast deve ficar fora do Stack para "flutuar" sobre as telas */}
      <Toast />
    </>
  );
}