import { Stack } from "expo-router";

export default function MedicineLayout() {
    return (
        <Stack
        screenOptions={{
            animation: 'fade',
            animationDuration: 200,
            contentStyle: { backgroundColor: '#fff' },

        }}
        >
            <Stack.Screen name="medicine/index" options={{ title: "" }} />
            <Stack.Screen name="symptoms/index" options={{ title: "" }} />
            <Stack.Screen name="measurements/index" options={{ title: "" }} />
            <Stack.Screen name="appointment/index" options={{ title: "" }} />

        </Stack>
    );
}