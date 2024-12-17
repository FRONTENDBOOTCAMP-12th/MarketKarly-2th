import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import '@/assets/font/Pretendard.css';
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
        justify-content: center;
        align-items: center;
        gap: 0.375rem;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
        z-index: 999;
        background-color: var(--white-color, #fff);
      }

      .title {
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
      }

      swiper-container {
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
      <style>
        ${reset}
      </style>
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
          loop
          space-between="4"
        >
          <swiper-slide>
            <a href="/" aria-label="product01 상품상세 페이지">
              <img src="/image/product01.webp" alt="최근 본 상품 이미지1" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/" aria-label="product02 상품상세 페이지">
              <img src="/image/product02.webp" alt="최근 본 상품 이미지2" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/" aria-label="product03 상품상세 페이지">
              <img src="/image/product03.webp" alt="최근 본 상품 이미지3" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/" aria-label="product04 상품상세 페이지">
              <img src="/image/product04.webp" alt="최근 본 상품 이미지4" />
            </a>
          </swiper-slide>
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
}

customElements.define('recent-component', RecentElement);
