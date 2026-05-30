import {
    forwardRef,
    useCallback,
    useMemo,
    useState,
    useEffect,
} from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native'

import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetView,
} from '@gorhom/bottom-sheet'

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
                            Filters
                        </Text>

                        {/* Categories */}
                        <Text className="font-semibold text-base mb-3">
                            Categories
                        </Text>

                        <View className="flex-row flex-wrap mb-8">
                            {categories.map((category) => {
                                const selected =
                                    localFilters.categories.includes(
                                        category
                                    )

                                return (
                                    <TouchableOpacity
                                        key={category}
                                        onPress={() =>
                                            toggleCategory(category)
                                        }
                                        className={`mr-2 mb-2 px-4 py-2 rounded-full ${selected
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
                                    </TouchableOpacity>
                                )
                            })}
                        </View>

                        {/* Brands */}
                        <Text className="font-semibold text-base mb-3">
                            Brands
                        </Text>

                        <View className="flex-row flex-wrap mb-8">
                            {brands.map((brand) => {
                                const selected =
                                    localFilters.brands.includes(brand)

                                return (
                                    <TouchableOpacity
                                        key={brand}
                                        onPress={() =>
                                            toggleBrand(brand)
                                        }
                                        className={`mr-2 mb-2 px-4 py-2 rounded-full ${selected
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
                                    </TouchableOpacity>
                                )
                            })}
                        </View>

                        {/* Price Range */}
                        <Text className="font-semibold text-base mb-3">
                            Price Range
                        </Text>

                        <TextInput
                            keyboardType="numeric"
                            placeholder="Min Price"
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
                            placeholder="Max Price"
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
                        <TouchableOpacity
                            className="flex-1 bg-gray-100 rounded-xl py-4 items-center"
                            onPress={onClear}
                        >
                            <Text className="font-semibold">
                                Clear
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="flex-1 bg-black rounded-xl py-4 items-center"
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
                            <Text className="text-white font-semibold">
                                Apply Filters
                            </Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        )
    }
)

FilterBottomSheet.displayName =
    'FilterBottomSheet'