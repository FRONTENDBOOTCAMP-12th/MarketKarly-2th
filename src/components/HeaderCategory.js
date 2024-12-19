import { LitElement, css, html } from 'lit';
import reset from '@/styles/reset';

class HeaderCategory extends LitElement {
  static styles = [
    reset,
    css`
      :host {
        display: block;
        position: absolute;
        top: 165px;
        left: 0;
        width: 247px;
        height: 660px;
        z-index: 9999999;
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
        display: flex;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.5;
        color: #333333;
        gap: 0.625rem;
        background: #ffffff;
        transition: background-color 0.3s, color 0.3s;
      }

      .category-list li:hover {
        background-color: var(--white-color, #ffffff);
        color: var(--primary-color, #283198);
      }

      .category-list li img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
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
          <img src="/icon/header-category-veggies.svg" alt="채소 아이콘" />
          채소
        </li>
        <li aria-label="과일 · 견과 · 쌀">
          <img
            src="/icon/header-category-fruit.svg"
            alt="과일/견과/쌀 아이콘"
          />
          과일 · 견과 · 쌀
        </li>
        <li aria-label="수산 · 해산 · 건어물">
          <img
            src="/icon/header-category-seafood.svg"
            alt="수산/해산/건어물 아이콘"
          />
          수산 · 해산 · 건어물
        </li>
        <li aria-label="정육 · 계란">
          <img src="/icon/header-category-meat.svg" alt="정육/계란 아이콘" />
          정육 · 계란
        </li>
        <li aria-label="국 · 반찬 · 메인요리">
          <img
            src="/icon/header-category-side.svg"
            alt="국/반찬/메인요리 아이콘"
          />
          국 · 반찬 · 메인요리
        </li>
        <li aria-label="샐러드 · 간편식">
          <img
            src="/icon/header-category-convenient.svg"
            alt="샐러드/간편식 아이콘"
          />
          샐러드 · 간편식
        </li>
        <li aria-label="면 · 양념 · 오일">
          <img
            src="/icon/header-category-sauce.svg"
            alt="면/양념/오일 아이콘"
          />
          면 · 양념 · 오일
        </li>
        <li aria-label="생수 · 음료 · 우유 · 커피">
          <img
            src="/icon/header-category-snacks.svg"
            alt="생수/음료/우유/커피 아이콘"
          />
          생수 · 음료 · 우유 · 커피
        </li>
        <li aria-label="간식 · 과자 · 떡">
          <img
            src="/icon/header-category-cookie.svg"
            alt="간식/과자/떡 아이콘"
          />
          간식 · 과자 · 떡
        </li>
        <li aria-label="베이커리 · 치즈 · 델리">
          <img
            src="/icon/header-category-deli.svg"
            alt="베이커리/치즈/델리 아이콘"
          />
          베이커리 · 치즈 · 델리
        </li>
        <li aria-label="건강식품">
          <img src="/icon/header-category-health.svg" alt="건강식품 아이콘" />
          건강식품
        </li>
        <li aria-label="전통주">
          <img src="/icon/header-category-liquor.svg" alt="전통주 아이콘" />
          전통주
        </li>
        <li aria-label="생활용품 · 리빙 · 캠핑">
          <img
            src="/icon/header-category-living.svg"
            alt="생활용품/리빙/캠핑 아이콘"
          />
          생활용품 · 리빙 · 캠핑
        </li>
        <li aria-label="스킨케어 · 메이크업">
          <img
            src="/icon/header-category-beauty.svg"
            alt="스킨케어/메이크업 아이콘"
          />
          스킨케어 · 메이크업
        </li>
        <li aria-label="헤어 · 바디 · 구강">
          <img
            src="/icon/header-category-body.svg"
            alt="헤어/바디/구강 아이콘"
          />
          헤어 · 바디 · 구강
        </li>
        <li aria-label="주방용품">
          <img src="/icon/header-category-kitchen.svg" alt="주방용품 아이콘" />
          주방용품
        </li>
        <li aria-label="가전제품">
          <img
            src="/icon/header-category-electronic.svg"
            alt="가전제품 아이콘"
          />
          가전제품
        </li>
        <li aria-label="반려동물">
          <img src="/icon/header-category-pet.svg" alt="반려동물 아이콘" />
          반려동물
        </li>
        <li aria-label="베이비 · 키즈 · 완구">
          <img
            src="/icon/header-category-kids.svg"
            alt="베이비/키즈/완구 아이콘"
          />
          베이비 · 키즈 · 완구
        </li>
        <li aria-label="여행 · 티켓">
          <img
            src="/icon/header-category-recommend.svg"
            alt="여행/티켓 아이콘"
          />
          여행 · 티켓
        </li>
      </ul>
    `;
  }
}

customElements.define('header-category-component', HeaderCategory);
