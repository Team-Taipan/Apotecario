import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './_index.styles';
import { InputText } from '../../components/InputText';

export default function LoginScreen() {
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
              />
              <InputText
                placeholder="Senha"
                secureTextEntry
              />

              {/* Links Auxiliares */}
              <View style={styles.linkRow}>
                <TouchableOpacity><Text style={styles.linkText}>Lembrar-me</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.forgotPassword}>Perdeu a senha?</Text></TouchableOpacity>
              </View>

              {/* Botão com Gradiente */}
              <TouchableOpacity style={{ width: '100%' }}>
                <LinearGradient
                  colors={['#3da696', '#2d7a6e']}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Entrar</Text>
                </LinearGradient>
              </TouchableOpacity>

              {/* Footer */}
              <View style={styles.footer}>
                <Text style={styles.footerText}>Não tem uma Conta?</Text>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Registre-se.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
      </View>
  );
}