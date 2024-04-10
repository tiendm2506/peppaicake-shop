import Head from 'next/head'
import { useState } from 'react'

import styles from './cart.module.scss'
import CartItem from './CartItem'
import BannerPage from '@/pages/components/common/banner-page'
import TitleCart from './TitleCart'

export default function Cart() {
  const listCarts = [
    { name: 'Cinnamon coffee cake 1', price: 9.5, quantity: 3, slug: '#', img: '/images/img-cake-about.jpg' },
    { name: 'Cinnamon coffee cake 2', price: 12, quantity: 10, slug: '#', img: '/images/img-cake-about.jpg' },
    { name: 'Cinnamon coffee cake 3', price: 7, quantity: 3, slug: '#', img: '/images/img-cake-about.jpg' },
  ]
  const [total, setTotal] = useState(() => {
    let total = 0
    listCarts.map((cart) => {
      total += cart.price * cart.quantity
    })
    return total
  })
  const callBack = (index: number, amount: number) => {
    listCarts[index].quantity = amount
    let total = 0
    listCarts.map((cart) => {
      total += cart.price * cart.quantity
    })
    // setTotal(total)
  }

  return (
    <>
      <Head>
        <title>Giỏ hàng của bạn</title>
      </Head>
      <main id={styles.cartPage}>
        <BannerPage titlePage='Your cart' />
        <section id={styles.cart}>
          <div className='container'>
            <div className={styles.wrapper}>
              <ul>
                <TitleCart />
                {listCarts.map((cart, index) => (
                  <CartItem key={index} cart={cart} index={index} />
                ))}
              </ul>
              <div className={styles.totalPrice}>Total: {total}$</div>
              <div className='text-end'>
                <button className='general-btn'>Checkout</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
