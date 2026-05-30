import { FlatList } from 'react-native'
import { ProductCard } from './ProductCard'
// import { products } from '@/constants/products'

export function ProductList({ products }: { products: any[] }) {
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