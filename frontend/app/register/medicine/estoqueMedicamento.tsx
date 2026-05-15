import { useState } from "react";
import { Text, View, Switch } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonGradient from "@/components/ButtonGradient";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import InputNumericStepper from "@/components/InputNumericStepper";
import { styles } from "../_forms_styles";

export default function EstoqueMedicamento() {

    const router = useRouter();

    const [qntdMin, setQntdMin] = useState(5);
    const [qntdAtual, setQntdAtual] = useState(20);
    const [avisarEstoqueBaixo, setAvisarEstoqueBaixo] = useState(true);

    return (
        <SafeAreaView edges={['left', 'right']} style={styles.contentContainer}>
                <View style={styles.formsContainer}>
                    <View>
                        <Text style={styles.title}>Estoque de Medicamentos</Text>
                        <Text style={styles.subTitle}>Registre informações sobre seu estoque para não interromper o tratamento</Text>
                    </View>

                    <View>
                        <Text style={styles.inputLabel}>Seu estoque atual</Text>
                        <InputNumericStepper
                            value={qntdAtual}
                            onValueChange={setQntdAtual}
                        />
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, gap: 15 }}>
                            <Text style={[styles.helperText, { flex: 1, marginBottom: 0 }]}>
                                Deseja ser avisado quando o estoque estiver baixo?
                            </Text>
                            <Switch
                                value={avisarEstoqueBaixo}
                                onValueChange={setAvisarEstoqueBaixo}
                                trackColor={{ false: "#767577", true: Colors.accent }}
                                thumbColor={avisarEstoqueBaixo ? "#fff" : "#f4f3f4"}
                            />
                        </View>

                        {avisarEstoqueBaixo && (
                            <View>
                                <Text style={styles.inputLabel}>Quantidade Mínima</Text>
                                <InputNumericStepper
                                    minValue={5}
                                    value={qntdMin}
                                    onValueChange={setQntdMin}
                                />
                            </View>
                        )}
                    </View>
                </View>

                <View style={styles.footer}>
                    <ButtonGradient onPress={() => router.push("/(main)/")} text="Salvar" />
                </View>
        </SafeAreaView>
    )

}
