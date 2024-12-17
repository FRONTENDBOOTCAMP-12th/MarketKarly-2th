import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import '@/assets/font/Pretendard.css';
import '@/components/Button/BtnFilled';
import '@/components/Button/BtnEmptied';

class Login extends LitElement {
  static styles = [
    reset,
    css`
      .container {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;

        & h1 {
          font-size: var(--font-xl);
          font-weight: var(--text-semi-bold);
          margin-bottom: 2.8125rem;
        }

        & form {
          & input {
            box-sizing: border-box;
            border: 1px solid var(--gray-color-300, #a6a6a6);
            border-radius: 4px;
            padding: var(--space-xl);
            min-width: 340px;
            margin-bottom: var(--space-lg);
            outline: none;

            &:focus {
              border: 1px solid var(--primary-color, #283198);
            }

            &::placeholder {
              font-size: var(--font-md);
              color: var(--gray-color-400, #898989);
            }
          }

          & .find-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: end;
            gap: 4px;
            margin-bottom: var(--space-4xl);

            & a,
            span {
              font-size: var(--font-sm);
              font-weight: var(--text-regular);
            }
          }

          & .button-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
        }
      }
      .error-message {
        color: red;
        font-size: var(--font-sm);
        margin-top: var(--space-lg);
      }
    `,
  ];

  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }

  // 임의로 validation 지정
  // api 연결하면 정규표현식 validation 필요없을듯
  // 입력값이 없거나 아이디 비밀번호가 일치하지 않을 때 errorMessage 띄움

  validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  validatePassword(password) {
    const re = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;
    return re.test(password);
  }

  handleInputChange(e) {
    const { id, value } = e.target;
    this[id] = value;
    this.errorMessage = '';
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.email || !this.password) {
      this.errorMessage = '아이디와 비밀번호를 모두 입력해주세요.';
      this.requestUpdate();
      return;
    }

    if (
      this.validateEmail(this.email) &&
      this.validatePassword(this.password)
    ) {
      window.location.href = '/';
    } else {
      this.errorMessage = '아이디 또는 비밀번호가 올바르지 않습니다.';
    }

    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        ${reset}
      </style>
      <div class="container">
        <h1>로그인</h1>
        <form>
          <div>
            <label for="idField"></label>
            <input
              type="email"
              id="idField"
              placeholder="아이디를 입력해주세요"
              @input="${this.handleInputChange}"
            />
          </div>
          <div>
            <label for="pwField"></label>
            <input
              type="password"
              id="pwField"
              placeholder="비밀번호를 입력해주세요"
              @input="${this.handleInputChange}"
            />
          </div>

          <div class="find-container">
            <a class="find-id" href="/">아이디 찾기</a>
            <span>|</span>
            <a class="find-pw" href="/">비밀번호 찾기</a>
          </div>

          <div class="button-container">
            <btn-filled-element
              width="100%"
              text="로그인"
              @click="${this.handleSubmit}"
            ></btn-filled-element>
            <btn-emptied-element
              width="100%"
              text="회원가입"
            ></btn-emptied-element>
          </div>

          ${this.errorMessage
            ? html`<div class="error-message">${this.errorMessage}</div>`
            : ''}
        </form>
      </div>
    `;
  }
}

customElements.define('login-page', Login);
