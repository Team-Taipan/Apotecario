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

export default function LoginScreen() {
  // Hook de navegação do Expo Router
  const router = useRouter();

  // Estado para o checkbox "Lembrar-me"
  const [isChecked, setChecked] = useState(false);

  // Estados para os dados de input para a validação
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Estado para controlar o carregamento (feedback visual)
  const [loading, setLoading] = useState(false);

  // Funções de Validação
  const handleLogin = () => {
    // Validar se os campos estão vazios
    if (!email || !senha) {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Preencha todos os campos para continuar.',
        position: 'bottom',
        bottomOffset: 40,    // Distância do final da tela
        visibilityTime: 3000,
      });
      return;
    }

    // Simulação de envio para o Back-end
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("Login realizado:");
      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Login realizado com sucesso!',
        position: 'bottom',
        bottomOffset: 40,    // Distância do final da tela
        visibilityTime: 3000,
      });
      // Após o sucesso,replace para ir para a tela principal (home) e evitar que o usuário volte para o login com o botão de voltar do dispositivo
      // router.replace('/home'); 
    }, 2000);
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