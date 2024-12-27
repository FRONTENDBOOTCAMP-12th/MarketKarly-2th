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
        border-bottom: 1px solid #e1e1e1;

        tr {
          flex-direction: row;
          align-items: center;
          height: 40px;
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

        .title-column {
          font-weight: var(--text-semi-bold);
        }
      }
      .row {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e1e1e1;
      }
      .row-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px 10px 20px;

        cursor: pointer;
      }
      .row-body {
        display: none;
        padding: 20px;
        background: #f9f9f9;
      }
      .row-header[data-title]:not([data-title='비밀글']) + .row-body {
        display: block;
      }

      .writer-column,
      .date-column,
      .status-column {
        text-align: center;
        vertical-align: middle;
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
  static properties = {
    inquiries: { type: Array },
    expandedRows: { type: Object },
  };
  constructor() {
    super();
    this.showModal = false;
    this.inquiries = [
      {
        id: 1,
        title: '판매(일시)중단 제품 안내 (22.11.10 업데이트)',
        writer: '컬리리',
        date: '2017.02.23',
        status: '-',
        content:
          '안녕하세요. 칼리입니다. 믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다.',
      },
      {
        id: 2,
        title: '팩이 터져서 왔어요',
        writer: '김철수',
        date: '2024.12.26',
        status: '미답변',
        content:
          '스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요. 환불 요청합니다.',
      },
      {
        id: 3,
        title: '비밀글',
        writer: '김철수',
        date: '2024.12.26',
        status: '답변완료',
        content: '배송 관련 문의입니다. 스티로폼 박스가 손상되었습니다.',
      },
    ];
    this.expandedRows = {};
  }

  toggleRow(id) {
    const inquiry = this.inquiries.find((inquiry) => inquiry.id === id);
    if (inquiry.title === '비밀글') return;

    this.expandedRows = {
      ...this.expandedRows,
      [id]: !this.expandedRows[id],
    };

    this.requestUpdate();
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
        </table>
        <div class="board-body">
          ${this.inquiries.map(
            (inquiry) => html`
              <div class="row">
                <div
                  class="row-header"
                  @click=${() => this.toggleRow(inquiry.id)}
                >
                  <div class="title-column">${inquiry.title}</div>
                  <div class="writer-column">${inquiry.writer}</div>
                  <div class="date-column">${inquiry.date}</div>
                  <div class="status-column" data-status="${inquiry.status}">
                    ${inquiry.status}
                  </div>
                </div>
                <div
                  class="row-body"
                  style=${this.expandedRows[inquiry.id]
                    ? 'display: block;'
                    : 'display: none;'}
                >
                  ${inquiry.content}
                </div>
              </div>
            `
          )}
        </div>

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
