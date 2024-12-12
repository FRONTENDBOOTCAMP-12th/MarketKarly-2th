import { html, css, LitElement } from 'lit';
import reset from '../../styles/reset.css?inline';
import swiperCSS from './Banner.css?inline';

import { register } from 'swiper/element/bundle';
register(); // Swiper Web Component 등록

class BannerSwiper extends LitElement {
  render() {
    return html`
      <style>
        ${reset}
        ${swiperCSS}
      </style>
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
              <img src="/image/banner01.webp" alt="메인배너 이미지1" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/">
              <img src="/image/banner02.webp" alt="메인배너 이미지2" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/">
              <img src="/image/banner03.webp" alt="메인배너 이미지3" />
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="/">
              <img src="/image/banner04.webp" alt="메인배너 이미지4" />
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

customElements.define('banner-swiper', BannerSwiper);
