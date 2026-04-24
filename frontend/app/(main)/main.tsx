import { CardMedicine } from "@/components/CardMedicine";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";

export default function HomeScreen() {
    return (
        <View style={{  flex: 1, justifyContent: 'flex-start', backgroundColor: Colors.background}}>
           

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
            <Text style={styles.titleSection}>Medicamentos</Text>
            <Text style={styles.subTitleSection}>Remédios que você deve tomar</Text>

            <View style={styles.containerCards} >

                <CardMedicine />

            </View>

        </View>
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
        marginLeft: 30,
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
        fontWeight: 'bold'
    },

    userName: {
        color: Colors.accent,
        fontFamily: 'Inter'
    },

    // Sessão Medicamentos
    containerCards: {
        flexDirection: "column",
        gap: 10,
        marginTop: 15
    },


})