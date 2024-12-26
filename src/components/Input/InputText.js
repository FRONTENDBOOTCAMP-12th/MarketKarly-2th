import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import '@/components/Button/BtnEmptied';
import a11y from '@/base/a11y';

class InputText extends LitElement {
  static styles = [
    a11y,
    reset,
    css`
      input {
        border: 1px solid var(--gray-color-300, #a6a6a6);
        border-radius: 4px;
        padding: var(--space-md) var(--space-2xl);
        color: var(--content-text-color, #333);

        &::placeholder {
          color: var(--gray-color-400, #898989);
        }
      }

      .error-message {
        position: absolute;
        visibility: hidden;
        color: var(--info-error-color, #f03f40);
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        margin-top: var(--space-sm);
      }

      .is-active {
        visibility: visible;
      }
    `,
  ];

  static properties = {
    name: { type: String },
    type: { type: String },
    width: { type: String },
    height: { type: String },
    placeholder: { type: String },
  };

  constructor() {
    super();
    this.name = 'name';
    this.type = 'text';
    this.width = 'auto';
    this.height = '44px';
    this.placeholder = 'placeholder';
  }

  _handleChange(e) {
    this.dispatchEvent(
      new CustomEvent('input-change', {
        detail: {
          name: e.target.name,
          value: e.target.value,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <style>
        input {
          width: ${this.width};
          height: ${this.height};
          border: ${this.border};
        }
      </style>
      <input
        @input=${this._handleChange}
        @blur=${this.handleError}
        type=${this.type}
        name=${this.name}
        placeholder=${this.placeholder}
      />
    `;
  }
}

customElements.define('text-component', InputText);
