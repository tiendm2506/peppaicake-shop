import styles from './blog-detail.module.scss'
import formStyles from './../../../styles/section.module.scss'

export default function FormSection() {
  return (
    <section id={styles.leave_comment}>
      <div className='container'>
        <h2>Leave your comment</h2>
        <h6>Your email address will not be published. Required fields are marked *</h6>
        <div className='row'>
          <div className='col-lg-9 col-sm-7'>
            <div className={formStyles.form}>
              <form>
                <div className={formStyles.input}>
                  <input type='text' placeholder='Your name*' required />
                  <input type='text' placeholder='Your email' />
                  <input type='text' placeholder='Your phone' />
                </div>
                <textarea name='' placeholder='Message*' defaultValue={''} />
                <button className={`general-btn ${formStyles.submit_btn}`}>Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
