import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import '@/components/Button/BtnEmptied';
import a11y from '@/base/a11y';

class InputText extends LitElement {
  static styles = [
    a11y,
    reset,
    css`
      .wrapper {
        display: flex;
        gap: var(--space-md);
        align-items: center;

        input {
          border: 1px solid var(--gray-color-300, #a6a6a6);
          border-radius: 4px;
          padding: var(--space-md) var(--space-2xl);
          color: var(--content-text-color, #333);

          &::placeholder {
            color: var(--gray-color-400, #898989);
          }
        }

        label {
          font-weight: var(--text-semi-bold);
          line-height: var(--light-line-height);
        }
      }
    `,
  ];

  static properties = {
    name: { type: String },
    width: { type: String },
    height: { type: String },
    label: { type: String },
    btnText: { type: String },
    labelSrOnly: { type: Boolean },
    placeholder: { type: String },
    hasBtn: { type: Boolean },
  };

  constructor() {
    super();
    this.name = 'name';
    this.width = 'auto';
    this.height = '44px';
    this.label = 'label';
    this.btnText = 'text';
    this.labelSrOnly = false;
    this.placeholder = 'placeholer';
    this.hasBtn = false;
  }

  render() {
    console.log(this.hasBtn);
    return html`
      <style>
        input {
          width: ${this.width};
          height: ${this.height};
        }
      </style>

      <div class="wrapper">
        <input
          id="${this.name}"
          type="text"
          name=${this.name}
          placeholder=${this.placeholder}
        />
        <label class=${this.labelSrOnly ? 'sr-only' : null} for=${this.name}
          >${this.label}</label
        >
        ${this.hasBtn
          ? html`<btn-emptied-component
              height=${this.height}
              width="143px"
              text=${this.btnText}
            ></btn-emptied-component>`
          : null}
      </div>
    `;
  }
}

customElements.define('input-text-component', InputText);
