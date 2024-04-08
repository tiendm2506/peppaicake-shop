import Link from 'next/link'

import styles from './../styles/404.module.scss'
import { ROUTES } from '@/constants'

export default function Custom404() {
  return (
    <main id={styles.notFoundPage}>
      <section className='text-center'>
        <div className='container-fluid'>
          <h1>404</h1>
          <h2>Oops ! Something missing</h2>
          <h4>
            This page is missing or you assembled the link incorrectly
            <Link href={ROUTES.HOME_PAGE}>Back to home page</Link>
          </h4>
          <img className={styles.imgNotFound} src='/images/img-404.jpg' alt='' />
        </div>
      </section>
    </main>
  )
}
