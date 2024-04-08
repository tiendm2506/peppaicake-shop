import styles from './styles.module.scss'

import Search from '@/pages/components/common/search'
import CategoryPost from '../CategoryPost'
import HighlightPost from '../HighlightPost'
import TagPost from '../TagPost'

export default function SidebarBlog() {
  return (
    <div id={styles.sidebar_blog}>
      <Search />
      <CategoryPost />
      <HighlightPost />
      <TagPost />
    </div>
  )
}
