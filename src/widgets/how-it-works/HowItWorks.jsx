import SectionTitle from '../../shared/ui/SectionTitle/SectionTitle'
import styles from './HowItWorks.module.css'

const steps = [
  { number: '01', title: 'Vista a AuMigo', text: 'Ajuste a coleira confortavelmente e siga a rotina normalmente.' },
  { number: '02', title: 'Observe os sinais', text: 'Sensores identificam padrões de movimento e vocalização ao longo do dia.' },
  { number: '03', title: 'Receba uma interpretação', text: 'O aplicativo apresenta possíveis necessidades para você avaliar com atenção.' },
]

function HowItWorks() {
  return (
    <section className={styles.section} id="funcionamento">
      <div className={styles.inner}>
        <SectionTitle eyebrow="Simples desde o primeiro uso" title="Como a AuMigo funciona?" description="Três passos para criar uma rotina mais atenta e conectada com seu melhor amigo." />
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <article className={styles.step} key={step.number}>
              <span className={styles.number}>{step.number}</span>
              {index < steps.length - 1 && <span className={styles.line} aria-hidden="true" />}
              <h3>{step.title}</h3><p>{step.text}</p>
            </article>
          ))}
        </div>
        <p className={styles.note}><strong>Cuidado em primeiro lugar:</strong> as interpretações ajudam na observação da rotina, mas não substituem o acompanhamento de um médico-veterinário.</p>
      </div>
    </section>
  )
}

export default HowItWorks
