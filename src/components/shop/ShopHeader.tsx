import { Search } from 'lucide-react-native'
import {
  TextInput,
  View,
} from 'react-native'
import { useTranslation } from '@/i18n/useTranslation'


interface Props {
  search: string
  onSearch: (value: string) => void
}

export function ShopHeader({
  search,
  onSearch,
}: Props) {
  const { t, row } = useTranslation()

  return (
    <View className="flex-row items-center p-6 ">
      <View className={`${row} rounded-full mr-4  items-center w-full bg-[#f3f4f6] `}>
        <Search
          size={20}
          color="gray"
          className=" p-2 rounded-full h-10 w-10  bg-transparent"
        />
        <TextInput
          value={search}
          onChangeText={onSearch}
          placeholder={t(`Shop.searchPlaceholder`)}
          className="flex-1 bg-[#f3f4f6] h-10 rounded-full p-1"
        />
      </View>

    </View>
  )
}
