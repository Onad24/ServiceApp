import { Text, View, TextInput, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { CustomButton } from '../Components/Buttons';
function SignIn({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Username</Text>
        <TextInput style={styles.textBox} placeholder="Username" />
        <Text>Password</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          secureTextEntry={true}
        />

        <CustomButton
          title="Sign In"
          onPress={() => navigation.navigate('SignIn')}
        />
        <CustomButton
          title="Create Account"
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </View>
    </SafeAreaView>
  );
}

export default SignIn;

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
});
