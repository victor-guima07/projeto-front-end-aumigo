import { product } from '../../entities/product/model/product'
import SectionTitle from '../../shared/ui/SectionTitle/SectionTitle'
import styles from './Benefits.module.css'

const icons = {
  pulse: '〽',
  message: '◌',
  collar: '◇',
  spark: '✦',
}

function Benefits() {
  return (
    <section className={styles.section} id="beneficios">
      <div className={styles.inner}>
        <SectionTitle eyebrow="Pensada para vocês dois" title="Entender começa por prestar atenção" description="AuMigo transforma diferentes sinais da rotina em informações simples, sem substituir o cuidado veterinário ou a observação do tutor." />
        <div className={styles.grid}>
          {product.benefits.map((benefit, index) => (
            <article className={styles.card} key={benefit.title}>
              <div className={styles.top}><span className={styles.icon}>{icons[benefit.icon]}</span><span className={styles.number}>0{index + 1}</span></div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
