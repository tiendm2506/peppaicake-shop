import styles from './../cart.module.scss'

export default function CartItem() {
  return (
    <li className={styles.item}>
      <div className={styles.productName}>
        <img className='img-fluid' src='/images/img-cake-about.jpg' alt='' />
        <span>Cinnamon coffee cake</span>
        <a href='#' />
      </div>
      <div className={styles.productPrice}>$7.5</div>
      <div className={styles.productQuantity}>
        <div className={styles.wrapper}>
          <div className={styles.downAmount}>-</div>
          <div className={styles.amount}>3</div>
          <div className={styles.upAmount}>+</div>
        </div>
      </div>
      <div className={styles.productTotal}>$22.5</div>
    </li>
  )
}
