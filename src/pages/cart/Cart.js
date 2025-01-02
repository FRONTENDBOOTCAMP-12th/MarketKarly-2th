import { LitElement, html, css } from 'lit';
import '@/components/CartAccordian';
import '@/components/Credit';
import reset from '@/styles/reset';

class Cart extends LitElement {
  static styles = [
    reset,
    css`
      .cart {
        h2 {
          margin-top: 5rem;
          text-align: center;
        }

        .cart-wrapper {
          margin-top: var(--space-8xl);
          margin-bottom: var(--space-8xl);
          display: flex;
          justify-content: center;
          gap: var(--space-2xl);
        }
      }
    `,
  ];

  render() {
    return html`
      <section class="cart">
        <h2>장바구니</h2>
        <div class="cart-wrapper">
          <cart-accordian-component></cart-accordian-component>
          <credit-component></credit-component>
        </div>
      </section>
    `;
  }
}

customElements.define('cart-page', Cart);
