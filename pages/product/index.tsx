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
  return (
    <>
      <Head>
        <title>Product List</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
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
              <div className={`col-lg-3 col-sm-6 ${typeView === TYPE_VIEW.LIST_VIEW ? styles.full_width : ''}`}>
                <ProductItem type={typeView} />
              </div>
              <div className={`col-lg-3 col-sm-6 ${typeView === TYPE_VIEW.LIST_VIEW ? styles.full_width : ''}`}>
                <ProductItem type={typeView} />
              </div>
              <div className={`col-lg-3 col-sm-6 ${typeView === TYPE_VIEW.LIST_VIEW ? styles.full_width : ''}`}>
                <ProductItem type={typeView} />
              </div>
              <div className={`col-lg-3 col-sm-6 ${typeView === TYPE_VIEW.LIST_VIEW ? styles.full_width : ''}`}>
                <ProductItem type={typeView} />
              </div>
              <div className={`col-lg-3 col-sm-6 ${typeView === TYPE_VIEW.LIST_VIEW ? styles.full_width : ''}`}>
                <ProductItem type={typeView} />
              </div>
              <div className={`col-lg-3 col-sm-6 ${typeView === TYPE_VIEW.LIST_VIEW ? styles.full_width : ''}`}>
                <ProductItem type={typeView} />
              </div>
            </div>
            <Pagination />
          </div>
        </section>
      </main>
    </>
  )
}
