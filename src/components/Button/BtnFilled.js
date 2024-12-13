import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset.css?inline';
import '@/assets/font/Pretendard.css';
import a11y from '@/base/a11y.css?inline';

class BtnFilled extends LitElement {
  constructor() {
    super();
  }

  static styles = [
    css`
      .btn-filled {
        padding: 0;
        margin: 0;
        border: none;
        background: none;

        width: 174px;
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
        ${reset}
        ${a11y}
      </style>

      <button class="btn-filled" type="button">text</button>
    `;
  }
}

customElements.define('btn-filled-element', BtnFilled);
