import reset from '@/styles/reset';
import { LitElement, html, css } from 'lit';

class Footer extends LitElement {
  static styles = [
    reset,
    css`
      #footer {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: repeat(3, auto);
        min-width: 1200px;

        .footer-top {
          grid-column: 2 / 3;
          display: flex;
          flex-flow: row nowrap;
          margin-top: var(--space-4xl);
          margin-bottom: var(--space-5xl);
          justify-content: center;
          gap: 5.4375rem;

          .service {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            h2 {
              font-size: var(--font-lg);
            }

            .tel {
              display: flex;
              align-items: center;
              flex-flow: row nowrap;
              gap: var(--space-md);

              h3 {
                font-size: var(--font-4xl);
                font-weight: var(--text-bold);
              }

              span {
                font-size: var(--font-md);
                font-weight: var(--text-semi-bold);
              }
            }
          }
        }
      }

      div:has(> h4) {
        display: flex;
        align-items: center;
        gap: var(--space-xl);

        h4 {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--gray-color-200, #c4c4c4);
          font-size: var(--font-md);
          font-weight: var(--text-regular);
          text-align: center;
          width: 140px;
          height: 40px;
          padding: var(--space-sm);
          line-height: var(--regular-line-height);
        }

        p {
          line-height: var(--regular-line-height);
        }
      }
      .non-member {
        display: flex;
        flex-direction: column;
        font-size: var(--font-sm);

        p {
          line-height: var(--regular-line-height);

          a {
            color: var(--primary-color, #283198);
          }
        }
      }

      .about {
        display: flex;
        flex-direction: column;
        gap: var(--space-4xl);

        .nav-list {
          display: flex;
          gap: 0.875rem;

          a {
            font-size: var(--font-md);
            font-weight: var(--text-regular);
          }
        }

        .info {
          font-size: var(--font-sm);

          p {
            line-height: var(--regular-line-height);

            a {
              color: var(--primary-color, #283198);
            }
          }
        }

        .link-list {
          display: flex;
          gap: var(--space-2xl);
        }
      }

      .footer-middle {
        grid-column: 2 / 3;
        display: flex;
        justify-content: center;
        gap: var(--space-2xl);
        font-size: 0.625rem;
        padding-top: var(--space-3xl);
        padding-bottom: var(--space-5xl);
        border-top: 1px solid #ddd;

        div {
          display: flex;
          gap: var(--space-md);

          img {
            height: 34px;
          }

          p {
            line-height: var(--regular-line-height);
          }
        }
      }

      .footer-bottom {
        grid-column: 1 / -1;
        text-align: center;
        font-size: 0.625rem;
        color: var(--gray-color-400, #898989);
        background-color: var(--gray-color-50, #f9f9f9);
        padding-top: var(--space-2xl);
        padding-bottom: var(--space-5xl);

        .copyright {
          margin-top: var(--space-md);
        }
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html`
      <footer id="footer">
        <section class="footer-top">
          <article class="service">
            <h2>고객행복센터</h2>
            <div class="tel">
              <h3>1644-1107</h3>
              <p>월~토요일 오전 7시 - 오후 6시</p>
            </div>
            <div class="kakao">
              <h4 aria-labelledby="kakao-service">카카오톡 문의</h4>
              <p id="kakao-service">
                월~토요일 | 오전 7시 ~ 오후 6시<br />
                일/공휴일 | 오전 7시 - 오후 1시
              </p>
            </div>
            <div class="onebyone">
              <h4 aria-labelledby="info-service">1:1 문의</h4>
              <p id="info-service">
                365일 <br />
                고객센터 운영시간에 순차적으로 답변드리겠습니다.
              </p>
            </div>
            <div class="bulk-order">
              <h4 aria-labelledby="bulk-order-service">대량주문 문의</h4>
              <p id="bulk-order-service">
                월~금요일 | 오전9시 - 오후 6시 <br />
                점심시간 | 낮 12시 - 오후 1시
              </p>
            </div>
            <div class="non-member">
              <p>
                비회원 문의:
                <a href="mailto:help@karlycorp.com">help@karlycorp.com</a><br />
                비회원 대량주문 문의:
                <a href="mailto:help@karlycorp.com">help@karlycorp.com</a>
              </p>
            </div>
          </article>
          <article class="about">
            <nav class="about-nav">
              <ul class="nav-list">
                <li><a href="#">칼릿소개</a></li>
                <li><a href="#">칼릿소개영상</a></li>
                <li><a href="#">인재채용</a></li>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">이용안내</a></li>
              </ul>
            </nav>
            <div class="info">
              <p>
                법인명 (상호) : 주식회사 칼리 | 사업자등록번호 : 111-11-22222 |
                <a href="#">사업자정보 확인</a>

                <br />
                통신판매업 : 제 2005-서울강남-00000 호 | 개인정보보호책임자 :
                홍길동
                <br />

                주소 : 서울특별시 강남구 테헤란로 5003, 28층(역삼동) | 대표이사
                : 심선범
                <br />

                입점문의 : 입정문의하기 | 제휴문의 :
                <a href="mailto: business@karlycorp.com"
                  >business@karlycorp.com</a
                >

                <br />
                채용문의 :
                <a href="mailto: recruit@karlycorp.com"
                  >recruit@karlycorp.com</a
                >
              </p>
              <p>팩스 : 070 - 1111 - 2222</p>
            </div>
            <ul class="link-list">
              <li>
                <a
                  href="https://section.blog.naver.com/"
                  aria-label="네이버블로그"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img src="/image/blog.webp" alt="naver blog"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  aria-label="페이스북"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img src="/image/facebook.webp" alt="facebook"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  aria-label="인스타그램"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img src="/image/instagram.webp" alt="instagram"
                /></a>
              </li>
              <li>
                <a
                  href="https://post.naver.com/"
                  aria-label="네이버포스트"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img src="/image/naverpost.webp" alt="naver post"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  aria-label="유튜브"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><img src="/image/youtube.webp" alt="youtube"
                /></a>
              </li>
            </ul>
          </article>
        </section>
        <section class="footer-middle">
          <div>
            <img
              src="/image/isms.svg"
              alt="정보보호 관리체계 인증"
              aria-labelledby="certification-isms"
            />
            <p id="certification-isms">
              [인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영<br />
              (심사받지 않은 물리적 인프라 제외) <br />
              [유효기간] 2022.01.19 ~ 2025.01.18 <br />
            </p>
          </div>
          <div>
            <img
              src="/image/logo-privacy.svg"
              alt="개인정보보호 우수 인증"
              aria-labelledby="personal-protect"
            />
            <p id="personal-protect">
              개인정보보호 우수 웹사이트<br />
              개인정보처리시스템 인증 (ePRIVACY PLUS) <br />
            </p>
          </div>
          <div>
            <img
              src="/image/toss-payments.svg"
              alt="토스 페이먼츠"
              aria-labelledby="toss-payments"
            />
            <p id="toss-payments">
              토스페이먼츠 구매안전(에스크로) 서비스를 <br />
              이용하실 수 있습니다.
            </p>
          </div>
          <div>
            <img
              src="/image/logo-woori.svg"
              alt="우리은행 로고"
              aria-labelledby="woori"
            />
            <p id="woori">
              고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보<br />
              증 계약을 체결하여 안전거래를 보장하고 있습니다.
            </p>
          </div>
        </section>
        <div class="footer-bottom">
          <p>
            마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
            판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          </p>
          <p>
            마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
            통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
            교환/환불 등 의무와 책임을 부담하지 않습니다.
          </p>
          <p class="copyright">&copy; KURLY CORP. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-layout', Footer);
