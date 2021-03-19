import styles from '../styles/components/Progressbar.module.css'

export function Progressbar({ title, percentage }) {
  return (
    <>
    <label className={styles.title}>{ title }</label>
    <div className={styles.progress}>
      <div className={styles.progressValue} style={{ width: `${percentage}` }}/>
    </div>
    </>
  )
}