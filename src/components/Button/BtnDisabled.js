import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';

class BtnDisabled extends LitElement {
  constructor() {
    super();
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

        width: 174px;
        height: 54px;

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
      <button class="btn-disabled" type="button">text</button>
    `;
  }
}

customElements.define('btn-disabled-component', BtnDisabled);
