//O _ diz ao Expo: "Ei, isso é apenas um arquivo de suporte, não crie uma tela para ele".
import Colors from '../../constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Inter',
        paddingHorizontal: 24,
        backgroundColor: Colors.background
    },
    content: {
        flex: 1,
        marginBottom: 40
    },
    backButton: {
        marginBottom: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontFamily: 'Inter', // Nome da sua fonte carregada (?)
        fontWeight: '700',
        color: Colors.primary_text,
        paddingBottom: 16,
    },
    disclame: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: '500',
        color: Colors.secondary_text,
        textAlign: 'justify',
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
    inputContainer: {
        marginBottom: 24,
    },
    avatarButton: {
        marginBottom: 16
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: "contain",
        justifyContent: "center",
        alignSelf: "center",
    },
    editIconBadge: {
        position: 'absolute',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        backgroundColor: Colors.accent,
        borderRadius: 15,
        padding: 5,
        borderWidth: 2,
        borderColor: '#fff',
    },
    // Estilo para o modal de seleção de avatar
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '50%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary_text,
    },

})