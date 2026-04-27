import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useState} from "react";

export default function InputNumericStepper() {

    const [count, setCount] = useState(1);

    return(

        <View style={styles.numericStepperContainer}>

             
            <TouchableOpacity onPress={()=> setCount(count + 1)} activeOpacity={0.7} style={styles.button}><MaterialCommunityIcons  name="plus" size={30} color={Colors.background_text_input} /></TouchableOpacity>
            <TextInput placeholderTextColor="#999" editable={false} style={styles.inputTextStepper} value={String(count)}></TextInput>
            {/* máximo permitido decrementar é até 1 */}
            <TouchableOpacity onPress={()=> count > 1 ? setCount(count - 1) : setCount(count)} activeOpacity={0.7} style={styles.button}><MaterialCommunityIcons  name="minus" size={30} color={Colors.background_text_input} /></TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    numericStepperContainer: {
        flexDirection: "row",     
        alignItems: "center",
        alignSelf: "center",
        width: "50%", 
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
        fontWeight: "bold"
    }
})