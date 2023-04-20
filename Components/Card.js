import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const Card = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 10,
        marginTop: 4,
      }}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.description}>{props.item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Card;
