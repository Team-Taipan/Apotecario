import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";


interface CardMedicineProps {
    name: string,
    qtMedicine: number,
    typeMedicine: string
    iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

export function CardMedicine( { name, qtMedicine, typeMedicine, iconName } : CardMedicineProps) {
    return (
        <View>
            <Text style={styles.hourMedication}>09:00</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.cardMedicine}>
            
                <MaterialCommunityIcons style={styles.iconMedicine} name={iconName} size={40} color={Colors.accent}  />
                
                <View style={styles.infoMedicine}>
                    <Text style={styles.nameMedicine}>{name}</Text>
                    <Text>{qtMedicine} {typeMedicine}</Text>
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
        height: 60,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginTop:10,
        elevation: 4,
        gap: 20
    
    },

    hourMedication: {
        fontWeight: 500,
    },

    infoMedicine: {
        flex: 1,
        flexDirection: "column"
    },

    nameMedicine: {
        fontWeight: "bold",
    },

    iconMedicine: {
        marginLeft: 10,
        backgroundColor: "#d9ebe8a2",
        borderRadius: 20
    },

    buttonMedication: {
        width: 50,
        height: 40,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        backgroundColor: Colors.accent
    },

    nameButtonMedication: {
        color: "#faf9f9",
        fontSize: 12,
        fontWeight: "bold"
    }

});

