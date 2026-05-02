import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { BlurView } from 'expo-blur';

type ConfirmModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;

  title: string;
  message: string;

  confirmText?: string;
  cancelText?: string;
};

export function ConfirmModal({
  visible,
  onCancel,
  onConfirm,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
}: ConfirmModalProps) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onCancel}
    >
      <BlurView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        pointerEvents="auto"
        intensity={40}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
      >
        <View
          style={{
            width: '80%',
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'Inter',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
              color: Colors.primary_text,
              letterSpacing: 1,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              fontFamily: 'Inter',
              fontSize: 14,
              color: Colors.secondary_text,
              marginBottom: 20,
            }}
          >
            {message}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              gap: 15,
            }}
          >
            <TouchableOpacity onPress={onCancel}>
              <Text
                style={{
                  fontFamily: 'Inter',
                  color: Colors.secondary_text,
                  fontWeight: '600',
                }}
              >
                {cancelText}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onConfirm}>
              <Text
                style={{
                  fontFamily: 'Inter',
                  color: '#DC3C3C',
                  fontWeight: '600',
                }}
              >
                {confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}