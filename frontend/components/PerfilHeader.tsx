import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usePerfilStore } from "@/store/perfilStore";
import { useState } from "react";
import Colors from "@/constants/Colors";
import ModalPerfil from "@/components/ModalPerfil";

export default function PerfilHeader() {

    const { AVATARES, avatarSelecionado, setAvatarSelecionado } = usePerfilStore();
    // Estados
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.profileHeader}>
            <Image
                source={avatarSelecionado.res}
                style={styles.image}
            />

            <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => {
                    setModalVisible(true);  // Abre o modal
                }}
            >
                <Text style={styles.title}>
                    Olá, <Text style={styles.userName}>{avatarSelecionado.name}</Text>
                </Text>

                <MaterialCommunityIcons name="chevron-down" size={30} color={Colors.accent} />

            </TouchableOpacity>

        <ModalPerfil
            modalVisible={modalVisible}
            closeModal={() => setModalVisible(false)}
            AVATARES={AVATARES}
            avatarSelecionado={avatarSelecionado}
            onSelectAvatar={(item) => {
                setAvatarSelecionado(item);
                setModalVisible(false);
            }}
            showNames
            showFooter
        />            
        </View>
    )
}

const styles = StyleSheet.create({
   // Sessão Perfil Header
    profileHeader: {
        flexDirection: "row",
        marginTop: 40,
        gap: 5
    },

    image: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        marginRight: 4
    },

    title: {
        fontSize: 25,
        fontFamily: 'Inter',
        fontWeight: '600'
    },

    userName: {
        color: Colors.accent,
        fontFamily: 'Inter',
        fontWeight: '800'
    },    
})