import LanguageSwitcher from '@/components/LanguageSwitcher'
import { I18nProvider } from '@/i18n/I18nProvider'
import { useTranslation } from '@/i18n/useTranslation'
import { NativeTabs } from 'expo-router/unstable-native-tabs'
import { View, Image } from 'react-native'
import { useTabStore } from '@/contexts/tabVisibility'
import { SafeAreaView } from 'react-native-safe-area-context'




export default function RootLayout() {
  return (
    <I18nProvider>
      <TabLayoutContent />
    </I18nProvider>
  )
}

function TabLayoutContent() {
  const { direction, t } = useTranslation()
  const hidden = useTabStore((state) => state.hidden)

  return (
    <>
      <SafeAreaView edges={['top']} className="bg-dark-green">
        <View className={`${direction} justify-between items-center px-2 py-3   shadow-xl bg-white border-b border-gray-300`}>
          <Image
            source={require('@/assets/images/logo2.png')}
            width={48}
            height={48}

            className="!w-12 !h-12"
          />
          <LanguageSwitcher />
        </View>
      </SafeAreaView>

      <NativeTabs
        backgroundColor="#1a3c34"
        tintColor="#fff"
        labelStyle={{ fontSize: 12, fontWeight: 'bold', color: '#d4a54a' }}
        labelVisibilityMode="selected"
        iconColor={{ selected: '#d4a54a', default: '#d4a54a' }}
        hidden={hidden}
      >
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Icon
            sf="house.fill"
            md="home"
          />
          <NativeTabs.Trigger.Label selectedStyle={{ color: '#d4a54a' }}>
            {t('Navigation.accueil')}
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="shop">
          <NativeTabs.Trigger.Icon
            sf="bag.fill"
            md="shopping_bag"
          />
          <NativeTabs.Trigger.Label selectedStyle={{ color: '#d4a54a' }}>
            {t('Navigation.shop')}
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="about">
          <NativeTabs.Trigger.Icon
            sf="info.circle.fill"
            md="info"
          />
          <NativeTabs.Trigger.Label selectedStyle={{ color: '#d4a54a' }}>
            {t('Navigation.about')}
          </NativeTabs.Trigger.Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  )
}

