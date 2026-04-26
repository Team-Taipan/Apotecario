import CardList from "@/components/CardList";
import InputSearch from "@/components/InputSearch"
import Colors from "@/constants/Colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Text, TextInput, View, StyleSheet, FlatList } from "react-native"

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
    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >

            <InputSearch placeHolderText="Buscar Medicamentos..." />

            { /* Sessão com a Lista de Cards */ }
            
            <FlatList 
                data={Medicamentos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CardList name={item.name} icon={item.icon} />}
            />
            


        </View>


    )

}

const styles = StyleSheet.create({

    

})

