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
        padding: 10px;
        background: #f9f9f9;
      }
      .row-header[data-title]:not([data-title='비밀글입니다.']) + .row-body {
        display: block;
      }

      .row-header[data-title='비밀글입니다.'] {
        color: var(--gray-color-300);
      }

      .row-header[data-title='비밀글입니다.'] .title-column::after {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 8px;
        background-image: url('/icon/review-lock.svg');
        background-size: contain;
        background-repeat: no-repeat;
        vertical-align: middle;
      }

      .writer-column,
      .date-column,
      .status-column {
        text-align: center;
        vertical-align: middle;
      }

      .question,
      .answer {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 12px;
        padding: 12px;
        font-weight: 600;
        line-height: 2;
        position: relative;
      }

      .date-text {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 12px;
        font-weight: 600;
        line-height: 2;
        position: relative;
        margin-left: 3.2rem;
        color: var(--gray-color-300);
        font-size: 14px;
      }

      .icon-question,
      .icon-answer {
        width: 24px;
        height: 24px;
        margin-top: 8px;
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
        width: 50px;
        height: 50px;
      }

      .pagination button:hover {
        background-color: var(--gray-color-50, #f9f9f9);
      }
    `,
  ];
  static properties = {
    inquiries: { type: Array },
    expandedRows: { type: Object },
    activeRowId: { type: Number },
  };
  constructor() {
    super();
    this.showModal = false;
    this.activeRowId = null;
    this.inquiries = [
      {
        id: 1,
        title: '컬릿이 최고입니다 ㅎㅎㅎ',
        writer: '김*수',
        date: '2025.01.02',
        status: '미답변',
        question:
          '팩이 터졌는데요. CCTV를 확인해보니 지나가던 행인이 발로 차서 그런 것이었더군요. 이런 경우에도 환불이 되나요?',
        answer: '(아직 답변이 적히지 않았습니다)',
      },
      {
        id: 2,
        title: '비밀글입니다.',
        writer: '김*수',
        date: '2024.12.31',
        status: '답변완료',
        question:
          '이번엔 비닐 박스도 손상되어 있어 포장이 터져 엉망이네요. 환불 요청합니다.',
        answer: '허위 문의 다발 발생으로 고소했습니다. 컬릿 드림.',
      },
      {
        id: 3,
        title: '팩이 또x4 터져서 왔어요',
        writer: '김*수',
        date: '2024.11.25',
        status: '답변완료',
        question:
          '제가 시킨 사골곰탕탕 포장이 터져 엉망이네요. 환불 요청합니다.',
        answer: '허위 문의 다발 발생으로 고소했습니다. 컬릿 드림.',
      },
      {
        id: 4,
        title: '팩이 또또또 터져서 왔어요',
        writer: '김*수',
        date: '2024.10.13',
        status: '답변완료',
        question: '종이 상자 채로 포장이 터져 엉망이네요. 환불 요청합니다.',
        answer:
          '안녕하세요. 컬릿입니다. 믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다. 더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다. 다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다. 불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다. 컬릿 드림.',
      },
      {
        id: 5,
        title: '비밀글입니다.',
        writer: '조*연',
        date: '2024.12.26',
        status: '미답변',
        question: '배송 관련 문의입니다. 스티로폼 박스가 손상되었습니다.',
        answer:
          '이 문제는 이미 해결되었습니다. 추가적인 문의 사항은 언제든지 연락주세요.',
      },
      {
        id: 6,
        title: '팩이 또 터져서 왔어요',
        writer: '김*수',
        date: '2024.09.04',
        status: '답변완료',
        question:
          '이번엔 비닐 박스도 손상되어 있어 포장이 터져 엉망이네요. 환불 요청합니다.',
        answer:
          '안녕하세요. 컬릿입니다. 믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다. 더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다. 다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다. 불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다. 컬릿 드림.',
      },

      {
        id: 7,
        title: '팩이 터져서 왔어요',
        writer: '김*수',
        date: '2024.08.22',
        status: '답변완료',
        question:
          '스티로폼 박스가가 손상되어 있어 포장이 터져 엉망이네요. 환불 요청합니다.',
        answer:
          '안녕하세요. 컬릿입니다. 믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다. 더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다. 다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해 안내 받으신 점 확인하였습니다. 불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는 칼리가 되겠습니다. 컬릿 드림.',
      },

      {
        id: 8,
        title: '비밀글입니다.',
        writer: '박*동',
        date: '2024.04.11',
        status: '답변완료',
        question: '배송 관련 문의입니다. 스티로폼 박스가 손상되었습니다.',
        answer:
          '이 문제는 이미 해결되었습니다. 추가적인 문의 사항은 언제든지 연락주세요.',
      },
    ];
    this.expandedRows = {};
  }

  toggleRow(id) {
    const inquiry = this.inquiries.find((inquiry) => inquiry.id === id);
    if (inquiry.title === '비밀글입니다.') return;

    this.activeRowId = this.activeRowId === id ? null : id;
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
                  data-title="${inquiry.title}"
                  @click=${() => this.toggleRow(inquiry.id)}
                >
                  <div class="title-column">
                    ${inquiry.title === '비밀글입니다.'
                      ? html`<span class="secret-title">${inquiry.title}</span>`
                      : inquiry.title}
                  </div>
                  <div class="writer-column">${inquiry.writer}</div>
                  <div class="date-column">${inquiry.date}</div>
                  <div class="status-column" data-status="${inquiry.status}">
                    ${inquiry.status}
                  </div>
                </div>
                <div
                  class="row-body"
                  style="display: ${this.activeRowId === inquiry.id
                    ? 'block'
                    : 'none'}"
                >
                  <div class="question">
                    <img
                      src="/icon/review-question.svg"
                      alt="question icon"
                      class="icon-question"
                    />
                    <div class="question-text">${inquiry.question}</div>
                  </div>
                  <div class="answer">
                    <img
                      src="/icon/review-answer.svg"
                      alt="answer icon"
                      class="icon-answer"
                    />
                    <div class="answer-text">${inquiry.answer}</div>
                  </div>
                  <div class="date-text">${inquiry.date}</div>
                </div>
              </div>
            `
          )}
        </div>

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
          ? html`<inquiry-modal-component
              @close=${this.handleModalClose}
            ></inquiry-modal-component>`
          : ''}
      </section>
    `;
  }
}

customElements.define('inquiry-board-component', InquiryBoard);
