/*! photoswipe-simplify v0.0.3 | (c) 2019 Mineo Okuda | MIT License | git+ssh://git@github.com:min30327/photoswipe-simplify.git */
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; !(function (t, e) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e() })(0, (function () { "use strict"; function t(t) { var e = this.constructor; return this.then((function (n) { return e.resolve(t()).then((function () { return n })) }), (function (n) { return e.resolve(t()).then((function () { return e.reject(n) })) })) } function e() { } function n(t, e) { return function () { t.apply(e, arguments) } } function i(t) { if (!(this instanceof i)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof t) throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(t, this) } function o(t, e) { for (; 3 === t._state;)t = t._value; if (0 === t._state) return void t._deferreds.push(e); t._handled = !0, i._immediateFn((function () { var n = 1 === t._state ? e.onFulfilled : e.onRejected; if (null === n) return void (1 === t._state ? r : s)(e.promise, t._value); var i; try { i = n(t._value) } catch (t) { return void s(e.promise, t) } r(e.promise, i) })) } function r(t, e) { try { if (e === t) throw new TypeError("A promise cannot be resolved with itself."); if (e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e)) { var o = e.then; if (e instanceof i) return t._state = 3, t._value = e, void a(t); if ("function" == typeof o) return void u(n(o, e), t) } t._state = 1, t._value = e, a(t) } catch (e) { s(t, e) } } function s(t, e) { t._state = 2, t._value = e, a(t) } function a(t) { 2 === t._state && 0 === t._deferreds.length && i._immediateFn((function () { t._handled || i._unhandledRejectionFn(t._value) })); for (var e = 0, n = t._deferreds.length; e < n; e++)o(t, t._deferreds[e]); t._deferreds = null } function l(t, e, n) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n } function u(t, e) { var n = !1; try { t((function (t) { n || (n = !0, r(e, t)) }), (function (t) { n || (n = !0, s(e, t)) })) } catch (t) { if (n) return; n = !0, s(e, t) } } var p = setTimeout; i.prototype.catch = function (t) { return this.then(null, t) }, i.prototype.then = function (t, n) { var i = new this.constructor(e); return o(this, new l(t, n, i)), i }, i.prototype.finally = t, i.all = function (t) { return new i(function (e, n) { function i(t, s) { try { if (s && ("object" === (void 0 === s ? "undefined" : _typeof(s)) || "function" == typeof s)) { var a = s.then; if ("function" == typeof a) return void a.call(s, (function (e) { i(t, e) }), n) } o[t] = s, 0 == --r && e(o) } catch (t) { n(t) } } if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array"); var o = Array.prototype.slice.call(t); if (0 === o.length) return e([]); for (var r = o.length, s = 0; s < o.length; s++)i(s, o[s]) }) }, i.resolve = function (t) { return t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && t.constructor === i ? t : new i(function (e) { e(t) }) }, i.reject = function (t) { return new i(function (e, n) { n(t) }) }, i.race = function (t) { return new i(function (e, n) { for (var i = 0, o = t.length; i < o; i++)t[i].then(e, n) }) }, i._immediateFn = "function" == typeof setImmediate && function (t) { setImmediate(t) } || function (t) { p(t, 0) }, i._unhandledRejectionFn = function (t) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t) }; var c = (function () { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if ("undefined" != typeof global) return global; throw new Error("unable to locate global object") })(); "Promise" in c ? c.Promise.prototype.finally || (c.Promise.prototype.finally = t) : c.Promise = i })), (function (t, e) { "use strict"; "function" == typeof define && define.amd ? define([], e) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = e() : t.photoswipeSimplify = e() })(this, (function () { "use strict"; var t = { target: "[data-pswp]" }, e = function () { var t = {}, e = 0, n = arguments.length; for (e = 0; e < n; e++) { var i = arguments[e]; !(function (e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(i) } return t }, n = function () { }; return n.prototype = { initialized: !1, pswpElement: "", galleries: [], thumbnails: [], tmps: [], items: [], options: {}, ImagesLoaded: !1, init: function (n) { var i = this; i.options = e(t, n || {}), i.initialized || (i.append_template(), i.initialized = !0), i.initPhotoSwipe(i.options.target) }, append_template: function () { var t = document.getElementsByTagName("body")[0], e = document.createElement("div"); e.innerHTML = '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button><button class="pswp__button pswp__button--share" title="Share"></button><button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button><button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button><button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>', t.appendChild(e) }, initPhotoSwipe: function (t) { var e = this; if (e.pswpElement = document.querySelectorAll(".pswp")[0], e.galleries = document.querySelectorAll(t), e.galleries.length > 0) for (var n = 0; n < e.galleries.length; n++) { if (e.items[n] = [], e.thumbnails[n] = [], e.tmps[n] = e.galleries[n].getElementsByTagName("a"), e.tmps[n] = Array.prototype.slice.call(e.tmps[n]), e.tmps[n].length > 0) for (var i = 0; i < e.tmps[n].length; i++) { var o = e.tmps[n][i].getAttribute("href"); /(.gif|.jpe?g|.png|.bmp)/.test(o.toLowerCase()) && e.thumbnails[n].push(e.tmps[n][i]) } var r = new Promise(function (t) { e.parseItems(t, n) }); if (r.then((function () { e.galleryLoaded() })), e.thumbnails[n].length > 0) for (var s = 0; s < e.thumbnails[n].length; s++)e.thumbnails[n][s].setAttribute("data-pswp-index", n), e.thumbnails[n][s].classList.add("pswp--item"), e.attachEvent(e.thumbnails[n][s], n, s) } }, galleryLoaded: function () { var t = this; if (t.galleries.length > 0) for (var e = 0; e < t.galleries.length; e++)t.galleries[e].classList.add("pswp--loaded") }, attachEvent: function (t, e, n) { var i = this; t.addEventListener("click", (function (t) { t.preventDefault(), document.body.classList.add("pswp--launched"); var o = document.querySelector(".pswp--active"); return o && o.classList.remove("pswp--active"), i.galleries[e].classList.add("pswp--active"), i.galleries[e].setAttribute("data-pswp-index", n), i.galleries[e].classList.contains("pswp--loaded") && n >= 0 && i.open(e, n), !1 })) }, getImageSizes: function (t, e, n, i, o) { var r = this; new Promise(function (s, a) { var l = new Image; l.src = t, l.onload = function () { r.items[e][n] = { src: t, w: l.naturalWidth, h: l.naturalHeight, title: i, author: o }, s() } }) }, open: function (t, e) { var n, i = this; i.galleries[t]; i.options.galleryUID = t, i.options.index = e, i.options.getThumbBoundsFn = function (t) { var e = document.querySelector(".pswp--active"); if (e) { var n = e.querySelectorAll(".pswp--item")[t].getElementsByTagName("img")[0], i = window.pageYOffset || document.documentElement.scrollTop, o = n.getBoundingClientRect(); return { x: o.left, y: o.top + i, w: o.width } } }, i.options.addCaptionHTMLFn = function (t, e, n) { return t.title ? (e.children[0].innerHTML = t.title, t.author && (e.children[0].innerHTML += "<br><small>" + t.author + "</small>"), !0) : (e.children[0].innerText = "", !1) }, document.body.classList.remove("pswp--launched"), n = new PhotoSwipe(i.pswpElement, PhotoSwipeUI_Default, i.items[t], i.options), n.init() }, parseItems: function (t, e) { var n = this, i = []; if (n.thumbnails[e].length > 0) for (var o = 0; o < n.thumbnails[e].length; o++) { var r = n.thumbnails[e][o].getAttribute("href"), s = n.thumbnails[e][o].getAttribute("data-caption"), a = n.thumbnails[e][o].getAttribute("data-author"); i.push(n.getImageSizes(r, e, o, s, a)), Promise.all(i).then((function () { t() })) } } }, new n }));