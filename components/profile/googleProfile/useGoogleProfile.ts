import { useTranslation } from 'react-i18next'

const useGoogleProfile = () => {
  const { t } = useTranslation()

  return { t }
}

export default useGoogleProfile
