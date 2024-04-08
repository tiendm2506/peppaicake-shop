import styles from './styles.module.scss'

export default function WhyChooseUs() {
  return (
    <section id={styles.why_choose_us}>
      <div className='container'>
        <h2>Why choose us</h2>
        <div className='row'>
          <div className='col-lg-3 col-sm-6'>
            <div className={styles.content}>
              <div className={styles.icon}>
                <i className='fa fa-check-square-o' aria-hidden='true' />
              </div>
              <div className={styles.name}>Nguyên liệu an toàn</div>
              <div className={styles.des}>Omnis iste natus error sit</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className={styles.content}>
              <div className={styles.icon}>
                <i className='fa fa-hand-spock-o' aria-hidden='true' />
              </div>
              <div className={styles.name}>100% homemade</div>
              <div className={styles.des}>Omnis iste natus error sit</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className={styles.content}>
              <div className={styles.icon}>
                <i className='fa fa-money' aria-hidden='true' />
              </div>
              <div className={styles.name}>Giá cả hợp lý</div>
              <div className={styles.des}>Omnis iste natus error sit</div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className={styles.content}>
              <div className={styles.icon}>
                <i className='fa fa-cubes' aria-hidden='true' />
              </div>
              <div className={styles.name}>Đa dạng mẫu mã</div>
              <div className={styles.des}>Omnis iste natus error sit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
