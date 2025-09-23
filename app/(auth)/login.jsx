import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from '../../constants/colors'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {
  const handleSubmit = () => {
    console.log('Login pressed')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title style={styles.title}>Login to your account</ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>
          Login
        </Text>
      </ThemedButton>

      <Spacer height={100} />

      <Link href='/register'>
        <ThemedText style={{ textAlign: 'center' }}>Create an account</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login

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