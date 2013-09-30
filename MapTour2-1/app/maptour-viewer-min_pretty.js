!
function (a, b) {
    function c(a) {
        var b = a.length,
            c = ib.type(a);
        return ib.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    function d(a) {
        var b = xb[a] = {};
        return ib.each(a.match(kb) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    function e(a, c, d, e) {
        if (ib.acceptData(a)) {
            var f, g, h = ib.expando,
                i = "string" == typeof c,
                j = a.nodeType,
                k = j ? ib.cache : a,
                l = j ? a[h] : a[h] && h;
            if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = _.pop() || ib.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = ib.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = ib.extend(k[l], c) : k[l].data = ib.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[ib.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[ib.camelCase(c)])) : g = f, g
        }
    }
    function f(a, b, c) {
        if (ib.acceptData(a)) {
            var d, e, f, g = a.nodeType,
                i = g ? ib.cache : a,
                j = g ? a[ib.expando] : ib.expando;
            if (i[j]) {
                if (b && (f = c ? i[j] : i[j].data)) {
                    ib.isArray(b) ? b = b.concat(ib.map(b, ib.camelCase)) : b in f ? b = [b] : (b = ib.camelCase(b), b = b in f ? [b] : b.split(" "));
                    for (d = 0, e = b.length; e > d; d++) delete f[b[d]];
                    if (!(c ? h : ib.isEmptyObject)(f)) return
                }(c || (delete i[j].data, h(i[j]))) && (g ? ib.cleanData([a], !0) : ib.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
            }
        }
    }
    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(zb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : yb.test(d) ? ib.parseJSON(d) : d
                } catch (f) {}
                ib.data(a, c, d)
            } else d = b
        }
        return d
    }
    function h(a) {
        var b;
        for (b in a) if (("data" !== b || !ib.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }
    function i() {
        return !0
    }
    function j() {
        return !1
    }
    function k(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    function l(a, b, c) {
        if (b = b || 0, ib.isFunction(b)) return ib.grep(a, function (a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return ib.grep(a, function (a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = ib.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (Rb.test(b)) return ib.filter(b, d, !c);
            b = ib.filter(b, d)
        }
        return ib.grep(a, function (a) {
            return ib.inArray(a, b) >= 0 === c
        })
    }
    function m(a) {
        var b = Ub.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) for (; b.length;) c.createElement(b.pop());
        return c
    }
    function n(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function o(a) {
        var b = a.getAttributeNode("type");
        return a.type = (b && b.specified) + "/" + a.type, a
    }
    function p(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function q(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ib._data(c, "globalEval", !b || ib._data(b[d], "globalEval"))
    }
    function r(a, b) {
        if (1 === b.nodeType && ib.hasData(a)) {
            var c, d, e, f = ib._data(a),
                g = ib._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) ib.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ib.extend({}, g.data))
        }
    }
    function s(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ib.support.noCloneEvent && b[ib.expando]) {
                e = ib._data(b);
                for (d in e.events) ib.removeEvent(b, d, e.handle);
                b.removeAttribute(ib.expando)
            }
            "script" === c && b.text !== a.text ? (o(b).text = a.text, p(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ib.support.html5Clone && a.innerHTML && !ib.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    function t(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== V ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== V ? a.querySelectorAll(c || "*") : b;
        if (!g) for (g = [], d = a.childNodes || a; null != (e = d[f]); f++)!c || ib.nodeName(e, c) ? g.push(e) : ib.merge(g, t(e, c));
        return c === b || c && ib.nodeName(a, c) ? ib.merge([a], g) : g
    }
    function u(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked)
    }
    function v(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;) if (b = yc[e] + c, b in a) return b;
        return d
    }
    function w(a, b) {
        return a = b || a, "none" === ib.css(a, "display") || !ib.contains(a.ownerDocument, a)
    }
    function x(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ib._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && w(d) && (f[g] = ib._data(d, "olddisplay", B(d.nodeName)))) : f[g] || (e = w(d), (c && "none" !== c || !e) && ib._data(d, "olddisplay", e ? c : ib.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function y(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += ib.css(a, c + xc[f], !0, e)), d ? ("content" === c && (g -= ib.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= ib.css(a, "border" + xc[f] + "Width", !0, e))) : (g += ib.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += ib.css(a, "border" + xc[f] + "Width", !0, e)));
        return g
    }
    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = kc(a),
            g = ib.support.boxSizing && "border-box" === ib.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (ib.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function B(a) {
        var b = W,
            c = uc[a];
        return c || (c = C(a, b), "none" !== c && c || (jc = (jc || ib("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = C(a, b), jc.detach()), uc[a] = c), c
    }
    function C(a, b) {
        var c = ib(b.createElement(a)).appendTo(b.body),
            d = ib.css(c[0], "display");
        return c.remove(), d
    }
    function D(a, b, c, d) {
        var e;
        if (ib.isArray(b)) ib.each(b, function (b, e) {
            c || Ac.test(a) ? d(a, e) : D(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ib.type(b)) d(a, b);
        else for (e in b) D(a + "[" + e + "]", b[e], c, d)
    }
    function E(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(kb) || [];
            if (ib.isFunction(c)) for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function F(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, ib.each(a[i] || [], function (a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
            }), j
        }
        var g = {},
            h = a === Rc;
        return f(c.dataTypes[0]) || !g["*"] && f("*")
    }
    function G(a, c) {
        var d, e, f = ib.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && ib.extend(!0, a, d), a
    }
    function H(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (h in k) h in d && (c[k[h]] = d[h]);
        for (;
        "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break
        }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break
                }
                e || (e = h)
            }
            g = g || e
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }
    function I(a, b) {
        var c, d, e, f, g = {},
            h = 0,
            i = a.dataTypes.slice(),
            j = i[0];
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), i[1]) for (e in a.converters) g[e.toLowerCase()] = a.converters[e];
        for (; d = i[++h];) if ("*" !== d) {
            if ("*" !== j && j !== d) {
                if (e = g[j + " " + d] || g["* " + d], !e) for (c in g) if (f = c.split(" "), f[1] === d && (e = g[j + " " + f[0]] || g["* " + f[0]])) {
                    e === !0 ? e = g[c] : g[c] !== !0 && (d = f[0], i.splice(h--, 0, d));
                    break
                }
                if (e !== !0) if (e && a["throws"]) b = e(b);
                else try {
                    b = e(b)
                } catch (k) {
                    return {
                        state: "parsererror",
                        error: e ? k : "No conversion from " + j + " to " + d
                    }
                }
            }
            j = d
        }
        return {
            state: "success",
            data: b
        }
    }
    function J() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function K() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function L() {
        return setTimeout(function () {
            $c = b
        }), $c = ib.now()
    }
    function M(a, b) {
        ib.each(b, function (b, c) {
            for (var d = (ed[b] || []).concat(ed["*"]), e = 0, f = d.length; f > e; e++) if (d[e].call(a, b, c)) return
        })
    }
    function N(a, b, c) {
        var d, e, f = 0,
            g = dd.length,
            h = ib.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = $c || L(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: ib.extend({}, b),
                opts: ib.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $c || L(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = ib.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (O(k, j.opts.specialEasing); g > f; f++) if (d = dd[f].call(j, a, k, j.opts)) return d;
        return M(j, k), ib.isFunction(j.opts.start) && j.opts.start.call(a, j), ib.fx.timer(ib.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function O(a, b) {
        var c, d, e, f, g;
        for (e in a) if (d = ib.camelCase(e), f = b[d], c = a[e], ib.isArray(c) && (f = c[1], c = a[e] = c[0]), e !== d && (a[d] = c, delete a[e]), g = ib.cssHooks[d], g && "expand" in g) {
            c = g.expand(c), delete a[d];
            for (e in c) e in a || (a[e] = c[e], b[e] = f)
        } else b[d] = f
    }
    function P(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this,
            n = a.style,
            o = {},
            p = [],
            q = a.nodeType && w(a);
        c.queue || (k = ib._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function () {
            k.unqueued || l()
        }), k.unqueued++, m.always(function () {
            m.always(function () {
                k.unqueued--, ib.queue(a, "fx").length || k.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === ib.css(a, "display") && "none" === ib.css(a, "float") && (ib.support.inlineBlockNeedsLayout && "inline" !== B(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ib.support.shrinkWrapBlocks || m.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (e in b) if (g = b[e], ad.exec(g)) {
            if (delete b[e], i = i || "toggle" === g, g === (q ? "hide" : "show")) continue;
            p.push(e)
        }
        if (f = p.length) {
            h = ib._data(a, "fxshow") || ib._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? ib(a).show() : m.done(function () {
                ib(a).hide()
            }), m.done(function () {
                var b;
                ib._removeData(a, "fxshow");
                for (b in o) ib.style(a, b, o[b])
            });
            for (e = 0; f > e; e++) d = p[e], j = m.createTween(d, q ? h[d] : 0), o[d] = h[d] || ib.style(a, d), d in h || (h[d] = j.start, q && (j.end = j.start, j.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function Q(a, b, c, d, e) {
        return new Q.prototype.init(a, b, c, d, e)
    }
    function R(a, b) {
        var c, d = {
            height: a
        },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function S(a) {
        return ib.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var T, U, V = typeof b,
        W = a.document,
        X = a.location,
        Y = a.jQuery,
        Z = a.$,
        $ = {},
        _ = [],
        ab = "1.9.1",
        bb = _.concat,
        cb = _.push,
        db = _.slice,
        eb = _.indexOf,
        fb = $.toString,
        gb = $.hasOwnProperty,
        hb = ab.trim,
        ib = function (a, b) {
            return new ib.fn.init(a, b, U)
        },
        jb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kb = /\S+/g,
        lb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mb = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        nb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ob = /^[\],:{}\s]*$/,
        pb = /(?:^|:|,)(?:\s*\[)+/g,
        qb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        rb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        sb = /^-ms-/,
        tb = /-([\da-z])/gi,
        ub = function (a, b) {
            return b.toUpperCase()
        },
        vb = function (a) {
            (W.addEventListener || "load" === a.type || "complete" === W.readyState) && (wb(), ib.ready())
        },
        wb = function () {
            W.addEventListener ? (W.removeEventListener("DOMContentLoaded", vb, !1), a.removeEventListener("load", vb, !1)) : (W.detachEvent("onreadystatechange", vb), a.detachEvent("onload", vb))
        };
    ib.fn = ib.prototype = {
        jquery: ab,
        constructor: ib,
        init: function (a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : mb.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof ib ? c[0] : c, ib.merge(this, ib.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : W, !0)), nb.test(e[1]) && ib.isPlainObject(c)) for (e in c) ib.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                if (f = W.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = W, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ib.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ib.makeArray(a, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return db.call(this)
        },
        get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function (a) {
            var b = ib.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return ib.each(this, a, b)
        },
        ready: function (a) {
            return ib.ready.promise().done(a), this
        },
        slice: function () {
            return this.pushStack(db.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function (a) {
            return this.pushStack(ib.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: cb,
        sort: [].sort,
        splice: [].splice
    }, ib.fn.init.prototype = ib.fn, ib.extend = ib.fn.extend = function () {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ib.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ib.isPlainObject(d) || (c = ib.isArray(d))) ? (c ? (c = !1, g = a && ib.isArray(a) ? a : []) : g = a && ib.isPlainObject(a) ? a : {}, h[e] = ib.extend(k, g, d)) : d !== b && (h[e] = d));
        return h
    }, ib.extend({
        noConflict: function (b) {
            return a.$ === ib && (a.$ = Z), b && a.jQuery === ib && (a.jQuery = Y), ib
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? ib.readyWait++ : ib.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--ib.readyWait : !ib.isReady) {
                if (!W.body) return setTimeout(ib.ready);
                ib.isReady = !0, a !== !0 && --ib.readyWait > 0 || (T.resolveWith(W, [ib]), ib.fn.trigger && ib(W).trigger("ready").off("ready"))
            }
        },
        isFunction: function (a) {
            return "function" === ib.type(a)
        },
        isArray: Array.isArray ||
        function (a) {
            return "array" === ib.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? $[fb.call(a)] || "object" : typeof a
        },
        isPlainObject: function (a) {
            if (!a || "object" !== ib.type(a) || a.nodeType || ib.isWindow(a)) return !1;
            try {
                if (a.constructor && !gb.call(a, "constructor") && !gb.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            var d;
            for (d in a);
            return d === b || gb.call(a, d)
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        error: function (a) {
            throw Error(a)
        },
        parseHTML: function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || W;
            var d = nb.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ib.buildFragment([a], b, e), e && ib(e).remove(), ib.merge([], d.childNodes))
        },
        parseJSON: function (c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = ib.trim(c), c && ob.test(c.replace(qb, "@").replace(rb, "]").replace(pb, ""))) ? Function("return " + c)() : (ib.error("Invalid JSON: " + c), b)
        },
        parseXML: function (c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
            } catch (f) {
                d = b
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ib.error("Invalid XML: " + c), d
        },
        noop: function () {},
        globalEval: function (b) {
            b && ib.trim(b) && (a.execScript ||
            function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(sb, "ms-").replace(tb, ub)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        },
        trim: hb && !hb.call("﻿ ") ?
        function (a) {
            return null == a ? "" : hb.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(lb, "")
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ib.merge(d, "string" == typeof a ? [a] : a) : cb.call(d, a)), d
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (eb) return eb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
            else for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !! c; g > f; f++) d = !! b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h) for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
            else for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
            return bb.apply([], i)
        },
        guid: 1,
        proxy: function (a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), ib.isFunction(a) ? (d = db.call(arguments, 2), e = function () {
                return a.apply(c || this, d.concat(db.call(arguments)))
            }, e.guid = a.guid = a.guid || ib.guid++, e) : b
        },
        access: function (a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === ib.type(d)) {
                f = !0;
                for (i in d) ib.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, ib.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function (a, b, c) {
                return k.call(ib(a), c)
            })), c)) for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: function () {
            return (new Date).getTime()
        }
    }), ib.ready.promise = function (b) {
        if (!T) if (T = ib.Deferred(), "complete" === W.readyState) setTimeout(ib.ready);
        else if (W.addEventListener) W.addEventListener("DOMContentLoaded", vb, !1), a.addEventListener("load", vb, !1);
        else {
            W.attachEvent("onreadystatechange", vb), a.attachEvent("onload", vb);
            var c = !1;
            try {
                c = null == a.frameElement && W.documentElement
            } catch (d) {}
            c && c.doScroll &&
            function e() {
                if (!ib.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    wb(), ib.ready()
                }
            }()
        }
        return T.promise(b)
    }, ib.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        $["[object " + b + "]"] = b.toLowerCase()
    }), U = ib(W);
    var xb = {};
    ib.Callbacks = function (a) {
        a = "string" == typeof a ? xb[a] || d(a) : ib.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function (b) {
                for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++) if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    e = !1;
                    break
                }
                c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
            },
            m = {
                add: function () {
                    if (j) {
                        var b = j.length;
                        !
                        function d(b) {
                            ib.each(b, function (b, c) {
                                var e = ib.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), c ? g = j.length : e && (i = b, l(e))
                    }
                    return this
                },
                remove: function () {
                    return j && ib.each(arguments, function (a, b) {
                        for (var d;
                        (d = ib.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                    }), this
                },
                has: function (a) {
                    return a ? ib.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function () {
                    return j = [], this
                },
                disable: function () {
                    return j = k = e = b, this
                },
                disabled: function () {
                    return !j
                },
                lock: function () {
                    return k = b, e || m.disable(), this
                },
                locked: function () {
                    return !k
                },
                fireWith: function (a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], !j || f && !k || (c ? k.push(b) : l(b)), this
                },
                fire: function () {
                    return m.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!f
                }
            };
        return m
    }, ib.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", ib.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ib.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ib.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return ib.Deferred(function (c) {
                            ib.each(b, function (b, f) {
                                var g = f[0],
                                    h = ib.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = h && h.apply(this, arguments);
                                    a && ib.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? ib.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, ib.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b, c, d, e = 0,
                f = db.call(arguments),
                g = f.length,
                h = 1 !== g || a && ib.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ib.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? db.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1) for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && ib.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), ib.support = function () {
        var b, c, d, e, f, g, h, i, j, k, l = W.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*"), d = l.getElementsByTagName("a")[0], !c || !d || !c.length) return {};
        f = W.createElement("select"), h = f.appendChild(W.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
            getSetAttribute: "t" !== l.className,
            leadingWhitespace: 3 === l.firstChild.nodeType,
            tbody: !l.getElementsByTagName("tbody").length,
            htmlSerialize: !! l.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !! d.style.cssFloat,
            checkOn: !! e.value,
            optSelected: h.selected,
            enctype: !! W.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === W.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test
        } catch (m) {
            b.deleteExpando = !1
        }
        e = W.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = W.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        return l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip, ib(function () {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = W.getElementsByTagName("body")[0];
            g && (c = W.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === l.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(W.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== V && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
        }), c = f = g = h = d = e = null, b
    }();
    var yb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        zb = /([A-Z])/g;
    ib.extend({
        cache: {},
        expando: "jQuery" + (ab + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            return a = a.nodeType ? ib.cache[a[ib.expando]] : a[ib.expando], !! a && !h(a)
        },
        data: function (a, b, c) {
            return e(a, b, c)
        },
        removeData: function (a, b) {
            return f(a, b)
        },
        _data: function (a, b, c) {
            return e(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return f(a, b, !0)
        },
        acceptData: function (a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && ib.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b
        }
    }), ib.fn.extend({
        data: function (a, c) {
            var d, e, f = this[0],
                h = 0,
                i = null;
            if (a === b) {
                if (this.length && (i = ib.data(f), 1 === f.nodeType && !ib._data(f, "parsedAttrs"))) {
                    for (d = f.attributes; d.length > h; h++) e = d[h].name, e.indexOf("data-") || (e = ib.camelCase(e.slice(5)), g(f, e, i[e]));
                    ib._data(f, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function () {
                ib.data(this, a)
            }) : ib.access(this, function (c) {
                return c === b ? f ? g(f, a, ib.data(f, a)) : null : (this.each(function () {
                    ib.data(this, a, c)
                }), b)
            }, null, c, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                ib.removeData(this, a)
            })
        }
    }), ib.extend({
        queue: function (a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = ib._data(a, c), d && (!e || ib.isArray(d) ? e = ib._data(a, c, ib.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = ib.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ib._queueHooks(a, b),
                g = function () {
                    ib.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), f.cur = e, e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return ib._data(a, c) || ib._data(a, c, {
                empty: ib.Callbacks("once memory").add(function () {
                    ib._removeData(a, b + "queue"), ib._removeData(a, c)
                })
            })
        }
    }), ib.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? ib.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = ib.queue(this, a, c);
                ib._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ib.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                ib.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = ib.fx ? ib.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            var d, e = 1,
                f = ib.Deferred(),
                g = this,
                h = this.length,
                i = function () {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ib._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var Ab, Bb, Cb = /[\t\r\n]/g,
        Db = /\r/g,
        Eb = /^(?:input|select|textarea|button|object)$/i,
        Fb = /^(?:a|area)$/i,
        Gb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Hb = /^(?:checked|selected)$/i,
        Ib = ib.support.getSetAttribute,
        Jb = ib.support.input;
    ib.fn.extend({
        attr: function (a, b) {
            return ib.access(this, ib.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                ib.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return ib.access(this, ib.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = ib.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (ib.isFunction(a)) return this.each(function (b) {
                ib(this).addClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(kb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : " ")) {
                for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = ib.trim(d)
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (ib.isFunction(a)) return this.each(function (b) {
                ib(this).removeClass(a.call(this, b, this.className))
            });
            if (i) for (b = (a || "").match(kb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                c.className = a ? ib.trim(d) : ""
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return ib.isFunction(a) ? this.each(function (c) {
                ib(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c) for (var e, f = 0, g = ib(this), h = b, i = a.match(kb) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else(c === V || "boolean" === c) && (this.className && ib._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ib._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Cb, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = ib.isFunction(a), this.each(function (c) {
                var f, g = ib(this);
                1 === this.nodeType && (f = e ? a.call(this, c, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ib.isArray(f) && (f = ib.map(f, function (a) {
                    return null == a ? "" : a + ""
                })), d = ib.valHooks[this.type] || ib.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (d = ib.valHooks[f.type] || ib.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Db, "") : null == c ? "" : c)) : void 0
        }
    }), ib.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (ib.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ib.nodeName(c.parentNode, "optgroup"))) {
                        if (b = ib(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function (a, b) {
                    var c = ib.makeArray(b);
                    return ib(a).find("option").each(function () {
                        this.selected = ib.inArray(ib(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attr: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? typeof a.getAttribute === V ? ib.prop(a, c, d) : (f = 1 !== h || !ib.isXMLDoc(a), f && (c = c.toLowerCase(), e = ib.attrHooks[c] || (Gb.test(c) ? Bb : Ab)), d === b ? e && f && "get" in e && null !== (g = e.get(a, c)) ? g : (typeof a.getAttribute !== V && (g = a.getAttribute(c)), null == g ? b : g) : null !== d ? e && f && "set" in e && (g = e.set(a, d, c)) !== b ? g : (a.setAttribute(c, d + ""), d) : (ib.removeAttr(a, c), b)) : void 0
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(kb);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = ib.propFix[c] || c, Gb.test(c) ? !Ib && Hb.test(c) ? a[ib.camelCase("default-" + c)] = a[d] = !1 : a[d] = !1 : ib.attr(a, c, ""), a.removeAttribute(Ib ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!ib.support.radioValue && "radio" === b && ib.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !ib.isXMLDoc(a), g && (c = ib.propFix[c] || c, f = ib.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : Eb.test(a.nodeName) || Fb.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), Bb = {
        get: function (a, c) {
            var d = ib.prop(a, c),
                e = "boolean" == typeof d && a.getAttribute(c),
                f = "boolean" == typeof d ? Jb && Ib ? null != e : Hb.test(c) ? a[ib.camelCase("default-" + c)] : !! e : a.getAttributeNode(c);
            return f && f.value !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            return b === !1 ? ib.removeAttr(a, c) : Jb && Ib || !Hb.test(c) ? a.setAttribute(!Ib && ib.propFix[c] || c, c) : a[ib.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, Jb && Ib || (ib.attrHooks.value = {
        get: function (a, c) {
            var d = a.getAttributeNode(c);
            return ib.nodeName(a, "input") ? a.defaultValue : d && d.specified ? d.value : b
        },
        set: function (a, c, d) {
            return ib.nodeName(a, "input") ? (a.defaultValue = c, b) : Ab && Ab.set(a, c, d)
        }
    }), Ib || (Ab = ib.valHooks.button = {
        get: function (a, c) {
            var d = a.getAttributeNode(c);
            return d && ("id" === c || "name" === c || "coords" === c ? "" !== d.value : d.specified) ? d.value : b
        },
        set: function (a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
        }
    }, ib.attrHooks.contenteditable = {
        get: Ab.get,
        set: function (a, b, c) {
            Ab.set(a, "" === b ? !1 : b, c)
        }
    }, ib.each(["width", "height"], function (a, c) {
        ib.attrHooks[c] = ib.extend(ib.attrHooks[c], {
            set: function (a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b
            }
        })
    })), ib.support.hrefNormalized || (ib.each(["href", "src", "width", "height"], function (a, c) {
        ib.attrHooks[c] = ib.extend(ib.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return null == d ? b : d
            }
        })
    }), ib.each(["href", "src"], function (a, b) {
        ib.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    })), ib.support.style || (ib.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || b
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    }), ib.support.optSelected || (ib.propHooks.selected = ib.extend(ib.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), ib.support.enctype || (ib.propFix.enctype = "encoding"), ib.support.checkOn || ib.each(["radio", "checkbox"], function () {
        ib.valHooks[this] = {
            get: function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), ib.each(["radio", "checkbox"], function () {
        ib.valHooks[this] = ib.extend(ib.valHooks[this], {
            set: function (a, c) {
                return ib.isArray(c) ? a.checked = ib.inArray(ib(a).val(), c) >= 0 : b
            }
        })
    });
    var Kb = /^(?:input|select|textarea)$/i,
        Lb = /^key/,
        Mb = /^(?:mouse|contextmenu)|click/,
        Nb = /^(?:focusinfocus|focusoutblur)$/,
        Ob = /^([^.]*)(?:\.(.+)|)$/;
    ib.event = {
        global: {},
        add: function (a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = ib._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ib.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function (a) {
                    return typeof ib === V || a && ib.event.triggered === a.type ? b : ib.event.dispatch.apply(l.elem, arguments)
                }, l.elem = a), c = (c || "").match(kb) || [""], i = c.length; i--;) g = Ob.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), k = ib.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ib.event.special[o] || {}, m = ib.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && ib.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ib.event.global[o] = !0;
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ib.hasData(a) && ib._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(kb) || [""], j = b.length; j--;) if (h = Ob.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = ib.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ib.removeEvent(a, n, q.handle), delete k[n])
                } else for (n in k) ib.event.remove(a, n + b[j], c, d, !0);
                ib.isEmptyObject(k) && (delete q.handle, ib._removeData(a, "events"))
            }
        },
        trigger: function (c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || W],
                o = gb.call(c, "type") ? c.type : c,
                p = gb.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || W, 3 !== e.nodeType && 8 !== e.nodeType && !Nb.test(o + ib.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[ib.expando] ? c : new ib.Event(o, "object" == typeof c && c), c.isTrigger = !0, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ib.makeArray(d, [c]), k = ib.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !ib.isWindow(e)) {
                    for (j = k.delegateType || o, Nb.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                    l === (e.ownerDocument || W) && n.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0;
                (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ib._data(i, "events") || {})[c.type] && ib._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ib.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !(f || c.isDefaultPrevented() || k._default && k._default.apply(e.ownerDocument, d) !== !1 || "click" === o && ib.nodeName(e, "a") || !ib.acceptData(e) || !h || !e[o] || ib.isWindow(e))) {
                    l = e[h], l && (e[h] = null), ib.event.triggered = o;
                    try {
                        e[o]()
                    } catch (q) {}
                    ib.event.triggered = b, l && (e[h] = l)
                }
                return c.result
            }
        },
        dispatch: function (a) {
            a = ib.event.fix(a);
            var c, d, e, f, g, h = [],
                i = db.call(arguments),
                j = (ib._data(this, "events") || {})[a.type] || [],
                k = ib.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = ib.event.handlers.call(this, a, j), c = 0;
                (f = h[c++]) && !a.isPropagationStopped();) for (a.currentTarget = f.elem, g = 0;
                (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((ib.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (; j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ib(d, this).index(j) >= 0 : ib.find(d, this, null, [j]).length), f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                })
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        fix: function (a) {
            if (a[ib.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Mb.test(e) ? this.mouseHooks : Lb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ib.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || W), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !! a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || W, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return ib.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                }
            },
            focus: {
                trigger: function () {
                    if (this !== W.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === W.activeElement && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = ib.extend(new ib.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ib.event.trigger(e, null, b) : ib.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, ib.removeEvent = W.removeEventListener ?
    function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === V && (a[d] = null), a.detachEvent(d, c))
    }, ib.Event = function (a, c) {
        return this instanceof ib.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, c && ib.extend(this, c), this.timeStamp = a && a.timeStamp || ib.now(), this[ib.expando] = !0, b) : new ib.Event(a, c)
    }, ib.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = i, this.stopPropagation()
        }
    }, ib.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        ib.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !ib.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), ib.support.submitBubbles || (ib.event.special.submit = {
        setup: function () {
            return ib.nodeName(this, "form") ? !1 : (ib.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target,
                    d = ib.nodeName(c, "input") || ib.nodeName(c, "button") ? c.form : b;
                d && !ib._data(d, "submitBubbles") && (ib.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), ib._data(d, "submitBubbles", !0))
            }), b)
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ib.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return ib.nodeName(this, "form") ? !1 : (ib.event.remove(this, "._submit"), b)
        }
    }), ib.support.changeBubbles || (ib.event.special.change = {
        setup: function () {
            return Kb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ib.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), ib.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ib.event.simulate("change", this, a, !0)
            })), !1) : (ib.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Kb.test(b.nodeName) && !ib._data(b, "changeBubbles") && (ib.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ib.event.simulate("change", this.parentNode, a, !0)
                }), ib._data(b, "changeBubbles", !0))
            }), b)
        },
        handle: function (a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
        },
        teardown: function () {
            return ib.event.remove(this, "._change"), !Kb.test(this.nodeName)
        }
    }), ib.support.focusinBubbles || ib.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = 0,
            d = function (a) {
                ib.event.simulate(b, a.target, ib.event.fix(a), !0)
            };
        ib.event.special[b] = {
            setup: function () {
                0 === c++ && W.addEventListener(a, d, !0)
            },
            teardown: function () {
                0 === --c && W.removeEventListener(a, d, !0)
            }
        }
    }), ib.fn.extend({
        on: function (a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
            else if (!e) return this;
            return 1 === f && (h = e, e = function (a) {
                return ib().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = ib.guid++)), this.each(function () {
                ib.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ib(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function () {
                ib.event.remove(this, a, d, c)
            })
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        trigger: function (a, b) {
            return this.each(function () {
                ib.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, c) {
            var d = this[0];
            return d ? ib.event.trigger(a, c, d, !0) : b
        }
    }), function (a, b) {
        function c(a) {
            return ob.test(a + "")
        }
        function d() {
            var a, b = [];
            return a = function (c, d) {
                return b.push(c += " ") > y.cacheLength && delete a[b.shift()], a[c] = d
            }
        }
        function e(a) {
            return a[N] = !0, a
        }
        function f(a) {
            var b = F.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null
            }
        }
        function g(a, b, c, d) {
            var e, f, g, h, i, j, k, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== F && E(b), b = b || F, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (!H && !d) {
                if (e = pb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && L(b, f) && f.id === g) return c.push(f), c
                } else {
                    if (e[2]) return Z.apply(c, $.call(b.getElementsByTagName(a), 0)), c;
                    if ((g = e[3]) && P.getByClassName && b.getElementsByClassName) return Z.apply(c, $.call(b.getElementsByClassName(g), 0)), c
                }
                if (P.qsa && !I.test(a)) {
                    if (k = !0, n = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = l(a), (k = b.getAttribute("id")) ? n = k.replace(sb, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",")
                    }
                    if (p) try {
                        return Z.apply(c, $.call(o.querySelectorAll(p), 0)), c
                    } catch (q) {} finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return u(a.replace(gb, "$1"), b, c, d)
        }
        function h(a, b) {
            var c = b && a,
                d = c && (~b.sourceIndex || W) - (~a.sourceIndex || W);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }
        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function j(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function k(a) {
            return e(function (b) {
                return b = +b, e(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function l(a, b) {
            var c, d, e, f, h, i, j, k = T[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = y.preFilter; h;) {
                (!c || (d = hb.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(e = [])), c = !1, (d = jb.exec(h)) && (c = d.shift(), e.push({
                    value: c,
                    type: d[0].replace(gb, " ")
                }), h = h.slice(c.length));
                for (f in y.filter)!(d = mb[f].exec(h)) || j[f] && !(d = j[f](d)) || (c = d.shift(), e.push({
                    value: c,
                    type: f,
                    matches: d
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? g.error(a) : T(a, i).slice(0)
        }
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = R++;
            return b.first ?
            function (b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = Q + " " + f;
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || e) if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === x) return h === !0
                } else if (i = j[d] = [k], i[1] = a(b, c, g) || x, i[1] === !0) return !0
            }
        }
        function o(a) {
            return a.length > 1 ?
            function (b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }
        function p(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function q(a, b, c, d, f, g) {
            return d && !d[N] && (d = q(d)), f && !f[N] && (f = q(f, g)), e(function (e, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    q = e || t(b || "*", h.nodeType ? [h] : h, []),
                    r = !a || !e && b ? q : p(q, m, a, h, i),
                    s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d) for (j = p(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--;)(l = s[k]) && (j = f ? _.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                    }
                } else s = p(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : Z.apply(g, s)
            })
        }
        function r(a) {
            for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                return a === b
            }, g, !0), j = n(function (a) {
                return _.call(b, a) > -1
            }, g, !0), k = [function (a, c, d) {
                return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
            }]; e > h; h++) if (c = y.relative[a[h].type]) k = [n(o(k), c)];
            else {
                if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                    return q(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1)).replace(gb, "$1"), c, d > h && r(a.slice(h, d)), e > d && r(a = a.slice(d)), e > d && m(a))
                }
                k.push(c)
            }
            return o(k)
        }
        function s(a, b) {
            var c = 0,
                d = b.length > 0,
                f = a.length > 0,
                h = function (e, h, i, j, k) {
                    var l, m, n, o = [],
                        q = 0,
                        r = "0",
                        s = e && [],
                        t = null != k,
                        u = D,
                        v = e || f && y.find.TAG("*", k && h.parentNode || h),
                        w = Q += null == u ? 1 : Math.random() || .1;
                    for (t && (D = h !== F && h, x = c); null != (l = v[r]); r++) {
                        if (f && l) {
                            for (m = 0; n = a[m++];) if (n(l, h, i)) {
                                j.push(l);
                                break
                            }
                            t && (Q = w, x = ++c)
                        }
                        d && ((l = !n && l) && q--, e && s.push(l))
                    }
                    if (q += r, d && r !== q) {
                        for (m = 0; n = b[m++];) n(s, o, h, i);
                        if (e) {
                            if (q > 0) for (; r--;) s[r] || o[r] || (o[r] = Y.call(j));
                            o = p(o)
                        }
                        Z.apply(j, o), t && !e && o.length > 0 && q + b.length > 1 && g.uniqueSort(j)
                    }
                    return t && (Q = w, D = u), s
                };
            return d ? e(h) : h
        }
        function t(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) g(a, b[d], c);
            return c
        }
        function u(a, b, c, d) {
            var e, f, g, h, i, j = l(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && !H && y.relative[f[1].type]) {
                    if (b = y.find.ID(g.matches[0].replace(ub, vb), b)[0], !b) return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = mb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);) if ((i = y.find[h]) && (d = i(g.matches[0].replace(ub, vb), nb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return Z.apply(c, $.call(d, 0)), c;
                    break
                }
            }
            return B(a, j)(d, b, H, c, nb.test(a)), c
        }
        function v() {}
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
            O = a.document,
            P = {},
            Q = 0,
            R = 0,
            S = d(),
            T = d(),
            U = d(),
            V = typeof b,
            W = 1 << 31,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.slice,
            _ = X.indexOf ||
        function (a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1
        }, ab = "[\\x20\\t\\r\\n\\f]", bb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", cb = bb.replace("w", "w#"), db = "([*^$|!~]?=)", eb = "\\[" + ab + "*(" + bb + ")" + ab + "*(?:" + db + ab + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cb + ")|)|)" + ab + "*\\]", fb = ":(" + bb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + eb.replace(3, 8) + ")*)|.*)\\)|)", gb = RegExp("^" + ab + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ab + "+$", "g"), hb = RegExp("^" + ab + "*," + ab + "*"), jb = RegExp("^" + ab + "*([\\x20\\t\\r\\n\\f>+~])" + ab + "*"), kb = RegExp(fb), lb = RegExp("^" + cb + "$"), mb = {
            ID: RegExp("^#(" + bb + ")"),
            CLASS: RegExp("^\\.(" + bb + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + bb + ")['\"]?\\]"),
            TAG: RegExp("^(" + bb.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + eb),
            PSEUDO: RegExp("^" + fb),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ab + "*(even|odd|(([+-]|)(\\d*)n|)" + ab + "*(?:([+-]|)" + ab + "*(\\d+)|))" + ab + "*\\)|)", "i"),
            needsContext: RegExp("^" + ab + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ab + "*((?:-\\d)?\\d*)" + ab + "*\\)|)(?=[^-]|$)", "i")
        }, nb = /[\x20\t\r\n\f]*[+~]/, ob = /^[^{]+\{\s*\[native code/, pb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, qb = /^(?:input|select|textarea|button)$/i, rb = /^h\d$/i, sb = /'|\\/g, tb = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, ub = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, vb = function (a, b) {
            var c = "0x" + b - 65536;
            return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
        };
        try {
            $.call(O.documentElement.childNodes, 0)[0].nodeType
        } catch (wb) {
            $ = function (a) {
                for (var b, c = []; b = this[a++];) c.push(b);
                return c
            }
        }
        A = g.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, E = g.setDocument = function (a) {
            var d = a ? a.ownerDocument || a : O;
            return d !== F && 9 === d.nodeType && d.documentElement ? (F = d, G = d.documentElement, H = A(d), P.tagNameNoComments = f(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), P.attributes = f(function (a) {
                a.innerHTML = "<select></select>";
                var b = typeof a.lastChild.getAttribute("multiple");
                return "boolean" !== b && "string" !== b
            }), P.getByClassName = f(function (a) {
                return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
            }), P.getByName = f(function (a) {
                a.id = N + 0, a.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>", G.insertBefore(a, G.firstChild);
                var b = d.getElementsByName && d.getElementsByName(N).length === 2 + d.getElementsByName(N + 0).length;
                return P.getIdNotName = !d.getElementById(N), G.removeChild(a), b
            }), y.attrHandle = f(function (a) {
                return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== V && "#" === a.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (a) {
                    return a.getAttribute("href", 2)
                },
                type: function (a) {
                    return a.getAttribute("type")
                }
            }, P.getIdNotName ? (y.find.ID = function (a, b) {
                if (typeof b.getElementById !== V && !H) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, y.filter.ID = function (a) {
                var b = a.replace(ub, vb);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (y.find.ID = function (a, c) {
                if (typeof c.getElementById !== V && !H) {
                    var d = c.getElementById(a);
                    return d ? d.id === a || typeof d.getAttributeNode !== V && d.getAttributeNode("id").value === a ? [d] : b : []
                }
            }, y.filter.ID = function (a) {
                var b = a.replace(ub, vb);
                return function (a) {
                    var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), y.find.TAG = P.tagNameNoComments ?
            function (a, c) {
                return typeof c.getElementsByTagName !== V ? c.getElementsByTagName(a) : b
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, y.find.NAME = P.getByName &&
            function (a, c) {
                return typeof c.getElementsByName !== V ? c.getElementsByName(name) : b
            }, y.find.CLASS = P.getByClassName &&
            function (a, c) {
                return typeof c.getElementsByClassName === V || H ? b : c.getElementsByClassName(a)
            }, J = [], I = [":focus"], (P.qsa = c(d.querySelectorAll)) && (f(function (a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || I.push("\\[" + ab + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || I.push(":checked")
            }), f(function (a) {
                a.innerHTML = "<input type='hidden' i=''/>", a.querySelectorAll("[i^='']").length && I.push("[*^$]=" + ab + "*(?:\"\"|'')"), a.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), I.push(",.*:")
            })), (P.matchesSelector = c(K = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && f(function (a) {
                P.disconnectedMatch = K.call(a, "div"), K.call(a, "[s!='']:x"), J.push("!=", fb)
            }), I = RegExp(I.join("|")), J = RegExp(J.join("|")), L = c(G.contains) || G.compareDocumentPosition ?
            function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            }, M = G.compareDocumentPosition ?
            function (a, b) {
                var c;
                return a === b ? (C = !0, 0) : (c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) ? 1 & c || a.parentNode && 11 === a.parentNode.nodeType ? a === d || L(O, a) ? -1 : b === d || L(O, b) ? 1 : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            } : function (a, b) {
                var c, e = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    i = [a],
                    j = [b];
                if (a === b) return C = !0, 0;
                if (!f || !g) return a === d ? -1 : b === d ? 1 : f ? -1 : g ? 1 : 0;
                if (f === g) return h(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, C = !1, [0, 0].sort(M), P.detectDuplicates = C, F) : F
        }, g.matches = function (a, b) {
            return g(a, null, null, b)
        }, g.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== F && E(a), b = b.replace(tb, "='$1']"), !(!P.matchesSelector || H || J && J.test(b) || I.test(b))) try {
                var c = K.call(a, b);
                if (c || P.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
            } catch (d) {}
            return g(b, F, null, [a]).length > 0
        }, g.contains = function (a, b) {
            return (a.ownerDocument || a) !== F && E(a), L(a, b)
        }, g.attr = function (a, b) {
            var c;
            return (a.ownerDocument || a) !== F && E(a), H || (b = b.toLowerCase()), (c = y.attrHandle[b]) ? c(a) : H || P.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && a[b] === !0 ? b : c && c.specified ? c.value : null
        }, g.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a)
        }, g.uniqueSort = function (a) {
            var b, c = [],
                d = 1,
                e = 0;
            if (C = !P.detectDuplicates, a.sort(M), C) {
                for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
                for (; e--;) a.splice(c[e], 1)
            }
            return a
        }, z = g.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d]; d++) c += z(b);
            return c
        }, y = g.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: mb,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ub, vb), a[3] = (a[4] || a[5] || "").replace(ub, vb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || g.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && g.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[5] && a[2];
                    return mb.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && kb.test(c) && (b = l(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    return "*" === a ?
                    function () {
                        return !0
                    } : (a = a.replace(ub, vb).toLowerCase(), function (b) {
                        return b.nodeName && b.nodeName.toLowerCase() === a
                    })
                },
                CLASS: function (a) {
                    var b = S[a + " "];
                    return b || (b = RegExp("(^|" + ab + ")" + a + "(" + ab + "|$)")) && S(a, function (a) {
                        return b.test(a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = g.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === Q && j[1], m = j[0] === Q && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [Q, n, m];
                                    break
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === Q) m = j[1];
                            else for (;
                            (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [Q, m]), l !== b)););
                            return m -= e, m === d || 0 === m % d && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, d = y.pseudos[a] || y.setFilters[a.toLowerCase()] || g.error("unsupported pseudo: " + a);
                    return d[N] ? d(b) : d.length > 1 ? (c = [a, a, "", b], y.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function (a, c) {
                        for (var e, f = d(a, b), g = f.length; g--;) e = _.call(a, f[g]), a[e] = !(c[e] = f[g])
                    }) : function (a) {
                        return d(a, 0, c)
                    }) : d
                }
            },
            pseudos: {
                not: e(function (a) {
                    var b = [],
                        c = [],
                        d = B(a.replace(gb, "$1"));
                    return d[N] ? e(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: e(function (a) {
                    return function (b) {
                        return g(a, b).length > 0
                    }
                }),
                contains: e(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
                    }
                }),
                lang: e(function (a) {
                    return lb.test(a || "") || g.error("unsupported lang: " + a), a = a.replace(ub, vb).toLowerCase(), function (b) {
                        var c;
                        do
                        if (c = H ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === G
                },
                focus: function (a) {
                    return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0
                },
                parent: function (a) {
                    return !y.pseudos.empty(a)
                },
                header: function (a) {
                    return rb.test(a.nodeName)
                },
                input: function (a) {
                    return qb.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: k(function () {
                    return [0]
                }),
                last: k(function (a, b) {
                    return [b - 1]
                }),
                eq: k(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: k(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: k(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                    return a
                })
            }
        };
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) y.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) y.pseudos[w] = j(w);
        B = g.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = U[a + " "];
            if (!f) {
                for (b || (b = l(a)), c = b.length; c--;) f = r(b[c]), f[N] ? d.push(f) : e.push(f);
                f = U(a, s(e, d))
            }
            return f
        }, y.pseudos.nth = y.pseudos.eq, y.filters = v.prototype = y.pseudos, y.setFilters = new v, E(), g.attr = ib.attr, ib.find = g, ib.expr = g.selectors, ib.expr[":"] = ib.expr.pseudos, ib.unique = g.uniqueSort, ib.text = g.getText, ib.isXMLDoc = g.isXML, ib.contains = g.contains
    }(a);
    var Pb = /Until$/,
        Qb = /^(?:parents|prev(?:Until|All))/,
        Rb = /^.[^:#\[\.,]*$/,
        Sb = ib.expr.match.needsContext,
        Tb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ib.fn.extend({
        find: function (a) {
            var b, c, d, e = this.length;
            if ("string" != typeof a) return d = this, this.pushStack(ib(a).filter(function () {
                for (b = 0; e > b; b++) if (ib.contains(d[b], this)) return !0
            }));
            for (c = [], b = 0; e > b; b++) ib.find(a, this[b], c);
            return c = this.pushStack(e > 1 ? ib.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, c
        },
        has: function (a) {
            var b, c = ib(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) if (ib.contains(this, c[b])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(l(this, a, !1))
        },
        filter: function (a) {
            return this.pushStack(l(this, a, !0))
        },
        is: function (a) {
            return !!a && ("string" == typeof a ? Sb.test(a) ? ib(a, this.context).index(this[0]) >= 0 : ib.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? ib(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                if (g ? g.index(c) > -1 : ib.find.matchesSelector(c, a)) {
                    f.push(c);
                    break
                }
                c = c.parentNode
            }
            return this.pushStack(f.length > 1 ? ib.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? ib.inArray(this[0], ib(a)) : ib.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            var c = "string" == typeof a ? ib(a, b) : ib.makeArray(a && a.nodeType ? [a] : a),
                d = ib.merge(this.get(), c);
            return this.pushStack(ib.unique(d))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ib.fn.andSelf = ib.fn.addBack, ib.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return ib.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return ib.dir(a, "parentNode", c)
        },
        next: function (a) {
            return k(a, "nextSibling")
        },
        prev: function (a) {
            return k(a, "previousSibling")
        },
        nextAll: function (a) {
            return ib.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return ib.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return ib.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return ib.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return ib.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return ib.sibling(a.firstChild)
        },
        contents: function (a) {
            return ib.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ib.merge([], a.childNodes)
        }
    }, function (a, b) {
        ib.fn[a] = function (c, d) {
            var e = ib.map(this, b, c);
            return Pb.test(a) || (d = c), d && "string" == typeof d && (e = ib.filter(d, e)), e = this.length > 1 && !Tb[a] ? ib.unique(e) : e, this.length > 1 && Qb.test(a) && (e = e.reverse()), this.pushStack(e)
        }
    }), ib.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? ib.find.matchesSelector(b[0], a) ? [b[0]] : [] : ib.find.matches(a, b)
        },
        dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ib(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vb = / jQuery\d+="(?:null|\d+)"/g,
        Wb = RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
        Xb = /^\s+/,
        Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Zb = /<([\w:]+)/,
        $b = /<tbody/i,
        _b = /<|&#?\w+;/,
        ac = /<(?:script|style|link)/i,
        bc = /^(?:checkbox|radio)$/i,
        cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dc = /^$|\/(?:java|ecma)script/i,
        ec = /^true\/(.*)/,
        fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gc = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ib.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        hc = m(W),
        ic = hc.appendChild(W.createElement("div"));
    gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, gc.th = gc.td, ib.fn.extend({
        text: function (a) {
            return ib.access(this, function (a) {
                return a === b ? ib.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function (a) {
            if (ib.isFunction(a)) return this.each(function (b) {
                ib(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ib(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return ib.isFunction(a) ? this.each(function (b) {
                ib(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = ib(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = ib.isFunction(a);
            return this.each(function (c) {
                ib(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ib.nodeName(this, "body") || ib(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || ib.filter(a, [c]).length > 0) && (b || 1 !== c.nodeType || ib.cleanData(t(c)), c.parentNode && (b && ib.contains(c.ownerDocument, c) && q(t(c, "script")), c.parentNode.removeChild(c)));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ib.cleanData(t(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ib.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return ib.clone(this, a, b)
            })
        },
        html: function (a) {
            return ib.access(this, function (a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (!("string" != typeof a || ac.test(a) || !ib.support.htmlSerialize && Wb.test(a) || !ib.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ib.cleanData(t(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function (a) {
            var b = ib.isFunction(a);
            return b || "string" == typeof a || (a = ib(a).not(this).detach()), this.domManip([a], !0, function (a) {
                var b = this.nextSibling,
                    c = this.parentNode;
                c && (ib(this).remove(), c.insertBefore(a, b))
            })
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            a = bb.apply([], a);
            var e, f, g, h, i, j, k = 0,
                l = this.length,
                m = this,
                q = l - 1,
                r = a[0],
                s = ib.isFunction(r);
            if (s || !(1 >= l || "string" != typeof r || ib.support.checkClone) && cc.test(r)) return this.each(function (e) {
                var f = m.eq(e);
                s && (a[0] = r.call(this, e, c ? f.html() : b)), f.domManip(a, c, d)
            });
            if (l && (j = ib.buildFragment(a, this[0].ownerDocument, !1, this), e = j.firstChild, 1 === j.childNodes.length && (j = e), e)) {
                for (c = c && ib.nodeName(e, "tr"), h = ib.map(t(j, "script"), o), g = h.length; l > k; k++) f = j, k !== q && (f = ib.clone(f, !0, !0), g && ib.merge(h, t(f, "script"))), d.call(c && ib.nodeName(this[k], "table") ? n(this[k], "tbody") : this[k], f, k);
                if (g) for (i = h[h.length - 1].ownerDocument, ib.map(h, p), k = 0; g > k; k++) f = h[k], dc.test(f.type || "") && !ib._data(f, "globalEval") && ib.contains(i, f) && (f.src ? ib.ajax({
                    url: f.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : ib.globalEval((f.text || f.textContent || f.innerHTML || "").replace(fc, "")));
                j = e = null
            }
            return this
        }
    }), ib.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        ib.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = ib(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ib(f[d])[b](c), cb.apply(e, c.get());
            return this.pushStack(e)
        }
    }), ib.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = ib.contains(a.ownerDocument, a);
            if (ib.support.html5Clone || ib.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(ib.support.noCloneEvent && ib.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ib.isXMLDoc(a))) for (d = t(f), h = t(a), g = 0; null != (e = h[g]); ++g) d[g] && s(e, d[g]);
            if (b) if (c) for (h = h || t(a), d = d || t(f), g = 0; null != (e = h[g]); g++) r(e, d[g]);
            else r(a, f);
            return d = t(f, "script"), d.length > 0 && q(d, !i && t(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, n = m(b), o = [], p = 0; l > p; p++) if (f = a[p], f || 0 === f) if ("object" === ib.type(f)) ib.merge(o, f.nodeType ? [f] : f);
            else if (_b.test(f)) {
                for (h = h || n.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ib.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !ib.support.tbody) for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ib.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ib.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = n.lastChild
            } else o.push(b.createTextNode(f));
            for (h && n.removeChild(h), ib.support.appendChecked || ib.grep(t(o, "input"), u), p = 0; f = o[p++];) if ((!d || -1 === ib.inArray(f, d)) && (g = ib.contains(f.ownerDocument, f), h = t(n.appendChild(f), "script"), g && q(h), c)) for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
            return h = null, n
        },
        cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = ib.expando, i = ib.cache, j = ib.support.deleteExpando, k = ib.event.special; null != (c = a[g]); g++) if ((b || ib.acceptData(c)) && (e = c[h], f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? ib.event.remove(c, d) : ib.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== V ? c.removeAttribute(h) : c[h] = null, _.push(e))
            }
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i,
        nc = /opacity\s*=\s*([^)]*)/,
        oc = /^(top|right|bottom|left)$/,
        pc = /^(none|table(?!-c[ea]).+)/,
        qc = /^margin/,
        rc = RegExp("^(" + jb + ")(.*)$", "i"),
        sc = RegExp("^(" + jb + ")(?!px)[a-z%]+$", "i"),
        tc = RegExp("^([+-])=(" + jb + ")", "i"),
        uc = {
            BODY: "block"
        },
        vc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        wc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        xc = ["Top", "Right", "Bottom", "Left"],
        yc = ["Webkit", "O", "Moz", "ms"];
    ib.fn.extend({
        css: function (a, c) {
            return ib.access(this, function (a, c, d) {
                var e, f, g = {},
                    h = 0;
                if (ib.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = ib.css(a, c[h], !1, f);
                    return g
                }
                return d !== b ? ib.style(a, c, d) : ib.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function () {
            return x(this, !0)
        },
        hide: function () {
            return x(this)
        },
        toggle: function (a) {
            var b = "boolean" == typeof a;
            return this.each(function () {
                (b ? a : w(this)) ? ib(this).show() : ib(this).hide()
            })
        }
    }), ib.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ib.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = ib.camelCase(c),
                    j = a.style;
                if (c = ib.cssProps[i] || (ib.cssProps[i] = v(j, i)), h = ib.cssHooks[c] || ib.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ib.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ib.cssNumber[i] || (d += "px"), ib.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d
                } catch (k) {}
            }
        },
        css: function (a, c, d, e) {
            var f, g, h, i = ib.camelCase(c);
            return c = ib.cssProps[i] || (ib.cssProps[i] = v(a.style, i)), h = ib.cssHooks[c] || ib.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ib.isNumeric(f) ? f || 0 : g) : g
        },
        swap: function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }
    }), a.getComputedStyle ? (kc = function (b) {
        return a.getComputedStyle(b, null)
    }, lc = function (a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || ib.contains(a.ownerDocument, a) || (i = ib.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }) : W.documentElement.currentStyle && (kc = function (a) {
        return a.currentStyle
    }, lc = function (a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h[c] : b,
            j = a.style;
        return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
    }), ib.each(["height", "width"], function (a, c) {
        ib.cssHooks[c] = {
            get: function (a, d, e) {
                return d ? 0 === a.offsetWidth && pc.test(ib.css(a, "display")) ? ib.swap(a, vc, function () {
                    return A(a, c, e)
                }) : A(a, c, e) : b
            },
            set: function (a, b, d) {
                var e = d && kc(a);
                return y(a, b, d ? z(a, c, d, ib.support.boxSizing && "border-box" === ib.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ib.support.opacity || (ib.cssHooks.opacity = {
        get: function (a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ib.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ib.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e)
        }
    }), ib(function () {
        ib.support.reliableMarginRight || (ib.cssHooks.marginRight = {
            get: function (a, c) {
                return c ? ib.swap(a, {
                    display: "inline-block"
                }, lc, [a, "marginRight"]) : b
            }
        }), !ib.support.pixelPosition && ib.fn.position && ib.each(["top", "left"], function (a, c) {
            ib.cssHooks[c] = {
                get: function (a, d) {
                    return d ? (d = lc(a, c), sc.test(d) ? ib(a).position()[c] + "px" : d) : b
                }
            }
        })
    }), ib.expr && ib.expr.filters && (ib.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !ib.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ib.css(a, "display"))
    }, ib.expr.filters.visible = function (a) {
        return !ib.expr.filters.hidden(a)
    }), ib.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        ib.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, qc.test(a) || (ib.cssHooks[a + b].set = y)
    });
    var zc = /%20/g,
        Ac = /\[\]$/,
        Bc = /\r?\n/g,
        Cc = /^(?:submit|button|image|reset|file)$/i,
        Dc = /^(?:input|select|textarea|keygen)/i;
    ib.fn.extend({
        serialize: function () {
            return ib.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = ib.prop(this, "elements");
                return a ? ib.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !ib(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a))
            }).map(function (a, b) {
                var c = ib(this).val();
                return null == c ? null : ib.isArray(c) ? ib.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                }
            }).get()
        }
    }), ib.param = function (a, c) {
        var d, e = [],
            f = function (a, b) {
                b = ib.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = ib.ajaxSettings && ib.ajaxSettings.traditional), ib.isArray(a) || a.jquery && !ib.isPlainObject(a)) ib.each(a, function () {
            f(this.name, this.value)
        });
        else for (d in a) D(d, a[d], c, f);
        return e.join("&").replace(zc, "+")
    }, ib.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        ib.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ib.fn.hover = function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    };
    var Ec, Fc, Gc = ib.now(),
        Hc = /\?/,
        Ic = /#.*$/,
        Jc = /([?&])_=[^&]*/,
        Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mc = /^(?:GET|HEAD)$/,
        Nc = /^\/\//,
        Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pc = ib.fn.load,
        Qc = {},
        Rc = {},
        Sc = "*/".concat("*");
    try {
        Fc = X.href
    } catch (Tc) {
        Fc = W.createElement("a"), Fc.href = "", Fc = Fc.href
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [], ib.fn.load = function (a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ib.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ib.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function (a) {
            f = arguments, h.html(e ? ib("<div>").append(ib.parseHTML(a)).find(e) : a)
        }).complete(d &&
        function (a, b) {
            h.each(d, f || [a.responseText, b, a])
        }), this
    }, ib.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        ib.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), ib.each(["get", "post"], function (a, c) {
        ib[c] = function (a, d, e, f) {
            return ib.isFunction(d) && (f = f || e, e = d, d = b), ib.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), ib.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": ib.parseJSON,
                "text xml": ib.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? G(G(a, ib.ajaxSettings), b) : G(ib.ajaxSettings, a)
        },
        ajaxPrefilter: E(Qc),
        ajaxTransport: E(Rc),
        ajax: function (a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, d && (t = H(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ib.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ib.etag[g] = v)), 204 === a ? (f = !0, x = "nocontent") : 304 === a ? (f = !0, x = "notmodified") : (f = I(m, t), x = f.state, l = f.data, s = f.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ib.active || ib.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = ib.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? ib(n) : ib.event,
                p = ib.Deferred(),
                q = ib.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === u) {
                            if (!l) for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                        else w.always(a[w.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ib.trim(m.dataType || "*").toLowerCase().match(kb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? 80 : 443)) == (Ec[3] || ("http:" === Ec[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = ib.param(m.data, m.traditional)), F(Qc, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === ib.active++ && ib.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), m.ifModified && (ib.lastModified[g] && w.setRequestHeader("If-Modified-Since", ib.lastModified[g]), ib.etag[g] && w.setRequestHeader("If-None-Match", ib.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = F(Rc, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getScript: function (a, c) {
            return ib.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return ib.get(a, b, c, "json")
        }
    }), ib.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return ib.globalEval(a), a
            }
        }
    }), ib.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ib.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = W.head || ib("head")[0] || W.documentElement;
            return {
                send: function (b, e) {
                    c = W.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(b, !0)
                }
            }
        }
    });
    var Uc = [],
        Vc = /(=)\?(?=&|$)|\?\?/;
    ib.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Uc.pop() || ib.expando + "_" + Gc++;
            return this[a] = !0, a
        }
    }), ib.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ib.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || ib.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function () {
            h = arguments
        }, e.always(function () {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && ib.isFunction(g) && g(h[0]), h = g = b
        }), "script") : b
    });
    var Wc, Xc, Yc = 0,
        Zc = a.ActiveXObject &&
    function () {
        var a;
        for (a in Wc) Wc[a](b, !0)
    };
    ib.ajaxSettings.xhr = a.ActiveXObject ?
    function () {
        return !this.isLocal && J() || K()
    } : J, Xc = ib.ajaxSettings.xhr(), ib.support.cors = !! Xc && "withCredentials" in Xc, Xc = ib.support.ajax = !! Xc, Xc && ib.ajaxTransport(function (c) {
        if (!c.crossDomain || ib.support.cors) {
            var d;
            return {
                send: function (e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function (a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = ib.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                            else {
                                l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText
                                } catch (m) {
                                    k = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch (n) {
                            e || f(-1, n)
                        }
                        l && f(h, k, l, j)
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, ib(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function () {
                    d && d(b, !0)
                }
            }
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/,
        bd = RegExp("^(?:([+-])=|)(" + jb + ")([a-z%]*)$", "i"),
        cd = /queueHooks$/,
        dd = [P],
        ed = {
            "*": [function (a, b) {
                var c, d, e = this.createTween(a, b),
                    f = bd.exec(b),
                    g = e.cur(),
                    h = +g || 0,
                    i = 1,
                    j = 20;
                if (f) {
                    if (c = +f[2], d = f[3] || (ib.cssNumber[a] ? "" : "px"), "px" !== d && h) {
                        h = ib.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h /= i, ib.style(e.elem, a, h + d);
                        while (i !== (i = e.cur() / g) && 1 !== i && --j)
                    }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                }
                return e
            }]
        };
    ib.Animation = ib.extend(N, {
        tweener: function (a, b) {
            ib.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? dd.unshift(a) : dd.push(a)
        }
    }), ib.Tween = Q, Q.prototype = {
        constructor: Q,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ib.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Q.propHooks[this.prop];
            return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Q.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ib.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this
        }
    }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ib.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                ib.fx.step[a.prop] ? ib.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ib.cssProps[a.prop]] || ib.cssHooks[a.prop]) ? ib.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ib.each(["toggle", "show", "hide"], function (a, b) {
        var c = ib.fn[b];
        ib.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(R(b, !0), a, d, e)
        }
    }), ib.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(w).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = ib.isEmptyObject(a),
                f = ib.speed(b, c, d),
                g = function () {
                    var b = N(this, ib.extend({}, a), f);
                    g.finish = function () {
                        b.stop(!0)
                    }, (e || ib._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, c, d) {
            var e = function (a) {
                    var b = a.stop;
                    delete a.stop, b(d)
                };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = ib.timers,
                    g = ib._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && ib.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = ib._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = ib.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, ib.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), ib.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        ib.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), ib.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? ib.extend({}, a) : {
            complete: c || !c && b || ib.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ib.isFunction(b) && b
        };
        return d.duration = ib.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ib.fx.speeds ? ib.fx.speeds[d.duration] : ib.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            ib.isFunction(d.old) && d.old.call(this), d.queue && ib.dequeue(this, d.queue)
        }, d
    }, ib.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ib.timers = [], ib.fx = Q.prototype.init, ib.fx.tick = function () {
        var a, c = ib.timers,
            d = 0;
        for ($c = ib.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || ib.fx.stop(), $c = b
    }, ib.fx.timer = function (a) {
        a() && ib.timers.push(a) && ib.fx.start()
    }, ib.fx.interval = 13, ib.fx.start = function () {
        _c || (_c = setInterval(ib.fx.tick, ib.fx.interval))
    }, ib.fx.stop = function () {
        clearInterval(_c), _c = null
    }, ib.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ib.fx.step = {}, ib.expr && ib.expr.filters && (ib.expr.filters.animated = function (a) {
        return ib.grep(ib.timers, function (b) {
            return a === b.elem
        }).length
    }), ib.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            ib.offset.setOffset(this, a, b)
        });
        var c, d, e = {
            top: 0,
            left: 0
        },
            f = this[0],
            g = f && f.ownerDocument;
        return g ? (c = g.documentElement, ib.contains(c, f) ? (typeof f.getBoundingClientRect !== V && (e = f.getBoundingClientRect()), d = S(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e) : void 0
    }, ib.offset = {
        setOffset: function (a, b, c) {
            var d = ib.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = ib(a),
                h = g.offset(),
                i = ib.css(a, "top"),
                j = ib.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && ib.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ib.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, ib.fn.extend({
        position: function () {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                },
                    d = this[0];
                return "fixed" === ib.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ib.nodeName(a[0], "html") || (c = a.offset()), c.top += ib.css(a[0], "borderTopWidth", !0), c.left += ib.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ib.css(d, "marginTop", !0),
                    left: b.left - c.left - ib.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || W.documentElement; a && !ib.nodeName(a, "html") && "static" === ib.css(a, "position");) a = a.offsetParent;
                return a || W.documentElement
            })
        }
    }), ib.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        ib.fn[a] = function (e) {
            return ib.access(this, function (a, e, f) {
                var g = S(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? ib(g).scrollLeft() : f, d ? f : ib(g).scrollTop()) : a[e] = f, b)
            }, a, e, arguments.length, null)
        }
    }), ib.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        ib.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function (d, e) {
            ib.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return ib.access(this, function (c, d, e) {
                    var f;
                    return ib.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ib.css(c, d, h) : ib.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), a.jQuery = a.$ = ib, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return ib
    })
}(window);;
$(function () {
    $("input[type=file]").each(function (a, b) {
        if ("undefined" == typeof $(this).attr("data-bfi-disabled")) {
            var c = "Browse";
            "undefined" != typeof $(this).attr("title") && (c = $(this).attr("title"));
            var d = $("<div>").append($(b).eq(0).clone()).html(),
                e = $(this).attr("class");
            $(b).replaceWith('<a class="file-input-wrapper btn ' + e + '">' + c + d + "</a>")
        }
    }).promise().done(function () {
        $(".file-input-wrapper").mousemove(function (a) {
            var b, c, d, e, f, g, h, i;
            c = $(this), b = c.find("input"), d = c.offset().left, e = c.offset().top, f = b.width(), g = b.height(), h = a.pageX, i = a.pageY, moveInputX = h - d - f + 20, moveInputY = i - e - g / 2, b.css({
                left: moveInputX,
                top: moveInputY
            })
        }), $(".file-input-wrapper input[type=file]").change(function () {
            $(this).parent().next().has("file-input-name").remove(), $(this).parent().after('<span class="file-input-name">' + $(this).val() + "</span>")
        })
    });
    var a = "<style>.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }.file-input-name { margin-left: 8px; }</style>";
    $("link[rel=stylesheet]").eq(0).before(a)
});;
!
function (a) {
    a(function () {
        a.support.transition = function () {
            var a = function () {
                    var a, b = document.createElement("bootstrap"),
                        c = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                    for (a in c) if (void 0 !== b.style[a]) return c[a]
                }();
            return a && {
                end: a
            }
        }()
    })
}(window.jQuery), !
function (a) {
    var b = function (b, c) {
            this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
    b.prototype = {
        constructor: b,
        toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function () {
            var b = this,
                c = a.Event("show");
            this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function () {
                var c = a.support.transition && b.$element.hasClass("fade");
                b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function () {
                    b.$element.focus().trigger("shown")
                }) : b.$element.focus().trigger("shown")
            }))
        },
        hide: function (b) {
            b && b.preventDefault(), b = a.Event("hide"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function () {
            var b = this;
            a(document).on("focusin.modal", function (a) {
                b.$element[0] !== a.target && !b.$element.has(a.target).length && b.$element.focus()
            })
        },
        escape: function () {
            var a = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (b) {
                27 == b.which && a.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function () {
            var b = this,
                c = setTimeout(function () {
                    b.$element.off(a.support.transition.end), b.hideModal()
                }, 500);
            this.$element.one(a.support.transition.end, function () {
                clearTimeout(c), b.hideModal()
            })
        },
        hideModal: function () {
            var a = this;
            this.$element.hide(), this.backdrop(function () {
                a.removeBackdrop(), a.$element.trigger("hidden")
            })
        },
        removeBackdrop: function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function (b) {
            var c = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var d = a.support.transition && c;
                if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                d ? this.$backdrop.one(a.support.transition.end, b) : b()
            } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b) : b()) : b && b()
        }
    };
    var c = a.fn.modal;
    a.fn.modal = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("modal"),
                f = a.extend({}, a.fn.modal.defaults, d.data(), "object" == typeof c && c);
            e || d.data("modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show()
        })
    }, a.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
        return a.fn.modal = c, this
    }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function (b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        b.preventDefault(), e.modal(f).one("hide", function () {
            c.focus()
        })
    })
}(window.jQuery), !
function (a) {
    var b = function (a, b) {
            this.init("tooltip", a, b)
        };
    b.prototype = {
        constructor: b,
        init: function (b, c, d) {
            var e, f, g, h, i;
            for (this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, g = this.options.trigger.split(" "), i = g.length; i--;) h = g[i], "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus", f = "hover" == h ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (b) {
            return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        },
        enter: function (b) {
            var c, d = a.fn[this.type].defaults,
                e = {};
            return this._options && a.each(this._options, function (a, b) {
                d[a] != b && (e[a] = b)
            }, this), c = a(b.currentTarget)[this.type](e).data(this.type), c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function () {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show), void 0) : c.show()
        },
        leave: function (b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", this.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide), void 0) : c.hide()
        },
        show: function () {
            var b, c, d, e, f, g, h = a.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, b.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight, f) {
                case "bottom":
                    g = {
                        top: c.top + c.height,
                        left: c.left + c.width / 2 - d / 2
                    };
                    break;
                case "top":
                    g = {
                        top: c.top - e,
                        left: c.left + c.width / 2 - d / 2
                    };
                    break;
                case "left":
                    g = {
                        top: c.top + c.height / 2 - e / 2,
                        left: c.left - d
                    };
                    break;
                case "right":
                    g = {
                        top: c.top + c.height / 2 - e / 2,
                        left: c.left + c.width
                    }
                }
                this.applyPlacement(g, f), this.$element.trigger("shown")
            }
        },
        applyPlacement: function (a, b) {
            var c, d, e, f, g = this.tip(),
                h = g[0].offsetWidth,
                i = g[0].offsetHeight;
            g.offset(a).addClass(b).addClass("in"), c = g[0].offsetWidth, d = g[0].offsetHeight, "top" == b && d != i && (a.top = a.top + i - d, f = !0), "bottom" == b || "top" == b ? (e = 0, a.left < 0 && (e = -2 * a.left, a.left = 0, g.offset(a), c = g[0].offsetWidth, d = g[0].offsetHeight), this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"), f && g.offset(a)
        },
        replaceArrow: function (a, b, c) {
            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
        },
        setContent: function () {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function b() {
                var b = setTimeout(function () {
                    c.off(a.support.transition.end).detach()
                }, 500);
                c.one(a.support.transition.end, function () {
                    clearTimeout(b), c.detach()
                })
            }
            var c = this.tip(),
                d = a.Event("hide");
            return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(), this.$element.trigger("hidden"), this)
        },
        fixTitle: function () {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function () {
            var b = this.$element[0];
            return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                width: b.offsetWidth,
                height: b.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function () {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        },
        tip: function () {
            return this.$tip = this.$tip || a(this.options.template)
        },
        arrow: function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function (b) {
            var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
            c.tip().hasClass("in") ? c.hide() : c.show()
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("tooltip"),
                f = "object" == typeof c && c;
            e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = c, this
    }
}(window.jQuery), !
function (a) {
    var b = function (a, b) {
            this.init("popover", a, b)
        };
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
        constructor: b,
        setContent: function () {
            var a = this.tip(),
                b = this.getTitle(),
                c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
        },
        hasContent: function () {
            return this.getTitle() || this.getContent()
        },
        getContent: function () {
            var a, b = this.$element,
                c = this.options;
            return a = ("function" == typeof c.content ? c.content.call(b[0]) : c.content) || b.attr("data-content")
        },
        tip: function () {
            return this.$tip || (this.$tip = a(this.options.template)), this.$tip
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var c = a.fn.popover;
    a.fn.popover = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("popover"),
                f = "object" == typeof c && c;
            e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), a.fn.popover.noConflict = function () {
        return a.fn.popover = c, this
    }
}(window.jQuery), !
function (a) {
    var b = function (b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
        };
    b.prototype.setState = function (a) {
        var b = "disabled",
            c = this.$element,
            d = c.data(),
            e = c.is("input") ? "val" : "html";
        a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function () {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }, b.prototype.toggle = function () {
        var a = this.$element.closest('[data-toggle="buttons-radio"]');
        a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function (c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("button"),
                f = "object" == typeof c && c;
            e || d.data("button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.defaults = {
        loadingText: "loading..."
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
        return a.fn.button = c, this
    }, a(document).on("click.button.data-api", "[data-toggle^=button]", function (b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
    })
}(window.jQuery);;
!
function (a, b) {
    function c(a) {
        return "" === f ? a : (a = a.charAt(0).toUpperCase() + a.substr(1), f + a)
    }
    var d = Math,
        e = b.createElement("div").style,
        f = function () {
            for (var a, b = "t,webkitT,MozT,msT,OT".split(","), c = 0, d = b.length; d > c; c++) if (a = b[c] + "ransform", a in e) return b[c].substr(0, b[c].length - 1);
            return !1
        }(),
        g = f ? "-" + f.toLowerCase() + "-" : "",
        h = c("transform"),
        i = c("transitionProperty"),
        j = c("transitionDuration"),
        k = c("transformOrigin"),
        l = c("transitionTimingFunction"),
        m = c("transitionDelay"),
        n = /android/gi.test(navigator.appVersion),
        o = /iphone|ipad/gi.test(navigator.appVersion),
        p = /hp-tablet/gi.test(navigator.appVersion),
        q = c("perspective") in e,
        r = "ontouchstart" in a && !p,
        s = f !== !1,
        t = c("transition") in e,
        u = "onorientationchange" in a ? "orientationchange" : "resize",
        v = r ? "touchstart" : "mousedown",
        w = r ? "touchmove" : "mousemove",
        x = r ? "touchend" : "mouseup",
        y = r ? "touchcancel" : "mouseup",
        z = function () {
            if (f === !1) return !1;
            var a = {
                "": "transitionend",
                webkit: "webkitTransitionEnd",
                Moz: "transitionend",
                O: "otransitionend",
                ms: "MSTransitionEnd"
            };
            return a[f]
        }(),
        A = function () {
            return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame ||
            function (a) {
                return setTimeout(a, 1)
            }
        }(),
        B = function () {
            return a.cancelRequestAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || clearTimeout
        }(),
        C = q ? " translateZ(0)" : "",
        D = function (c, d) {
            var e, f = this;
            f.wrapper = "object" == typeof c ? c : b.getElementById(c), f.wrapper.style.overflow = "hidden", f.scroller = f.wrapper.children[0], f.options = {
                hScroll: !0,
                vScroll: !0,
                x: 0,
                y: 0,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                topOffset: 0,
                checkDOMChanges: !1,
                handleClick: !0,
                hScrollbar: !0,
                vScrollbar: !0,
                fixedScrollbar: n,
                hideScrollbar: o,
                fadeScrollbar: o && q,
                scrollbarClass: "",
                zoom: !1,
                zoomMin: 1,
                zoomMax: 4,
                doubleTapZoom: 2,
                wheelAction: "scroll",
                snap: !1,
                snapThreshold: 1,
                onRefresh: null,
                onBeforeScrollStart: function (a) {
                    a.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null,
                onZoomStart: null,
                onZoom: null,
                onZoomEnd: null
            };
            for (e in d) f.options[e] = d[e];
            f.x = f.options.x, f.y = f.options.y, f.options.useTransform = s && f.options.useTransform, f.options.hScrollbar = f.options.hScroll && f.options.hScrollbar, f.options.vScrollbar = f.options.vScroll && f.options.vScrollbar, f.options.zoom = f.options.useTransform && f.options.zoom, f.options.useTransition = t && f.options.useTransition, f.options.zoom && n && (C = ""), f.scroller.style[i] = f.options.useTransform ? g + "transform" : "top left", f.scroller.style[j] = "0", f.scroller.style[k] = "0 0", f.options.useTransition && (f.scroller.style[l] = "cubic-bezier(0.33,0.66,0.66,1)"), f.options.useTransform ? f.scroller.style[h] = "translate(" + f.x + "px," + f.y + "px)" + C : f.scroller.style.cssText += ";position:absolute;top:" + f.y + "px;left:" + f.x + "px", f.options.useTransition && (f.options.fixedScrollbar = !0), f.refresh(), f._bind(u, a), f._bind(v), r || "none" != f.options.wheelAction && (f._bind("DOMMouseScroll"), f._bind("mousewheel")), f.options.checkDOMChanges && (f.checkDOMTime = setInterval(function () {
                f._checkDOMChanges()
            }, 500))
        };
    D.prototype = {
        enabled: !0,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        currPageX: 0,
        currPageY: 0,
        pagesX: [],
        pagesY: [],
        aniTime: null,
        wheelZoomCount: 0,
        handleEvent: function (a) {
            var b = this;
            switch (a.type) {
            case v:
                if (!r && 0 !== a.button) return;
                b._start(a);
                break;
            case w:
                b._move(a);
                break;
            case x:
            case y:
                b._end(a);
                break;
            case u:
                b._resize();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                b._wheel(a);
                break;
            case z:
                b._transitionEnd(a)
            }
        },
        _checkDOMChanges: function () {
            this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
        },
        _scrollbar: function (a) {
            var c, e = this;
            return e[a + "Scrollbar"] ? (e[a + "ScrollbarWrapper"] || (c = b.createElement("div"), e.options.scrollbarClass ? c.className = e.options.scrollbarClass + a.toUpperCase() : c.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (e.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (e.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), c.style.cssText += ";pointer-events:none;" + g + "transition-property:opacity;" + g + "transition-duration:" + (e.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (e.options.hideScrollbar ? "0" : "1"), e.wrapper.appendChild(c), e[a + "ScrollbarWrapper"] = c, c = b.createElement("div"), e.options.scrollbarClass || (c.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + g + "background-clip:padding-box;" + g + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + g + "border-radius:3px;border-radius:3px"), c.style.cssText += ";pointer-events:none;" + g + "transition-property:" + g + "transform;" + g + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + g + "transition-duration:0;" + g + "transform: translate(0,0)" + C, e.options.useTransition && (c.style.cssText += ";" + g + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), e[a + "ScrollbarWrapper"].appendChild(c), e[a + "ScrollbarIndicator"] = c), "h" == a ? (e.hScrollbarSize = e.hScrollbarWrapper.clientWidth, e.hScrollbarIndicatorSize = d.max(d.round(e.hScrollbarSize * e.hScrollbarSize / e.scrollerW), 8), e.hScrollbarIndicator.style.width = e.hScrollbarIndicatorSize + "px", e.hScrollbarMaxScroll = e.hScrollbarSize - e.hScrollbarIndicatorSize, e.hScrollbarProp = e.hScrollbarMaxScroll / e.maxScrollX) : (e.vScrollbarSize = e.vScrollbarWrapper.clientHeight, e.vScrollbarIndicatorSize = d.max(d.round(e.vScrollbarSize * e.vScrollbarSize / e.scrollerH), 8), e.vScrollbarIndicator.style.height = e.vScrollbarIndicatorSize + "px", e.vScrollbarMaxScroll = e.vScrollbarSize - e.vScrollbarIndicatorSize, e.vScrollbarProp = e.vScrollbarMaxScroll / e.maxScrollY), e._scrollbarPos(a, !0), void 0) : (e[a + "ScrollbarWrapper"] && (s && (e[a + "ScrollbarIndicator"].style[h] = ""), e[a + "ScrollbarWrapper"].parentNode.removeChild(e[a + "ScrollbarWrapper"]), e[a + "ScrollbarWrapper"] = null, e[a + "ScrollbarIndicator"] = null), void 0)
        },
        _resize: function () {
            var a = this;
            setTimeout(function () {
                a.refresh()
            }, n ? 200 : 0)
        },
        _pos: function (a, b) {
            this.zoomed || (a = this.hScroll ? a : 0, b = this.vScroll ? b : 0, this.options.useTransform ? this.scroller.style[h] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + C : (a = d.round(a), b = d.round(b), this.scroller.style.left = a + "px", this.scroller.style.top = b + "px"), this.x = a, this.y = b, this._scrollbarPos("h"), this._scrollbarPos("v"))
        },
        _scrollbarPos: function (a, b) {
            var c, e = this,
                f = "h" == a ? e.x : e.y;
            e[a + "Scrollbar"] && (f = e[a + "ScrollbarProp"] * f, 0 > f ? (e.options.fixedScrollbar || (c = e[a + "ScrollbarIndicatorSize"] + d.round(3 * f), 8 > c && (c = 8), e[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), f = 0) : f > e[a + "ScrollbarMaxScroll"] && (e.options.fixedScrollbar ? f = e[a + "ScrollbarMaxScroll"] : (c = e[a + "ScrollbarIndicatorSize"] - d.round(3 * (f - e[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), e[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", f = e[a + "ScrollbarMaxScroll"] + (e[a + "ScrollbarIndicatorSize"] - c))), e[a + "ScrollbarWrapper"].style[m] = "0", e[a + "ScrollbarWrapper"].style.opacity = b && e.options.hideScrollbar ? "0" : "1", e[a + "ScrollbarIndicator"].style[h] = "translate(" + ("h" == a ? f + "px,0)" : "0," + f + "px)") + C)
        },
        _start: function (b) {
            var c, e, f, g, i, j = this,
                k = r ? b.touches[0] : b;
            j.enabled && (j.options.onBeforeScrollStart && j.options.onBeforeScrollStart.call(j, b), (j.options.useTransition || j.options.zoom) && j._transitionTime(0), j.moved = !1, j.animating = !1, j.zoomed = !1, j.distX = 0, j.distY = 0, j.absDistX = 0, j.absDistY = 0, j.dirX = 0, j.dirY = 0, j.options.zoom && r && b.touches.length > 1 && (g = d.abs(b.touches[0].pageX - b.touches[1].pageX), i = d.abs(b.touches[0].pageY - b.touches[1].pageY), j.touchesDistStart = d.sqrt(g * g + i * i), j.originX = d.abs(b.touches[0].pageX + b.touches[1].pageX - 2 * j.wrapperOffsetLeft) / 2 - j.x, j.originY = d.abs(b.touches[0].pageY + b.touches[1].pageY - 2 * j.wrapperOffsetTop) / 2 - j.y, j.options.onZoomStart && j.options.onZoomStart.call(j, b)), j.options.momentum && (j.options.useTransform ? (c = getComputedStyle(j.scroller, null)[h].replace(/[^0-9\-.,]/g, "").split(","), e = +(c[12] || c[4]), f = +(c[13] || c[5])) : (e = +getComputedStyle(j.scroller, null).left.replace(/[^0-9-]/g, ""), f = +getComputedStyle(j.scroller, null).top.replace(/[^0-9-]/g, "")), (e != j.x || f != j.y) && (j.options.useTransition ? j._unbind(z) : B(j.aniTime), j.steps = [], j._pos(e, f), j.options.onScrollEnd && j.options.onScrollEnd.call(j))), j.absStartX = j.x, j.absStartY = j.y, j.startX = j.x, j.startY = j.y, j.pointX = k.pageX, j.pointY = k.pageY, j.startTime = b.timeStamp || (new Date).getTime(), j.options.onScrollStart && j.options.onScrollStart.call(j, b), j._bind(w, a), j._bind(x, a), j._bind(y, a))
        },
        _move: function (a) {
            var b, c, e, f = this,
                g = r ? a.touches[0] : a,
                i = g.pageX - f.pointX,
                j = g.pageY - f.pointY,
                k = f.x + i,
                l = f.y + j,
                m = a.timeStamp || (new Date).getTime();
            return f.options.onBeforeScrollMove && f.options.onBeforeScrollMove.call(f, a), f.options.zoom && r && a.touches.length > 1 ? (b = d.abs(a.touches[0].pageX - a.touches[1].pageX), c = d.abs(a.touches[0].pageY - a.touches[1].pageY), f.touchesDist = d.sqrt(b * b + c * c), f.zoomed = !0, e = 1 / f.touchesDistStart * f.touchesDist * this.scale, e < f.options.zoomMin ? e = .5 * f.options.zoomMin * Math.pow(2, e / f.options.zoomMin) : e > f.options.zoomMax && (e = 2 * f.options.zoomMax * Math.pow(.5, f.options.zoomMax / e)), f.lastScale = e / this.scale, k = this.originX - this.originX * f.lastScale + this.x, l = this.originY - this.originY * f.lastScale + this.y, this.scroller.style[h] = "translate(" + k + "px," + l + "px) scale(" + e + ")" + C, f.options.onZoom && f.options.onZoom.call(f, a), void 0) : (f.pointX = g.pageX, f.pointY = g.pageY, (k > 0 || k < f.maxScrollX) && (k = f.options.bounce ? f.x + i / 2 : k >= 0 || f.maxScrollX >= 0 ? 0 : f.maxScrollX), (l > f.minScrollY || l < f.maxScrollY) && (l = f.options.bounce ? f.y + j / 2 : l >= f.minScrollY || f.maxScrollY >= 0 ? f.minScrollY : f.maxScrollY), f.distX += i, f.distY += j, f.absDistX = d.abs(f.distX), f.absDistY = d.abs(f.distY), f.absDistX < 6 && f.absDistY < 6 || (f.options.lockDirection && (f.absDistX > f.absDistY + 5 ? (l = f.y, j = 0) : f.absDistY > f.absDistX + 5 && (k = f.x, i = 0)), f.moved = !0, f._pos(k, l), f.dirX = i > 0 ? -1 : 0 > i ? 1 : 0, f.dirY = j > 0 ? -1 : 0 > j ? 1 : 0, m - f.startTime > 300 && (f.startTime = m, f.startX = f.x, f.startY = f.y), f.options.onScrollMove && f.options.onScrollMove.call(f, a)), void 0)
        },
        _end: function (c) {
            if (!r || 0 === c.touches.length) {
                var e, f, g, i, k, l, m, n = this,
                    o = r ? c.changedTouches[0] : c,
                    p = {
                        dist: 0,
                        time: 0
                    },
                    q = {
                        dist: 0,
                        time: 0
                    },
                    s = (c.timeStamp || (new Date).getTime()) - n.startTime,
                    t = n.x,
                    u = n.y;
                if (n._unbind(w, a), n._unbind(x, a), n._unbind(y, a), n.options.onBeforeScrollEnd && n.options.onBeforeScrollEnd.call(n, c), n.zoomed) return m = n.scale * n.lastScale, m = Math.max(n.options.zoomMin, m), m = Math.min(n.options.zoomMax, m), n.lastScale = m / n.scale, n.scale = m, n.x = n.originX - n.originX * n.lastScale + n.x, n.y = n.originY - n.originY * n.lastScale + n.y, n.scroller.style[j] = "200ms", n.scroller.style[h] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + ")" + C, n.zoomed = !1, n.refresh(), n.options.onZoomEnd && n.options.onZoomEnd.call(n, c), void 0;
                if (!n.moved) return r && (n.doubleTapTimer && n.options.zoom ? (clearTimeout(n.doubleTapTimer), n.doubleTapTimer = null, n.options.onZoomStart && n.options.onZoomStart.call(n, c), n.zoom(n.pointX, n.pointY, 1 == n.scale ? n.options.doubleTapZoom : 1), n.options.onZoomEnd && setTimeout(function () {
                    n.options.onZoomEnd.call(n, c)
                }, 200)) : this.options.handleClick && (n.doubleTapTimer = setTimeout(function () {
                    for (n.doubleTapTimer = null, e = o.target; 1 != e.nodeType;) e = e.parentNode;
                    "SELECT" != e.tagName && "INPUT" != e.tagName && "TEXTAREA" != e.tagName && (f = b.createEvent("MouseEvents"), f.initMouseEvent("click", !0, !0, c.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, 0, null), f._fake = !0, e.dispatchEvent(f))
                }, n.options.zoom ? 250 : 0))), n._resetPos(400), n.options.onTouchEnd && n.options.onTouchEnd.call(n, c), void 0;
                if (300 > s && n.options.momentum && (p = t ? n._momentum(t - n.startX, s, -n.x, n.scrollerW - n.wrapperW + n.x, n.options.bounce ? n.wrapperW : 0) : p, q = u ? n._momentum(u - n.startY, s, -n.y, n.maxScrollY < 0 ? n.scrollerH - n.wrapperH + n.y - n.minScrollY : 0, n.options.bounce ? n.wrapperH : 0) : q, t = n.x + p.dist, u = n.y + q.dist, (n.x > 0 && t > 0 || n.x < n.maxScrollX && t < n.maxScrollX) && (p = {
                    dist: 0,
                    time: 0
                }), (n.y > n.minScrollY && u > n.minScrollY || n.y < n.maxScrollY && u < n.maxScrollY) && (q = {
                    dist: 0,
                    time: 0
                })), p.dist || q.dist) return k = d.max(d.max(p.time, q.time), 10), n.options.snap && (g = t - n.absStartX, i = u - n.absStartY, d.abs(g) < n.options.snapThreshold && d.abs(i) < n.options.snapThreshold ? n.scrollTo(n.absStartX, n.absStartY, 200) : (l = n._snap(t, u), t = l.x, u = l.y, k = d.max(l.time, k))), n.scrollTo(d.round(t), d.round(u), k), n.options.onTouchEnd && n.options.onTouchEnd.call(n, c), void 0;
                if (n.options.snap) return g = t - n.absStartX, i = u - n.absStartY, d.abs(g) < n.options.snapThreshold && d.abs(i) < n.options.snapThreshold ? n.scrollTo(n.absStartX, n.absStartY, 200) : (l = n._snap(n.x, n.y), (l.x != n.x || l.y != n.y) && n.scrollTo(l.x, l.y, l.time)), n.options.onTouchEnd && n.options.onTouchEnd.call(n, c), void 0;
                n._resetPos(200), n.options.onTouchEnd && n.options.onTouchEnd.call(n, c)
            }
        },
        _resetPos: function (a) {
            var b = this,
                c = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX : b.x,
                d = b.y >= b.minScrollY || b.maxScrollY > 0 ? b.minScrollY : b.y < b.maxScrollY ? b.maxScrollY : b.y;
            return c == b.x && d == b.y ? (b.moved && (b.moved = !1, b.options.onScrollEnd && b.options.onScrollEnd.call(b)), b.hScrollbar && b.options.hideScrollbar && ("webkit" == f && (b.hScrollbarWrapper.style[m] = "300ms"), b.hScrollbarWrapper.style.opacity = "0"), b.vScrollbar && b.options.hideScrollbar && ("webkit" == f && (b.vScrollbarWrapper.style[m] = "300ms"), b.vScrollbarWrapper.style.opacity = "0"), void 0) : (b.scrollTo(c, d, a || 0), void 0)
        },
        _wheel: function (a) {
            var b, c, d, e, f = this;
            if ("wheelDeltaX" in a) b = a.wheelDeltaX / 12, c = a.wheelDeltaY / 12;
            else if ("wheelDelta" in a) b = c = a.wheelDelta / 12;
            else {
                if (!("detail" in a)) return;
                b = c = 3 * -a.detail
            }
            return "zoom" == f.options.wheelAction ? (e = f.scale * Math.pow(2, 1 / 3 * (c ? c / Math.abs(c) : 0)), e < f.options.zoomMin && (e = f.options.zoomMin), e > f.options.zoomMax && (e = f.options.zoomMax), e != f.scale && (!f.wheelZoomCount && f.options.onZoomStart && f.options.onZoomStart.call(f, a), f.wheelZoomCount++, f.zoom(a.pageX, a.pageY, e, 400), setTimeout(function () {
                f.wheelZoomCount--, !f.wheelZoomCount && f.options.onZoomEnd && f.options.onZoomEnd.call(f, a)
            }, 400)), void 0) : (d = f.x + 45 * c, f.scrollTo(d, f.y, 350), void 0)
        },
        _transitionEnd: function (a) {
            var b = this;
            a.target == b.scroller && (b._unbind(z), b._startAni())
        },
        _startAni: function () {
            var a, b, c, e = this,
                f = e.x,
                g = e.y,
                h = (new Date).getTime();
            if (!e.animating) {
                if (!e.steps.length) return e._resetPos(400), void 0;
                if (a = e.steps.shift(), a.x == f && a.y == g && (a.time = 0), e.animating = !0, e.moved = !0, e.options.useTransition) return e._transitionTime(a.time), e._pos(a.x, a.y), e.animating = !1, a.time ? e._bind(z) : e._resetPos(0), void 0;
                c = function () {
                    var i, j, k = (new Date).getTime();
                    return k >= h + a.time ? (e._pos(a.x, a.y), e.animating = !1, e.options.onAnimationEnd && e.options.onAnimationEnd.call(e), e._startAni(), void 0) : (k = (k - h) / a.time - 1, b = d.sqrt(1 - k * k), i = (a.x - f) * b + f, j = (a.y - g) * b + g, e._pos(i, j), e.animating && (e.aniTime = A(c)), void 0)
                }, c()
            }
        },
        _transitionTime: function (a) {
            a += "ms", this.scroller.style[j] = a, this.hScrollbar && (this.hScrollbarIndicator.style[j] = a), this.vScrollbar && (this.vScrollbarIndicator.style[j] = a)
        },
        _momentum: function (a, b, c, e, f) {
            var g = 6e-4,
                h = d.abs(a) / b,
                i = h * h / (2 * g),
                j = 0,
                k = 0;
            return a > 0 && i > c ? (k = f / (6 / (i / h * g)), c += k, h = h * c / i, i = c) : 0 > a && i > e && (k = f / (6 / (i / h * g)), e += k, h = h * e / i, i = e), i *= 0 > a ? -1 : 1, j = h / g, {
                dist: i,
                time: d.round(j)
            }
        },
        _offset: function (a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
            return a != this.wrapper && (b *= this.scale, c *= this.scale), {
                left: b,
                top: c
            }
        },
        _snap: function (a, b) {
            var c, e, f, g, h, i, j = this;
            for (f = j.pagesX.length - 1, c = 0, e = j.pagesX.length; e > c; c++) if (a >= j.pagesX[c]) {
                f = c;
                break
            }
            for (f == j.currPageX && f > 0 && j.dirX < 0 && f--, a = j.pagesX[f], h = d.abs(a - j.pagesX[j.currPageX]), h = h ? 500 * (d.abs(j.x - a) / h) : 0, j.currPageX = f, f = j.pagesY.length - 1, c = 0; f > c; c++) if (b >= j.pagesY[c]) {
                f = c;
                break
            }
            return f == j.currPageY && f > 0 && j.dirY < 0 && f--, b = j.pagesY[f], i = d.abs(b - j.pagesY[j.currPageY]), i = i ? 500 * (d.abs(j.y - b) / i) : 0, j.currPageY = f, g = d.round(d.max(h, i)) || 200, {
                x: a,
                y: b,
                time: g
            }
        },
        _bind: function (a, b, c) {
            (void 0 == dojo.isIE || dojo.isIE > 8) && (b || this.scroller).addEventListener(a, this, !! c)
        },
        _unbind: function (a, b, c) {
            (void 0 == dojo.isIE || dojo.isIE > 8) && (b || this.scroller).removeEventListener(a, this, !! c)
        },
        destroy: function () {
            var b = this;
            b.scroller.style[h] = "", b.hScrollbar = !1, b.vScrollbar = !1, b._scrollbar("h"), b._scrollbar("v"), b._unbind(u, a), b._unbind(v), b._unbind(w, a), b._unbind(x, a), b._unbind(y, a), b.options.hasTouch || (b._unbind("DOMMouseScroll"), b._unbind("mousewheel")), b.options.useTransition && b._unbind(z), b.options.checkDOMChanges && clearInterval(b.checkDOMTime), b.options.onDestroy && b.options.onDestroy.call(b)
        },
        refresh: function () {
            var a, b, c, e, f = this,
                g = 0,
                h = 0;
            if (f.scale < f.options.zoomMin && (f.scale = f.options.zoomMin), f.wrapperW = f.wrapper.clientWidth || 1, f.wrapperH = f.wrapper.clientHeight || 1, f.minScrollY = -f.options.topOffset || 0, f.scrollerW = d.round(f.scroller.offsetWidth * f.scale), f.scrollerH = d.round((f.scroller.offsetHeight + f.minScrollY) * f.scale), f.maxScrollX = f.wrapperW - f.scrollerW, f.maxScrollY = f.wrapperH - f.scrollerH + f.minScrollY, f.dirX = 0, f.dirY = 0, f.options.onRefresh && f.options.onRefresh.call(f), f.hScroll = f.options.hScroll && f.maxScrollX < 0, f.vScroll = f.options.vScroll && (!f.options.bounceLock && !f.hScroll || f.scrollerH > f.wrapperH), f.hScrollbar = f.hScroll && f.options.hScrollbar, f.vScrollbar = f.vScroll && f.options.vScrollbar && f.scrollerH > f.wrapperH, a = f._offset(f.wrapper), f.wrapperOffsetLeft = -a.left, f.wrapperOffsetTop = -a.top, "string" == typeof f.options.snap) for (f.pagesX = [], f.pagesY = [], e = f.scroller.querySelectorAll(f.options.snap), b = 0, c = e.length; c > b; b++) g = f._offset(e[b]), g.left += f.wrapperOffsetLeft, g.top += f.wrapperOffsetTop, f.pagesX[b] = g.left < f.maxScrollX ? f.maxScrollX : g.left * f.scale, f.pagesY[b] = g.top < f.maxScrollY ? f.maxScrollY : g.top * f.scale;
            else if (f.options.snap) {
                for (f.pagesX = []; g >= f.maxScrollX;) f.pagesX[h] = g, g -= f.wrapperW, h++;
                for (f.maxScrollX % f.wrapperW && (f.pagesX[f.pagesX.length] = f.maxScrollX - f.pagesX[f.pagesX.length - 1] + f.pagesX[f.pagesX.length - 1]), g = 0, h = 0, f.pagesY = []; g >= f.maxScrollY;) f.pagesY[h] = g, g -= f.wrapperH, h++;
                f.maxScrollY % f.wrapperH && (f.pagesY[f.pagesY.length] = f.maxScrollY - f.pagesY[f.pagesY.length - 1] + f.pagesY[f.pagesY.length - 1])
            }
            f._scrollbar("h"), f._scrollbar("v"), f.zoomed || (f.scroller.style[j] = "0", f._resetPos(400))
        },
        scrollTo: function (a, b, c, d) {
            var e, f, g = this,
                h = a;
            for (g.stop(), h.length || (h = [{
                x: a,
                y: b,
                time: c,
                relative: d
            }]), e = 0, f = h.length; f > e; e++) h[e].relative && (h[e].x = g.x - h[e].x, h[e].y = g.y - h[e].y), g.steps.push({
                x: h[e].x,
                y: h[e].y,
                time: h[e].time || 0
            });
            g._startAni()
        },
        scrollToElement: function (a, b) {
            var c, e = this;
            a = a.nodeType ? a : e.scroller.querySelector(a), a && (c = e._offset(a), c.left += e.wrapperOffsetLeft, c.top += e.wrapperOffsetTop, c.left = c.left > 0 ? 0 : c.left < e.maxScrollX ? e.maxScrollX : c.left, c.top = c.top > e.minScrollY ? e.minScrollY : c.top < e.maxScrollY ? e.maxScrollY : c.top, b = void 0 === b ? d.max(2 * d.abs(c.left), 2 * d.abs(c.top)) : b, e.scrollTo(c.left, c.top, b))
        },
        scrollToPage: function (a, b, c) {
            var d, e, f = this;
            c = void 0 === c ? 400 : c, f.options.onScrollStart && f.options.onScrollStart.call(f), f.options.snap ? (a = "next" == a ? f.currPageX + 1 : "prev" == a ? f.currPageX - 1 : a, b = "next" == b ? f.currPageY + 1 : "prev" == b ? f.currPageY - 1 : b, a = 0 > a ? 0 : a > f.pagesX.length - 1 ? f.pagesX.length - 1 : a, b = 0 > b ? 0 : b > f.pagesY.length - 1 ? f.pagesY.length - 1 : b, f.currPageX = a, f.currPageY = b, d = f.pagesX[a], e = f.pagesY[b]) : (d = -f.wrapperW * a, e = -f.wrapperH * b, d < f.maxScrollX && (d = f.maxScrollX), e < f.maxScrollY && (e = f.maxScrollY)), f.scrollTo(d, e, c)
        },
        disable: function () {
            this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(w, a), this._unbind(x, a), this._unbind(y, a)
        },
        enable: function () {
            this.enabled = !0
        },
        stop: function () {
            this.options.useTransition ? this._unbind(z) : B(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
        },
        zoom: function (a, b, c, d) {
            var e = this,
                f = c / e.scale;
            e.options.useTransform && (e.zoomed = !0, d = void 0 === d ? 200 : d, a = a - e.wrapperOffsetLeft - e.x, b = b - e.wrapperOffsetTop - e.y, e.x = a - a * f + e.x, e.y = b - b * f + e.y, e.scale = c, e.refresh(), e.x = e.x > 0 ? 0 : e.x < e.maxScrollX ? e.maxScrollX : e.x, e.y = e.y > e.minScrollY ? e.minScrollY : e.y < e.maxScrollY ? e.maxScrollY : e.y, e.scroller.style[j] = d + "ms", e.scroller.style[h] = "translate(" + e.x + "px," + e.y + "px) scale(" + c + ")" + C, e.zoomed = !1)
        },
        isReady: function () {
            return !this.moved && !this.zoomed && !this.animating
        }
    }, e = null, "undefined" != typeof exports ? exports.iScroll = D : a.iScroll = D
}(window, document);;
var SwipeView = function (a, b) {
        function c(a) {
            return "" === e ? a : (a = a.charAt(0).toUpperCase() + a.substr(1), e + a)
        }
        var d = b.createElement("div").style,
            e = function () {
                for (var a, b = "t,webkitT,MozT,msT,OT".split(","), c = 0, e = b.length; e > c; c++) if (a = b[c] + "ransform", a in d) return b[c].substr(0, b[c].length - 1);
                return !1
            }(),
            f = e ? "-" + e.toLowerCase() + "-" : "",
            g = c("transform"),
            h = c("transitionDuration"),
            i = c("perspective") in d,
            j = "ontouchstart" in a,
            k = (c("transition") in d, i ? " translateZ(0)" : ""),
            l = "onorientationchange" in a ? "orientationchange" : "resize",
            m = j ? "touchstart" : "mousedown",
            n = j ? "touchmove" : "mousemove",
            o = j ? "touchend" : "mouseup",
            p = j ? "touchcancel" : "mouseup",
            q = function () {
                if (e === !1) return !1;
                var a = {
                    "": "transitionend",
                    webkit: "webkitTransitionEnd",
                    Moz: "transitionend",
                    O: "oTransitionEnd",
                    ms: "MSTransitionEnd"
                };
                return a[e]
            }(),
            r = function (c, d) {
                var g, h, i, j;
                this.wrapper = "string" == typeof c ? b.querySelector(c) : c, this.options = {
                    text: null,
                    numberOfPages: 3,
                    snapThreshold: null,
                    hastyPageFlip: !1,
                    loop: !0
                };
                for (g in d) this.options[g] = d[g];
                for (this.wrapper.style.overflow = "hidden", this.wrapper.style.position = "relative", this.masterPages = [], h = b.createElement("div"), h.id = "swipeview-slider", h.style.cssText = "position:relative;top:0;height:100%;width:100%;" + f + "transition-duration:0;" + f + "transform:translateZ(0);" + f + "transition-timing-function:ease-out", this.wrapper.appendChild(h), this.slider = h, this.refreshSize(), g = -1; 2 > g; g++) h = b.createElement("div"), h.id = "swipeview-masterpage-" + (g + 1), h.style.cssText = f + "transform:translateZ(0);position:absolute;top:0;height:100%;width:100%;left:" + 100 * g + "%", h.dataset || (h.dataset = {}), j = -1 == g ? this.options.numberOfPages - 1 : g, h.dataset.pageIndex = j, h.dataset.upcomingPageIndex = j, this.options.loop || -1 != g || (h.style.visibility = "hidden"), this.slider.appendChild(h), this.masterPages.push(h);
                i = this.masterPages[1].className, this.masterPages[1].className = i ? i + " swipeview-active" : "swipeview-active", a.addEventListener(l, this, !1), this.wrapper.addEventListener(m, this, !1), this.wrapper.addEventListener(n, this, !1), this.wrapper.addEventListener(o, this, !1), this.slider.addEventListener(q, this, !1), "O" == e && this.slider.addEventListener(q.toLowerCase(), this, !1)
            };
        return r.prototype = {
            currentMasterPage: 1,
            x: 0,
            page: 0,
            pageIndex: 0,
            customEvents: [],
            onFlip: function (a) {
                this.wrapper.addEventListener("swipeview-flip", a, !1), this.customEvents.push(["flip", a])
            },
            onMoveOut: function (a) {
                this.wrapper.addEventListener("swipeview-moveout", a, !1), this.customEvents.push(["moveout", a])
            },
            onMoveIn: function (a) {
                this.wrapper.addEventListener("swipeview-movein", a, !1), this.customEvents.push(["movein", a])
            },
            onTouchStart: function (a) {
                this.wrapper.addEventListener("swipeview-touchstart", a, !1), this.customEvents.push(["touchstart", a])
            },
            destroy: function () {
                for (; this.customEvents.length;) this.wrapper.removeEventListener("swipeview-" + this.customEvents[0][0], this.customEvents[0][1], !1), this.customEvents.shift();
                a.removeEventListener(l, this, !1), this.wrapper.removeEventListener(m, this, !1), this.wrapper.removeEventListener(n, this, !1), this.wrapper.removeEventListener(o, this, !1), this.slider.removeEventListener(q, this, !1)
            },
            refreshSize: function () {
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.pageWidth = this.wrapperWidth, this.maxX = -this.options.numberOfPages * this.pageWidth + this.wrapperWidth, this.snapThreshold = null === this.options.snapThreshold ? Math.round(.15 * this.pageWidth) : /%/.test(this.options.snapThreshold) ? Math.round(this.pageWidth * this.options.snapThreshold.replace("%", "") / 100) : this.options.snapThreshold
            },
            updatePageCount: function (a) {
                this.options.numberOfPages = a, this.maxX = -this.options.numberOfPages * this.pageWidth + this.wrapperWidth
            },
            goToPage: function (a) {
                var b;
                for (this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, ""), b = 0; 3 > b; b++) className = this.masterPages[b].className, /(^|\s)swipeview-loading(\s|$)/.test(className) || (this.masterPages[b].className = className ? className + " swipeview-loading" : "swipeview-loading");
                a = 0 > a ? 0 : a > this.options.numberOfPages - 1 ? this.options.numberOfPages - 1 : a, this.page = a, this.pageIndex = a, this.slider.style[h] = "0s", this.__pos(-a * this.pageWidth), this.currentMasterPage = this.page + 1 - 3 * Math.floor((this.page + 1) / 3), this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className + " swipeview-active", 0 === this.currentMasterPage ? (this.masterPages[2].style.left = 100 * this.page - 100 + "%", this.masterPages[0].style.left = 100 * this.page + "%", this.masterPages[1].style.left = 100 * this.page + 100 + "%", this.masterPages[2].dataset.upcomingPageIndex = 0 === this.page ? this.options.numberOfPages - 1 : this.page - 1, this.masterPages[0].dataset.upcomingPageIndex = this.page, this.masterPages[1].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1) : 1 == this.currentMasterPage ? (this.masterPages[0].style.left = 100 * this.page - 100 + "%", this.masterPages[1].style.left = 100 * this.page + "%", this.masterPages[2].style.left = 100 * this.page + 100 + "%", this.masterPages[0].dataset.upcomingPageIndex = 0 === this.page ? this.options.numberOfPages - 1 : this.page - 1, this.masterPages[1].dataset.upcomingPageIndex = this.page, this.masterPages[2].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1) : (this.masterPages[1].style.left = 100 * this.page - 100 + "%", this.masterPages[2].style.left = 100 * this.page + "%", this.masterPages[0].style.left = 100 * this.page + 100 + "%", this.masterPages[1].dataset.upcomingPageIndex = 0 === this.page ? this.options.numberOfPages - 1 : this.page - 1, this.masterPages[2].dataset.upcomingPageIndex = this.page, this.masterPages[0].dataset.upcomingPageIndex = this.page == this.options.numberOfPages - 1 ? 0 : this.page + 1), this.__flip()
            },
            next: function () {
                (this.options.loop || this.x != this.maxX) && (this.directionX = -1, this.x -= 1, this.__checkPosition())
            },
            prev: function () {
                (this.options.loop || 0 !== this.x) && (this.directionX = 1, this.x += 1, this.__checkPosition())
            },
            handleEvent: function (a) {
                switch (a.type) {
                case m:
                    this.__start(a);
                    break;
                case n:
                    this.__move(a);
                    break;
                case p:
                case o:
                    this.__end(a);
                    break;
                case l:
                    this.__resize();
                    break;
                case q:
                case "otransitionend":
                    a.target != this.slider || this.options.hastyPageFlip || this.__flip()
                }
            },
            __pos: function (a) {
                this.x = a, this.slider.style[g] = "translate(" + a + "px,0)" + k
            },
            __resize: function () {
                this.refreshSize(), this.slider.style[h] = "0s", this.__pos(-this.page * this.pageWidth)
            },
            __start: function (a) {
                if (!this.initiated) {
                    var b = j ? a.touches[0] : a;
                    this.initiated = !0, this.moved = !1, this.thresholdExceeded = !1, this.startX = b.pageX, this.startY = b.pageY, this.pointX = b.pageX, this.pointY = b.pageY, this.stepsX = 0, this.stepsY = 0, this.directionX = 0, this.directionLocked = !1, this.slider.style[h] = "0s", this.__event("touchstart")
                }
            },
            __move: function (a) {
                if (this.initiated) {
                    var b = j ? a.touches[0] : a,
                        c = b.pageX - this.pointX,
                        d = b.pageY - this.pointY,
                        e = this.x + c,
                        f = Math.abs(b.pageX - this.startX);
                    if (this.moved = !0, this.pointX = b.pageX, this.pointY = b.pageY, this.directionX = c > 0 ? 1 : 0 > c ? -1 : 0, this.stepsX += Math.abs(c), this.stepsY += Math.abs(d), !(this.stepsX < 10 && this.stepsY < 10)) {
                        if (!this.directionLocked && this.stepsY > this.stepsX) return this.initiated = !1, void 0;
                        a.preventDefault(), this.directionLocked = !0, !this.options.loop && (e > 0 || e < this.maxX) && (e = this.x + c / 2), !this.thresholdExceeded && f >= this.snapThreshold ? (this.thresholdExceeded = !0, this.__event("moveout")) : this.thresholdExceeded && f < this.snapThreshold && (this.thresholdExceeded = !1, this.__event("movein")), this.__pos(e)
                    }
                }
            },
            __end: function (a) {
                if (this.initiated) {
                    var b = j ? a.changedTouches[0] : a,
                        c = Math.abs(b.pageX - this.startX);
                    if (this.initiated = !1, this.moved) return !this.options.loop && (this.x > 0 || this.x < this.maxX) && (c = 0, this.__event("movein")), c < this.snapThreshold ? (this.slider.style[h] = Math.floor(300 * c / this.snapThreshold) + "ms", this.__pos(-this.page * this.pageWidth), void 0) : (this.__checkPosition(), void 0)
                }
            },
            __checkPosition: function () {
                var a, b, c;
                this.masterPages[this.currentMasterPage].className = this.masterPages[this.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, ""), this.directionX > 0 ? (this.page = -Math.ceil(this.x / this.pageWidth), this.currentMasterPage = this.page + 1 - 3 * Math.floor((this.page + 1) / 3), this.pageIndex = 0 === this.pageIndex ? this.options.numberOfPages - 1 : this.pageIndex - 1, a = this.currentMasterPage - 1, a = 0 > a ? 2 : a, this.masterPages[a].style.left = 100 * this.page - 100 + "%", b = this.page - 1) : (this.page = -Math.floor(this.x / this.pageWidth), this.currentMasterPage = this.page + 1 - 3 * Math.floor((this.page + 1) / 3), this.pageIndex = this.pageIndex == this.options.numberOfPages - 1 ? 0 : this.pageIndex + 1, a = this.currentMasterPage + 1, a = a > 2 ? 0 : a, this.masterPages[a].style.left = 100 * this.page + 100 + "%", b = this.page + 1), c = this.masterPages[this.currentMasterPage].className, /(^|\s)swipeview-active(\s|$)/.test(c) || (this.masterPages[this.currentMasterPage].className = c ? c + " swipeview-active" : "swipeview-active"), c = this.masterPages[a].className, /(^|\s)swipeview-loading(\s|$)/.test(c) || (this.masterPages[a].className = c ? c + " swipeview-loading" : "swipeview-loading"), b -= Math.floor(b / this.options.numberOfPages) * this.options.numberOfPages, this.masterPages[a].dataset.upcomingPageIndex = b, newX = -this.page * this.pageWidth, this.slider.style[h] = Math.floor(500 * Math.abs(this.x - newX) / this.pageWidth) + "ms", this.options.loop || (this.masterPages[a].style.visibility = 0 === newX || newX == this.maxX ? "hidden" : ""), this.x == newX ? this.__flip() : (this.__pos(newX), this.options.hastyPageFlip && this.__flip())
            },
            __flip: function () {
                this.__event("flip");
                for (var a = 0; 3 > a; a++) this.masterPages[a].className = this.masterPages[a].className.replace(/(^|\s)swipeview-loading(\s|$)/, ""), this.masterPages[a].dataset.pageIndex = this.masterPages[a].dataset.upcomingPageIndex
            },
            __event: function (a) {
                var c = b.createEvent("Event");
                c.initEvent("swipeview-" + a, !0, !0), this.wrapper.dispatchEvent(c)
            }
        }, r
    }(window, document);;
!
function (a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !! g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
    }
    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    var e = 0,
        f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
        version: "1.10.0",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        _focus: a.fn.focus,
        focus: function (b, c) {
            return "number" == typeof b ? this.each(function () {
                var d = this;
                setTimeout(function () {
                    a(d).focus(), c && c.call(d)
                }, b)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function (c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                f = f.parent()
            }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++e)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                f.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
            return function (c) {
                return !!a.data(c, b)
            }
        }) : function (b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function (b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function (b) {
            var d = a.attr(b, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
        function e(b, c, d, e) {
            return a.each(f, function () {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
            g = d.toLowerCase(),
            h = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + d] = function (c) {
            return c === b ? h["inner" + d].call(this) : this.each(function () {
                a(this).css(g, e(this, c) + "px")
            })
        }, a.fn["outer" + d] = function (b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function () {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
        return function (c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
        disableSelection: function () {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                a.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function (b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            },
            call: function (a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
            }
        },
        hasScroll: function (b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
        }
    }))
}(jQuery), function (a, b) {
    var c = 0,
        d = Array.prototype.slice,
        e = a.cleanData;
    a.cleanData = function (b) {
        for (var c, d = 0; null != (c = b[d]); d++) try {
            a(c).triggerHandler("remove")
        } catch (f) {}
        e(b)
    }, a.widget = function (b, c, d) {
        var e, f, g, h, i = {},
            j = b.split(".")[0];
        b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function (a, b) {
            return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new g(a, b)
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, d) {
            return a.isFunction(d) ? (i[b] = function () {
                var a = function () {
                        return c.prototype[b].apply(this, arguments)
                    },
                    e = function (a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function () {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }(), void 0) : (i[b] = d, void 0)
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function (b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
    }, a.widget.extend = function (c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++) for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
        return c
    }, a.widget.bridge = function (c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function (g) {
            var h = "string" == typeof g,
                i = d.call(arguments, 1),
                j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function () {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; " + "attempted to call method '" + g + "'")
            }) : this.each(function () {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
            }), j
        }
    }, a.Widget = function () {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (b, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function () {
            return this.element
        },
        option: function (c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof c) if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                if (c = e.pop(), d === b) return f[c] === b ? null : f[c];
                f[c] = d
            } else {
                if (d === b) return this.options[c] === b ? null : this.options[c];
                h[c] = d
            }
            return this._setOptions(h), this
        },
        _setOptions: function (a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function (a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^(\w+)\s*(.*)$/),
                    j = i[1] + f.eventNamespace,
                    k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },
        _off: function (a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
        },
        _delay: function (a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function (b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function (b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function (b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent, f) for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (b, c) {
        a.Widget.prototype["_" + b] = function (d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    })
}(jQuery), function (a) {
    var b = !1;
    a(document).mouseup(function () {
        b = !1
    }), a.widget("ui.mouse", {
        version: "1.10.0",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function (a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function (c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (c) {
            if (!b) {
                this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                var d = this,
                    e = 1 === c.which,
                    f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    d.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                    return d._mouseMove(a)
                }, this._mouseUpDelegate = function (a) {
                    return d._mouseUp(a)
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
            }
        },
        _mouseMove: function (b) {
            return a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
        },
        _mouseUp: function (b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
        },
        _mouseDistanceMet: function (a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery), function (a) {
    function b(a, b, c) {
        return a > b && b + c > a
    }
    a.widget("ui.sortable", a.ui.mouse, {
        version: "1.10.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function () {
            var a = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (b, c) {
            "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !! c)) : a.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (b, c) {
            var d = null,
                e = !1,
                f = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function () {
                return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
            }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d ? !this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function () {
                this === b.target && (e = !0)
            }), e) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (b, c, d) {
            var e, f = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, f.cursorAt && this._adjustOffsetFromHelper(f.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), f.containment && this._setContainment(), f.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", f.cursor)), f.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", f.opacity)), f.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", f.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d) for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !f.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
        },
        _mouseDrag: function (b) {
            var c, d, e, f, g = this.options,
                h = !1;
            for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--) if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                break
            }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                    var d = this,
                        e = this.placeholder.offset();
                    this.reverting = !0, a(this.helper).animate({
                        left: e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        d._clear(b)
                    })
                } else this._clear(b, c);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            return b = b || {}, a(c).each(function () {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
            }), !d.length && b.key && d.push(b.key + "="), d.join("&")
        },
        toArray: function (b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            return b = b || {}, c.each(function () {
                d.push(a(b.item || this).attr(b.attribute || "id") || "")
            }), d
        },
        _intersectsWith: function (a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                d = this.positionAbs.top,
                e = d + this.helperProportions.height,
                f = a.left,
                g = f + a.width,
                h = a.top,
                i = h + a.height,
                j = this.offset.click.top,
                k = this.offset.click.left,
                l = d + j > h && i > d + j && b + k > f && g > b + k;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? l : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
        },
        _intersectsWithPointer: function (a) {
            var c = "x" === this.options.axis || b(this.positionAbs.top + this.offset.click.top, a.top, a.height),
                d = "y" === this.options.axis || b(this.positionAbs.left + this.offset.click.left, a.left, a.width),
                e = c && d,
                f = this._getDragVerticalDirection(),
                g = this._getDragHorizontalDirection();
            return e ? this.floating ? g && "right" === g || "down" === f ? 2 : 1 : f && ("down" === f ? 2 : 1) : !1
        },
        _intersectsWithSides: function (a) {
            var c = b(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height),
                d = b(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width),
                e = this._getDragVerticalDirection(),
                f = this._getDragHorizontalDirection();
            return this.floating && f ? "right" === f && d || "left" === f && !d : e && ("down" === e && c || "up" === e && !c)
        },
        _getDragVerticalDirection: function () {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (a > 0 ? "right" : "left")
        },
        refresh: function (a) {
            return this._refreshItems(a), this.refreshPositions(), this
        },
        _connectWith: function () {
            var a = this.options;
            return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function (b) {
            var c, d, e, f, g = [],
                h = [],
                i = this._connectWith();
            if (i && b) for (c = i.length - 1; c >= 0; c--) for (e = a(i[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && h.push([a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
            for (h.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), c = h.length - 1; c >= 0; c--) h[c][0].each(function () {
                g.push(this)
            });
            return a(g)
        },
        _removeCurrentsFromItems: function () {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function (a) {
                for (var c = 0; c < b.length; c++) if (b[c] === a.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (b) {
            this.items = [], this.containers = [this];
            var c, d, e, f, g, h, i, j, k = this.items,
                l = [
                    [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                        item: this.currentItem
                    }) : a(this.options.items, this.element), this]
                ],
                m = this._connectWith();
            if (m && this.ready) for (c = m.length - 1; c >= 0; c--) for (e = a(m[c]), d = e.length - 1; d >= 0; d--) f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                item: this.currentItem
            }) : a(f.options.items, f.element), f]), this.containers.push(f));
            for (c = l.length - 1; c >= 0; c--) for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                item: i,
                instance: g,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e, f;
            for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },
        _createPlaceholder: function (b) {
            b = b || this;
            var c, d = b.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function () {
                    var d = a(document.createElement(b.currentItem[0].nodeName)).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                    return c || (d.style.visibility = "hidden"), d
                },
                update: function (a, e) {
                    (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                }
            }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function (b) {
            var c, d, e, f, g, h, i, j, k, l = null,
                m = null;
            for (c = this.containers.length - 1; c >= 0; c--) if (!a.contains(this.currentItem[0], this.containers[c].element[0])) if (this._intersectsWith(this.containers[c].containerCache)) {
                if (l && a.contains(this.containers[c].element[0], l.element[0])) continue;
                l = this.containers[c], m = c
            } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), this.containers[c].containerCache.over = 0);
            if (l) if (1 === this.containers.length) this.containers[m]._trigger("over", b, this._uiHash(this)), this.containers[m].containerCache.over = 1;
            else {
                for (e = 1e4, f = null, g = this.containers[m].floating ? "left" : "top", h = this.containers[m].floating ? "width" : "height", i = this.positionAbs[g] + this.offset.click[g], d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[m].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (j = this.items[d].item.offset()[g], k = !1, Math.abs(j - i) > Math.abs(j + this.items[d][h] - i) && (k = !0, j += this.items[d][h]), Math.abs(j - i) < e && (e = Math.abs(j - i), f = this.items[d], this.direction = k ? "up" : "down"));
                if (!f && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[m], f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[m].element, !0), this._trigger("change", b, this._uiHash()), this.containers[m]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", b, this._uiHash(this)), this.containers[m].containerCache.over = 1
            }
        },
        _createHelper: function (b) {
            var c = this.options,
                d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
        },
        _adjustOffsetFromHelper: function (b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var b, c, d, e = this.options;
            "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1,
                e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            }
        },
        _generatePosition: function (b) {
            var c, d, e = this.options,
                f = b.pageX,
                g = b.pageY,
                h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(h[0].tagName);
            return "relative" === this.cssPosition && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
            }
        },
        _rearrange: function (a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function () {
                e === this.counter && this.refreshPositions(!d)
            })
        },
        _clear: function (b, c) {
            this.reverting = !1;
            var d, e = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (d in this._storedCSS)("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !c && e.push(function (a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !c && e.push(function (a) {
                this._trigger("update", a, this._uiHash())
            }), this !== this.currentContainer && (c || (e.push(function (a) {
                this._trigger("remove", a, this._uiHash())
            }), e.push(function (a) {
                return function (b) {
                    a._trigger("receive", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), e.push(function (a) {
                return function (b) {
                    a._trigger("update", b, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) c || e.push(function (a) {
                return function (b) {
                    a._trigger("deactivate", b, this._uiHash(this))
                }
            }.call(this, this.containers[d])), this.containers[d].containerCache.over && (e.push(function (a) {
                return function (b) {
                    a._trigger("out", b, this._uiHash(this))
                }
            }.call(this, this.containers[d])), this.containers[d].containerCache.over = 0);
            if (this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!c) {
                    for (this._trigger("beforeStop", b, this._uiHash()), d = 0; d < e.length; d++) e[d].call(this, b);
                    this._trigger("stop", b, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !c) {
                for (d = 0; d < e.length; d++) e[d].call(this, b);
                this._trigger("stop", b, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            }
        }
    })
}(jQuery);;
!
function () {
    BinaryFile = function (a, b, c) {
        var d = a,
            e = b || 0,
            f = 0;
        this.getRawData = function () {
            return d
        }, "string" == typeof a ? (f = c || d.length, this.getByteAt = function (a) {
            return 255 & d.charCodeAt(a + e)
        }) : "unknown" == typeof a && (f = c || IEBinary_getLength(d), this.getByteAt = function (a) {
            return IEBinary_getByteAt(d, a + e)
        }), this.getLength = function () {
            return f
        }, this.getSByteAt = function (a) {
            var b = this.getByteAt(a);
            return b > 127 ? b - 256 : b
        }, this.getShortAt = function (a, b) {
            var c = b ? (this.getByteAt(a) << 8) + this.getByteAt(a + 1) : (this.getByteAt(a + 1) << 8) + this.getByteAt(a);
            return 0 > c && (c += 65536), c
        }, this.getSShortAt = function (a, b) {
            var c = this.getShortAt(a, b);
            return c > 32767 ? c - 65536 : c
        }, this.getLongAt = function (a, b) {
            var c = this.getByteAt(a),
                d = this.getByteAt(a + 1),
                e = this.getByteAt(a + 2),
                f = this.getByteAt(a + 3),
                g = b ? (((c << 8) + d << 8) + e << 8) + f : (((f << 8) + e << 8) + d << 8) + c;
            return 0 > g && (g += 4294967296), g
        }, this.getSLongAt = function (a, b) {
            var c = this.getLongAt(a, b);
            return c > 2147483647 ? c - 4294967296 : c
        }, this.getStringAt = function (a, b) {
            for (var c = [], d = a, e = 0; a + b > d; d++, e++) c[e] = String.fromCharCode(this.getByteAt(d));
            return c.join("")
        }, this.getCharAt = function (a) {
            return String.fromCharCode(this.getByteAt(a))
        }, this.toBase64 = function () {
            return window.btoa(d)
        }, this.fromBase64 = function (a) {
            d = window.atob(a)
        }
    };
    var a = function () {
            function a() {
                var a = null;
                return window.XMLHttpRequest ? a = new XMLHttpRequest : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLHTTP")), a
            }
            function b(b, c, d) {
                var e = a();
                e ? (c && ("undefined" != typeof e.onload ? e.onload = function () {
                    "200" == e.status ? c(this) : d && d(), e = null
                } : e.onreadystatechange = function () {
                    4 == e.readyState && ("200" == e.status ? c(this) : d && d(), e = null)
                }), e.open("HEAD", b, !0), e.send(null)) : d && d()
            }
            function c(b, c, d, e, f, g) {
                var h = a();
                if (h) {
                    var i = 0;
                    e && !f && (i = e[0]);
                    var j = 0;
                    e && (j = e[1] - e[0] + 1), c && ("undefined" != typeof h.onload ? h.onload = function () {
                        "200" == h.status || "206" == h.status || "0" == h.status ? (this.binaryResponse = new BinaryFile(this.responseText, i, j), this.fileSize = g || this.getResponseHeader("Content-Length"), c(this)) : d && d(), h = null
                    } : h.onreadystatechange = function () {
                        4 == h.readyState && ("200" == h.status || "206" == h.status || "0" == h.status ? (this.binaryResponse = new BinaryFile(h.responseBody, i, j), this.fileSize = g || this.getResponseHeader("Content-Length"), c(this)) : d && d(), h = null)
                    }), h.open("GET", b, !0), h.overrideMimeType && h.overrideMimeType("text/plain; charset=x-user-defined"), e && f && h.setRequestHeader("Range", "bytes=" + e[0] + "-" + e[1]), h.send(null)
                } else d && d()
            }
            return function (a, d, e, f) {
                f ? b(a, function (b) {
                    var g, h, i = parseInt(b.getResponseHeader("Content-Length"), 10),
                        j = b.getResponseHeader("Accept-Ranges");
                    g = f[0], f[0] < 0 && (g += i), h = g + f[1] - 1, c(a, d, e, [g, h], "bytes" == j, i)
                }) : c(a, d, e)
            }
        }();
    document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n	IEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n	IEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n</script>\r\n"), EXIF = {}, function () {
        function b(a) {
            return !!a.exifdata
        }
        function c(b, c) {
            a(b.src, function (a) {
                var e = d(a.binaryResponse);
                b.exifdata = e || {}, c && c(b.exifdata)
            })
        }
        function d(a) {
            if (255 != a.getByteAt(0) || 216 != a.getByteAt(1)) return !1;
            for (var b = 2, c = a.getLength(); c > b;) {
                if (255 != a.getByteAt(b)) return h && console.log("Not a valid marker at offset " + b + ", found: " + a.getByteAt(b)), !1;
                var d = a.getByteAt(b + 1);
                if (22400 == d) return h && console.log("Found 0xFFE1 marker"), g(a, b + 4, a.getShortAt(b + 2, !0) - 2);
                if (225 == d) return h && console.log("Found 0xFFE1 marker"), g(a, b + 4, a.getShortAt(b + 2, !0) - 2);
                b += 2 + a.getShortAt(b + 2, !0)
            }
        }
        function e(a, b, c, d, e) {
            for (var g = a.getShortAt(c, e), i = {}, j = 0; g > j; j++) {
                var k = c + 12 * j + 2,
                    l = d[a.getShortAt(k, e)];
                !l && h && console.log("Unknown tag: " + a.getShortAt(k, e)), i[l] = f(a, k, b, c, e)
            }
            return i
        }
        function f(a, b, c, d, e) {
            var f = a.getShortAt(b + 2, e),
                g = a.getLongAt(b + 4, e),
                h = a.getLongAt(b + 8, e) + c;
            switch (f) {
            case 1:
            case 7:
                if (1 == g) return a.getByteAt(b + 8, e);
                for (var i = g > 4 ? h : b + 8, j = [], k = 0; g > k; k++) j[k] = a.getByteAt(i + k);
                return j;
            case 2:
                var l = g > 4 ? h : b + 8;
                return a.getStringAt(l, g - 1);
            case 3:
                if (1 == g) return a.getShortAt(b + 8, e);
                for (var i = g > 2 ? h : b + 8, j = [], k = 0; g > k; k++) j[k] = a.getShortAt(i + 2 * k, e);
                return j;
            case 4:
                if (1 == g) return a.getLongAt(b + 8, e);
                for (var j = [], k = 0; g > k; k++) j[k] = a.getLongAt(h + 4 * k, e);
                return j;
            case 5:
                if (1 == g) return a.getLongAt(h, e) / a.getLongAt(h + 4, e);
                for (var j = [], k = 0; g > k; k++) j[k] = a.getLongAt(h + 8 * k, e) / a.getLongAt(h + 4 + 8 * k, e);
                return j;
            case 9:
                if (1 == g) return a.getSLongAt(b + 8, e);
                for (var j = [], k = 0; g > k; k++) j[k] = a.getSLongAt(h + 4 * k, e);
                return j;
            case 10:
                if (1 == g) return a.getSLongAt(h, e) / a.getSLongAt(h + 4, e);
                for (var j = [], k = 0; g > k; k++) j[k] = a.getSLongAt(h + 8 * k, e) / a.getSLongAt(h + 4 + 8 * k, e);
                return j
            }
        }
        function g(a, b) {
            if ("Exif" != a.getStringAt(b, 4)) return h && console.log("Not valid EXIF data! " + a.getStringAt(b, 4)), !1;
            var c, d = b + 6;
            if (18761 == a.getShortAt(d)) c = !1;
            else {
                if (19789 != a.getShortAt(d)) return h && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
                c = !0
            }
            if (42 != a.getShortAt(d + 2, c)) return h && console.log("Not valid TIFF data! (no 0x002A)"), !1;
            if (8 != a.getLongAt(d + 4, c)) return h && console.log("Not valid TIFF data! (First offset not 8)", a.getShortAt(d + 4, c)), !1;
            var f = e(a, d, d + 8, EXIF.TiffTags, c);
            if (f.ExifIFDPointer) {
                var g = e(a, d, d + f.ExifIFDPointer, EXIF.Tags, c);
                for (var i in g) {
                    switch (i) {
                    case "LightSource":
                    case "Flash":
                    case "MeteringMode":
                    case "ExposureProgram":
                    case "SensingMethod":
                    case "SceneCaptureType":
                    case "SceneType":
                    case "CustomRendered":
                    case "WhiteBalance":
                    case "GainControl":
                    case "Contrast":
                    case "Saturation":
                    case "Sharpness":
                    case "SubjectDistanceRange":
                    case "FileSource":
                        g[i] = EXIF.StringValues[i][g[i]];
                        break;
                    case "ExifVersion":
                    case "FlashpixVersion":
                        g[i] = String.fromCharCode(g[i][0], g[i][1], g[i][2], g[i][3]);
                        break;
                    case "ComponentsConfiguration":
                        g[i] = EXIF.StringValues.Components[g[i][0]] + EXIF.StringValues.Components[g[i][1]] + EXIF.StringValues.Components[g[i][2]] + EXIF.StringValues.Components[g[i][3]]
                    }
                    f[i] = g[i]
                }
            }
            if (f.GPSInfoIFDPointer) {
                var j = e(a, d, d + f.GPSInfoIFDPointer, EXIF.GPSTags, c);
                for (var i in j) {
                    switch (i) {
                    case "GPSVersionID":
                        j[i] = j[i][0] + "." + j[i][1] + "." + j[i][2] + "." + j[i][3]
                    }
                    f[i] = j[i]
                }
            }
            return f
        }
        var h = !1;
        EXIF.Tags = {
            36864: "ExifVersion",
            40960: "FlashpixVersion",
            40961: "ColorSpace",
            40962: "PixelXDimension",
            40963: "PixelYDimension",
            37121: "ComponentsConfiguration",
            37122: "CompressedBitsPerPixel",
            37500: "MakerNote",
            37510: "UserComment",
            40964: "RelatedSoundFile",
            36867: "DateTimeOriginal",
            36868: "DateTimeDigitized",
            37520: "SubsecTime",
            37521: "SubsecTimeOriginal",
            37522: "SubsecTimeDigitized",
            33434: "ExposureTime",
            33437: "FNumber",
            34850: "ExposureProgram",
            34852: "SpectralSensitivity",
            34855: "ISOSpeedRatings",
            34856: "OECF",
            37377: "ShutterSpeedValue",
            37378: "ApertureValue",
            37379: "BrightnessValue",
            37380: "ExposureBias",
            37381: "MaxApertureValue",
            37382: "SubjectDistance",
            37383: "MeteringMode",
            37384: "LightSource",
            37385: "Flash",
            37396: "SubjectArea",
            37386: "FocalLength",
            41483: "FlashEnergy",
            41484: "SpatialFrequencyResponse",
            41486: "FocalPlaneXResolution",
            41487: "FocalPlaneYResolution",
            41488: "FocalPlaneResolutionUnit",
            41492: "SubjectLocation",
            41493: "ExposureIndex",
            41495: "SensingMethod",
            41728: "FileSource",
            41729: "SceneType",
            41730: "CFAPattern",
            41985: "CustomRendered",
            41986: "ExposureMode",
            41987: "WhiteBalance",
            41988: "DigitalZoomRation",
            41989: "FocalLengthIn35mmFilm",
            41990: "SceneCaptureType",
            41991: "GainControl",
            41992: "Contrast",
            41993: "Saturation",
            41994: "Sharpness",
            41995: "DeviceSettingDescription",
            41996: "SubjectDistanceRange",
            40965: "InteroperabilityIFDPointer",
            42016: "ImageUniqueID"
        }, EXIF.TiffTags = {
            256: "ImageWidth",
            257: "ImageHeight",
            34665: "ExifIFDPointer",
            34853: "GPSInfoIFDPointer",
            40965: "InteroperabilityIFDPointer",
            258: "BitsPerSample",
            259: "Compression",
            262: "PhotometricInterpretation",
            274: "Orientation",
            277: "SamplesPerPixel",
            284: "PlanarConfiguration",
            530: "YCbCrSubSampling",
            531: "YCbCrPositioning",
            282: "XResolution",
            283: "YResolution",
            296: "ResolutionUnit",
            273: "StripOffsets",
            278: "RowsPerStrip",
            279: "StripByteCounts",
            513: "JPEGInterchangeFormat",
            514: "JPEGInterchangeFormatLength",
            301: "TransferFunction",
            318: "WhitePoint",
            319: "PrimaryChromaticities",
            529: "YCbCrCoefficients",
            532: "ReferenceBlackWhite",
            306: "DateTime",
            270: "ImageDescription",
            271: "Make",
            272: "Model",
            305: "Software",
            315: "Artist",
            33432: "Copyright"
        }, EXIF.GPSTags = {
            0: "GPSVersionID",
            1: "GPSLatitudeRef",
            2: "GPSLatitude",
            3: "GPSLongitudeRef",
            4: "GPSLongitude",
            5: "GPSAltitudeRef",
            6: "GPSAltitude",
            7: "GPSTimeStamp",
            8: "GPSSatellites",
            9: "GPSStatus",
            10: "GPSMeasureMode",
            11: "GPSDOP",
            12: "GPSSpeedRef",
            13: "GPSSpeed",
            14: "GPSTrackRef",
            15: "GPSTrack",
            16: "GPSImgDirectionRef",
            17: "GPSImgDirection",
            18: "GPSMapDatum",
            19: "GPSDestLatitudeRef",
            20: "GPSDestLatitude",
            21: "GPSDestLongitudeRef",
            22: "GPSDestLongitude",
            23: "GPSDestBearingRef",
            24: "GPSDestBearing",
            25: "GPSDestDistanceRef",
            26: "GPSDestDistance",
            27: "GPSProcessingMethod",
            28: "GPSAreaInformation",
            29: "GPSDateStamp",
            30: "GPSDifferential"
        }, EXIF.StringValues = {
            ExposureProgram: {
                0: "Not defined",
                1: "Manual",
                2: "Normal program",
                3: "Aperture priority",
                4: "Shutter priority",
                5: "Creative program",
                6: "Action program",
                7: "Portrait mode",
                8: "Landscape mode"
            },
            MeteringMode: {
                0: "Unknown",
                1: "Average",
                2: "CenterWeightedAverage",
                3: "Spot",
                4: "MultiSpot",
                5: "Pattern",
                6: "Partial",
                255: "Other"
            },
            LightSource: {
                0: "Unknown",
                1: "Daylight",
                2: "Fluorescent",
                3: "Tungsten (incandescent light)",
                4: "Flash",
                9: "Fine weather",
                10: "Cloudy weather",
                11: "Shade",
                12: "Daylight fluorescent (D 5700 - 7100K)",
                13: "Day white fluorescent (N 4600 - 5400K)",
                14: "Cool white fluorescent (W 3900 - 4500K)",
                15: "White fluorescent (WW 3200 - 3700K)",
                17: "Standard light A",
                18: "Standard light B",
                19: "Standard light C",
                20: "D55",
                21: "D65",
                22: "D75",
                23: "D50",
                24: "ISO studio tungsten",
                255: "Other"
            },
            Flash: {
                0: "Flash did not fire",
                1: "Flash fired",
                5: "Strobe return light not detected",
                7: "Strobe return light detected",
                9: "Flash fired, compulsory flash mode",
                13: "Flash fired, compulsory flash mode, return light not detected",
                15: "Flash fired, compulsory flash mode, return light detected",
                16: "Flash did not fire, compulsory flash mode",
                24: "Flash did not fire, auto mode",
                25: "Flash fired, auto mode",
                29: "Flash fired, auto mode, return light not detected",
                31: "Flash fired, auto mode, return light detected",
                32: "No flash function",
                65: "Flash fired, red-eye reduction mode",
                69: "Flash fired, red-eye reduction mode, return light not detected",
                71: "Flash fired, red-eye reduction mode, return light detected",
                73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                89: "Flash fired, auto mode, red-eye reduction mode",
                93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
            },
            SensingMethod: {
                1: "Not defined",
                2: "One-chip color area sensor",
                3: "Two-chip color area sensor",
                4: "Three-chip color area sensor",
                5: "Color sequential area sensor",
                7: "Trilinear sensor",
                8: "Color sequential linear sensor"
            },
            SceneCaptureType: {
                0: "Standard",
                1: "Landscape",
                2: "Portrait",
                3: "Night scene"
            },
            SceneType: {
                1: "Directly photographed"
            },
            CustomRendered: {
                0: "Normal process",
                1: "Custom process"
            },
            WhiteBalance: {
                0: "Auto white balance",
                1: "Manual white balance"
            },
            GainControl: {
                0: "None",
                1: "Low gain up",
                2: "High gain up",
                3: "Low gain down",
                4: "High gain down"
            },
            Contrast: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            Saturation: {
                0: "Normal",
                1: "Low saturation",
                2: "High saturation"
            },
            Sharpness: {
                0: "Normal",
                1: "Soft",
                2: "Hard"
            },
            SubjectDistanceRange: {
                0: "Unknown",
                1: "Macro",
                2: "Close view",
                3: "Distant view"
            },
            FileSource: {
                3: "DSC"
            },
            Components: {
                0: "",
                1: "Y",
                2: "Cb",
                3: "Cr",
                4: "R",
                5: "G",
                6: "B"
            }
        }, EXIF.getData = function (a, d) {
            return a.complete ? (b(a) ? d && d() : c(a, d), !0) : !1
        }, EXIF.getTag = function (a, c) {
            return b(a) ? a.exifdata[c] : void 0
        }, EXIF.getAllTags = function (a) {
            if (!b(a)) return {};
            var c = a.exifdata,
                d = {};
            for (var e in c) c.hasOwnProperty(e) && (d[e] = c[e]);
            return d
        }, EXIF.pretty = function (a) {
            if (!b(a)) return "";
            var c = a.exifdata,
                d = "";
            for (var e in c) c.hasOwnProperty(e) && (d += "object" == typeof c[e] ? e + " : [" + c[e].length + " values]\r\n" : e + " : " + c[e] + "\r\n");
            return d
        }, EXIF.readFromBinaryFile = function (a) {
            return d(a)
        }, jQuery.fn.exifLoad = function (a) {
            return this.each(function () {
                EXIF.getData(this, a)
            })
        }, jQuery.fn.exif = function (a) {
            var b = [];
            return this.each(function () {
                b.push(EXIF.getTag(this, a))
            }), b
        }, jQuery.fn.exifAll = function () {
            var a = [];
            return this.each(function () {
                a.push(EXIF.getAllTags(this))
            }), a
        }, jQuery.fn.exifPretty = function () {
            var a = [];
            return this.each(function () {
                a.push(EXIF.pretty(this))
            }), a
        }
    }()
}();;
!
function (a) {
    a.fn.fastClick = function (b) {
        return a(this).each(function () {
            a.FastButton(a(this)[0], b)
        })
    }, a.FastButton = function (b, c) {
        var d, e, f = function () {
                a(b).unbind("touchend"), a("body").unbind("touchmove.fastClick")
            },
            g = function (b) {
                b.stopPropagation(), f(), c.call(this, b), "touchend" === b.type && a.clickbuster.preventGhostClick(d, e)
            },
            h = function (a) {
                (Math.abs(a.originalEvent.touches[0].clientX - d) > 10 || Math.abs(a.originalEvent.touches[0].clientY - e) > 10) && f()
            },
            i = function (c) {
                c.stopPropagation(), a(b).bind("touchend", g), a("body").bind("touchmove.fastClick", h), d = c.originalEvent.touches[0].clientX, e = c.originalEvent.touches[0].clientY
            };
        a(b).bind({
            touchstart: i,
            click: g
        })
    }, a.clickbuster = {
        coordinates: [],
        preventGhostClick: function (b, c) {
            a.clickbuster.coordinates.push(b, c), window.setTimeout(a.clickbuster.pop, 2500)
        },
        pop: function () {
            a.clickbuster.coordinates.splice(0, 2)
        },
        onClick: function (b) {
            var c, d, e;
            for (e = 0; e < a.clickbuster.coordinates.length; e += 2) c = a.clickbuster.coordinates[e], d = a.clickbuster.coordinates[e + 1], Math.abs(b.clientX - c) < 25 && Math.abs(b.clientY - d) < 25 && (b.stopPropagation(), b.preventDefault())
        }
    }, a(function () {
        document.addEventListener ? document.addEventListener("click", a.clickbuster.onClick, !0) : document.attachEvent && document.attachEvent("onclick", a.clickbuster.onClick)
    })
}(jQuery);;
!
function (a, b) {
    "use strict";

    function c() {
        if (!d.READY) {
            d.event.determineEventTypes();
            for (var a in d.gestures) d.gestures.hasOwnProperty(a) && d.detection.register(d.gestures[a]);
            d.event.onTouch(d.DOCUMENT, d.EVENT_MOVE, d.detection.detect), d.event.onTouch(d.DOCUMENT, d.EVENT_END, d.detection.detect), d.READY = !0
        }
    }
    var d = function (a, b) {
            return new d.Instance(a, b || {})
        };
    d.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, d.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, d.HAS_TOUCHEVENTS = "ontouchstart" in a, d.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, d.NO_MOUSEEVENTS = d.HAS_TOUCHEVENTS && navigator.userAgent.match(d.MOBILE_REGEX), d.EVENT_TYPES = {}, d.DIRECTION_DOWN = "down", d.DIRECTION_LEFT = "left", d.DIRECTION_UP = "up", d.DIRECTION_RIGHT = "right", d.POINTER_MOUSE = "mouse", d.POINTER_TOUCH = "touch", d.POINTER_PEN = "pen", d.EVENT_START = "start", d.EVENT_MOVE = "move", d.EVENT_END = "end", d.DOCUMENT = document, d.plugins = {}, d.READY = !1, d.Instance = function (a, b) {
        var e = this;
        return c(), this.element = a, this.enabled = !0, this.options = d.utils.extend(d.utils.extend({}, d.defaults), b || {}), this.options.stop_browser_behavior && d.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), d.event.onTouch(a, d.EVENT_START, function (a) {
            e.enabled && d.detection.startDetect(e, a)
        }), this
    }, d.Instance.prototype = {
        on: function (a, b) {
            for (var c = a.split(" "), d = 0; c.length > d; d++) this.element.addEventListener(c[d], b, !1);
            return this
        },
        off: function (a, b) {
            for (var c = a.split(" "), d = 0; c.length > d; d++) this.element.removeEventListener(c[d], b, !1);
            return this
        },
        trigger: function (a, b) {
            var c = d.DOCUMENT.createEvent("Event");
            c.initEvent(a, !0, !0), c.gesture = b;
            var e = this.element;
            return d.utils.hasParent(b.target, e) && (e = b.target), e.dispatchEvent(c), this
        },
        enable: function (a) {
            return this.enabled = a, this
        }
    };
    var e = null,
        f = !1,
        g = !1;
    d.event = {
        bindDom: function (a, b, c) {
            for (var d = b.split(" "), e = 0; d.length > e; e++) a.addEventListener(d[e], c, !1)
        },
        onTouch: function (a, b, c) {
            var h = this;
            this.bindDom(a, d.EVENT_TYPES[b], function (i) {
                var j = i.type.toLowerCase();
                if (!j.match(/mouse/) || !g) {
                    (j.match(/touch/) || j.match(/pointerdown/) || j.match(/mouse/) && 1 === i.which) && (f = !0), j.match(/touch|pointer/) && (g = !0);
                    var k = 0;
                    f && (d.HAS_POINTEREVENTS && b != d.EVENT_END ? k = d.PointerEvent.updatePointer(b, i) : j.match(/touch/) ? k = i.touches.length : g || (k = j.match(/up/) ? 0 : 1), k > 0 && b == d.EVENT_END ? b = d.EVENT_MOVE : k || (b = d.EVENT_END), k || null === e ? e = i : i = e, c.call(d.detection, h.collectEventData(a, b, i)), d.HAS_POINTEREVENTS && b == d.EVENT_END && (k = d.PointerEvent.updatePointer(b, i))), k || (e = null, f = !1, g = !1, d.PointerEvent.reset())
                }
            })
        },
        determineEventTypes: function () {
            var a;
            a = d.HAS_POINTEREVENTS ? d.PointerEvent.getEvents() : d.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], d.EVENT_TYPES[d.EVENT_START] = a[0], d.EVENT_TYPES[d.EVENT_MOVE] = a[1], d.EVENT_TYPES[d.EVENT_END] = a[2]
        },
        getTouchList: function (a) {
            return d.HAS_POINTEREVENTS ? d.PointerEvent.getTouchList() : a.touches ? a.touches : [{
                identifier: 1,
                pageX: a.pageX,
                pageY: a.pageY,
                target: a.target
            }]
        },
        collectEventData: function (a, b, c) {
            var e = this.getTouchList(c, b),
                f = d.POINTER_TOUCH;
            return (c.type.match(/mouse/) || d.PointerEvent.matchType(d.POINTER_MOUSE, c)) && (f = d.POINTER_MOUSE), {
                center: d.utils.getCenter(e),
                timeStamp: (new Date).getTime(),
                target: c.target,
                touches: e,
                eventType: b,
                pointerType: f,
                srcEvent: c,
                preventDefault: function () {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                },
                stopPropagation: function () {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function () {
                    return d.detection.stopDetect()
                }
            }
        }
    }, d.PointerEvent = {
        pointers: {},
        getTouchList: function () {
            var a = this,
                b = [];
            return Object.keys(a.pointers).sort().forEach(function (c) {
                b.push(a.pointers[c])
            }), b
        },
        updatePointer: function (a, b) {
            return a == d.EVENT_END ? this.pointers = {} : (b.identifier = b.pointerId, this.pointers[b.pointerId] = b), Object.keys(this.pointers).length
        },
        matchType: function (a, b) {
            if (!b.pointerType) return !1;
            var c = {};
            return c[d.POINTER_MOUSE] = b.pointerType == b.MSPOINTER_TYPE_MOUSE || b.pointerType == d.POINTER_MOUSE, c[d.POINTER_TOUCH] = b.pointerType == b.MSPOINTER_TYPE_TOUCH || b.pointerType == d.POINTER_TOUCH, c[d.POINTER_PEN] = b.pointerType == b.MSPOINTER_TYPE_PEN || b.pointerType == d.POINTER_PEN, c[a]
        },
        getEvents: function () {
            return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        },
        reset: function () {
            this.pointers = {}
        }
    }, d.utils = {
        extend: function (a, c, d) {
            for (var e in c) a[e] !== b && d || (a[e] = c[e]);
            return a
        },
        hasParent: function (a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        },
        getCenter: function (a) {
            for (var b = [], c = [], d = 0, e = a.length; e > d; d++) b.push(a[d].pageX), c.push(a[d].pageY);
            return {
                pageX: (Math.min.apply(Math, b) + Math.max.apply(Math, b)) / 2,
                pageY: (Math.min.apply(Math, c) + Math.max.apply(Math, c)) / 2
            }
        },
        getVelocity: function (a, b, c) {
            return {
                x: Math.abs(b / a) || 0,
                y: Math.abs(c / a) || 0
            }
        },
        getAngle: function (a, b) {
            var c = b.pageY - a.pageY,
                d = b.pageX - a.pageX;
            return 180 * Math.atan2(c, d) / Math.PI
        },
        getDirection: function (a, b) {
            var c = Math.abs(a.pageX - b.pageX),
                e = Math.abs(a.pageY - b.pageY);
            return c >= e ? a.pageX - b.pageX > 0 ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT : a.pageY - b.pageY > 0 ? d.DIRECTION_UP : d.DIRECTION_DOWN
        },
        getDistance: function (a, b) {
            var c = b.pageX - a.pageX,
                d = b.pageY - a.pageY;
            return Math.sqrt(c * c + d * d)
        },
        getScale: function (a, b) {
            return a.length >= 2 && b.length >= 2 ? this.getDistance(b[0], b[1]) / this.getDistance(a[0], a[1]) : 1
        },
        getRotation: function (a, b) {
            return a.length >= 2 && b.length >= 2 ? this.getAngle(b[1], b[0]) - this.getAngle(a[1], a[0]) : 0
        },
        isVertical: function (a) {
            return a == d.DIRECTION_UP || a == d.DIRECTION_DOWN
        },
        stopDefaultBrowserBehavior: function (a, b) {
            var c, d = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (b && a.style) {
                for (var e = 0; d.length > e; e++) for (var f in b) b.hasOwnProperty(f) && (c = f, d[e] && (c = d[e] + c.substring(0, 1).toUpperCase() + c.substring(1)), a.style[c] = b[f]);
                "none" == b.userSelect && (a.onselectstart = function () {
                    return !1
                })
            }
        }
    }, d.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function (a, b) {
            this.current || (this.stopped = !1, this.current = {
                inst: a,
                startEvent: d.utils.extend({}, b),
                lastEvent: !1,
                name: ""
            }, this.detect(b))
        },
        detect: function (a) {
            if (this.current && !this.stopped) {
                a = this.extendEventData(a);
                for (var b = this.current.inst.options, c = 0, e = this.gestures.length; e > c; c++) {
                    var f = this.gestures[c];
                    if (!this.stopped && b[f.name] !== !1 && f.handler.call(f, a, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = a), a.eventType == d.EVENT_END && !a.touches.length - 1 && this.stopDetect(), a
            }
        },
        stopDetect: function () {
            this.previous = d.utils.extend({}, this.current), this.current = null, this.stopped = !0
        },
        extendEventData: function (a) {
            var b = this.current.startEvent;
            if (b && (a.touches.length != b.touches.length || a.touches === b.touches)) {
                b.touches = [];
                for (var c = 0, e = a.touches.length; e > c; c++) b.touches.push(d.utils.extend({}, a.touches[c]))
            }
            var f = a.timeStamp - b.timeStamp,
                g = a.center.pageX - b.center.pageX,
                h = a.center.pageY - b.center.pageY,
                i = d.utils.getVelocity(f, g, h);
            return d.utils.extend(a, {
                deltaTime: f,
                deltaX: g,
                deltaY: h,
                velocityX: i.x,
                velocityY: i.y,
                distance: d.utils.getDistance(b.center, a.center),
                angle: d.utils.getAngle(b.center, a.center),
                direction: d.utils.getDirection(b.center, a.center),
                scale: d.utils.getScale(b.touches, a.touches),
                rotation: d.utils.getRotation(b.touches, a.touches),
                startEvent: b
            }), a
        },
        register: function (a) {
            var c = a.defaults || {};
            return c[a.name] === b && (c[a.name] = !0), d.utils.extend(d.defaults, c, !0), a.index = a.index || 1e3, this.gestures.push(a), this.gestures.sort(function (a, b) {
                return a.index < b.index ? -1 : a.index > b.index ? 1 : 0
            }), this.gestures
        }
    }, d.gestures = d.gestures || {}, d.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function (a, b) {
            switch (a.eventType) {
            case d.EVENT_START:
                clearTimeout(this.timer), d.detection.current.name = this.name, this.timer = setTimeout(function () {
                    "hold" == d.detection.current.name && b.trigger("hold", a)
                }, b.options.hold_timeout);
                break;
            case d.EVENT_MOVE:
                a.distance > b.options.hold_threshold && clearTimeout(this.timer);
                break;
            case d.EVENT_END:
                clearTimeout(this.timer)
            }
        }
    }, d.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function (a, b) {
            if (a.eventType == d.EVENT_END) {
                var c = d.detection.previous,
                    e = !1;
                if (a.deltaTime > b.options.tap_max_touchtime || a.distance > b.options.tap_max_distance) return;
                c && "tap" == c.name && a.timeStamp - c.lastEvent.timeStamp < b.options.doubletap_interval && a.distance < b.options.doubletap_distance && (b.trigger("doubletap", a), e = !0), (!e || b.options.tap_always) && (d.detection.current.name = "tap", b.trigger(d.detection.current.name, a))
            }
        }
    }, d.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: .7
        },
        handler: function (a, b) {
            if (a.eventType == d.EVENT_END) {
                if (b.options.swipe_max_touches > 0 && a.touches.length > b.options.swipe_max_touches) return;
                (a.velocityX > b.options.swipe_velocity || a.velocityY > b.options.swipe_velocity) && (b.trigger(this.name, a), b.trigger(this.name + a.direction, a))
            }
        }
    }, d.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function (a, c) {
            if (d.detection.current.name != this.name && this.triggered) return c.trigger(this.name + "end", a), this.triggered = !1, b;
            if (!(c.options.drag_max_touches > 0 && a.touches.length > c.options.drag_max_touches)) switch (a.eventType) {
            case d.EVENT_START:
                this.triggered = !1;
                break;
            case d.EVENT_MOVE:
                if (a.distance < c.options.drag_min_distance && d.detection.current.name != this.name) return;
                d.detection.current.name = this.name, (d.detection.current.lastEvent.drag_locked_to_axis || c.options.drag_lock_to_axis && c.options.drag_lock_min_distance <= a.distance) && (a.drag_locked_to_axis = !0);
                var e = d.detection.current.lastEvent.direction;
                a.drag_locked_to_axis && e !== a.direction && (a.direction = d.utils.isVertical(e) ? 0 > a.deltaY ? d.DIRECTION_UP : d.DIRECTION_DOWN : 0 > a.deltaX ? d.DIRECTION_LEFT : d.DIRECTION_RIGHT), this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0), c.trigger(this.name, a), c.trigger(this.name + a.direction, a), (c.options.drag_block_vertical && d.utils.isVertical(a.direction) || c.options.drag_block_horizontal && !d.utils.isVertical(a.direction)) && a.preventDefault();
                break;
            case d.EVENT_END:
                this.triggered && c.trigger(this.name + "end", a), this.triggered = !1
            }
        }
    }, d.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: .01,
            transform_min_rotation: 1,
            transform_always_block: !1
        },
        triggered: !1,
        handler: function (a, c) {
            if (d.detection.current.name != this.name && this.triggered) return c.trigger(this.name + "end", a), this.triggered = !1, b;
            if (!(2 > a.touches.length)) switch (c.options.transform_always_block && a.preventDefault(), a.eventType) {
            case d.EVENT_START:
                this.triggered = !1;
                break;
            case d.EVENT_MOVE:
                var e = Math.abs(1 - a.scale),
                    f = Math.abs(a.rotation);
                if (c.options.transform_min_scale > e && c.options.transform_min_rotation > f) return;
                d.detection.current.name = this.name, this.triggered || (c.trigger(this.name + "start", a), this.triggered = !0), c.trigger(this.name, a), f > c.options.transform_min_rotation && c.trigger("rotate", a), e > c.options.transform_min_scale && (c.trigger("pinch", a), c.trigger("pinch" + (1 > a.scale ? "in" : "out"), a));
                break;
            case d.EVENT_END:
                this.triggered && c.trigger(this.name + "end", a), this.triggered = !1
            }
        }
    }, d.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function (a, c) {
            return c.options.prevent_mouseevents && a.pointerType == d.POINTER_MOUSE ? (a.stopDetect(), b) : (c.options.prevent_default && a.preventDefault(), a.eventType == d.EVENT_START && c.trigger(this.name, a), b)
        }
    }, d.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function (a, b) {
            a.eventType == d.EVENT_END && b.trigger(this.name, a)
        }
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = d : (a.Hammer = d, "function" == typeof a.define && a.define.amd && a.define("hammer", [], function () {
        return d
    }))
}(this), function (a, b) {
    "use strict";
    a !== b && (Hammer.event.bindDom = function (c, d, e) {
        a(c).on(d, function (a) {
            var c = a.originalEvent || a;
            c.pageX === b && (c.pageX = a.pageX, c.pageY = a.pageY), c.target || (c.target = a.target), c.which === b && (c.which = c.button), c.preventDefault || (c.preventDefault = a.preventDefault), c.stopPropagation || (c.stopPropagation = a.stopPropagation), e.call(this, c)
        })
    }, Hammer.Instance.prototype.on = function (b, c) {
        return a(this.element).on(b, c)
    }, Hammer.Instance.prototype.off = function (b, c) {
        return a(this.element).off(b, c)
    }, Hammer.Instance.prototype.trigger = function (b, c) {
        var d = a(this.element);
        return d.has(c.target).length && (d = a(c.target)), d.trigger({
            type: b,
            gesture: c
        })
    }, a.fn.hammer = function (b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("hammer");
            d ? d && b && Hammer.utils.extend(d.options, b) : c.data("hammer", new Hammer(this, b || {}))
        })
    })
}(window.jQuery || window.Zepto);;
!
function (a) {
    function b(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var c, d = a.ui.mouse.prototype,
            e = d._mouseInit;
        d._touchStart = function (a) {
            var d = this;
            !c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0, d._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"))
        }, d._touchMove = function (a) {
            c && (this._touchMoved = !0, b(a, "mousemove"))
        }, d._touchEnd = function (a) {
            c && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), c = !1)
        }, d._mouseInit = function () {
            var b = this;
            b.element.bind("touchstart", a.proxy(b, "_touchStart")).bind("touchmove", a.proxy(b, "_touchMove")).bind("touchend", a.proxy(b, "_touchEnd")), e.call(b)
        }
    }
}(jQuery);;
!
function () {
    function a(a) {
        var b = a.naturalWidth,
            c = a.naturalHeight;
        if (b * c > 1048576) {
            var d = document.createElement("canvas");
            d.width = d.height = 1;
            var e = d.getContext("2d");
            return e.drawImage(a, -b + 1, 0), 0 === e.getImageData(0, 0, 1, 1).data[3]
        }
        return !1
    }
    function b(a, b, c) {
        var d = document.createElement("canvas");
        d.width = 1, d.height = c;
        var e = d.getContext("2d");
        e.drawImage(a, 0, 0);
        for (var f = e.getImageData(0, 0, 1, c).data, g = 0, h = c, i = c; i > g;) {
            var j = f[4 * (i - 1) + 3];
            0 === j ? h = i : g = i, i = h + g >> 1
        }
        var k = i / c;
        return 0 === k ? 1 : k
    }
    function c(a, b) {
        var c = document.createElement("canvas");
        return d(a, c, b), c.toDataURL("image/jpeg", b.quality || .8)
    }
    function d(c, d, f) {
        var g = c.naturalWidth,
            h = c.naturalHeight,
            i = f.width,
            j = f.height,
            k = d.getContext("2d");
        k.save(), e(d, i, j, f.orientation);
        var l = a(c);
        l && (g /= 2, h /= 2);
        var m = 1024,
            n = document.createElement("canvas");
        n.width = n.height = m;
        for (var o = n.getContext("2d"), p = b(c, g, h), q = Math.ceil(m * i / g), r = Math.ceil(m * j / h / p), s = 0, t = 0; h > s;) {
            for (var u = 0, v = 0; g > u;) o.clearRect(0, 0, m, m), o.drawImage(c, -u, -s), k.drawImage(n, 0, 0, m, m, v, t, q, r), u += m, v += q;
            s += m, t += r
        }
        k.restore(), n = o = null
    }
    function e(a, b, c, d) {
        switch (d) {
        case 5:
        case 6:
        case 7:
        case 8:
            a.width = c, a.height = b;
            break;
        default:
            a.width = b, a.height = c
        }
        var e = a.getContext("2d");
        switch (d) {
        case 2:
            e.translate(b, 0), e.scale(-1, 1);
            break;
        case 3:
            e.translate(b, c), e.rotate(Math.PI);
            break;
        case 4:
            e.translate(0, c), e.scale(1, -1);
            break;
        case 5:
            e.rotate(.5 * Math.PI), e.scale(1, -1);
            break;
        case 6:
            e.rotate(.5 * Math.PI), e.translate(0, -c);
            break;
        case 7:
            e.rotate(.5 * Math.PI), e.translate(b, -c), e.scale(-1, 1);
            break;
        case 8:
            e.rotate(-.5 * Math.PI), e.translate(-b, 0)
        }
    }
    function f(a) {
        if (a instanceof Blob) {
            var b = new Image,
                c = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
            if (!c) throw Error("No createObjectURL function found to create blob url");
            b.src = c.createObjectURL(a), a = b
        }
        if (!a.naturalWidth && !a.naturalHeight) {
            var d = this;
            a.onload = function () {
                var a = d.imageLoadListeners;
                if (a) {
                    d.imageLoadListeners = null;
                    for (var b = 0, c = a.length; c > b; b++) a[b]()
                }
            }, this.imageLoadListeners = []
        }
        this.srcImage = a
    }
    f.prototype.render = function (a, b) {
        if (this.imageLoadListeners) {
            var e = this;
            return this.imageLoadListeners.push(function () {
                e.render(a, b)
            }), void 0
        }
        b = b || {};
        var f = this.srcImage.naturalWidth,
            g = this.srcImage.naturalHeight,
            h = b.width,
            i = b.height,
            j = b.maxWidth,
            k = b.maxHeight;
        h && !i ? i = g * h / f << 0 : i && !h ? h = f * i / g << 0 : (h = f, i = g), j && h > j && (h = j, i = g * h / f << 0), k && i > k && (i = k, h = f * i / g << 0);
        var l = {
            width: h,
            height: i
        };
        for (var m in b) l[m] = b[m];
        var n = a.tagName.toLowerCase();
        "img" === n ? a.src = c(this.srcImage, l) : "canvas" === n && d(this.srcImage, a, l), "function" == typeof this.onrender && this.onrender(a)
    }, this.MegaPixImage = f
}();;
!
function (a, b, c) {
    function d(a, b, c) {
        for (var d = [], e = 0; e < a.length; e++) {
            var f = tinycolor(a[e]),
                g = f.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
            g += tinycolor.equals(b, a[e]) ? " sp-thumb-active" : "";
            var h = q ? "background-color:" + f.toRgbString() : "filter:" + f.toFilter();
            d.push('<span title="' + f.toRgbString() + '" data-color="' + f.toRgbString() + '" class="' + g + '"><span class="sp-thumb-inner" style="' + h + ';" /></span>')
        }
        return "<div class='sp-cf " + c + "'>" + d.join("") + "</div>"
    }
    function e() {
        for (var a = 0; a < o.length; a++) o[a] && o[a].hide()
    }
    function f(a, c) {
        var d = b.extend({}, n, a);
        return d.callbacks = {
            move: k(d.move, c),
            change: k(d.change, c),
            show: k(d.show, c),
            hide: k(d.hide, c),
            beforeShow: k(d.beforeShow, c)
        }, d
    }
    function g(g, i) {
        function k() {
            qb.toggleClass("sp-flat", R), qb.toggleClass("sp-input-disabled", !Q.showInput), qb.toggleClass("sp-alpha-enabled", Q.showAlpha), qb.toggleClass("sp-buttons-disabled", !Q.showButtons || R), qb.toggleClass("sp-palette-disabled", !Q.showPalette), qb.toggleClass("sp-palette-only", Q.showPaletteOnly), qb.toggleClass("sp-initial-disabled", !Q.showInitial), qb.addClass(Q.className), L()
        }
        function n() {
            function c(a) {
                return a.data && a.data.ignore ? (E(b(this).data("color")), H()) : (E(b(this).data("color")), K(!0), H(), C()), !1
            }
            if (p && qb.find("*:not(input)").attr("unselectable", "on"), k(), Eb && ob.hide().after(Fb), R ? ob.after(qb).hide() : b(nb).append(qb.hide()), T && a.localStorage) {
                try {
                    var d = a.localStorage[T].split(",#");
                    d.length > 1 && (delete a.localStorage[T], b.each(d, function (a, b) {
                        t(b)
                    }))
                } catch (e) {}
                try {
                    kb = a.localStorage[T].split(";")
                } catch (e) {}
            }
            Gb.bind("click.spectrum touchstart.spectrum", function (a) {
                pb || A(), a.stopPropagation(), b(a.target).is("input") || a.preventDefault()
            }), (ob.is(":disabled") || Q.disabled === !0) && P(), qb.click(j), yb.change(z), yb.bind("paste", function () {
                setTimeout(z, 1)
            }), yb.keydown(function (a) {
                13 == a.keyCode && z()
            }), Bb.text(Q.cancelText), Bb.bind("click.spectrum", function (a) {
                a.stopPropagation(), a.preventDefault(), C("cancel")
            }), Cb.text(Q.chooseText), Cb.bind("click.spectrum", function (a) {
                a.stopPropagation(), a.preventDefault(), G() && (K(!0), C())
            }), l(wb, function (a, b, c) {
                hb = a / bb, c.shiftKey && (hb = Math.round(10 * hb) / 10), H()
            }), l(tb, function (a, b) {
                eb = parseFloat(b / _), H()
            }, x, y), l(rb, function (a, b) {
                fb = parseFloat(a / Y), gb = parseFloat((Z - b) / Z), H()
            }, x, y), Ib ? (E(Ib), I(), Lb = Kb || tinycolor(Ib).format, t(Ib)) : I(), R && B();
            var f = p ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            zb.delegate(".sp-thumb-el", f, c), Ab.delegate(".sp-thumb-el:nth-child(1)", f, {
                ignore: !0
            }, c)
        }
        function t(c) {
            if (S) {
                var d = tinycolor(c).toRgbString();
                if (-1 === b.inArray(d, kb) && kb.push(d), T && a.localStorage) try {
                    a.localStorage[T] = kb.join(";")
                } catch (e) {}
            }
        }
        function u() {
            var a, b = [],
                c = kb,
                d = {};
            if (Q.showPalette) {
                for (var e = 0; e < jb.length; e++) for (var f = 0; f < jb[e].length; f++) a = tinycolor(jb[e][f]).toRgbString(), d[a] = !0;
                for (e = 0; e < c.length; e++) a = tinycolor(c[e]).toRgbString(), d.hasOwnProperty(a) || (b.push(c[e]), d[a] = !0)
            }
            return b.reverse().slice(0, Q.maxSelectionSize)
        }
        function v() {
            var a = F(),
                c = b.map(jb, function (b, c) {
                    return d(b, a, "sp-palette-row sp-palette-row-" + c)
                });
            kb && c.push(d(u(), a, "sp-palette-row sp-palette-row-selection")), zb.html(c.join(""))
        }
        function w() {
            if (Q.showInitial) {
                var a = Jb,
                    b = F();
                Ab.html(d([a, b], b, "sp-palette-row-initial"))
            }
        }
        function x() {
            (0 === Z || 0 === Y || 0 === _) && L(), qb.addClass(lb)
        }
        function y() {
            qb.removeClass(lb)
        }
        function z() {
            var a = tinycolor(yb.val());
            a.ok ? E(a) : yb.addClass("sp-validation-error")
        }
        function A() {
            X ? C() : B()
        }
        function B() {
            return X ? (L(), void 0) : (V.beforeShow(F()) !== !1 && (e(), X = !0, b(mb).bind("click.spectrum", C), b(a).bind("resize.spectrum", W), Fb.addClass("sp-active"), qb.show(), Q.showPalette && v(), L(), I(), Jb = F(), w(), V.show(Jb)), void 0)
        }
        function C(c) {
            if ((!c || "click" != c.type || 2 != c.button) && X && !R) {
                X = !1, b(mb).unbind("click.spectrum", C), b(a).unbind("resize.spectrum", W), Fb.removeClass("sp-active"), qb.hide();
                var d = !tinycolor.equals(F(), Jb);
                d && (Mb && "cancel" !== c ? K(!0) : D()), V.hide(F())
            }
        }
        function D() {
            E(Jb, !0)
        }
        function E(a, b) {
            if (!tinycolor.equals(a, F())) {
                var c = tinycolor(a),
                    d = c.toHsv();
                eb = d.h, fb = d.s, gb = d.v, hb = d.a, I(), b || (Lb = Kb || c.format)
            }
        }
        function F() {
            return tinycolor.fromRatio({
                h: eb,
                s: fb,
                v: gb,
                a: Math.round(100 * hb) / 100
            })
        }
        function G() {
            return !yb.hasClass("sp-validation-error")
        }
        function H() {
            I(), V.move(F())
        }
        function I() {
            yb.removeClass("sp-validation-error"), J();
            var a = tinycolor({
                h: eb,
                s: "1.0",
                v: "1.0"
            });
            rb.css("background-color", a.toHexString());
            var b = Lb;
            1 > hb && ("hex" === b || "name" === b) && (b = "rgb");
            var c = F(),
                d = c.toHexString(),
                e = c.toRgbString();
            if (q || 1 === c.alpha ? Hb.css("background-color", e) : (Hb.css("background-color", "transparent"), Hb.css("filter", c.toFilter())), Q.showAlpha) {
                var f = c.toRgb();
                f.a = 0;
                var g = tinycolor(f).toRgbString(),
                    h = "linear-gradient(left, " + g + ", " + d + ")";
                p ? vb.css("filter", tinycolor(g).toFilter({
                    gradientType: 1
                }, d)) : (vb.css("background", "-webkit-" + h), vb.css("background", "-moz-" + h), vb.css("background", "-ms-" + h), vb.css("background", h))
            }
            Q.showInput && (1 > hb && ("hex" === b || "name" === b) && (b = "rgb"), yb.val(c.toString(b))), Q.showPalette && v(), w()
        }
        function J() {
            var a = fb,
                b = gb,
                c = a * Y,
                d = Z - b * Z;
            c = Math.max(-$, Math.min(Y - $, c - $)), d = Math.max(-$, Math.min(Z - $, d - $)), sb.css({
                top: d,
                left: c
            });
            var e = hb * bb;
            xb.css({
                left: e - cb / 2
            });
            var f = eb * _;
            ub.css({
                top: f - db
            })
        }
        function K(a) {
            var b = F();
            Db && ob.val(b.toString(Lb)).change();
            var c = !tinycolor.equals(b, Jb);
            Jb = b, t(b), a && c && V.change(b)
        }
        function L() {
            Y = rb.width(), Z = rb.height(), $ = sb.height(), ab = tb.width(), _ = tb.height(), db = ub.height(), bb = wb.width(), cb = xb.width(), R || qb.offset(h(qb, Gb)), J()
        }
        function M() {
            ob.show(), Gb.unbind("click.spectrum touchstart.spectrum"), qb.remove(), Fb.remove(), o[Nb.id] = null
        }
        function N(a, d) {
            return a === c ? b.extend({}, Q) : d === c ? Q[a] : (Q[a] = d, k(), void 0)
        }
        function O() {
            pb = !1, ob.attr("disabled", !1), Gb.removeClass("sp-disabled")
        }
        function P() {
            C(), pb = !0, ob.attr("disabled", !0), Gb.addClass("sp-disabled")
        }
        var Q = f(i, g),
            R = Q.flat,
            S = Q.showSelectionPalette,
            T = Q.localStorageKey,
            U = Q.theme,
            V = Q.callbacks,
            W = m(L, 10),
            X = !1,
            Y = 0,
            Z = 0,
            $ = 0,
            _ = 0,
            ab = 0,
            bb = 0,
            cb = 0,
            db = 0,
            eb = 0,
            fb = 0,
            gb = 0,
            hb = 1,
            ib = Q.palette.slice(0),
            jb = b.isArray(ib[0]) ? ib : [ib],
            kb = Q.selectionPalette.slice(0),
            lb = "sp-dragging",
            mb = g.ownerDocument,
            nb = mb.body,
            ob = b(g),
            pb = !1,
            qb = b(s, mb).addClass(U),
            rb = qb.find(".sp-color"),
            sb = qb.find(".sp-dragger"),
            tb = qb.find(".sp-hue"),
            ub = qb.find(".sp-slider"),
            vb = qb.find(".sp-alpha-inner"),
            wb = qb.find(".sp-alpha"),
            xb = qb.find(".sp-alpha-handle"),
            yb = qb.find(".sp-input"),
            zb = qb.find(".sp-palette"),
            Ab = qb.find(".sp-initial"),
            Bb = qb.find(".sp-cancel"),
            Cb = qb.find(".sp-choose"),
            Db = ob.is("input"),
            Eb = Db && !R,
            Fb = Eb ? b(r).addClass(U) : b([]),
            Gb = Eb ? Fb : ob,
            Hb = Fb.find(".sp-preview-inner"),
            Ib = Q.color || Db && ob.val(),
            Jb = !1,
            Kb = Q.preferredFormat,
            Lb = Kb,
            Mb = !Q.showButtons || Q.clickoutFiresChange;
        n();
        var Nb = {
            show: B,
            hide: C,
            toggle: A,
            reflow: L,
            option: N,
            enable: O,
            disable: P,
            set: function (a) {
                E(a), K()
            },
            get: F,
            destroy: M,
            container: qb
        };
        return Nb.id = o.push(Nb) - 1, Nb
    }
    function h(a, c) {
        var d = 0,
            e = a.outerWidth(),
            f = a.outerHeight(),
            g = c.outerHeight(),
            h = a[0].ownerDocument,
            i = h.documentElement,
            j = i.clientWidth + b(h).scrollLeft(),
            k = i.clientHeight + b(h).scrollTop(),
            l = c.offset();
        return l.top += g, l.left -= Math.min(l.left, l.left + e > j && j > e ? Math.abs(l.left + e - j) : 0), l.top -= Math.min(l.top, l.top + f > k && k > f ? Math.abs(f + g - d) : d), l
    }
    function i() {}
    function j(a) {
        a.stopPropagation()
    }
    function k(a, b) {
        var c = Array.prototype.slice,
            d = c.call(arguments, 2);
        return function () {
            return a.apply(b, d.concat(c.call(arguments)))
        }
    }
    function l(c, d, e, f) {
        function g(a) {
            a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.returnValue = !1
        }
        function h(a) {
            if (l) {
                if (p && document.documentMode < 9 && !a.button) return j();
                var b = a.originalEvent.touches,
                    e = b ? b[0].pageX : a.pageX,
                    f = b ? b[0].pageY : a.pageY,
                    h = Math.max(0, Math.min(e - m.left, o)),
                    i = Math.max(0, Math.min(f - m.top, n));
                q && g(a), d.apply(c, [h, i, a])
            }
        }
        function i(a) {
            var d = a.which ? 3 == a.which : 2 == a.button;
            a.originalEvent.touches, d || l || e.apply(c, arguments) !== !1 && (l = !0, n = b(c).height(), o = b(c).width(), m = b(c).offset(), b(k).bind(r), b(k.body).addClass("sp-dragging"), q || h(a), g(a))
        }
        function j() {
            l && (b(k).unbind(r), b(k.body).removeClass("sp-dragging"), f.apply(c, arguments)), l = !1
        }
        d = d ||
        function () {}, e = e ||
        function () {}, f = f ||
        function () {};
        var k = c.ownerDocument || document,
            l = !1,
            m = {},
            n = 0,
            o = 0,
            q = "ontouchstart" in a,
            r = {};
        r.selectstart = g, r.dragstart = g, r[q ? "touchmove" : "mousemove"] = h, r[q ? "touchend" : "mouseup"] = j, b(c).bind(q ? "touchstart" : "mousedown", i)
    }
    function m(a, b, c) {
        var d;
        return function () {
            var e = this,
                f = arguments,
                g = function () {
                    d = null, a.apply(e, f)
                };
            c && clearTimeout(d), (c || !d) && (d = setTimeout(g, b))
        }
    }
    var n = {
        beforeShow: i,
        move: i,
        change: i,
        show: i,
        hide: i,
        color: !1,
        flat: !1,
        showInput: !1,
        showButtons: !0,
        clickoutFiresChange: !1,
        showInitial: !1,
        showPalette: !1,
        showPaletteOnly: !1,
        showSelectionPalette: !0,
        localStorageKey: !1,
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        preferredFormat: !1,
        className: "",
        showAlpha: !1,
        theme: "sp-light",
        palette: ["fff", "000"],
        selectionPalette: [],
        disabled: !1
    },
        o = [],
        p = !! /msie/i.exec(a.navigator.userAgent),
        q = function () {
            function a(a, b) {
                return !!~ ("" + a).indexOf(b)
            }
            var b = document.createElement("div"),
                c = b.style;
            return c.cssText = "background-color:rgba(0,0,0,.5)", a(c.backgroundColor, "rgba") || a(c.backgroundColor, "hsla")
        }(),
        r = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner'></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
        s = function () {
            var a = "";
            if (p) for (var b = 1; 6 >= b; b++) a += "<div class='sp-" + b + "'></div>";
            return ["<div class='sp-container'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", a, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<a class='sp-cancel' href='#'></a>", "<button class='sp-choose'></button>", "</div>", "</div>", "</div>"].join("")
        }(),
        t = "spectrum.id";
    b.fn.spectrum = function (a) {
        if ("string" == typeof a) {
            var c = this,
                d = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var e = o[b(this).data(t)];
                if (e) {
                    var f = e[a];
                    if (!f) throw new Error("Spectrum: no such method: '" + a + "'");
                    "get" == a ? c = e.get() : "container" == a ? c = e.container : "option" == a ? c = e.option.apply(e, d) : "destroy" == a ? (e.destroy(), b(this).removeData(t)) : f.apply(e, d)
                }
            }), c
        }
        return this.spectrum("destroy").each(function () {
            var c = g(this, a);
            b(this).data(t, c.id)
        })
    }, b.fn.spectrum.load = !0, b.fn.spectrum.loadOpts = {}, b.fn.spectrum.draggable = l, b.fn.spectrum.defaults = n, b.spectrum = {}, b.spectrum.localization = {}, b.spectrum.palettes = {}, b.fn.spectrum.processNativeColorInputs = function () {
        var a = b("<input type='color' value='!' />")[0],
            c = "color" === a.type && "!" != a.value;
        c || b("input[type=color]").spectrum({
            preferredFormat: "hex6"
        })
    }, function (a) {
        function b(a) {
            if ("object" == typeof a && a.hasOwnProperty("_tc_id")) return a;
            var d = c(a),
                f = d.r,
                h = d.g,
                j = d.b,
                k = z(d.a),
                l = d.format;
            return {
                ok: d.ok,
                format: l,
                _tc_id: t++,
                alpha: k,
                toHsv: function () {
                    var a = g(f, h, j);
                    return {
                        h: a.h,
                        s: a.s,
                        v: a.v,
                        a: k
                    }
                },
                toHsvString: function () {
                    var a = g(f, h, j),
                        b = v(360 * a.h),
                        c = v(100 * a.s),
                        d = v(100 * a.v);
                    return 1 == k ? "hsv(" + b + ", " + c + "%, " + d + "%)" : "hsva(" + b + ", " + c + "%, " + d + "%, " + k + ")"
                },
                toHsl: function () {
                    var a = e(f, h, j);
                    return {
                        h: a.h,
                        s: a.s,
                        l: a.l,
                        a: k
                    }
                },
                toHslString: function () {
                    var a = e(f, h, j),
                        b = v(360 * a.h),
                        c = v(100 * a.s),
                        d = v(100 * a.l);
                    return 1 == k ? "hsl(" + b + ", " + c + "%, " + d + "%)" : "hsla(" + b + ", " + c + "%, " + d + "%, " + k + ")"
                },
                toHex: function () {
                    return i(f, h, j)
                },
                toHexString: function (a) {
                    return "#" + i(f, h, j, a)
                },
                toRgb: function () {
                    return {
                        r: v(f),
                        g: v(h),
                        b: v(j),
                        a: k
                    }
                },
                toRgbString: function () {
                    return 1 == k ? "rgb(" + v(f) + ", " + v(h) + ", " + v(j) + ")" : "rgba(" + v(f) + ", " + v(h) + ", " + v(j) + ", " + k + ")"
                },
                toName: function () {
                    return B[i(f, h, j)] || !1
                },
                toFilter: function (a, c) {
                    var d = i(f, h, j, !0),
                        e = d,
                        g = Math.round(255 * z(k)).toString(16),
                        l = g,
                        m = a && a.gradientType ? "GradientType = 1, " : "";
                    if (c) {
                        var n = b(c);
                        e = n.toHex(), l = Math.round(255 * z(n.alpha)).toString(16)
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + m + "startColorstr=#" + p(g) + d + ",endColorstr=#" + p(l) + e + ")"
                },
                toString: function (a) {
                    a = a || this.format;
                    var b = !1;
                    return "rgb" === a && (b = this.toRgbString()), "hex" === a && (b = this.toHexString()), "hex6" === a && (b = this.toHexString(!0)), "name" === a && (b = this.toName()), "hsl" === a && (b = this.toHslString()), "hsv" === a && (b = this.toHsvString()), b || this.toHexString(!0)
                }
            }
        }
        function c(a) {
            var b = {
                r: 0,
                g: 0,
                b: 0
            },
                c = 1,
                e = !1,
                g = !1;
            return "string" == typeof a && (a = q(a)), "object" == typeof a && (a.hasOwnProperty("r") && a.hasOwnProperty("g") && a.hasOwnProperty("b") ? (b = d(a.r, a.g, a.b), e = !0, g = "rgb") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("v") ? (b = h(a.h, a.s, a.v), e = !0, g = "hsv") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("l") && (b = f(a.h, a.s, a.l), e = !0, g = "hsl"), a.hasOwnProperty("a") && (c = a.a)), b.r = w(255, x(b.r, 0)), b.g = w(255, x(b.g, 0)), b.b = w(255, x(b.b, 0)), b.r < 1 && (b.r = v(b.r)), b.g < 1 && (b.g = v(b.g)), b.b < 1 && (b.b = v(b.b)), {
                ok: e,
                format: a && a.format || g,
                r: b.r,
                g: b.g,
                b: b.b,
                a: c
            }
        }
        function d(a, b, c) {
            return {
                r: 255 * k(a, 255),
                g: 255 * k(b, 255),
                b: 255 * k(c, 255)
            }
        }
        function e(a, b, c) {
            a = k(a, 255), b = k(b, 255), c = k(c, 255);
            var d, e, f = x(a, b, c),
                g = w(a, b, c),
                h = (f + g) / 2;
            if (f == g) d = e = 0;
            else {
                var i = f - g;
                switch (e = h > .5 ? i / (2 - f - g) : i / (f + g), f) {
                case a:
                    d = (b - c) / i + (c > b ? 6 : 0);
                    break;
                case b:
                    d = (c - a) / i + 2;
                    break;
                case c:
                    d = (a - b) / i + 4
                }
                d /= 6
            }
            return {
                h: d,
                s: e,
                l: h
            }
        }
        function f(a, b, c) {
            function d(a, b, c) {
                return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + 6 * (b - a) * (2 / 3 - c) : a
            }
            var e, f, g;
            if (a = k(a, 360), b = k(b, 100), c = k(c, 100), 0 === b) e = f = g = c;
            else {
                var h = .5 > c ? c * (1 + b) : c + b - c * b,
                    i = 2 * c - h;
                e = d(i, h, a + 1 / 3), f = d(i, h, a), g = d(i, h, a - 1 / 3)
            }
            return {
                r: 255 * e,
                g: 255 * f,
                b: 255 * g
            }
        }
        function g(a, b, c) {
            a = k(a, 255), b = k(b, 255), c = k(c, 255);
            var d, e, f = x(a, b, c),
                g = w(a, b, c),
                h = f,
                i = f - g;
            if (e = 0 === f ? 0 : i / f, f == g) d = 0;
            else {
                switch (f) {
                case a:
                    d = (b - c) / i + (c > b ? 6 : 0);
                    break;
                case b:
                    d = (c - a) / i + 2;
                    break;
                case c:
                    d = (a - b) / i + 4
                }
                d /= 6
            }
            return {
                h: d,
                s: e,
                v: h
            }
        }
        function h(a, b, c) {
            a = 6 * k(a, 360), b = k(b, 100), c = k(c, 100);
            var d = u.floor(a),
                e = a - d,
                f = c * (1 - b),
                g = c * (1 - e * b),
                h = c * (1 - (1 - e) * b),
                i = d % 6,
                j = [c, g, f, f, h, c][i],
                l = [h, c, c, g, f, f][i],
                m = [f, f, h, c, c, g][i];
            return {
                r: 255 * j,
                g: 255 * l,
                b: 255 * m
            }
        }
        function i(a, b, c, d) {
            var e = [p(v(a).toString(16)), p(v(b).toString(16)), p(v(c).toString(16))];
            return d || e[0].charAt(0) != e[0].charAt(1) || e[1].charAt(0) != e[1].charAt(1) || e[2].charAt(0) != e[2].charAt(1) ? e.join("") : e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0)
        }
        function j(a) {
            var b = {};
            for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
            return b
        }
        function k(a, b) {
            n(a) && (a = "100%");
            var c = o(a);
            return a = w(b, x(0, z(a))), c && (a *= b / 100), u.abs(a - b) < 1e-6 ? 1 : a >= 1 ? a % b / z(b) : a
        }
        function l(a) {
            return w(1, x(0, a))
        }
        function m(a) {
            return parseInt(a, 16)
        }
        function n(a) {
            return "string" == typeof a && -1 != a.indexOf(".") && 1 === z(a)
        }
        function o(a) {
            return "string" == typeof a && -1 != a.indexOf("%")
        }
        function p(a) {
            return 1 == a.length ? "0" + a : "" + a
        }
        function q(a) {
            a = a.replace(r, "").replace(s, "").toLowerCase();
            var b = !1;
            if (A[a]) a = A[a], b = !0;
            else if ("transparent" == a) return {
                r: 0,
                g: 0,
                b: 0,
                a: 0
            };
            var c;
            return (c = C.rgb.exec(a)) ? {
                r: c[1],
                g: c[2],
                b: c[3]
            } : (c = C.rgba.exec(a)) ? {
                r: c[1],
                g: c[2],
                b: c[3],
                a: c[4]
            } : (c = C.hsl.exec(a)) ? {
                h: c[1],
                s: c[2],
                l: c[3]
            } : (c = C.hsla.exec(a)) ? {
                h: c[1],
                s: c[2],
                l: c[3],
                a: c[4]
            } : (c = C.hsv.exec(a)) ? {
                h: c[1],
                s: c[2],
                v: c[3]
            } : (c = C.hex6.exec(a)) ? {
                r: m(c[1]),
                g: m(c[2]),
                b: m(c[3]),
                format: b ? "name" : "hex"
            } : (c = C.hex3.exec(a)) ? {
                r: m(c[1] + "" + c[1]),
                g: m(c[2] + "" + c[2]),
                b: m(c[3] + "" + c[3]),
                format: b ? "name" : "hex"
            } : !1
        }
        var r = /^[\s,#]+/,
            s = /\s+$/,
            t = 0,
            u = Math,
            v = u.round,
            w = u.min,
            x = u.max,
            y = u.random,
            z = a.parseFloat;
        b.fromRatio = function (a) {
            if ("object" == typeof a) for (var c in a) 1 === a[c] && (a[c] = "1.0");
            return b(a)
        }, b.equals = function (a, c) {
            return a && c ? b(a).toRgbString() == b(c).toRgbString() : !1
        }, b.random = function () {
            return b.fromRatio({
                r: y(),
                g: y(),
                b: y()
            })
        }, b.desaturate = function (a, c) {
            var d = b(a).toHsl();
            return d.s -= (c || 10) / 100, d.s = l(d.s), b(d)
        }, b.saturate = function (a, c) {
            var d = b(a).toHsl();
            return d.s += (c || 10) / 100, d.s = l(d.s), b(d)
        }, b.greyscale = function (a) {
            return b.desaturate(a, 100)
        }, b.lighten = function (a, c) {
            var d = b(a).toHsl();
            return d.l += (c || 10) / 100, d.l = l(d.l), b(d)
        }, b.darken = function (a, c) {
            var d = b(a).toHsl();
            return d.l -= (c || 10) / 100, d.l = l(d.l), b(d)
        }, b.complement = function (a) {
            var c = b(a).toHsl();
            return c.h = (c.h + .5) % 1, b(c)
        }, b.triad = function (a) {
            var c = b(a).toHsl(),
                d = 360 * c.h;
            return [b(a), b({
                h: (d + 120) % 360,
                s: c.s,
                l: c.l
            }), b({
                h: (d + 240) % 360,
                s: c.s,
                l: c.l
            })]
        }, b.tetrad = function (a) {
            var c = b(a).toHsl(),
                d = 360 * c.h;
            return [b(a), b({
                h: (d + 90) % 360,
                s: c.s,
                l: c.l
            }), b({
                h: (d + 180) % 360,
                s: c.s,
                l: c.l
            }), b({
                h: (d + 270) % 360,
                s: c.s,
                l: c.l
            })]
        }, b.splitcomplement = function (a) {
            var c = b(a).toHsl(),
                d = 360 * c.h;
            return [b(a), b({
                h: (d + 72) % 360,
                s: c.s,
                l: c.l
            }), b({
                h: (d + 216) % 360,
                s: c.s,
                l: c.l
            })]
        }, b.analogous = function (a, c, d) {
            c = c || 6, d = d || 30;
            var e = b(a).toHsl(),
                f = 360 / d,
                g = [b(a)];
            for (e.h *= 360, e.h = (e.h - (f * c >> 1) + 720) % 360; --c;) e.h = (e.h + f) % 360, g.push(b(e));
            return g
        }, b.monochromatic = function (a, c) {
            c = c || 6;
            for (var d = b(a).toHsv(), e = d.h, f = d.s, g = d.v, h = [], i = 1 / c; c--;) h.push(b({
                h: e,
                s: f,
                v: g
            })), g = (g + i) % 1;
            return h
        }, b.readable = function (a, c) {
            var d = b(a).toRgb(),
                e = b(c).toRgb();
            return (e.r - d.r) * (e.r - d.r) + (e.g - d.g) * (e.g - d.g) + (e.b - d.b) * (e.b - d.b) > 10404
        };
        var A = b.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        },
            B = b.hexNames = j(A),
            C = function () {
                var a = "[-\\+]?\\d+%?",
                    b = "[-\\+]?\\d*\\.\\d+%?",
                    c = "(?:" + b + ")|(?:" + a + ")",
                    d = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?",
                    e = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?";
                return {
                    rgb: new RegExp("rgb" + d),
                    rgba: new RegExp("rgba" + e),
                    hsl: new RegExp("hsl" + d),
                    hsla: new RegExp("hsla" + e),
                    hsv: new RegExp("hsv" + d),
                    hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                }
            }();
        a.tinycolor = b
    }(this), b(function () {
        b.fn.spectrum.load && b.fn.spectrum.processNativeColorInputs()
    })
}(window, jQuery);;
!
function (a, b, c) {
    function d(a, c) {
        var d, e = b.createElement(a || "div");
        for (d in c) e[d] = c[d];
        return e
    }
    function e(a) {
        for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
        return a
    }
    function f(a, b, c, d) {
        var e = ["opacity", b, ~~ (100 * a), c, d].join("-"),
            f = .01 + 100 * (c / d),
            g = Math.max(1 - (1 - a) / b * (100 - f), a),
            h = k.substring(0, k.indexOf("Animation")).toLowerCase(),
            i = h && "-" + h + "-" || "";
        return m[e] || (n.insertRule("@" + i + "keyframes " + e + "{" + "0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}" + "100%{opacity:" + g + "}" + "}", 0), m[e] = 1), e
    }
    function g(a, b) {
        var d, e, f = a.style;
        if (f[b] !== c) return b;
        for (b = b.charAt(0).toUpperCase() + b.slice(1), e = 0; e < l.length; e++) if (d = l[e] + b, f[d] !== c) return d
    }
    function h(a, b) {
        for (var c in b) a.style[g(a, c) || c] = b[c];
        return a
    }
    function i(a) {
        for (var b = 1; b < arguments.length; b++) {
            var d = arguments[b];
            for (var e in d) a[e] === c && (a[e] = d[e])
        }
        return a
    }
    function j(a) {
        for (var b = {
            x: a.offsetLeft,
            y: a.offsetTop
        }; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
        return b
    }
    var k, l = ["webkit", "Moz", "ms", "O"],
        m = {},
        n = function () {
            var a = d("style");
            return e(b.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet
        }(),
        o = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            color: "#000",
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto"
        },
        p = function q(a) {
            return this.spin ? (this.opts = i(a || {}, q.defaults, o), void 0) : new q(a)
        };
    p.defaults = {}, i(p.prototype, {
        spin: function (a) {
            this.stop();
            var b, c, e = this,
                f = e.opts,
                g = e.el = h(d(0, {
                    className: f.className
                }), {
                    position: "relative",
                    zIndex: f.zIndex
                }),
                i = f.radius + f.length + f.width;
            if (a && (a.insertBefore(g, a.firstChild || null), c = j(a), b = j(g), h(g, {
                left: ("auto" == f.left ? c.x - b.x + (a.offsetWidth >> 1) : f.left + i) + "px",
                top: ("auto" == f.top ? c.y - b.y + (a.offsetHeight >> 1) : f.top + i) + "px"
            })), g.setAttribute("aria-role", "progressbar"), e.lines(g, e.opts), !k) {
                var l = 0,
                    m = f.fps,
                    n = m / f.speed,
                    o = (1 - f.opacity) / (n * f.trail / 100),
                    p = n / f.lines;
                !
                function q() {
                    l++;
                    for (var a = f.lines; a; a--) {
                        var b = Math.max(1 - (l + a * p) % n * o, f.opacity);
                        e.opacity(g, f.lines - a, b, f)
                    }
                    e.timeout = e.el && setTimeout(q, ~~ (1e3 / m))
                }()
            }
            return e
        },
        stop: function () {
            var a = this.el;
            return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = c), this
        },
        lines: function (a, b) {
            function c(a, c) {
                return h(d(), {
                    position: "absolute",
                    width: b.length + b.width + "px",
                    height: b.width + "px",
                    background: a,
                    boxShadow: c,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~ (360 / b.lines * i + b.rotate) + "deg) translate(" + b.radius + "px" + ",0)",
                    borderRadius: (b.width >> 1) + "px"
                })
            }
            for (var g, i = 0; i < b.lines; i++) g = h(d(), {
                position: "absolute",
                top: 1 + ~ (b.width / 2) + "px",
                transform: b.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: b.opacity,
                animation: k && f(b.opacity, b.trail, i, b.lines) + " " + 1 / b.speed + "s linear infinite"
            }), b.shadow && e(g, h(c("#000", "0 0 4px #000"), {
                top: "2px"
            })), e(a, e(g, c(b.color, "0 0 1px rgba(0,0,0,.1)")));
            return a
        },
        opacity: function (a, b, c) {
            b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
        }
    }), !
    function () {
        function a(a, b) {
            return d("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', b)
        }
        var b = h(d("group"), {
            behavior: "url(#default#VML)"
        });
        !g(b, "transform") && b.adj ? (n.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function (b, c) {
            function d() {
                return h(a("group", {
                    coordsize: j + " " + j,
                    coordorigin: -i + " " + -i
                }), {
                    width: j,
                    height: j
                })
            }
            function f(b, f, g) {
                e(l, e(h(d(), {
                    rotation: 360 / c.lines * b + "deg",
                    left: ~~f
                }), e(h(a("roundrect", {
                    arcsize: 1
                }), {
                    width: i,
                    height: c.width,
                    left: c.radius,
                    top: -c.width >> 1,
                    filter: g
                }), a("fill", {
                    color: c.color,
                    opacity: c.opacity
                }), a("stroke", {
                    opacity: 0
                }))))
            }
            var g, i = c.length + c.width,
                j = 2 * i,
                k = 2 * -(c.width + c.length) + "px",
                l = h(d(), {
                    position: "absolute",
                    top: k,
                    left: k
                });
            if (c.shadow) for (g = 1; g <= c.lines; g++) f(g, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (g = 1; g <= c.lines; g++) f(g);
            return e(b, l)
        }, p.prototype.opacity = function (a, b, c, d) {
            var e = a.firstChild;
            d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
        }) : k = g(b, "animation")
    }(), a.Spinner = p
}(window, document);;
define("storymaps/ui/loadingIndicator/LoadingIndicator", ["dojo/dom"], function (e) {
    return function (n, r) {
        var i = null,
            s = 0,
            o = e.byId(n),
            u = e.byId(r);
        this.init = function () {
            if (this.spinner != null) return;
            var e = {
                lines: 16,
                length: 7,
                width: 7,
                radius: 30,
                rotate: 0,
                color: "#000",
                speed: 1.1,
                trail: 25,
                shadow: !0,
                hwaccel: !0,
                className: "spinner",
                top: 4,
                left: 6
            };
            i = (new Spinner(e)).spin(o)
        }, this.start = function () {
            !i && this.init(), this.itemCount || (i.spin(o), o.style.visibility = "visible"), s = 1
        }, this.stop = function () {
            s--, s <= 0 && (i.stop(), o.style.visibility = "hidden", s = 0), u && (u.style.visibility = "hidden")
        }, this.setMessage = function (e, t) {
            u && (t && (u.style.marginTop = "-50px"), u.innerHTML = e, u.style.visibility = "visible")
        }, this.forceHide = function () {
            o.style.display = "none", u && (u.style.display = "none")
        }
    }
}), define("storymaps/utils/Helper", ["dojo/cookie", "dojo/has", "esri/urlUtils", "esri/geometry/webMercatorUtils", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/Polygon", "esri/layers/ArcGISDynamicMapServiceLayer", "esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/OpenStreetMapLayer"], function (e, t, n, r, i, s, o, u, a, f) {
    return {
        isMobile: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/IEMobile/i)
        },
        isArcGISHosted: function () {
            return /(\/apps\/|\/home\/)(MapTour\/)/.test(document.location.pathname)
        },
        getWebmapID: function (e) {
            var t = n.urlToObject(document.location.search).query || {};
            if (configOptions && configOptions.webmap) return configOptions.webmap;
            if (this.isArcGISHosted() || !e) return t.webmap;
            if (configOptions.authorizedOwners && configOptions.authorizedOwners.length > 0 && configOptions.authorizedOwners[0]) return t.webmap
        },
        getAppID: function (e) {
            var t = n.urlToObject(document.location.search).query || {};
            if (configOptions && configOptions.appid) return configOptions.appid;
            if (this.isArcGISHosted() || !e) return t.appid;
            if (configOptions.authorizedOwners && configOptions.authorizedOwners.length > 0 && configOptions.authorizedOwners[0]) return t.appid
        },
        getGraphicsLayerByName: function (e, t) {
            var n;
            for (var r = 0; r < e.graphicsLayerIds.length; r++) {
                n = e.getLayer(e.graphicsLayerIds[r]);
                if (n.name == t) return n
            }
            return null
        },
        getWebMapExtentFromItem: function (e) {
            if (!e.extent || e.extent.length != 2) return null;
            var t = r.geographicToWebMercator(new i(e.extent[0][0], e.extent[0][1])),
                n = r.geographicToWebMercator(new i(e.extent[1][0], e.extent[1][1]));
            return new s({
                xmax: n.x,
                xmin: t.x,
                ymax: n.y,
                ymin: t.y,
                spatialReference: {
                    wkid: 102100
                }
            })
        },
        serializeExtentToItem: function (e) {
            if (!e || !e.spatialReference) return null;
            var t = e.spatialReference.wkid == 4326 ? e : r.webMercatorToGeographic(e);
            return [[Math.round(t.xmin * 1e4) / 1e4, Math.round(t.ymin * 1e4) / 1e4], [Math.round(t.xmax * 1e4) / 1e4, Math.round(t.ymax * 1e4) / 1e4]]
        },
        serializedExtentEquals: function (e, t) {
            return e && t && e.length == t.length && e.length == 2 && e[0][0] == t[0][0] && e[0][1] == t[0][1] && e[1][0] == t[1][0] && e[1][1] == t[1][1]
        },
        cloneLayer: function (e) {
            return e.url && e.url.match(/virtualearth\./) ? new a("http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer") : e instanceof a ? new a(e.url) : e instanceof u ? new u(e.url) : e.id == "OpenStreetMap" ? new f : new a("http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer")
        },
        extentToPolygon: function (e) {
            var t = new o(e.spatialReference);
            return t.addRing([
                [e.xmin, e.ymin],
                [e.xmin, e.ymax],
                [e.xmax, e.ymax],
                [e.xmax, e.ymin],
                [e.xmin, e.ymin]
            ]), t
        },
        getFirstLevelWhereExtentFit: function (e, t) {
            var n = t.width,
                r = t.height,
                i = t._params.lods;
            for (var s = i.length - 1; s >= 0; s--) if (n * t._params.lods[s].resolution > e.getWidth() && r * t._params.lods[s].resolution > e.getHeight()) return s;
            return -1
        },
        getPortalUser: function () {
            var t = e("esri_auth");
            if (!t) return;
            t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'));
            if (t.urlKey && t.customBaseUrl && (t.urlKey + "." + t.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) return;
            return t ? t.email : null
        },
        getPortalRole: function () {
            var t = e("esri_auth");
            if (!t) return;
            t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'));
            if (t.urlKey && t.customBaseUrl && (t.urlKey + "." + t.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) return;
            return t ? t.role : null
        },
        getWebmapViewerLinkFromSharingURL: function (e) {
            var t = e.split("/sharing/")[0];
            return t + "/home/webmap/viewer.html"
        },
        getItemURL: function (e, t) {
            var n = e.split("/sharing/")[0];
            return n + "/home/item.html?id=" + t
        },
        browserSupportAttachementUsingFileReader: function () {
            return !!window.FileReader && !! window.FormData && !! this.browserSupportCanvas() && !! window.Blob
        },
        browserSupportCanvas: function () {
            var e = document.createElement("canvas");
            return !!e.getContext && !! e.getContext("2d")
        },
        browserSupportFileReaderBinaryString: function () {
            if (!window.FileReader) return !1;
            var e = new window.FileReader;
            return "readAsArrayBuffer" in e
        },
        getBinaryStringFromArrayBuffer: function (e) {
            var t = new Uint8Array(e),
                n = "";
            for (var r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
            return n
        },
        addCSSRule: function (e) {
            if (t("ie") <= 8) return;
            $("<style>").prop("type", "text/css").html(e).appendTo("head")
        },
        hex2rgba: function (e, t) {
            var n = e.replace("#", "").match(/../g),
                r = [],
                i;
            for (i in n) r.push(parseInt(n[i], 16));
            return r.push(t), "rgba(" + r.join() + ")"
        }
    }
}), define("storymaps/maptour/core/Config", [], function () {
    return {
        loadAllWebmapOnInit: !1,
        checkConfigFileIsOK: function () {
            return APPCFG && APPCFG.COLORS && APPCFG.COLORS.length == 3 && APPCFG.POPUP_BACKGROUND_COLOR && APPCFG.POPUP_BORDER_COLOR && APPCFG.POPUP_ARROW_COLOR && APPCFG.COLOR_SCHEMES && APPCFG.DEFAULT_SHARING_URL && APPCFG.DEFAULT_PROXY_URL && APPCFG.MINIMUM_MAP_WIDTH && APPCFG.TIMEOUT_VIEWER_LOAD && APPCFG.TIMEOUT_VIEWER_REQUEST && APPCFG.TIMEOUT_BUILDER_REQUEST && APPCFG.MAX_ALLOWED_POINTS && APPCFG.PIN_CFG && APPCFG.PIN_DEFAULT_CFG && APPCFG.PIN_CFG[APPCFG.PIN_DEFAULT_CFG] && APPCFG.ICON_CFG && APPCFG.EMBED !== undefined && APPCFG.HEADER_LOGO_URL !== undefined && APPCFG.HEADER_LOGO_TARGET !== undefined && APPCFG.HEADER_LINK_TEXT !== undefined && APPCFG.HEADER_LINK_URL !== undefined && APPCFG.HEADER_SOCIAL && APPCFG.FIELDS_CANDIDATE && APPCFG.CORS_SERVER && APPCFG.AUTHORIZED_IMPORT_SOURCE && APPCFG.FLICKR_API_KEY && APPCFG.FACEBOOK_APP_ID
        }
    }
}), define("storymaps/maptour/core/FieldConfig", [], function () {
    return function (t) {
        var n = this,
            r = t ? t.fieldID : null,
            i = t ? t.fieldName : null,
            s = t ? t.fieldDescription : null,
            o = t ? t.fieldURL : null,
            u = t ? t.fieldThumb : null,
            a = t ? t.fieldIconColor : null;
        this.setIDField = function (e) {
            r = e
        }, this.getIDField = function () {
            return r
        }, this.setNameField = function (e) {
            i = e
        }, this.getNameField = function () {
            return i
        }, this.setDescriptionField = function (e) {
            s = e
        }, this.getDescriptionField = function () {
            return s
        }, this.setURLField = function (e) {
            o = e
        }, this.getURLField = function () {
            return o
        }, this.setThumbField = function (e) {
            u = e
        }, this.getThumbField = function () {
            return u
        }, this.setIconColorField = function (e) {
            a = e
        }, this.getIconColorField = function () {
            return a
        }, this.allFieldsFound = function () {
            return n.getIDField() !== "" && n.getNameField() !== "" && n.getDescriptionField() !== "" && n.getURLField() !== "" && n.getThumbField() !== "" && n.getIconColorField() !== ""
        }, this.allCriticalFieldsFound = function () {
            return n.getNameField() !== "" && n.getDescriptionField() !== "" && n.getIconColorField() !== ""
        }, this.allWebmapLayerMandatoryFieldsFound = function () {
            return n.getIDField() !== "" && n.getNameField() !== "" && n.getDescriptionField() !== "" && n.getURLField() !== "" && n.getThumbField() !== ""
        }, this.serialize = function () {
            return {
                fieldID: n.getIDField(),
                fieldName: n.getNameField(),
                fieldDescription: n.getDescriptionField(),
                fieldURL: n.getURLField(),
                fieldThumb: n.getThumbField(),
                fieldIconColor: n.getIconColorField()
            }
        }
    }
}), define("storymaps/maptour/core/WebApplicationData", ["storymaps/maptour/core/FieldConfig", "dojo/_base/lang"], function (e, t) {
    var n = {},
        r = {
            values: {}
        };
    return {
        set: function (i) {
            n = t.clone(i);
            if (!i || !i.values) return;
            i.values.fieldsOverride && (i.values.fieldsOverride = new e(i.values.fieldsOverride)), r = i
        },
        get: function () {
            var e = t.clone(r);
            return e.values.fieldsOverride && (e.values.fieldsOverride = e.values.fieldsOverride.serialize()), e.values.sourceLayer = app.data.getSourceLayer().id, e.values.template || (e.values.template = "Map Tour"), e.values.templateCreation || (e.values.templateCreation = version), e.values.templateVersion = version, e
        },
        getBlank: function () {
            return {
                values: {
                    webmap: n.values.webmap
                }
            }
        },
        cleanWebAppAfterInitialization: function () {
            var e = !1,
                t = [n, r];
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s && s.values && (s.values.order && (delete s.values.order, e = !0), s.values.firstRecordAsIntro && (delete s.values.firstRecordAsIntro, e = !0), s.values.fieldsOverride && (delete s.values.fieldsOverride, e = !0), s.values.sourceLayer && (delete s.values.sourceLayer, e = !0))
            }
            return e
        },
        restoreOriginalData: function () {
            this.set(n)
        },
        updateAfterSave: function () {
            n = t.clone(r)
        },
        getWebmap: function () {
            return r.values.webmap
        },
        getSourceLayer: function () {
            return r.values.sourceLayer
        },
        getTitle: function () {
            return r.values.title
        },
        setTitle: function (e) {
            r.values.title = e
        },
        getSubtitle: function () {
            return r.values.subtitle
        },
        setSubtitle: function (e) {
            r.values.subtitle = e
        },
        setFieldsOverride: function (t, n) {
            t ? r.values.fieldsOverride = new e(n) : r.values.fieldsOverride && delete r.values.fieldsOverride
        },
        getFieldsOverride: function () {
            return r.values.fieldsOverride
        },
        getTourPointOrder: function () {
            return r.values.order
        },
        setTourPointOrder: function (e) {
            r.values.order = [];
            for (var t = 0; t < e.length; t++) r.values.order.push({
                id: e[t].id,
                visible: e[t].visible
            })
        },
        setColors: function (e, t, n) {
            r.values.colors = e + ";" + t + ";" + n
        },
        getColors: function () {
            return r.values.colors ? r.values.colors.split(";") : APPCFG.COLORS
        },
        setLogoURL: function (e) {
            r.values.logoURL = e
        },
        getLogoURL: function () {
            return r.values.logoURL
        },
        setLogoTarget: function (e) {
            r.values.logoTarget = e
        },
        getLogoTarget: function () {
            return r.values.logoTarget
        },
        setZoomLevel: function (e) {
            r.values.zoomLevel = e
        },
        getZoomLevel: function () {
            return r.values.zoomLevel
        },
        getLayout: function () {
            return r.values.layout
        },
        setLayout: function (e, t) {
            r.values.layout = e, r.values.placardPosition = t
        },
        getPlacardPosition: function () {
            return r.values.placardPosition
        },
        getHeaderLinkText: function () {
            return r.values.headerLinkText
        },
        getHeaderLinkURL: function () {
            return r.values.headerLinkURL
        },
        setHeaderLink: function (e, t) {
            r.values.headerLinkText = e, r.values.headerLinkURL = t
        },
        getFirstRecordAsIntro: function () {
            return r.values.firstRecordAsIntro
        },
        setFirstRecordAsIntro: function (e) {
            r.values.firstRecordAsIntro = e
        },
        getLayerId: function () {
            return r.values.layerId
        },
        setLayerId: function (e) {
            r.values.layerId = e
        },
        getSocial: function () {
            return r.values.social
        },
        setSocial: function (e) {
            r.values.social = e
        },
        getTemplateVersion: function () {
            return r.values.templateVersion
        },
        getTemplateCreation: function () {
            return r.values.templateCreation
        },
        setTemplateCreation: function () {
            r.values.templateCreation = version
        },
        setDisableVideo: function (e) {
            r.values.disableVideo = e
        },
        getDisableVideo: function () {
            return r.values.disableVideo
        }
    }
}), define("storymaps/maptour/core/MapTourHelper", ["storymaps/maptour/core/WebApplicationData", "esri/symbols/PictureMarkerSymbol"], function (e, t) {
    return {
        isOnMobileView: function () {
            return $("#headerMobile").css("display") == "block"
        },
        isSupportedImgExt: function (e) {
            return /((\.jp(e)?g)|(.png)|(.gif)|(.bmp))$/i.test(e)
        },
        mediaIsSupportedImg: function (t) {
            return t ? t.indexOf("#isVideo") != -1 ? !1 : /((\.jp(e)?g)|(.png)|(.gif)|(.bmp))$/i.test(t) || t.indexOf("#isImage") > -1 || !e.getTemplateCreation() || e.getDisableVideo() || app.data.sourceIsFS() : !0
        },
        validateImageURL: function (e) {
            return /^(((ftp|http|https):(\/\/))|(\/\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?((\.jp(e)?g)|(.png)|(.gif)|(.bmp))$/i.test(e) || e.indexOf("#isImage") > -1
        },
        validateURL: function (e) {
            return /^(((ftp|http|https):(\/\/))|(\/\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i.test(e)
        },
        getNotFoundMedia: function () {
            return document.location.protocol + "//" + document.location.host + document.location.pathname.split("/").slice(0, -1).join("/") + "/resources/icons/picture-not-available.png"
        },
        getSymbolUrl: function (e, t) {
            e = e ? ("" + e).toLowerCase() : "";
            var n = APPCFG.PIN_CFG[e] || APPCFG.PIN_CFG[APPCFG.PIN_DEFAULT_CFG];
            return n.iconPath + t + ".png"
        },
        getSymbolCss: function (e) {
            e = e ? ("" + e).toLowerCase() : "";
            var t = APPCFG.PIN_CFG[e] || APPCFG.PIN_CFG[APPCFG.PIN_DEFAULT_CFG];
            return t.cssClass
        },
        getSymbolColors: function () {
            var e = [];
            for (var t in APPCFG.PIN_CFG) e.push(t);
            return e
        },
        colorExists: function (e) {
            return e = e ? ("" + e).toLowerCase() : "", APPCFG.PIN_CFG[e] ? !0 : !1
        },
        getDefaultColor: function () {
            return APPCFG.PIN_DEFAULT_CFG
        },
        getSymbolConfig: function (e) {
            return APPCFG.ICON_CFG[e || "normal"]
        },
        getSymbol: function (e, n, r) {
            var i = APPCFG.ICON_CFG[r || "normal"],
                s = new t(this.getSymbolUrl(e, n), i.width, i.height);
            return s.setOffset(i.offsetX, i.offsetY), s
        },
        getSymbolMobileClip: function () {
            return APPCFG.ICON_CFG.normal.clipRules
        },
        isModernLayout: function () {
            return $("body").hasClass("modern-layout")
        }
    }
}), define("storymaps/maptour/core/TourPointAttributes", ["storymaps/maptour/core/WebApplicationData", "dojo/_base/lang", "storymaps/maptour/core/MapTourHelper"], function (e, t, n) {
    var r = null;
    return function (s, o, u, a) {
        function d(e) {
            var t = app.data.getSourceLayer();
            return t.credential && t.credential.token ? e + "?token=" + t.credential.token : e
        }
        var f = t.clone(s.attributes),
            l = s,
            c = o,
            h = u,
            p = !0;
        if (!r || a && !r.allFieldsFound()) r = app.data.electFields(f, c != null);
        f && r && (this[r.getIDField()] = f[r.getIDField()]), this.getID = function () {
            return f && r ? f[r.getIDField()] : null
        }, this.getName = function () {
            if (!f || !r) return null;
            var t = e.getFieldsOverride(),
                n = t ? t.getNameField() : r.getNameField();
            return f[n] || ""
        }, this.getDescription = function () {
            if (!f || !r) return null;
            var t = e.getFieldsOverride(),
                n = t ? t.getDescriptionField() : r.getDescriptionField();
            return f[n] || ""
        }, this.getColor = function () {
            if (!f || !r) return null;
            var t = e.getFieldsOverride(),
                n = t ? t.getIconColorField() : r.getIconColorField();
            return f[n] || ""
        }, this.getURL = function () {
            if (!f || !r) return;
            if (c) return c;
            var t = e.getFieldsOverride(),
                i = t ? t.getURLField() ? t.getURLField() : r.getURLField() : r.getURLField();
            return d(f[i]) || n.getNotFoundMedia()
        }, this.setURL = function (t) {
            if (c) c = t;
            else {
                var n = e.getFieldsOverride(),
                    i = n ? n.getURLField() ? n.getURLField() : r.getURLField() : r.getURLField();
                f[i] = t
            }
        }, this.getThumbURL = function () {
            if (!f || !r) return;
            if (h) return h;
            var t = e.getFieldsOverride(),
                i = t ? t.getThumbField() ? t.getThumbField() : r.getThumbField() : r.getThumbField();
            return d(f[i]) || n.getNotFoundMedia()
        }, this.setThumbURL = function (t) {
            if (h) h = t;
            else {
                var n = e.getFieldsOverride(),
                    i = n ? n.getThumbField() ? n.getThumbField() : r.getThumbField() : r.getThumbField();
                f[i] = t
            }
        }, this.getOriginalGraphic = function () {
            return l
        }, this.getIDField = function () {
            return r.getIDField()
        }, this.updateNameAndDescription = function (t, n) {
            var i = e.getFieldsOverride(),
                s = i ? i.getNameField() : r.getNameField(),
                o = i ? i.getDescriptionField() : r.getDescriptionField();
            f[s] = t, f[o] = n
        }, this.setColor = function (t) {
            var n = e.getFieldsOverride(),
                i = n ? n.getIconColorField() : r.getIconColorField();
            f[i] = t
        }, this.hasBeenUpdated = function () {
            var t = e.getFieldsOverride(),
                n = t ? t.getNameField() : r.getNameField(),
                i = t ? t.getDescriptionField() : r.getDescriptionField(),
                s = t ? t.getIconColorField() : r.getIconColorField(),
                o = t ? t.getURLField() : r.getURLField(),
                u = t ? t.getThumbField() : r.getThumbField();
            return f[n] != l.attributes[n] || f[i] != l.attributes[i] || f[s] != l.attributes[s] || app.data.sourceIsNotFSAttachments() && f[o] != l.attributes[o] || f[u] != l.attributes[u]
        }, this.commitUpdate = function () {
            var t = e.getFieldsOverride(),
                n = t ? t.getNameField() : r.getNameField(),
                i = t ? t.getDescriptionField() : r.getDescriptionField(),
                s = t ? t.getIconColorField() : r.getIconColorField(),
                o = t ? t.getURLField() : r.getURLField(),
                u = t ? t.getThumbField() : r.getThumbField();
            l.attributes[n] = f[n], l.attributes[i] = f[i], l.attributes[s] = f[s], app.data.sourceIsNotFSAttachments() && (l.attributes[o] = f[o], l.attributes[u] = f[u])
        }, this.restoreOriginal = function () {
            f = t.clone(l.attributes)
        }, this.getFieldsConfig = function () {
            return r
        }, this.getTourVisibility = function () {
            return p
        }, this.setTourVisibility = function (e) {
            p = e
        }
    }
}), define("storymaps/maptour/builder/FeatureServiceManager", ["esri/request"], function (e) {
    return {
        restoreFS: function () {
            $.each(app.data.getTourPoints(!0), function (e, t) {
                t.hasBeenUpdated() && !app.data.hasBeenAdded(t) && t.restoreOriginal()
            })
        },
        saveFS: function (e, t) {
            var n = app.data.getAddedPoints(),
                r = [],
                i = app.data.getDroppedPointsGraphics();
            $.each(app.data.getTourPoints(!0), function (e, t) {
                t.hasBeenUpdated() && r.push(t.getUpdatedFeature())
            }), n.length > 0 || r.length > 0 || i.length > 0 ? this.fsApplyEdits(app.data.getSourceLayer(), n, r, i, e, t) : e()
        },
        fsApplyEdits: function (e, t, n, r, i, s) {
            var o = e.applyEdits(t, n, r);
            o.then(i, s)
        },
        fsAddAttachment: function (e, t, n, r, i) {
            e.addAttachment(t, document.getElementById(n), r, i)
        },
        addFSNewTourPointUsingData: function (e, t, n, r) {
            var i = this;
            this.fsApplyEdits(app.data.getSourceLayer(), [e], null, null, function (e) {
                !e || !e[0] || !e[0].success ? r(!1) : i.uploadPictureAndThumbnailUsingData(e[0].objectId, t, n, r)
            }, function () {
                r(!1)
            })
        },
        addTemporaryTourPointUsingForm: function (e, t, n) {
            var r = this;
            this.fsApplyEdits(app.data.getSourceLayer(), [e], null, null, function (e) {
                !e || !e[0] || !e[0].success ? n(!1) : r.uploadPictureUsingForm(e[0].objectId, t, n)
            }, function () {
                n(!1)
            })
        },
        saveTemporaryTourPointUsingForm: function (e, t, n, r) {
            var i = this;
            this.fsApplyEdits(app.data.getSourceLayer(), null, [t], null, function () {
                i.uploadPictureUsingForm(e, n, r)
            }, function () {
                r(!1)
            })
        },
        changePicAndThumbUsingData: function (e, t, n, r) {
            var i = this;
            this.deleteAllAttachments(e, function (s) {
                s ? i.uploadPictureAndThumbnailUsingData(e, t, n, r) : r(!1)
            })
        },
        changeThumbnailUsingData: function (e, t, n) {
            var r = this;
            this.deleteThumbnailAttachment(e, function (i) {
                i ? r.uploadThumbnailUsingData(e, t, n) : n(!1)
            })
        },
        changePicAndThumbUsingForm: function (e, t, n, r) {
            var i = this;
            this.deleteAllAttachments(e, function (s) {
                s ? i.uploadPictureAndThumbnailUsingForm(e, t, n, r) : r(!1)
            })
        },
        deleteAllAttachments: function (e, t) {
            app.data.getSourceLayer().queryAttachmentInfos(e, function (n) {
                var r = !1;
                $.each(n, function (n, i) {
                    if (r) return;
                    app.data.getSourceLayer().deleteAttachments(e, [i.id], function () {}, function () {
                        r = !0, t(!1)
                    })
                }), r ? t(!1) : t(!0)
            }, function () {
                t(!1)
            })
        },
        deleteThumbnailAttachment: function (e, t) {
            app.data.getSourceLayer().queryAttachmentInfos(e, function (n) {
                var r = [];
                $.each(n, function (e, t) {
                    r.push(t.id)
                }), r = r.sort().slice(1);
                var i = !1;
                $.each(r, function (t, n) {
                    if (i) return;
                    app.data.getSourceLayer().deleteAttachments(e, [n], function () {}, function () {
                        i = !0
                    })
                }), i ? t(!1) : t(!0)
            }, function () {
                t(!1)
            })
        },
        uploadPictureAndThumbnailUsingData: function (e, t, n, r) {
            var i = this,
                s = this.uploadFeatureAttachmentFromData(app.data.getSourceLayer().url, e, t, "picture.jpg"),
                o = function () {
                    r(!1)
                };
            s.then(function (t) {
                var s = t.addAttachmentResult.objectId,
                    u = i.uploadFeatureAttachmentFromData(app.data.getSourceLayer().url, e, n, "thumbnail.jpg");
                u.then(function (t) {
                    var n = t.addAttachmentResult.objectId;
                    r(!0, e, s, n)
                }, o)
            }, o)
        },
        uploadThumbnailUsingData: function (e, t, n) {
            var r = this.uploadFeatureAttachmentFromData(app.data.getSourceLayer().url, e, t, "thumbnail.jpg"),
                i = function () {
                    n(!1)
                };
            r.then(function (t) {
                var r = t.addAttachmentResult.objectId;
                n(!0, e, r)
            }, i)
        },
        uploadPictureAndThumbnailUsingForm: function (e, t, n, r) {
            var i = this;
            this.uploadPictureUsingForm(e, t, function (t, s, o) {
                t ? i.uploadPictureUsingForm(e, n, function (e, t, n) {
                    e ? r(!0, s, o, n) : r(!1)
                }) : r(!1)
            })
        },
        uploadFeatureAttachmentFromData: function (t, n, r, i) {
            var s = new FormData;
            return s.append("attachment", this.dataURItoBlob(r), i), s.append("f", "json"), e({
                url: t + "/" + n + "/addAttachment",
                form: s
            }, {
                usePost: !0
            })
        },
        dataURItoBlob: function (e) {
            var t = atob(e.split(",")[1]),
                n = new ArrayBuffer(t.length),
                r = new Uint8Array(n);
            for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
            try {
                return new Blob([n], {
                    type: "image/jpeg"
                })
            } catch (s) {
                window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                var o = new BlobBuilder;
                return o.append(n), o.getBlob({
                    type: "image/jpeg"
                })
            }
        },
        uploadPictureUsingForm: function (e, t, n) {
            this.fsAddAttachment(app.data.getSourceLayer(), e, t, function (t) {
                !t.success || t.attachmentId == null ? n(!1) : n(!0, e, t.attachmentId)
            }, function () {
                n(!1)
            })
        }
    }
}), define("storymaps/utils/WebMapHelper", ["esri/request", "esri/renderers/jsonUtils", "dojo/Deferred", "dojo/_base/lang", "dojo/_base/array"], function (e, t, n, r, i) {
    return {
        findLayerTypeById: function (e, t) {
            var n = "";
            return i.forEach(e.operationalLayers, function (e) {
                e.id == t && (n = e.type)
            }), n
        },
        saveWebmap: function (e, t) {
            var i = new n;
            this.prepareWebmapItemForCloning(e);
            var s = r.clone(e.item),
                o = r.clone(e.itemData),
                u = t.getPortalUser(),
                a = this.getSharingURL(t) + "content/users/" + u.credential.userId + (s.ownerFolder ? "/" + s.ownerFolder : "") + "/addItem",
                f = {
                    item: s.item,
                    title: s.title,
                    tags: s.tags,
                    extent: JSON.stringify(s.extent),
                    text: JSON.stringify(o),
                    type: s.type,
                    typeKeywords: s.typeKeywords,
                    overwrite: !0,
                    thumbnailURL: s.thumbnailURL
                };
            return this.request(a, f, !0).then(function () {
                i.resolve()
            }, function () {
                i.reject()
            }), i
        },
        serializeGraphicsLayerToFeatureCollection: function (e) {
            return this._serializeGraphicsLayerToFeatureCollection(e, e.visible, e.graphics)
        },
        _serializeGraphicsLayerToFeatureCollection: function (e, t, n) {
            var r = {
                layers: [{
                    featureSet: {
                        features: [],
                        geometryType: e.geometryType
                    },
                    id: e.id,
                    layerDefinition: {
                        geometryType: e.geometryType,
                        objectIdField: e.objectIdField,
                        name: e.name,
                        type: e.type,
                        typeIdField: e.typeIdField,
                        drawingInfo: {
                            renderer: {
                                type: "simple",
                                symbol: {
                                    type: "esriPMS",
                                    url: "http://static.arcgis.com/images/Symbols/Basic/RedSphere.png",
                                    imageData: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS4xTuc4+QAAB3VJREFUeF7tmPlTlEcexnve94U5mANQbgQSbgiHXHINlxpRIBpRI6wHorLERUmIisKCQWM8cqigESVQS1Kx1piNi4mW2YpbcZONrilE140RCTcy3DDAcL/zbJP8CYPDL+9Ufau7uqb7eZ7P+/a8PS8hwkcgIBAQCAgEBAICAYGAQEAgIBAQCAgEBAICAYGAQEAgIBAQCDx/AoowKXFMUhD3lQrioZaQRVRS+fxl51eBTZUTdZ41U1Rox13/0JF9csGJ05Qv4jSz/YPWohtvLmSKN5iTGGqTm1+rc6weICOBRbZs1UVnrv87T1PUeovxyNsUP9P6n5cpHtCxu24cbrmwKLdj+osWiqrVKhI0xzbmZ7m1SpJ+1pFpvE2DPvGTomOxAoNLLKGLscZYvB10cbYYjrJCb7A5mrxleOBqim+cWJRakZY0JfnD/LieI9V1MrKtwokbrAtU4Vm0A3TJnphJD4B+RxD0u0LA7w7FTE4oprOCMbklEGNrfdGf4IqnQTb4wc0MFTYibZqM7JgjO8ZdJkpMln/sKu16pHZGb7IfptIWg389DPp9kcChWODoMuDdBOhL1JgpisbUvghM7AqFbtNiaFP80RLnhbuBdqi0N+1dbUpWGde9gWpuhFi95yL7sS7BA93JAb+Fn8mh4QujgPeTgb9kAZf3Apd2A+fXQ38yHjOHozB1IAJjOSEY2RSIwVUv4dd4X9wJccGHNrJ7CYQ4GGjLeNNfM+dyvgpzQstKf3pbB2A6m97uBRE0/Ergcxr8hyqg7hrwn0vAtRIKIRX6Y2pMl0RhIj8co9nBGFrvh55l3ngU7YObng7IVnFvGS+BYUpmHziY/Ls2zgP9SX50by/G9N5w6I+ogYvpwK1SoOlHQNsGfWcd9Peqof88B/rTyzF9hAIopAByQzC0JQB9ST5oVnvhnt+LOGsprvUhxNIwa0aY7cGR6Cp7tr8+whkjawIxkRWC6YJI6N+lAKq3Qf/Tx+B77oGfaQc/8hB8w2Xwtw9Bf3kzZspXY/JIDEbfpAB2BKLvVV90Jvjgoac9vpRxE8kciTVCBMMkNirJ7k/tRHyjtxwjKV4Yp3t/6s+R4E+/DH3N6+BrS8E314Dvvg2+/Sb4hxfBf5sP/up2TF3ZhonK1zD6dhwGdwail26DzqgX8MRKiq9ZBpkSkmeYOyPM3m9Jjl+1Z9D8AgNtlAq6bZ70qsZi+q+bwV/7I/hbB8D/dAr8Axq89iz474p/G5++koHJy1sx/lkGdBc2YjA3HF0rHNHuboomuQj/5DgclIvOGCGCYRKFFuTMV7YUAD3VDQaLMfyqBcZORGPy01QKYSNm/rYV/Nd/Av9NHvgbueBrsjDzRQamKKDxT9Kgq1iLkbIUDOSHoiNcgnYHgnYZi+9ZExSbiSoMc2eE2flKcuJLa4KGRQz6/U0wlGaP0feiMH4uFpMXEjBVlYjp6lWY+SSZtim0kulYMiYuJEJXuhTDJ9UYPByOvoIwdCxfgE4bAo0Jh39xLAoVpMwIEQyTyFCQvGpLon9sJ0K3J4OBDDcMH1dj9FQsxkrjMPFRPCbOx2GyfLal9VEcxstioTulxjAFNfROJPqLl6Bnfyg6V7ugz5yBhuHwrZjBdiU5YJg7I8wOpifAKoVIW7uQ3rpOBH2b3ekVjYT2WCRG3o+mIGKgO0OrlIaebU/HYOQDNbQnojB4NJyGD0NPfjA0bwTRE6Q7hsUcWhkWN8yZqSQlWWGECAZLmJfJmbrvVSI8taK37xpbdB/wQW8xPee/8xIGjvlj8IQ/hk4G0JbWcX8MHPVDX4kveoq8ocn3xLM33NCZRcPHOGJYZIKfpQyq7JjHS6yJjcHujLHADgkpuC7h8F8zEVqXSNC2awE69lqhs8AamkO26HrbDt2H7dBVQov2NcW26CiwQtu+BWjdY4n2nZboTbfCmKcCnRyDO/YmyLPnDlHvjDH8G6zhS9/wlEnYR7X00fWrFYuWdVI0ZpuhcbcczW/R2qdAcz6t/bRov4mONeaaoYl+p22rHF0bVNAmKtBvweIXGxNcfFH8eNlC4m6wMWMusEnKpn5hyo48pj9gLe4SNG9QoGGLAk8z5XiaJUd99u8122/IpBA2K9BGg2vWWKAvRYVeLzEa7E1R422m2+MsSTem97nSYnfKyN6/mzATv7AUgqcMrUnmaFlLX3ysM0fj+t/b5lQLtK22QEfyAmiSLKFZpUJ7kBRPXKW4HqCYynWVHKSG2LkyZex1uO1mZM9lKem9Tx9jjY5iNEYo0bKMhn7ZAu0r6H5PpLXCAq0rKJClSjSGynE/QIkrQYqBPe6S2X+AJsY2Ped6iWZk6RlL0c2r5szofRsO9R5S1IfQLRCpQL1aifoYFerpsbkuTImaUJXuXIDiH6/Ys8vm3Mg8L2i20YqsO7fItKLcSXyn0kXccclVqv3MS6at9JU/Ox+ouns+SF6Z4cSupz7l8+z1ucs7LF1AQjOdxfGZzmx8Iu1TRcfnrioICAQEAgIBgYBAQCAgEBAICAQEAgIBgYBAQCAgEBAICAQEAv8H44b/6ZiGvGAAAAAASUVORK5CYII=",
                                    contentType: "image/png",
                                    width: 15,
                                    height: 15
                                }
                            }
                        },
                        fields: [],
                        types: [],
                        capabilities: e.capabilities
                    },
                    layerObject: null,
                    opacity: e.opacity,
                    visibility: t
                }],
                showLegend: !0
            };
            return $.each(e.fields, function (e, t) {
                r.layers[0].layerDefinition.fields.push({
                    name: t.name,
                    alias: t.alias,
                    type: t.type,
                    editable: t.editable,
                    domain: null
                })
            }), $.each(n, function (e, t) {
                r.layers[0].featureSet.features.push({
                    attributes: t.attributes,
                    geometry: t.geometry
                })
            }), r
        },
        request: function (t, n, i, s) {
            var o = i || !1;
            return n = n || {}, s = s || "", e({
                url: t,
                content: r.mixin(n, {
                    f: "json",
                    token: s
                }),
                callbackParamName: "callback",
                handleAs: "json"
            }, {
                usePost: o
            })
        },
        prepareWebmapItemForCloning: function (e) {
            i.forEach(e.itemData.baseMap.baseMapLayers, function (e) {
                delete e.errors, delete e.layerObject, delete e.resourceInfo
            }), i.forEach(e.itemData.operationalLayers, function (e) {
                delete e.errors, delete e.layerObject, delete e.resourceInfo, e.featureCollection && e.featureCollection.layers && i.forEach(e.featureCollection.layers, function (e) {
                    delete e.layerObject
                }), e.featureCollection && e.featureCollection.featureSet && e.featureCollection.featureSet.features && i.forEach(e.featureCollection.featureSet.features, function (e) {
                    delete e._shape, delete e._graphicsLayer
                }), e.type == "CSV" && e.featureCollection && delete e.featureCollection, i.forEach(e.layers, function (e) {
                    delete e.drawingInfo, e.layerDefinition && e.layerDefinition.drawingInfo && e.layerDefinition.drawingInfo.renderer && (e.layerDefinition.drawingInfo.renderer = t.fromJson(e.layerDefinition.drawingInfo.renderer).toJson())
                }), e.layerDefinition && e.layerDefinition.drawingInfo && e.layerDefinition.drawingInfo.renderer && (e.layerDefinition.drawingInfo.renderer = t.fromJson(e.layerDefinition.drawingInfo.renderer).toJson())
            })
        },
        getSharingURL: function (e) {
            var t = e.portalUrl;
            return t.match("/sharing/rest/$") ? t = t.split("/").slice(0, -2).join("/") + "/" : t.match("/sharing/rest$") ? t = t.split("/").slice(0, -1).join("/") + "/" : t.match("/sharing$") && (t += "/"), t
        }
    }
}), define("storymaps/maptour/core/TourData", ["storymaps/maptour/core/WebApplicationData", "storymaps/maptour/core/TourPointAttributes", "storymaps/maptour/core/FieldConfig", "storymaps/maptour/builder/FeatureServiceManager", "storymaps/utils/Helper", "storymaps/maptour/core/MapTourHelper", "storymaps/utils/WebMapHelper", "esri/layers/FeatureLayer", "esri/graphic", "esri/geometry/Point", "dojo/topic"], function (e, t, n, r, i, s, o, u, a, f, l) {
    return function () {
        function k(n, r) {
            var i = new a(n, null, r),
                s = app.data.getSourceLayer()._nextId;
            i.attributes[h.getFieldsConfig().getIDField()] = s;
            var o = new a(i.geometry, null, new t(i)),
                u = {
                    id: s,
                    visible: !0
                };
            g.push(o), app.data.getTourLayer().add(o), w.push(o.attributes.getID()), y = y.concat([u]), e.setTourPointOrder(y), app.data.getSourceLayer()._nextId++
        }
        function L(e, t, n, r) {
            var i = app.data.getSourceLayer().url + "/" + e + "/attachments/" + t,
                s = app.data.getSourceLayer().url + "/" + e + "/attachments/" + n,
                o = h.getCurrentAttributes() || h.getIntroData().attributes;
            if (!o) {
                r(!1);
                return
            }
            var u = app.data.getSourceLayer();
            !h.isFSWithURLFields() && u.credential && u.credential.token && (i += "?token=" + u.credential.token, s += "?token=" + u.credential.token), o.setURL(i), o.setThumbURL(s);
            if (h.isFSWithURLFields()) {
                var a = h.getFieldsConfig(),
                    f = h.getFieldsConfig(!0),
                    c = h.getCurrentGraphic() || h.getIntroData(),
                    p = c.getUpdatedFeature();
                p.attributes[a.getURLField() || f.getURLField()] = i, p.attributes[a.getThumbField() || f.getThumbField()] = s, _(p, function () {
                    r(!0), l.publish("CORE_UPDATE_UI", {
                        editFirstRecord: !h.getCurrentAttributes()
                    })
                }, function () {
                    r(!1)
                })
            } else r(!0), l.publish("CORE_UPDATE_UI", {
                editFirstRecord: !h.getCurrentAttributes()
            })
        }
        function A(e, t, n) {
            var r = app.data.getSourceLayer().url + "/" + e + "/attachments/" + t,
                i = h.getCurrentAttributes() || h.getIntroData().attributes;
            if (!i) {
                n(!1);
                return
            }
            var s = app.data.getSourceLayer();
            !h.isFSWithURLFields() && s.credential && s.credential.token && (r += "?token=" + s.credential.token), i.setThumbURL(r);
            if (h.isFSWithURLFields()) {
                var o = h.getFieldsConfig(),
                    u = h.getFieldsConfig(!0),
                    a = h.getCurrentGraphic() || h.getIntroData(),
                    f = a.getUpdatedFeature();
                f.attributes[o.getThumbField() || u.getThumbField()] = r, _(f, function () {
                    n(!0), l.publish("CORE_UPDATE_UI", {
                        editFirstRecord: !h.getCurrentAttributes()
                    })
                }, function () {
                    n(!1)
                })
            } else n(!0), l.publish("CORE_UPDATE_UI", {
                editFirstRecord: !h.getCurrentAttributes()
            })
        }
        function O(e, n, r, i, s, o) {
            var u = h.getFieldsConfig(),
                f = h.getFieldsConfig(!0),
                l = app.data.getSourceLayer().url + "/" + e + "/attachments/" + r,
                c = app.data.getSourceLayer().url + "/" + e + "/attachments/" + i;
            n.attributes[u.getIDField()] = e;
            if (h.isFSWithURLFields()) n.attributes[u.getURLField() || f.getURLField()] = l, n.attributes[u.getThumbField() || f.getThumbField()] = c, _(new a(n.geometry, null, n.attributes), function () {
                n.attributes = new t(n), M(e, n, s)
            }, o);
            else {
                var p = app.data.getSourceLayer();
                p.credential && p.credential.token && (l += "?token=" + p.credential.token, c += "?token=" + p.credential.token), n.attributes = new t(n, l, c), M(e, n, s)
            }
        }
        function M(t, n, r) {
            g.push(n);
            var i = {
                id: t,
                visible: !0
            };
            app.data.getTourLayer().add(n), e.setTourPointOrder(y.concat(i)), B(P()), app.data.setCurrentPointByGraphic(n), l.publish("BUILDER_INCREMENT_COUNTER", 1), l.publish("CORE_UPDATE_UI"), r()
        }
        function _(e, t, n) {
            r.fsApplyEdits(app.data.getSourceLayer(), [], [e], [], t, n)
        }
        function D() {
            var e = [];
            return $.each(g, function (t, n) {
                e.push({
                    id: n.attributes.getID(),
                    index: t,
                    order: t,
                    visible: !0
                })
            }), e = e.sort(function (e, t) {
                return e.id - t.id
            }), e
        }
        function P() {
            var t = e.getTourPointOrder();
            return H(t)
        }
        function H(e) {
            var t = [];
            return $.each(g, function (n, r) {
                var i = r.attributes.getID(),
                    s = -1;
                $.each(e, function (e, t) {
                    if (t.id == i) return s = e, !0
                }), s > -1 && t.push({
                    id: i,
                    index: n,
                    order: s,
                    visible: e[s].visible
                })
            }), t = t.sort(function (e, t) {
                return e.order - t.order
            }), t
        }
        function B(t) {
            y = t, b = [], $.each(y, function (e, t) {
                g[t.index].attributes.setTourVisibility(t.visible), b.push(g[t.index])
            }), e.setTourPointOrder(y)
        }
        function j(e, t) {
            for (var n = 0; n < t.length; n++) for (var r in e) if (r.toLowerCase().trim() == t[n].toLowerCase().trim()) return r;
            return ""
        }
        function F(e, t) {
            for (var n = 0; n < t.length; n++) for (var r = 0; r < e.length; r++) if (e[r].name.toLowerCase().trim() == t[n].toLowerCase().trim()) return e[r].name;
            return ""
        }
        function I(e, t) {
            for (var n = 0; n < t.length; n++) for (var r = 0; r < e.length; r++) if (e[r].toLowerCase().trim() == t[n].toLowerCase().trim()) return e[r];
            return ""
        }
        var h = this,
            p = null,
            d = null,
            v = null,
            m = null,
            g = null,
            y = null,
            b = null,
            w = [],
            E = [],
            S = null,
            x = -1,
            T = null,
            N = !1,
            C = !1;
        this.initialExtentHasBeenEdited = !1, this.getWebMapItem = function () {
            return p
        }, this.setWebMapItem = function (e) {
            p = e
        }, this.getAppItem = function () {
            return d || {}
        }, this.setAppItem = function (e) {
            d = e
        }, this.getSourceLayer = function () {
            return v
        }, this.setSourceLayer = function (e) {
            v = e
        }, this.getTourLayer = function () {
            return m
        }, this.setTourLayer = function (e) {
            m = e
        }, this.getTourPoints = function (e) {
            return e ? this.getIntroData() ? [this.getIntroData()].concat(b) : b : $.grep(b, function (e) {
                return e.attributes.getTourVisibility()
            })
        }, this.getOrder = function () {
            return y
        }, this.getAllFeatures = function () {
            var e = $.grep(g, function (e) {
                var t = $.grep(E, function (t) {
                    return t.attributes.getID() == e.attributes.getID()
                });
                return b.indexOf(e) == -1 && !t.length
            });
            return $.each(e, function (e, t) {
                t.attributes.setTourVisibility(!1)
            }), e.length && e[0] == T ? (e = e.slice(1), [T].concat(b).concat(e)) : b.concat(e)
        }, this.setTourPoints = function (t) {
            g = t, !e.getTourPointOrder() || this.sourceIsNotEditable() ? B(D()) : B(P())
        }, this.resetPointsOrderAndHidden = function () {
            B(D())
        }, this.getCurrentGraphic = function () {
            return S
        }, this.getCurrentIndex = function () {
            return x
        }, this.getCurrentAttributes = function () {
            return S ? S.attributes : null
        }, this.getCurrentId = function () {
            return S ? S.attributes.getID() : null
        }, this.setCurrentPointByGraphic = function (e) {
            var t = $.inArray(e, this.getTourPoints(!1));
            l.publish("maptour-point-change-before", x, t), S = e, x = t
        }, this.setCurrentPointByIndex = function (e) {
            l.publish("maptour-point-change-before", x, e), S = this.getTourPoints(!1)[e], x = e
        }, this.setIntroData = function (e) {
            T = e
        }, this.getIntroData = function () {
            return T
        }, this.hasIntroRecord = function () {
            return T != null
        }, this.setIsEditingFirstRecord = function (e) {
            N = e
        }, this.isEditingFirstRecord = function () {
            return N
        }, this.setFirstPointAsIntroRecord = function () {
            var e = this.getTourPoints(!0)[0];
            this.setIntroData(e), b = b.slice(1)
        }, this.restoreIntroRecordAsPoint = function () {
            b.splice(0, null, this.getIntroData()), this.setIntroData(null)
        }, this.updateIntroRecord = function (e, t) {
            T.attributes.updateNameAndDescription(e, t)
        }, this.setMaxAllowedFeatureReached = function (e) {
            C = e
        }, this.getMaxAllowedFeatureReached = function () {
            return C
        }, this.getFeatureIDField = function () {
            return g && g[0] ? g[0].attributes.getIDField() : this.sourceIsFS() ? app.data.getSourceLayer().objectIdField : this.sourceIsWebmap() ? app.data.getSourceLayer().objectIdField || "__OBJECTID" : null
        }, this.getNbPoints = function () {
            return this.getTourPoints(!1).length
        }, this.sourceIsFS = function () {
            return v instanceof u && v.url != null
        }, this.sourceIsWebmap = function () {
            return v instanceof u && v.url == null
        }, this.sourceIsNotFSAttachments = function () {
            return this.sourceIsWebmap() || this.sourceIsFS() && !v.hasAttachments
        }, this.sourceIsNotEditable = function () {
            return v instanceof u && /^csv_/.test(v.id) && o.findLayerTypeById(app.data.getWebMapItem().itemData, v.id) == "CSV"
        }, this.sourceIsEditable = function () {
            return !this.sourceIsNotEditable()
        }, this.hasBeenAdded = function (e) {
            return w.indexOf(e.attributes.getID()) != -1
        }, this.pointsAdded = function () {
            return this.getAddedPoints().length !== 0
        }, this.getAddedPoints = function () {
            var e = [];
            return $.each(g, function (t, n) {
                w.indexOf(n.attributes.getID()) != -1 && e.push(n.attributes.getOriginalGraphic())
            }), e
        }, this.getDroppedPoints = function () {
            return E
        }, this.getDroppedPointsGraphics = function () {
            var e = [];
            return $.each(this.getDroppedPoints(), function (t, n) {
                e.push(n.attributes.getOriginalGraphic())
            }), e
        }, this.userIsAppOwner = function () {
            return app.portal && app.portal.getPortalUser() && app.portal.getPortalUser().username == this.getAppItem().owner || i.getPortalUser() != null && i.getPortalUser() == this.getAppItem().owner
        }, this.userIsOrgaPublisher = function () {
            var e = app.portal ? app.portal.getPortalUser() : null;
            return e && e.orgId && (e.role == "org_admin" || e.role == "org_publisher")
        }, this.addTourPointUsingData = function (e, t, n, i, s, o, u, f) {
            if (e == null || !t || !i || !s || !o) return;
            var l = this.getFieldsConfig(),
                c = {};
            c[l.getNameField()] = t, c[l.getDescriptionField()] = n, c[l.getIconColorField()] = i;
            var h = new a(e, null, c);
            r.addFSNewTourPointUsingData(h, s, o, function (e, t, n, r) {
                e ? O(t, h, n, r, u, f) : f()
            })
        }, this.addTourPointUsingAttributes = function (e, t, n, r, i, s, o) {
            if (e == null || !t || !r || !i || !s) return;
            var u = this.getFieldsConfig(),
                a = {};
            a[u.getNameField()] = t, a[u.getDescriptionField()] = n, a[u.getIconColorField()] = r, a[u.getURLField()] = i, a[u.getThumbField()] = s, k(e, a), B(P()), app.data.setCurrentPointByIndex(this.getTourPoints(!1).length - 1), l.publish("BUILDER_INCREMENT_COUNTER", 1), l.publish("CORE_UPDATE_UI"), o()
        }, this.importTourPoints = function (e) {
            var t = this.getTourPoints(!1).length;
            $.each(e.featureSet.features, function (e, t) {
                k(new f(t.geometry), t.attributes)
            }), B(P()), app.data.setCurrentPointByIndex(t), l.publish("BUILDER_INCREMENT_COUNTER", e.featureSet.features.length), l.publish("CORE_UPDATE_UI")
        }, this.addTemporaryTourPointUsingForm = function (e, t, n) {
            var i = this.getFieldsConfig(),
                s = {};
            s[i.getNameField()] = "", s[i.getDescriptionField()] = "", s[i.getIconColorField()] = "", r.addTemporaryTourPointUsingForm(new a(new f(0, 0), null, s), e, function (e, r, i) {
                e ? t(r, i, app.data.getSourceLayer().url + "/" + r + "/attachments/" + i) : n()
            })
        }, this.saveTemporaryTourPointUsingForm = function (e, t, n, i, s, o, u, f, l) {
            if (e == null || t == null || !n || !s || !u) return;
            var c = this.getFieldsConfig(),
                h = {};
            h[c.getIDField()] = e, h[c.getNameField()] = n, h[c.getDescriptionField()] = i, h[c.getIconColorField()] = s;
            var p = new a(t, null, h);
            r.saveTemporaryTourPointUsingForm(e, p, u, function (e, t, n) {
                e ? O(t, p, o, n, f, l) : l()
            })
        }, this.changeCurrentPointPicAndThumbUsingData = function (e, t, n) {
            var i = this.getCurrentAttributes() || this.getIntroData().attributes;
            if (!i) {
                n(!1);
                return
            }
            r.changePicAndThumbUsingData(i.getID(), e, t, function (e, t, r, i) {
                e ? L(t, r, i, n) : n(!1)
            })
        }, this.changeCurrentPointThumbnailUsingData = function (e, t) {
            var n = this.getCurrentAttributes() || this.getIntroData().attributes;
            if (!n) {
                t(!1);
                return
            }
            r.changeThumbnailUsingData(n.getID(), e, function (e, n, r) {
                e ? A(n, r, t) : t(!1)
            })
        }, this.changeCurrentPointPicAndThumbUsingForm = function (e, t, n) {
            var i = this.getCurrentAttributes() || this.getIntroData().attributes;
            if (!i) {
                n(!1);
                return
            }
            r.changePicAndThumbUsingForm(i.getID(), e, t, function (e, t, r, i) {
                e ? L(t, r, i, n) : n(!1)
            })
        }, this.changeCurrentPointPicURL = function (e, t) {
            var n = h.getCurrentAttributes() || h.getIntroData().attributes;
            e == "picture" ? n.setURL(t) : n.setThumbURL(t), l.publish("BUILDER_INCREMENT_COUNTER", 1), l.publish("CORE_UPDATE_UI", {
                editFirstRecord: !h.getCurrentAttributes()
            })
        }, this.updateTourPointsOrder = function (e) {
            var t = [],
                n = $.grep(e, function (e) {
                    var n = $.grep(y, function (t) {
                        return t.id == e.id
                    });
                    return (n.length || !n.length && e.visible) && t.push(e), e.visible && !n.length
                });
            $.each(n, function (e, t) {
                var n = $.grep(g, function (e) {
                    return e.attributes.getID() == t.id
                });
                n && app.data.getTourLayer().add(n[0])
            }), B(H(t)), this.getTourPoints().length === 0 && app.data.setCurrentPointByIndex(-1), l.publish("CORE_UPDATE_UI")
        }, this.dropTourPoints = function (e) {
            b = $.grep(b, function (t) {
                return e.indexOf(t.attributes.getID()) > -1 ? (e.splice(e.indexOf(t.attributes.getID()), 1), E.push(t), !1) : !0
            }), $.each(e, function (e, t) {
                $.each(g, function (e, n) {
                    t == n.attributes.getID() && E.push(n)
                })
            })
        }, this.discardChanges = function () {
            b = $.grep(b, function (e) {
                return w.indexOf(e.attributes.getID()) == -1
            }), B(P())
        }, this.updateAfterSave = function () {
            e.updateAfterSave(), g = $.grep(g, function (e) {
                return E.indexOf(e) == -1
            }), E = [], w = [], B(P()), app.data.initialExtentHasBeenEdited = !1
        }, this.updateCurrentTourPoint = function (e, t) {
            S.attributes.updateNameAndDescription(e, t), l.publish("CORE_SELECTED_TOURPOINT_UPDATE", {
                index: x,
                name: e,
                description: t,
                color: S.attributes.getColor()
            })
        }, this.updateCurrentTourPointColor = function (e) {
            S.attributes.setColor(e), l.publish("CORE_SELECTED_TOURPOINT_UPDATE", {
                index: x,
                color: S.attributes.getColor()
            })
        }, this.electFields = function (e) {
            return console.log("TourData - electFields"), new n({
                fieldID: j(e, APPCFG.FIELDS_CANDIDATE.objectid) || app.data.getSourceLayer().objectIdField,
                fieldName: j(e, APPCFG.FIELDS_CANDIDATE.name),
                fieldDescription: j(e, APPCFG.FIELDS_CANDIDATE.description),
                fieldURL: j(e, APPCFG.FIELDS_CANDIDATE.pic_url),
                fieldThumb: j(e, APPCFG.FIELDS_CANDIDATE.thumb_url),
                fieldIconColor: j(e, APPCFG.FIELDS_CANDIDATE.color)
            })
        }, this.electFieldsFromFieldsList = function (e) {
            return console.log("TourData - electFields"), new n({
                fieldID: F(e, APPCFG.FIELDS_CANDIDATE.objectid) || app.data.getSourceLayer().objectIdField,
                fieldName: F(e, APPCFG.FIELDS_CANDIDATE.name),
                fieldDescription: F(e, APPCFG.FIELDS_CANDIDATE.description),
                fieldURL: F(e, APPCFG.FIELDS_CANDIDATE.pic_url),
                fieldThumb: F(e, APPCFG.FIELDS_CANDIDATE.thumb_url),
                fieldIconColor: F(e, APPCFG.FIELDS_CANDIDATE.color)
            })
        }, this.getFieldsConfig = function (t) {
            if (!t && e.getFieldsOverride()) return e.getFieldsOverride();
            var n = this.getTourPoints()[0];
            if (n && n.attributes) return n.attributes.getFieldsConfig();
            if (app.data.getSourceLayer().templates[0]) return this.electFields(app.data.getSourceLayer().templates[0].prototype.attributes);
            if (app.data.getSourceLayer().fields) return this.electFieldsFromFieldsList(app.data.getSourceLayer().fields)
        }, this.isFSWithURLFields = function () {
            var e = app.data.getSourceLayer().fields;
            return F(e, APPCFG.FIELDS_CANDIDATE.pic_url) !== "" && F(e, APPCFG.FIELDS_CANDIDATE.thumb_url) !== ""
        }, this.lookForMatchingFields = function (e) {
            var t = {
                fieldName: I(e, APPCFG.FIELDS_CANDIDATE.name),
                fieldDescription: I(e, APPCFG.FIELDS_CANDIDATE.description),
                fieldURL: I(e, APPCFG.FIELDS_CANDIDATE.pic_url),
                fieldThumb: I(e, APPCFG.FIELDS_CANDIDATE.thumb_url)
            };
            return {
                allFieldsFound: t.fieldName && t.fieldDescription && t.fieldURL && t.fieldThumb,
                fields: t
            }
        }, this.scanDataForPictureWithoutExtension = function () {
            return $.grep(g, function (e) {
                var t = e.attributes.getURL();
                return !s.validateImageURL(t) && (t || "").indexOf("#isVideo") == -1
            }).length
        }, this.editPictureWithoutExtension = function () {
            $.each(g, function (e, t) {
                var n = t.attributes.getURL();
                !s.validateImageURL(n) && (n || "").indexOf("#isVideo") == -1 && t.attributes.setURL(n + "#isImage")
            }), e.getTemplateCreation() || e.setTemplateCreation()
        }, this.getWebAppData = function () {
            return e.get()
        }
    }
}), define("storymaps/ui/inlineFieldEdit/InlineFieldEdit", ["dojo/has"], function (e) {
    return function (n, r, i) {
        function o(e, t, n) {
            if (!e || !t || !n) return;
            typeof r == "function" && r(), s = n, t.parent().parent().addClass("isEditing"), t.hide(), e.hide(), n.val(t.html()), n.show(), n.select()
        }
        function u(t) {
            if (!t || !t.get(0)) return;
            s = null;
            var n = t.get(0).value,
                r = t.parent().find(".text_edit_label"),
                o = t.parent().find(".text_edit_icon"),
                u = r.parent().first();
            n === "" && (n = i18n.viewer.headerJS.editMe), n = n.replace(/<\/?script>/g, ""), r.parent().parent().removeClass("isEditing"), r.html(n), r.show(), t.hide(), o.css("display", "inline-block"), e("ios") && document.activeElement.blur(), typeof i == "function" && i(u, n)
        }
        var s = null;
        $(n + " .text_edit_icon").click(function () {
            o($(this), $(this).parent().find(".text_edit_label"), $(this).parent().find(".text_edit_input"))
        }), $(n + " .text_edit_label").click(function () {
            o($(this).parent().find(".text_edit_icon"), $(this), $(this).parent().find(".text_edit_input"))
        }), $(n + " .text_edit_input").blur(function () {
            u($(this))
        }), e("ios") && $("body").bind("touchstart", function (e) {
            s && e.target != s.get(0) && u(s)
        }), $(n + " .text_edit_input").keypress(function (e) {
            var t = e.keyCode ? e.keyCode : e.which;
            t == "13" && u($(this))
        })
    }
}), define("storymaps/ui/header/Header", ["storymaps/ui/inlineFieldEdit/InlineFieldEdit", "dojo/has", "dojo/topic"], function (e, t, n) {
    return function (i, s) {
        function u() {
            var e = "&p[title]=" + encodeURIComponent($(i + " #headerMobile .title").html()) + "&p[summary]=" + encodeURIComponent($(i + " #headerMobile .subtitle").html()) + "&p[url]=" + encodeURIComponent(document.location.href),
                t = 0;
            $(".carousel-item-div img").slice(0, 1).each(function (n, r) {
                e += "&p[images][" + t + "]=" + encodeURIComponent($(r).attr("src")), t++
            }), window.open("http://www.facebook.com/sharer.php?s=100" + e, "Facebook sharing", "toolbar=0,status=0,width=626,height=436")
        }
        function a() {
            var e = "text=" + encodeURIComponent($(i + " #headerMobile .title").html()) + "&url=" + encodeURIComponent(document.location.href) + "&related=EsriStoryMaps" + "&hashtags=storymap";
            window.open("https://twitter.com/intent/tweet?" + e, "Tweet", "toolbar=0,status=0,width=626,height=436")
        }
        function f() {
            var e = ["http://api.bitly.com/v3/shorten?callback=?", "https://api-ssl.bitly.com/v3/shorten?callback=?"],
                t = location.protocol == "http:" ? e[0] : e[1];
            $(i).find(".share_bitly").popover("destroy"), $(i).find(".share_bitly").popover({
                trigger: "manual",
                placement: "left",
                html: !0,
                content: '<div style="width:140px; height:30px"> <div id="bitlyLoad" style="position:absolute; top: 16px; left: 24px; width:130px; text-align:center;">  <img src="resources/icons/loader-upload.gif" alt="Loading" /> </div> <input id="bitlyInput" type="text" value="" style="display:none; width: 130px; margin-bottom: 0px;"/></div><script> $(document).on("click touchstart", function(src) { if( ! src || ! src.target || ! $(src.target).parents(".popover").length ){ $(".share_bitly").popover("hide"); $(document).off("click"); } });</script>'
            }).popover("show"), $.getJSON(t, {
                format: "json",
                apiKey: APPCFG.HEADER_SOCIAL.bitly.key,
                login: APPCFG.HEADER_SOCIAL.bitly.login,
                longUrl: document.location.href
            }, function (e) {
                if (!e || !e || !e.data.url) return;
                $("#bitlyLoad").fadeOut(), $("#bitlyInput").fadeIn(), $("#bitlyInput").val(e.data.url), $("#bitlyInput").select()
            })
        }
        function l(e) {
            $(i + " #headerMobile .banner").slideDown(e === !0 ? 0 : 250)
        }
        function c() {
            o || $(i + " #builderPanel").fadeOut("fast"), o = !1
        }
        function h(e, r) {
            o = !0, setTimeout(function () {
                o && $(i + " #builderPanel").fadeIn("fast"), o = !1
            }, t("ios") || t("ie") == 10 ? 500 : 100), setTimeout(function () {
                n.publish("HEADER_EDITED", {
                    src: $(e).attr("class"),
                    value: r
                }), $(i + " #headerMobile .banner ." + $(e).attr("class")).html(r)
            }, t("ios") || t("ie") == 10 ? 700 : 0)
        }
        var o = !1;
        this.init = function (t, n, r, o, u, a, f, p, d, v) {
            this.setColor(o), this.setLogoInfo(u, a), t && $(i).addClass("hideDesktop"), $(i + " #headerMobile .title").html(n), $(i + " #headerMobile .subtitle").html(r), s && ($(i).addClass("isBuilder"), n = "<div class='text_edit_label'>" + (n || i18n.viewer.headerJS.editMe) + "</div>", n += "<div class='text_edit_icon' title='" + i18n.viewer.headerJS.templateTitle + "'></div>", n += "<textarea rows='1' class='text_edit_input' type='text'></textarea>", r = "<span class='text_edit_label'>" + (r || i18n.viewer.headerJS.editMe) + "</span>", r += "<div class='text_edit_icon' title='" + i18n.viewer.headerJS.templateSubtitle + "'></div>", r += "<textarea rows='2' class='text_edit_input' type='text'></textarea>"), $(i + " #headerDesktop .title").html(n), $(i + " #headerDesktop .subtitle").html(r), s && new e(i, c, h), !s && !r && ($(i + " #headerDesktop .title").css("padding-top", 40), $(i + " #headerDesktop .subtitle").css("height", 32)), $(window).scroll(this.hideMobileBanner), $(i + " #headerMobile .banner").fastClick(this.hideMobileBanner), $(i + " #openHeaderMobile").fastClick(l), $(".navBar span").fastClick(function () {
                $(this).hasClass("current") || (location.hash = $(this).data("viewid"))
            }), f && ($(i + " .switchBuilder").fastClick(this.switchToBuilder), $(i + " .switchBuilder").show()), l(!0), this.setTopRightLink(p, d), this.setSocial(v, !0), $(i).css("display", "block")
        }, this.resize = function (e) {
            $(i + " #headerDesktop .textArea").width(e - $(i + " #headerDesktop .rightArea").outerWidth() - 35)
        }, this.hideMobileBanner = function (e) {
            $(i + " #headerMobile .banner").slideUp(e === !0 ? 0 : 250), $(i + " #openHeaderMobile").css("top", "41px"), $(i + " #headerMobile").removeClass("firstDisplay")
        }, this.mobileHeaderIsInFirstState = function () {
            return $(i + " #headerMobile").hasClass("firstDisplay")
        }, this.setColor = function (e) {
            $(i).css("background-color", e), $(i + " #builderPanel").css("background-color", e), $(i + " #headerMobile").css("background-color", e), $("#openHeaderMobile").css("background-color", e)
        }, this.setLogoInfo = function (e, t) {
            !e || e == "NO_LOGO" ? $(i + " .logo img").hide() : ($(i + " .logo img").attr("src", e), t ? ($(i + " .logo img").closest("a").css("cursor", "pointer"), $(i + " .logo img").closest("a").attr("href", t)) : $(i + " .logo img").closest("a").css("cursor", "default"), $(i + " .logo img").show())
        }, this.setTopRightLink = function (e, t) {
            t ? $(i + " .social .msLink").html(e ? '<a href="' + t + '" target="_blank">' + e + "</a>" : "") : e ? $(i + " .social .msLink").html("<span>" + e + "</a>") : $(i + " .social .msLink").html("")
        }, this.setTitleAndSubtitle = function (e, t) {
            $(i + " #headerMobile .title").html(e), $(i + " #headerMobile .subtitle").html(t);
            var n = s ? i18n.viewer.headerJS.editMe : "";
            $(i + " #headerDesktop .title" + (s ? " .text_edit_label" : "")).html(e || n), $(i + " #headerDesktop .subtitle" + (s ? " .text_edit_label" : "")).html(t || n)
        }, this.setSocial = function (e, t) {
            $(i + " .share_facebook").toggle(APPCFG.HEADER_SOCIAL && APPCFG.HEADER_SOCIAL.facebook && (!e || e.facebook)), $(i + " .share_twitter").toggle(APPCFG.HEADER_SOCIAL && APPCFG.HEADER_SOCIAL.twitter && (!e || e.twitter)), $(i + " .share_bitly").toggle(APPCFG.HEADER_SOCIAL && APPCFG.HEADER_SOCIAL.bitly && APPCFG.HEADER_SOCIAL.bitly.enable && APPCFG.HEADER_SOCIAL.bitly.login && APPCFG.HEADER_SOCIAL.bitly.key && (!e || e.bitly)), t && ($(i + " .share_facebook").fastClick(u), $(i + " .share_twitter").fastClick(a), $(i + " .share_bitly").fastClick(f))
        }, this.switchToBuilder = function () {
            document.location.search.match(/appid/) ? document.location = document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + "&edit" + document.location.hash : document.location.search.slice(-1) == "?" ? document.location = document.location.protocol + "//" + document.location.host + document.location.pathname + "edit" + document.location.hash : document.location = document.location.protocol + "//" + document.location.host + document.location.pathname + "?edit" + document.location.hash
        }, this.initLocalization = function () {
            $(i + " #closeHeaderMobile").html(i18n.viewer.mobileHTML.hideIntro), $(i + " #openHeaderMobile").html(i18n.viewer.mobileHTML.showIntro), $(i + " #listViewLink").html(i18n.viewer.mobileHTML.navList), $(i + " #mapViewLink").html(i18n.viewer.mobileHTML.navMap), $(i + " #infoViewLink").html(i18n.viewer.mobileHTML.navInfo), $(i + " .msLink").html(i18n.viewer.desktopHTML.storymapsText), $(i + " .switchBuilder").html('<div><img src="resources/icons/builder-edit-fields.png" /></div>' + i18n.viewer.desktopHTML.builderButton), $(i + " .share_bitly").attr("title", i18n.viewer.desktopHTML.bitlyTooltip)
        }
    }
}), define("storymaps/ui/mapCommand/MapCommand", ["dojo/has", "esri/geometry/Point", "dojo/on"], function (e, t, n) {
    return function (i, s, o) {
        function f(e) {
            if (e) $(i.container).find(".mapCommandHomeBtn").addClass("loading"), u = Date.now();
            else {
                var t = Date.now() - u,
                    n = 0;
                t < 450 && (n = 450 - t), setTimeout(function () {
                    $(i.container).find(".mapCommandHomeBtn").removeClass("loading"), u = 0
                }, n)
            }
        }
        function l() {
            navigator.geolocation.getCurrentPosition(function (e) {
                o(!0, new t(e.coords.longitude, e.coords.latitude), e)
            }, c, {
                timeout: 2e3
            })
        }
        function c(e) {
            o(!1, e)
        }
        var u = 0,
            a = $('<div class="esriSimpleSliderIncrementButton"><div class="mapCommandHomeBtn"></div></div>');
        a.fastClick(function () {
            if (u !== 0 && $("body").hasClass("mobile-view")) return;
            s && typeof s == "function" ? s(i._params.extent) : i.setExtent(i._params.extent)
        }), $(i.container).find(".esriSimpleSlider div:nth-child(1)").after(a), n(i, "update-start", function () {
            u === 0 && f(!0)
        }), n(i, "update-end", function () {
            f(!1)
        }), navigator && navigator.geolocation && o && typeof o == "function" && ($(".esriSimpleSlider", i.container).after('<div id="mainMap_zoom_location" class="esriSimpleSlider esriSimpleSliderVertical mapCommandLocation"><div><img src="resources/icons/mapcommand-location.png"></div></div>'), $("#mainMap_zoom_location div", i.container).fastClick(l)), this.setMobile = function (e) {
            $(".esriSimpleSlider, .mapCommandHomeBtn", i.container).toggleClass("touch", e)
        }, this.destroy = function () {
            $(i.container).find(".esriSimpleSliderIncrementButton").remove(), $(i.container).find("#mainMap_zoom_location").remove()
        }, this.startLoading = function () {
            f(!0)
        }, this.stopLoading = function () {
            f(!1)
        }, e("touch") && this.setMobile(!0)
    }
}), define("storymaps/core/Core", ["esri/map", "esri/arcgis/Portal", "esri/arcgis/utils", "storymaps/utils/Helper", "storymaps/maptour/core/Config", "storymaps/maptour/core/TourData", "storymaps/maptour/core/WebApplicationData", "storymaps/maptour/core/TourPointAttributes", "storymaps/maptour/core/MapTourHelper", "storymaps/ui/header/Header", "storymaps/ui/mapCommand/MapCommand", "dojo/has", "esri/IdentityManager", "esri/config", "esri/tasks/GeometryService", "esri/request", "esri/urlUtils", "dojo/topic", "dojo/on", "dojo/_base/lang", "dojo/Deferred", "dojo/DeferredList", "dojo/query", "esri/geometry/Extent"], function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x) {
    function C(e, t) {
        console.log("maptour.core.Core - init"), N = e, G();
        var o = t != null && r.getAppID(Y());
        if (r.isArcGISHosted() || !Y()) configOptions = {
            proxyurl: configOptions.proxyurl,
            sharingurl: configOptions.sharingurl
        };
        if (!i.checkConfigFileIsOK()) {
            B("invalidConfig");
            return
        }
        app = {
            map: null,
            portal: null,
            data: new s,
            mapTips: null,
            builder: t,
            isInBuilderMode: o,
            builderMovableGraphic: null,
            isCreatingFS: !1,
            mapCommand: null,
            header: new f("#header", o),
            isLoading: !0,
            loadingTimeout: null,
            isFirstUserAction: !1,
            filterMouseHoverEvent: !1,
            config: {
                thumbnailMaxWidth: 140,
                thumbnailMaxHeight: 93,
                picRecommendedWidth: 1090,
                picRecommendedHeight: 725
            }
        };
        if (!N.init(this)) return;
        Y() || y(h, "dialog-create", function () {
            y(h.dialog, "show", function () {
                h.dialog.txtUser_.set("value", "guest"), h.dialog.txtPwd_.set("value", "guest"), h.dialog.btnSubmit_.onClick()
            })
        }), J();
        if (!configOptions.sharingurl) {
            var u = document.location.pathname.indexOf("/apps/");
            u == -1 && (u = document.location.pathname.indexOf("/home/"));
            if (u != -1) {
                var a = location.pathname.substr(0, u);
                configOptions.sharingurl = "//" + location.host + a + "/sharing/content/items", configOptions.proxyurl = "//" + location.host + a + "/sharing/proxy"
            } else configOptions.sharingurl = APPCFG.DEFAULT_SHARING_URL
        }
        n.arcgisUrl = location.protocol + configOptions.sharingurl, configOptions.proxyurl || (configOptions.proxyurl = APPCFG.DEFAULT_PROXY_URL), p.defaults.io.proxyUrl = location.protocol + configOptions.proxyurl, h && h.setProtocolErrorHandler(function () {
            return !0
        }), o && APPCFG.CORS_SERVER && $.each(APPCFG.CORS_SERVER, function (e, t) {
            p.defaults.io.corsEnabledServers.push(t)
        }), p.defaults.io.timeout = o ? APPCFG.TIMEOUT_BUILDER_REQUEST : APPCFG.TIMEOUT_VIEWER_REQUEST, $(document).ready(b.hitch(this, k))
    }
    function k() {
        console.log("maptour.core.Core - initStep2"), v({
            url: n.arcgisUrl.split("/sharing/")[0] + "/sharing/rest/portals/self",
            content: {
                f: "json"
            },
            callbackParamName: "callback"
        }).then(b.hitch(this, function (e) {
            var t, n;
            commonConfig && commonConfig.helperServices && (commonConfig.helperServices.geometry && commonConfig.helperServices.geometry && (t = location.protocol + commonConfig.helperServices.geometry.url), commonConfig.helperServices.geocode && commonConfig.helperServices.geocode.length && commonConfig.helperServices.geocode[0].url ? n = commonConfig.helperServices.geocode[0].url : commonConfig.helperServices.geocode && commonConfig.helperServices.geocode && commonConfig.helperServices.geocode.url && (n = commonConfig.helperServices.geocode.url)), e.helperServices && (e.helperServices.geometry && e.helperServices.geometry.url && (t = e.helperServices.geometry.url), e.helperServices.geocode && e.helperServices.geocode.length && e.helperServices.geocode[0].url && (n = e.helperServices.geocode[0].url)), p.defaults.geometryService = new d(t), configOptions.geocodeServiceUrl = n, e.bingKey && (commonConfig.bingMapsKey = e.bingKey), e.isPortal && APPCFG && APPCFG.AUTHORIZED_IMPORT_SOURCE && (APPCFG.AUTHORIZED_IMPORT_SOURCE.featureService = !1), app.isPortal = !! e.isPortal, L()
        }), function () {
            B("portalSelf")
        })
    }
    function L() {
        console.log("maptour.core.Core - initStep3");
        var e = r.getAppID(Y()),
            t = r.getWebmapID(Y());
        app.header.initLocalization(), N.initLocalization(), $(window).resize(q), $("form").bind("keydown", function (e) {
            if (e.keyCode == 13) return !1
        }), y(h, "dialog-create", R), g.subscribe("CORE_UPDATE_UI", I), g.subscribe("CORE_RESIZE", q), loadingIndicator.setMessage(i18n.viewer.loading.step2), r.addCSSRule(".tpIcon {" + a.getSymbolMobileClip() + "}"), e ? A(e) : t && (r.isArcGISHosted() || Z()) ? W() : t ? _(t) : r.isArcGISHosted() ? W() : B("invalidConfigNoWebmap")
    }
    function A(e) {
        console.log("maptour.core.Core - loadWebMappingApp - appId:", e);
        var t = m.urlToObject(document.location.search).query || {},
            n = t.forceLogin !== undefined;
        n || Y() && r.getPortalUser() || Y() && app.isInBuilderMode && !r.getPortalUser() ? M().then(function () {
            O(e)
        }, function () {
            B("notAuthorized")
        }) : O(e)
    }
    function O(e) {
        var t = v({
            url: configOptions.sharingurl + "/" + e + "",
            content: {
                f: "json"
            },
            callbackParamName: "callback",
            load: function (e) {
                app.data.setAppItem(e)
            },
            error: function () {}
        }),
            n = v({
                url: configOptions.sharingurl + "/" + e + "/data",
                content: {
                    f: "json"
                },
                callbackParamName: "callback",
                load: function (e) {
                    o.set(e), app.data.webAppData = o
                },
                error: function () {}
            }),
            i = new E([t, n]);
        i.then(function () {
            if (!n.results || !n.results[0] || !t.results || !t.results[0]) {
                t.results && t.results[1] && t.results[1] && t.results[1].httpCode == 403 ? B("notAuthorized") : B("invalidApp");
                return
            }
            if (app.isInBuilderMode && Y() && !app.data.userIsAppOwner()) {
                B("notAuthorized");
                return
            }
            var e = o.getWebmap() || r.getWebmapID(Y());
            e ? _(e) : B("invalidApp")
        })
    }
    function M() {
        var e = new w,
            n = configOptions.sharingurl.split("/sharing/")[0];
        return app.portal = new t.Portal(n), y(h, "dialog-create", U), app.portal.signIn().then(function () {
            e.resolve()
        }, function () {
            e.reject()
        }), e
    }
    function _(e) {
        console.log("maptour.core.Core - loadWebMap - webmapId:", e);
        var t = n.createMap(e, "mainMap", {
            mapOptions: {
                slider: !0,
                autoResize: !1,
                extent: new x({
                    xmax: 180,
                    xmin: -180,
                    ymax: 90,
                    ymin: -90,
                    spatialReference: {
                        wkid: 4326
                    }
                }),
                showAttribution: !0
            },
            ignorePopups: !0,
            bingMapsKey: commonConfig.bingMapsKey
        });
        t.addCallback(function (e) {
            setTimeout(function () {
                D(e)
            }, 0)
        }), t.addErrback(function () {
            B("createMap")
        })
    }
    function D(e) {
        console.log("maptour.core.Core - webMapInitCallback");
        if (configOptions.authorizedOwners && configOptions.authorizedOwners.length > 0 && configOptions.authorizedOwners[0]) {
            var t = !1;
            e.itemInfo.item.owner && (t = $.inArray(e.itemInfo.item.owner, configOptions.authorizedOwners) != -1);
            if (!t) {
                B("invalidConfigOwner");
                return
            }
        }
        app.map = e.map, app.data.setWebMapItem(e.itemInfo), app.map.disableKeyboardNavigation();
        var n = configOptions.title || o.getTitle() || e.itemInfo.item.title,
            i = configOptions.subtitle || o.getSubtitle() || e.itemInfo.item.snippet;
        F(o.getLayout() || configOptions.layout);
        var s = m.urlToObject(document.location.search).query || {},
            u = o.getColors(),
            a = o.getLogoURL() || APPCFG.HEADER_LOGO_URL,
            f = a == APPCFG.HEADER_LOGO_URL ? APPCFG.HEADER_LOGO_TARGET : o.getLogoTarget();
        app.header.init(!app.isInBuilderMode && (APPCFG.EMBED || s.embed || s.embed === ""), n, i, u[0], a, f, !app.isInBuilderMode && (!Y() && r.getAppID(Y()) || Y() && app.data.userIsAppOwner()), o.getHeaderLinkText() === undefined ? APPCFG.HEADER_LINK_TEXT : o.getHeaderLinkText(), o.getHeaderLinkURL() === undefined ? APPCFG.HEADER_LINK_URL : o.getHeaderLinkURL(), o.getSocial()), document.title = $("<div>" + n + "</div>").text(), N.webmapLoaded()
    }
    function P() {
        console.log("maptour.core.Core - initMap"), app.mapCommand = new l(app.map, function () {
            N.setMapExtent(r.getWebMapExtentFromItem(app.data.getWebMapItem().item))
        }, app.isInBuilderMode ? N.zoomToDeviceLocation : null), q(), location.hash && (location.hash = "map"), window.onhashchange = function () {
            if (!(location.hash !== "" && location.hash !== "#" || !app.data.getIntroData())) return;
            app.data.getIntroData() && app.data.getCurrentIndex() == null && g.publish("PIC_PANEL_NEXT"), N.prepareMobileViewSwitch(), location.hash == "#map" ? ($("#mapViewLink").addClass("current"), V()) : N.onHashChange()
        }, N.appInitComplete(), app.builder && app.builder.appInitComplete()
    }
    function H() {
        app.isLoading = !1, $("#loadingOverlay").fadeOut(), loadingIndicator.stop()
    }
    function B(e, t, n) {
        X(), K(), loadingIndicator.stop();
        if (e == "noLayerView") {
            loadingIndicator.setMessage(i18n.viewer.errors[e], !0);
            return
        }
        e != "initMobile" && loadingIndicator.forceHide(), $("#fatalError .error-msg").html(i18n.viewer.errors[e]), n || $("#fatalError").show()
    }
    function j(e) {
        $("#fatalError .error-msg").html(i18n.viewer.errors[e])
    }
    function F(e) {
        $("body").toggleClass("modern-layout", e == "integrated")
    }
    function I(e) {
        console.log("maptour.core.Core - updateUI");
        var t = app.data.getTourPoints(),
            n = o.getColors(),
            r = e && e.editFirstRecord;
        F(o.getLayout()), app.header.setTitleAndSubtitle(o.getTitle() || app.data.getWebMapItem().item.title, o.getSubtitle() || app.data.getWebMapItem().item.snippet), app.header.setColor(n[0]);
        var i = o.getLogoURL() || APPCFG.HEADER_LOGO_URL;
        app.header.setLogoInfo(i, i == APPCFG.HEADER_LOGO_URL ? APPCFG.HEADER_LOGO_TARGET : o.getLogoTarget()), app.header.setTopRightLink(o.getHeaderLinkText() === undefined ? APPCFG.HEADER_LINK_TEXT : o.getHeaderLinkText(), o.getHeaderLinkURL() === undefined ? APPCFG.HEADER_LINK_URL : o.getHeaderLinkURL()), app.header.setSocial(o.getSocial()), N.updateUI(t, n, r), q()
    }
    function q() {
        var e = a.isOnMobileView(),
            t = $("#mapViewLink").hasClass("current");
        e ? $("body").addClass("mobile-view") : $("body").removeClass("mobile-view");
        var n = $("body").width(),
            r = $("body").height(),
            i = $("#header").height(),
            s = $("#footer").height(),
            o = r - (i + s);
        app.header.resize(n), N.resize({
            isMobileView: e,
            isOnMobileMapView: t,
            width: n,
            height: o
        }), $("#contentPanel").height(o + (e ? 0 : a.isModernLayout() ? s : 0)), $("#contentPanel").width(n), $("#mapPanel").width(n - $("#picturePanel").width()), app.isInBuilderMode && app.builder.resize({
            isMobileView: e
        });
        if (app.map && (!e || e && t)) try {
            app.map.resize(!0)
        } catch (u) {}
        e ? $("#mainMap .esriControlsBR > div").first().removeClass("logo-med").addClass("logo-sm") : $("#mainMap .esriControlsBR > div").first().removeClass("logo-sm").addClass("logo-med")
    }
    function R() {
        $(".esriSignInDialog td label").siblings("br").css("display", "none"), $(".esriSignInDialog .dijitDialogPaneContentArea div:nth(1)").css("display", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("padding", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("margin-bottom", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("border", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitValidationContainer").css("display", "none"), $(".esriSignInDialog .esriErrorMsg").css("margin-top", "10px"), $(".esriSignInDialog").find(".dijitDialogTitleBar").find(".dijitDialogTitle").first().html("Authentication is required"), $(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().css("display", "none"), $(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaLoginText'>Please sign in with an account on <a href='http://" + h._arcgisUrl + "' title='" + h._arcgisUrl + "' target='_blank'>" + h._arcgisUrl + "</a> to access the application.</div>")
    }
    function U() {
        $(".esriSignInDialog").find("#dijitDialogPaneContentAreaLoginText").css("display", "none"), $(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaAtlasLoginText'>Please sign in with an account on <a href='http://" + h._arcgisUrl + "' title='" + h._arcgisUrl + "' target='_blank'>" + h._arcgisUrl + "</a> to configure this application.</div>")
    }
    function z() {
        $("#mainMap_root").remove(), $("#header").css("display", "inherit"), $(".mobileView").css("display", "inherit"), $("#footer").css("display", "inherit"), $("#fatalError").css("display", "none"), $("#loadingOverlay").css("top", "0px"), loadingIndicator.start(), loadingIndicator.setMessage(i18n.viewer.loading.step2), J(), q()
    }
    function W() {
        window.location.replace("preview.html")
    }
    function X() {
        $("#header").hide(), $(".mobileView").hide(), $("#footer").hide(), $(".modal").hide()
    }
    function V() {
        $("#contentPanel").show(), $("#footerMobile").show(), $("#mapPanel").show(), app.mobileCarousel.setSelectedPoint(app.data.getCurrentIndex()), q()
    }
    function J() {
        app.loadingTimeout = setTimeout(Q, APPCFG.TIMEOUT_VIEWER_LOAD)
    }
    function K() {
        typeof app != "undefined" && app.loadingTimeout && (clearTimeout(app.loadingTimeout), app.loadingTimeout = null)
    }
    function Q() {
        if (h && h.dialog && h.dialog._alreadyInitialized && !h.loadingTimeoutAlreadyFired) {
            clearTimeout(app.loadingTimeout), J(), h._busy || (h.loadingTimeoutAlreadyFired = !0);
            return
        }
        loadingIndicator.stop(), loadingIndicator.setMessage(i18n.viewer.loading.fail + '<br /><button type="button" class="btn btn-medium btn-info" style="margin-top: 5px;" onclick="document.location.reload()">' + i18n.viewer.loading.failButton + "</button>", !0), app.map && app.map.destroy()
    }
    function G() {
        S("#fatalError .error-title")[0].innerHTML = i18n.viewer.errors.boxTitle
    }
    function Y() {
        return T.environment != ["TPL", "ENV", "DEV"].join("_")
    }
    function Z() {
        return T.forcePreviewScreen == ["TPL", "PREVIEW", "TRUE"].join("_")
    }
    var T = {
        forcePreviewScreen: "TPL_PREVIEW_FALSE",
        environment: "TPL_ENV_PRODUCTION"
    },
        N = null;
    return typeof String.prototype.trim != "function" && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "")
    }), Date.now || (Date.now = function () {
        return (new Date).valueOf()
    }), {
        init: C,
        isProd: Y,
        appInitComplete: P,
        displayApp: H,
        cleanLoadingTimeout: K,
        initError: B,
        handleWindowResize: q,
        prepareAppForWebmapReload: z,
        loadWebMap: _,
        replaceInitErrorMessage: j,
        portalLogin: M
    }
}), define("storymaps/maptour/core/FeatureServiceManager", ["storymaps/maptour/core/TourPointAttributes", "storymaps/maptour/core/MapTourHelper", "esri/graphic", "esri/geometry/Point", "dojo/topic"], function (e, t, n, r, i) {
    return function () {
        function f(e, t, n) {
            n.geometry != null && (u++, e.queryAttachmentInfos(n.attributes[t], function (e) {
                l(n, e)
            }, function (e) {
                c(n, e)
            }))
        }
        function l(i, s) {
            a++;
            if (s && s.length >= 2) {
                var f = s[0].id < s[1].id ? s[0] : s[1],
                    l = s[0].id > s[1].id ? s[0] : s[1];
                if (t.isSupportedImgExt(f.name) && t.isSupportedImgExt(l.name)) {
                    var c = new n(new r(i.geometry.x, i.geometry.y, i.geometry.spatialReference), null, new e(i, f.url, l.url));
                    o.push(c)
                }
            }
            a == u && h()
        }
        function c(e) {
            console.error(i18n.viewer.errors.featureServiceLoad, e, a, u), a++, a == u && h()
        }
        function h() {
            setTimeout(function () {
                i.publish("FS_MANAGER_LAYER_LOADED", {
                    graphics: o
                })
            }, 0)
        }
        var o = [],
            u = 0,
            a = 0;
        this.process = function (t, i) {
            var s;
            if (i || !t.hasAttachments) {
                for (s = 0; s < t.graphics.length; s++) {
                    var u = t.graphics[s],
                        a = new n(new r(u.geometry.x, u.geometry.y, u.geometry.spatialReference), null, new e(u));
                    o.push(a)
                }
                h()
            } else {
                for (s = 0; s < t.graphics.length; s++) f(t, app.data.getSourceLayer().objectIdField, t.graphics[s]);
                t.graphics.length === 0 && h()
            }
        }
    }
}), define("storymaps/ui/multiTips/MultiTips", ["dojo/dom-style", "dojo/dom-construct", "dojo/_base/lang", "dojo/on", "dojo/_base/array", "dojo/query", "dojo/dom", "dojo/has"], function (e, t, n, r, i, s, o, u) {
    return function (f) {
        function p(e) {
            l = n.mixin({
                pointArray: [],
                map: null,
                attributeLabelField: "",
                content: "",
                zoomToPoints: !1,
                backgroundColor: "#000000",
                borderColor: "#000000",
                pointerColor: "#000000",
                textColor: "#ffffff",
                minWidth: "",
                labelDirection: "auto",
                offsetTop: 8,
                offsetSide: 3,
                offsetBottom: 8,
                mapAuthorizedWidth: -1,
                mapAuthorizedHeight: -1,
                visible: !0
            }, e), e.mapAuthorizedWidth == -1 && (l.mapAuthorizedWidth = l.map.width), e.mapAuthorizedHeight == -1 && (l.mapAuthorizedHeight = l.map.height), d(e.map.container)
        }
        function d(n, o) {
            v();
            var u = r(l.map, "zoom-start", function () {
                y()
            }),
                a = r(l.map, "zoom-end", function (e) {
                    c || m(e.extent, !0)
                }),
                f = r(l.map, "pan", function (e) {
                    if (!e || !e.delta.x && !e.delta.y) return;
                    c || g(e.extent, e.delta)
                }),
                p = r(l.map, "extent-change", function (e) {
                    if (e && e.delta && e.delta.x === 0 && e.delta.y === 0) return;
                    c || m(e.extent, !0)
                });
            o && (l.visible = !0), i.forEach(l.pointArray, function (r, i) {
                t.place("<div id='arrow" + i + "' class='mtArrow'></div><div id='multiTip" + i + "' class='multiTip'></div>", n, "last"), s("#multiTip" + i)[0].innerHTML = l.content, e.set("multiTip" + i, {
                    backgroundColor: l.backgroundColor,
                    borderColor: l.borderColor,
                    color: l.textColor,
                    padding: "5px",
                    position: "absolute"
                }), l.minWidth && e.set("multiTip" + i, "minWidth", l.minWidth + "px"), e.set("arrow" + i, {
                    position: "absolute",
                    width: "0px",
                    height: "0px"
                });
                if (l.map.extent.contains(r.geometry)) {
                    var o = l.map.toScreen(r.geometry);
                    E(o, i, l)
                }
            }), h = [u, a, f, p]
        }
        function v() {
            c = !1, i.forEach(h, function (e) {
                e.remove()
            }), s(".multiTip").forEach(t.destroy), s(".mtArrow").forEach(t.destroy)
        }
        function m(e, t) {
            i.forEach(l.pointArray, function (n, r) {
                e.contains(n.geometry) && (w(r) || t) ? E(l.map.toScreen(n.geometry), r, l) : b(r)
            })
        }
        function g(e, t) {
            i.forEach(l.pointArray, function (n, r) {
                if (e.contains(n.geometry)) {
                    var i = l.map.toScreen(n.geometry);
                    i.x += t.x, i.y += t.y, E(i, r, l)
                } else b(r)
            })
        }
        function y() {
            s(".multiTip, .mtArrow").forEach(function (e) {
                e.style.display = "none"
            })
        }
        function b(t) {
            if (e.get(o.byId("multiTip" + t), "display") == "none") return;
            e.set(o.byId("multiTip" + t), "display", "none"), e.set(o.byId("arrow" + t), "display", "none")
        }
        function w(t) {
            return e.get(o.byId("multiTip" + t), "display") == "block"
        }
        function E(t, n, r) {
            if (t.x > r.mapAuthorizedWidth || t.y > r.mapAuthorizedHeight) {
                b(n);
                return
            }
            var i = e.get("multiTip" + n, "width"),
                s = e.get("multiTip" + n, "height");
            u("ie") == 8 && (i -= 7, s -= 14);
            if (!i || !s) e.set(o.byId("multiTip" + n), "display", r.visible ? "block" : "none"), e.set(o.byId("arrow" + n), "display", r.visible ? "block" : "none"), i = e.get("multiTip" + n, "width"), s = e.get("multiTip" + n, "height");
            r.minWidth && i < r.minWidth && (i = r.minWidth);
            if (r.labelDirection != "auto") r.labelDirection == "left" ? N(t, n, r, i, s) : r.labelDirection == "right" ? T(t, n, r, i, s) : r.labelDirection == "down" ? S(t, n, r, i, s) : x(t, n, r, i, s);
            else if (t.x < i / 2 + 25 + r.offsetSide + r.topLeftNotAuthorizedArea[0] && t.y < r.topLeftNotAuthorizedArea[1] + s) {
                if (t.y < s - 15 || t.x < 35 + r.topLeftNotAuthorizedArea[0] && t.y < r.topLeftNotAuthorizedArea[1]) {
                    b(n);
                    return
                }
                T(t, n, r, i, s)
            } else if (t.x < i / 2 + 25 + r.offsetSide) {
                if (t.y < s - 15 || t.y > r.mapAuthorizedHeight - s / 2 - 10) {
                    b(n);
                    return
                }
                T(t, n, r, i, s)
            } else if (t.x > r.mapAuthorizedWidth - i / 2 - 10) {
                if (t.y < s - 15 || t.y > r.mapAuthorizedHeight - s / 2 - 10) {
                    b(n);
                    return
                }
                N(t, n, r, i, s)
            } else t.y > s + 25 + r.offsetTop ? x(t, n, r, i, s) : S(t, n, r, i, s);
            e.set(o.byId("multiTip" + n), "display", r.visible ? "block" : "none"), e.set(o.byId("arrow" + n), "display", r.visible ? "block" : "none")
        }
        function S(t, n, r, i) {
            e.set("multiTip" + n, {
                top: t.y + 10 + r.offsetBottom + "px",
                left: t.x - i / 2 - 5 + "px"
            }), e.set("arrow" + n, {
                left: t.x - 10 + "px",
                top: t.y + r.offsetBottom + "px",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: "10px solid",
                borderBottomColor: r.pointerColor,
                borderTop: "none"
            })
        }
        function x(t, n, r, i, s) {
            e.set("multiTip" + n, {
                top: t.y - s - 24 - r.offsetTop + "px",
                left: t.x - i / 2 - 5 + "px"
            }), e.set("arrow" + n, {
                left: t.x - 10 + "px",
                top: t.y - 10 - r.offsetTop + "px",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "10px solid",
                borderTopColor: r.pointerColor,
                borderBottom: "none"
            })
        }
        function T(t, n, r, i, s) {
            e.set("multiTip" + n, {
                top: t.y - 12 - (s - 10) / 2 + "px",
                left: t.x + 10 + r.offsetSide + "px"
            }), e.set("arrow" + n, {
                left: t.x + r.offsetSide + "px",
                top: t.y - 10 + "px",
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderRight: "10px solid",
                borderRightColor: r.pointerColor,
                borderLeft: "none"
            })
        }
        function N(t, n, r, i, s) {
            e.set("multiTip" + n, {
                top: t.y - 12 - (s - 10) / 2 + "px",
                left: t.x - 24 - i - r.offsetSide + "px"
            }), e.set("arrow" + n, {
                left: t.x - 10 - r.offsetSide + "px",
                top: t.y - 10 + "px",
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: "10px solid",
                borderLeftColor: r.pointerColor,
                borderRight: "none"
            })
        }
        var l = null,
            c = !1,
            h = [];
        p(f), this.current = function () {
            return l.pointArray
        }, this.clean = function () {
            l = null, v()
        }, this.hide = function () {
            c = !0, y()
        }, this.show = function () {
            if (!l) return;
            c = !1, l.visible = !0, m(l.map.extent, !0)
        }
    }
}), define("storymaps/maptour/ui/desktop/Carousel", ["dojo/has", "storymaps/utils/Helper", "storymaps/maptour/core/MapTourHelper", "dojo/topic"], function (e, t, n, r) {
    return function (s) {
        function p(t) {
            f = -1, u = n.isModernLayout() ? 156 : 161, $(s + " .carouselScroller").css("width", t.length * u + "px"), $(s + " .carouselWrapper").mousemove(function (e) {
                h.onMove[0] = e.screenX, h.onMove[1] = e.screenY
            }), a = new iScroll($(s + " .carouselWrapper")[0], {
                hideScrollbar: !0,
                onBeforeScrollMove: function (e) {
                    if (Math.abs(h.onScroll[0] - e.screenX) > 5 || Math.abs(h.onScroll[1] - e.screenY) > 5) c = !0;
                    y(), S()
                },
                onScrollStart: function () {
                    h.onScroll = [h.onMove[0], h.onMove[1]]
                },
                onBeforeScrollEnd: function () {
                    e("touch") && (c = !1)
                },
                onScrollEnd: function () {
                    y(), S()
                }
            }), y(), $(s + " .carouselScroller ul").html(d(t)), f = 14, $(s + " .carouselScroller ul img").slice(0, f).each(function (e, t) {
                $(t).attr("src", $(t).data("src"))
            }), l != null && (o.setSelectedIndex(l), l = null)
        }
        function d(e) {
            var t = "";
            return $(e).each(function (e, r) {
                var i = n.getSymbolCss(r.attributes.getColor());
                t += "<li>", t += ' <div class="carousel-item-div">', t += '  <span class="' + i + '"><img data-src="' + r.attributes.getThumbURL() + '" onerror="mediaNotFoundHandler(this)"/></span>', t += "  <div>" + r.attributes.getName() + "</div>", t += " </div>", t += "</li>"
            }), t
        }
        function v() {
            $(s).click(m), r.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", b)
        }
        function m(e) {
            if (!e || !e.target) return;
            e.target.className == "arrowLeft" ? w(-1) : e.target.className == "arrowRight" ? w(1) : setTimeout(function () {
                g(e)
            }, 50)
        }
        function g(e) {
            var t = $(e.target).closest("li").index();
            !c && t != -1 && r.publish("CAROUSEL_CLICK", t), c = !1
        }
        function y() {
            if (!a) return;
            if (a.x == a.maxScrollX || a.x === 0) c = !1;
            a.x > -25 ? $(s + " .arrowLeft").addClass("disabled") : $(s + " .arrowLeft").removeClass("disabled").attr("src", "resources/icons/carousel-left.png"), a.scrollerW + a.x - a.wrapperW < 25 ? $(s + " .arrowRight").addClass("disabled") : $(s + " .arrowRight").removeClass("disabled").attr("src", "resources/icons/carousel-right.png")
        }
        function b(e) {
            var t = $(s + " .carouselScroller li:nth-child(" + (e.index + 1) + ")");
            t.find(".carousel-item-div > div").html(e.name), t.find(".carousel-item-div > span").attr("class", n.getSymbolCss(e.color))
        }
        function w(e) {
            var t = Math.floor(a.wrapperW / u) + 1;
            x(a.x - e * t * u, t)
        }
        function E(e) {
            if (!a || e == null) return;
            S();
            var t = Math.ceil(Math.abs(a.x / u)) + 1,
                n = Math.floor(Math.abs((a.x - a.wrapperW - 15) / u));
            if (e + 1 >= t && e + 1 <= n) return;
            t == 1 && n === 0 ? ($(s + " .carousel-item-div").css("visibility", "hidden"), setTimeout(function () {
                x(Math.max(-e * u), Math.abs(t - e), !0), $(s + " .carousel-item-div").css("visibility", "visible")
            }, 0)) : x(Math.max(-e * u), Math.abs(t - e))
        }
        function S() {
            var e = Math.floor(Math.abs((a.x - a.wrapperW - 15) / u)),
                t = e + 10;
            if (f >= t) return;
            $(s + " .carouselScroller ul img").slice(f, t).each(function (e, t) {
                t = $(t), t.attr("src", t.data("src"))
            }), f = t
        }
        function x(e, t, n) {
            var r = Math.max(Math.min(0, e), a.maxScrollX);
            a.scrollerW + e - u > 0 && (r = Math.ceil(r / u) * u), a.scrollTo(r, 0, n ? 0 : Math.min(2e3, Math.max(500, t * 150)))
        }
        function T(e, r) {
            $("#footer, #builderPanel2, #builderPanel3").css("background-color", t.hex2rgba(e, n.isModernLayout() ? .85 : 1)), r != "rgb(125, 125, 125)" && t.addCSSRule(".carouselScroller.no-touch .carousel-item-div:not(.selected):hover { background-color: " + r + " !important; }")
        }
        var o = this,
            u = 161,
            a = null,
            f = -1,
            l = null,
            c = !1,
            h = {
                onMove: [-1, -1],
                onScroll: [-1, -1]
            };
        this.init = function (t, n, r) {
            T(n, r), p(t), v(), e("touch") || $(s + " .carouselScroller").addClass("no-touch")
        }, this.update = function (e, t, n) {
            T(t, n), a.destroy(), p(e)
        }, this.resize = function () {
            y()
        }, this.setSelectedIndex = function (e) {
            if (e == null || e == -1) return;
            $(".carousel-item-div").length || (l = e), $(s + " .carousel-item-div").removeClass("selected"), $(s + " .carousel-item-div").eq(e).addClass("selected"), E(e), y()
        }, this.checkItemIsVisible = function (e) {
            if (!a) return;
            E(e)
        }
    }
}), define("storymaps/ui/crossfader/CrossFader", ["storymaps/ui/inlineFieldEdit/InlineFieldEdit", "storymaps/ui/loadingIndicator/LoadingIndicator", "dojo/topic", "dojo/has"], function (e, t, n, r) {
    return function (s, o) {
        function A() {
            N = $(y).find("img")[0].naturalWidth, C = $(y).find("img")[0].naturalHeight;
            if (N == null) {
                var e = new Image;
                e.src = $(y).find("img").eq(0).attr("src"), N = e.width, C = e.height
            }
            O(), _(), D(k, L), n.publish("CROSSFADER_CHANGE", [N, C])
        }
        function O() {
            var e = $(a).width() - 6,
                t = $(a).height();
            l && (t -= 70);
            var n = N / C,
                r = e / t;
            n > r ? ($(y).width(e), $(y).height(e / n)) : ($(y).height(t), $(y).width(t * n)), $(y).css("left", (e - $(y).width()) / 2), $(y).css("top", Math.floor((t - $(y).height()) / 2)), M()
        }
        function M() {
            if (l) {
                $(S).addClass("placardUnder"), $(S).css("height", "auto");
                var e = $(a).height() - $(y).height(),
                    t = $("#placardContainer")[0].scrollHeight,
                    n, i, s, o;
                $(S).find("#placard-bg").css("display", "block"), $(T).html("&#x25BC;"), t > e - 40 ? (n = 0, i = Math.max(e - 30, 50), s = "auto", o = 0) : (n = (e - t - 25) / 2, i = "auto", s = $(y).height() + n + 25, o = "auto"), $(S).css("height", i), $(S).css("top", s), $(S).css("bottom", o), $(y).css("top", n)
            } else $(S).removeClass("placardUnder"), $(S).css("height", "auto"), $(S).css("top", "auto"), $(S).css("bottom", Math.ceil(($(a).outerHeight() - u.currentHeight()) / 2));
            f ? ($(S).css("left", ($(a).width() - u.currentWidth()) / 2 - 1), $(S).css("width", u.currentWidth() - 2)) : ($(S).css("left", ($(a).width() - u.currentWidth()) / 2 + 3), $(S).css("width", u.currentWidth() - 6)), (r("ie") == 7 || r("ie") == 8) && $(S).css("left", parseInt($(S).css("left"), 10) - 3 + (f ? 3 : 0))
        }
        function _() {
            $(y).addClass("current"), $(b).removeClass("current"), $(y).fadeTo("slow", 1), $(b).fadeTo("slow", 0, function () {
                $(b).hide()
            }), setTimeout(function () {
                w.stop()
            }, 100)
        }
        function D(t, n) {
            if (o) {
                var r = 254,
                    i = 1e3;
                $.each(app.data.getSourceLayer().fields, function (e, t) {
                    t.name == app.data.getFieldsConfig().getNameField() && (r = t.length), t.name == app.data.getFieldsConfig().getDescriptionField() && (i = t.length)
                }), t = "<div class='text_edit_label'>" + (t || i18n.viewer.headerJS.editMe) + "</div>", t += "<div class='text_edit_icon' title='" + i18n.viewer.crossFaderJS.setPicture + "'></div>", t += "<textarea rows='3' class='text_edit_input' type='text' " + (r ? "maxlength='" + r + "'" : "") + "></textarea>", n = "<div class='text_edit_label'>" + (n || i18n.viewer.headerJS.editMe) + "</div>", n += "<div class='text_edit_icon' title='" + i18n.viewer.crossFaderJS.setCaption + "'></div>", n += "<textarea rows='6' class='text_edit_input' type='text' " + (i ? "maxlength='" + i + "'" : "") + "></textarea>"
            } else $(S).toggleClass("no-description", n === ""), $(S).toggleClass("force-hidden", t === "" && n === "");
            $(E).empty(), $(E).append("<div class='name'>" + t + "<div/>"), $(E).append("<div class='description'>" + n + "<div/>"), o && (new e(s, null, H), P())
        }
        function P() {
            if (l) {
                var e = $(E).find(".name .text_edit_label")[0].scrollHeight,
                    t = $(E).find(".description .text_edit_label")[0].scrollHeight;
                $(E).find(".name .text_edit_input").css("height", e < 96 ? "50px" : "auto"), $(E).find(".description .text_edit_input").css("height", t < 96 ? "50px" : "auto")
            }
        }
        function H() {
            n.publish("CROSSFADER_DATA_UPDATE")
        }
        var u = this,
            a = $(s),
            f = !1,
            l = !1,
            c = !0,
            h, p, d, v, m, g, y, b, w = new t("pictureLoadingIndicator"),
            E, S, x, T, N = 1,
            C = 1,
            k, L;
        h = document.createElement("div"), $(h).addClass("member-image"), d = document.createElement("img"), $(d).attr("ondragstart", "return false"), $(d).error(function () {
            mediaNotFoundHandler(this)
        }), m = document.createElement("iframe"), p = document.createElement("div"), $(p).addClass("member-image"), v = document.createElement("img"), $(v).attr("ondragstart", "return false"), $(v).error(function () {
            mediaNotFoundHandler(this)
        }), g = document.createElement("iframe"), x = $("<div id='placard-bg'></div>"), E = $("<div id='placard'></div>"), x.append(E), T = $("<div id='toggle'>&#x25BC;</div>"), S = $("<div id='placardContainer'></div>"), S.append(T), S.append(x), $(h).append(d).append(m), $(p).append(v).append(g), $(a).append(h).append(p).append(S), $(d).load(A), $(v).load(A), $(T).fastClick(function () {
            $(x).css("display") == "none" ? $(T).html("&#x25BC;") : $(T).html("&#x25B2;"), $(x).slideToggle()
        }), y = h, this.clean = function () {
            $(E).empty(), $(y).fadeTo("slow", 0), $(b).fadeTo("slow", 0), y = null, b = null, $("#placardContainer").fadeOut()
        }, this.setSource = function (e, t, r, i, s, u) {
            f = i, l = s, c = u, k = t, L = r;
            var a = e;
            a = a, $(y).find("iframe").attr("src", ""), y = y == h ? p : h, b = y == h ? p : h;
            var d = $(y).find(u ? "img" : "iframe");
            $(y).children().hide(), d.show(), d.attr("src") == e ? A() : (d.attr("src", e), w.start()), c || ($(S).toggleClass("force-hidden", !o && t === "" && r === ""), N = 800, C = 400, setTimeout(function () {
                _(), D(t, r), n.publish("CROSSFADER_CHANGE", [N, C])
            }, 800)), $("#placardContainer").fadeIn()
        }, this.invalidate = function () {
            $("#pictureLoadingIndicator").css("padding-top", $(a).height() / 2 - (f ? 30 : 26)), $("#pictureLoadingIndicator").css("padding-left", $(a).width() / 2 - (f ? 54 : 6)), O()
        }, this.currentWidth = function () {
            return $(y).outerWidth()
        }, this.currentHeight = function () {
            return $(y).outerHeight()
        }, this.firstDisplayCheck = function () {
            o && P(), M()
        }, this.exitBuilderMode = function () {
            o = !1;
            var e = $(E).find(".name .text_edit_label").html(),
                t = $(E).find(".description .text_edit_label").html();
            $(E).empty(), $(E).append("<div class='name'>" + e + "<div/>"), $(E).append("<div class='description'>" + t + "<div/>")
        }, this.invalidate()
    }
}), define("storymaps/utils/ResamplePicture", ["dojo/has"], function (e) {
    return {
        resample: function (t, n, r, i, s, o, u) {
            if (!t || !n || !r || !i || !s || !o) return !1;
            var a = t.getContext("2d");
            s = Math.min(r, s), o = Math.min(i, o);
            var f = r / i,
                l = f >= 1 ? s : r / (i / o),
                c = f < 1 ? o : i / (r / s);
            return c > o ? (l /= c / o, c = o) : l > s && (c /= l / s, l = s), l = parseInt(l, 10), c = parseInt(c, 10), e("ios") && u === 0 ? (t.width = c, t.height = l, a.translate(c, 0), a.rotate(90 * Math.PI / 180)) : e("ios") && u == 180 ? (t.width = c, t.height = l, a.translate(0, l), a.rotate(2 * Math.PI / 180)) : e("ios") && u == -90 ? (t.width = l, t.height = c, a.translate(l, c), a.rotate(180 * Math.PI / 180)) : (t.width = l, t.height = c), a.drawImage(n.get(0), 0, 0, l, c), [l, c]
        }
    }
}), define("storymaps/maptour/ui/desktop/PicturePanel", ["storymaps/ui/crossfader/CrossFader", "storymaps/maptour/core/MapTourHelper", "storymaps/maptour/core/WebApplicationData", "storymaps/utils/Helper", "storymaps/utils/ResamplePicture", "dojo/topic", "dojo/query"], function (e, t, n, r, i, s, o) {
    return function (a, f) {
        function O(t, n, r) {
            D(), $(a + " #cfader").empty(), this.update(t, r), v = new e(a + " #cfader", f), s.subscribe("CROSSFADER_CHANGE", function (e, t) {
                m = [e, t], g = !0, s.publish("CORE_RESIZE")
            }), l || ($("#arrowPrev").fastClick(function () {
                s.publish("PIC_PANEL_PREV", null)
            }), $("#arrowNext").fastClick(function () {
                s.publish("PIC_PANEL_NEXT", null)
            }));
            var i = document.getElementById("picturePanel");
            Hammer(i).on("swipeleft", function () {
                s.publish("PIC_PANEL_NEXT", null)
            }), Hammer(i).on("swiperight", function () {
                s.publish("PIC_PANEL_PREV", null)
            }), f && R(n), s.subscribe("CROSSFADER_DATA_UPDATE", function () {
                s.publish("CORE_RESIZE"), z()
            }), l = !0
        }
        function M(e, t) {
            t ? c.css("background-color", "inherit") : c.css("background-color", e), t ? ($("#picturePanel").css("top", $("#header").height()), $("#cfader").css("margin-left", 0)) : ($("#picturePanel").css("top", "auto"), $("#cfader").css("margin-left", h), $("#cfader").css("margin-top", p))
        }
        function _() {
            f = !1, v.exitBuilderMode()
        }
        function D() {
            v && v.clean(), $("#arrowPrev").addClass("disabled"), $("#arrowNext").addClass("disabled")
        }
        function P() {
            v && v.firstDisplayCheck(), q(), f && app.data.getCurrentAttributes() == null && $(".editPictureButtons", c).hide()
        }
        function H(e, t, n, r, i, s, o, u) {
            y = s, w = u, b = !s && (o || !u), v && v.setSource(e, t, n, y, b, w), i.left && y ? $("#arrowPrev").removeClass("disabled").attr("src", "resources/icons/picturepanel-modern-left.png") : i.left ? $("#arrowPrev").removeClass("disabled").attr("src", "resources/icons/picturepanel-left.png") : $("#arrowPrev").addClass("disabled"), i.right && y ? $("#arrowNext").removeClass("disabled").attr("src", "resources/icons/picturepanel-modern-right.png") : i.right ? $("#arrowNext").removeClass("disabled").attr("src", "resources/icons/picturepanel-right.png") : $("#arrowNext").addClass("disabled"), f && ($(".editPictureButtons", c).show(), X(e, r))
        }
        function B(e, t) {
            y ? j(e, t) : F(e, t), I()
        }
        function j(e, t) {
            var n, r, i = e - 2 * h;
            i *= .95, t -= 10;
            var s = t - 2 * p;
            r = s, n = Math.min(parseInt(s * 4 / 3, 10), i);
            var o = r < s ? s : r;
            $("#cfader").width(n), $("#cfader").height(o);
            var u = n,
                a = r + 2 * p;
            a = a < t ? t : a, c.width(u), c.height(a), $("#cfader").css("margin-top", (a - s) / 2), setTimeout(function () {
                var e = $(".member-image.current").position().top + 20;
                $("#arrowPrev").css("top", e), $("#arrowNext").css("top", e), $("#arrowPrev").css("left", (c.width() - $(".member-image.current").width()) / 2 - 3), $("#arrowNext").css("right", (c.width() - $(".member-image.current").width()) / 2)
            }, 50)
        }
        function F(e, t) {
            var n, r, i = e - 2 * h,
                s = t - 2 * p;
            r = s, n = Math.min(parseInt(s * 4 / 3, 10), i);
            var o = r < s ? s : r;
            $("#cfader").width(n), $("#cfader").height(o);
            var u = n + 2 * h,
                a = r + 2 * p;
            a = a < t ? t : a, c.width(u), c.height(a), $("#arrowPrev").css("top", c.height() / 2 - 40), $("#arrowNext").css("top", c.height() / 2 - 40), $("#arrowPrev").css("left", 0), $("#arrowNext").css("right", 0)
        }
        function I() {
            v && v.invalidate(), $("#placard").removeClass("one-line-layout"), !f && e && $("#placardContainer .description").css("max-height", "inherit");
            var e = $("#cfader .current").height();
            $("#placardContainer")[0].scrollHeight > e / 1.5 && !b && ($("#placard").addClass("one-line-layout"), !f && e && $("#placardContainer .description").css("max-height", e / 3)), $("#placard-bg").css("max-height", e - 10 - (y ? 3 : 0)), q(), g && (g = !1, s.publish("CORE_PICTURE_CHANGED"))
        }
        function q() {
            if (f && (app.data.getCurrentIndex() != -1 || app.data.isEditingFirstRecord())) {
                var e = Math.max($(".editPictureButtons .modernBrowserWay a").eq(0).width(), $(".editPictureButtons .modernBrowserWay a").eq(1).width());
                e && $(".editPictureButtons .modernBrowserWay a").width(e), $(".editPictureButtons").css("width", $("#cfader .current").width()), y ? $(".editPictureButtons").css("margin-left", o("#cfader .current").length ? o("#cfader .current").position()[0].x - o("#cfader").position()[0].x : 0) : $(".editPictureButtons").css("margin-left", o("#cfader .current").length ? o("#cfader .current").position()[0].x : 0), $(".editPictureButtons").css("display", "block"), $("#picturePanel").width() < $(".editPictureButtons > div").width() ? $(".editPictureButtons > div").css("display", "none") : $(".editPictureButtons > div").css("display", "inline-block"), $(".editPictureButtons").css("top", parseFloat($("#cfader > .current").first().css("top")) + 24)
            } else $(".editPictureButtons").css("display", "none")
        }
        function R(e) {
            it(), $(".editPictureButtons > div > span", c).hide(), e ? r.browserSupportAttachementUsingFileReader() ? J() : Z() : W()
        }
        function U() {
            if (!f) return;
            var e = $(a + " .name .text_edit_input").css("display") == "inline-block" ? $(a + " .name .text_edit_input").val() : $(a + " .name .text_edit_label").html(),
                t = $(a + " .description .text_edit_input").css("display") == "inline-block" ? $(a + " .description .text_edit_input").val() : $(a + " .description .text_edit_label").html();
            e == i18n.viewer.headerJS.editMe && (e = ""), t == i18n.viewer.headerJS.editMe && (t = ""), s.publish("PIC_PANEL_EDIT", {
                title: e,
                description: t
            })
        }
        function z() {
            console.log("maptour.ui.PicturePanel - saveEdits");
            var e = $(a + " .name .text_edit_label").html(),
                t = $(a + " .description .text_edit_label").html();
            e == i18n.viewer.headerJS.editMe && (e = ""), t == i18n.viewer.headerJS.editMe && (t = ""), s.publish("PIC_PANEL_EDIT", {
                title: e,
                description: t
            })
        }
        function W() {
            $(".editPictureButtons .attributesWay", c).show()
        }
        function X(e, t) {
            if (!$(".editPictureButtons .attributesWay form").is(":visible")) return;
            c.find(".editPictureButtons .attributesWay .btn-picture").popover("destroy"), c.find(".editPictureButtons .attributesWay .btn-picture").popover({
                trigger: "click",
                placement: "bottom",
                html: !0,
                content: '<script>$(".editPictureButtons .attributesWay .btn-picture").next(".popover").addClass("edit-attr-popover");$(".editPictureButtons .attributesWay .btn-thumbnail").popover("hide");</script><div style="margin-bottom: 5px; margin-top: -5px;"> <input type="radio" name="editType" value="image" />&nbsp;' + i18n.viewer.builderHTML.addLabelPicUrl + "&nbsp;&nbsp;" + ' <input type="radio" name="editType" value="video"' + (n.getDisableVideo() ? " disabled" : "") + "/>&nbsp;" + i18n.viewer.builderHTML.addLabelVideo + ' <a id="changePictureVideoTooltip"><img src="resources/icons/builder-help.png" style="vertical-align: -4px;"/></a>' + "</div>" + '<input type="text" value="' + e + '"/>' + '<button type="button" class="btn btn-small btn-primary" onClick="app.desktopPicturePanel.editPointURL(0, true)">' + i18n.viewer.builderHTML.modalApply + "</button>" + '<button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.editPointURL(0, false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + '<div class="error">' + i18n.viewer.addPopupJS.errorInvalidPicUrl + "</div>" + "<script>" + ' $("input[name=editType]").eq(' + (w ? 0 : 1) + ").click();" + " $('#changePictureVideoTooltip').popover({ 										trigger: 'hover', 										placement: 'bottom', 										html: true, 										content: '<div style=\"font-size: 14px; margin-bottom: 2px;\">" + i18n.viewer.builderHTML.addMediaVideoHelpTooltip4 + '</div><img src="resources/icons/builder-picturepanel-tooltip-youtube.png" width="245px" />\'});' + "</script>"
            }), c.find(".editPictureButtons .attributesWay .btn-thumbnail").popover("destroy"), c.find(".editPictureButtons .attributesWay .btn-thumbnail").popover({
                trigger: "click",
                placement: "bottom",
                html: !0,
                content: '<script>$(".editPictureButtons .attributesWay .btn-thumbnail").next(".popover").addClass("edit-attr-popover");$(".editPictureButtons .attributesWay .btn-picture").popover("hide");</script><input type="text" value="' + t + '"/>' + '<button type="button" class="btn btn-small btn-primary" onClick="app.desktopPicturePanel.editPointURL(1, true)">' + i18n.viewer.builderHTML.modalApply + "</button>" + '<button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.editPointURL(1,false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + '<div class="error">' + i18n.viewer.addPopupJS.errorInvalidThumbUrl + "</div>"
            })
        }
        function V(e, n) {
            var r = ".editPictureButtons .attributesWay " + (e === 0 ? ".btn-picture" : ".btn-thumbnail"),
                i = $(r).next(".popover").find("input[type=text]").val(),
                s = t.validateImageURL(i);
            e === 0 && $("input[name=editType]:checked").val() == "video" && (s = t.validateURL(i));
            if (n) {
                s || (e === 0 && $("input[name=editType]:checked").val() == "video" ? $(r).next(".popover").find(".error").html(i18n.viewer.addPopupJS.errorInvalidVideoUrl) : e === 0 && $(r).next(".popover").find(".error").html(i18n.viewer.addPopupJS.errorInvalidPicUrl)), $(r).next(".popover").find(".error").toggle(!s);
                if (!s) return;
                app.data.changeCurrentPointPicURL(e === 0 ? "picture" : "thumbnail", i)
            }
            $(r).popover("hide")
        }
        function J() {
            $(".editPictureButtons .modernBrowserWay", c).show(), x.popover({
                placement: "bottom",
                trigger: "manual",
                html: !0,
                content: '<script> $(".editPictureButtons").find(".btn-picture").next(".popover").addClass("picturePanelPicturePopoverFR"); function closeMe(){$(".editPictureButtons").find(".btn-picture").popover("hide");}</script><div class="confirmationStep"> ' + i18n.viewer.picturePanelJS.popoverDeleteWarningPicAndThumb + ' <button type="button" class="btn btn-danger btn-small" onclick="app.desktopPicturePanel.pictureConfirmation(true)">' + i18n.viewer.builderJS.ok + "</button>" + ' <button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.pictureConfirmation(false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + "</div>" + '<div class="waitStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadingPhoto + ' ... <img src="resources/icons/loader-upload.gif" class="addSpinner" alt="Uploading">' + "</div>" + '<div class="loadedStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadSuccessful + "</div>" + '<div class="errorStep" style="display: none; color: red; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadError + ' <button type="button" class="btn btn-danger btn-small" onclick="closeMe()" style="vertical-align: 1px;">' + i18n.viewer.builderJS.gotIt + "</button>" + "</div>"
            }), T.change(function () {
                x.popover("show")
            }), N.popover({
                placement: "bottom",
                trigger: "manual",
                html: !0,
                content: '<script>$(".editPictureButtons").find(".btn-thumbnail").next(".popover").addClass("picturePanelThumbnailPopover");function closeMe(){$(".editPictureButtons").find(".btn-thumbnail").popover("hide");}</script><div class="confirmationStep"> ' + i18n.viewer.picturePanelJS.popoverDeleteWarningThumb + " " + ' <button type="button" class="btn btn-danger btn-small" onclick="app.desktopPicturePanel.thumbnailConfirmation(true)">' + i18n.viewer.builderJS.ok + "</button>" + ' <button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.thumbnailConfirmation(false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + "</div>" + '<div class="waitStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadingThumbnail + ' ... <img src="resources/icons/loader-upload.gif" class="addSpinner" alt="Uploading">' + "</div>" + '<div class="loadedStep" style="display: none; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadSuccessful + "</div>" + '<div class="errorStep" style="display: none; color: red; text-align:center">' + " " + i18n.viewer.picturePanelJS.popoverUploadError + ' <button type="button" class="btn btn-danger btn-small" onclick="closeMe()" style="vertical-align: 1px;">' + i18n.viewer.builderJS.gotIt + "</button> " + "</div>"
            }), N.change(function () {
                N.popover("show")
            })
        }
        function K(e) {
            var t = T.get(0).files[0];
            if (!e || !t) {
                Q(), x.popover("hide");
                return
            }
            var n = x.next(".popover");
            n.find(".confirmationStep").css("display", "none"), n.find(".waitStep").css("display", "block");
            if (t.type === "image/jpeg") {
                var r = new FileReader;
                r.onloadend = function () {
                    var e = this.result;
                    E.attr("src", e), E.load(function (t) {
                        i.resample(S.get(0), E, t.currentTarget.naturalWidth, t.currentTarget.naturalHeight, app.config.thumbnailMaxWidth, app.config.thumbnailMaxHeight, window.orientation), app.data.changeCurrentPointPicAndThumbUsingData(e, S.get(0).toDataURL("image/jpeg"), function (e) {
                            e ? (n.find(".waitStep").css("display", "none"), n.find(".loadedStep").css("display", "block"), setTimeout(function () {
                                x.popover("hide")
                            }, d)) : (n.find(".waitStep").css("display", "none"), n.find(".errorStep").css("display", "block"))
                        }), Q()
                    })
                }, r.readAsDataURL(t)
            } else alert(i18n.viewer.addPopupJS.notJpg), n.hide()
        }
        function Q() {
            T.closest("form").get(0).reset()
        }
        function G(e) {
            var t = C.get(0).files[0];
            if (!e || !t) {
                Y(), N.popover("hide");
                return
            }
            var n = N.next(".popover");
            n.find(".confirmationStep").css("display", "none"), n.find(".waitStep").css("display", "block");
            if (t.type === "image/jpeg") {
                var r = new FileReader;
                r.onloadend = function () {
                    app.data.changeCurrentPointThumbnailUsingData(this.result, function (e) {
                        e ? (n.find(".waitStep").css("display", "none"), n.find(".loadedStep").css("display", "block"), setTimeout(function () {
                            N.popover("hide")
                        }, d)) : (n.find(".waitStep").css("display", "none"), n.find(".errorStep").css("display", "block"))
                    }), Y()
                }, r.readAsDataURL(t)
            } else alert(i18n.viewer.addPopupJS.notJpg), n.hide()
        }
        function Y() {
            C.closest("form").get(0).reset()
        }
        function Z() {
            $(".editPictureButtons .oldBrowserWay", c).show(), k.change(et), L.change(et), A.popover({
                placement: "bottom",
                html: !0,
                content: '<script>$(".editPictureButtons .oldBrowserWay").find(".btn-upload").next(".popover").addClass("picturePanelPicturePopoverOLD");function closeMe(){$(".editPictureButtons .oldBrowserWay").find(".btn-upload").popover("hide");}</script><div class="confirmationStep"> ' + i18n.viewer.picturePanelJS.popoverDeleteWarningPicAndThumb + ' <button type="button" class="btn btn-danger btn-small" onclick="app.desktopPicturePanel.formConfirmation(true)">' + i18n.viewer.builderJS.ok + "</button>" + ' <button type="button" class="btn btn-small" onClick="app.desktopPicturePanel.formConfirmation(false)">' + i18n.viewer.builderHTML.modalCancel + "</button>" + "</div>" + '<div class="waitStep" style="display: none">' + " " + i18n.viewer.picturePanelJS.popoverUploadingPhoto + ' ... <img src="resources/icons/loader-upload.gif" class="addSpinner" alt="Uploading">' + "</div>" + '<div class="loadedStep" style="display: none">' + " " + i18n.viewer.picturePanelJS.popoverUploadSuccessful + "</div>" + '<div class="errorStep" style="display: none; color: red">' + " " + i18n.viewer.picturePanelJS.popoverUploadError + ' <button type="button" class="btn btn-danger btn-small" onclick="closeMe()" style="vertical-align: 1px;">' + i18n.viewer.builderJS.gotIt + "</button> " + "</div>"
            })
        }
        function et() {
            $(k[0]).val() && $(L[0]).val() ? A.removeAttr("disabled") : A.attr("disabled", "true")
        }
        function tt(e) {
            if (!e || !$(k[0]).val() || !$(L[0]).val()) {
                A.popover("hide");
                return
            }
            var t = A.next(".popover");
            t.find(".confirmationStep").css("display", "none"), t.find(".waitStep").css("display", "block"), app.data.changeCurrentPointPicAndThumbUsingForm("ppOldBrowserWayPicForm", "ppOldBrowserWayThumbForm", function (e) {
                e ? (nt(), t.find(".waitStep").css("display", "none"), t.find(".loadedStep").css("display", "block"), setTimeout(function () {
                    A.popover("hide")
                }, d)) : (t.find(".waitStep").css("display", "none"), t.find(".errorStep").css("display", "block"))
            })
        }
        function nt() {
            k.closest("form").get(0).reset(), L.closest("form").get(0).reset(), A.attr("disabled", "true")
        }
        function rt() {}
        function it() {
            var e = $(".editPictureButtons .modernBrowserWay");
            e.find("a.btn-picture").html(e.find("a.btn-picture").html().replace("Browse", i18n.viewer.picturePanelJS.changePicAndThumb)), e.find("a.btn-thumbnail").html(e.find("a.btn-thumbnail").html().replace("Browse", i18n.viewer.picturePanelJS.changeThumb)), x = e.find("a.btn-picture"), T = e.find(".btn-picture input"), N = e.find("a.btn-thumbnail"), C = e.find(".btn-thumbnail input");
            var t = $(".editPictureButtons .oldBrowserWay");
            t.find("a.btn-picture").html(t.find("a.btn-picture").html().replace("Browse", i18n.viewer.picturePanelJS.selectPic)), t.find("a.btn-thumbnail").html(t.find("a.btn-thumbnail").html().replace("Browse", i18n.viewer.picturePanelJS.selectThumb)), t.find(".btn-upload").html(i18n.viewer.picturePanelJS.uploadPicAndThumb), k = t.find(".btn-picture input"), L = t.find(".btn-thumbnail input"), A = t.find(".btn-upload"), $(".editPictureButtons .attributesWay .btn-picture").html(i18n.viewer.picturePanelJS.selectPic), $(".editPictureButtons .attributesWay .btn-thumbnail").html(i18n.viewer.picturePanelJS.selectThumb)
        }
        var l = !1,
            c = $(a),
            h = 45,
            p = 20,
            d = 2e3,
            v = null,
            m = [],
            g = !1,
            y = !1,
            b = !1,
            w = !0,
            E = $('<img src=""/>'),
            S = $('<canvas width="140px" height="93px">'),
            x = null,
            T = null,
            N = null,
            C = null,
            k = null,
            L = null,
            A = null;
        return {
            init: O,
            initLocalization: rt,
            updatePicture: H,
            clean: D,
            resize: B,
            saveEdits: z,
            forceSaveEdits: U,
            update: M,
            pictureConfirmation: K,
            thumbnailConfirmation: G,
            formConfirmation: tt,
            editPointURL: V,
            exitBuilderMode: _,
            firstDisplayCheck: P
        }
    }
}), define("storymaps/maptour/ui/mobile/IntroView", ["storymaps/maptour/core/MapTourHelper", "dojo/topic"], function (e, t) {
    return function () {
        this.init = function (n, r) {
            $(".navBar span").removeClass("current"), app.header.hideMobileBanner(!0), location.hash = "", $("#introPanel").html('<div class="slide"> <h2 class="tourPointName">' + n.attributes.getName() + "</h2>" + ' <p class="tourPointDescription">' + n.attributes.getDescription() + "</p>" + (e.mediaIsSupportedImg(n.attributes.getURL()) ? '<img class="tourPointImg" src="' + n.attributes.getURL() + '" />' : '<iframe class="tourPointIframe" src="' + n.attributes.getURL() + '"></iframe>') + " <br /><br />" + ' <button class="btn btn-large btn-primary">' + i18n.viewer.mobileHTML.introStartBtn + "</button>" + "</div>"), $("#introPanel").fastClick(function () {
                t.publish("PIC_PANEL_NEXT")
            }), $("#introPanel").css("background-color", r), $("#introPanel").show()
        }, this.hide = function () {
            $("#introPanel").find(".tourPointIframe").attr("src", ""), $("#mapViewLink").addClass("current"), $("#introPanel").hide()
        }
    }
}), define("storymaps/maptour/ui/mobile/ListView", ["storymaps/maptour/core/MapTourHelper", "dojo/topic", "dojo/has"], function (e, t, n) {
    return function (i) {
        function c(t) {
            a = new iScroll($(i + " .listWrapper")[0], {
                onBeforeScrollMove: function (e) {
                    if (Math.abs(l.onScroll[0] - e.screenX) > 5 || Math.abs(l.onScroll[1] - e.screenY) > 5) f = !0;
                    if (a.y == a.maxScrollY || a.y === 0) f = !1
                },
                onScrollStart: function () {
                    l.onScroll = [l.onMove[0], l.onMove[1]]
                },
                onBeforeScrollEnd: function () {
                    n("touch") && (f = !1)
                },
                onScrollEnd: function () {
                    if (a.y == a.maxScrollY || a.y === 0) f = !1
                }
            }), $(i + " .listScroller").css("height", t.length * s + "px");
            var r = document.createDocumentFragment();
            u = !0, $.each(t, function (t, n) {
                var i = n.attributes,
                    s = document.createElement("div");
                s.className = "listItem", s.style.backgroundColor = o;
                var u = document.createElement("div");
                u.className = "tpImgPane", s.appendChild(u);
                var a = document.createElement("div");
                a.className = "tpImgContainer", u.appendChild(a);
                var f = document.createElement("img");
                f.setAttribute(location.hash == "#list" ? "src" : "data-src", i.getThumbURL()), a.appendChild(f);
                var l = document.createElement("img");
                l.className = "tpIcon", l.src = e.getSymbolUrl(i.getColor(), t + 1), s.appendChild(l);
                var c = document.createElement("div");
                c.className = "tpTextPane", s.appendChild(c);
                var h = document.createElement("h4");
                h.className = "tpName", h.innerHTML = i.getName(), c.appendChild(h);
                var p = document.createElement("p");
                p.className = "tpDescription", p.innerHTML = i.getDescription(), c.appendChild(p), r.appendChild(s)
            }), $(i + " #listPanelScroller").empty(), document.getElementById("listPanelScroller").appendChild(r)
        }
        function h() {
            $(i).click(p), t.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", v)
        }
        function p(e) {
            if (!e || !e.target) return;
            setTimeout(function () {
                d(e)
            }, 50)
        }
        function d(e) {
            var n = $(e.target).closest(".listItem").index();
            !f && n != -1 && t.publish("OPEN_MOBILE_INFO", n), f = !1
        }
        function v(t) {
            var n = $(i + " .listItem:nth-child(" + (t.index + 1) + ")");
            n.find(".tpName").html(t.name), n.find(".tpDescription").html(t.description), n.find(".tpIcon").attr("src", e.getSymbolUrl(t.color, t.index + 1))
        }
        function m(e) {
            $(i).css("background-color", e), $(i + " .listItem").css("background-color", e), o = e
        }
        var s = 101,
            o = "",
            u = !0,
            a = null,
            f = !1,
            l = {
                onMove: [-1, -1],
                onScroll: [-1, -1]
            };
        this.init = function (e, t) {
            $(i + " .listWrapper").mousemove(function (e) {
                l.onMove[0] = e.screenX, l.onMove[1] = e.screenY
            }), m(t), c(e), h()
        }, this.update = function (e, t) {
            m(t), a.destroy(), c(e)
        }, this.show = function () {
            $(i).show(), u && ($(i).find(".tpImgPane img").each(function (e, t) {
                $(t).attr("src", $(t).data("src"))
            }), u = !1), a.maxScrollY == 1 && a.refresh();
            if (a.maxScrollY < 0) {
                var e = Math.min(app.data.getCurrentIndex() * s, -a.maxScrollY);
                a.scrollTo(0, -e), a.refresh()
            }
        }
    }
}), define("storymaps/maptour/ui/mobile/InfoView", ["storymaps/maptour/core/MapTourHelper", "dojo/topic"], function (e, t) {
    return function (r) {
        function o(t) {
            s = !0, i = new SwipeView(r, {
                numberOfPages: t.length
            });
            var n = Math.min(3, Math.max(3, t.length));
            for (var o = 0; o < n; o++) {
                var u = t.length == 1 ? 0 : o === 0 ? t.length - 1 : o - 1,
                    a = t[u];
                if (!a) continue;
                var f = t[u].attributes,
                    l = document.createElement("div");
                l.className = "tourPoint", l.id = "tourPoint" + u;
                var c = document.createElement("div");
                c.className = "iconHolder", l.appendChild(c);
                var h = document.createElement("img");
                h.className = "tourPointIcon", h.src = e.getSymbolUrl(f.getColor(), u + 1), c.appendChild(h);
                var p = document.createElement("h2");
                p.className = "tourPointName", p.innerHTML = f.getName(), l.appendChild(p);
                var d = document.createElement("p");
                d.className = "tourPointDescription", d.innerHTML = f.getDescription(), l.appendChild(d);
                var v = document.createElement("img");
                v.className = "tourPointImg";
                var m = document.createElement("iframe");
                m.className = "tourPointIframe", e.mediaIsSupportedImg(f.getURL()) ? (v.setAttribute(location.hash == "#info" ? "src" : "data-src", f.getURL()), m.setAttribute("style", "display:none")) : (m.setAttribute("src", f.getURL()), v.setAttribute("style", "display:none")), l.appendChild(v), l.appendChild(m), i.masterPages[o].appendChild(l)
            }
        }
        function u(n) {
            i.onTouchStart(function () {
                app.header.hideMobileBanner()
            }), i.onFlip(function () {
                var r = Math.min(3, n.length);
                for (var s = 0; s < r; s++) {
                    var o = i.masterPages[s],
                        u = o.dataset.upcomingPageIndex;
                    if (!n[u]) continue;
                    var f = n[u].attributes;
                    if (i.pageIndex != o.dataset.pageIndex && u == o.dataset.pageIndex) {
                        var l = o.querySelector(".tourPointIframe");
                        l && l.src && $(l).attr("src", l.src)
                    }
                    if (u != o.dataset.pageIndex) {
                        var c = o.querySelector(".tourPointIcon");
                        c.src = e.getSymbolUrl(f.getColor(), parseInt(u, 10) + 1);
                        var h = o.querySelector(".tourPointImg"),
                            p = o.querySelector(".tourPointIframe");
                        e.mediaIsSupportedImg(f.getURL()) ? h.src = f.getURL() : p.src != f.getURL() && (p.src = f.getURL()), $(h).toggle(e.mediaIsSupportedImg(f.getURL())), $(p).toggle(!e.mediaIsSupportedImg(f.getURL()));
                        var d = o.querySelector(".tourPointName");
                        d.innerHTML = f.getName();
                        var v = o.querySelector(".tourPointDescription");
                        v.innerHTML = f.getDescription()
                    }
                }
                $("body").scrollTop(0), a(), t.publish("MOBILE_INFO_SWIPE", i.pageIndex)
            }), i.onMoveOut(function () {
                clearTimeout(i.delayedFlipEvent), app.header.hideMobileBanner()
            }), a()
        }
        function a() {
            var e = i.masterPages[i.currentMasterPage].querySelector(".tourPointImg");
            if (e) {
                var t = new Image;
                t.onload = function () {
                    $("#infoCarousel").height(i.masterPages[i.currentMasterPage].childNodes[0].clientHeight + 15)
                }, t.src = e.src || e.getAttribute("data-src")
            }
        }
        function f(t) {
            var n = $(r + " .swipeview-active");
            n.find(".tourPointName").html(t.name), n.find(".tourPointDescription").html(t.description), n.find(".tourPointIcon").attr("src", e.getSymbolUrl(t.color, t.index + 1))
        }
        function l(e) {
            $("#infoPanel").css("background-color", e)
        }
        var i = null,
            s = !0;
        this.init = function (e, n) {
            l(n), o(e), u(e), t.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", f)
        }, this.update = function (e, t) {
            l(t), i.destroy(), $(r).empty(), o(e), u(e)
        }, this.show = function () {
            $("#infoPanel").show(), s && ($(r).find(".tourPoint img").each(function (e, t) {
                $(t).attr("src", $(t).data("src"))
            }), s = !1), i.refreshSize(), i.goToPage(app.data.getCurrentIndex())
        }, this.getCurrentPoint = function () {
            return i.pageIndex
        }
    }
}), define("storymaps/maptour/ui/mobile/Carousel", ["storymaps/maptour/core/MapTourHelper", "dojo/topic"], function (e, t) {
    return function (r, i) {
        function a(t) {
            s = new SwipeView(r + " .carousel", {
                numberOfPages: t.length
            });
            var n = Math.min(3, Math.max(3, t.length));
            for (var i = 0; i < n; i++) {
                var o = t.length == 1 ? 0 : i === 0 ? t.length - 1 : i - 1,
                    u = t[o];
                if (!u) continue;
                var a = u.attributes,
                    f = document.createElement("div");
                f.className = "tpPreview";
                var l = document.createElement("div");
                l.className = "tpImgPane", f.appendChild(l);
                var c = document.createElement("div");
                c.className = "tpImgContainer", l.appendChild(c);
                var h = document.createElement("img");
                h.src = a.getThumbURL(), c.appendChild(h);
                var p = document.createElement("img");
                p.className = "tpIcon", p.src = e.getSymbolUrl(a.getColor(), o + 1), f.appendChild(p);
                var d = document.createElement("div");
                d.className = "tpTextPane", f.appendChild(d);
                var v = document.createElement("h4");
                v.className = "tpName", v.innerHTML = a.getName(), d.appendChild(v);
                var m = document.createElement("p");
                m.className = "tpDescription previewDescription", m.innerHTML = a.getDescription(), d.appendChild(m), s.masterPages[i].appendChild(f)
            }
        }
        function f(n) {
            $(".tpPreview").click(function (e) {
                Math.abs(e.clientX - u[0]) < 10 && Math.abs(e.clientY - u[1]) < 10 && t.publish("OPEN_MOBILE_INFO", null)
            }), $(r + " .carousel").mousedown(function (e) {
                u = [e.clientX, e.clientY]
            }), s.onFlip(function () {
                var r = Math.min(3, n.length);
                for (var i = 0; i < r; i++) {
                    var u = s.masterPages[i],
                        a = u.dataset.upcomingPageIndex;
                    if (!n[a]) return;
                    var f = n[a].attributes;
                    if (a != u.dataset.pageIndex) {
                        var l = u.querySelector(".tpImgPane img");
                        l.src = f.getThumbURL();
                        var c = u.querySelector(".tpIcon");
                        c.src = e.getSymbolUrl(f.getColor(), parseInt(a, 10) + 1);
                        var h = u.querySelector(".tpName");
                        h.innerHTML = f.getName();
                        var p = u.querySelector(".tpDescription");
                        p.innerHTML = f.getDescription()
                    }
                }
                app.data.getCurrentIndex() != -1 && app.data.getCurrentIndex() != s.pageIndex && (o = !0, t.publish("CAROUSEL_SWIPE", s.pageIndex))
            })
        }
        function l(t) {
            var n = $(r + " .carousel .swipeview-active");
            n.find(".tpName").html(t.name), n.find(".tpDescription").html(t.description), n.find(".tpIcon").attr("src", e.getSymbolUrl(t.color, t.index + 1))
        }
        function c(e) {
            $(r + " .carousel").css("background-color", e), $(r + " .builderMobile").css("background-color", e)
        }
        var s = null,
            o = !1,
            u = [0, 0];
        this.init = function (e, n) {
            i && $(r + " .builderMobileContainer").css("display", "block"), c(n), a(e), f(e), t.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", l)
        }, this.update = function (e, t) {
            c(t), s.destroy(), $(r + " .carousel").empty(), a(e), f(e)
        }, this.setSelectedPoint = function (e) {
            if (!s) return;
            o ? o = !1 : (s.refreshSize(), s.goToPage(e))
        }
    }
}), define("storymaps/maptour/core/MainView", ["storymaps/maptour/core/WebApplicationData", "storymaps/maptour/core/TourPointAttributes", "storymaps/maptour/core/FeatureServiceManager", "storymaps/maptour/core/MapTourHelper", "storymaps/ui/multiTips/MultiTips", "storymaps/maptour/ui/desktop/Carousel", "storymaps/maptour/ui/desktop/PicturePanel", "storymaps/maptour/ui/mobile/IntroView", "storymaps/maptour/ui/mobile/ListView", "storymaps/maptour/ui/mobile/InfoView", "storymaps/maptour/ui/mobile/Carousel", "storymaps/utils/Helper", "dojo/has", "esri/tasks/query", "esri/layers/GraphicsLayer", "esri/renderers/UniqueValueRenderer", "esri/graphic", "esri/geometry/Point", "esri/geometry/Extent", "esri/config", "esri/urlUtils", "esri/geometry/webMercatorUtils", "dojo/topic", "dojo/Deferred", "dojo/dom", "dojo/on", "dojo/_base/connect", "dojo/query", "dojo/dom-geometry"], function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L) {
    return function () {
        function _(t) {
            console.log("maptour.core.Core - tourPointLayerLoaded");
            if (app.isInBuilderMode && !app.data.sourceIsNotFSAttachments() && h("ie") == 10 && navigator.userAgent.match("Windows NT 6.1")) {
                O.initError("ie10Win7Explain");
                return
            }
            O.cleanLoadingTimeout(), app.data.getSourceLayer() && app.data.getSourceLayer().setVisibility(!1), O.handleWindowResize(), M.setMapExtent(c.getWebMapExtentFromItem(app.data.getWebMapItem().item)).then(function () {
                var n = esri.urlToObject(document.location.search).query || {},
                    i = parseInt(n.index, 10);
                app.data.setTourPoints(t.graphics.slice(0, APPCFG.MAX_ALLOWED_POINTS)), i && (isNaN(i) || i < 0 || i > app.data.getTourPoints().length) && (i = null), (configOptions.firstRecordAsIntro || e.getFirstRecordAsIntro()) && t.graphics.length > 1 ? (app.data.setFirstPointAsIntroRecord(), i ? app.data.setCurrentPointByIndex(i - 1) : app.data.setCurrentPointByIndex(null), app.isInBuilderMode && $("#builderPanel3").toggle(app.data.hasIntroRecord())) : i ? app.data.setCurrentPointByIndex(i - 1) : app.data.setCurrentPointByIndex(t.graphics.length ? 0 : -1), t.graphics.length >= APPCFG.MAX_ALLOWED_POINTS && app.data.setMaxAllowedFeatureReached(!0);
                var s = app.data.getTourPoints(),
                    o = new d({
                        id: "mapTourGraphics"
                    }),
                    u = app.data.getTourPoints(!0);
                $(u).each(function (e, t) {
                    o.add(t)
                });
                var a = new v(null, app.data.getFeatureIDField());
                $(s).each(function (e, t) {
                    a.addValue({
                        value: t.attributes.getID(),
                        symbol: r.getSymbol(t.attributes.getColor(), e + 1)
                    })
                }), o.setRenderer(a), app.map.addLayer(o), C.connect(o, "onMouseOver", j), C.connect(o, "onMouseOut", F), N(o, "click", B), N(app.map, "click", H), app.data.setTourLayer(o), app.map.loaded ? O.appInitComplete() : N(app.map, "load", function () {
                    app.map._bingLogo ? N.once(app.map, "update-end", function () {
                        M.setMapExtent(c.getWebMapExtentFromItem(app.data.getWebMapItem().item)).then(O.appInitComplete)
                    }) : O.appInitComplete()
                })
            })
        }
        function D() {
            var t = e.getColors(),
                n = app.data.getTourPoints();
            app.desktopCarousel.init(n, t[2], t[1]), S.subscribe("CAROUSEL_CLICK", K);
            if (h("ie") === undefined || h("ie") > 8) app.mobileCarousel.init(n, t[2]), S.subscribe("CAROUSEL_SWIPE", K), app.mobileListView.init(n, t[2]), app.mobileInfoView.init(app.data.getTourPoints(), t[2]), S.subscribe("OPEN_MOBILE_INFO", nt), S.subscribe("MOBILE_INFO_SWIPE", K)
        }
        function P() {
            app.data.getIntroData() && app.data.getCurrentIndex() == null && (!h("ie") || h("ie") > 8) && app.mobileIntroView.init(app.data.getIntroData(), e.getColors()[2]), O.displayApp(), setTimeout(app.desktopPicturePanel.firstDisplayCheck, 50), app.isFirstUserAction = !0, S.publish("maptour-ready")
        }
        function H(e) {
            !e.graphic && !app.isInBuilderMode && app.mapTips.hide()
        }
        function B(e) {
            e.graphic != app.data.getCurrentGraphic() ? (app.filterMouseHoverEvent = !0, U(), app.data.setCurrentPointByGraphic(e.graphic), z(), setTimeout(function () {
                app.filterMouseHoverEvent = !1
            }, 500)) : R()
        }
        function j(e) {
            if (c.isMobile() || app.filterMouseHoverEvent) return;
            app.map.setMapCursor("pointer");
            var t = e.graphic,
                n = t == app.data.getCurrentGraphic();
            n || Z(t, "hover"), (!n || !app.isInBuilderMode && !r.isOnMobileView() && !$(".multiTip").is(":visible")) && I(t)
        }
        function F(e) {
            app.map.setMapCursor("default"), q();
            var t = e.graphic;
            t != app.data.getCurrentGraphic() && Z(t, "normal")
        }
        function I(e) {
            var t = app.map.toScreen(e.geometry),
                n = t.x,
                r = t.y;
            if (!e.attributes.getName()) return;
            $("#hoverInfo").html(e.attributes.getName()), n <= $("#mainMap").width() - 230 ? $("#hoverInfo").css("left", n + 15) : $("#hoverInfo").css("left", n - 25 - $("#hoverInfo").width()), r >= $("#hoverInfo").height() + 50 ? $("#hoverInfo").css("top", r - 35 - $("#hoverInfo").height()) : $("#hoverInfo").css("top", r - 15 + $("#hoverInfo").height()), $("#hoverInfo").show()
        }
        function q() {
            $("#hoverInfo").hide()
        }
        function R() {
            !app.isInBuilderMode && !r.isOnMobileView() && !$(".multiTip").is(":visible") && app.data.getCurrentGraphic().attributes.getName() !== "" && (q(), app.mapTips && app.mapTips.show())
        }
        function U() {
            app.mapCommand.startLoading(), Z(app.data.getCurrentGraphic(), "normal"), app.mapTips && app.mapTips.hide(), app.header.mobileHeaderIsInFirstState() && app.header.hideMobileBanner(), app.isInBuilderMode && (app.desktopPicturePanel.forceSaveEdits(), app.builderMoveEvents && app.builderMoveEvents.clean())
        }
        function z(t) {
            console.log("maptour.core.Core - selectedPointChange_after");
            var n = t ? t.attributes : app.data.getCurrentAttributes();
            app.data.setIsEditingFirstRecord( !! t);
            if (!n) {
                console.error("selectedPointChange_after - invalid point"), O.handleWindowResize(), W(), app.desktopPicturePanel.clean();
                return
            }
            app.desktopPicturePanel.updatePicture(n.getURL(), n.getName(), n.getDescription(), n.getThumbURL(), X(t), r.isModernLayout(), e.getPlacardPosition() === "under" || configOptions.placardPosition === "under", r.mediaIsSupportedImg(n.getURL()))
        }
        function W() {
            var t = app.data.getCurrentIndex(),
                n = app.data.getCurrentGraphic();
            q(), app.mapTips && app.mapTips.clean();
            if (app.isFirstUserAction) {
                app.isFirstUserAction = !1;
                var r = parseInt(e.getZoomLevel() !== "" && e.getZoomLevel() !== undefined ? e.getZoomLevel() : configOptions.zoomLevel, 10);
                if (r !== "" && r != -1 && "" + r != "NaN" && r != app.map.getZoom()) try {
                    M.centerMap(n.geometry, r), N.once(app.map, "extent-change", function () {
                        Y(n)
                    })
                } catch (i) {} else Y(n)
            } else Y(n);
            app.desktopCarousel.setSelectedIndex(t), app.mobileCarousel.setSelectedPoint(t), app.mapCommand.stopLoading(), S.publish("maptour-point-change-after", t), app.isLoading && P()
        }
        function X(e) {
            var t = app.data.getCurrentIndex();
            return {
                left: !! t && !e,
                right: t != app.data.getNbPoints() - 1
            }
        }
        function V() {
            var e = app.data.getCurrentIndex();
            if (!e) return;
            U(), app.data.setCurrentPointByIndex(e - 1), z()
        }
        function J() {
            var e = app.data.getCurrentIndex();
            e == null && (app.mobileIntroView.hide(), e = -1);
            if (e == app.data.getNbPoints() - 1) return;
            U(), app.data.setCurrentPointByIndex(e + 1), z()
        }
        function K(e) {
            app.data.getCurrentIndex() == null && app.mobileIntroView.hide();
            if (e != app.data.getCurrentIndex()) U(), app.data.setCurrentPointByIndex(e), z();
            else {
                var t = app.data.getCurrentGraphic();
                rt(t.geometry) || M.centerMap(t.geometry), R()
            }
        }
        function Q(e) {
            var t = app.data.getCurrentGraphic();
            if (e.name !== undefined || !e.color) return;
            G(), Z(t, "selected"), et(t)
        }
        function G(e) {
            var t = app.data.getTourPoints(),
                n = app.data.getCurrentId(),
                i = -1,
                s = new v(null, app.data.getFeatureIDField());
            $(t).each(function (e, t) {
                s.addValue({
                    value: t.attributes.getID(),
                    symbol: r.getSymbol(t.attributes.getColor(), e + 1)
                }), t.attributes.getID() == n && (i = e)
            }), app.data.getTourLayer().setRenderer(s), app.data.getTourLayer().refresh(), !e && i == -1 && t.length > 0 && (i = 0), app.data.setCurrentPointByIndex(i)
        }
        function Y(e) {
            if (!app.map || !e) return;
            Z(e, "selected"), app.isInBuilderMode && app.data.sourceIsEditable() && app.builder.updateBuilderMoveable(e)
        }
        function Z(e, t) {
            if (!e) return;
            var n = e.getLayer().renderer.getSymbol(e),
                r = APPCFG.ICON_CFG[t];
            if (!r) return;
            t == "selected" && setTimeout(function () {
                et(e)
            }, 0), n.setWidth(r.width).setHeight(r.height).setOffset(r.offsetX, r.offsetY), e.draw()
        }
        function et(e) {
            rt(e.geometry) ? !app.loadingTimeout && (!app.isInBuilderMode || !$(".multiTip").length) && tt(e) : (N.once(app.map, "extent-change", function () {
                tt(e)
            }), M.centerMap(e.geometry))
        }
        function tt(e) {
            try {
                e.getDojoShape().moveToFront()
            } catch (t) {}
            app.isInBuilderMode ? app.data.sourceIsEditable() && app.builder.createPinPopup(e, app.data.getCurrentIndex(), !r.isOnMobileView()) : app.mapTips = new i({
                map: app.map,
                content: e.attributes.getName(),
                pointArray: [e],
                labelDirection: "auto",
                backgroundColor: APPCFG.POPUP_BACKGROUND_COLOR,
                borderColor: APPCFG.POPUP_BORDER_COLOR,
                pointerColor: APPCFG.POPUP_ARROW_COLOR,
                textColor: "#ffffff",
                offsetTop: 32,
                topLeftNotAuthorizedArea: h("touch") ? [40, 180] : [30, 150],
                mapAuthorizedWidth: r.isModernLayout() ? k("#picturePanel").position()[0].x : -1,
                mapAuthorizedHeight: r.isModernLayout() ? k("#footerDesktop").position()[0].y - k("#header").position()[0].h : -1,
                visible: !r.isOnMobileView() && e.attributes.getName() !== ""
            })
        }
        function nt(e) {
            e != null && K(e), location.hash = "#info"
        }
        function rt(e) {
            var t = r.isModernLayout() && !r.isOnMobileView();
            if (!t) return app.map.extent.contains(e);
            var n = new y(app.map.extent.xmin, app.map.extent.ymin + (10 + L.position(T.byId("footer")).h) * app.map.__LOD.resolution, app.map.extent.xmin + L.position(T.byId("picturePanel")).x * app.map.__LOD.resolution, app.map.extent.ymax, app.map.extent.spatialReference);
            return n.contains(e)
        }
        function it(e) {
            var t = r.isModernLayout() && !r.isOnMobileView();
            if (!t) return app.map.setExtent(e, !0);
            var n = 10 + L.position(T.byId("picturePanel")).w,
                i = 10 + L.position(T.byId("footer")).h,
                s = e.getWidth() / app.map.width,
                o = e.getHeight() / app.map.height,
                u = new y({
                    xmin: e.xmin,
                    ymin: e.ymin - o * i,
                    xmax: e.xmax + s * n,
                    ymax: e.ymax,
                    spatialReference: e.spatialReference
                }),
                a = app.map._params.lods,
                f = c.getFirstLevelWhereExtentFit(u, app.map);
            if (f != -1) {
                var l = new g(e.getCenter().x + (app.map.width / 2 - L.position(T.byId("picturePanel")).x / 2) * a[f].resolution, e.getCenter().y - (10 + L.position(T.byId("footer")).h / 2) * a[f].resolution, e.spatialReference);
                return app.map.centerAndZoom(l, f)
            }
            return app.map.setExtent(u)
        }
        function st() {
            m.prototype.hasBeenUpdated = function () {
                var e = this.attributes.getOriginalGraphic().geometry;
                return this.attributes.hasBeenUpdated() || this.geometry.x != e.x || this.geometry.y != e.y
            }, m.prototype.getUpdatedFeature = function () {
                this.attributes.commitUpdate();
                var e = this.attributes.getOriginalGraphic().geometry;
                return e.x = this.geometry.x, e.y = this.geometry.y, this.attributes.getOriginalGraphic()
            }, m.prototype.restoreOriginal = function () {
                this.attributes.restoreOriginal();
                var e = this.attributes.getOriginalGraphic().geometry;
                this.geometry.x = e.x, this.geometry.y = e.y
            }
        }
        var O = null,
            M = this;
        this.init = function (e) {
            O = e;
            if (app.isInBuilderMode && h("ie") && h("ie") < 9) return O.initError("noBuilderIE8"), !1;
            var t = w.urlToObject(document.location.search).query || {};
            return configOptions.sourceLayerTitle = (t.sourceLayerTitle ? unescape(t.sourceLayerTitle) : null) || configOptions.sourceLayerTitle, configOptions.firstRecordAsIntro = t.firstRecordAsIntro ? t.firstRecordAsIntro == "true" : configOptions.firstRecordAsIntro, configOptions.zoomLevel = t.zoomLevel || configOptions.zoomLevel, app.desktopCarousel = new s("#footerDesktop .carousel", app.isInBuilderMode), app.desktopPicturePanel = new o("#picturePanel", app.isInBuilderMode), app.mobileIntroView = new u("#introPanel"), app.mobileListView = new a("#listPanel"), app.mobileInfoView = new f("#infoCarousel"), app.mobileCarousel = new l("#footerMobile", app.isInBuilderMode), st(), S.subscribe("CORE_UPDATE_EXTENT", this.setMapExtent), S.subscribe("CORE_PICTURE_CHANGED", W), S.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", Q), S.subscribe("PIC_PANEL_PREV", V), S.subscribe("PIC_PANEL_NEXT", J), window.mediaNotFoundHandler = function (e) {
                e.src = r.getNotFoundMedia(), e.onerror = ""
            }, app.isInBuilderMode || $(window).keyup(function (e) {
                e.keyCode == 39 ? J() : e.keyCode == 37 && V()
            }), $(document).bind("touchmove", function (e) {
                $(e.target).parents("#helpPopup, #placardContainer, #infoPanel, #popupViewGeoTag").length || e.preventDefault()
            }), !0
        }, this.webmapLoaded = function () {
            var i, s, o, u;
            if (configOptions.sourceLayerTitle) {
                var a = app.data.getWebMapItem() && app.data.getWebMapItem().itemData ? app.data.getWebMapItem().itemData.operationalLayers : [];
                for (i = app.map.graphicsLayerIds.length - 1; i >= 0; i--) {
                    s = app.map.graphicsLayerIds[i], u = app.map._layers[s], s.split("_").length == 3 ? s = s.split("_").slice(0, 2).join("_") : s.split("_").length == 2 && (s = s.split("_").slice(0, 1).join("_"));
                    if (s.match(/^mapNotes_/) || u.geometryType != "esriGeometryPoint") continue;
                    for (var f = 0; f < a.length; f++) if (a[f].id == s && a[f].title.toUpperCase() == configOptions.sourceLayerTitle.toUpperCase()) {
                        app.data.setSourceLayer(u);
                        break
                    }
                    if (app.data.getSourceLayer()) break
                }
            } else for (i = app.map.graphicsLayerIds.length - 1; i >= 0; i--) {
                o = app.map.graphicsLayerIds[i], u = app.map._layers[o];
                if ((u.visible || u.visible === undefined) && (u.type == "Feature Layer" || u._collection) && u.geometryType == "esriGeometryPoint" && !o.match(/^mapNotes_/)) {
                    if ( !! u.url) {
                        app.data.setSourceLayer(u);
                        break
                    }
                    var l = app.data.electFieldsFromFieldsList(u.fields);
                    if (l && l.allWebmapLayerMandatoryFieldsFound()) {
                        app.data.setSourceLayer(u);
                        break
                    }
                }
            }
            app.desktopPicturePanel.init(e.getColors()[1], !app.data.sourceIsNotFSAttachments(), r.isModernLayout());
            if (app.data.sourceIsFS()) {
                app.isInBuilderMode && (app.data.getSourceLayer().setUserIsAdmin(!0), app.data.getSourceLayer().credential || app.data.getSourceLayer()._forceIdentity(function () {}));
                var d = function () {
                        loadingIndicator.setMessage(i18n.viewer.loading.step3);
                        var e = new n;
                        S.subscribe("FS_MANAGER_LAYER_LOADED", function (e) {
                            if (app.isInBuilderMode || !c.getAppID(O.isProd())) {
                                var t = new p;
                                t.where = "1=1", app.data.getSourceLayer().queryCount(t, function (t) {
                                    app.data.getSourceLayer().graphics.length != t, _(e)
                                }, function () {
                                    _(e)
                                }), app.data.sourceIsNotFSAttachments() && app.data.getSourceLayer().graphics.length && (app.data.getSourceLayer()._nextId = app.data.getSourceLayer().graphics.slice(-1)[0].attributes[app.data.getSourceLayer().objectIdField] + 1)
                            } else _(e)
                        }), e.process(app.data.getSourceLayer(), app.data.isFSWithURLFields())
                    };
                h("ie") > 0 && h("ie") < 9 ? setTimeout(d, 1e3) : N.once(app.map, "update-end", function () {
                    d()
                })
            } else if (app.data.sourceIsWebmap()) {
                loadingIndicator.setMessage(i18n.viewer.loading.step3);
                var v = [];
                $(app.data.getSourceLayer().graphics).each(function (e, n) {
                    v.push(new m(new g(n.geometry.x, n.geometry.y, n.geometry.spatialReference), null, new t(n, null, null, !0)))
                }), _({
                    graphics: v
                })
            } else app.isInBuilderMode ? O.isProd() ? this.showInitPopup() : O.portalLogin().then(this.showInitPopup, function () {
                O.initError("noLayerNoHostedFS")
            }) : c.getAppID(O.isProd()) ? app.data.userIsAppOwner() ? (loadingIndicator.setMessage(i18n.viewer.loading.loadBuilder), setTimeout(function () {
                app.header.switchToBuilder()
            }, 1200)) : O.initError("noLayerView") : O.initError("noLayer")
        }, this.appInitComplete = function () {
            N.once(app.map, "extent-change", function () {
                app.header.hideMobileBanner()
            }), N(app.map, "extent-change", function (e) {
                var t = app.data.getCurrentGraphic();
                if (t && e.extent.contains(t.geometry)) try {
                    t.getDojoShape().moveToFront()
                } catch (n) {}
            }), $.each(app.map.graphicsLayerIds, function (e, t) {
                t != app.data.getSourceLayer().id && $("#" + t + "_layer").css("visibility", "visible")
            }), app.data.getTourPoints().length && z(app.data.getCurrentGraphic() || app.data.getIntroData()), setTimeout(D, 0), app.isInBuilderMode && e.getSourceLayer() && app.data.getSourceLayer().id != e.getSourceLayer() && app.builder.setDataWarning(i18n.viewer.builderHTML.dataSourceWarning, !0), app.isInBuilderMode && app.data.sourceIsNotFSAttachments() && app.builder.checkPicturesExtension(!1), app.isInBuilderMode && app.data.getFieldsConfig() && !app.data.getFieldsConfig().allCriticalFieldsFound() && app.builder.openFieldsSettingOnStartup(), app.isInBuilderMode && !app.data.sourceIsNotFSAttachments() && !c.browserSupportAttachementUsingFileReader() && app.builder.showBrowserWarning(), app.data.sourceIsNotFSAttachments() || ($("#importPopupButton").attr("disabled", "disabled"), $("#importPopupButton").attr("title", i18n.viewer.builderHTML.buttonImportDisabled)), app.data.getTourPoints().length || W()
        }, this.onHashChange = function () {
            location.hash == "#list" ? ($("#listViewLink").addClass("current"), app.mobileListView.show()) : location.hash == "#info" && ($("#infoViewLink").addClass("current"), app.mobileInfoView.show())
        }, this.updateUI = function (e, t, n) {
            G(n), app.desktopCarousel.update(e, t[2], t[1]), app.mobileCarousel.update(e, t[2]), app.mobileListView.update(e, t[2]), app.mobileInfoView.update(e, t[2]), app.desktopPicturePanel.update(t[1], r.isModernLayout()), z(n ? app.data.getIntroData() : null)
        }, this.resize = function (e) {
            app.isCreatingFS && ($("#loadingOverlay").css("top", e.isMobileView ? "0px" : $("#header").height()), $("#loadingOverlay").css("height", e.isMobileView ? $("body").height() : $("body").height() - $("#header").height()), $("#header").css("display", e.isMobileView ? "none" : "block"), $("#fatalError").css("display", e.isMobileView ? "block" : "none")), e.isMobileView && e.isOnMobileMapView ? $("#footerMobile").show() : $("#footerMobile").hide(), app.desktopPicturePanel.resize(e.width - APPCFG.MINIMUM_MAP_WIDTH, e.height), app.desktopCarousel.resize(), app.mapTips && (e.isMobileView ? app.mapTips.hide() : app.isInBuilderMode ? app.mapTips.show() : app.data.getCurrentGraphic().attributes.getName() !== "" && app.mapTips.show()), e.isMobileView || app.desktopCarousel.checkItemIsVisible(app.data.getCurrentIndex())
        }, this.showInitPopup = function () {
            O.cleanLoadingTimeout(), app.isCreatingFS = !0, O.initError("noLayerMobile", null, !0), O.handleWindowResize();
            var t = app.builder.presentInitPopup(app.portal, app.data.getWebMapItem());
            t.then(function () {
                $("#initPopup").modal("hide"), app.isCreatingFS = !1;
                var t = e.cleanWebAppAfterInitialization();
                t && S.publish("BUILDER_INCREMENT_COUNTER", 1), O.prepareAppForWebmapReload(), O.loadWebMap(app.data.getWebMapItem().item.id)
            }, function () {
                O.replaceInitErrorMessage("noLayerView"), $("#loadingOverlay").css("top", "0px"), $("#header").css("display", "inherit"), $("#fatalError").css("display", "block"), app.isCreatingFS = !1, O.handleWindowResize()
            })
        }, this.prepareMobileViewSwitch = function () {
            $("#infoViewLink").hasClass("current") && $("#infoCarousel .swipeview-active").find("iframe").attr("src", ""), $(".mobileView").hide(), $("#footerMobile").hide(), $(".navBar span").removeClass("current"), app.header.hideMobileBanner()
        }, this.centerMap = function (e, t) {
            var n = r.isModernLayout() && !r.isOnMobileView();
            if (t === undefined && (!n || !app.map.__LOD)) app.map.centerAt(e);
            else if (t !== undefined && (!n || !app.map.__LOD)) app.map.centerAndZoom(e, t);
            else {
                var i = e,
                    s = 20 + L.position(T.byId("picturePanel")).x / 2,
                    o = 10 + L.position(T.byId("footer")).h / 2;
                if (e.spatialReference.wkid == 4326 && app.map.spatialReference.wkid == 102100) i = E.geographicToWebMercator(e);
                else if (e.spatialReference.wkid == 102100 && app.map.spatialReference.wkid == 4326) i = E.webMercatorToGeographic(e);
                else if (e.spatialReference.wkid != app.map.spatialReference.wkid) return;
                t ? app.map.centerAndZoom(i.offset(s * app.map._params.lods[t].resolution, -o * app.map._params.lods[t].resolution), t) : app.map.centerAt(i.offset(s * app.map.__LOD.resolution, -o * app.map.__LOD.resolution))
            }
        }, this.setMapExtent = function (e) {
            if (!e || !e.spatialReference || !app.map || !app.map.extent.spatialReference || !app.map.spatialReference) {
                var t = new x;
                return t.resolve(), t
            }
            if (app.map.spatialReference.wkid == e.spatialReference.wkid) return it(e);
            var n = new x;
            return b.defaults.geometryService.project([e], app.map.spatialReference, function (e) {
                if (!e || !e[0]) return;
                it(e[0]), n.resolve()
            }), n
        }, this.zoomToDeviceLocation = function (e, t) {
            e && (app.map.spatialReference.wkid == 102100 ? t = E.geographicToWebMercator(t) : app.map.spatialReference.wkid != 4326 && b.defaults.geometryService.project([t], app.map.spatialReference, function (e) {
                if (!e || !e[0]) return;
                M.centerMap(e[0])
            }), M.centerMap(t))
        }, this.initLocalization = function () {
            app.desktopPicturePanel.initLocalization()
        }
    }
}), require(["storymaps/ui/loadingIndicator/LoadingIndicator", "storymaps/core/Core", "storymaps/maptour/core/MainView"], function () {}), define("storymaps/maptour/BuildConfigViewer", function () {});