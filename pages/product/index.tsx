import styles from './product.module.scss'
import sectionStyles from './../../styles/section.module.scss'

import ProductItem from './components/ProductItem'
import BannerPage from '@/pages/components/common/banner-page'
import Pagination from '@/components/common/pagination'

export default function Product() {
  return (
    <main id={styles.productPage}>
      <BannerPage titlePage='Our Products' />
      <section id={styles.products} className={styles.listStyle}>
        <div className='container'>
          <div className={styles.searchShowing}>
            <div className={sectionStyles.search}>
              <div className={sectionStyles.wrapper}>
                <input type='text' placeholder='Search...' />
                <span className={sectionStyles.btnSearch}>
                  <i className='fa fa-search' aria-hidden='true' />
                </span>
              </div>
            </div>
            <div className={styles.showing}>
              <div className='show-style grid active'>
                <i className='fa fa-th' aria-hidden='true' />
              </div>
              <div className='show-style list'>
                <i className='fa fa-list' aria-hidden='true' />
              </div>
            </div>
          </div>
          <div className={styles.listCategories}>
            <ul>
              <li className='active'>All</li>
              <li>Bread</li>
              <li>Birthday Cake</li>
              <li>Wedding Cake</li>
            </ul>
          </div>
          <div className='row'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <Pagination />
        </div>
      </section>
    </main>
  )
}
