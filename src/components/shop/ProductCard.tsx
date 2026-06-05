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

  return (
    <View className="flex-1 m-2 bg-cream rounded-2xl shadow-sm">
      <Pressable
        onPress={() => router.push(`/product/${product.id}` as any)}
        className="pressedStyle"
      >

        <View className="p-3">
          <Text numberOfLines={1} className="text-lg font-bold capitalize text-center">
            {product.name}
          </Text>
        </View>
        <Image
          source={{ uri: product.image_url }}
          className="w-full h-40 rounded-t-2xl"
        />

        <View className="p-3">

          <Text className="text-gray-500">
            <Text className="font-bold">Brand : </Text>{product.brand}
          </Text>

          <Text className="font-bold mt-2">
            ${product.price}
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
          <Text className="text-gold font-semibold mr-2">
            Add to Cart
          </Text>
          <ShoppingCart size={20} color="gold" />
        </Pressable>
        
      </View>
    </View>

  )
}