import { useState } from 'react'
import { product } from '../../entities/product/model/product'
import PurchaseModal from '../../features/purchase/ui/PurchaseModal'
import offerImage from '../../shared/assets/images/aumigo-offer.svg'
import styles from './Offer.module.css'

function Offer() {
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false)

  return (
    <>
      <section className={styles.section} id="oferta">
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.badge}>Disponível agora</span>
            <h2>Seu melhor amigo tem muito a dizer.</h2>
            <p>Leve a tecnologia AuMigo para a rotina de vocês e transforme pequenos sinais em mais cuidado e conexão.</p>
            <div className={styles.purchaseAction}>
              <button type="button" onClick={() => setIsPurchaseOpen(true)}>Comprar agora <span>→</span></button>
              <small>Compra segura · Frete grátis · 12 meses de garantia</small>
            </div>
          </div>
          <div className={styles.priceBox}>
            <div className={styles.productImage}>
              <img
                src="/images/coleira-aumigo.jpg"
                onError={(event) => { event.currentTarget.src = offerImage }}
                alt="Coleira inteligente AuMigo com módulo tradutor e alto-falante"
              />
              <span>AuMigo Voice</span>
            </div>
            <div className={styles.priceHeader}>
              <div><span>Preço especial</span><strong>{product.price}</strong><small>{product.installment}</small></div>
              <span className={styles.stock}>Em estoque</span>
            </div>
            <ul><li>✓ Coleira inteligente AuMigo</li><li>✓ Módulo tradutor Voice</li><li>✓ Carregador magnético</li><li>✓ Acesso ao aplicativo AuMigo</li></ul>
            <p>Frete grátis para todo o Brasil · Garantia de 12 meses</p>
          </div>
        </div>
      </section>
      <PurchaseModal isOpen={isPurchaseOpen} onClose={() => setIsPurchaseOpen(false)} price={product.price} />
    </>
  )
}

export default Offer
