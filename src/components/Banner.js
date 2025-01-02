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

      .swiper-button-prev,
      .swiper-button-next {
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
        left: 20%;
        top: 50%;
        transform: translateY(-50%);
      }
      .swiper-button-next {
        right: 20%;
        top: 50%;
        transform: translateY(50%);
        rotate: 180deg;
      }
    `,
  ];

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

  renderSlides() {
    const slides = [
      {
        src: '/image/banner01.webp',
        alt: '부드러운 달콤함 컬리 과일 가게 앵콜 특가:멜론 9,900원 10월20일부터 10월27일까지',
      },
      {
        src: '/image/banner02.webp',
        alt: '한눈에 보는 이달의 카드 혜택 최대 10% 카드 쿠폰 받기 10월1일부터 10월31일까지',
      },
      {
        src: '/image/banner03.webp',
        alt: '컬리 퍼플 위크 적립률 UP+3종 쿠폰팩, 더 풍성해진 혜택 10월24일부터 10월28일까지',
      },
      {
        src: '/image/banner04.webp',
        alt: '컬리 장보기의 특권 이 주의 특가 한 눈에 보기 우측 상단 [특가/혜택]에서 확인하세요!',
      },
    ];

    return slides.map(
      (slide) => html`
        <swiper-slide>
          <a href="/">
            <img src="${slide.src}" alt="${slide.alt}" />
          </a>
        </swiper-slide>
      `
    );
  }

  render() {
    return html`
      <div class="container">
        <swiper-container
          id="swiper"
          autoplay
          loop
          speed="4000"
          slides-per-view="1"
        >
          ${this.renderSlides()}
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
}

customElements.define('banner-component', BannerSwiper);
