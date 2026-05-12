import { Modal, TouchableOpacity, View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons, Octicons } from "@expo/vector-icons";
import ListaAvatares from "./ListaAvatares";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

type Avatar = { id: string; res: ImageSourcePropType; name: string };

interface ModalPerfilsProps {
    modalVisible: boolean;
    closeModal: () => void;
    // isso sera repassado para o componente de lista
    AVATARES: Avatar[];
    avatarSelecionado: Avatar;
    onSelectAvatar: (item: Avatar) => void;
    showNames?: boolean;
    showFooter?: boolean;     
}

export default function ModalPerfil( {modalVisible, closeModal,  AVATARES, avatarSelecionado, onSelectAvatar, showNames, showFooter} : ModalPerfilsProps) {
    const router = useRouter();
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
                    <ListaAvatares                        
                        AVATARES={AVATARES}
                        avatarSelecionado={avatarSelecionado}
                        onSelectAvatar={onSelectAvatar}
                        showNames={showNames} />
            
                    {showFooter && (
                        <TouchableOpacity
                            style={styles.footerTitle}
                            onPress={() => {
                                closeModal();
                                router.push('/(perfil)/perfil');
                            }}
                        >
                            <Octicons name="pencil" size={24} color={Colors.primary_text} />
                            <Text style={styles.footerText}>Gerenciar Perfil</Text>
                        </TouchableOpacity>
                    )}

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
    footerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        gap: 10,
    },
    footerText: {
        fontWeight: '700',
        color: Colors.primary_text,
        fontSize: 15,
    },    
})