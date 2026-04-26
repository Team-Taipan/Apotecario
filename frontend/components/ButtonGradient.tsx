
import { TouchableOpacity, Text, StyleSheet} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Colors from "@/constants/Colors";

interface ButtonGradientProps {
    text: string,
    onPress: () => void 
}

export default function ButtonGradient({ text, onPress }: ButtonGradientProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ width: '100%' }}
            activeOpacity={0.8}
        >
            <LinearGradient
                colors={['#3da696', '#2d7a6e']}
                style={[styles.button]}
            >
                <Text style={styles.buttonText}>{text}</Text>        
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 52,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
       buttonText: {
        color: Colors.background_text_input,
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'bold',
       },
})