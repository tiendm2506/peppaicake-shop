import styles from './feedback.module.scss'

export default function Feedback() {
  return (
    <div className={styles.feedback_item}>
      <div className={styles.content}>
        <img className={`img-fluid ${styles.quote_icon}`} src='/images/quote.png' alt='' />
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo
          consequat duis aute irure.
        </p>
        <div className={styles.rating}>
          <i className='fa fa-star' aria-hidden='true' />
          <i className='fa fa-star' aria-hidden='true' />
          <i className='fa fa-star' aria-hidden='true' />
          <i className='fa fa-star' aria-hidden='true' />
          <i className='fa fa-star' aria-hidden='true' />
        </div>
        <h3>Jason Williamson</h3>
        <h6>Founder at ThemeMu</h6>
        <img className={`img-fluid ${styles.avatar}`} src='/images/avatar.png' alt='' />
      </div>
    </div>
  )
}
