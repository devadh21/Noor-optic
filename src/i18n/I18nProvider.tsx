import React, { createContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react'
import { I18nManager } from 'react-native'
import * as Localization from 'expo-localization'
import fr from '@/messages/fr.json'
import ar from '@/messages/ar.json'

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
}

export const I18nContext = createContext<I18nContextValue>({
  locale: 'fr',
  setLocale: () => {},
  t: (key: string) => key,
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

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
