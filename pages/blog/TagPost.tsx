import Link from 'next/link'

import styles from './sidebar-blog/styles.module.scss'

export default function TagPost() {
  return (
    <div className={styles.tags_post}>
      <div className={styles.title_post}>Tags</div>
      <ul>
        <li>
          <Link href='#'>Bread sticks</Link>
        </li>
        <li>
          <Link href='#'>Rolls</Link>
        </li>
        <li>
          <Link href='#'>Milk</Link>
        </li>
        <li>
          <Link href='#'>Challar</Link>
        </li>
        <li>
          <Link href='#'>swaill roll</Link>
        </li>
        <li>
          <Link href='#'>Bread sticks</Link>
        </li>
      </ul>
    </div>
  )
}
