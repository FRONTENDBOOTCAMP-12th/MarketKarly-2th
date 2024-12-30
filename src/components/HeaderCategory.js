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
        border-right: 1px solid var(--gray-color-100, #e1e1e1);
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
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

      .category-item {
        margin-left: 0;
        display: flex;
        align-items: center;
        padding: var(--space-md);
        cursor: pointer;
        font-size: 14px;
        color: var(--gray-color-700, #404040);
        gap: var(--space-lg);
      }

      .category-item:hover {
        background-color: var(--gray-color-50, #f9f9f9);
        color: var(--primary-color, #283198);
      }

      a:focus .category-item,
      .category-item:focus {
        background-color: var(--gray-color-50, #f9f9f9);
        color: var(--primary-color, #283198);

        img {
          filter: invert(24%) sepia(68%) saturate(2054%) hue-rotate(226deg)
            brightness(92%) contrast(92%);
        }
      }

      .category-item img {
        width: 24px;
        height: 24px;
        color: var(--gray-color-700, #404040);
      }

      .category-item:hover img {
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
      <ul class="category-list">
        <a href="#">
          <li class="category-item">
            <img src="/icon/header-category-veggies.svg" alt="채소 아이콘" />
            채소
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-fruit.svg"
              alt="과일·견과·쌀 아이콘"
            />
            과일 · 견과 · 쌀
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-seafood.svg"
              alt="수산·해산·건어물 아이콘"
            />
            수산 · 해산 · 건어물
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img src="/icon/header-category-meat.svg" alt="정육·계란 아이콘" />
            정육 · 계란
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-side.svg"
              alt="국·반찬·메인요리 아이콘"
            />
            국 · 반찬 · 메인요리
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-convenient.svg"
              alt="샐러드·간편식 아이콘"
            />
            샐러드 · 간편식
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-sauce.svg"
              alt="면·양념·오일 아이콘"
            />
            면 · 양념 · 오일
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-snacks.svg"
              alt="생수·음료·우유·커피 아이콘"
            />
            생수 · 음료 · 우유 · 커피
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-cookie.svg"
              alt="간식·과자·떡 아이콘"
            />
            간식 · 과자 · 떡
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-deli.svg"
              alt="베이커리·치즈·델리 아이콘"
            />
            베이커리 · 치즈 · 델리
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img src="/icon/header-category-health.svg" alt="건강식품 아이콘" />
            건강식품
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img src="/icon/header-category-liquor.svg" alt="전통주 아이콘" />
            전통주
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-living.svg"
              alt="생활용품·리빙·캠핑 아이콘"
            />
            생활용품 · 리빙 · 캠핑
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-beauty.svg"
              alt="스킨케어·메이크업 아이콘"
            />
            스킨케어 · 메이크업
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-body.svg"
              alt="헤어·바디·구강 아이콘"
            />
            헤어 · 바디 · 구강
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-kitchen.svg"
              alt="주방용품 아이콘"
            />
            주방용품
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-electronic.svg"
              alt="가전제품 아이콘"
            />
            가전제품
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img src="/icon/header-category-pet.svg" alt="반려동물 아이콘" />
            반려동물
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-kids.svg"
              alt="베이비·키즈·완구 아이콘"
            />
            베이비 · 키즈 · 완구
          </li>
        </a>
        <a href="#">
          <li class="category-item">
            <img
              src="/icon/header-category-recommend.svg"
              alt="여행·티켓 아이콘"
            />
            여행 · 티켓
          </li>
        </a>
      </ul>
    `;
  }
}

customElements.define('header-category-component', HeaderCategory);
