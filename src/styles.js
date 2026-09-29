/**
 * All CSS lives here and is injected once, as a single <style> tag.
 *
 * Isolation rules:
 *  - every selector starts with a `cf-` class (nothing targets bare button/div/a);
 *  - `all:unset` on the <button>/<a> so host-site rules cannot restyle them;
 *  - all layout values come from CSS variables that the script sets on the root.
 */
export const STYLE_ID = 'cf-fab-styles';

export const CSS = [
'.cf-root{--cf-size:var(--cf-size-d);--cf-bottom:var(--cf-bottom-d);--cf-x:var(--cf-x-d);position:fixed;z-index:var(--cf-z);bottom:calc(var(--cf-bottom) + env(safe-area-inset-bottom,0px));width:var(--cf-size);display:flex;flex-direction:column-reverse;align-items:center;gap:var(--cf-gap);margin:0;padding:0;box-sizing:border-box;pointer-events:none;font:500 13px/1.2 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%}',
'.cf-root[data-side=right]{right:calc(var(--cf-x) + env(safe-area-inset-right,0px))}',
'.cf-root[data-side=left]{left:calc(var(--cf-x) + env(safe-area-inset-left,0px))}',
'.cf-dark{--cf-bg:#111;--cf-fg:#fff;--cf-sf:#1c1c1f;--cf-bd:rgba(255,255,255,.1);--cf-sh:0 12px 32px rgba(0,0,0,.38),0 2px 8px rgba(0,0,0,.28)}',
'.cf-light{--cf-bg:#fff;--cf-fg:#16181d;--cf-sf:#fff;--cf-bd:rgba(22,24,29,.08);--cf-sh:0 12px 32px rgba(22,24,29,.16),0 2px 8px rgba(22,24,29,.08)}',
'.cf-a-slide{--cf-from:translateY(18px) scale(.3)}',
'.cf-a-scale{--cf-from:scale(0)}',
'.cf-a-fade,.cf-a-none{--cf-from:none}',
'.cf-btn{all:unset;box-sizing:border-box;position:relative;display:grid;place-items:center;width:var(--cf-size);height:var(--cf-size);border-radius:50%;background:var(--cf-bg);color:var(--cf-fg);box-shadow:var(--cf-sh),inset 0 0 0 1px var(--cf-bd);cursor:pointer;pointer-events:auto;touch-action:manipulation;user-select:none;-webkit-user-select:none;transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s ease;animation:cf-in .55s .25s cubic-bezier(.2,.8,.2,1) backwards}',
'.cf-btn:active{transform:scale(.92)}',
'.cf-btn:focus-visible,.cf-link:focus-visible{outline:3px solid #5b9dff;outline-offset:3px}',
'.cf-ic{grid-area:1/1;display:block;width:calc(var(--cf-size)*.42);height:calc(var(--cf-size)*.42);transition:transform var(--cf-d) cubic-bezier(.2,.8,.2,1),opacity var(--cf-d) ease}',
'.cf-ic-x{opacity:0;transform:rotate(-90deg) scale(.5)}',
'.cf-open .cf-ic-o{opacity:0;transform:rotate(90deg) scale(.5)}',
'.cf-open .cf-ic-x{opacity:1;transform:none}',
'.cf-list{display:flex;flex-direction:column-reverse;align-items:center;gap:var(--cf-gap);margin:0;padding:0;list-style:none;pointer-events:none}',
'.cf-li{--cf-dl:0ms;display:block;position:relative;margin:0;padding:0;list-style:none;opacity:0;visibility:hidden;pointer-events:none;transform:var(--cf-from);transition:opacity var(--cf-d) ease var(--cf-dl),transform var(--cf-d) ease var(--cf-dl),visibility 0s linear calc(var(--cf-d) + var(--cf-dl))}',
'.cf-open .cf-li{opacity:1;visibility:visible;pointer-events:auto;transform:none;transition:opacity var(--cf-d) ease var(--cf-dl),transform calc(var(--cf-d)*1.25) cubic-bezier(.34,1.56,.64,1) var(--cf-dl),visibility 0s}',
'.cf-link{all:unset;box-sizing:border-box;position:relative;display:grid;place-items:center;width:calc(var(--cf-size)*.85);height:calc(var(--cf-size)*.85);border-radius:50%;background:var(--cf-sf);color:var(--cf-fg);box-shadow:var(--cf-sh),inset 0 0 0 1px var(--cf-bd);cursor:pointer;touch-action:manipulation;-webkit-user-select:none;user-select:none;transition:transform .2s ease,background-color .2s ease,color .2s ease}',
'.cf-ic-i{display:block;width:calc(var(--cf-size)*.39);height:calc(var(--cf-size)*.39);pointer-events:none}',
'.cf-link:focus-visible{background:var(--cf-br);color:#fff}',
'.cf-tip{position:absolute;top:50%;right:calc(100% + 12px);padding:7px 11px;border-radius:9px;background:var(--cf-sf);color:var(--cf-fg);box-shadow:var(--cf-sh),0 0 0 1px var(--cf-bd);white-space:nowrap;letter-spacing:.01em;opacity:0;pointer-events:none;transform:translate(6px,-50%);transition:opacity .16s ease,transform .16s ease}',
'.cf-root[data-side=left] .cf-tip{right:auto;left:calc(100% + 12px);transform:translate(-6px,-50%)}',
'@media (hover:hover){.cf-btn:hover{transform:translateY(-2px) scale(1.06)}.cf-link:hover{background:var(--cf-br);color:#fff;transform:scale(1.1)}}',
'@media (hover:hover) and (pointer:fine) and (min-width:641px){.cf-link:hover .cf-tip,.cf-link:focus-visible .cf-tip{opacity:1;transform:translate(0,-50%)}}',
'@media (max-width:640px){.cf-root{--cf-size:var(--cf-size-m);--cf-bottom:var(--cf-bottom-m);--cf-x:var(--cf-x-m)}}',
'@media (max-height:480px) and (orientation:landscape){.cf-root{flex-direction:row-reverse;width:auto}.cf-list{flex-direction:row-reverse}.cf-a-slide{--cf-from:translateX(18px) scale(.3)}.cf-root[data-side=left]{flex-direction:row}.cf-root[data-side=left] .cf-list{flex-direction:row}.cf-root[data-side=left].cf-a-slide{--cf-from:translateX(-18px) scale(.3)}}',
'@media (prefers-reduced-motion:reduce){.cf-btn{animation:none}.cf-btn,.cf-ic,.cf-li,.cf-link,.cf-tip{transition-duration:.01ms!important;transition-delay:0s!important}}',
'@media print{.cf-root{display:none}}',
'@keyframes cf-in{from{opacity:0;transform:scale(.6)}}',
].join('');
