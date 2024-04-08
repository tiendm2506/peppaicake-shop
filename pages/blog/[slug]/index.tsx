import BannerPage from '@/pages/components/common/banner-page'
import SidebarBlog from '../sidebar-blog'
import CommentSection from './CommentSection'

import styles from './blog-detail.module.scss'
import FormSection from './FormSection'
import TagPost from './TagPost'
import PostContentSection from './PostContentSection'

export default function BlogDetailPage() {
  return (
    <main id={styles.blog_details_page}>
      <BannerPage titlePage='Blog Details' />
      <PostContentSection />
      <CommentSection />
      <FormSection />
    </main>
  )
}
