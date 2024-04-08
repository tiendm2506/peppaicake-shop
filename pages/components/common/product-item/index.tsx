import Link from 'next/link'

import styles from './styles.module.scss'
import { ROUTES } from '@/constants'

export default function ProductItem() {
  return (
    <div className={styles.wrapper_product}>
      <div className={styles.img}>
        <img className='img-fluid' src='/images/product-01.jpg' alt='' />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.name}>Bread stick</div>
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
