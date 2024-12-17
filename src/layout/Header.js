import reset from '@/styles/reset';
import { LitElement, html, css } from 'lit';
import '@/components/HeaderCategory';

class Header extends LitElement {
  static styles = [
    reset,
    css`
      /* ----------------------------------------------------전체 설정 */

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

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

      /* ----------------------------------------------------첫 번째 줄 : Top Bar */
      .top-bar {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 0 1.25rem;
        width: 100%;
        max-width: 65.625rem;
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
        list-style: none;
        justify-content: flex-end;
        gap: 0.75rem;
        padding: 0.75rem 0 0;
        height: 1.9375rem;
        margin-top: 0;
      }

      .header-member-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .header-member-item a {
        text-decoration: none;
        font-size: var(--font-sm, 0.75rem);
        line-height: 160%;
        color: var(--content-text-color, #333333);
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

      /* ----------------------------------------------------2번째 줄 : Header Wrapper */

      .header-sticky {
        top: 1rem;
        z-index: 5;
        transition: transform 0.3 ease;
        /* **************************************** 세로 반응형  */
      }

      .header-wrapper {
        position: relative;
        top: 0;
        z-index: 5;
        transition: transform 0.3 ease;

        width: 100%;
        max-width: 65.625rem;
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
        width: 5.125rem;
        height: 3.1875rem;
      }

      .header-site-select ul {
        display: flex;
        list-style: none;
        gap: 0.5rem;
      }

      .header-site-select ul li {
        position: relative;
      }

      .header-site-select ul li a {
        text-decoration: none;
        font-size: var(--font-lg, 1.25rem);
        color: var(--gray-color-400, #898989);
        letter-spacing: -0.0625rem;
      }

      .header-site-select ul li a.site-main {
        color: var(--primary-color, #283198);
        font-weight: var(--text-semi-bold, 600);
      }

      .header-site-select ul li a.site-beauty:hover {
        color: var(--primary-color, #283198);
        font-weight: var(--text-semi-bold, 600);
        transition: color 0.03s ease, font-weight 0.03s ease;
      }

      .header-site-select ul li a.site-beauty::after {
        content: '';
        width: 0.0625rem;
        height: 1rem;
        background: var(--gray-color-200, #e1e1e1);
        margin-left: 0.75rem;
        position: absolute;
        top: 50%;
        left: -1.2rem;
        transform: translateY(-50%);
      }

      .new-icon img {
        position: relative;
        top: -0.875rem;
        margin-left: 0.0625rem;
        width: 0.5rem;
        height: 0.5rem;
      }

      .header-search {
        display: flex;
        align-items: center;
        width: 40%;
        height: 3.125rem;
        border: 0.0625rem solid var(--primary-color, #283198);
        border-radius: 0.25rem;
        padding: 0.75rem 0.875rem;
      }

      .header-search input::placeholder {
        color: var(--gray-color-400, #898989);
      }

      .header-search input {
        flex-grow: 1;
        border: none;
        font-size: var(--font-md, 1rem);
        color: var(--gray-color-400, #898989);
        font-weight: var(--text-bold, 700);
      }

      .header-search button {
        background: none;
        border: none;
        cursor: pointer;
      }

      .header-bookmarks {
        position: relative;
        display: flex;
        list-style: none;
        gap: 15%;
        margin-left: auto;
        margin-right: auto;
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
        width: 2.25rem;
        height: 2.25rem;
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
        width: 200px;
        opacity: 2;
      }

      .map-popup h3 {
        font-size: var(--font-md, 1rem);
        font-weight: var(--text-bold, 700);
        margin-bottom: 0.625rem;
      }

      .map-popup p {
        font-size: var(--font-sm, 0.75rem);
        margin-bottom: 0.9375rem;
      }

      .map-popup button {
        background-color: var(--primary-color, #283198);
        color: var(--white-color, #ffffff);
        border: none;
        padding: 0.5rem 1rem;
        font-size: var(--font-sm, 0.75rem);
        cursor: pointer;
      }

      /* ---------------------------------------------------- 3번째 줄 : Navigation */
      .nav {
        position: relative;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        width: 100%;
        max-width: 65.625rem;
        margin: 0 auto;
        background: var(--white-color, #ffffff);
      }

      .nav-category {
        position: relative;
        width: 100px;
        display: flex;
        list-style: none;
        background: var(--white-color, #ffffff);
      }

      .nav-category span {
        text-decoration: none;
        font-weight: var(--text-semi-bold, 600);
        font-size: var(--font-md, 1rem);
        color: var(--content-text-color, #333333);
        letter-spacing: -0.03125rem;
        padding-left: 0.5rem;
        background: var(--white-color, #ffffff);
      }

      .nav-category-icon {
        width: 1rem;
        height: 0.875rem;
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
        font-weight: var(--text-bold, 700);
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
        font-weight: var(--text-semi-bold, 600);
        font-size: var(--font-md, 1rem);
        color: var(--content-text-color, #333333);
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
        border-radius: 1rem;
      }

      .nav-delivery a {
        text-decoration: none;
        font-size: var(--font-sm, 0.75rem);
        color: var(--primary-color, #283198);
      }

      .header-help-desk {
        display: none;
        list-style: none;
        position: absolute;
        top: 2rem;
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
        color: var(--content-text-color, #333333);
      }

      .header-help-desk li a:hover {
        background-color: var(--gray-color-100, #e1e1e1);
      }

      .delivery-bold {
        font-weight: var(--text-bold, 700);
      }

      /* ----------------------------------------------------가로선 */

      .header-shadow {
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.08),
          rgba(0, 0, 0, 0)
        );
        z-index: 9;
        bottom: 1px;
      }

      .header-shadow::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        z-index: 9;
      }
      /* ---------------------------------------------------- 반응형 : 가로 */

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
          /* top: 0;
    margin-top: 0; */
        }

        .header-search {
          width: 100%;
          order: 3;
          margin-left: 0;
          margin-right: 0;
        }

        .site-beauty {
          display: none;
        }

        .site-main {
          display: none;
        }

        .nav-category-text {
          display: none;
        }

        .nav-delivery {
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

      /* ---------------------------------------------------- 반응형 : 세로 (스크롤) */

      .nav-delivery.sticky {
        display: none;
      }

      .header-member-service.sticky {
        display: none;
      }

      .site-beauty.sticky {
        display: none;
      }

      .site-main.sticky {
        display: none;
      }
    `,
  ];

  static properties = {
    isCategoryOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.isCategoryOpen = false;
    this.closeTimeout = null;
  }

  handleMouseEnter() {
    clearTimeout(this.closeTimeout);
    this.isCategoryOpen = true;
  }

  handleMouseLeave(e) {
    const relatedTarget = e.relatedTarget;

    if (
      this.isDescendant(
        this.renderRoot.querySelector('.nav-category'),
        relatedTarget
      ) ||
      this.isDescendant(
        this.renderRoot.querySelector('header-category'),
        relatedTarget
      )
    ) {
      return;
    }

    this.closeTimeout = setTimeout(() => {
      this.isCategoryOpen = false;
    }, 100);
  }

  isDescendant(parent, child) {
    let node = child;
    while (node != null) {
      if (node === parent) return true;
      node = node.parentNode;
    }
    return false;
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
                <img
                  class="icon-down"
                  src="/icon/down.webp"
                  alt="펼치기"
                  role="presentation"
                />
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
      <div class="header-sticky">
        <header class="header-wrapper">
          <div class="header">
            <div class="header-top">
              <div class="header-name-wrapper">
                <div class="header-site-select">
                  <h1 class="header-logo">
                    <a href="/" aria-label="마켓컬릿 홈으로 이동">
                      <img
                        src="/public/logo2.webp"
                        alt="마켓컬릿 로고"
                        role="img"
                      />
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
                      <li class="divider"></li>
                      <li>
                        <a
                          href="/"
                          class="site-beauty"
                          aria-label="뷰티컬릿 홈페이지"
                        >
                          뷰티컬릿
                          <span class="new-icon">
                            <img
                              src="/icon/new.webp"
                              alt="새로운 아이콘"
                              role="img"
                            />
                          </span>
                        </a>
                      </li>
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
                      role="img"
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
                        role="img"
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
                        role="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="장바구니">
                      <img
                        src="/icon/header-cart.svg"
                        alt="장바구니 아이콘"
                        class="icon"
                        role="img"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <nav class="nav">
              <div class="nav-category header-category">
                <div
                  class="nav-category-button"
                  @mouseenter="${this.handleMouseEnter}"
                  @mouseleave="${this.handleMouseLeave}"
                >
                  <img
                    src="/icon/hamburger.webp"
                    alt="카테고리"
                    class="nav-category-icon nav-category-hover"
                    aria-label="카테고리"
                    role="img"
                  />
                  <span class="nav-category-text nav-category-hover"
                    >카테고리</span
                  >
                </div>
                ${this.isCategoryOpen
                  ? html`<header-category
                      @mouseenter="${this.handleMouseEnter}"
                      @mouseleave="${this.handleMouseLeave}"
                    ></header-category>`
                  : ''}
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
          </div>
        </header>
        <div class="header-shadow"></div>
      </div>
    `;
  }
}

customElements.define('header-layout', Header);
