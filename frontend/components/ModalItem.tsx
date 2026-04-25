import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons,  } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface ModalItemProps {
    iconName: keyof typeof MaterialCommunityIcons.glyphMap; // Garante que o nome do ícone exista
    title: String,
    subTitle: String
}

export function ModalItem({iconName, title, subTitle} : ModalItemProps) {
    return (
        <TouchableOpacity 
            style={styles.itemContainer}
            activeOpacity={0.7}
        >
            <MaterialCommunityIcons name={iconName} size={40} color={Colors.accent}  />
            <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemSubTitle}>{subTitle}</Text> 
            </View>
            <MaterialCommunityIcons name="chevron-right" size={40} color={Colors.primary_text}  />
                        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    itemContainer: {
        width: '90%',
        marginTop: 10,
        padding: 3,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: "#E0E0E0",
        backgroundColor: "#FFF",
        borderWidth: 1.5,
        elevation: 2,
        // IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },

    itemContent: {
        flex: 1, 
        flexShrink: 1,
        marginHorizontal: 12,
    },
    
    itemTitle: {
        color: "#1A1A1A",
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: 14
    },

    itemSubTitle: {
        fontSize: 12,
        lineHeight: 16,
        flexWrap: 'wrap',
        color: "#666"
        
    }
});