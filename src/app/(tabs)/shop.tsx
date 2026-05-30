import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
// import { createClient } from '@/lib/supabase'
import { ShopHeader } from '@/components/shop/ShopHeader'
// import { FilterModal } from '@/components/shop/FilterModal'
import { FilterBottomSheet } from '@/components/shop/FilterBottomSheet'
import { ProductList } from '@/components/shop/ProductList'
import { dbOptions } from '@/constants/dbOptions'
import { products as mockProducts } from '@/constants/products'
import BottomSheet from '@gorhom/bottom-sheet'
import { useRef } from 'react'

import { SlidersHorizontal } from 'lucide-react-native'



export default function ShopScreen() {
  // const [products, setProducts] = useState([])
  const [products, setProducts] = useState(mockProducts)
  const [loading, setLoading] = useState(true)

  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined,
    search: '',
  })

  const bottomSheetRef =
    useRef<BottomSheet>(null)

  // async function fetchProducts() {
  //   setLoading(true)

  //   let query = createClient()
  //     .from('products')
  //     .select('*')
  //     .eq('status', 'active')

  //   if (filters.categories.length) {
  //     query = query.in('category', filters.categories)
  //   }

  //   if (filters.brands.length) {
  //     query = query.in('brand', filters.brands)
  //   }

  //   if (filters.minPrice !== undefined) {
  //     query = query.gte('price', filters.minPrice)
  //   }

  //   if (filters.maxPrice !== undefined) {
  //     query = query.lte('price', filters.maxPrice)
  //   }

  //   if (filters.search) {
  //     query = query.or(
  //       `name.ilike.%${filters.search}%,brand.ilike.%${filters.search}%,description.ilike.%${filters.search}%`
  //     )
  //   }

  //   const { data } = await query

  //   setProducts(data || [])
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchProducts()
  // }, [filters])

  // if (loading) {
  //   return <ActivityIndicator size="large" />
  // }

  return (
    <View className="flex-1 bg-white">
      <ShopHeader
        search={filters.search}
        onSearch={(search) =>
          setFilters((prev) => ({ ...prev, search }))
        }
      />

      {/* ************** */}
      <TouchableOpacity
        onPress={() =>
          bottomSheetRef.current?.expand()
        }
        className="self-start mr-4 "
      >
        <Text className="flex  gap-2 w-40 px-3 py-2 rounded-full bg-dark-green text-white border border-accent/20 mt-6 mx-4">
          <SlidersHorizontal size={16} color="white" />
          <Text className="text-sm font-medium mx-2">Filters</Text>
        </Text>
      </TouchableOpacity>
      <ProductList products={products} />


      <FilterBottomSheet
        ref={bottomSheetRef}
        filters={filters}
        categories={dbOptions.categories}
        brands={dbOptions.brands}
        onApply={(newFilters) =>
          setFilters((prev) => ({
            ...prev,
            ...newFilters,
          }))
        }
        onClear={() =>
          setFilters({
            categories: [],
            brands: [],
            minPrice: undefined,
            maxPrice: undefined,
            search: '',
          })
        }
      />

    </View>
  )
}