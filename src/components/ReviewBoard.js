import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Card';
import { register } from 'swiper/element';

register();

class ReviewBoard extends LitElement {
  static styles = [
    reset,
    a11y,
    css`
      button {
        border: none;
        margin: 0;
        padding: 0;
        background: transparent;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: var(--space-7xl) 0;
      }

      .review-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 1050px;
        margin: 0 auto var(--space-5xl);
      }

      .review-content {
        width: 700px;
      }

      .review-title {
        font-weight: var(--text-bold);
        font-size: var(--font-2xl);
        line-height: var(--extra-light-line-height);
        color: var(--black-color);
      }

      .caution {
        margin-top: var(--space-md);
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);
        color: var(--gray-color-500);
      }

      .review-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 155px;
        height: 44px;
        background: var(--primary-color);
        border-radius: 4px;
        border: none;
        font-weight: var(--text-semi-bold);
        color: var(--white-color);
        cursor: pointer;
      }

      .product-list-container {
        width: 1050px;
        margin: 0 auto;
      }

      .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--space-lg);
      }
      .review-benefit,
      .review-benefit-details {
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);
        color: var(--gray-color-500);
      }

      .review-benefit {
        margin-top: var(--space-3xl);
      }

      .review-benefit-details {
        margin-top: var(--space-md);
        font-size: var(--font-sm);
      }
      .total-count {
        font-size: var(--font-sm);
        color: var(--black-color);
        font-weight: var(--text-semi-bold);
      }

      .sorting-standard {
        display: flex;
        align-items: center;
      }

      .choose-standard {
        position: relative;
        padding: 0 var(--space-md);
        font-size: var(--font-sm);
        color: var(--gray-color-300);
        cursor: pointer;
      }

      .choose-standard.active {
        color: var(--gray-color-700);
        font-weight: var(--text-medium);
      }

      .divider::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1.4px;
        height: 12px;
        background-color: var(--gray-color-300);
        opacity: 0.4;
      }

      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: var(--space-5xl);
      }

      .pagination button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        border: 1px solid var(--gray-color-100);
        background: none;
        padding: var(--space-sm);
        cursor: pointer;
      }

      .pagination button:hover {
        background-color: var(--gray-color-50);
      }

      .review-list {
        list-style: none;
        padding: 0;
        margin: var(--space-5xl) 0;
        border-top: 1px solid var(--gray-color-200);
      }

      .review-item {
        border-bottom: 1px solid var(--gray-color-200);
        padding: var(--space-md) 0;
      }

      .review-item a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-size: var(--font-sm);
        color: var(--black-color);
      }

      .review-item a:hover {
        color: var(--primary-color);
      }

      .notice-icon {
        display: inline-block;
        background-color: var(--gray-color-100);
        padding: var(--space-sm);
        border-radius: 4px;
        font-weight: var(--text-semi-bold);
        font-size: var(--font-sm);
        margin-right: var(--space-md);
      }
    `,
  ];

  static properties = {
    activeStandard: { type: String },
  };

  constructor() {
    super();
    this.activeStandard = 'recommended';
    this.totalItems = 5;
  }

  handleStandardClick(standard, event) {
    event.preventDefault();
    this.activeStandard = standard;
    this.requestUpdate();
  }

  render() {
    return html`
      <section class="container">
        <header class="review-header">
          <div class="review-content">
            <h2 class="review-title">상품후기</h2>
            <p class="review-benefit">글후기 50원 적립금 혜택이 있어요.</p>
            <p class="review-benefit-details">
              퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시
              5,000원 추가 적립 후기 작성은 배송완료일로부터 30일 이내
              가능합니다. 작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일
              기준 평균 1~2일 소요)
            </p>
          </div>
          <btn-filled-component
            class="review-button"
            @click=${this.handleSubmit}
            text="등록"
          ></btn-filled-component>
        </header>

        <div class="product-list-container">
          <div class="list-header">
            <div class="total-count">총 ${this.totalItems}건</div>
            <section class="sorting-standard" aria-label="정렬 기준">
              <button
                class="choose-standard ${this.activeStandard === 'recommended'
                  ? 'active'
                  : ''}"
                @click=${(e) => this.handleStandardClick('recommended', e)}
              >
                추천순
              </button>
              <button
                class="choose-standard divider ${this.activeStandard ===
                'newest'
                  ? 'active'
                  : ''}"
                @click=${(e) => this.handleStandardClick('newest', e)}
              >
                신상품순
              </button>
            </section>
          </div>

          <ul class="review-list">
            <li class="review-item">
              <a>
                <span class="notice-icon">공지</span>
                <span>금주의 베스트 후기 안내</span>
              </a>
            </li>
            <li class="review-item">
              <a>
                <span class="notice-icon">공지</span>
                <span>상품 후기 적립금 정책 안내</span>
              </a>
            </li>
          </ul>

          <div class="pagination" aria-label="페이지 이동">
            <button aria-label="이전 페이지">
              <img src="/icon/btn-prev.svg" alt="" />
            </button>
            <button aria-label="다음 페이지">
              <img src="/icon/btn-next.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('review-board-component', ReviewBoard);
