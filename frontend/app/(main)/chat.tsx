import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

/**
 * Refs:
 * - UI/UX: https://dribbble.com/search/ai-chat-mobile
 * - Lógica de Chat Invertido: https://reactnative.dev/docs/flatlist#inverted
 * - Referência Técnica de Componentes: https://github.com/FaridSafi/react-native-gifted-chat
 */

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
}

export default function ChatScreen() {
    const router = useRouter();

    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState<Message[]>([ // Armazena a lista de mensagens (inicia com a saudação da IA)
        { id: '1', text: 'Olá! Sou seu assistente do Apotecário. Como posso ajudar com seu tratamento hoje?', sender: 'ai' },
    ]);

    const sendMessage = () => {
        // Validação: impede o envio se o campo estiver vazio ou apenas com espaços
        if (inputText.trim().length === 0) return;

        const newMessage: Message = {
            id: Date.now().toString(), // Gera um ID único baseado no timestamp atual
            text: inputText,
            sender: 'user',
        };

        // Atualiza o estado das mensagens adicionando a nova no início da lista
        // (Como a FlatList usa 'inverted', o topo do array fica na parte inferior da tela)
        setMessages((prev) => [newMessage, ...prev]);
        setInputText('');
    };

    const renderMessage = ({ item }: { item: Message }) => {
        const isUser = item.sender === 'user';

        return (
            // Wrapper alinha o balão à direita (usuário) ou à esquerda (IA)
            <View style={[styles.messageWrapper, isUser ? styles.userWrapper : styles.aiWrapper]}>

                {/* Se NÃO for o usuário (ou seja, for a IA), renderiza o ícone de robô */}
                {!isUser && (
                    <View style={styles.aiAvatar}>
                        <MaterialCommunityIcons name="robot" size={18} color="#fff" />
                    </View>
                )}

                {/* Balão da mensagem: Muda a cor de fundo e as bordas dependendo do remetente */}
                <View style={[styles.messageBubble, isUser ? styles.userBubble : styles.aiBubble]}>
                    {/* Texto da mensagem: Ajusta a cor do texto para legibilidade */}
                    <Text style={[styles.messageText, isUser ? styles.userText : styles.aiText]}>
                        {item.text}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={28} color={Colors.primary_text} />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>Apotecário AI</Text>
                    <View style={styles.onlineStatus} />
                </View>
                <TouchableOpacity style={styles.optionsButton}>
                    <Ionicons name="ellipsis-vertical" size={22} color={Colors.primary_text} />
                </TouchableOpacity>
            </View>

            {/* Lista de Mensagens */}
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={renderMessage}
                contentContainerStyle={styles.chatList}
                inverted // Mantém o scroll grudado embaixo, ideal para apps/telas de chat
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.input}
                            placeholder="Pergunte sobre seus remédios..."
                            placeholderTextColor="#999"
                            value={inputText}
                            onChangeText={setInputText}
                            multiline // Permite que o campo quebre linhas se o texto for longo
                        />
                        {/* Botão de Enviar desabilitado visualmente e funcionalmente se o input estiver vazio */}
                        <TouchableOpacity
                            onPress={sendMessage}
                            style={[styles.sendButton, !inputText.trim() && { opacity: 0.5 }]}
                            disabled={!inputText.trim()}
                        >
                            <Ionicons name="arrow-up-circle" size={38} color={Colors.accent} />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        padding: 4,
    },
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.primary_text,
        fontFamily: 'Inter',
    },
    onlineStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#4CAF50',
    },
    optionsButton: {
        padding: 4,
    },
    chatList: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    messageWrapper: {
        flexDirection: 'row',
        marginBottom: 16,
        maxWidth: '85%',
    },
    userWrapper: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    aiWrapper: {
        alignSelf: 'flex-start',
        alignItems: 'flex-end',
    },
    aiAvatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: Colors.accent,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    messageBubble: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
    },
    userBubble: {
        backgroundColor: Colors.accent,
        borderBottomRightRadius: 4,
    },
    aiBubble: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 4,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    messageText: {
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Inter',
    },
    userText: {
        color: '#fff',
    },
    aiText: {
        color: Colors.primary_text,
    },
    inputContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F3F4',
        borderRadius: 25,
        paddingLeft: 16,
        paddingRight: 4,
        paddingVertical: 4,
    },
    input: {
        flex: 1,
        fontSize: 16,
        maxHeight: 100,
        color: Colors.primary_text,
        paddingVertical: 8,
    },
    sendButton: {
        padding: 2,
    },
});