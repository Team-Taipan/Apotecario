import InputSearch from "@/components/InputSearch"
import { Text, View, StyleSheet } from "react-native"

export default function listMedicoes() {
    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >
            <InputSearch placeHolderText="Buscar medições..." />
        </View>
    )

}

