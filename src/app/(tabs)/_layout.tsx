import { Tabs } from 'expo-router'
import { useTranslation } from '@/i18n/useTranslation'

export default function TabLayout() {
  const { t } = useTranslation()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E9C46A',
        tabBarInactiveTintColor: '#F8F9FA60',
        tabBarStyle: {
          backgroundColor: '#1B4332',
          borderTopColor: '#F8F9FA20',
          borderTopWidth: 1,
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter_500Medium',
          fontSize: 11,
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name="about"
        options={{
          title: t('Navigation.about'),
        }}
      />
    </Tabs>
  )
}
