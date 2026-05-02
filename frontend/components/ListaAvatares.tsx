import { StyleSheet, TouchableOpacity, FlatList, View, Image, ImageSourcePropType} from "react-native"
import Colors from "@/constants/Colors"




interface ListaAvataresProps {

    AVATARES: {id: string, res: ImageSourcePropType}[],
    avatarSelecionado: {id: string, res: ImageSourcePropType}
    onPress: (item: {id: string, res: ImageSourcePropType}) => void
}


export default function ListaAvatares( { AVATARES, avatarSelecionado, onPress } : ListaAvataresProps) {


    return(
        <View>
            {/* Lista de Avatares em Grid, usando o FlatList, para fazer a exibição em grade */}
            <FlatList
                data={AVATARES}
                numColumns={3}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.gridContainer}
                renderItem={({ item }) => (

                    // Cada avatar é um TouchableOpacity para seleção e tem um destaque se for o selecionado
                    <TouchableOpacity
                        style={[
                            styles.avatarOption,
                            avatarSelecionado.id === item.id && styles.avatarSelected
                        ]}
                        onPress={() =>  onPress(item) }
                    >
                        <Image source={item.res} style={styles.avatarImage} />

                    </TouchableOpacity>

                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    gridContainer: {
        alignItems: 'center',
    },
    avatarOption: {
        padding: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'transparent',
        margin: 5,
    },
    avatarSelected: {
        borderColor: Colors.accent,
    },
    avatarImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    }
})