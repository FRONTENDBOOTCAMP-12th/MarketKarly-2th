import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import '@/assets/font/Pretendard.css';
import { register } from 'swiper/element';
import { getPbImage } from '@/api/getPbImage';
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
          ${this.viewedData?.map((item) => {
            return html`<swiper-slide>
              <img src="${item.photo}" alt="${item.productName}" />
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

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('pageshow', this.handlePageShow.bind(this));
    // this._fetchStorageData();
  }

  _fetchStorageData() {
    const data = JSON.parse(localStorage.getItem('viewedItem'));
    this.viewedData = data;
  }

  handlePageShow() {
    const storedProducts = JSON.parse(localStorage.getItem('viewedItem'));
    this.viewedData = storedProducts;
    this.requestUpdate();
  }
}

customElements.define('recent-component', RecentElement);
