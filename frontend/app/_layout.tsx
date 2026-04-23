import { Stack, useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { AuthProvider, useAuth } from '../contexts/AuthContext';

export default function RootLayout() {
  return (
    /* O Provider deve envolver tudo. 
      Isso garante que useAuth() funcione em qualquer lugar abaixo dele, incluindo o LayoutContent que é responsável por decidir para onde o usuário vai (Login ou Home) assim que o app abre.
    */
    <AuthProvider>
      <LayoutContent />
      {/* O Toast fica aqui para aparecer sobre qualquer tela */}
      <Toast />
    </AuthProvider>
  );
}

/**
 * Criamos este componente interno para podermos usar o hook useAuth().
 * Não podemos usar useAuth() diretamente no RootLayout porque ele está
 * no mesmo nível do AuthProvider (precisa estar "dentro").
 */
function LayoutContent() {
  const { signed, loading } = useAuth();
  const router = useRouter();

  // Lógica de Redirecionamento Automático
  useEffect(() => {
    // Se ainda está lendo o token do SecureStore, não fazemos nada
    if (loading) return;

    if (signed) {
      // Se está logado, vai para a área principal
      // O 'replace' impede que o usuário volte para o login pelo botão 'Voltar'
      router.replace('/(main)');
    } else {
      // Se não está logado, força a ida para a tela de autenticação
      router.replace('/(auth)');
    }
  }, [signed, loading]);

  // Feedback visual enquanto o App verifica o login
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#3da696" />
      </View>
    );
  }

  // Estrutura de Navegação
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 200,
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      {/* As pastas (auth) e (main) são reconhecidas automaticamente pelo Expo Router.
         O Stack apenas gerencia como a transição entre elas acontece.
      */}
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(main)" />
    </Stack>
  );
}