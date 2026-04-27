import { Text, View } from "react-native";
import ButtonGradient from "@/components/ButtonGradient";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import InputNumericStepper from "@/components/InputNumericStepper";
import { styles } from "../_forms_styles";

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
