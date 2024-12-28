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
      .product-detail-main {
        width: 1050px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;

        margin: var(--space-7xl) auto;
        line-height: var(--light-line-height);

        .product-image {
          width: 400px;

          img {
            width: 100%;
          }
        }

        .product-content {
          width: 560px;

          .product-intro {
            width: 100%;

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

            h2 {
              font-size: var(--font-2xl);
              font-weight: var(--text-semi-bold);
              margin-bottom: var(--space-sm);
              margin-block-end: var(--space-sm);
            }
            .product-headline {
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
            width: 100%;

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

            .product-option .product-name {
              color: var(--gray-color-500, #6b6b6b);
              font-size: var(--font-sm);
              font-weight: var(--text-semi-bold);
            }
            .product-option > div {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
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
            .product-option > div p {
              color: var(--content-text-color, #333333);
            }
          }

          .product-total {
            width: 100%;

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
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

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

        .tab-menu {
          width: 100%;
          margin-top: var(--space-9xl);
          margin-block-start: var(--space-9xl);

          .tablist {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .tab {
              width: 25%;

              background-color: var(--gray-color-50, #f9f9f9);
              border: 1px solid var(--gray-color-300, #a6a6a6);

              font-weight: var(--text-semi-bold);
              text-align: center;

              &[aria-selected='true'] {
                background-color: var(--white-color, #ffffff);
                border: 1px solid var(--gray-color-100, #e1e1e1);
                border-bottom: none;
                color: var(--primary-color, #283198);
              }

              .focus {
                width: 100%;
                display: block;
                padding-top: var(--space-xl);
                padding-bottom: var(--space-xl);
                padding-block: var(--space-xl);
              }
            }

            .tab:nth-child(1) {
              border-right: none;
            }
            .tab:nth-child(2) {
              border-right: none;
            }
            .tab:nth-child(3) {
              .review-count {
                display: inline-block;
                margin-left: var(--space-md);
                margin-inline-start: var(--space-md);

                font-size: var(--font-sm);
                font-weight: var(--text-regular);
                line-height: var(--regular-line-height);
              }
            }
            .tab:nth-child(4) {
              border-left: none;
            }
          }
        }

        .tabpanel-wrapper {
          .tabpanel {
          }

          .tabpanel.product-description {
            padding: var(--space-7xl) 0 6rem;

            img {
              width: 100%;
            }

            .karly-product {
              margin-top: 4.75rem;
              margin-block-start: 4.75rem;

              h3 {
                padding-bottom: var(--space-6xl);
                padding-block-end: var(--space-6xl);
                border-bottom: 1px solid var(--gray-color-100, #e1e1e1);

                font-size: 3.125rem;
                font-weight: var(--text-bold);
                line-height: var(--extra-light-line-height);
                text-align: center;
              }
              h3 > span {
                display: block;
                font-size: var(--font-2xl);
                font-weight: var(--text-semi-bold);
                line-height: var(--light-line-height);
              }

              p {
                padding-top: var(--space-4xl);
                padding-block-start: var(--space-4xl);
                text-align: left;
              }
            }

            .karly-point {
              margin-top: 6rem;
              margin-block-start: 6rem;

              .tit-karly-point {
                position: relative;

                margin-bottom: 4.25rem;
                margin-block-end: 4.25rem;

                font-size: 3.125rem;
                font-weight: var(--text-bold);
                line-height: var(--extra-light-line-height);
                text-align: center;
              }
              .tit-karly-point::before {
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);

                content: '';
                width: 27%;
                height: 1px;
                background-color: var(--gray-color-100, #e1e1e1);
              }
              .tit-karly-point::after {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);

                content: '';
                width: 27%;
                height: 1px;
                background-color: var(--gray-color-100, #e1e1e1);
              }

              img {
                width: 1010px;

                margin: 0 auto;
              }
            }
          }

          .tabpanel.product-detail {
            .why-karly {
              padding: 4.5rem 0 5.25rem;
              border-top: 1px solid var(--gray-color-100, #e1e1e1);
              text-align: center;

              .tit-why-karly {
                margin-bottom: var(--space-6xl);
                margin-block-end: var(--space-6xl);

                font-size: var(--font-2xl);
                font-weight: var(--text-bold);
                line-height: var(--extra-light-line-height);
              }

              dl {
                display: inline-flex;
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
                flex-wrap: wrap;

                margin: 0 auto;
              }
              dl > div {
                width: 315px;

                padding-top: 3.5rem;
                padding-block-start: 3.5rem;
              }

              dl div dt {
                position: relative;
                width: 100%;
                height: 88px;

                margin-bottom: var(--space-3xl);
                margin-block-end: var(--space-3xl);

                color: var(--primary-color, #283198);
                font-size: var(--font-lg);
                font-weight: var(--text-semi-bold);
              }
              .why-strict-committee::before {
                content: '';
                display: block;
                width: 40px;
                height: 40px;

                margin: 0 auto var(--space-xl);
                background-image: url(/public/icon/why_strict_committee.svg);
                background-repeat: no-repeat;
                background-position: center center;
              }

              .why-karly-only::before {
                content: '';
                display: block;
                width: 40px;
                height: 40px;

                margin: 0 auto var(--space-xl);
                background-image: url(/public/icon/why_karly_only.svg);
                background-repeat: no-repeat;
                background-position: center center;
              }

              .why-cold-delivery::before {
                content: '';
                display: block;
                width: 40px;
                height: 40px;

                margin: 0 auto var(--space-xl);
                background-image: url(/public/icon/why_cold_delivery.svg);
                background-repeat: no-repeat;
                background-position: center center;
              }

              .why-best-price::before {
                content: '';
                display: block;
                width: 40px;
                height: 40px;

                margin: 0 auto var(--space-xl);
                background-image: url(/public/icon/why_best_price.svg);
                background-repeat: no-repeat;
                background-position: center center;
              }

              .why-green-distribution::before {
                content: '';
                display: block;
                width: 40px;
                height: 40px;

                margin: 0 auto var(--space-xl);
                background-image: url(/public/icon/why_green_distribution.svg);
                background-repeat: no-repeat;
                background-position: center center;
              }

              dl div dd {
                width: 100%;

                font-size: var(--font-md);
                font-weight: var(--text-regular);
                line-height: var(--regular-line-height);
                word-break: keep-all;
              }
            }
          }

          .tabpanel.product-review {
          }

          .tabpanel.product-inquiry {
          }
        }
      }
    `,
  ];

  constructor() {
    super();

    this.productName = '[풀무원] 탱탱쫄면 (4개입)';
    this.price = '4,980';
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
      <div class="product-detail-main">
        <figure class="product-image">
          <img src="/image/product01.webp" alt="" />
          <figcaption class="sr-only">${this.productName} 사진</figcaption>
        </figure>
        <!-- figure -->

        <div class="product-content">
          <div class="product-intro">
            <p class="delivery-type">샛별배송</p>

            <div class="product-title">
              <h2>${this.productName}</h2>
              <p class="product-headline">튀기지 않아 부담 없는 매콤함</p>
            </div>

            <p class="product-price">${this.price}<span>원</span></p>

            <p class="savings-description">
              로그인 후, 적립 혜택이 제공됩니다.
            </p>
          </div>
          <!-- product-intro -->

          <table class="product-info">
            <caption class="sr-only">
              상품 정보표
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
                    <p class="product-name">${this.productName}</p>

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

        <nav class="tab-menu">
          <ul class="tablist" role="tablist">
            <li
              class="tab"
              role="tab"
              id="tab-1"
              aria-selected="true"
              aria-controls="tabpanel-1"
            >
              <span class="focus">상품설명</span>
            </li>

            <li
              class="tab"
              role="tab"
              id="tab-2"
              aria-selected="false"
              aria-controls="tabpanel-2"
            >
              <a href="#tabpanel-2" class="focus">상세정보</a>
            </li>

            <li
              class="tab"
              role="tab"
              id="tab-3"
              aria-selected="false"
              aria-controls="tabpanel-3"
            >
              <span class="focus">
                후기
                <span class="review-count">(1,207)</span>
              </span>
            </li>

            <li
              class="tab"
              role="tab"
              id="tab-4"
              aria-selected="false"
              aria-controls="tabpanel-4"
            >
              <span class="focus">문의</span>
            </li>
          </ul>
        </nav>
        <!-- tab-menu -->

        <div class="tabpanel-wrapper">
          <div
            class="tabpanel product-description"
            role="tabpanel"
            aria-labelledby="tab-1"
            id="tabpanel-1"
          >
            <figure>
              <img src="/image/product01.webp" alt="" />
              <figcaption class="sr-only">${this.productName} 사진</figcaption>
            </figure>

            <div class="karly-product">
              <h3>
                <span>튀기지 않아 부담 없는 매콤함</span>
                [풀무원] 탱탱쫄면
              </h3>

              <p>
                쫄면의 진가는 매콤새콤한 양념과 탱탱한 면발에서 찾을 수 있지요.
                풀무원은 이 맛을 더 부담 없이 즐길 수 있도록 튀기지 않고 만든
                탱탱쫄면을 선보입니다. 밀가루와 감자 전분을 적절히 배합해 탄력이
                좋고, 입에 넣었을 때는 찰지게 씹히죠. 고추장을 넣어 숙성한
                비빔장은 자연스럽고 깊은 맛을 냅니다. 간단하게 조리해 마지막 한
                가닥까지 탱탱한 식감을 즐겨보세요. 취향에 따라 다양한 고명을
                올려 드셔도 좋아요.
              </p>
            </div>

            <div class="karly-point">
              <p class="tit-karly-point">Karly's Check Point</p>

              <img
                src="/public/image/karly_check_point.svg"
                alt="컬리 체크 포인트 3가지 이미지"
              />
            </div>
          </div>
          <!-- product-description -->

          <div
            class="tabpanel product-detail"
            role="tabpanel"
            aria-labelledby="tab-2"
            id="tabpanel-2"
          >
            <img
              src="/public/image/product_detail_jjolmeon.svg"
              alt="탱탱쫄면 상세정보 이미지"
            />

            <div class="why-karly">
              <p class="tit-why-karly">WHY KARLY</p>
              <dl>
                <div>
                  <dt class="why-strict-committee ">깐깐한 상품위원회</dt>
                  <dd>
                    나와 내 가족이 먹고 쓸 상품을 고르는<br />
                    마음으로 매주 상품을 직접 먹어보고,<br />
                    경험해보고 성분, 맛 안정성 등 다각도의<br />
                    기준을 통과한 상품만을 판매합니다.
                  </dd>
                </div>

                <div>
                  <dt class="why-karly-only ">차별화된 Karly Only 상품</dt>

                  <dd>
                    전국 각지와 해외의 훌륭한 생산자가<br />
                    믿고 선택하는 파트너, 마켓칼리.<br />
                    3천여 개가 넘는 칼리 단독 브랜드, 스펙의<br />
                    Karly Only 상품을 믿고 만나보세요.
                  </dd>
                </div>

                <div>
                  <dt class="why-cold-delivery ">신선한 풀콜드체인 배송</dt>

                  <dd>
                    온라인 업계 최초로 산지에서 문 앞까지<br />
                    상온, 냉장, 냉동 상품을 분리 포장 후<br />
                    최적의 온도를 유지하는 냉장 배송 시스템,<br />
                    풀콜드체인으로 상품을 신선하게 전해드립니다.
                  </dd>
                </div>

                <div>
                  <dt class="why-best-price ">
                    고객, 생산자를 위한 최선의 가격
                  </dt>

                  <dd>
                    매주 대형 마트와 주요 온라인 마트의 가격<br />
                    변동 상황을 확인해 신선식품은 품질을<br />
                    타협하지 않는 선에서 최선의 가격으로<br />
                    가공식품은 언제나 합리적인 가격으로<br />
                    정기 조정합니다.
                  </dd>
                </div>

                <div>
                  <dt class="why-green-distribution ">
                    환경을 생각하는 지속 가능한 유통
                  </dt>

                  <dd>
                    친환경 포장재부터 생산자가 상품에만<br />
                    집중할 수 있는 직매입 유통구조까지,<br />
                    지속 가능한 유통을 고민하며 컬리를 있게<br />
                    하는 모든 환경(생산자,커뮤니티,직원)이<br />
                    더 나아질 수 있도록 노력합니다.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <!-- product-detail -->

          <div
            class="tabpanel product-review"
            role="tabpanel"
            aria-labelledby="tab-3"
            id="tabpanel-3"
          >
            <p>상품후기</p>
          </div>
          <!-- product-review -->

          <div
            class="tabpanel product-inquiry"
            role="tabpanel"
            aria-labelledby="tab-4"
            id="tabpanel-4"
          >
            <p>상품문의</p>
          </div>
          <!-- product-inquiry -->
        </div>
        <!-- tabpanel-wrapper -->
      </div>
      <!-- product-detail -->
    `;
  }
}

customElements.define('product-detail-page', ProductDetail);
