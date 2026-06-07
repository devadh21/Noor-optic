import Hero from '@/components/Hero'
import { useTabStore } from '@/contexts/tabVisibility'
import Trans from '@/i18n/Trans'
import { useTranslation } from '@/i18n/useTranslation'
import { ArrowRight, RefreshCw, Shield, Truck } from 'lucide-react-native'
import { useRef } from 'react'
import { ImageBackground, Pressable, ScrollView, Text, View } from 'react-native'


export default function LandingScreen() {
  const { direction, t } = useTranslation()

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
      <Hero />
      <View className="py-10 bg-dark-green px-6 ">
        <View className={`${direction} flex-wrap justify-between items-center gap-y-6`}>
          <Text className="text-cream text-2xl font-bold italic uppercase">
            {t('Index.trust_bar.vogue')}
          </Text>
          <Text className="text-cream text-2xl font-bold italic uppercase">
            {t('Index.trust_bar.gq')}
          </Text>
          <Text className="text-cream text-2xl font-bold italic uppercase">
            {t('Index.trust_bar.bazaar')}
          </Text>
          <Text className="text-cream text-2xl font-bold italic uppercase">
            {t('Index.trust_bar.forbes')}
          </Text>
          <Text className="text-cream text-2xl font-bold italic uppercase">
            {t('Index.trust_bar.elle')}
          </Text>
        </View>
      </View>

      <View className="py-24  px-6">
        <View className="mb-16">
          <Trans
            tKey="Index.featured_collections.title"
            className="text-5xl text-primary mb-6 lowercase leading-tight"
          />

          <Text className="text-lg text-primary/60 leading-7">
            {t('Index.featured_collections.description')}
          </Text>

          <Pressable className={`${direction} items-center gap-2 mt-8`}>
            <Text className="text-primary font-bold uppercase tracking-[2px]">
              {t('Index.featured_collections.explore_all')}
            </Text>
            <ArrowRight size={20} color="black" />
          </Pressable>
        </View>

        <Pressable className="mb-8">
          <ImageBackground
            source={require('@/assets/images/baground-2.png')}
            resizeMode="cover"
            imageStyle={{ borderRadius: 40 }}
            className="h-[600px] overflow-hidden justify-end"
          >
            <View className="absolute inset-0 bg-black/40 rounded-[40px]" />

            <View className="p-10">
              <Text className="text-white text-4xl mb-4">
                {t('Index.featured_collections.sunglasses.title')}
              </Text>

              <Text className="text-white/70 italic leading-7 mb-8 max-w-[260px]">
                {t('Index.featured_collections.sunglasses.quote')}
              </Text>

              <View className="bg-gold px-6 py-4 rounded-full self-start">
                <Text className="text-dark-green  font-semibold">
                  {t('Index.featured_collections.sunglasses.cta')}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </Pressable>

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
                {t('Index.featured_collections.prescription.title')}
              </Text>

              <Text className="text-white/70 italic leading-7 mb-8 max-w-[260px]">
                {t('Index.featured_collections.prescription.quote')}
              </Text>

              <View className="bg-gold px-6 py-4 rounded-full self-start">
                <Text className="text-dark-green font-semibold">
                  {t('Index.featured_collections.prescription.cta')}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </Pressable>
      </View>

      <View className="py-24 px-6 gap-8">
        <View className="bg-cream rounded-[40px] p-10 shadow-xl ">
          <View className="w-16 h-16 bg-white rounded-2xl items-center justify-center mb-8">
            <Shield size={30} color="black" />
          </View>

          <Text className="text-3xl text-primary mb-4 lowercase font-bold ">
            {t('Index.why_argana.quality.title')}
          </Text>

          <Text className="text-primary/60 italic leading-7 ">
            {t('Index.why_argana.quality.description')}
          </Text>
        </View>

        <View className="bg-dark-green rounded-[40px] p-10 shadow-xl">
          <View className="w-16 h-16 bg-gold rounded-2xl items-center justify-center mb-8">
            <Truck size={30} color="black" />
          </View>

          <Text className="text-white text-3xl mb-4 lowercase font-bold ">
            {t('Index.why_argana.delivery.title')}
          </Text>

          <Text className="text-white/60 italic leading-7">
            {t('Index.why_argana.delivery.description')}
          </Text>
        </View>

        <View className="bg-cream rounded-[40px] p-10 shadow-xl" >
          <View className="w-16 h-16 bg-white rounded-2xl items-center justify-center mb-8">
            <RefreshCw size={30} color="black" />
          </View>

          <Text className="text-3xl text-primary mb-4 lowercase font-bold">
            {t('Index.why_argana.adjustments.title')}
          </Text>

          <Text className="text-primary/60 italic leading-7">
            {t('Index.why_argana.adjustments.description')}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
