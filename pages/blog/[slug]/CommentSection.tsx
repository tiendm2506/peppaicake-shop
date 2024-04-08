import styles from './blog-detail.module.scss'

export default function CommentSection() {
  return (
    <section id={styles.comment_post}>
      <div className='container'>
        <h2>Comment</h2>
        <div className='row'>
          <div className='col-lg-9 col-sm-7'>
            <ul>
              <li>
                <img className='img-fluid' src='/images/avatar.png' alt='' />
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.name}>Andrew Fox</div>
                    <div className={styles.time}>Aug 18, 2021</div>
                  </div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </li>
              <li>
                <img className='img-fluid' src='/images/avatar.png' alt='' />
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.name}>Andrew Fox</div>
                    <div className={styles.time}>Aug 18, 2021</div>
                  </div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </li>
              <li>
                <img className='img-fluid' src='/images/avatar.png' alt='' />
                <div className={styles.content}>
                  <div className={styles.info}>
                    <div className={styles.name}>Andrew Fox</div>
                    <div className={styles.time}>Aug 18, 2021</div>
                  </div>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
