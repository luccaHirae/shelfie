import { useColorScheme, View } from 'react-native'
import { Colors } from '../constants/colors'

const ThemedView = ({ style, ...rest }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View 
      style={[{ backgroundColor: theme.background }, style ]}
      {...rest}
    />
  )
}

export default ThemedView