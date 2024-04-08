import Link from 'next/link'

import styles from './sidebar-blog/styles.module.scss'

export default function CategoryPost() {
  return (
    <div className={styles.categories_post}>
      <div className={styles.title_post}>Categories</div>
      <ul>
        <li>
          <Link href='#'>
            <span className={styles.name}>Marble cake</span>
            <span className={styles.amount}>25</span>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <span className={styles.name}>Marble cake</span>
            <span className={styles.amount}>25</span>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <span className={styles.name}>Marble cake</span>
            <span className={styles.amount}>25</span>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <span className={styles.name}>Marble cake</span>
            <span className={styles.amount}>25</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
