import { useNavigation } from 'expo-router'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { useTranslation } from '@/i18n/useTranslation'
import Trans from '@/i18n/Trans'

const StyledPressable = Pressable

export default function ShopScreen() {
  const navigation = useNavigation<any>()
  const { t } = useTranslation()

  return (
    <ScrollView className="flex-1 bg-background">
      
      <View className="pb-20 px-6">
 

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
                {t('About.quality.standard.p1')} testttt
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
