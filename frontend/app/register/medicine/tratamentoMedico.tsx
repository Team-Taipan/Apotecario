import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import InputDatePicker from "@/components/InputDatePicker";
import ButtonGradient from "@/components/ButtonGradient";
import InputNumericStepper from "@/components/InputNumericStepper";
import { useRouter } from "expo-router";
import { styles } from "../_forms_styles";

export default function tratamentoMedico() {

    const router = useRouter();

    return (
        <View style={{ flex: 1 , backgroundColor: Colors.background}}>

            <View style={styles.contentContainer}>

                <View style={styles.formsContainer}>

                    <View>
                        <Text style={styles.title}>Informações sobre seu Tratamento</Text>
                        <Text style={styles.subTitle}>Registre informações sobre seu tratamento para nos ajudar a personalizar seus lembretes</Text>
                    </View>

                    {/* componente incremental */}   
                    <View>
                        <Text style={styles.inputLabel}>Quantidade de Medicamento por Dose</Text> 
                        <InputNumericStepper />
                    </View>

                    <View>
                        <Text style={styles.inputLabel}>Data de Termino</Text>
                        <InputDatePicker mode="date" />
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


// Ref: WheelPicker (github) : https://github.com/quidone/react-native-wheel-picker/tree/main
// Ref: WheelPicker (npm) : https://www.npmjs.com/package/@quidone/react-native-wheel-picker