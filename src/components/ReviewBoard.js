import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/ReviewModal';
import '@/components/Button/BtnFilled';

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
        align-items: center;
        padding: var(--space-7xl) 0;
      }

      .review-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 1050px;
        margin: 0 auto var(--space-5xl);
      }

      .review-title {
        font-weight: var(--text-bold);
        font-size: var(--font-2xl);
        line-height: var(--extra-light-line-height);
      }

      .review-benefit {
        font-weight: var(--text-bold);
        line-height: var(--light-line-height);
        color: var(--gray-color-900, #151515);
        margin-top: var(--space-lg);
      }

      .caution {
        margin-top: var(--space-sm);
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);
        color: var(--gray-color-500, #6b6b6b);
      }

      .caution li {
        list-style: disc;
        margin-left: var(--space-2xl);
      }

      .review-list {
        border-top: 2px solid var(--gray-color-900, #151515);
        padding: 0;
        margin: var(--space-xl) 0;
        width: 1050px;
        list-style: none;
      }

      .review-item {
        display: flex;
        align-items: center;
        padding: 0;
        width: 1050px;
        height: 58px;
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
      }

      .review-item a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--gray-color-900, #333333);
        width: 100%;
        height: 100%;
        padding: 4px 20px;
        gap: 20px;
      }

      .notice-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--gray-color-100, #e1e1e1);
        border-radius: 1px;
        width: 37px;
        height: 18px;
        padding: 0 8px;
        font-family: 'Pretendard';
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        color: var(--gray-color-900, #333333);
      }

      .review-item span:last-child {
        font-family: 'Pretendard';
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: var(--gray-color-900, #333333);
        height: 24px;
        flex-grow: 1;
      }
      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: var(--space-5xl);
        gap: var(--space-2xl);
      }

      .pagination button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        border: 1px solid var(--gray-color-100, #e1e1e1);
        background: none;
        padding: var(--space-sm);
      }

      .pagination img {
        width: 50px;
        height: 50px;
      }

      .pagination button:hover {
        background-color: var(--gray-color-50, #f9f9f9);
      }
    `,
  ];

  constructor() {
    super();
    this.showModal = false;
  }

  handleSubmit() {
    this.showModal = !this.showModal;
    this.requestUpdate();
  }

  handleModalClose() {
    this.showModal = false;
    this.requestUpdate();
  }

  render() {
    return html`
      <section class="container">
        <header class="review-header">
          <div class="review-content">
            <h2 class="review-title">상품후기</h2>
            <p class="review-benefit">글후기 50원 적립금 혜택이 있어요.</p>
            <ul class="caution">
              <li>
                퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시
                5,000원 추가 적립
              </li>
              <li>후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
              <li>
                작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균
                1~2일 소요)
              </li>
            </ul>
          </div>
          <btn-filled-component
            width="155px"
            height="44px"
            class="btn-ask"
            @click=${this.handleSubmit}
            text="후기 작성"
          ></btn-filled-component>
        </header>
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

        <div class="product-list-container">
          <div class="pagination" aria-label="페이지 이동">
            <button class="btn-prev" aria-label="이전 페이지">
              <img src="/icon/review-left-arrow.svg" alt="" />
            </button>
            <button aria-label="다음 페이지">
              <img src="/icon/review-right-arrow.svg" alt="" />
            </button>
          </div>
        </div>
        ${this.showModal
          ? html`<review-modal-component
              @close=${this.handleModalClose}
            ></review-modal-component>`
          : ''}
      </section>
    `;
  }
}

customElements.define('review-board-component', ReviewBoard);
