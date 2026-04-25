import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { ModalItem } from "./ModalItem";

// Definindo o que o componente deve receber
interface ModalOpcoesProps {
  visible: boolean;
  onClose: () => void;
}

export function ModalOpcoes({ visible, onClose }: ModalOpcoesProps) {
    return (
        
        <Modal 
            transparent={true}
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableOpacity 
                style={styles.overlay} 
                activeOpacity={1} 
                onPress={onClose}
            >
            
                <View style={styles.modalContainer}> 
                    {/* Sessão com os itens do modal*/}
                    <ModalItem 
                        iconName="calendar" 
                        title={"Adicionar uma consulta médica"} 
                        subTitle={"Registre suas consultas médicas para não perder mais nenhum encontro com sua saúde"} 
                    />

                    <ModalItem 
                        iconName="pill" 
                        title={"Adicionar um Medicamento"} 
                        subTitle={"Registre suas medicamentos ao seu tratamento e não perca mais nenhuma dose"} 
                    />

                    <ModalItem 
                        iconName="emoticon-sick-outline" 
                        title={"Adicionar uma consulta médica"} 
                        subTitle={"Registre seus sintomas para ajudar seu médico no seu diagnóstico"} 
                    />

                    <ModalItem 
                        iconName="heart-pulse" 
                        title={"Adicionar uma nova medição"} 
                        subTitle={"Registre suas medições vitais para  medir a sua saúde conforme o tempo"} 
                    />
                    
                </View> 
            </TouchableOpacity>
        </Modal>
        
    )
}

const styles = StyleSheet.create({

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)', // Fundo escurecido
        justifyContent: 'flex-end',
    },

    modalContainer: {
        
        width: '100%',
        alignItems: 'center',
        height: '45%',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "#f5f6f7"
    
    },

})