import { styles } from "../_forms_styles";
import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import ButtonGradient from "@/components/ButtonGradient";
import { useRouter } from "expo-router";
import InputDatePicker from "@/components/InputDatePicker";

export default function registroMedicao() {

    const router = useRouter();

    return(
        <View style={{ flex: 1 , backgroundColor: Colors.background}}>

            <View style={styles.contentContainer}>

                <View style={styles.formsContainer}>

                    <View>
                        <Text style={styles.title}>Registro de Medições</Text>
                        <Text style={styles.subTitle}>Registre informações sobre suas medições de sinais vitais</Text>
                    </View>

                    {/* componente incremental */}   
                    <View>
                        <Text style={styles.inputLabel}>Quantidade de Medicamento por Dose: </Text> 
                        
                    </View>

                    <View>
                        <Text style={styles.inputLabel}>Data da Medição: </Text>
                        <InputDatePicker defaultDate={new Date()} />
                        <Text style={styles.helperText}> Por padrão, pegamos o dia de hoje. </Text>
                    </View>

                    
                </View>

                <View style={styles.footer}>
                    <ButtonGradient onPress={()=> router.replace("/(main)/")} text="Salvar" />
                </View>

            </View>
        </View>
    )
}