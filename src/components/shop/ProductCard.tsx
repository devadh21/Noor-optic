import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import { useRouter } from 'expo-router'

export function ProductCard({ product }: { product: any }) {
  const router = useRouter()

  return (
    <TouchableOpacity
      onPress={() => router.push(`/product/${product.id}` as any)}
      className="flex-1 m-2 bg-white rounded-2xl"
    >
      <Image
        source={{ uri: product.image_url }}
        className="w-full h-40 rounded-t-2xl"
      />

      <View className="p-3">
        <Text numberOfLines={1} className="text-lg font-bold">
          {product.name}
        </Text>

        <Text className="text-gray-500">
          <Text className="font-bold">Brand : </Text>{product.brand}
        </Text>

        <Text className="font-bold mt-2">
          ${product.price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}