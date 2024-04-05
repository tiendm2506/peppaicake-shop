import Link from 'next/link'

import styles from './styles.module.scss'

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <ul>
        <li className={styles.prev}>
          <Link href='#'>
            <i className='fa fa-chevron-left' aria-hidden='true' />
            <i className='fa fa-chevron-left' aria-hidden='true' />
          </Link>
        </li>
        <li className={styles.active}>
          <Link href='#'>1</Link>
        </li>
        <li>
          <Link href='#'>2</Link>
        </li>
        <li>
          <Link href='#'>3</Link>
        </li>
        <li>
          <Link href='#'>4</Link>
        </li>
        <li>
          <Link href='#'>5</Link>
        </li>
        <li className={styles.prev}>
          <Link href='#'>
            <i className='fa fa-chevron-right' aria-hidden='true' />
            <i className='fa fa-chevron-right' aria-hidden='true' />
          </Link>
        </li>
      </ul>
    </div>
  )
}
