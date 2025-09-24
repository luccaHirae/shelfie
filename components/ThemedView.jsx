import { useColorScheme, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '../constants/colors'

const ThemedView = ({ style, safe = false, ...rest }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const insets = useSafeAreaInsets()

  if (safe) {
    return (
      <View 
        style={[{ 
          backgroundColor: theme.background, 
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }, 
          style 
        ]}
        {...rest}
      />
    )
  }
  
  return (
    <View
      style={[{ backgroundColor: theme.background }, style ]}
      {...rest}
    />
  )
}

export default ThemedView