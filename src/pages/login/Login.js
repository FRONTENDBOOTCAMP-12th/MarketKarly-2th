import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import '@/assets/font/Pretendard.css';
import '@/components/Button/BtnFilled';
import '@/components/Button/BtnEmptied';
import '@/components/Input/InputText';
import Swal from 'sweetalert2';
import pb from '@/api/pocketbase';

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
        }
      }

      .input-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        margin-bottom: var(--space-lg);
      }

      .find-container {
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

      .button-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    `,
  ];

  constructor() {
    super();
    this.email = '';
    this.password = '';
  }

  handleInputChange(e) {
    const { name, value } = e.detail;
    if (name === 'idField') {
      this.email = value;
    } else if (name === 'pwField') {
      this.password = value;
    }
  }

  async handleLogin(e) {
    e.preventDefault();

    if (!this.email || !this.password) {
      Swal.fire({
        title: '로그인 실패',
        text: '아이디와 비밀번호를 모두 입력해주세요.',
        icon: 'warning',
        confirmButtonText: '확인',
        confirmButtonColor: '#283198',
      });
      return;
    }

    try {
      const response = await pb
        .collection('users')
        .authWithPassword(this.email, this.password);

      const { record, token } = JSON.parse(
        localStorage.getItem('pocketbase_auth') ?? '{}'
      );

      localStorage.setItem(
        'auth',
        JSON.stringify({
          isAuth: !!record,
          user: record,
          token: token,
        })
      );

      window.location.href = '/';
    } catch (error) {
      Swal.fire({
        title: '로그인 실패',
        text: '아이디 또는 비밀번호가 올바르지 않습니다.',
        icon: 'error',
        confirmButtonText: '확인',
        confirmButtonColor: '#283198',
      });
    }
  }

  render() {
    return html`
      <div class="container">
        <h1>로그인</h1>
        <form>
          <div class="input-container">
            <text-component
              name="idField"
              type="email"
              placeholder="아이디를 입력해주세요"
              width="100%"
              height="50px"
              @input-change=${this.handleInputChange}
            ></text-component>

            <text-component
              name="pwField"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              width="100%"
              height="50px"
              @input-change=${this.handleInputChange}
            ></text-component>
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
            <a href="/src/pages/register/"
              ><btn-emptied-component
                width="100%"
                text="회원가입"
              ></btn-emptied-component
            ></a>
          </div>
        </form>
      </div>
    `;
  }
}

customElements.define('login-page', Login);
