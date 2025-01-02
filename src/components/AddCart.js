import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';
import Swal from 'sweetalert2';

class AddCart extends LitElement {
  static properties = {
    productName: { type: String },
    realPrice: { type: Number },
    price: { type: Number },
    disabled: { type: Boolean },
    count: { type: Number },
    totalPrice: { type: Number },
    savingsAmount: { type: Number },
    productId: { type: String },
    cartData: { type: Object },
    photo: { type: String },
  };

  constructor() {
    super();

    this.productName = '';
    this.price = '';
    this.disabled = true;
    this.count = 1;
    this.totalPrice = '';
    this.savingsAmount = 0;
  }

  static styles = [
    reset,
    a11y,
    css`
      :host {
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;
        transition: all 0.5s;

        z-index: 10000;
      }

      .popup-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10001;
      }

      .popup-bg .add-cart {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 396px;
        height: 316px;
        background-color: var(--white-color, #ffffff);

        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1.75rem;

        border: none;
        box-shadow: var(--below-medium);

        padding: var(--space-3xl) var(--space-2xl);
        border-radius: 16px;
        line-height: var(--light-line-height);

        z-index: 10002;

        .product {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          font-weight: var(--text-semi-bold);

          .product-name {
            height: 48px;
          }

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
    `,
  ];

  connectedCallback() {
    super.connectedCallback();

    // DOM이 완전히 렌더링 된 후, 실행
    setTimeout(() => {
      this.handleTotalPrice(); // 초기 가격 계산
      this.focusFirstElement(); // 첫 포커스 요소에 포커스
    }, 0);

    document.addEventListener('keydown', this.handleFocusTrap);
    document.addEventListener('focusin', this.handleFocusRedirect);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleFocusTrap);
    document.removeEventListener('focusin', this.handleFocusRedirect);
  }

  getFocusableElements() {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([type="hidden"]):not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ];

    return Array.from(
      this.renderRoot.querySelectorAll(focusableSelectors.join(','))
    );
  }

  focusFirstElement() {
    const focusableElements = this.getFocusableElements();

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }

  handleFocusTrap = (event) => {
    if (event.key !== 'Tab') return;

    const focusableElements = this.getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        // Shift + Tab: 역방향 이동
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: 순방향 이동
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  handleFocusRedirect = (event) => {
    const focusableElements = Array.from(this.getFocusableElements());
    if (!focusableElements.includes(event.target)) {
      // 외부로 나간 경우 포커스를 강제로 내부 첫 요소로 이동
      event.preventDefault();
      this.focusFirstElement();
    }
  };

  get isAuth() {
    const auth = JSON.parse(localStorage.getItem('auth') ?? '{}');
    return auth.isAuth;
  }

  get productPrice() {
    const productPrice =
      this.renderRoot.querySelector('.product-price').textContent;

    return +productPrice.replace(/[^\d]/g, '');
  }

  handleTotalPrice() {
    const totalPriceNum = this.count * this.productPrice;

    this.totalPrice = totalPriceNum.toLocaleString();
    this.savingsAmount = Math.round(totalPriceNum / 1000);
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
      this.handleTotalPrice();
    }

    this.changeBackground();
  }

  reduceProduct() {
    if (this.count > 1) {
      this.disabled = false;
      this.count--;
    }

    if (this.count >= 1) {
      this.handleTotalPrice();
    }

    this.changeBackground();
  }

  handleBtnCancel() {
    this.remove();
  }

  handlePutCart() {
    if (!this.isAuth) {
      this.remove();
      Swal.fire({
        text: '로그인하셔야 본 서비스를 이용하실 수 있습니다.',
        icon: 'warning',
        confirmButtonText: '확인',
      }).then(() => {
        location.href = '/src/pages/login/';
      });
    } else {
      const user = JSON.parse(localStorage.getItem('auth'));
      const { id: userId } = user.user;

      this.cartData = {
        productId: this.productId,
        productName: this.productName,
        price: this.price,
        realPrice: this.realPrice,
        count: this.count,
        photo: this.photo,
      };

      const cart = JSON.parse(localStorage.getItem(`${userId}`)) || [];
      cart.push(this.cartData);
      localStorage.setItem(userId, JSON.stringify(cart));
      this.remove();
    }
  }

  render() {
    return html/* html */ `
      <div class="popup-bg">
        <dialog class="add-cart" aria-modal="true">
          <div class="product">
            <p class="product-name">${this.productName}</p>

            <div>
              <p class="product-price">${this.realPrice.toLocaleString()}원</p>

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

            <p class="savings">
              ${this.isAuth
                ? `구매 시 ${this.savingsAmount}원 적립`
                : '로그인 후, 적립 혜택 제공'}
            </p>
          </div>
          <!-- total -->

          <div class="button-wrapper">
            <btn-emptied-component
              @click="${this.handleBtnCancel}"
              text="취소"
            ></btn-emptied-component>
            <btn-filled-component
              text="장바구니 담기"
              @click=${this.handlePutCart}
            ></btn-filled-component>
          </div>
          <!-- button-wrapper -->
        </dialog>
        <!-- add-cart -->
      </div>
      <!-- popup-bg -->
    `;
  }
}

customElements.define('add-cart-component', AddCart);
