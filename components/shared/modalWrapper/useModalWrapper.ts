import { useRouter } from 'next/router'

const useModalWrapper = () => {
  const router = useRouter()

  return { router }
}

export default useModalWrapper
