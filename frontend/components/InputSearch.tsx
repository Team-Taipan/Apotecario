import Colors from "@/constants/Colors"
import { View, TextInput, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface InputSearchProps {
    placeHolderText: string
}


export default function InputSearch({ placeHolderText } : InputSearchProps) {
    return(
         <View style={styles.containerSearchInput}>
            <MaterialCommunityIcons style={styles.iconSearchInput} name="magnify" size={30} color={Colors.accent}  />
            <TextInput  style={styles.inputSearch} placeholder={placeHolderText} placeholderTextColor={Colors.secondary_text}></TextInput>
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

