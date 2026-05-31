import LanguageSwitcher from '@/components/LanguageSwitcher'
import { I18nProvider } from '@/i18n/I18nProvider'
import { useTranslation } from '@/i18n/useTranslation'
import { NativeTabs } from 'expo-router/unstable-native-tabs'
import { View } from 'react-native'

function TabLayout() {
  const { t } = useTranslation()

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>{t('Navigation.accueil')}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="shop">
        <NativeTabs.Trigger.Label>{t('Navigation.shop')}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="about">
        <NativeTabs.Trigger.Label>{t('Navigation.about')}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>  
    </NativeTabs>
  )
}

export default function RootLayout() {
  return (
    <I18nProvider>
      <View className="flex-row justify-end px-6 mb-2">
        <LanguageSwitcher />
      </View>
      <TabLayout />
    </I18nProvider>
  )
}
