import '@/assets/font/Pretendard.css';
import reset from '@/styles/reset.css?inline';

import style from './Header.css?inline';
import { LitElement, html } from 'lit';
import '@/components/HeaderCategory/HeaderCategory';

class Header extends LitElement {
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
      <style>
        ${style}
      </style>
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

customElements.define('home-header', Header);
