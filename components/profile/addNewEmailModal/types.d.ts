import { SetState } from 'types'

export type PropsType = { showOrHideEmailModal: SetState<boolean> }

export type HookPropsType = {
  showOrHideModal: SetState<boolean>
}

export type DataType = {
  email: string
}
