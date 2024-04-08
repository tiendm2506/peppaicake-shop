import styles from './contact.module.scss'

export default function Info() {
  return (
    <div className={styles.contactInfo}>
      <h2>Contact infomation</h2>
      <p>The Bakery is conveniently located in downtown New Paltz. North Front Street is a cozy street full of interesting shops, parking is easy.</p>
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
  )
}
