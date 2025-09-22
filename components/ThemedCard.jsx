import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/colors'

const ThemedCard = ({ style, ...rest }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View 
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...rest}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20
  }
})