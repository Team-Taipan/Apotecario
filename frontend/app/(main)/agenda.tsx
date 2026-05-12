import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "@/constants/Colors";
import CalendarAgenda from "@/components/CalendarAgenda";
import PerfilHeader from "@/components/PerfilHeader";
import CardAgenda from "@/components/CardAgenda";

export default function AgendaScreen() {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 24 }}>

                {/* Sessão do Header do Perfil*/}
                <PerfilHeader  />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={styles.agendaTitle}>Agenda</Text>

                    <CalendarAgenda />

                    <Text style={styles.agendaSubTitle}>PRÓXIMAS CONSULTAS</Text>

                    <CardAgenda dateDay="29" dateMonth="Abr" dateHour="10:30" title="Consulta Cardíca" doctorName="Dr. João Almeida" localization="Hospital Santa Heloísa" />
                    <CardAgenda dateDay="16" dateMonth="Jun" dateHour="15:50" title="Consulta De Rotina" doctorName="Dra. Fernanda Costa" localization="Hospital Santa Heloísa" />

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    agendaTitle: {
        fontFamily: "Inter",
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "flex-start",

    },
    agendaSubTitle: {
        fontFamily: "Inter",
        marginTop: 15,
        color: Colors.secondary_text,
        fontWeight: "600",
        alignSelf: "flex-start",

    },
})