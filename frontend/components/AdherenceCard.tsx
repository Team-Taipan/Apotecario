import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from '@/components/CircularProgress';
import Colors from '@/constants/Colors';

interface AdherenceCardProps {
    title: string;
    description: string;
    takenCount: number;
    missedCount: number;
    totalCount: number;
}

export const AdherenceCard = ({
    title,
    description,
    takenCount,
    missedCount,
    totalCount
}: AdherenceCardProps) => {
    // Calcula a porcentagem automaticamente com base nos dados fornecidos nas props
    const calculatedPercentage = totalCount > 0 ? Math.round((takenCount / totalCount) * 100) : 0;

    return (
        <View style={styles.mainCard}> 
            <View style={styles.row}>
                {/* Lado Esquerdo: Instância do gráfico */}
                <CircularProgress percentage={calculatedPercentage} />

                {/* Lado Direito: Textos e Blocos de Estatísticas */}
                <View style={styles.infoContainer}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.dateRange}>{description}</Text>

                    {/* Linha inferior com as métricas numéricas */}
                    <View style={styles.statsRow}>
                        
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{takenCount}</Text>
                            <Text style={styles.statLabel}>Tomadas</Text>
                        </View>

                        <View style={styles.statItem}>
                            <Text style={[styles.statNumber, { color: '#FF8A7A' }]}>{missedCount}</Text>
                            <Text style={styles.statLabel}>Perdidas</Text>
                        </View>

                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>{totalCount}</Text>
                            <Text style={styles.statLabel}>Total</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: Colors.accent,
        borderRadius: 24,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 20,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    dateRange: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.7)',
        marginBottom: 16,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statItem: {
        alignItems: 'flex-start',
    },
    statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    statLabel: {
        fontSize: 10,
        color: 'rgba(255,255,255,0.7)',
    },
});