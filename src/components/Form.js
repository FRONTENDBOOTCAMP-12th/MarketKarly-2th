import { LitElement, html, css } from 'lit';
import '@/components/Input/InputText';
import '@/components/Input/InputCheckbox';
import '@/components/Input/CheckboxGroup';
import '@/components/Input/InputRadio';
import '@/components/Input/RadioGroup';
import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnDisabled';
import '@/components/Button/BtnFilled';
import reset from '@/styles/reset';
import Swal from 'sweetalert2';

class Form extends LitElement {
  static styles = [
    reset,
    css`
      #form {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        & > div {
          display: grid;
          grid-template-columns: 140px 1fr 150px;
          gap: var(--space-md);
          margin-block: var(--space-2xl);
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

        .address-detail {
          display: flex;
          flex-direction: column;
          margin-top: var(--space-sm);
          gap: var(--space-sm);
        }
      }

      .wrapper {
        display: flex;
        justify-content: space-between;
      }

      .birth-wrapper {
        width: 100%;
        height: 44px;
        border: 1px solid var(--gray-color-300, #a6a6a6);
        border-radius: 4px;
        color: var(--gray-color-300, #a6a6a6);
        display: flex;
        justify-content: center;
        align-items: center;

        input {
          height: 90%;
          width: 60px;
          text-align: center;
          border: none;
        }
      }

      .agreement {
        margin: 0;
        padding-block: var(--space-2xl);
        border-top: 1px solid var(--content-text-color, #333);
        border-bottom: 1px solid var(--gray-color-200, #c4c4c4);
        .title {
          align-self: flex-start;
          margin-top: var(--space-md);
        }

        .check-wrapper {
          grid-column: 2 / span 2;
          display: flex;
          flex-direction: column;

          > div {
            margin-bottom: var(--space-2xl);
          }

          & .all {
            font-size: var(--font-lg);
            font-weight: var(--text-semi-bold);
          }

          .agreement-info {
            color: var(--gray-color-400, #898989);
            font-size: var(--font-sm);
            line-height: var(--regular-line-height);
            margin-left: var(--space-5xl);
          }
        }

        .agree-wrapper {
          display: flex;
          justify-content: space-between;
          font-weight: var(--text-regular);

          button {
            line-height: 0;
            font-size: var(--font-sm);
            color: var(--primary-color, #283198);
            display: flex;
            align-items: center;
            gap: var(--space-sm);
            background-color: transparent;
            border: none;
            margin: 0;
            padding: 0;
          }
        }
      }

      .submit {
        grid-column: 2 / span 1;
      }
    `,
  ];

  static properties = {
    validation: { type: Object },
    isPass: { type: Object },
    data: { type: Object },
    isIdChecked: { type: String },
    isEmailChecked: { type: String },
    isPhoneChecked: { type: String },
    address: { type: String },
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
    this.isIdChecked = false;
    this.isEmailChecked = false;
    this.isPhoneChecked = false;
    this.address = '';
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
        confirmButtonText: '확인',
        confirmButtonColor: '#283198',
      }).then(() => {
        this.isIdChecked = true;
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
        confirmButtonText: '확인',
        confirmButtonColor: '#283198',
      }).then(() => {
        this.isEmailChecked = true;
      });
    } else {
      this.isPass.email = false;
    }
    this.requestUpdate();
  }

  _handleCheckPhone(phone) {
    if (
      this.validation.phone.test(Number(phone)) &&
      this.data.phone.length === 11
    ) {
      this.isPass.phone = true;
      Swal.fire({
        text: '인증번호가 발송되었습니다.',
        icon: 'success',
        confirmButtonText: '확인',
        confirmButtonColor: '#283198',
      }).then(() => {
        this.isPhoneChecked = true;
      });
    } else {
      this.isPass.phone = false;
    }
    this.requestUpdate();
  }

  _fetchUserData(e) {
    e.preventDefault();
    try {
      const {
        email,
        password,
        confirm: passwordConfirm,
        id: name,
        phone,
      } = this.data;
      const sendingData = { email, password, passwordConfirm, name };

      if (
        email &&
        name &&
        password === passwordConfirm &&
        phone &&
        this.address
      ) {
        Swal.fire({
          title: '회원가입 완료',
          text: '로그인 화면으로 이동합니다.',
          icon: 'success',
          confirmButtonText: '확인',
          confirmButtonColor: '#283198',
        }).then(() => {
          location.href = '/src/pages/login/';
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: '필수 항목을 모두 입력해주세요.',
          icon: 'error',
          confirmButtonText: '확인',
          confirmButtonColor: '#283198',
        }).then(() => {
          location.reload();
          throw new Error('데이터가 올바르게 입력되지 않았습니다.');
        });
      }
    } catch (err) {
      console.error('에러가 발생하였습니다 ->', err);
    }
  }

  _openAddressAPI() {
    const daum = new window.daum.Postcode({
      oncomplete: (data) => {
        this.address = `${data.roadAddress}(${data.buildingName})`;
      },
    });
    daum.open();
  }

  render() {
    return html`
      <form id="form" action="#">
        <div class="id" @input-change=${this._handleChangeInput}>
          <div class="title" @click=${this.test}>
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
          ${!this.isIdChecked
            ? html`
                <btn-emptied-component
                  height="44px"
                  width="100%"
                  text="중복확인"
                  @click=${() => {
                    this._handleCheckId(this.data.id);
                  }}
                ></btn-emptied-component>
              `
            : html`
                <btn-disabled-component
                  text="중복확인"
                  height="44px"
                  width="100%"
                ></btn-disabled-component>
              `}
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
          ${!this.isEmailChecked
            ? html`
                <btn-emptied-component
                  height="44px"
                  width="100%"
                  text="중복확인"
                  @click=${() => {
                    this._handleCheckEmail(this.data.email);
                  }}
                ></btn-emptied-component>
              `
            : html`
                <btn-disabled-component
                  text="중복확인"
                  height="44px"
                  width="100%"
                ></btn-disabled-component>
              `}
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
                  올바른 형식의 11자리 전화번호를 입력해주세요.
                </p>`
              : null}
          </div>
          ${!this.isPhoneChecked
            ? html`
                <btn-emptied-component
                  height="44px"
                  width="100%"
                  text="인증번호 받기"
                  @click=${() => {
                    this._handleCheckPhone(this.data.phone);
                  }}
                ></btn-emptied-component>
              `
            : html`
                <btn-disabled-component
                  text="인증번호 받기"
                  height="44px"
                  width="100%"
                ></btn-disabled-component>
              `}
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
              @click=${this._openAddressAPI}
            ></btn-emptied-component>
            ${this.address
              ? html`
                  <div class="address-detail">
                    <text-component
                      width="100%"
                      value=${this.address}
                      disabled=${true}
                    ></text-component>
                    <text-component
                      class="exact-address"
                      width="100%"
                      placeholder="상세주소를 입력해주세요"
                    ></text-component>
                  </div>
                `
              : null}

            <p class="address-info">
              배송지에 따라 상품 정보가 달라질 수 있습니다.
            </p>
          </div>
        </div>

        <div class="gender">
          <div class="title">성별</div>
          <radio-group-component class="wrapper" name="gender">
            <radio-component value="male">남자</radio-component>
            <radio-component value="female">여자</radio-component>
            <radio-component value="none">선택안함</radio-component>
          </radio-group-component>
        </div>

        <div class="birth">
          <div class="title">생년월일</div>
          <div class="birth-wrapper">
            <input type="text" name="year" placeholder="YYYY" maxlength="4" />
            /
            <input type="text" name="month" placeholder="MM" maxlength="2" /> /
            <input type="text" name="day" placeholder="DD" maxlength="2" />
          </div>
        </div>

        <div class="add">
          <div class="title">추가입력 사항</div>
          <div>
            <radio-group-component class="wrapper" name="add-option">
              <radio-component value="invite"
                >친구초대 추천인 아이디</radio-component
              >
              <radio-component value="event">참여 이벤트명</radio-component>
            </radio-group-component>
          </div>
        </div>

        <div class="agreement">
          <div class="title">이용약관동의</div>
          <checkbox-group-component class="check-wrapper">
            <div class="agree-all">
              <checkbox-component class="all" value="all" name="agreement"
                >전체 동의합니다.
              </checkbox-component>
              <p class="agreement-info">
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </p>
            </div>
            <div class="agree-wrapper">
              <checkbox-component
                style="--font-weight: 400;"
                class="agree-use"
                value="use"
                >이용약관 동의 (필수)
              </checkbox-component>
              <button type="button">
                약관보기
                <img src="/icon/arrow-right.svg" alt="" aria-hidden="true" />
              </button>
            </div>

            <div class="agree-wrapper">
              <checkbox-component
                style="--font-weight: 400;"
                class="agree-personal"
                value="personal"
                >개인정보 수집 • 이용동의 (필수)
              </checkbox-component>
              <button type="button">
                약관보기
                <img src="/icon/arrow-right.svg" alt="" aria-hidden="true" />
              </button>
            </div>
            <div class="agree-wrapper">
              <checkbox-component
                style="--font-weight: 400;"
                class="agree-event"
                value="event-agree"
                >무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)
              </checkbox-component>
              <button type="button">
                약관보기
                <img src="/icon/arrow-right.svg" alt="" aria-hidden="true" />
              </button>
            </div>

            <div class="agree-wrapper">
              <checkbox-component
                style="--font-weight: 400;"
                class="agree-age"
                value="age"
                >본인은 만 14세 이상입니다. (필수)
              </checkbox-component>
              <button type="button">
                약관보기
                <img src="/icon/arrow-right.svg" alt="" aria-hidden="true" />
              </button>
            </div>
          </checkbox-group-component>
        </div>
        ${this.data.email &&
        this.data.password &&
        this.isPass.email &&
        this.isPass.password
          ? html`
              <div>
                <btn-filled-component
                  class="submit"
                  text="가입하기"
                  width="100%"
                  @click=${this._fetchUserData}
                  type="submit"
                ></btn-filled-component>
              </div>
            `
          : html`<div>
              <btn-disabled-component
                class="submit"
                text="가입하기"
                width="100%"
              ></btn-disabled-component>
            </div>`}
      </form>
    `;
  }
}

customElements.define('form-component', Form);
