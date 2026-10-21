import { useEffect, useState } from 'react'
import Button from '../../../shared/ui/Button/Button'
import styles from './PurchaseModal.module.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  document: '',
  zipCode: '',
  address: '',
  number: '',
  city: '',
  state: '',
  payment: 'credit',
  cardNumber: '',
  cardName: '',
  expiry: '',
  cvv: '',
}

function PurchaseModal({ isOpen, onClose, price }) {
  const [form, setForm] = useState(initialForm)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setCompleted(true)
  }

  function closeModal() {
    setCompleted(false)
    setForm(initialForm)
    onClose()
  }

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeModal()}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="purchase-title">
        <button className={styles.close} type="button" onClick={closeModal} aria-label="Fechar janela de compra">×</button>

        {completed ? (
          <div className={styles.success} role="status">
            <span>✓</span>
            <h2 id="purchase-title">Compra aprovada!</h2>
            <p>Obrigado, {form.name.split(' ')[0]}! As informações do pedido e as próximas atualizações serão enviadas para <strong>{form.email}</strong>.</p>
            <div><small>Número do pedido</small><strong>#AUM-20486</strong></div>
            <Button onClick={closeModal}>Continuar navegando</Button>
          </div>
        ) : (
          <>
            <div className={styles.heading}>
              <span>Finalizar compra</span>
              <h2 id="purchase-title">Sua AuMigo está quase chegando</h2>
              <p>Preencha os dados abaixo para concluir seu pedido.</p>
              <small className={styles.testNotice}>Ambiente de teste: não informe dados pessoais ou bancários reais.</small>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <fieldset>
                <legend><span>1</span> Dados pessoais</legend>
                <div className={styles.fields}>
                  <label className={styles.full}>Nome completo<input name="name" value={form.name} onChange={updateField} autoComplete="name" required /></label>
                  <label>E-mail<input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required /></label>
                  <label>Telefone<input name="phone" value={form.phone} onChange={updateField} placeholder="(00) 00000-0000" autoComplete="tel" required /></label>
                  <label>CPF<input name="document" value={form.document} onChange={updateField} placeholder="000.000.000-00" required /></label>
                </div>
              </fieldset>

              <fieldset>
                <legend><span>2</span> Endereço de entrega</legend>
                <div className={styles.fields}>
                  <label>CEP<input name="zipCode" value={form.zipCode} onChange={updateField} placeholder="00000-000" autoComplete="postal-code" required /></label>
                  <label className={styles.wide}>Endereço<input name="address" value={form.address} onChange={updateField} autoComplete="street-address" required /></label>
                  <label>Número<input name="number" value={form.number} onChange={updateField} required /></label>
                  <label>Cidade<input name="city" value={form.city} onChange={updateField} autoComplete="address-level2" required /></label>
                  <label>Estado<input name="state" value={form.state} onChange={updateField} maxLength="2" placeholder="UF" autoComplete="address-level1" required /></label>
                </div>
              </fieldset>

              <fieldset>
                <legend><span>3</span> Pagamento</legend>
                <div className={styles.paymentOptions}>
                  <label><input type="radio" name="payment" value="credit" checked={form.payment === 'credit'} onChange={updateField} /> Cartão de crédito</label>
                  <label><input type="radio" name="payment" value="pix" checked={form.payment === 'pix'} onChange={updateField} /> Pix</label>
                </div>
                {form.payment === 'credit' && (
                  <div className={styles.fields}>
                    <label className={styles.full}>Número do cartão<input name="cardNumber" value={form.cardNumber} onChange={updateField} inputMode="numeric" placeholder="0000 0000 0000 0000" autoComplete="cc-number" required /></label>
                    <label className={styles.wide}>Nome impresso no cartão<input name="cardName" value={form.cardName} onChange={updateField} autoComplete="cc-name" required /></label>
                    <label>Validade<input name="expiry" value={form.expiry} onChange={updateField} placeholder="MM/AA" autoComplete="cc-exp" required /></label>
                    <label>CVV<input name="cvv" value={form.cvv} onChange={updateField} inputMode="numeric" maxLength="4" autoComplete="cc-csc" required /></label>
                  </div>
                )}
                {form.payment === 'pix' && <p className={styles.pix}>O QR Code Pix será exibido após a confirmação do pedido.</p>}
              </fieldset>

              <div className={styles.summary}>
                <div><span>AuMigo Voice</span><small>Quantidade: 1 · Frete grátis</small></div>
                <strong>{price}</strong>
              </div>
              <Button type="submit">Realizar compra</Button>
              <small className={styles.security}>🔒 Simulação local: nenhum dado é enviado ou armazenado.</small>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default PurchaseModal
