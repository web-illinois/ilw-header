import { LitElement, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './ilw-header.styles.css?inline';
import './ilw-header.css';
import { property } from "lit/decorators.js";

export class Header extends LitElement {
  @property({
    attribute: true
  })
  source: String;

  @property({
    attribute: true,
    reflect: true,
    type: Boolean
  })
  compact: Boolean;

  @property({
    attribute: true,
    reflect: false,
    type: Boolean
  })
  expanded: Boolean;

  @property({
    attribute: true,
    reflect: true
  })
  menu: String;

      
  @property({
    attribute: false,
    state: true
  })
  _menuVisible: String;

      
  @property({
    attribute: false,
    state: true
  })
  _hasMenu: String;

  static get styles() {
      return unsafeCSS(styles);
  }

  constructor() {
      super();
      this.source = 'Illinois_App';
      this.compact = false;
      this.expanded = false;
      this.menu = '';
      this._menuVisible = '';
      this._hasMenu = '';
      this.handleWindowClick = this.handleWindowClick.bind(this);
      this.handleWindowKeydown = this.handleWindowKeydown.bind(this);
      this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  connectedCallback() {
      super.connectedCallback();
      this.setAttribute('data-initialized', '1');
      window.addEventListener('click', this.handleWindowClick);
      window.addEventListener('keydown', this.handleWindowKeydown);
      window.addEventListener('resize', this.handleWindowResize);
      this.setCompactModeBasedOnWidth();
  }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('click', this.handleWindowClick);
        window.removeEventListener('keydown', this.handleWindowKeydown);
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowClick(evt: MouseEvent) {
        if (this.compact) {
            if (this.expanded && !this.contains(evt.target as HTMLElement)) {
                this.expanded = false;
            }
        }
    }

    handleWindowKeydown(evt: KeyboardEvent) {
        if (this.compact) {
            if (evt.key === 'Escape' && this.expanded) {
                this.expanded = false;
            }
        }
    }

    handleWindowResize() {
        this.setCompactModeBasedOnWidth();
    }

    handleToggleClick() {
        this.expanded = !this.expanded;
    }

    hasMenuContents() {
        return this.menu != 'none';
    }

    getUtmSource() {
      return this.source || 'Illinois_App';
    }

    setCompactModeBasedOnWidth() {
        if (this.offsetWidth < 990) {
            if (!this.compact) this.compact = true;
        }
        else {
            if (this.compact) this.compact = false;
        }
    }

    renderBlockI() {
        return html`
      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 34.67">
        <title>Block I</title>
        <path class="outline"
              d="M24 9.33V0H0v9.33h5.33v16H0v9.33h24v-9.33h-5.33v-16H24zm-5.33 17.34h4v6.67H1.33v-6.67h4c.74 0 1.33-.6 1.33-1.33v-16C6.67 8.6 6.07 8 5.33 8h-4V1.33h21.33V8h-4c-.74 0-1.33.6-1.33 1.33v16c0 .74.6 1.34 1.34 1.34z"
        />
        <path class="fill"
              d="M18.67 8h4V1.33H1.33V8h4c.74 0 1.33.6 1.33 1.33v16c0 .74-.6 1.33-1.33 1.33h-4v6.67h21.33v-6.67h-4c-.74 0-1.33-.6-1.33-1.33v-16c0-.73.6-1.33 1.34-1.33z"
        />
      </svg>`
    }

    renderWordmark() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 378.6 10.1">
      <title>University of Illinois Urbana-Champaign</title>
      <path d="M376.4.2v5.9L371.5.2h-1.9V10h2.3V4l4.8 6h1.9V.2zM361.1 2.3c.5-.3 1-.4 1.7-.4 1 0 1.8.4 2.5 1.1l1.5-1.3c-.5-.6-1.1-1-1.8-1.3-.7-.3-1.5-.4-2.3-.4-1 0-2 .2-2.8.7-.8.4-1.5 1-1.9 1.8-.5.8-.7 1.6-.7 2.6s.2 1.8.7 2.6c.5.8 1.1 1.4 1.9 1.8.8.4 1.7.6 2.7.6.7 0 1.4-.1 2.1-.3.7-.2 1.3-.5 1.8-.9v-4h-2.1v2.9c-.5.3-1.1.4-1.8.4-.6 0-1.2-.1-1.7-.4-.5-.3-.8-.6-1.1-1.1-.3-.5-.4-1-.4-1.6 0-.6.1-1.2.4-1.6.5-.5.8-.9 1.3-1.2zM352.4.2h2.3V10h-2.3zM343.8.2l-4.4 9.8h2.3l.9-2.1h4.5l.9 2.1h2.4L346 .2h-2.2zm-.4 5.9 1.6-3.8 1.6 3.8h-3.2zM336.7.6c-.6-.3-1.4-.4-2.3-.4h-4.2V10h2.3V7.3h2c.9 0 1.6-.1 2.3-.4.6-.3 1.1-.7 1.5-1.2.3-.5.5-1.2.5-1.9s-.2-1.4-.5-1.9c-.4-.6-.9-1-1.6-1.3zm-.8 4.4c-.4.3-.9.4-1.6.4h-1.8V2h1.8c.7 0 1.2.1 1.6.4.4.3.5.7.5 1.3 0 .6-.1 1-.5 1.3zM325.1.2l-3.6 6.1-3.7-6.1H316V10h2.1V4.2l2.8 4.7h1.1l2.9-4.8V10h2.1V.2zM307.4.2 303 10h2.3l.9-2.1h4.6l.9 2.1h2.4L309.7.2h-2.3zm-.4 5.9 1.6-3.8 1.6 3.8H307zM298.8 4h-4.4V.2h-2.3V10h2.3V6h4.4v4h2.3V.2h-2.3zM284.1 2.3c.5-.3 1-.4 1.6-.4 1 0 1.8.4 2.5 1.1l1.5-1.3c-.5-.6-1-1-1.7-1.3-.7-.3-1.4-.4-2.3-.4-1 0-1.9.2-2.7.7-.8.4-1.4 1-1.9 1.8s-.7 1.6-.7 2.6.2 1.8.7 2.6c.5.8 1.1 1.4 1.9 1.8.8.4 1.7.6 2.7.6.8 0 1.6-.1 2.3-.4.7-.3 1.3-.7 1.7-1.3L288.2 7c-.7.8-1.5 1.2-2.5 1.2-.6 0-1.1-.1-1.6-.4-.5-.3-.9-.6-1.1-1.1-.3-.5-.4-1-.4-1.6 0-.6.1-1.1.4-1.6.3-.5.6-.9 1.1-1.2zM274.1 5.2h4V7h-4zM266.3.2 262 10h2.3l.9-2.1h4.6l.9 2.1h2.4L268.7.2h-2.4zm-.4 5.9 1.6-3.8 1.6 3.8h-3.2zM257.8 6.1 252.9.2H251V10h2.3V4l4.9 6h1.8V.2h-2.2zM242.5.2l-4.4 9.8h2.3l.9-2.1h4.5l.9 2.1h2.4L244.7.2h-2.2zm-.5 5.9 1.6-3.8 1.6 3.8H242zM235 4.9c.4-.2.7-.5 1-.9.2-.4.4-.8.4-1.3 0-.8-.3-1.4-1-1.9-.6-.5-1.5-.7-2.7-.7h-4.8V10h5.1c1.3 0 2.2-.2 2.9-.7.7-.5 1-1.1 1-2 0-.6-.2-1.1-.5-1.5-.4-.5-.8-.8-1.4-.9zm-4.9-3h2.3c.6 0 1 .1 1.3.3.3.2.4.5.4.9s-.1.7-.4.9-.7.3-1.3.3h-2.3V1.9zM234 8c-.3.2-.7.3-1.3.3h-2.6V5.8h2.6c1.2 0 1.8.4 1.8 1.2 0 .5-.1.8-.5 1zM224.6 5.6c.4-.5.5-1.2.5-1.9s-.2-1.4-.5-1.9-.8-.9-1.5-1.2c-.6-.3-1.4-.4-2.3-.4h-4.2V10h2.3V7.2h2.1l1.9 2.7h2.4l-2.2-3.1c.6-.3 1.1-.7 1.5-1.2zm-2.3-.6c-.4.3-.9.4-1.6.4h-1.8V2h1.8c.7 0 1.2.1 1.6.4.4.3.5.7.5 1.3 0 .6-.2 1-.5 1.3zM211.2 5.6c0 .9-.2 1.6-.6 2-.4.4-.9.6-1.6.6-1.5 0-2.2-.9-2.2-2.6V.2h-2.3v5.5c0 1.4.4 2.5 1.2 3.3.8.8 1.9 1.2 3.3 1.2s2.5-.4 3.3-1.2c.8-.8 1.2-1.9 1.2-3.3V.2h-2.2v5.4zM195.6 4.7c-.5-.2-1.1-.4-1.8-.5-.7-.2-1.3-.3-1.6-.5-.3-.2-.5-.4-.5-.8s.1-.6.4-.8c.3-.2.8-.3 1.4-.3.9 0 1.8.3 2.7.8l.7-1.7c-.4-.3-1-.5-1.6-.6-.6-.1-1.2-.2-1.8-.2-.9 0-1.7.1-2.3.4-.6.3-1.1.6-1.4 1.1-.3.5-.5 1-.5 1.5 0 .7.2 1.2.5 1.6.3.4.8.7 1.2.9.5.2 1.1.4 1.8.5.5.1.9.2 1.1.3.3.1.5.2.7.4.2.1.3.3.3.6s-.2.6-.5.8c-.3.2-.8.3-1.4.3-.6 0-1.2-.1-1.7-.3s-1.1-.4-1.5-.7l-.6 1.5c.4.3 1 .6 1.7.8.7.2 1.5.3 2.3.3.9 0 1.7-.1 2.3-.4s1.1-.6 1.4-1.1c.3-.5.5-1 .5-1.5 0-.7-.2-1.2-.5-1.6-.4-.3-.8-.6-1.3-.8zM184.4.2h2.3V10h-2.3zM179.2.7c-.8-.4-1.7-.7-2.7-.7-1 0-1.9.2-2.8.7-.8.4-1.5 1-1.9 1.8-.5.8-.7 1.6-.7 2.6s.2 1.8.7 2.6c.5.8 1.1 1.4 1.9 1.8.8.4 1.7.7 2.8.7 1 0 1.9-.2 2.7-.7.8-.4 1.5-1 1.9-1.8.5-.8.7-1.6.7-2.6s-.2-1.8-.7-2.6c-.4-.8-1.1-1.4-1.9-1.8zm-.1 6c-.3.5-.6.8-1.1 1.1-.5.3-1 .4-1.6.4-.6 0-1.1-.1-1.6-.4-.5-.3-.8-.6-1.1-1.1-.3-.5-.4-1-.4-1.6 0-.6.1-1.1.4-1.6.3-.5.6-.8 1.1-1.1.5-.3 1-.4 1.6-.4.6 0 1.1.1 1.6.4.5.3.8.6 1.1 1.1.3.5.4 1 .4 1.6 0 .6-.1 1.1-.4 1.6zM166.2 6.1 161.4.2h-1.9V10h2.2V4l4.9 6h1.9V.2h-2.3zM154 .2h2.3V10H154zM146.9.2h-2.3V10h7.2V8.1h-4.9zM137.5.2h-2.2V10h7.2V8.1h-5zM129.8.2h2.3V10h-2.3zM115 10h2.3V6.4h4.6V4.6h-4.6V2h5.2V.2H115zM109.8.7c-.8-.5-1.7-.7-2.7-.7-1 0-1.9.2-2.8.7-.8.4-1.5 1-1.9 1.8-.5.8-.7 1.6-.7 2.6s.2 1.8.7 2.6c.5.8 1.1 1.4 1.9 1.8.8.4 1.7.7 2.8.7 1 0 1.9-.2 2.7-.7.8-.4 1.5-1 1.9-1.8.5-.8.7-1.6.7-2.6s-.2-1.8-.7-2.6c-.4-.8-1.1-1.4-1.9-1.8zm-.1 6c-.3.5-.6.8-1.1 1.1-.5.3-1 .4-1.6.4s-1.1-.1-1.6-.4c-.5-.3-.8-.6-1.1-1.1-.3-.5-.4-1-.4-1.6 0-.6.1-1.1.4-1.6.3-.5.6-.8 1.1-1.1.5-.3 1-.4 1.6-.4s1.1.1 1.6.4c.5.3.8.6 1.1 1.1.3.5.4 1 .4 1.6 0 .6-.1 1.1-.4 1.6zM90.7 4.5 88.1.2h-2.4l3.8 6.3V10h2.3V6.5L95.6.2h-2.2zM76.6 2h3.1v8H82V2h3.1V.2h-8.5zM72.2.2h2.3V10h-2.3zM68 4.7c-.5-.2-1.1-.4-1.8-.5-.7-.2-1.3-.3-1.6-.5-.4-.2-.6-.4-.6-.8s.1-.6.4-.8c.3-.2.8-.3 1.4-.3.9 0 1.8.3 2.7.8l.7-1.7c-.4-.3-1-.5-1.6-.6-.5-.2-1.1-.3-1.7-.3-.9 0-1.7.1-2.3.4-.6.3-1.1.6-1.4 1.1-.3.5-.5 1-.5 1.5 0 .7.2 1.2.5 1.6.4.4.8.7 1.3.9.5.2 1.1.3 1.8.5.5.1.9.2 1.1.3.3.1.5.2.7.4.2.1.3.3.3.6s-.2.6-.5.8c-.3.2-.8.3-1.4.3-.6 0-1.2-.1-1.7-.3-.6-.2-1.1-.4-1.5-.7L61.6 9c.4.3 1 .6 1.7.8.7.2 1.5.3 2.3.3.9 0 1.7-.1 2.3-.4.6-.3 1.1-.6 1.4-1.1.3-.5.5-1 .5-1.5 0-.7-.2-1.2-.5-1.6-.4-.3-.8-.6-1.3-.8zM59.1 5.6c.4-.5.5-1.2.5-1.9s-.2-1.4-.5-1.9-.8-.9-1.5-1.2C57 .3 56.2.2 55.3.2h-4.2V10h2.3V7.2h2.1l1.9 2.7h2.4l-2.2-3.1c.7-.3 1.2-.7 1.5-1.2zM56.8 5c-.4.3-.9.4-1.6.4h-1.8V2h1.8c.7 0 1.2.1 1.6.4.4.3.5.7.5 1.3 0 .6-.1 1-.5 1.3zM43.1 5.9h4.5V4.1h-4.5V2h5.1V.2h-7.4V10h7.6V8.1h-5.3zM33.8 7.2l-2.9-7h-2.5l4.2 9.8h2.3L39.1.2h-2.2zM24.2.2h2.3V10h-2.3zM18.8 6.1 13.9.2H12V10h2.3V4l4.9 6H21V.2h-2.2zM6.6 5.6c0 .9-.2 1.6-.6 2-.3.4-.8.6-1.5.6-1.5 0-2.2-.9-2.2-2.6V.2H0v5.5C0 7.1.4 8.2 1.2 9c.8.8 1.9 1.2 3.3 1.2S7 9.8 7.8 9C8.6 8.2 9 7.1 9 5.7V.2H6.6v5.4z"/>
    </svg>`
    }

    renderBranding() {
        return html`
      <a href="https://illinois.edu?utm_source=${this.getUtmSource()}&utm_medium=web&utm_campaign=Header">
        <div class="block-i">${this.renderBlockI()}</div>
        <div class="wordmark">${this.renderWordmark()}</div>
      </a>`
    }

    renderMenuIcon() {
        return this.expanded ? this.renderMenuCloseIcon() : this.renderMenuOpenIcon();
    }

    renderMenuCloseIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26">
      <path d="m37.84 32.94-7.63-7.63 7.63-7.63a3.24 3.24 0 0 0-4.58-4.58l-7.63 7.63L18 13.1a3.24 3.24 0 0 0-4.58 4.58L21 25.31l-7.62 7.63A3.24 3.24 0 1 0 18 37.52l7.63-7.63 7.63 7.63a3.24 3.24 0 0 0 4.58-4.58Z"/>
    </svg>`
    }

    renderMenuOpenIcon() {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.26 51.26">
      <path d="M11.6 16.52h28.06a3.24 3.24 0 1 0 0-6.48H11.6a3.24 3.24 0 0 0 0 6.48ZM39.66 22.07H11.6a3.24 3.24 0 0 0 0 6.48h28.06a3.24 3.24 0 1 0 0-6.48ZM39.66 34.1H11.6a3.24 3.24 0 0 0 0 6.48h28.06a3.24 3.24 0 1 0 0-6.48Z"/>
    </svg>`
    }

    renderMenuButton() {
        return html`<span class="button">
      <span class="icon" role="presentation" aria-hidden="true">${this.renderMenuIcon()}</span>
      <span class="label">Menu</span>
    </span>`
    }

    renderMenuToggle() {
        return html`
      <div class="menu-toggle">
        <button aria-controls="menu" aria-expanded=${this.expanded ? 'true' : 'false'} @click=${this.handleToggleClick.bind(this)}>
          ${this.renderMenuButton()}
        </button>
      </div>`
    }

    renderMenu() {
        return html`
      <div id="menu" class="menu ${this.hasMenuContents() ? '' : 'hide'}">
        <div class="links">
          <slot name="links"></slot>
        </div>
        <div class="search">
          <slot name="search"></slot>
        </div>
        <div class="nav">
          <slot name="navigation"></slot>
        </div>
      </div>`
    }

    renderCompact() {
        return html`
      <header class="compact header ${this.expanded ? 'expanded' : 'collapsed'}">
        <div class="main">
          <div class="illinois">
            ${this.renderBranding()}
          </div>
          <div class="identity">
            <div>
              <slot name="primary-unit"></slot>
            </div>
            <div>
              <slot name="site-name"></slot>
            </div>
          </div>
          ${this.hasMenuContents() ? this.renderMenuToggle() : ''}
        </div>
        ${this.renderMenu()}
      </header>`
    }

    renderFull() {
        return html`
      <header class="full header">
        <div class="main">
          <div class="illinois">
            ${this.renderBranding()}
          </div>
          <div class="links ${this.hasMenuContents() ? '' : 'hide'}">
            <slot name="links"></slot>
          </div>
          <div class="identity">
            <div>
              <slot name="primary-unit"></slot>
            </div>
            <div>
              <slot name="site-name"></slot>
            </div>
          </div>
          <div class="search ${this.hasMenuContents() ? '' : 'hide'}">
            <slot name="search"></slot>
          </div>
        </div>
          <div class="nav ${this.hasMenuContents() ? '' : 'hide'}" >
              <slot name="navigation"></slot>
          </div>
      </header>`
    }

    render() {
        return this.compact ? this.renderCompact() : this.renderFull();
    }
}

customElements.get('ilw-header') || customElements.define('ilw-header', Header);