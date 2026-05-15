import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import FAB from 'react-native-animated-fab';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface DraggableButtonProps {
    onPress?: () => void;
}

export default function DraggableButton({ onPress }: DraggableButtonProps) {
    return (
        <View style={styles.container}>
            <FAB
                renderSize={60}
                borderRadius={30}
                idleOpacity={0.5}
                backgroundColor={Colors.accent}
                onPress={onPress && (() => Alert.alert('Botão Pressionado!'))}
                draggable={true}
            >
                <Ionicons name='chatbox-ellipses-outline' size={30} color="#fff" />
            </FAB>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
});

//refs: https://www.npmjs.com/package/@fengzie/react-native-animated-fab