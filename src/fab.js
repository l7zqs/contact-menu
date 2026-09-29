import { makeIcon, brandColor } from './icons.js';
import { STYLE_ID, CSS } from './styles.js';

/** Contacts used when the caller doesn't supply any. Placeholder URLs — swap them for your own. */
const DEFAULT_CONTACTS = [
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/', icon: 'github' },
  { name: 'Facebook', url: 'https://facebook.com/', icon: 'facebook' },
  { name: 'WhatsApp', url: 'https://wa.me/', icon: 'whatsapp' }
];

const DEFAULTS = {
  position: 'right',       // 'right' | 'left'
  bottom: 30,               // px from the bottom edge (desktop)
  right: 25,                // px from the anchored edge (desktop) — used for `left` too when position:'left'
  size: 58,                 // main button diameter, px
  spacing: 12,              // gap between stacked buttons, px
  animation: 'slide',       // 'slide' | 'scale' | 'fade' | 'none'
  duration: 300,            // ms, per-item transition length
  theme: 'dark',            // 'dark' | 'light'
  tooltip: true,            // show hover tooltips on desktop
  autoClose: false,         // close the menu after a contact is clicked
  zIndex: 999999,
  primaryColor: null,       // overrides the main button's background
  iconColor: null,          // overrides the main button's icon color
  ariaLabel: 'Contact menu',
  mobile: null,             // optional {size, bottom, right} override for small screens
  contacts: null,           // falls back to DEFAULT_CONTACTS
  onOpen: null,
  onClose: null,
  onClick: null,
  id: null,                 // set this to allow more than one FAB on a page
  multiple: false           // true skips the single-instance replacement guard
};

const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const isStr = (v) => typeof v === 'string' && v.length > 0;
const num = (v, fallback) => (isNum(v) ? v : fallback);

/** Merge user config over the defaults, discarding any value of the wrong type or shape. */
function sanitizeConfig(input) {
  const cfg = { ...DEFAULTS, ...(input && typeof input === 'object' ? input : {}) };

  cfg.position = cfg.position === 'left' ? 'left' : 'right';
  cfg.bottom = num(cfg.bottom, DEFAULTS.bottom);
  cfg.right = num(cfg.right, DEFAULTS.right);
  cfg.size = num(cfg.size, DEFAULTS.size);
  cfg.spacing = num(cfg.spacing, DEFAULTS.spacing);
  cfg.duration = num(cfg.duration, DEFAULTS.duration);
  cfg.zIndex = num(cfg.zIndex, DEFAULTS.zIndex);
  cfg.animation = ['slide', 'scale', 'fade', 'none'].includes(cfg.animation) ? cfg.animation : DEFAULTS.animation;
  cfg.theme = cfg.theme === 'light' ? 'light' : 'dark';
  cfg.tooltip = cfg.tooltip !== false;
  cfg.autoClose = cfg.autoClose === true;
  cfg.multiple = cfg.multiple === true;
  cfg.primaryColor = isStr(cfg.primaryColor) ? cfg.primaryColor : null;
  cfg.iconColor = isStr(cfg.iconColor) ? cfg.iconColor : null;
  cfg.ariaLabel = isStr(cfg.ariaLabel) ? cfg.ariaLabel : DEFAULTS.ariaLabel;
  cfg.id = isStr(cfg.id) ? cfg.id : null;

  const m = cfg.mobile && typeof cfg.mobile === 'object' ? cfg.mobile : {};
  cfg.mobile = {
    size: num(m.size, Math.round(cfg.size * 0.86)),
    bottom: num(m.bottom, Math.max(cfg.bottom - 10, 16)),
    right: num(m.right, Math.max(cfg.right - 9, 12))
  };

  cfg.contacts = Array.isArray(cfg.contacts) && cfg.contacts.length
    ? cfg.contacts.filter((c) => c && typeof c === 'object' && isStr(c.name) && isStr(c.url))
    : DEFAULT_CONTACTS;
  if (!cfg.contacts.length) cfg.contacts = DEFAULT_CONTACTS;

  for (const key of ['onOpen', 'onClose', 'onClick']) {
    cfg[key] = typeof cfg[key] === 'function' ? cfg[key] : null;
  }

  return cfg;
}

/** Href/target/rel for a contact entry, based on its URL scheme. */
function linkAttrs(url) {
  if (url.startsWith('mailto:') || url.startsWith('tel:')) return { href: url, external: false };
  return { href: url, external: true };
}

function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
}

let idSeq = 0;

export class fab {
  static #instances = new Map();

  constructor(userConfig) {
    this.config = sanitizeConfig(userConfig);
    this._open = false;
    this._uid = `cf-${++idSeq}`;

    const key = this.config.multiple ? this._uid : (this.config.id || 'default');
    if (!this.config.multiple || this.config.id) {
      const prev = fab.#instances.get(key);
      if (prev && prev !== this) prev.destroy();
    }
    this._key = key;
    fab.#instances.set(key, this);

    this._destroyed = false;
    if (document.body) {
      this._init();
    } else {
      document.addEventListener('DOMContentLoaded', () => this._init(), { once: true });
    }
  }

  /** Builds the DOM once the document is ready; no-ops if destroy() ran first. */
  _init() {
    if (this._destroyed) return;
    injectStyles();
    this._build();
    this._bindEvents();
  }

  // ---- DOM construction -------------------------------------------------

  _build() {
    const c = this.config;
    const root = document.createElement('div');
    root.className = `cf-root cf-${c.theme} cf-a-${c.animation}`;
    root.dataset.side = c.position;
    root.style.setProperty('--cf-size-d', `${c.size}px`);
    root.style.setProperty('--cf-bottom-d', `${c.bottom}px`);
    root.style.setProperty('--cf-x-d', `${c.right}px`);
    root.style.setProperty('--cf-size-m', `${c.mobile.size}px`);
    root.style.setProperty('--cf-bottom-m', `${c.mobile.bottom}px`);
    root.style.setProperty('--cf-x-m', `${c.mobile.right}px`);
    root.style.setProperty('--cf-gap', `${c.spacing}px`);
    root.style.setProperty('--cf-d', `${c.duration}ms`);
    root.style.setProperty('--cf-z', String(c.zIndex));
    if (c.primaryColor) root.style.setProperty('--cf-bg', c.primaryColor);
    if (c.iconColor) root.style.setProperty('--cf-fg', c.iconColor);

    const list = document.createElement('ul');
    list.className = 'cf-list';

    c.contacts.forEach((contact, i) => {
      list.appendChild(this._buildItem(contact, i));
    });

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cf-btn';
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', `Open ${c.ariaLabel.toLowerCase()}`);
    btn.appendChild(makeIcon('phone', 'cf-ic cf-ic-o'));
    btn.appendChild(makeIcon('close', 'cf-ic cf-ic-x'));
    btn.addEventListener('click', () => this.toggle());
    this._btn = btn;

    // Appended in this order because .cf-root uses flex-direction:column-reverse,
    // which places the FIRST DOM child at the main-start (bottom of the stack).
    // The button must render there; the item list stacks upward above it.
    root.appendChild(btn);
    root.appendChild(list);
    document.body.appendChild(root);

    this._root = root;
    this._list = list;
  }

  _buildItem(contact, index) {
    const c = this.config;
    const li = document.createElement('li');
    li.className = 'cf-li';
    li.style.setProperty('--cf-dl', `${index * 45}ms`);

    const isLink = String(contact.url).startsWith('mailto:') || String(contact.url).startsWith('tel:');
    const a = document.createElement('a');
    a.className = 'cf-link';
    a.href = contact.url; // set via the DOM property, never parsed as markup
    if (!isLink) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.setAttribute('aria-label', contact.name);
    a.style.setProperty('--cf-br', brandColor(contact.icon));
    a.appendChild(makeIcon(contact.icon, 'cf-ic-i'));

    if (c.tooltip) {
      const tip = document.createElement('span');
      tip.className = 'cf-tip';
      tip.setAttribute('aria-hidden', 'true');
      tip.textContent = contact.name;
      a.appendChild(tip);
    }

    a.addEventListener('click', () => {
      if (c.onClick) c.onClick(contact);
      if (c.autoClose && this._open) this.close();
    });

    li.appendChild(a);
    return li;
  }

  _bindEvents() {
    this._onKeydown = (e) => {
      if (e.key === 'Escape' && this._open) {
        this.close();
        this._btn.focus();
      }
    };
    document.addEventListener('keydown', this._onKeydown);
  }

  // ---- Public API ---------------------------------------------------------

  open() {
    if (this._open || !this._root) return;
    this._open = true;
    this._root.classList.add('cf-open');
    this._btn.setAttribute('aria-expanded', 'true');
    this._btn.setAttribute('aria-label', `Close ${this.config.ariaLabel.toLowerCase()}`);
    if (this.config.onOpen) this.config.onOpen();
  }

  close() {
    if (!this._open || !this._root) return;
    this._open = false;
    this._root.classList.remove('cf-open');
    this._btn.setAttribute('aria-expanded', 'false');
    this._btn.setAttribute('aria-label', `Open ${this.config.ariaLabel.toLowerCase()}`);
    if (this.config.onClose) this.config.onClose();
  }

  toggle() {
    this._open ? this.close() : this.open();
  }

  isOpen() {
    return this._open;
  }

  destroy() {
    this._destroyed = true;
    if (!this._root) return;
    document.removeEventListener('keydown', this._onKeydown);
    this._root.remove();
    if (fab.#instances.get(this._key) === this) fab.#instances.delete(this._key);
    this._root = null;
    this._list = null;
    this._btn = null;
  }
}
