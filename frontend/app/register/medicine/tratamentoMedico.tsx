import { InputText } from "@/components/InputText"
import { View, Text, StyleSheet } from "react-native"
import Colors from "@/constants/Colors"

export default function tratamentoMedico() {
    return (
        <View style={{ justifyContent: "center", marginHorizontal:20, backgroundColor: Colors.background}}>

            
            <Text style={styles.treatmentTitle}>Informações sobre seu Tratamento</Text>
            <Text style={styles.treatmentSubTitle}>Registre informações sobre seu tratamento para nos ajudar a personalizar seus lembretes</Text>

            <InputText placeholder="Digite a data de fim do seu tratamentno" />
            <InputText placeholder="Digite a quantidade tomada por dose..." />


        </View>
    )
}

const styles = StyleSheet.create({

    treatmentTitle: {

    },
    treatmentSubTitle: {

    },
})