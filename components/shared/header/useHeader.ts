import { useTranslation } from 'react-i18next'

const useHeader = () => {
  const { t } = useTranslation()
  return { t }
}

export default useHeader
