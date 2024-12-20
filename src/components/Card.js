import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/AddCart';
import pb from '../api/pocketbase';

class Card extends LitElement {
  static properties = {
    deliveryType: { type: String },
    brand: { type: String },
    productName: { type: String },
    discount: { type: Number },
    realPrice: { type: Number },
    price: { type: Number },
    description: { type: String },
    tagOnly: { type: String },
    tagLimited: { type: String },
  };

  constructor() {
    super();

    this.deliveryType = '샛별배송';
    this.brand = '온더바디';
    this.productName = '죠르디 시카 자석 선쿠션';
    this.discount = 50;
    this.currentPrice = 32500;
    this.price = 24900;
    this.description = 'CJ즉석밥 고소한 맛의 발아 현미밥';
    this.tagOnly = '';
    this.tagLimited = '';
  }

  static styles = [
    reset,
    a11y,
    css`
      .card-component {
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;

        figure {
          position: relative;
          width: 249px;

          a {
            display: inline-block;

            img {
              width: 100%;
            }
          }

          .add-cart {
            padding: 0;
            margin: 0;
            border: none;
            background: none;

            position: absolute;
            right: 15px;
            bottom: 17px;
          }
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .title {
            .delivery-type {
              margin-bottom: 0.5rem;
              margin-block-end: 0.5rem;

              line-height: 1.5;
              color: var(--gray-color-400, #898989);
              font-weight: var(--text-semi-bold);
              font-size: 0.75rem;
            }
            .main-title {
              line-height: 1.6;
              color: var(--content-text-color, #333333);
              font-weight: var(--text-regular);
              font-size: 1rem;
            }
          }

          .price {
            & p:first-child {
              line-height: 1.5;
              font-weight: var(--text-semi-bold);
              font-size: 1.4rem;

              .discount {
                color: var(--accent-color, #fa622f);
              }

              .current-price {
                color: var(--content-text-color, #333333);
              }
            }

            .origin-price {
              margin-top: 0.5rem;
              margin-block-start: 0.5rem;

              line-height: 1.6;
              color: var(--gray-color-400, #898989);
              font-weight: var(--text-regular);
              font-size: 0.75rem;
              text-decoration: line-through;
            }
          }

          .discription {
            line-height: 1.6;
            color: var(--gray-color-400, #898989);
            font-weight: var(--text-regular);
            font-size: 0.75rem;
          }

          .tags {
            display: flex;
            flex-direction: row;
            align-items: start;
            gap: 0.5rem;

            .tag-only {
              display: inline-block;
              background-color: var(--gray-color-100);
              padding: 4px;
              border-radius: 4px;

              line-height: 1.5;
              color: var(--primary-color);
              font-weight: var(--text-semi-bold);
              font-size: 0.75rem;
            }
            .tag-limited {
              display: inline-block;
              background-color: var(--gray-color-100);
              padding: 4px;
              border-radius: 4px;

              line-height: 1.5;
              color: var(--content-text-color);
              font-weight: var(--text-semi-bold);
              font-size: 0.75rem;
            }
          }
        }
      }
    `,
  ];

  handleAddCart = () => {
    const popup = document.createElement('add-cart-component');

    document.body.appendChild(popup);
    document.body.style.overflow = 'hidden';
  };

  render() {
    return html/* html */ `
      <div class="card-component">
        <figure>
          <a href="/">
            <img src="/image/product02.webp" alt="" />
          </a>
          <figcaption class="sr-only">${this.productName} 사진</figcaption>

          <button
            @click="${this.handleAddCart}"
            class="add-cart"
            aria-label="장바구니 담기"
          >
            <img src="/icon/cart.svg" alt="카트 이미지" />
          </button>
        </figure>
        <!-- figure -->

        <div class="content">
          <div class="title">
            <p class="delivery-type">${this.deliveryType}</p>

            <p class="main-title">[${this.brand}] ${this.productName}</p>
          </div>
          <!-- title -->

          <div class="price">
            <p>
              <span class="discount"
                >${this.discount}%<span class="sr-only">할인</span></span
              >
              <span class="current-price">${this.currentPrice}원</span>
            </p>

            <p class="origin-price">${this.price}원</p>
          </div>
          <!-- price -->

          <p class="discription">${this.description}</p>
          <!-- discription  -->

          <div class="tags">
            <span class="tag-only">Kurlit Only</span>
            <span class="tag-limited">한정수량</span>
          </div>
          <!-- tags -->
        </div>
        <!-- content -->
      </div>
      <!-- card-component -->
    `;
  }
}

customElements.define('card-component', Card);
