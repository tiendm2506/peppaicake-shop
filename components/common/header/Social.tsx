import styles from './header.module.scss'

export default function Social() {
  return (
    <div className={styles.social}>
      <ul>
        <li>
          <a href='#'>
            <i className='fa fa-facebook' aria-hidden='true' />
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-twitter' aria-hidden='true' />
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-youtube' aria-hidden='true' />
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa fa-google' aria-hidden='true' />
          </a>
        </li>
      </ul>
    </div>
  )
}
