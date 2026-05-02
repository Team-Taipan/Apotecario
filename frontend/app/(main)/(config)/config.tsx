import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { styles } from './_config.styles';
import { ConfigCard } from '@/components/ConfigCard';
import { ConfigItem } from '@/components/ConfigItem';
import { AccountCard } from '@/components/AccountCard';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { ConfirmModal } from '@/components/ConfirmModal';
import Toast from 'react-native-toast-message';

export default function ConfigScreen() {
    const [pushEnabled, setPushEnabled] = useState(true);
    const [consultEnabled, setConsultEnabled] = useState(true);
    const [disturbEnabled, setDisturbEnabled] = useState(false);

    // Função de Logout
    const { signOut } = useAuth();
    useEffect(() => {
        const resetAuth = async () => {
            await signOut();
        };
    }, []);

    // Modal de Confirmação
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text style={styles.title}>Configurações</Text>

                    {/* Seção de Conta */}
                    <View>
                        <AccountCard
                            name="Usuário"
                            email="usuario@email.com"
                            onEditPress={() => console.log("Navegar para Edição")}
                        />
                    </View>

                    {/* Seção de Lembretes */}
                    <View style={styles.divisorLine}>
                        <Text style={styles.titleSection}>LEMBRETES</Text>
                        <View style={styles.trace}><View style={styles.rectangle} /></View>
                    </View>

                    <ConfigCard>
                        <ConfigItem
                            icon={<Ionicons name="notifications-outline" size={20} color="#E87B3E" />}
                            iconBg="#E87B3E40"
                            title="Notificações push"
                            subtitle="Alertas de doses e consultas"
                            type="switch"
                            value={pushEnabled}
                            onValueChange={setPushEnabled}
                        />

                        <ConfigItem
                            icon={<Ionicons name="time-outline" size={20} color="#E87B3E" />}
                            iconBg="#E87B3E40"
                            title="Antecedência do lembrete"
                            subtitle="Avisar com quanto tempo de antecedência?"
                            rightText="30 min"
                            onPress={() => console.log('Tempo')}
                        />

                        <ConfigItem
                            icon={<Ionicons name="calendar-clear-outline" size={20} color="#4A7FC1" />}
                            iconBg="#4A7FC140"
                            title="Lembrete de Consulta"
                            subtitle="Notificar 1 dia antes"
                            type="switch"
                            value={consultEnabled}
                            onValueChange={setConsultEnabled}
                        />

                        <ConfigItem
                            icon={<Ionicons name="volume-low-outline" size={24} color="#2D7A6E" />}
                            iconBg="#2D7A6E40"
                            title="Som e Notificação"
                            subtitle="Toque Padrão. Vibrar Ativado"
                            onPress={() => console.log('Som')}
                        />

                        <ConfigItem
                            icon={<MaterialIcons name="do-not-disturb-on" size={20} color="#5B6B60" />}
                            iconBg="#5B6B6040"
                            title="Modo não perturbe"
                            subtitle="Das 22:00 às 07:00"
                            type="switch"
                            value={disturbEnabled}
                            onValueChange={setDisturbEnabled}
                            isLast={true}
                        />
                    </ConfigCard>

                    {/* Seção de Logout */}
                    <View style={styles.divisorLine}>
                        <Text style={styles.titleSection}>CONTA</Text>
                        <View style={styles.trace}><View style={styles.rectangle} /></View>
                    </View>

                    <ConfigCard>
                        <ConfigItem
                            icon={<MaterialIcons name="exit-to-app" size={20} color="#DC3C3C" />}
                            iconBg="#DC3C3C40"
                            title="Sair da Conta"
                            subtitle="usuario@gmail.com" // pegar o email depois
                            onPress={() => (setLogoutModalVisible(true))}
                        />
                        <ConfigItem
                            icon={<Ionicons name="trash-outline" size={20} color="#DC3C3C" />}
                            iconBg="#DC3C3C40"
                            title="Excluir Conta"
                            subtitle="Ação permanente e irreversível"
                            onPress={() => console.log('TEM CERTEZA?')}
                            isLast={true}
                        />
                    </ConfigCard>
                </View>
            </ScrollView>

            {/* Render condicional, caso o contrário, o modal continua montado, só invisível, acarretando em bloqueio de toques, como uma camada fantasma */}
            {logoutModalVisible && (
                <ConfirmModal
                    visible={logoutModalVisible}
                    title="Sair da conta"
                    message="Tem certeza que deseja sair da sua conta?"
                    confirmText="Sair"
                    cancelText="Cancelar"
                    onCancel={() => setLogoutModalVisible(false)}
                    onConfirm={() => {
                        setLogoutModalVisible(false);
                        Toast.show({
                            type: 'info',
                            text1: 'Você saiu de sua conta!',
                            visibilityTime: 3000
                        });
                        signOut();
                    }}
                />
            )}
        </SafeAreaView>
    );
}