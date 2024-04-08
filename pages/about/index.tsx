import styles from './about.module.scss'
import BannerPage from '@/pages/components/common/banner-page'
import WhyChooseUs from './WhyChooseUs'

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
      <WhyChooseUs />
    </main>
  )
}
