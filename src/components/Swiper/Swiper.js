import { LitElement, html, css } from 'lit';
import resetCSS from '../../base/reset.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

class MainSwiper extends LitElement {
  static styles = [
    resetCSS,
    css`
      .swiper {
        width: 100%;
        position: relative;
      }

      .swiper .swiper-slide {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        content: '';
        display: none;
      }

      .swiper-button-prev,
      .swiper-button-next {
        width: 50px;
        height: 50px;
        position: absolute;
        z-index: 1;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .swiper-button-prev {
        left: 150px;
      }
      .swiper-button-next {
        right: 150px;
        transform: scaleX(-1);
      }
    `,
  ];

  constructor() {
    super();
  }

  firstUpdated() {
    const swiper = new Swiper(this.shadowRoot.querySelector('.swiper'), {
      autoplay: {
        delay: 5000,
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      pagination: false,
      navigation: {
        prevEl: this.shadowRoot.querySelector('.swiper-button-prev'),
        nextEl: this.shadowRoot.querySelector('.swiper-button-next'),
      },
    });
  }

  render() {
    return html`
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/images/swiper1.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/swiper2.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/swiper3.png" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/images/swiper4.png" alt="" />
          </div>
        </div>

        <div class="swiper-button-prev">
          <div class="material-icons">
            <img src="../../assets/icon/arrow.svg" alt="" />
          </div>
        </div>
        <div class="swiper-button-next">
          <div class="material-icons">
            <img src="../../assets/icon/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('swiper-element', MainSwiper);
