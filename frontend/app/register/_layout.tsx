import { Stack } from "expo-router";
import Colors from "@/constants/Colors";

export default function MedicineLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#2d7a6e10', // Cor aproximada da tela no olhometro
                },
                headerShadowVisible: false, // Remove a linha/sombra embaixo
                headerTintColor: Colors.primary_text, // Cor da seta e texto
                animation: 'fade',
                animationDuration: 200,
                contentStyle: {
                    backgroundColor: Colors.background,
                },
            }}
        >
            <Stack.Screen name="medicine/index" options={{ title: "" }} />
            <Stack.Screen name="medicine/tratamentoMedico" options={{ title: "" }} />
            <Stack.Screen name="medicine/estoqueMedicamento" options={{ title: "" }} />
            <Stack.Screen name="symptoms/index" options={{ title: "" }} />
            <Stack.Screen name="symptoms/registroSintomas" options={{ title: "" }} />
            <Stack.Screen name="measurements/index" options={{ title: "" }} />
            <Stack.Screen name="measurements/registroMedicao" options={{ title: "" }} />
            <Stack.Screen name="appointment/index" options={{ title: "" }} />

        </Stack>
    );
}