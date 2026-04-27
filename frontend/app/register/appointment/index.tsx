import { styles } from "../_forms_styles";
import { View, Text, TextInput } from "react-native";
import Colors from "@/constants/Colors";
import ButtonGradient from "@/components/ButtonGradient";
import { useRouter } from "expo-router";
import InputDatePicker from "@/components/InputDatePicker";
import { InputText } from "@/components/InputText";
import InputTextNotes from "@/components/InputTextNotes";


export default function Index() {

    const router = useRouter();

    return(
        <View style={{ flex: 1 , backgroundColor: Colors.background}}>

            <View style={styles.contentContainer}>

                <View style={styles.formsContainer}>

                    <View>
                        <Text style={styles.title}>Nova Consulta</Text>
                        <Text style={styles.subTitle}>Preencha os dados abaixo para salvar o compromisso no seu calendário.</Text>
                    </View>

                    {/* futuramente mudar desse InputText para um WheelPicker talvez */}   
                    <View>
                        <Text style={styles.inputLabel}>Título da Consulta </Text> 
                        <InputText placeholder="Ex: Check-up anual, Retorno, Urgência..." />
                    </View>

                    <View>
                        <Text style={styles.inputLabel}> Nome do Medico </Text> 
                        <InputText placeholder="Ex: Dr. Silva (Cardiologista)" />
                    </View>

                    <View style={{ flexDirection: 'row', gap: 10 }}>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.inputLabel}>Data</Text>
                            <InputDatePicker defaultDate={new Date()} mode="date" />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.inputLabel}>Hora</Text>
                            <InputDatePicker defaultDate={new Date()} mode="time" />
                        </View>

                 
                    </View>

                    <View>
                    <Text style={styles.inputLabel}>Notas Adicionais </Text>
                        <InputTextNotes placeholder="Ex: Levar exames anteriores, Jejum de 8h..." numberOfLines={4} />
                        <Text style={styles.helperText}> Lembretes importantes para o dia da consulta. </Text>
                    </View>
                    
                </View>

                <View style={styles.footer}>
                    <ButtonGradient onPress={()=> router.replace("/(main)/")} text="Salvar" />
                </View>

            </View>
        </View>
    )    
}