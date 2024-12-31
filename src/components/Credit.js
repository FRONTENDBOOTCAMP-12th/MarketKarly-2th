import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';

class Credit extends LitElement {
  static styles = [
    reset,
    a11y,
    css`
      .credit-component {
        width: 284px;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }

      .credit-component .credit-info {
        width: ;

        .credit-location {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: var(--space-2xl);
          border: 1px solid var(--gray-color-100, #e1e1e1);

          h3 {
            display: flex;
            align-items: center;

            width: 100%;
            color: var(--black-color, #000000);
            font-size: var(--font-md);
            font-weight: var(--text-semi-bold);
            text-align: left;
          }
          h3 > span {
            display: inline-block;
            width: 36px;
            height: 36px;
            background-image: url(/icon/map.svg);
            background-repeat: no-repeat;
            background-position: center center;
          }

          div {
            width: 100%;
          }

          .address {
            color: var(--black-color, #000000);
            font-size: var(--font-md);
            font-weight: var(--text-semi-bold);
          }

          .delivery-type {
            color: var(--primary-color, #283198);
            font-size: var(--font-sm);
            font-weight: var(--text-semi-bold);
          }
        }

        .credit-price {
          width: 100%;
          background-color: var(--gray-color-50, #f9f9f9);
          border: 1px solid var(--gray-color-100, #e1e1e1);
          padding: var(--space-2xl);

          .detail-price {
            width: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;

            padding-bottom: var(--space-3xl);
            padding-block-end: var(--space-3xl);

            li {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;

              font-size: var(--font-md);
              font-weight: var(--text-regular);
              line-height: var(--regular-line-height);

              span {
                font-size: var(--font-md);
                font-weight: var(--text-semi-bold);
                line-height: var(--light-line-height);
              }
            }
          }

          .payment {
            div {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;

              margin: var(--space-3xl) 0 var(--space-lg);
            }

            div > span:nth-child(1) {
              font-size: var(--font-md);
              font-weight: var(--text-regular);
              line-height: var(--regular-line-height);
            }

            div > .payment-amount {
              color: var(--black-color, #000000);
              font-size: var(--font-2xl);
              font-weight: var(--text-bold);
              line-height: var(--extra-light-line-height);
            }
            div > .payment-amount span {
              color: var(--black-color, #000000);
              font-size: var(--font-md);
              font-weight: var(--text-semi-bold);
              line-height: var(--light-line-height);
            }

            .savings {
              font-size: var(--font-sm);
              font-weight: var(--text-semi-bold);
              line-height: var(--light-line-height);
              text-align: right;
            }
            .savings::before {
              display: inline-block;
              content: '적립';

              padding: 0 var(--space-md);
              margin-right: var(--space-md);
              margin-inline-end: var(--space-md);

              background-color: var(--accent-color, #fa622f);
              border-radius: 1px;
              color: var(--white-color, #ffffff);
              font-size: var(--font-sm);
              font-weight: var(--text-semi-bold);
              vertical-align: text-top;
            }
          }
        }
      }

      .credit-component > div {
        width: 100%;
      }

      .credit-component .credit-notice {
        color: var(--gray-color-400, #898989);
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);
      }
    `,
  ];

  render() {
    return html/* html */ `
      <div class="credit-component">
        <div class="credit-info">
          <div class="credit-location">
            <h3><span></span>배송지</h3>

            <div class="address">
              서울 중랑구 면목로 42길 11 (행운빌딩) 603호
            </div>

            <div class="delivery-type">샛별배송</div>

            <div>
              <btn-emptied-component
                text="배송지 변경"
                width="100%"
              ></btn-emptied-component>
            </div>
          </div>
          <!-- credit-location -->

          <div class="credit-price">
            <ul class="detail-price">
              <li>
                <p>상품금액</p>
                <p>40,680<span>원</span></p>
              </li>
              <li>
                <p>상품할인금액</p>
                <p>-4,651<span>원</span></p>
              </li>
              <li>
                <p>배송비</p>
                <p>+3,000<span>원</span></p>
              </li>
            </ul>

            <div class="payment">
              <div>
                <span>결제예졍금액</span>
                <span class="payment-amount">40,680<span>원</span></span>
              </div>

              <p class="savings">최대 36원 적립 일반 0.1%</p>
            </div>
          </div>
          <!-- credit-price -->
        </div>
        <!-- credit-info -->

        <div>
          <btn-filled-component
            text="주문하기"
            width="100%"
          ></btn-filled-component>
        </div>
        <!-- button -->

        <p class="credit-notice">
          쿠폰/적립금은 주문서에서 사용 가능합니다. <br />
          [주문완료] 상태일 경우에만 주문 취소 가능합니다. <br />
          [마이컬리 > 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.<br />
          쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종
          산정됩니다.<br />
          상품별로 적립금 지급 기준이 다를 수 있습니다. (상품 상세 페이지에서
          확인 가능합니다)
        </p>
        <!-- credit-notice -->
      </div>
      <!-- credit-component -->
    `;
  }
}

customElements.define('credit-component', Credit);
