import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import '@/assets/font/Pretendard.css';

class ProductCategory extends LitElement {
  static styles = [
    reset,
    css`
      .filter-container {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 220px;
        height: auto;
        margin: 0 auto;
      }

      .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 0;
        border-bottom: 1px solid var(--gray-color-200);
      }

      .filter-toggle {
        padding: 14px 0;
        border-bottom: 1px solid var(--gray-color-200);

        & button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0;
          border: none;
          background: inherit;
          cursor: pointer;
        }

        & ul {
          padding: 16px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .none {
          display: none;
        }
      }
    `,
  ];

  constructor() {
    super();
    this.showCategories = false;
    this.showDelivery = false;
  }

  toggleCategories() {
    this.showCategories = !this.showCategories;
    this.requestUpdate();
  }

  toggleDelivery() {
    this.showDelivery = !this.showDelivery;
    this.requestUpdate();
  }

  render() {
    return html`
      <section class="filter-container">
        <div class="filter-header">
          <p class="filter-title">필터</p>
          <button class="filter-reset" type="button">초기화</button>
        </div>
        <div class="filter-toggle">
          <button class="filter-category" @click="${this.toggleCategories}">
            카테고리
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showCategories ? '' : 'none'} category-list">
            <li class="filter-item">
              <input type="checkbox" />
              <label htmlFor="">샐러드·간편식</label>
            </li>
            <li class="filter-item">
              <input type="checkbox" />
              <label htmlFor="">국·반찬·메인요리</label>
            </li>
            <li class="filter-item">
              <input type="checkbox" />
              <label htmlFor="">정육·계란</label>
            </li>
          </ul>
        </div>
        <div class="filter-toggle">
          <button class="filter-delivery" @click="${this.toggleDelivery}">
            배송
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showDelivery ? '' : 'none'} delivery-list">
            <li class="filter-item">
              <input type="checkbox" />
              <label htmlFor="">샛별배송</label>
            </li>
            <li class="filter-item">
              <input type="checkbox" />
              <label htmlFor="">판매자배송송</label>
            </li>
          </ul>
        </div>
      </section>
    `;
  }
}

customElements.define('product-category-component', ProductCategory);
