import { useTranslation } from 'react-i18next'

const useConfirmChangesModal = () => {
  const { t } = useTranslation()

  return { t }
}

export default useConfirmChangesModal
