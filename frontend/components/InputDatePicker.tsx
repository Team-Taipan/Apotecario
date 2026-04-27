import { StyleSheet, TouchableOpacity, TextInput, View } from "react-native"
import Colors from "@/constants/Colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useState } from "react";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

interface InputDatePickerProps {
    defaultDate?: Date;
    mode?: "date" | "time";
    onValueChange?: (date: Date) => void;
}

export default function InputDatePicker({defaultDate, mode, onValueChange} : InputDatePickerProps) {

    const [date, setDate] = useState(defaultDate || new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [wasChanged, setWasChanged] = useState(false);

    // função para quando o usuario clicar 
    const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {

        // se o tipo de evento foi dismissed, ou seja clicou fora ou cancelar
        if (event.type === 'dismissed') { 
            setShowPicker(false); // fecha o picker
            return;
        }
        // se passou um dia como parametro atualiza, se não mantém o valor antigo
        if(selectedDate) {
            setDate(selectedDate);
            setWasChanged(true);
            
            if (onValueChange) {
                onValueChange(selectedDate);
            }
        }

        setShowPicker(false); // após ele escolher, escondemos o picker
    }

    // Função para mudar a formatacação dependendo se é hora ou date
    const getFormattedValue = () => {
        if (!wasChanged && !defaultDate) {
            return mode === "date" ? "Selecionar data" : "Selecionar hora";
        }
        
        return mode === "date" 
            ? date.toLocaleDateString("pt-BR") 
            : date.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
    };    


    return(
        <View>
            <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowPicker(true)}>

                <MaterialCommunityIcons style={styles.datePickerContainerIcon} name={mode === "date" ? "calendar" : "clock-outline"} size={30} color={Colors.accent}/>
                <TextInput 
                    placeholderTextColor="#999"
                    editable={false} // Evita abrir o teclado
                    value={getFormattedValue()} 
                    style={styles.datePickerValue}
                ></TextInput>

            </TouchableOpacity>
            
            { /* Por questões de prazo, vou usar o componente do wheel picker, só que o DatePicker é beta no repo deles, talvez implementar nossa versão */}
            { /* Decidi usar o wheel picker deles e o DatePicker da comunidade*/ }
            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    display="spinner" 
                    locale="pt-BR"
                    is24Hour={true}
                    minimumDate={mode === "date" ? new Date() : undefined}
                    onChange={onChangeDate}
                    
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    datePickerContainer: {
        flexDirection: "row",     
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 60,
        backgroundColor: Colors.background_text_input,
        borderRadius: 8,
        marginTop:1,
        elevation: 4,
        gap: 10,
        
    },
    datePickerContainerIcon: {
        marginLeft: 10
    },
    datePickerValue: {
        fontSize: 16,
        color: Colors.primary_text
    }
})

// Ref (npm): https://www.npmjs.com/package/@react-native-community/datetimepicker