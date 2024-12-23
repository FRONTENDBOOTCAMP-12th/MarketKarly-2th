import { LitElement, html, css } from 'lit';
import '@/components/Input/InputText';
import '@/components/Input/InputCheckbox';
import '@/components/Input/CheckboxGroup';
import '@/components/Input/InputRadio';
import '@/components/Input/RadioGroup';
import '@/components/Button/BtnEmptied';
import reset from '@/styles/reset';
import Swal from 'sweetalert2';

class Form extends LitElement {
  static styles = [
    reset,
    css`
      #form {
        max-width: 680px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: var(--space-2xl);

        & > div {
          display: grid;
          grid-template-columns: 140px 333px 145px;
          gap: var(--space-md);
          margin-bottom: var(--space-2xl);
        }

        .error-message {
          position: absolute;
          color: var(--info-error-color, #f03f40);
          font-size: var(--font-sm);
          font-weight: var(--text-semi-bold);
          margin-top: var(--space-sm);
        }
      }

      .title {
        position: relative;
        justify-content: start;
        align-self: center;
        display: flex;

        font-size: var(--font-md);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);
      }
      :is(.id, .email, .phone) img {
        position: absolute;
        top: 0px;
        left: 44px;
      }

      .pw img {
        position: absolute;
        top: 0px;
        left: 58px;
      }

      .confirm img {
        position: absolute;
        top: 0px;
        left: 90px;
      }

      .address {
        img {
          position: absolute;
          top: 0px;
          left: 28px;
        }

        .address-info {
          position: absolute;
          color: var(--content-text-color, #333);
          font-size: var(--font-sm);
          font-weight: var(--text-semi-bold);
          margin-top: var(--space-sm);
        }
      }

      .gender-wrapper {
        display: flex;
        justify-content: space-between;
      }
    `,
  ];

  static properties = {
    validation: { type: Object },
    isPass: { type: Object },
    data: { type: Object },
  };

  constructor() {
    super();
    this.isPass = {
      id: true,
      password: true,
      confirm: true,
      email: true,
      phone: true,
    };
    this.validation = {
      id: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/g,
      password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/,
      email: /^(?=.*@)(?=.*\.)/,
      phone: /[0-9]/g,
    };
    this.data = {};
  }

  _handleChangeInput(e) {
    const { value, name } = e.detail;
    this.data[name] = value;
  }

  _handleCheckId(id) {
    if (this.validation.id.test(id)) {
      this.isPass.id = true;
      Swal.fire({
        text: '사용 가능한 아이디입니다.',
        icon: 'success',
      });
    } else {
      this.isPass.id = false;
    }
    this.requestUpdate();
  }

  _handleCheckPw(pw) {
    if (this.validation.password.test(pw)) {
      this.isPass.password = true;
    } else {
      this.isPass.password = false;
    }
    this.requestUpdate();
  }

  _handleCheckConfirm(confirm) {
    if (this.data.password === confirm) {
      this.isPass.confirm = true;
    } else {
      this.isPass.confirm = false;
    }
    this.requestUpdate();
  }

  _handleCheckEmail(email) {
    if (this.validation.email.test(email)) {
      this.isPass.email = true;
      Swal.fire({
        text: '사용 가능한 이메일입니다.',
        icon: 'success',
      });
    } else {
      this.isPass.email = false;
    }
    this.requestUpdate();
  }

  _handleCheckPhone(phone) {
    if (this.validation.phone.test(Number(phone))) {
      this.isPass.phone = true;
      Swal.fire({
        text: '인증번호가 발송되었습니다.',
        icon: 'success',
      });
    } else {
      this.isPass.phone = false;
      console.log(Number(phone));
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <form id="form" action="#">
        <div class="id" @input-change=${this._handleChangeInput}>
          <div class="title">
            아이디
            <img src="/icon/asterisk.svg" alt="*" />
          </div>
          <div>
            <text-component
              width="100%"
              placeholder="아이디를 입력해주세요"
              name="id"
            ></text-component>
            ${!this.isPass.id
              ? html`<p class="error-message">
                  아이디는 영문 + 숫자 조합으로 8자리 이상 입력해주세요.
                </p>`
              : null}
          </div>
          <btn-emptied-component
            height="44px"
            width="100%"
            text="중복확인"
            @click=${() => {
              this._handleCheckId(this.data.id);
            }}
          ></btn-emptied-component>
        </div>

        <div class="pw" @input-change=${this._handleChangeInput}>
          <div class="title">
            비밀번호
            <img src="/icon/asterisk.svg" alt="*" />
          </div>
          <div>
            <text-component
              width="100%"
              placeholder="비밀번호 입력해주세요"
              type="password"
              name="password"
              @input=${() => {
                this._handleCheckPw(this.data.password);
              }}
            ></text-component>
            ${!this.isPass.password
              ? html`<p class="error-message">
                  특수문자를 포함하여 6자리 이상으로 입력해주세요.
                </p>`
              : null}
          </div>
        </div>

        <div class="confirm" @input-change=${this._handleChangeInput}>
          <div class="title">
            비밀번호 확인
            <img src="/icon/asterisk.svg" alt="*" />
          </div>
          <div>
            <text-component
              width="100%"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              type="password"
              name="confirm"
              @input=${() => {
                this._handleCheckConfirm(this.data.confirm);
              }}
              >같은 비밀번호를 입력해주세요.</text-component
            >
            ${!this.isPass.confirm
              ? html`<p class="error-message">같은 비밀번호를 입력해주세요.</p>`
              : null}
          </div>
        </div>

        <div class="email" @input-change=${this._handleChangeInput}>
          <div class="title">
            이메일
            <img src="/icon/asterisk.svg" alt="*" />
          </div>
          <div>
            <text-component
              width="100%"
              placeholder="예) admin@naver.com"
              type="email"
              name="email"
            ></text-component>
            ${!this.isPass.email
              ? html`<p class="error-message">
                  "@", "."를 포함하는 이메일 형식으로 입력해주세요.
                </p>`
              : null}
          </div>
          <btn-emptied-component
            height="44px"
            width="100%"
            text="중복확인"
            @click=${() => {
              this._handleCheckEmail(this.data.email);
            }}
          ></btn-emptied-component>
        </div>

        <div class="phone" @input-change=${this._handleChangeInput}>
          <div class="title">
            휴대폰
            <img src="/icon/asterisk.svg" alt="*" />
          </div>
          <div>
            <text-component
              width="100%"
              placeholder="'-' 없이 숫자만 입력해주세요."
              type="text"
              name="phone"
            ></text-component>
            ${!this.isPass.phone
              ? html`<p class="error-message">
                  올바른 형식의 전화번호를 입력해주세요.
                </p>`
              : null}
          </div>
          <btn-emptied-component
            height="44px"
            width="100%"
            text="인증번호 받기"
            @click=${() => {
              this._handleCheckPhone(this.data.phone);
            }}
          ></btn-emptied-component>
        </div>

        <div class="address">
          <div class="title">
            주소
            <img src="/icon/asterisk.svg" alt="*" />
          </div>
          <div>
            <btn-emptied-component
              height="44px"
              width="100%"
              text="주소검색"
              @click=${() => {
                this._handleCheckPhone(this.data.phone);
              }}
            ></btn-emptied-component>
            <p class="address-info">
              배송지에 따라 상품 정보가 달라질 수 있습니다.
            </p>
          </div>
        </div>

        <div class="gender">
          <div>
            <h3 class="title">성별</h3>
          </div>
          <radio-group-component class="gender-wrapper" name="gender">
            <radio-component value="male">남자</radio-component>
            <radio-component value="female">여자</radio-component>
            <radio-component value="none">선택안함</radio-component>
          </radio-group-component>
        </div>
      </form>
    `;
  }
}

customElements.define('form-component', Form);
