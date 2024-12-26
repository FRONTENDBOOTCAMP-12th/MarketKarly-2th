import '@/components/Card';
import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import { register } from 'swiper/element';
import { getPbImage } from '../api/getPbImage';
import pb from '../api/pocketbase';

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
    `,
  ];

  static properties = {
    title: { type: String },
    data: { type: Array },
  };

  constructor() {
    super();

    this.title = '';
    this.data = [];
    this.isFetching = false; // 요청 중인지 여부를 확인하는 플래그
  }

  async firstUpdated() {
    await this.renderCardProducts();

    this.swiperEl = this.renderRoot.querySelector('.swiper');
    this.swiperEl.initialize();
  }

  connectedCallback() {
    super.connectedCallback(); // 추가 호출 없이 기본 기능만 유지
  }

  nextSlide() {
    // swiper 초기화 여부 확인
    if (this.swiperEl?.swiper) {
      this.swiperEl.swiper.slideNext();
    }
  }

  async renderCardProducts() {
    if (this.isFetching) return; // 이미 요청 중이면 새 요청을 중단
    this.isFetching = true;

    try {
      const response = await pb.collection('products').getFullList(
        { perPage: 50 },
        { cancelPrevious: false } // 자동 취소 비활성화
      );

      console.log(response);

      this.data = response;

      // Swiper 업데이트
      this.requestUpdate().then(() => {
        if (this.swiperEl?.swiper) {
          this.swiperEl.swiper.update();
        }
      });
    } catch (err) {
      console.error('에러발생: ', err);
    }
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
          ${this.data.map(
            (item) => html`
              <swiper-slide>
                <card-component
                  photoURL="${getPbImage(item)}"
                  deliveryType="${item.deliveryType}"
                  productName="${item.productName}"
                  discount="${item.discount}"
                  realPrice="${Math.floor(
                    item.price - item.price * (item.discount / 100)
                  ).toFixed()}"
                  price="${item.price}"
                  description="${item.description}"
                  .tagOnly="${item.kalitOnly}"
                  .tagLimited="${item.limited}"
                ></card-component>
              </swiper-slide>
            `
          )}
        </swiper-container>
        <button @click=${this.nextSlide} aria-label="옆으로 넘기기"></button>
      </section>
    `;
  }
}

customElements.define('products-swiper-component', ProductsSwiper);
