import PostItem from '../components/common/post-item'
import Pagination from '@/components/common/pagination'
import HighlightPost from './HighlightPost'

import styles from './blog.module.scss'
import Search from '../components/common/search'
import CategoryPost from './CategoryPost'
import SidebarBlog from './sidebar-blog'

export default function BlogSection() {
  return (
    <section id={styles.blog}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9 col-sm-7'>
            <div className='row'>
              <div className='col-lg-6'>
                <PostItem />
              </div>
              <div className='col-lg-6'>
                <PostItem />
              </div>
              <div className='col-lg-6'>
                <PostItem />
              </div>
              <div className='col-lg-6'>
                <PostItem />
              </div>
              <div className='col-lg-6'>
                <PostItem />
              </div>
              <div className='col-lg-6'>
                <PostItem />
              </div>
            </div>
            <Pagination />
          </div>
          <div className='col-lg-3 col-sm-5'>
            <SidebarBlog />
          </div>
        </div>
      </div>
    </section>
  )
}
