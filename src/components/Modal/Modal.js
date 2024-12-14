import '@/assets/font/Pretendard.css';
import { LitElement, css, html } from 'lit';

class Modal extends LitElement {
  static styles = css`
    .modal {
      position: absolute;
      top: 25%;
      left: 18%;
      width: 440px;
      height: 586px;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      overflow: hidden;

      .img-wrapper {
        flex: 1;
        background: url('/image/modal-background.webp');
        background-size: cover;
        background-position: center;

        .modal-text {
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.87),
            rgba(0, 0, 0, 0.87)
          );
          height: 100%;
          text-align: center;
          align-content: center;
          font-size: var(--font-lg);
          font-weight: var(--text-regular);
          color: var(--white-color);
          line-height: var(--regular-line-height);
          margin: 0;
        }
      }

      .button-wrapper {
        height: 60px;
        display: flex;

        button {
          cursor: pointer;
          width: 100%;
          font-size: var(--font-md);
          line-height: var(--regular-line-height);
          border: none;
          background: var(--gray-color-200);
          background: var(--white-color);

          &:nth-of-type(1) {
            border-right: 1px solid var(--gray-color-100);
          }
        }
      }
    }

    .close {
      display: none;
    }
  `;

  static properties = {
    isLongClosed: {},
  };

  constructor() {
    super();
    // '하루 안 보기" 기본 값은 false
    this.isLongClosed = false;
  }

  connectedCallback() {
    super.connectedCallback();
    const expTime = JSON.parse(localStorage.getItem('closeTime'));

    // '오늘 하루 안 보기' 버튼을 1번이 이상 눌러서 만료 시간이 등록됐을 경우에만 실행
    if (expTime) {
      const now = new Date().getTime();

      // 현재 시간보다 만료 시간이 더 클 경우 -> 시간이 지나지 않았을 경우 -> true
      // 만료 시간보다 현재 시간이 더 클 경우 -> 시간이 지났을 경우 -> false
      this.isLongClosed = expTime >= now ? true : false;
    }
  }

  get buttons() {
    return this.renderRoot.querySelectorAll('button');
  }

  get modal() {
    return this.renderRoot.querySelector('.modal');
  }

  // '오늘 하루 안 보기'를 눌렀을 때 24시간 뒤의 시간을 localStorage에 기록해놓기
  setExpTime() {
    const expTime = new Date().getTime() + 5 * 1000;
    localStorage.setItem('closeTime', expTime);
  }

  // '닫기' 버튼을 눌렀을 때
  handleShortClose() {
    const shortClose = this.buttons[1];
    const modal = shortClose.closest('section');
    modal.classList.add('close');
  }

  // '오늘 하루 안 보기' 버튼을 눌렀을 때
  handleLongClose() {
    const longClose = this.buttons[0];
    const modal = longClose.closest('section');
    modal.classList.add('close');

    this.setExpTime();
  }

  render() {
    return html`
      ${!this.isLongClosed
        ? html`
            <section class="modal">
              <div></div>
              <div class="img-wrapper">
                <p class="modal-text">
                  해당 사이트는 <br />
                  가시안이며 비상업적 취업을 위한<br />
                  포트폴리오 용으로만 사용하기 위해 <br />
                  제작된 사이트 입니다.
                </p>
              </div>
              <div class="button-wrapper">
                <button @click=${this.handleLongClose} type="button">
                  오늘 하루 안 보기
                </button>
                <button @click=${this.handleShortClose} type="button">
                  닫기
                </button>
              </div>
            </section>
          `
        : null}
    `;
  }
}

customElements.define('modal-component', Modal);
