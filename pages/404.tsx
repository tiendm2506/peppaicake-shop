import styles from './../styles/404.module.scss'

export default function Custom404() {
  return (
    <main id={styles.notFoundPage}>
      <section className='text-center'>
        <div className='container-fluid'>
          <h1>404</h1>
          <h2>Oops ! Something missing</h2>
          <h4>
            This page is missing or you assembled the link incorrectly
            <a href='/'>Back to home page</a>
          </h4>
          <img className={styles.imgNotFound} src='/images/img-404.jpg' alt='' />
        </div>
      </section>
    </main>
  )
}
