import styles from './testimonials.module.scss'

import Feedback from './feedback'

export default function TestimonialsSection() {
  return (
    <section id={styles.testimonials}>
      <div className='container'>
        <h2>Phản hồi từ khách hàng</h2>
        <div className='row slider'>
          <div className='col-lg-4 item'>
            <Feedback />
          </div>
          <div className='col-lg-4 item'>
            <Feedback />
          </div>
          <div className='col-lg-4 item'>
            <Feedback />
          </div>
        </div>
      </div>
    </section>
  )
}
