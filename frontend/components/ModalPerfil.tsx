import { Modal, TouchableOpacity, View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import ListaAvatares from "./ListaAvatares";
import Colors from "@/constants/Colors";

interface ModalPerfilsProps {
    modalVisible: boolean,
    closeModal: () => void,
    // isso sera repassado para o componente de lista
    AVATARES: {id: string, res: ImageSourcePropType}[],
    avatarSelecionado: {id: string, res: ImageSourcePropType}
    onSelectAvatar: (item: {id: string, res: ImageSourcePropType}) => void    
}

export default function ModalPerfil( {modalVisible, closeModal,  AVATARES, avatarSelecionado, onSelectAvatar} : ModalPerfilsProps) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            {/* Fundo com efeito de blur */}
            <BlurView
                intensity={40}
                tint="dark"
                experimentalBlurMethod="dimezisBlurView"
                style={styles.modalOverlay}
            >
                {/* TouchableOpacity vazio aqui serve para fechar ao clicar fora */}
                <TouchableOpacity
                    style={{ flex: 1, width: '100%' }}
                    activeOpacity={1}
                    onPress={closeModal}
                >
                </TouchableOpacity>
            
                <View style={styles.modalContent}>

                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Escolha seu Avatar</Text>

                        <TouchableOpacity onPress={closeModal}>
                            <Ionicons name="close" size={24} color={Colors.primary_text} />
                        </TouchableOpacity>

                    </View>
        
                    {/* Lista de Avatares em Grid, usando o FlatList, para fazer a exibição em grade */}
                    <ListaAvatares AVATARES={AVATARES} avatarSelecionado={avatarSelecionado} onSelectAvatar={onSelectAvatar} />
            
                </View>

            </BlurView>
        </Modal>
    )
}

const styles = StyleSheet.create({

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