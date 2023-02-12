import { SetState } from 'types'

export type PropsType = { showOrHideEmailModal: (boolean) => void }
export type HookPropsType = {
  showOrHideModal: SetState<boolean>
}
export type DataType = {
  email: string
}
