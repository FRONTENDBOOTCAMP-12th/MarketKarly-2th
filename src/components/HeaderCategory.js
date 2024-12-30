import { LitElement, css, html } from 'lit';
import reset from '@/styles/reset';

class HeaderCategory extends LitElement {
  static styles = [
    reset,
    css`
      :host {
        display: block;
        position: absolute;
        top: 3.6rem;
        left: 0;
        width: 247px;
        height: 660px;
        z-index: 99;
        background-color: var(--white-color, #ffffff);
        border-right: 1px solid #ececec;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--gray-color-200, #c4c4c4)
          var(--white-color, #ffffff);
      }

      .category-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .category-list li {
        margin-left: 0;
        display: flex;
        align-items: center;
        padding: var(--space-md);
        cursor: pointer;
        font-size: 14px;
        color: var(--gray-color-700, #404040);
        gap: var(--space-lg);
        font-weight: var(--text-semi-bold);
      }

      .category-list li button {
        all: unset;
        display: flex;
        align-items: center;
        gap: var(--space-lg);
        width: 100%;
      }

      .category-list li:focus-within {
        outline: 2px solid var(--primary-color, #283198);
      }

      .category-list li:hover,
      .category-list li:focus-within {
        background-color: #f7f7f7;
        color: var(--primary-color, #283198);
        font-weight: var(--text-bold);
      }

      .category-list li img {
        width: 24px;
        height: 24px;
        color: var(--gray-color-700, #404040);
      }

      .category-list li:hover img,
      .category-list li:focus-within img {
        filter: invert(24%) sepia(68%) saturate(2054%) hue-rotate(226deg)
          brightness(92%) contrast(92%);
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    const categories = [
      { src: '/icon/header-category-veggies.svg', label: '채소' },
      { src: '/icon/header-category-fruit.svg', label: '과일 · 견과 · 쌀' },
      {
        src: '/icon/header-category-seafood.svg',
        label: '수산 · 해산 · 건어물',
      },
      { src: '/icon/header-category-meat.svg', label: '정육 · 계란' },
      { src: '/icon/header-category-side.svg', label: '국 · 반찬 · 메인요리' },
      { src: '/icon/header-category-convenient.svg', label: '샐러드 · 간편식' },
      { src: '/icon/header-category-sauce.svg', label: '면 · 양념 · 오일' },
      {
        src: '/icon/header-category-snacks.svg',
        label: '생수 · 음료 · 우유 · 커피',
      },
      { src: '/icon/header-category-cookie.svg', label: '간식 · 과자 · 떡' },
      {
        src: '/icon/header-category-deli.svg',
        label: '베이커리 · 치즈 · 델리',
      },
      { src: '/icon/header-category-health.svg', label: '건강식품' },
      { src: '/icon/header-category-liquor.svg', label: '전통주' },
      {
        src: '/icon/header-category-living.svg',
        label: '생활용품 · 리빙 · 캠핑',
      },
      { src: '/icon/header-category-beauty.svg', label: '스킨케어 · 메이크업' },
      { src: '/icon/header-category-body.svg', label: '헤어 · 바디 · 구강' },
      { src: '/icon/header-category-kitchen.svg', label: '주방용품' },
      { src: '/icon/header-category-electronic.svg', label: '가전제품' },
      { src: '/icon/header-category-pet.svg', label: '반려동물' },
      { src: '/icon/header-category-kids.svg', label: '베이비 · 키즈 · 완구' },
      { src: '/icon/header-category-recommend.svg', label: '여행 · 티켓' },
    ];

    return html`
      <ul class="category-list">
        ${categories.map(
          (category) => html`
            <li>
              <button>
                <img src="${category.src}" alt="" />
                ${category.label}
              </button>
            </li>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('header-category-component', HeaderCategory);
