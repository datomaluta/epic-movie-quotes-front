import { useRouter } from 'next/router'
import { useState } from 'react'

const useLanguageSwitcher = () => {
  const router = useRouter()
  const [languageChanging, setLanguageChanging] = useState(false)
  const { replace, pathname } = useRouter()

  const showLanguageChanger = () => {
    setLanguageChanging((prevState) => !prevState)
  }

  const setLocaleHandler = (language: string) => {
    replace(pathname, pathname, { locale: language })
    setLanguageChanging(false)
  }

  return {
    languageChanging,
    setLocaleHandler,
    showLanguageChanger,
    router,
  }
}

export default useLanguageSwitcher
