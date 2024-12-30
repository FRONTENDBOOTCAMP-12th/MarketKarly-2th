import a11y from '@/base/a11y';
import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';
import reset from '@/styles/reset';
import { LitElement, css, html } from 'lit';
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
    viewedItem: { type: Object },
    viewedItemKey: { type: String },
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
      <a
        class="line-banner"
        href="#"
        aria-label="더 풍성해진 10월의 퍼플위크 적립률 UP + 3종 쿠폰팩"
      >
        <img src="/image/line-banner.webp" alt="" />
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
