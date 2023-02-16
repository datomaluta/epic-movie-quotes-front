import { useTranslation } from 'react-i18next'

const useGetTranslation = () => {
  const { t } = useTranslation()

  return { t }
}

export default useGetTranslation
