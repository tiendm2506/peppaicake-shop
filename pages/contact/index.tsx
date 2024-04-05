import styles from './contact.module.scss'
import sectionStyles from './../../styles/section.module.scss'

// import { useTranslate } from '../hooks/useTranslate'

export default function Contact() {
  // const translate = useTranslate().contactPage
  return (
    <main id={styles.contactPage}>
      {/* <section id='banner-page'>
        <img className='img-fluid' src='../images/bg-banner-page.jpg' alt='' />
        <h1>
          Liên hệ <span className='d-none d-sm-inline-block' />
        </h1>
      </section> */}
      <section id={styles.contact}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className={styles.contactInfo}>
                <h2>Contact infomation</h2>
                <p>
                  The Bakery is conveniently located in downtown New Paltz. North Front Street is a
                  cozy street full of interesting shops, parking is easy.
                </p>
                <ul>
                  <li>
                    <div className={styles.icon}>
                      <i className='fa fa-map-marker' aria-hidden='true' />
                    </div>
                    <div className={styles.content}>
                      <h3>Địa chỉ</h3>
                      <h6>13 Cô Giang, Phường 1, Phú Nhuận, TP.HCM</h6>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <i className='fa fa-phone' aria-hidden='true' />
                    </div>
                    <div className={styles.content}>
                      <h3>Điện thoại</h3>
                      <h6>
                        <b style={{ color: '#c8aa7b' }}>0909.111.223</b>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className={styles.icon}>
                      <i className='fa fa-envelope-o' aria-hidden='true' />
                    </div>
                    <div className={styles.content}>
                      <h3>Email</h3>
                      <h6>peppaicake@contact.com</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className={styles.contactForm}>
                <h2>Contact form</h2>
                <div className={sectionStyles.form}>
                  <form action=''>
                    <div className={sectionStyles.input}>
                      <input type='text' placeholder='Your name*' required />
                      <input type='text' placeholder='Your phone*' required />
                      <input type='text' placeholder='Your address*' required />
                    </div>
                    <textarea name='' placeholder='Message' defaultValue={''} />
                    <button className={`${sectionStyles.submitBtn} general-btn`}>
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.maps}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2045058649433!2d106.68068131526033!3d10.795643261789522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d15792dcbd%3A0x7ba1abf3827abfd6!2zMTMgQ8O0IEdpYW5nLCBQaMaw4budbmcgMiwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1622161788126!5m2!1svi!2s'
          width='100%'
          height={550}
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
        />
      </section>
    </main>
  )
}
