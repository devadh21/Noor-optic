import { supabase } from '@/lib/supabase'
import { useTranslation } from '@/i18n/useTranslation'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowLeft, ShoppingCart } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    const { t,textAlign } = useTranslation()

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
                <Text className="text-gray-500">{t('Product.notFound')}</Text>
            </View>
        )
    }

    return (

        <View className="flex-1 bg-white">
            <View className="px-4  py-2 bg-white">
                <TouchableOpacity onPress={() => router.back()} className="w-10 h-10 items-center justify-center rounded-full bg-gray-100">
                    <ArrowLeft size={22} color="black" />
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-center mt-2">{t('Product.details')}</Text>
            </View>
            <View className="flex-1 bg-cream">
                <ScrollView className="flex-1 mb-2" contentContainerStyle={{ flexGrow: 1 }}>
                    <Image
                        source={{ uri: product.image_url }}
                        className="w-full h-72"
                        resizeMode="cover"
                    />
                    <View className="px-5 pt-5 pb-8 bg-cream rounded-t-3xl -mt-10 flex-1 ">
                        <View className="flex-1" >
                            <View className={`{row} items-center justify-between gap-2 mb-3`}>
                                <Text className="text-2xl font-bold capitalize">{product.name}</Text>
                                <Text className="text-gray-500 text-sm mt-1"><Text className="font-bold">{t('Shop.brand')} : </Text>{product.brand}</Text>

                            </View>
                            <Text className="text-center text-2xl font-bold text-dark-green mt-3">
                                <Text className="text-lg font-semibold">$</Text>
                                {product.price.toFixed(2)}
                            </Text>

                            {product.description ? (
                                <View className="mt-6">
                                    <Text className={`${textAlign}  text-lg font-semibold mb-2`}>{t('Product.description')}</Text>
                                    <View className="h-px bg-gold/40 mb-3" />
                                    <Text className={`${textAlign}  text-gray-600 leading-6`}>{product.description}</Text>
                                </View>
                            ) : null}

                            {product.features?.length ? (
                                <View className="mt-6">
                                    <Text className={`${textAlign} text-lg font-semibold mb-2`}>{t('Product.features')}</Text>
                                    <View className="h-px bg-gold/40 mb-3" />
                                    {product.features.map((feature, index) => (
                                        <Text key={index} className={`${textAlign} text-gray-600 mb-1`}>• {feature}</Text>
                                    ))}
                                </View>
                            ) : null}

                            {product.specifications && Object.keys(product.specifications).length > 0 ? (
                                <View className="mt-6 mb-4">
                                    <Text className={`${textAlign} text-lg font-semibold `}>{t('Product.specifications')}</Text>
                                    <View className="h-px bg-gold/40 mb-3" />
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <View key={key} className="flex-row justify-between py-2 border-b border-gray-100">
                                            <Text className="text-gray-500 capitalize">{key}</Text>
                                            <Text className="text-gray-800 font-medium">{value}</Text>
                                        </View>
                                    ))}
                                </View>
                            ) : null}
                        </View>
                    </View>
                </ScrollView>
                <View className="h-20 "
                >
                    <Pressable
                        onPress={() =>
                            Alert.alert('Success', 'Product has been added to your cart')
                        }
                        className="bg-dark-green rounded-full px-8 py-4 mx-2 flex-row items-center justify-center"
                    >
                        <Text className="text-gold text-2xl font-bold mr-2">
                            <Text className="text-lg font-semibold">$</Text>{product.price}
                        </Text>
                        <Text className="text-gold font-semibold mr-2">
                            {t('Shop.addToCart')}
                        </Text>
                        <ShoppingCart size={20} color="gold" />
                    </Pressable>
                </View>
                {/* // Ensure the bottom safe area is respected on iPhones with a home indicator */}
                <SafeAreaView edges={['bottom']} className="bg-dark-green" ></SafeAreaView>
            </View>



        </View>


    )
}
