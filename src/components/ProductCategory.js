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
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);

        .filter-title {
          font-size: var(--font-md);
          color: var(--black-color, #000000);
          font-weight: var(--text-semi-bold);
        }

        & button {
          border: none;
          background: inherit;
          cursor: pointer;
          color: var(--gray-color-300, #a6a6a6);
          padding: 0;
          font-size: 10px;
        }
      }

      .filter-toggle {
        padding: 14px 0;
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);

        & button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0;
          border: none;
          background: inherit;
          cursor: pointer;
          font-size: var(--font-md);
          color: var(--black-color, #000000);
          font-weight: var(--text-semi-bold);
        }

        & ul {
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          & input {
            display: none;
          }

          .checkbox-label {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: var(--font-md);
            font-weight: var(--text-regular);
            color: var(--content-text-color, #333333);
          }

          .checkbox-img {
            width: 1.5rem;
            height: 1.5rem;
            background-image: url('/icon/unchecked.svg');
            background-repeat: no-repeat;
            margin-right: 8px;
          }
          .filter-checkbox:checked + .checkbox-label .checkbox-img {
            background-image: url('/icon/checked.svg');
          }

          .more-filter {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--gray-color-300, #a6a6a6);
            font-size: var(--font-sm);
          }
        }
        .none {
          display: none;
        }
      }
    `,
  ];

  constructor() {
    super();
    this.showStates = {
      categories: false,
      brand: false,
      delivery: false,
      price: false,
      benefit: false,
      type: false,
    };

    this.filterTitles = {
      categories: '카테고리',
      brand: '브랜드',
      delivery: '배송',
      price: '가격',
      benefit: '혜택',
      type: '유형',
      exclude: '특정상품 제외',
    };

    this.filters = {
      categories: [
        '샐러드 · 간편식',
        '국·반찬·메인요리',
        '정육·계란',
        '과일·견과·쌀',
        '간식·과자·떡',
        '생수·음료·우유·커피',
        '수산·해산·건어물',
        '베이커리·치즈·델리',
        '건강식품',
        '생활용품·리빙·캠핑',
      ],
      brand: ['풀무원', '온더바디', '프로쉬'],
      delivery: ['샛별배송', '판매자배송'],
      price: [
        '6,800원 미만',
        '6,800원 ~ 9,900원',
        '9,900원 ~ 14,900원',
        '14,900원 이상',
      ],
      benefit: ['할인상품', '한정수량'],
      type: ['Kurly Only'],
      exclude: ['반려동물 상품'],
    };
  }

  resetFilter() {
    const checkboxes = this.shadowRoot.querySelectorAll('.filter-checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    this.requestUpdate();
  }

  toggleFilter(e) {
    const buttonType = e.currentTarget.dataset.toggle;
    this.showStates[buttonType] = !this.showStates[buttonType];
    this.requestUpdate();
  }

  renderList(filterType) {
    return this.filters[filterType].map(
      (item, index) => html`
        <li class="filter-item">
          <input
            id="checkbox-${filterType}-${index}"
            type="checkbox"
            class="filter-checkbox"
          />
          <label class="checkbox-label" for="checkbox-${filterType}-${index}">
            <span class="checkbox-img" tabindex="0"></span>
            ${item}
          </label>
        </li>
      `
    );
  }

  render() {
    return html`
      <section class="filter-container">
        <div class="filter-header">
          <p class="filter-title">필터</p>
          <button
            class="filter-reset"
            type="button"
            @click="${this.resetFilter}"
          >
            초기화
          </button>
        </div>
        ${Object.keys(this.filters).map(
          (filterType) => html`
            <div class="filter-toggle">
              <button
                class="filter-${filterType}"
                data-toggle="${filterType}"
                @click="${this.toggleFilter}"
              >
                ${this.filterTitles[filterType]}
                <img
                  src="/icon/${this.showStates[filterType]
                    ? 'small-arrow-up'
                    : 'small-arrow-down'}.svg"
                  alt=""
                />
              </button>
              <ul class="${this.showStates[filterType] ? '' : 'none'}">
                ${this.renderList(filterType)}
                ${filterType === 'categories' || filterType === 'brand'
                  ? html`<button class="more-filter">
                      ${filterType === 'categories'
                        ? '카테고리 더보기'
                        : '브랜드 더보기'}
                      <img src="/icon/small-arrow-right.svg" alt="" />
                    </button>`
                  : ''}
              </ul>
            </div>
          `
        )}
      </section>
    `;
  }
}

customElements.define('product-category-component', ProductCategory);
