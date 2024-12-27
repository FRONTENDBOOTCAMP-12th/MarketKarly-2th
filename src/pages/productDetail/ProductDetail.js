import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Button/BtnFilled';

class ProductDetail extends LitElement {
  static properties = {
    productName: { type: String },
    price: { type: String },
    disabled: { type: Boolean },
    count: { type: Number },
    totalPrice: { type: String },
    isToggled: { type: Boolean },
  };

  static styles = [
    reset,
    a11y,
    css`
      .product-detail {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 5.625rem;

        margin: var(--space-7xl) auto;
        line-height: var(--light-line-height);

        figure {
          min-width: 400px;

          img {
            width: 100%;
          }
        }

        .product-content {
          width: 560px;

          .product-intro {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: var(--space-xl);

            margin-bottom: var(--space-2xl);
            margin-block-end: var(--space-2xl);

            .delivery-type {
              color: var(--gray-color-500, #6b6b6b);
              font-size: var(--font-lg);
              font-weight: var(--text-bold);
              line-height: var(--extra-light-line-height);
            }

            .product-name {
              font-size: var(--font-2xl);
              font-weight: var(--text-semi-bold);
              margin-bottom: var(--space-sm);
              margin-block-end: var(--space-sm);
            }
            .product-description {
              color: var(--gray-color-400, #898989);
              font-size: var(--font-md);
              font-weight: var(--text-regular);
              line-height: var(--regular-line-height);
            }

            .product-price {
              font-size: var(--font-2xl);
              font-weight: var(--text-semi-bold);
            }
            .product-price > span {
              font-size: var(--font-md);
              font-weight: var(--text-bold);
              line-height: var(--extra-light-line-height);
              margin-left: var(--space-sm);
              margin-inline-start: var(--space-sm);
            }

            .savings-description {
              color: var(--primary-color, #283198);
              font-size: var(--font-md);
              font-weight: var(--text-semi-bold);
            }
          }

          .product-info {
            width: 560px;

            border-collapse: collapse;
            border-spacing: 0;
            border-block: 1px solid var(--gray-color-100, #e1e1e1);

            tr {
              border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
            }

            th {
              width: 23%;
              padding: var(--space-xl) 0;
              color: var(--gray-color-500, #6b6b6b);
              font-size: var(--font-sm);
              font-weight: var(--text-semi-bold);
              text-align: left;
              vertical-align: top;
            }

            td {
              width: 77%;
              padding: var(--space-xl) 0;
              color: var(--gray-color-500, #6b6b6b);
              font-size: var(--font-sm);
              font-weight: var(--text-semi-bold);
            }
            td > span {
              color: var(--gray-color-400, #898989);
              font-size: var(--font-sm);
              font-weight: var(--text-semi-bold);
            }

            .product-option {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: stretch;
              gap: 0.75rem;
              padding: var(--space-lg) var(--space-lg) var(--space-lg)
                var(--space-xl);
              border: 1px solid var(--gray-color-100, #e1e1e1);
            }

            .product-option > div {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }

            .product-option p {
              color: var(--gray-color-500, #6b6b6b);
              font-size: var(--font-sm);
              font-weight: var(--text-semi-bold);
            }

            .product-option .product-counter {
              width: 84px;
              height: 30px;

              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;

              border: 1px solid var(--gray-color-200, #c4c4c4);

              button {
                padding: 0;
                margin: 0;
                border: none;
                background: none;

                width: 30px;
                height: 30px;
              }

              button.btn-product-reduce {
                background-image: url(/icon/minus_disabled_true.png);
              }

              .product-count {
                color: var(--black-color, #000000);
              }

              button.btn-product-add {
                background-image: url(/icon/plus_disabled_false.png);
              }
            }

            .product-option > div > p {
              color: var(--content-text-color, #333333);
            }
          }

          .product-total {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            gap: 0.5rem;
            padding: var(--space-4xl) 0;

            p {
              color: var(--black-color, #000000);
              font-size: var(--font-md);
              font-weight: var(--text-semi-bold);
              text-align: right;
            }

            .total-price {
              margin: 0 var(--space-sm) 0 var(--space-xl);
              color: var(--black-color, #000000);
              font-size: var(--font-2xl);
              font-weight: var(--text-semi-bold);
            }

            .savings {
              display: inline-block;
              margin-right: var(--space-md);
              margin-inline-end: var(--space-md);
              padding: var(--space-sm) var(--space-md);
              background-color: var(--accent-color, #fa622f);
              color: var(--white-color, #ffffff);
              font-size: var(--font-sm);
              font-weight: var(--text-regular);
              line-height: var(--regular-line-height);
              border-radius: 13px;
            }
          }

          .product-buttons {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 0.75rem;

            button {
              position: relative;
              width: 56px;
              height: 56px;
              padding: 0;
              margin: 0;
              background: none;
              border: 1px solid var(--gray-color-100, #e1e1e1);
              border-radius: 4px;
            }
            button.btn-favorits {
            }
            button.btn-bell {
            }

            .icon {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 36px;
              height: 36px;
            }
          }
        }
      }
    `,
  ];

  constructor() {
    super();

    this.productName = '';
    this.price = '5700';
    this.disabled = true;
    this.count = 1;
    this.totalPrice = '';
    this.isToggled = false;
  }
  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      this.handleTotalPrice();
    }, 0);
  }

  get productPrice() {
    const productPrice =
      this.renderRoot.querySelector('.product-price').textContent;

    return +productPrice.replace(/[^\d]/g, '');
  }

  handleTotalPrice() {
    this.totalPrice = this.productPrice.toLocaleString();
  }

  changeBackground() {
    const btnReduce = this.renderRoot.querySelector('.btn-product-reduce');

    if (this.count > 1) {
      btnReduce.style.backgroundImage = 'url(/icon/minus_disabled_false.png)';
    } else {
      btnReduce.style.backgroundImage = 'url(/icon/minus_disabled_true.png)';
    }
  }

  addProduct() {
    this.disabled = false;
    this.count++;

    if (this.count > 1) {
      this.totalPrice = (this.count * this.productPrice).toLocaleString();
    }

    this.changeBackground();
  }

  reduceProduct() {
    if (this.count > 1) {
      this.disabled = false;
      this.count--;
    }

    if (this.count >= 1) {
      this.totalPrice = (this.count * this.productPrice).toLocaleString();
    }

    this.changeBackground();
  }

  toggleBtnFavorits() {
    this.isToggled = !this.isToggled;
  }

  render() {
    return html`
      <div class="product-detail">
        <figure>
          <img src="/image/product05.webp" alt="" />
          <figcaption class="sr-only">하겐다즈 사진</figcaption>
        </figure>
        <!-- figure -->

        <div class="product-content">
          <div class="product-intro">
            <p class="delivery-type">샛별배송</p>

            <div class="product-title">
              <p class="product-name">
                [하겐다즈] 파인즈 클래식 아이스크림 7종 (택1)
              </p>
              <span class="product-description">고르는 재미, 나누는 기쁨</span>
            </div>

            <p class="product-price">${this.price}<span>원</span></p>

            <p class="savings-description">
              로그인 후, 적립 혜택이 제공됩니다.
            </p>
          </div>
          <!-- product-intro -->

          <table class="product-info">
            <caption class="sr-only">
              상품 정보
            </caption>

            <tbody>
              <tr>
                <th>배송</th>
                <td>
                  샛별배송<br />
                  <span>23시 전 주문시 내일 아침 7시 전 도착</span><br />
                  <span>(대구 부산 울산 샛별배송 운영시간 별도 확인)</span
                  ><br />
                </td>
              </tr>

              <tr>
                <th>판매자</th>
                <td>칼리</td>
              </tr>

              <tr>
                <th>포장타입</th>
                <td>
                  상온 (종이포장)<br />
                  <span>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</span>
                </td>
              </tr>

              <tr>
                <th>판매단위</th>
                <td>1봉</td>
              </tr>

              <tr>
                <th>중량/용량</th>
                <td>123g*4봉</td>
              </tr>

              <tr>
                <th>원산지</th>
                <td>상세페이지 별도표기</td>
              </tr>

              <tr>
                <th>알레르기 정보</th>
                <td>
                  <span>- 대두,밀, 쇠고기 함유</span><br />
                  <span>
                    - 계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우,
                    복숭아, 토마토, 아황산류, 호두, 잣, 닭고기, 오징어,
                    조개류(굴, 전복 ,홍합 포함)를 사용한 제품과 같은
                    제조시설에서 제조
                  </span>
                </td>
              </tr>

              <tr>
                <th>상품 선택</th>
                <td>
                  <div class="product-option">
                    <p>[하겐다즈] 파인즈 클래식 아이스크림 7종 (택1)</p>

                    <div>
                      <div class="product-counter">
                        <button
                          type="button"
                          class="btn-product-reduce"
                          aria-label="수량 줄이기"
                          ?disabled="${this.disabled}"
                          @click="${this.reduceProduct}"
                        ></button>
                        <span class="product-count">${this.count}</span>
                        <button
                          type="button"
                          class="btn-product-add"
                          aria-label="수량 늘리기"
                          @click="${this.addProduct}"
                        ></button>
                      </div>
                      <!-- product-counter -->
                      <p>${this.price}원</p>
                    </div>
                  </div>
                  <!-- product-option -->
                </td>
              </tr>
            </tbody>
          </table>
          <!-- product-info -->

          <div class="product-total">
            <p>
              총 상품금액:<span class="total-price">${this.totalPrice}</span> 원
            </p>
            <p><span class="savings">적립</span>로그인 후, 적립 혜택 제공</p>
          </div>
          <!-- product-total-price -->

          <div class="product-buttons">
            <button
              class="btn-favorits"
              type="button"
              aria-label="찜하기 버튼"
              aria-pressed="${this.isToggled ? 'true' : 'false'}"
              @click="${this.toggleBtnFavorits}"
            >
              <img
                class="icon"
                src=${this.isToggled
                  ? '/icon/favorits_red.svg'
                  : '/icon/favorits.svg'}
                alt=""
              />
            </button>
            <button class="btn-bell" type="button" aria-label="알림 버튼">
              <img class="icon" src="/icon/bell.svg" alt="" />
            </button>
            <btn-filled-component
              text="장바구니 담기"
              width="424px"
            ></btn-filled-component>
          </div>
          <!-- product-buttons -->
        </div>
        <!-- product-content -->
      </div>
      <!-- product-detail -->
    `;
  }
}

customElements.define('product-detail-page', ProductDetail);
