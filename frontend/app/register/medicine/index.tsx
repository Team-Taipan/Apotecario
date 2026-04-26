import CardList from "@/components/CardList";
import InputSearch from "@/components/InputSearch"
import Colors from "@/constants/Colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Text, TextInput, View, StyleSheet, FlatList } from "react-native"
import { useState, useMemo } from "react";
interface MedicamentoItem {
    
    id: number,
    name: string,
    icon: keyof typeof MaterialCommunityIcons.glyphMap,

}

const Medicamentos: MedicamentoItem[] = [
    { id: 1, name: "Paracetamol", icon: "pill" },
    { id: 2, name: "Dipirona (Gotas)", icon: "water"},
    { id: 3, name: "Insulina", icon: "needle"},
] ;



export default function listMedicamentos() {
        
    // Estado para pegar o texto digitado no campo de input
    const [ searchQuery, setSearchQuery ] = useState("");

    // popula uma lista com os medicamentos filtrados que incluem a query
    const filteredMedicamentos = Medicamentos.filter((item) => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >

            <InputSearch functionText={(typedText: string) => setSearchQuery(typedText)} placeHolderText="Buscar Medicamentos..." />

            { /* Sessão com a Lista de Cards */ }
            
            <FlatList 
                data={filteredMedicamentos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CardList name={item.name} icon={item.icon} />}
            />
            


        </View>


    )

}

const styles = StyleSheet.create({

    

})

