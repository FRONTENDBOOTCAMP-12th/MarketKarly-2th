import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/Button/BtnDisabled';
import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';
import '@/components/Input/InputCheckbox';

class Inquiry extends LitElement {
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

      .title-input {
        width: 629px;
        height: 44px;
        line-height: var(--regular-line-height);
        border: 1px solid var(--gray-color-300, #a6a6a6);
        border-radius: 4px;
        padding: 0 var(--space-lg);
      }

      .content-input {
        background-color: var(--white-color, #ffffff);
        width: 629px;
        height: 198px;
        border: 1px solid var(--gray-color-300, #a6a6a6);
        border-radius: 4px;
        padding: var(--space-md) var(--space-2xl);
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
        bottom: 11.2rem;
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
    document.body.style.overflow = 'hidden';
  }

  render() {
    return html`
      <div class="popup-bg">
        <dialog class="review-container">
          <div class="review-header">
            <h2 class="review-title">상품 문의하기</h2>
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
                  aria-describedby="reviewTitleText"
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
                aria-describedby="reviewContentText"
                @input=${this.handleContentInput}
                @blur=${this.handleRealInputClose}
              ></textarea>
              <div
                class="content-input fake-input"
                @click=${this.handleFakeInputClick}
              >
                <div class="guideline-title">
                  상품문의 작성 전 확인해 주세요
                </div>
                <div class="guideline-list">
                  <ul>
                    <li>답변은 영업일 기준 2~3일 소요됩니다.</li>
                    <li>
                      해당 게시판의 성격과 다른 글은 사전동의 없이 담당
                      게시판으로 이동될 수 있습니다.
                    </li>
                    <li>
                      배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은
                      마이칼리 내 1:1 문의에 남겨주세요.
                    </li>
                  </ul>
                </div>
                <div class="guideline-title">제품</div>
                <div class="guideline-list">
                  <ul>
                    <li>
                      입고일 : 품절 상품 입고 일이 확정된 경우, 섬네일에
                      기재되어 있습니다. (종 모양을 클릭하여, 재입고 알림 설정
                      가능)
                    </li>
                    <li>
                      제품 상세정보 : 영양성분 및 함량, 용량, 보관 및 취급 방법
                      등 제품 정보는 상세이미지 또는 상세정보에서 확인
                      가능합니다.
                    </li>
                  </ul>
                </div>
                <div class="guideline-title">주문취소</div>
                <div class="guideline-list">
                  <ul>
                    <li>배송 단계별로 주문취소 방법이 상이합니다.</li>
                    <li>
                      [입금확인] 단계 : [마이칼리 > 주문내역 상세페이지] 에서
                      직접 취소 가능
                    </li>
                    <li>[입금확인] 이후 단계 : 고객센터로 문의</li>
                    <li>
                      생산이 시작된 [상품 준비중] 이후에는 취소가 제한되는 점
                      고객님의 양해 부탁드립니다.
                    </li>
                    <li>
                      비회원은 모바일 App 또는 모바일 웹사이트에서 [마이칼리 >
                      비회원 주문 조회 페이지] 에서 취소가 가능합니다.
                    </li>
                    <li>일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.</li>
                  </ul>
                </div>
                <div class="warning-message">
                  ※ 주문상품의 부분 취소는 불가능합니다. 전체 주문 취소 후
                  재구매 해주세요.
                </div>
                <div class="guideline-title">배송</div>
                <div class="guideline-list">
                  <ul>
                    <li>
                      주문 완료 후 배송 방법(샛별/택배)은 변경이 불가능합니다.)
                    </li>
                    <li>
                      주문 완료 후 배송 방법(샛별/택배)은 변경이 불가능합니다.
                    </li>
                  </ul>
                </div>

                <div class="warning-message">
                  ※ 전화번호, 이메일, 주소, 계좌번호 등의 상세 개인정보가 문의
                  내용에 저장되지 않도록 주의해 주시기 바랍니다.
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
            margin-left: 6rem;
            font-weight: var(--text-semi-bold);
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

customElements.define('inquiry-modal-component', Inquiry);
