import { ShopHeader } from '@/components/shop/ShopHeader'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

import { FilterBottomSheet } from '@/components/shop/FilterBottomSheet'
import { ProductList } from '@/components/shop/ProductList'
import BottomSheet from '@gorhom/bottom-sheet'
import { useRef } from 'react'

import { SlidersHorizontal } from 'lucide-react-native'

interface Product {
    id: string
    name: string
    description: string
    price: number
    image_url: string
    category: string
    brand: string
}



export default function ShopScreen() {
    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<string[]>([])
    const [brands, setBrands] = useState<string[]>([])

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

    async function fetchProducts() {

        let query = supabase
            .from('products')
            .select('*')
            .eq('status', 'active')
            .order('created_at', { ascending: false })

        if (filters.categories.length) {
          query = query.in('category', filters.categories)
        }

        if (filters.brands.length) {
          query = query.in('brand', filters.brands)
        }

        if (filters.minPrice !== undefined) {
          query = query.gte('price', filters.minPrice)
        }

        if (filters.maxPrice !== undefined) {
          query = query.lte('price', filters.maxPrice)
        }

        if (filters.search) {
          query = query.or(
            `name.ilike.%${filters.search}%,brand.ilike.%${filters.search}%,description.ilike.%${filters.search}%`
          )
        }

        const { data: products, error } = await query

        if (error) {
            console.error('Error fetching products:', error)
        }

        setProducts(products || [])

        // Extract  categories and brands for filter options
        const categoriesSet = new Set<string>()
        const brandsSet = new Set<string>()

        for (const product of products || []) {
            categoriesSet.add(product.category)
            brandsSet.add(product.brand)
        }

        setCategories([...categoriesSet])
        setBrands([...brandsSet])

        setLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [filters])

      if (loading) {
        return <ActivityIndicator size="large" className="flex-1" />
      }



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
                categories={categories}
                brands={brands}
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