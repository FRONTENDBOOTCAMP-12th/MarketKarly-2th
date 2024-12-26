import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';

class InputRadio extends LitElement {
  static styles = [
    reset,

    css`
      :host {
        display: flex;
        gap: var(--space-md);
      }
      input {
        appearance: none;
        border-radius: 50%;
        margin: 0;
        display: block;
        width: 24px;
        height: 24px;
        background: url('/icon/unchecked-circle.svg') no-repeat center/cover;

        &:checked {
          background: url('/icon/checked-circle.svg') no-repeat center/cover;
        }
      }
      label {
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);
      }
    `,
  ];

  static properties = {
    name: { type: String },
    value: { type: String },
    checked: { type: Boolean },
  };

  constructor() {
    super();
    this.name = '';
    this.value = '';
    this.checked = false;
  }

  _handleCheckChange(e) {
    this.dispatchEvent(
      new CustomEvent('radio-checked', {
        detail: {
          value: e.target.value,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <input
        id=${this.value}
        name=${this.name}
        value=${this.value}
        type="radio"
        ?checked=${this.checked}
        @change=${this._handleCheckChange}
      />
      <label for=${this.name}>
        <slot></slot>
      </label>
    `;
  }
}

customElements.define('radio-component', InputRadio);
