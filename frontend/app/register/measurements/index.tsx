import InputSearch from "@/components/InputSearch"
import { View,  FlatList } from "react-native"
import { MaterialCommunityIcons} from "@expo/vector-icons"
import CardList from "@/components/CardList"

interface MedicoesItem {
    
    id: number,
    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,

}


const Medicoes: MedicoesItem [] = [
    { id: 1, name: "Pressão Arterial", icon: "heart-pulse" },
    { id: 2, name: "Glicemia", icon: "blood-bag"},
    { id: 3, name: "Peso", icon: "scale-bathroom"},
] ;


export default function listMedicoes() {
    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >
            <InputSearch placeHolderText="Buscar medições..." />

            { /* Sessão com a Lista de Cards */ }
                        
            <FlatList 
                data={Medicoes}
                keyExtractor={(item) => item.id.toString()} // FlatList precisa o ID saber para identificar o item como unico
                renderItem={({item}) => <CardList name={item.name} icon={item.icon} />}
            />
                        
        </View>
    )

}

