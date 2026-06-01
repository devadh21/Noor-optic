import { Search } from 'lucide-react-native'
import {
  TextInput,
  View,
} from 'react-native'

interface Props {
  search: string
  onSearch: (value: string) => void
}

export function ShopHeader({
  search,
  onSearch,
}: Props) {

  return (
    <View className="flex-row items-center p-6 ">
      <View className="rounded-full mr-4 flex-row items-center w-full bg-[#f3f4f6] ">
        <Search
          size={20}
          color="gray"
          className=" p-2 rounded-l-full h-10 w-10  bg-transparent"
        />
        <TextInput
          value={search}
          onChangeText={onSearch}
          placeholder="Search products..."          
          className="flex-1 bg-[#f3f4f6] h-10 rounded-r-full p-1"
        />
      </View>

    </View>
  )
}
