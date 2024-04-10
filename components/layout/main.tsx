import Head from 'next/head'

import { Header, Footer } from './../common'
// import { LayoutProps } from 'models/common'
// import { Image } from 'components/common'

export function MainLayout(props: any) {
  const { children } = props

  const backToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
      <Footer />
      {/* <Image
        className='back-to-top-btn'
        src='/assets/images/common/back-to-top.svg'
        alt='Back to top'
        onClick={backToTop}
      /> */}
    </>
  )
}
