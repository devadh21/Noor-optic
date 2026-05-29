import React from 'react'
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
} from 'react-native'
import { Link } from 'expo-router'
import {
  ArrowRight,
  Shield,
  Truck,
  RefreshCw,
} from 'lucide-react-native'
// import { useTranslations } from 'next-intl'

import Hero from '@/components/Hero'

export default function LandingScreen() {
  // const t = useTranslations('Index')

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Hero */}
      <Hero />

      {/* Trust Bar */}
      <View className="py-10 bg-dark-green px-6">
        <View className="flex-row flex-wrap justify-between items-center gap-y-6">
          <Text className="text-cream text-2xl font-bold italic uppercase">
             vogue 
          </Text>

          <Text className="text-cream text-2xl font-bold italic uppercase">
             gq 
          </Text>

          <Text className="text-cream text-2xl font-bold italic uppercase">
             bazaar 
          </Text>

          <Text className="text-cream text-2xl font-bold italic uppercase">
             forbes 
          </Text>

          <Text className="text-cream text-2xl font-bold italic uppercase"> 
             elle 
          </Text>
        </View>
      </View>

      {/* Featured Collections */}
      <View className="py-24 bg-card px-6">
        <View className="mb-16">
          <Text className="text-5xl text-primary mb-6 lowercase leading-tight">
             conçu pour <Text className="text-gold">chaque personnalité</Text>.
          </Text>

          <Text className="text-lg text-primary/60 leading-7">
           Découvrez nos sélections curatées de lunettes de soleil et de vue, alliant design intemporel et technologie moderne.
          </Text>

          {/* <Link href="/shop" asChild> */}
            <Pressable className="flex-row items-center gap-2 mt-8">
              <Text className="text-primary font-bold uppercase tracking-[2px]">
                 TOUT EXPLORER
              </Text>

              <ArrowRight size={20} color="black" />
            </Pressable>
          {/* </Link> */}
        </View>

        {/* Sunglasses Card */}
        {/* <Link href="/shop?category=Sunglasses" asChild> */}
          <Pressable className="mb-8 ">
            <ImageBackground
              source={require('@/assets/images/baground-2.png')}
              resizeMode="cover"
              imageStyle={{ borderRadius: 40 }}
              className="h-[600px] overflow-hidden justify-end"
            >
              <View className="absolute inset-0 bg-black/40 rounded-[40px]" />

              <View className="p-10">
                <Text className="text-white text-4xl mb-4">
                   Lunettes de Vue
                </Text>

                <Text className="text-white/70 italic leading-7 mb-8 max-w-[260px]">
                   La clarté rencontre la sophistication dans chaque verre.
                </Text>

                <View className="bg-gold px-6 py-4 rounded-full self-start">
                  <Text className="text-primary font-semibold">
                     Acheter la colllection
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Pressable>
        {/* </Link> */}

        {/* Prescription Card */}
        {/* <Link href="/shop?category=Prescription" asChild> */}
          <Pressable>
            <ImageBackground
              source={require('@/assets/images/baground-2.png')}
              resizeMode="cover"
              imageStyle={{ borderRadius: 40 }}
              className="h-[600px] overflow-hidden justify-end"
            >
              <View className="absolute inset-0 bg-black/50 rounded-[40px]" />

              <View className="p-10">
                <Text className="text-white text-4xl mb-4">
                   Lunettes de Soleil 
                </Text>

                <Text className="text-white/70 italic leading-7 mb-8 max-w-[260px]">
                   La protection parfaite pour vos journées les plus lumineuses.
                </Text>

                <View className="bg-gold px-6 py-4 rounded-full self-start">
                  <Text className="text-primary font-semibold">
                     Acheter la colllection
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </Pressable>
        {/* </Link> */}
      </View>

      {/* Why Noor */}
      <View className="py-24 bg-background px-6 gap-8">
        {/* Card 1 */}
        <View className="bg-card rounded-[40px] p-10 shadow-xl">
          <View className="w-16 h-16 bg-cream rounded-2xl items-center justify-center mb-8">
            <Shield size={30} color="black" />
          </View>

          <Text className="text-3xl text-primary mb-4 lowercase font-bold">
             qualité garantie
          </Text>

          <Text className="text-primary/60 italic leading-7">
             Chaque monture est inspectée par nos maîtres opticiens pour une perfection absolue.
          </Text>
        </View>

        {/* Card 2 */}
        <View className="bg-dark-green rounded-[40px] p-10 shadow-2xl">
          <View className="w-16 h-16 bg-gold rounded-2xl items-center justify-center mb-8">
            <Truck size={30} color="black" />
          </View>

          <Text className="text-white text-3xl mb-4 lowercase font-bold">
            livraison express
          </Text>

          <Text className="text-white/60 italic leading-7">
             Livraison mondiale gratuite pour toutes les commandes de plus de 200 $. Livré en 3-5 jours.
          </Text>
        </View>

        {/* Card 3 */}
        <View className="bg-card rounded-[40px] p-10 shadow-xl">
          <View className="w-16 h-16 bg-cream rounded-2xl items-center justify-center mb-8">
            <RefreshCw size={30} color="black" />
          </View>

          <Text className="text-3xl text-primary mb-4 lowercase font-bold">
             ajustements sur mesure 
          </Text>

          <Text className="text-primary/60 italic leading-7">
             Ajustement de monture gratuit à vie dans l'une de nos boutiques.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}