import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Card';
// import '@/components/';

class ProductList extends LitElement {
  static styles = [
    reset,
    a11y,
    css`
      .product-list {
        max-width: 1050px;
        margin: var(--space-7xl) auto;
      }

      .product-list-header {
        text-align: center;
        font-size: var(--font-lg);
        color: var(--black-color, #000);
        margin-bottom: 2rem;
      }

      .flex-content {
        display: flex;
        gap: 16px;
      }

      .product-category {
        width: 267px;
        flex-shrink: 0;
      }

      .product-list-container {
        width: 783px;
        flex-shrink: 0;
      }

      .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        margin-bottom: var(--space-lg);
      }

      .total-count {
        font-size: 14px;
        color: #333;
        font-weight: var(--text-semi-bold);
      }

      .total-count strong {
        font-weight: 700;
      }

      .sorting-standard {
        display: flex;
        align-items: center;
        margin-right: var(--space-md);
      }

      .sorting-standard a {
        font-size: 14px;
      }
      .recommended {
        font-weight: var(--text-medium);
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--gray-color-700, #404040);
        padding-right: 8px;
        padding-left: 0;
      }

      .recommended img {
        vertical-align: middle;
      }

      .divider {
        position: relative;
        color: var(--gray-color-300, #a6a6a6);
        text-decoration: none;
        font-size: 14px;
        display: flex;
        align-items: center;
        padding: 0 8px;
      }

      .divider::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1.4px;
        height: 12px;
        background-color: var(--gray-color-400, #898989);
        opacity: 0.4;
      }

      .product-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5.5rem 0;
        width: 100%;
      }

      .btn-navigator {
        margin-top: 16px;
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html`
      <section class="product-list">
        <h2 class="product-list-header">베스트</h2>

        <div class="flex-content">
          <div class="product-category"></div>
          <div class="product-list-container">
            <div class="list-header">
              <div class="total-count">총 <span>284</span>건</div>
              <div class="sorting-standard">
                <a href="#" class="recommended"
                  >추천순
                  <img
                    src="/icon/product-list-question.svg"
                    alt="설명 아이콘"
                    class="icon"
                /></a>
                <a href="#" class="divider">신상품순</a>
                <a href="#" class="divider">판매량순</a>
                <a href="#" class="divider">혜택순</a>
                <a href="#" class="divider">낮은 가격순</a>
                <a href="#" class="divider">높은 가격순</a>
              </div>
            </div>
            <div class="product-grid">${this.createProductItems()}</div>
            <div class="btn-navigator"></div>
          </div>
        </div>
      </section>
    `;
  }

  createProductItems() {
    const productItems = [];
    for (let i = 0; i < 15; i++) {
      productItems.push(html`<card-component></card-component>`);
    }
    return productItems;
  }
}

customElements.define('product-list-page', ProductList);
