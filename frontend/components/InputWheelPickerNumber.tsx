import WheelPicker from "@quidone/react-native-wheel-picker";
import { useState } from "react";
import Colors from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";

// futuramente, delimitar numero minimo e maximo
const data = [...Array(220).keys()].map((index) => ({
  value: index,
  label: index.toString(),
}))


interface InputWheelPickerNumber {
    format: "Integer" | "Decimal";
    unit: string
}


export default function InputWheelPickerNumber( { format, unit } : InputWheelPickerNumber){
    
    const [value, setValue] = useState(0);
    const [decimalValue, setDecimalValue] = useState(0);

    return(
            <View style={{flexDirection: "row", alignItems: "center", gap: 15}}>

                <WheelPicker
                    data={data}
                    value={value}
                    onValueChanged={({item: {value}}) => setValue(value)}
                    enableScrollByTapOnItem={true}
                    width={"25%"}
                    visibleItemCount={3}
                    overlayItemStyle={styles.overlay}
                    itemTextStyle={styles.itemText}
                />

                {/* Operador '&&' ele renderiza um componente ou NADA se uma condição for atingida */}
                { format === "Decimal" && (
                    <>
                    <Text style={styles.comma}>,</Text>

                    <WheelPicker
                        data={data}
                        value={decimalValue}
                        onValueChanged={({item: {value}}) => setDecimalValue(value)}
                        enableScrollByTapOnItem={true}
                        width={"25%"}
                        visibleItemCount={3}
                        overlayItemStyle={styles.overlay}
                        itemTextStyle={styles.itemText}
                    />
                    </>
                )}
                <Text style={styles.unitText}>{unit}</Text>

             </View>
    )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: Colors.accent
    },
    itemText: {
        color: Colors.secondary_text, 
        fontSize: 18, 
        fontWeight: "bold", 
        fontFamily: "Inter"
    },
    unitText: {
        fontWeight: "bold",
        fontFamily: "Inter", 
        color: Colors.accent, 
        fontSize: 20
    },
    comma: {
        fontWeight: "bold",
        fontFamily: "Inter", 
        color: Colors.accent, 
        fontSize: 25
    }
})