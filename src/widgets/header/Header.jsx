import Button from '../../shared/ui/Button/Button'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#inicio" aria-label="AuMigo, voltar ao início">
          <span className={styles.logoIcon}>A</span>
          <span>AuMigo</span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a>
          <a href="#funcionamento">Como funciona</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#oferta">Oferta</a>
        </nav>

        <div className={styles.cta}>
          <Button href="#oferta">Comprar agora</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
