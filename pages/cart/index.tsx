import styles from './cart.module.scss'
import CartItem from './components/CartItem'
import BannerPage from '@/pages/components/common/banner-page'

export default function Cart() {
  return (
    <main id={styles.cartPage}>
      <BannerPage titlePage='Your cart' />
      <section id={styles.cart}>
        <div className='container'>
          <div className={styles.wrapper}>
            <ul>
              <li className={`${styles.title} d-none d-sm-flex`}>
                <div className={styles.productName}>Product</div>
                <div className={styles.productPrice}>Price</div>
                <div className={styles.productQuantity}>Quantity</div>
                <div className={styles.productTotal}>Total</div>
              </li>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </ul>
            <div className={styles.totalPrice}>Total: $72</div>
            <div className='text-end'>
              <button className='general-btn'>Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
