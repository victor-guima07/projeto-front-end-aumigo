import { testimonials } from '../../entities/product/model/product'
import SectionTitle from '../../shared/ui/SectionTitle/SectionTitle'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.inner}>
        <SectionTitle eyebrow="Histórias de conexão" title="Quem ama, aprende a observar" description="Veja o que tutores contam sobre a experiência com a AuMigo." />
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article className={styles.card} key={item.name}>
              <div className={styles.stars} aria-label="5 de 5 estrelas">★★★★★</div>
              <blockquote>“{item.text}”</blockquote>
              <div className={styles.author}><span>{item.initials}</span><div><strong>{item.name}</strong><small>Comunidade AuMigo</small></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
