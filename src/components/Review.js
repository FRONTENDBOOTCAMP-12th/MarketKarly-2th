import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';

class Review extends LitElement {
  static styles = [
    reset,
    a11y,
    css`
      .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1030;
        transition: opacity 0.4s ease;
      }

      .modal-transition {
        transition: all 0.4s ease;
      }

      .review-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 793px;
        height: 630px;
        background-color: var(--white-color, #ffffff);
        border-radius: 8px;
        z-index: 1040;
        padding: 2rem;
        transition: opacity 0.4s ease;
      }

      .review-header {
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 1.25rem;
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
      }

      .review-close-btn:hover {
        cursor: pointer;
        filter: invert(33%) sepia(98%) saturate(1497%) hue-rotate(222deg)
          brightness(87%) contrast(91%);
      }

      .review-title {
        font-weight: var(--text-bold);
        font-size: var(--font-3xl);
      }

      .cancel-icon {
        width: 30px;
        height: 30px;
        position: relative;
      }

      .product-section {
        height: 104px;
        display: flex;
        align-items: center;
        padding: 0;
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
        gap: 1.5rem;
      }

      .product-image {
        width: 72px;
        height: 72px;
        background-size: cover;
      }

      .product-name {
        font-weight: var(--text-bold);
        font-size: 1.125rem;
      }

      .review-detail {
        display: flex;
        flex-direction: column;
        padding: 1rem 0 0;
        gap: 1rem;
        height: 360px;
      }

      .title-section,
      .content-section {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
      }

      .section-label {
        width: 90px;
        padding: 0.5rem 0 0 0.5rem;
        font-weight: var(--text-bold);
        color: var(--gray-color-700, #404040);
        font-size: 1.125rem;
      }

      .title-input {
        width: 629px;
        height: 44px;
        line-height: var(--regular-line-height);
        border: 1px solid var(--gray-color-300, #a6a6a6);
        border-radius: 4px;
        padding: 0 1.25rem;
      }

      .content-input {
        width: 629px;
        height: 198px;
        border: 1px solid var(--gray-color-300, #a6a6a6);
        border-radius: 4px;
        padding: 0.5rem 1.25rem;
        line-height: var(--regular-line-height);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        resize: none;
        overflow-y: auto;
        position: relative;
      }

      .character-count {
        font-size: var(--font-sm);
        color: var(--gray-color-500, #6b6b6b);
        position: absolute;
        right: 3.8rem;
        bottom: 11.6rem;
        background: var(--white-color, #ffffff);
      }

      .buttons {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        padding-top: 1.25rem;
        border-top: 1px solid var(--gray-color-100, #e1e1e1);
        margin-top: auto;
      }

      .btn {
        width: 186px;
        height: 54px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: var(--text-semi-bold);
        border-color: var(--gray-color-100, #e1e1e1);
      }

      .btn-cancel {
        background-color: var(--white-color, #ffffff);
        color: var(--gray-color-700, #404040);
      }

      .btn-submit {
        background: var(--gray-color-100, #e1e1e1);
        color: var(--white-color, #ffffff);
      }

      .close {
        display: none;
      }
    `,
  ];

  constructor() {
    super();
    this.content = '';
  }

  handleShortClose() {
    const modalBackdrop = this.shadowRoot.querySelector('.modal-backdrop');
    const modal = this.shadowRoot.querySelector('.review-container');

    modalBackdrop.classList.add('close');
    modal.classList.add('close');
  }

  handleInput(event) {
    this.content = event.target.value;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="modal-backdrop"></div>
      <div class="review-container">
        <div class="review-header">
          <h2 class="review-title">후기 작성</h2>
          <img
            src="/icon/review-close.svg"
            alt="닫기 버튼"
            class="review-close-btn"
            aria-label="닫기"
            @click=${this.handleShortClose}
          />
        </div>

        <div class="product-section">
          <img class="product-image" src="/image/product02.webp" alt="" />
          <figcaption class="sr-only">
            풀무원 회사의 탱탱쫄면 4개입 제품
          </figcaption>
          <div class="product-name">[풀무원] 탱탱쫄면 (4개입)</div>
        </div>

        <div class="review-detail">
          <div class="title-section">
            <div class="section-label">제목</div>
            <div class="title-input-container">
              <input
                type="text"
                class="title-input"
                placeholder="제목을 입력해주세요."
              />
            </div>
          </div>

          <div class="content-section">
            <div class="section-label">내용</div>
            <div class="content-input-container">
              <textarea
                class="content-input"
                placeholder="상품에 대한 후기를 작성해주세요."
                @input=${this.handleInput}
              ></textarea>
              <div class="character-count">${this.content.length}/5000</div>
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="btn btn-cancel" @click=${this.handleShortClose}>
            취소
          </button>
          <button class="btn btn-submit">등록</button>
        </div>
      </div>
    `;
  }
}

customElements.define('review-component', Review);
