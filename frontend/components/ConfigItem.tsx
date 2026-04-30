import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface ConfigItemProps {
    icon: React.ReactNode; // Aceita qualquer componente de ícone
    iconBg?: string;
    title: string;
    subtitle?: string;
    type?: 'navigation' | 'switch';
    value?: boolean;
    onValueChange?: (newValue: boolean) => void;
    onPress?: () => void;
    rightText?: string;
    isLast?: boolean;
}

export const ConfigItem: React.FC<ConfigItemProps> = ({
    icon,
    iconBg = '#F9EBE6',
    title,
    subtitle,
    type = 'navigation',
    value,
    onValueChange,
    onPress,
    rightText,
    isLast = false
}) => {
    const Wrapper = type === 'switch' ? View : TouchableOpacity;
    // Se o item for um Switch, usa uma View. Se for um item de Navegação, transforma em um TouchableOpacity.

    return (
        <View>
            <Wrapper
                style={styles.cardItem}
                onPress={onPress}
                activeOpacity={0.7}
                disabled={type === 'switch'}
            >
                <View style={[styles.iconContainer, { backgroundColor: iconBg }]}>
                    {icon}
                </View>

                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemTitle}>{title}</Text>
                    {subtitle && <Text style={styles.itemSub}>{subtitle}</Text>}
                </View>

                <View style={styles.rightAction}>
                    {type === 'switch' ? (
                        <Switch
                            trackColor={{ false: "#dfdfdf", true: Colors.accent, }}
                            thumbColor={"#fff"}
                            onValueChange={onValueChange}
                            value={value}
                        />
                    ) : (
                        <View style={styles.row}>
                            {rightText && <Text style={styles.actionText}>{rightText}</Text>}
                            <Ionicons name="chevron-forward" size={18} color="#BCBCBC" />
                        </View>
                    )}
                </View>
            </Wrapper>
            {!isLast && <View style={styles.innerSeparator} />}
        </View>
    );
};

const styles = StyleSheet.create({
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12
    },
    itemTextContainer: {
        flex: 1
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.primary_text,
        fontFamily: 'Inter',
    },
    itemSub: {
        fontSize: 12,
        color: '#7A8B80',
        marginTop: 2,
        fontFamily: 'Inter',
    },
    rightAction: {
        marginLeft: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionText: {
        color: '#BCBCBC',
        fontSize: 14,
        marginRight: 4
    },
    innerSeparator: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginLeft: 52
    }
});