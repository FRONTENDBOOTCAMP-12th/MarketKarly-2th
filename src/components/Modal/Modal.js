import { LitElement, html } from 'lit';
import style from '@/components/Modal/Modal.css?inline';
import '@/assets/font/Pretendard.css';

class Modal extends LitElement {
  static properties = {
    isLongClosed: {},
  };

  constructor() {
    super();
    this.isLongClosed = false;
  }
  connectedCallback() {
    super.connectedCallback();
  }

  get buttons() {
    return this.renderRoot.querySelectorAll('button');
  }

  get modal() {
    return this.renderRoot.querySelector('.modal');
  }

  handleShortClose() {
    const shortClose = this.buttons[1];
    const modal = shortClose.closest('section');
    modal.classList.add('close');
    this.isLongClosed = false;
    localStorage.setItem('isLongClosed', this.isLongClosed);
  }

  handleLongClose() {
    const longClose = this.buttons[0];
    const modal = longClose.closest('section');
    modal.classList.add('close');
    this.isLongClosed = true;

    localStorage.setItem('isLongClosed', this.isLongClosed);
  }

  render() {
    return html`
      <style>
        ${style}
      </style>
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
          <button @click=${this.handleShortClose} type="button">닫기</button>
        </div>
      </section>
    `;
  }
}

customElements.define('modal-component', Modal);
