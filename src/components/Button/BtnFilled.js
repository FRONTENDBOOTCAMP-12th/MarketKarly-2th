import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';

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
    reset,
    a11y,
    css`
      .btn-filled {
        padding: 0;
        margin: 0;
        border: none;
        background: none;

        height: 54px;

        background-color: var(--primary-color, #283198);
        color: var(--white-color, #ffffff);
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
        .btn-filled {
          width: ${this.width};
        }
      </style>

      <button class="btn-filled">${this.text}</button>
    `;
  }
}

customElements.define('btn-filled-component', BtnFilled);
