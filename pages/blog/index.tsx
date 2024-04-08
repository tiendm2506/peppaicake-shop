import BannerPage from '../components/common/banner-page'
import BlogSection from './BlogSection'

import styles from './blog.module.scss'

export default function Blog() {
  return (
    <main id={styles.blog_page}>
      <BannerPage titlePage='Blog' />
      <BlogSection />
    </main>
  )
}
