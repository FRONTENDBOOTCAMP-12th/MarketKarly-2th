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
        background-color: rgba(0, 0, 0, 0.6); /* 어두운 반투명 배경 */
        z-index: 1030;
      }

      .modal-transition {
        transition: all 0.4s ease;
      }

      .review-container {
        position: fixed; /* 화면에 고정 */
        top: 50%; /* 화면 세로 중간 */
        left: 50%; /* 화면 가로 중간 */
        transform: translate(-50%, -50%); /* 정확히 중앙에 위치 */
        display: flex;
        flex-direction: column;
        width: 793px;
        height: 630px;
        background-color: white; /* 모달 창의 배경 색 */
        border-radius: 8px; /* 테두리 둥글게 */
        z-index: 1040;
        padding: 32px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
      }

      .review-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 20px;
        border-bottom: 1px solid #e1e1e1;
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
        gap: 12px;
        height: 328px;
      }

      .title-section,
      .content-section {
        display: flex;
        flex-direction: row;
        align-items: flex-start; /* 내용 위로 정렬 */
      }

      .section-label {
        width: 100px;
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
    `,
  ];
  // '닫기' 버튼을 눌렀을 때
  handleShortClose() {
    const shortClose = this.buttons[1];
    const modal = shortClose.closest('section');
    modal.classList.add('close');
  }

  render() {
    return html`
      <div class="modal-backdrop"></div>
      <div class="review-container">
        <div class="review-header">
          <h2 class="review-title">후기 작성</h2>
          <img
            src="/icon/hamburger.webp"
            alt="카테고리"
            class="nav-category-icon nav-category-hover"
            aria-label="카테고리"
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
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="btn btn-cancel">취소</button>
          <button class="btn btn-submit">등록</button>
        </div>
      </div>
    `;
  }
}

customElements.define('review-component', Review);
