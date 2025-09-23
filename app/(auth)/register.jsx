import { Link } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
  const handleSubmit = () => {
    console.log('Register pressed')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title style={styles.title}>Register a new account</ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>
          Register
        </Text>
      </ThemedButton>

      <Spacer height={100} />

      <Link href='/login'>
        <ThemedText style={{ textAlign: 'center' }}>Login to your account</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30
  }
})