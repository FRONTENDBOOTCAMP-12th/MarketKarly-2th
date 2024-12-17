import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset.css?inline';
import a11y from '@/base/a11y.css?inline';

class AddCart extends LitElement {
  static properties = {
    disabled: { type: Boolean },
    count: { type: Number },
    totalPrice: { type: String },
  };

  constructor() {
    super();

    this.disabled = true;
    this.count = 1;
    this.totalPrice = '';
  }

  static styles = css`
    .popup-bg {
      position: relative;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
    }

    .add-cart {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 396px;
      height: 292px;
      background-color: var(--white-color, #ffffff);

      display: inline-flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.75rem;
      box-sizing: border-box;

      box-shadow: var(--below-medium);

      padding: var(--space-3xl) var(--space-2xl);
      border-radius: 16px;
      line-height: var(--light-line-height);

      .product {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        font-weight: var(--text-semi-bold);

        > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .product-counter {
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

          button.btn-product-add {
            background-image: url(/icon/plus_disabled_false.png);
          }
        }
      }

      .total {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        p:first-child {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          justify-content: space-between;

          .total-price {
            font-size: var(--font-2xl);
            font-weight: var(--text-bold);
            line-height: var(--extra-light-line-height);
            text-align: right;
          }
        }

        .savings {
          text-align: right;

          &::before {
            display: inline-block;
            content: '적립';

            padding: 0 var(--space-md);
            margin-right: var(--space-lg);
            margin-inline-end: var(--space-lg);

            background-color: var(--accent-color, #fa622f);
            border-radius: 1px;
            color: var(--white-color, #ffffff);
            font-size: var(--font-sm);
            font-weight: var(--text-semi-bold);
            vertical-align: text-top;
          }
        }
      }

      .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  `;

  firstUpdated() {
    this.handleTotalPrice();
  }

  get productPrice() {
    const price = this.renderRoot.querySelector('.product-price').textContent;

    return +price.replace(/[^\d]/g, '');
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

  render() {
    return html/* html */ `
      <style>
        ${reset}
        ${a11y}
      </style>

      <div class="popup-bg">
        <div class="add-cart">
          <div class="product">
            <p class="product-name">[풀무원] 탱탱쫄면 (4개입)</p>

            <div>
              <p class="product-price">4,980원</p>

              <div class="product-counter">
                <button
                  type="button"
                  class="btn-product-reduce"
                  aria-label="수량 줄이기"
                  ?disabled=${this.disabled}
                  @click="${this.reduceProduct}"
                ></button>
                <span>${this.count}</span>
                <button
                  type="button"
                  class="btn-product-add"
                  aria-label="수량 늘리기"
                  @click="${this.addProduct}"
                ></button>
              </div>
            </div>
          </div>
          <!-- product -->

          <div class="total">
            <p>합계<span class="total-price">${this.totalPrice}원</span></p>

            <p class="savings">구매 시 5원 적립</p>
          </div>
          <!-- total -->

          <div class="button-wrapper">
            <button type="button">취소</button>
            <button type="button">장바구니 담기</button>
          </div>
          <!-- button-wrapper -->
        </div>
        <!-- add-cart -->
      </div>
      <!-- popup-bg -->
    `;
  }
}

customElements.define('add-cart', AddCart);
