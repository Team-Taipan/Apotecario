import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CardAgendaProps {
    dateDay: string,
    dateMonth: string,
    title: string,
    doctorName: string,
    dateHour: string,
    localization: string
}

export default function CardAgenda( { dateDay, dateMonth, dateHour, title, doctorName, localization } : CardAgendaProps) {
    return(
        <View style={styles.cardContainer}>

            <View style={styles.cardDate}>
                <Text style={styles.dateDay}>{dateDay}</Text>
                <Text style={styles.dateMonth}>{dateMonth}</Text>
            </View>

            <View style={styles.cardHr}></View>

            <View style={styles.cardTextContent}>

                <View style={styles.cardInformation}>

                    <View style={styles.mainInfo} >
                        <Text style={styles.cardTitle}>{title}</Text>
                        <Text>{doctorName}</Text>
                    </View>

                    <View>
                        <Text style={styles.cardHour}>{dateHour}</Text>
                    </View>

                </View>

                <View style={styles.cardFooter}> 
                    <MaterialCommunityIcons name="map-marker" size={17} />
                    <Text style={styles.cardLocalization}>{localization}</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 100,
        backgroundColor: "#ffffff",
        borderRadius: 14,
        marginTop:10,
        elevation: 4,
        gap: 20,
        borderLeftWidth: 4,
        borderLeftColor: Colors.accent
    
    },
    cardDate: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 25,
        alignSelf: "flex-start",
        marginTop: 15,
    },
    dateDay: {
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Inter",
    },
    dateMonth: {
        fontSize: 15,
        fontFamily: "Inter",
    },
    cardHr: {
        height: "70%",
        width: 1,
        backgroundColor: "#3333331f",
    },
    cardTextContent: {
        flex: 1
    },
    cardTitle: {
        fontFamily: "Inter",
        fontWeight: "700",
        fontSize: 16
    },
    cardFooter: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        marginTop: 10
    },
    cardLocalization: {
        fontFamily: "Inter",
        fontSize: 12,
        marginLeft: 3,
        fontWeight: "300"
    },
    cardInformation: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    cardHour: {
        fontFamily: "Inter",
        marginRight: 15

    },
    mainInfo: {
        flex: 1, 
        marginRight: 10, 
    },
})