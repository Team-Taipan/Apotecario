import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

interface Option {
    label: string;
    value: string;
}

interface InputRadioButtonProps {
    options: Option[];
    selectedValue: string | null;
    onValueChange: (value: string) => void;
}

const InputRadioButton: React.FC<InputRadioButtonProps> = ({ options, selectedValue, onValueChange }) => {
    return (
        <View style={styles.container}>
            {/* Mapeamento de Opções: transforma o array de dados em elementos visuais */}
            {options.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    style={[
                        styles.radioItem,
                        selectedValue === option.value && styles.selectedRadioItem
                    ]}
                    onPress={() => onValueChange(option.value)}
                    activeOpacity={0.7}
                >
                    {/* Círculo Externo do Radio */}
                    <View style={[
                        styles.radioCircle,
                        selectedValue === option.value && styles.selectedRadioCircle
                    ]}>

                        {/* Ponto interno do Radio se estiver selecionado */}
                        {selectedValue === option.value && <View style={styles.selectedInnerCircle} />}
                    </View>

                    {/* Texto da Opção */}
                    <Text style={[
                        styles.radioText,
                        selectedValue === option.value && styles.selectedRadioText
                    ]}>
                        {option.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 12,
        marginBottom: 10,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.background_text_input,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    selectedRadioItem: {
        backgroundColor: '#e6f4f1',
        borderColor: Colors.accent,
        borderWidth: 1,
    },
    radioCircle: {
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    selectedRadioCircle: {
        borderColor: Colors.accent,
    },
    selectedInnerCircle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: Colors.accent,
    },
    radioText: {
        fontSize: 16,
        color: Colors.primary_text,
    },
    selectedRadioText: {
        fontWeight: 'bold',
        color: Colors.accent,
    },
});

export default InputRadioButton;