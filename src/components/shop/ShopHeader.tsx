import { useEffect, useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'

interface Props {
  search: string
  onSearch: (value: string) => void
}

export function ShopHeader({
  search,
  onSearch,
}: Props) {
  const [value, setValue] = useState(search)

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value)
    }, 500)

    return () => clearTimeout(timer)
  }, [value])

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Search products..."
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    backgroundColor: '#f3f4f6',
    borderRadius: 50,
    paddingHorizontal: 16,
    height: 50,
  },
})