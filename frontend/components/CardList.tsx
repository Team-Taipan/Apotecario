import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";

interface CardList {
    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,
    
}

export default function CardList() {
    return(
    
        <TouchableOpacity activeOpacity={0.7} style={styles.cardListContainer}>

            <View style={styles.cardListContent}>
                <MaterialCommunityIcons style={styles.cardListIcon} name="head-heart" size={40} color={Colors.accent}  />
                <Text style={ styles.cardListName} >Pressão Arterial</Text>
            </View>

            <MaterialCommunityIcons style={styles.cardListIconSelect} name="chevron-right" size={40} color={Colors.accent}  />
        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({

    cardListContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 60,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginTop:10,
        elevation: 4,
        gap: 20        
    },
    cardListContent: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        width: "100%",
    },
    cardListIcon: {
        marginLeft: 10,
        backgroundColor: "#d9ebe8a2",
        borderRadius: 20
    },

    cardListName: {
        fontWeight: "bold",
    },

    cardListIconSelect: {

    },

})