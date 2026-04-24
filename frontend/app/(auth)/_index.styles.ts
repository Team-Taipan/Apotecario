import Colors from '../../constants/Colors';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Inter'
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  loginSheet: {
    flex: 1,
    marginTop: height * 0.3, // Onde a "folha" de login começa a subir
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    overflow: 'hidden', // Garante que o blur respeite os cantos arredondados
    paddingHorizontal: 24,
    justifyContent: 'space-between', 
    paddingBottom: 20, // Espaço para o conteúdo não ficar colado no final da tela - Footer 
    // Sombra para o efeito de profundidade, bem sútil
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
  },
  content: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  title: {
    color: Colors.primary_text,
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 10,
  },
  subtitle: {
    color: Colors.secondary_text,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  linkText: {
    flex: 1,
    color: Colors.secondary_text,
    fontSize: 12,
    marginLeft: 8,
  },
  forgotPassword: {
    color: Colors.accent,
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
     height: 52,
     borderRadius: 12,
     justifyContent: 'center',
     alignItems: 'center',
   },
   buttonText: {
     color: Colors.background_text_input,
     fontSize: 16,
     fontFamily: 'Inter',
     fontWeight: 'bold',
   },
  footer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
  },
  footerText: {
    color: Colors.secondary_text,
    fontSize: 12,
    fontFamily: 'Inter'
  },
  footerLink: {
    color: Colors.accent,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
  },
});