import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ImageSourcePropType, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./_perfil.styles";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { InputText } from '../../components/InputText';
import { Ionicons } from '@expo/vector-icons';
import RoleDropdown from "@/components/RoleDropdown";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from '@react-navigation/elements';
import ModalPerfil from "@/components/ModalPerfil";


// Lista de Avatares (Manter fora do componente para não recriar na memória)
const AVATARES = [
    { id: '1', res: require("@assets/avatars/brekibedi.png"), name: 'Avatar 1' },
    { id: '2', res: require("@assets/avatars/afro.png"), name: 'Avatar 2' },
    { id: '3', res: require("@assets/avatars/dorock.png"), name: 'Avatar 3' },
    { id: '4', res: require("@assets/avatars/habibi.png"), name: 'Avatar 4' },
];

const ROLES = [
    { id: 'Admin', name: 'Administrador' },
    { id: 'Cuidador', name: 'Cuidador' },
    { id: 'Convidado', name: 'Convidado' }
];

export default function PerfilScreen() {
    const router = useRouter();
    const headerHeight = useHeaderHeight();

    // Estados
    const [modalVisible, setModalVisible] = useState(false);

    const [avatarSelecionado, setAvatarSelecionado] = useState(AVATARES[0]); // Começa com o primeiro
    const [nome, setNome] = useState('');
    const [parentesco, setParentesco] = useState('');

    // Estado para controlar o carregamento (feedback visual)
    const [loading, setLoading] = useState(false);



    // função para selecionar o avatar
    const selectAvatar = (item: { id: string, res: ImageSourcePropType, name: string }) => {

        setAvatarSelecionado(item);
        setModalVisible(false);

    };

    // função para chamar o modal
    const closeModal = () => {
        setModalVisible(false);
    }


    return (
        <SafeAreaView edges={['left', 'right']} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor: Colors.background }}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View>
                            <Text style={styles.title}>Gerencie seu Perfil!</Text>

                            <View style={styles.inputContainer}>
                                {/* Imagem que abre o Modal ao ser clicada */}
                                <TouchableOpacity
                                    onPress={() => setModalVisible(true)}
                                    activeOpacity={0.7}
                                    style={styles.avatarButton}
                                >
                                    <Image
                                        source={avatarSelecionado.res}
                                        style={styles.image}
                                    />
                                    <View style={styles.editIconBadge}>
                                        <Ionicons name="camera" size={18} color="#fff" />
                                    </View>
                                </TouchableOpacity>

                                <View>
                                    <InputText
                                        placeholder="Nome Completo"
                                        value={nome}
                                        onChangeText={setNome}
                                        autoCapitalize="words"
                                    />
                                </View>

                                <View>
                                    <InputText
                                        placeholder="Parentesco: 'Pai', 'Mãe', 'Cônjuge', etc."
                                        value={parentesco}
                                        onChangeText={setParentesco}
                                        autoCapitalize="words"
                                    />
                                </View>

                                <Text style={styles.disclame}>
                                    Ao clicar em confirmar, toda a alteração feita será salva.
                                </Text>

                            </View>

                            <TouchableOpacity style={{ width: '100%' }} activeOpacity={0.8} disabled={loading}>
                                <LinearGradient
                                    colors={['#3da696', '#2d7a6e']}
                                    style={[styles.button, loading && { opacity: 0.7 }]}
                                >
                                    {loading ? (
                                        <ActivityIndicator color="#fff" />
                                    ) : (
                                        <Text style={styles.buttonText}>Confirmar</Text>
                                    )}
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Estrutura do Modal de Seleção */}
                    <ModalPerfil modalVisible={modalVisible} closeModal={closeModal} AVATARES={AVATARES} avatarSelecionado={avatarSelecionado} onSelectAvatar={selectAvatar} />

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}