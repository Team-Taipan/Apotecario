import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edf1f3',
        paddingHorizontal: 24,
        fontFamily: 'Inter',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "flex-start",
        color: Colors.primary_text,
    },
    divisorLine: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 8,
        gap: 10
    },
    titleSection: {
        color: '#5b6b60',
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Inter',
        letterSpacing: 0.4,
    },
    trace: {
        flex: 1,
        height: 19.5,
        paddingVertical: 9.25,
    },
    rectangle: {
        flex: 1,
        backgroundColor: 'rgba(51, 51, 51, 0.12)', // #3333331f
        height: 1, // Transformando o retângulo em uma linha divisória
    }
});