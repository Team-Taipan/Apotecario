import Colors from "@/constants/Colors"
import { View, TextInput, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface InputSearchProps {
    placeHolderText: string,
    functionText: (typedText: string) => void;  // função recebia para setar o estado da query
}


export default function InputSearch({ placeHolderText, functionText }: InputSearchProps) {
    return (
        <View style={styles.containerSearchInput}>
            <TextInput placeholderTextColor="#999" onChangeText={(text) => functionText(text)} style={styles.inputSearch} placeholder={placeHolderText} ></TextInput>
            <MaterialCommunityIcons name="magnify" size={28} color={Colors.accent} />
            { /* quando ocorre uma mudança no campo de texto, chama a função passada como parametro passando o texto digitado */}
        </View>
    )
}

const styles = StyleSheet.create({

    containerSearchInput: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        borderRadius: 14,
        borderColor: "#E0E0E0",
        borderWidth: 1.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 15,
    },
    inputSearch: {
        padding: 10,
        fontFamily: "Inter",
        fontSize: 14,
        flex: 1,
        fontWeight: "600",
        color: Colors.primary_text
    },

})

