import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import LightLogo from '../assets/img/logo_light.png'
import DarkLogo from '../assets/img/logo_dark.png'

const ThemedLogo = ({ ...rest }) => {
  const colorScheme = useColorScheme()
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

  return (
    <Image source={logo} {...rest} />
  )
}

export default ThemedLogo
