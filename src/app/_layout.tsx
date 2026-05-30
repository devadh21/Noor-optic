import { NativeTabs } from 'expo-router/unstable-native-tabs'
import './global.css'
import { I18nProvider } from '@/i18n/I18nProvider'
import { useTranslation } from '@/i18n/useTranslation'

function TabLayout() {
  const { t } = useTranslation()

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>{t('Navigation.accueil')}</NativeTabs.Trigger.Label>
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
      <TabLayout />
    </I18nProvider>
  )
}
