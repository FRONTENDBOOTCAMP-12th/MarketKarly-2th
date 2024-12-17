import reset from '@/styles/reset';
import { LitElement, css, html } from 'lit';

class HeaderCategory extends LitElement {
  static styles = [
    reset,
    css`
      /* ----------------------------------------------------- 주요 항목 */

      .category-list {
        list-style-type: none;
        position: absolute;
        z-index: 0;
        border: 0.0625rem solid var(--gray-color-100, #ececec);
        padding: 0;
        background: var(--white-color, #fff);
        width: 250px;
        left: 0;
        top: 19.5px;
        height: 60vh;
        bottom: 0;
        transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        clip-path: none;
        overflow-y: auto;

        a {
          font-size: var(--font-md);
          font-weight: var(--text-regular);
        }

        li {
          position: relative;
          display: flex;
          align-items: center;
          padding: var(--space-lg);
          cursor: pointer;
          font-weight: var(--text-semi-bold);
          font-size: var(--font-md);
          line-height: var(--regular-line-height);
          color: var(--content-text-color, #333);
          gap: var(--space-lg);
          vertical-align: middle;

          &:hover {
            background-color: var(--gray-color-50, #f5f5f5);
            color: var(--primary-color, #283198);

            img {
              filter: invert(24%) sepia(68%) saturate(2054%) hue-rotate(226deg)
                brightness(92%) contrast(92%);
              stroke-width: 2.5;
            }
          }

          img {
            width: 1.5rem;
            height: 1.5rem;
            flex-shrink: 0;
            transition: filter 0.2s ease-in-out;
          }
        }
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
      <ul class="category-list" aria-label="카테고리리 목록">
        <li aria-label="채소">
          <img
            src="/icon/header-category-veggies.svg"
            alt="채소 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          채소
        </li>
        <li aria-label="과일 · 견과 · 쌀">
          <img
            src="/icon/header-category-fruit.svg"
            alt="과일/견과/쌀 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          과일 · 견과 · 쌀
        </li>
        <li aria-label="수산 · 해산 · 건어물">
          <img
            src="/icon/header-category-seafood.svg"
            alt="수산/해산/건어물 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          수산 · 해산 · 건어물
        </li>
        <li aria-label="정육 · 계란">
          <img
            src="/icon/header-category-meat.svg"
            alt="정육/계란 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          정육 · 계란
        </li>

        <li aria-label="국 · 반찬 · 메인요리">
          <img
            src="/icon/header-category-side.svg"
            alt="국/반찬/메인요리 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          국 · 반찬 · 메일요리
        </li>
        <li aria-label="샐러드 · 간편식">
          <img
            src="/icon/header-category-convenient.svg"
            alt="샐러드/간편식 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          샐러드 · 간편식
        </li>
        <li aria-label="면 · 양념 · 오일">
          <img
            src="/icon/header-category-sauce.svg"
            alt="면/양념/오일 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          면 · 양념 · 오일
        </li>

        <li aria-label="생수 · 음료 · 우유 · 커피">
          <img
            src="/icon/header-category-snacks.svg"
            alt="생수/음료/우유/커피 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          생수 · 음료 · 우유 · 커피
        </li>
        <li aria-label="간식 · 과자 · 떡">
          <img
            src="/icon/header-category-cookie.svg"
            alt="간식/과자/떡 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          간식 · 과자 · 떡
        </li>
        <li aria-label="베이커리 · 치즈 · 델리">
          <img
            src="/icon/header-category-deli.svg"
            alt="베이커리/치즈/델리 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          베이커리 · 치즈 · 델리
        </li>
        <li aria-label="건강샘플">
          <img
            src="/icon/header-category-health.svg"
            alt="건강샘플 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          건강샘플
        </li>
        <li aria-label="전통주">
          <img
            src="/icon/header-category-liquor.svg"
            alt="전통주 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          전통주
        </li>
        <li aria-label="생활용품 · 리빙 · 캠핑">
          <img
            src="/icon/header-category-living.svg"
            alt="생활용품/리빙/캠핑 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          생활용품 · 리빙 · 캠핑
        </li>
        <li aria-label="스킨케어 · 메이크업">
          <img
            src="/icon/header-category-beauty.svg"
            alt="스킨케어/메이크업 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          스킨케어 · 메이크업
        </li>
        <li aria-label="헤어 · 바디 · 구강">
          <img
            src="/icon/header-category-body.svg"
            alt="헤어/바디/구강 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          헤어 · 바디 · 구강
        </li>
        <li aria-label="주방용품">
          <img
            src="/icon/header-category-kitchen.svg"
            alt="주방용품 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          주방용품
        </li>
        <li aria-label="가전제품">
          <img
            src="/icon/header-category-electronic.svg"
            alt="가전제품 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          가전제품
        </li>
        <li aria-label="반려동물">
          <img
            src="/icon/header-category-pet.svg"
            alt="반려동물 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          반려동물
        </li>
        <li aria-label="베이비 · 키즈 · 완구">
          <img
            src="/icon/header-category-kids.svg"
            alt="베이비/키즈/완구 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          베이비 · 키즈 · 완구
        </li>
        <li aria-label="여행 · 티켓">
          <img
            src="/icon/header-category-recommend.svg"
            alt="여행/티켓 아이콘"
            class="w-6 h-6 hover:fill-primary"
          />
          여행 · 티켓
        </li>
      </ul>
    `;
  }
}

customElements.define('header-category-component', HeaderCategory);
