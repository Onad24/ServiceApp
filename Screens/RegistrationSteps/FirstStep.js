import { Text, View, TextInput, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { CustomButton } from '../../Components/Buttons';
function FirstStep({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      <View style={styles.loginContainer}>
        <Text>Username*</Text>
        <TextInput style={styles.textBox} placeholder="Username" />
        <Text>Email Address*</Text>
        <TextInput style={styles.textBox} placeholder="Username" />
        <Text>Password*</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text>Re-enter Password*</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          secureTextEntry={true}
        />
        <CustomButton
          title="Next"
          onPress={() => navigation.push('SecondStep')}
        />
      </View>
    </SafeAreaView>
  );
}

export default FirstStep;

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
