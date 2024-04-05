import styles from './header.module.scss'

export default function Info() {
  return (
    <div className={styles.info}>
      <ul>
        <li>
          <i className='fa fa-map-marker' aria-hidden='true' />
          13 Cô Giang, Phường 1, Phú Nhuận, TP.HCM
        </li>
        <li>
          <i className='fa fa-phone' aria-hidden='true' />
          <b>0909.111.223</b>
        </li>
      </ul>
    </div>
  )
}
