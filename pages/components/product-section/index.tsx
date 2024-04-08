import styles from './styles.module.scss'
import Link from 'next/link'

import ProductItem from '../common/product-item'
import { ROUTES } from '@/constants'
import CategoryList from '../common/category-list'

export default function ProductSection() {
  return (
    <section id={styles.products}>
      <div className='container'>
        <h2>Sản phẩm của chúng tôi</h2>
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
        </div>
        <div className='text-center'>
          <Link className='general-btn' href={ROUTES.PRODUCT_PAGE}>
            Xem thêm <i className='fa fa-long-arrow-right' aria-hidden='true' />
          </Link>
        </div>
      </div>
    </section>
  )
}
