import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AdherenceCard } from '@/components/AdherenceCard';
import WeeklyBarChart, { BarDataItem } from '@/components/WeeklyBarChart';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { CardAdhrenceMedication } from '@/components/CardAdhrenceMedication';

export default function ProgressoScreen() {

    const weeklyData: BarDataItem[] = [
        { value: 100, label: 'SEG', frontColor: Colors.accent },
        { value: 60, label: 'TER', frontColor: Colors.orange },
        { value: 100, label: 'QUA', frontColor: Colors.accent },
        { value: 30, label: 'QUI', frontColor: Colors.orange },
        { value: 85, label: 'SEX', frontColor: Colors.accent },
        { value: 0, label: 'SÁB', frontColor: '#EEEEEE' },
        { value: 0, label: 'DOM', frontColor: '#EEEEEE' },
    ];

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
                    {/* Card Semanal */}
                    <WeeklyBarChart
                        title="Doses por Dia — Semana"
                        dateRange="Mar 25–31"
                        data={weeklyData}
                    />
                    {/* Secção de Adesão por Medicamento */}
                    <Text style={styles.titleAdherence}>Adesão por Medicamento</Text>
                    <Text style={styles.subtitleAdherence}>Desempenho individual do tratamento</Text>

                    <CardAdhrenceMedication
                        name="Losartana"
                        dosage="50mg"
                        frequency="1x ao dia"
                        condition="Hipertensão"
                        percentage={92}
                        takenDoses={27}
                        totalDoses={30}
                    />

                    <CardAdhrenceMedication
                        name="Paracetamol"
                        dosage="100mg"
                        frequency="2x ao dia"
                        condition="Dor crônica"
                        percentage={69}
                        takenDoses={38}
                        totalDoses={60}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
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
    titleAdherence: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "flex-start",
        color: Colors.primary_text,
        marginTop: 20,
        marginBottom: 5
    },
    subtitleAdherence: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: "600",
        alignSelf: "flex-start",
        color: Colors.secondary_text,
        marginBottom: 10
    }
});