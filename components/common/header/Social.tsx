import styles from './header.module.scss'
import Link from 'next/link'

export default function Social() {
  return (
    <div className={styles.social}>
      <ul>
        <li>
          <Link href='#'>
            <i className='fa fa-facebook' aria-hidden='true' />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <i className='fa fa-twitter' aria-hidden='true' />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <i className='fa fa-youtube' aria-hidden='true' />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <i className='fa fa-google' aria-hidden='true' />
          </Link>
        </li>
      </ul>
    </div>
  )
}
