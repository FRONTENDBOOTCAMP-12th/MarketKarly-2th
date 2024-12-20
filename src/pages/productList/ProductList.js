import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Card';

class ProductList extends LitElement {
  static properties = {
    activeStandard: { type: String },
  };

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
        font-weight: 700;
      }

      button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        line-height: normal;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        appearance: none;
        cursor: pointer;
      }

      .sorting-standard {
        display: flex;
        align-items: center;
        margin-right: var(--space-md);
      }

      .sorting-standard a {
        font-size: 14px;
      }

      .choose-standard {
        color: var(--gray-color-300, #a6a6a6);
        transition: color 0.2s ease;
      }

      .choose-standard.active {
        color: var(--gray-color-700, #404040);
        font-weight: var(--text-medium);
      }

      .standard-recommended {
        display: flex;
        align-items: center;
        gap: 6px;
        padding-right: 8px;
        padding-left: 0;
        font-size: 14px;
      }

      .standard-recommended img {
        vertical-align: middle;
      }

      .divider {
        position: relative;
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
    this.activeStandard = 'recommended';
  }

  handleStandardClick(standard) {
    this.activeStandard = standard;
  }

  render() {
    return html`
      <section class="product-list">
        <h2 class="product-list-header">베스트</h2>

        <div class="flex-content">
          <div class="product-category"></div>
          <div class="product-list-container">
            <div class="list-header">
              <div class="total-count">총 284건</div>
              <section class="sorting-standard">
                <button
                  class="choose-standard standard-recommended ${this
                    .activeStandard === 'recommended'
                    ? 'active'
                    : ''}"
                  @click=${() => this.handleStandardClick('recommended')}
                >
                  추천순
                  <img
                    src="/icon/product-list-question.svg"
                    alt="설명 아이콘"
                    class="icon"
                  />
                </button>
                <button
                  class="choose-standard divider standard-new ${this
                    .activeStandard === 'new'
                    ? 'active'
                    : ''}"
                  @click=${() => this.handleStandardClick('new')}
                >
                  신상품순
                </button>
                <button
                  class="choose-standard divider standard-sale ${this
                    .activeStandard === 'sale'
                    ? 'active'
                    : ''}"
                  @click=${() => this.handleStandardClick('sale')}
                >
                  판매량순
                </button>
                <button
                  class="choose-standard divider standard-discount ${this
                    .activeStandard === 'discount'
                    ? 'active'
                    : ''}"
                  @click=${() => this.handleStandardClick('discount')}
                >
                  혜택순
                </button>
                <button
                  class="choose-standard divider standard-low-price ${this
                    .activeStandard === 'low-price'
                    ? 'active'
                    : ''}"
                  @click=${() => this.handleStandardClick('low-price')}
                >
                  낮은 가격순
                </button>
                <button
                  class="choose-standard divider standard-high-price ${this
                    .activeStandard === 'high-price'
                    ? 'active'
                    : ''}"
                  @click=${() => this.handleStandardClick('high-price')}
                >
                  높은 가격순
                </button>
              </section>
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
