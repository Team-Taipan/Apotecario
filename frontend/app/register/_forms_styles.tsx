import { StyleSheet } from "react-native"
import Colors from "@/constants/Colors"

export const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        justifyContent: 'space-between',
    },
    footer: {
        marginBottom: 60,
    },
    inputLabel: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        color: Colors.primary_text,
        marginBottom: 8,
               
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.accent
    },
    subTitle: {
        fontFamily: 'Inter',
        marginTop: 5,
        fontSize: 13,
        color: Colors.secondary_text,
        textAlign: "center",
        lineHeight: 22,
    },
    formsContainer: {
        gap: 2,
    },
    helperText: {
        fontFamily: 'Inter',
        fontSize: 12,
        color: Colors.secondary_text,
        marginTop: 4,
        lineHeight: 16,
    }, 
})