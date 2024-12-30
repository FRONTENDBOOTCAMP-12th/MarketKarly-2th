import { LitElement, css, html } from 'lit';

class TopBanner extends LitElement {
  static styles = css`
    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      height: 50px;
      background: var(--primary-color, #283198);
      z-index: 9999;
    }

    .inner {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 1050px;
      position: relative;
    }

    .advertise {
      color: var(--white-color, #ffffff);
    }

    .advertise-bold {
      font-weight: var(--text-semi-bold);
      color: var(--white-color, #ffffff);
    }

    .btn-close {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
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
    const expTime = new Date().getTime() + 1000 * 60 * 60 * 24;
    localStorage.setItem('closeTime', expTime);
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
              <div class="inner">
                <p>
                  <span class="advertise">지금 가입하고 인기상품</span>
                  <span class="advertise-bold">100원</span>
                  <span class="advertise">에 받아가세요!</span>
                </p>
                <img
                  src="/icon/review-close.svg"
                  alt="닫기 버튼"
                  class="btn-close"
                  aria-label="닫기"
                  @click=${this.handleLongClose}
                  tabindex="0"
                />
              </div>
            </section>
          `
        : null}
    `;
  }
}

customElements.define('top-banner-component', TopBanner);
