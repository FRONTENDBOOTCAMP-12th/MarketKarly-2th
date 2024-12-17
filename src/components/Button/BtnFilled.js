import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset.css?inline';
import '@/assets/font/Pretendard.css';
import a11y from '@/base/a11y.css?inline';

class BtnFilled extends LitElement {
  static properties = {
    width: { type: String },
    text: { type: String },
  };

  constructor() {
    super();
    this.width = '174px';
    this.text = 'text';
  }

  static styles = [
    css`
      .btn-filled {
        padding: 0;
        margin: 0;
        border: none;
        background: none;

        height: 54px;

        background-color: var(--primary-color, #283198);
        color: var(--white-color, #ffffff);
        font-family: Pretendard;
        font-size: var(--font-md);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);

        border-radius: 4px;
      }
    `,
  ];

  render() {
    return html/* html */ `
      <style>
        ${reset} ${a11y} .btn-filled {
          width: ${this.width};
        }
      </style>

      <button class="btn-filled">${this.text}</button>
    `;
  }
}

customElements.define('btn-filled-element', BtnFilled);
