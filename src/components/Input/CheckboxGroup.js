import { LitElement, html, css } from 'lit';

class CheckboxGroup extends LitElement {
  static properties = {
    inputs: { type: Object },
    name: { type: String },
  };

  constructor() {
    super();
    this.name = '';
  }

  firstUpdated() {
    const inputs = this.querySelectorAll('checkbox-component');
    this.inputs = [...inputs];

    inputs.forEach((input) => {
      input.name = this.name;
      input.checked = false;
    });
  }

  _handleChange(e) {
    const { value, checked } = e.detail;

    if (value === 'all') {
      this.inputs.forEach((input) => {
        input.renderRoot.querySelector('input').checked = checked;
      });
    }
  }

  render() {
    return html`
      <slot class="checkbox-group" @checked=${this._handleChange}></slot>
    `;
  }
}

customElements.define('checkbox-group-component', CheckboxGroup);
