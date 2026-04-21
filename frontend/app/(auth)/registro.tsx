import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './_registro.styles';
import { useRouter } from 'expo-router';
import { InputText } from '../../components/InputText';
import { InputPassword } from '../../components/InputPassword';
import Toast from 'react-native-toast-message';

export default function RegistroScreen() {
  // Hook de navegação do Expo Router
  const router = useRouter();

  // Estados para os dados de input para a validação
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Estado para controlar o carregamento (feedback visual)
  const [loading, setLoading] = useState(false);

  // Funções de Validação
  const handleRegistro = () => {
    // Validar se os campos estão vazios
    if (!email || !senha || !confirmarSenha) {
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

    // Validar formato de e-mail (Regex simples)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Por favor, insira um e-mail válido.',
        position: 'bottom',
        bottomOffset: 40,    // Distância do final da tela
        visibilityTime: 3000,
      });
      return;
    }

    // Validar se as senhas coincidem
    if (senha !== confirmarSenha) {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'As senhas não coincidem ',
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
      console.log("Dados enviados:", { email, senha });
      Toast.show({
        type: 'success',
        text1: 'Sucesso!',
        text2: 'Conta criada com sucesso!',
        position: 'bottom',
        bottomOffset: 40,    // Distância do final da tela
        visibilityTime: 3000,
      });
      // Após o sucesso,replace para ir ao app principal ou login
      // router.replace('/home'); 
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Imagem de Fundo */}
      <Image
        source={require('../../assets/login-image.png')}
        style={styles.backgroundImage}
      />

      <BlurView intensity={80}
        tint="light" experimentalBlurMethod="dimezisBlurView" style={styles.registroSheet}>
        <View style={styles.content}>

          {/* Headline com Botão Voltar */}
          <View style={styles.headline}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#2b3a32" />
            </TouchableOpacity>

            <View style={styles.textGroup}>
              <Text style={styles.title}>Registre-se.</Text>
              <Text style={styles.subtitle}>Crie uma nova conta para continuar!</Text>
            </View>
          </View>

          {/* Campos de Input */}
          <View style={styles.inputContainer}>
            <View style={styles.field}>
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
              <InputPassword
                placeholder="Confirmar Senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            </View>

            {/* Botão Registrar */}
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={handleRegistro}
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
                  <Text style={styles.buttonText}>Registrar-se</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma Conta? </Text>
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.7} // Dá um feedback visual melhor ao clicar
            >
              <Text style={styles.footerLink}>Faça login!</Text>
            </TouchableOpacity>
          </View>
      </BlurView>
    </View>
  );
}