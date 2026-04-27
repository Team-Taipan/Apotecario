import { TextInput, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

interface InputTextNotes {
    placeholder: string,
    numberOfLines: number
}

export default function InputTextNotes( { placeholder, numberOfLines } : InputTextNotes) {
    return(
        <TextInput style={styles.inputNotes} placeholderTextColor="#999" placeholder="Digite sua Anotação..." multiline numberOfLines={4} />
    )
}

const styles = StyleSheet.create({
    inputNotes: {
        backgroundColor: Colors.background_text_input,
        borderColor: Colors.accent,
        borderWidth: 1.5,
        borderRadius: 4,
        width: "100%",
        marginTop: 15,
        textAlignVertical: "top",
        fontSize: 15, 
        padding: 10
    }
})