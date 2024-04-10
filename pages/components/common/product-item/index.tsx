import Link from 'next/link'
import { useState } from 'react'

import styles from './styles.module.scss'
import { ROUTES } from '@/constants'
import { Product } from '@/models'
// import { addCart } from '@/store/cartSlice'
import { useAppSelector } from '@/store'

interface ProductProps {
  type?: string
  product: Product
}

const LIST_TYPE = 'list'

export default function ProductItem(props: ProductProps) {
  const { type, product } = props
  const [disabled, setDisabled] = useState(false)

  const listCarts = useAppSelector((state) => state.carts.carts)
  // console.log('carts: ', listCarts)
  const handleAddToCart = () => {
    if (disabled) return
    setDisabled(true)
    // addCart({ name: '8888', amout: 2 })
  }
  return (
    <div className={`${styles.wrapper_product} ${type === LIST_TYPE ? styles.list_type : ''}`}>
      <div className={styles.img}>
        <img className='img-fluid' src={product?.thumb} alt={product?.name} />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.name}>{product?.name}</div>
          <div className={styles.description}>{product?.desc}</div>
          <div className={styles.price}>{product?.price}$</div>
        </div>
        <button className={`${styles.add_to_cart_btn} ${disabled ? styles.disabled : ''}`} onClick={handleAddToCart}>
          <img className='img-fluid' src='/images/icon-add-to-cart.png' alt='' />
          {disabled ? 'Đã thêm sản phẩm' : 'Thêm vào giỏ hàng'}
          <span className={styles.number}>1</span>
        </button>
      </div>
      <Link href={ROUTES.PRODUCT_DETAILS}></Link>
    </div>
  )
}
