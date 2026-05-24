import { styles } from "../_forms_styles";
import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import ButtonGradient from "@/components/ButtonGradient";
import { useRouter } from "expo-router";
import InputDatePicker from "@/components/InputDatePicker";
import { InputText } from "@/components/InputText";
import InputTextNotes from "@/components/InputTextNotes";
import InputWheelPickerNumber from "@/components/InputWheelPickerNumber";




export default function registroMedicao() {

    const router = useRouter();
    return(
        
        <View style={{ flex: 1 }}>

            <View style={styles.contentContainer}>

                <View style={styles.formsContainer}>

                    <View>
                        <Text style={styles.title}>Nova Medição</Text>
                        <Text style={styles.subTitle}>Mantenha seus dados atualizados para um melhor acompanhamento médico</Text>
                    </View>

                    {/* futuramente mudar desse InputText para um WheelPicker talvez */}   
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.inputLabel}>Resultado da Medição </Text> 
                        <InputWheelPickerNumber format="Integer" unit="KG" />
                    </View>

                    <View>
                        <Text style={styles.inputLabel}>Data do Registro </Text>
                        <InputDatePicker mode="date" defaultDate={new Date()} />
                        <Text style={styles.helperText}> Registrando com o horário atual. Toque no botão para alterar. </Text>
                    </View>

                    <View>
                    <Text style={styles.inputLabel}>Notas Adicionais </Text>
                        <InputTextNotes placeholder="Ex: Medido em repouso, após medicação..." numberOfLines={4} />
                        <Text style={styles.helperText}> Informações extras ajudam na análise do seu histórico. </Text>
                    </View>
                    
                </View>

                <View style={styles.footer}>
                    <ButtonGradient onPress={()=> router.replace("/(main)/")} text="Salvar" />
                </View>

            </View>
        </View>
    )
}

