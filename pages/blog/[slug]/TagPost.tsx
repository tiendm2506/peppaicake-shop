import Link from 'next/link'

import styles from './blog-detail.module.scss'

export default function TagPost() {
  return (
    <div className={styles.tags_post}>
      <span>Tags: </span>
      <ul className='d-inline-flex'>
        <li>
          <Link href='#'>Bagel</Link>
        </li>
        <li>
          <Link href='#'>Bread stick</Link>
        </li>
        <li>
          <Link href='#'>Roll stoys</Link>
        </li>
      </ul>
    </div>
  )
}
