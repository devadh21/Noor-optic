import { createContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react'
import { I18nManager } from 'react-native'
import * as Localization from 'expo-localization'
import fr from '@/i18n/locales/fr.json'
import ar from '@/i18n/locales/ar.json'

const messagesMap = { fr, ar } as const
const SUPPORTED_LOCALES = ['fr', 'ar'] as const
type Locale = (typeof SUPPORTED_LOCALES)[number]

function getNested(obj: unknown, path: string): string {
  const result = path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part]
    }
    return undefined
  }, obj)
  return typeof result === 'string' ? result : path
}

function getInitialLocale(): Locale {
  const deviceLocale = Localization.getLocales()?.[0]?.languageCode as string | undefined
  return SUPPORTED_LOCALES.includes(deviceLocale as Locale)
    ? (deviceLocale as Locale)
    : 'fr'
}

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  isRTL: boolean
  direction: 'flex-row' | 'flex-row-reverse'
}

const isRTLDefault = false
const directionDefault = 'flex-row'

export const I18nContext = createContext<I18nContextValue>({
  locale: 'fr',
  setLocale: () => { },
  t: (key: string) => key,
  isRTL: isRTLDefault,
  direction: directionDefault,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    I18nManager.forceRTL(locale === 'ar')
    I18nManager.allowRTL(locale === 'ar')

  }, [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    I18nManager.forceRTL(newLocale === 'ar')
    I18nManager.allowRTL(newLocale === 'ar')
  }, [])

  const t = useCallback(
    (key: string): string => {
      return getNested(messagesMap[locale], key)
    },
    [locale],
  )

  const isRTL = locale === 'ar'
  const direction: 'flex-row' | 'flex-row-reverse' = isRTL ? 'flex-row-reverse' : 'flex-row'

  const value = useMemo(() => ({ locale, setLocale, t, isRTL, direction }), [locale, setLocale, t, isRTL, direction])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
