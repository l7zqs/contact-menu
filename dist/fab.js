/*! Contact FAB v1.0.0 | MIT License | https://github.com/l7zqs/contact-fab */
(() => {
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);

  // src/icons.js
  var NS = "http://www.w3.org/2000/svg";
  var ICONS = {
    linkedin: { c: "#0A66C2", d: ["M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"] },
    github: { c: "#24292F", d: ["M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"] },
    facebook: { c: "#1877F2", d: ["M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"] },
    whatsapp: { c: "#25D366", d: ["M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"] },
    telegram: { c: "#26A5E4", d: ["M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"] },
    discord: { c: "#5865F2", d: ["M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.11 13.11 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"] },
    email: { s: 1, c: "#EA4335", d: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "M22 6l-10 7L2 6"] },
    phone: { s: 1, c: "#22A455", d: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"] },
    link: { s: 1, c: "#6B7280", d: ["M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"] },
    close: { s: 1, c: "#6B7280", d: ["M18 6L6 18", "M6 6l12 12"] }
  };
  var lookup = (name) => ICONS[String(name || "").toLowerCase()] || ICONS.link;
  var brandColor = (name) => lookup(name).c;
  function makeIcon(name, className) {
    const def = lookup(name);
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", className);
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    if (def.s) {
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "2");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");
    } else {
      svg.setAttribute("fill", "currentColor");
    }
    def.d.forEach((d) => {
      const p = document.createElementNS(NS, "path");
      p.setAttribute("d", d);
      svg.appendChild(p);
    });
    return svg;
  }

  // src/styles.js
  var STYLE_ID = "cf-fab-styles";
  var CSS = [
    '.cf-root{--cf-size:var(--cf-size-d);--cf-bottom:var(--cf-bottom-d);--cf-x:var(--cf-x-d);position:fixed;z-index:var(--cf-z);bottom:calc(var(--cf-bottom) + env(safe-area-inset-bottom,0px));width:var(--cf-size);display:flex;flex-direction:column-reverse;align-items:center;gap:var(--cf-gap);margin:0;padding:0;box-sizing:border-box;pointer-events:none;font:500 13px/1.2 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%}',
    ".cf-root[data-side=right]{right:calc(var(--cf-x) + env(safe-area-inset-right,0px))}",
    ".cf-root[data-side=left]{left:calc(var(--cf-x) + env(safe-area-inset-left,0px))}",
    ".cf-dark{--cf-bg:#111;--cf-fg:#fff;--cf-sf:#1c1c1f;--cf-bd:rgba(255,255,255,.1);--cf-sh:0 12px 32px rgba(0,0,0,.38),0 2px 8px rgba(0,0,0,.28)}",
    ".cf-light{--cf-bg:#fff;--cf-fg:#16181d;--cf-sf:#fff;--cf-bd:rgba(22,24,29,.08);--cf-sh:0 12px 32px rgba(22,24,29,.16),0 2px 8px rgba(22,24,29,.08)}",
    ".cf-a-slide{--cf-from:translateY(18px) scale(.3)}",
    ".cf-a-scale{--cf-from:scale(0)}",
    ".cf-a-fade,.cf-a-none{--cf-from:none}",
    ".cf-btn{all:unset;box-sizing:border-box;position:relative;display:grid;place-items:center;width:var(--cf-size);height:var(--cf-size);border-radius:50%;background:var(--cf-bg);color:var(--cf-fg);box-shadow:var(--cf-sh),inset 0 0 0 1px var(--cf-bd);cursor:pointer;pointer-events:auto;touch-action:manipulation;user-select:none;-webkit-user-select:none;transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s ease;animation:cf-in .55s .25s cubic-bezier(.2,.8,.2,1) backwards}",
    ".cf-btn:active{transform:scale(.92)}",
    ".cf-btn:focus-visible,.cf-link:focus-visible{outline:3px solid #5b9dff;outline-offset:3px}",
    ".cf-ic{grid-area:1/1;display:block;width:calc(var(--cf-size)*.42);height:calc(var(--cf-size)*.42);transition:transform var(--cf-d) cubic-bezier(.2,.8,.2,1),opacity var(--cf-d) ease}",
    ".cf-ic-x{opacity:0;transform:rotate(-90deg) scale(.5)}",
    ".cf-open .cf-ic-o{opacity:0;transform:rotate(90deg) scale(.5)}",
    ".cf-open .cf-ic-x{opacity:1;transform:none}",
    ".cf-list{display:flex;flex-direction:column-reverse;align-items:center;gap:var(--cf-gap);margin:0;padding:0;list-style:none;pointer-events:none}",
    ".cf-li{--cf-dl:0ms;display:block;position:relative;margin:0;padding:0;list-style:none;opacity:0;visibility:hidden;pointer-events:none;transform:var(--cf-from);transition:opacity var(--cf-d) ease var(--cf-dl),transform var(--cf-d) ease var(--cf-dl),visibility 0s linear calc(var(--cf-d) + var(--cf-dl))}",
    ".cf-open .cf-li{opacity:1;visibility:visible;pointer-events:auto;transform:none;transition:opacity var(--cf-d) ease var(--cf-dl),transform calc(var(--cf-d)*1.25) cubic-bezier(.34,1.56,.64,1) var(--cf-dl),visibility 0s}",
    ".cf-link{all:unset;box-sizing:border-box;position:relative;display:grid;place-items:center;width:calc(var(--cf-size)*.85);height:calc(var(--cf-size)*.85);border-radius:50%;background:var(--cf-sf);color:var(--cf-fg);box-shadow:var(--cf-sh),inset 0 0 0 1px var(--cf-bd);cursor:pointer;touch-action:manipulation;-webkit-user-select:none;user-select:none;transition:transform .2s ease,background-color .2s ease,color .2s ease}",
    ".cf-ic-i{display:block;width:calc(var(--cf-size)*.39);height:calc(var(--cf-size)*.39);pointer-events:none}",
    ".cf-link:focus-visible{background:var(--cf-br);color:#fff}",
    ".cf-tip{position:absolute;top:50%;right:calc(100% + 12px);padding:7px 11px;border-radius:9px;background:var(--cf-sf);color:var(--cf-fg);box-shadow:var(--cf-sh),0 0 0 1px var(--cf-bd);white-space:nowrap;letter-spacing:.01em;opacity:0;pointer-events:none;transform:translate(6px,-50%);transition:opacity .16s ease,transform .16s ease}",
    ".cf-root[data-side=left] .cf-tip{right:auto;left:calc(100% + 12px);transform:translate(-6px,-50%)}",
    "@media (hover:hover){.cf-btn:hover{transform:translateY(-2px) scale(1.06)}.cf-link:hover{background:var(--cf-br);color:#fff;transform:scale(1.1)}}",
    "@media (hover:hover) and (pointer:fine) and (min-width:641px){.cf-link:hover .cf-tip,.cf-link:focus-visible .cf-tip{opacity:1;transform:translate(0,-50%)}}",
    "@media (max-width:640px){.cf-root{--cf-size:var(--cf-size-m);--cf-bottom:var(--cf-bottom-m);--cf-x:var(--cf-x-m)}}",
    "@media (max-height:480px) and (orientation:landscape){.cf-root{flex-direction:row-reverse;width:auto}.cf-list{flex-direction:row-reverse}.cf-a-slide{--cf-from:translateX(18px) scale(.3)}.cf-root[data-side=left]{flex-direction:row}.cf-root[data-side=left] .cf-list{flex-direction:row}.cf-root[data-side=left].cf-a-slide{--cf-from:translateX(-18px) scale(.3)}}",
    "@media (prefers-reduced-motion:reduce){.cf-btn{animation:none}.cf-btn,.cf-ic,.cf-li,.cf-link,.cf-tip{transition-duration:.01ms!important;transition-delay:0s!important}}",
    "@media print{.cf-root{display:none}}",
    "@keyframes cf-in{from{opacity:0;transform:scale(.6)}}"
  ].join("");

  // src/fab.js
  var DEFAULT_CONTACTS = [
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/", icon: "github" },
    { name: "Facebook", url: "https://facebook.com/", icon: "facebook" },
    { name: "WhatsApp", url: "https://wa.me/", icon: "whatsapp" }
  ];
  var DEFAULTS = {
    position: "right",
    // 'right' | 'left'
    bottom: 30,
    // px from the bottom edge (desktop)
    right: 25,
    // px from the anchored edge (desktop) — used for `left` too when position:'left'
    size: 58,
    // main button diameter, px
    spacing: 12,
    // gap between stacked buttons, px
    animation: "slide",
    // 'slide' | 'scale' | 'fade' | 'none'
    duration: 300,
    // ms, per-item transition length
    theme: "dark",
    // 'dark' | 'light'
    tooltip: true,
    // show hover tooltips on desktop
    autoClose: false,
    // close the menu after a contact is clicked
    zIndex: 999999,
    primaryColor: null,
    // overrides the main button's background
    iconColor: null,
    // overrides the main button's icon color
    ariaLabel: "Contact menu",
    mobile: null,
    // optional {size, bottom, right} override for small screens
    contacts: null,
    // falls back to DEFAULT_CONTACTS
    onOpen: null,
    onClose: null,
    onClick: null,
    id: null,
    // set this to allow more than one FAB on a page
    multiple: false
    // true skips the single-instance replacement guard
  };
  var isNum = (v) => typeof v === "number" && Number.isFinite(v);
  var isStr = (v) => typeof v === "string" && v.length > 0;
  var num = (v, fallback) => isNum(v) ? v : fallback;
  function sanitizeConfig(input) {
    const cfg = { ...DEFAULTS, ...input && typeof input === "object" ? input : {} };
    cfg.position = cfg.position === "left" ? "left" : "right";
    cfg.bottom = num(cfg.bottom, DEFAULTS.bottom);
    cfg.right = num(cfg.right, DEFAULTS.right);
    cfg.size = num(cfg.size, DEFAULTS.size);
    cfg.spacing = num(cfg.spacing, DEFAULTS.spacing);
    cfg.duration = num(cfg.duration, DEFAULTS.duration);
    cfg.zIndex = num(cfg.zIndex, DEFAULTS.zIndex);
    cfg.animation = ["slide", "scale", "fade", "none"].includes(cfg.animation) ? cfg.animation : DEFAULTS.animation;
    cfg.theme = cfg.theme === "light" ? "light" : "dark";
    cfg.tooltip = cfg.tooltip !== false;
    cfg.autoClose = cfg.autoClose === true;
    cfg.multiple = cfg.multiple === true;
    cfg.primaryColor = isStr(cfg.primaryColor) ? cfg.primaryColor : null;
    cfg.iconColor = isStr(cfg.iconColor) ? cfg.iconColor : null;
    cfg.ariaLabel = isStr(cfg.ariaLabel) ? cfg.ariaLabel : DEFAULTS.ariaLabel;
    cfg.id = isStr(cfg.id) ? cfg.id : null;
    const m = cfg.mobile && typeof cfg.mobile === "object" ? cfg.mobile : {};
    cfg.mobile = {
      size: num(m.size, Math.round(cfg.size * 0.86)),
      bottom: num(m.bottom, Math.max(cfg.bottom - 10, 16)),
      right: num(m.right, Math.max(cfg.right - 9, 12))
    };
    cfg.contacts = Array.isArray(cfg.contacts) && cfg.contacts.length ? cfg.contacts.filter((c) => c && typeof c === "object" && isStr(c.name) && isStr(c.url)) : DEFAULT_CONTACTS;
    if (!cfg.contacts.length) cfg.contacts = DEFAULT_CONTACTS;
    for (const key of ["onOpen", "onClose", "onClick"]) {
      cfg[key] = typeof cfg[key] === "function" ? cfg[key] : null;
    }
    return cfg;
  }
  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }
  var idSeq = 0;
  var _instances;
  var _fab = class _fab {
    constructor(userConfig) {
      this.config = sanitizeConfig(userConfig);
      this._open = false;
      this._uid = `cf-${++idSeq}`;
      const key = this.config.multiple ? this._uid : this.config.id || "default";
      if (!this.config.multiple || this.config.id) {
        const prev = __privateGet(_fab, _instances).get(key);
        if (prev && prev !== this) prev.destroy();
      }
      this._key = key;
      __privateGet(_fab, _instances).set(key, this);
      this._destroyed = false;
      if (document.body) {
        this._init();
      } else {
        document.addEventListener("DOMContentLoaded", () => this._init(), { once: true });
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
      const root = document.createElement("div");
      root.className = `cf-root cf-${c.theme} cf-a-${c.animation}`;
      root.dataset.side = c.position;
      root.style.setProperty("--cf-size-d", `${c.size}px`);
      root.style.setProperty("--cf-bottom-d", `${c.bottom}px`);
      root.style.setProperty("--cf-x-d", `${c.right}px`);
      root.style.setProperty("--cf-size-m", `${c.mobile.size}px`);
      root.style.setProperty("--cf-bottom-m", `${c.mobile.bottom}px`);
      root.style.setProperty("--cf-x-m", `${c.mobile.right}px`);
      root.style.setProperty("--cf-gap", `${c.spacing}px`);
      root.style.setProperty("--cf-d", `${c.duration}ms`);
      root.style.setProperty("--cf-z", String(c.zIndex));
      if (c.primaryColor) root.style.setProperty("--cf-bg", c.primaryColor);
      if (c.iconColor) root.style.setProperty("--cf-fg", c.iconColor);
      const list = document.createElement("ul");
      list.className = "cf-list";
      c.contacts.forEach((contact, i) => {
        list.appendChild(this._buildItem(contact, i));
      });
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cf-btn";
      btn.setAttribute("aria-haspopup", "true");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", `Open ${c.ariaLabel.toLowerCase()}`);
      btn.appendChild(makeIcon("phone", "cf-ic cf-ic-o"));
      btn.appendChild(makeIcon("close", "cf-ic cf-ic-x"));
      btn.addEventListener("click", () => this.toggle());
      this._btn = btn;
      root.appendChild(btn);
      root.appendChild(list);
      document.body.appendChild(root);
      this._root = root;
      this._list = list;
    }
    _buildItem(contact, index) {
      const c = this.config;
      const li = document.createElement("li");
      li.className = "cf-li";
      li.style.setProperty("--cf-dl", `${index * 45}ms`);
      const isLink = String(contact.url).startsWith("mailto:") || String(contact.url).startsWith("tel:");
      const a = document.createElement("a");
      a.className = "cf-link";
      a.href = contact.url;
      if (!isLink) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      a.setAttribute("aria-label", contact.name);
      a.style.setProperty("--cf-br", brandColor(contact.icon));
      a.appendChild(makeIcon(contact.icon, "cf-ic-i"));
      if (c.tooltip) {
        const tip = document.createElement("span");
        tip.className = "cf-tip";
        tip.setAttribute("aria-hidden", "true");
        tip.textContent = contact.name;
        a.appendChild(tip);
      }
      a.addEventListener("click", () => {
        if (c.onClick) c.onClick(contact);
        if (c.autoClose && this._open) this.close();
      });
      li.appendChild(a);
      return li;
    }
    _bindEvents() {
      this._onKeydown = (e) => {
        if (e.key === "Escape" && this._open) {
          this.close();
          this._btn.focus();
        }
      };
      document.addEventListener("keydown", this._onKeydown);
    }
    // ---- Public API ---------------------------------------------------------
    open() {
      if (this._open || !this._root) return;
      this._open = true;
      this._root.classList.add("cf-open");
      this._btn.setAttribute("aria-expanded", "true");
      this._btn.setAttribute("aria-label", `Close ${this.config.ariaLabel.toLowerCase()}`);
      if (this.config.onOpen) this.config.onOpen();
    }
    close() {
      if (!this._open || !this._root) return;
      this._open = false;
      this._root.classList.remove("cf-open");
      this._btn.setAttribute("aria-expanded", "false");
      this._btn.setAttribute("aria-label", `Open ${this.config.ariaLabel.toLowerCase()}`);
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
      document.removeEventListener("keydown", this._onKeydown);
      this._root.remove();
      if (__privateGet(_fab, _instances).get(this._key) === this) __privateGet(_fab, _instances).delete(this._key);
      this._root = null;
      this._list = null;
      this._btn = null;
    }
  };
  _instances = new WeakMap();
  __privateAdd(_fab, _instances, /* @__PURE__ */ new Map());
  var fab = _fab;

  // src/index.js
  if (typeof window !== "undefined") {
    window.fab = fab;
  }
})();
