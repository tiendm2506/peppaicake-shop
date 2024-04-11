import styles from './styles.module.scss'
import Link from 'next/link'
import { useRef } from 'react'

import ProductItem from '../common/product-item'
import { ROUTES } from '@/constants'
import CategoryList from '../common/category-list'

export default function ProductSection(props: any) {
  const { Element } = props
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
    <Element name='product-section'>
      <section id={styles.products}>
        <div className='container'>
          <h2>Sản phẩm của chúng tôi</h2>
          <CategoryList />
          <div className='row'>
            {listProducts.map((product, index) => (
              <div className='col-lg-3 col-sm-6' key={index}>
                <ProductItem product={product} />
              </div>
            ))}
          </div>
          <div className='text-center'>
            <Link className='general-btn' href={ROUTES.PRODUCT_PAGE}>
              Xem thêm <i className='fa fa-long-arrow-right' aria-hidden='true' />
            </Link>
          </div>
        </div>
      </section>
    </Element>
  )
}
