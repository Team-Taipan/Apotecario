import InputSearch from "@/components/InputSearch"
import Colors from "@/constants/Colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Text, TextInput, View, StyleSheet } from "react-native"

export default function listMedicamentos() {
    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >
            <InputSearch placeHolderText="Buscar Medicamentos..." />
        </View>
    )

}

const styles = StyleSheet.create({

    

})

