import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface ModalItemProps {
    iconName: keyof typeof MaterialCommunityIcons.glyphMap; // Garante que o nome do ícone exista
    title: string,
    subTitle: string,
    functionRedirect: () => void;
}

export function ModalItem({ iconName, title, subTitle, functionRedirect }: ModalItemProps) {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            activeOpacity={0.7}
            onPress={functionRedirect}
        >
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name={iconName}
                    size={40}
                    color={Colors.accent}
                />
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemSubTitle}>{subTitle}</Text>
            </View>
            <View style={styles.chevronContainer}>
                <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color={Colors.primary_text}
                />
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '95%',
        marginTop: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: "#E0E0E0",
        backgroundColor: "#FFF",
        borderWidth: 1.5,
        elevation: 2,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    itemContent: {
        flex: 1,
        flexShrink: 1,
        marginHorizontal: 12,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    iconContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d9ebe8a2",
        borderRadius: 50
    },
    itemTitle: {
        color: Colors.primary_text,
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: 14,
        paddingBottom: 5,
    },

    itemSubTitle: {
        fontSize: 12,
        lineHeight: 16,
        flexWrap: 'wrap',
        color: Colors.secondary_text,
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'justify',
    },
    chevronContainer: {
        marginLeft: 8,
    }
});