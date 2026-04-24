import { CardMedicine } from "@/components/CardMedicine";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

export default function HomeScreen() {
    return (
        // ScrollView por conta dos cards de medicamentos
        <ScrollView style={{ flex: 1, backgroundColor: Colors.background }}>
            <View  style={{ paddingHorizontal: 25 }}>
            
                {/* Componente do Header do Perfil*/}
            <View style={styles.profileHeader}> 

                    <Image
                        source={require("@assets/avatars/brekibedi.png")} 
                        style={styles.image}
                    />

                    <Text style={styles.title}>
                        Olá, <Text style={styles.userName}>Otávio!</Text>
                        </Text>

                    <MaterialCommunityIcons name="chevron-down" size={30} color={Colors.accent}  />

                </View>


                {/* Componente do Calendário */}


                {/* Componentes de Cards*/}
                <View style={styles.medicationSecton}>
                    <Text style={styles.titleSection}>Medicamentos</Text>
                    <Text style={styles.subTitleSection}>Remédios que você deve tomar</Text>

                    <View style={styles.containerCards} >

                        <CardMedicine />
                        <CardMedicine />

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
        fontSize:21,
    },

    subTitleSection: {
        fontSize: 15,
        fontFamily: 'Inter',
        color: Colors.secondary_text
    },

    // Sessão Perfil Header

    profileHeader: {

        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 40,
        gap: 5

    },
    
    image: {
        width: 50,
        height:50,
        resizeMode:"contain",
        marginRight: 4
    },

    title: {
        fontSize: 25,
        fontFamily: 'Inter',
        fontWeight: '600'
    },

    userName: {
        color: Colors.accent,
        fontFamily: 'Inter',
        fontWeight: 'bold'
    },

    // Sessão Medicamentos
    medicationSecton: {
        marginTop: 30
    },
    // Sessao dos Cards
    containerCards: {
        flexDirection: "column",
        gap: 10,
        marginTop: 15
    },


})