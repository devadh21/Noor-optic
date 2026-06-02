import LanguageSwitcher from '@/components/LanguageSwitcher'
import { I18nProvider } from '@/i18n/I18nProvider'
import { useTranslation } from '@/i18n/useTranslation'
import { NativeTabs } from 'expo-router/unstable-native-tabs'
// import { Tabs } from 'expo-router'

import {View,Text } from 'react-native'

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

    // <Tabs>
    //   <Tabs.Screen name='index' options={{
    //     headerTitle: `t('Navigation.accueil')}`,
    //   }}
    //   />
    //      <Tabs.Screen name='shop' options={{
    //     headerTitle: `t('Navigation.shop')}`,
    //   }}
    //   />
    //      <Tabs.Screen name='about' options={{
    //     headerTitle: `t('Navigation.about')}`,
    //   }}
    //   />
    // </Tabs>

  )
}

export default function RootLayout() {
  return (
    <I18nProvider>
      <View className="flex-row justify-between items-center px-2 py-4 mt-10 shadow-lg">
        <Text className='text-3xl text-gold text-semibold'><Text className='text-dark-green text-bold text-clip'>Noor</Text>Optic</Text>
        <LanguageSwitcher />
      </View>
      <TabLayout />
    </I18nProvider>
  )
}
