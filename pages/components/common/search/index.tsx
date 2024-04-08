import styles from './styles.module.scss'

export default function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
        <input type='text' placeholder='Search...' />
        <span className={styles.btn_search}>
          <i className='fa fa-search' aria-hidden='true' />
        </span>
      </div>
    </div>
  )
}
