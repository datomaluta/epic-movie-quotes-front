import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const useSidebar = () => {
  const { t } = useTranslation()
  const userData = useSelector((state: RootState) => state.user)

  return { t, userData }
}
export default useSidebar
