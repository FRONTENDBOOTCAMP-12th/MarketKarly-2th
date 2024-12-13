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

class BtnEmptied extends LitElement {
  constructor() {
    super();
  }

  static styles = [
    css`
      .btn-emptied {
        padding: 0;
        margin: 0;
        border: none;
        background: none;

        width: 174px;
        height: 54px;

        background-color: var(--white-color, #ffffff);
        color: var(--primary-color, #283198);
        font-family: Pretendard;
        font-size: var(--font-md);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);

        border: 1px solid var(--primary-color, #283198);
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

      <button class="btn-emptied" type="button">text</button>
    `;
  }
}

customElements.define('btn-emptied-element', BtnEmptied);

class BtnDisabled extends LitElement {
  constructor() {
    super();
  }

  static styles = [
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

      <button class="btn-disabled" type="button">text</button>
    `;
  }
}

customElements.define('btn-disabled-element', BtnDisabled);
