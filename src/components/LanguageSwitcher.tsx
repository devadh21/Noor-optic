import { Pressable, Text } from 'react-native'
import { useTranslation } from '@/i18n/useTranslation'
import { useChangeDirectionStore } from '@/contexts/changeDirection'


export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()
  const setIsRTL = useChangeDirectionStore((state) => state.setIsRTL)


  const toggle = () => {
    setLocale(locale === 'fr' ? 'ar' : 'fr')
    setIsRTL(locale === 'fr' ? false : true)

  }

   const locales = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' } // Noor means "light" in Arabic, Moroccan flag is appropriate
  ];

  return (
    <Pressable
      onPress={toggle}
      className="flex-row items-center gap-2 px-3 py-2 rounded-full  border   "
    >
      <Text className="text-xs font-bold  tracking-[2px]">
        {locale === 'fr' ? `${locales[1].flag} ${locales[1].name}` : `${locales[0].flag} ${locales[0].name}`}
      </Text>
    </Pressable>
  )
}
