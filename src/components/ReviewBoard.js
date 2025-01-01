import { LitElement, html, css } from 'lit';
import reset from '@/styles/reset';
import a11y from '@/base/a11y';
import '@/components/ReviewModal';
import '@/components/Button/BtnFilled';

class ReviewBoard extends LitElement {
  static styles = [
    reset,
    a11y,
    css`
      button {
        border: none;
        margin: 0;
        padding: 0;
        background: transparent;
      }

      .review-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 1050px;
        margin: 0 0 var(--space-5xl);
      }

      .review-info {
        display: flex;
        flex-direction: column;
      }

      .review-title {
        font-weight: var(--text-bold);
        font-size: var(--font-2xl);
        line-height: var(--extra-light-line-height);
      }

      .review-benefit {
        font-weight: var(--text-bold);
        line-height: var(--light-line-height);
        color: var(--gray-color-900, #151515);
        margin-top: var(--space-lg);
      }

      .review-caution {
        margin-top: var(--space-sm);
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        line-height: var(--light-line-height);
        color: var(--gray-color-500, #6b6b6b);
      }

      .review-caution li {
        list-style: disc;
        margin-left: var(--space-2xl);
      }

      .product-list-container {
        width: 1050px;
      }

      .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .total-count {
        font-size: var(--font-md);
        font-weight: var(--text-semi-bold);
      }

      .sorting-standard {
        display: flex;
        align-items: center;
      }

      .choose-standard {
        position: relative;
        padding-left: var(--space-md);
        font-size: var(--font-md);
        color: var(--gray-color-300, #a6a6a6);
        padding-right: var(--space-lg);
      }

      .newest-standard {
        padding-right: 0;
      }

      .choose-standard.active {
        color: var(--gray-color-700, #404040);
        font-weight: var(--text-medium);
      }

      .divider::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1.4px;
        height: 12px;
        background-color: var(--gray-color-300, #a6a6a6);
        opacity: 0.4;
      }

      .review-list {
        border-top: 2px solid var(--gray-color-900, #151515);
        padding: 0;
        margin: var(--space-xl) 0;
        width: 1050px;
        list-style: none;
      }

      .notice-item {
        display: flex;
        align-items: center;
        padding: 0;
        width: 1050px;
        height: 58px;
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
      }

      .notice-item a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--gray-color-900, #333333);
        width: 100%;
        height: 100%;
        padding: var(--space-sm) var(--space-xl);
        gap: var(--space-2xl);
      }

      .notice-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--gray-color-50, #f9f9f9);
        border-radius: 1px;
        width: 48px;
        height: 18px;
        padding: 0 var(--space-sm);
        font-weight: var(--text-semi-bold);
        font-size: var(--font-sm);
        line-height: var(--regular-line-height);
        color: var(--gray-color-900, #333333);
      }

      .notice-item span:last-child {
        font-weight: var(--text-semi-bold);
        font-size: var(--font-md);
        line-height: var(--regular-line-height);
        color: var(--gray-color-900, #333333);
        height: 24px;
      }

      .review-item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: var(--space-3xl);
        gap: var(--space-xl);
        width: 1050px;
        border-bottom: 1px solid var(--gray-color-100, #e1e1e1);
      }

      .badge-group {
        width: 200px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--space-md);
      }

      .badge.primary {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 18px;
        background: var(--secondary-color, #324fff);
        border-radius: 1px;
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        color: var(--white-color, #ffffff);
      }

      .badge.secondary {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 18px;
        background: var(--white-color, #ffffff);
        border-radius: 1px;
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        color: var(--primary-color, #283198);
        border: 1px solid var(--primary-color, #283198);
      }

      .reviewer-name {
        font-size: var(--font-sm);
        font-weight: var(--text-bold);
        text-align: left;
      }

      .review-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-3xl);
      }

      .product-title {
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        line-height: var(--regular-line-height);
        color: var(--gray-color-400, #898989);
      }

      .review-text {
        width: 700px;
        font-size: var(--font-sm);
        line-height: var(--regular-line-height);
      }

      .review-date {
        width: 58px;
        height: 18px;
        font-size: var(--font-sm);
        font-weight: var(--text-semi-bold);
        line-height: var(--regular-line-height);
        color: var(--gray-color-300, #898989);
      }

      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: var(--space-5xl);
        gap: var(--space-2xl);
      }

      .pagination button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 56px;
        height: 56px;
        border: 1px solid var(--gray-color-100, #e1e1e1);
        background: none;
        padding: var(--space-sm);
      }

      .pagination button:hover {
        background-color: var(--gray-color-50, #f9f9f9);
      }
    `,
  ];

  static properties = {
    activeStandard: { type: String },
  };

  constructor() {
    super();
    this.showModal = false;
    this.activeStandard = 'recommended';
    this.totalItems = 3;
  }

  handleSubmit() {
    this.showModal = !this.showModal;
    this.requestUpdate();
  }

  handleModalClose() {
    this.showModal = false;
    this.requestUpdate();
  }
  handleStandardClick(standard, event) {
    event.preventDefault();
    this.activeStandard = standard;
    this.requestUpdate();
  }

  render() {
    return html`
      <header class="review-header">
        <section class="review-info">
          <h2 class="review-title">상품후기</h2>
          <p class="review-benefit">글후기 50원 적립금 혜택이 있어요.</p>
          <ul class="review-caution">
            <li>
              퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시
              5,000원 추가 적립
            </li>
            <li>후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
            <li>
              작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균
              1~2일 소요)
            </li>
          </ul>
        </section>
        <btn-filled-component
          class="btn-ask"
          width="155px"
          height="44px"
          text="후기 작성"
          @click=${this.handleSubmit}
        ></btn-filled-component>
      </header>

      <div class="product-list-container">
        <div class="list-header">
          <div class="total-count">총 ${this.totalItems}건</div>
          <section role="group" class="sorting-standard" aria-label="정렬 기준">
            <button
              aria-pressed="${this.activeStandard === 'recommended'}"
              class="choose-standard divider ${this.activeStandard ===
              'recommended'
                ? 'active'
                : ''}"
              @click=${(e) => this.handleStandardClick('recommended', e)}
            >
              추천순
            </button>
            <button
              class="choose-standard  newest-standard ${this.activeStandard ===
              'newest'
                ? 'active'
                : ''}"
              @click=${(e) => this.handleStandardClick('newest', e)}
            >
              신상품순
            </button>
          </section>
        </div>

        <ul class="review-list">
          <li class="notice-item">
            <a href="#">
              <span class="notice-icon">공지</span>
              <span>금주의 베스트 후기 안내</span>
            </a>
          </li>
          <li class="notice-item">
            <a href="#">
              <span class="notice-icon">공지</span>
              <span>상품 후기 적립금 정책 안내</span>
            </a>
          </li>
          <li class="review-item">
            <div class="badge-group">
              <div class="badge primary">베스트</div>
              <div class="badge secondary">멤버스</div>
              <p class="reviewer-name">최*윤</p>
            </div>

            <div class="review-body">
              <p class="product-title">[풀무원] 탱탱쫄면 (4개입)</p>
              <p class="review-text">
                쌀쌀한 날씨에는 뜨끈한 국물 요리가 정말 필요하지요. 그래서
                아이들이 좋아하는 [풀무원] 탱탱쫄면 (4개입)을 주문해 보았습니다.
                예상보다 많은 양념이 들어 있어 상당히 놀랐습니다. 특히 쫄깃한
                면발이 정말 맛있어서 더 만족스러웠습니다. 캠핑 등 외출 시
                간편하게 즐기기에도 아주 좋은 메뉴로 보입니다. 또한, 반찬이 없을
                때 간단하게 꺼내서 먹을 수 있어 매우 유용합니다. 냉동실에 꼭
                쟁여두어야 할 아이템으로 추천할 만합니다.
                <br /><br />
                파송송 썰어 넣거나, 당면 사리를 추가해도 매우 좋습니다.
                <br /><br />
                <strong>맛 ★★★★★</strong>
                <br />
                [풀무원] 탱탱쫄면은 언제나 맛있죠. 면발이 쫄깃하고 양념도
                짱맛이라 정말 맛있습니다.
                <br /><br />
                <strong>양 ★★★★★</strong>
                <br />
                어른 2명, 아이 2명이 함께 먹기에 양이 충분했습니다.
                <br /><br />
                <strong>포장 ★★★★☆</strong>
                <br />
                종이 포장과 플라스틱 포장의 이중 포장이어서 별 하나를 뺐지만,
                사각 플라스틱 케이스에 담겨 있어 개봉 후 보관하기에 매우
                편리했습니다.
              </p>

              <time datetime="2022-11-10" class="review-date">2024.11.10</time>
            </div>
          </li>
          <li class="review-item">
            <div class="badge-group">
              <div class="badge primary">베스트</div>
              <p class="reviewer-name">이*현</p>
            </div>

            <div class="review-body">
              <p class="product-title">[풀무원] 탱탱쫄면 (4개입)</p>
              <p class="review-text">
                또 주문할것 같습니다. 너무 맛있어요 내스타일이야~!
              </p>
              <time datetime="2022-11-10" class="review-date">2022.11.10</time>
            </div>
          </li>
          <li class="review-item">
            <div class="badge-group">
              <div class="badge secondary">멤버스</div>
              <p class="reviewer-name">도*연</p>
            </div>

            <div class="review-body">
              <p class="product-title">[풀무원] 탱탱쫄면 (4개입)</p>
              <p class="review-text">너무 맛있어여~ 쫄깃쫄깃 탱탱쫄면!!</p>
              <time datetime="2022-11-10" class="review-date">2020.11.10</time>
            </div>
          </li>
        </ul>

        <nav class="pagination" aria-label="페이지 이동">
          <button class="btn-prev" aria-label="이전 페이지">
            <img
              src="/icon/review-left-arrow.svg"
              alt="이전 페이지로 이동"
              width="36"
              height="36"
            />
          </button>
          <button class="btn-next" aria-label="다음 페이지">
            <img
              src="/icon/review-right-arrow.svg"
              alt="다음 페이지로 이동"
              width="36"
              height="36"
            />
          </button>
        </nav>

        ${this.showModal
          ? html`<review-modal-component
              @close=${this.handleModalClose}
            ></review-modal-component>`
          : ''}
      </div>
    `;
  }
}

customElements.define('review-board-component', ReviewBoard);
