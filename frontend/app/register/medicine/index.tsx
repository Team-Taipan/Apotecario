import CardList from "@/components/CardList";
import InputSearch from "@/components/InputSearch"
import Colors from "@/constants/Colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { View, StyleSheet, FlatList } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";
import { useRouter } from "expo-router";

interface MedicamentoItem {
    id: number,
    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,
}

const Medicamentos: MedicamentoItem[] = [
    { id: 1, name: "Paracetamol", icon: "pill" },
    { id: 2, name: "Dipirona (Gotas)", icon: "water" },
    { id: 3, name: "Insulina", icon: "needle" },
];

export default function listMedicamentos() {

    const router = useRouter();

    // Estado para pegar o texto digitado no campo de input
    const [searchQuery, setSearchQuery] = useState("");

    // popula uma lista com os medicamentos filtrados que incluem a query
    const filteredMedicamentos = Medicamentos.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView edges={['left', 'right']} style={{ flex: 1 }}>
            <View style={{ flex: 1 }} >
                <View style={{ paddingHorizontal: 24 }}>
                    <InputSearch functionText={(typedText: string) => setSearchQuery(typedText)} placeHolderText="Buscar Medicamentos..." />
                    { /* Sessão com a Lista de Cards */}
                    <FlatList
                        data={filteredMedicamentos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CardList name={item.name} icon={item.icon} functionRedirectOnPress={() => router.push("/register/medicine/tratamentoMedico")} />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})