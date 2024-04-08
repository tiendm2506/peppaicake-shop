import styles from './post.module.scss'

export default function PostItem() {
  return (
    <div className={styles.post_item}>
      <div className={styles.thumb_post}>
        <img className='img-fluid' src='/images/product-01.jpg' alt='' />
        <div className={styles.time}>Aug 18, 2021</div>
      </div>
      <h3>How to make cake: 9 steps (with pictures)</h3>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum. Sed ut perspiciatis unde omnis [...]
      </p>
      <a href='layouts/blog-details.html' className='general-btn'>
        Read More <i className='fa fa-long-arrow-right' aria-hidden='true' />
      </a>
    </div>
  )
}
