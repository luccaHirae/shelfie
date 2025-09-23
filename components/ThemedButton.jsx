import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constants/colors'

const ThemedButton = ({ style, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...rest}
    />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10
  },
  pressed: {
    opacity: 0.5
  }
})