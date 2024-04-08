import sectionStyles from './../../styles/section.module.scss'
import styles from './contact.module.scss'

export default function FormContact() {
  return (
    <div className={styles.contactForm}>
      <h2>Contact form</h2>
      <div className={sectionStyles.form}>
        <form action=''>
          <div className={sectionStyles.input}>
            <input type='text' placeholder='Your name*' required />
            <input type='text' placeholder='Your phone*' required />
            <input type='text' placeholder='Your address*' required />
          </div>
          <textarea name='' placeholder='Message' defaultValue={''} />
          <button className={`${sectionStyles.submitBtn} general-btn`}>Send message</button>
        </form>
      </div>
    </div>
  )
}
