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
        background-color: white;
        border-radius: 8px;
        z-index: 1040;
        padding: 32px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        transition: opacity 0.4s ease;
      }

      .review-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 20px;
        border-bottom: 1px solid #e1e1e1;
      }

      .review-close-btn:hover {
        cursor: pointer;
      }

      .review-close-btn:hover {
        filter: invert(33%) sepia(98%) saturate(1497%) hue-rotate(222deg)
          brightness(87%) contrast(91%);
      }

      .review-title {
        font-weight: 700;
        font-size: 28.43px;
        color: #000000;
      }

      .cancel-icon {
        width: 30px;
        height: 30px;
        position: relative;
      }

      .product-section {
        display: flex;
        align-items: center;
        padding: 16px 0;
        border-bottom: 1px solid #e1e1e1;
        gap: 24px;
      }

      .product-image {
        width: 72px;
        height: 72px;
        background: url('gv10000257547_1.png');
        background-size: cover;
      }

      .product-name {
        font-weight: 600;
        font-size: 16px;
        color: #000000;
      }

      .review-detail {
        display: flex;
        flex-direction: column;
        padding: 16px 0 0;
        gap: 16px;
        height: 328px;
      }

      .title-section,
      .content-section {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
      }

      .section-label {
        width: 90px;
        padding: 8px 0 0 8px;
        font-weight: 600;
        font-size: 16px;
        color: #333333;
      }

      .title-input {
        width: 629px;
        height: 44px;
        border: 1px solid #a6a6a6;
        border-radius: 4px;
        padding: 0 20px;
      }

      .content-input {
        width: 629px;
        height: 198px;
        border: 1px solid #a6a6a6;
        border-radius: 4px;
        padding: 8px 20px;
        line-height: 1.2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        resize: none;
        overflow-y: auto;
      }
      .character-count {
        font-size: 12px;
        color: #888888;
        text-align: right;
        margin-top: 4px;
        position: absolute;
        right: 32px;
        bottom: 12px;
        z-index: 100;
      }

      .buttons {
        display: flex;
        justify-content: center;
        gap: 12px;
        padding: 20px 0 0;
        border-top: 1px solid #e1e1e1;
      }

      .btn {
        width: 186px;
        height: 54px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 16px;
        border-color: var(--gray-color-100, #e1e1e1);
      }

      .btn-cancel {
        background-color: #fff;
        color: #333333;
      }

      .btn-submit {
        background: #e1e1e1;
        color: #ffffff;
      }

      .close {
        display: none;
        opacity: 0;
      }
    `,
  ];
  constructor() {
    super();
    this.content = '';
  }
  // '닫기' 버튼을 눌렀을 때
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
            aria-label="닫기기"
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
