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
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
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
        line-height: var(--light-line-height);
        color: var(--gray-color-700, #404040);
        gap: var(--space-lg);
        background-color: var(white-color, #ffffff);
        transition: background-color 0.3s, color 0.3s;
      }

      .category-list li:hover {
        background-color: var(--gray-color-50, #f9f9f9);
        color: var(--primary-color, #283198);
      }

      .category-list li img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        color: var(--gray-color-700, #404040);
      }

      .category-list li:hover img {
        filter: invert(24%) sepia(68%) saturate(2054%) hue-rotate(226deg)
          brightness(92%) contrast(92%);
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html`
      <ul class="category-list" aria-label="카테고리 목록">
        <li aria-label="채소">
          <img src="/icon/header-category-veggies.svg" />
          채소
        </li>
        <li aria-label="과일 · 견과 · 쌀">
          <img src="/icon/header-category-fruit.svg" />
          과일 · 견과 · 쌀
        </li>
        <li aria-label="수산 · 해산 · 건어물">
          <img src="/icon/header-category-seafood.svg" />
          수산 · 해산 · 건어물
        </li>
        <li aria-label="정육 · 계란">
          <img src="/icon/header-category-meat.svg" />
          정육 · 계란
        </li>
        <li aria-label="국 · 반찬 · 메인요리">
          <img src="/icon/header-category-side.svg" />
          국 · 반찬 · 메인요리
        </li>
        <li aria-label="샐러드 · 간편식">
          <img src="/icon/header-category-convenient.svg" />
          샐러드 · 간편식
        </li>
        <li aria-label="면 · 양념 · 오일">
          <img src="/icon/header-category-sauce.svg" />
          면 · 양념 · 오일
        </li>
        <li aria-label="생수 · 음료 · 우유 · 커피">
          <img src="/icon/header-category-snacks.svg" />
          생수 · 음료 · 우유 · 커피
        </li>
        <li aria-label="간식 · 과자 · 떡">
          <img src="/icon/header-category-cookie.svg" />
          간식 · 과자 · 떡
        </li>
        <li aria-label="베이커리 · 치즈 · 델리">
          <img src="/icon/header-category-deli.svg" />
          베이커리 · 치즈 · 델리
        </li>
        <li aria-label="건강식품">
          <img src="/icon/header-category-health.svg" />
          건강식품
        </li>
        <li aria-label="전통주">
          <img src="/icon/header-category-liquor.svg" />
          전통주
        </li>
        <li aria-label="생활용품 · 리빙 · 캠핑">
          <img src="/icon/header-category-living.svg" />
          생활용품 · 리빙 · 캠핑
        </li>
        <li aria-label="스킨케어 · 메이크업">
          <img src="/icon/header-category-beauty.svg" />
          스킨케어 · 메이크업
        </li>
        <li aria-label="헤어 · 바디 · 구강">
          <img src="/icon/header-category-body.svg" />
          헤어 · 바디 · 구강
        </li>
        <li aria-label="주방용품">
          <img src="/icon/header-category-kitchen.svg" />
          주방용품
        </li>
        <li aria-label="가전제품">
          <img src="/icon/header-category-electronic.svg" />
          가전제품
        </li>
        <li aria-label="반려동물">
          <img src="/icon/header-category-pet.svg" />
          반려동물
        </li>
        <li aria-label="베이비 · 키즈 · 완구">
          <img src="/icon/header-category-kids.svg" />
          베이비 · 키즈 · 완구
        </li>
        <li aria-label="여행 · 티켓">
          <img src="/icon/header-category-recommend.svg" />
          여행 · 티켓
        </li>
      </ul>
    `;
  }
}

customElements.define('header-category-component', HeaderCategory);
