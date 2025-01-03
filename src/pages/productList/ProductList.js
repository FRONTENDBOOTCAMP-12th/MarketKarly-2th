import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Card';
import '@/components/ProductFilter';
import { register } from 'swiper/element';
import { getPbImage } from '@/api/getPbImage';

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
        padding-bottom: var(--space-5xl);
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
      }

      button {
        border: none;
        margin: 0;
        padding: 0;
        background: transparent;
      }

      .sorting-standard {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        margin-right: var(--space-sm);
        max-width: 600px;
      }

      .choose-standard {
        color: var(--gray-color-500, #6b6b6b);
        position: relative;
        padding: var(--space-sm) var(--space-sm);
        min-width: 60px;
        text-align: center;
        font-size: 14px;
      }

      .choose-standard.active {
        color: var(--gray-color-700, #404040);
        font-weight: var(--text-medium);
      }

      .standard-recommended {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        padding-right: var(--space-md);
        padding-left: 0;
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
        padding-right: var(--space-md);
        padding-left: var(--space-lg);
        min-width: 60px;
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
        padding: var(--space-sm);
        cursor: pointer;
      }

      .pagination button:hover {
        background-color: var(--gray-color-50, #f9f9f9);
      }

      .pagination button.active {
        background-color: var(--gray-color-50, #f9f9f9);
      }

      .recommend-meaning-wrapper {
        position: relative;
        padding: 0;
      }

      .recommend-meaning {
        position: absolute;
        background-color: #fff;
        border: 1px solid var(--gray-color-300, #a6a6a6);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: var(--space-lg);
        font-size: var(--font-sm);
        color: var(--gray-color-700, #404040);
        line-height: 1.4;
        z-index: 10;
        width: 250px;
        top: var(--space-3xl);
        transform: translateX(-30%);
        display: none;
        text-align: justify;
      }

      .recommend-meaning-wrapper:hover .recommend-meaning {
        display: block;
      }
    `,
  ];
  static properties = {
    activeStandard: { type: String },
    products: { type: Array },
    originalProducts: { type: Array },
    currentPage: { type: Number },
    itemsPerPage: { type: Number },
    totalItems: { type: Number },
    totalPages: { type: Number },
    data: { type: Object },
  };

  constructor() {
    super();
    this.activeStandard = 'recommended';
    this.products = [];
    this.originalProducts = [];
    this.currentPage = 1;
    this.itemsPerPage = 15;
    this.totalItems = 0;
    this.totalPages = 1;
  }

  handleStandardClick(standard, event) {
    event.preventDefault();
    this.activeStandard = standard;
    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();
    this.renderCardProducts();
    this.addEventListener('filter-change', this.handleFilterChange.bind(this));
    // window.addEventListener('popstate', this._fetchStorageDate);
    // history.pushState({ url: 'product-list' }, '', '/product-list'); // URL 변경
    // history.back();
  }

  async renderCardProducts() {
    if (this.isFetching) return;
    this.isFetching = true;

    try {
      const url = new URL(
        `${import.meta.env.VITE_PB_API}/collections/products/records`
      );
      url.searchParams.set('page', '1');
      url.searchParams.set('perPage', '1000');

      const response = await fetch(url);
      const data = await response.json();

      this.originalProducts = data.items;
      this.products = [...this.originalProducts];
      this.totalItems = data.totalItems;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

      this.products.sort((a, b) => this.getRealPrice(a) - this.getRealPrice(b));

      this.requestUpdate();
    } catch (err) {
      console.error('에러발생: ', err);
    }
  }

  handleFilterChange(e) {
    const selectedFilters = e.detail;
    this.filterProducts(selectedFilters);
  }

  filterProducts(selectedFilters) {
    this.products = [...this.originalProducts];

    if (selectedFilters.categories && selectedFilters.categories.length > 0) {
      this.products = this.products.filter((product) =>
        selectedFilters.categories.includes(product.category)
      );
    }

    if (selectedFilters.brand && selectedFilters.brand.length > 0) {
      this.products = this.products.filter((product) =>
        selectedFilters.brand.includes(product.brand)
      );
    }

    if (selectedFilters.delivery && selectedFilters.delivery.length > 0) {
      this.products = this.products.filter((product) =>
        selectedFilters.delivery.includes(product.deliveryType)
      );
    }

    if (selectedFilters.price && selectedFilters.price.length > 0) {
      this.products = this.products.filter((product) => {
        const realPrice = this.getRealPrice(product);
        return selectedFilters.price.some((priceRange) => {
          if (priceRange === '6,800원 미만') {
            return realPrice < 6800;
          } else if (priceRange === '6,800원 ~ 9,900원') {
            return realPrice >= 6800 && realPrice <= 9900;
          } else if (priceRange === '9,900원 ~ 14,900원') {
            return realPrice >= 9900 && realPrice < 14900;
          } else if (priceRange === '14,900원 이상') {
            return realPrice > 14900;
          }
          return false;
        });
      });
    }

    if (selectedFilters.benefit) {
      if (selectedFilters.benefit.includes('한정수량')) {
        this.products = this.products.filter(
          (product) => product.limited === true
        );
      }
      if (selectedFilters.benefit.includes('할인상품')) {
        this.products = this.products.filter((product) => product.discount > 0);
      }
    }

    if (selectedFilters.type && selectedFilters.type.includes('Karlit Only')) {
      this.products = this.products.filter(
        (product) => product.kalitOnly === true
      );
    }

    this.totalItems = this.products.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
    this.requestUpdate();
  }

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;

      this.updateComplete.then(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
  }

  goToFirst() {
    this.currentPage = 1;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.currentPage++;
    }
  }

  goToLast() {
    this.currentPage = this.totalPages;
  }

  getPaginationNumbers() {
    if (this.currentPage === 1) {
      return {
        prevNumber: 1,
        currentNumber: 2,
        nextNumber: 3,
      };
    }
    if (this.currentPage === this.totalPages) {
      return {
        prevNumber: Math.max(1, this.totalPages - 2),
        currentNumber: Math.max(2, this.totalPages - 1),
        nextNumber: this.totalPages,
      };
    }
    return {
      prevNumber: Math.max(1, this.currentPage - 1),
      currentNumber: this.currentPage,
      nextNumber: Math.min(this.totalPages, this.currentPage + 1),
    };
  }

  handleStandardClick(standard, event) {
    event.preventDefault();
    this.activeStandard = standard;

    if (standard === 'low-price' || standard === 'recommended') {
      this.products.sort((a, b) => this.getRealPrice(a) - this.getRealPrice(b));
    } else if (standard === 'high-price') {
      this.products.sort((a, b) => this.getRealPrice(b) - this.getRealPrice(a));
    } else if (standard === 'product-discount' || standard === 'new') {
      this.products.sort((a, b) => b.discount - a.discount);
    } else if (standard === 'sale') {
      this.products.sort((a, b) => a.productName.localeCompare(b.productName));
    }

    this.requestUpdate();
  }

  getRealPrice(product) {
    return Math.floor(product.price - product.price * (product.discount / 100));
  }

  render() {
    const { prevNumber, currentNumber, nextNumber } =
      this.getPaginationNumbers();

    return html`
      <section class="product-list">
        <h2 class="product-list-header">베스트</h2>

        <div class="flex-content">
          <div class="product-category">
            <product-filter-component></product-filter-component>
          </div>
          <div class="product-list-container">
            <div class="list-header">
              <div class="total-count">총 ${this.totalItems}건</div>
              <section class="sorting-standard">
                <div class="recommend-meaning-wrapper">
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
                      width="14"
                      height="20"
                    />
                  </button>
                  <div class="recommend-meaning">
                    소비자 인기도(판매량, 판매금액, 조회수 등), 상품 출시일,
                    수요 적합성, 상품 운영상 필요 등을 종합적으로 고려한
                    순서입니다.
                  </div>
                </div>
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
                  class="choose-standard divider standard-product-discount ${this
                    .activeStandard === 'product-discount'
                    ? 'active'
                    : ''}"
                  @click=${(e) =>
                    this.handleStandardClick('product-discount', e)}
                >
                  할인율순
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
              ${this.paginatedProducts.map(
                (item) => html`
                  <card-component
                    id=${item.id}
                    collectionId=${item.collectionId}
                    photoURL="${getPbImage(item, 'photo')}"
                    deliveryType="${item.deliveryType}"
                    productName="${item.productName}"
                    discount="${item.discount}"
                    realPrice="${this.getRealPrice(item)}"
                    price="${item.price}"
                    description="${item.description}"
                    .tagOnly="${item.kalitOnly}"
                    .tagLimited="${item.limited}"
                  ></card-component>
                `
              )}
            </div>

            <div class="pagination" aria-label="페이지 이동">
              <button @click="${this.goToFirst}" aria-label="첫 페이지로 이동">
                <img src="/icon/btn-first.svg" alt="" width="9" height="8" />
              </button>
              <button
                @click="${() => this.goToPage(this.currentPage - 1)}"
                aria-label="이전 페이지로 이동"
              >
                <img src="/icon/btn-prev.svg" alt="" width="5" height="8" />
              </button>
              <button
                @click="${() => this.goToPage(prevNumber)}"
                class="${this.currentPage === prevNumber ? 'active' : ''}"
                aria-label="현재 페이지의 이전 페이지"
              >
                ${prevNumber}
              </button>

              <button
                @click="${() => this.goToPage(currentNumber)}"
                class="${this.currentPage === currentNumber ? 'active' : ''}"
                aria-label="현재 페이지"
              >
                ${currentNumber}
              </button>

              <button
                @click="${() => this.goToPage(nextNumber)}"
                class="${this.currentPage === nextNumber ? 'active' : ''}"
                aria-label="현재 페이지의 다음 페이지"
              >
                ${nextNumber}
              </button>
              <button
                @click="${() => this.goToPage(this.currentPage + 1)}"
                aria-label="다음 페이지로 이동"
              >
                <img src="/icon/btn-next.svg" alt="" width="5" height="8" />
              </button>
              <button
                @click="${this.goToLast}"
                aria-label="마지막 페이지로 이동"
              >
                <img src="/icon/btn-last.svg" alt="" width="9" height="8" />
              </button>
            </div>
          </div>
        </div>
        <recent-component .data=${this.data}></recent-component>
      </section>
    `;
  }
}

customElements.define('product-list-page', ProductList);
