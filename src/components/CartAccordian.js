import { LitElement, html, css } from 'lit';
import '@/components/Input/CheckboxGroup';
import '@/components/Input/InputCheckbox';
import reset from '@/styles/reset';

class CartAccordian extends LitElement {
  static styles = [
    reset,
    css`
      .wrapper {
        width: 742px;
        .select-all {
          .control {
            display: flex;
            flex-direction: row;
          }

          .separate {
            font-weight: var(--text-extra-light);
          }

          .selectedDelete {
            border: none;
            background: inherit;
            cursor: pointer;
            margin-left: 4px;

            font-size: var(--font-md);
            font-weight: var(--text-semi-bold);
            padding: 0;
          }

          & > article {
            padding-block: var(--space-xl);
          }

          & > article:nth-of-type(1) {
            border-block: 1px solid var(--content-text-color, #333);
            margin-top: var(--space-xl);
          }

          & > article:nth-of-type(n + 2) {
            border-bottom: 1px solid var(--content-text-color, #333);
          }

          & > article:nth-of-type(3) {
            margin-bottom: var(--space-xl);
          }
        }
        .category {
          display: flex;
          align-items: center;

          padding-right: var(--space-md);

          img {
            margin-right: var(--space-lg);
          }

          span {
            margin-right: auto;
            font-weight: var(--text-semi-bold);
          }

          button {
            background-color: transparent;
            border: none;
            padding: 0;

            img {
              rotate: -90deg;
              cursor: pointer;
            }
          }
        }

        .detail-product {
          margin-top: var(--space-5xl);
        }

        .item {
          display: flex;
          align-items: center;
          margin-top: var(--space-lg);

          .img-figure {
            display: flex;
            align-items: center;
            flex: 1;

            figcaption {
              font-weight: var(--text-semi-bold);
              margin-left: var(--space-md);
            }
          }

          .count-button {
            display: flex;
            align-items: center;
            border: 1px solid var(--gray-color-200, #c4c4c4);
            height: 30px;

            .count-down {
              background-image: url('/icon/minus_disabled_false.png');
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              width: 30px;
              height: 30px;
              background-color: transparent;
              border: none;
            }
            .disabled {
              background-image: url('/icon/minus_disabled_true.png');
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              width: 30px;
              height: 30px;
              background-color: transparent;
              border: none;
            }

            .count-up {
              background-image: url('/icon/plus_disabled_false.png');
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              width: 30px;
              height: 30px;
              background-color: transparent;
              border: none;
            }

            .count-number {
              text-align: center;
              width: 30px;
            }
          }

          .price {
            width: 150px;
            text-align: right;
            font-weight: var(--text-semi-bold);
          }

          .delete {
            width: 30px;
            height: 30px;
            background: url('/icon/review-close.svg') center no-repeat;
            padding: 0;
            border: none;
            background-color: transparent;
          }
        }
      }

      .is-hide {
        display: none;
      }
    `,
  ];

  static properties = {
    count: { type: Number },
    cartData: { type: Object },
    userId: { type: String },
    selectedItems: { type: Array },
  };

  constructor() {
    super();
    this.userId = JSON.parse(localStorage.getItem('auth'))?.user.id;
    this.cartData = JSON.parse(localStorage.getItem(this.userId)) || [];
    this.selectedItems = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this.cartData = JSON.parse(localStorage.getItem(this.userId));
  }

  _handleCountDown(e) {
    if (this.count === 1) return;
    // this.count--;

    let count = +e.target.nextElementSibling.textContent;
    count--;
  }

  _handleCountUp() {
    this.count++;
  }

  _handleHide(e) {
    const target = e.target.closest('div').nextElementSibling;
    if (!target) return;

    target.classList.toggle('is-hide');
  }

  _handleDelete(e) {
    const target = e.target.closest('.item');
    const childNum = target.parentNode.children.length;

    if (childNum === 1) {
      target.parentElement.remove();
    } else {
      target.remove();
    }
  }

  _handleCheckboxChange(e, product) {
    const isChecked = e.detail.checked;
    console.log(isChecked, product);

    if (isChecked) {
      this.selectedItems.push(product);
    } else {
      this.selectedItems = this.selectedItems.filter(
        (item) => item !== product
      );
    }

    console.log(this.selectedItems);
  }

  _handleDeleteSelected() {
    this.cartData = this.cartData.filter(
      (product) => !this.selectedItems.includes(product)
    );
    this.selectedItems = [];

    this.requestUpdate();
    localStorage.setItem(this.userId, JSON.stringify(this.cartData)); // 로컬 스토리지 업데이트
  }

  render() {
    return html`
      <section class="wrapper">
        <checkbox-group-component class="select-all">
          <div class="control">
            <checkbox-component check value="all"
              >전체선택 (1/3)
              <span class="separate">|</span></checkbox-component
            >
            <button class="selectedDelete" @click=${this._handleDeleteSelected}>
              선택삭제
            </button>
          </div>

          <article class="cold">
            <div class="category">
              <img class="cold-food" src="/icon/cold-food.svg" alt="냉장식품" />
              <span>냉장 식품</span>
              <button type="button" @click=${this._handleHide}>
                <img src="/icon/arrow-right.svg" alt="펼쳐보기" />
              </button>
            </div>
            ${this.cartData &&
            html`
              <div class="detail-product">
                ${this.cartData.map((product) => {
                  return html`
                    <div class="item">
                      <checkbox-component
                        @checked=${(e) =>
                          this._handleCheckboxChange(e, product)}
                        ?checked=${this.selectedItems.includes(product)}
                      ></checkbox-component>
                      <figure class="img-figure">
                        <img src=${product.photo} width="60" alt="test" />
                        <figcaption>${product.productName}</figcaption>
                      </figure>
                      <div class="count-button">
                        <button
                          @click=${this._handleCountDown}
                          type="button"
                          class=${this.count > 1 ? 'count-down' : 'disabled'}
                        ></button>
                        <span class="count-number">${product.count}</span>
                        <button
                          @click=${this._handleCountUp}
                          type="button"
                          class="count-up"
                        ></button>
                      </div>
                      <span class="price"
                        >${(
                          product.realPrice * product.count
                        ).toLocaleString()}원</span
                      >
                      <button
                        class="delete"
                        type="button"
                        @click=${this._handleDelete}
                      ></button>
                    </div>
                  `;
                })}
              </div>
            `}
          </article>
          <article class="freeze">
            <div class="category">
              <img src="/icon/freeze-food.svg" alt="냉장식품" />
              <span>냉동 식품</span>
              <button type="button" @click=${this._handleHide}>
                <img src="/icon/arrow-right.svg" alt="펼쳐보기" />
              </button>
            </div>
          </article>
          <article class="warm">
            <div class="category">
              <img src="/icon/warm-food.svg" alt="냉장식품" />
              <span>상온 식품</span>
              <button type="button" @click=${this._handleHide}>
                <img src="/icon/arrow-right.svg" alt="펼쳐보기" />
              </button>
            </div>
          </article>
        </checkbox-group-component>
      </section>
    `;
  }
}

customElements.define('cart-accordian-component', CartAccordian);
