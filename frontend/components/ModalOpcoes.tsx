import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ModalItem } from "./ModalItem";
import { useRouter } from "expo-router";

// Definindo o que o componente deve receber
interface ModalOpcoesProps {
  visible: boolean;
  onClose: () => void;
}


export function ModalOpcoes({ visible, onClose }: ModalOpcoesProps) {

    const router = useRouter();

    // Função para reutilizar o router.push, ela serve apenas para informar a rota que leva a opção do modal
    const routerHandler = (pathRoute: string) => {
        onClose(); // fecha o modal 
        router.push(pathRoute);
    }

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
                        functionRedirect={() => routerHandler("/register/appointment")} 
                    />

                    <ModalItem 
                        iconName="pill" 
                        title={"Adicionar um Medicamento"} 
                        subTitle={"Registre suas medicamentos ao seu tratamento e não perca mais nenhuma dose"} 
                        functionRedirect={() => routerHandler("/register/medicine")} 
                    />

                    <ModalItem 
                        iconName="emoticon-sick-outline" 
                        title={"Adicionar um registro de sintoma"} 
                        subTitle={"Registre seus sintomas para ajudar seu médico no seu diagnóstico"} 
                        functionRedirect={() => routerHandler("/register/symptoms")} 
                    />

                    <ModalItem 
                        iconName="heart-pulse" 
                        title={"Adicionar uma nova medição"} 
                        subTitle={"Registre suas medições vitais para  medir a sua saúde conforme o tempo"} 
                        functionRedirect={() => routerHandler("/register/measurements")} 
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