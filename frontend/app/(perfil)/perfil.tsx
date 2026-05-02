import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, ImageSourcePropType, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { styles } from "./_perfil.styles";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { InputText } from '../../components/InputText';
import { Ionicons } from '@expo/vector-icons';
import RoleDropdown from "@/components/RoleDropdown";
import Toast from "react-native-toast-message";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from '@react-navigation/elements';
import ListaAvatares from "@/components/ListaAvatares";

// Lista de Avatares (Manter fora do componente para não recriar na memória)
const AVATARES = [
    { id: '1', res: require("@assets/avatars/brekibedi.png") },
    { id: '2', res: require("@assets/avatars/afro.png") },
    { id: '3', res: require("@assets/avatars/dorock.png") },
    { id: '4', res: require("@assets/avatars/habibi.png") },
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

    const handleSelectRole = (roleId: string | null) => {
    }

    // função para selecionar o avatar
    const selectAvatar = (item: {id: string, res: ImageSourcePropType}) => {
        
        setAvatarSelecionado(item);
        setModalVisible(false);
        
    };

    return (
        <SafeAreaView edges={['bottom', 'left', 'right']} style={{ flex: 1 }}>
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
                                <View>
                                    <RoleDropdown roles={ROLES} onSelect={handleSelectRole} />
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
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        {/* Fundo com efeito de blur */}
                        <BlurView
                            intensity={40}
                            tint="dark"
                            experimentalBlurMethod="dimezisBlurView"
                            style={styles.modalOverlay}
                        >
                            <TouchableOpacity
                                style={{ flex: 1, width: '100%' }}
                                activeOpacity={1}
                                onPress={() => setModalVisible(false)}
                            >
                                {/* TouchableOpacity vazio aqui serve para fechar ao clicar fora */}
                            </TouchableOpacity>

                            <View style={styles.modalContent}>
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalTitle}>Escolha seu Avatar</Text>
                                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                                        <Ionicons name="close" size={24} color={Colors.primary_text} />
                                    </TouchableOpacity>
                                </View>

                                {/* Lista de Avatares em Grid, usando o FlatList, para fazer a exibição em grade */}
                                <ListaAvatares AVATARES={AVATARES} avatarSelecionado={avatarSelecionado} onPress={selectAvatar} />

                            </View>
                        </BlurView>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}