import productImage from '../../shared/assets/images/product-closeup.svg'
import styles from './ProductShowcase.module.css'

function ProductShowcase() {
  return (
    <section className={styles.section} aria-labelledby="produto-title">
      <div className={styles.inner}>
        <div className={styles.visual}><img src={productImage} alt="Detalhe ilustrado da coleira AuMigo em verde" /></div>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Design que acompanha</span>
          <h2 id="produto-title">Tecnologia por dentro. Conforto por fora.</h2>
          <p>Uma coleira criada para fazer parte da vida real: do passeio no parque ao descanso no sofá.</p>
          <ul>
            <li><span>✓</span><div><strong>Leve e ajustável</strong><small>Três tamanhos e material macio.</small></div></li>
            <li><span>✓</span><div><strong>Resistente a respingos</strong><small>Pronta para pequenas aventuras diárias.</small></div></li>
            <li><span>✓</span><div><strong>Bateria para a semana</strong><small>Até 7 dias de autonomia por carga.</small></div></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
