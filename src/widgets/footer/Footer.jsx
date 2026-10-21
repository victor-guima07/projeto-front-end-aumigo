import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div><a className={styles.logo} href="#inicio"><span>A</span>AuMigo</a><p>Mais sintonia em cada latido.</p></div>
        <nav aria-label="Links do rodapé"><a href="#beneficios">Benefícios</a><a href="#funcionamento">Como funciona</a><a href="#oferta">Comprar</a></nav>
      </div>
      <div className={styles.bottom}><span>© 2026 AuMigo. Todos os direitos reservados.</span><span>Feito com carinho por pessoas que amam cães.</span></div>
    </footer>
  )
}

export default Footer
