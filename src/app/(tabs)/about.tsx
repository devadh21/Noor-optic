import { View, Text, ScrollView } from 'react-native'
import { useTranslation } from '@/i18n/useTranslation'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function AboutScreen() {
  const { t } = useTranslation()

  return (
    <ScrollView className="flex-1 bg-cream">
      <View className="flex-row justify-end px-6 pt-4">
        <LanguageSwitcher />
      </View>
      <View className="bg-dark-green px-6 pt-16 pb-10">
        <Text className="font-outfit-bold text-3xl text-gold">
          {t('Index.title')}
        </Text>
        <Text className="font-inter text-cream/70 mt-2">{t('Index.description')}</Text>
      </View>

      <View className="px-6 py-8">
        <Text className="font-outfit-semibold text-xl text-dark-green mb-3">
          {t('About.quality.standard.title')}
        </Text>
        <Text className="font-inter text-dark-green/70 leading-6 mb-8">
          {t('About.quality.standard.p1')}
        </Text>

        <Text className="font-outfit-semibold text-xl text-dark-green mb-3">
          {t('About.heritage.tag')}
        </Text>
        <Text className="font-inter text-dark-green/70 leading-6 mb-8">
          {t('About.heritage.description')}
        </Text>

        <Text className="font-outfit-semibold text-xl text-dark-green mb-3">
          {t('About.join.title')}
        </Text>
        <Text className="font-inter text-dark-green/70 leading-6">
          {t('About.join.description')}
        </Text>
      </View>
    </ScrollView>
  )
}
