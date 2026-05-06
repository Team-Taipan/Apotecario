import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";


interface CardListProps {

    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,
    functionRedirectOnPress: () => void;

}

export default function CardList({ name, icon, functionRedirectOnPress }: CardListProps) {
    return (

        <TouchableOpacity onPress={functionRedirectOnPress} activeOpacity={0.7} style={styles.cardListContainer}>

            <View style={styles.cardListContent}>
                <MaterialCommunityIcons style={styles.cardListIcon} name={icon} size={34} color={Colors.accent} />
                <Text style={styles.cardListName} >{name}</Text>
                <MaterialCommunityIcons name="chevron-right" size={28} color={Colors.primary_text} />
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    cardListContainer: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: 14,
        borderColor: "#E0E0E0",
        borderWidth: 1.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
    },
    cardListContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: 10,
    },
    cardListIcon: {
        marginLeft: 5,
        padding: 7,
        backgroundColor: "#d9ebe8a2",
        borderRadius: 25
    },

    cardListName: {
        fontFamily: 'Inter',
        fontWeight: "600",
        fontSize: 15,
        color: Colors.primary_text
    },

    cardListIconSelect: {

    },

})