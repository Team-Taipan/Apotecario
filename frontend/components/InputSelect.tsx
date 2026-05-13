import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '@/constants/Colors';

interface Option {
    label: string;
    value: string;
}

interface InputSelectProps {
    label?: string;
    placeholder: string;
    options: Option[];
    selectedValue: string | null;
    onValueChange: (value: string | null) => void;
    zIndex?: number;
}

const InputSelect: React.FC<InputSelectProps> = ({ 
    label, 
    placeholder, 
    options, 
    selectedValue, 
    onValueChange,
    zIndex = 1000,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <DropDownPicker
                open={open}
                value={selectedValue}
                items={options}
                setOpen={setOpen}
                setValue={(callback) => {
                    const val = callback(selectedValue);
                    onValueChange(val);
                }}
                placeholder={placeholder}
                zIndex={zIndex}
                style={styles.input}
                containerStyle={styles.field}
                dropDownContainerStyle={styles.dropdown}
                textStyle={styles.text}
                placeholderStyle={styles.placeholder}
                listMode="SCROLLVIEW"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.primary_text,
        marginBottom: 8,
    },
    field: {
        width: '100%',
    },
    input: {
        backgroundColor: Colors.background_text_input,
        borderRadius: 12,
        minHeight: 58,
        paddingHorizontal: 16,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        color: Colors.primary_text,
    },
    placeholder: {
        color: '#999',
    },
    dropdown: {
        backgroundColor: Colors.background_text_input,
        borderWidth: 0,
        borderRadius: 12,
        marginTop: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});

export default InputSelect;