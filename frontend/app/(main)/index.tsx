import { useState } from "react";
import { CalendarHome } from "@/components/CalendarHome";
import { CardMedicine } from "@/components/CardMedicine";
import Colors from "@/constants/Colors";
import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { router } from "expo-router";
import PerfilHeader from "@/components/PerfilHeader";
import { usePerfilStore } from "@/store/perfilStore";
import DraggableButton from "@/components/DraggableButton";


export default function HomeScreen() {


    return (
        // Usamos um Fragment (<>...</>) ou uma View com flex: 1 para envelopar tudo
        <>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 24 }}>
                    <PerfilHeader />
                    <CalendarHome />

                    <View style={[styles.medicationSection, { paddingBottom: 100 }]}>
                        <Text style={styles.titleSection}>Medicamentos Ativos</Text>
                        <Text style={styles.subTitleSection}>Remédios que você deve tomar:</Text>

                        <View style={styles.containerCards} >
                            <CardMedicine name="Dipirona" iconName="pill-multiple" qtMedicine={2} typeMedicine="comprimidos" />
                            <CardMedicine name="Dipirona" iconName="water" qtMedicine={5} typeMedicine="gotas" />
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* O botão fica fora do ScrollView para não subir junto com o scroll */}
            <DraggableButton 
                onPress={() => router.push("")} 
            />
        </>
    );
}

const styles = StyleSheet.create({
    // Gerais
    titleSection: {
        fontWeight: "bold",
        fontFamily: 'Inter',
        fontSize: 21,
        color: Colors.primary_text
    },

    subTitleSection: {
        fontSize: 15,
        fontFamily: 'Inter',
        color: Colors.secondary_text
    },


    // Sessão do Calendário

    // Sessão Medicamentos
    medicationSection: {
        marginTop: 20
    },
    // Sessao dos Cards
    containerCards: {
        flexDirection: "column",
        gap: 10,
        marginTop: 15
    },

})