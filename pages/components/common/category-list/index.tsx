import styles from './styles.module.scss'

export default function CategoryList() {
  return (
    <div className={styles.list_categories}>
      <ul>
        <li className='active'>All</li>
        <li>Bread</li>
        <li>Birthday Cake</li>
        <li>Wedding Cake</li>
      </ul>
    </div>
  )
}
