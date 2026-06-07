import {
    forwardRef,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react'

import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native'

import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetView,
} from '@gorhom/bottom-sheet'
import { useTranslation } from '@/i18n/useTranslation'


export interface Filters {
    categories: string[]
    brands: string[]
    minPrice?: number
    maxPrice?: number
    search: string
}

interface Props {
    filters: Filters
    categories: string[]
    brands: string[]
    onApply: (filters: Filters) => void
    onClear: () => void
}

export const FilterBottomSheet = forwardRef<
    BottomSheet,
    Props
>(
    (
        {
            filters,
            categories,
            brands,
            onApply,
            onClear,
        },
        ref
    ) => {
        const { t } = useTranslation()

        const snapPoints = useMemo(
            () => ['75%', '90%'],
            []
        )

        const [localFilters, setLocalFilters] =
            useState(filters)

        useEffect(() => {
            setLocalFilters(filters)
        }, [filters])

        const toggleCategory = (category: string) => {
            setLocalFilters((prev) => ({
                ...prev,
                categories: prev.categories.includes(category)
                    ? prev.categories.filter(
                        (c) => c !== category
                    )
                    : [...prev.categories, category],
            }))
        }

        const toggleBrand = (brand: string) => {
            setLocalFilters((prev) => ({
                ...prev,
                brands: prev.brands.includes(brand)
                    ? prev.brands.filter((b) => b !== brand)
                    : [...prev.brands, brand],
            }))
        }

        const renderBackdrop = useCallback(
            (props: any) => (
                <BottomSheetBackdrop
                    {...props}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                />
            ),
            []
        )

        return (
            <BottomSheet
                ref={ref}
                index={-1}
                enablePanDownToClose
                snapPoints={snapPoints}
                backdropComponent={renderBackdrop}
            >
                <BottomSheetView className="flex-1 z-50">
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            padding: 20,
                        }}
                    >
                        <Text className="text-xl font-bold mb-6">
                            {t(`Shop.filters`)}
                        </Text>

                        {/* Categories */}
                        <Text className="font-semibold text-base mb-3">
                            {t(`Shop.category`)}

                        </Text>

                        <View className="flex-row flex-wrap mb-8">
                            {categories.map((category) => {
                                const selected =
                                    localFilters.categories.includes(
                                        category
                                    )

                                return (
                                    <Pressable
                                        key={category}
                                        onPress={() =>
                                            toggleCategory(category)
                                        }
                                        className={`mr-2 mb-2 px-4 py-2 rounded-full pressedStyle ${selected
                                            ? 'bg-black'
                                            : 'bg-gray-100'
                                            }`}
                                    >
                                        <Text
                                            className={
                                                selected
                                                    ? 'text-white'
                                                    : 'text-black'
                                            }
                                        >
                                            {category}
                                        </Text>
                                    </Pressable>
                                )
                            })}
                        </View>

                        {/* Brands */}
                        <Text className="font-semibold text-base mb-3">
                            {t(`Shop.brand`)}
                        </Text>

                        <View className="flex-row flex-wrap mb-8">
                            {brands.map((brand) => {
                                const selected =
                                    localFilters.brands.includes(brand)

                                return (
                                    <Pressable
                                        key={brand}
                                        onPress={() =>
                                            toggleBrand(brand)
                                        }
                                        className={`mr-2 mb-2 px-4 py-2 rounded-full pressedStyle ${selected
                                            ? 'bg-black'
                                            : 'bg-gray-100'
                                            }`}
                                    >
                                        <Text
                                            className={
                                                selected
                                                    ? 'text-white'
                                                    : 'text-black'
                                            }
                                        >
                                            {brand}
                                        </Text>
                                    </Pressable>
                                )
                            })}
                        </View>

                        {/* Price Range */}
                        <Text className="font-semibold text-base mb-3">
                            {t(`Shop.priceRange`)}

                        </Text>

                        <TextInput
                            keyboardType="numeric"
                            placeholder={t(`Shop.min`)
                            }
                            value={
                                localFilters.minPrice?.toString() || ''
                            }
                            onChangeText={(value) =>
                                setLocalFilters((prev) => ({
                                    ...prev,
                                    minPrice: value
                                        ? Number(value)
                                        : undefined,
                                }))
                            }
                            className="border border-gray-300 rounded-xl px-4 py-3 mb-3"
                        />

                        <TextInput
                            keyboardType="numeric"
                            placeholder={t(`Shop.max`)}
                            value={
                                localFilters.maxPrice?.toString() || ''
                            }
                            onChangeText={(value) =>
                                setLocalFilters((prev) => ({
                                    ...prev,
                                    maxPrice: value
                                        ? Number(value)
                                        : undefined,
                                }))
                            }
                            className="border border-gray-300 rounded-xl"
                        />
                    </ScrollView>

                    <View className="flex-row p-5 border-t border-gray-200 gap-3">
                        <Pressable
                            className="flex-1 bg-gray-100 rounded-xl py-4 items-center pressedStyle"
                            onPress={onClear}
                        >
                            <Text className="font-semibold ">
                                {t(`Shop.clearAll`)}
                            </Text>
                        </Pressable>

                        <Pressable
                            className="flex-1 bg-black rounded-xl py-4 items-center pressedStyle"
                            onPress={() => {
                                onApply(localFilters)

                                if (
                                    ref &&
                                    typeof ref !== 'function' &&
                                    ref.current
                                ) {
                                    ref.current.close()
                                }
                            }}
                        >
                            <Text className="text-white font-semibold ">
                                {t(`Shop.applyFilters`)}
                            </Text>
                        </Pressable>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        )
    }
)

FilterBottomSheet.displayName =
    'FilterBottomSheet'