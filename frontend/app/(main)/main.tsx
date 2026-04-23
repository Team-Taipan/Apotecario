import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
           

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

        </View>
    );

    
}

const styles = StyleSheet.create({

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
    }

})