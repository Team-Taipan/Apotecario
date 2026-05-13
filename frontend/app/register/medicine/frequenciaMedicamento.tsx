import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../_forms_styles";
import Colors from "@/constants/Colors";
import ButtonGradient from "@/components/ButtonGradient";
import InputRadioButton from '@/components/InputRadioButton';

export default function frequenciaMedicamento() {
    const router = useRouter();

    const [frequencia, setFrequencia] = useState<string | null>(null);

    const opcoesFrequencia = [
        { label: '1 vez ao dia', value: '1_vez_dia' },
        { label: '2 vezes ao dia', value: '2_vezes_dia' },
        { label: 'Quando necessário', value: 'sos' },
        { label: 'Outro', value: 'outro' },
    ];

    return (
        <SafeAreaView edges={['left', 'right']} style={styles.contentContainer}>
            <View style={styles.formsContainer}>
                <View>
                    <Text style={styles.title}>Frequência do Medicamento</Text>
                    <Text style={styles.subTitle}>Com que frequência você deve tomar este medicamento?</Text>
                    <View style={{ marginTop: 10 }}>
                        <InputRadioButton
                            options={opcoesFrequencia}
                            selectedValue={frequencia}
                            onValueChange={(val) => setFrequencia(val)}
                        />
                    </View>
                </View>
                <Text style={styles.helperText}>
                    Nota: Essa informação será usada para configurar seus lembretes automáticos de dose.
                </Text>
            </View>

            <View style={styles.footer}>
                <ButtonGradient
                    onPress={() => router.push("/register/medicine/tratamentoMedico")}
                    text="Próximo"
                />
            </View>
        </SafeAreaView>
    );
}