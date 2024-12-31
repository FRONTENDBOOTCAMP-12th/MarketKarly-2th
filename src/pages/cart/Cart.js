import { LitElement, html, css } from 'lit';
import '@/components/CartAccordian';

class Cart extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html` <cart-accordian-component></cart-accordian-component> `;
  }
}

customElements.define('cart-page', Cart);
