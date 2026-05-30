import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

export function ProductCard({ product }: { product: any }) {
  return (
    <TouchableOpacity
      className="flex-1 m-2 bg-white rounded-2xl"
    >
      <Image
        source={{ uri: product.image_url }}
        className="w-full h-40 rounded-t-2xl"
      />

      <View className="p-3">
        <Text numberOfLines={1}>
          {product.name}
        </Text>

        <Text className="text-gray-500">
          {product.brand}
        </Text>

        <Text className="font-bold mt-2">
          ${product.price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}