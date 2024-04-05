import { LayoutProps } from './../../models'
import React from 'react'

export function EmptyLayout(props: LayoutProps) {
  const { children } = props
  return <>{children}</>
}
