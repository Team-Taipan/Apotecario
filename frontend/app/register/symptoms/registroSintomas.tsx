import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import { styles } from "../_forms_styles";
import ButtonGradient from "@/components/ButtonGradient";
import { InputText } from "@/components/InputText";
import InputTextNotes from "@/components/InputTextNotes";
import InputDatePicker from "@/components/InputDatePicker";
import { useRouter } from "expo-router";


export default function RegistroSintomas() {

    const router = useRouter();

    return(
        <View style={{ flex: 1 , backgroundColor: Colors.background}}>

            <View style={styles.contentContainer}>

                <View style={styles.formsContainer}>

                    <View>
                        <Text style={styles.title}>Registro de Sintomas</Text>
                        <Text style={styles.subTitle}>Acompanhe sua evolução registrando seus sinais e sensações</Text>
                    </View>

                    {/* futuramente mudar desse InputText para um WheelPicker talvez */}   
                    <View>
                        <Text style={styles.inputLabel}>Nível de intensidade (0 a 10)</Text> 
                        <InputText keyboardType="numeric" placeholder="Ex: 5" />
                    </View>

                    <View>
                        <Text style={styles.inputLabel}>Data da ocorrência </Text>
                        <InputDatePicker mode="date" defaultDate={new Date()} />
                        <Text style={styles.helperText}> Marcado para hoje. Toque se precisar alterar o dia. </Text>
                    </View>

                    <View>
                    <Text style={styles.inputLabel}>Notas Adicionais</Text>
                        <InputTextNotes placeholder="Descreva o que sentiu..." numberOfLines={4} />
                        <Text style={styles.helperText}> Descreva detalhes como duração, gatilhos ou o que você estava fazendo. </Text>
                    </View>
                    
                </View>

                <View style={styles.footer}>
                    <ButtonGradient onPress={()=> router.replace("/(main)/")} text="Salvar" />
                </View>

            </View>
        </View>
    )    
}