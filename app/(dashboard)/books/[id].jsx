import { StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'
import { Colors } from '../../../constants/colors'
import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import ThemedView from '../../../components/ThemedView'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import ThemedLoader from '../../../components/ThemedLoader'

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  const { fetchBookById, deleteBook } = useBooks();
  const router = useRouter();

  const [book, setBook] = useState(null);

  async function handleDelete() {
    if (book) {
      await deleteBook(book.$id);
      router.replace('/books');
    }
  }

  useEffect(() => {
    async function loadBook() {
      const fetchedBook = await fetchBookById(id);
      setBook(fetchedBook);
    }

    loadBook();
  }, [id])

  if (!book) {
    return (
      <ThemedView safe style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    )
  }

  return (
    <ThemedView safe style={styles.container}>
      <ThemedCard>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title>Book description:</ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Delete Book
        </Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: 'center',
  }
})