import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';

class Card extends LitElement {
  constructor() {
    super();
  }

  static styles = [
    reset,
    a11y,
    css`
      .card-component {
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;

        & a {
          display: inline-block;

          figure {
            position: relative;
            width: 249px;

            img {
              width: 100%;
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
        }

        & .content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .title {
            .sub-title {
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

            .only {
              display: inline-block;
              background-color: var(--gray-color-100);
              padding: 4px;
              border-radius: 4px;

              line-height: 1.5;
              color: var(--primary-color);
              font-weight: var(--text-semi-bold);
              font-size: 0.75rem;
            }
            .limited {
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

  render() {
    return html/* html */ `
      <div class="card-component">
        <a href="/">
          <figure>
            <img src="/image/product02.webp" alt="" />
            <figcaption class="sr-only">죠르디 시카 자석 선쿠션</figcaption>

            <button class="add-cart" aria-label="장바구니 담기">
              <img src="/icon/cart.svg" alt="카트 이미지" />
            </button>
          </figure>
        </a>
        <!-- a > figure -->

        <div class="content">
          <div class="title">
            <p class="sub-title">[온더바디] 죠르디 시카 자석 선쿠션</p>

            <p class="main-title">[온더바디] 죠르디 시카 자석 선쿠션</p>
          </div>
          <!-- title -->

          <div class="price">
            <p>
              <span class="discount">50%<span class="sr-only">할인</span></span>
              <span class="current-price">32,500원</span>
            </p>

            <p class="origin-price">24,900원</p>
          </div>
          <!-- price -->

          <p class="discription">CJ즉석밥 고소한 맛의 발아 현미밥</p>
          <!-- discription  -->

          <div class="tags">
            <span class="only">Kurlit Only</span>
            <span class="limited">한정수량</span>
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
