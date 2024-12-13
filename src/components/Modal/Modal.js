import { LitElement, html } from 'lit';
import style from '@/components/Modal/Modal.css?inline';
import '@/assets/font/Pretendard.css';

class Modal extends LitElement {
  constructor() {
    super();
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
          <button type="button">오늘 하루 안 보기</button>
          <button type="button">닫기</button>
        </div>
      </section>
    `;
  }
}

customElements.define('modal-component', Modal);
