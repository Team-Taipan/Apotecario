import React, { useState, useEffect } from 'react';
import { BlurView } from 'expo-blur';
import { Checkbox } from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { styles } from './_index.styles';
import { InputText } from '../../components/InputText';
import { useRouter } from 'expo-router';
import { InputPassword } from '../../components/InputPassword';
import Toast from 'react-native-toast-message';
import { authStorage } from '../../services/authStorage'; //Serviço de armazenamento seguro para salvar o token
import { useAuth } from '../../contexts/AuthContext'; // Hook de autenticação para função de login do contexto
import { authService } from '../../services/authService'; // Serviço de autenticação chamada de login

export default function LoginScreen() {
  
  {/* Este useEffect é apenas para desenvolvimento, para garantir que o estado de autenticação esteja limpo para testar o fluxo de login e registro do zero. Ele chama a função signOut do contexto de autenticação, que limpa o token armazenado e define o usuário como null.

  const { signOut } = useAuth();
  // Dentro do LoginScreen()
  useEffect(() => {
    const resetAuth = async () => {
      // Isso vai limpar o token do SecureStore e colocar o user como null
      await signOut();
    };
    //resetAuth(); // Descomente esta linha, salve, espere o app recarregar e comente de novo.
  }, []);
  {*/}

  // Hook de navegação do Expo Router
  const router = useRouter();
  const { signIn } = useAuth(); // Importa a função de login do contexto de autenticação

  // Estado para o checkbox "Lembrar-me"
  const [isChecked, setChecked] = useState(false);

  // Estados para os dados de input
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Estado para controlar o carregamento (feedback visual)
  const [loading, setLoading] = useState(false);

  // Chamada de API
  const handleLogin = async () => {
    if (!email || !senha) {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Preencha todos os campos para continuar.',
        position: 'bottom',
      });
      return;
    }

    setLoading(true);

    try {
      // Chama a service e pega os dados desestruturados
      const { accessToken, exibirIntroducao } = await authService.login(email, senha);

      console.log("Token recebido:", accessToken);

      // Valida se o lembrar-me está marcado e salva o token
      if (isChecked) {
        await authStorage.saveToken(accessToken);
      }

      // Atualiza o estado global (Contexto)
      // Passamos apenas o token conforme definido no AuthContext
      await signIn(accessToken);

      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Bem-vindo ao Apotecário!',
        position: 'bottom',
      });

      // Decisão de Navegação Única
      // replace impede que o usuário volte ao login pelo botão "voltar" do sistema
      const rotaDestino = exibirIntroducao ? '/perfil' : '/(main)';
      router.replace(rotaDestino);

    } catch (error: any) {
      console.error("Erro ao logar:", error.response?.data || error.message);

      Toast.show({
        type: 'error',
        text1: 'Falha no acesso',
        text2: error.response?.data?.message || 'Verifique sua conexão ou dados informados.',
        position: 'bottom',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/login-image.png')}
        style={styles.backgroundImage}
      />

      <BlurView intensity={80}
        tint="light" experimentalBlurMethod="dimezisBlurView" style={styles.loginSheet}>
        <View style={styles.content}>
          <Text style={styles.title}>Apotecário, sempre cuidando de você!</Text>
          <Text style={styles.subtitle}>Entre utilizando seu email e senha.</Text>

          {/* Inputs */}
          <InputText
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail} // Conecta ao estado
            autoCapitalize="none" // Evita capitalização automática para e-mails, como letras maiúsculas automaticamente
          />
          <InputPassword
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
          />

          {/* Links Auxiliares */}
          <View style={styles.linkRow}>
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text style={styles.linkText}>Lembrar-me</Text>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Perdeu a senha?</Text>
            </TouchableOpacity>
          </View>

          {/* Botão com Gradiente */}
          <TouchableOpacity
            style={{ width: '100%' }}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#3da696', '#2d7a6e']}
              style={[styles.button, loading && { opacity: 0.7 }]}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Entrar</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem uma Conta?</Text>
          <TouchableOpacity onPress={() => router.push('/registro')}
            activeOpacity={0.7} // Dá um feedback visual melhor ao clicar
          >
            <Text style={styles.footerLink}>Registre-se.</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </View>
  );
}