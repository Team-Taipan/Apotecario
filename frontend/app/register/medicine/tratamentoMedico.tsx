import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import Colors from "@/constants/Colors"
import InputDatePicker from "@/components/InputDatePicker"

export default function tratamentoMedico() {


    return (
        <View style={{ flex: 1 , backgroundColor: Colors.background}}>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>

                <Text style={styles.treatmentTitle}>Informações sobre seu Tratamento</Text>
                <Text style={styles.treatmentSubTitle}>Registre informações sobre seu tratamento para nos ajudar a personalizar seus lembretes</Text>

                <View style={{ marginTop: 20 }}>
                    <Text style={styles.inputLabel}>Data de Termino: </Text>
                    <InputDatePicker />
                    
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    treatmentTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.accent
    },
    treatmentSubTitle: {
        fontSize: 13,
        color: Colors.secondary_text,
        textAlign: "center",
        lineHeight: 22,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.primary_text,
        marginBottom: 8,
        
    }
})


// Ref: WheelPicker (github) : https://github.com/quidone/react-native-wheel-picker/tree/main
// Ref: WheelPicker (npm) : https://www.npmjs.com/package/@quidone/react-native-wheel-picker