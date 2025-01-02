import reset from '@/styles/reset';
import { LitElement, html, css } from 'lit';
import '@/components/HeaderCategory';
import pb from '@/api/pocketbase';
import Swal from 'sweetalert2';

class Header extends LitElement {
  static styles = [
    reset,
    css`
      .header-wrapper {
        box-shadow: 0 0 var(--space-md) var(--gray-color-200, #c4c4c4);
        background-color: var(--white-color, #ffffff);
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      .top-bar-nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 0 var(--space-md);
      }

      .header-member-service {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: var(--space-lg);
        padding: var(--space-md) 0 0;
        height: 30px;
        font-weight: var(--text-semi-bold);
      }

      .header-member-item {
        display: flex;
        align-items: center;
        gap: var(--space-lg);
        padding: var(--space-lg) 0 var(--space-lg);
      }

      .header-member-item a {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: var(--font-sm);
      }

      .header-member-item span {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: var(--font-sm);
        color: var(--primary-color, #283198);
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

      .max-width-box {
        margin: 0 auto;
        width: 1050px;
        position: relative;
      }

      .header-name-wrapper {
        display: flex;
        align-items: center;
        gap: 3.5rem;
        box-sizing: border-box;
        justify-content: space-between;
        margin-top: var(--space-md);
      }

      .header-site-select {
        display: flex;
        align-items: center;
        gap: var(--space-lg);
      }

      .header-site-select ul {
        display: flex;
        gap: var(--space-md);
      }

      .header-site-select ul li {
        position: relative;
        display: flex;
        align-items: center;
      }

      .header-site-select ul li a {
        text-decoration: none;
        font-size: var(--font-lg);
        color: var(--primary-color, #283198);
        font-weight: var(--text-semi-bold);
      }

      .header-site-select ul li a.site-beauty {
        color: var(--gray-color-500, #6b6b6b);
      }

      .header-site-select ul li a.site-beauty:hover {
        color: var(--primary-color, #283198);
        font-weight: var(--text-semi-bold);
      }

      .new-icon {
        margin-bottom: 12px;
      }

      .header-search {
        display: flex;
        left: 51%;
        transform: translateX(-50%);
        position: absolute;
        align-items: center;
        width: 400px;
        height: 46px;
        border: 0.08rem solid var(--primary-color, #283198);
        border-radius: 4px;
        box-sizing: border-box;
        padding-left: var(--space-sm);
      }

      .header-search input::placeholder {
        color: var(--gray-color-500, #6b6b6b);
        padding-left: var(--space-md);
      }

      .header-search input {
        padding-left: var(--space-sm);
        flex-grow: 1;
        border: none;
        color: var(--gray-color-500, #6b6b6b);
        font-size: var(--font-md);
        height: 40px;
      }
      .search-button {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 44px;
        min-height: 44px;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
        padding-right: var(--space-md);
        box-sizing: border-box;
      }

      .search-icon {
        display: flex;
        justify-content: center;
        align-items: center;
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

      .nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav-category {
        position: relative;
        width: 150px;
        display: flex;
        padding-top: var(--space-3xl);
        padding-bottom: var(--space-xl);
      }

      .nav-category-button {
        align-items: center;
        text-decoration: none;
        font-weight: var(--text-semi-bold);
        padding-left: var(--space-md);
        display: flex;
        gap: var(--space-xl);
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

      .header-category {
        position: absolute;
        left: 0;
        z-index: 1000;
      }

      .nav-site-map {
        padding: var(--space-xl) 0;
        display: flex;
        list-style: none;
        gap: 3.8rem;
        justify-content: center;
        align-items: center;
        justify-content: center;
      }

      .nav-site-map li a {
        display: inline-block;
        width: 100px;
        text-align: center;
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
        border: 0.0625rem solid var(--gray-color-500, #6b6b6b);
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

      .header-member-item:hover .header-help-desk,
      .header-member-item:focus-within .header-help-desk {
        display: block;
      }

      .header-help-desk li a {
        display: block;
        padding: var(--space-md);
        text-decoration: none;
      }

      .header-help-desk li a:hover,
      .header-help-desk li a:focus {
        background-color: #f7f7f7;
      }

      .delivery-bold {
        font-weight: var(--text-bold);
      }

      nav.scrolled {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      nav.scrolled .nav-site-map {
        gap: 0;
        justify-content: flex-start;
      }

      nav.scrolled .nav-site-map li {
        margin-right: var(--space-md);
        margin-top: var(--space-md);
      }

      .header-wrapper.scrolled {
        transform: translateY(-66%);
        z-index: 999;
      }

      .header-search.scrolled {
        position: absolute;
        top: 6.7rem;
        left: 47rem;
        width: 242px;
        height: 34px;
        border: 1px solid var(--primary-color, #283198);
        border-radius: 4px;
        padding: 0 0 0 var(--space-sm);
        box-sizing: border-box;
        z-index: 999;
      }

      .header-search.scrolled input {
        font-size: var(--font-sm);
        background-color: transparent;
        height: 28px;
      }

      .header-search.scrolled .search-button {
        padding-right: var(--space-sm);
      }

      .header-bookmarks.scrolled {
        position: relative;
        top: 3.5rem;
      }

      .header-bookmarks.scrolled li a {
        position: relative;
        z-index: 1000;
      }

      .header-bookmarks.scrolled li a:hover img {
        filter: invert(33%) sepia(98%) saturate(1497%) hue-rotate(222deg)
          brightness(87%) contrast(91%);
      }

      .header-wrapper.scrolled .nav-delivery {
        display: none;
      }
      button {
        border: none;
        margin: 0;
        padding: 0;
        background: transparent;
      }
    `,
  ];

  static properties = {
    isCategoryOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.isCategoryOpen = false;
    this.loginData = {};
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  fetchData() {
    const auth = JSON.parse(localStorage.getItem('auth') ?? '{}');
    this.loginData = auth;
  }

  handleLogout(e) {
    e.preventDefault();

    Swal.fire({
      title: '로그아웃',
      text: '로그아웃 하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '로그아웃',
      confirmButtonColor: '#283198',
      cancelButtonText: '취소',
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        localStorage.removeItem('auth');
        pb.authStore.clear();
        this.loginData.isAuth = false;
        this.requestUpdate();
        location.reload();
      }
    });
  }

  openCategory() {
    this.isCategoryOpen = true;
  }

  closeCategory() {
    this.isCategoryOpen = false;
  }

  handleScroll() {
    const header = this.shadowRoot.querySelector('.header-wrapper');
    const navigation = this.shadowRoot.querySelector('.nav');
    const searchBox = this.shadowRoot.querySelector('.header-search');
    const bookmarkContainer =
      this.shadowRoot.querySelector('.header-bookmarks');
    const navigationHeight = this.shadowRoot.querySelector('.nav').offsetHeight;

    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > navigationHeight) {
      navigation.classList.add('scrolled');
      header.classList.add('scrolled');
      searchBox.classList.add('scrolled');
      bookmarkContainer.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      navigation.classList.remove('scrolled');
      searchBox.classList.remove('scrolled');
      bookmarkContainer.classList.remove('scrolled');
    }
  }

  toggleCategory() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }

  handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleCategory();
    }
  }

  render() {
    const { isAuth, user } = this.loginData;

    return html`
      <header class="header-wrapper">
        <div class="max-width-box">
          <nav class="top-bar-nav">
            <ul class="header-member-service">
              ${!isAuth
                ? html`
                    <li class="header-member-item divider">
                      <a
                        href="/src/pages/register/"
                        class="header-member-link join"
                        aria-label="회원가입"
                        >회원가입</a
                      >
                    </li>
                    <li class="header-member-item divider">
                      <a
                        href="/src/pages/login/"
                        class="header-member-link"
                        aria-label="로그인"
                        >로그인</a
                      >
                    </li>
                  `
                : html`
                    <li class="header-member-item divider">
                      <span class="header-member-name">${user.name}님</span>
                    </li>
                    <li class="header-member-item divider">
                      <a
                        href="#"
                        @click="${this.handleLogout}"
                        class="header-member-link"
                        >로그아웃</a
                      >
                    </li>
                  `}
              <li class="header-member-item">
                <a href="#" class="header-member-link">
                  고객센터
                  <img
                    class="icon-down"
                    src="/icon/down.webp"
                    alt="펼치기"
                    width="7"
                    height="6"
                  />
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
                <a href="/">
                  <img
                    src="/logo.webp"
                    alt="마켓컬릿 로고"
                    width="82"
                    height="46"
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
                  <li>
                    <span class="new-icon" aria-label="새롭게 생긴 서비스">
                      <img src="/icon/new.webp" alt="" width="7" height="7" />
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
            <form class="header-search" role="search" aria-label="검색 창">
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                aria-label="검색어 입력"
              />
              <button type="submit" aria-label="검색" class="search-button">
                <img
                  src="/icon/header-search.svg"
                  alt=""
                  width="19"
                  height="19"
                />
              </button>
            </form>
            <ul class="header-bookmarks">
              <li>
                <a href="#" aria-label="매장 찾기">
                  <img src="/icon/map.svg" width="36" height="36" alt="" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="찜한 상품 목록">
                  <img
                    src="/icon/header-favorits.svg"
                    width="36"
                    height="36"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/src/pages/cart/index.html" aria-label="장바구니">
                  <img
                    src="/icon/header-cart.svg"
                    width="36"
                    height="36"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <nav class="nav">
            <section
              class="nav-category"
              @mouseenter=${this.openCategory}
              @mouseleave=${this.closeCategory}
            >
              <button
                class="nav-category-button"
                @keydown=${this.handleKeyDown}
                @click=${this.toggleCategory}
                tabindex="0"
                aria-expanded="${this.isCategoryOpen}"
                aria-controls="category-dropdown"
              >
                <img
                  src="/icon/hamburger.webp"
                  alt="카테고리 메뉴 펼치기"
                  class="nav-category-icon"
                  width="16"
                  height="14"
                />
                <span>카테고리</span>
              </button>

              ${this.isCategoryOpen
                ? html`<header-category-component
                    id="category-dropdown"
                    class="header-category"
                    @keydown=${this.handleCategoryKeyDown}
                  ></header-category-component>`
                : ''}
            </section>

            <ul class="nav-site-map">
              <li><a href="/src/pages/productList/">신상품</a></li>
              <li><a href="/src/pages/productList/">베스트</a></li>
              <li><a href="/src/pages/productList/">알뜰쇼핑</a></li>
              <li><a href="/src/pages/productList/">특가/혜택</a></li>
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
    `;
  }
}

customElements.define('header-layout', Header);
