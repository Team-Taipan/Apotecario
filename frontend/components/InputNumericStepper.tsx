import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface InputNumericStepperProps {
    value?: number; // Valor atual do stepper
    onValueChange?: (newValue: number) => void; // Função para atualizar o valor no pai
    minValue?: number; // Valor mínimo permitido
}

export default function InputNumericStepper({ value = 1, onValueChange, minValue = 1 }: InputNumericStepperProps) {

    // Funções para incrementar e decrementar
    const handleIncrement = () => {
        onValueChange && onValueChange(value + 1);
    };

    const handleDecrement = () => {
        if (value > minValue) onValueChange && onValueChange(value - 1);
    };
    
    return (
        <View style={styles.numericStepperContainer}>
            <TouchableOpacity onPress={handleIncrement} activeOpacity={0.7} style={styles.button}>
                <MaterialCommunityIcons name="plus" size={30} color={Colors.background_text_input} />
            </TouchableOpacity>
            <TextInput placeholderTextColor="#999" editable={false} style={styles.inputTextStepper} value={String(value)}>
            </TextInput>
            <TouchableOpacity onPress={handleDecrement} activeOpacity={0.7} style={styles.button}>
                <MaterialCommunityIcons name="minus" size={30} color={Colors.background_text_input} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    numericStepperContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: Colors.background_text_input,
        borderRadius: 12,
        marginTop: 10,
        elevation: 4,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: Colors.accent,
        height: '100%',
        width: 50, // Botões quadrados costumam ser melhores para toque
        justifyContent: "center",
        alignItems: "center",
    },
    inputTextStepper: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.primary_text, // Adicionado para consistência visual
    }
})