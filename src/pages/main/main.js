import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';
import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';

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

  constructor() {
    super();
  }

  render() {
    return html`
      <banner-component></banner-component>
      <products-swiper-component
        title="이 상품 어때요 ?"
      ></products-swiper-component>
      <a class="line-banner" href="#" aria-label="퍼플위크 배너">
        <img src="/image/line-banner.webp" alt="10월 퍼플위크" />
      </a>
      <recent-component></recent-component>
      <products-swiper-component
        title="놓치면 후회할 가격"
      ></products-swiper-component>
    `;
  }
}

customElements.define('main-page', Main);
