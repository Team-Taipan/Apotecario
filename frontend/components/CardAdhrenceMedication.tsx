import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from '@/constants/Colors';

interface CardAdhrenceMedicationProps {
  name: string;
  dosage: string;
  frequency: string;
  condition: string;
  percentage: number;
  takenDoses: number;
  totalDoses: number;
}

export const CardAdhrenceMedication = ({
  name,
  dosage,
  frequency,
  condition,
  percentage,
  takenDoses,
  totalDoses,
}: CardAdhrenceMedicationProps) => {
  const remainingDoses = totalDoses - takenDoses;

  // Define a cor com base na porcentagem do tratamento
  const displayColor = percentage >= 70 ? Colors.accent : Colors.orange;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={"pill-multiple"} size={40} color={Colors.accent} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.medName}>{name} {dosage}</Text>
          <Text style={styles.medDetails}>{frequency} · {condition}</Text>
        </View>

        <View style={[styles.badge, { backgroundColor: displayColor + '20' }]}>
          <Text style={[styles.badgeText, { color: displayColor }]}>{percentage}%</Text>
        </View>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${percentage}%`, backgroundColor: displayColor }
          ]}
        />
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>{takenDoses} de {totalDoses} doses tomadas</Text>
        <Text style={styles.footerText}>{remainingDoses} doses restantes</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    // Sombra
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 15,
  },
  iconContainer: {
    backgroundColor: "#88888820",
    borderRadius: 25,
    padding: 3
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12
  },
  medName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary_text,
  },
  medDetails: {
    fontSize: 12,
    color: Colors.secondary_text,
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressTrack: {
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  footerText: {
    fontSize: 11,
    color: Colors.secondary_text,
  },
});