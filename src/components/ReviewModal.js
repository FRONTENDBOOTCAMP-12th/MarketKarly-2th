import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Button/BtnDisabled';
import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';

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
        background-color: rgba(0, 0, 0, 0.5);
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
        background-color: var(--white-color, #ffffff);
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
        position: relative;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--gray-color-200, #c4c4c4)
          var(--white-color, #ffffff);
      }

      .alert-message {
        font-size: var(--font-sm);
        color: var(--gray-color-300, #a6a6a6);
      }

      .guideline-title {
        font-weight: var(--text-bold);
        color: var(--gray-color-300, #a6a6a6);
        margin-top: 0.4rem;
        margin-bottom: 0.2rem;
      }

      .guideline-list ul {
        list-style: disc inside;
      }

      .guideline-list ul li {
        font-size: var(--font-sm);
        color: var(--gray-color-300, #a6a6a6);
      }

      .warning-message {
        font-size: var(--font-sm);
        color: var(--accent-color);
        margin-top: 0.4rem;
      }

      .character-count {
        font-size: var(--font-sm);
        color: var(--gray-color-500, #6b6b6b);
        position: absolute;
        right: 4.8rem;
        bottom: 12.2rem;
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
      }

      .btn-emptied-component {
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

      .fake-input {
        display: block;
      }

      .real-input {
        display: none;
      }

      .real-input.visible {
        display: block;
      }

      .fake-input.hidden {
        display: none;
      }
    `,
  ];

  constructor() {
    super();
    this.content = '';
    this.title = '';
    this.isSubmitEnabled = false;
  }
  // 큰일났다.. js 기능을 또 만들어야 하는 거잖............... js 말고 css랑 html만 하고 싶습니다.........그것도 잘하는 건 아니지만.....
  handleShortClose() {
    const modalBackdrop = this.shadowRoot.querySelector('.modal-backdrop');
    const modal = this.shadowRoot.querySelector('.review-container');

    modalBackdrop.classList.add('close');
    modal.classList.add('close');
  }

  handleTitleInput(event) {
    this.title = event.target.value;
    this.checkSubmitValidity();
    this.requestUpdate();
  }

  handleContentInput(event) {
    this.content = event.target.value;
    this.checkSubmitValidity();
    this.requestUpdate();
  }

  checkSubmitValidity() {
    this.isSubmitEnabled = this.title.length > 0 && this.content.length >= 5;
    this.requestUpdate();
  }

  handleSubmit() {
    if (this.isSubmitEnabled) {
      this.handleShortClose();
    }
  }

  handleFakeInputClick() {
    const fakeInput = this.shadowRoot.querySelector(
      '.content-input.fake-input'
    );
    const realInput = this.shadowRoot.querySelector(
      '.content-input.real-input'
    );

    fakeInput.classList.add('hidden');
    realInput.classList.add('visible');
    realInput.focus();
  }

  handleRealInputClose() {
    const fakeInput = this.shadowRoot.querySelector(
      '.content-input.fake-input'
    );
    const realInput = this.shadowRoot.querySelector(
      '.content-input.real-input'
    );

    if (!this.content) {
      fakeInput.classList.remove('hidden');
      realInput.classList.remove('visible');
    }
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
                aria-describedby="리뷰 제목을 입력하는 공간"
                type="text"
                class="title-input"
                placeholder="제목을 입력해주세요."
                @input=${this.handleTitleInput}
              />
            </div>
          </div>

          <div class="content-section">
            <div class="section-label">내용</div>
            <textarea
              class="content-input real-input"
              aria-describedby="리뷰 내용을 입력하는 공간간"
              @input=${this.handleContentInput}
              @blur=${this.handleRealInputClose}
            ></textarea>
            <div
              class="content-input fake-input"
              @click=${this.handleFakeInputClick}
            >
              <div class="alert-message">
                컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 식품
                등의 표시광고에 대한 법률을 준수하고자 다음과 같은 부당한
                상품평에 대해서는 별도 고지 없이 임시 대처, 비공개 전환, 삭제,
                적립금 회수 등의 필요한 조치가 취해 질 수 있습니다.
              </div>
              <div class="guideline-title">후기 작성 시 유의사항</div>

              <div class="guideline-list">
                <ul>
                  <li>
                    개인의 주관적인 의견으로 인해 상품의 기능 및 효과에 대하여
                    오해의 소지가 있는 내용
                  </li>
                  <li>
                    식품/건강기능식품과 관련하여 질병의 예방 및 치료,
                    체중감량(다이어트)에 효능효과가 있다는 내용
                  </li>
                  <li>
                    일반 화장품을 기능성화장품의 효능효과가 있다는 내용을 통한
                    오인 표현
                  </li>
                  <li>의약외품을 의약품으로 오인하게 하는 표현</li>
                  <li>
                    생활화학제품을 본래 용도와 다르게 사용하는 내용 및
                    효능효과를 과장하는 내용
                  </li>
                  <li>
                    욕설, 폭력성, 음란성, 상업성 등의 게시물 또는 구매 상품과
                    무관하거나 반복되는 동일 단어나 문장을 사용하여 판매자나
                    다른 이용자의 후기 이용을 방해한다고 판단되는 경우
                  </li>
                  <li>
                    구매한 상품이 아닌 캡쳐 사진, 타인 사진 도용, 포장 박스,
                    퍼플박스, 구매 상품을 구분할 수 없는 전체 사진 등 상품과
                    관련 없는 이미지, 동영상을 사용한 경우
                  </li>
                  <li>
                    전체 사진 등 상품과 관련 없는 이미지, 동영상을 사용한 경우
                  </li>
                  <li>
                    본인 또는 타인의 주민등록번호, (휴대)전화번호, 이메일 등
                    개인정보가 포함된 경우
                  </li>
                  <li>
                    그 밖에 상품평으로 인해 다른 회원 또는 제3자에게 피해가
                    가해질 내용
                  </li>
                </ul>
              </div>
              <div class="warning-message">
                ※ 작성된 글과 첨부된 멀티미디어 파일 등으로 이루어진 각 상품평은
                개인의 의견을 반영하므로, 게시된 내용에 대한 모든 책임은
                작성자에게 있습니다. 또한 비정상적인 방법을 통해 후기를 작성하고
                적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을
                알려드립니다.
              </div>
            </div>
            <div class="character-count">${this.content.length}/5000</div>
          </div>
        </div>

        <div class="buttons">
          <btn-emptied-component
            width="174px"
            text="취소"
            borderColor="#898989"
            color="#404040"
            @click=${this.handleShortClose}
          ></btn-emptied-component>
          ${this.isSubmitEnabled
            ? html`
                <btn-filled-component
                  width="174px"
                  text="등록"
                  backgroundColor="var(--primary-color, #283198)"
                  color="white"
                  @click=${this.handleSubmit}
                ></btn-filled-component>
              `
            : html`
                <btn-disabled-component
                  width="174px"
                  text="등록"
                ></btn-disabled-component>
              `}
        </div>
      </div>
    `;
  }
}

customElements.define('review-component', Review);
