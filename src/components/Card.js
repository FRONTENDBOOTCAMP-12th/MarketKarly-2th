import a11y from '@/base/a11y';
import '@/components/AddCart';
import reset from '@/styles/reset';
import { LitElement, css, html } from 'lit';

class Card extends LitElement {
  static properties = {
    collectionId: { type: String },
    id: { type: String },
    photoURL: { type: String },
    deliveryType: { type: String },
    productName: { type: String },
    discount: { type: Number },
    realPrice: { type: Number },
    price: { type: Number },
    description: { type: String },
    tagOnly: { type: Boolean },
    tagLimited: { type: Boolean },
    viewedItemKey: { type: String },
    viewedItem: { type: Object },
  };

  constructor() {
    super();

    this.collectionId = '';
    this.id = '';
    this.photoURL = '';
    this.deliveryType = '';
    this.productName = '';
    this.discount = 0;
    this.realPrice = 0;
    this.price = 0;
    this.description = '';
    this.tagOnly = false;
    this.tagLimited = false;
    this.viewedItemKey = 'viewedItem';
    this.viewedItem = [];
  }

  static styles = [
    reset,
    a11y,
    css`
      .card-component {
        cursor: pointer;
        display: inline-flex;
        flex-direction: column;
      }

      .card-component figure {
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

      .card-component .content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        padding-top: 1rem;
        cursor: pointer;

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

            .real-price {
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

        .description {
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
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    // 로컬스토리지에 저장된 item 가져오기
    const now = new Date().getTime();
    const viewedItem = localStorage.getItem(this.viewedItemKey);

    if (viewedItem) {
      this.viewedItem = JSON.parse(viewedItem);
      // 24시간 이후에 로컬 스토리지에서 제거
      this.viewedItem = this.viewedItem.filter((item) => item.expTime > now);
    }
  }

  handleAddCart = (e) => {
    e.stopPropagation();

    const popupAddCart = document.createElement('add-cart-component');

    document.body.appendChild(popupAddCart);

    // const realPrice = this.realPrice.toLocaleString();
    // const productName = this.productName;

    popupAddCart.setAttribute('photo', this.photoURL);
    popupAddCart.setAttribute('productId', this.id);
    popupAddCart.setAttribute('realPrice', this.realPrice);
    popupAddCart.setAttribute('price', this.price);
    popupAddCart.setAttribute('productName', this.productName);
  };

  handleCardClick = (event) => {
    // event.preventDefault();
    this._handleViewedItem();

    const { target } = event;
    let link;

    // button 태그 또는 .add-cart에서 발생하는 버튼 클릭 이벤트는 무시
    if (target.closest('button') || target.closest('.add-cart')) {
      return;
    }

    if (target.tagName === 'IMG') {
      link = target.closest('a');
    } else {
      const contentElement = target.closest('.content');

      if (contentElement) {
        const previousElement = contentElement.previousElementSibling;

        if (previousElement) {
          link = previousElement.firstElementChild;
        }
      }
    }

    if (link) {
      window.location.href = link.href;
      console.log(link);
    } else {
      console.error('error');
    }
  };

  _filterItem(data) {
    return this.viewedItem.filter((item) => item.id !== data.id);
  }

  _handleViewedItem() {
    const data = {
      id: this.id,
      collectionId: this.collectionId,
      photo: this.photoURL,
      productName: this.productName,
      expTime: new Date().getTime() + 1000 * 60 * 60 * 24,
    };

    // 같은 id 값을 갖는 아이템 제거
    this.viewedItem = this._filterItem(data);

    // 최대 7개까지만 렌더링
    if (this.viewedItem.length > 7) {
      this.viewedItem.pop();
    }

    // 가장 앞에 아이템 추가
    this.viewedItem.unshift(data);

    localStorage.setItem(this.viewedItemKey, JSON.stringify(this.viewedItem));
  }

  render() {
    return html/* html */ `
      <div @click=${this.handleCardClick} class="card-component">
        <figure>
          <a href="/src/pages/productDetail/index.html?product=${this.id}">
            <img src="${this.photoURL}" alt="" />
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
            <p class="main-title">${this.productName}</p>
          </div>
          <!-- title -->

          <div class="price">
            <p>
              ${this.discount > 0
                ? html`<span class="discount"
                    >${this.discount}%<span class="sr-only">할인</span></span
                  >`
                : ''}
              <span class="real-price"
                >${this.realPrice.toLocaleString()}원</span
              >
            </p>

            <p class="origin-price">${this.price.toLocaleString()}원</p>
          </div>
          <!-- price -->

          <p class="description">${this.description}</p>
          <!-- description  -->

          <div class="tags">
            ${this.tagOnly === true
              ? html`<span class="tag-only">Kurlit Only</span>`
              : null}
            ${this.tagLimited
              ? html`<span class="tag-limited">한정수량</span>`
              : null}
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
