import { useTabStore } from '@/contexts/tabVisibility'
import { useRef } from 'react'
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

  // Tab bar visibility logic
  const setHidden = useTabStore((state) => state.setHidden)
  const lastY = useRef(0)
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={1}
      renderItem={({ item }) => (
        <ProductCard product={item} />
      )}
      onScroll={(e) => {
        // Tab bar visibility logic
        // Determine scroll direction and toggle tab bar visibility
        const currentY = e.nativeEvent.contentOffset.y

        // Show tab bar when scrolling up, hide when scrolling down
        if (currentY > lastY.current && currentY > 2) {
          setHidden(true) // scrolling down
        } else {
          setHidden(false) // scrolling up
        }

        // Update lastY for the next scroll event
        lastY.current = currentY
      }}

      className="flex-1 px-2 h-50"
    />
  )
} 