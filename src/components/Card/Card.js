import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset.css?inline';
import style from '@/components/Card/Card.css?inline';
import a11y from '@/base/a11y.css?inline';
import '@/assets/font/Pretendard.css';

class Card extends LitElement {
  constructor() {
    super();
  }

  static styles = [];

  render() {
    return html/* html */ `
      <style>
        ${reset}
        ${style}
        ${a11y}
      </style>

      <div class="card-component">
        <a href="/">
          <figure>
            <img src="/image/product02.webp" alt="" />
            <figcaption class="sr-only">죠르디 시카 자석 선쿠션</figcaption>

            <button class="add-cart" aria-label="장바구니 담기">
              <img src="/icon/cart.svg" alt="카트 이미지" />
            </button>
          </figure>
        </a>
        <!-- a > figure -->

        <div class="content">
          <div class="title">
            <p class="sub-title">[온더바디] 죠르디 시카 자석 선쿠션</p>

            <p class="main-title">[온더바디] 죠르디 시카 자석 선쿠션</p>
          </div>
          <!-- title -->

          <div class="price">
            <p>
              <span class="discount">50%<span class="sr-only">할인</span></span>
              <span class="current-price">32,500원</span>
            </p>

            <p class="origin-price">24,900원</p>
          </div>
          <!-- price -->

          <p class="discription">CJ즉석밥 고소한 맛의 발아 현미밥</p>
          <!-- discription  -->

          <div class="tags">
            <span class="only">Kurlit Only</span>
            <span class="limited">한정수량</span>
          </div>
          <!-- tags -->
        </div>
        <!-- content -->
      </div>
      <!-- card-component -->
    `;
  }
}

customElements.define('product-card', Card);
