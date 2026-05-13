import React, { useState } from 'react';
import { Text, View } from 'react-native'
import { useRouter } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "../_forms_styles";
import Colors from "@/constants/Colors";
import ButtonGradient from "@/components/ButtonGradient";
import { InputText } from '@/components/InputText';
import InputSelect from '@/components/InputSelect';

export default function adicionarMedicamento() {

    const router = useRouter();

    const [nome, setNome] = useState('');
    const [formaFisica, setFormaFisica] = useState<string | null>(null);

    const formasFisicas = [
        { label: 'Comprimido', value: 'comprimido' },
        { label: 'Cápsula', value: 'capsula' },
        { label: 'Gotas', value: 'gotas' },
        { label: 'Xarope', value: 'xarope' },
        { label: 'Inalador', value: 'inalador' },
        { label: 'Injeção', value: 'injecao' },
        { label: 'Pomada', value: 'pomada' },
        { label: 'Outro', value: 'outro' },
    ];

    return (
        <SafeAreaView edges={['left', 'right']} style={styles.contentContainer}>
            <View style={styles.formsContainer}>
                <View>
                    <Text style={styles.title}>Adicione um Medicamento</Text>
                    <Text style={styles.subTitle}>Registre informações sobre seu medicamento para não interromper o tratamento.</Text>

                    <Text style={styles.inputLabel}>Nome do Medicamento</Text>
                    <InputText
                        placeholder="Ex: Chá de Erva Doce"
                        keyboardType="default"
                        value={nome}
                        onChangeText={setNome}
                        autoCapitalize="none"
                    />

                    <Text style={styles.inputLabel}>Forma Física</Text>
                    <InputSelect
                        placeholder="Selecione a forma..."
                        options={formasFisicas}
                        selectedValue={formaFisica}
                        onValueChange={setFormaFisica}
                    />
                </View>
                <Text style={styles.helperText}>Nota: Esse medicamento ficará visível somente para você. Logo, outros usuários, não conseguiram utilizá-lo.</Text>
            </View>

            <View style={styles.footer}>
                <ButtonGradient onPress={() => router.push("/(main)/")} text="Cadastrar" />
            </View>
        </SafeAreaView>
    )
}