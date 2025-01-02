import { LitElement, css, html } from 'lit';

class TopBanner extends LitElement {
  static styles = css`
    :host {
      display: block;
      contain: content;
    }
    .modal {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 52px;
      background: var(--primary-color, #283198);
      z-index: 9999;
      contain: layout paint;
    }
    .inner {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 1050px;
      width: 100%;
      position: relative;
      padding: 0 var(--space-md);
    }
    .advertise {
      color: var(--white-color, #ffffff);
      margin: 0;
      padding: 0;
    }
    .advertise-bold {
      font-weight: 600;
      color: var(--white-color, #ffffff);
    }
    .btn-close {
      position: absolute;
      right: var(--space-md);
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      padding: var(--space-sm);
      background: none;
      border: none;
    }
  `;

  static properties = {
    isClosed: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.isClosed = false;
    this.#checkStoredState();
  }

  #checkStoredState() {
    try {
      const bannerExpTime = Number(localStorage.getItem('topBannerExpTime'));
      if (bannerExpTime) {
        this.isClosed = bannerExpTime >= Date.now();
      }
    } catch (e) {
      console.warn('Could not access localStorage:', e);
    }
  }

  #setExpTime() {
    try {
      const expTime = Date.now() + 600000;
      localStorage.setItem('topBannerExpTime', expTime.toString());
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }

  handleClose() {
    this.isClosed = true;
    this.#setExpTime();
    this.dispatchEvent(new CustomEvent('banner-closed'));
  }

  render() {
    if (this.isClosed) return null;

    return html`
      <section class="modal" role="banner">
        <div class="inner">
          <p class="advertise">
            지금 가입하고 인기상품
            <strong class="advertise-bold">100원</strong>
            에 받아가세요!
          </p>
          <button
            class="btn-close"
            @click=${this.handleClose}
            aria-label="닫기 버튼"
          >
            <img
              src="/icon/review-close.svg"
              alt="닫기 아이콘"
              width="12"
              height="12"
            />
          </button>
        </div>
      </section>
    `;
  }
}

customElements.define('top-banner-component', TopBanner);
