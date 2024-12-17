import { html, css, LitElement } from 'lit';
import reset from '@/styles/reset';

import { register } from 'swiper/element/bundle';
register(); // Swiper Web Component 등록

class BannerSwiper extends LitElement {
  static styles = [
    reset,
    css`
      .container {
        position: relative;
      }

      swiper-container {
        width: 100%;
        height: auto;
      }

      swiper-slide {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      swiper-slide img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        content: '';
        display: none;
      }

      .swiper-button-prev,
      .swiper-button-next {
        width: auto;
        height: auto;
        background: transparent;
        border: none;
        padding: 0;
        position: absolute;
        z-index: 10;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .swiper-button-prev img,
      .swiper-button-next img {
        width: 50px;
        height: auto;
      }

      .swiper-button-prev {
        left: 15%;
        top: 50%;
        transform: translateY(-50%);
      }
      .swiper-button-next {
        right: 15%;
        top: 50%;
        transform: translateY(-50%) scaleX(-1);
      }
    `,
  ];

  render() {
    return html`
      <div class="container">
        <swiper-container
          id="swiper"
          autoplay
          delay="10000"
          loop
          slides-per-view="1"
          centered-slides
        >
          <swiper-slide>
            <a href="/">
              <img src="/image/banner01.webp" alt="컬리 과일 가게" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/">
              <img src="/image/banner02.webp" alt="이 달의 카드 혜택" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/">
              <img src="/image/banner03.webp" alt="컬리 퍼플 위크" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/">
              <img src="/image/banner04.webp" alt="특가 한 눈에 보기" />
            </a>
          </swiper-slide>
        </swiper-container>
        <button
          class="swiper-button-prev"
          @click=${this.prevSlide}
          aria-label="이전 슬라이드"
        >
          <img src="/icon/arrow.svg" alt="이전" />
        </button>
        <button
          class="swiper-button-next"
          @click=${this.nextSlide}
          aria-label="다음 슬라이드"
        >
          <img src="/icon/arrow.svg" alt="다음" />
        </button>
      </div>
    `;
  }

  firstUpdated() {
    this.swiperEl = this.shadowRoot.getElementById('swiper');
    this.swiperEl.initialize(); // Swiper 초기화
  }

  prevSlide() {
    this.swiperEl.swiper.slidePrev();
  }

  nextSlide() {
    this.swiperEl.swiper.slideNext();
  }
}

customElements.define('banner-component', BannerSwiper);
