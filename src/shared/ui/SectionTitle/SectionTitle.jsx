import styles from './SectionTitle.module.css'

function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionTitle
