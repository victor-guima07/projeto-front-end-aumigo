import { useState } from 'react'
import Button from '../../shared/ui/Button/Button'
import mascotFace from '../../shared/assets/images/aumigo-hero.svg'
import styles from './Header.module.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#inicio" aria-label="AuMigo, voltar ao início">
          <span className={styles.logoIcon}>A</span>
          <span>AuMigo</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Navegação principal">
          <a href="#beneficios" onClick={handleLinkClick}>Benefícios</a>
          <a href="#funcionamento" onClick={handleLinkClick}>Como funciona</a>
          <a href="#depoimentos" onClick={handleLinkClick}>Depoimentos</a>
          <a href="#oferta" onClick={handleLinkClick}>Oferta</a>
        </nav>

        <div className={styles.cta}>
          <Button href="#oferta">Comprar agora</Button>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu principal' : 'Abrir menu principal'}
          onClick={toggleMenu}
        >
          <span className={styles.hamburgerFace} aria-hidden="true">
            <img src={mascotFace} alt="" />
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
