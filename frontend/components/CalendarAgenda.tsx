import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";


export default function CalendarAgenda() {

    const today = new Date().toISOString().split("T")[0]; // pegando a hora atual

    return(

        <View style={styles.calendarContainer}>
                <Calendar 
                    style={styles.calendar} 
                    date={today}
                    renderArrow={(direction) => (
                        <MaterialCommunityIcons
                            style={{backgroundColor: Colors.background, borderRadius: 3, borderWidth: 0.1 }}
                            name={direction === 'left' ? 'chevron-left' : 'chevron-right'} 
                            size={24} 
                            color={Colors.primary_text} 
                        />
                    )}
                    theme={{  
                        textMonthFontWeight: "800",
                        monthTextColor: Colors.primary_text,
                        textMonthFontSize: 18,
                        todayTextColor: "#FFFFFF", 
                        todayBackgroundColor: Colors.accent,
                        selectedDayBackgroundColor: Colors.accent,  
                        textDayFontFamily: "Inter", 
                        textDayFontWeight: "600", 
                        arrowColor: Colors.primary_text, 
                        textDisabledColor: Colors.secondary_text + '50'
                    }}
                        markedDates={{[today]: { selected: true, disableTouchEvent: true },
                                      "2026-04-29": { marked: true, dotColor: Colors.accent }
                    }}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    calendarContainer: {
        marginTop: 13,
        flex: 1,
        width: "100%"
    },
    calendar: {
        borderRadius: 12,
        elevation: 6,
    }
})