import Link from 'next/link'

import { ROUTES } from '@/constants'
import { useRouter } from 'next/router'

import styles from './header.module.scss'

export default function Menu() {
  const router = useRouter()
  const { pathname } = router
  console.log('pathname: ', pathname)
  return (
    <ul>
      <li>
        <Link href={ROUTES.HOME_PAGE} className={pathname === ROUTES.HOME_PAGE ? styles.active : ''}>
          Trang Chủ
        </Link>
      </li>
      <li>
        <Link href={ROUTES.ABOUT_PAGE} className={pathname === ROUTES.ABOUT_PAGE ? styles.active : ''}>
          Về Chúng Tôi
        </Link>
      </li>
      <li>
        <Link href={ROUTES.PRODUCT_PAGE} className={pathname === ROUTES.PRODUCT_PAGE ? styles.active : ''}>
          Sản Phẩm
        </Link>
      </li>
      <li>
        <Link href={ROUTES.BLOG_PAGE} className={pathname === ROUTES.BLOG_PAGE ? styles.active : ''}>
          Blog
        </Link>
      </li>
      <li>
        <Link href={ROUTES.CONTACT_PAGE} className={pathname === ROUTES.CONTACT_PAGE ? styles.active : ''}>
          Liên Hệ
        </Link>
      </li>
    </ul>
  )
}
