import InputSearch from "@/components/InputSearch"
import { View, FlatList } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import CardList from "@/components/CardList"
import { useState } from "react"

interface SintomasItem {
    
    id: number,
    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,

}


const Sintomas: SintomasItem [] = [
    { id: 1, name: "Dor de Cabeça", icon: "head-alert-outline" },
    { id: 2, name: "Vômito", icon: "emoticon-sick-outline"},
    { id: 3, name: "Tontura", icon: "head-sync-outline"},
] ;

export default function listSintomas() {

    // Estado para pegar o texto digitado no campo de input
    const [ searchQuery, setSearchQuery ] = useState("");
    
    // popula uma lista com os sintomas filtrados que incluem a query
    const filteredSintomas = Sintomas.filter((item) => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >
 
            <InputSearch functionText={(typedText: string) => setSearchQuery(typedText)} placeHolderText="Buscar Sintomas..." />

            <FlatList 
                data={filteredSintomas}
                keyExtractor={(item) => item.id.toString()} // FlatList precisa o ID saber para identificar o item como unico
                renderItem={({item}) => <CardList name={item.name} icon={item.icon} />}
            />

        </View>
    )

}

