import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { ArrowRight, Star } from 'lucide-react-native'
import { useTranslation } from '@/i18n/useTranslation'
import Trans from '@/i18n/Trans'
import LanguageSwitcher from './LanguageSwitcher'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <View className="relative pt-16 pb-16 overflow-hidden bg-background">
      <View className="flex-row justify-end px-6 mb-2">
        <LanguageSwitcher />
      </View>
      <View className="px-6">
        <View>
          <View className="flex-row items-center self-start gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <View className="w-2 h-2 rounded-full bg-accent" />
            <Text className="text-gold text-xs font-bold uppercase tracking-[3px]">
              {t('Index.hero.new_collection')}
            </Text>
          </View>

          <Trans
            tKey="Index.hero.title"
            className="text-5xl font-bold text-primary leading-none lowercase mb-8"
          />

          <Text className="text-lg text-primary/70 leading-8 mb-10">
            {t('Index.hero.subtitle')}
          </Text>

          <Pressable className="bg-dark-green rounded-full px-8 py-4 self-start flex-row items-center">
            <Text className="text-white font-semibold mr-2">
              {t('Index.hero.cta')}
            </Text>
            <ArrowRight size={18} color="white" />
          </Pressable>
        </View>

        <View className="relative mt-16 items-center">
          <View className="absolute -top-12 right-0 w-72 h-72 rounded-full bg-accent/20" />
          <View className="absolute -bottom-12 left-0 w-72 h-72 rounded-full bg-primary/10" />

          <View className="w-full max-w-sm aspect-square bg-card rounded-[48px] p-8 shadow-2xl">
            <Image
              source={require('@/assets/images/hero-cat.png')}
              resizeMode="contain"
              className="w-full h-full"
            />
          </View>

          <View className="absolute bottom-0 right-0 bg-white/90 rounded-3xl p-5 shadow-xl">
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-primary rounded-full items-center justify-center mr-4">
                <Star size={20} fill="white" color="white" />
              </View>
              <View>
                <Text className="text-primary font-bold text-sm">
                  {t('Index.hero.trust_score')}
                </Text>
                <Text className="text-primary/60 text-xs">
                  {t('Index.hero.happy_clients')}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
