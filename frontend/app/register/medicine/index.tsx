import InputSearch from "@/components/InputSearch"
import Colors from "@/constants/Colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Text, TextInput, View, StyleSheet, FlatList } from "react-native"

const Medicamentos = [
    { id: '1', name: "Tylenol", principio: "Paracetamol" },
    { id: '2', name: "Dipirona", principio: "Dipirona" },
    { id: '3', name: "Tylenol", principio: "Paracetamol" },
    { id: '4', name: "Tylenol", principio: "Paracetamol" },
];


export default function listMedicamentos() {
    return(

        <View style={{ justifyContent: "center", marginHorizontal: 20}} >

            <InputSearch placeHolderText="Buscar Medicamentos..." />

            { /* Sessão com a Lista de Cards */ }
            { /*
            <FlatList 
                data={Medicamentos}
                renderItem={({item}) => <Item title={item.name} />}
            />
            */ }



        </View>


    )

}

const styles = StyleSheet.create({

    

})

