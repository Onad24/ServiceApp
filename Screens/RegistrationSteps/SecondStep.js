import { Text, View, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { CustomButton } from '../../Components/Buttons';
import DateTimePicker from '@react-native-community/datetimepicker';
function SecondStep({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <View style={styles.loginContainer}>
        <Text>First Name*</Text>
        <TextInput style={styles.textBox} placeholder="First Name" />
        <Text>Middle Name</Text>
        <TextInput style={styles.textBox} placeholder="Middle Name" />
        <Text>Last Name*</Text>
        <TextInput style={styles.textBox} placeholder="Last Name" />
        <Text>Address</Text>
        <TextInput style={styles.textBox} placeholder="Address" />
        <Text>Date of Birth</Text>
        <Text
          style={styles.textBox}
          placeholder="Date of Birth"
          onPress={showDatepicker}
          title="Open Date Picker"
        >
          {date.toString()}
        </Text>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <CustomButton title="Save" onPress={() => alert('Saved kunware')} />
      </View>
    </SafeAreaView>
  );
}

export default SecondStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
  },
  textBox: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});
