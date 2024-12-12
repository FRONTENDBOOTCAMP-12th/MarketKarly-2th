import { html, css, LitElement } from 'lit';
import reset from '../../styles/reset.css?inline';
import swiperCSS from './swiper.css?inline';

import { register } from 'swiper/element/bundle';
register(); // Swiper Web Component 등록

class MySwiper extends LitElement {
  render() {
    return html`
      <style>
        ${reset}
        ${swiperCSS}
      </style>
      <swiper-container
        id="swiper"
        autoplay
        delay="5000"
        loop
        slides-per-view="1"
        centered-slides
      >
        <swiper-slide
          ><img src="/images/swiper1.png" alt="슬라이드 1"
        /></swiper-slide>
        <swiper-slide
          ><img src="/images/swiper2.png" alt="슬라이드 2"
        /></swiper-slide>
        <swiper-slide
          ><img src="/images/swiper3.png" alt="슬라이드 3"
        /></swiper-slide>
        <swiper-slide
          ><img src="/images/swiper4.png" alt="슬라이드 4"
        /></swiper-slide>

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
      </swiper-container>
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

customElements.define('main-swiper', MySwiper);
