import { useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { useRouter } from 'expo-router'
import { useBooks } from '../../hooks/useBooks'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedButton from '../../components/ThemedButton'

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const { createBook } = useBooks();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      await createBook({ title, author, description });

      setTitle('');
      setAuthor('');
      setDescription('');

      router.push('/books');
    } catch (e) {
      alert(e?.message || e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title style={styles.heading}>Add a new book</ThemedText>

        <Spacer />

        <ThemedTextInput 
          styles={styles.input}
          placeholder='Book Title'
          value={title}
          onChangeText={setTitle}
        />

        <Spacer />

        <ThemedTextInput 
          styles={styles.input}
          placeholder='Book Author'
          value={author}
          onChangeText={setAuthor}
        />

        <Spacer />

        <ThemedTextInput 
          styles={styles.multiline}
          placeholder='Book Description'
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <Spacer />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: 'white'}}>
            {loading ? 'Saving...' : 'Save Book'}
          </Text>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  }
})