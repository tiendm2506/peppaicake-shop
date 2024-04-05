import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export type NextPageWithLayout = NextPage & {
  Layout?: (page: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export interface DataResponse<T> {
  data: T;
  success: boolean
}

export interface Pagination<T> {
  limit: string
  page: string
  total_count: number
  data: T[]
}