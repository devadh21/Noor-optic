import Trans from '@/i18n/Trans'
import { useTranslation } from '@/i18n/useTranslation'
import { ArrowRight, Star } from 'lucide-react-native'
import { Image, Pressable, Text, View } from 'react-native'


export default function Hero() {
  const {row,textAlign,t } = useTranslation()


  return (
    <View className="relative pt-16 pb-16 overflow-hidden">
      <View className="px-6">
        <View className="">

          <View className={`${row} mb-6`}>
            <Text className="text-gold text-xs font-bold uppercase tracking-[3px] px-4 py-2 rounded-full bg-gold/10 border border-gold/20 ">
              {t('Index.hero.new_collection')}
            </Text>
          </View>

          <View className={`${row} `}>
            <Trans
              tKey="Index.hero.title"
              className="text-5xl font-bold text-primary leading-none lowercase mb-8"
            />
          </View>
           <View className={`${row} `}>
           <Text className={`${textAlign} text-lg  leading-8 mb-10  `}>
            {t('Index.hero.subtitle')}
          </Text>
          </View>

          

          <View className={`${row} `}>
            <Pressable className="bg-dark-green rounded-full px-8 py-4 self-start flex-row items-center">
              <Text className="text-gold font-semibold mr-2">
                {t('Index.hero.cta')}
              </Text>
              <ArrowRight size={18} color="gold" />
            </Pressable>
          </View>


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
