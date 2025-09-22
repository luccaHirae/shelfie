import { View, Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'

const ThemedText = ({ style, title = false, ...rest }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = title ? theme.title : theme.text

  return (
    <Text style={[{ color: textColor }, style]} {...rest} />
  )
}

export default ThemedText