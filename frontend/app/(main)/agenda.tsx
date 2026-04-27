import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "@/constants/Colors";
import CalendarAgenda from "@/components/CalendarAgenda";

export default function AgendaScreen() {


    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 24 }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={styles.agendaTitle}>Agenda</Text>

                    <CalendarAgenda />

                    <Text style={styles.agendaSubTitle}>PRÓXIMAS CONSULTAS</Text>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    agendaTitle: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "flex-start",

    },
    agendaSubTitle: {
        marginTop: 15,
        color: Colors.secondary_text,
        fontWeight: "600",
        alignSelf: "flex-start",

    },

})