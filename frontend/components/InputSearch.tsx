import Colors from "@/constants/Colors"
import { View, TextInput, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface InputSearchProps {
    placeHolderText: string,
    functionText: (typedText: string) => void;  // função recebia para setar o estado da query
}


export default function InputSearch({ placeHolderText, functionText } : InputSearchProps) {
    return(
         <View style={styles.containerSearchInput}>
            <MaterialCommunityIcons style={styles.iconSearchInput} name="magnify" size={30} color={Colors.accent}  />
            { /* quando ocorre uma mudança no campo de texto, chama a função passada como parametro passando o texto digitado */}
            <TextInput onChangeText={(text) => functionText(text)} style={styles.inputSearch} placeholder={placeHolderText} placeholderTextColor={Colors.secondary_text}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    
    containerSearchInput: {
        backgroundColor: "#FFFFFF",
        borderColor: Colors.accent,
        borderWidth: 1.5,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        width: "100%",
        height: 55,
        marginTop: 15
    },
    iconSearchInput: {
        marginLeft: 10
    },
    inputSearch: {
        padding: 12,
        fontSize: 14,
        width: "100%"
    },
    
})

