import Link from 'next/link'

import styles from './header.module.scss'
import { ROUTES } from './../../../constants'
import Menu from './Menu'
import Social from './Social'
import Info from './Info'

export function Header() {
  return (
    <header id={styles.header}>
      <div className='container-fluid'>
        <div className={`d-none d-sm-flex ${styles.infoSocial}`}>
          <Info />
          <Social />
        </div>
        <div className={`${styles.logoMenu} d-none d-sm-flex`}>
          <div className={styles.logo}>
            <Link href={ROUTES.HOME_PAGE}>
              <img src='/images/logo.svg' alt='' />
            </Link>
          </div>
          <div className={styles.menu}>
            <Menu />
            <Link className={styles.cart} href={ROUTES.CART_PAGE}>
              <i className='fa fa-shopping-basket' aria-hidden='true' />
              <span>3</span>
            </Link>
          </div>
        </div>
        {/*Menu mobile*/}
        <div className={`${styles.logoMenu} d-sm-none`}>
          <div className='control__menu'>
            <span className='line line--first' />
            <span className='line line--second' />
            <span className='line line--third' />
          </div>
          <div className={styles.logo}>
            <Link href={ROUTES.HOME_PAGE}>
              <img src='/images/logo.svg' alt='' />
            </Link>
          </div>
          <Link href={ROUTES.CART_PAGE} className={styles.cart}>
            <i className='fa fa-shopping-basket' aria-hidden='true' />
            <span>3</span>
          </Link>
          <div className='menuMobile'>
            <Menu />
          </div>
        </div>
        {/*End Menu mobile*/}
      </div>
    </header>
  )
}
