import { useTranslation } from 'react-i18next'

const useSidebar = () => {
  const { t } = useTranslation()
  return { t }
}

export default useSidebar
