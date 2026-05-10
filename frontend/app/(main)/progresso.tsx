import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AdherenceCard } from '@/components/AdherenceCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';

export default function ProgressoScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <View style={styles.content}>
                <Text style={styles.title}>Progresso</Text>
                {/* Card Principal */}
                <AdherenceCard
                    title="Adesão ao Tratamento"
                    description="Março 2026 · 30 dias registrados"
                    takenCount={68}
                    missedCount={15}
                    totalCount={83}
                />

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 24,
        fontFamily: 'Inter'
    },
    content: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "flex-start",
        color: Colors.primary_text,
        marginBottom: 15
    },
});