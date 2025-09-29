import { Text } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/useUser'

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace('/profile');
    }
  }, [authChecked, user]);

  if (!authChecked || user) {
    return (
      <Text>Loading...</Text>
    )
  }

  return children;
}

export default GuestOnly
