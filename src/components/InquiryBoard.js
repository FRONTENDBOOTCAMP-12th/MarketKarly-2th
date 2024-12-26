import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Card';
import '@/components/InquiryModal';
import { register } from 'swiper/element';

register();

class InquiryBoard extends LitElement {
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

      .review-title {
        font-weight: var(--text-bold);
        font-size: var(--font-2xl);
        line-height: var(--extra-light-line-height);
      }

      .caution {
        margin-top: var(--space-md);
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);
        color: var(--gray-color-500, #6b6b6b);
      }

      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: var(--space-5xl);
        gap: var(--space-md);
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
        cursor: pointer;
      }

      .pagination img {
        width: 10px;
        height: 10px;
      }

      .pagination button:hover {
        background-color: var(--gray-color-50, #f9f9f9);
      }

      .btn-prev {
        opacity: 0.4;
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
            <h2 class="review-title">상품문의</h2>
            <ul class="caution">
              <li>
                상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
                글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
              </li>
              <li>
                배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리
                내1:1 문의에 남겨주세요.
              </li>
            </ul>
          </div>
          <btn-filled-component
            width="155px"
            height="44px"
            class="btn-ask"
            @click=${this.handleSubmit}
            text="문의하기"
          ></btn-filled-component>
        </header>
        <div class="review-table"></div>

        <div class="product-list-container">
          <div class="pagination" aria-label="페이지 이동">
            <button class="btn-prev" aria-label="이전 페이지">
              <img src="/icon/btn-prev.svg" alt="" />
            </button>
            <button aria-label="다음 페이지">
              <img src="/icon/btn-next.svg" alt="" />
            </button>
          </div>
        </div>
        ${this.showModal
          ? html`<inquiry-modal-component
              @close=${this.handleModalClose}
            ></inquiry-modal-component>`
          : ''}
      </section>
    `;
  }
}

customElements.define('inquiry-board-component', InquiryBoard);
