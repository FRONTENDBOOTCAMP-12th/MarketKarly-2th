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
          padding: 14px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;

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
  }

  toggleFilter(e) {
    console.log('first');
    const buttonType = e.currentTarget.dataset.toggle;
    this.showStates[buttonType] = !this.showStates[buttonType];
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
          <button
            class="filter-category"
            data-toggle="categories"
            @click="${this.toggleFilter}"
          >
            카테고리
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showStates.categories ? '' : 'none'} category-list">
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                샐러드 · 간편식
              </label>
            </li>
            <li class="filter-item">
              <input id="checkbox1" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox1">
                <span class="checkbox-img" tabindex="0"></span>
                국·반찬·메인요리</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox2" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox2">
                <span class="checkbox-img" tabindex="0"></span>
                정육·계란</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                과일·견과·쌀</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                간식·과자·떡</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                생수·음료·우유·커피</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                수산·해산·건어물</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                베이커리·치즈·델리</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                건강식품</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                생활용품·리빙·캠핑</label
              >
            </li>
          </ul>
        </div>
        <div class="filter-toggle">
          <button
            class="filter-brand"
            data-toggle="brand"
            @click="${this.toggleFilter}"
          >
            브랜드
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showStates.brand ? '' : 'none'} brand-list">
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                풀무원</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                온더바디</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                프로쉬</label
              >
            </li>
          </ul>
        </div>
        <div class="filter-toggle">
          <button
            class="filter-delivery"
            data-toggle="delivery"
            @click="${this.toggleFilter}"
          >
            배송
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showStates.delivery ? '' : 'none'} price-list">
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                샛별배송</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                판매자배송</label
              >
            </li>
          </ul>
        </div>
        <div class="filter-toggle">
          <button
            class="filter-price"
            data-toggle="price"
            @click="${this.toggleFilter}"
          >
            가격
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showStates.price ? '' : 'none'} delivery-list">
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                6,800원 미만</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                6,800원 ~ 9,900원</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                9,900원 ~ 14,900원</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                14,900원 이상</label
              >
            </li>
          </ul>
        </div>
        <div class="filter-toggle">
          <button
            class="filter-benefit"
            data-toggle="benefit"
            @click="${this.toggleFilter}"
          >
            혜택
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showStates.benefit ? '' : 'none'} benefit-list">
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                할인상품</label
              >
            </li>
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                한정수량</label
              >
            </li>
          </ul>
        </div>

        <div class="filter-toggle">
          <button
            class="filter-type"
            data-toggle="type"
            @click="${this.toggleFilter}"
          >
            유형
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showStates.type ? '' : 'none'} type-list">
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                Kurly Only</label
              >
            </li>
          </ul>
        </div>
        <div class="filter-toggle">
          <button
            class="filter-exclude"
            data-toggle="exclude"
            @click="${this.toggleFilter}"
          >
            특정상품 제외
            <img src="/icon/small-arrow-down.svg" alt="" />
          </button>
          <ul class="${this.showStates.exclude ? '' : 'none'} exclude-list">
            <li class="filter-item">
              <input id="checkbox" type="checkbox" class="filter-checkbox" />
              <label class="checkbox-label" for="checkbox">
                <span class="checkbox-img" tabindex="0"></span>
                반려동물 상품</label
              >
            </li>
          </ul>
        </div>
      </section>
    `;
  }
}

customElements.define('product-category-component', ProductCategory);
