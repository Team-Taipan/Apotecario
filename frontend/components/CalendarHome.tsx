import { CalendarProvider, LocaleConfig, WeekCalendar } from "react-native-calendars";
import Colors from "@/constants/Colors";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

const { width: screenWidth } = Dimensions.get('window'); // pega a largura total da tela

export function CalendarHome() {

    // Configuração do Calendário
    LocaleConfig.locales['br'] = {
        monthNames: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        ],
        monthNamesShort: ["Jan.", "Fev.", "Mar.", "Abr.", "Maio", "Jun.", "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dez."],
        dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        today: ["Hoje"]
    };

    LocaleConfig.defaultLocale = 'br';

    // o metodo toISOString pega a data no formato YYYY-MM-DDTHH:mm:ss.sssZ, onde Z representa a timezone, por padrão sempre é UTC
    // ele foi usado no lugar do toString justamente por conta desse formato, o toString retornaria algo como: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
    // ao invés de  "2011-10-05T14:48:00.000Z".
    const today = new Date().toISOString().split("T")[0]; // pegando a hora atual
    
    // Estados para pegar o mes e ano atuais
    const [ currentMonth, setCurrentMonth ] = useState(""); ;
    // Estados pata quando for mudar o dia selecionado
    const [ selectedDay, setSelectedDay ] = useState("");

    const updateCurrentMonth = (currentDate: String) =>{
        const date = new Date(currentDate + "T00:00:00") // O T00:00:00 força o horário local
        const monthName = LocaleConfig.locales['br'].monthNames[date.getMonth()];
        const year = date.getFullYear();

        // atualizando o estado
        setCurrentMonth(`${monthName} ${year}`);

    }

    const updateCurrentDay = (selectedDate: String) => {
        const date = new Date(selectedDate + "T00:00:00");

        const dayLabel = selectedDate === today 
            ? "Hoje" 
            : LocaleConfig.locales['br'].dayNames[date.getDay()];

        const dayOfMonth = date.getDate();
        const monthName = LocaleConfig.locales['br'].monthNames[date.getMonth()];

        // atualizando o estado
        setSelectedDay(`${dayLabel}, ${dayOfMonth} de  ${monthName}`)

    }
    // chamando a função para popular o estado
    useEffect(() => {
        updateCurrentMonth(today);
        updateCurrentDay(today);
    }, []);
    
    
    const availableWidth = screenWidth - 50;

    return(


        <View style={styles.calendarContainer}>

            <Text style={styles.calendarTitleMonthYear}>{currentMonth}</Text>

            <CalendarProvider onDateChanged={(date) => {updateCurrentDay(date)}} style={styles.calendarProviderCustom} date={today} key={today}>
                {/* firstDay = 0, pq a semana começa no Domingo,  */}
                <WeekCalendar firstDay={1} calendarHeight={80} calendarWidth={availableWidth} theme={{ todayTextColor: Colors.accent, selectedDayBackgroundColor: Colors.accent, textDayFontFamily: "Inter", textDayFontWeight: "800"}} />
                <Text style={styles.selectedDate}>{selectedDay}</Text>
            </CalendarProvider>

        </View>
        
    )

}

const styles = StyleSheet.create({

    calendarContainer: {
        marginTop: 20,
        width: '100%'
        
    },

    calendarTitleMonthYear: {
        fontFamily: "Inter",
        fontSize: 17,
        fontWeight: "700"
    },

    calendarProviderCustom: {
        marginTop: 15
    },

    selectedDate: {
        fontFamily: "Inter",
        marginTop: -35,
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 17
    },


})

// Ref (toISOString) : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
// Ref (Configuração Inicial do Calendário, obs: use o NPM!!, não use o yarn para não ter conflito nos arquivo lock): https://wix.github.io/react-native-calendars/docs/Intro
// Ref (CalendarWeek) : https://wix.github.io/react-native-calendars/docs/Components/WeekCalendar
// Ref (CalendarList o CalendarWeek herda as props do CalendarList): https://wix.github.io/react-native-calendars/docs/Components/CalendarList