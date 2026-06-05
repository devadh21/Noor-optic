import { useTabStore } from '@/contexts/tabVisibility'
import Trans from '@/i18n/Trans'
import { useTranslation } from '@/i18n/useTranslation'
import { useNavigation } from 'expo-router'
import { useRef } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

const StyledPressable = Pressable

export default function AboutScreen() {
  const navigation = useNavigation<any>()
  const { t } = useTranslation()

    // Tab bar visibility logic
    const setHidden = useTabStore((state) => state.setHidden)
    const lastY = useRef(0)

  return (
    <ScrollView className="flex-1 bg-white" 
      scrollEventThrottle={16}
      onScroll={(e) => {
        // Determine scroll direction and toggle tab bar visibility
        const currentY = e.nativeEvent.contentOffset.y

        // Show tab bar when scrolling up, hide when scrolling down
        if (currentY > lastY.current && currentY > 2) {
          setHidden(true) // scrolling down
        } else {
          setHidden(false) // scrolling up
        }

        // Update lastY for the next scroll event
        lastY.current = currentY
      }}
      >
      <View className="flex-row justify-end px-6 pt-16">
      </View>
      <View className="pb-20 px-6">
        <View className="max-w-4xl mx-auto items-center mb-20">
          <Text className="text-gold font-bold uppercase tracking-[6px] text-xs mb-6 italic">
            {t('About.heritage.tag')}
          </Text>

          <Trans
            tKey="About.heritage.title"
            className="text-5xl md:text-7xl font-bold text-primary mb-10 text-center lowercase leading-tight"
          />

          <Text className="text-lg text-primary/60 leading-8 italic border-l-4 border-r-4 border-peach/30 px-6 text-center">
            {t('About.heritage.description')}
          </Text>
        </View>

        <View className="gap-14 mb-28">
          <View className="relative aspect-[4/5] bg-card rounded-[40px] overflow-hidden shadow-2xl">
            <Image
              source={require('@/assets/images/hero-cat.png')}
              resizeMode="cover"
              className="w-full h-full opacity-50"
            />

            <View className="absolute inset-0 bg-black/40" />

            <View className="absolute bottom-10 left-10">
              <Trans
                tKey="About.quality.title"
                className="text-3xl text-gold lowercase"
              />
            </View>
          </View>

          <View className="space-y-8">
            <Trans
              tKey="About.quality.standard.title"
              className="text-4xl font-bold lowercase leading-tight text-primary"
            />

            <View className="gap-6">
              <Text className="text-primary/60 italic leading-7 text-base">
                {t('About.quality.standard.p1')}
              </Text>

              <Text className="text-primary/60 italic leading-7 text-base">
                {t('About.quality.standard.p2')}
              </Text>
            </View>

            <View className="flex-row justify-around pt-8">
              <View>
                <Text className="text-3xl font-bold text-primary">
                  {t('About.quality.stats.handcrafted')}
                </Text>
                <Text className="text-xs uppercase tracking-[3px] text-primary/30 font-bold mt-2">
                  {t('About.quality.stats.handcraftedLabel')}
                </Text>
              </View>

              <View>
                <Text className="text-3xl font-bold text-primary">
                  {t('About.quality.stats.boutiques')}
                </Text>
                <Text className="text-xs uppercase tracking-[3px] text-primary/30 font-bold mt-2">
                  {t('About.quality.stats.boutiquesLabel')}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-dark-green rounded-[40px] px-8 py-16 items-center overflow-hidden relative">
          <View className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-24 -translate-y-24" />

          <View className="max-w-2xl items-center z-10">
            <Trans
              tKey="About.join.title"
              className="text-4xl text-gold text-center mb-8 lowercase"
            />

            <Text className="text-white/60 text-center italic mb-10 leading-7">
              {t('About.join.description')}
            </Text>

            <StyledPressable
              className="bg-gold px-8 py-4 rounded-full active:opacity-80"
              onPress={() => {
                navigation.navigate('index')
              }}
            >
              <Text className="text-dark font-semibold text-base">
                {t('About.join.cta')}
              </Text>
            </StyledPressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
