import React from 'react'
import {
    View,
    Text,
    Image,
    Pressable,
} from 'react-native'
import { ArrowRight, Star } from 'lucide-react-native'

export default function Hero() {

    return (
        <View className="relative pt-24 pb-16 overflow-hidden bg-background">
            <View className="px-6">

                {/* Content */}
                <View>
                    {/* Badge */}
                    <View className="flex-row items-center self-start gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <View className="w-2 h-2 rounded-full bg-accent" />

                        <Text className="text-gold text-xs font-bold uppercase tracking-[3px]">
                            NOUVELLE COLLECTION 2026
                        </Text>
                    </View>

                    {/* Title */}
                    <Text className="text-5xl font-bold text-primary leading-none lowercase mb-8">
                        élégance intemporelle
                        <Text className="text-gold">pour vos yeux</Text>
                    </Text>

                    {/* Subtitle */}
                    <Text className="text-lg text-primary/70 leading-8 mb-10">
                        Découvrez notre collection exclusive de montures de créateurs conçues pour ceux qui apprécient l'art et la précision.                    </Text>

                    {/* CTA */}
                    <Pressable className="bg-dark-green rounded-full px-8 py-4 self-start flex-row items-center">
                        <Text className="text-white font-semibold mr-2">
                            Acheter La Collection
                        </Text>

                        <ArrowRight
                            size={18}
                            color="white"
                        />
                    </Pressable>
                </View>

                {/* Image Section */}
                <View className="relative mt-16 items-center">

                    {/* Blur circles */}
                    <View className="absolute -top-12 right-0 w-72 h-72 rounded-full bg-accent/20" />
                    <View className="absolute -bottom-12 left-0 w-72 h-72 rounded-full bg-primary/10" />

                    {/* Main Card */}
                    <View className="w-full max-w-sm aspect-square bg-card rounded-[48px] p-8 shadow-2xl">
                        <Image
                            source={require('@/assets/images/hero-cat.png')}
                            resizeMode="contain"
                            className="w-full h-full"
                        />
                    </View>

                    {/* Floating Card */}
                    <View className="absolute bottom-0 right-0 bg-white/90 rounded-3xl p-5 shadow-xl">
                        <View className="flex-row items-center">
                            <View className="w-12 h-12 bg-primary rounded-full items-center justify-center mr-4">
                                <Star
                                    size={20}
                                    fill="white"
                                    color="white"
                                />
                            </View>

                            <View>
                                <Text className="text-primary font-bold text-sm">
                                    4.9/5
                                </Text>

                                <Text className="text-primary/60 text-xs">
                                    1,000+ clients satisfaits
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}