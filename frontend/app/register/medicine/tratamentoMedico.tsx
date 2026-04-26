import { View, Text, StyleSheet } from "react-native"
import Colors from "@/constants/Colors"
import InputDatePicker from "@/components/InputDatePicker"
import ButtonGradient from "@/components/ButtonGradient"
import InputNumericStepper from "@/components/InputNumericStepper"
import { useRouter } from "expo-router"

export default function tratamentoMedico() {

    const router = useRouter();

    return (
        <View style={{ flex: 1 , backgroundColor: Colors.background}}>

            <View style={styles.contentContainer}>

                <View style={styles.topContent}>

                    <Text style={styles.treatmentTitle}>Informações sobre seu Tratamento</Text>
                    <Text style={styles.treatmentSubTitle}>Registre informações sobre seu tratamento para nos ajudar a personalizar seus lembretes</Text>

                    <View style={{ marginTop: 20 }}>

                        {/* componente incremental */}   
                        <Text style={styles.inputLabel}>Quantidade de Medicamento por Dose: </Text> 
                        <InputNumericStepper />

                        <Text style={styles.inputLabel}>Data de Termino: </Text>
                        <InputDatePicker />
                        <Text style={styles.helperText}> Deixe em branco caso não haja uma data de fim definida. </Text>

                    </View>

                </View>

                <View style={styles.footer}>
                        <ButtonGradient onPress={()=> router.push("/register/medicine/estoqueMedicamento")} text="Próximo" />
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    treatmentTitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.accent
    },
    treatmentSubTitle: {
        marginTop: 5,
        fontSize: 13,
        color: Colors.secondary_text,
        textAlign: "center",
        lineHeight: 22,
    },
    inputLabel: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",        
        color: Colors.primary_text,
        marginBottom: 8,
        
    },
    helperText: {
        fontSize: 12,
        color: Colors.secondary_text,
        marginTop: 4,
        lineHeight: 16,
    },
    topContent: {

    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        justifyContent: 'space-between',
    },
    footer: {
        marginBottom: 30,
    },
})


// Ref: WheelPicker (github) : https://github.com/quidone/react-native-wheel-picker/tree/main
// Ref: WheelPicker (npm) : https://www.npmjs.com/package/@quidone/react-native-wheel-picker