import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";


interface CardMedicineProps {
    name: string,
    qtMedicine: number,
    typeMedicine: string
    iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

export function CardMedicine({ name, qtMedicine, typeMedicine, iconName }: CardMedicineProps) {
    return (
        <View>
            <Text style={styles.hourMedication}>09:00</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.cardMedicine}>

                <MaterialCommunityIcons style={styles.iconMedicine} name={iconName} size={40} color={Colors.accent} />

                <View style={styles.infoMedicine}>
                    <Text style={styles.nameMedicine}>{name}</Text>
                    <Text style={styles.qtMedicine}>{qtMedicine} {typeMedicine}</Text>
                </View>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonMedication}>

                    <Text style={styles.nameButtonMedication}>Tomar</Text>

                </TouchableOpacity>


            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    cardMedicine: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 14,
        marginTop: 10,
        elevation: 3, // Sombra para Android
        gap: 20,
        // Propriedades de sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    hourMedication: {
        fontWeight: 500,
        fontFamily: "Inter",
        fontSize: 13,
        color: Colors.primary_text
    },

    infoMedicine: {
        flex: 1,
        flexDirection: "column"
    },

    nameMedicine: {
        fontWeight: "bold",
        fontSize: 15,
        color: Colors.primary_text
    },

    qtMedicine: {
        fontWeight: 500,
        fontFamily: "Inter",
        fontSize: 13,
        color: Colors.secondary_text
    },

    iconMedicine: {
        marginLeft: 5,
        backgroundColor: "#d9ebe8a2",
        borderRadius: 25,
        padding: 3
    },

    buttonMedication: {
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
        backgroundColor: Colors.accent
    },

    nameButtonMedication: {
        color: "#faf9f9",
        fontSize: 12,
        fontWeight: "bold"
    }

});

