import styles from './cart.module.scss'

export default function TitleCart() {
  return (
    <li className={`${styles.title} d-none d-sm-flex`}>
      <div className={styles.productName}>Product</div>
      <div className={styles.productPrice}>Price</div>
      <div className={styles.productQuantity}>Quantity</div>
      <div className={styles.productTotal}>Total</div>
    </li>
  )
}
