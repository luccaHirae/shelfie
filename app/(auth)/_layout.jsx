import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

const AuthLayout = () => {
  return (
    <>
      <StatusBar style='auto' />
      <Stack screenOptions={{ headerShown: false, animation: 'ios_from_right' }} />
    </>
  )
}

export default AuthLayout
