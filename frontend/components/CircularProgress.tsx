import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import Colors from '@/constants/Colors';

interface CircularProgressProps {
  percentage: number;
  color?: string;
  unfilledColor?: string;
  radius?: number;
  innerRadius?: number;
  label?: string;
  centerColor?: string;
}

const CircularProgress = ({
  percentage,
  color = '#FFFFFF',
  unfilledColor = 'rgba(255,255,255,0.2)',
  radius = 55,
  innerRadius = 45,
  label = 'ADESÃO',
  centerColor = Colors.accent
}: CircularProgressProps) => {
  /** 
   * O PieChart espera um array de objetos. 
   * Criamos duas fatias: uma preenchida (progresso) e uma semi-transparente (fundo).
   */
  const data = [
    { value: percentage, color: color },
    { value: 100 - percentage, color: unfilledColor },
  ];
  return (
    <View style={styles.chartContainer}>
      <PieChart
        donut // Define que o gráfico terá um furo no meio (estilo rosca)
        radius={radius} // Tamanho externo
        innerRadius={innerRadius} // Tamanho do furo interno
        innerCircleColor={centerColor} 
        data={data} // Os dados calculados acima
        
        centerLabelComponent={() => (
          <View style={styles.centerLabel}>
            <Text style={styles.percentageText}>{percentage}%</Text>
            <Text style={styles.subText}>{label}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Inter'
  },
  subText: {
    fontSize: 8,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Inter'
  },
});

export default CircularProgress;

/* https://www.npmjs.com/package/react-native-gifted-charts */