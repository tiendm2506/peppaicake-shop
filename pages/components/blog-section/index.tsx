import styles from './blog.module.scss'
import PostItem from '../common/post-item'

export default function BlogSection() {
  return (
    <section id={styles.blog}>
      <div className='container'>
        <h2>From our blog</h2>
        <div className='row'>
          <div className='col-lg-4 col-sm-6'>
            <PostItem />
          </div>
          <div className='col-lg-4 col-sm-6'>
            <PostItem />
          </div>
          <div className='col-lg-4 col-sm-6'>
            <PostItem />
          </div>
        </div>
      </div>
    </section>
  )
}
