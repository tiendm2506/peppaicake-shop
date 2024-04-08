import styles from './contact.module.scss'

import BannerPage from '@/pages/components/common/banner-page'
import MapSection from './MapSection'
import ContactSection from './ContactSection'

// import { useTranslate } from '../hooks/useTranslate'

export default function Contact() {
  // const translate = useTranslate().contactPage
  return (
    <main id={styles.contactPage}>
      <BannerPage titlePage='Liên hệ' />
      <ContactSection />
      <MapSection />
    </main>
  )
}
