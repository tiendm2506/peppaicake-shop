import styles from './../product.module.scss'
import Link from 'next/link'

export default function ProductItem() {
  return (
    <div className='col-lg-3 col-sm-6'>
      <div className={styles.wrapperProduct}>
        <div className={styles.img}>
          <img className='img-fluid' src='/images/product-01.jpg' alt='' />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.name}>Bread stick</div>
            <div className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className={styles.price}>$ 7.00</div>
          </div>
          <button className='add-to-cart-btn'>
            <img className='img-fluid' src='/images/icon-add-to-cart.png' alt='' />
            Thêm vào giỏ
          </button>
        </div>
        <Link href='#'></Link>
      </div>
    </div>
  )
}
