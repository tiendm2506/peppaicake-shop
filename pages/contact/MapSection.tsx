import styles from './contact.module.scss'

export default function MapSection() {
  return (
    <section id={styles.maps}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2045058649433!2d106.68068131526033!3d10.795643261789522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d15792dcbd%3A0x7ba1abf3827abfd6!2zMTMgQ8O0IEdpYW5nLCBQaMaw4budbmcgMiwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1622161788126!5m2!1svi!2s'
        width='100%'
        height={550}
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
      />
    </section>
  )
}
