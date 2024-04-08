import styles from './contact.module.scss'
import FormContact from './FormContact'
import Info from './Info'

export default function ContactSection() {
  return (
    <section id={styles.contact}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <Info />
          </div>
          <div className='col-lg-6'>
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  )
}
