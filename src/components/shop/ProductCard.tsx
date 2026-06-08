import { useTranslation } from '@/i18n/useTranslation'
import { useRouter } from 'expo-router'
import { ShoppingCart } from 'lucide-react-native'
import {
  Alert,
  Image,
  Pressable,
  Text,
  View
} from 'react-native'

export function ProductCard({ product }: { product: any }) {
  const router = useRouter()
  const { t,row, textAlign } = useTranslation()

  return (
    <View className="flex-1 m-2 bg-cream rounded-2xl shadow-sm">
      <Pressable
        onPress={() => router.push(`/product/${product.id}` as any)}
        className="pressedStyle"
      >

        <View className="p-3">
          <Text numberOfLines={1} className=" text-lg font-bold capitalize text-center">
            {product.name}
          </Text>
        </View>
        <Image
          source={{ uri: product.image_url }}
          className="w-full h-40 rounded-t-2xl"
        />

        <View className="p-3">

          <Text className="text-gray-500">
            <Text className={`${textAlign} font-bold`}>{t(`Shop.brand`)} : </Text>
            <Text className={`${textAlign} font-bold`}>{product.brand} </Text>
          </Text>

          <Text className="font-bold mt-2 text-center text-lg">
            <Text className="font-bold  text-sm">$</Text>{product.price}
          </Text>
        </View>
      </Pressable>
      <View className="mb-2 " >
        <Pressable
          onPress={() =>
            Alert.alert('Added to Cart', `${product.name} has been added to your cart.`)
          }
          className="bg-dark-green rounded-full px-8 py-4 mx-2 flex-row items-center justify-center  pressedStyle"
        >
          <View className={`${row} gap-2`}>
            <Text className="text-gold font-semibold">
              {t('Shop.addToCart')}

            </Text>
            <ShoppingCart size={20} color="gold" />
          </View>

        </Pressable>

      </View>
    </View>

  )
}