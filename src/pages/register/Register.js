import '@/components/Button/BtnEmptied';
import '@/components/Button/BtnFilled';
import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';

class Register extends LitElement {
  static styles = [
    reset,
    a11y,
    css`
      .register {
        width: 640px;
        margin: var(--space-7xl) auto;
      }

      .register-header {
        text-align: center;
        font-size: var(--font-lg);
        color: var(--black-color, #000);
      }

      #required {
        display: block;
        text-align: right;
        position: relative;
        font-size: var(--font-sm);

        img {
          position: absolute;
          top: -3px;
          right: 64px;
        }
      }

      .register-form {
        border-top: 2px solid var(--black-color);
        margin-top: var(--space-md);
        padding: var(--space-2xl) 0;
        display: flex;
        flex-direction: column;

        hr {
          width: 100%;
          color: var(--content-text-color, #333);
        }
      }

      .id,
      .pw,
      .pw-confirm,
      .name,
      .email,
      .phone,
      .address,
      .gender,
      .birth,
      .optional,
      .submit-button {
        display: grid;
        margin-block: var(--space-2xl);
        gap: var(--space-md);
        grid-template-columns: 140px 1fr 145px;
        align-items: center;

        input[type='text'],
        input[type='password'],
        input[type='email'] {
          height: 44px;
          width: 100%;
          border: 1px solid var(--gray-color-300, #a6a6a6);
          border-radius: 4px;
          padding: var(--space-md) var(--space-2xl);

          &::placeholder {
            color: var(--gray-color-400, #898989);
          }
        }
      }

      .label-wrapper {
        font-weight: var(--text-semi-bold);
        position: relative;
      }

      :is(.id, .email, .phone) img {
        position: absolute;
        top: -4px;
        left: 44px;
      }

      .pw img {
        position: absolute;
        top: -4px;
        left: 56px;
      }

      .pw-confirm img {
        position: absolute;
        top: -4px;
        left: 88px;
      }

      :is(.name, .address) img {
        position: absolute;
        top: -4px;
        left: 30px;
      }

      .agreement .required {
        position: absolute;
        top: -4px;
        left: 86px;
      }

      .address p {
        font-size: var(--font-sm);
        line-height: var(--regular-line-height);
        color: var(--color-black, #000);
      }

      .gender-label {
        font-weight: var(--text-semi-bold);
      }

      .gender-wrapper {
        position: relative;
        display: flex;
        justify-content: space-between;

        div {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        input[type='radio'] {
          appearance: none;
          background: url('/icon/unchecked-circle.svg');
          cursor: pointer;
          width: 24px;
          height: 24px;
          margin: 0;

          &:checked {
            background: url('/icon/checked-circle.svg');
          }
        }

        label {
          font-weight: var(--text-semi-bold);
        }
      }

      .birth {
        label {
          font-weight: var(--text-semi-bold);
        }
        .input-wrapper {
          color: var(--gray-color-400, #898989);
          display: flex;
          height: 44px;
          width: 100%;
          border: 1px solid var(--gray-color-300, #a6a6a6);
          border-radius: 4px;
          padding: var(--space-md) var(--space-2xl);
          align-items: center;
          justify-content: center;

          input {
            height: auto;
            text-align: center;
            border: none;

            &::placeholder {
              color: var(--gray-color-400, #898989);
            }
          }
        }
      }

      .optional {
        font-weight: var(--text-semi-bold);

        .optional-wrapper {
          display: flex;
          justify-content: space-between;

          div {
            display: flex;
            align-items: center;
            gap: var(--space-md);

            input[type='checkbox'] {
              appearance: none;
              background: url('/icon/unchecked.svg');
              height: 24px;
              width: 24px;

              &:checked {
                background: url('/icon/checked.svg');
              }
            }
          }
        }
      }

      .agreement {
        margin-top: var(--space-2xl);
        font-weight: var(--text-semi-bold);
        display: grid;
        grid-template-columns: 140px 1fr;
        border-bottom: 1px solid var(--gray-color-200, #c4c4c4);

        .label-wrapper {
          justify-self: left;
        }

        input[type='checkbox'] {
          appearance: none;
          background: url('/icon/unchecked-circle.svg');
          background-size: cover;
          background-repeat: no-repeat;
          cursor: pointer;
          width: 24px;
          height: 24px;
          margin: 0;

          &:checked {
            background: url('/icon/checked-circle.svg');
          }
        }

        .all,
        .terms,
        .personal-info,
        .event-info,
        .age-agree {
          display: flex;
          gap: var(--space-lg);
          margin-bottom: var(--space-3xl);
        }

        .all {
          label {
            font-size: var(--font-lg);
          }

          p {
            font-size: var(--font-sm);
            color: var(--gray-color-400, #898989);
            line-height: var(--regular-line-height);
            font-weight: var(--text-regular);
          }
        }

        .terms,
        .personal-info,
        .event-info,
        .age-agree {
          & div {
            gap: var(--space-lg);
            display: flex;
            align-items: center;
            font-weight: var(--text-regular);
            flex: 1;
          }

          button {
            margin-right: var(--space-7xl);
            background: transparent;
            border: none;
            color: var(--primary-color);
            font-size: var(--font-sm);
            font-weight: var(--text-regular);
            display: flex;
            gap: var(--space-sm);
          }
        }
      }

      .button {
        grid-column: 2 / 3;
        margin-top: var(--space-2xl);
      }
    `,
  ];

  constructor() {
    super();
  }

  get allAgree() {
    return this.renderRoot.querySelector('#all');
  }

  get agreementCheckbox() {
    return this.renderRoot.querySelectorAll(
      ".agreement input[type='checkbox']"
    );
  }

  // 전체 체킹 함수
  handleClickAllAgree() {
    const isChecked = this.allAgree.checked;
    this.agreementCheckbox.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  }

  render() {
    return html`
      <section class="register">
        <h2 class="register-header">회원가입</h2>
        <span id="required"
          ><img
            src="/icon/asterisk.svg"
            alt="*"
            aria-labelledby="required"
          />필수입력사항</span
        >
        <form class="register-form" action="#">
          <article class="id">
            <div class="label-wrapper">
              <label for="id">아이디</label>
              <img src="/icon/asterisk.svg" alt="*" aria-label="필수입력사항" />
            </div>
            <input id="id" type="text" placeholder="아이디를 입력해주세요" />
            <btn-emptied-component
              width="143px"
              height="44px"
              text="중복확인"
            ></btn-emptied-component>
          </article>
          <article class="pw">
            <div class="label-wrapper">
              <label for="pw">비밀번호</label>
              <img src="/icon/asterisk.svg" alt="*" aria-label="필수입력사항" />
            </div>
            <input
              id="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </article>
          <article class="pw-confirm">
            <div class="label-wrapper">
              <label for="pw-confirm">비밀번호 확인</label>
              <img src="/icon/asterisk.svg" alt="*" aria-label="필수입력사항" />
            </div>
            <input
              id="pw-confirm"
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요"
            />
          </article>
          <article class="name">
            <div class="label-wrapper">
              <label for="name">이름</label>
              <img src="/icon/asterisk.svg" alt="*" aria-label="필수입력사항" />
            </div>
            <input id="name" type="text" placeholder="이름을 입력해주세요" />
          </article>
          <article class="email">
            <div class="label-wrapper">
              <label for="email">이메일</label>
              <img src="/icon/asterisk.svg" alt="*" aria-label="필수입력사항" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="예) marketkarly@karly.com"
            />
            <btn-emptied-component
              width="143px"
              height="44px"
              text="중복확인"
            ></btn-emptied-component>
          </article>
          <article class="phone">
            <div class="label-wrapper">
              <label for="phone">휴대폰</label>
              <img src="/icon/asterisk.svg" alt="*" aria-label="필수입력사항" />
            </div>
            <input id="phone" type="text" placeholder="숫자만 입력해주세요" />
            <btn-emptied-component
              width="143px"
              height="44px"
              text="인증번호 받기"
            ></btn-emptied-component>
          </article>
          <article class="address">
            <div class="label-wrapper">
              <label for="address">주소</label>
              <img src="/icon/asterisk.svg" alt="*" aria-label="필수입력사항" />
            </div>
            <div class="button-wrapper">
              <btn-emptied-component
                width="100%"
                height="44px"
                text="주소 검색"
              ></btn-emptied-component>
              <p>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
            </div>
          </article>
          <article class="gender">
            <span class="gender-label">성별</span>
            <div class="gender-wrapper">
              <div>
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  aria-checked="false"
                />
                <label for="male">남자</label>
              </div>
              <div>
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  aria-checked="false"
                />
                <label for="female">여자</label>
              </div>
              <div>
                <input
                  id="none"
                  type="radio"
                  name="gender"
                  value="none"
                  aria-checked="true"
                  checked
                />
                <label for="none">선택안함</label>
              </div>
            </div>
          </article>
          <article class="birth">
            <label for="birth">생년월일</label>
            <div class="input-wrapper">
              <input type="text" placeholder="YYYY" />
              <span class="sep">/</span>
              <input type="text" placeholder="MM" />
              <span class="sep">/</span>
              <input type="text" placeholder="DD" />
            </div>
          </article>
          <article class="optional">
            <span class="optional-label">추가입력사항</span>
            <div class="optional-wrapper">
              <div>
                <input
                  id="invite"
                  type="checkbox"
                  name="invite"
                  value="isFriend"
                  aria-checked="false"
                />
                <label for="invite">친구초대 추천인 아이디</label>
              </div>
              <div>
                <input
                  id="event"
                  type="checkbox"
                  name="event"
                  value="isEvent"
                  aria-checked="false"
                />
                <label for="event">참여 이벤트명</label>
              </div>
            </div>
          </article>

          <hr />

          <article class="agreement">
            <div class="label-wrapper">
              <span class="agreement-label">이용약관동의</span>
              <img
                class="required"
                src="/icon/asterisk.svg"
                alt="*"
                aria-label="필수입력사항"
              />
            </div>
            <div class="agreement-wrapper">
              <section class="all">
                <input
                  @click=${this.handleClickAllAgree}
                  id="all"
                  type="checkbox"
                />
                <div>
                  <label for="all">전체 동의합니다.</label>
                  <p>
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                    서비스를 이용할 수 있습니다.
                  </p>
                </div>
              </section>
              <section class="terms">
                <div>
                  <input type="checkbox" id="terms" />
                  <label for="terms">이용약관 동의 (필수)</label>
                </div>
                <button class="show-terms">
                  약관보기<img src="/icon/arrow-right.svg" alt="약관보기" />
                </button>
              </section>
              <section class="personal-info">
                <div>
                  <input type="checkbox" id="personal-info" />
                  <label for="personal-info"
                    >개인정보 수집 · 이용 동의 (필수)</label
                  >
                </div>
                <button class="show-terms">
                  약관보기<img src="/icon/arrow-right.svg" alt="약관보기" />
                </button>
              </section>
              <section class="event-info">
                <div>
                  <input type="checkbox" id="event-info" />
                  <label for="event-info"
                    >무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)</label
                  >
                </div>
                <button class="show-terms">
                  약관보기
                  <img src="/icon/arrow-right.svg" alt="" />
                </button>
              </section>
              <section class="age-agree">
                <div>
                  <input type="checkbox" id="age-agree" />
                  <label for="event-info"
                    >본인은 만 14세 이상입니다. (필수)</label
                  >
                </div>
                <button class="show-terms">
                  약관보기<img src="/icon/arrow-right.svg" alt="약관보기" />
                </button>
              </section>
            </div>
          </article>
          <article class="submit-button">
            <btn-filled-component
              class="button"
              text="가입하기"
              width="100%"
              height="54px"
            ></btn-filled-component>
          </article>
        </form>
      </section>
    `;
  }
}

customElements.define('register-page', Register);
