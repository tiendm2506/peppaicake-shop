import styles from './about.module.scss'
import BannerPage from '@/components/common/banner-page'

export default function About() {
  // const router = useRouter()

  return (
    <main id={styles.aboutPage}>
      <BannerPage titlePage='về chúng tôi' />
      <section id={styles.aboutUs}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className={styles.img}
                style={{
                  backgroundImage: 'url(' + '/images/bg-img-about.png' + ')',
                }}
              >
                <img className='img-fluid' src='/images/img-cake-about.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className={styles.content}>
                <h2>Bakery is one of the oldest in the us</h2>
                <h4>history of the store</h4>
                <h6>
                  With 25 years of work consectetur adipisicing elit, sed do eiusmod tempor idunt ut
                  labore et dolore magna aliqua.
                </h6>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                </p>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <div className={styles.signature}>
                  <img className='img-fluid' src='/images/signature.png' alt='' />
                  <span>Joseph Murphy</span> - Store owner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.whyChooseUs}>
        <div className='container'>
          <h2>Why choose us</h2>
          <div className='row'>
            <div className='col-lg-4 col-sm-6'>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <i className='fa fa-check-square-o' aria-hidden='true' />
                  </div>
                  <div className={styles.name}>Nguyên liệu an toàn</div>
                  <div className={styles.des}>Omnis iste natus error sit</div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className='fa fa-hand-spock-o' aria-hidden='true' />
                  </div>
                  <div className={styles.name}>100% homemade</div>
                  <div className={styles.des}>Omnis iste natus error sit</div>
                </li>
              </ul>
            </div>
            <div className='col-lg-4 d-none d-lg-block'>
              <div className={styles.img}>
                <img className='img-fluid w-100' src='/images/img-about-2.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <i className='fa fa-money' aria-hidden='true' />
                  </div>
                  <div className={styles.name}>Giá cả hợp lý</div>
                  <div className={styles.des}>Omnis iste natus error sit</div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className='fa fa-cubes' aria-hidden='true' />
                  </div>
                  <div className={styles.name}>Đa dạng mẫu mã</div>
                  <div className={styles.des}>Omnis iste natus error sit</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
