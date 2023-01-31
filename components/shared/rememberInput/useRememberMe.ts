import { useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

const useRememberMe = (name: string) => {
  const form = useFormContext()
  const [checked, setChecked] = useState(false)

  const inputCheckedHandler = () => {
    setChecked((currentState) => !currentState)
  }

  useWatch({
    name: name,
    control: form.control,
  })

  return { form, checked, inputCheckedHandler }
}

export default useRememberMe
