import Link from 'next/link'
import { useState } from 'react'

import { CartProps } from '@/models'

import styles from './cart.module.scss'

interface CartItemProps {
  cart: CartProps
  callBack: (index: number, amount: number) => void
  index: number
}

export default function CartItem(props: CartItemProps) {
  const { cart, index, callBack } = props
  const [amount, setAmount] = useState(cart?.quantity)
  if (!callBack) return
  callBack(index, amount)
  const handleIncrease = () => {
    setAmount((prev) => {
      return prev + 1
    })
  }
  const handleDecrease = () => {
    setAmount((prev) => {
      if (prev === 1) return 1
      return prev - 1
    })
  }
  return (
    <li className={styles.item}>
      <div className={styles.productName}>
        <img className='img-fluid' src={cart?.img} alt={cart?.name} />
        <span>{cart?.name}</span>
        <Link href='#'></Link>
      </div>
      <div className={styles.productPrice}>{cart?.price}$</div>
      <div className={styles.productQuantity}>
        <div className={styles.wrapper}>
          <div className={styles.downAmount} onClick={handleDecrease}>
            -
          </div>
          <div className={styles.amount}>{amount}</div>
          <div className={styles.upAmount} onClick={handleIncrease}>
            +
          </div>
        </div>
      </div>
      <div className={styles.productTotal}>{cart?.price * amount}$</div>
    </li>
  )
}
