import '@/assets/font/Pretendard.css';
import reset from '@/styles/reset';
import { LitElement, css, html } from 'lit';
import { register } from 'swiper/element';
register();

class RecentElement extends LitElement {
  static styles = [
    reset,
    css`
      .container {
        width: 76px;
        height: 224px;
        border: 1px solid var(--gray-color-200, #c4c4c4);
        font-family: 'Pretendard';
        padding: 0.5rem;
        box-sizing: border-box;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 0.375rem;
        top: 50%;
        right: 0;
        transform: translate(-25%, -50%);
        z-index: 999;
        background-color: var(--white-color, #fff);
      }

      .title {
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
      }

      swiper-container {
        flex: 1;
        overflow: hidden;
      }

      swiper-slide img {
        width: 40px;
      }

      button {
        background: transparent;
        padding: 0;
        cursor: pointer;
        border: none;
      }
    `,
  ];

  static properties = {
    data: { type: Object },
  };

  constructor() {
    super();
    this.data = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._fetchStorageData();
    // window.addEventListener('popstate', this._onPopState.bind(this));
    // history.pushState({ url: 'product-list' }, '', '/product-list'); // URL 변경
    // history.back();
  }

  _fetchStorageData() {
    const data = localStorage.getItem('viewedItem');
    this.data = JSON.parse(data);
  }

  render() {
    return html`
      <section class="container" id="side-swiper">
        <button
          class="btn-up"
          @click=${this.prevSlide}
          aria-label="이전 슬라이드"
        >
          <img src="/icon/small-arrow-up.svg" alt="이전" />
        </button>

        <article class="title">최근 본 상품</article>

        <swiper-container
          id="swiper"
          slides-per-view="2.5"
          direction="vertical"
          loop="false"
          space-between="4"
        >
          ${this.data?.map((item) => {
            return html`<swiper-slide>
              <a href="/src/pages/productDetail/index.html?product=${item.id}">
                <img src="${item.photo}" alt="${item.productName}" />
              </a>
            </swiper-slide>`;
          })}
        </swiper-container>

        <button
          class="btn-down"
          @click=${this.nextSlide}
          aria-label="다음 슬라이드"
        >
          <img src="/icon/small-arrow-down.svg" alt="다음" />
        </button>
      </section>
    `;
  }
  firstUpdated() {
    this.swiperEl = this.shadowRoot.getElementById('swiper');

    this.swiperEl.swiper.params.simulateTouch = false;
    this.swiperEl.swiper.params.touchMove = false;

    this.swiperEl.swiper.update();
  }

  prevSlide() {
    this.swiperEl.swiper.slidePrev();
  }

  nextSlide() {
    this.swiperEl.swiper.slideNext();
  }

  // connectedCallback() {
  //   super.connectedCallback();
  //   // this._fetchStorageData();
  // }

  // _fetchStorageData() {
  //   const data = JSON.parse(localStorage.getItem('viewedItem'));
  //   this.viewedData = data;
  // }

  // handlePageShow() {
  //   const storedProducts = JSON.parse(localStorage.getItem('viewedItem'));
  //   this.viewedData = storedProducts;
  //   this.requestUpdate();
  // }
}

customElements.define('recent-component', RecentElement);
