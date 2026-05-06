import InputSearch from "@/components/InputSearch"
import { View, FlatList } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import CardList from "@/components/CardList"
import { useState } from "react"
import { useRouter } from "expo-router";

interface SintomasItem {
    id: number,
    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,
}

const Sintomas: SintomasItem[] = [
    { id: 1, name: "Dor de Cabeça", icon: "head-alert-outline" },
    { id: 2, name: "Vômito", icon: "emoticon-sick-outline" },
    { id: 3, name: "Tontura", icon: "head-sync-outline" },
];

export default function listSintomas() {

    const router = useRouter();

    // Estado para pegar o texto digitado no campo de input
    const [searchQuery, setSearchQuery] = useState("");

    // popula uma lista com os sintomas filtrados que incluem a query
    const filteredSintomas = Sintomas.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (

        <SafeAreaView edges={['left', 'right']} style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 24 }}>
                <InputSearch functionText={(typedText: string) => setSearchQuery(typedText)} placeHolderText="Buscar Sintomas..." />

                <FlatList
                    data={filteredSintomas}
                    keyExtractor={(item) => item.id.toString()} // FlatList precisa o ID saber para identificar o item como unico
                    renderItem={({ item }) => <CardList name={item.name} icon={item.icon} functionRedirectOnPress={() => router.push("/register/symptoms/registroSintomas")} />}
                />
            </View>
        </SafeAreaView>
    )
}