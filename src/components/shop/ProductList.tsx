import { FlatList } from 'react-native'
import { ProductCard } from './ProductCard'
interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  brand: string
}

export function ProductList({ products }: { products: Product[] }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <ProductCard product={item} />
      )}
    />
  )
}