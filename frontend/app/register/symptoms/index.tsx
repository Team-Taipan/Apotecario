import InputSearch from "@/components/InputSearch"
import { Text, View, StyleSheet } from "react-native"

export default function listSintomas() {
    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >
            <InputSearch placeHolderText="Buscar Sintomas..." />
        </View>
    )

}

