'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES } from '../../../constants'

export default function Menu() {
  const pathname = usePathname()
  return (
    <ul>
      <li>
        <Link href={ROUTES.HOME_PAGE} className={pathname === ROUTES.HOME_PAGE ? 'active' : ''}>
          Trang Chủ
        </Link>
      </li>
      <li>
        <Link href={ROUTES.ABOUT_PAGE} className={pathname === ROUTES.ABOUT_PAGE ? 'active' : ''}>
          Về Chúng Tôi
        </Link>
      </li>
      <li>
        <Link
          href={ROUTES.PRODUCT_PAGE}
          className={pathname === ROUTES.PRODUCT_PAGE ? 'active' : ''}
        >
          Sản Phẩm
        </Link>
      </li>
      <li>
        <Link href={ROUTES.BLOG_PAGE} className={pathname === ROUTES.BLOG_PAGE ? 'active' : ''}>
          Blog
        </Link>
      </li>
      <li>
        <Link
          href={ROUTES.CONTACT_PAGE}
          className={pathname === ROUTES.CONTACT_PAGE ? 'active' : ''}
        >
          Liên Hệ
        </Link>
      </li>
    </ul>
  )
}
