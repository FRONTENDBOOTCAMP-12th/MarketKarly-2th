import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import '@/assets/font/Pretendard.css';
import '@/components/Button/BtnFilled';
import '@/components/Button/BtnEmptied';
import Swal from 'sweetalert2';

class Login extends LitElement {
  static styles = [
    reset,
    css`
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 80px 0;

        & h1 {
          font-size: var(--font-xl);
          font-weight: var(--text-semi-bold);
          margin-bottom: 2.8125rem;
        }

        & form {
          width: 340px;
          & input {
            box-sizing: border-box;
            border: 1px solid var(--gray-color-300, #a6a6a6);
            border-radius: 4px;
            height: 50px;
            width: 100%;
            padding: var(--space-lg) var(--space-2xl);
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
            justify-content: flex-end;
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
    `,
  ];

  constructor() {
    super();
    this.email = '';
    this.password = '';
  }

  handleInputChange(e) {
    const { id, value } = e.target;
    if (id === 'idField') {
      this.email = value;
    } else if (id === 'pwField') {
      this.password = value;
    }
  }

  handleLogin(e) {
    e.preventDefault();
    console.log('click');

    const validEmail = 'admin@naver.com';
    const validPassword = 'qwer1234@';

    if (!this.email || !this.password) {
      Swal.fire({
        title: '로그인 실패',
        text: '아이디와 비밀번호를 모두 입력해주세요.',
        icon: 'warning',
      });
      return;
    }

    if (this.email === validEmail && this.password === validPassword) {
      window.location.href = '/';
    } else {
      Swal.fire({
        title: '로그인 실패',
        text: '아이디 또는 비밀번호가 올바르지 않습니다.',
        icon: 'error',
      });
    }
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
            <btn-filled-component
              width="100%"
              text="로그인"
              @click="${this.handleLogin}"
            ></btn-filled-component>
            <btn-emptied-component
              width="100%"
              text="회원가입"
            ></btn-emptied-component>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('login-page', Login);
