import styles from './cart.module.scss'
import sectionStyles from './../../styles/section.module.scss'
import CartItem from './components/CartItem'

export default function Cart() {
  return (
    <main id={styles.cartPage}>
      <section id={sectionStyles.bannerPage}>
        <img className='img-fluid' src='/images/bg-banner-page.jpg' alt='' />
        <h1>Your cart</h1>
      </section>
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
