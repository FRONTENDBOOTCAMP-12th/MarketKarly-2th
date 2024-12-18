import reset from '@/styles/reset';
import { LitElement, html, css } from 'lit';
import '@/components/HeaderCategory';

class Header extends LitElement {
  static styles = [
    reset,
    css`
      body {
        background: var(--white-color, #ffffff);
        overflow-x: hidden;
        white-space: nowrap;
      }

      .header,
      .nav,
      .top-bar,
      .header-member-service,
      .header-site-select ul {
        white-space: nowrap;
        position: relative;
        background: var(--white-color, #ffffff);
      }

      .top-bar {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 0 1.25rem;
        width: 100%;
        max-width: 1050px;
        margin: 0 auto;
        background: var(--white-color, #ffffff);
      }

      .top-bar-nav {
        width: 100%;
      }

      .header-member-service {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 0.75rem;
        padding: 0.75rem 0 0;
        height: 30px;
        margin-top: 0;
        margin-right: 1%;
      }

      .header-member-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .header-member-item a {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        text-decoration: none;
        font-size: var(--font-sm);
        line-height: 160%;
      }

      .header-member-item.divider a.join {
        color: var(--primary-color, #283198);
      }

      .divider::after {
        content: '';
        width: 1px;
        height: 13px;
        background: var(--gray-color-100, #e1e1e1);
        margin-left: 0 0.75rem;
      }
      .header-member-item .icon-down {
        width: 6px;
        height: 6px;
      }
      .header-wrapper {
        position: relative;
        top: 0;
        z-index: 5;
        transition: transform 0.3 ease;

        width: 100%;
        max-width: 1050px;
        margin: 0 auto;
        background: var(--white-color, #ffffff);
      }

      .header {
        display: flex;
        flex-direction: column;
        position: relative;
      }

      .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .header-name-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 3.5rem;
        box-sizing: border-box;
      }

      .header-site-select {
        display: flex;
        align-items: center;
        gap: 0.6875rem;
      }

      .header-logo a img {
        width: 82px;
        height: 50px;
      }

      .header-site-select ul {
        display: flex;
        gap: 0.5rem;
      }

      .header-site-select ul li {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .header-site-select ul li a {
        text-decoration: none;
        font-size: var(--font-lg);
        color: var(--gray-color-400, #898989);
        letter-spacing: -0.0625rem;
      }

      .header-site-select ul li a.site-main {
        color: var(--primary-color, #283198);
        font-weight: var(--text-semi-bold);
      }

      .header-site-select ul li a.site-beauty:hover {
        color: var(--primary-color, #283198);
        font-weight: var(--text-semi-bold);
        transition: color 0.03s ease, font-weight 0.03s ease;
      }

      .new-icon img {
        position: static;
        min-width: 8px;
        min-height: 8px;
      }

      .header-search {
        display: flex;
        align-items: center;
        width: 40%;
        height: 50px;
        border: 0.0625rem solid var(--primary-color, #283198);
        border-radius: 4px;
        padding: 0.75rem 0.875rem;
        box-sizing: border-box;
      }

      .header-search input::placeholder {
        color: var(--gray-color-400, #898989);
      }

      .header-search input {
        flex-grow: 1;
        border: none;
        color: var(--gray-color-400, #898989);
        font-weight: var(--text-bold);
      }

      .header-search button {
        background: none;
        border: none;
        cursor: pointer;
      }

      .header-bookmarks {
        position: relative;
        display: flex;
        gap: 15%;
        margin-left: auto;
        margin-right: 2rem;
      }

      .header-bookmarks li a {
        position: relative;
        display: flex;
        align-items: center;
      }

      .header-bookmarks li a:hover img {
        filter: invert(33%) sepia(98%) saturate(1497%) hue-rotate(222deg)
          brightness(87%) contrast(91%);
      }

      .header-bookmarks .icon {
        width: 36px;
        height: 36px;
      }

      .header-bookmarks li a:hover .map-popup {
        display: block;
      }

      .map-popup {
        display: none;
        position: absolute;
        top: 5.8rem;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--white-color, #ffffff);
        border: 0.0625rem solid #ccc;
        padding: 1.25rem;
        z-index: 10;
        width: 145px;
        opacity: 2;
      }

      .map-popup h3 {
        font-weight: var(--text-bold);
        margin-bottom: 0.625rem;
      }

      .map-popup p {
        font-size: var(--font-sm);
        margin-bottom: 0.9375rem;
      }

      .map-popup button {
        background-color: var(--primary-color, #283198);
        color: var(--white-color, #ffffff);
        border: none;
        padding: 0.5rem 1rem;
        font-size: var(--font-sm);
        cursor: pointer;
      }

      .nav {
        position: relative;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        width: 100%;
        max-width: 1050px;
        margin: 0 auto;
        background: var(--white-color, #ffffff);
      }

      .nav-category {
        position: relative;
        width: 150px;
        display: flex;
        background: var(--white-color, #ffffff);
      }

      .nav-category-button {
        align-items: center;
        text-decoration: none;
        font-weight: var(--text-semi-bold);
        letter-spacing: -0.03125rem;
        padding-left: 0.5rem;
        background: var(--white-color, #ffffff);
        display: flex;
        gap: 1rem;
      }

      .nav-category-icon {
        width: 16px;
        height: 14px;
      }

      .nav-category:hover {
        cursor: pointer;
      }

      .nav-category:hover .nav-category-icon {
        filter: invert(33%) sepia(98%) saturate(1497%) hue-rotate(222deg)
          brightness(87%) contrast(91%);
      }

      .nav-category:hover span {
        color: var(--primary-color, #283198);
        font-weight: var(--text-bold);
      }

      .nav-site-map {
        display: flex;
        list-style: none;
        gap: 5.9rem;
        justify-content: center;
        align-items: center;
        margin-right: 5%;
        margin-left: 3%;
        justify-content: center;
      }

      .nav-site-map li a {
        text-decoration: none;
        font-weight: var(--text-semi-bold);
      }

      .nav-site-map li a:hover {
        text-decoration: underline;
        color: var(--primary-color, #283198);
      }

      .nav-delivery {
        display: flex;
        align-items: center;
        padding: 0.3125rem 0.5rem;
        border: 0.0625rem solid var(--gray-color-400, #898989);
        border-radius: 16px;
      }

      .nav-delivery a {
        text-decoration: none;
        font-size: var(--font-sm);
        color: var(--primary-color, #283198);
      }

      .header-help-desk {
        display: none;
        position: absolute;
        list-style: none;
        top: 2.1rem;
        right: 0;
        background: var(--white-color, #ffffff);
        border: 0.0625rem solid var(--gray-color-100, #e1e1e1);
        z-index: 10;
      }

      .header-member-item:hover .header-help-desk {
        display: block;
      }

      .header-help-desk li a {
        display: block;
        padding: 0.625rem;
        text-decoration: none;
      }

      .header-help-desk li a:hover {
        background-color: var(--gray-color-100, #e1e1e1);
      }

      .delivery-bold {
        font-weight: var(--text-bold);
      }

      .header-shadow {
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.09),
          rgba(0, 0, 0, 0)
        );
        z-index: 9;
        top: 100%;
      }

      @media screen and (max-width: 1024px) {
        /** 태블릿 가로, 노트북 */
      }

      @media screen and (max-width: 768px) {
        .nav-site-map {
          margin-right: 10%;
          gap: 4.5rem;
        }
        .header-name-wrapper {
          display: flex;

          align-items: center;
          flex-wrap: wrap;
          gap: 0.625rem;
          margin-top: 0;
          justify-content: center;
        }

        .header-logo {
          order: 1;
        }

        .header-bookmarks {
          order: 2;
          display: flex;
          gap: 1rem;
          justify-content: flex-start;
          margin-right: 0;
        }

        .header-search {
          width: 98%;
          order: 3;
        }

        .site-beauty,
        .site-main,
        .nav-category-text,
        .nav-delivery,
        .new-icon,
        .divider-site::after {
          display: none;
        }
      }

      @media screen and (max-width: 480px) {
        .nav-site-map {
          display: flex;
          gap: 1.2rem;
          justify-content: flex-start;
          margin-left: 1rem;
          margin-right: 10%;
        }

        .nav-delivery {
          display: none;
        }

        .header-member-service {
          display: none;
        }

        .nav-category-text {
          display: none;
        }

        .site-beauty {
          display: none;
        }

        .site-main {
          display: none;
        }
      }
    `,
  ];
  static properties = {
    isCategoryOpen: { type: Boolean }, // 상태 관리
  };

  constructor() {
    super();
    this.isCategoryOpen = false; // 초기 상태: 닫힘
  }

  // 카테고리 열기
  openCategory() {
    this.isCategoryOpen = true;
  }

  // 카테고리 닫기
  closeCategory() {
    this.isCategoryOpen = false;
  }

  render() {
    return html`
      <div class="top-bar">
        <nav class="top-bar-nav">
          <ul class="header-member-service">
            <li class="header-member-item divider">
              <a href="/" class="header-member-link join" aria-label="회원가입"
                >회원가입</a
              >
            </li>
            <li class="header-member-item divider">
              <a href="/" class="header-member-link" aria-label="로그인"
                >로그인</a
              >
            </li>
            <li class="header-member-item">
              <a
                href="#"
                class="header-member-link"
                aria-haspopup="true"
                aria-expanded="false"
              >
                고객센터
                <img class="icon-down" src="/icon/down.webp" alt="펼치기" />
              </a>
              <ul class="header-help-desk">
                <li><a href="#" aria-label="공지사항">공지사항</a></li>
                <li><a href="#" aria-label="자주하는질문">자주하는질문</a></li>
                <li><a href="#" aria-label="1:1 문의">1:1 문의</a></li>
                <li>
                  <a href="#" aria-label="대량주문 문의">대량주문 문의</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <header class="header-wrapper">
        <div class="header">
          <div class="header-top">
            <div class="header-name-wrapper">
              <div class="header-site-select">
                <h1 class="header-logo">
                  <a href="/" aria-label="마켓컬릿 홈으로 이동">
                    <img src="/public/logo2.webp" alt="마켓컬릿 로고" />
                  </a>
                </h1>
                <nav class="header-site-select">
                  <ul>
                    <li>
                      <a
                        href="/"
                        class="site-main"
                        aria-label="마켓컬릿 홈페이지"
                      >
                        마켓컬릿
                      </a>
                    </li>
                    <li class="divider divider-site"></li>
                    <li>
                      <a
                        href="/"
                        class="site-beauty"
                        aria-label="뷰티컬릿 홈페이지"
                      >
                        뷰티컬릿
                      </a>
                    </li>
                    <span class="new-icon">
                      <img src="/icon/new.webp" alt="새로운 아이콘" />
                    </span>
                  </ul>
                </nav>
              </div>
              <form class="header-search" role="search" aria-label="검색">
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요."
                  aria-label="검색어 입력"
                />
                <button type="submit" aria-label="검색 버튼">
                  <img
                    src="/icon/header-search.svg"
                    alt="검색 아이콘"
                    class="icon"
                  />
                </button>
              </form>
              <ul class="header-bookmarks">
                <li>
                  <a href="#" aria-label="매장 찾기">
                    <img
                      src="/icon/map.svg"
                      alt="매장 찾기 아이콘"
                      class="icon"
                    />
                    <div class="map-popup">
                      <p>
                        배송지를 등록하고 <br />
                        구매 가능한 상품을 확인하세요.
                      </p>
                      <button>로그인</button>
                      <button>주소 검색</button>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="찜한 상품 목록">
                    <img
                      src="/icon/favorits.svg"
                      alt="찜한 상품 목록 아이콘"
                      class="icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="장바구니">
                    <img
                      src="/icon/header-cart.svg"
                      alt="장바구니 아이콘"
                      class="icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <nav class="nav">
            <div
              class="nav-category header-category"
              @mouseenter=${this.openCategory}
              @mouseleave=${this.closeCategory}
            >
              <div class="nav-category-button">
                <img
                  src="/icon/hamburger.webp"
                  alt="카테고리"
                  class="nav-category-icon nav-category-hover"
                  aria-label="카테고리"
                />
                <span class="nav-category-text nav-category-hover"
                  >카테고리</span
                >
              </div>
            </div>

            <ul class="nav-site-map">
              <li><a href="/" aria-label="신상품">신상품</a></li>
              <li><a href="/" aria-label="베스트 상품">베스트</a></li>
              <li><a href="/" aria-label="알뜰쇼핑">알뜰쇼핑</a></li>
              <li><a href="/" aria-label="특가/혜택">특가/혜택</a></li>
            </ul>

            <div class="nav-delivery">
              <a href="#" aria-label="샛별·낮 배송 안내">
                <span class="delivery-bold">샛별·하루</span>
                배송안내
              </a>
            </div>

            <div class="header-shadow"></div>
          </nav>
          ${this.isCategoryOpen
            ? html`<header-category-component></header-category-component>`
            : ''}
        </div>
      </header>
    `;
  }
}

customElements.define('header-layout', Header);
