import Button from '../../shared/ui/Button/Button'
import heroImage from '../../shared/assets/images/aumigo-hero.svg'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.badge}><span>●</span> Tecnologia que aproxima</span>
          <h1>Se o seu cachorro pudesse falar, <em>o que ele diria?</em></h1>
          <p className={styles.lead}>AuMigo é a coleira inteligente que ajuda você a interpretar possíveis sinais do seu cão — para uma rotina com mais atenção, cuidado e conexão.</p>
          <div className={styles.actions}>
            <Button href="#oferta">Comprar AuMigo <span aria-hidden="true">→</span></Button>
            <Button href="#funcionamento" variant="secondary">Descobrir como funciona</Button>
          </div>
          <div className={styles.proof}>
            <div className={styles.avatars} aria-hidden="true"><span>🐶</span><span>🐕</span><span>🐾</span></div>
            <div><strong>+2.400 tutores interessados</strong><small>Prontos para ouvir melhor seus melhores amigos</small></div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.status}>Possível sinal detectado<strong>Hora de brincar?</strong></div>
          <img src={heroImage} alt="Ilustração de um cachorro usando a coleira inteligente AuMigo" />
          <div className={styles.battery}><span>7 dias</span> de bateria</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
