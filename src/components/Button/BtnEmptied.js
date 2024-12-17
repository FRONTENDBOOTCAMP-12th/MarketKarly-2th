import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset.css?inline';
import '@/assets/font/Pretendard.css';
import a11y from '@/base/a11y.css?inline';

class BtnEmptied extends LitElement {
  static properties = {
    width: { type: String },
    text: { type: String },
    borderColor: { type: String },
    color: { type: String },
  };

  constructor() {
    super();
    this.width = '174px';
    this.text = 'text';
    this.borderColor = '#283198';
    this.color = '#283198';
  }

  static styles = [
    css`
      .btn-emptied {
        padding: 0;
        margin: 0;
        border: none;
        background: none;

        height: 54px;

        background-color: var(--white-color, #ffffff);
        font-family: Pretendard;
        font-size: var(--font-md);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);

        border: 1px solid var(--border-color, #283198);
        border-radius: 4px;
      }
    `,
  ];

  updated(changedProperties) {
    if (changedProperties.has('borderColor')) {
      this.style.setProperty('--border-color', this.borderColor);
    }
  }

  render() {
    return html/* html */ `
      <style>
        ${reset} ${a11y} .btn-emptied {
          width: ${this.width};
          color: ${this.color};
        }
      </style>

      <button class="btn-emptied" type="button">${this.text}</button>
    `;
  }
}

customElements.define('btn-emptied-element', BtnEmptied);
