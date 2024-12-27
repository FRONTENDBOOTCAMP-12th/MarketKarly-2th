import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';
import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import pb from '../../api/pocketbase';

class Main extends LitElement {
  static styles = [
    reset,
    a11y,
    css`
      .line-banner {
        display: flex;
        justify-content: center;
        margin: var(--space-5xl) 0;
        min-width: 1100px;
      }
    `,
  ];

  static properties = {
    data1: { type: Array },
    data2: { type: Array },
  };

  constructor() {
    super();

    this.data1 = [];
    this.data2 = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this.renderCardProducts();
  }

  async renderCardProducts() {
    try {
      const response = await pb
        .collection('products')
        .getFullList({ perPage: 50 });

      this.data1 = response.slice(0, 15);

      this.data2 = response.slice(15, 30);
    } catch (err) {
      console.error('에러발생: ', err);
    }
  }

  render() {
    return html`
      <banner-component></banner-component>
      <products-swiper-component
        title="이 상품 어때요 ?"
        .data=${this.data1}
      ></products-swiper-component>
      <a class="line-banner" href="#" aria-label="퍼플위크 배너">
        <img src="/image/line-banner.webp" alt="10월 퍼플위크" />
      </a>
      <recent-component></recent-component>
      <products-swiper-component
        title="놓치면 후회할 가격"
        .data=${this.data2}
      ></products-swiper-component>
    `;
  }
}

customElements.define('main-page', Main);
