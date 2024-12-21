import { LitElement, html, css } from 'lit';

class RadioGroup extends LitElement {
  static properties = {
    radios: { type: Object },
    name: { type: String },
    selectedValue: { type: String },
  };

  constructor() {
    super();
    this.name = 'name';
  }

  _handleCheckChange(e) {
    const { value } = e.detail;
    this.selectedValue = value;

    const radios = this.querySelectorAll('radio-component');

    radios.forEach((radio) => {
      radio.renderRoot.querySelector('input').checked =
        this.selectedValue === radio.value;
    });
  }

  firstUpdated() {
    const radios = this.querySelectorAll('radio-component');

    radios.forEach((radio) => {
      radio.name = this.name;
      radio.checked = this.selectedValue === radio;
    });
  }

  render() {
    return html`
      <slo class="radio-group" @radio-checked=${this._handleCheckChange}></slo>
    `;
  }
}

customElements.define('radio-group-component', RadioGroup);
