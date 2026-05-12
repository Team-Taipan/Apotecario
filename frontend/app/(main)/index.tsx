import { useState } from "react";
import { CalendarHome } from "@/components/CalendarHome";
import { CardMedicine } from "@/components/CardMedicine";
import Colors from "@/constants/Colors";
import React from "react";
import { View, ScrollView, StyleSheet, Text} from "react-native";
import { router } from "expo-router";
import PerfilHeader from "@/components/PerfilHeader";
import { usePerfilStore } from "@/store/perfilStore";

export default function HomeScreen() {


    return (
        // ScrollView por conta dos cards de medicamentos
        <ScrollView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 24 }}>

                {/* Sessão do Header do Perfil*/}
                <PerfilHeader  />

                {/* Sessão de Calendário */}
                <CalendarHome />
                {/* Sessão de Cards*/}
                <View style={styles.medicationSection}>

                    <Text style={styles.titleSection}>Medicamentos Ativos</Text>
                    <Text style={styles.subTitleSection}>Remédios que você deve tomar:</Text>
                    <View style={styles.containerCards} >

                        <CardMedicine name="Dipirona" iconName="pill-multiple" qtMedicine={2} typeMedicine="comprimidos" />
                        <CardMedicine name="Dipirona" iconName="water" qtMedicine={5} typeMedicine="gotas" />

                    </View>
                </View>

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