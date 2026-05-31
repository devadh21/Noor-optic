import { supabase } from '@/lib/supabase'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ArrowLeft } from 'lucide-react-native'

interface ProductDetail {
    id: string
    name: string
    description: string
    price: number
    image_url: string
    category: string
    brand: string
    features: string[]
    specifications: Record<string, string>
}

export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>()
    const router = useRouter()
    const [product, setProduct] = useState<ProductDetail | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!id) return

        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                console.error('Error fetching product:', error)
            }

            setProduct(data)
            setLoading(false)
        }

        fetchProduct()
    }, [id])

    if (loading) {
        return <ActivityIndicator size="large" className="flex-1 bg-white" />
    }

    if (!product) {
        return (
            <View className="flex-1 items-center justify-center bg-white">
                <Text className="text-gray-500">Product not found</Text>
            </View>
        )
    }

    return (
        <View className="flex-1 bg-white">
            <View className="px-4 pt-16 pb-2">
                <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 items-center justify-center rounded-full bg-gray-100">
                    <ArrowLeft size={22} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1">
                <Image
                    source={{ uri: product.image_url }}
                    className="w-full h-72"
                    resizeMode="cover"
                />

                <View className="px-5 pt-5 pb-8">
                    <Text className="text-2xl font-bold">{product.name}</Text>
                    <Text className="text-gray-500 text-base mt-1"><Text className="font-bold">Brand : </Text>{product.brand}</Text>
                    <Text className="text-2xl font-bold text-dark-green mt-3">${product.price}</Text>

                    {product.description ? (
                        <View className="mt-6">
                            <Text className="text-lg font-semibold mb-2">Description</Text>
                            <View className="h-px bg-gray-200 mb-3" />
                            <Text className="text-gray-600 leading-6">{product.description}</Text>
                        </View>
                    ) : null}

                    {product.features?.length ? (
                        <View className="mt-6">
                            <Text className="text-lg font-semibold mb-2">Features</Text>
                            <View className="h-px bg-gray-200 mb-3" />
                            {product.features.map((feature, index) => (
                                <Text key={index} className="text-gray-600 mb-1">• {feature}</Text>
                            ))}
                        </View>
                    ) : null}

                    {product.specifications && Object.keys(product.specifications).length > 0 ? (
                        <View className="mt-6 mb-10">
                            <Text className="text-lg font-semibold mb-2">Specifications</Text>
                            <View className="h-px bg-gray-200 mb-3" />
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <View key={key} className="flex-row justify-between py-2 border-b border-gray-100">
                                    <Text className="text-gray-500 capitalize">{key}</Text>
                                    <Text className="text-gray-800 font-medium">{value}</Text>
                                </View>
                            ))}
                        </View>
                    ) : null}
                </View>
            </ScrollView>
        </View>
    )
}
