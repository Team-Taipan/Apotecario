import { StyleSheet, TouchableOpacity, FlatList, View, Image, ImageSourcePropType, Text} from "react-native"
import Colors from "@/constants/Colors"

type Avatar = { id: string; res: ImageSourcePropType; name: string };

interface ListaAvataresProps {

    AVATARES: Avatar[];
    avatarSelecionado: Avatar;
    onSelectAvatar: (item: Avatar) => void;
    showNames?: boolean;
}


export default function ListaAvatares( { AVATARES, avatarSelecionado, onSelectAvatar, showNames} : ListaAvataresProps) {

    return(
        <View>
            {/* Lista de Avatares em Grid, usando o FlatList, para fazer a exibição em grade */}
            <FlatList
                data={AVATARES}
                numColumns={3}
                keyExtractor={(item) => item.id}
                extraData={avatarSelecionado}
                contentContainerStyle={showNames ? styles.gridContainer : styles.gridContainerNoName}
                renderItem={({ item }) => (

                    // Cada avatar é um TouchableOpacity para seleção e tem um destaque se for o selecionado
                    <TouchableOpacity
                        style={[
                            showNames ? styles.avatarOption : styles.avatarOptionNoName,
                            avatarSelecionado.id === item.id && (showNames ? styles.avatarSelected : styles.avatarSelectedNoName)
                        ]}
                        onPress={() =>  onSelectAvatar(item) }
                    >
                        <Image source={item.res} style={styles.avatarImage} />
                        {showNames && <Text style={styles.avatarName}>{item.name}</Text>}
                    </TouchableOpacity>

                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    gridContainer: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },
    avatarOption: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
    },
    avatarSelected: {
        borderBottomWidth: 3,
        borderColor: Colors.accent,
        color: Colors.accent,
    },
    avatarImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        
    },
    avatarName: {
        marginTop: 15
    },

    // Estilos da lista no Perfil
    gridContainerNoName: {
        alignItems: 'center',
    },
    avatarOptionNoName: {
        padding: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'transparent',
        margin: 5,
    },

    avatarSelectedNoName: {
        borderColor: Colors.accent,
    },
})