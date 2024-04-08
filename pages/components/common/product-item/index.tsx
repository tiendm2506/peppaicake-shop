import Link from 'next/link'

import styles from './styles.module.scss'
import { ROUTES } from '@/constants'

interface ProductProps {
  type?: string
}

const LIST_TYPE = 'list'

export default function ProductItem(props: ProductProps) {
  const { type } = props
  return (
    <div className={`${styles.wrapper_product} ${type === LIST_TYPE ? styles.list_type : ''}`}>
      <div className={styles.img}>
        <img className='img-fluid' src='/images/product-01.jpg' alt='' />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.name}>Bread stick</div>
          <div className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className={styles.price}>$ 7.00</div>
        </div>
        <button className={styles.add_to_cart_btn}>
          <img className='img-fluid' src='/images/icon-add-to-cart.png' alt='' />
          Thêm vào giỏ
        </button>
      </div>
      <Link href={ROUTES.PRODUCT_DETAILS}></Link>
    </div>
  )
}
