import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 10,
        marginTop: 4,
      }}
      onPress={onPress}
    >
      <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
};
