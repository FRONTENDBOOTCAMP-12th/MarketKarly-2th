import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Button/BtnDisabled';
import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';
import '@/components/Input/InputCheckbox';
import '@/components/Input/InputText';

class ReviewModal extends LitElement {
  static styles = [
    reset,
    a11y,
    css`
      .review-container {
        border: none;
        box-shadow: var(--below-medium);
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
        padding: var(--space-5xl);
        transition: opacity 0.4s ease;
      }

      .review-header {
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 var(--space-2xl);
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
      }

      .review-close-btn:hover {
        filter: invert(33%) sepia(98%) saturate(1497%) hue-rotate(222deg)
          brightness(87%) contrast(91%);
      }

      .review-title {
        font-weight: var(--text-bold);
        font-size: var(--font-3xl);
      }

      .product-section {
        height: 104px;
        display: flex;
        align-items: center;
        padding: 0;
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
        gap: var(--space-3xl);
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
        padding: var(--space-xl) 0 0;
        gap: var(--space-lg);
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
        padding: var(--space-md) 0 0 var(--space-md);
        font-weight: var(--text-bold);
        color: var(--gray-color-700, #404040);
        font-size: 1.125rem;
      }

      .content-input {
        background-color: var(--white-color, #ffffff);
        width: 629px;
        height: 198px;
        border: 1px solid var(--gray-color-300, #a6a6a6);
        border-radius: 4px;
        padding: var(--space-md) var(--space-xl);
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

      .guideline-title {
        font-weight: var(--text-semi-bold);
        color: var(--gray-color-400, #a6a6a6);
        margin-top: var(--space-md);
        margin-bottom: var(--space-sm);
      }

      .guideline-list ul {
        list-style: disc inside;
      }

      .guideline-list ul li {
        font-size: var(--font-sm);
        color: var(--gray-color-300, #a6a6a6);
      }
      .alert-message {
        font-size: var(--font-sm);
        color: var(--gray-color-300, #a6a6a6);
      }
      .warning-message {
        font-size: var(--font-sm);
        color: var(--accent-color);
        margin-top: var(--space-md);
      }

      .character-count {
        font-size: var(--font-sm);
        color: var(--gray-color-500, #6b6b6b);
        position: absolute;
        right: 3.8rem;
        bottom: 11.5rem;
        background: var(--white-color, #ffffff);
      }
      .buttons {
        display: flex;
        justify-content: center;
        gap: var(--space-lg);
        padding-top: var(--space-2xl);
        border-top: 1px solid var(--gray-color-100, #e1e1e1);
        margin-top: auto;
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

      .popup-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1030;
      }
    `,
  ];

  constructor() {
    super();
    this.content = '';
    this.title = '';
    this.isSubmitEnabled = false;
  }
  handleShortClose() {
    const modal = this.shadowRoot.querySelector('.popup-bg');
    modal.classList.add('close');
    document.body.style.overflow = '';
  }

  handleTitleInput(event) {
    this.title = event.target.value;
    this.checkSubmitValidity();
    this.requestUpdate();
  }

  handleContentInput(event) {
    const maxLength = 5000;
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.substring(0, maxLength);
    }
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

  connectedCallback() {
    super.connectedCallback();
    document.body.style.overflow = '';
  }

  render() {
    return html`
      <div class="popup-bg">
        <dialog class="review-container">
          <div class="review-header">
            <h2 class="review-title" tabindex="0">후기 작성</h2>
            <img
              src="/icon/review-close.svg"
              alt="닫기 버튼"
              class="review-close-btn"
              aria-label="닫기"
              @click=${this.handleShortClose}
              tabindex="0"
            />
          </div>

          <div class="product-section">
            <img class="product-image" src="/image/product02.webp" alt="" />
            <figcaption class="sr-only">
              풀무원 회사의 탱탱쫄면 4개입 제품
            </figcaption>
            <div class="product-name" tabindex="0">
              [풀무원] 탱탱쫄면 (4개입)
            </div>
          </div>

          <div class="review-detail">
            <div class="title-section">
              <label for="review-title-input" class="section-label">제목</label>
              <div class="title-input-container">
                <text-component
                  width="629px"
                  height="44px"
                  class="title-input"
                  placeholder="제목을 입력해주세요."
                  @input=${this.handleTitleInput}
                  tabindex="0"
                ></text-component>
              </div>
            </div>

            <div class="content-section">
              <label for="review-content-input" class="section-label"
                >내용</label
              >
              <textarea
                class="content-input real-input"
                aria-describedby="reviewContentText"
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
                  ※ 작성된 글과 첨부된 멀티미디어 파일 등으로 이루어진 각
                  상품평은 개인의 의견을 반영하므로, 게시된 내용에 대한 모든
                  책임은 작성자에게 있습니다. 또한 비정상적인 방법을 통해 후기를
                  작성하고 적립금을 취득한 경우 작성자에 법적 책임의 소지가
                  있음을 알려드립니다.
                </div>
              </div>
              <div class="character-count">${this.content.length}/5000</div>
            </div>
            <checkbox-component
              name="secret-checkbox"
              value="secret"
              ?checked=${this.isSecret}
              @checked=${this.handleSecretCheckClick}
              style="
              padding: 0;
              display: flex;
              flex-direction: row;
              gap: var(--space-md);
              margin-left: 5.8rem;
              font-weight: var(--text-thin);
              align-items: center;
            "
            >
              비밀글로 문의하기
            </checkbox-component>
          </div>

          <div class="buttons">
            <btn-emptied-component
              width="174px"
              text="취소"
              borderColor="var(--gray-color-400, #898989)"
              color="var(--gray-color-700, 404040;)"
              @click=${this.handleShortClose}
            ></btn-emptied-component>
            ${this.isSubmitEnabled
              ? html`
                  <btn-filled-component
                    width="174px"
                    text="등록"
                    backgroundColor="var(--primary-color, #283198)"
                    color="var(--white-color, #ffffff)"
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
        </dialog>
      </div>
    `;
  }
}

customElements.define('review-modal-component', ReviewModal);
