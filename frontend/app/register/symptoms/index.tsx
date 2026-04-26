import InputSearch from "@/components/InputSearch"
import { View, FlatList } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import CardList from "@/components/CardList"

interface SintomasItem {
    
    id: number,
    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,

}


const sintomas: SintomasItem [] = [
    { id: 1, name: "Dor de Cabeça", icon: "head-alert-outline" },
    { id: 2, name: "Vômito", icon: "emoticon-sick-outline"},
    { id: 3, name: "Tontura", icon: "head-sync-outline"},
] ;

export default function listSintomas() {
    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >

            <InputSearch placeHolderText="Buscar Sintomas..." />

            <FlatList 
                data={sintomas}
                keyExtractor={(item) => item.id.toString()} // FlatList precisa o ID saber para identificar o item como unico
                renderItem={({item}) => <CardList name={item.name} icon={item.icon} />}
            />

        </View>
    )

}

