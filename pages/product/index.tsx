import styles from './product.module.scss'
import sectionStyles from './../../styles/section.module.scss'

import ProductItem from '../components/common/product-item'
import BannerPage from '@/pages/components/common/banner-page'
import Pagination from '@/components/common/pagination'
import Search from '../components/common/search'
import CategoryList from '../components/common/category-list'

export default function Product() {
  return (
    <main id={styles.product_page}>
      <BannerPage titlePage='Our Products' />
      <section id={styles.products} className={styles.list_style}>
        <div className='container'>
          <div className={styles.search_showing}>
            <Search />
            <div className={styles.showing}>
              <div className={`${styles.show_style} grid ${styles.active}`}>
                <i className='fa fa-th' aria-hidden='true' />
              </div>
              <div className={`${styles.show_style} list`}>
                <i className='fa fa-list' aria-hidden='true' />
              </div>
            </div>
          </div>
          <CategoryList />
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <ProductItem />
            </div>
            <div className='col-lg-3 col-sm-6'>
              <ProductItem />
            </div>
            <div className='col-lg-3 col-sm-6'>
              <ProductItem />
            </div>
            <div className='col-lg-3 col-sm-6'>
              <ProductItem />
            </div>
            <div className='col-lg-3 col-sm-6'>
              <ProductItem />
            </div>
            <div className='col-lg-3 col-sm-6'>
              <ProductItem />
            </div>
          </div>
          <Pagination />
        </div>
      </section>
    </main>
  )
}
