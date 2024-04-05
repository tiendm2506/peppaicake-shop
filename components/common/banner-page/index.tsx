import styles from './style.module.scss'

interface propsType {
  titlePage: string
}

export default function BannerPage(props: propsType) {
  const { titlePage } = props
  return (
    <section id={styles.bannerPage}>
      <img className='img-fluid' src='/images/bg-banner-page.jpg' alt='' />
      <h1>{titlePage}</h1>
    </section>
  )
}
