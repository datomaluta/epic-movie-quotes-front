import dynamic from 'next/dynamic'
import React from 'react'
import { PropsType } from './types'

const NoSSR: React.FC<PropsType> = (props) => <>{props.children}</>

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
})
