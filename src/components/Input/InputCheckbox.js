import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';

class InputCheckbox extends LitElement {
  static styles = [
    reset,
    css`
      :host {
        --font-weight: 600;
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
        background: url('/icon/unchecked.svg') no-repeat center/cover;

        &:checked {
          background: url('/icon/checked.svg') no-repeat center/cover;
        }
      }
      label {
        font-weight: var(--font-weight);
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
    this.name = 'name';
    this.value = '';
    this.checked = false;
  }

  _handleChecked(e) {
    const target = e.target;

    this.dispatchEvent(
      new CustomEvent('checked', {
        detail: {
          checked: target.checked,
          value: target.value,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <input
        type="checkbox"
        class="checkbox"
        name=${this.name}
        value=${this.value}
        id=${this.value}
        @change=${this._handleChecked}
      />
      <label for=${this.value}><slot></slot></label>
    `;
  }
}

customElements.define('checkbox-component', InputCheckbox);
