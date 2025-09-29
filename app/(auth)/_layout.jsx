import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import GuestOnly from '../../components/auth/GuestOnly'

const AuthLayout = () => {
  return (
    <GuestOnly>
      <StatusBar style='auto' />
      <Stack screenOptions={{ headerShown: false, animation: 'ios_from_right' }} />
    </GuestOnly>
  )
}

export default AuthLayout
