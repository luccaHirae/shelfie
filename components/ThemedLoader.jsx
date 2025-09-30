import { ActivityIndicator, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'
import ThemedView from './ThemedView';

const ThemedLoader = ({ size = 'large' }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={size} color={theme.text} />
    </ThemedView>
  )
}

export default ThemedLoader
