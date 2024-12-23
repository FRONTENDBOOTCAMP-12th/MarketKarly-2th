import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Card';
import { register } from 'swiper/element';
import { getPbImage } from '../../api/getPbImage';

register();

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
        margin-bottom: var(--space-5xl);
      }

      .flex-content {
        display: flex;
        gap: var(--space-xl);
      }

      .product-category {
        width: 267px;
        flex-shrink: 0;
      }
      .product-list-container {
        width: 783px;
        flex-shrink: 0;
      }

      .product-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5.5rem 0;
        width: 100%;
      }

      .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-xl) 0;
        margin-bottom: var(--space-lg);
      }

      .total-count {
        font-size: 14px;
        color: var(--black-color);
        font-weight: var(--text-semi-bold);
        font-weight: var(--text-bold);
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
        position: relative;
        padding: 0 8px;
        cursor: pointer;
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
        background-color: var(--gray-color-300, #a6a6a6);
        opacity: 0.4;
      }

      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
      }

      .pagination button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border: 1px solid var(--gray-color-100, #e1e1e1);
        background: none;
        padding: 4px;
        cursor: pointer;
      }

      .pagination button:hover {
        background-color: #f0f0f0;
      }
      .pagination img {
        height: 8px;
      }

      .pagination-number {
        font-size: var(--font-sm);
        color: var(--black-color, #000);
        line-height: var(--light-line-height);
        font-weight: var(--text-semi-bold);
        color: var(--gray-color-400, #e1e1e1);
      }
    `,
  ];
  static properties = {
    activeStandard: { type: String },
    products: { type: Array },
    disabled: { type: Boolean },
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 1;
    this.activeStandard = 'recommended';
    this.products = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PB_API}/collections/products/records`
      );

      const data = await response.json();
      this.products = data.items;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  handleStandardClick(standard, event) {
    event.preventDefault();
    this.activeStandard = standard;
    this.requestUpdate();
  }

  addProduct() {
    this.count++;

    if (this.count > 1) {
      this.totalPrice = (this.count * this.productPrice).toLocaleString();
    }
  }

  reduceProduct() {
    if (this.count > 1) {
      this.count--;
    }
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
                  @click=${(e) => this.handleStandardClick('recommended', e)}
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
                  @click=${(e) => this.handleStandardClick('new', e)}
                >
                  신상품순
                </button>
                <button
                  class="choose-standard divider standard-sale ${this
                    .activeStandard === 'sale'
                    ? 'active'
                    : ''}"
                  @click=${(e) => this.handleStandardClick('sale', e)}
                >
                  판매량순
                </button>
                <button
                  class="choose-standard divider standard-discount ${this
                    .activeStandard === 'discount'
                    ? 'active'
                    : ''}"
                  @click=${(e) => this.handleStandardClick('discount', e)}
                >
                  혜택순
                </button>
                <button
                  class="choose-standard divider standard-low-price ${this
                    .activeStandard === 'low-price'
                    ? 'active'
                    : ''}"
                  @click=${(e) => this.handleStandardClick('low-price', e)}
                >
                  낮은 가격순
                </button>
                <button
                  class="choose-standard divider standard-high-price ${this
                    .activeStandard === 'high-price'
                    ? 'active'
                    : ''}"
                  @click=${(e) => this.handleStandardClick('high-price', e)}
                >
                  높은 가격순
                </button>
              </section>
            </div>
            <div class="product-grid">
              ${this.products.map(
                (item) => html`
                  <card-component
                    photoURL="${getPbImage(item)}"
                    deliveryType="${item.deliveryType}"
                    productName="${item.productName}"
                    discount="${item.discount}"
                    realPrice="${Math.floor(
                      item.price - item.price * (item.discount / 100)
                    ).toFixed()}"
                    price="${item.price}"
                    description="${item.description}"
                    .tagOnly="${item.kalitOnly}"
                    .tagLimited="${item.limited}"
                  ></card-component>
                `
              )}
            </div>
            <div class="pagination">
              <button
                class="btn-first"
                @click=${this.reduceProduct}
                ?disabled=${this.count === 1}
              >
                <img src="/icon/btn-first.svg" alt="처음으로" />
              </button>
              <button
                class="btn-prev"
                @click=${this.reduceProduct}
                ?disabled=${this.count === 1}
              >
                <img src="/icon/btn-prev.svg" alt="이전으로" />
              </button>
              <button class="pagination-number">${this.count}</button>
              <button class="pagination-number">${this.count + 1}</button>
              <button class="pagination-number">${this.count + 2}</button>
              <button class="btn-next" @click=${this.addProduct}>
                <img src="/icon/btn-next.svg" alt="마지막으로" />
              </button>
              <button class="btn-last" @click=${this.addProduct}>
                <img src="/icon/btn-last.svg" alt="마지막으로" />
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('product-list-page', ProductList);
