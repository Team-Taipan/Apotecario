import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import { Checkbox } from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { styles } from './_index.styles';
import { InputText } from '../../components/InputText';
import { useRouter } from 'expo-router';
import { InputPassword } from '../../components/InputPassword';
import Toast from 'react-native-toast-message';
import { authStorage } from '../../services/authStorage';
import { useAuth } from '../../contexts/AuthContext';
import api from '../../services/api';

export default function LoginScreen() {
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
    // Validar se os campos estão vazios antes de qualquer coisa
    if (!email || !senha) {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Preencha todos os campos para continuar.',
        position: 'bottom',
      });
      return;
    }

    // Iniciar feedback de carregamento
    setLoading(true);

    try {
      // Chamada de API para autenticação
      const response = await api.post('/usuario/login', {
        email: email,
        senha: senha,
      });

      // Recebe o token de acesso do backend
      const { accessToken, exibirIntroducao } = response.data;

      console.log("Token recebido:", accessToken);

      // Se o usuário marcou "Lembrar-me", salvamos no dispositivo
      if (isChecked) {
        await authStorage.saveToken(accessToken);
      }

      // Atualiza o estado global e injeta o header no Axios
      await signIn(accessToken);

      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Bem-vindo ao Apotecário!',
        position: 'bottom',
      });

      // Usamos replace para o usuário não voltar para o login pelo botão físico do Android
      if (exibirIntroducao) {
        router.replace('/perfil'); // Se for o primeiro login criamos um perfil para o usuário, mandando ele direto para a tela de perfil -- fazer a lógica de como vai funcionar isso
      } else {
        router.replace('/main'); // Se já for usuário antigo
      }

    } catch (error: any) {
      // Tratamento de Erro (E-mail ou senha errados, servidor offline, etc)
      console.error("Erro ao logar:", error.response?.data || error.message);

      Toast.show({
        type: 'error',
        text1: 'Falha no acesso',
        text2: error.response?.data?.message || 'Verifique sua conexão ou dados informados.',
        position: 'bottom',
      });
    } finally {
      // Finalizar o carregamento independentemente do resultado
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