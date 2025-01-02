import { LitElement, css, html } from 'lit';

class PageUp extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      bottom: var(--space-2xl);
      right: var(--space-2xl);
      z-index: 1000;
      display: none;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    :host(.visible) {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }

    .progress-wrap {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: var(--primary-color, #283198);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .progress-wrap:hover {
      transform: scale(1.1);
      background-color: var(--hover-color, #3f4ac8);
    }

    .progress-wrap svg {
      fill: var(--white-color, #ffffff);
    }
  `;

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showButton() {
    const element = this.shadowRoot.host;
    let opacity = 0;
    let translateY = 30;

    const interval = setInterval(() => {
      opacity += 0.05;
      translateY -= 1.5;
      element.style.opacity = opacity.toFixed(2);
      element.style.transform = `translateY(${translateY}px)`;

      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 16);
  }

  hideButton() {
    const element = this.shadowRoot.host;
    let opacity = parseFloat(getComputedStyle(element).opacity);
    let translateY = 0;

    const interval = setInterval(() => {
      opacity -= 0.05;
      translateY += 1.5;
      element.style.opacity = opacity.toFixed(2);
      element.style.transform = `translateY(${translateY}px)`;

      if (opacity <= 0) {
        clearInterval(interval);
        element.style.display = 'none';
      }
    }, 5);
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        if (!this.shadowRoot.host.classList.contains('visible')) {
          this.shadowRoot.host.style.display = 'block';
          this.showButton();
          this.shadowRoot.host.classList.add('visible');
        }
      } else if (this.shadowRoot.host.classList.contains('visible')) {
        this.hideButton();
        this.shadowRoot.host.classList.remove('visible');
      }
    });
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll);
    super.disconnectedCallback();
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    const threshold = 100;
    if (scrollTop > threshold) {
      this.classList.add('visible');
    } else {
      this.classList.remove('visible');
    }
  }

  handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    return html`
      <div class="progress-wrap" @click=${this.handleScrollToTop}>
        <svg viewBox="0 0 24 24" role="img" width="24" height="24">
          <path d="M12 2L5 9h4v9h6V9h4l-7-7z"></path>
        </svg>
      </div>
    `;
  }
}

customElements.define('page-up-component', PageUp);
