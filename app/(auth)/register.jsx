import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title style={styles.title}>Register a new account</ThemedText>

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
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30
  }
})