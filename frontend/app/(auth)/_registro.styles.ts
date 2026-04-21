//O _ diz ao Expo: "Ei, isso é apenas um arquivo de suporte, não crie uma tela para ele".
import Colors from '../../constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  registroSheet: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between', 
    paddingBottom: 20, // Espaço para o conteúdo não ficar colado no final da tela - Footer 
  },
  content: {
    flex: 1,
    paddingTop: 30,
  },
  headline: {
    marginBottom: 40,
  },
  backButton: {
    marginBottom: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  textGroup: {
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter', // Nome da sua fonte carregada
    fontWeight: '700',
    color: Colors.primary_text,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
    color: Colors.secondary_text,
  },
  inputContainer: {
    gap: 16,
    marginBottom: 32,
  },
  field: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    height: 58,
    backgroundColor: Colors.background_text_input,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.primary_text,
    fontFamily: 'Inter',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background_text_input,
    borderRadius: 12,
  },
  eyeIcon: {
    paddingRight: 16,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 24,
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
    justifyContent: 'center'
  },
  footerText: {
    color: Colors.secondary_text,
    fontSize: 12,
    fontFamily: 'Inter'
  },
  footerLink: {
    color: Colors.accent,
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
});