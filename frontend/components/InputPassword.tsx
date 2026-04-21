import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, View, ViewStyle, StyleProp, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

type AuthInputProps = TextInputProps & {
    containerStyle?: StyleProp<ViewStyle>; // Melhor tipagem para estilos de View
};

export function InputPassword({ style, containerStyle, ...props }: AuthInputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={[styles.field, containerStyle]}>
            <TextInput
                {...props} // As props vêm primeiro
                style={[styles.input, style]}
                placeholderTextColor="#999"
                // Esta linha DEVE vir depois do {...props} para não ser sobrescrita
                secureTextEntry={!isPasswordVisible}
            />
            
            <TouchableOpacity 
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                style={styles.eyeButton}
                activeOpacity={0.7}
            >
                <Ionicons 
                    name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} 
                    size={22} 
                    color="#2b3a32" 
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    field: {
        width: '100%',
        height: 58,
        backgroundColor: Colors.background_text_input,
        borderRadius: 12,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3, // Sombra no Android
        shadowColor: '#000', // Sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    input: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 16,
        fontSize: 16,
        color: Colors.primary_text,
        backgroundColor: 'transparent',
    },
    eyeButton: {
        width: 50, // Largura fixa para a área do clique
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});