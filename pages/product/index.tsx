import { useState } from 'react'
import Head from 'next/head'

import ProductItem from '../components/common/product-item'
import BannerPage from '@/pages/components/common/banner-page'
import Pagination from '@/components/common/pagination'
import Search from '../components/common/search'
import CategoryList from '../components/common/category-list'

import styles from './product.module.scss'

const TYPE_VIEW = {
  LIST_VIEW: 'list',
  GRID_VIEW: 'grid',
}

export default function Product() {
  const [typeView, setTypeView] = useState(TYPE_VIEW.GRID_VIEW)
  const handleSwitchTypeView = (type: string) => {
    setTypeView(type)
  }
  const listProducts = [
    { name: 'Bread stick 1', price: 15, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', thumb: '/images/product-01.jpg' },
    { name: 'Bread stick 2', price: 5, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', thumb: '/images/product-01.jpg' },
    { name: 'Bread stick 3', price: 6, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', thumb: '/images/product-01.jpg' },
    { name: 'Bread stick 4', price: 7, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', thumb: '/images/product-01.jpg' },
    { name: 'Bread stick 5', price: 12, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', thumb: '/images/product-01.jpg' },
    { name: 'Bread stick 6', price: 8, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', thumb: '/images/product-01.jpg' },
    { name: 'Bread stick 7', price: 5, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', thumb: '/images/product-01.jpg' },
    { name: 'Bread stick 8', price: 50, desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ', thumb: '/images/product-01.jpg' },
  ]
  return (
    <>
      <Head>
        <title>Danh sách sản phẩm</title>
      </Head>
      <main id={styles.product_page}>
        <BannerPage titlePage='Our Products' />
        <section id={styles.products} className={typeView === TYPE_VIEW.LIST_VIEW ? styles.list_style : ''}>
          <div className='container'>
            <div className={styles.search_showing}>
              <Search />
              <div className={styles.showing}>
                <div onClick={() => handleSwitchTypeView(TYPE_VIEW.GRID_VIEW)} className={`${styles.show_style} grid ${typeView === TYPE_VIEW.GRID_VIEW ? styles.active : ''}`}>
                  <i className='fa fa-th' aria-hidden='true' />
                </div>
                <div onClick={() => handleSwitchTypeView(TYPE_VIEW.LIST_VIEW)} className={`${styles.show_style} list ${typeView === TYPE_VIEW.LIST_VIEW ? styles.active : ''}`}>
                  <i className='fa fa-list' aria-hidden='true' />
                </div>
              </div>
            </div>
            <CategoryList />
            <div className='row'>
              {listProducts.map((product, index) => (
                <div key={index} className={`col-lg-3 col-sm-6 ${typeView === TYPE_VIEW.LIST_VIEW ? styles.full_width : ''}`}>
                  <ProductItem product={product} type={typeView} />
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </section>
      </main>
    </>
  )
}
