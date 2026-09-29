# Contact MENU

A lightweight, dependency-free floating contact menu for websites.

No React, no jQuery, no icon library, no external CSS. Drop in one script tag and you have an animated floating action button with your social and contact links.

```html
<script src="https://cdn.jsdelivr.net/gh/l7zqs/contact-menu@v1.0.0/fab.min.js"></script>
<script>
  const contact = new fab();
</script>
```

## Features

- Zero dependencies — vanilla JavaScript, no build step required to *use* it
- ~16 KB minified, self-injects its own CSS
- CDN-ready via jsDelivr, straight from GitHub
- Smooth, staggered open/close animation (slide, scale, fade, or none)
- Responsive: desktop, mobile portrait, and mobile landscape
- Keyboard accessible (Tab, Enter/Space, Escape) with proper ARIA attributes
- Dark and light themes, plus custom colors
- Add your own contacts with built-in icons for LinkedIn, GitHub, Facebook, WhatsApp, Telegram, Discord, email, and phone — unknown icons fall back to a generic link glyph
- Respects `prefers-reduced-motion`
- Public API: `open()`, `close()`, `toggle()`, `destroy()`, `isOpen()`
- `onOpen`, `onClose`, and `onClick` callbacks

## Installation

### Option 1 — CDN (recommended)

```html
<script src="https://cdn.jsdelivr.net/gh/l7zqs/contact-menu@v1.0.0/fab.min.js"></script>
```

Pin to a version tag (`@v1.0.0`) for production so an update to the repository can never change what your site loads. To always get the latest commit on `main` instead:

```html
<script src="https://cdn.jsdelivr.net/gh/l7zqs/contact-menu@main/dist/fab.min.js"></script>
```

### Option 2 — Self-hosted

Download `dist/fab.min.js` from a release and serve it yourself.

## Usage

```html
<script src="https://cdn.jsdelivr.net/gh/l7zqs/contact-menu@v1.0.0/fab.min.js"></script>
<script>
  new fab();
</script>
```

With configuration:

```js
const contact = new fab({
  position: "right",
  bottom: 30,
  right: 25,
  size: 58,
  spacing: 12,
  animation: "slide",
  duration: 300,
  theme: "dark",
  tooltip: true,
  autoClose: false,
  contacts: [
    { name: "LinkedIn", url: "https://linkedin.com/in/USERNAME", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/l7zqs", icon: "github" },
    { name: "Facebook", url: "https://facebook.com/USERNAME", icon: "facebook" },
    { name: "WhatsApp", url: "https://wa.me/8801XXXXXXXXX", icon: "whatsapp" }
  ]
});
```

## Configuration

| Option | Type | Default | Description |
|---|---|---|---|
| `position` | `"right" \| "left"` | `"right"` | Which side of the screen the FAB anchors to |
| `bottom` | number | `30` | Distance from the bottom edge, in px (desktop) |
| `right` | number | `25` | Distance from the anchored edge, in px (desktop) — used for `left` too when `position: "left"` |
| `size` | number | `58` | Main button diameter, in px |
| `spacing` | number | `12` | Gap between stacked buttons, in px |
| `animation` | `"slide" \| "scale" \| "fade" \| "none"` | `"slide"` | Entrance/exit animation style |
| `duration` | number | `300` | Transition duration per item, in ms |
| `theme` | `"dark" \| "light"` | `"dark"` | Built-in color theme |
| `tooltip` | boolean | `true` | Show name tooltips on hover (desktop only) |
| `autoClose` | boolean | `false` | Close the menu automatically after a contact is clicked |
| `zIndex` | number | `999999` | Stacking order of the FAB |
| `primaryColor` | string \| null | `null` | Overrides the main button's background color |
| `iconColor` | string \| null | `null` | Overrides the main button's icon color |
| `ariaLabel` | string | `"Contact menu"` | Base label used to build the button's `aria-label` |
| `mobile` | `{size, bottom, right}` \| null | auto-derived | Override sizing/position under 640px width |
| `contacts` | array | 4 defaults | List of `{ name, url, icon }` objects |
| `id` | string \| null | `null` | Set this to run more than one FAB at once, side by side with the default |
| `multiple` | boolean | `false` | Skip the single-instance replacement guard entirely |
| `onOpen` | function \| null | `null` | Called when the menu opens |
| `onClose` | function \| null | `null` | Called when the menu closes |
| `onClick` | function \| null | `null` | Called with the contact object when a link is clicked |

Invalid values (wrong type, `null`, unparseable) are silently discarded in favor of the default — a bad config can't crash the page.

### Built-in icons

`linkedin`, `github`, `facebook`, `whatsapp`, `telegram`, `discord`, `email`, `phone`, `link`. Any other `icon` value falls back to the generic `link` glyph. `mailto:` and `tel:` URLs are detected automatically and open in place rather than a new tab.

## API

```js
contact.open();     // open the menu
contact.close();    // close the menu
contact.toggle();   // toggle open/closed
contact.isOpen();   // → boolean
contact.destroy();  // remove the FAB from the page entirely
```

Calling `new fab()` again without an `id` replaces the existing default instance rather than stacking a second one on the page. Pass `id` (and optionally `multiple: true`) to run more than one FAB at a time.

## Local development

```bash
git clone https://github.com/l7zqs/contact-menu.git
cd contact-fab
npm install
npm run dev     # serves demo/index.html against the local build
npm run build   # writes dist/fab.js, dist/fab.min.js, and copies fab.min.js to the repo root
```

The demo lives at `demo/index.html` and loads `../dist/fab.js` directly, so `npm run build` (or `npm run dev`, which serves the repo root) is all you need to see changes.

## Browser support

Current Chrome, Edge, Firefox, and Safari (desktop and mobile), including Android browsers and iOS Safari. No experimental APIs are used.

## Troubleshooting

**The button doesn't appear.** Check the browser console for script-loading errors, and make sure the `<script>` tag isn't blocked by a Content-Security-Policy that disallows inline `<style>` injection (`style-src 'unsafe-inline'` or a nonce).

**Two buttons show up.** You likely called `new fab()` twice with different `id`s, or once with `multiple: true`. Omit both to keep the single-instance guard active.

**It's hidden behind other content.** Raise `zIndex` in the config above whatever the host page uses for its highest layer.

**Icons look wrong for a custom contact.** Check the `icon` name against the built-in list above — anything else silently falls back to a generic link icon rather than failing.

## License

MIT — see [LICENSE](./LICENSE).
