import { LitElement, html, css } from 'lit';
import '@/components/Form';
import reset from '@/styles/reset';

class Register extends LitElement {
  static styles = [
    reset,
    css`
      .register {
        width: 640px;
        margin: 5rem auto;

        h2 {
          text-align: center;
          margin: var(--space-2xl) auto;
        }

        div {
          position: relative;
          text-align: right;
          font-size: var(--font-sm);

          img {
            position: absolute;
            top: 0;
            right: 68px;
          }
        }

        hr {
          height: 3px;
          background-color: #000;
        }
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html`
      <section class="register">
        <h2>회원가입</h2>
        <div>
          <img src="/icon/asterisk.svg" alt="*" />
          필수입력사항
        </div>
        <hr />
        <form-component></form-component>
      </section>
    `;
  }
}

customElements.define('register-page', Register);
