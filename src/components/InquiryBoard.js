import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/InquiryModal';
import '@/components/Button/BtnFilled';

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

      .caution li {
        list-style: disc;
        margin-left: var(--space-2xl);
      }
      .board-header {
        width: 1050px;
        border-collapse: collapse;
        border-top: 2px solid var(--gray-color-900);
      }

      th {
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: #000000;
        text-align: center;
        padding: 12px 0;
        border-bottom: 1px solid var(--gray-color-300);
      }

      .title-column {
        width: 750px;
      }

      .writer-column,
      .date-column,
      .status-column {
        width: 100px;
      }

      .board-body {
        flex-direction: column;
        align-items: flex-start;
        width: 1050px;
        padding: 0;
        box-sizing: border-box;

        tr {
          flex-direction: row;
          align-items: center;
          height: 40px;
          border-bottom: 1px solid #e1e1e1;
        }

        td {
          align-items: center;
          padding: 4px 20px;
          font-weight: 400;
        }

        .status-column[data-status='답변완료'] {
          color: var(--primary-color, #283198);
          font-weight: var(--text-semi-bold);
        }

        .writer-column,
        .date-column,
        .status-column {
          text-align: center;
          vertical-align: middle;
        }

        .title-column {
          font-weight: var(--text-semi-bold);
        }
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
        <table class="board-header">
          <thead>
            <tr>
              <th class="title-column">제목</th>
              <th class="writer-column">작성자</th>
              <th class="date-column">작성일</th>
              <th class="status-column">답변상태</th>
            </tr>
          </thead>
          <tbody class="board-body">
            <tr>
              <td class="title-column">
                판매(일시)중단 제품 안내 (22.11.10 업데이트)
              </td>
              <td class="writer-column">컬리</td>
              <td class="date-column">2017.12.24</td>
              <td class="status-column" data-status="미답변">-</td>
            </tr>
            <tr>
              <td class="title-column">팩이 터져서 왔어요</td>
              <td class="writer-column">김철수</td>
              <td class="date-column">2024.12.26</td>
              <td class="status-column" data-status="답변완료">답변완료</td>
            </tr>
          </tbody>
        </table>

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
