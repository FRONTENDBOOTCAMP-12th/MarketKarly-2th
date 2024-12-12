import { LitElement, html, css } from 'lit';
import footer from '/src/layout/Footer.css?inline';
import reset from '/src/base/reset.css?inline';

class Footer extends LitElement {
  static styles = css``;

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${reset}
        ${footer}
      </style>
      <footer id="footer">
        <section class="footer-top">
          <article class="service">
            <h2>고객행복센터</h2>
            <div class="tel">
              <h3>1644-1107</h3>
              <span>월~토요일 오전 7시 - 오후 6시</span>
            </div>
            <div class="kakao">
              <h4>카카오톡 문의</h4>
              <div>
                <span>월~토요일 | 오전 7시 ~ 오후 6시</span>
                <span>일/공휴일 | 오전 7시 - 오후 1시</span>
              </div>
            </div>
            <div class="onebyone">
              <h4>1:1 문의</h4>
              <div>
                <span>365일</span>
                <span>고객센터 운영시간에 순차적으로 답변드리겠습니다.</span>
              </div>
            </div>
            <div class="bulk-order">
              <h4>대량주문 문의</h4>
              <div>
                <span>월~금요일 | 오전9시 - 오후 6시</span>
                <span>점심시간 | 낮 12시 - 오후 1시</span>
              </div>
            </div>
            <div class="non-member">
              <span
                >비회원 문의:
                <a href="mailto:help@karlycorp.com">help@karlycorp.com</a></span
              >
              <span
                >비회원 대량주문 문의:
                <a href="mailto:help@karlycorp.com">help@karlycorp.com</a></span
              >
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
            <p class="info">
              <span
                >법인명 (상호) : 주식회사 칼리 | 사업자등록번호 : 111-11-22222 |
                <a href="#">사업자정보 확인</a></span
              >
              <span
                >통신판매업 : 제 2005-서울강남-00000 호 | 개인정보보호책임자 :
                홍길동</span
              >
              <span>
                주소 : 서울특별시 강남구 테헤란로 5003, 28층(역삼동) | 대표이사
                : 심선범
              </span>
              <span
                >입점문의 : 입정문의하기 | 제휴문의 :
                <a href="mailto: business@karlycorp.com"
                  >business@karlycorp.com</a
                ></span
              >
              <span
                >채용문의 :
                <a href="mailto: recruit@karlycorp.com"
                  >recruit@karlycorp.com</a
                ></span
              >
              <span>팩스 : 070 - 1111 - 2222</span>
            </p>
            <div class="sprties-img">
              <img
                src="/src/assets/image/sprites-image.png"
                usemap="#image-map"
              />
              <map name="image-map">
                <area
                  target="_blank"
                  alt="naver-blog"
                  title="naver-blog"
                  href="#"
                  coords="25,25,13"
                  shape="circle"
                />
                <area
                  target="_blank"
                  alt="facebook"
                  title="facebook"
                  href="#"
                  coords="75,25,14"
                  shape="circle"
                />
                <area
                  target="_blank"
                  alt="instagram"
                  title="instagram"
                  href="#"
                  coords="125,25,15"
                  shape="circle"
                />
                <area
                  target="_blank"
                  alt="naver-post"
                  title="naver-post"
                  href="#"
                  coords="175,26,15"
                  shape="circle"
                />
                <area
                  target="_blank"
                  alt="youtube"
                  title="youtube"
                  href="#"
                  coords="225,25,15"
                  shape="circle"
                />
              </map>
            </div>
          </article>
        </section>
        <section class="footer-middle">
          <div>
            <img
              src="/src/assets/image/isms.svg"
              alt="정보보호 관리체계 인증"
            />
            <p>
              <span>[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영</span>
              <span>(심사받지 않은 물리적 인프라 제외)</span>
              <span>[유효기간] 2022.01.19 ~ 2025.01.18</span>
            </p>
          </div>
          <div>
            <img
              src="/src/assets/image/logo-privacy.svg"
              alt="개인정보보호 우수 인증"
            />
            <p>
              <span>개인정보보호 우수 웹사이트</span>
              <span>개인정보처리시스템 인증 (ePRIVACY PLUS)</span>
            </p>
          </div>
          <div>
            <img
              src="/src/assets/image/toss-payments.svg"
              alt="토스 페이먼츠"
            />
            <p>
              토스페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
            </p>
          </div>
          <div>
            <img src="/src/assets/image/logo-woori.svg" alt="우리은행 로고" />
            <p>
              고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다.
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

customElements.define('footer-element', Footer);
