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
        color: var(--info-error-color, #f03f40);
        font-size: var(--font-sm);
        margin-top: var(--space-sm);
      }
    `,
  ];

  static properties = {
    name: { type: String },
    width: { type: String },
    height: { type: String },
    placeholder: { type: String },
    hasError: { type: Boolean },
    errorMessage: { type: String },
    validation: { type: String },
  };

  constructor() {
    super();
    this.name = 'name';
    this.width = 'auto';
    this.height = '44px';
    this.placeholder = 'placeholder';
    this.hasError = false;
    this.errorMessage = 'error';
    this.validation = '';
  }

  handleError(e) {
    const value = e.target.value;
    this.hasError = this.validation.test(value) ? false : true;
  }

  render() {
    return html`
      <style>
        input {
          width: ${this.width};
          height: ${this.height};
        }
      </style>
      <div class="input-wrapper">
        <input
          @change=${this.handleError}
          type="text"
          name=${this.name}
          placeholder=${this.placeholder}
        />
        ${this.hasError
          ? html`<p class="error-message"><slot></slot></p>`
          : null}
      </div>
    `;
  }
}

customElements.define('text-component', InputText);
