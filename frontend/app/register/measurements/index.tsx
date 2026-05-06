import InputSearch from "@/components/InputSearch"
import { View, FlatList } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import CardList from "@/components/CardList"
import { useState } from "react"
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors"
import { SafeAreaView } from "react-native-safe-area-context"

interface MedicoesItem {
    id: number,
    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,
}

const Medicoes: MedicoesItem[] = [
    { id: 1, name: "Pressão Arterial", icon: "heart-pulse" },
    { id: 2, name: "Glicemia", icon: "blood-bag" },
    { id: 3, name: "Peso", icon: "scale-bathroom" },
];


export default function listMedicoes() {

    const router = useRouter();

    // Estado para pegar o texto digitado no campo de input
    const [searchQuery, setSearchQuery] = useState("");

    // popula uma lista com as medições filtradas que incluem a query
    const filteredMedicoes = Medicoes.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (

        <SafeAreaView edges={['left', 'right']} style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 24 }}>
                <InputSearch functionText={(typedText: string) => setSearchQuery(typedText)} placeHolderText="Buscar medições..." />

                { /* Sessão com a Lista de Cards */}
                <FlatList
                    data={filteredMedicoes}
                    keyExtractor={(item) => item.id.toString()} // FlatList precisa o ID saber para identificar o item como unico
                    renderItem={({ item }) => <CardList name={item.name} icon={item.icon} functionRedirectOnPress={() => router.push("/register/measurements/registroMedicao")} />}
                />
            </View>
        </SafeAreaView>
    )
}