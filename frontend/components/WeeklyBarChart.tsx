import React from 'react';
import { StyleSheet, Text, View, TextStyle, StyleProp } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import Colors from '@/constants/Colors';

export interface BarDataItem {
    value: number;
    label: string;
    frontColor: string;
    labelTextStyle?: StyleProp<TextStyle>;
}

interface WeeklyBarChartProps {
    title: string;
    dateRange: string;
    data: BarDataItem[];
    highlightBarColor?: string; // Cor da barra do dia atual
    highlightLabelColor?: string; // Cor do texto do dia atual
}

const WeeklyBarChart = ({
    title,
    dateRange,
    data,
    highlightBarColor = Colors.accent,
    highlightLabelColor = Colors.accent
}: WeeklyBarChartProps) => {

    // Lógica para destacar o dia atual
    // Retorna o dia da semana (0 para Domingo, 1 para Segunda, ..., 6 para Sábado)
    const currentDayOfWeek = new Date().getDay();

    // Calcula o índice correto para o dia atual (assumindo que os dados começam em SEG e terminam em DOM)
    // Se hoje é Domingo (0), vira índice 6. Se é Segunda (1), vira índice 0.
    const currentDayDataIndex = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;

    // Mapeia os dados para aplicar a cor de destaque do dia correspondente
    const highlightedData = data.map((item, index) => ({
        ...item,
        frontColor: index === currentDayDataIndex ? highlightBarColor : item.frontColor,
        // Injeta o estilo de texto diretamente no item de dados
        labelTextStyle: index === currentDayDataIndex
            ? [styles.xAxisText, { 
                color: highlightLabelColor, 
                fontWeight: 'bold' as const // Força o TS a entender que é o literal 'bold', senão fica com um erro, mas funciona
              }]
            : styles.xAxisText,
    }));

    return (
        <View style={styles.card}>
            {/* Cabeçalho do Card com título e período */}
            <View style={styles.headerRow}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <View style={styles.dateBadge}>
                    <Text style={styles.dateText}>{dateRange}</Text>
                </View>
            </View>

            {/* Container do Gráfico */}
            <View style={styles.chartWrapper}>
                <BarChart
                    data={highlightedData}
                    barWidth={37}
                    spacing={7}
                    barBorderRadius={4}
                    hideRules // Remove as linhas de grade de fundo
                    hideYAxisText // Oculta os números do eixo Y
                    yAxisThickness={0} // Remove a linha vertical do eixo Y
                    xAxisThickness={0} // Remove a linha horizontal do eixo X
                    height={120}
                    maxValue={100}
                    isAnimated
                    animationDuration={1000}
                    xAxisLabelTextStyle={styles.xAxisText} // Estilo padrão para os outros dias
                />
            </View>

            {/* Legenda */}
            <View style={styles.legendRow}>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: Colors.accent }]} />
                    <Text style={styles.legendText}>Tomado</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: Colors.orange }]} />
                    <Text style={styles.legendText}>Perdido</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 20,
        marginTop: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.primary_text,
        fontFamily: 'Inter',
        flexShrink: 1, // Faz o título encolher para não atropelar o badge
        //marginRight: 12, Aumentado para evitar sobreposição com o badge se for um texto grande
    },
    dateBadge: {
        backgroundColor: '#E6F0EE',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        flexShrink: 0, // Garante que o badge mantenha seu tamanho original
    },
    dateText: {
        fontSize: 12,
        color: Colors.accent,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    chartWrapper: {
        alignItems: 'center',
        // Compensa o recuo lateral padrão da biblioteca
        marginRight: -20,
        marginLeft: -20,
    },
    xAxisText: {
        color: Colors.secondary_text,
        fontSize: 10,
        fontFamily: 'Inter',
    },
    legendRow: {
        flexDirection: 'row',
        marginTop: 15,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 2,
        marginRight: 6,
    },
    legendText: {
        fontSize: 12,
        color: Colors.secondary_text,
        fontFamily: 'Inter',
    },
});

export default WeeklyBarChart;
