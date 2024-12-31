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
          .separate {
            font-weight: var(--text-extra-light);
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
  };

  constructor() {
    super();
    this.count = 1;
  }

  _handleCountUp() {
    this.count++;
  }

  _handleCountDown() {
    if (this.count === 1) return;
    this.count--;
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

  render() {
    return html`
      <section class="wrapper">
        <checkbox-group-component class="select-all">
          <checkbox-component check value="all"
            >전체선택 (1/3)
            <span class="separate">|</span> 선택삭제</checkbox-component
          >

          <article class="cold">
            <div class="category" >
              <img class="cold-food" src="/icon/cold-food.svg" alt="냉장식품" />
              <span>냉장 식품</span>
              <button type="button" @click=${this._handleHide}>
                <img src="/icon/arrow-right.svg" alt="펼쳐보기" />
              </button>
            </div>
            <div class="detail-product" >
              <div class="item">
                <checkbox-component> </checkbox-component>
                <figure class="img-figure">
                  <img src="/image/product01.webp" width="60" alt="test" />
                  <figcaption>[풀무원] 탱탱쫄면 (4개입)</figcaption>
                </figure>
                <div class="count-button">
                  <button
                  @click=${this._handleCountDown} type="button" 
                  class=${this.count > 1 ? 'count-down' : 'disabled'}></button>
                  <span class="count-number">${this.count}</span>
                  <button @click=${
                    this._handleCountUp
                  } type="button" class="count-up"></button>
                </div>
                <span class="price">${(
                  4980 * this.count
                ).toLocaleString()}원</span>
                <button class="delete" type="button" @click=${
                  this._handleDelete
                }></button>
              </div>
            </div>
          </article>
          <article class="freeze">
            <div class="category" ">
              <img src="/icon/freeze-food.svg" alt="냉장식품" />
              <span>냉동 식품</span>
              <button type="button" @click=${this._handleHide}>
                <img src="/icon/arrow-right.svg" alt="펼쳐보기" />
              </button>
            </div>
          </article>
          <article class="warm" >
            <div class="category">
              <img src="/icon/warm-food.svg" alt="냉장식품" />
              <span>상온 식품</span>
              <button type="button" @click=${this._handleHide}>
                <img src="/icon/arrow-right.svg" alt="펼쳐보기" />
              </button>
            </div>
          </article>
        </checkbox-group-component>
        <checkbox-group-component class="select-all">
          <checkbox-component
            >전체선택 (3/3)
            <span class="separate">|</span> 선택삭제</checkbox-component
          >
        </checkbox-group-component>
      </section>
    `;
  }
}

customElements.define('cart-accordian-component', CartAccordian);
