/**
 * Swiper 5.3.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2020
 */

!(function (e, t) { typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = t() : typeof define === 'function' && define.amd ? define(t) : (e = e || self).Swiper = t(); }(this, (() => {
  const e = typeof document === 'undefined' ? {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    getElementById() { return null; },
    createEvent() { return { initEvent() {} }; },
    createElement() {
      return {
        children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName() { return []; },
      };
    },
    location: { hash: '' },
  } : document; const t = typeof window === 'undefined' ? {
    document: e, navigator: { userAgent: '' }, location: {}, history: {}, CustomEvent() { return this; }, addEventListener() {}, removeEventListener() {}, getComputedStyle() { return { getPropertyValue() { return ''; } }; }, Image() {}, Date() {}, screen: {}, setTimeout() {}, clearTimeout() {},
  } : window; const i = function (e) { for (let t = 0; t < e.length; t += 1) this[t] = e[t]; return this.length = e.length, this; }; function s(s, a) { const r = []; let n = 0; if (s && !a && s instanceof i) return s; if (s) if (typeof s === 'string') { let o; let l; const d = s.trim(); if (d.indexOf('<') >= 0 && d.indexOf('>') >= 0) { let h = 'div'; for (d.indexOf('<li') === 0 && (h = 'ul'), d.indexOf('<tr') === 0 && (h = 'tbody'), d.indexOf('<td') !== 0 && d.indexOf('<th') !== 0 || (h = 'tr'), d.indexOf('<tbody') === 0 && (h = 'table'), d.indexOf('<option') === 0 && (h = 'select'), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1)r.push(l.childNodes[n]); } else for (o = a || s[0] !== '#' || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split('#')[1])], n = 0; n < o.length; n += 1)o[n] && r.push(o[n]); } else if (s.nodeType || s === t || s === e)r.push(s); else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1)r.push(s[n]); return new i(r); } function a(e) { for (var t = [], i = 0; i < e.length; i += 1)t.indexOf(e[i]) === -1 && t.push(e[i]); return t; }s.fn = i.prototype, s.Class = i, s.Dom7 = i; const r = {
    addClass(e) { if (void 0 === e) return this; for (let t = e.split(' '), i = 0; i < t.length; i += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]); return this; }, removeClass(e) { for (let t = e.split(' '), i = 0; i < t.length; i += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]); return this; }, hasClass(e) { return !!this[0] && this[0].classList.contains(e); }, toggleClass(e) { for (let t = e.split(' '), i = 0; i < t.length; i += 1) for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]); return this; }, attr(e, t) { const i = arguments; if (arguments.length === 1 && typeof e === 'string') return this[0] ? this[0].getAttribute(e) : void 0; for (let s = 0; s < this.length; s += 1) if (i.length === 2) this[s].setAttribute(e, t); else for (const a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]); return this; }, removeAttr(e) { for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e); return this; }, data(e, t) { let i; if (void 0 !== t) { for (let s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t; return this; } if (i = this[0]) { if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e]; const a = i.getAttribute(`data-${e}`); return a || void 0; } }, transform(e) { for (let t = 0; t < this.length; t += 1) { const i = this[t].style; i.webkitTransform = e, i.transform = e; } return this; }, transition(e) { typeof e !== 'string' && (e += 'ms'); for (let t = 0; t < this.length; t += 1) { const i = this[t].style; i.webkitTransitionDuration = e, i.transitionDuration = e; } return this; }, on() { for (var e, t = [], i = arguments.length; i--;)t[i] = arguments[i]; let a = t[0]; let r = t[1]; let n = t[2]; let o = t[3]; function l(e) { const t = e.target; if (t) { const i = e.target.dom7EventData || []; if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(r))n.apply(t, i); else for (let a = s(t).parents(), o = 0; o < a.length; o += 1)s(a[o]).is(r) && n.apply(a[o], i); } } function d(e) { const t = e && e.target && e.target.dom7EventData || []; t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t); } typeof t[1] === 'function' && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1); for (var h, p = a.split(' '), c = 0; c < this.length; c += 1) { const u = this[c]; if (r) for (h = 0; h < p.length; h += 1) { const v = p[h]; u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, o); } else for (h = 0; h < p.length; h += 1) { const f = p[h]; u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({ listener: n, proxyListener: d }), u.addEventListener(f, d, o); } } return this; }, off() { for (var e, t = [], i = arguments.length; i--;)t[i] = arguments[i]; let s = t[0]; let a = t[1]; let r = t[2]; let n = t[3]; typeof t[1] === 'function' && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1); for (let o = s.split(' '), l = 0; l < o.length; l += 1) for (let d = o[l], h = 0; h < this.length; h += 1) { const p = this[h]; let c = void 0; if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (let u = c.length - 1; u >= 0; u -= 1) { const v = c[u]; r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)); } } return this; }, trigger() { for (var i = [], s = arguments.length; s--;)i[s] = arguments[s]; for (let a = i[0].split(' '), r = i[1], n = 0; n < a.length; n += 1) for (let o = a[n], l = 0; l < this.length; l += 1) { const d = this[l]; let h = void 0; try { h = new t.CustomEvent(o, { detail: r, bubbles: !0, cancelable: !0 }); } catch (t) { (h = e.createEvent('Event')).initEvent(o, !0, !0), h.detail = r; }d.dom7EventData = i.filter(((e, t) => t > 0)), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData; } return this; }, transitionEnd(e) { let t; const i = ['webkitTransitionEnd', 'transitionend']; const s = this; function a(r) { if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1)s.off(i[t], a); } if (e) for (t = 0; t < i.length; t += 1)s.on(i[t], a); return this; }, outerWidth(e) { if (this.length > 0) { if (e) { const t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue('margin-right')) + parseFloat(t.getPropertyValue('margin-left')); } return this[0].offsetWidth; } return null; }, outerHeight(e) { if (this.length > 0) { if (e) { const t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue('margin-top')) + parseFloat(t.getPropertyValue('margin-bottom')); } return this[0].offsetHeight; } return null; }, offset() { if (this.length > 0) { const i = this[0]; const s = i.getBoundingClientRect(); const a = e.body; const r = i.clientTop || a.clientTop || 0; const n = i.clientLeft || a.clientLeft || 0; const o = i === t ? t.scrollY : i.scrollTop; const l = i === t ? t.scrollX : i.scrollLeft; return { top: s.top + o - r, left: s.left + l - n }; } return null; }, css(e, i) { let s; if (arguments.length === 1) { if (typeof e !== 'string') { for (s = 0; s < this.length; s += 1) for (const a in e) this[s].style[a] = e[a]; return this; } if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e); } if (arguments.length === 2 && typeof e === 'string') { for (s = 0; s < this.length; s += 1) this[s].style[e] = i; return this; } return this; }, each(e) { if (!e) return this; for (let t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this; return this; }, html(e) { if (void 0 === e) return this[0] ? this[0].innerHTML : void 0; for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e; return this; }, text(e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (let t = 0; t < this.length; t += 1) this[t].textContent = e; return this; }, is(a) { let r; let n; const o = this[0]; if (!o || void 0 === a) return !1; if (typeof a === 'string') { if (o.matches) return o.matches(a); if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a); if (o.msMatchesSelector) return o.msMatchesSelector(a); for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0; return !1; } if (a === e) return o === e; if (a === t) return o === t; if (a.nodeType || a instanceof i) { for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0; return !1; } return !1; }, index() { let e; let t = this[0]; if (t) { for (e = 0; (t = t.previousSibling) !== null;)t.nodeType === 1 && (e += 1); return e; } }, eq(e) { if (void 0 === e) return this; let t; const s = this.length; return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]]); }, append() { for (var t, s = [], a = arguments.length; a--;)s[a] = arguments[a]; for (let r = 0; r < s.length; r += 1) { t = s[r]; for (let n = 0; n < this.length; n += 1) if (typeof t === 'string') { const o = e.createElement('div'); for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild); } else if (t instanceof i) for (let l = 0; l < t.length; l += 1) this[n].appendChild(t[l]); else this[n].appendChild(t); } return this; }, prepend(t) { let s; let a; for (s = 0; s < this.length; s += 1) if (typeof t === 'string') { const r = e.createElement('div'); for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]); } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]); else this[s].insertBefore(t, this[s].childNodes[0]); return this; }, next(e) { return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([]); }, nextAll(e) { const t = []; let a = this[0]; if (!a) return new i([]); for (;a.nextElementSibling;) { const r = a.nextElementSibling; e ? s(r).is(e) && t.push(r) : t.push(r), a = r; } return new i(t); }, prev(e) { if (this.length > 0) { const t = this[0]; return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([]); } return new i([]); }, prevAll(e) { const t = []; let a = this[0]; if (!a) return new i([]); for (;a.previousElementSibling;) { const r = a.previousElementSibling; e ? s(r).is(e) && t.push(r) : t.push(r), a = r; } return new i(t); }, parent(e) { for (var t = [], i = 0; i < this.length; i += 1) this[i].parentNode !== null && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode)); return s(a(t)); }, parents(e) { for (var t = [], i = 0; i < this.length; i += 1) for (let r = this[i].parentNode; r;)e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode; return s(a(t)); }, closest(e) { let t = this; return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t); }, find(e) { for (var t = [], s = 0; s < this.length; s += 1) for (let a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)t.push(a[r]); return new i(t); }, children(e) { for (var t = [], r = 0; r < this.length; r += 1) for (let n = this[r].childNodes, o = 0; o < n.length; o += 1)e ? n[o].nodeType === 1 && s(n[o]).is(e) && t.push(n[o]) : n[o].nodeType === 1 && t.push(n[o]); return new i(a(t)); }, filter(e) { for (var t = [], s = 0; s < this.length; s += 1)e.call(this[s], s, this[s]) && t.push(this[s]); return new i(t); }, remove() { for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this; }, add() { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; let i; let a; const r = this; for (i = 0; i < e.length; i += 1) { const n = s(e[i]); for (a = 0; a < n.length; a += 1)r[r.length] = n[a], r.length += 1; } return r; }, styles() { return this[0] ? t.getComputedStyle(this[0], null) : {}; },
  }; Object.keys(r).forEach(((e) => { s.fn[e] = s.fn[e] || r[e]; })); var n = {
    deleteProps(e) { const t = e; Object.keys(t).forEach(((e) => { try { t[e] = null; } catch (e) {} try { delete t[e]; } catch (e) {} })); }, nextTick(e, t) { return void 0 === t && (t = 0), setTimeout(e, t); }, now() { return Date.now(); }, getTranslate(e, i) { let s; let a; let r; void 0 === i && (i = 'x'); const n = t.getComputedStyle(e, null); return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(',').length > 6 && (a = a.split(', ').map(((e) => e.replace(',', '.'))).join(', ')), r = new t.WebKitCSSMatrix(a === 'none' ? '' : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')).toString().split(','), i === 'x' && (a = t.WebKitCSSMatrix ? r.m41 : s.length === 16 ? parseFloat(s[12]) : parseFloat(s[4])), i === 'y' && (a = t.WebKitCSSMatrix ? r.m42 : s.length === 16 ? parseFloat(s[13]) : parseFloat(s[5])), a || 0; }, parseUrlQuery(e) { let i; let s; let a; let r; const n = {}; let o = e || t.location.href; if (typeof o === 'string' && o.length) for (r = (s = (o = o.indexOf('?') > -1 ? o.replace(/\S*\?/, '') : '').split('&').filter(((e) => e !== ''))).length, i = 0; i < r; i += 1)a = s[i].replace(/#\S+/g, '').split('='), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || ''; return n; }, isObject(e) { return typeof e === 'object' && e !== null && e.constructor && e.constructor === Object; }, extend() { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; for (var i = Object(e[0]), s = 1; s < e.length; s += 1) { const a = e[s]; if (a != null) for (let r = Object.keys(Object(a)), o = 0, l = r.length; o < l; o += 1) { const d = r[o]; const h = Object.getOwnPropertyDescriptor(a, d); void 0 !== h && h.enumerable && (n.isObject(i[d]) && n.isObject(a[d]) ? n.extend(i[d], a[d]) : !n.isObject(i[d]) && n.isObject(a[d]) ? (i[d] = {}, n.extend(i[d], a[d])) : i[d] = a[d]); } } return i; },
  }; const o = {
    touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || 'ontouchstart' in t || t.DocumentTouch && e instanceof t.DocumentTouch), pointerEvents: !!t.PointerEvent && 'maxTouchPoints' in t.navigator && t.navigator.maxTouchPoints > 0, observer: 'MutationObserver' in t || 'WebkitMutationObserver' in t, passiveListener: (function () { let e = !1; try { const i = Object.defineProperty({}, 'passive', { get() { e = !0; } }); t.addEventListener('testPassiveListener', null, i); } catch (e) {} return e; }()), gestures: 'ongesturestart' in t,
  }; const l = function (e) { void 0 === e && (e = {}); const t = this; t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(((e) => { t.on(e, t.params.on[e]); })); }; const d = { components: { configurable: !0 } }; l.prototype.on = function (e, t, i) { const s = this; if (typeof t !== 'function') return s; const a = i ? 'unshift' : 'push'; return e.split(' ').forEach(((e) => { s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t); })), s; }, l.prototype.once = function (e, t, i) { const s = this; if (typeof t !== 'function') return s; function a() { for (var i = [], r = arguments.length; r--;)i[r] = arguments[r]; s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i); } return a.f7proxy = t, s.on(e, a, i); }, l.prototype.off = function (e, t) { const i = this; return i.eventsListeners ? (e.split(' ').forEach(((e) => { void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(((s, a) => { (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1); })); })), i) : i; }, l.prototype.emit = function () { for (var e = [], t = arguments.length; t--;)e[t] = arguments[t]; let i; let s; let a; const r = this; if (!r.eventsListeners) return r; typeof e[0] === 'string' || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r); const n = Array.isArray(i) ? i : i.split(' '); return n.forEach(((e) => { if (r.eventsListeners && r.eventsListeners[e]) { const t = []; r.eventsListeners[e].forEach(((e) => { t.push(e); })), t.forEach(((e) => { e.apply(a, s); })); } })), r; }, l.prototype.useModulesParams = function (e) { const t = this; t.modules && Object.keys(t.modules).forEach(((i) => { const s = t.modules[i]; s.params && n.extend(e, s.params); })); }, l.prototype.useModules = function (e) { void 0 === e && (e = {}); const t = this; t.modules && Object.keys(t.modules).forEach(((i) => { const s = t.modules[i]; const a = e[i] || {}; s.instance && Object.keys(s.instance).forEach(((e) => { const i = s.instance[e]; t[e] = typeof i === 'function' ? i.bind(t) : i; })), s.on && t.on && Object.keys(s.on).forEach(((e) => { t.on(e, s.on[e]); })), s.create && s.create.bind(t)(a); })); }, d.components.set = function (e) { this.use && this.use(e); }, l.installModule = function (e) { for (var t = [], i = arguments.length - 1; i-- > 0;)t[i] = arguments[i + 1]; const s = this; s.prototype.modules || (s.prototype.modules = {}); const a = e.name || `${Object.keys(s.prototype.modules).length}_${n.now()}`; return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(((t) => { s.prototype[t] = e.proto[t]; })), e.static && Object.keys(e.static).forEach(((t) => { s[t] = e.static[t]; })), e.install && e.install.apply(s, t), s; }, l.use = function (e) { for (var t = [], i = arguments.length - 1; i-- > 0;)t[i] = arguments[i + 1]; const s = this; return Array.isArray(e) ? (e.forEach(((e) => s.installModule(e))), s) : s.installModule.apply(s, [e].concat(t)); }, Object.defineProperties(l, d); const h = {
    updateSize() { let e; let t; const i = this.$el; e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, e === 0 && this.isHorizontal() || t === 0 && this.isVertical() || (e = e - parseInt(i.css('padding-left'), 10) - parseInt(i.css('padding-right'), 10), t = t - parseInt(i.css('padding-top'), 10) - parseInt(i.css('padding-bottom'), 10), n.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t })); },
    updateSlides() {
      const e = this.params; const i = this.$wrapperEl; const s = this.size; const a = this.rtlTranslate; const r = this.wrongRTL; const o = this.virtual && e.virtual.enabled; const l = o ? this.virtual.slides.length : this.slides.length; const d = i.children(`.${this.params.slideClass}`); const h = o ? this.virtual.slides.length : d.length; let p = []; const c = []; const u = []; function v(t) { return !e.cssMode || t !== d.length - 1; } let f = e.slidesOffsetBefore; typeof f === 'function' && (f = e.slidesOffsetBefore.call(this)); let m = e.slidesOffsetAfter; typeof m === 'function' && (m = e.slidesOffsetAfter.call(this)); const g = this.snapGrid.length; const b = this.snapGrid.length; let w = e.spaceBetween; let y = -f; let x = 0; let T = 0; if (void 0 !== s) {
        let E; let S; typeof w === 'string' && w.indexOf('%') >= 0 && (w = parseFloat(w.replace('%', '')) / 100 * s), this.virtualSize = -w, a ? d.css({ marginLeft: '', marginTop: '' }) : d.css({ marginRight: '', marginBottom: '' }), e.slidesPerColumn > 1 && (E = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, e.slidesPerView !== 'auto' && e.slidesPerColumnFill === 'row' && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn))); for (var C, M = e.slidesPerColumn, P = E / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
          S = 0; const $ = d.eq(k); if (e.slidesPerColumn > 1) {
            let L = void 0; let I = void 0; let D = void 0; if (e.slidesPerColumnFill === 'row' && e.slidesPerGroup > 1) {
              const O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)); const A = k - e.slidesPerColumn * e.slidesPerGroup * O; const G = O === 0 ? e.slidesPerGroup : Math.min(Math.ceil((h - O * M * e.slidesPerGroup) / M), e.slidesPerGroup); L = (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) + D * E / M, $.css({
                '-webkit-box-ordinal-group': L, '-moz-box-ordinal-group': L, '-ms-flex-order': L, '-webkit-order': L, order: L,
              });
            } else e.slidesPerColumnFill === 'column' ? (D = k - (I = Math.floor(k / M)) * M, (I > z || I === z && D === M - 1) && (D += 1) >= M && (D = 0, I += 1)) : I = k - (D = Math.floor(k / P)) * P; $.css(`margin-${this.isHorizontal() ? 'top' : 'left'}`, D !== 0 && e.spaceBetween && `${e.spaceBetween}px`);
          } if ($.css('display') !== 'none') { if (e.slidesPerView === 'auto') { const H = t.getComputedStyle($[0], null); const B = $[0].style.transform; const N = $[0].style.webkitTransform; if (B && ($[0].style.transform = 'none'), N && ($[0].style.webkitTransform = 'none'), e.roundLengths)S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0); else if (this.isHorizontal()) { const X = parseFloat(H.getPropertyValue('width')); const V = parseFloat(H.getPropertyValue('padding-left')); const Y = parseFloat(H.getPropertyValue('padding-right')); const F = parseFloat(H.getPropertyValue('margin-left')); const W = parseFloat(H.getPropertyValue('margin-right')); const R = H.getPropertyValue('box-sizing'); S = R && R === 'border-box' ? X + F + W : X + V + Y + F + W; } else { const q = parseFloat(H.getPropertyValue('height')); const j = parseFloat(H.getPropertyValue('padding-top')); const K = parseFloat(H.getPropertyValue('padding-bottom')); const U = parseFloat(H.getPropertyValue('margin-top')); const _ = parseFloat(H.getPropertyValue('margin-bottom')); const Z = H.getPropertyValue('box-sizing'); S = Z && Z === 'border-box' ? q + U + _ : q + j + K + U + _; }B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S)); } else S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), d[k] && (this.isHorizontal() ? d[k].style.width = `${S}px` : d[k].style.height = `${S}px`); d[k] && (d[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, x === 0 && k !== 0 && (y = y - s / 2 - w), k === 0 && (y = y - s / 2 - w), Math.abs(y) < 0.001 && (y = 0), e.roundLengths && (y = Math.floor(y)), T % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (T - Math.min(this.params.slidesPerGroupSkip, T)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, T += 1; }
        } if (this.virtualSize = Math.max(this.virtualSize, s) + m, a && r && (e.effect === 'slide' || e.effect === 'coverflow') && i.css({ width: `${this.virtualSize + e.spaceBetween}px` }), e.setWrapperSize && (this.isHorizontal() ? i.css({ width: `${this.virtualSize + e.spaceBetween}px` }) : i.css({ height: `${this.virtualSize + e.spaceBetween}px` })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({ width: `${this.virtualSize + e.spaceBetween}px` }) : i.css({ height: `${this.virtualSize + e.spaceBetween}px` }), e.centeredSlides)) { C = []; for (let Q = 0; Q < p.length; Q += 1) { let J = p[Q]; e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J); }p = C; } if (!e.centeredSlides) { C = []; for (let ee = 0; ee < p.length; ee += 1) { let te = p[ee]; e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - s && C.push(te); }p = C, Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - s); } if (p.length === 0 && (p = [0]), e.spaceBetween !== 0 && (this.isHorizontal() ? a ? d.filter(v).css({ marginLeft: `${w}px` }) : d.filter(v).css({ marginRight: `${w}px` }) : d.filter(v).css({ marginBottom: `${w}px` })), e.centeredSlides && e.centeredSlidesBounds) { let ie = 0; u.forEach(((t) => { ie += t + (e.spaceBetween ? e.spaceBetween : 0); })); const se = (ie -= e.spaceBetween) - s; p = p.map(((e) => (e < 0 ? -f : e > se ? se + m : e))); } if (e.centerInsufficientSlides) { let ae = 0; if (u.forEach(((t) => { ae += t + (e.spaceBetween ? e.spaceBetween : 0); })), (ae -= e.spaceBetween) < s) { const re = (s - ae) / 2; p.forEach(((e, t) => { p[t] = e - re; })), c.forEach(((e, t) => { c[t] = e + re; })); } }n.extend(this, {
          slides: d, snapGrid: p, slidesGrid: c, slidesSizesGrid: u,
        }), h !== l && this.emit('slidesLengthChange'), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit('snapGridLengthChange')), c.length !== b && this.emit('slidesGridLengthChange'), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
      }
    },
    updateAutoHeight(e) { let t; const i = []; let s = 0; if (typeof e === 'number' ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), this.params.slidesPerView !== 'auto' && this.params.slidesPerView > 1) if (this.params.centeredSlides) this.visibleSlides.each(((e, t) => { i.push(t); })); else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) { const a = this.activeIndex + t; if (a > this.slides.length) break; i.push(this.slides.eq(a)[0]); } else i.push(this.slides.eq(this.activeIndex)[0]); for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) { const r = i[t].offsetHeight; s = r > s ? r : s; }s && this.$wrapperEl.css('height', `${s}px`); },
    updateSlidesOffset() { for (let e = this.slides, t = 0; t < e.length; t += 1)e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop; },
    updateSlidesProgress(e) { void 0 === e && (e = this && this.translate || 0); const t = this.params; const i = this.slides; const a = this.rtlTranslate; if (i.length !== 0) { void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset(); let r = -e; a && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = []; for (let n = 0; n < i.length; n += 1) { const o = i[n]; const l = (r + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween); if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) { const d = -(r - o.swiperSlideOffset); const h = d + this.slidesSizesGrid[n]; (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass)); }o.progress = a ? -l : l; } this.visibleSlides = s(this.visibleSlides); } },
    updateProgress(e) { if (void 0 === e) { const t = this.rtlTranslate ? -1 : 1; e = this && this.translate && this.translate * t || 0; } const i = this.params; const s = this.maxTranslate() - this.minTranslate(); let a = this.progress; let r = this.isBeginning; let o = this.isEnd; const l = r; const d = o; s === 0 ? (a = 0, r = !0, o = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, o = a >= 1), n.extend(this, { progress: a, isBeginning: r, isEnd: o }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !l && this.emit('reachBeginning toEdge'), o && !d && this.emit('reachEnd toEdge'), (l && !r || d && !o) && this.emit('fromEdge'), this.emit('progress', a); },
    updateSlidesClasses() { let e; const t = this.slides; const i = this.params; const s = this.$wrapperEl; const a = this.activeIndex; const r = this.realIndex; const n = this.virtual && i.virtual.enabled; t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), (e = n ? this.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${a}"]`) : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass)); let o = e.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass); i.loop && o.length === 0 && (o = t.eq(0)).addClass(i.slideNextClass); let l = e.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass); i.loop && l.length === 0 && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`).addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr('data-swiper-slide-index')}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr('data-swiper-slide-index')}"]`).addClass(i.slideDuplicatePrevClass)); },
    updateActiveIndex(e) {
      let t; const i = this.rtlTranslate ? this.translate : -this.translate; const s = this.slidesGrid; const a = this.snapGrid; const r = this.params; const o = this.activeIndex; const l = this.realIndex; const d = this.snapIndex; let h = e; if (void 0 === h) { for (let p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p); r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0); } if (a.indexOf(i) >= 0)t = a.indexOf(i); else { const c = Math.min(r.slidesPerGroupSkip, h); t = c + Math.floor((h - c) / r.slidesPerGroup); } if (t >= a.length && (t = a.length - 1), h !== o) {
        const u = parseInt(this.slides.eq(h).attr('data-swiper-slide-index') || h, 10); n.extend(this, {
          snapIndex: t, realIndex: u, previousIndex: o, activeIndex: h,
        }), this.emit('activeIndexChange'), this.emit('snapIndexChange'), l !== u && this.emit('realIndexChange'), (this.initialized || this.params.runCallbacksOnInit) && this.emit('slideChange');
      } else t !== d && (this.snapIndex = t, this.emit('snapIndexChange'));
    },
    updateClickedSlide(e) { const t = this.params; const i = s(e.target).closest(`.${t.slideClass}`)[0]; let a = !1; if (i) for (let r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0); if (!i || !a) return this.clickedSlide = void 0, void (this.clickedIndex = void 0); this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr('data-swiper-slide-index'), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide(); },
  }; const p = {
    getTranslate(e) { void 0 === e && (e = this.isHorizontal() ? 'x' : 'y'); const t = this.params; const i = this.rtlTranslate; const s = this.translate; const a = this.$wrapperEl; if (t.virtualTranslate) return i ? -s : s; if (t.cssMode) return s; let r = n.getTranslate(a[0], e); return i && (r = -r), r || 0; }, setTranslate(e, t) { const i = this.rtlTranslate; const s = this.params; const a = this.$wrapperEl; const r = this.wrapperEl; const n = this.progress; let o = 0; let l = 0; this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform(`translate3d(${o}px, ${l}px, 0px)`), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l; const d = this.maxTranslate() - this.minTranslate(); (d === 0 ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit('setTranslate', this.translate, t); }, minTranslate() { return -this.snapGrid[0]; }, maxTranslate() { return -this.snapGrid[this.snapGrid.length - 1]; }, translateTo(e, t, i, s, a) { let r; void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0); const n = this; const o = n.params; const l = n.wrapperEl; if (n.animating && o.preventInteractionOnTransition) return !1; let d; const h = n.minTranslate(); const p = n.maxTranslate(); if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) { const c = n.isHorizontal(); return t === 0 ? l[c ? 'scrollLeft' : 'scrollTop'] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? 'left' : 'top'] = -d, r.behavior = 'smooth', r)) : l[c ? 'scrollLeft' : 'scrollTop'] = -d, !0; } return t === 0 ? (n.setTransition(0), n.setTranslate(d), i && (n.emit('beforeTransitionStart', t, a), n.emit('transitionEnd'))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit('beforeTransitionStart', t, a), n.emit('transitionStart')), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) { n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener('transitionend', n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener('webkitTransitionEnd', n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit('transitionEnd')); }), n.$wrapperEl[0].addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener('webkitTransitionEnd', n.onTranslateToWrapperTransitionEnd))), !0; },
  }; const c = { setTransition(e, t) { this.params.cssMode || this.$wrapperEl.transition(e), this.emit('setTransition', e, t); }, transitionStart(e, t) { void 0 === e && (e = !0); const i = this.activeIndex; const s = this.params; const a = this.previousIndex; if (!s.cssMode) { s.autoHeight && this.updateAutoHeight(); let r = t; if (r || (r = i > a ? 'next' : i < a ? 'prev' : 'reset'), this.emit('transitionStart'), e && i !== a) { if (r === 'reset') return void this.emit('slideResetTransitionStart'); this.emit('slideChangeTransitionStart'), r === 'next' ? this.emit('slideNextTransitionStart') : this.emit('slidePrevTransitionStart'); } } }, transitionEnd(e, t) { void 0 === e && (e = !0); const i = this.activeIndex; const s = this.previousIndex; const a = this.params; if (this.animating = !1, !a.cssMode) { this.setTransition(0); let r = t; if (r || (r = i > s ? 'next' : i < s ? 'prev' : 'reset'), this.emit('transitionEnd'), e && i !== s) { if (r === 'reset') return void this.emit('slideResetTransitionEnd'); this.emit('slideChangeTransitionEnd'), r === 'next' ? this.emit('slideNextTransitionEnd') : this.emit('slidePrevTransitionEnd'); } } } }; const u = {
    slideTo(e, t, i, s) { let a; void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0); const r = this; let n = e; n < 0 && (n = 0); const o = r.params; const l = r.snapGrid; const d = r.slidesGrid; const h = r.previousIndex; const p = r.activeIndex; const c = r.rtlTranslate; const u = r.wrapperEl; if (r.animating && o.preventInteractionOnTransition) return !1; const v = Math.min(r.params.slidesPerGroupSkip, n); let f = v + Math.floor((n - v) / r.params.slidesPerGroup); f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit('beforeSlideChangeStart'); let m; const g = -l[f]; if (r.updateProgress(g), o.normalizeSlideIndex) for (let b = 0; b < d.length; b += 1)-Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b); if (r.initialized && n !== p) { if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1; if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1; } if (m = n > p ? 'next' : n < p ? 'prev' : 'reset', c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), o.effect !== 'slide' && r.setTranslate(g), m !== 'reset' && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1; if (o.cssMode) { const w = r.isHorizontal(); let y = -g; return c && (y = u.scrollWidth - u.offsetWidth - y), t === 0 ? u[w ? 'scrollLeft' : 'scrollTop'] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? 'left' : 'top'] = y, a.behavior = 'smooth', a)) : u[w ? 'scrollLeft' : 'scrollTop'] = y, !0; } return t === 0 ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit('beforeTransitionStart', t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit('beforeTransitionStart', t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) { r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener('transitionend', r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener('webkitTransitionEnd', r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m)); }), r.$wrapperEl[0].addEventListener('transitionend', r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener('webkitTransitionEnd', r.onSlideToWrapperTransitionEnd))), !0; }, slideToLoop(e, t, i, s) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0); let a = e; return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s); }, slideNext(e, t, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); const s = this.params; const a = this.animating; const r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup; if (s.loop) { if (a) return !1; this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft; } return this.slideTo(this.activeIndex + r, e, t, i); }, slidePrev(e, t, i) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); const s = this.params; const a = this.animating; const r = this.snapGrid; const n = this.slidesGrid; const o = this.rtlTranslate; if (s.loop) { if (a) return !1; this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft; } function l(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e); } let d; const h = l(o ? this.translate : -this.translate); const p = r.map(((e) => l(e))); let c = (n.map(((e) => l(e))), r[p.indexOf(h)], r[p.indexOf(h) - 1]); return void 0 === c && s.cssMode && r.forEach(((e) => { !c && h >= e && (c = e); })), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i); }, slideReset(e, t, i) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i); }, slideToClosest(e, t, i, s) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = 0.5); let a = this.activeIndex; const r = Math.min(this.params.slidesPerGroupSkip, a); const n = r + Math.floor((a - r) / this.params.slidesPerGroup); const o = this.rtlTranslate ? this.translate : -this.translate; if (o >= this.snapGrid[n]) { const l = this.snapGrid[n]; o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup); } else { const d = this.snapGrid[n - 1]; o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup); } return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i); }, slideToClickedSlide() { let e; const t = this; const i = t.params; const a = t.$wrapperEl; const r = i.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : i.slidesPerView; let o = t.clickedIndex; if (i.loop) { if (t.animating) return; e = parseInt(s(t.clickedSlide).attr('data-swiper-slide-index'), 10), i.centeredSlides ? o < t.loopedSlides - r / 2 || o > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), o = a.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), n.nextTick((() => { t.slideTo(o); }))) : t.slideTo(o) : o > t.slides.length - r ? (t.loopFix(), o = a.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), n.nextTick((() => { t.slideTo(o); }))) : t.slideTo(o); } else t.slideTo(o); },
  }; const v = { loopCreate() { const t = this; const i = t.params; const a = t.$wrapperEl; a.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove(); let r = a.children(`.${i.slideClass}`); if (i.loopFillGroupWithBlank) { const n = i.slidesPerGroup - r.length % i.slidesPerGroup; if (n !== i.slidesPerGroup) { for (let o = 0; o < n; o += 1) { const l = s(e.createElement('div')).addClass(`${i.slideClass} ${i.slideBlankClass}`); a.append(l); }r = a.children(`.${i.slideClass}`); } }i.slidesPerView !== 'auto' || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length); const d = []; const h = []; r.each(((e, i) => { const a = s(i); e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr('data-swiper-slide-index', e); })); for (let p = 0; p < h.length; p += 1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass)); for (let c = d.length - 1; c >= 0; c -= 1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass)); }, loopFix() { this.emit('beforeLoopFix'); let e; const t = this.activeIndex; const i = this.slides; const s = this.loopedSlides; const a = this.allowSlidePrev; const r = this.allowSlideNext; const n = this.snapGrid; const o = this.rtlTranslate; this.allowSlidePrev = !0, this.allowSlideNext = !0; const l = -n[t] - this.getTranslate(); if (t < s)e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && l !== 0 && this.setTranslate((o ? -this.translate : this.translate) - l); else if (t >= i.length - s) { e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && l !== 0 && this.setTranslate((o ? -this.translate : this.translate) - l); } this.allowSlidePrev = a, this.allowSlideNext = r, this.emit('loopFix'); }, loopDestroy() { const e = this.$wrapperEl; const t = this.params; const i = this.slides; e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr('data-swiper-slide-index'); } }; const f = { setGrabCursor(e) { if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) { const t = this.el; t.style.cursor = 'move', t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab', t.style.cursor = e ? '-moz-grabbin' : '-moz-grab', t.style.cursor = e ? 'grabbing' : 'grab'; } }, unsetGrabCursor() { o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = ''); } }; let m; let g; let b; let w; let y; let x; let T; let E; let S; let C; let M; let P; let z; let k; let $; const L = {
    appendSlide(e) { const t = this.$wrapperEl; const i = this.params; if (i.loop && this.loopDestroy(), typeof e === 'object' && 'length' in e) for (let s = 0; s < e.length; s += 1)e[s] && t.append(e[s]); else t.append(e); i.loop && this.loopCreate(), i.observer && o.observer || this.update(); }, prependSlide(e) { const t = this.params; const i = this.$wrapperEl; const s = this.activeIndex; t.loop && this.loopDestroy(); let a = s + 1; if (typeof e === 'object' && 'length' in e) { for (let r = 0; r < e.length; r += 1)e[r] && i.prepend(e[r]); a = s + e.length; } else i.prepend(e); t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(a, 0, !1); }, addSlide(e, t) { const i = this.$wrapperEl; const s = this.params; let a = this.activeIndex; s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children(`.${s.slideClass}`)); const r = this.slides.length; if (e <= 0) this.prependSlide(t); else if (e >= r) this.appendSlide(t); else { for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) { const h = this.slides.eq(d); h.remove(), l.unshift(h); } if (typeof t === 'object' && 'length' in t) { for (let p = 0; p < t.length; p += 1)t[p] && i.append(t[p]); n = a > e ? a + t.length : a; } else i.append(t); for (let c = 0; c < l.length; c += 1)i.append(l[c]); s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1); } }, removeSlide(e) { const t = this.params; const i = this.$wrapperEl; let s = this.activeIndex; t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children(`.${t.slideClass}`)); let a; let r = s; if (typeof e === 'object' && 'length' in e) { for (let n = 0; n < e.length; n += 1)a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1); r = Math.max(r, 0); } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0); t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1); }, removeAllSlides() { for (var e = [], t = 0; t < this.slides.length; t += 1)e.push(t); this.removeSlide(e); },
  }; const I = (m = t.navigator.platform, g = t.navigator.userAgent, b = {
    ios: !1, android: !1, androidChrome: !1, desktop: !1, iphone: !1, ipod: !1, ipad: !1, edge: !1, ie: !1, firefox: !1, macos: !1, windows: !1, cordova: !(!t.cordova && !t.phonegap), phonegap: !(!t.cordova && !t.phonegap), electron: !1,
  }, w = t.screen.width, y = t.screen.height, x = g.match(/(Android);?[\s\/]+([\d.]+)?/), T = g.match(/(iPad).*OS\s([\d_]+)/), E = g.match(/(iPod)(.*OS\s([\d_]+))?/), S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/), C = g.indexOf('MSIE ') >= 0 || g.indexOf('Trident/') >= 0, M = g.indexOf('Edge/') >= 0, P = g.indexOf('Gecko/') >= 0 && g.indexOf('Firefox/') >= 0, z = m === 'Win32', k = g.toLowerCase().indexOf('electron') >= 0, $ = m === 'MacIntel', !T && $ && o.touch && (w === 1024 && y === 1366 || w === 834 && y === 1194 || w === 834 && y === 1112 || w === 768 && y === 1024) && (T = g.match(/(Version)\/([\d.]+)/), $ = !1), b.ie = C, b.edge = M, b.firefox = P, x && !z && (b.os = 'android', b.osVersion = x[2], b.android = !0, b.androidChrome = g.toLowerCase().indexOf('chrome') >= 0), (T || S || E) && (b.os = 'ios', b.ios = !0), S && !E && (b.osVersion = S[2].replace(/_/g, '.'), b.iphone = !0), T && (b.osVersion = T[2].replace(/_/g, '.'), b.ipad = !0), E && (b.osVersion = E[3] ? E[3].replace(/_/g, '.') : null, b.ipod = !0), b.ios && b.osVersion && g.indexOf('Version/') >= 0 && b.osVersion.split('.')[0] === '10' && (b.osVersion = g.toLowerCase().split('version/')[1].split(' ')[0]), b.webView = !(!(S || T || E) || !g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia('(display-mode: standalone)').matches, b.webview = b.webView, b.standalone = b.webView, b.desktop = !(b.ios || b.android) || k, b.desktop && (b.electron = k, b.macos = $, b.windows = z, b.macos && (b.os = 'macos'), b.windows && (b.os = 'windows')), b.pixelRatio = t.devicePixelRatio || 1, b); function D(i) {
    const a = this.touchEventsData; const r = this.params; const o = this.touches; if (!this.animating || !r.preventInteractionOnTransition) {
      let l = i; l.originalEvent && (l = l.originalEvent); const d = s(l.target); if ((r.touchEventsTarget !== 'wrapper' || d.closest(this.wrapperEl).length) && (a.isTouchEvent = l.type === 'touchstart', (a.isTouchEvent || !('which' in l) || l.which !== 3) && !(!a.isTouchEvent && 'button' in l && l.button > 0 || a.isTouched && a.isMoved))) {
        if (r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`)[0]) this.allowClick = !0; else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
          o.currentX = l.type === 'touchstart' ? l.targetTouches[0].pageX : l.pageX, o.currentY = l.type === 'touchstart' ? l.targetTouches[0].pageY : l.pageY; const h = o.currentX; const p = o.currentY; const c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection; const u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold; if (!c || !(h <= u || h >= t.screen.width - u)) {
            if (n.extend(a, {
              isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0,
            }), o.startX = h, o.startY = p, a.touchStartTime = n.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), l.type !== 'touchstart') { let v = !0; d.is(a.formElements) && (v = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== d[0] && e.activeElement.blur(); const f = v && this.allowTouchMove && r.touchStartPreventDefault; (r.touchStartForcePreventDefault || f) && l.preventDefault(); } this.emit('touchStart', l);
          }
        }
      }
    }
  } function O(t) {
    const i = this.touchEventsData; const a = this.params; const r = this.touches; const o = this.rtlTranslate; let l = t; if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || l.type !== 'mousemove') {
        const d = l.type === 'touchmove' && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]); const h = l.type === 'touchmove' ? d.pageX : l.pageX; const p = l.type === 'touchmove' ? d.pageY : l.pageY; if (l.preventedByNestedSwiper) return r.startX = h, void (r.startY = p); if (!this.allowTouchMove) {
          return this.allowClick = !1, void (i.isTouched && (n.extend(r, {
            startX: h, startY: p, currentX: h, currentY: p,
          }), i.touchStartTime = n.now()));
        } if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (this.isVertical()) { if (p < r.startY && this.translate <= this.maxTranslate() || p > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1); } else if (h < r.startX && this.translate <= this.maxTranslate() || h > r.startX && this.translate >= this.minTranslate()) return; if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1); if (i.allowTouchCallbacks && this.emit('touchMove', l), !(l.targetTouches && l.targetTouches.length > 1)) { r.currentX = h, r.currentY = p; const c = r.currentX - r.startX; const u = r.currentY - r.startY; if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) { let v; if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle); if (i.isScrolling && this.emit('touchMoveOpposite', l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling)i.isTouched = !1; else if (i.startMoving) { this.allowClick = !1, a.cssMode || l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger('webkitTransitionEnd transitionend'), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit('sliderFirstMove', l)), this.emit('sliderMove', l), i.isMoved = !0; let f = this.isHorizontal() ? c : u; r.diff = f, f *= a.touchRatio, o && (f = -f), this.swipeDirection = f > 0 ? 'prev' : 'next', i.currentTranslate = f + i.startTranslate; let m = !0; let g = a.resistanceRatio; if (a.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : f < 0 && i.currentTranslate < this.maxTranslate() && (m = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && this.swipeDirection === 'next' && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && this.swipeDirection === 'prev' && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) { if (!(Math.abs(f) > a.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate); if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY); }a.followFinger && !a.cssMode && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (i.velocities.length === 0 && i.velocities.push({ position: r[this.isHorizontal() ? 'startX' : 'startY'], time: i.touchStartTime }), i.velocities.push({ position: r[this.isHorizontal() ? 'currentX' : 'currentY'], time: n.now() })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate)); } } }
      }
    } else i.startMoving && i.isScrolling && this.emit('touchMoveOpposite', l);
  } function A(e) { const t = this; const i = t.touchEventsData; const s = t.params; const a = t.touches; const r = t.rtlTranslate; const o = t.$wrapperEl; const l = t.slidesGrid; const d = t.snapGrid; let h = e; if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit('touchEnd', h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1); s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); let p; const c = n.now(); const u = c - i.touchStartTime; if (t.allowClick && (t.updateClickedSlide(h), t.emit('tap click', h), u < 300 && c - i.lastClickTime < 300 && t.emit('doubleTap doubleClick', h)), i.lastClickTime = n.now(), n.nextTick((() => { t.destroyed || (t.allowClick = !0); })), !i.isTouched || !i.isMoved || !t.swipeDirection || a.diff === 0 || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1); if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) { if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex); if (p > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1)); if (s.freeModeMomentum) { if (i.velocities.length > 1) { const v = i.velocities.pop(); const f = i.velocities.pop(); const m = v.position - f.position; const g = v.time - f.time; t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || n.now() - v.time > 300) && (t.velocity = 0); } else t.velocity = 0; t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0; let b = 1e3 * s.freeModeMomentumRatio; const w = t.velocity * b; let y = t.translate + w; r && (y = -y); let x; let T; let E = !1; const S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio; if (y < t.maxTranslate())s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0); else if (y > t.minTranslate())s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (T = !0); else if (s.freeModeSticky) { for (var C, M = 0; M < d.length; M += 1) if (d[M] > -y) { C = M; break; }y = -(y = Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) || t.swipeDirection === 'next' ? d[C] : d[C - 1]); } if (T && t.once('transitionEnd', (() => { t.loopFix(); })), t.velocity !== 0) { if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) { const P = Math.abs((r ? -y : y) - t.translate); const z = t.slidesSizesGrid[t.activeIndex]; b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed; } } else if (s.freeModeSticky) return void t.slideToClosest(); s.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((() => { t && !t.destroyed && i.allowMomentumBounce && (t.emit('momentumBounce'), t.setTransition(s.speed), setTimeout((() => { t.setTranslate(x), o.transitionEnd((() => { t && !t.destroyed && t.transitionEnd(); })); }), 0)); }))) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((() => { t && !t.destroyed && t.transitionEnd(); })))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses(); } else if (s.freeModeSticky) return void t.slideToClosest(); (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()); } else { for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < l.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) { const I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup; void 0 !== l[L + I] ? p >= l[L] && p < l[L + I] && (k = L, $ = l[L + I] - l[L]) : p >= l[L] && (k = L, $ = l[l.length - 1] - l[l.length - 2]); } const D = (p - l[k]) / $; const O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup; if (u > s.longSwipesMs) { if (!s.longSwipes) return void t.slideTo(t.activeIndex); t.swipeDirection === 'next' && (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)), t.swipeDirection === 'prev' && (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)); } else { if (!s.shortSwipes) return void t.slideTo(t.activeIndex); t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + O) : t.slideTo(k) : (t.swipeDirection === 'next' && t.slideTo(k + O), t.swipeDirection === 'prev' && t.slideTo(k)); } } } function G() { const e = this.params; const t = this.el; if (!t || t.offsetWidth !== 0) { e.breakpoints && this.setBreakpoint(); const i = this.allowSlideNext; const s = this.allowSlidePrev; const a = this.snapGrid; this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), (e.slidesPerView === 'auto' || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow(); } } function H(e) { this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())); } function B() { const e = this.wrapperEl; const t = this.rtlTranslate; this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, this.translate === -0 && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses(); const i = this.maxTranslate() - this.minTranslate(); (i === 0 ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit('setTranslate', this.translate, !1); } let N = !1; function X() {} const V = {
    init: !0, direction: 'horizontal', touchEventsTarget: 'container', initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: 0.02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: 'slide', breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: 'column', slidesPerGroup: 1, slidesPerGroupSkip: 0, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: 0.85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: 'swiper-no-swiping', noSwipingSelector: null, passiveListeners: !0, containerModifierClass: 'swiper-container-', slideClass: 'swiper-slide', slideBlankClass: 'swiper-slide-invisible-blank', slideActiveClass: 'swiper-slide-active', slideDuplicateActiveClass: 'swiper-slide-duplicate-active', slideVisibleClass: 'swiper-slide-visible', slideDuplicateClass: 'swiper-slide-duplicate', slideNextClass: 'swiper-slide-next', slideDuplicateNextClass: 'swiper-slide-duplicate-next', slidePrevClass: 'swiper-slide-prev', slideDuplicatePrevClass: 'swiper-slide-duplicate-prev', wrapperClass: 'swiper-wrapper', runCallbacksOnInit: !0,
  }; const Y = {
    update: h, translate: p, transition: c, slide: u, loop: v, grabCursor: f, manipulation: L, events: { attachEvents() { const t = this.params; const i = this.touchEvents; const s = this.el; const a = this.wrapperEl; this.onTouchStart = D.bind(this), this.onTouchMove = O.bind(this), this.onTouchEnd = A.bind(this), t.cssMode && (this.onScroll = B.bind(this)), this.onClick = H.bind(this); const r = !!t.nested; if (!o.touch && o.pointerEvents)s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, r), e.addEventListener(i.end, this.onTouchEnd, !1); else { if (o.touch) { const n = !(i.start !== 'touchstart' || !o.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }; s.addEventListener(i.start, this.onTouchStart, n), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? { passive: !1, capture: r } : r), s.addEventListener(i.end, this.onTouchEnd, n), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n), N || (e.addEventListener('touchstart', X), N = !0); }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.addEventListener('mousedown', this.onTouchStart, !1), e.addEventListener('mousemove', this.onTouchMove, r), e.addEventListener('mouseup', this.onTouchEnd, !1)); }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener('click', this.onClick, !0), t.cssMode && a.addEventListener('scroll', this.onScroll), t.updateOnWindowResize ? this.on(I.ios || I.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', G, !0) : this.on('observerUpdate', G, !0); }, detachEvents() { const t = this.params; const i = this.touchEvents; const s = this.el; const a = this.wrapperEl; const r = !!t.nested; if (!o.touch && o.pointerEvents)s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, r), e.removeEventListener(i.end, this.onTouchEnd, !1); else { if (o.touch) { const n = !(i.start !== 'onTouchStart' || !o.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }; s.removeEventListener(i.start, this.onTouchStart, n), s.removeEventListener(i.move, this.onTouchMove, r), s.removeEventListener(i.end, this.onTouchEnd, n), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n); }(t.simulateTouch && !I.ios && !I.android || t.simulateTouch && !o.touch && I.ios) && (s.removeEventListener('mousedown', this.onTouchStart, !1), e.removeEventListener('mousemove', this.onTouchMove, r), e.removeEventListener('mouseup', this.onTouchEnd, !1)); }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener('click', this.onClick, !0), t.cssMode && a.removeEventListener('scroll', this.onScroll), this.off(I.ios || I.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', G); } }, breakpoints: { setBreakpoint() { const e = this.activeIndex; const t = this.initialized; let i = this.loopedSlides; void 0 === i && (i = 0); const s = this.params; const a = this.$el; const r = s.breakpoints; if (r && (!r || Object.keys(r).length !== 0)) { const o = this.getBreakpoint(r); if (o && this.currentBreakpoint !== o) { const l = o in r ? r[o] : void 0; l && ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(((e) => { const t = l[e]; void 0 !== t && (l[e] = e !== 'slidesPerView' || t !== 'AUTO' && t !== 'auto' ? e === 'slidesPerView' ? parseFloat(t) : parseInt(t, 10) : 'auto'); })); const d = l || this.originalParams; const h = s.slidesPerColumn > 1; const p = d.slidesPerColumn > 1; h && !p ? a.removeClass(`${s.containerModifierClass}multirow ${s.containerModifierClass}multirow-column`) : !h && p && (a.addClass(`${s.containerModifierClass}multirow`), d.slidesPerColumnFill === 'column' && a.addClass(`${s.containerModifierClass}multirow-column`)); const c = d.direction && d.direction !== s.direction; const u = s.loop && (d.slidesPerView !== s.slidesPerView || c); c && t && this.changeDirection(), n.extend(this.params, d), n.extend(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }), this.currentBreakpoint = o, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit('breakpoint', d); } } }, getBreakpoint(e) { if (e) { let i = !1; const s = Object.keys(e).map(((e) => { if (typeof e === 'string' && e.indexOf('@') === 0) { const i = parseFloat(e.substr(1)); return { value: t.innerHeight * i, point: e }; } return { value: e, point: e }; })); s.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10))); for (let a = 0; a < s.length; a += 1) { const r = s[a]; const n = r.point; r.value <= t.innerWidth && (i = n); } return i || 'max'; } } }, checkOverflow: { checkOverflow() { const e = this.params; const t = this.isLocked; const i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length; e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = this.snapGrid.length === 1, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? 'lock' : 'unlock'), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update()); } }, classes: { addClasses() { const e = this.classNames; const t = this.params; const i = this.rtl; const s = this.$el; const a = []; a.push('initialized'), a.push(t.direction), t.freeMode && a.push('free-mode'), t.autoHeight && a.push('autoheight'), i && a.push('rtl'), t.slidesPerColumn > 1 && (a.push('multirow'), t.slidesPerColumnFill === 'column' && a.push('multirow-column')), I.android && a.push('android'), I.ios && a.push('ios'), t.cssMode && a.push('css-mode'), a.forEach(((i) => { e.push(t.containerModifierClass + i); })), s.addClass(e.join(' ')); }, removeClasses() { const e = this.$el; const t = this.classNames; e.removeClass(t.join(' ')); } }, images: { loadImage(e, i, s, a, r, n) { let o; function l() { n && n(); }e.complete && r ? l() : i ? ((o = new t.Image()).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l(); }, preloadImages() { const e = this; function t() { e != null && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady'))); }e.imagesToLoad = e.$el.find('img'); for (let i = 0; i < e.imagesToLoad.length; i += 1) { const s = e.imagesToLoad[i]; e.loadImage(s, s.currentSrc || s.getAttribute('src'), s.srcset || s.getAttribute('srcset'), s.sizes || s.getAttribute('sizes'), !0, t); } } },
  }; const F = {}; const W = (function (e) {
    function t() {
      for (var i, a, r, l = [], d = arguments.length; d--;)l[d] = arguments[d]; l.length === 1 && l[0].constructor && l[0].constructor === Object ? r = l[0] : (a = (i = l)[0], r = i[1]), r || (r = {}), r = n.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(Y).forEach(((e) => { Object.keys(Y[e]).forEach(((i) => { t.prototype[i] || (t.prototype[i] = Y[e][i]); })); })); const h = this; void 0 === h.modules && (h.modules = {}), Object.keys(h.modules).forEach(((e) => { const t = h.modules[e]; if (t.params) { const i = Object.keys(t.params)[0]; const s = t.params[i]; if (typeof s !== 'object' || s === null) return; if (!(i in r) || !('enabled' in s)) return; !0 === r[i] && (r[i] = { enabled: !0 }), typeof r[i] !== 'object' || 'enabled' in r[i] || (r[i].enabled = !0), r[i] || (r[i] = { enabled: !1 }); } })); const p = n.extend({}, V); h.useModulesParams(p), h.params = n.extend({}, p, F, r), h.originalParams = n.extend({}, h.params), h.passedParams = n.extend({}, r), h.$ = s; const c = s(h.params.el); if (a = c[0]) {
        if (c.length > 1) { const u = []; return c.each(((e, i) => { const s = n.extend({}, r, { el: i }); u.push(new t(s)); })), u; } let v; let f; let m; return a.swiper = h, c.data('swiper', h), a && a.shadowRoot && a.shadowRoot.querySelector ? (v = s(a.shadowRoot.querySelector(`.${h.params.wrapperClass}`))).children = function (e) { return c.children(e); } : v = c.children(`.${h.params.wrapperClass}`), n.extend(h, {
          $el: c,
          el: a,
          $wrapperEl: v,
          wrapperEl: v[0],
          classNames: [],
          slides: s(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() { return h.params.direction === 'horizontal'; },
          isVertical() { return h.params.direction === 'vertical'; },
          rtl: a.dir.toLowerCase() === 'rtl' || c.css('direction') === 'rtl',
          rtlTranslate: h.params.direction === 'horizontal' && (a.dir.toLowerCase() === 'rtl' || c.css('direction') === 'rtl'),
          wrongRTL: v.css('display') === '-webkit-box',
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: h.params.allowSlideNext,
          allowSlidePrev: h.params.allowSlidePrev,
          touchEvents: (f = ['touchstart', 'touchmove', 'touchend', 'touchcancel'], m = ['mousedown', 'mousemove', 'mouseup'], o.pointerEvents && (m = ['pointerdown', 'pointermove', 'pointerup']), h.touchEventsTouch = {
            start: f[0], move: f[1], end: f[2], cancel: f[3],
          }, h.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }, o.touch || !h.params.simulateTouch ? h.touchEventsTouch : h.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: 'input, select, option, textarea, button, video, label', lastClickTime: n.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: h.params.allowTouchMove,
          touches: {
            startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0,
          },
          imagesToLoad: [],
          imagesLoaded: 0,
        }), h.useModules(), h.params.init && h.init(), h;
      }
    }e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t; const i = {
      extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 },
    }; return t.prototype.slidesPerViewDynamic = function () { const e = this.params; const t = this.slides; const i = this.slidesGrid; const s = this.size; const a = this.activeIndex; let r = 1; if (e.centeredSlides) { for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0)); for (let d = a - 1; d >= 0; d -= 1)t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0)); } else for (let h = a + 1; h < t.length; h += 1)i[h] - i[a] < s && (r += 1); return r; }, t.prototype.update = function () { const e = this; if (e && !e.destroyed) { const t = e.snapGrid; const i = e.params; i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : ((e.params.slidesPerView === 'auto' || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update'); } function s() { const t = e.rtlTranslate ? -1 * e.translate : e.translate; const i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate()); e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses(); } }, t.prototype.changeDirection = function (e, t) { void 0 === t && (t = !0); const i = this.params.direction; return e || (e = i === 'horizontal' ? 'vertical' : 'horizontal'), e === i || e !== 'horizontal' && e !== 'vertical' || (this.$el.removeClass(`${this.params.containerModifierClass}${i}`).addClass(`${this.params.containerModifierClass}${e}`), this.params.direction = e, this.slides.each(((t, i) => { e === 'vertical' ? i.style.width = '' : i.style.height = ''; })), this.emit('changeDirection'), t && this.update()), this; }, t.prototype.init = function () { this.initialized || (this.emit('beforeInit'), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit('init')); }, t.prototype.destroy = function (e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); const i = this; const s = i.params; const a = i.$el; const r = i.$wrapperEl; const o = i.slides; return void 0 === i.params || i.destroyed || (i.emit('beforeDestroy'), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr('style'), r.removeAttr('style'), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index')), i.emit('destroy'), Object.keys(i.eventsListeners).forEach(((e) => { i.off(e); })), !1 !== e && (i.$el[0].swiper = null, i.$el.data('swiper', null), n.deleteProps(i)), i.destroyed = !0), null; }, t.extendDefaults = function (e) { n.extend(F, e); }, i.extendedDefaults.get = function () { return F; }, i.defaults.get = function () { return V; }, i.Class.get = function () { return e; }, i.$.get = function () { return s; }, Object.defineProperties(t, i), t;
  }(l)); const R = { name: 'device', proto: { device: I }, static: { device: I } }; const q = { name: 'support', proto: { support: o }, static: { support: o } }; const j = { isEdge: !!t.navigator.userAgent.match(/Edge/g), isSafari: (function () { const e = t.navigator.userAgent.toLowerCase(); return e.indexOf('safari') >= 0 && e.indexOf('chrome') < 0 && e.indexOf('android') < 0; }()), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent) }; const K = { name: 'browser', proto: { browser: j }, static: { browser: j } }; const U = { name: 'resize', create() { const e = this; n.extend(e, { resize: { resizeHandler() { e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize')); }, orientationChangeHandler() { e && !e.destroyed && e.initialized && e.emit('orientationchange'); } } }); }, on: { init() { t.addEventListener('resize', this.resize.resizeHandler), t.addEventListener('orientationchange', this.resize.orientationChangeHandler); }, destroy() { t.removeEventListener('resize', this.resize.resizeHandler), t.removeEventListener('orientationchange', this.resize.orientationChangeHandler); } } }; var _ = {
    func: t.MutationObserver || t.WebkitMutationObserver, attach(e, i) { void 0 === i && (i = {}); const s = this; const a = new (0, _.func)(((e) => { if (e.length !== 1) { const i = function () { s.emit('observerUpdate', e[0]); }; t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0); } else s.emit('observerUpdate', e[0]); })); a.observe(e, { attributes: void 0 === i.attributes || i.attributes, childList: void 0 === i.childList || i.childList, characterData: void 0 === i.characterData || i.characterData }), s.observer.observers.push(a); }, init() { if (o.observer && this.params.observer) { if (this.params.observeParents) for (let e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]); this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 }); } }, destroy() { this.observer.observers.forEach(((e) => { e.disconnect(); })), this.observer.observers = []; },
  }; const Z = {
    name: 'observer',
    params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
    create() {
      n.extend(this, {
        observer: {
          init: _.init.bind(this), attach: _.attach.bind(this), destroy: _.destroy.bind(this), observers: [],
        },
      });
    },
    on: { init() { this.observer.init(); }, destroy() { this.observer.destroy(); } },
  }; const Q = {
    update(e) {
      const t = this; const i = t.params; const s = i.slidesPerView; const a = i.slidesPerGroup; const r = i.centeredSlides; const o = t.params.virtual; const l = o.addSlidesBefore; const d = o.addSlidesAfter; const h = t.virtual; const p = h.from; const c = h.to; const u = h.slides; const v = h.slidesGrid; const f = h.renderSlide; const m = h.offset; t.updateActiveIndex(); let g; let b; let w; const y = t.activeIndex || 0; g = t.rtlTranslate ? 'right' : t.isHorizontal() ? 'left' : 'top', r ? (b = Math.floor(s / 2) + a + l, w = Math.floor(s / 2) + a + d) : (b = s + (a - 1) + l, w = a + d); const x = Math.max((y || 0) - w, 0); const T = Math.min((y || 0) + b, u.length - 1); const E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0); function S() { t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load(); } if (n.extend(t.virtual, {
        from: x, to: T, offset: E, slidesGrid: t.slidesGrid,
      }), p === x && c === T && !e) return t.slidesGrid !== v && E !== m && t.slides.css(g, `${E}px`), void t.updateProgress(); if (t.params.virtual.renderExternal) {
        return t.params.virtual.renderExternal.call(t, {
          offset: E, from: x, to: T, slides: (function () { for (var e = [], t = x; t <= T; t += 1)e.push(u[t]); return e; }()),
        }), void S();
      } const C = []; const M = []; if (e)t.$wrapperEl.find(`.${t.params.slideClass}`).remove(); else for (let P = p; P <= c; P += 1)(P < x || P > T) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${P}"]`).remove(); for (let z = 0; z < u.length; z += 1)z >= x && z <= T && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z))); M.forEach(((e) => { t.$wrapperEl.append(f(u[e], e)); })), C.sort(((e, t) => t - e)).forEach(((e) => { t.$wrapperEl.prepend(f(u[e], e)); })), t.$wrapperEl.children('.swiper-slide').css(g, `${E}px`), S();
    },
    renderSlide(e, t) { const i = this.params.virtual; if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t]; const a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s(`<div class="${this.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`); return a.attr('data-swiper-slide-index') || a.attr('data-swiper-slide-index', t), i.cache && (this.virtual.cache[t] = a), a; },
    appendSlide(e) { if (typeof e === 'object' && 'length' in e) for (let t = 0; t < e.length; t += 1)e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e); this.virtual.update(!0); },
    prependSlide(e) { const t = this.activeIndex; let i = t + 1; let s = 1; if (Array.isArray(e)) { for (let a = 0; a < e.length; a += 1)e[a] && this.virtual.slides.unshift(e[a]); i = t + e.length, s = e.length; } else this.virtual.slides.unshift(e); if (this.params.virtual.cache) { const r = this.virtual.cache; const n = {}; Object.keys(r).forEach(((e) => { const t = r[e]; const i = t.attr('data-swiper-slide-index'); i && t.attr('data-swiper-slide-index', parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t; })), this.virtual.cache = n; } this.virtual.update(!0), this.slideTo(i, 0); },
    removeSlide(e) { if (e != null) { let t = this.activeIndex; if (Array.isArray(e)) for (let i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0); else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0); this.virtual.update(!0), this.slideTo(t, 0); } },
    removeAllSlides() { this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0); },
  }; const J = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0,
      },
    },
    create() {
      n.extend(this, {
        virtual: {
          update: Q.update.bind(this), appendSlide: Q.appendSlide.bind(this), prependSlide: Q.prependSlide.bind(this), removeSlide: Q.removeSlide.bind(this), removeAllSlides: Q.removeAllSlides.bind(this), renderSlide: Q.renderSlide.bind(this), slides: this.params.virtual.slides, cache: {},
        },
      });
    },
    on: { beforeInit() { if (this.params.virtual.enabled) { this.classNames.push(`${this.params.containerModifierClass}virtual`); const e = { watchSlidesProgress: !0 }; n.extend(this.params, e), n.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update(); } }, setTranslate() { this.params.virtual.enabled && this.virtual.update(); } },
  }; const ee = { handle(i) { const s = this.rtlTranslate; let a = i; a.originalEvent && (a = a.originalEvent); const r = a.keyCode || a.charCode; if (!this.allowSlideNext && (this.isHorizontal() && r === 39 || this.isVertical() && r === 40 || r === 34)) return !1; if (!this.allowSlidePrev && (this.isHorizontal() && r === 37 || this.isVertical() && r === 38 || r === 33)) return !1; if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && (e.activeElement.nodeName.toLowerCase() === 'input' || e.activeElement.nodeName.toLowerCase() === 'textarea'))) { if (this.params.keyboard.onlyInViewport && (r === 33 || r === 34 || r === 37 || r === 39 || r === 38 || r === 40)) { let n = !1; if (this.$el.parents(`.${this.params.slideClass}`).length > 0 && this.$el.parents(`.${this.params.slideActiveClass}`).length === 0) return; const o = t.innerWidth; const l = t.innerHeight; const d = this.$el.offset(); s && (d.left -= this.$el[0].scrollLeft); for (let h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) { const c = h[p]; c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0); } if (!n) return; } this.isHorizontal() ? (r !== 33 && r !== 34 && r !== 37 && r !== 39 || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (r !== 34 && r !== 39 || s) && (r !== 33 && r !== 37 || !s) || this.slideNext(), (r !== 33 && r !== 37 || s) && (r !== 34 && r !== 39 || !s) || this.slidePrev()) : (r !== 33 && r !== 34 && r !== 38 && r !== 40 || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), r !== 34 && r !== 40 || this.slideNext(), r !== 33 && r !== 38 || this.slidePrev()), this.emit('keyPress', r); } }, enable() { this.keyboard.enabled || (s(e).on('keydown', this.keyboard.handle), this.keyboard.enabled = !0); }, disable() { this.keyboard.enabled && (s(e).off('keydown', this.keyboard.handle), this.keyboard.enabled = !1); } }; const te = {
    name: 'keyboard',
    params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
    create() {
      n.extend(this, {
        keyboard: {
          enabled: !1, enable: ee.enable.bind(this), disable: ee.disable.bind(this), handle: ee.handle.bind(this),
        },
      });
    },
    on: { init() { this.params.keyboard.enabled && this.keyboard.enable(); }, destroy() { this.keyboard.enabled && this.keyboard.disable(); } },
  }; var ie = {
    lastScrollTime: n.now(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event() { return t.navigator.userAgent.indexOf('firefox') > -1 ? 'DOMMouseScroll' : (function () { let t = 'onwheel' in e; if (!t) { const i = e.createElement('div'); i.setAttribute('onwheel', 'return;'), t = typeof i.onwheel === 'function'; } return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature('', '') && (t = e.implementation.hasFeature('Events.wheel', '3.0')), t; }()) ? 'wheel' : 'mousewheel'; },
    normalize(e) {
      let t = 0; let i = 0; let s = 0; let a = 0; return 'detail' in e && (i = e.detail), 'wheelDelta' in e && (i = -e.wheelDelta / 120), 'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120), 'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120), 'axis' in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, 'deltaY' in e && (a = e.deltaY), 'deltaX' in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (e.deltaMode === 1 ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
        spinX: t, spinY: i, pixelX: s, pixelY: a,
      };
    },
    handleMouseEnter() { this.mouseEntered = !0; },
    handleMouseLeave() { this.mouseEntered = !1; },
    handle(e) {
      let t = e; const i = this; const a = i.params.mousewheel; i.params.cssMode && t.preventDefault(); let r = i.$el; if (i.params.mousewheel.eventsTarged !== 'container' && (r = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges) return !0; t.originalEvent && (t = t.originalEvent); let o = 0; const l = i.rtlTranslate ? -1 : 1; const d = ie.normalize(t); if (a.forceToAxis) if (i.isHorizontal()) { if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0; o = d.pixelX * l; } else { if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0; o = d.pixelY; } else o = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY; if (o === 0) return !0; if (a.invert && (o = -o), i.params.freeMode) { const h = { time: n.now(), delta: Math.abs(o), direction: Math.sign(o) }; const p = i.mousewheel.lastEventBeforeSnap; const c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction; if (!c) { i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix(); let u = i.getTranslate() + o * a.sensitivity; const v = i.isBeginning; const f = i.isEnd; if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) { clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0; const m = i.mousewheel.recentWheelEvents; m.length >= 15 && m.shift(); const g = m.length ? m[m.length - 1] : void 0; const b = m[0]; if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction))m.splice(0); else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) { const w = o > 0 ? 0.8 : 0.2; i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = n.nextTick((() => { i.slideToClosest(i.params.speed, !0, void 0, w); }), 0); }i.mousewheel.timeout || (i.mousewheel.timeout = n.nextTick((() => { i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, 0.5); }), 500)); } if (c || i.emit('scroll', t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0; } } else {
        const y = {
          time: n.now(), delta: Math.abs(o), direction: Math.sign(o), raw: e,
        }; const x = i.mousewheel.recentWheelEvents; x.length >= 2 && x.shift(); const T = x.length ? x[x.length - 1] : void 0; if (x.push(y), T ? (y.direction !== T.direction || y.delta > T.delta) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0;
      } return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    animateSlider(e) { return e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit('scroll', e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit('scroll', e.raw)), this.mousewheel.lastScrollTime = (new t.Date()).getTime(), !1); },
    releaseScroll(e) { const t = this.params.mousewheel; if (e.direction < 0) { if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0; } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0; return !1; },
    enable() { const e = ie.event(); if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0; if (!e) return !1; if (this.mousewheel.enabled) return !1; let t = this.$el; return this.params.mousewheel.eventsTarged !== 'container' && (t = s(this.params.mousewheel.eventsTarged)), t.on('mouseenter', this.mousewheel.handleMouseEnter), t.on('mouseleave', this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0; },
    disable() { const e = ie.event(); if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0; if (!e) return !1; if (!this.mousewheel.enabled) return !1; let t = this.$el; return this.params.mousewheel.eventsTarged !== 'container' && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0; },
  }; const se = {
    update() { const e = this.params.navigation; if (!this.params.loop) { const t = this.navigation; const i = t.$nextEl; const s = t.$prevEl; s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](e.lockClass)); } },
    onPrevClick(e) { e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev(); },
    onNextClick(e) { e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext(); },
    init() {
      let e; let t; const i = this.params.navigation; (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && typeof i.nextEl === 'string' && e.length > 1 && this.$el.find(i.nextEl).length === 1 && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && typeof i.prevEl === 'string' && t.length > 1 && this.$el.find(i.prevEl).length === 1 && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on('click', this.navigation.onNextClick), t && t.length > 0 && t.on('click', this.navigation.onPrevClick), n.extend(this.navigation, {
        $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0],
      }));
    },
    destroy() { const e = this.navigation; const t = e.$nextEl; const i = e.$prevEl; t && t.length && (t.off('click', this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off('click', this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass)); },
  }; const ae = {
    update() { const e = this.rtl; const t = this.params.pagination; if (t.el && this.pagination.el && this.pagination.$el && this.pagination.$el.length !== 0) { let i; const a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length; const r = this.pagination.$el; const n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length; if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && this.params.paginationType !== 'bullets' && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, t.type === 'bullets' && this.pagination.bullets && this.pagination.bullets.length > 0) { let o; let l; let d; const h = this.pagination.bullets; if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0), r.css(this.isHorizontal() ? 'width' : 'height', `${this.pagination.bulletSize * (t.dynamicMainBullets + 4)}px`), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(`${t.bulletActiveClass} ${t.bulletActiveClass}-next ${t.bulletActiveClass}-next-next ${t.bulletActiveClass}-prev ${t.bulletActiveClass}-prev-prev ${t.bulletActiveClass}-main`), r.length > 1)h.each(((e, a) => { const r = s(a); const n = r.index(); n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(`${t.bulletActiveClass}-main`), n === o && r.prev().addClass(`${t.bulletActiveClass}-prev`).prev().addClass(`${t.bulletActiveClass}-prev-prev`), n === l && r.next().addClass(`${t.bulletActiveClass}-next`).next().addClass(`${t.bulletActiveClass}-next-next`)); })); else { const p = h.eq(i); const c = p.index(); if (p.addClass(t.bulletActiveClass), t.dynamicBullets) { for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)h.eq(f).addClass(`${t.bulletActiveClass}-main`); if (this.params.loop) if (c >= h.length - t.dynamicMainBullets) { for (let m = t.dynamicMainBullets; m >= 0; m -= 1)h.eq(h.length - m).addClass(`${t.bulletActiveClass}-main`); h.eq(h.length - t.dynamicMainBullets - 1).addClass(`${t.bulletActiveClass}-prev`); } else u.prev().addClass(`${t.bulletActiveClass}-prev`).prev().addClass(`${t.bulletActiveClass}-prev-prev`), v.next().addClass(`${t.bulletActiveClass}-next`).next().addClass(`${t.bulletActiveClass}-next-next`); else u.prev().addClass(`${t.bulletActiveClass}-prev`).prev().addClass(`${t.bulletActiveClass}-prev-prev`), v.next().addClass(`${t.bulletActiveClass}-next`).next().addClass(`${t.bulletActiveClass}-next-next`); } } if (t.dynamicBullets) { const g = Math.min(h.length, t.dynamicMainBullets + 4); const b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize; const w = e ? 'right' : 'left'; h.css(this.isHorizontal() ? w : 'top', `${b}px`); } } if (t.type === 'fraction' && (r.find(`.${t.currentClass}`).text(t.formatFractionCurrent(i + 1)), r.find(`.${t.totalClass}`).text(t.formatFractionTotal(n))), t.type === 'progressbar') { let y; y = t.progressbarOpposite ? this.isHorizontal() ? 'vertical' : 'horizontal' : this.isHorizontal() ? 'horizontal' : 'vertical'; const x = (i + 1) / n; let T = 1; let E = 1; y === 'horizontal' ? T = x : E = x, r.find(`.${t.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${T}) scaleY(${E})`).transition(this.params.speed); }t.type === 'custom' && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit('paginationRender', this, r[0])) : this.emit('paginationUpdate', this, r[0]), r[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](t.lockClass); } }, render() { const e = this.params.pagination; if (e.el && this.pagination.el && this.pagination.$el && this.pagination.$el.length !== 0) { const t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length; const i = this.pagination.$el; let s = ''; if (e.type === 'bullets') { for (let a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1)e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`; i.html(s), this.pagination.bullets = i.find(`.${e.bulletClass}`); }e.type === 'fraction' && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, i.html(s)), e.type === 'progressbar' && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, i.html(s)), e.type !== 'custom' && this.emit('paginationRender', this.pagination.$el[0]); } }, init() { const e = this; const t = e.params.pagination; if (t.el) { let i = s(t.el); i.length !== 0 && (e.params.uniqueNavElements && typeof t.el === 'string' && i.length > 1 && e.$el.find(t.el).length === 1 && (i = e.$el.find(t.el)), t.type === 'bullets' && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), t.type === 'bullets' && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.type === 'progressbar' && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on('click', `.${t.bulletClass}`, (function (t) { t.preventDefault(); let i = s(this).index() * e.params.slidesPerGroup; e.params.loop && (i += e.loopedSlides), e.slideTo(i); })), n.extend(e.pagination, { $el: i, el: i[0] })); } }, destroy() { const e = this.params.pagination; if (e.el && this.pagination.el && this.pagination.$el && this.pagination.$el.length !== 0) { const t = this.pagination.$el; t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off('click', `.${e.bulletClass}`); } },
  }; const re = {
    setTranslate() { if (this.params.scrollbar.el && this.scrollbar.el) { const e = this.scrollbar; const t = this.rtlTranslate; const i = this.progress; const s = e.dragSize; const a = e.trackSize; const r = e.$dragEl; const n = e.$el; const o = this.params.scrollbar; let l = s; let d = (a - s) * i; t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform(`translate3d(${d}px, 0, 0)`), r[0].style.width = `${l}px`) : (r.transform(`translate3d(0px, ${d}px, 0)`), r[0].style.height = `${l}px`), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((() => { n[0].style.opacity = 0, n.transition(400); }), 1e3)); } },
    setTransition(e) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e); },
    updateSize() {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        const e = this.scrollbar; const t = e.$dragEl; const i = e.$el; t[0].style.width = '', t[0].style.height = ''; let s; const a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight; const r = this.size / this.virtualSize; const o = r * (a / this.size); s = this.params.scrollbar.dragSize === 'auto' ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = `${s}px` : t[0].style.height = `${s}px`, i[0].style.display = r >= 1 ? 'none' : '', this.params.scrollbar.hide && (i[0].style.opacity = 0), n.extend(e, {
          trackSize: a, divider: r, moveDivider: o, dragSize: s,
        }), e.$el[this.params.watchOverflow && this.isLocked ? 'addClass' : 'removeClass'](this.params.scrollbar.lockClass);
      }
    },
    getPointerPosition(e) { return this.isHorizontal() ? e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX : e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY; },
    setDragPosition(e) { let t; const i = this.scrollbar; const s = this.rtlTranslate; const a = i.$el; const r = i.dragSize; const n = i.trackSize; const o = i.dragStartPos; t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? 'left' : 'top'] - (o !== null ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t); const l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t; this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses(); },
    onDragStart(e) { const t = this.params.scrollbar; const i = this.scrollbar; const s = this.$wrapperEl; const a = i.$el; const r = i.$dragEl; this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? 'left' : 'top'] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css('opacity', 1), this.params.cssMode && this.$wrapperEl.css('scroll-snap-type', 'none'), this.emit('scrollbarDragStart', e); },
    onDragMove(e) { const t = this.scrollbar; const i = this.$wrapperEl; const s = t.$el; const a = t.$dragEl; this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit('scrollbarDragMove', e)); },
    onDragEnd(e) { const t = this.params.scrollbar; const i = this.scrollbar; const s = this.$wrapperEl; const a = i.$el; this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css('scroll-snap-type', ''), s.transition('')), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = n.nextTick((() => { a.css('opacity', 0), a.transition(400); }), 1e3)), this.emit('scrollbarDragEnd', e), t.snapOnRelease && this.slideToClosest()); },
    enableDraggable() { if (this.params.scrollbar.el) { const t = this.scrollbar; const i = this.touchEventsTouch; const s = this.touchEventsDesktop; const a = this.params; const r = t.$el[0]; const n = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 }; const l = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 }; o.touch ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, l)); } },
    disableDraggable() { if (this.params.scrollbar.el) { const t = this.scrollbar; const i = this.touchEventsTouch; const s = this.touchEventsDesktop; const a = this.params; const r = t.$el[0]; const n = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 }; const l = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 }; o.touch ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l)); } },
    init() {
      if (this.params.scrollbar.el) {
        const e = this.scrollbar; const t = this.$el; const i = this.params.scrollbar; let a = s(i.el); this.params.uniqueNavElements && typeof i.el === 'string' && a.length > 1 && t.find(i.el).length === 1 && (a = t.find(i.el)); let r = a.find(`.${this.params.scrollbar.dragClass}`); r.length === 0 && (r = s(`<div class="${this.params.scrollbar.dragClass}"></div>`), a.append(r)), n.extend(e, {
          $el: a, el: a[0], $dragEl: r, dragEl: r[0],
        }), i.draggable && e.enableDraggable();
      }
    },
    destroy() { this.scrollbar.disableDraggable(); },
  }; const ne = { setTransform(e, t) { const i = this.rtl; const a = s(e); const r = i ? -1 : 1; const n = a.attr('data-swiper-parallax') || '0'; let o = a.attr('data-swiper-parallax-x'); let l = a.attr('data-swiper-parallax-y'); const d = a.attr('data-swiper-parallax-scale'); const h = a.attr('data-swiper-parallax-opacity'); if (o || l ? (o = o || '0', l = l || '0') : this.isHorizontal() ? (o = n, l = '0') : (l = n, o = '0'), o = o.indexOf('%') >= 0 ? `${parseInt(o, 10) * t * r}%` : `${o * t * r}px`, l = l.indexOf('%') >= 0 ? `${parseInt(l, 10) * t}%` : `${l * t}px`, h != null) { const p = h - (h - 1) * (1 - Math.abs(t)); a[0].style.opacity = p; } if (d == null)a.transform(`translate3d(${o}, ${l}, 0px)`); else { const c = d - (d - 1) * (1 - Math.abs(t)); a.transform(`translate3d(${o}, ${l}, 0px) scale(${c})`); } }, setTranslate() { const e = this; const t = e.$el; const i = e.slides; const a = e.progress; const r = e.snapGrid; t.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(((t, i) => { e.parallax.setTransform(i, a); })), i.each(((t, i) => { let n = i.progress; e.params.slidesPerGroup > 1 && e.params.slidesPerView !== 'auto' && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(((t, i) => { e.parallax.setTransform(i, n); })); })); }, setTransition(e) { void 0 === e && (e = this.params.speed); this.$el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(((t, i) => { const a = s(i); let r = parseInt(a.attr('data-swiper-parallax-duration'), 10) || e; e === 0 && (r = 0), a.transition(r); })); } }; var oe = {
    getDistanceBetweenTouches(e) { if (e.targetTouches.length < 2) return 1; const t = e.targetTouches[0].pageX; const i = e.targetTouches[0].pageY; const s = e.targetTouches[1].pageX; const a = e.targetTouches[1].pageY; return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2)); }, onGestureStart(e) { const t = this.params.zoom; const i = this.zoom; const a = i.gesture; if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) { if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) return; i.fakeGestureTouched = !0, a.scaleStart = oe.getDistanceBetweenTouches(e); }a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(`.${this.params.slideClass}`), a.$slideEl.length === 0 && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target'), a.$imageWrapEl = a.$imageEl.parent(`.${t.containerClass}`), a.maxRatio = a.$imageWrapEl.attr('data-swiper-zoom') || t.maxRatio, a.$imageWrapEl.length !== 0) ? (a.$imageEl && a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0; }, onGestureChange(e) { const t = this.params.zoom; const i = this.zoom; const s = i.gesture; if (!o.gestures) { if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) return; i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e); }s.$imageEl && s.$imageEl.length !== 0 && (i.scale = o.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)), s.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)); }, onGestureEnd(e) { const t = this.params.zoom; const i = this.zoom; const s = i.gesture; if (!o.gestures) { if (!i.fakeGestureTouched || !i.fakeGestureMoved) return; if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !I.android) return; i.fakeGestureTouched = !1, i.fakeGestureMoved = !1; }s.$imageEl && s.$imageEl.length !== 0 && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`), i.currentScale = i.scale, i.isScaling = !1, i.scale === 1 && (s.$slideEl = void 0)); }, onTouchStart(e) { const t = this.zoom; const i = t.gesture; const s = t.image; i.$imageEl && i.$imageEl.length !== 0 && (s.isTouched || (I.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY)); }, onTouchMove(e) { const t = this.zoom; const i = t.gesture; const s = t.image; const a = t.velocity; if (i.$imageEl && i.$imageEl.length !== 0 && (this.allowClick = !1, s.isTouched && i.$slideEl)) { s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = n.getTranslate(i.$imageWrapEl[0], 'x') || 0, s.startY = n.getTranslate(i.$imageWrapEl[0], 'y') || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY)); const r = s.width * t.scale; const o = s.height * t.scale; if (!(r < i.slideWidth && o < i.slideHeight)) { if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) { if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1); if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1); }e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`); } } }, onTouchEnd() { const e = this.zoom; const t = e.gesture; const i = e.image; const s = e.velocity; if (t.$imageEl && t.$imageEl.length !== 0) { if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1); i.isTouched = !1, i.isMoved = !1; let a = 300; let r = 300; const n = s.x * a; const o = i.currentX + n; const l = s.y * r; const d = i.currentY + l; s.x !== 0 && (a = Math.abs((o - i.currentX) / s.x)), s.y !== 0 && (r = Math.abs((d - i.currentY) / s.y)); const h = Math.max(a, r); i.currentX = o, i.currentY = d; const p = i.width * e.scale; const c = i.height * e.scale; i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`); } }, onTransitionEnd() { const e = this.zoom; const t = e.gesture; t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform('translate3d(0,0,0) scale(1)'), t.$imageWrapEl && t.$imageWrapEl.transform('translate3d(0,0,0)'), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0); }, toggle(e) { const t = this.zoom; t.scale && t.scale !== 1 ? t.out() : t.in(e); }, in(e) { let t; let i; let s; let a; let r; let n; let o; let l; let d; let h; let p; let c; let u; let v; let f; let m; const g = this.zoom; const b = this.params.zoom; const w = g.gesture; const y = g.image; (w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children(`.${this.params.slideActiveClass}`) : w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target'), w.$imageWrapEl = w.$imageEl.parent(`.${b.containerClass}`)), w.$imageEl && w.$imageEl.length !== 0) && (w.$slideEl.addClass(`${b.zoomedSlideClass}`), void 0 === y.touchesStart.x && e ? (t = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX, i = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr('data-swiper-zoom') || b.maxRatio, g.currentScale = w.$imageWrapEl.attr('data-swiper-zoom') || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform(`translate3d(${r}px, ${n}px,0)`), w.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${g.scale})`)); }, out() { const e = this.zoom; const t = this.params.zoom; const i = e.gesture; i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children(`.${this.params.slideActiveClass}`) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target'), i.$imageWrapEl = i.$imageEl.parent(`.${t.containerClass}`)), i.$imageEl && i.$imageEl.length !== 0 && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'), i.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'), i.$slideEl.removeClass(`${t.zoomedSlideClass}`), i.$slideEl = void 0); }, enable() { const e = this.zoom; if (!e.enabled) { e.enabled = !0; const t = !(this.touchEvents.start !== 'touchstart' || !o.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 }; const i = !o.passiveListener || { passive: !1, capture: !0 }; const s = `.${this.params.slideClass}`; o.gestures ? (this.$wrapperEl.on('gesturestart', s, e.onGestureStart, t), this.$wrapperEl.on('gesturechange', s, e.onGestureChange, t), this.$wrapperEl.on('gestureend', s, e.onGestureEnd, t)) : this.touchEvents.start === 'touchstart' && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, `.${this.params.zoom.containerClass}`, e.onTouchMove, i); } }, disable() { const e = this.zoom; if (e.enabled) { this.zoom.enabled = !1; const t = !(this.touchEvents.start !== 'touchstart' || !o.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 }; const i = !o.passiveListener || { passive: !1, capture: !0 }; const s = `.${this.params.slideClass}`; o.gestures ? (this.$wrapperEl.off('gesturestart', s, e.onGestureStart, t), this.$wrapperEl.off('gesturechange', s, e.onGestureChange, t), this.$wrapperEl.off('gestureend', s, e.onGestureEnd, t)) : this.touchEvents.start === 'touchstart' && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, `.${this.params.zoom.containerClass}`, e.onTouchMove, i); } },
  }; const le = { loadInSlide(e, t) { void 0 === t && (t = !0); const i = this; const a = i.params.lazy; if (void 0 !== e && i.slides.length !== 0) { const r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children(`.${i.params.slideClass}[data-swiper-slide-index="${e}"]`) : i.slides.eq(e); let n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`); !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), n.length !== 0 && n.each(((e, n) => { const o = s(n); o.addClass(a.loadingClass); const l = o.attr('data-background'); const d = o.attr('data-src'); const h = o.attr('data-srcset'); const p = o.attr('data-sizes'); i.loadImage(o[0], d || l, h, p, !1, (() => { if (i != null && i && (!i || i.params) && !i.destroyed) { if (l ? (o.css('background-image', `url("${l}")`), o.removeAttr('data-background')) : (h && (o.attr('srcset', h), o.removeAttr('data-srcset')), p && (o.attr('sizes', p), o.removeAttr('data-sizes')), d && (o.attr('src', d), o.removeAttr('data-src'))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), i.params.loop && t) { const e = r.attr('data-swiper-slide-index'); if (r.hasClass(i.params.slideDuplicateClass)) { const s = i.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${i.params.slideDuplicateClass})`); i.lazy.loadInSlide(s.index(), !1); } else { const n = i.$wrapperEl.children(`.${i.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`); i.lazy.loadInSlide(n.index(), !1); } }i.emit('lazyImageReady', r[0], o[0]), i.params.autoHeight && i.updateAutoHeight(); } })), i.emit('lazyImageLoad', r[0], o[0]); })); } }, load() { const e = this; const t = e.$wrapperEl; const i = e.params; const a = e.slides; const r = e.activeIndex; const n = e.virtual && i.virtual.enabled; const o = i.lazy; let l = i.slidesPerView; function d(e) { if (n) { if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0; } else if (a[e]) return !0; return !1; } function h(e) { return n ? s(e).attr('data-swiper-slide-index') : s(e).index(); } if (l === 'auto' && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility)t.children(`.${i.slideVisibleClass}`).each(((t, i) => { const a = n ? s(i).attr('data-swiper-slide-index') : s(i).index(); e.lazy.loadInSlide(a); })); else if (l > 1) for (let p = r; p < r + l; p += 1)d(p) && e.lazy.loadInSlide(p); else e.lazy.loadInSlide(r); if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) { for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1)d(m) && e.lazy.loadInSlide(m); for (let g = f; g < r; g += 1)d(g) && e.lazy.loadInSlide(g); } else { const b = t.children(`.${i.slideNextClass}`); b.length > 0 && e.lazy.loadInSlide(h(b)); const w = t.children(`.${i.slidePrevClass}`); w.length > 0 && e.lazy.loadInSlide(h(w)); } } }; var de = {
    LinearSpline(e, t) { let i; let s; let a; let r; let n; const o = function (e, t) { for (s = -1, i = e.length; i - s > 1;)e[a = i + s >> 1] <= t ? s = a : i = a; return i; }; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) { return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0; }, this; }, getInterpolateFunction(e) { this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid)); }, setTranslate(e, t) { let i; let s; const a = this; const r = a.controller.control; function n(e) { const t = a.rtlTranslate ? -a.translate : a.translate; a.params.controller.by === 'slide' && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && a.params.controller.by !== 'container' || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses(); } if (Array.isArray(r)) for (let o = 0; o < r.length; o += 1)r[o] !== t && r[o] instanceof W && n(r[o]); else r instanceof W && t !== r && n(r); }, setTransition(e, t) { let i; const s = this; const a = s.controller.control; function r(t) { t.setTransition(e, s), e !== 0 && (t.transitionStart(), t.params.autoHeight && n.nextTick((() => { t.updateAutoHeight(); })), t.$wrapperEl.transitionEnd((() => { a && (t.params.loop && s.params.controller.by === 'slide' && t.loopFix(), t.transitionEnd()); }))); } if (Array.isArray(a)) for (i = 0; i < a.length; i += 1)a[i] !== t && a[i] instanceof W && r(a[i]); else a instanceof W && t !== a && r(a); },
  }; const he = {
    makeElFocusable(e) { return e.attr('tabIndex', '0'), e; }, addElRole(e, t) { return e.attr('role', t), e; }, addElLabel(e, t) { return e.attr('aria-label', t), e; }, disableEl(e) { return e.attr('aria-disabled', !0), e; }, enableEl(e) { return e.attr('aria-disabled', !1), e; }, onEnterKey(e) { const t = this.params.a11y; if (e.keyCode === 13) { const i = s(e.target); this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is(`.${this.params.pagination.bulletClass}`) && i[0].click(); } }, notify(e) { const t = this.a11y.liveRegion; t.length !== 0 && (t.html(''), t.html(e)); }, updateNavigation() { if (!this.params.loop && this.navigation) { const e = this.navigation; const t = e.$nextEl; const i = e.$prevEl; i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t)); } }, updatePagination() { const e = this; const t = e.params.a11y; e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(((i, a) => { const r = s(a); e.a11y.makeElFocusable(r), e.a11y.addElRole(r, 'button'), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/\{\{index\}\}/, r.index() + 1)); })); }, init() { this.$el.append(this.a11y.liveRegion); let e; let t; const i = this.params.a11y; this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, 'button'), this.a11y.addElLabel(e, i.nextSlideMessage), e.on('keydown', this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, 'button'), this.a11y.addElLabel(t, i.prevSlideMessage), t.on('keydown', this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on('keydown', `.${this.params.pagination.bulletClass}`, this.a11y.onEnterKey); }, destroy() { let e; let t; this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off('keydown', this.a11y.onEnterKey), t && t.off('keydown', this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off('keydown', `.${this.params.pagination.bulletClass}`, this.a11y.onEnterKey); },
  }; var pe = {
    init() { if (this.params.history) { if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0); const e = this.history; e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener('popstate', this.history.setHistoryPopState)); } },
    destroy() { this.params.history.replaceState || t.removeEventListener('popstate', this.history.setHistoryPopState); },
    setHistoryPopState() { this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1); },
    getPathValues() { const e = t.location.pathname.slice(1).split('/').filter(((e) => e !== '')); const i = e.length; return { key: e[i - 2], value: e[i - 1] }; },
    setHistory(e, i) { if (this.history.initialized && this.params.history.enabled) { const s = this.slides.eq(i); let a = pe.slugify(s.attr('data-history')); t.location.pathname.includes(e) || (a = `${e}/${a}`); const r = t.history.state; r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({ value: a }, null, a) : t.history.pushState({ value: a }, null, a)); } },
    slugify(e) {
      return e.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    scrollToSlide(e, t, i) { if (t) for (let s = 0, a = this.slides.length; s < a; s += 1) { const r = this.slides.eq(s); if (pe.slugify(r.attr('data-history')) === t && !r.hasClass(this.params.slideDuplicateClass)) { const n = r.index(); this.slideTo(n, e, i); } } else this.slideTo(0, e, i); },
  }; const ce = {
    onHashCange() { const t = e.location.hash.replace('#', ''); if (t !== this.slides.eq(this.activeIndex).attr('data-hash')) { const i = this.$wrapperEl.children(`.${this.params.slideClass}[data-hash="${t}"]`).index(); if (void 0 === i) return; this.slideTo(i); } }, setHash() { if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState)t.history.replaceState(null, null, `#${this.slides.eq(this.activeIndex).attr('data-hash')}` || ''); else { const i = this.slides.eq(this.activeIndex); const s = i.attr('data-hash') || i.attr('data-history'); e.location.hash = s || ''; } }, init() { if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) { this.hashNavigation.initialized = !0; const i = e.location.hash.replace('#', ''); if (i) for (let a = 0, r = this.slides.length; a < r; a += 1) { const n = this.slides.eq(a); if ((n.attr('data-hash') || n.attr('data-history')) === i && !n.hasClass(this.params.slideDuplicateClass)) { const o = n.index(); this.slideTo(o, 0, this.params.runCallbacksOnInit, !0); } } this.params.hashNavigation.watchState && s(t).on('hashchange', this.hashNavigation.onHashCange); } }, destroy() { this.params.hashNavigation.watchState && s(t).off('hashchange', this.hashNavigation.onHashCange); },
  }; const ue = {
    run() { const e = this; const t = e.slides.eq(e.activeIndex); let i = e.params.autoplay.delay; t.attr('data-swiper-autoplay') && (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = n.nextTick((() => { e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay')) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit('autoplay')) : (e.slidePrev(e.params.speed, !0, !0), e.emit('autoplay')) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit('autoplay')) : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')), e.params.cssMode && e.autoplay.running && e.autoplay.run(); }), i); }, start() { return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit('autoplayStart'), this.autoplay.run(), !0)); }, stop() { return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit('autoplayStop'), !0)); }, pause(e) { this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, e !== 0 && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener('transitionend', this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener('webkitTransitionEnd', this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run()))); },
  }; const ve = { setTranslate() { for (let e = this.slides, t = 0; t < e.length; t += 1) { const i = this.slides.eq(t); let s = -i[0].swiperSlideOffset; this.params.virtualTranslate || (s -= this.translate); let a = 0; this.isHorizontal() || (a = s, s = 0); const r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0); i.css({ opacity: r }).transform(`translate3d(${s}px, ${a}px, 0px)`); } }, setTransition(e) { const t = this; const i = t.slides; const s = t.$wrapperEl; if (i.transition(e), t.params.virtualTranslate && e !== 0) { let a = !1; i.transitionEnd((() => { if (!a && t && !t.destroyed) { a = !0, t.animating = !1; for (let e = ['webkitTransitionEnd', 'transitionend'], i = 0; i < e.length; i += 1)s.trigger(e[i]); } })); } } }; const fe = {
    setTranslate() {
      let e; const t = this.$el; const i = this.$wrapperEl; const a = this.slides; const r = this.width; const n = this.height; const o = this.rtlTranslate; const l = this.size; const d = this.params.cubeEffect; const h = this.isHorizontal(); const p = this.virtual && this.params.virtual.enabled; let c = 0; d.shadow && (h ? ((e = i.find('.swiper-cube-shadow')).length === 0 && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: `${r}px` })) : (e = t.find('.swiper-cube-shadow')).length === 0 && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e))); for (let u = 0; u < a.length; u += 1) { const v = a.eq(u); let f = u; p && (f = parseInt(v.attr('data-swiper-slide-index'), 10)); let m = 90 * f; let g = Math.floor(m / 360); o && (m = -m, g = Math.floor(-m / 360)); const b = Math.max(Math.min(v[0].progress, 1), -1); let w = 0; let y = 0; let x = 0; f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0); const T = `rotateX(${h ? 0 : -m}deg) rotateY(${h ? m : 0}deg) translate3d(${w}px, ${y}px, ${x}px)`; if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) { let E = h ? v.find('.swiper-slide-shadow-left') : v.find('.swiper-slide-shadow-top'); let S = h ? v.find('.swiper-slide-shadow-right') : v.find('.swiper-slide-shadow-bottom'); E.length === 0 && (E = s(`<div class="swiper-slide-shadow-${h ? 'left' : 'top'}"></div>`), v.append(E)), S.length === 0 && (S = s(`<div class="swiper-slide-shadow-${h ? 'right' : 'bottom'}"></div>`), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0)); } } if (i.css({
        '-webkit-transform-origin': `50% 50% -${l / 2}px`, '-moz-transform-origin': `50% 50% -${l / 2}px`, '-ms-transform-origin': `50% 50% -${l / 2}px`, 'transform-origin': `50% 50% -${l / 2}px`,
      }), d.shadow) if (h)e.transform(`translate3d(0px, ${r / 2 + d.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`); else { const C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90); const M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2); const P = d.shadowScale; const z = d.shadowScale / M; const k = d.shadowOffset; e.transform(`scale3d(${P}, 1, ${z}) translate3d(0px, ${n / 2 + k}px, ${-n / 2 / z}px) rotateX(-90deg)`); } const $ = j.isSafari || j.isUiWebView ? -l / 2 : 0; i.transform(`translate3d(0px,0,${$}px) rotateX(${this.isHorizontal() ? 0 : c}deg) rotateY(${this.isHorizontal() ? -c : 0}deg)`);
    },
    setTransition(e) { const t = this.$el; this.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find('.swiper-cube-shadow').transition(e); },
  }; const me = { setTranslate() { for (let e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) { const a = e.eq(i); let r = a[0].progress; this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1)); let n = -180 * r; let o = 0; let l = -a[0].swiperSlideOffset; let d = 0; if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) { let h = this.isHorizontal() ? a.find('.swiper-slide-shadow-left') : a.find('.swiper-slide-shadow-top'); let p = this.isHorizontal() ? a.find('.swiper-slide-shadow-right') : a.find('.swiper-slide-shadow-bottom'); h.length === 0 && (h = s(`<div class="swiper-slide-shadow-${this.isHorizontal() ? 'left' : 'top'}"></div>`), a.append(h)), p.length === 0 && (p = s(`<div class="swiper-slide-shadow-${this.isHorizontal() ? 'right' : 'bottom'}"></div>`), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0)); }a.transform(`translate3d(${l}px, ${d}px, 0px) rotateX(${o}deg) rotateY(${n}deg)`); } }, setTransition(e) { const t = this; const i = t.slides; const s = t.activeIndex; const a = t.$wrapperEl; if (i.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e), t.params.virtualTranslate && e !== 0) { let r = !1; i.eq(s).transitionEnd((() => { if (!r && t && !t.destroyed) { r = !0, t.animating = !1; for (let e = ['webkitTransitionEnd', 'transitionend'], i = 0; i < e.length; i += 1)a.trigger(e[i]); } })); } } }; const ge = { setTranslate() { for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, h = l ? e / 2 - d : t / 2 - d, p = l ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) { const f = i.eq(u); const m = r[u]; const g = (h - f[0].swiperSlideOffset - m / 2) / m * n.modifier; let b = l ? p * g : 0; let w = l ? 0 : p * g; let y = -c * Math.abs(g); let x = n.stretch; typeof x === 'string' && x.indexOf('%') !== -1 && (x = parseFloat(n.stretch) / 100 * m); let T = l ? 0 : x * g; let E = l ? x * g : 0; Math.abs(E) < 0.001 && (E = 0), Math.abs(T) < 0.001 && (T = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(b) < 0.001 && (b = 0), Math.abs(w) < 0.001 && (w = 0); const S = `translate3d(${E}px,${T}px,${y}px)  rotateX(${w}deg) rotateY(${b}deg)`; if (f.transform(S), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) { let C = l ? f.find('.swiper-slide-shadow-left') : f.find('.swiper-slide-shadow-top'); let M = l ? f.find('.swiper-slide-shadow-right') : f.find('.swiper-slide-shadow-bottom'); C.length === 0 && (C = s(`<div class="swiper-slide-shadow-${l ? 'left' : 'top'}"></div>`), f.append(C)), M.length === 0 && (M = s(`<div class="swiper-slide-shadow-${l ? 'right' : 'bottom'}"></div>`), f.append(M)), C.length && (C[0].style.opacity = g > 0 ? g : 0), M.length && (M[0].style.opacity = -g > 0 ? -g : 0); } }(o.pointerEvents || o.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = `${h}px 50%`); }, setTransition(e) { this.slides.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e); } }; const be = { init() { const e = this.params.thumbs; const t = this.constructor; e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, n.extend(this.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), n.extend(this.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : n.isObject(e.swiper) && (this.thumbs.swiper = new t(n.extend({}, e.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on('tap', this.thumbs.onThumbClick); }, onThumbClick() { const e = this.thumbs.swiper; if (e) { const t = e.clickedIndex; const i = e.clickedSlide; if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || t == null)) { let a; if (a = e.params.loop ? parseInt(s(e.clickedSlide).attr('data-swiper-slide-index'), 10) : t, this.params.loop) { let r = this.activeIndex; this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, r = this.activeIndex); const n = this.slides.eq(r).prevAll(`[data-swiper-slide-index="${a}"]`).eq(0).index(); const o = this.slides.eq(r).nextAll(`[data-swiper-slide-index="${a}"]`).eq(0).index(); a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n; } this.slideTo(a); } } }, update(e) { const t = this.thumbs.swiper; if (t) { const i = t.params.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : t.params.slidesPerView; const s = this.params.thumbs.autoScrollOffset; const a = s && !t.params.loop; if (this.realIndex !== t.realIndex || a) { let r; let n; let o = t.activeIndex; if (t.params.loop) { t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex); const l = t.slides.eq(o).prevAll(`[data-swiper-slide-index="${this.realIndex}"]`).eq(0).index(); const d = t.slides.eq(o).nextAll(`[data-swiper-slide-index="${this.realIndex}"]`).eq(0).index(); r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l, n = this.activeIndex > this.previousIndex ? 'next' : 'prev'; } else n = (r = this.realIndex) > this.previousIndex ? 'next' : 'prev'; a && (r += n === 'next' ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0)); } let h = 1; const p = this.params.thumbs.slideThumbActiveClass; if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (let c = 0; c < h; c += 1)t.$wrapperEl.children(`[data-swiper-slide-index="${this.realIndex + c}"]`).addClass(p); else for (let u = 0; u < h; u += 1)t.slides.eq(this.realIndex + u).addClass(p); } } }; const we = [R, q, K, U, Z, J, te, {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: 'container',
      },
    },
    create() {
      n.extend(this, {
        mousewheel: {
          enabled: !1, enable: ie.enable.bind(this), disable: ie.disable.bind(this), handle: ie.handle.bind(this), handleMouseEnter: ie.handleMouseEnter.bind(this), handleMouseLeave: ie.handleMouseLeave.bind(this), animateSlider: ie.animateSlider.bind(this), releaseScroll: ie.releaseScroll.bind(this), lastScrollTime: n.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [],
        },
      });
    },
    on: { init() { !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable(); }, destroy() { this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable(); } },
  }, {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: 'swiper-button-disabled', hiddenClass: 'swiper-button-hidden', lockClass: 'swiper-button-lock',
      },
    },
    create() {
      n.extend(this, {
        navigation: {
          init: se.init.bind(this), update: se.update.bind(this), destroy: se.destroy.bind(this), onNextClick: se.onNextClick.bind(this), onPrevClick: se.onPrevClick.bind(this),
        },
      });
    },
    on: {
      init() { this.navigation.init(), this.navigation.update(); }, toEdge() { this.navigation.update(); }, fromEdge() { this.navigation.update(); }, destroy() { this.navigation.destroy(); }, click(e) { let t; const i = this.navigation; const a = i.$nextEl; const r = i.$prevEl; !this.params.navigation.hideOnClick || s(e.target).is(r) || s(e.target).is(a) || (a ? t = a.hasClass(this.params.navigation.hiddenClass) : r && (t = r.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit('navigationShow', this) : this.emit('navigationHide', this), a && a.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass)); },
    },
  }, {
    name: 'pagination',
    params: {
      pagination: {
        el: null, bulletElement: 'span', clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: 'bullets', dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent(e) { return e; }, formatFractionTotal(e) { return e; }, bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active', modifierClass: 'swiper-pagination-', currentClass: 'swiper-pagination-current', totalClass: 'swiper-pagination-total', hiddenClass: 'swiper-pagination-hidden', progressbarFillClass: 'swiper-pagination-progressbar-fill', progressbarOppositeClass: 'swiper-pagination-progressbar-opposite', clickableClass: 'swiper-pagination-clickable', lockClass: 'swiper-pagination-lock',
      },
    },
    create() {
      n.extend(this, {
        pagination: {
          init: ae.init.bind(this), render: ae.render.bind(this), update: ae.update.bind(this), destroy: ae.destroy.bind(this), dynamicBulletIndex: 0,
        },
      });
    },
    on: {
      init() { this.pagination.init(), this.pagination.render(), this.pagination.update(); }, activeIndexChange() { (this.params.loop || void 0 === this.snapIndex) && this.pagination.update(); }, snapIndexChange() { this.params.loop || this.pagination.update(); }, slidesLengthChange() { this.params.loop && (this.pagination.render(), this.pagination.update()); }, snapGridLengthChange() { this.params.loop || (this.pagination.render(), this.pagination.update()); }, destroy() { this.pagination.destroy(); }, click(e) { this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit('paginationShow', this) : this.emit('paginationHide', this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)); },
    },
  }, {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null, dragSize: 'auto', hide: !1, draggable: !1, snapOnRelease: !0, lockClass: 'swiper-scrollbar-lock', dragClass: 'swiper-scrollbar-drag',
      },
    },
    create() {
      n.extend(this, {
        scrollbar: {
          init: re.init.bind(this), destroy: re.destroy.bind(this), updateSize: re.updateSize.bind(this), setTranslate: re.setTranslate.bind(this), setTransition: re.setTransition.bind(this), enableDraggable: re.enableDraggable.bind(this), disableDraggable: re.disableDraggable.bind(this), setDragPosition: re.setDragPosition.bind(this), getPointerPosition: re.getPointerPosition.bind(this), onDragStart: re.onDragStart.bind(this), onDragMove: re.onDragMove.bind(this), onDragEnd: re.onDragEnd.bind(this), isTouched: !1, timeout: null, dragTimeout: null,
        },
      });
    },
    on: {
      init() { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate(); }, update() { this.scrollbar.updateSize(); }, resize() { this.scrollbar.updateSize(); }, observerUpdate() { this.scrollbar.updateSize(); }, setTranslate() { this.scrollbar.setTranslate(); }, setTransition(e) { this.scrollbar.setTransition(e); }, destroy() { this.scrollbar.destroy(); },
    },
  }, {
    name: 'parallax',
    params: { parallax: { enabled: !1 } },
    create() { n.extend(this, { parallax: { setTransform: ne.setTransform.bind(this), setTranslate: ne.setTranslate.bind(this), setTransition: ne.setTransition.bind(this) } }); },
    on: {
      beforeInit() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0); }, init() { this.params.parallax.enabled && this.parallax.setTranslate(); }, setTranslate() { this.params.parallax.enabled && this.parallax.setTranslate(); }, setTransition(e) { this.params.parallax.enabled && this.parallax.setTransition(e); },
    },
  }, {
    name: 'zoom',
    params: {
      zoom: {
        enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: 'swiper-zoom-container', zoomedSlideClass: 'swiper-slide-zoomed',
      },
    },
    create() {
      const e = this; const t = {
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3,
        },
        image: {
          isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {},
        },
        velocity: {
          x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0,
        },
      }; 'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(((i) => { t[i] = oe[i].bind(e); })), n.extend(e, { zoom: t }); let i = 1; Object.defineProperty(e.zoom, 'scale', { get() { return i; }, set(t) { if (i !== t) { const s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0; const a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0; e.emit('zoomChange', t, s, a); }i = t; } });
    },
    on: {
      init() { this.params.zoom.enabled && this.zoom.enable(); }, destroy() { this.zoom.disable(); }, touchStart(e) { this.zoom.enabled && this.zoom.onTouchStart(e); }, touchEnd(e) { this.zoom.enabled && this.zoom.onTouchEnd(e); }, doubleTap(e) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e); }, transitionEnd() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd(); }, slideChange() { this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd(); },
    },
  }, {
    name: 'lazy',
    params: {
      lazy: {
        enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: 'swiper-lazy', loadingClass: 'swiper-lazy-loading', loadedClass: 'swiper-lazy-loaded', preloaderClass: 'swiper-lazy-preloader',
      },
    },
    create() { n.extend(this, { lazy: { initialImageLoaded: !1, load: le.load.bind(this), loadInSlide: le.loadInSlide.bind(this) } }); },
    on: {
      beforeInit() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1); }, init() { this.params.lazy.enabled && !this.params.loop && this.params.initialSlide === 0 && this.lazy.load(); }, scroll() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load(); }, resize() { this.params.lazy.enabled && this.lazy.load(); }, scrollbarDragMove() { this.params.lazy.enabled && this.lazy.load(); }, transitionStart() { this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load(); }, transitionEnd() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load(); }, slideChange() { this.params.lazy.enabled && this.params.cssMode && this.lazy.load(); },
    },
  }, {
    name: 'controller',
    params: { controller: { control: void 0, inverse: !1, by: 'slide' } },
    create() {
      n.extend(this, {
        controller: {
          control: this.params.controller.control, getInterpolateFunction: de.getInterpolateFunction.bind(this), setTranslate: de.setTranslate.bind(this), setTransition: de.setTransition.bind(this),
        },
      });
    },
    on: {
      update() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline); }, resize() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline); }, observerUpdate() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline); }, setTranslate(e, t) { this.controller.control && this.controller.setTranslate(e, t); }, setTransition(e, t) { this.controller.control && this.controller.setTransition(e, t); },
    },
  }, {
    name: 'a11y',
    params: {
      a11y: {
        enabled: !0, notificationClass: 'swiper-notification', prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide', firstSlideMessage: 'This is the first slide', lastSlideMessage: 'This is the last slide', paginationBulletMessage: 'Go to slide {{index}}',
      },
    },
    create() { const e = this; n.extend(e, { a11y: { liveRegion: s(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`) } }), Object.keys(he).forEach(((t) => { e.a11y[t] = he[t].bind(e); })); },
    on: {
      init() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()); }, toEdge() { this.params.a11y.enabled && this.a11y.updateNavigation(); }, fromEdge() { this.params.a11y.enabled && this.a11y.updateNavigation(); }, paginationUpdate() { this.params.a11y.enabled && this.a11y.updatePagination(); }, destroy() { this.params.a11y.enabled && this.a11y.destroy(); },
    },
  }, {
    name: 'history',
    params: { history: { enabled: !1, replaceState: !1, key: 'slides' } },
    create() {
      n.extend(this, {
        history: {
          init: pe.init.bind(this), setHistory: pe.setHistory.bind(this), setHistoryPopState: pe.setHistoryPopState.bind(this), scrollToSlide: pe.scrollToSlide.bind(this), destroy: pe.destroy.bind(this),
        },
      });
    },
    on: {
      init() { this.params.history.enabled && this.history.init(); }, destroy() { this.params.history.enabled && this.history.destroy(); }, transitionEnd() { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex); }, slideChange() { this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex); },
    },
  }, {
    name: 'hash-navigation',
    params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
    create() {
      n.extend(this, {
        hashNavigation: {
          initialized: !1, init: ce.init.bind(this), destroy: ce.destroy.bind(this), setHash: ce.setHash.bind(this), onHashCange: ce.onHashCange.bind(this),
        },
      });
    },
    on: {
      init() { this.params.hashNavigation.enabled && this.hashNavigation.init(); }, destroy() { this.params.hashNavigation.enabled && this.hashNavigation.destroy(); }, transitionEnd() { this.hashNavigation.initialized && this.hashNavigation.setHash(); }, slideChange() { this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash(); },
    },
  }, {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1,
      },
    },
    create() {
      const e = this; n.extend(e, {
        autoplay: {
          running: !1, paused: !1, run: ue.run.bind(e), start: ue.start.bind(e), stop: ue.stop.bind(e), pause: ue.pause.bind(e), onVisibilityChange() { document.visibilityState === 'hidden' && e.autoplay.running && e.autoplay.pause(), document.visibilityState === 'visible' && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1); }, onTransitionEnd(t) { e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener('transitionend', e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener('webkitTransitionEnd', e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop()); },
        },
      });
    },
    on: {
      init() { this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener('visibilitychange', this.autoplay.onVisibilityChange)); }, beforeTransitionStart(e, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop()); }, sliderFirstMove() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()); }, touchEnd() { this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run(); }, destroy() { this.autoplay.running && this.autoplay.stop(), document.removeEventListener('visibilitychange', this.autoplay.onVisibilityChange); },
    },
  }, {
    name: 'effect-fade',
    params: { fadeEffect: { crossFade: !1 } },
    create() { n.extend(this, { fadeEffect: { setTranslate: ve.setTranslate.bind(this), setTransition: ve.setTransition.bind(this) } }); },
    on: {
      beforeInit() {
        if (this.params.effect === 'fade') {
          this.classNames.push(`${this.params.containerModifierClass}fade`); const e = {
            slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0,
          }; n.extend(this.params, e), n.extend(this.originalParams, e);
        }
      },
      setTranslate() { this.params.effect === 'fade' && this.fadeEffect.setTranslate(); },
      setTransition(e) { this.params.effect === 'fade' && this.fadeEffect.setTransition(e); },
    },
  }, {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94,
      },
    },
    create() { n.extend(this, { cubeEffect: { setTranslate: fe.setTranslate.bind(this), setTransition: fe.setTransition.bind(this) } }); },
    on: {
      beforeInit() {
        if (this.params.effect === 'cube') {
          this.classNames.push(`${this.params.containerModifierClass}cube`), this.classNames.push(`${this.params.containerModifierClass}3d`); const e = {
            slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0,
          }; n.extend(this.params, e), n.extend(this.originalParams, e);
        }
      },
      setTranslate() { this.params.effect === 'cube' && this.cubeEffect.setTranslate(); },
      setTransition(e) { this.params.effect === 'cube' && this.cubeEffect.setTransition(e); },
    },
  }, {
    name: 'effect-flip',
    params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
    create() { n.extend(this, { flipEffect: { setTranslate: me.setTranslate.bind(this), setTransition: me.setTransition.bind(this) } }); },
    on: {
      beforeInit() {
        if (this.params.effect === 'flip') {
          this.classNames.push(`${this.params.containerModifierClass}flip`), this.classNames.push(`${this.params.containerModifierClass}3d`); const e = {
            slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0,
          }; n.extend(this.params, e), n.extend(this.originalParams, e);
        }
      },
      setTranslate() { this.params.effect === 'flip' && this.flipEffect.setTranslate(); },
      setTransition(e) { this.params.effect === 'flip' && this.flipEffect.setTransition(e); },
    },
  }, {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0,
      },
    },
    create() { n.extend(this, { coverflowEffect: { setTranslate: ge.setTranslate.bind(this), setTransition: ge.setTransition.bind(this) } }); },
    on: { beforeInit() { this.params.effect === 'coverflow' && (this.classNames.push(`${this.params.containerModifierClass}coverflow`), this.classNames.push(`${this.params.containerModifierClass}3d`), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0); }, setTranslate() { this.params.effect === 'coverflow' && this.coverflowEffect.setTranslate(); }, setTransition(e) { this.params.effect === 'coverflow' && this.coverflowEffect.setTransition(e); } },
  }, {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: 'swiper-slide-thumb-active', thumbsContainerClass: 'swiper-container-thumbs',
      },
    },
    create() {
      n.extend(this, {
        thumbs: {
          swiper: null, init: be.init.bind(this), update: be.update.bind(this), onThumbClick: be.onThumbClick.bind(this),
        },
      });
    },
    on: {
      beforeInit() { const e = this.params.thumbs; e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0)); }, slideChange() { this.thumbs.swiper && this.thumbs.update(); }, update() { this.thumbs.swiper && this.thumbs.update(); }, resize() { this.thumbs.swiper && this.thumbs.update(); }, observerUpdate() { this.thumbs.swiper && this.thumbs.update(); }, setTransition(e) { const t = this.thumbs.swiper; t && t.setTransition(e); }, beforeDestroy() { const e = this.thumbs.swiper; e && this.thumbs.swiperCreated && e && e.destroy(); },
    },
  }]; return void 0 === W.use && (W.use = W.Class.use, W.installModule = W.Class.installModule), W.use(we), W;
})));
// # sourceMappingURL=swiper.min.js.map

/*------------------------------------------------------------------*/
/*	01) ISOTOPE
/*------------------------------------------------------------------*/

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('jquery-bridget/jquery-bridget', ['jquery'], (jQuery) => factory(window, jQuery));
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery'),
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery,
    );
  }
}(window, (window, jQuery) => {
  // ----- utils ----- //

  const arraySlice = Array.prototype.slice;

  // helper function for logging errors
  // $.error breaks jQuery chaining
  const { console } = window;
  const logError = typeof console === 'undefined' ? function () {}
    : function (message) {
      console.error(message);
    };

  // ----- jQueryBridget ----- //

  function jQueryBridget(namespace, PluginClass, $) {
    $ = $ || jQuery || window.jQuery;
    if (!$) {
      return;
    }

    // add option method -> $().plugin('option', {...})
    if (!PluginClass.prototype.option) {
    // option setter
      PluginClass.prototype.option = function (opts) {
      // bail out if not an object
        if (!$.isPlainObject(opts)) {
          return;
        }
        this.options = $.extend(true, this.options, opts);
      };
    }

    // make jQuery plugin
    $.fn[namespace] = function (arg0 /* , arg1 */) {
      if (typeof arg0 === 'string') {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
        const args = arraySlice.call(arguments, 1);
        return methodCall(this, arg0, args);
      }
      // just $().plugin({ options })
      plainCall(this, arg0);
      return this;
    };

    // $().plugin('methodName')
    function methodCall($elems, methodName, args) {
      let returnValue;
      const pluginMethodStr = `$().${namespace}("${methodName}")`;

      $elems.each((i, elem) => {
      // get instance
        const instance = $.data(elem, namespace);
        if (!instance) {
          logError(`${namespace} not initialized. Cannot call methods, i.e. ${
            pluginMethodStr}`);
          return;
        }

        const method = instance[methodName];
        if (!method || methodName.charAt(0) == '_') {
          logError(`${pluginMethodStr} is not a valid method`);
          return;
        }

        // apply method, get return value
        const value = method.apply(instance, args);
        // set return value if value is returned, use only first value
        returnValue = returnValue === undefined ? value : returnValue;
      });

      return returnValue !== undefined ? returnValue : $elems;
    }

    function plainCall($elems, options) {
      $elems.each((i, elem) => {
        let instance = $.data(elem, namespace);
        if (instance) {
        // set options & init
          instance.option(options);
          instance._init();
        } else {
        // initialize new instance
          instance = new PluginClass(elem, options);
          $.data(elem, namespace, instance);
        }
      });
    }

    updateJQuery($);
  }

  // ----- updateJQuery ----- //

  // set $.bridget for v1 backwards compatibility
  function updateJQuery($) {
    if (!$ || ($ && $.bridget)) {
      return;
    }
    $.bridget = jQueryBridget;
  }

  updateJQuery(jQuery || window.jQuery);

  // -----  ----- //

  return jQueryBridget;
}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if (typeof define === 'function' && define.amd) {
    // AMD - RequireJS
    define('ev-emitter/ev-emitter', factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }
}(typeof window !== 'undefined' ? window : this, () => {
  function EvEmitter() {}

  const proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    const events = this._events = this._events || {};
    // set listeners array
    const listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    const onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    const onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    // set flag
    onceListeners[listener] = true;

    return this;
  };

  proto.off = function (eventName, listener) {
    const listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    const index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    let listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    const onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      const isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
      // remove listener
      // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

(function (window, factory) {
  /* jshint strict: false */ /* globals define, module */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('get-size/get-size', factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }
}(window, () => {
  // -------------------------- helpers -------------------------- //

  // get a number from a string, not a percentage
  function getStyleSize(value) {
    const num = parseFloat(value);
    // not a percent like '100%', and a number
    const isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}

  const logError = typeof console === 'undefined' ? noop
    : function (message) {
      console.error(message);
    };

  // -------------------------- measurements -------------------------- //

  const measurements = [
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderBottomWidth',
  ];

  const measurementsLength = measurements.length;

  function getZeroSize() {
    const size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
    };
    for (let i = 0; i < measurementsLength; i++) {
      const measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }

  // -------------------------- getStyle -------------------------- //

  /**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
  function getStyle(elem) {
    const style = getComputedStyle(elem);
    if (!style) {
      logError(`Style returned ${style
      }. Are you running this code in a hidden iframe on Firefox? `
      + 'See https://bit.ly/getsizebug1');
    }
    return style;
  }

  // -------------------------- setup -------------------------- //

  let isSetup = false;

  let isBoxSizeOuter;

  /**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
  function setup() {
  // setup once
    if (isSetup) {
      return;
    }
    isSetup = true;

    // -------------------------- box sizing -------------------------- //

    /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
    const div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';

    const body = document.body || document.documentElement;
    body.appendChild(div);
    const style = getStyle(div);
    // round value for browser zoom. desandro/masonry#928
    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;

    body.removeChild(div);
  }

  // -------------------------- getSize -------------------------- //

  function getSize(elem) {
    setup();

    // use querySeletor if elem is string
    if (typeof elem === 'string') {
      elem = document.querySelector(elem);
    }

    // do not proceed on non-objects
    if (!elem || typeof elem !== 'object' || !elem.nodeType) {
      return;
    }

    const style = getStyle(elem);

    // if hidden, everything is 0
    if (style.display == 'none') {
      return getZeroSize();
    }

    const size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;

    const isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

    // get all measurements
    for (let i = 0; i < measurementsLength; i++) {
      const measurement = measurements[i];
      const value = style[measurement];
      const num = parseFloat(value);
      // any 'auto', 'medium' value will be 0
      size[measurement] = !isNaN(num) ? num : 0;
    }

    const paddingWidth = size.paddingLeft + size.paddingRight;
    const paddingHeight = size.paddingTop + size.paddingBottom;
    const marginWidth = size.marginLeft + size.marginRight;
    const marginHeight = size.marginTop + size.marginBottom;
    const borderWidth = size.borderLeftWidth + size.borderRightWidth;
    const borderHeight = size.borderTopWidth + size.borderBottomWidth;

    const isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

    // overwrite width and height if we can get it from style
    const styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width = styleWidth
      // add padding and border unless it's already including it
      + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }

    const styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height = styleHeight
      // add padding and border unless it's already including it
      + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }

    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);

    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;

    return size;
  }

  return getSize;
}));

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
  /* global define: false, module: false */

  // universal module definition
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('desandro-matches-selector/matches-selector', factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }
}(window, () => {
  const matchesMethod = (function () {
    const ElemProto = window.Element.prototype;
    // check for the standard method name first
    if (ElemProto.matches) {
      return 'matches';
    }
    // check un-prefixed
    if (ElemProto.matchesSelector) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    const prefixes = ['webkit', 'moz', 'ms', 'o'];

    for (let i = 0; i < prefixes.length; i++) {
      const prefix = prefixes[i];
      const method = `${prefix}MatchesSelector`;
      if (ElemProto[method]) {
        return method;
      }
    }
  }());

  return function matchesSelector(elem, selector) {
    return elem[matchesMethod](selector);
  };
}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/* jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */

  if (typeof define === 'function' && define.amd) {
    // AMD
    define('fizzy-ui-utils/utils', [
      'desandro-matches-selector/matches-selector',
    ], (matchesSelector) => factory(window, matchesSelector));
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector'),
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector,
    );
  }
}(window, (window, matchesSelector) => {
  const utils = {};

  // ----- extend ----- //

  // extends objects
  utils.extend = function (a, b) {
    for (const prop in b) {
      a[prop] = b[prop];
    }
    return a;
  };

  // ----- modulo ----- //

  utils.modulo = function (num, div) {
    return ((num % div) + div) % div;
  };

  // ----- makeArray ----- //

  const arraySlice = Array.prototype.slice;

  // turn element or nodeList into an array
  utils.makeArray = function (obj) {
    if (Array.isArray(obj)) {
    // use object if already an array
      return obj;
    }
    // return empty array if undefined or null. #6
    if (obj === null || obj === undefined) {
      return [];
    }

    const isArrayLike = typeof obj === 'object' && typeof obj.length === 'number';
    if (isArrayLike) {
    // convert nodeList to array
      return arraySlice.call(obj);
    }

    // array of single index
    return [obj];
  };

  // ----- removeFrom ----- //

  utils.removeFrom = function (ary, obj) {
    const index = ary.indexOf(obj);
    if (index != -1) {
      ary.splice(index, 1);
    }
  };

  // ----- getParent ----- //

  utils.getParent = function (elem, selector) {
    while (elem.parentNode && elem != document.body) {
      elem = elem.parentNode;
      if (matchesSelector(elem, selector)) {
        return elem;
      }
    }
  };

  // ----- getQueryElement ----- //

  // use element as selector string
  utils.getQueryElement = function (elem) {
    if (typeof elem === 'string') {
      return document.querySelector(elem);
    }
    return elem;
  };

  // ----- handleEvent ----- //

  // enable .ontype to trigger from .addEventListener( elem, 'type' )
  utils.handleEvent = function (event) {
    const method = `on${event.type}`;
    if (this[method]) {
      this[method](event);
    }
  };

  // ----- filterFindElements ----- //

  utils.filterFindElements = function (elems, selector) {
  // make array of elems
    elems = utils.makeArray(elems);
    const ffElems = [];

    elems.forEach((elem) => {
    // check that elem is an actual element
      if (!(elem instanceof HTMLElement)) {
        return;
      }
      // add elem if no selector
      if (!selector) {
        ffElems.push(elem);
        return;
      }
      // filter & find items if we have a selector
      // filter
      if (matchesSelector(elem, selector)) {
        ffElems.push(elem);
      }
      // find children
      const childElems = elem.querySelectorAll(selector);
      // concat childElems to filterFound array
      for (let i = 0; i < childElems.length; i++) {
        ffElems.push(childElems[i]);
      }
    });

    return ffElems;
  };

  // ----- debounceMethod ----- //

  utils.debounceMethod = function (_class, methodName, threshold) {
    threshold = threshold || 100;
    // original method
    const method = _class.prototype[methodName];
    const timeoutName = `${methodName}Timeout`;

    _class.prototype[methodName] = function () {
      const timeout = this[timeoutName];
      clearTimeout(timeout);

      const args = arguments;
      const _this = this;
      this[timeoutName] = setTimeout(() => {
        method.apply(_this, args);
        delete _this[timeoutName];
      }, threshold);
    };
  };

  // ----- docReady ----- //

  utils.docReady = function (callback) {
    const { readyState } = document;
    if (readyState == 'complete' || readyState == 'interactive') {
    // do async to allow for other scripts to run. metafizzy/flickity#441
      setTimeout(callback);
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  };

  // ----- htmlInit ----- //

  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
  utils.toDashed = function (str) {
    return str.replace(/(.)([A-Z])/g, (match, $1, $2) => `${$1}-${$2}`).toLowerCase();
  };

  const { console } = window;
  /**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
  utils.htmlInit = function (WidgetClass, namespace) {
    utils.docReady(() => {
      const dashedNamespace = utils.toDashed(namespace);
      const dataAttr = `data-${dashedNamespace}`;
      const dataAttrElems = document.querySelectorAll(`[${dataAttr}]`);
      const jsDashElems = document.querySelectorAll(`.js-${dashedNamespace}`);
      const elems = utils.makeArray(dataAttrElems)
        .concat(utils.makeArray(jsDashElems));
      const dataOptionsAttr = `${dataAttr}-options`;
      const { jQuery } = window;

      elems.forEach((elem) => {
        const attr = elem.getAttribute(dataAttr)
        || elem.getAttribute(dataOptionsAttr);
        let options;
        try {
          options = attr && JSON.parse(attr);
        } catch (error) {
        // log error, do not initialize
          if (console) {
            console.error(`Error parsing ${dataAttr} on ${elem.className
            }: ${error}`);
          }
          return;
        }
        // initialize
        const instance = new WidgetClass(elem, options);
        // make available via $().data('namespace')
        if (jQuery) {
          jQuery.data(elem, namespace, instance);
        }
      });
    });
  };

  // -----  ----- //

  return utils;
}));

/**
 * Outlayer Item
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD - RequireJS
    define('outlayer/item', [
      'ev-emitter/ev-emitter',
      'get-size/get-size',
    ],
    factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size'),
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize,
    );
  }
}(window, (EvEmitter, getSize) => {
  // ----- helpers ----- //

  function isEmptyObj(obj) {
    for (var prop in obj) {
      return false;
    }
    prop = null;
    return true;
  }

  // -------------------------- CSS3 support -------------------------- //

  const docElemStyle = document.documentElement.style;

  const transitionProperty = typeof docElemStyle.transition === 'string'
    ? 'transition' : 'WebkitTransition';
  const transformProperty = typeof docElemStyle.transform === 'string'
    ? 'transform' : 'WebkitTransform';

  const transitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    transition: 'transitionend',
  }[transitionProperty];

  // cache all vendor properties that could have vendor prefix
  const vendorProperties = {
    transform: transformProperty,
    transition: transitionProperty,
    transitionDuration: `${transitionProperty}Duration`,
    transitionProperty: `${transitionProperty}Property`,
    transitionDelay: `${transitionProperty}Delay`,
  };

  // -------------------------- Item -------------------------- //

  function Item(element, layout) {
    if (!element) {
      return;
    }

    this.element = element;
    // parent layout class, i.e. Masonry, Isotope, or Packery
    this.layout = layout;
    this.position = {
      x: 0,
      y: 0,
    };

    this._create();
  }

  // inherit EvEmitter
  const proto = Item.prototype = Object.create(EvEmitter.prototype);
  proto.constructor = Item;

  proto._create = function () {
  // transition objects
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {},
    };

    this.css({
      position: 'absolute',
    });
  };

  // trigger specified handler for event type
  proto.handleEvent = function (event) {
    const method = `on${event.type}`;
    if (this[method]) {
      this[method](event);
    }
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
  };

  /**
 * apply CSS styles to element
 * @param {Object} style
 */
  proto.css = function (style) {
    const elemStyle = this.element.style;

    for (const prop in style) {
    // use vendor property if available
      const supportedProp = vendorProperties[prop] || prop;
      elemStyle[supportedProp] = style[prop];
    }
  };

  // measure position, and sets it
  proto.getPosition = function () {
    const style = getComputedStyle(this.element);
    const isOriginLeft = this.layout._getOption('originLeft');
    const isOriginTop = this.layout._getOption('originTop');
    const xValue = style[isOriginLeft ? 'left' : 'right'];
    const yValue = style[isOriginTop ? 'top' : 'bottom'];
    let x = parseFloat(xValue);
    let y = parseFloat(yValue);
    // convert percent to pixels
    const layoutSize = this.layout.size;
    if (xValue.indexOf('%') != -1) {
      x = (x / 100) * layoutSize.width;
    }
    if (yValue.indexOf('%') != -1) {
      y = (y / 100) * layoutSize.height;
    }
    // clean up 'auto' or other non-integer values
    x = isNaN(x) ? 0 : x;
    y = isNaN(y) ? 0 : y;
    // remove padding from measurement
    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

    this.position.x = x;
    this.position.y = y;
  };

  // set settled position, apply padding
  proto.layoutPosition = function () {
    const layoutSize = this.layout.size;
    const style = {};
    const isOriginLeft = this.layout._getOption('originLeft');
    const isOriginTop = this.layout._getOption('originTop');

    // x
    const xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
    const xProperty = isOriginLeft ? 'left' : 'right';
    const xResetProperty = isOriginLeft ? 'right' : 'left';

    const x = this.position.x + layoutSize[xPadding];
    // set in percentage or pixels
    style[xProperty] = this.getXValue(x);
    // reset other property
    style[xResetProperty] = '';

    // y
    const yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
    const yProperty = isOriginTop ? 'top' : 'bottom';
    const yResetProperty = isOriginTop ? 'bottom' : 'top';

    const y = this.position.y + layoutSize[yPadding];
    // set in percentage or pixels
    style[yProperty] = this.getYValue(y);
    // reset other property
    style[yResetProperty] = '';

    this.css(style);
    this.emitEvent('layout', [this]);
  };

  proto.getXValue = function (x) {
    const isHorizontal = this.layout._getOption('horizontal');
    return this.layout.options.percentPosition && !isHorizontal
      ? `${(x / this.layout.size.width) * 100}%` : `${x}px`;
  };

  proto.getYValue = function (y) {
    const isHorizontal = this.layout._getOption('horizontal');
    return this.layout.options.percentPosition && isHorizontal
      ? `${(y / this.layout.size.height) * 100}%` : `${y}px`;
  };

  proto._transitionTo = function (x, y) {
    this.getPosition();
    // get current x & y from top/left
    const curX = this.position.x;
    const curY = this.position.y;

    const didNotMove = x == this.position.x && y == this.position.y;

    // save end position
    this.setPosition(x, y);

    // if did not move and not transitioning, just go to layout
    if (didNotMove && !this.isTransitioning) {
      this.layoutPosition();
      return;
    }

    const transX = x - curX;
    const transY = y - curY;
    const transitionStyle = {};
    transitionStyle.transform = this.getTranslate(transX, transY);

    this.transition({
      to: transitionStyle,
      onTransitionEnd: {
        transform: this.layoutPosition,
      },
      isCleaning: true,
    });
  };

  proto.getTranslate = function (x, y) {
  // flip cooridinates if origin on right or bottom
    const isOriginLeft = this.layout._getOption('originLeft');
    const isOriginTop = this.layout._getOption('originTop');
    x = isOriginLeft ? x : -x;
    y = isOriginTop ? y : -y;
    return `translate3d(${x}px, ${y}px, 0)`;
  };

  // non transition + transform support
  proto.goTo = function (x, y) {
    this.setPosition(x, y);
    this.layoutPosition();
  };

  proto.moveTo = proto._transitionTo;

  proto.setPosition = function (x, y) {
    this.position.x = parseFloat(x);
    this.position.y = parseFloat(y);
  };

  // ----- transition ----- //

  /**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

  // non transition, just trigger callback
  proto._nonTransition = function (args) {
    this.css(args.to);
    if (args.isCleaning) {
      this._removeStyles(args.to);
    }
    for (const prop in args.onTransitionEnd) {
      args.onTransitionEnd[prop].call(this);
    }
  };

  /**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
  proto.transition = function (args) {
  // redirect to nonTransition if no transition duration
    if (!parseFloat(this.layout.options.transitionDuration)) {
      this._nonTransition(args);
      return;
    }

    const _transition = this._transn;
    // keep track of onTransitionEnd callback by css property
    for (var prop in args.onTransitionEnd) {
      _transition.onEnd[prop] = args.onTransitionEnd[prop];
    }
    // keep track of properties that are transitioning
    for (prop in args.to) {
      _transition.ingProperties[prop] = true;
      // keep track of properties to clean up when transition is done
      if (args.isCleaning) {
        _transition.clean[prop] = true;
      }
    }

    // set from styles
    if (args.from) {
      this.css(args.from);
      // force redraw. http://blog.alexmaccaw.com/css-transitions
      let h = this.element.offsetHeight;
      // hack for JSHint to hush about unused var
      h = null;
    }
    // enable transition
    this.enableTransition(args.to);
    // set styles that are transitioning
    this.css(args.to);

    this.isTransitioning = true;
  };

  // dash before all cap letters, including first for
  // WebkitTransform => -webkit-transform
  function toDashedAll(str) {
    return str.replace(/([A-Z])/g, ($1) => `-${$1.toLowerCase()}`);
  }

  const transitionProps = `opacity,${toDashedAll(transformProperty)}`;

  proto.enableTransition = function (/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
    if (this.isTransitioning) {
      return;
    }

    // make `transition: foo, bar, baz` from style object
    // HACK un-comment this when enableTransition can work
    // while a transition is happening
    // var transitionValues = [];
    // for ( var prop in style ) {
    //   // dash-ify camelCased properties like WebkitTransition
    //   prop = vendorProperties[ prop ] || prop;
    //   transitionValues.push( toDashedAll( prop ) );
    // }
    // munge number to millisecond, to match stagger
    let duration = this.layout.options.transitionDuration;
    duration = typeof duration === 'number' ? `${duration}ms` : duration;
    // enable transition styles
    this.css({
      transitionProperty: transitionProps,
      transitionDuration: duration,
      transitionDelay: this.staggerDelay || 0,
    });
    // listen for transition end event
    this.element.addEventListener(transitionEndEvent, this, false);
  };

  // ----- events ----- //

  proto.onwebkitTransitionEnd = function (event) {
    this.ontransitionend(event);
  };

  proto.onotransitionend = function (event) {
    this.ontransitionend(event);
  };

  // properties that I munge to make my life easier
  const dashedVendorProperties = {
    '-webkit-transform': 'transform',
  };

  proto.ontransitionend = function (event) {
  // disregard bubbled events from children
    if (event.target !== this.element) {
      return;
    }
    const _transition = this._transn;
    // get property name of transitioned property, convert to prefix-free
    const propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;

    // remove property that has completed transitioning
    delete _transition.ingProperties[propertyName];
    // check if any properties are still transitioning
    if (isEmptyObj(_transition.ingProperties)) {
    // all properties have completed transitioning
      this.disableTransition();
    }
    // clean style
    if (propertyName in _transition.clean) {
    // clean up style
      this.element.style[event.propertyName] = '';
      delete _transition.clean[propertyName];
    }
    // trigger onTransitionEnd callback
    if (propertyName in _transition.onEnd) {
      const onTransitionEnd = _transition.onEnd[propertyName];
      onTransitionEnd.call(this);
      delete _transition.onEnd[propertyName];
    }

    this.emitEvent('transitionEnd', [this]);
  };

  proto.disableTransition = function () {
    this.removeTransitionStyles();
    this.element.removeEventListener(transitionEndEvent, this, false);
    this.isTransitioning = false;
  };

  /**
 * removes style property from element
 * @param {Object} style
* */
  proto._removeStyles = function (style) {
  // clean up transition styles
    const cleanStyle = {};
    for (const prop in style) {
      cleanStyle[prop] = '';
    }
    this.css(cleanStyle);
  };

  const cleanTransitionStyle = {
    transitionProperty: '',
    transitionDuration: '',
    transitionDelay: '',
  };

  proto.removeTransitionStyles = function () {
  // remove transition
    this.css(cleanTransitionStyle);
  };

  // ----- stagger ----- //

  proto.stagger = function (delay) {
    delay = isNaN(delay) ? 0 : delay;
    this.staggerDelay = `${delay}ms`;
  };

  // ----- show/hide/remove ----- //

  // remove element from DOM
  proto.removeElem = function () {
    this.element.parentNode.removeChild(this.element);
    // remove display: none
    this.css({ display: '' });
    this.emitEvent('remove', [this]);
  };

  proto.remove = function () {
  // just remove element if no transition support or no transition
    if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
      this.removeElem();
      return;
    }

    // start transition
    this.once('transitionEnd', function () {
      this.removeElem();
    });
    this.hide();
  };

  proto.reveal = function () {
    delete this.isHidden;
    // remove display: none
    this.css({ display: '' });

    const { options } = this.layout;

    const onTransitionEnd = {};
    const transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
    onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;

    this.transition({
      from: options.hiddenStyle,
      to: options.visibleStyle,
      isCleaning: true,
      onTransitionEnd,
    });
  };

  proto.onRevealTransitionEnd = function () {
  // check if still visible
  // during transition, item may have been hidden
    if (!this.isHidden) {
      this.emitEvent('reveal');
    }
  };

  /**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
  proto.getHideRevealTransitionEndProperty = function (styleProperty) {
    const optionStyle = this.layout.options[styleProperty];
    // use opacity
    if (optionStyle.opacity) {
      return 'opacity';
    }
    // get first property
    for (const prop in optionStyle) {
      return prop;
    }
  };

  proto.hide = function () {
  // set flag
    this.isHidden = true;
    // remove display: none
    this.css({ display: '' });

    const { options } = this.layout;

    const onTransitionEnd = {};
    const transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
    onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;

    this.transition({
      from: options.visibleStyle,
      to: options.hiddenStyle,
      // keep hidden stuff hidden
      isCleaning: true,
      onTransitionEnd,
    });
  };

  proto.onHideTransitionEnd = function () {
  // check if still hidden
  // during transition, item may have been un-hidden
    if (this.isHidden) {
      this.css({ display: 'none' });
      this.emitEvent('hide');
    }
  };

  proto.destroy = function () {
    this.css({
      position: '',
      left: '',
      right: '',
      top: '',
      bottom: '',
      transition: '',
      transform: '',
    });
  };

  return Item;
}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD - RequireJS
    define('outlayer/outlayer', [
      'ev-emitter/ev-emitter',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './item',
    ],
    (EvEmitter, getSize, utils, Item) => factory(window, EvEmitter, getSize, utils, Item));
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item'),
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item,
    );
  }
}(window, (window, EvEmitter, getSize, utils, Item) => {
  // ----- vars ----- //

  const { console } = window;
  const { jQuery } = window;
  const noop = function () {};

  // -------------------------- Outlayer -------------------------- //

  // globally unique identifiers
  let GUID = 0;
  // internal store of all Outlayer intances
  const instances = {};

  /**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
  function Outlayer(element, options) {
    const queryElement = utils.getQueryElement(element);
    if (!queryElement) {
      if (console) {
        console.error(`Bad element for ${this.constructor.namespace
        }: ${queryElement || element}`);
      }
      return;
    }
    this.element = queryElement;
    // add jQuery
    if (jQuery) {
      this.$element = jQuery(this.element);
    }

    // options
    this.options = utils.extend({}, this.constructor.defaults);
    this.option(options);

    // add id for Outlayer.getFromElement
    const id = ++GUID;
    this.element.outlayerGUID = id; // expando
    instances[id] = this; // associate via id

    // kick it off
    this._create();

    const isInitLayout = this._getOption('initLayout');
    if (isInitLayout) {
      this.layout();
    }
  }

  // settings are for internal use only
  Outlayer.namespace = 'outlayer';
  Outlayer.Item = Item;

  // default options
  Outlayer.defaults = {
    containerStyle: {
      position: 'relative',
    },
    initLayout: true,
    originLeft: true,
    originTop: true,
    resize: true,
    resizeContainer: true,
    // item options
    transitionDuration: '0.4s',
    hiddenStyle: {
      opacity: 0,
      transform: 'scale(0.001)',
    },
    visibleStyle: {
      opacity: 1,
      transform: 'scale(1)',
    },
  };

  const proto = Outlayer.prototype;
  // inherit EvEmitter
  utils.extend(proto, EvEmitter.prototype);

  /**
 * set options
 * @param {Object} opts
 */
  proto.option = function (opts) {
    utils.extend(this.options, opts);
  };

  /**
 * get backwards compatible option value, check old name
 */
  proto._getOption = function (option) {
    const oldOption = this.constructor.compatOptions[option];
    return oldOption && this.options[oldOption] !== undefined
      ? this.options[oldOption] : this.options[option];
  };

  Outlayer.compatOptions = {
  // currentName: oldName
    initLayout: 'isInitLayout',
    horizontal: 'isHorizontal',
    layoutInstant: 'isLayoutInstant',
    originLeft: 'isOriginLeft',
    originTop: 'isOriginTop',
    resize: 'isResizeBound',
    resizeContainer: 'isResizingContainer',
  };

  proto._create = function () {
  // get items from children
    this.reloadItems();
    // elements that affect layout, but are not laid out
    this.stamps = [];
    this.stamp(this.options.stamp);
    // set container style
    utils.extend(this.element.style, this.options.containerStyle);

    // bind resize method
    const canBindResize = this._getOption('resize');
    if (canBindResize) {
      this.bindResize();
    }
  };

  // goes through all children again and gets bricks in proper order
  proto.reloadItems = function () {
  // collection of item elements
    this.items = this._itemize(this.element.children);
  };

  /**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
  proto._itemize = function (elems) {
    const itemElems = this._filterFindItemElements(elems);
    const { Item } = this.constructor;

    // create new Outlayer Items for collection
    const items = [];
    for (let i = 0; i < itemElems.length; i++) {
      const elem = itemElems[i];
      const item = new Item(elem, this);
      items.push(item);
    }

    return items;
  };

  /**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
  proto._filterFindItemElements = function (elems) {
    return utils.filterFindElements(elems, this.options.itemSelector);
  };

  /**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
  proto.getItemElements = function () {
    return this.items.map((item) => item.element);
  };

  // ----- init & layout ----- //

  /**
 * lays out all items
 */
  proto.layout = function () {
    this._resetLayout();
    this._manageStamps();

    // don't animate first layout
    const layoutInstant = this._getOption('layoutInstant');
    const isInstant = layoutInstant !== undefined
      ? layoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, isInstant);

    // flag for initalized
    this._isLayoutInited = true;
  };

  // _init is alias for layout
  proto._init = proto.layout;

  /**
 * logic before any new layout
 */
  proto._resetLayout = function () {
    this.getSize();
  };

  proto.getSize = function () {
    this.size = getSize(this.element);
  };

  /**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
  proto._getMeasurement = function (measurement, size) {
    const option = this.options[measurement];
    let elem;
    if (!option) {
    // default to 0
      this[measurement] = 0;
    } else {
    // use option as an element
      if (typeof option === 'string') {
        elem = this.element.querySelector(option);
      } else if (option instanceof HTMLElement) {
        elem = option;
      }
      // use size of element, if element
      this[measurement] = elem ? getSize(elem)[size] : option;
    }
  };

  /**
 * layout a collection of item elements
 * @api public
 */
  proto.layoutItems = function (items, isInstant) {
    items = this._getItemsForLayout(items);

    this._layoutItems(items, isInstant);

    this._postLayout();
  };

  /**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
  proto._getItemsForLayout = function (items) {
    return items.filter((item) => !item.isIgnored);
  };

  /**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
  proto._layoutItems = function (items, isInstant) {
    this._emitCompleteOnItems('layout', items);

    if (!items || !items.length) {
    // no items, emit event with empty array
      return;
    }

    const queue = [];

    items.forEach(function (item) {
    // get x/y object from method
      const position = this._getItemLayoutPosition(item);
      // enqueue
      position.item = item;
      position.isInstant = isInstant || item.isLayoutInstant;
      queue.push(position);
    }, this);

    this._processLayoutQueue(queue);
  };

  /**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
  proto._getItemLayoutPosition = function (/* item */) {
    return {
      x: 0,
      y: 0,
    };
  };

  /**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
  proto._processLayoutQueue = function (queue) {
    this.updateStagger();
    queue.forEach(function (obj, i) {
      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
    }, this);
  };

  // set stagger from option in milliseconds number
  proto.updateStagger = function () {
    const { stagger } = this.options;
    if (stagger === null || stagger === undefined) {
      this.stagger = 0;
      return;
    }
    this.stagger = getMilliseconds(stagger);
    return this.stagger;
  };

  /**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
  proto._positionItem = function (item, x, y, isInstant, i) {
    if (isInstant) {
    // if not transition, just set CSS
      item.goTo(x, y);
    } else {
      item.stagger(i * this.stagger);
      item.moveTo(x, y);
    }
  };

  /**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
  proto._postLayout = function () {
    this.resizeContainer();
  };

  proto.resizeContainer = function () {
    const isResizingContainer = this._getOption('resizeContainer');
    if (!isResizingContainer) {
      return;
    }
    const size = this._getContainerSize();
    if (size) {
      this._setContainerMeasure(size.width, true);
      this._setContainerMeasure(size.height, false);
    }
  };

  /**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
  proto._getContainerSize = noop;

  /**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
  proto._setContainerMeasure = function (measure, isWidth) {
    if (measure === undefined) {
      return;
    }

    const elemSize = this.size;
    // add padding and border width if border box
    if (elemSize.isBorderBox) {
      measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight
      + elemSize.borderLeftWidth + elemSize.borderRightWidth
        : elemSize.paddingBottom + elemSize.paddingTop
      + elemSize.borderTopWidth + elemSize.borderBottomWidth;
    }

    measure = Math.max(measure, 0);
    this.element.style[isWidth ? 'width' : 'height'] = `${measure}px`;
  };

  /**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
  proto._emitCompleteOnItems = function (eventName, items) {
    const _this = this;
    function onComplete() {
      _this.dispatchEvent(`${eventName}Complete`, null, [items]);
    }

    const count = items.length;
    if (!items || !count) {
      onComplete();
      return;
    }

    let doneCount = 0;
    function tick() {
      doneCount++;
      if (doneCount == count) {
        onComplete();
      }
    }

    // bind callback
    items.forEach((item) => {
      item.once(eventName, tick);
    });
  };

  /**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
  proto.dispatchEvent = function (type, event, args) {
  // add original event to arguments
    const emitArgs = event ? [event].concat(args) : args;
    this.emitEvent(type, emitArgs);

    if (jQuery) {
    // set this.$element
      this.$element = this.$element || jQuery(this.element);
      if (event) {
      // create jQuery event
        const $event = jQuery.Event(event);
        $event.type = type;
        this.$element.trigger($event, args);
      } else {
      // just trigger with type if no event available
        this.$element.trigger(type, args);
      }
    }
  };

  // -------------------------- ignore & stamps -------------------------- //

  /**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
  proto.ignore = function (elem) {
    const item = this.getItem(elem);
    if (item) {
      item.isIgnored = true;
    }
  };

  /**
 * return item to layout collection
 * @param {Element} elem
 */
  proto.unignore = function (elem) {
    const item = this.getItem(elem);
    if (item) {
      delete item.isIgnored;
    }
  };

  /**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
  proto.stamp = function (elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }

    this.stamps = this.stamps.concat(elems);
    // ignore
    elems.forEach(this.ignore, this);
  };

  /**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
  proto.unstamp = function (elems) {
    elems = this._find(elems);
    if (!elems) {
      return;
    }

    elems.forEach(function (elem) {
    // filter out removed stamp elements
      utils.removeFrom(this.stamps, elem);
      this.unignore(elem);
    }, this);
  };

  /**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
  proto._find = function (elems) {
    if (!elems) {
      return;
    }
    // if string, use argument as selector string
    if (typeof elems === 'string') {
      elems = this.element.querySelectorAll(elems);
    }
    elems = utils.makeArray(elems);
    return elems;
  };

  proto._manageStamps = function () {
    if (!this.stamps || !this.stamps.length) {
      return;
    }

    this._getBoundingRect();

    this.stamps.forEach(this._manageStamp, this);
  };

  // update boundingLeft / Top
  proto._getBoundingRect = function () {
  // get bounding rect for container element
    const boundingRect = this.element.getBoundingClientRect();
    const { size } = this;
    this._boundingRect = {
      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
      right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
      bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth),
    };
  };

  /**
 * @param {Element} stamp
* */
  proto._manageStamp = noop;

  /**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
  proto._getElementOffset = function (elem) {
    const boundingRect = elem.getBoundingClientRect();
    const thisRect = this._boundingRect;
    const size = getSize(elem);
    const offset = {
      left: boundingRect.left - thisRect.left - size.marginLeft,
      top: boundingRect.top - thisRect.top - size.marginTop,
      right: thisRect.right - boundingRect.right - size.marginRight,
      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom,
    };
    return offset;
  };

  // -------------------------- resize -------------------------- //

  // enable event handlers for listeners
  // i.e. resize -> onresize
  proto.handleEvent = utils.handleEvent;

  /**
 * Bind layout to window resizing
 */
  proto.bindResize = function () {
    window.addEventListener('resize', this);
    this.isResizeBound = true;
  };

  /**
 * Unbind layout to window resizing
 */
  proto.unbindResize = function () {
    window.removeEventListener('resize', this);
    this.isResizeBound = false;
  };

  proto.onresize = function () {
    this.resize();
  };

  utils.debounceMethod(Outlayer, 'onresize', 100);

  proto.resize = function () {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
    if (!this.isResizeBound || !this.needsResizeLayout()) {
      return;
    }

    this.layout();
  };

  /**
 * check if layout is needed post layout
 * @returns Boolean
 */
  proto.needsResizeLayout = function () {
    const size = getSize(this.element);
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    const hasSizes = this.size && size;
    return hasSizes && size.innerWidth !== this.size.innerWidth;
  };

  // -------------------------- methods -------------------------- //

  /**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
* */
  proto.addItems = function (elems) {
    const items = this._itemize(elems);
    // add items to collection
    if (items.length) {
      this.items = this.items.concat(items);
    }
    return items;
  };

  /**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
  proto.appended = function (elems) {
    const items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    // layout and reveal just the new items
    this.layoutItems(items, true);
    this.reveal(items);
  };

  /**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
  proto.prepended = function (elems) {
    const items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    // add items to beginning of collection
    const previousItems = this.items.slice(0);
    this.items = items.concat(previousItems);
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // layout new stuff without transition
    this.layoutItems(items, true);
    this.reveal(items);
    // layout previous items
    this.layoutItems(previousItems);
  };

  /**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
  proto.reveal = function (items) {
    this._emitCompleteOnItems('reveal', items);
    if (!items || !items.length) {
      return;
    }
    const stagger = this.updateStagger();
    items.forEach((item, i) => {
      item.stagger(i * stagger);
      item.reveal();
    });
  };

  /**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
  proto.hide = function (items) {
    this._emitCompleteOnItems('hide', items);
    if (!items || !items.length) {
      return;
    }
    const stagger = this.updateStagger();
    items.forEach((item, i) => {
      item.stagger(i * stagger);
      item.hide();
    });
  };

  /**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
  proto.revealItemElements = function (elems) {
    const items = this.getItems(elems);
    this.reveal(items);
  };

  /**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
  proto.hideItemElements = function (elems) {
    const items = this.getItems(elems);
    this.hide(items);
  };

  /**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
  proto.getItem = function (elem) {
  // loop through items to get the one that matches
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.element == elem) {
      // return item
        return item;
      }
    }
  };

  /**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
  proto.getItems = function (elems) {
    elems = utils.makeArray(elems);
    const items = [];
    elems.forEach(function (elem) {
      const item = this.getItem(elem);
      if (item) {
        items.push(item);
      }
    }, this);

    return items;
  };

  /**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
  proto.remove = function (elems) {
    const removeItems = this.getItems(elems);

    this._emitCompleteOnItems('remove', removeItems);

    // bail if no items to remove
    if (!removeItems || !removeItems.length) {
      return;
    }

    removeItems.forEach(function (item) {
      item.remove();
      // remove item from collection
      utils.removeFrom(this.items, item);
    }, this);
  };

  // ----- destroy ----- //

  // remove and disable Outlayer instance
  proto.destroy = function () {
  // clean up dynamic styles
    const { style } = this.element;
    style.height = '';
    style.position = '';
    style.width = '';
    // destroy items
    this.items.forEach((item) => {
      item.destroy();
    });

    this.unbindResize();

    const id = this.element.outlayerGUID;
    delete instances[id]; // remove reference to instance by id
    delete this.element.outlayerGUID;
    // remove data for jQuery
    if (jQuery) {
      jQuery.removeData(this.element, this.constructor.namespace);
    }
  };

  // -------------------------- data -------------------------- //

  /**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
  Outlayer.data = function (elem) {
    elem = utils.getQueryElement(elem);
    const id = elem && elem.outlayerGUID;
    return id && instances[id];
  };

  // -------------------------- create Outlayer class -------------------------- //

  /**
 * create a layout class
 * @param {String} namespace
 */
  Outlayer.create = function (namespace, options) {
  // sub-class Outlayer
    const Layout = subclass(Outlayer);
    // apply new options and compatOptions
    Layout.defaults = utils.extend({}, Outlayer.defaults);
    utils.extend(Layout.defaults, options);
    Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);

    Layout.namespace = namespace;

    Layout.data = Outlayer.data;

    // sub-class Item
    Layout.Item = subclass(Item);

    // -------------------------- declarative -------------------------- //

    utils.htmlInit(Layout, namespace);

    // -------------------------- jQuery bridge -------------------------- //

    // make into jQuery plugin
    if (jQuery && jQuery.bridget) {
      jQuery.bridget(namespace, Layout);
    }

    return Layout;
  };

  function subclass(Parent) {
    function SubClass() {
      Parent.apply(this, arguments);
    }

    SubClass.prototype = Object.create(Parent.prototype);
    SubClass.prototype.constructor = SubClass;

    return SubClass;
  }

  // ----- helpers ----- //

  // how many milliseconds are in each unit
  const msUnits = {
    ms: 1,
    s: 1000,
  };

  // munge time-like parameter into millisecond number
  // '0.4s' -> 40
  function getMilliseconds(time) {
    if (typeof time === 'number') {
      return time;
    }
    const matches = time.match(/(^\d*\.?\d*)(\w*)/);
    let num = matches && matches[1];
    const unit = matches && matches[2];
    if (!num.length) {
      return 0;
    }
    num = parseFloat(num);
    const mult = msUnits[unit] || 1;
    return num * mult;
  }

  // ----- fin ----- //

  // back in global
  Outlayer.Item = Item;

  return Outlayer;
}));

/**
 * Isotope Item
* */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/item', [
      'outlayer/outlayer',
    ],
    factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer,
    );
  }
}(window, (Outlayer) => {
  // -------------------------- Item -------------------------- //

  // sub-class Outlayer Item
  function Item() {
    Outlayer.Item.apply(this, arguments);
  }

  const proto = Item.prototype = Object.create(Outlayer.Item.prototype);

  const { _create } = proto;
  proto._create = function () {
  // assign id, used for original-order sorting
    this.id = this.layout.itemGUID++;
    _create.call(this);
    this.sortData = {};
  };

  proto.updateSortData = function () {
    if (this.isIgnored) {
      return;
    }
    // default sorters
    this.sortData.id = this.id;
    // for backward compatibility
    this.sortData['original-order'] = this.id;
    this.sortData.random = Math.random();
    // go thru getSortData obj and apply the sorters
    const { getSortData } = this.layout.options;
    const sorters = this.layout._sorters;
    for (const key in getSortData) {
      const sorter = sorters[key];
      this.sortData[key] = sorter(this.element, this);
    }
  };

  const _destroy = proto.destroy;
  proto.destroy = function () {
  // call super
    _destroy.apply(this, arguments);
    // reset display, #741
    this.css({
      display: '',
    });
  };

  return Item;
}));

/**
 * Isotope LayoutMode
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/layout-mode', [
      'get-size/get-size',
      'outlayer/outlayer',
    ],
    factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer'),
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer,
    );
  }
}(window, (getSize, Outlayer) => {
  // layout mode class
  function LayoutMode(isotope) {
    this.isotope = isotope;
    // link properties
    if (isotope) {
      this.options = isotope.options[this.namespace];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  const proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method

   * and reference the Isotope instance as `this`
  * */
  const facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption',
  ];

  facadeMethods.forEach((methodName) => {
    proto[methodName] = function () {
      return Outlayer.prototype[methodName].apply(this.isotope, arguments);
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function () {
    // don't trigger if size did not change
    const size = getSize(this.isotope.element);
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    const hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  };

  proto.getColumnWidth = function () {
    this.getSegmentSize('column', 'Width');
  };

  proto.getRowHeight = function () {
    this.getSegmentSize('row', 'Height');
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  * */
  proto.getSegmentSize = function (segment, size) {
    const segmentName = segment + size;
    const outerSize = `outer${size}`;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement(segmentName, outerSize);
    // got rowHeight or columnWidth, we can chill
    if (this[segmentName]) {
      return;
    }
    // fall back to item of first element
    const firstItemSize = this.getFirstItemSize();
    this[segmentName] = firstItemSize && firstItemSize[outerSize]
      // or size of container
      || this.isotope.size[`inner${size}`];
  };

  proto.getFirstItemSize = function () {
    const firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize(firstItem.element);
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  };

  proto.getSize = function () {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function (namespace, options) {
    function Mode() {
      LayoutMode.apply(this, arguments);
    }

    Mode.prototype = Object.create(proto);
    Mode.prototype.constructor = Mode;

    // default options
    if (options) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[namespace] = Mode;

    return Mode;
  };

  return LayoutMode;
}));

/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('masonry-layout/masonry', [
      'outlayer/outlayer',
      'get-size/get-size',
    ],
    factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size'),
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize,
    );
  }
}(window, (Outlayer, getSize) => {
  // -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  const Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  const proto = Masonry.prototype;

  proto._resetLayout = function () {
    this.getSize();
    this._getMeasurement('columnWidth', 'outerWidth');
    this._getMeasurement('gutter', 'outerWidth');
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for (let i = 0; i < this.cols; i++) {
      this.colYs.push(0);
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function () {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if (!this.columnWidth) {
      const firstItem = this.items[0];
      const firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth
        // if first elem has no width, default to size of container
        || this.containerWidth;
    }

    const columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    const containerWidth = this.containerWidth + this.gutter;
    let cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    const excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    const mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[mathMethod](cols);
    this.cols = Math.max(cols, 1);
  };

  proto.getContainerWidth = function () {
    // container is parent if fit width
    const isFitWidth = this._getOption('fitWidth');
    const container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    const size = getSize(container);
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    // how many columns does this brick span
    const remainder = item.size.outerWidth % this.columnWidth;
    const mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    let colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
    colSpan = Math.min(colSpan, this.cols);
    // use horizontal or top column position
    const colPosMethod = this.options.horizontalOrder
      ? '_getHorizontalColPosition' : '_getTopColPosition';
    const colPosition = this[colPosMethod](colSpan, item);
    // position the brick
    const position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y,
    };
    // apply setHeight to necessary columns
    const setHeight = colPosition.y + item.size.outerHeight;
    const setMax = colSpan + colPosition.col;
    for (let i = colPosition.col; i < setMax; i++) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function (colSpan) {
    const colGroup = this._getTopColGroup(colSpan);
    // get the minimum Y value from the columns
    const minimumY = Math.min.apply(Math, colGroup);

    return {
      col: colGroup.indexOf(minimumY),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function (colSpan) {
    if (colSpan < 2) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    const colGroup = [];
    // how many different places could this brick fit horizontally
    const groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for (let i = 0; i < groupCount; i++) {
      colGroup[i] = this._getColGroupY(i, colSpan);
    }
    return colGroup;
  };

  proto._getColGroupY = function (col, colSpan) {
    if (colSpan < 2) {
      return this.colYs[col];
    }
    // make an array of colY values for that one group
    const groupColYs = this.colYs.slice(col, col + colSpan);
    // and get the max value of the array
    return Math.max.apply(Math, groupColYs);
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function (colSpan, item) {
    let col = this.horizontalColIndex % this.cols;
    const isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    const hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col,
      y: this._getColGroupY(col, colSpan),
    };
  };

  proto._manageStamp = function (stamp) {
    const stampSize = getSize(stamp);
    const offset = this._getElementOffset(stamp);
    // get the columns that this stamp affects
    const isOriginLeft = this._getOption('originLeft');
    const firstX = isOriginLeft ? offset.left : offset.right;
    const lastX = firstX + stampSize.outerWidth;
    let firstCol = Math.floor(firstX / this.columnWidth);
    firstCol = Math.max(0, firstCol);
    let lastCol = Math.floor(lastX / this.columnWidth);
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min(this.cols - 1, lastCol);
    // set colYs to bottom of the stamp

    const isOriginTop = this._getOption('originTop');
    const stampMaxY = (isOriginTop ? offset.top : offset.bottom)
      + stampSize.outerHeight;
    for (let i = firstCol; i <= lastCol; i++) {
      this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
    }
  };

  proto._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    const size = {
      height: this.maxY,
    };

    if (this._getOption('fitWidth')) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function () {
    let unusedCols = 0;
    // count unused columns
    let i = this.cols;
    while (--i) {
      if (this.colYs[i] !== 0) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return (this.cols - unusedCols) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function () {
    const previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;
}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/layout-modes/masonry', [
      '../layout-mode',
      'masonry-layout/masonry',
    ],
    factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout'),
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Masonry,
    );
  }
}(window, (LayoutMode, Masonry) => {
  // -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  const MasonryMode = LayoutMode.create('masonry');

  const proto = MasonryMode.prototype;

  const keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true,
  };

  // inherit Masonry prototype
  for (const method in Masonry.prototype) {
    // do not inherit mode methods
    if (!keepModeMethods[method]) {
      proto[method] = Masonry.prototype[method];
    }
  }

  const { measureColumns } = proto;
  proto.measureColumns = function () {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call(this);
  };

  // point to mode options for fitWidth
  const { _getOption } = proto;
  proto._getOption = function (option) {
    if (option == 'fitWidth') {
      return this.options.isFitWidth !== undefined
        ? this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply(this.isotope, arguments);
  };

  return MasonryMode;
}));

/**
 * fitRows layout mode
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/layout-modes/fit-rows', [
      '../layout-mode',
    ],
    factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
    );
  }
}(window, (LayoutMode) => {
  const FitRows = LayoutMode.create('fitRows');

  const proto = FitRows.prototype;

  proto._resetLayout = function () {
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement('gutter', 'outerWidth');
  };

  proto._getItemLayoutPosition = function (item) {
    item.getSize();

    const itemWidth = item.size.outerWidth + this.gutter;
    // if this element cannot fit in the current row
    const containerWidth = this.isotope.size.innerWidth + this.gutter;
    if (this.x !== 0 && itemWidth + this.x > containerWidth) {
      this.x = 0;
      this.y = this.maxY;
    }

    const position = {
      x: this.x,
      y: this.y,
    };

    this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
    this.x += itemWidth;

    return position;
  };

  proto._getContainerSize = function () {
    return { height: this.maxY };
  };

  return FitRows;
}));

/**
 * vertical layout mode
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('isotope-layout/js/layout-modes/vertical', [
      '../layout-mode',
    ],
    factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
    );
  }
}(window, (LayoutMode) => {
  const Vertical = LayoutMode.create('vertical', {
    horizontalAlignment: 0,
  });

  const proto = Vertical.prototype;

  proto._resetLayout = function () {
    this.y = 0;
  };

  proto._getItemLayoutPosition = function (item) {
    item.getSize();
    const x = (this.isotope.size.innerWidth - item.size.outerWidth)
    * this.options.horizontalAlignment;
    const { y } = this;
    this.y += item.size.outerHeight;
    return { x, y };
  };

  proto._getContainerSize = function () {
    return { height: this.y };
  };

  return Vertical;
}));

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([
      'outlayer/outlayer',
      'get-size/get-size',
      'desandro-matches-selector/matches-selector',
      'fizzy-ui-utils/utils',
      'isotope-layout/js/item',
      'isotope-layout/js/layout-mode',
      // include default layout modes
      'isotope-layout/js/layout-modes/masonry',
      'isotope-layout/js/layout-modes/fit-rows',
      'isotope-layout/js/layout-modes/vertical',
    ],
    (Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) => factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode));
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope-layout/js/item'),
      require('isotope-layout/js/layout-mode'),
      // include default layout modes
      require('isotope-layout/js/layout-modes/masonry'),
      require('isotope-layout/js/layout-modes/fit-rows'),
      require('isotope-layout/js/layout-modes/vertical'),
    );
  } else {
    // browser global
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode,
    );
  }
}(window, (window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode) => {
  // -------------------------- vars -------------------------- //

  const { jQuery } = window;

  // -------------------------- helpers -------------------------- //

  const trim = String.prototype.trim
    ? function (str) {
      return str.trim();
    }
    : function (str) {
      return str.replace(/^\s+|\s+$/g, '');
    };

  // -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  const Isotope = Outlayer.create('isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true,
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  const proto = Isotope.prototype;

  proto._create = function () {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call(this);

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = ['original-order'];
    // create from registered layout modes
    for (const name in LayoutMode.modes) {
      this._initLayoutMode(name);
    }
  };

  proto.reloadItems = function () {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call(this);
  };

  proto._itemize = function () {
    const items = Outlayer.prototype._itemize.apply(this, arguments);
    // assign ID for original-order
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData(items);
    return items;
  };

  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function (name) {
    const Mode = LayoutMode.modes[name];
    // set mode options
    // HACK extend initial options, back-fill in default options
    const initialOpts = this.options[name] || {};
    this.options[name] = Mode.options
      ? utils.extend(Mode.options, initialOpts) : initialOpts;
    // init layout mode instance
    this.modes[name] = new Mode(this);
  };

  proto.layout = function () {
    // if first time doing layout, do all magic
    if (!this._isLayoutInited && this._getOption('initLayout')) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function () {
    // don't animate first layout
    const isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems(this.filteredItems, isInstant);

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function (opts) {
    // set any options pass
    this.option(opts);
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    const filtered = this._filter(this.items);
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if (this._isInstant) {
      this._noTransition(this._hideReveal, [filtered]);
    } else {
      this._hideReveal(filtered);
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function (filtered) {
    this.reveal(filtered.needReveal);
    this.hide(filtered.needHide);
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function () {
    const isLayoutInstant = this._getOption('layoutInstant');
    const isInstant = isLayoutInstant !== undefined ? isLayoutInstant
      : !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function () {
    // listen for 3 events to trigger arrangeComplete
    let isLayoutComplete; let isHideComplete; let
      isRevealComplete;
    const _this = this;
    function arrangeParallelCallback() {
      if (isLayoutComplete && isHideComplete && isRevealComplete) {
        _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
      }
    }
    this.once('layoutComplete', () => {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once('hideComplete', () => {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once('revealComplete', () => {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function (items) {
    let { filter } = this.options;
    filter = filter || '*';
    const matches = [];
    const hiddenMatched = [];
    const visibleUnmatched = [];

    const test = this._getFilterTest(filter);

    // test each item
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.isIgnored) {
        continue;
      }
      // add item to either matched or unmatched group
      const isMatched = test(item);
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if (isMatched) {
        matches.push(item);
      }
      // add to additional group if item needs to be hidden or revealed
      if (isMatched && item.isHidden) {
        hiddenMatched.push(item);
      } else if (!isMatched && !item.isHidden) {
        visibleUnmatched.push(item);
      }
    }

    // return collections of items to be manipulated
    return {
      matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched,
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function (filter) {
    if (jQuery && this.options.isJQueryFiltering) {
      // use jQuery
      return function (item) {
        return jQuery(item.element).is(filter);
      };
    }
    if (typeof filter === 'function') {
      // use filter as function
      return function (item) {
        return filter(item.element);
      };
    }
    // default, use filter as selector string
    return function (item) {
      return matchesSelector(item.element, filter);
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function (elems) {
    // get items
    let items;
    if (elems) {
      elems = utils.makeArray(elems);
      items = this.getItems(elems);
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData(items);
  };

  proto._getSorters = function () {
    const { getSortData } = this.options;
    for (const key in getSortData) {
      const sorter = getSortData[key];
      this._sorters[key] = mungeSorter(sorter);
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function (items) {
    // do not update if no items
    const len = items && items.length;

    for (let i = 0; len && i < len; i++) {
      const item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = (function () {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter(sorter) {
      // if not a string, return function or whatever it is
      if (typeof sorter !== 'string') {
        return sorter;
      }
      // parse the sorter string
      const args = trim(sorter).split(' ');
      const query = args[0];
      // check if query looks like [an-attribute]
      const attrMatch = query.match(/^\[(.+)\]$/);
      const attr = attrMatch && attrMatch[1];
      const getValue = getValueGetter(attr, query);
      // use second argument as a parser
      const parser = Isotope.sortDataParsers[args[1]];
      // parse the value, if there was a parser
      sorter = parser ? function (elem) {
        return elem && parser(getValue(elem));
      }
      // otherwise just return value
        : function (elem) {
          return elem && getValue(elem);
        };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter(attr, query) {
      // if query looks like [foo-bar], get attribute
      if (attr) {
        return function getAttribute(elem) {
          return elem.getAttribute(attr);
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText(elem) {
        const child = elem.querySelector(query);
        return child && child.textContent;
      };
    }

    return mungeSorter;
  }());

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    parseInt(val) {
      return parseInt(val, 10);
    },
    parseFloat(val) {
      return parseFloat(val);
    },
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function () {
    if (!this.options.sortBy) {
      return;
    }
    // keep track of sortBy History
    const sortBys = utils.makeArray(this.options.sortBy);
    if (!this._getIsSameSortBy(sortBys)) {
      // concat all sortBy and sortHistory, add to front, oldest goes in last
      this.sortHistory = sortBys.concat(this.sortHistory);
    }
    // sort magic
    const itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
    this.filteredItems.sort(itemSorter);
  };

  // check if sortBys is same as start of sortHistory
  proto._getIsSameSortBy = function (sortBys) {
    for (let i = 0; i < sortBys.length; i++) {
      if (sortBys[i] != this.sortHistory[i]) {
        return false;
      }
    }
    return true;
  };

  // returns a function used for sorting
  function getItemSorter(sortBys, sortAsc) {
    return function sorter(itemA, itemB) {
      // cycle through all sortKeys
      for (let i = 0; i < sortBys.length; i++) {
        const sortBy = sortBys[i];
        const a = itemA.sortData[sortBy];
        const b = itemB.sortData[sortBy];
        if (a > b || a < b) {
          // if sortAsc is an object, use the value given the sortBy key
          const isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
          const direction = isAscending ? 1 : -1;
          return (a > b ? 1 : -1) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function () {
    const { layoutMode } = this.options;
    const mode = this.modes[layoutMode];
    if (!mode) {
      // TODO console.error
      throw new Error(`No layout mode: ${layoutMode}`);
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[layoutMode];
    return mode;
  };

  proto._resetLayout = function () {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call(this);
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function (item) {
    return this._mode()._getItemLayoutPosition(item);
  };

  proto._manageStamp = function (stamp) {
    this._mode()._manageStamp(stamp);
  };

  proto._getContainerSize = function () {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function (elems) {
    const items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    // filter, layout, reveal new items
    const filteredItems = this._filterRevealAdded(items);
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat(filteredItems);
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function (elems) {
    const items = this._itemize(elems);
    if (!items.length) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    const filteredItems = this._filterRevealAdded(items);
    // layout previous items
    this.layoutItems(this.filteredItems);
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat(this.filteredItems);
    this.items = items.concat(this.items);
  };

  proto._filterRevealAdded = function (items) {
    const filtered = this._filter(items);
    this.hide(filtered.needHide);
    // reveal all new items
    this.reveal(filtered.matches);
    // layout new items, no transition
    this.layoutItems(filtered.matches, true);
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function (elems) {
    const items = this.addItems(elems);
    if (!items.length) {
      return;
    }
    // append item elements
    let i; let
      item;
    const len = items.length;
    for (i = 0; i < len; i++) {
      item = items[i];
      this.element.appendChild(item.element);
    }
    // filter new stuff
    const filteredInsertItems = this._filter(items).matches;
    // set flag
    for (i = 0; i < len; i++) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for (i = 0; i < len; i++) {
      delete items[i].isLayoutInstant;
    }
    this.reveal(filteredInsertItems);
  };

  const _remove = proto.remove;
  proto.remove = function (elems) {
    elems = utils.makeArray(elems);
    const removeItems = this.getItems(elems);
    // do regular thing
    _remove.call(this, elems);
    // bail if no items to remove
    const len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for (let i = 0; len && i < len; i++) {
      const item = removeItems[i];
      // remove item from collection
      utils.removeFrom(this.filteredItems, item);
    }
  };

  proto.shuffle = function () {
    // update random sortData
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function (fn, args) {
    // save transitionDuration before disabling
    const { transitionDuration } = this.options;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    const returnValue = fn.apply(this, args);
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function () {
    return this.filteredItems.map((item) => item.element);
  };

  // -----  ----- //

  return Isotope;
}));

/*------------------------------------------------------------------*/
/*	 WAYPOINTS
/*------------------------------------------------------------------*/

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  function t(o) { if (!o) throw new Error('No options passed to Waypoint constructor'); if (!o.element) throw new Error('No element option passed to Waypoint constructor'); if (!o.handler) throw new Error('No handler option passed to Waypoint constructor'); this.key = `waypoint-${e}`, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? 'horizontal' : 'vertical', this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1; } var e = 0; var i = {}; t.prototype.queueTrigger = function (t) { this.group.queueTrigger(this, t); }, t.prototype.trigger = function (t) { this.enabled && this.callback && this.callback.apply(this, t); }, t.prototype.destroy = function () { this.context.remove(this), this.group.remove(this), delete i[this.key]; }, t.prototype.disable = function () { return this.enabled = !1, this; }, t.prototype.enable = function () { return this.context.refresh(), this.enabled = !0, this; }, t.prototype.next = function () { return this.group.next(this); }, t.prototype.previous = function () { return this.group.previous(this); }, t.invokeAll = function (t) { const e = []; for (const o in i)e.push(i[o]); for (let n = 0, r = e.length; r > n; n++)e[n][t](); }, t.destroyAll = function () { t.invokeAll('destroy'); }, t.disableAll = function () { t.invokeAll('disable'); }, t.enableAll = function () { t.Context.refreshAll(); for (const e in i)i[e].enabled = !0; return this; }, t.refreshAll = function () { t.Context.refreshAll(); }, t.viewportHeight = function () { return window.innerHeight || document.documentElement.clientHeight; }, t.viewportWidth = function () { return document.documentElement.clientWidth; }, t.adapters = [], t.defaults = {
    context: window, continuous: !0, enabled: !0, group: 'default', horizontal: !1, offset: 0,
  }, t.offsetAliases = { 'bottom-in-view': function () { return this.context.innerHeight() - this.adapter.outerHeight(); }, 'right-in-view': function () { return this.context.innerWidth() - this.adapter.outerWidth(); } }, window.Waypoint = t;
}()), (function () {
  function t(t) { window.setTimeout(t, 1e3 / 60); } function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = `waypoint-context-${i}`, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler(); } var i = 0; var o = {}; var n = window.Waypoint; const r = window.onload; e.prototype.add = function (t) { const e = t.options.horizontal ? 'horizontal' : 'vertical'; this.waypoints[e][t.key] = t, this.refresh(); }, e.prototype.checkEmpty = function () { const t = this.Adapter.isEmptyObject(this.waypoints.horizontal); const e = this.Adapter.isEmptyObject(this.waypoints.vertical); const i = this.element == this.element.window; t && e && !i && (this.adapter.off('.waypoints'), delete o[this.key]); }, e.prototype.createThrottledResizeHandler = function () { function t() { e.handleResize(), e.didResize = !1; } var e = this; this.adapter.on('resize.waypoints', () => { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)); }); }, e.prototype.createThrottledScrollHandler = function () { function t() { e.handleScroll(), e.didScroll = !1; } var e = this; this.adapter.on('scroll.waypoints', () => { (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t)); }); }, e.prototype.handleResize = function () { n.Context.refreshAll(); }, e.prototype.handleScroll = function () {
    const t = {}; const e = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left',
      },
      vertical: {
        newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up',
      },
    }; for (const i in e) { const o = e[i]; const n = o.newScroll > o.oldScroll; const r = n ? o.forward : o.backward; for (const s in this.waypoints[i]) { const a = this.waypoints[i][s]; if (a.triggerPoint !== null) { const l = o.oldScroll < a.triggerPoint; const h = o.newScroll >= a.triggerPoint; const p = l && h; const u = !l && !h; (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group); } } } for (const c in t)t[c].flushTriggers(); this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
  }, e.prototype.innerHeight = function () { return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight(); }, e.prototype.remove = function (t) { delete this.waypoints[t.axis][t.key], this.checkEmpty(); }, e.prototype.innerWidth = function () { return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth(); }, e.prototype.destroy = function () { const t = []; for (const e in this.waypoints) for (const i in this.waypoints[e])t.push(this.waypoints[e][i]); for (let o = 0, n = t.length; n > o; o++)t[o].destroy(); }, e.prototype.refresh = function () {
    let t; const e = this.element == this.element.window; const i = e ? void 0 : this.adapter.offset(); const o = {}; this.handleScroll(), t = {
      horizontal: {
        contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left', offsetProp: 'left',
      },
      vertical: {
        contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up', offsetProp: 'top',
      },
    }; for (const r in t) { const s = t[r]; for (const a in this.waypoints[r]) { var l; var h; var p; var u; var c; const d = this.waypoints[r][a]; let f = d.options.offset; const w = d.triggerPoint; let y = 0; const g = w == null; d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), typeof f === 'function' ? f = f.apply(d) : typeof f === 'string' && (f = parseFloat(f), d.options.offset.indexOf('%') > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group); } } return n.requestAnimationFrame(() => { for (const t in o)o[t].flushTriggers(); }), this;
  }, e.findOrCreateByElement = function (t) { return e.findByElement(t) || new e(t); }, e.refreshAll = function () { for (const t in o)o[t].refresh(); }, e.findByElement = function (t) { return o[t.waypointContextKey]; }, window.onload = function () { r && r(), e.refreshAll(); }, n.requestAnimationFrame = function (e) { const i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t; i.call(window, e); }, n.Context = e;
}()), (function () {
  function t(t, e) { return t.triggerPoint - e.triggerPoint; } function e(t, e) { return e.triggerPoint - t.triggerPoint; } function i(t) { this.name = t.name, this.axis = t.axis, this.id = `${this.name}-${this.axis}`, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this; } var o = { vertical: {}, horizontal: {} }; const n = window.Waypoint; i.prototype.add = function (t) { this.waypoints.push(t); }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [], down: [], left: [], right: [],
    };
  }, i.prototype.flushTriggers = function () { for (const i in this.triggerQueues) { const o = this.triggerQueues[i]; const n = i === 'up' || i === 'left'; o.sort(n ? e : t); for (let r = 0, s = o.length; s > r; r += 1) { const a = o[r]; (a.options.continuous || r === o.length - 1) && a.trigger([i]); } } this.clearTriggerQueues(); }, i.prototype.next = function (e) { this.waypoints.sort(t); const i = n.Adapter.inArray(e, this.waypoints); const o = i === this.waypoints.length - 1; return o ? null : this.waypoints[i + 1]; }, i.prototype.previous = function (e) { this.waypoints.sort(t); const i = n.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null; }, i.prototype.queueTrigger = function (t, e) { this.triggerQueues[e].push(t); }, i.prototype.remove = function (t) { const e = n.Adapter.inArray(t, this.waypoints); e > -1 && this.waypoints.splice(e, 1); }, i.prototype.first = function () { return this.waypoints[0]; }, i.prototype.last = function () { return this.waypoints[this.waypoints.length - 1]; }, i.findOrCreate = function (t) { return o[t.axis][t.name] || new i(t); }, n.Group = i;
}()), (function () {
  function t(t) { this.$element = e(t); } var e = window.jQuery; const i = window.Waypoint; e.each(['innerHeight', 'innerWidth', 'off', 'offset', 'on', 'outerHeight', 'outerWidth', 'scrollLeft', 'scrollTop'], (e, i) => { t.prototype[i] = function () { const t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t); }; }), e.each(['extend', 'inArray', 'isEmptyObject'], (i, o) => { t[o] = e[o]; }), i.adapters.push({ name: 'jquery', Adapter: t }), i.Adapter = t;
}()), (function () {
  function t(t) { return function () { const i = []; let o = arguments[0]; return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () { const n = t.extend({}, o, { element: this }); typeof n.context === 'string' && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)); }), i; }; } var e = window.Waypoint; window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
}());

/*------------------------------------------------------------------*/
/*	02) NICESCROLL
/*------------------------------------------------------------------*/

/* jquery.nicescroll 3.2.0 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */
(function (e) {
  let y = !1; let D = !1; let J = 5E3; let K = 2E3; let x = 0; const L = (function () { var e = document.getElementsByTagName('script'); var e = e[e.length - 1].src.split('?')[0]; return e.split('/').length > 0 ? `${e.split('/').slice(0, -1).join('/')}/` : ''; }()); Array.prototype.forEach || (Array.prototype.forEach = function (e, c) { for (let h = 0, l = this.length; h < l; ++h)e.call(c, this[h], h, this); }); let v = window.requestAnimationFrame || !1; let w = window.cancelAnimationFrame || !1; ['ms', 'moz', 'webkit', 'o'].forEach((e) => {
    v || (v = window[`${e}RequestAnimationFrame`]); w || (w = window[`${e}CancelAnimationFrame`] || window[`${e}CancelRequestAnimationFrame`]);
  }); const z = window.MutationObserver || window.WebKitMutationObserver || !1; const F = {
    zindex: 'auto',
    cursoropacitymin: 0,
    cursoropacitymax: 1,
    cursorcolor: '#424242',
    cursorwidth: '5px',
    cursorborder: '1px solid #fff',
    cursorborderradius: '5px',
    scrollspeed: 60,
    mousescrollstep: 24,
    touchbehavior: !1,
    hwacceleration: !0,
    usetransition: !0,
    boxzoom: !1,
    dblclickzoom: !0,
    gesturezoom: !0,
    grabcursorenabled: !0,
    autohidemode: !0,
    background: '',
    iframeautoresize: !0,
    cursorminheight: 32,
    preservenativescrolling: !0,
    railoffset: !1,
    bouncescroll: !0,
    spacebarenabled: !0,
    railpadding: {
      top: 0, right: 0, left: 0, bottom: 0,
    },
    disableoutline: !0,
    horizrailenabled: !0,
    railalign: 'right',
    railvalign: 'bottom',
    enabletranslate3d: !0,
    enablemousewheel: !0,
    enablekeyboard: !0,
    smoothscroll: !0,
    sensitiverail: !0,
    enablemouselockapi: !0,
    cursorfixedheight: !1,
    directionlockdeadzone: 6,
    hidecursordelay: 400,
    nativeparentscrolling: !0,
    enablescrollonselection: !0,
    overflowx: !0,
    overflowy: !0,
    cursordragspeed: 0.3,
    rtlmode: !1,
    cursordragontouch: !1,
  };
  let E = !1; const M = function () {
    if (E) return E; const e = document.createElement('DIV'); const c = { haspointerlock: 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document }; c.isopera = 'opera' in window; c.isopera12 = c.isopera && 'getUserMedia' in navigator; c.isie = 'all' in document && 'attachEvent' in e && !c.isopera; c.isieold = c.isie && !('msInterpolationMode' in e.style); c.isie7 = c.isie && !c.isieold && (!('documentMode' in document) || document.documentMode == 7); c.isie8 = c.isie && 'documentMode' in document
&& document.documentMode == 8; c.isie9 = c.isie && 'performance' in window && document.documentMode >= 9; c.isie10 = c.isie && 'performance' in window && document.documentMode >= 10; c.isie9mobile = /iemobile.9/i.test(navigator.userAgent); c.isie9mobile && (c.isie9 = !1); c.isie7mobile = !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent); c.ismozilla = 'MozAppearance' in e.style; c.iswebkit = 'WebkitAppearance' in e.style; c.ischrome = 'chrome' in window; c.ischrome22 = c.ischrome && c.haspointerlock; c.ischrome26 = c.ischrome && 'transition'
in e.style; c.cantouch = 'ontouchstart' in document.documentElement || 'ontouchstart' in window; c.hasmstouch = window.navigator.msPointerEnabled || !1; c.ismac = /^mac$/i.test(navigator.platform); c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform); c.isios4 = c.isios && !('seal' in Object); c.isandroid = /android/i.test(navigator.userAgent); c.trstyle = !1; c.hastransform = !1; c.hastranslate3d = !1; c.transitionstyle = !1; c.hastransition = !1; c.transitionend = !1; for (var h = ['transform', 'msTransform', 'webkitTransform', 'MozTransform',
        'OTransform'], l = 0; l < h.length; l++) if (typeof e.style[h[l]] !== 'undefined') { c.trstyle = h[l]; break; }c.hastransform = !1 != c.trstyle; c.hastransform && (e.style[c.trstyle] = 'translate3d(1px,2px,3px)', c.hastranslate3d = /translate3d/.test(e.style[c.trstyle])); c.transitionstyle = !1; c.prefixstyle = ''; c.transitionend = !1; for (var h = 'transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition'.split(' '), n = ' -webkit- -moz- -o- -o -ms- -khtml-'.split(' '), t = 'transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd'.split(' '),
      l = 0; l < h.length; l++) if (h[l] in e.style) { c.transitionstyle = h[l]; c.prefixstyle = n[l]; c.transitionend = t[l]; break; }c.ischrome26 && (c.prefixstyle = n[1]); c.hastransition = c.transitionstyle; a: { h = ['-moz-grab', '-webkit-grab', 'grab']; if (c.ischrome && !c.ischrome22 || c.isie)h = []; for (l = 0; l < h.length; l++) if (n = h[l], e.style.cursor = n, e.style.cursor == n) { h = n; break a; }h = 'url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize'; }c.cursorgrabvalue = h; c.hasmousecapture = 'setCapture' in e; c.hasMutationObserver = !1 !== z; return E = c;
  }; const N = function (k, c) {
    function h() { let d = b.win; if ('zIndex' in d) return d.zIndex(); for (;d.length > 0 && d[0].nodeType != 9;) { const c = d.css('zIndex'); if (!isNaN(c) && c != 0) return parseInt(c); d = d.parent(); } return !1; } function l(d, c, g) { c = d.css(c); d = parseFloat(c); return isNaN(d) ? (d = u[c] || 0, g = d == 3 ? g ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && d && (d += 1), g ? d : 0) : d; } function n(d, c, g, e) {
      b._bind(d, c, (b) => {
        b = b || window.event; const e = {
          original: b,
          target: b.target || b.srcElement,
          type: 'wheel',
          deltaMode: b.type == 'MozMousePixelScroll' ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault() { b.preventDefault ? b.preventDefault() : b.returnValue = !1; return !1; },
          stopImmediatePropagation() { b.stopImmediatePropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0; },
        }; c == 'mousewheel' ? (e.deltaY = -0.025 * b.wheelDelta, b.wheelDeltaX && (e.deltaX = -0.025 * b.wheelDeltaX)) : e.deltaY = b.detail; return g.call(d, e);
      }, e);
    } function t(d, c, g) {
      let e; let f; d.deltaMode == 0 ? (e = -Math.floor(d.deltaX * (b.opt.mousescrollstep / 54)), f = -Math.floor(d.deltaY
* (b.opt.mousescrollstep / 54))) : d.deltaMode == 1 && (e = -Math.floor(d.deltaX * b.opt.mousescrollstep), f = -Math.floor(d.deltaY * b.opt.mousescrollstep)); c && (e == 0 && f) && (e = f, f = 0); e && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += e, b.debounced('mousewheelx', () => { const d = b.lastdeltax; b.lastdeltax = 0; b.rail.drag || b.doScrollLeftBy(d); }, 120)); if (f) {
        if (b.opt.nativeparentscrolling && g && !b.ispage && !b.zoomactive) if (f < 0) { if (b.getScrollTop() >= b.page.maxh) return !0; } else if (b.getScrollTop() <= 0) return !0; b.scrollmom && b.scrollmom.stop();
        b.lastdeltay += f; b.debounced('mousewheely', () => { const d = b.lastdeltay; b.lastdeltay = 0; b.rail.drag || b.doScrollBy(d); }, 120);
      }d.stopImmediatePropagation(); return d.preventDefault();
    } var b = this; this.version = '3.4.0'; this.name = 'nicescroll'; this.me = c; this.opt = { doc: e('body'), win: !1 }; e.extend(this.opt, F); this.opt.snapbackspeed = 80; if (k) for (const q in b.opt) typeof k[q] !== 'undefined' && (b.opt[q] = k[q]); this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || '' : ''; this.ispage = /BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName
      : this.doc[0].nodeName); this.haswrapper = !1 !== b.opt.win; this.win = b.opt.win || (this.ispage ? e(window) : this.doc); this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win; this.body = e('body'); this.iframe = this.isfixed = this.viewport = !1; this.isiframe = this.doc[0].nodeName == 'IFRAME' && this.win[0].nodeName == 'IFRAME'; this.istextarea = this.win[0].nodeName == 'TEXTAREA'; this.forcescreen = !1; this.canshowonmouseevent = b.opt.autohidemode != 'scroll'; this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1; this.scroll = { x: 0, y: 0 }; this.scrollratio = { x: 0, y: 0 }; this.cursorheight = 20; this.scrollvaluemax = 0; this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.checkrtlmode = !1; do this.id = `ascrail${K++}`; while (document.getElementById(this.id)); this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1; this.visibility = !0; this.hidden = this.locked = !1; this.cursoractive = !0; this.overflowx = b.opt.overflowx; this.overflowy = b.opt.overflowy; this.nativescrollingarea = !1; this.checkarea = 0; this.events = []; this.saved = {}; this.delaylist = {}; this.synclist = {}; this.lastdeltay = this.lastdeltax = 0; this.detected = M(); const f = e.extend({}, this.detected); this.ishwscroll = (this.canhwscroll = f.hastransform && b.opt.hwacceleration) && b.haswrapper; this.istouchcapable = !1; f.cantouch && (f.ischrome && !f.isios && !f.isandroid) && (this.istouchcapable = !0, f.cantouch = !1); f.cantouch && (f.ismozilla && !f.isios) && (this.istouchcapable = !0, f.cantouch = !1); b.opt.enablemouselockapi || (f.hasmousecapture = !1, f.haspointerlock = !1); this.delayed = function (d, c, g, e) { const f = b.delaylist[d]; const h = (new Date()).getTime(); if (!e && f && f.tt) return !1; f && f.tt && clearTimeout(f.tt); if (f && f.last + g > h && !f.tt)b.delaylist[d] = { last: h + g, tt: setTimeout(() => { b.delaylist[d].tt = 0; c.call(); }, g) }; else if (!f || !f.tt)b.delaylist[d] = { last: h, tt: 0 }, setTimeout(() => { c.call(); }, 0); }; this.debounced = function (d,
      c, g) { const f = b.delaylist[d]; (new Date()).getTime(); b.delaylist[d] = c; f || setTimeout(() => { const c = b.delaylist[d]; b.delaylist[d] = !1; c.call(); }, g); }; this.synched = function (d, c) { b.synclist[d] = c; (function () { b.onsync || (v(() => { b.onsync = !1; for (d in b.synclist) { const c = b.synclist[d]; c && c.call(b); b.synclist[d] = !1; } }), b.onsync = !0); }()); return d; }; this.unsynched = function (d) { b.synclist[d] && (b.synclist[d] = !1); }; this.css = function (d, c) { for (const g in c)b.saved.css.push([d, g, d.css(g)]), d.css(g, c[g]); }; this.scrollTop = function (d) {
      return typeof d
=== 'undefined' ? b.getScrollTop() : b.setScrollTop(d);
    }; this.scrollLeft = function (d) { return typeof d === 'undefined' ? b.getScrollLeft() : b.setScrollLeft(d); }; BezierClass = function (b, c, g, f, e, h, l) { this.st = b; this.ed = c; this.spd = g; this.p1 = f || 0; this.p2 = e || 1; this.p3 = h || 0; this.p4 = l || 1; this.ts = (new Date()).getTime(); this.df = this.ed - this.st; }; BezierClass.prototype = {
      B2(b) { return 3 * b * b * (1 - b); },
      B3(b) { return 3 * b * (1 - b) * (1 - b); },
      B4(b) { return (1 - b) * (1 - b) * (1 - b); },
      getNow() {
        const b = 1 - ((new Date()).getTime() - this.ts)
/ this.spd; const c = this.B2(b) + this.B3(b) + this.B4(b); return b < 0 ? this.ed : this.st + Math.round(this.df * c);
      },
      update(b, c) { this.st = this.getNow(); this.ed = b; this.spd = c; this.ts = (new Date()).getTime(); this.df = this.ed - this.st; return this; },
    }; if (this.ishwscroll) {
      this.doc.translate = {
        x: 0, y: 0, tx: '0px', ty: '0px',
      }; f.hastranslate3d && f.isios && this.doc.css('-webkit-backface-visibility', 'hidden'); const r = function () {
        const d = b.doc.css(f.trstyle); return d && d.substr(0, 6) == 'matrix' ? d.replace(/^.*\((.*)\)$/g, '$1').replace(/px/g, '').split(/, +/)
          : !1;
      }; this.getScrollTop = function (d) { if (!d) { if (d = r()) return d.length == 16 ? -d[13] : -d[5]; if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow(); } return b.doc.translate.y; }; this.getScrollLeft = function (d) { if (!d) { if (d = r()) return d.length == 16 ? -d[12] : -d[4]; if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow(); } return b.doc.translate.x; }; this.notifyScrollEvent = document.createEvent ? function (b) { const c = document.createEvent('UIEvents'); c.initUIEvent('scroll', !1, !0, window, 1); b.dispatchEvent(c); }
        : document.fireEvent ? function (b) { const c = document.createEventObject(); b.fireEvent('onscroll'); c.cancelBubble = !0; } : function (b, c) {}; f.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function (d, c) { b.doc.translate.y = d; b.doc.translate.ty = `${-1 * d}px`; b.doc.css(f.trstyle, `translate3d(${b.doc.translate.tx},${b.doc.translate.ty},0px)`); c || b.notifyScrollEvent(b.win[0]); }, this.setScrollLeft = function (d, c) {
        b.doc.translate.x = d; b.doc.translate.tx = `${-1 * d}px`; b.doc.css(f.trstyle, `translate3d(${b.doc.translate.tx
        },${b.doc.translate.ty},0px)`); c || b.notifyScrollEvent(b.win[0]);
      }) : (this.setScrollTop = function (d, c) { b.doc.translate.y = d; b.doc.translate.ty = `${-1 * d}px`; b.doc.css(f.trstyle, `translate(${b.doc.translate.tx},${b.doc.translate.ty})`); c || b.notifyScrollEvent(b.win[0]); }, this.setScrollLeft = function (d, c) { b.doc.translate.x = d; b.doc.translate.tx = `${-1 * d}px`; b.doc.css(f.trstyle, `translate(${b.doc.translate.tx},${b.doc.translate.ty})`); c || b.notifyScrollEvent(b.win[0]); });
    } else {
      this.getScrollTop = function () { return b.docscroll.scrollTop(); },
      this.setScrollTop = function (d) { return b.docscroll.scrollTop(d); }, this.getScrollLeft = function () { return b.docscroll.scrollLeft(); }, this.setScrollLeft = function (d) { return b.docscroll.scrollLeft(d); };
    } this.getTarget = function (b) { return !b ? !1 : b.target ? b.target : b.srcElement ? b.srcElement : !1; }; this.hasParent = function (b, c) { if (!b) return !1; for (var g = b.target || b.srcElement || b || !1; g && g.id != c;)g = g.parentNode || !1; return !1 !== g; }; var u = { thin: 1, medium: 3, thick: 5 }; this.getOffset = function () {
      if (b.isfixed) {
        return {
          top: parseFloat(b.win.css('top')),
          left: parseFloat(b.win.css('left')),
        };
      } if (!b.viewport) return b.win.offset(); const d = b.win.offset(); const c = b.viewport.offset(); return { top: d.top - c.top + b.viewport.scrollTop(), left: d.left - c.left + b.viewport.scrollLeft() };
    }; this.updateScrollBar = function (d) {
      if (b.ishwscroll)b.rail.css({ height: b.win.innerHeight() }), b.railh && b.railh.css({ width: b.win.innerWidth() }); else {
        const c = b.getOffset(); var g = c.top; var f = c.left; var g = g + l(b.win, 'border-top-width', !0); b.win.outerWidth(); b.win.innerWidth(); var f = f + (b.rail.align ? b.win.outerWidth()
- l(b.win, 'border-right-width') - b.rail.width : l(b.win, 'border-left-width')); const e = b.opt.railoffset; e && (e.top && (g += e.top), b.rail.align && e.left && (f += e.left)); b.locked || b.rail.css({ top: g, left: f, height: d ? d.h : b.win.innerHeight() }); b.zoom && b.zoom.css({ top: g + 1, left: b.rail.align == 1 ? f - 20 : f + b.rail.width + 4 }); b.railh && !b.locked && (g = c.top, f = c.left, d = b.railh.align ? g + l(b.win, 'border-top-width', !0) + b.win.innerHeight() - b.railh.height : g + l(b.win, 'border-top-width', !0), f += l(b.win, 'border-left-width'), b.railh.css({
          top: d,
          left: f,
          width: b.railh.width,
        }));
      }
    }; this.doRailClick = function (d, c, g) { let f; b.locked || (b.cancelEvent(d), c ? (c = g ? b.doScrollLeft : b.doScrollTop, f = g ? (d.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (d.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, c(f)) : (c = g ? b.doScrollLeftBy : b.doScrollBy, f = g ? b.scroll.x : b.scroll.y, d = g ? d.pageX - b.railh.offset().left : d.pageY - b.rail.offset().top, g = g ? b.view.w : b.view.h, f >= d ? c(g) : c(-g))); }; b.hasanimationframe = v; b.hascancelanimationframe = w; b.hasanimationframe ? b.hascancelanimationframe
|| (w = function () { b.cancelAnimationFrame = !0; }) : (v = function (b) { return setTimeout(b, 15 - Math.floor(+new Date() / 1E3) % 16); }, w = clearInterval); this.init = function () {
      b.saved.css = []; if (f.isie7mobile) return !0; f.hasmstouch && b.css(b.ispage ? e('html') : b.win, { '-ms-touch-action': 'none' }); b.zindex = 'auto'; b.zindex = !b.ispage && b.opt.zindex == 'auto' ? h() || 'auto' : b.opt.zindex; !b.ispage && b.zindex != 'auto' && b.zindex > x && (x = b.zindex); b.isie && (b.zindex == 0 && b.opt.zindex == 'auto') && (b.zindex = 'auto'); if (!b.ispage || !f.cantouch && !f.isieold
&& !f.isie9mobile) {
        let d = b.docscroll; b.ispage && (d = b.haswrapper ? b.win : b.doc); f.isie9mobile || b.css(d, { 'overflow-y': 'hidden' }); b.ispage && f.isie7 && (b.doc[0].nodeName == 'BODY' ? b.css(e('html'), { 'overflow-y': 'hidden' }) : b.doc[0].nodeName == 'HTML' && b.css(e('body'), { 'overflow-y': 'hidden' })); f.isios && (!b.ispage && !b.haswrapper) && b.css(e('body'), { '-webkit-overflow-scrolling': 'touch' }); let c = e(document.createElement('div')); c.css({
          position: 'relative',
          top: 0,
          float: 'right',
          width: b.opt.cursorwidth,
          height: '0px',
          'background-color': b.opt.cursorcolor,
          border: b.opt.cursorborder,
          'background-clip': 'padding-box',
          '-webkit-border-radius': b.opt.cursorborderradius,
          '-moz-border-radius': b.opt.cursorborderradius,
          'border-radius': b.opt.cursorborderradius,
        }); c.hborder = parseFloat(c.outerHeight() - c.innerHeight()); b.cursor = c; var g = e(document.createElement('div')); g.attr('id', b.id); g.addClass('nicescroll-rails'); let l; let k; const n = ['left', 'right']; let G; for (G in n)k = n[G], (l = b.opt.railpadding[k]) ? g.css(`padding-${k}`, `${l}px`) : b.opt.railpadding[k] = 0; g.append(c); g.width = Math.max(parseFloat(b.opt.cursorwidth),
          c.outerWidth()) + b.opt.railpadding.left + b.opt.railpadding.right; g.css({
          width: `${g.width}px`, zIndex: b.zindex, background: b.opt.background, cursor: 'default',
        }); g.visibility = !0; g.scrollable = !0; g.align = b.opt.railalign == 'left' ? 0 : 1; b.rail = g; c = b.rail.drag = !1; b.opt.boxzoom && (!b.ispage && !f.isieold) && (c = document.createElement('div'), b.bind(c, 'click', b.doZoom), b.zoom = e(c), b.zoom.css({
          cursor: 'pointer', 'z-index': b.zindex, backgroundImage: `url(${L}zoomico.png)`, height: 18, width: 18, backgroundPosition: '0px 0px',
        }), b.opt.dblclickzoom
&& b.bind(b.win, 'dblclick', b.doZoom), f.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function (d) { d.scale > 1.5 && b.doZoomIn(d); d.scale < 0.8 && b.doZoomOut(d); return b.cancelEvent(d); }, b.bind(b.win, 'gestureend', b.ongesturezoom))); b.railh = !1; if (b.opt.horizrailenabled) {
          b.css(d, { 'overflow-x': 'hidden' }); c = e(document.createElement('div')); c.css({
            position: 'relative',
            top: 0,
            height: b.opt.cursorwidth,
            width: '0px',
            'background-color': b.opt.cursorcolor,
            border: b.opt.cursorborder,
            'background-clip': 'padding-box',
            '-webkit-border-radius': b.opt.cursorborderradius,
            '-moz-border-radius': b.opt.cursorborderradius,
            'border-radius': b.opt.cursorborderradius,
          }); c.wborder = parseFloat(c.outerWidth() - c.innerWidth()); b.cursorh = c; var m = e(document.createElement('div')); m.attr('id', `${b.id}-hr`); m.addClass('nicescroll-rails'); m.height = Math.max(parseFloat(b.opt.cursorwidth), c.outerHeight()); m.css({ height: `${m.height}px`, zIndex: b.zindex, background: b.opt.background }); m.append(c); m.visibility = !0; m.scrollable = !0; m.align = b.opt.railvalign == 'top' ? 0 : 1; b.railh = m; b.railh.drag = !1;
        }b.ispage
          ? (g.css({ position: 'fixed', top: '0px', height: '100%' }), g.align ? g.css({ right: '0px' }) : g.css({ left: '0px' }), b.body.append(g), b.railh && (m.css({ position: 'fixed', left: '0px', width: '100%' }), m.align ? m.css({ bottom: '0px' }) : m.css({ top: '0px' }), b.body.append(m))) : (b.ishwscroll ? (b.win.css('position') == 'static' && b.css(b.win, { position: 'relative' }), d = b.win[0].nodeName == 'HTML' ? b.body : b.win, b.zoom && (b.zoom.css({
            position: 'absolute', top: 1, right: 0, 'margin-right': g.width + 4,
          }), d.append(b.zoom)), g.css({ position: 'absolute', top: 0 }),
          g.align ? g.css({ right: 0 }) : g.css({ left: 0 }), d.append(g), m && (m.css({ position: 'absolute', left: 0, bottom: 0 }), m.align ? m.css({ bottom: 0 }) : m.css({ top: 0 }), d.append(m))) : (b.isfixed = b.win.css('position') == 'fixed', d = b.isfixed ? 'fixed' : 'absolute', b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, !1 == /relative|absolute/.test(b.viewport.css('position')) && b.css(b.viewport, { position: 'relative' })), g.css({ position: d }), b.zoom && b.zoom.css({ position: d }), b.updateScrollBar(), b.body.append(g), b.zoom
&& b.body.append(b.zoom), b.railh && (m.css({ position: d }), b.body.append(m))), f.isios && b.css(b.win, { '-webkit-tap-highlight-color': 'rgba(0,0,0,0)', '-webkit-touch-callout': 'none' }), f.isie && b.opt.disableoutline && b.win.attr('hideFocus', 'true'), f.iswebkit && b.opt.disableoutline && b.win.css({ outline: 'none' })); !1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({ opacity: b.opt.cursoropacitymax }), b.railh && b.railh.css({ opacity: b.opt.cursoropacitymax })) : !0 === b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), f.isie8
&& (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : b.opt.autohidemode == 'scroll' ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : b.opt.autohidemode == 'cursor' ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : b.opt.autohidemode == 'hidden' && (b.autohidedom = !1, b.hide(), b.locked = !1); if (f.isie9mobile) {
          b.scrollmom = new H(b), b.onmangotouch = function (d) {
            d = b.getScrollTop(); const c = b.getScrollLeft(); if (d == b.scrollmom.lastscrolly && c == b.scrollmom.lastscrollx) return !0; let g = d - b.mangotouch.sy; const f = c - b.mangotouch.sx; if (Math.round(Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2))) != 0) {
              const p = g < 0 ? -1 : 1; const e = f < 0 ? -1 : 1; const h = +new Date(); b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy); h - b.mangotouch.tm > 80 || b.mangotouch.dry != p || b.mangotouch.drx != e ? (b.scrollmom.stop(), b.scrollmom.reset(c, d), b.mangotouch.sy = d, b.mangotouch.ly = d, b.mangotouch.sx = c, b.mangotouch.lx = c, b.mangotouch.dry = p, b.mangotouch.drx = e, b.mangotouch.tm = h) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - f, b.mangotouch.sy - g), b.mangotouch.tm = h, g = Math.max(Math.abs(b.mangotouch.ly - d), Math.abs(b.mangotouch.lx - c)), b.mangotouch.ly = d, b.mangotouch.lx = c, g > 2 && (b.mangotouch.lazy = setTimeout(() => { b.mangotouch.lazy = !1; b.mangotouch.dry = 0; b.mangotouch.drx = 0; b.mangotouch.tm = 0; b.scrollmom.doMomentum(30); }, 100)));
            }
          }, g = b.getScrollTop(), m = b.getScrollLeft(), b.mangotouch = {
            sy: g, ly: g, dry: 0, sx: m, lx: m, drx: 0, lazy: !1, tm: 0,
          }, b.bind(b.docscroll,
            'scroll', b.onmangotouch);
        } else {
          if (f.cantouch || b.istouchcapable || b.opt.touchbehavior || f.hasmstouch) {
            b.scrollmom = new H(b); b.ontouchstart = function (d) {
              if (d.pointerType && d.pointerType != 2) return !1; if (!b.locked) {
                if (f.hasmstouch) for (var c = d.target ? d.target : !1; c;) { var g = e(c).getNiceScroll(); if (g.length > 0 && g[0].me == b.me) break; if (g.length > 0) return !1; if (c.nodeName == 'DIV' && c.id == b.id) break; c = c.parentNode ? c.parentNode : !1; }b.cancelScroll(); if ((c = b.getTarget(d)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return b.stopPropagation(d);
                !('clientX' in d) && 'changedTouches' in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY); b.forcescreen && (g = d, d = { original: d.original ? d.original : d }, d.clientX = g.screenX, d.clientY = g.screenY); b.rail.drag = {
                  x: d.clientX, y: d.clientY, sx: b.scroll.x, sy: b.scroll.y, st: b.getScrollTop(), sl: b.getScrollLeft(), pt: 2, dl: !1,
                }; if (b.ispage || !b.opt.directionlockdeadzone)b.rail.drag.dl = 'f'; else {
                  var g = e(window).width(); var p = e(window).height(); const h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth);
                  const l = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); var p = Math.max(0, l - p); var g = Math.max(0, h - g); b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? p > 0 ? 'v' : !1 : b.rail.scrollable && !b.railh.scrollable ? g > 0 ? 'h' : !1 : !1; b.rail.drag.ck || (b.rail.drag.dl = 'f');
                }b.opt.touchbehavior && (b.isiframe && f.isie) && (g = b.win.position(), b.rail.drag.x += g.left, b.rail.drag.y += g.top); b.hasmoving = !1; b.lastmouseup = !1; b.scrollmom.reset(d.clientX, d.clientY); if (!f.cantouch && !this.istouchcapable && !f.hasmstouch) {
                  if (!c
|| !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !b.ispage && f.hasmousecapture && c.setCapture(), b.cancelEvent(d); /SUBMIT|CANCEL|BUTTON/i.test(e(c).attr('type')) && (pc = { tg: c, click: !1 }, b.preventclick = pc);
                }
              }
            }; b.ontouchend = function (d) { if (d.pointerType && d.pointerType != 2) return !1; if (b.rail.drag && b.rail.drag.pt == 2 && (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.hasmoving = !1, b.lastmouseup = !0, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), !f.cantouch))) return b.cancelEvent(d); }; const q = b.opt.touchbehavior
&& b.isiframe && !f.hasmousecapture; b.ontouchmove = function (d, c) {
              if (d.pointerType && d.pointerType != 2) return !1; if (b.rail.drag && b.rail.drag.pt == 2) {
                if (f.cantouch && typeof d.original === 'undefined') return !0; b.hasmoving = !0; b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick); d = e.extend({ original: d }, d); 'changedTouches' in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY); if (b.forcescreen) {
                  var g = d; d = {
                    original: d.original
                      ? d.original : d,
                  }; d.clientX = g.screenX; d.clientY = g.screenY;
                }g = ofy = 0; if (q && !c) { var p = b.win.position(); var g = -p.left; ofy = -p.top; } let h = d.clientY + ofy; var p = h - b.rail.drag.y; let l = d.clientX + g; var k = l - b.rail.drag.x; let s = b.rail.drag.st - p; b.ishwscroll && b.opt.bouncescroll ? s < 0 ? s = Math.round(s / 2) : s > b.page.maxh && (s = b.page.maxh + Math.round((s - b.page.maxh) / 2)) : (s < 0 && (h = s = 0), s > b.page.maxh && (s = b.page.maxh, h = 0)); if (b.railh && b.railh.scrollable) {
                  var m = b.rail.drag.sl - k; b.ishwscroll && b.opt.bouncescroll ? m < 0 ? m = Math.round(m / 2) : m > b.page.maxw && (m = b.page.maxw
+ Math.round((m - b.page.maxw) / 2)) : (m < 0 && (l = m = 0), m > b.page.maxw && (m = b.page.maxw, l = 0));
                }g = !1; if (b.rail.drag.dl)g = !0, b.rail.drag.dl == 'v' ? m = b.rail.drag.sl : b.rail.drag.dl == 'h' && (s = b.rail.drag.st); else { var p = Math.abs(p); var k = Math.abs(k); const n = b.opt.directionlockdeadzone; if (b.rail.drag.ck == 'v') { if (p > n && k <= 0.3 * p) return b.rail.drag = !1, !0; k > n && (b.rail.drag.dl = 'f', e('body').scrollTop(e('body').scrollTop())); } else if (b.rail.drag.ck == 'h') { if (k > n && p <= 0.3 * az) return b.rail.drag = !1, !0; p > n && (b.rail.drag.dl = 'f', e('body').scrollLeft(e('body').scrollLeft())); } }b.synched('touchmove',
                  () => { b.rail.drag && b.rail.drag.pt == 2 && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(s), b.scrollmom.update(l, h), b.railh && b.railh.scrollable ? (b.setScrollLeft(m), b.showCursor(s, m)) : b.showCursor(s), f.isie10 && document.selection.clear()); }); f.ischrome && b.istouchcapable && (g = !1); if (g) return b.cancelEvent(d);
              }
            };
          }b.onmousedown = function (d, c) {
            if (!(b.rail.drag && b.rail.drag.pt != 1)) {
              if (b.locked) return b.cancelEvent(d); b.cancelScroll(); b.rail.drag = {
                x: d.clientX,
                y: d.clientY,
                sx: b.scroll.x,
                sy: b.scroll.y,
                pt: 1,
                hr: !!c,
              }; const g = b.getTarget(d); !b.ispage && f.hasmousecapture && g.setCapture(); b.isiframe && !f.hasmousecapture && (b.saved.csspointerevents = b.doc.css('pointer-events'), b.css(b.doc, { 'pointer-events': 'none' })); return b.cancelEvent(d);
            }
          }; b.onmouseup = function (d) { if (b.rail.drag && (f.hasmousecapture && document.releaseCapture(), b.isiframe && !f.hasmousecapture && b.doc.css('pointer-events', b.saved.csspointerevents), b.rail.drag.pt == 1)) return b.rail.drag = !1, b.cancelEvent(d); }; b.onmousemove = function (d) {
            if (b.rail.drag
&& b.rail.drag.pt == 1) {
              if (f.ischrome && d.which == 0) return b.onmouseup(d); b.cursorfreezed = !0; if (b.rail.drag.hr) { b.scroll.x = b.rail.drag.sx + (d.clientX - b.rail.drag.x); b.scroll.x < 0 && (b.scroll.x = 0); var c = b.scrollvaluemaxw; b.scroll.x > c && (b.scroll.x = c); } else b.scroll.y = b.rail.drag.sy + (d.clientY - b.rail.drag.y), b.scroll.y < 0 && (b.scroll.y = 0), c = b.scrollvaluemax, b.scroll.y > c && (b.scroll.y = c); b.synched('mousemove', () => {
                b.rail.drag && b.rail.drag.pt == 1 && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x
* b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed));
              }); return b.cancelEvent(d);
            }
          }; if (f.cantouch || b.opt.touchbehavior) {
            b.onpreventclick = function (d) { if (b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(d); }, b.bind(b.win, 'mousedown', b.ontouchstart), b.onclick = f.isios ? !1 : function (d) { return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(d)) : !0; }, b.opt.grabcursorenabled && f.cursorgrabvalue && (b.css(b.ispage
              ? b.doc : b.win, { cursor: f.cursorgrabvalue }), b.css(b.rail, { cursor: f.cursorgrabvalue }));
          } else {
            var r = function (d) { if (b.selectiondrag) { if (d) { const c = b.win.outerHeight(); d = d.pageY - b.selectiondrag.top; d > 0 && d < c && (d = 0); d >= c && (d -= c); b.selectiondrag.df = d; }b.selectiondrag.df != 0 && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced('doselectionscroll', () => { r(); }, 50)); } }; b.hasTextSelected = 'getSelection' in document ? function () { return document.getSelection().rangeCount > 0; } : 'selection' in document ? function () {
              return document.selection.type
!= 'None';
            } : function () { return !1; }; b.onselectionstart = function (d) { b.ispage || (b.selectiondrag = b.win.offset()); }; b.onselectionend = function (d) { b.selectiondrag = !1; }; b.onselectiondrag = function (d) { b.selectiondrag && b.hasTextSelected() && b.debounced('selectionscroll', () => { r(d); }, 250); };
          }f.hasmstouch && (b.css(b.rail, { '-ms-touch-action': 'none' }), b.css(b.cursor, { '-ms-touch-action': 'none' }), b.bind(b.win, 'MSPointerDown', b.ontouchstart), b.bind(document, 'MSPointerUp', b.ontouchend), b.bind(document, 'MSPointerMove',
            b.ontouchmove), b.bind(b.cursor, 'MSGestureHold', (b) => { b.preventDefault(); }), b.bind(b.cursor, 'contextmenu', (b) => { b.preventDefault(); })); this.istouchcapable && (b.bind(b.win, 'touchstart', b.ontouchstart), b.bind(document, 'touchend', b.ontouchend), b.bind(document, 'touchcancel', b.ontouchend), b.bind(document, 'touchmove', b.ontouchmove)); b.bind(b.cursor, 'mousedown', b.onmousedown); b.bind(b.cursor, 'mouseup', b.onmouseup); b.railh && (b.bind(b.cursorh, 'mousedown', (d) => { b.onmousedown(d, !0); }), b.bind(b.cursorh,
            'mouseup', (d) => { if (!(b.rail.drag && b.rail.drag.pt == 2)) return b.rail.drag = !1, b.hasmoving = !1, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), b.cancelEvent(d); })); if (b.opt.cursordragontouch || !f.cantouch && !b.opt.touchbehavior) {
            b.rail.css({ cursor: 'default' }), b.railh && b.railh.css({ cursor: 'default' }), b.jqbind(b.rail, 'mouseenter', () => { b.canshowonmouseevent && b.showCursor(); b.rail.active = !0; }), b.jqbind(b.rail, 'mouseleave', () => { b.rail.active = !1; b.rail.drag || b.hideCursor(); }), b.opt.sensitiverail
&& (b.bind(b.rail, 'click', (d) => { b.doRailClick(d, !1, !1); }), b.bind(b.rail, 'dblclick', (d) => { b.doRailClick(d, !0, !1); }), b.bind(b.cursor, 'click', (d) => { b.cancelEvent(d); }), b.bind(b.cursor, 'dblclick', (d) => { b.cancelEvent(d); })), b.railh && (b.jqbind(b.railh, 'mouseenter', () => { b.canshowonmouseevent && b.showCursor(); b.rail.active = !0; }), b.jqbind(b.railh, 'mouseleave', () => { b.rail.active = !1; b.rail.drag || b.hideCursor(); }), b.opt.sensitiverail && (b.bind(b.railh, 'click', (d) => {
              b.doRailClick(d,
                !1, !0);
            }), b.bind(b.railh, 'dblclick', (d) => { b.doRailClick(d, !0, !0); }), b.bind(b.cursorh, 'click', (d) => { b.cancelEvent(d); }), b.bind(b.cursorh, 'dblclick', (d) => { b.cancelEvent(d); })));
          }!f.cantouch && !b.opt.touchbehavior ? (b.bind(f.hasmousecapture ? b.win : document, 'mouseup', b.onmouseup), b.bind(document, 'mousemove', b.onmousemove), b.onclick && b.bind(document, 'click', b.onclick), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], 'mousedown', b.onselectionstart), b.bind(document, 'mouseup', b.onselectionend),
          b.bind(b.cursor, 'mouseup', b.onselectionend), b.cursorh && b.bind(b.cursorh, 'mouseup', b.onselectionend), b.bind(document, 'mousemove', b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, 'mouseenter', () => { b.canshowonmouseevent && b.showCursor(); b.rail.active = !0; }), b.jqbind(b.zoom, 'mouseleave', () => { b.rail.active = !1; b.rail.drag || b.hideCursor(); }))) : (b.bind(f.hasmousecapture ? b.win : document, 'mouseup', b.ontouchend), b.bind(document, 'mousemove', b.ontouchmove), b.onclick && b.bind(document, 'click', b.onclick), b.opt.cursordragontouch
&& (b.bind(b.cursor, 'mousedown', b.onmousedown), b.bind(b.cursor, 'mousemove', b.onmousemove), b.cursorh && b.bind(b.cursorh, 'mousedown', b.onmousedown), b.cursorh && b.bind(b.cursorh, 'mousemove', b.onmousemove))); b.opt.enablemousewheel && (b.isiframe || b.bind(f.isie && b.ispage ? document : b.docscroll, 'mousewheel', b.onmousewheel), b.bind(b.rail, 'mousewheel', b.onmousewheel), b.railh && b.bind(b.railh, 'mousewheel', b.onmousewheelhr)); !b.ispage && (!f.cantouch && !/HTML|BODY/.test(b.win[0].nodeName)) && (b.win.attr('tabindex') || b.win.attr({ tabindex: J++ }),
          b.jqbind(b.win, 'focus', (d) => { y = b.getTarget(d).id || !0; b.hasfocus = !0; b.canshowonmouseevent && b.noticeCursor(); }), b.jqbind(b.win, 'blur', (d) => { y = !1; b.hasfocus = !1; }), b.jqbind(b.win, 'mouseenter', (d) => { D = b.getTarget(d).id || !0; b.hasmousefocus = !0; b.canshowonmouseevent && b.noticeCursor(); }), b.jqbind(b.win, 'mouseleave', () => { D = !1; b.hasmousefocus = !1; }));
        }b.onkeypress = function (d) {
          if (b.locked && b.page.maxh == 0) return !0; d = d || window.e; let c = b.getTarget(d); if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)
&& (!c.getAttribute('type') && !c.type || !/submit|button|cancel/i.tp)) return !0; if (b.hasfocus || b.hasmousefocus && !y || b.ispage && !y && !D) {
            c = d.keyCode; if (b.locked && c != 27) return b.cancelEvent(d); const g = d.ctrlKey || !1; const p = d.shiftKey || !1; let f = !1; switch (c) {
              case 38: case 63233: b.doScrollBy(72); f = !0; break; case 40: case 63235: b.doScrollBy(-72); f = !0; break; case 37: case 63232: b.railh && (g ? b.doScrollLeft(0) : b.doScrollLeftBy(72), f = !0); break; case 39: case 63234: b.railh && (g ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), f = !0); break;
              case 33: case 63276: b.doScrollBy(b.view.h); f = !0; break; case 34: case 63277: b.doScrollBy(-b.view.h); f = !0; break; case 36: case 63273: b.railh && g ? b.doScrollPos(0, 0) : b.doScrollTo(0); f = !0; break; case 35: case 63275: b.railh && g ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh); f = !0; break; case 32: b.opt.spacebarenabled && (p ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), f = !0); break; case 27: b.zoomactive && (b.doZoom(), f = !0);
            } if (f) return b.cancelEvent(d);
          }
        }; b.opt.enablekeyboard && b.bind(document, f.isopera
&& !f.isopera12 ? 'keypress' : 'keydown', b.onkeypress); b.bind(window, 'resize', b.lazyResize); b.bind(window, 'orientationchange', b.lazyResize); b.bind(window, 'load', b.lazyResize); if (f.ischrome && !b.ispage && !b.haswrapper) { const t = b.win.attr('style'); var g = parseFloat(b.win.css('width')) + 1; b.win.css('width', g); b.synched('chromefix', () => { b.win.attr('style', t); }); }b.onAttributeChange = function (d) { b.lazyResize(250); }; !b.ispage && !b.haswrapper && (!1 !== z ? (b.observer = new z((d) => { d.forEach(b.onAttributeChange); }), b.observer.observe(b.win[0],
          {
            childList: !0, characterData: !1, attributes: !0, subtree: !1,
          }), b.observerremover = new z((d) => { d.forEach((d) => { if (d.removedNodes.length > 0) for (const c in d.removedNodes) if (d.removedNodes[c] == b.win[0]) return b.remove(); }); }), b.observerremover.observe(b.win[0].parentNode, {
          childList: !0, characterData: !1, attributes: !1, subtree: !1,
        })) : (b.bind(b.win, f.isie && !f.isie9 ? 'propertychange' : 'DOMAttrModified', b.onAttributeChange), f.isie9 && b.win[0].attachEvent('onpropertychange', b.onAttributeChange), b.bind(b.win, 'DOMNodeRemoved',
          (d) => { d.target == b.win[0] && b.remove(); }))); !b.ispage && b.opt.boxzoom && b.bind(window, 'resize', b.resizeZoom); b.istextarea && b.bind(b.win, 'mouseup', b.lazyResize); b.checkrtlmode = !0; b.lazyResize(30);
      } if (this.doc[0].nodeName == 'IFRAME') {
        const I = function (d) {
          b.iframexd = !1; try { var c = 'contentDocument' in this ? this.contentDocument : this.contentWindow.document; } catch (g) { b.iframexd = !0, c = !1; } if (b.iframexd) return 'console' in window && console.log('NiceScroll error: policy restriced iframe'), !0; b.forcescreen = !0; b.isiframe
&& (b.iframe = { doc: e(c), html: b.doc.contents().find('html')[0], body: b.doc.contents().find('body')[0] }, b.getContentSize = function () { return { w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth), h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight) }; }, b.docscroll = e(b.iframe.body)); !f.isios && (b.opt.iframeautoresize && !b.isiframe) && (b.win.scrollTop(0), b.doc.height(''), d = Math.max(c.getElementsByTagName('html')[0].scrollHeight, c.body.scrollHeight), b.doc.height(d)); b.lazyResize(30); f.isie7
&& b.css(e(b.iframe.html), { 'overflow-y': 'hidden' }); b.css(e(b.iframe.body), { 'overflow-y': 'hidden' }); 'contentWindow' in this ? b.bind(this.contentWindow, 'scroll', b.onscroll) : b.bind(c, 'scroll', b.onscroll); b.opt.enablemousewheel && b.bind(c, 'mousewheel', b.onmousewheel); b.opt.enablekeyboard && b.bind(c, f.isopera ? 'keypress' : 'keydown', b.onkeypress); if (f.cantouch || b.opt.touchbehavior) {
            b.bind(c, 'mousedown', b.onmousedown), b.bind(c, 'mousemove', (d) => { b.onmousemove(d, !0); }), b.opt.grabcursorenabled && f.cursorgrabvalue
&& b.css(e(c.body), { cursor: f.cursorgrabvalue });
          }b.bind(c, 'mouseup', b.onmouseup); b.zoom && (b.opt.dblclickzoom && b.bind(c, 'dblclick', b.doZoom), b.ongesturezoom && b.bind(c, 'gestureend', b.ongesturezoom));
        }; this.doc[0].readyState && this.doc[0].readyState == 'complete' && setTimeout(() => { I.call(b.doc[0], !1); }, 500); b.bind(this.doc, 'load', I);
      }
    }; this.showCursor = function (d, c) {
      b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0); if (b.rail) {
        b.autohidedom && (b.autohidedom.stop().css({ opacity: b.opt.cursoropacitymax }),
        b.cursoractive = !0); if (!b.rail.drag || b.rail.drag.pt != 1) typeof d !== 'undefined' && !1 !== d && (b.scroll.y = Math.round(1 * d / b.scrollratio.y)), typeof c !== 'undefined' && (b.scroll.x = Math.round(1 * c / b.scrollratio.x)); b.cursor.css({ height: b.cursorheight, top: b.scroll.y }); b.cursorh && (!b.rail.align && b.rail.visibility ? b.cursorh.css({ width: b.cursorwidth, left: b.scroll.x + b.rail.width }) : b.cursorh.css({ width: b.cursorwidth, left: b.scroll.x }), b.cursoractive = !0); b.zoom && b.zoom.stop().css({ opacity: b.opt.cursoropacitymax });
      }
    }; this.hideCursor = function (d) { !b.cursortimeout && (b.rail && b.autohidedom) && (b.cursortimeout = setTimeout(() => { if (!b.rail.active || !b.showonmouseevent)b.autohidedom.stop().animate({ opacity: b.opt.cursoropacitymin }), b.zoom && b.zoom.stop().animate({ opacity: b.opt.cursoropacitymin }), b.cursoractive = !1; b.cursortimeout = 0; }, d || b.opt.hidecursordelay)); }; this.noticeCursor = function (d, c, g) { b.showCursor(c, g); b.rail.active || b.hideCursor(d); }; this.getContentSize = b.ispage ? function () {
      return {
        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      };
    } : b.haswrapper ? function () { return { w: b.doc.outerWidth() + parseInt(b.win.css('paddingLeft')) + parseInt(b.win.css('paddingRight')), h: b.doc.outerHeight() + parseInt(b.win.css('paddingTop')) + parseInt(b.win.css('paddingBottom')) }; } : function () { return { w: b.docscroll[0].scrollWidth, h: b.docscroll[0].scrollHeight }; }; this.onResize = function (d, c) {
      if (!b.win) return !1; if (!b.haswrapper && !b.ispage) {
        if (b.win.css('display') == 'none') {
          return b.visibility
&& b.hideRail().hideRailHr(), !1;
        } !b.hidden && !b.visibility && b.showRail().showRailHr();
      } let g = b.page.maxh; let f = b.page.maxw; const e = b.view.w; b.view = { w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth), h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight) }; b.page = c || b.getContentSize(); b.page.maxh = Math.max(0, b.page.h - b.view.h); b.page.maxw = Math.max(0, b.page.w - b.view.w); if (b.page.maxh == g && b.page.maxw == f && b.view.w == e) {
        if (b.ispage) return b; g = b.win.offset(); if (b.lastposition && (f = b.lastposition, f.top == g.top && f.left
== g.left)) return b; b.lastposition = g;
      }b.page.maxh == 0 ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail.scrollable = !1) : b.rail.scrollable = !0; b.page.maxw == 0 ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh.scrollable = !1) : b.railh.scrollable = !0; b.locked = b.page.maxh == 0 && b.page.maxw == 0; if (b.locked) return b.ispage || b.updateScrollBar(b.view), !1; !b.hidden && !b.visibility ? b.showRail().showRailHr()
        : !b.hidden && !b.railh.visibility && b.showRailHr(); b.istextarea && (b.win.css('resize') && b.win.css('resize') != 'none') && (b.view.h -= 20); b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h))); b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight); b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w))); b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth); b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder; b.railh && (b.railh.width = b.page.maxh > 0 ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder); b.checkrtlmode && b.railh && (b.checkrtlmode = !1, b.opt.rtlmode && b.scroll.x == 0 && b.setScrollLeft(b.page.maxw)); b.ispage || b.updateScrollBar(b.view); b.scrollratio = { x: b.page.maxw / b.scrollvaluemaxw, y: b.page.maxh / b.scrollvaluemax }; b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)),
      b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor()); b.scroll.y && b.getScrollTop() == 0 && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y)); return b;
    }; this.resize = b.onResize; this.lazyResize = function (d) { d = isNaN(d) ? 30 : d; b.delayed('resize', b.resize, d); return b; }; this._bind = function (d, c, g, f) {
      b.events.push({
        e: d, n: c, f: g, b: f, q: !1,
      }); d.addEventListener ? d.addEventListener(c, g, f || !1) : d.attachEvent ? d.attachEvent(`on${c}`, g) : d[`on${c}`] = g;
    }; this.jqbind = function (d, c, g) {
      b.events.push({
        e: d,
        n: c,
        f: g,
        q: !0,
      }); e(d).bind(c, g);
    }; this.bind = function (d, c, g, e) {
      const h = 'jquery' in d ? d[0] : d; c == 'mousewheel' ? 'onwheel' in b.win ? b._bind(h, 'wheel', g, e || !1) : (d = typeof document.onmousewheel !== 'undefined' ? 'mousewheel' : 'DOMMouseScroll', n(h, d, g, e || !1), d == 'DOMMouseScroll' && n(h, 'MozMousePixelScroll', g, e || !1)) : h.addEventListener ? (f.cantouch && /mouseup|mousedown|mousemove/.test(c) && b._bind(h, c == 'mousedown' ? 'touchstart' : c == 'mouseup' ? 'touchend' : 'touchmove', function (b) {
        if (b.touches) {
          if (b.touches.length < 2) {
            var d = b.touches.length
              ? b.touches[0] : b; d.original = b; g.call(this, d);
          }
        } else b.changedTouches && (d = b.changedTouches[0], d.original = b, g.call(this, d));
      }, e || !1), b._bind(h, c, g, e || !1), f.cantouch && c == 'mouseup' && b._bind(h, 'touchcancel', g, e || !1)) : b._bind(h, c, (d) => { if ((d = d || window.event || !1) && d.srcElement)d.target = d.srcElement; 'pageY' in d || (d.pageX = d.clientX + document.documentElement.scrollLeft, d.pageY = d.clientY + document.documentElement.scrollTop); return !1 === g.call(h, d) || !1 === e ? b.cancelEvent(d) : !0; });
    }; this._unbind = function (b, c, g, f) {
      b.removeEventListener
        ? b.removeEventListener(c, g, f) : b.detachEvent ? b.detachEvent(`on${c}`, g) : b[`on${c}`] = !1;
    }; this.unbindAll = function () { for (let d = 0; d < b.events.length; d++) { const c = b.events[d]; c.q ? c.e.unbind(c.n, c.f) : b._unbind(c.e, c.n, c.f, c.b); } }; this.cancelEvent = function (b) { b = b.original ? b.original : b || window.event || !1; if (!b) return !1; b.preventDefault && b.preventDefault(); b.stopPropagation && b.stopPropagation(); b.preventManipulation && b.preventManipulation(); b.cancelBubble = !0; b.cancel = !0; return b.returnValue = !1; }; this.stopPropagation = function (b) { b = b.original ? b.original : b || window.event || !1; if (!b) return !1; if (b.stopPropagation) return b.stopPropagation(); b.cancelBubble && (b.cancelBubble = !0); return !1; }; this.showRail = function () { if (b.page.maxh != 0 && (b.ispage || b.win.css('display') != 'none'))b.visibility = !0, b.rail.visibility = !0, b.rail.css('display', 'block'); return b; }; this.showRailHr = function () { if (!b.railh) return b; if (b.page.maxw != 0 && (b.ispage || b.win.css('display') != 'none'))b.railh.visibility = !0, b.railh.css('display', 'block'); return b; }; this.hideRail = function () { b.visibility = !1; b.rail.visibility = !1; b.rail.css('display', 'none'); return b; }; this.hideRailHr = function () { if (!b.railh) return b; b.railh.visibility = !1; b.railh.css('display', 'none'); return b; }; this.show = function () { b.hidden = !1; b.locked = !1; return b.showRail().showRailHr(); }; this.hide = function () { b.hidden = !0; b.locked = !0; return b.hideRail().hideRailHr(); }; this.toggle = function () { return b.hidden ? b.show() : b.hide(); }; this.remove = function () {
      b.stop(); b.cursortimeout && clearTimeout(b.cursortimeout); b.doZoomOut();
      b.unbindAll(); !1 !== b.observer && b.observer.disconnect(); !1 !== b.observerremover && b.observerremover.disconnect(); b.events = []; b.cursor && (b.cursor.remove(), b.cursor = null); b.cursorh && (b.cursorh.remove(), b.cursorh = null); b.rail && (b.rail.remove(), b.rail = null); b.railh && (b.railh.remove(), b.railh = null); b.zoom && (b.zoom.remove(), b.zoom = null); for (let d = 0; d < b.saved.css.length; d++) { const c = b.saved.css[d]; c[0].css(c[1], typeof c[2] === 'undefined' ? '' : c[2]); }b.saved = !1; b.me.data('__nicescroll', ''); b.me = null; b.doc = null; b.docscroll = null; b.win = null; return b;
    }; this.scrollstart = function (d) { this.onscrollstart = d; return b; }; this.scrollend = function (d) { this.onscrollend = d; return b; }; this.scrollcancel = function (d) { this.onscrollcancel = d; return b; }; this.zoomin = function (d) { this.onzoomin = d; return b; }; this.zoomout = function (d) { this.onzoomout = d; return b; }; this.isScrollable = function (b) {
      b = b.target ? b.target : b; if (b.nodeName == 'OPTION') return !0; for (;b && b.nodeType == 1 && !/BODY|HTML/.test(b.nodeName);) {
        var c = e(b); var c = c.css('overflowY') || c.css('overflowX') || c.css('overflow')
|| ''; if (/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight; b = b.parentNode ? b.parentNode : !1;
      } return !1;
    }; this.getViewport = function (b) { for (b = b && b.parentNode ? b.parentNode : !1; b && b.nodeType == 1 && !/BODY|HTML/.test(b.nodeName);) { const c = e(b); const g = c.css('overflowY') || c.css('overflowX') || c.css('overflow') || ''; if (/scroll|auto/.test(g) && b.clientHeight != b.scrollHeight || c.getNiceScroll().length > 0) return c; b = b.parentNode ? b.parentNode : !1; } return !1; }; this.onmousewheel = function (d) {
      if (b.locked) return !0; if (b.rail.drag) return b.cancelEvent(d);
      if (!b.rail.scrollable) return b.railh && b.railh.scrollable ? b.onmousewheelhr(d) : !0; const c = +new Date(); let
        g = !1; b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0); b.checkarea = c; if (b.nativescrollingarea) return !0; if (d = t(d, !1, g))b.checkarea = 0; return d;
    }; this.onmousewheelhr = function (d) {
      if (b.locked || !b.railh.scrollable) return !0; if (b.rail.drag) return b.cancelEvent(d); const c = +new Date(); let
        g = !1; b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d),
      g = !0); b.checkarea = c; return b.nativescrollingarea ? !0 : b.locked ? b.cancelEvent(d) : t(d, !0, g);
    }; this.stop = function () { b.cancelScroll(); b.scrollmon && b.scrollmon.stop(); b.cursorfreezed = !1; b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)); b.noticeCursor(); return b; }; this.getTransitionSpeed = function (c) { const f = Math.round(10 * b.opt.scrollspeed); c = Math.min(f, Math.round(c / 20 * b.opt.scrollspeed)); return c > 20 ? c : 0; }; b.opt.smoothscroll ? b.ishwscroll && f.hastransition && b.opt.usetransition ? (this.prepareTransition = function (c,
      e) { const g = e ? c > 20 ? c : 0 : b.getTransitionSpeed(c); const h = g ? `${f.prefixstyle}transform ${g}ms ease-out` : ''; if (!b.lasttransitionstyle || b.lasttransitionstyle != h)b.lasttransitionstyle = h, b.doc.css(f.transitionstyle, h); return g; }, this.doScrollLeft = function (c, f) { const g = b.scrollrunning ? b.newscrolly : b.getScrollTop(); b.doScrollPos(c, g, f); }, this.doScrollTop = function (c, f) { const g = b.scrollrunning ? b.newscrollx : b.getScrollLeft(); b.doScrollPos(g, c, f); }, this.doScrollPos = function (c, e, g) {
      const h = b.getScrollTop(); const l = b.getScrollLeft(); ((b.newscrolly - h) * (e - h)
< 0 || (b.newscrollx - l) * (c - l) < 0) && b.cancelScroll(); !1 == b.opt.bouncescroll && (e < 0 ? e = 0 : e > b.page.maxh && (e = b.page.maxh), c < 0 ? c = 0 : c > b.page.maxw && (c = b.page.maxw)); if (b.scrollrunning && c == b.newscrollx && e == b.newscrolly) return !1; b.newscrolly = e; b.newscrollx = c; b.newscrollspeed = g || !1; if (b.timer) return !1; b.timer = setTimeout(() => {
        const g = b.getScrollTop(); const h = b.getScrollLeft(); let l; let k; l = c - h; k = e - g; l = Math.round(Math.sqrt(Math.pow(l, 2) + Math.pow(k, 2))); l = b.newscrollspeed && b.newscrollspeed > 1 ? b.newscrollspeed
          : b.getTransitionSpeed(l); b.newscrollspeed && b.newscrollspeed <= 1 && (l *= b.newscrollspeed); b.prepareTransition(l, !0); b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm); l > 0 && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
          type: 'scrollstart', current: { x: h, y: g }, request: { x: c, y: e }, end: { x: b.newscrollx, y: b.newscrolly }, speed: l,
        }), f.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, f.transitionend, b.onScrollEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped),
        b.scrollendtrapped = setTimeout(b.onScrollEnd, l)), b.timerscroll = { bz: new BezierClass(g, b.newscrolly, l, 0, 0, 0.58, 1), bh: new BezierClass(h, b.newscrollx, l, 0, 0, 0.58, 1) }, b.cursorfreezed || (b.timerscroll.tm = setInterval(() => { b.showCursor(b.getScrollTop(), b.getScrollLeft()); }, 60))); b.synched('doScroll-set', () => { b.timer = 0; b.scrollendtrapped && (b.scrollrunning = !0); b.setScrollTop(b.newscrolly); b.setScrollLeft(b.newscrollx); if (!b.scrollendtrapped)b.onScrollEnd(); });
      }, 50);
    }, this.cancelScroll = function () {
      if (!b.scrollendtrapped) return !0;
      const c = b.getScrollTop(); const e = b.getScrollLeft(); b.scrollrunning = !1; f.transitionend || clearTimeout(f.transitionend); b.scrollendtrapped = !1; b._unbind(b.doc, f.transitionend, b.onScrollEnd); b.prepareTransition(0); b.setScrollTop(c); b.railh && b.setScrollLeft(e); b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm); b.timerscroll = !1; b.cursorfreezed = !1; b.showCursor(c, e); return b;
    }, this.onScrollEnd = function () {
      b.scrollendtrapped && b._unbind(b.doc, f.transitionend, b.onScrollEnd); b.scrollendtrapped = !1; b.prepareTransition(0);
      b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm); b.timerscroll = !1; let c = b.getScrollTop(); let e = b.getScrollLeft(); b.setScrollTop(c); b.railh && b.setScrollLeft(e); b.noticeCursor(!1, c, e); b.cursorfreezed = !1; c < 0 ? c = 0 : c > b.page.maxh && (c = b.page.maxh); e < 0 ? e = 0 : e > b.page.maxw && (e = b.page.maxw); if (c != b.newscrolly || e != b.newscrollx) return b.doScrollPos(e, c, b.opt.snapbackspeed); b.onscrollend && b.scrollrunning && b.onscrollend.call(b, { type: 'scrollend', current: { x: e, y: c }, end: { x: b.newscrollx, y: b.newscrolly } }); b.scrollrunning = !1;
    }) : (this.doScrollLeft = function (c, f) { const g = b.scrollrunning ? b.newscrolly : b.getScrollTop(); b.doScrollPos(c, g, f); }, this.doScrollTop = function (c, f) { const g = b.scrollrunning ? b.newscrollx : b.getScrollLeft(); b.doScrollPos(g, c, f); }, this.doScrollPos = function (c, f, g) {
      function e() {
        if (b.cancelAnimationFrame) return !0; b.scrollrunning = !0; if (r = 1 - r) return b.timer = v(e) || 1; let c = 0; var d = sy = b.getScrollTop(); if (b.dst.ay) {
          var d = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly; var g = d - sy; if (g < 0 && d < b.newscrolly || g > 0 && d > b.newscrolly) {
            d = b.newscrolly;
          }b.setScrollTop(d); d == b.newscrolly && (c = 1);
        } else c = 1; let f = sx = b.getScrollLeft(); if (b.dst.ax) { f = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx; g = f - sx; if (g < 0 && f < b.newscrollx || g > 0 && f > b.newscrollx)f = b.newscrollx; b.setScrollLeft(f); f == b.newscrollx && (c += 1); } else c += 1; c == 2 ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, d < 0 ? d = 0 : d > b.page.maxh && (d = b.page.maxh), f < 0 ? f = 0 : f > b.page.maxw && (f = b.page.maxw), f != b.newscrollx || d != b.newscrolly ? b.doScrollPos(f, d) : b.onscrollend && b.onscrollend.call(b,
          { type: 'scrollend', current: { x: sx, y: sy }, end: { x: b.newscrollx, y: b.newscrolly } })) : b.timer = v(e) || 1;
      }f = typeof f === 'undefined' || !1 === f ? b.getScrollTop(!0) : f; if (b.timer && b.newscrolly == f && b.newscrollx == c) return !0; b.timer && w(b.timer); b.timer = 0; const h = b.getScrollTop(); const l = b.getScrollLeft(); ((b.newscrolly - h) * (f - h) < 0 || (b.newscrollx - l) * (c - l) < 0) && b.cancelScroll(); b.newscrolly = f; b.newscrollx = c; if (!b.bouncescroll || !b.rail.visibility)b.newscrolly < 0 ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh); if (!b.bouncescroll
|| !b.railh.visibility)b.newscrollx < 0 ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw); b.dst = {}; b.dst.x = c - l; b.dst.y = f - h; b.dst.px = l; b.dst.py = h; let k = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2))); b.dst.ax = b.dst.x / k; b.dst.ay = b.dst.y / k; let n = 0; let q = k; b.dst.x == 0 ? (n = h, q = f, b.dst.ay = 1, b.dst.py = 0) : b.dst.y == 0 && (n = l, q = c, b.dst.ax = 1, b.dst.px = 0); k = b.getTransitionSpeed(k); g && g <= 1 && (k *= g); b.bzscroll = k > 0 ? b.bzscroll ? b.bzscroll.update(q, k) : new BezierClass(n, q, k, 0, 1, 0, 1) : !1; if (!b.timer) {
        (h
== b.page.maxh && f >= b.page.maxh || l == b.page.maxw && c >= b.page.maxw) && b.checkContentSize(); var r = 1; b.cancelAnimationFrame = !1; b.timer = 1; b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
          type: 'scrollstart', current: { x: l, y: h }, request: { x: c, y: f }, end: { x: b.newscrollx, y: b.newscrolly }, speed: k,
        }); e(); (h == b.page.maxh && f >= h || l == b.page.maxw && c >= l) && b.checkContentSize(); b.noticeCursor();
      }
    }, this.cancelScroll = function () { b.timer && w(b.timer); b.timer = 0; b.bzscroll = !1; b.scrollrunning = !1; return b; }) : (this.doScrollLeft = function (c,
      f) { const g = b.getScrollTop(); b.doScrollPos(c, g, f); }, this.doScrollTop = function (c, f) { const g = b.getScrollLeft(); b.doScrollPos(g, c, f); }, this.doScrollPos = function (c, f, g) { let e = c > b.page.maxw ? b.page.maxw : c; e < 0 && (e = 0); let h = f > b.page.maxh ? b.page.maxh : f; h < 0 && (h = 0); b.synched('scroll', () => { b.setScrollTop(h); b.setScrollLeft(e); }); }, this.cancelScroll = function () {}); this.doScrollBy = function (c, f) {
      var g = 0; var g = f ? Math.floor((b.scroll.y - c) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - c; if (b.bouncescroll) {
        const e = Math.round(b.view.h / 2); g < -e ? g = -e : g > b.page.maxh + e && (g = b.page.maxh + e);
      }b.cursorfreezed = !1; py = b.getScrollTop(!0); if (g < 0 && py <= 0) return b.noticeCursor(); if (g > b.page.maxh && py >= b.page.maxh) return b.checkContentSize(), b.noticeCursor(); b.doScrollTop(g);
    }; this.doScrollLeftBy = function (c, f) {
      var g = 0; var g = f ? Math.floor((b.scroll.x - c) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - c; if (b.bouncescroll) { const e = Math.round(b.view.w / 2); g < -e ? g = -e : g > b.page.maxw + e && (g = b.page.maxw + e); }b.cursorfreezed = !1; px = b.getScrollLeft(!0);
      if (g < 0 && px <= 0 || g > b.page.maxw && px >= b.page.maxw) return b.noticeCursor(); b.doScrollLeft(g);
    }; this.doScrollTo = function (c, f) { f && Math.round(c * b.scrollratio.y); b.cursorfreezed = !1; b.doScrollTop(c); }; this.checkContentSize = function () { const c = b.getContentSize(); (c.h != b.page.h || c.w != b.page.w) && b.resize(!1, c); }; b.onscroll = function (c) {
      b.rail.drag || b.cursorfreezed || b.synched('scroll', () => {
        b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)); b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)));
        b.noticeCursor();
      });
    }; b.bind(b.docscroll, 'scroll', b.onscroll); this.doZoomIn = function (c) {
      if (!b.zoomactive) {
        b.zoomactive = !0; b.zoomrestore = { style: {} }; let h = 'position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight'.split(' '); const g = b.win[0].style; let l; for (l in h) { const k = h[l]; b.zoomrestore.style[k] = typeof g[k] !== 'undefined' ? g[k] : ''; }b.zoomrestore.style.width = b.win.css('width'); b.zoomrestore.style.height = b.win.css('height'); b.zoomrestore.padding = {
          w: b.win.outerWidth() - b.win.width(),
          h: b.win.outerHeight()
- b.win.height(),
        }; f.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0)); b.win.css({
          position: f.isios4 ? 'absolute' : 'fixed', top: 0, left: 0, 'z-index': x + 100, margin: '0px',
        }); h = b.win.css('backgroundColor'); (h == '' || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) && b.win.css('backgroundColor', '#fff'); b.rail.css({ 'z-index': x + 101 }); b.zoom.css({ 'z-index': x + 102 }); b.zoom.css('backgroundPosition', '0px -18px'); b.resizeZoom(); b.onzoomin && b.onzoomin.call(b); return b.cancelEvent(c);
      }
    }; this.doZoomOut = function (c) { if (b.zoomactive) return b.zoomactive = !1, b.win.css('margin', ''), b.win.css(b.zoomrestore.style), f.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({ 'z-index': b.zindex }), b.zoom.css({ 'z-index': b.zindex }), b.zoomrestore = !1, b.zoom.css('backgroundPosition', '0px 0px'), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(c); }; this.doZoom = function (c) { return b.zoomactive ? b.doZoomOut(c) : b.doZoomIn(c); }; this.resizeZoom = function () {
      if (b.zoomactive) {
        const c = b.getScrollTop(); b.win.css({
          width: `${e(window).width()
- b.zoomrestore.padding.w}px`,
          height: `${e(window).height() - b.zoomrestore.padding.h}px`,
        }); b.onResize(); b.setScrollTop(Math.min(b.page.maxh, c));
      }
    }; this.init(); e.nicescroll.push(this);
  }; var H = function (e) {
    const c = this; this.nc = e; this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0; this.snapy = this.snapx = !1; this.demuly = this.demulx = 0; this.lastscrolly = this.lastscrollx = -1; this.timer = this.chky = this.chkx = 0; this.time = function () { return +new Date(); }; this.reset = function (e, l) {
      c.stop(); const k = c.time(); c.steptime = 0; c.lasttime = k; c.speedx = 0; c.speedy = 0; c.lastx = e; c.lasty = l; c.lastscrollx = -1; c.lastscrolly = -1;
    }; this.update = function (e, l) { var k = c.time(); c.steptime = k - c.lasttime; c.lasttime = k; var k = l - c.lasty; const t = e - c.lastx; var b = c.nc.getScrollTop(); var q = c.nc.getScrollLeft(); var b = b + k; var q = q + t; c.snapx = q < 0 || q > c.nc.page.maxw; c.snapy = b < 0 || b > c.nc.page.maxh; c.speedx = t; c.speedy = k; c.lastx = e; c.lasty = l; }; this.stop = function () { c.nc.unsynched('domomentum2d'); c.timer && clearTimeout(c.timer); c.timer = 0; c.lastscrollx = -1; c.lastscrolly = -1; }; this.doSnapy = function (e,
      l) { let k = !1; l < 0 ? (l = 0, k = !0) : l > c.nc.page.maxh && (l = c.nc.page.maxh, k = !0); e < 0 ? (e = 0, k = !0) : e > c.nc.page.maxw && (e = c.nc.page.maxw, k = !0); k && c.nc.doScrollPos(e, l, c.nc.opt.snapbackspeed); }; this.doMomentum = function (e) {
      const l = c.time(); let k = e ? l + e : c.lasttime; e = c.nc.getScrollLeft(); const t = c.nc.getScrollTop(); const b = c.nc.page.maxh; const q = c.nc.page.maxw; c.speedx = q > 0 ? Math.min(60, c.speedx) : 0; c.speedy = b > 0 ? Math.min(60, c.speedy) : 0; k = k && l - k <= 50; if (t < 0 || t > b || e < 0 || e > q)k = !1; e = c.speedx && k ? c.speedx : !1; if (c.speedy && k && c.speedy || e) {
        let f = Math.max(16,
          c.steptime); f > 50 && (e = f / 50, c.speedx *= e, c.speedy *= e, f = 50); c.demulxy = 0; c.lastscrollx = c.nc.getScrollLeft(); c.chkx = c.lastscrollx; c.lastscrolly = c.nc.getScrollTop(); c.chky = c.lastscrolly; let r = c.lastscrollx; let u = c.lastscrolly; var d = function () {
          let e = c.time() - l > 600 ? 0.04 : 0.02; if (c.speedx && (r = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = r, r < 0 || r > q))e = 0.1; if (c.speedy && (u = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = u, u < 0 || u > b))e = 0.1; c.demulxy = Math.min(1, c.demulxy + e); c.nc.synched('domomentum2d',
            () => { c.speedx && (c.nc.getScrollLeft() != c.chkx && c.stop(), c.chkx = r, c.nc.setScrollLeft(r)); c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = u, c.nc.setScrollTop(u)); c.timer || (c.nc.hideCursor(), c.doSnapy(r, u)); }); c.demulxy < 1 ? c.timer = setTimeout(d, f) : (c.stop(), c.nc.hideCursor(), c.doSnapy(r, u));
        }; d();
      } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop());
    };
  }; const A = e.fn.scrollTop; e.cssHooks.pageYOffset = {
    get(k, c, h) { return (c = e.data(k, '__nicescroll') || !1) && c.ishwscroll ? c.getScrollTop() : A.call(k); },
    set(k, c) { const h = e.data(k, '__nicescroll') || !1; h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : A.call(k, c); return this; },
  }; e.fn.scrollTop = function (k) { if (typeof k === 'undefined') { const c = this[0] ? e.data(this[0], '__nicescroll') || !1 : !1; return c && c.ishwscroll ? c.getScrollTop() : A.call(this); } return this.each(function () { const c = e.data(this, '__nicescroll') || !1; c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : A.call(e(this), k); }); }; const B = e.fn.scrollLeft; e.cssHooks.pageXOffset = {
    get(k, c, h) {
      return (c = e.data(k, '__nicescroll')
|| !1) && c.ishwscroll ? c.getScrollLeft() : B.call(k);
    },
    set(k, c) { const h = e.data(k, '__nicescroll') || !1; h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : B.call(k, c); return this; },
  }; e.fn.scrollLeft = function (k) { if (typeof k === 'undefined') { const c = this[0] ? e.data(this[0], '__nicescroll') || !1 : !1; return c && c.ishwscroll ? c.getScrollLeft() : B.call(this); } return this.each(function () { const c = e.data(this, '__nicescroll') || !1; c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : B.call(e(this), k); }); }; const C = function (k) {
    const c = this; this.length = 0; this.name = 'nicescrollarray'; this.each = function (e) { for (let h = 0; h < c.length; h++)e.call(c[h]); return c; }; this.push = function (e) { c[c.length] = e; c.length++; }; this.eq = function (e) { return c[e]; }; if (k) for (a = 0; a < k.length; a++) { const h = e.data(k[a], '__nicescroll') || !1; h && (this[this.length] = h, this.length++); } return this;
  }; (function (e, c, h) { for (let l = 0; l < c.length; l++)h(e, c[l]); }(C.prototype, 'show hide toggle onResize resize remove stop doScrollPos'.split(' '), (e, c) => {
    e[c] = function () {
      const e = arguments; return this.each(function () {
        this[c].apply(this,
          e);
      });
    };
  })); e.fn.getNiceScroll = function (k) { return typeof k === 'undefined' ? new C(this) : e.data(this[k], '__nicescroll') || !1; }; e.extend(e.expr[':'], { nicescroll(k) { return e.data(k, '__nicescroll') ? !0 : !1; } }); e.fn.niceScroll = function (k, c) {
    typeof c === 'undefined' && (typeof k === 'object' && !('jquery' in k)) && (c = k, k = !1); const h = new C(); typeof c === 'undefined' && (c = {}); k && (c.doc = e(k), c.win = e(this)); const l = !('doc' in c); !l && !('win' in c) && (c.win = e(this)); this.each(function () {
      let k = e(this).data('__nicescroll') || !1; k || (c.doc = l
        ? e(this) : c.doc, k = new N(c, e(this)), e(this).data('__nicescroll', k)); h.push(k);
    }); return h.length == 1 ? h[0] : h;
  }; window.NiceScroll = { getjQuery() { return e; } }; e.nicescroll || (e.nicescroll = new C(), e.nicescroll.options = F);
}(jQuery));

/*------------------------------------------------------------------*/
/*	MAGNIFIC POPUP
/*------------------------------------------------------------------*/

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!(function (e) { typeof define === 'function' && define.amd ? define(['jquery'], e) : e(typeof exports === 'object' ? require('jquery') : window.jQuery || window.Zepto); }((e) => {
  let t; let n; let i; let o; let r; let a; const s = 'Close'; const l = 'BeforeClose'; const c = 'AfterClose'; const d = 'BeforeAppend'; const u = 'MarkupParse'; const p = 'Open'; const f = 'Change'; const m = 'mfp'; const g = `.${m}`; const v = 'mfp-ready'; const h = 'mfp-removing'; const y = 'mfp-prevent-close'; const C = function () {}; const w = !!window.jQuery; const b = e(window); const I = function (e, n) { t.ev.on(m + e + g, n); }; const x = function (t, n, i, o) { let r = document.createElement('div'); return r.className = `mfp-${t}`, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r; }; const k = function (n, i) { t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i])); }; const T = function (n) { return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace('%title%', t.st.tClose)), a = n), t.currTemplate.closeBtn; }; const _ = function () { e.magnificPopup.instance || (t = new C(), t.init(), e.magnificPopup.instance = t); }; const P = function () { const e = document.createElement('p').style; const t = ['ms', 'O', 'Moz', 'Webkit']; if (void 0 !== e.transition) return !0; for (;t.length;) if (`${t.pop()}Transition` in e) return !0; return !1; }; C.prototype = {
    constructor: C, init() { const n = navigator.appVersion; t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = P(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}; }, open(n) { let o; if (n.isObj === !1) { t.items = n.items.toArray(), t.index = 0; let a; const s = n.items; for (o = 0; o < s.length; o++) if (a = s[o], a.parsed && (a = a.el[0]), a === n.el[0]) { t.index = o; break; } } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0; if (t.isOpen) return void t.updateItemHTML(); t.types = [], r = '', n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = t.st.fixedContentPos === 'auto' ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x('bg').on(`click${g}`, () => { t.close(); }), t.wrap = x('wrap').attr('tabindex', -1).on(`click${g}`, (e) => { t._checkIfClose(e.target) && t.close(); }), t.container = x('container', t.wrap)), t.contentContainer = x('content'), t.st.preloader && (t.preloader = x('preloader', t.container, t.st.tLoading)); const l = e.magnificPopup.modules; for (o = 0; o < l.length; o++) { let c = l[o]; c = c.charAt(0).toUpperCase() + c.slice(1), t[`init${c}`].call(t); }k('BeforeOpen'), t.st.showCloseBtn && (t.st.closeBtnInside ? (I(u, (e, t, n, i) => { n.close_replaceWith = T(i.type); }), r += ' mfp-close-btn-in') : t.wrap.append(T())), t.st.alignTop && (r += ' mfp-align-top'), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: 'hidden', overflowY: t.st.overflowY }) : t.wrap.css({ top: b.scrollTop(), position: 'absolute' }), (t.st.fixedBgPos === !1 || t.st.fixedBgPos === 'auto' && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: 'absolute' }), t.st.enableEscapeKey && i.on(`keyup${g}`, (e) => { e.keyCode === 27 && t.close(); }), b.on(`resize${g}`, () => { t.updateSize(); }), t.st.closeOnContentClick || (r += ' mfp-auto-cursor'), r && t.wrap.addClass(r); const d = t.wH = b.height(); const f = {}; if (t.fixedContentPos && t._hasScrollBar(d)) { const m = t._getScrollbarSize(); m && (f.marginRight = m); }t.fixedContentPos && (t.isIE7 ? e('body, html').css('overflow', 'hidden') : f.overflow = 'hidden'); let h = t.st.mainClass; return t.isIE7 && (h += ' mfp-ie7'), h && t._addClassToMFP(h), t.updateItemHTML(), k('BuildControls'), e('html').css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(() => { t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), i.on(`focusin${g}`, t._onFocusIn); }, 16), t.isOpen = !0, t.updateSize(d), k(p), n; }, close() { t.isOpen && (k(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(h), setTimeout(() => { t._close(); }, t.st.removalDelay)) : t._close()); }, _close() { k(s); let n = `${h} ${v} `; if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += `${t.st.mainClass} `), t._removeClassFromMFP(n), t.fixedContentPos) { const o = { marginRight: '' }; t.isIE7 ? e('body, html').css('overflow', '') : o.overflow = '', e('html').css(o); }i.off(`keyup${g} focusin${g}`), t.ev.off(g), t.wrap.attr('class', 'mfp-wrap').removeAttr('style'), t.bgOverlay.attr('class', 'mfp-bg'), t.container.attr('class', 'mfp-container'), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, k(c); }, updateSize(e) { if (t.isIOS) { const n = document.documentElement.clientWidth / window.innerWidth; const i = window.innerHeight * n; t.wrap.css('height', i), t.wH = i; } else t.wH = e || b.height(); t.fixedContentPos || t.wrap.css('height', t.wH), k('Resize'); }, updateItemHTML() { let n = t.items[t.index]; t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index)); const i = n.type; if (k('BeforeChange', [t.currItem ? t.currItem.type : '', i]), t.currItem = n, !t.currTemplate[i]) { const r = t.st[i] ? t.st[i].markup : !1; k('FirstMarkupParse', r), r ? t.currTemplate[i] = e(r) : t.currTemplate[i] = !0; }o && o !== n.type && t.container.removeClass(`mfp-${o}-holder`); const a = t[`get${i.charAt(0).toUpperCase()}${i.slice(1)}`](n, t.currTemplate[i]); t.appendContent(a, i), n.preloaded = !0, k(f, n), o = n.type, t.container.prepend(t.contentContainer), k('AfterChange'); }, appendContent(e, n) { t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find('.mfp-close').length || t.content.append(T()) : t.content = e : t.content = '', k(d), t.container.addClass(`mfp-${n}-holder`), t.contentContainer.append(t.content); }, parseEl(n) { let i; let o = t.items[n]; if (o.tagName ? o = { el: e(o) } : (i = o.type, o = { data: o, src: o.src }), o.el) { for (let r = t.types, a = 0; a < r.length; a++) if (o.el.hasClass(`mfp-${r[a]}`)) { i = r[a]; break; }o.src = o.el.attr('data-mfp-src'), o.src || (o.src = o.el.attr('href')); } return o.type = i || t.st.type || 'inline', o.index = n, o.parsed = !0, t.items[n] = o, k('ElementParse', o), t.items[n]; }, addGroup(e, n) { const i = function (i) { i.mfpEl = this, t._openClick(i, e, n); }; n || (n = {}); const o = 'click.magnificPopup'; n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i))); }, _openClick(n, i, o) { const r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick; if (r || !(n.which === 2 || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) { const a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn; if (a) if (e.isFunction(a)) { if (!a.call(t)) return !0; } else if (b.width() < a) return !0; n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o); } }, updateStatus(e, i) { if (t.preloader) { n !== e && t.container.removeClass(`mfp-s-${n}`), i || e !== 'loading' || (i = t.st.tLoading); const o = { status: e, text: i }; k('UpdateStatus', o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find('a').on('click', (e) => { e.stopImmediatePropagation(); }), t.container.addClass(`mfp-s-${e}`), n = e; } }, _checkIfClose(n) { if (!e(n).hasClass(y)) { const i = t.st.closeOnContentClick; const o = t.st.closeOnBgClick; if (i && o) return !0; if (!t.content || e(n).hasClass('mfp-close') || t.preloader && n === t.preloader[0]) return !0; if (n === t.content[0] || e.contains(t.content[0], n)) { if (i) return !0; } else if (o && e.contains(document, n)) return !0; return !1; } }, _addClassToMFP(e) { t.bgOverlay.addClass(e), t.wrap.addClass(e); }, _removeClassFromMFP(e) { this.bgOverlay.removeClass(e), t.wrap.removeClass(e); }, _hasScrollBar(e) { return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || b.height()); }, _setFocus() { (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus(); }, _onFocusIn(n) { return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1); }, _parseMarkup(t, n, i) { let o; i.data && (n = e.extend(i.data, n)), k(u, [t, n, i]), e.each(n, (n, i) => { if (void 0 === i || i === !1) return !0; if (o = n.split('_'), o.length > 1) { const r = t.find(`${g}-${o[0]}`); if (r.length > 0) { const a = o[1]; a === 'replaceWith' ? r[0] !== i[0] && r.replaceWith(i) : a === 'img' ? r.is('img') ? r.attr('src', i) : r.replaceWith(e('<img>').attr('src', i).attr('class', r.attr('class'))) : r.attr(o[1], i); } } else t.find(`${g}-${n}`).html(i); }); }, _getScrollbarSize() { if (void 0 === t.scrollbarSize) { const e = document.createElement('div'); e.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;', document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e); } return t.scrollbarSize; },
  }, e.magnificPopup = {
    instance: null,
    proto: C.prototype,
    modules: [],
    open(t, n) { return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t); },
    close() { return e.magnificPopup.instance && e.magnificPopup.instance.close(); },
    registerModule(t, n) { n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t); },
    defaults: {
      disableOn: 0, key: null, midClick: !1, mainClass: '', preloader: !0, focus: '', closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: 'auto', fixedBgPos: 'auto', overflowY: 'auto', closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: 'Close (Esc)', tLoading: 'Loading...', autoFocusLast: !0,
    },
  }, e.fn.magnificPopup = function (n) { _(); const i = e(this); if (typeof n === 'string') if (n === 'open') { let o; const r = w ? i.data('magnificPopup') : i[0].magnificPopup; const a = parseInt(arguments[1], 10) || 0; r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({ mfpEl: o }, i, r); } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1)); else n = e.extend(!0, {}, n), w ? i.data('magnificPopup', n) : i[0].magnificPopup = n, t.addGroup(i, n); return i; }; let S; let E; let z; const O = 'inline'; const M = function () { z && (E.after(z.addClass(S)).detach(), z = null); }; e.magnificPopup.registerModule(O, { options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' }, proto: { initInline() { t.types.push(O), I(`${s}.${O}`, () => { M(); }); }, getInline(n, i) { if (M(), n.src) { const o = t.st.inline; let r = e(n.src); if (r.length) { const a = r[0].parentNode; a && a.tagName && (E || (S = o.hiddenClass, E = x(S), S = `mfp-${S}`), z = r.after(E).detach().removeClass(S)), t.updateStatus('ready'); } else t.updateStatus('error', o.tNotFound), r = e('<div>'); return n.inlineElement = r, r; } return t.updateStatus('ready'), t._parseMarkup(i, {}, n), i; } } }); let B; const L = 'ajax'; const H = function () { B && e(document.body).removeClass(B); }; const A = function () { H(), t.req && t.req.abort(); }; e.magnificPopup.registerModule(L, { options: { settings: null, cursor: 'mfp-ajax-cur', tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax() { t.types.push(L), B = t.st.ajax.cursor, I(`${s}.${L}`, A), I(`BeforeChange.${L}`, A); }, getAjax(n) { B && e(document.body).addClass(B), t.updateStatus('loading'); const i = e.extend({ url: n.src, success(i, o, r) { const a = { data: i, xhr: r }; k('ParseAjax', a), t.appendContent(e(a.data), L), n.finished = !0, H(), t._setFocus(), setTimeout(() => { t.wrap.addClass(v); }, 16), t.updateStatus('ready'), k('AjaxContentAdded'); }, error() { H(), n.finished = n.loadError = !0, t.updateStatus('error', t.st.ajax.tError.replace('%url%', n.src)); } }, t.st.ajax.settings); return t.req = e.ajax(i), ''; } } }); let F; const j = function (n) { if (n.data && void 0 !== n.data.title) return n.data.title; const i = t.st.image.titleSrc; if (i) { if (e.isFunction(i)) return i.call(t, n); if (n.el) return n.el.attr(i) || ''; } return ''; }; e.magnificPopup.registerModule('image', {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: 'mfp-zoom-out-cur', titleSrc: 'title', verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage() { const n = t.st.image; const i = '.image'; t.types.push('image'), I(p + i, () => { t.currItem.type === 'image' && n.cursor && e(document.body).addClass(n.cursor); }), I(s + i, () => { n.cursor && e(document.body).removeClass(n.cursor), b.off(`resize${g}`); }), I(`Resize${i}`, t.resizeImage), t.isLowIE && I('AfterChange', t.resizeImage); }, resizeImage() { const e = t.currItem; if (e && e.img && t.st.image.verticalFit) { let n = 0; t.isLowIE && (n = parseInt(e.img.css('padding-top'), 10) + parseInt(e.img.css('padding-bottom'), 10)), e.img.css('max-height', t.wH - n); } }, _onImageHasSize(e) { e.img && (e.hasSize = !0, F && clearInterval(F), e.isCheckingImgSize = !1, k('ImageHasSize', e), e.imgHidden && (t.content && t.content.removeClass('mfp-loading'), e.imgHidden = !1)); }, findImageSize(e) { let n = 0; const i = e.img[0]; var o = function (r) { F && clearInterval(F), F = setInterval(() => (i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(F), n++, void (n === 3 ? o(10) : n === 40 ? o(50) : n === 100 && o(500)))), r); }; o(1); }, getImage(n, i) { let o = 0; var r = function () { n && (n.img[0].complete ? (n.img.off('.mfploader'), n === t.currItem && (t._onImageHasSize(n), t.updateStatus('ready')), n.hasSize = !0, n.loaded = !0, k('ImageLoadComplete')) : (o++, o < 200 ? setTimeout(r, 100) : a())); }; var a = function () { n && (n.img.off('.mfploader'), n === t.currItem && (t._onImageHasSize(n), t.updateStatus('error', s.tError.replace('%url%', n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0); }; var s = t.st.image; const l = i.find('.mfp-img'); if (l.length) { let c = document.createElement('img'); c.className = 'mfp-img', n.el && n.el.find('img').length && (c.alt = n.el.find('img').attr('alt')), n.img = e(c).on('load.mfploader', r).on('error.mfploader', a), c.src = n.src, l.is('img') && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1); } return t._parseMarkup(i, { title: j(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (F && clearInterval(F), n.loadError ? (i.addClass('mfp-loading'), t.updateStatus('error', s.tError.replace('%url%', n.src))) : (i.removeClass('mfp-loading'), t.updateStatus('ready')), i) : (t.updateStatus('loading'), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass('mfp-loading'), t.findImageSize(n)), i); },
    },
  }); let N; const W = function () { return void 0 === N && (N = void 0 !== document.createElement('p').style.MozTransform), N; }; e.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1, easing: 'ease-in-out', duration: 300, opener(e) { return e.is('img') ? e : e.find('img'); },
    },
    proto: {
      initZoom() {
        let e; const n = t.st.zoom; const i = '.zoom'; if (n.enabled && t.supportsTransition) {
          let o; let r; const a = n.duration; const c = function (e) {
            const t = e.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'); const i = `all ${n.duration / 1e3}s ${n.easing}`; const o = {
              position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden',
            }; const r = 'transition'; return o[`-webkit-${r}`] = o[`-moz-${r}`] = o[`-o-${r}`] = o[r] = i, t.css(o), t;
          }; const d = function () { t.content.css('visibility', 'visible'); }; I(`BuildControls${i}`, () => { if (t._allowZoom()) { if (clearTimeout(o), t.content.css('visibility', 'hidden'), e = t._getItemToZoom(), !e) return void d(); r = c(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(() => { r.css(t._getOffset(!0)), o = setTimeout(() => { d(), setTimeout(() => { r.remove(), e = r = null, k('ZoomAnimationEnded'); }, 16); }, a); }, 16); } }), I(l + i, () => { if (t._allowZoom()) { if (clearTimeout(o), t.st.removalDelay = a, !e) { if (e = t._getItemToZoom(), !e) return; r = c(e); }r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css('visibility', 'hidden'), setTimeout(() => { r.css(t._getOffset()); }, 16); } }), I(s + i, () => { t._allowZoom() && (d(), r && r.remove(), e = null); });
        }
      },
      _allowZoom() { return t.currItem.type === 'image'; },
      _getItemToZoom() { return t.currItem.hasSize ? t.currItem.img : !1; },
      _getOffset(n) { let i; i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem); const o = i.offset(); const r = parseInt(i.css('padding-top'), 10); const a = parseInt(i.css('padding-bottom'), 10); o.top -= e(window).scrollTop() - r; const s = { width: i.width(), height: (w ? i.innerHeight() : i[0].offsetHeight) - a - r }; return W() ? s['-moz-transform'] = s.transform = `translate(${o.left}px,${o.top}px)` : (s.left = o.left, s.top = o.top), s; },
    },
  }); const Z = 'iframe'; const q = '//about:blank'; const R = function (e) { if (t.currTemplate[Z]) { const n = t.currTemplate[Z].find('iframe'); n.length && (e || (n[0].src = q), t.isIE8 && n.css('display', e ? 'block' : 'none')); } }; e.magnificPopup.registerModule(Z, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: 'iframe_src', patterns: { youtube: { index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' }, vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' }, gmaps: { index: '//maps.google.', src: '%id%&output=embed' } } }, proto: { initIframe() { t.types.push(Z), I('BeforeChange', (e, t, n) => { t !== n && (t === Z ? R() : n === Z && R(!0)); }), I(`${s}.${Z}`, () => { R(); }); }, getIframe(n, i) { let o = n.src; const r = t.st.iframe; e.each(r.patterns, function () { return o.indexOf(this.index) > -1 ? (this.id && (o = typeof this.id === 'string' ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace('%id%', o), !1) : void 0; }); const a = {}; return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus('ready'), i; } } }); const K = function (e) { const n = t.items.length; return e > n - 1 ? e - n : e < 0 ? n + e : e; }; const D = function (e, t, n) { return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n); }; e.magnificPopup.registerModule('gallery', {
    options: {
      enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: 'Previous (Left arrow key)', tNext: 'Next (Right arrow key)', tCounter: '%curr% of %total%',
    },
    proto: {
      initGallery() { const n = t.st.gallery; const o = '.mfp-gallery'; return t.direction = !0, n && n.enabled ? (r += ' mfp-gallery', I(p + o, () => { n.navigateByImgClick && t.wrap.on(`click${o}`, '.mfp-img', () => (t.items.length > 1 ? (t.next(), !1) : void 0)), i.on(`keydown${o}`, (e) => { e.keyCode === 37 ? t.prev() : e.keyCode === 39 && t.next(); }); }), I(`UpdateStatus${o}`, (e, n) => { n.text && (n.text = D(n.text, t.currItem.index, t.items.length)); }), I(u + o, (e, i, o, r) => { const a = t.items.length; o.counter = a > 1 ? D(n.tCounter, r.index, a) : ''; }), I(`BuildControls${o}`, () => { if (t.items.length > 1 && n.arrows && !t.arrowleft) { const i = n.arrowMarkup; const o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, 'left')).addClass(y); const r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, 'right')).addClass(y); o.click(() => { t.prev(); }), r.click(() => { t.next(); }), t.container.append(o.add(r)); } }), I(f + o, () => { t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(() => { t.preloadNearbyImages(), t._preloadTimeout = null; }, 16); }), void I(s + o, () => { i.off(o), t.wrap.off(`click${o}`), t.arrowRight = t.arrowLeft = null; })) : !1; }, next() { t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML(); }, prev() { t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML(); }, goTo(e) { t.direction = e >= t.index, t.index = e, t.updateItemHTML(); }, preloadNearbyImages() { let e; const n = t.st.gallery.preload; const i = Math.min(n[0], t.items.length); const o = Math.min(n[1], t.items.length); for (e = 1; e <= (t.direction ? o : i); e++)t._preloadItem(t.index + e); for (e = 1; e <= (t.direction ? i : o); e++)t._preloadItem(t.index - e); }, _preloadItem(n) { if (n = K(n), !t.items[n].preloaded) { let i = t.items[n]; i.parsed || (i = t.parseEl(n)), k('LazyLoad', i), i.type === 'image' && (i.img = e('<img class="mfp-img" />').on('load.mfploader', () => { i.hasSize = !0; }).on('error.mfploader', () => { i.hasSize = !0, i.loadError = !0, k('LazyLoadError', i); }).attr('src', i.src)), i.preloaded = !0; } },
    },
  }); const U = 'retina'; e.magnificPopup.registerModule(U, { options: { replaceSrc(e) { return e.src.replace(/\.\w+$/, (e) => `@2x${e}`); }, ratio: 1 }, proto: { initRetina() { if (window.devicePixelRatio > 1) { const e = t.st.retina; let n = e.ratio; n = isNaN(n) ? n() : n, n > 1 && (I(`ImageHasSize.${U}`, (e, t) => { t.img.css({ 'max-width': t.img[0].naturalWidth / n, width: '100%' }); }), I(`ElementParse.${U}`, (t, i) => { i.src = e.replaceSrc(i, n); })); } } } }), _();
}));

function edrea_tm_headline() {
  // set animation timing
  const animationDelay = 2500;
  // loading bar effect
  const barAnimationDelay = 3800;
  const barWaiting = barAnimationDelay - 3000; // 3000 is the duration of the transition on the loading bar - set in the scss/css file
  // letters effect
  const lettersDelay = 50;
  // type effect
  const typeLettersDelay = 150;
  const selectionDuration = 500;
  const typeAnimationDelay = selectionDuration + 800;
  // clip effect
  const revealDuration = 600;
  const revealAnimationDelay = 1500;

  initHeadline();

  function initHeadline() {
    // insert <i> element for each letter of a changing word
    singleLetters($('.cd-headline.letters').find('b'));
    // initialise headline animation
    animateHeadline($('.cd-headline'));
  }

  function singleLetters($words) {
    $words.each(function () {
      const word = $(this);
      const letters = word.text().split('');
      const selected = word.hasClass('is-visible');
      for (i in letters) {
        if (word.parents('.rotate-2').length > 0) letters[i] = `<em>${letters[i]}</em>`;
        letters[i] = (selected) ? `<i class="in">${letters[i]}</i>` : `<i>${letters[i]}</i>`;
      }
		    const newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
    });
  }

  function animateHeadline($headlines) {
    let duration = animationDelay;
    $headlines.each(function () {
      const headline = $(this);

      if (headline.hasClass('loading-bar')) {
        duration = barAnimationDelay;
        setTimeout(() => { headline.find('.cd-words-wrapper').addClass('is-loading'); }, barWaiting);
      } else if (headline.hasClass('clip')) {
        const spanWrapper = headline.find('.cd-words-wrapper');
        const newWidth = spanWrapper.width() + 10;
        spanWrapper.css('width', newWidth);
      } else if (!headline.hasClass('type')) {
        // assign to .cd-words-wrapper the width of its longest word
        const words = headline.find('.cd-words-wrapper b');
        let width = 0;
        words.each(function () {
          const wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
        });
        headline.find('.cd-words-wrapper').css('width', width);
      }

      // trigger animation
      setTimeout(() => { hideWord(headline.find('.is-visible').eq(0)); }, duration);
    });
  }

  function hideWord($word) {
    const nextWord = takeNext($word);

    if ($word.parents('.cd-headline').hasClass('type')) {
      const parentSpan = $word.parent('.cd-words-wrapper');
      parentSpan.addClass('selected').removeClass('waiting');
      setTimeout(() => {
        parentSpan.removeClass('selected');
        $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in')
          .addClass('out');
      }, selectionDuration);
      setTimeout(() => { showWord(nextWord, typeLettersDelay); }, typeAnimationDelay);
    } else if ($word.parents('.cd-headline').hasClass('letters')) {
      const bool = ($word.children('i').length >= nextWord.children('i').length);
      hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
      showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
    } else if ($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ width: '2px' }, revealDuration, () => {
        switchWord($word, nextWord);
        showWord(nextWord);
      });
    } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
      $word.parents('.cd-words-wrapper').removeClass('is-loading');
      switchWord($word, nextWord);
      setTimeout(() => { hideWord(nextWord); }, barAnimationDelay);
      setTimeout(() => { $word.parents('.cd-words-wrapper').addClass('is-loading'); }, barWaiting);
    } else {
      switchWord($word, nextWord);
      setTimeout(() => { hideWord(nextWord); }, animationDelay);
    }
  }

  function showWord($word, $duration) {
    if ($word.parents('.cd-headline').hasClass('type')) {
      showLetter($word.find('i').eq(0), $word, false, $duration);
      $word.addClass('is-visible').removeClass('is-hidden');
    } else if ($word.parents('.cd-headline').hasClass('clip')) {
      $word.parents('.cd-words-wrapper').animate({ width: $word.width() + 10 }, revealDuration, () => {
        setTimeout(() => { hideWord($word); }, revealAnimationDelay);
      });
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass('in').addClass('out');

    if (!$letter.is(':last-child')) {
		 	setTimeout(() => { hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else if ($bool) {
		 	setTimeout(() => { hideWord(takeNext($word)); }, animationDelay);
    }

    if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
      const nextWord = takeNext($word);
      switchWord($word, nextWord);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass('in').removeClass('out');

    if (!$letter.is(':last-child')) {
      setTimeout(() => { showLetter($letter.next(), $word, $bool, $duration); }, $duration);
    } else {
      if ($word.parents('.cd-headline').hasClass('type')) { setTimeout(() => { $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200); }
      if (!$bool) { setTimeout(() => { hideWord($word); }, animationDelay); }
    }
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }
}

/*------------------------------------------------------------------*/
/*	01) Owl Carousel
/*------------------------------------------------------------------*/

!(function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null,
    }, this._states = { current: {}, tags: { initializing: ['busy'], animating: ['busy'], dragging: ['interacting'] } }, a.each(['onResize', 'onThrottledResize'], a.proxy(function (b, c) { this._handlers[c] = a.proxy(this[c], this); }, this)), a.each(e.Plugins, a.proxy(function (a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this); }, this)), a.each(e.Workers, a.proxy(function (b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }); }, this)), this.setup(), this.initialize();
  }e.Defaults = {
    items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: 'swing', info: !1, nestedItemSelector: !1, itemElement: 'div', stageElement: 'div', refreshClass: 'owl-refresh', loadedClass: 'owl-loaded', loadingClass: 'owl-loading', rtlClass: 'owl-rtl', responsiveClass: 'owl-responsive', dragClass: 'owl-drag', itemClass: 'owl-item', stageClass: 'owl-stage', stageOuterClass: 'owl-stage-outer', grabClass: 'owl-grab',
  }, e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }, e.Type = { Event: 'event', State: 'state' }, e.Plugins = {}, e.Workers = [{ filter: ['width', 'settings'], run() { this._width = this.$element.width(); } }, { filter: ['width', 'items', 'settings'], run(a) { a.current = this._items && this._items[this.relative(this._current)]; } }, { filter: ['items', 'settings'], run() { this.$stage.children('.cloned').remove(); } }, { filter: ['width', 'items', 'settings'], run(a) { const b = this.settings.margin || ''; const c = !this.settings.autoWidth; const d = this.settings.rtl; const e = { width: 'auto', 'margin-left': d ? b : '', 'margin-right': d ? '' : b }; !c && this.$stage.children().css(e), a.css = e; } }, { filter: ['width', 'items', 'settings'], run(a) { const b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin; let c = null; let d = this._items.length; const e = !this.settings.autoWidth; const f = []; for (a.items = { merge: !1, width: b }; d--;)c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width(); this._widths = f; } }, { filter: ['items', 'settings'], run() { const b = []; const c = this._items; const d = this.settings; const e = Math.max(2 * d.items, 4); const f = 2 * Math.ceil(c.length / 2); let g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0; let h = ''; let i = ''; for (g /= 2; g--;)b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i; this._clones = b, a(h).addClass('cloned').appendTo(this.$stage), a(i).addClass('cloned').prependTo(this.$stage); } }, { filter: ['width', 'items', 'settings'], run() { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a); this._coordinates = f; } }, { filter: ['width', 'items', 'settings'], run() { const a = this.settings.stagePadding; const b = this._coordinates; const c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, 'padding-left': a || '', 'padding-right': a || '' }; this.$stage.css(c); } }, { filter: ['width', 'items', 'settings'], run(a) { let b = this._coordinates.length; const c = !this.settings.autoWidth; const d = this.$stage.children(); if (c && a.items.merge) for (;b--;)a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css); else c && (a.css.width = a.items.width, d.css(a.css)); } }, { filter: ['items'], run() { this._coordinates.length < 1 && this.$stage.removeAttr('style'); } }, { filter: ['width', 'items', 'settings'], run(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current); } }, { filter: ['position'], run() { this.animate(this.coordinates(this._current)); } }, { filter: ['width', 'position', 'items', 'settings'], run() { let a; let b; let c; let d; const e = this.settings.rtl ? 1 : -1; const f = 2 * this.settings.stagePadding; const g = this.coordinates(this.current()) + f; const h = g + this.width() * e; const i = []; for (c = 0, d = this._coordinates.length; c < d; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, '<=', g) && this.op(a, '>', h) || this.op(b, '<', g) && this.op(b, '>', h)) && i.push(c); this.$stage.children('.active').removeClass('active'), this.$stage.children(`:eq(${i.join('), :eq(')})`).addClass('active'), this.settings.center && (this.$stage.children('.center').removeClass('center'), this.$stage.children().eq(this.current()).addClass('center')); } }], e.prototype.initialize = function () { if (this.enter('initializing'), this.trigger('initialize'), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is('pre-loading')) { let b; let c; let e; b = this.$element.find('img'), c = this.settings.nestedItemSelector ? `.${this.settings.nestedItemSelector}` : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b); } this.$element.addClass(this.options.loadingClass), this.$stage = a(`<${this.settings.stageElement} class="${this.settings.stageClass}"/>`).wrap(`<div class="${this.settings.stageOuterClass}"/>`), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(':visible') ? this.refresh() : this.invalidate('width'), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave('initializing'), this.trigger('initialized'); }, e.prototype.setup = function () { const b = this.viewport(); const c = this.options.responsive; let d = -1; let e = null; c ? (a.each(c, (a) => { a <= b && a > d && (d = Number(a)); }), e = a.extend({}, this.options, c[d]), typeof e.stagePadding === 'function' && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr('class', this.$element.attr('class').replace(new RegExp(`(${this.options.responsiveClass}-)\\S+\\s`, 'g'), `$1${d}`))) : e = a.extend({}, this.options), this.trigger('change', { property: { name: 'settings', value: e } }), this._breakpoint = d, this.settings = e, this.invalidate('settings'), this.trigger('changed', { property: { name: 'settings', value: this.settings } }); }, e.prototype.optionsLogic = function () { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1); }, e.prototype.prepare = function (b) { const c = this.trigger('prepare', { content: b }); return c.data || (c.data = a(`<${this.settings.itemElement}/>`).addClass(this.options.itemClass).append(b)), this.trigger('prepared', { content: c.data }), c.data; }, e.prototype.update = function () { for (let b = 0, c = this._pipe.length, d = a.proxy(function (a) { return this[a]; }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++; this._invalidated = {}, !this.is('valid') && this.enter('valid'); }, e.prototype.width = function (a) { switch (a = a || e.Width.Default) { case e.Width.Inner: case e.Width.Outer: return this._width; default: return this._width - 2 * this.settings.stagePadding + this.settings.margin; } }, e.prototype.refresh = function () { this.enter('refreshing'), this.trigger('refresh'), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave('refreshing'), this.trigger('refreshed'); }, e.prototype.onThrottledResize = function () { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate); }, e.prototype.onResize = function () { return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(':visible') && (this.enter('resizing'), this.trigger('resize').isDefaultPrevented() ? (this.leave('resizing'), !1) : (this.invalidate('width'), this.refresh(), this.leave('resizing'), void this.trigger('resized'))))); }, e.prototype.registerEventHandlers = function () { a.support.transition && this.$stage.on(`${a.support.transition.end}.owl.core`, a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, 'resize', this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)), this.$stage.on('dragstart.owl.core selectstart.owl.core', () => !1)), this.settings.touchDrag && (this.$stage.on('touchstart.owl.core', a.proxy(this.onDragStart, this)), this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this))); }, e.prototype.onDragStart = function (b) { let d = null; b.which !== 3 && (a.support.transform ? (d = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(','), d = { x: d[d.length === 16 ? 12 : 4], y: d[d.length === 16 ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is('animating') && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate('position')), this.$element.toggleClass(this.options.grabClass, b.type === 'mousedown'), this.speed(0), this._drag.time = (new Date()).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on('mouseup.owl.core touchend.owl.core', a.proxy(this.onDragEnd, this)), a(c).one('mousemove.owl.core touchmove.owl.core', a.proxy(function (b) { const d = this.difference(this._drag.pointer, this.pointer(b)); a(c).on('mousemove.owl.core touchmove.owl.core', a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is('valid') || (b.preventDefault(), this.enter('dragging'), this.trigger('drag')); }, this))); }, e.prototype.onDragMove = function (a) { let b = null; let c = null; let d = null; const e = this.difference(this._drag.pointer, this.pointer(a)); const f = this.difference(this._drag.stage.start, e); this.is('dragging') && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)); }, e.prototype.onDragEnd = function (b) { const d = this.difference(this._drag.pointer, this.pointer(b)); const e = this._drag.stage.current; const f = d.x > 0 ^ this.settings.rtl ? 'left' : 'right'; a(c).off('.owl.core'), this.$element.removeClass(this.options.grabClass), (d.x !== 0 && this.is('dragging') || !this.is('valid')) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, d.x !== 0 ? f : this._drag.direction)), this.invalidate('position'), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date()).getTime() - this._drag.time > 300) && this._drag.target.one('click.owl.core', () => !1)), this.is('dragging') && (this.leave('dragging'), this.trigger('dragged')); }, e.prototype.closest = function (b, c) { let d = -1; const e = 30; const f = this.width(); const g = this.coordinates(); return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) { return c === 'left' && b > h - e && b < h + e ? d = a : c === 'right' && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, '<', h) && this.op(b, '>', g[a + 1] || h - f) && (d = c === 'left' ? a + 1 : a), d === -1; }, this)), this.settings.loop || (this.op(b, '>', g[this.minimum()]) ? d = b = this.minimum() : this.op(b, '<', g[this.maximum()]) && (d = b = this.maximum())), d; }, e.prototype.animate = function (b) { const c = this.speed() > 0; this.is('animating') && this.onTransitionEnd(), c && (this.enter('animating'), this.trigger('translate')), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: `translate3d(${b}px,0px,0px)`, transition: `${this.speed() / 1e3}s` }) : c ? this.$stage.animate({ left: `${b}px` }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: `${b}px` }); }, e.prototype.is = function (a) { return this._states.current[a] && this._states.current[a] > 0; }, e.prototype.current = function (a) { if (a === d) return this._current; if (this._items.length === 0) return d; if (a = this.normalize(a), this._current !== a) { const b = this.trigger('change', { property: { name: 'position', value: a } }); b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate('position'), this.trigger('changed', { property: { name: 'position', value: this._current } }); } return this._current; }, e.prototype.invalidate = function (b) { return a.type(b) === 'string' && (this._invalidated[b] = !0, this.is('valid') && this.leave('valid')), a.map(this._invalidated, (a, b) => b); }, e.prototype.reset = function (a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(['translate', 'translated']), this.animate(this.coordinates(a)), this.release(['translate', 'translated'])); }, e.prototype.normalize = function (a, b) { const c = this._items.length; const e = b ? 0 : this._clones.length; return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a; }, e.prototype.relative = function (a) { return a -= this._clones.length / 2, this.normalize(a, !0); }, e.prototype.maximum = function (a) { let b; let c; let d; const e = this.settings; let f = this._coordinates.length; if (e.loop)f = this._clones.length / 2 + this._items.length - 1; else if (e.autoWidth || e.merge) { for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););f = b + 1; } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0); }, e.prototype.minimum = function (a) { return a ? 0 : this._clones.length / 2; }, e.prototype.items = function (a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]); }, e.prototype.mergers = function (a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]); }, e.prototype.clones = function (b) { const c = this._clones.length / 2; const e = c + this._items.length; const f = function (a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2; }; return b === d ? a.map(this._clones, (a, b) => f(b)) : a.map(this._clones, (a, c) => (a === b ? f(c) : null)); }, e.prototype.speed = function (a) { return a !== d && (this._speed = a), this._speed; }, e.prototype.coordinates = function (b) { let c; let e = 1; let f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function (a, b) { return this.coordinates(b); }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)); }, e.prototype.duration = function (a, b, c) { return c === 0 ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed); }, e.prototype.to = function (a, b) { let c = this.current(); let d = null; let e = a - this.relative(c); const f = (e > 0) - (e < 0); const g = this._items.length; const h = this.minimum(); let i = this.maximum(); this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(':visible') && this.update(); }, e.prototype.next = function (a) { a = a || !1, this.to(this.relative(this.current()) + 1, a); }, e.prototype.prev = function (a) { a = a || !1, this.to(this.relative(this.current()) - 1, a); }, e.prototype.onTransitionEnd = function (a) { if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1; this.leave('animating'), this.trigger('translated'); }, e.prototype.viewport = function () { let d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn('Can not detect viewport width.'), d; }, e.prototype.replace = function (b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find(`.${this.settings.nestedItemSelector}`)), b.filter(function () { return this.nodeType === 1; }).each(a.proxy(function (a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1); }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate('items'); }, e.prototype.add = function (b, c) { const e = this.relative(this._current); c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger('add', { content: b, position: c }), b = this.prepare(b), this._items.length === 0 || c === this._items.length ? (this._items.length === 0 && this.$stage.append(b), this._items.length !== 0 && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate('items'), this.trigger('added', { content: b, position: c }); }, e.prototype.remove = function (a) { a = this.normalize(a, !0), a !== d && (this.trigger('remove', { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate('items'), this.trigger('removed', { content: null, position: a })); }, e.prototype.preloadAutoWidthImages = function (b) { b.each(a.proxy(function (b, c) { this.enter('pre-loading'), c = a(c), a(new Image()).one('load', a.proxy(function (a) { c.attr('src', a.target.src), c.css('opacity', 1), this.leave('pre-loading'), !this.is('pre-loading') && !this.is('initializing') && this.refresh(); }, this)).attr('src', c.attr('src') || c.attr('data-src') || c.attr('data-src-retina')); }, this)); }, e.prototype.destroy = function () {
    this.$element.off('.owl.core'), this.$stage.off('.owl.core'), a(c).off('.owl.core'), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, 'resize', this._handlers.onThrottledResize)); for (const d in this._plugins) this._plugins[d].destroy(); this.$stage.children('.cloned').remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass)
      .removeClass(this.options.dragClass)
      .removeClass(this.options.grabClass)
      .attr('class', this.$element.attr('class').replace(new RegExp(`${this.options.responsiveClass}-\\S+\\s`, 'g'), ''))
      .removeData('owl.carousel');
  }, e.prototype.op = function (a, b, c) { const d = this.settings.rtl; switch (b) { case '<': return d ? a > c : a < c; case '>': return d ? a < c : a > c; case '>=': return d ? a <= c : a >= c; case '<=': return d ? a >= c : a <= c; } }, e.prototype.on = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent(`on${b}`, c); }, e.prototype.off = function (a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent(`on${b}`, c); }, e.prototype.trigger = function (b, c, d, f, g) { const h = { item: { count: this._items.length, index: this.current() } }; const i = a.camelCase(a.grep(['on', b, d], (a) => a).join('-').toLowerCase()); const j = a.Event([b, 'owl', d || 'carousel'].join('.').toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, (a, b) => { b.onTrigger && b.onTrigger(j); }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && typeof this.settings[i] === 'function' && this.settings[i].call(this, j)), j; }, e.prototype.enter = function (b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++; }, this)); }, e.prototype.leave = function (b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) { this._states.current[b]--; }, this)); }, e.prototype.register = function (b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { const c = a.event.special[b.name]._default; a.event.special[b.name]._default = function (a) { return !c || !c.apply || a.namespace && a.namespace.indexOf('owl') !== -1 ? a.namespace && a.namespace.indexOf('owl') > -1 : c.apply(this, arguments); }, a.event.special[b.name].owl = !0; } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) { return a.inArray(c, this._states.tags[b.name]) === d; }, this))); }, e.prototype.suppress = function (b) { a.each(b, a.proxy(function (a, b) { this._supress[b] = !0; }, this)); }, e.prototype.release = function (b) { a.each(b, a.proxy(function (a, b) { delete this._supress[b]; }, this)); }, e.prototype.pointer = function (a) { const c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c; }, e.prototype.isNumeric = function (a) { return !isNaN(parseFloat(a)); }, e.prototype.difference = function (a, b) { return { x: a.x - b.x, y: a.y - b.y }; }, a.fn.owlCarousel = function (b) { const c = Array.prototype.slice.call(arguments, 1); return this.each(function () { const d = a(this); let f = d.data('owl.carousel'); f || (f = new e(this, typeof b === 'object' && b), d.data('owl.carousel', f), a.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], (b, c) => { f.register({ type: e.Type.Event, name: c }), f.$element.on(`${c}.owl.carousel.core`, a.proxy(function (a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])); }, f)); })), typeof b === 'string' && b.charAt(0) !== '_' && f[b].apply(f, c); }); }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) { var e = function (b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { 'initialized.owl.carousel': a.proxy(function (a) { a.namespace && this._core.settings.autoRefresh && this.watch(); }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers); }; e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function () { this._interval || (this._visible = this._core.$element.is(':visible'), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)); }, e.prototype.refresh = function () { this._core.$element.is(':visible') !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass('owl-hidden', !this._visible), this._visible && this._core.invalidate('width') && this._core.refresh()); }, e.prototype.destroy = function () { let a; let c; b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) typeof this[c] !== 'function' && (this[c] = null); }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e; }(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) { var e = function (b) { this._core = b, this._loaded = [], this._handlers = { 'initialized.owl.carousel change.owl.carousel resized.owl.carousel': a.proxy(function (b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && b.property.name == 'position' || b.type == 'initialized')) for (let c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) { this.load(b); }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++; }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers); }; e.Defaults = { lazyLoad: !1 }, e.prototype.load = function (c) { const d = this._core.$stage.children().eq(c); const e = d && d.find('.owl-lazy'); !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) { let e; const f = a(d); const g = b.devicePixelRatio > 1 && f.attr('data-src-retina') || f.attr('data-src'); this._core.trigger('load', { element: f, url: g }, 'lazy'), f.is('img') ? f.one('load.owl.lazy', a.proxy(function () { f.css('opacity', 1), this._core.trigger('loaded', { element: f, url: g }, 'lazy'); }, this)).attr('src', g) : (e = new Image(), e.onload = a.proxy(function () { f.css({ 'background-image': `url("${g}")`, opacity: '1' }), this._core.trigger('loaded', { element: f, url: g }, 'lazy'); }, this), e.src = g); }, this)), this._loaded.push(d.get(0))); }, e.prototype.destroy = function () { let a; let b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) typeof this[b] !== 'function' && (this[b] = null); }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e; }(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) { var e = function (b) { this._core = b, this._handlers = { 'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && this.update(); }, this), 'changed.owl.carousel': a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && a.property.name == 'position' && this.update(); }, this), 'loaded.owl.lazy': a.proxy(function (a) { a.namespace && this._core.settings.autoHeight && a.element.closest(`.${this._core.settings.itemClass}`).index() === this._core.current() && this.update(); }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers); }; e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }, e.prototype.update = function () { const b = this._core._current; const c = b + this._core.settings.items; const d = this._core.$stage.children().toArray().slice(b, c); const e = []; let f = 0; a.each(d, (b, c) => { e.push(a(c).height()); }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass); }, e.prototype.destroy = function () { let a; let b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) typeof this[b] !== 'function' && (this[b] = null); }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e; }(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      'initialized.owl.carousel': a.proxy(function (a) { a.namespace && this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] }); }, this), 'resize.owl.carousel': a.proxy(function (a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault(); }, this), 'refreshed.owl.carousel': a.proxy(function (a) { a.namespace && this._core.is('resizing') && this._core.$stage.find('.cloned .owl-video-frame').remove(); }, this), 'changed.owl.carousel': a.proxy(function (a) { a.namespace && a.property.name === 'position' && this._playing && this.stop(); }, this), 'prepared.owl.carousel': a.proxy(function (b) { if (b.namespace) { const c = a(b.content).find('.owl-video'); c.length && (c.css('display', 'none'), this.fetch(c, a(b.content))); } }, this),
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on('click.owl.video', '.owl-video-play-icon', a.proxy(function (a) { this.play(a); }, this));
  }; e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function (a, b) {
    let c = (function () { return a.attr('data-vimeo-id') ? 'vimeo' : a.attr('data-vzaar-id') ? 'vzaar' : 'youtube'; }()); let d = a.attr('data-vimeo-id') || a.attr('data-youtube-id') || a.attr('data-vzaar-id'); const e = a.attr('data-width') || this._core.settings.videoWidth; const f = a.attr('data-height') || this._core.settings.videoHeight; const g = a.attr('href'); if (!g) throw new Error('Missing video URL.'); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf('youtu') > -1)c = 'youtube'; else if (d[3].indexOf('vimeo') > -1)c = 'vimeo'; else { if (!(d[3].indexOf('vzaar') > -1)) throw new Error('Video URL not supported.'); c = 'vzaar'; }d = d[6], this._videos[g] = {
      type: c, id: d, width: e, height: f,
    }, b.attr('data-video', g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    let d; let e; let f; const g = c.width && c.height ? `style="width:${c.width}px;height:${c.height}px;"` : ''; const h = b.find('img'); let i = 'src'; let j = ''; const k = this._core.settings; const l = function (a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? `<div class="owl-video-tn ${j}" ${i}="${a}"></div>` : `<div class="owl-video-tn" style="opacity:1;background-image:url(${a})"></div>`, b.after(d), b.after(e); }; if (b.wrap(`<div class="owl-video-wrapper"${g}></div>`), this._core.settings.lazyLoad && (i = 'data-src', j = 'owl-lazy'), h.length) return l(h.attr(i)), h.remove(), !1; c.type === 'youtube' ? (f = `//img.youtube.com/vi/${c.id}/hqdefault.jpg`, l(f)) : c.type === 'vimeo' ? a.ajax({
      type: 'GET', url: `//vimeo.com/api/v2/video/${c.id}.json`, jsonp: 'callback', dataType: 'jsonp', success(a) { f = a[0].thumbnail_large, l(f); },
    }) : c.type === 'vzaar' && a.ajax({
      type: 'GET', url: `//vzaar.com/api/videos/${c.id}.json`, jsonp: 'callback', dataType: 'jsonp', success(a) { f = a.framegrab_url, l(f); },
    });
  }, e.prototype.stop = function () { this._core.trigger('stop', null, 'video'), this._playing.find('.owl-video-frame').remove(), this._playing.removeClass('owl-video-playing'), this._playing = null, this._core.leave('playing'), this._core.trigger('stopped', null, 'video'); }, e.prototype.play = function (b) { let c; const d = a(b.target); let e = d.closest(`.${this._core.settings.itemClass}`); const f = this._videos[e.attr('data-video')]; const g = f.width || '100%'; const h = f.height || this._core.$stage.height(); this._playing || (this._core.enter('playing'), this._core.trigger('play', null, 'video'), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), f.type === 'youtube' ? c = `<iframe width="${g}" height="${h}" src="//www.youtube.com/embed/${f.id}?autoplay=1&rel=0&v=${f.id}" frameborder="0" allowfullscreen></iframe>` : f.type === 'vimeo' ? c = `<iframe src="//player.vimeo.com/video/${f.id}?autoplay=1" width="${g}" height="${h}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>` : f.type === 'vzaar' && (c = `<iframe frameborder="0"height="${h}"width="${g}" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/${f.id}/player?autoplay=true"></iframe>`), a(`<div class="owl-video-frame">${c}</div>`).insertAfter(e.find('.owl-video')), this._playing = e.addClass('owl-video-playing')); }, e.prototype.isInFullScreen = function () { const b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass('owl-video-frame'); }, e.prototype.destroy = function () { let a; let b; this._core.$element.off('click.owl.video'); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) typeof this[b] !== 'function' && (this[b] = null); }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) {
  var e = function (b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { 'change.owl.carousel': a.proxy(function (a) { a.namespace && a.property.name == 'position' && (this.previous = this.core.current(), this.next = a.property.value); }, this), 'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': a.proxy(function (a) { a.namespace && (this.swapping = a.type == 'translated'); }, this), 'translate.owl.carousel': a.proxy(function (a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap(); }, this) }, this.core.$element.on(this.handlers); }; e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function () { if (this.core.settings.items === 1 && a.support.animation && a.support.transition) { this.core.speed(0); let b; const c = a.proxy(this.clear, this); const d = this.core.$stage.children().eq(this.previous); const e = this.core.$stage.children().eq(this.next); const f = this.core.settings.animateIn; const g = this.core.settings.animateOut; this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: `${b}px` }).addClass('animated owl-animated-out').addClass(g)), f && e.one(a.support.animation.end, c).addClass('animated owl-animated-in').addClass(f)); } }, e.prototype.clear = function (b) {
    a(b.target).css({ left: '' }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn)
      .removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () { let a; let b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) typeof this[b] !== 'function' && (this[b] = null); },
  a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
      'changed.owl.carousel': a.proxy(function (a) { a.namespace && a.property.name === 'settings' ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && a.property.name === 'position' && this._core.settings.autoplay && this._setAutoPlayInterval(); }, this), 'initialized.owl.carousel': a.proxy(function (a) { a.namespace && this._core.settings.autoplay && this.play(); }, this), 'play.owl.autoplay': a.proxy(function (a, b, c) { a.namespace && this.play(b, c); }, this), 'stop.owl.autoplay': a.proxy(function (a) { a.namespace && this.stop(); }, this), 'mouseover.owl.autoplay': a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause(); }, this), 'mouseleave.owl.autoplay': a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.play(); }, this), 'touchstart.owl.core': a.proxy(function () { this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause(); }, this), 'touchend.owl.core': a.proxy(function () { this._core.settings.autoplayHoverPause && this.play(); }, this),
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  }; e.Defaults = {
    autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1,
  }, e.prototype.play = function (a, b) { this._paused = !1, this._core.is('rotating') || (this._core.enter('rotating'), this._setAutoPlayInterval()); }, e.prototype._getNextTimeout = function (d, e) { return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () { this._paused || this._core.is('busy') || this._core.is('interacting') || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed); }, this), d || this._core.settings.autoplayTimeout); }, e.prototype._setAutoPlayInterval = function () { this._timeout = this._getNextTimeout(); }, e.prototype.stop = function () { this._core.is('rotating') && (b.clearTimeout(this._timeout), this._core.leave('rotating')); }, e.prototype.pause = function () { this._core.is('rotating') && (this._paused = !0); }, e.prototype.destroy = function () { let a; let b; this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) typeof this[b] !== 'function' && (this[b] = null); }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = {
      'prepared.owl.carousel': a.proxy(function (b) { b.namespace && this._core.settings.dotsData && this._templates.push(`<div class="${this._core.settings.dotClass}">${a(b.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot')}</div>`); }, this), 'added.owl.carousel': a.proxy(function (a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()); }, this), 'remove.owl.carousel': a.proxy(function (a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1); }, this), 'changed.owl.carousel': a.proxy(function (a) { a.namespace && a.property.name == 'position' && this.draw(); }, this), 'initialized.owl.carousel': a.proxy(function (a) { a.namespace && !this._initialized && (this._core.trigger('initialize', null, 'navigation'), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger('initialized', null, 'navigation')); }, this), 'refreshed.owl.carousel': a.proxy(function (a) { a.namespace && this._initialized && (this._core.trigger('refresh', null, 'navigation'), this.update(), this.draw(), this._core.trigger('refreshed', null, 'navigation')); }, this),
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  }; e.Defaults = {
    nav: !1, navText: ['prev', 'next'], navSpeed: !1, navElement: 'div', navContainer: !1, navContainerClass: 'owl-nav', navClass: ['owl-prev', 'owl-next'], slideBy: 1, dotClass: 'owl-dot', dotsClass: 'owl-dots', dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1,
  }, e.prototype.initialize = function () {
    let b; const c = this._core.settings; this._controls.$relative = (c.navContainer ? a(c.navContainer) : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)).addClass('disabled'), this._controls.$previous = a(`<${c.navElement}>`).addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative)
      .on('click', a.proxy(function (a) { this.prev(c.navSpeed); }, this)), this._controls.$next = a(`<${c.navElement}>`).addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative)
      .on('click', a.proxy(function (a) { this.next(c.navSpeed); }, this)), c.dotsData || (this._templates = [a('<div>').addClass(c.dotClass).append(a('<span>')).prop('outerHTML')]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a('<div>').addClass(c.dotsClass).appendTo(this.$element)).addClass('disabled'), this._controls.$absolute.on('click', 'div', a.proxy(function (b) { const d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index(); b.preventDefault(), this.to(d, c.dotsSpeed); }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
  }, e.prototype.destroy = function () { let a; let b; let c; let d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) typeof this[c] !== 'function' && (this[c] = null); }, e.prototype.update = function () { let a; let b; let c; const d = this._core.clones().length / 2; const e = d + this._core.items().length; const f = this._core.maximum(!0); const g = this._core.settings; const h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if (g.slideBy !== 'page' && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || g.slideBy == 'page') for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) { if (b >= h || b === 0) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break; b = 0, ++c; }b += this._core.mergers(this._core.relative(a)); } }, e.prototype.draw = function () { let b; const c = this._core.settings; const d = this._core.items().length <= c.items; const e = this._core.relative(this._core.current()); const f = c.loop || c.rewind; this._controls.$relative.toggleClass('disabled', !c.nav || d), c.nav && (this._controls.$previous.toggleClass('disabled', !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass('disabled', !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass('disabled', !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && b !== 0 ? this._controls.$absolute.html(this._templates.join('')) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find('.active').removeClass('active'), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass('active')); }, e.prototype.onTrigger = function (b) { const c = this._core.settings; b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) }; }, e.prototype.current = function () { const b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy((a, c) => a.start <= b && a.end >= b, this)).pop(); }, e.prototype.getPosition = function (b) { let c; let d; const e = this._core.settings; return e.slideBy == 'page' ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c; }, e.prototype.next = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b); }, e.prototype.prev = function (b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b); }, e.prototype.to = function (b, c, d) { let e; !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c); }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) {
  var e = function (c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { 'initialized.owl.carousel': a.proxy(function (c) { c.namespace && this._core.settings.startPosition === 'URLHash' && a(b).trigger('hashchange.owl.navigation'); }, this), 'prepared.owl.carousel': a.proxy(function (b) { if (b.namespace) { const c = a(b.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash'); if (!c) return; this._hashes[c] = b.content; } }, this), 'changed.owl.carousel': a.proxy(function (c) { if (c.namespace && c.property.name === 'position') { const d = this._core.items(this._core.relative(this._core.current())); const e = a.map(this._hashes, (a, b) => (a === d ? b : null)).join(); if (!e || b.location.hash.slice(1) === e) return; b.location.hash = e; } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on('hashchange.owl.navigation', a.proxy(function (a) { const c = b.location.hash.substring(1); const e = this._core.$stage.children(); const f = this._hashes[c] && e.index(this._hashes[c]); f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0); }, this)); }; e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () { let c; let d; a(b).off('hashchange.owl.navigation'); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) typeof this[d] !== 'function' && (this[d] = null); }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document)), (function (a, b, c, d) {
  function e(b, c) { let e = !1; const f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((`${b} ${h.join(`${f} `)}${f}`).split(' '), (a, b) => { if (g[b] !== d) return e = !c || b, !1; }), e; } function f(a) { return e(a, !0); } var g = a('<support>').get(0).style; var h = 'Webkit Moz O ms'.split(' '); const i = {
    transition: {
      end: {
        WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd', transition: 'transitionend',
      },
    },
    animation: {
      end: {
        WebkitAnimation: 'webkitAnimationEnd', MozAnimation: 'animationend', OAnimation: 'oAnimationEnd', animation: 'animationend',
      },
    },
  }; const j = {
    csstransforms() { return !!e('transform'); }, csstransforms3d() { return !!e('perspective'); }, csstransitions() { return !!e('transition'); }, cssanimations() { return !!e('animation'); },
  }; j.csstransitions() && (a.support.transition = new String(f('transition')), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f('animation')), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f('transform')), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document));

/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!(function (i) { if (typeof define === 'function' && define.amd)define(['jquery'], i); else if (typeof module === 'object' && module.exports) { const t = require('jquery'); i(t), module.exports = t; } else i(jQuery); }((i) => {
  function t(i) { this.init(i); }t.prototype = {
    value: 0, size: 100, startAngle: -Math.PI, thickness: 'auto', fill: { gradient: ['#3aeabb', '#fdd250'] }, emptyFill: 'rgba(0, 0, 0, .1)', animation: { duration: 1200, easing: 'circleProgressEasing' }, animationStartValue: 0, reverse: !1, lineCap: 'butt', insertMode: 'prepend', constructor: t, el: null, canvas: null, ctx: null, radius: 0, arcFill: null, lastFrameValue: 0, init(t) { i.extend(this, t), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger('circle-inited'); }, initWidget() { this.canvas || (this.canvas = i('<canvas>')[this.insertMode == 'prepend' ? 'prependTo' : 'appendTo'](this.el)[0]); const t = this.canvas; if (t.width = this.size, t.height = this.size, this.ctx = t.getContext('2d'), window.devicePixelRatio > 1) { const e = window.devicePixelRatio; t.style.width = t.style.height = `${this.size}px`, t.width = t.height = this.size * e, this.ctx.scale(e, e); } }, initFill() { function t() { const t = i('<canvas>')[0]; t.width = e.size, t.height = e.size, t.getContext('2d').drawImage(g, 0, 0, r, r), e.arcFill = e.ctx.createPattern(t, 'no-repeat'), e.drawFrame(e.lastFrameValue); } var e = this; let a = this.fill; const n = this.ctx; var r = this.size; if (!a) throw Error('The fill is not specified!'); if (typeof a === 'string' && (a = { color: a }), a.color && (this.arcFill = a.color), a.gradient) { const s = a.gradient; if (s.length == 1) this.arcFill = s[0]; else if (s.length > 1) { for (var l = a.gradientAngle || 0, o = a.gradientDirection || [r / 2 * (1 - Math.cos(l)), r / 2 * (1 + Math.sin(l)), r / 2 * (1 + Math.cos(l)), r / 2 * (1 - Math.sin(l))], h = n.createLinearGradient.apply(n, o), c = 0; c < s.length; c++) { let d = s[c]; let u = c / (s.length - 1); i.isArray(d) && (u = d[1], d = d[0]), h.addColorStop(u, d); } this.arcFill = h; } } if (a.image) { var g; a.image instanceof Image ? g = a.image : (g = new Image(), g.src = a.image), g.complete ? t() : g.onload = t; } }, draw() { this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value); }, drawFrame(i) { this.lastFrameValue = i, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(i), this.drawArc(i); }, drawArc(i) { if (i !== 0) { const t = this.ctx; const e = this.radius; const a = this.getThickness(); const n = this.startAngle; t.save(), t.beginPath(), this.reverse ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n) : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i), t.lineWidth = a, t.lineCap = this.lineCap, t.strokeStyle = this.arcFill, t.stroke(), t.restore(); } }, drawEmptyArc(i) { const t = this.ctx; const e = this.radius; const a = this.getThickness(); const n = this.startAngle; i < 1 && (t.save(), t.beginPath(), i <= 0 ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI) : this.reverse ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i) : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n), t.lineWidth = a, t.strokeStyle = this.emptyFill, t.stroke(), t.restore()); }, drawAnimated(t) { const e = this; const a = this.el; const n = i(this.canvas); n.stop(!0, !1), a.trigger('circle-animation-start'), n.css({ animationProgress: 0 }).animate({ animationProgress: 1 }, i.extend({}, this.animation, { step(i) { const n = e.animationStartValue * (1 - i) + t * i; e.drawFrame(n), a.trigger('circle-animation-progress', [i, n]); } })).promise().always(() => { a.trigger('circle-animation-end'); }); }, getThickness() { return i.isNumeric(this.thickness) ? this.thickness : this.size / 14; }, getValue() { return this.value; }, setValue(i) { this.animation && (this.animationStartValue = this.lastFrameValue), this.value = i, this.draw(); },
  }, i.circleProgress = { defaults: t.prototype }, i.easing.circleProgressEasing = function (i) { return i < 0.5 ? (i = 2 * i, 0.5 * i * i * i) : (i = 2 - 2 * i, 1 - 0.5 * i * i * i); }, i.fn.circleProgress = function (e, a) { const n = 'circle-progress'; const r = this.data(n); if (e == 'widget') { if (!r) throw Error('Calling "widget" method on not initialized instance is forbidden'); return r.canvas; } if (e == 'value') { if (!r) throw Error('Calling "value" method on not initialized instance is forbidden'); if (typeof a === 'undefined') return r.getValue(); const s = arguments[1]; return this.each(function () { i(this).data(n).setValue(s); }); } return this.each(function () { const a = i(this); let r = a.data(n); let s = i.isPlainObject(e) ? e : {}; if (r)r.init(s); else { const l = i.extend({}, a.data()); typeof l.fill === 'string' && (l.fill = JSON.parse(l.fill)), typeof l.animation === 'string' && (l.animation = JSON.parse(l.animation)), s = i.extend(l, s), s.el = a, r = new t(s), a.data(n, r); } }); };
}));

// https://github.com/bsehovac/shader-program

class ShaderProgram {
  constructor(holder, options = {}) {
    options = {
      antialias: false,
      depthTest: false,
      mousemove: false,
      autosize: true,
      side: 'front',
      vertex: `
        precision highp float;

        attribute vec4 a_position;
        attribute vec4 a_color;

        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mousemove;
        uniform mat4 u_projection;

        varying vec4 v_color;

        void main() {

          gl_Position = u_projection * a_position;
          gl_PointSize = (10.0 / gl_Position.w) * 100.0;

          v_color = a_color;

        }`,
      fragment: `
        precision highp float;

        uniform sampler2D u_texture;
        uniform int u_hasTexture;

        varying vec4 v_color;

        void main() {

          if ( u_hasTexture == 1 ) {

            gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);

          } else {

            gl_FragColor = v_color;

          }

        }`,
      uniforms: {},
      buffers: {},
      camera: {},
      texture: null,
      onUpdate: (() => {}),
      onResize: (() => {}),
      ...options,
    };

    const uniforms = {
      time: { type: 'float', value: 0 },
      hasTexture: { type: 'int', value: 0 },
      resolution: { type: 'vec2', value: [0, 0] },
      mousemove: { type: 'vec2', value: [0, 0] },
      projection: { type: 'mat4', value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] },
      ...options.uniforms,
    };

    const buffers = {
      position: { size: 3, data: [] },
      color: { size: 4, data: [] },
      ...options.buffers,
    };

    const camera = {
      fov: 60,
      near: 1,
      far: 10000,
      aspect: 1,
      z: 100,
      perspective: true,
      ...options.camera,
    };

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl', { antialias: options.antialias });

    if (!gl) return false;

    this.count = 0;
    this.gl = gl;
    this.canvas = canvas;
    this.camera = camera;
    this.holder = holder;
    this.onUpdate = options.onUpdate;
    this.onResize = options.onResize;
    this.data = {};

    holder.appendChild(canvas);

    this.createProgram(options.vertex, options.fragment);

    this.createBuffers(buffers);
    this.createUniforms(uniforms);

    this.updateBuffers();
    this.updateUniforms();

    this.createTexture(options.texture);

    gl.enable(gl.BLEND);
    gl.enable(gl.CULL_FACE);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl[options.depthTest ? 'enable' : 'disable'](gl.DEPTH_TEST);

    if (options.autosize) { window.addEventListener('resize', (e) => this.resize(e), false); }
    if (options.mousemove) { window.addEventListener('mousemove', (e) => this.mousemove(e), false); }

    this.resize();

    this.update = this.update.bind(this);
    this.time = { start: performance.now(), old: performance.now() };
    this.update();
  }

  mousemove(e) {
    const x = e.pageX / this.width * 2 - 1;
    const y = e.pageY / this.height * 2 - 1;

    this.uniforms.mousemove = [x, y];
  }

  resize(e) {
    const { holder } = this;
    const { canvas } = this;
    const { gl } = this;

    const width = this.width = holder.offsetWidth;
    const height = this.height = holder.offsetHeight;
    const aspect = this.aspect = width / height;
    const dpi = devicePixelRatio;

    canvas.width = width * dpi;
    canvas.height = height * dpi;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    gl.viewport(0, 0, width * dpi, height * dpi);
    gl.clearColor(0, 0, 0, 0);

    this.uniforms.resolution = [width, height];
    this.uniforms.projection = this.setProjection(aspect);

    this.onResize(width, height, dpi);
  }

  setProjection(aspect) {
    const { camera } = this;

    if (camera.perspective) {
      camera.aspect = aspect;

      const fovRad = camera.fov * (Math.PI / 180);
      const f = Math.tan(Math.PI * 0.5 - 0.5 * fovRad);
      const rangeInv = 1.0 / (camera.near - camera.far);

      const matrix = [
        f / camera.aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (camera.near + camera.far) * rangeInv, -1,
        0, 0, camera.near * camera.far * rangeInv * 2, 0,
      ];

      matrix[14] += camera.z;
      matrix[15] += camera.z;

      return matrix;
    }

    return [
      2 / this.width, 0, 0, 0,
      0, -2 / this.height, 0, 0,
      0, 0, 1, 0,
      -1, 1, 0, 1,
    ];
  }

  createShader(type, source) {
    const { gl } = this;
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

  createProgram(vertex, fragment) {
    const { gl } = this;

    const vertexShader = this.createShader(gl.VERTEX_SHADER, vertex);
    const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragment);

    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.useProgram(program);
      this.program = program;
    } else {
      console.log(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
    }
  }

  createUniforms(data) {
    const { gl } = this;
    const uniforms = this.data.uniforms = data;
    const values = this.uniforms = {};

    Object.keys(uniforms).forEach((name) => {
      const uniform = uniforms[name];

      uniform.location = gl.getUniformLocation(this.program, `u_${name}`);

      Object.defineProperty(values, name, {
        set: (value) => {
          uniforms[name].value = value;
          this.setUniform(name, value);
        },
        get: () => uniforms[name].value,
      });
    });
  }

  setUniform(name, value) {
    const { gl } = this;
    const uniform = this.data.uniforms[name];

    uniform.value = value;

    switch (uniform.type) {
      case 'int': {
        gl.uniform1i(uniform.location, value);
        break;
      }
      case 'float': {
        gl.uniform1f(uniform.location, value);
        break;
      }
      case 'vec2': {
        gl.uniform2f(uniform.location, ...value);
        break;
      }
      case 'vec3': {
        gl.uniform3f(uniform.location, ...value);
        break;
      }
      case 'vec4': {
        gl.uniform4f(uniform.location, ...value);
        break;
      }
      case 'mat2': {
        gl.uniformMatrix2fv(uniform.location, false, value);
        break;
      }
      case 'mat3': {
        gl.uniformMatrix3fv(uniform.location, false, value);
        break;
      }
      case 'mat4': {
        gl.uniformMatrix4fv(uniform.location, false, value);
        break;
      }
    }

    // ivec2       : uniform2i,
    // ivec3       : uniform3i,
    // ivec4       : uniform4i,
    // sampler2D   : uniform1i,
    // samplerCube : uniform1i,
    // bool        : uniform1i,
    // bvec2       : uniform2i,
    // bvec3       : uniform3i,
    // bvec4       : uniform4i,
  }

  updateUniforms() {
    const { gl } = this;
    const { uniforms } = this.data;

    Object.keys(uniforms).forEach((name) => {
      const uniform = uniforms[name];

      this.uniforms[name] = uniform.value;
    });
  }

  createBuffers(data) {
    const { gl } = this;
    const buffers = this.data.buffers = data;
    const values = this.buffers = {};

    Object.keys(buffers).forEach((name) => {
      const buffer = buffers[name];

      buffer.buffer = this.createBuffer(`a_${name}`, buffer.size);

      Object.defineProperty(values, name, {
        set: (data) => {
          buffers[name].data = data;
          this.setBuffer(name, data);

          if (name == 'position') { this.count = buffers.position.data.length / 3; }
        },
        get: () => buffers[name].data,
      });
    });
  }

  createBuffer(name, size) {
    const { gl } = this;
    const { program } = this;

    const index = gl.getAttribLocation(program, name);
    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(index);
    gl.vertexAttribPointer(index, size, gl.FLOAT, false, 0, 0);

    return buffer;
  }

  setBuffer(name, data) {
    const { gl } = this;
    const { buffers } = this.data;

    if (name == null && !gl.bindBuffer(gl.ARRAY_BUFFER, null)) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffers[name].buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
  }

  updateBuffers() {
    const { gl } = this;
    const { buffers } = this;

    Object.keys(buffers).forEach((name) => buffers[name] = buffer.data);

    this.setBuffer(null);
  }

  createTexture(src) {
    const { gl } = this;
    const texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));

    this.texture = texture;

    if (src) {
      this.uniforms.hasTexture = 1;
      this.loadTexture(src);
    }
  }

  loadTexture(src) {
    const { gl } = this;
    const { texture } = this;

    const textureImage = new Image();

    textureImage.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);

      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    };

    textureImage.src = src;
  }

  update() {
    const { gl } = this;

    const now = performance.now();
    const elapsed = (now - this.time.start) / 5000;
    const delta = now - this.time.old;
    this.time.old = now;

    this.uniforms.time = elapsed;

    if (this.count > 0) {
      gl.clear(gl.COLORBUFFERBIT);
      gl.drawArrays(gl.POINTS, 0, this.count);
    }

    this.onUpdate(delta);

    requestAnimationFrame(this.update);
  }
}

const pointSize = 2.5;

const waves = new ShaderProgram(document.querySelector('.waves'), {
  texture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC',
  uniforms: {
    size: { type: 'float', value: pointSize },
    field: { type: 'vec3', value: [0, 0, 0] },
    speed: { type: 'float', value: 5 },
  },
  vertex: `
    #define M_PI 3.1415926535897932384626433832795

    precision highp float;

    attribute vec4 a_position;
    attribute vec4 a_color;

    uniform float u_time;
    uniform float u_size;
    uniform float u_speed;
    uniform vec3 u_field;
    uniform mat4 u_projection;

    varying vec4 v_color;

    void main() {

      vec3 pos = a_position.xyz;

      pos.y += (
        cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +
        sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)
      ) * u_field.y;

      gl_Position = u_projection * vec4( pos.xyz, a_position.w );
      gl_PointSize = ( u_size / gl_Position.w ) * 100.0;

      v_color = a_color;

    }`,
  fragment: `
    precision highp float;

    uniform sampler2D u_texture;

    varying vec4 v_color;

    void main() {

      gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);

    }`,
  onResize(w, h, dpi) {
    const position = []; const
      color = [];

    const width = 400 * (w / h);
    const depth = 400;
    const height = 3;
    const distance = 5;

    for (let x = 0; x < width; x += distance) {
      for (let z = 0; z < depth; z += distance) {
        position.push(-width / 2 + x, -30, -depth / 2 + z);
        color.push(0, 1 - (x / width) * 1, 0.5 + x / width * 0.5, z / depth);
      }
    }

    this.uniforms.field = [width, height, depth];

    this.buffers.position = position;
    this.buffers.color = color;

    this.uniforms.size = (h / 400) * pointSize * dpi;
  },
});
