import Link from 'next/link'

import './header.scss'
import { ROUTES } from './../../../constants'
import Menu from './Menu'
import Social from './Social'
import Info from './Info'

export function Header() {
  return (
    <header id='header'>
      <div className='container-fluid'>
        <div className='info-social d-none d-sm-flex'>
          <Info />
          <Social />
        </div>
        <div className='logo-menu d-none d-sm-flex'>
          <div className='logo'>
            <a href='/'>
              <img src='../images/logo.svg' alt='' />
            </a>
          </div>
          <div className='menu'>
            <Menu />
            <Link className='cart' href={ROUTES.CART_PAGE}>
              <i className='fa fa-shopping-basket' aria-hidden='true' />
              <span>3</span>
            </Link>
          </div>
        </div>
        {/*Menu mobile*/}
        <div className='logo-menu d-sm-none'>
          <div className='control__menu'>
            <span className='line line--first' />
            <span className='line line--second' />
            <span className='line line--third' />
          </div>
          <div className='logo'>
            <a href='/'>
              <img src='/images/logo.svg' alt='' />
            </a>
          </div>
          <a className='cart'>
            <i className='fa fa-shopping-basket' aria-hidden='true' />
            <span>3</span>
          </a>
          <div className='menu-mobile'>
            <Menu />
          </div>
        </div>
        {/*End Menu mobile*/}
      </div>
    </header>
  )
}
