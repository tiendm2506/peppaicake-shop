import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import 'bootstrap/scss/bootstrap.scss'
import 'font-awesome-4/scss/font-awesome.scss'

import '../public/scss/fonts.scss'
import '../public/scss/general.scss'
import '../public/scss/elements.scss'
import '../public/scss/animation.scss'

import App from './../components/App'
import { store } from './../store'
import { MainLayout } from './../components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
        <App />
      </MainLayout>
    </Provider>
  )
}
