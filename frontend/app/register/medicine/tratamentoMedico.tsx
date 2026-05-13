import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import InputDatePicker from "@/components/InputDatePicker";
import ButtonGradient from "@/components/ButtonGradient";
import InputNumericStepper from "@/components/InputNumericStepper";
import InputSelect from "@/components/InputSelect";
import { useRouter, useLocalSearchParams } from "expo-router";
import { styles } from "../_forms_styles";
import { useState, useEffect } from "react";

export default function tratamentoMedico() {

    const router = useRouter();
    const params = useLocalSearchParams<{ frequenciaSelecionada: string }>();
    
    const [intervaloLembrete, setIntervaloLembrete] = useState<string | null>(null);
    const [frequenciaDiaria, setFrequenciaDiaria] = useState(1);

    // Sincroniza a escolha da tela anterior com o estado local
    useEffect(() => {
        if (params.frequenciaSelecionada) {
            if (params.frequenciaSelecionada === '1_vez_dia') setFrequenciaDiaria(1);
            else if (params.frequenciaSelecionada === '2_vezes_dia') setFrequenciaDiaria(2);
            else if (params.frequenciaSelecionada === 'outro') setFrequenciaDiaria(2); // Assume que 'outro' precisará de intervalo
        }
    }, [params.frequenciaSelecionada]);

    const opcoesIntervalo = [
        { label: 'A cada 4 horas', value: '4h' },
        { label: 'A cada 6 horas', value: '6h' },
        { label: 'A cada 8 horas', value: '8h' },
        { label: 'A cada 12 horas', value: '12h' },
        { label: 'Personalizado', value: 'personalizado' },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>

            <View style={styles.contentContainer}>

                <View style={styles.formsContainer}>

                    <View>
                        <Text style={styles.title}>Informações sobre seu Tratamento</Text>
                        <Text style={styles.subTitle}>Registre informações sobre seu tratamento para nos ajudar a personalizar seus lembretes</Text>
                    </View>

                    {/* componente incremental */}
                    <View>
                        <Text style={styles.inputLabel}>Quantidade de Medicamento por Dose</Text>
                        <InputNumericStepper />
                    </View>

                    <View style={{ flexDirection: 'column', gap: 10 }}>

                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.inputLabel}>Data de Início</Text>
                                <InputDatePicker defaultDate={new Date()} mode="date" />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.inputLabel}>Horário de Uso</Text>
                                <InputDatePicker defaultDate={new Date()} mode="time" />
                            </View>
                        </View>

                        {frequenciaDiaria > 1 && (
                            <View>
                                <Text style={styles.inputLabel}>Intervalo dos Lembretes</Text>
                                <InputSelect
                                    placeholder="Selecione o intervalo..."
                                    options={opcoesIntervalo}
                                    selectedValue={intervaloLembrete}
                                    onValueChange={setIntervaloLembrete}
                                />
                            </View>
                        )}

                        <View>
                            <Text style={styles.inputLabel}>Data de Termino</Text>
                            <InputDatePicker mode="date" />
                            <Text style={styles.helperText}> Deixe em branco caso não haja uma data de fim definida. </Text>
                        </View>
                    </View>

                </View>

                <View style={styles.footer}>
                    <ButtonGradient onPress={() => router.push("/register/medicine/estoqueMedicamento")} text="Próximo" />
                </View>

            </View>
        </View>
    )
}


// Ref: WheelPicker (github) : https://github.com/quidone/react-native-wheel-picker/tree/main
// Ref: WheelPicker (npm) : https://www.npmjs.com/package/@quidone/react-native-wheel-picker