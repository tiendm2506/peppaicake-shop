import styles from './styles.module.scss'

export default function BannerSection(props: any) {
  const { Link } = props
  return (
    <section id={styles.banner}>
      <img className='w-100 img-fluid img-banner' src='/images/banner-homepage.jpg' alt='' />
      <div className={styles.content}>
        <img className={`img-fluid ${styles.logo_banner}`} src='/images/logo-banner.png' alt='' />
        <h1>Quality Product</h1>
        <h4>
          <img className={`img-fluid ${styles.icon_left}`} src='/images/icon-left.png' alt='' />
          From the best bakers
          <img className={`img-fluid ${styles.icon_right}`} src='/images/icon-right.png' alt='' />
        </h4>
        <div className={styles.wrapper}>
          <img className='img-fluid' src='/images/barley.png' alt='' />
          <div>
            <Link to='product-section' smooth={true} spy={true} duration={500} offset={-200}>
              <span className={styles.shop_btn}>Shop Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
