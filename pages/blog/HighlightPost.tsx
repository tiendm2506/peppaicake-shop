import Link from 'next/link'

import styles from './sidebar-blog/styles.module.scss'

export default function HighLightPost() {
  return (
    <div className={styles.highlight_post}>
      <div className={styles.title_post}>Highlight posts</div>
      <ul>
        <li>
          <img className='img-fluid' src='/images/cake-post.jpg' alt='' />
          <h3>Grandma’s strawberry shortcake</h3>
          <p>Aug 18, 2021</p>
          <Link href='#'></Link>
        </li>
        <li>
          <img className='img-fluid' src='/images/cake-post.jpg' alt='' />
          <h3>Grandma’s strawberry shortcake</h3>
          <p>Aug 18, 2021</p>
          <Link href='#'></Link>
        </li>
        <li>
          <img className='img-fluid' src='/images/cake-post.jpg' alt='' />
          <h3>Grandma’s strawberry shortcake</h3>
          <p>Aug 18, 2021</p>
          <Link href='#'></Link>
        </li>
      </ul>
    </div>
  )
}
