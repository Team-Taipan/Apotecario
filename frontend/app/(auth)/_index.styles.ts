import Colors from '../../constants/Colors';
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  loginSheet: {
    flex: 1,
    marginTop: height * 0.3, // Onde a "folha" de login começa a subir
    backgroundColor: 'rgb(230, 242, 240, 0.7)', // Fundo branco com transparência para o efeito de blur
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    overflow: 'hidden', // Garante que o blur respeite os cantos arredondados
    paddingHorizontal: 24,

    // Sombra para o efeito de profundidade >> bem sútil para
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 15,
  },
  content: {
    marginTop: 40,
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
    color: Colors.secondary_text,
    fontSize: 12,
  },
  forgotPassword: {
    color: Colors.accent,
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    color: '#f5f6f7',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  footerText: {
    color: Colors.secondary_text,
    fontSize: 13,
  },
  footerLink: {
    color: Colors.accent,
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 5,
  },
});