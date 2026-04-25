import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, FlatList } from "react-native";
import { BlurView } from 'expo-blur';
import { styles } from "./_perfil.styles";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { InputText } from '../../components/InputText';
import { Ionicons } from '@expo/vector-icons';

// Lista de Avatares (Manter fora do componente para não recriar na memória)
const AVATARES = [
    { id: '1', res: require("@assets/avatars/brekibedi.png") },
    { id: '2', res: require("@assets/avatars/afro.png") },
    { id: '3', res: require("@assets/avatars/dorock.png") },
    { id: '4', res: require("@assets/avatars/habibi.png") },
];

export default function PerfilScreen() {
    const router = useRouter();

    // Estados
    const [modalVisible, setModalVisible] = useState(false);
    const [avatarSelecionado, setAvatarSelecionado] = useState(AVATARES[0]); // Começa com o primeiro
    const [nome, setNome] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>Crie seu Perfil!</Text>

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
                        <Text style={styles.disclame}>
                            No primeiro acesso ao aplicativo, é necessário criar seu perfil, com avatar e nome, para  personalizar sua experiência.
                        </Text>
                    </View>

                    <TouchableOpacity style={{ width: '100%' }} activeOpacity={0.8} onPress={() => router.replace('/(main)/main')}>
                        <LinearGradient
                            colors={['#3da696', '#2d7a6e']}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Criar Perfil!</Text>
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
                                <Ionicons name="close" size={24} color="#333" />
                            </TouchableOpacity>
                        </View>

                        {/* Lista de Avatares em Grid, usando o FlatList, para fazer a exibição em grade */}
                        <FlatList
                            data={AVATARES}
                            numColumns={3}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={styles.gridContainer}
                            renderItem={({ item }) => (
                                // Cada avatar é um TouchableOpacity para seleção e tem um destaque se for o selecionado
                                <TouchableOpacity
                                    style={[
                                        styles.avatarOption,
                                        avatarSelecionado.id === item.id && styles.avatarSelected
                                    ]}
                                    onPress={() => {
                                        setAvatarSelecionado(item);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Image source={item.res} style={styles.avatarImage} />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </BlurView>
            </Modal>
        </View>
    );
}