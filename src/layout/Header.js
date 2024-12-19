import reset from '@/styles/reset';
import { LitElement, html, css } from 'lit';
import '@/components/HeaderCategory';

class Header extends LitElement {
  static styles = [
    reset,
    css`
      body {
        background: var(--white-color, #ffffff);
      }

      .header-wrapper {
        position: relative;
        box-shadow: 0 0 var(--space-md) var(--gray-color-200, #c4c4c4);
      }

      .top-bar {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 0 var(--space-2xl);
        width: 100%;
      }

      .top-bar-nav {
        width: 100%;
      }

      .header-member-service {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: var(--space-lg);
        padding: var(--space-lg) 0 0;
        height: 30px;
        font-weight: var(--text-semi-bold);
      }

      .header-member-item {
        display: flex;
        align-items: center;
        gap: var(--space-lg);
      }

      .header-member-item a {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        text-decoration: none;
        font-size: var(--font-sm);
      }

      .header-member-item.divider a.join {
        color: var(--primary-color, #283198);
      }

      .divider::after {
        content: '';
        width: 1px;
        height: 13px;
        background: var(--gray-color-100, #e1e1e1);
        margin-left: 0 var(--space-lg);
      }
      .header-member-item .icon-down {
        width: 6px;
        height: 6px;
      }

      .max-width-box {
        margin: 0 auto;
        width: 1050px;
        position: relative;
      }

      .header-name-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 3.5rem;
        box-sizing: border-box;
        justify-content: space-between;
        margin-top: var(--space-md);
        margin-bottom: var(--space-lg);
      }

      .header-site-select {
        display: flex;
        align-items: center;
        gap: var(--space-lg);
      }

      .header-logo a img {
        width: 82px;
        height: 50px;
      }

      .header-site-select ul {
        display: flex;
        gap: var(--space-md);
      }

      .header-site-select ul li {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--space-sm);
      }

      .header-site-select ul li a {
        text-decoration: none;
        font-size: var(--font-lg);
        color: var(--primary-color, #283198);
        font-weight: var(--text-semi-bold);
      }

      .header-site-select ul li a.site-beauty {
        color: var(--gray-color-200, #c4c4c4);
      }

      .header-site-select ul li a.site-beauty:hover {
        color: var(--primary-color, #283198);
        font-weight: var(--text-semi-bold);
      }

      .new-icon img {
        position: static;
        min-width: 8px;
        min-height: 8px;
      }

      .header-search {
        display: flex;
        left: 51%;
        transform: translateX(-50%);
        position: absolute;
        align-items: center;
        width: 400px;
        height: 50px;
        border: 0.0625rem solid var(--primary-color, #283198);
        border-radius: 4px;
        padding: var(--space-lg) var(--space-lg);
        box-sizing: border-box;
      }

      .header-search input::placeholder {
        color: var(--gray-color-400, #898989);
      }

      .header-search input {
        flex-grow: 1;
        border: none;
        color: var(--gray-color-400, #898989);
        font-size: var(--font-lg);
      }

      .header-search button {
        background: none;
        border: none;
        cursor: pointer;
        width: 36px;
        height: 36px;
      }

      .header-bookmarks {
        position: relative;
        display: flex;
        gap: var(--space-xl);
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
        padding: var(--space-2xl);
        z-index: 10;
        width: 145px;
        opacity: 2;
      }

      .map-popup p {
        font-size: var(--font-sm);
        margin-bottom: var(--space-md);
      }

      .map-popup button {
        background-color: var(--primary-color, #283198);
        border: none;
        padding: var(--space-md) var(--space-xl);
        font-size: var(--font-sm);
        cursor: pointer;
      }

      .nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-xl) 0;
        width: 100%;
      }

      .nav-category {
        position: relative;
        width: 150px;
        display: flex;
      }

      .nav-category-button {
        align-items: center;
        text-decoration: none;
        font-weight: var(--text-semi-bold);
        padding-left: var(--space-md);
        display: flex;
        gap: var(--space-xl);
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
        padding: var(--space-sm) var(--space-md);
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
        top: 2.2rem;
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
        padding: var(--space-md);
        text-decoration: none;
      }

      .delivery-bold {
        font-weight: var(--text-bold);
      }
    `,
  ];
  static properties = {
    isCategoryOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.isCategoryOpen = false;
  }

  openCategory() {
    this.isCategoryOpen = true;
  }

  closeCategory() {
    this.isCategoryOpen = false;
  }

  render() {
    return html`
      <header class="header-wrapper">
      <div class="max-width-box">
            <nav class="top-bar-nav">
              <ul class="header-member-service">
                <li class="header-member-item divider">
                  <a
                    href="/"
                    class="header-member-link join"
                    aria-label="회원가입"
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
                    <li>
                      <a href="#" aria-label="자주하는질문">자주하는질문</a>
                    </li>
                    <li><a href="#" aria-label="1:1 문의">1:1 문의</a></li>
                    <li>
                      <a href="#" aria-label="대량주문 문의">대량주문 문의</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>




              <div class="header-name-wrapper">
                <div class="header-site-select">
                  <h1 class="header-logo">
                    <a href="/" aria-label="마켓컬릿 홈으로 이동">
                      <img src="/logo2.webp" alt="마켓컬릿 로고" />
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
            </nav>
            ${
              this.isCategoryOpen
                ? html`<header-category-component></header-category-component>`
                : ''
            }
          </div>
        </div>
        </div>
      </header>
    `;
  }
}

customElements.define('header-layout', Header);
