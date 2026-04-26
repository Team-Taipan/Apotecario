import { StyleSheet, Text, View } from "react-native";
import ButtonGradient from "@/components/ButtonGradient";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import InputNumericStepper from "@/components/InputNumericStepper";

export default function EstoqueMedicamento() {

    const router = useRouter();

    return(

        <View style={{flex: 1 , backgroundColor: Colors.background}}>

            <View style={styles.contentContainer}>
                
                <View style={styles.formsContainer}>
                    <View>
                        <Text style={styles.title}>Estoque de Medicamentos</Text>
                        <Text style={styles.subTitle}>Registre informações sobre seu estoque para não interromper o tratamento</Text>
                    </View>

                    <View>
                        <Text style={styles.inputLabel}>Seu estoque atual: </Text> 
                        <InputNumericStepper />
                    </View>
              
                    <View>
                        <Text style={styles.subTitle}> Deseja ser avisado quando o estoque estiver baixo? </Text>
                        <Text style={styles.inputLabel}> Quantidade Mínima: </Text> 
                        <InputNumericStepper />
                    </View>
                </View>

                <View style={styles.footer}>
                    <ButtonGradient onPress={()=> router.push("/register/medicine/estoqueMedicamento")} text="Próximo" />    
                </View>   

            </View>         
        </View>
    )

}

const styles = StyleSheet.create({

    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        justifyContent: 'space-between',
    },
    footer: {
        marginBottom: 60,
    },
    inputLabel: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        color: Colors.primary_text,
        marginBottom: 8,
            
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.accent
    },
    subTitle: {
        marginTop: 5,
        fontSize: 13,
        color: Colors.secondary_text,
        textAlign: "center",
        lineHeight: 22,
    },
    formsContainer: {
        gap: 20,
    },
    helperText: {
        fontSize: 12,
        color: Colors.secondary_text,
        marginTop: 4,
        lineHeight: 16,
    },

})