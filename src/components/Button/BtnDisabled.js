import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';

class BtnDisabled extends LitElement {
  static properties = {
    width: { type: String },
    height: { type: String },
    text: { type: String },
  };

  constructor() {
    super();
    this.width = '174px';
    this.height = '54px';
    this.text = 'text';
  }

  static styles = [
    reset,
    a11y,
    css`
      .btn-disabled {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        pointer-events: none;

        background-color: var(--gray-color-100, #e1e1e1);
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
        .btn-disabled {
          width: ${this.width};
          height: ${this.height};
        }
      </style>
      <button class="btn-disabled" type="button">${this.text}</button>
    `;
  }
}

customElements.define('btn-disabled-component', BtnDisabled);
