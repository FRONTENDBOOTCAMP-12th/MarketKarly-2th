import { LitElement, html, css } from 'lit';
import resetCSS from '../../styles/reset';
import '@/styles/global.css';
import '@/assets/font/Pretendard.css';
import '@/base/a11y.css';

class Card extends LitElement {
  static styles = [
    resetCSS,
    css`
      .card-component {
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;

        font-family: 'Pretendard';

        & a {
          display: inline-block;

          figure {
            position: relative;
            width: 249px;

            img {
              width: 100%;
            }

            .add-cart {
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
              font-size: var(--font-sm);
            }
            .main-title {
              line-height: 1.6;
              color: var(--content-text-color, #333333);
              font-weight: var(--text-regular);
              font-size: var(--font-md);
            }
          }

          .price {
            & p:first-child {
              line-height: 1.5;
              font-weight: var(--text-semi-bold);
              font-size: var(--font-xl);

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
              font-size: var(--font-sm);
              text-decoration: line-through;
            }
          }

          .discription {
            line-height: 1.6;
            color: var(--gray-color-400, #898989);
            font-weight: var(--text-regular);
            font-size: var(--font-sm);
          }

          .tags {
            display: flex;
            flex-direction: row;
            align-items: start;
            gap: 0.5rem;

            .only {
              display: inline-block;
              background-color: var(--gray-color-100);
              padding: 0.25rem;
              border-radius: 0.25rem;

              line-height: 1.5;
              color: var(--primary-color);
              font-weight: var(--text-semi-bold);
              font-size: var(--font-sm);
            }
            .limited {
              display: inline-block;
              background-color: var(--gray-color-100);
              padding: 0.25rem;
              border-radius: 0.25rem;

              line-height: 1.5;
              color: var(--content-text-color);
              font-weight: var(--text-semi-bold);
              font-size: var(--font-sm);
            }
          }
        }
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html/* html */ `
      <div class="card-component">
        <a href="/">
          <figure>
            <img src="/src/assets/image/product02.png" alt="" />
            <figcaption class="sr-only">죠르디 시카 자석 선쿠션</figcaption>

            <div class="add-cart">
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_8923_7651)">
                  <path
                    opacity="0.5"
                    d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45Z"
                    fill="#324FFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.4897 17.29L29.3197 26.52H16.8997L14.7397 17.29H31.4897Z"
                    stroke="white"
                    stroke-width="1.4"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.3797 32.94C28.3186 32.94 29.0797 32.1789 29.0797 31.24C29.0797 30.3012 28.3186 29.54 27.3797 29.54C26.4408 29.54 25.6797 30.3012 25.6797 31.24C25.6797 32.1789 26.4408 32.94 27.3797 32.94Z"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8499 32.94C19.7888 32.94 20.5499 32.1789 20.5499 31.24C20.5499 30.3012 19.7888 29.54 18.8499 29.54C17.911 29.54 17.1499 30.3012 17.1499 31.24C17.1499 32.1789 17.911 32.94 18.8499 32.94Z"
                    stroke="white"
                    stroke-width="1.2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.0298 14.38H14.0498L15.4598 20.36"
                    stroke="white"
                    stroke-width="1.4"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8923_7651">
                    <rect width="45" height="45" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
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

customElements.define('product-card', Card);

// app.append(document.createElement('product-card'));
