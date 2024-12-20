import '@/components/Card';
import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import { register } from 'swiper/element';

register();

class ProductsSwiper extends LitElement {
  static styles = [
    reset,
    css`
      .recommend {
        position: relative;
        width: 1050px;
        margin: 0 auto;
        padding: var(--space-5xl) 0;

        h2 {
          text-align: center;
          margin: var(--space-5xl) 0;
        }
      }

      button {
        position: absolute;
        top: 260px;
        right: -14px;
        border: none;
        z-index: 1;
        background-image: url('icon/arrow-black.svg');
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        rotate: 180deg;
      }

      .line-banner {
        display: flex;
        justify-content: center;
        margin: var(--space-5xl) 0;
      }
    `,
  ];

  static properties = {
    title: { type: String },
  };

  constructor(title) {
    super();
    this.title = title;
  }

  firstUpdated() {
    this.swiperEl = this.renderRoot.querySelector('.swiper');
    this.swiperEl.initialize();
  }

  nextSlide() {
    this.swiperEl.swiper.slideNext();
  }

  render() {
    return html`
      <section class="recommend">
        <h2>${this.title}</h2>
        <swiper-container
          class="swiper"
          slides-per-view="4"
          loop="true"
          speed="1500"
        >
          <swiper-slide>
            <card-component></card-component>
          </swiper-slide>
          <swiper-slide>
            <card-component></card-component>
          </swiper-slide>
          <swiper-slide>
            <card-component></card-component>
          </swiper-slide>
          <swiper-slide>
            <card-component></card-component>
          </swiper-slide>
          <swiper-slide>
            <card-component></card-component>
          </swiper-slide>
        </swiper-container>
        <button @click=${this.nextSlide} aria-label="옆으로 넘기기"></button>
      </section>
    `;
  }
}

customElements.define('products-swiper-component', ProductsSwiper);
