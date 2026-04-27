import { useState } from "react";
import { CalendarHome } from "@/components/CalendarHome";
import { CardMedicine } from "@/components/CardMedicine";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity, Modal, FlatList, Dimensions } from "react-native";
import { BlurView } from 'expo-blur';
import { router } from "expo-router";

// Lista de Avatares (Manter fora do componente para não recriar na memória)
const AVATARES = [
    { id: '1', res: require("@assets/avatars/brekibedi.png"), name: 'Otavio' },
    { id: '2', res: require("@assets/avatars/afro.png"), name: 'Mariana' },
    { id: '3', res: require("@assets/avatars/dorock.png"), name: 'Ricardo' },
    { id: '4', res: require("@assets/avatars/habibi.png"), name: 'Carla' },
];

export default function HomeScreen() {

    const [nome, setNome] = useState('Otavio');

    // Estados
    const [modalVisible, setModalVisible] = useState(false);
    const [avatarSelecionado, setAvatarSelecionado] = useState(AVATARES[0]); // Começa com o primeiro
    const [parentesco, setParentesco] = useState('');

    return (
        // ScrollView por conta dos cards de medicamentos
        <ScrollView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 24 }}>

                {/* Sessão do Header do Perfil*/}
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
                </View>

                {/* Sessão de Calendário */}
                <CalendarHome />
                {/* Sessão de Cards*/}
                <View style={styles.medicationSection}>

                    <Text style={styles.titleSection}>Medicamentos</Text>
                    <Text style={styles.subTitleSection}>Remédios que você deve tomar</Text>
                    <View style={styles.containerCards} >

                        <CardMedicine name="Dipirona" iconName="pill-multiple" qtMedicine={2} typeMedicine="comprimidos" />
                        <CardMedicine name="Dipirona" iconName="water" qtMedicine={5} typeMedicine="gotas" />

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
                                <Text style={styles.modalTitle}>Escolha seu Perfil</Text>
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
                                        <Text style={styles.avatarName}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}

                            />
                            <TouchableOpacity style={styles.footerTitle} onPress={() => {
                                setModalVisible(false);
                                router.push('/(perfil)/perfil');
                            }}>
                                <Octicons name="pencil" size={24} color={Colors.primary_text} />
                                <Text style={styles.footerText}>Gerenciar Perfil</Text>
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Modal>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // Gerais
    titleSection: {
        fontWeight: "bold",
        fontFamily: 'Inter',
        fontSize: 21,
    },

    subTitleSection: {
        fontSize: 15,
        fontFamily: 'Inter',
        color: Colors.secondary_text
    },

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

    // Sessão do Calendário

    // Sessão Medicamentos
    medicationSection: {
        marginTop: 30
    },
    // Sessao dos Cards
    containerCards: {
        flexDirection: "column",
        gap: 10,
        marginTop: 15
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
        maxHeight: '60%',
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
    gridContainer: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    avatarOption: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
    },
    avatarSelected: {
        borderBottomWidth: 3,
        borderColor: Colors.accent,
        color: Colors.accent,
    },
    avatarImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    avatarName: {
        marginTop: 15
    },
    footerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        paddingTop: 15,
        gap: 10
    },
    footerText: {
        fontWeight: '700',
        color: Colors.primary_text,
        fontSize: 15
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
})