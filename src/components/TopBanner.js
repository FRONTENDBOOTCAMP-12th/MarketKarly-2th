import { LitElement, css, html } from 'lit';

class TopBanner extends LitElement {
  static styles = css`
    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      top: 0;
      left: 0;
      height: 52px;
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
      cursor: pointer;
    }
    .close {
      display: none;
    }
  `;

  static properties = {
    isClosed: { type: Boolean },
  };

  constructor() {
    super();
    this.isClosed = false;
    this.handleClose = this.handleClose.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    const bannerExpTime = JSON.parse(localStorage.getItem('topBannerExpTime'));
    if (bannerExpTime) {
      const now = new Date().getTime();
      this.isClosed = bannerExpTime >= now;
    }
  }

  setExpTime() {
    const expTime = new Date().getTime() + 1000 * 60 * 10;
    localStorage.setItem('topBannerExpTime', expTime);
  }

  handleClose() {
    this.isClosed = true;
    this.setExpTime();
  }

  render() {
    return html`
      ${!this.isClosed
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
                  @click=${this.handleClose}
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
