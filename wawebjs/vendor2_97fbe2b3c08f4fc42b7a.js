/*! Copyright (c) 2015 WhatsApp Inc.  All Rights Reserved. */
webpackJsonp([89], {
    3: function(e, t, n) {
        "use strict";
        function r(e, t, n, r, i, o, a, s) {
            if (!e) {
                var c;
                if (void 0 === t)
                    c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, i, o, a, s]
                      , f = 0;
                    c = new Error(t.replace(/%s/g, function() {
                        return u[f++]
                    })),
                    c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1,
                c
            }
        }
        e.exports = r
    },
    5: function(e, t, n) {
        "use strict";
        var r = n(18)
          , i = r;
        e.exports = i
    },
    7: function(e, t) {
        "use strict";
        function n(e) {
            if (null === e || void 0 === e)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }
        function r() {
            try {
                if (!Object.assign)
                    return !1;
                var e = new String("abc");
                if (e[5] = "de",
                "5" === Object.getOwnPropertyNames(e)[0])
                    return !1;
                for (var t = {}, n = 0; n < 10; n++)
                    t["_" + String.fromCharCode(n)] = n;
                var r = Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                });
                if ("0123456789" !== r.join(""))
                    return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    i[e] = e
                }),
                "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
            } catch (o) {
                return !1
            }
        }
        var i = Object.prototype.hasOwnProperty
          , o = Object.prototype.propertyIsEnumerable;
        e.exports = r() ? Object.assign : function(e, t) {
            for (var r, a, s = n(e), c = 1; c < arguments.length; c++) {
                r = Object(arguments[c]);
                for (var u in r)
                    i.call(r, u) && (s[u] = r[u]);
                if (Object.getOwnPropertySymbols) {
                    a = Object.getOwnPropertySymbols(r);
                    for (var f = 0; f < a.length; f++)
                        o.call(r, a[f]) && (s[a[f]] = r[a[f]])
                }
            }
            return s
        }
    },
    17: function(e, t) {
        "use strict";
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement)
          , r = {
            canUseDOM: n,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: n && !!window.screen,
            isInWorker: !n
        };
        e.exports = r
    },
    18: function(e, t) {
        "use strict";
        function n(e) {
            return function() {
                return e
            }
        }
        var r = function() {};
        r.thatReturns = n,
        r.thatReturnsFalse = n(!1),
        r.thatReturnsTrue = n(!0),
        r.thatReturnsNull = n(null ),
        r.thatReturnsThis = function() {
            return this
        }
        ,
        r.thatReturnsArgument = function(e) {
            return e
        }
        ,
        e.exports = r
    },
    36: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t["default"] = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
    },
    43: function(e, t, n) {
        var r;
        /*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
        !function() {
            "use strict";
            function i() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var r = typeof n;
                        if ("string" === r || "number" === r)
                            e += " " + n;
                        else if (Array.isArray(n))
                            e += " " + i.apply(null , n);
                        else if ("object" === r)
                            for (var o in n)
                                n.hasOwnProperty(o) && n[o] && (e += " " + o)
                    }
                }
                return e.substr(1)
            }
            "undefined" != typeof e && e.exports ? e.exports = i : (r = function() {
                return i
            }
            .call(t, n, t, e),
            !(void 0 !== r && (e.exports = r)))
        }()
    },
    44: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(242)
          , o = r(i);
        t["default"] = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    (0,
                    o["default"])(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
    },
    49: function(e, t) {
        "use strict";
        var n = function(e) {
            var t;
            for (t in e)
                if (e.hasOwnProperty(t))
                    return t;
            return null
        };
        e.exports = n
    },
    92: function(e, t, n) {
        "use strict";
        var r = {};
        e.exports = r
    },
    104: function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
            ,
            e.paths = [],
            e.children = [],
            e.webpackPolyfill = 1),
            e
        }
    },
    113: function(e, t, n) {
        "use strict";
        var r = n(3)
          , i = function(e) {
            var t, n = {};
            e instanceof Object && !Array.isArray(e) ? void 0 : r(!1);
            for (t in e)
                e.hasOwnProperty(t) && (n[t] = t);
            return n
        };
        e.exports = i
    },
    114: function(e, t) {
        "use strict";
        function n(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
        }
        function r(e, t) {
            if (n(e, t))
                return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                return !1;
            var r = Object.keys(e)
              , o = Object.keys(t);
            if (r.length !== o.length)
                return !1;
            for (var a = 0; a < r.length; a++)
                if (!i.call(t, r[a]) || !n(e[r[a]], t[r[a]]))
                    return !1;
            return !0
        }
        var i = Object.prototype.hasOwnProperty;
        e.exports = r
    },
    180: function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(e) {
            if (f === setTimeout)
                return setTimeout(e, 0);
            if ((f === n || !f) && setTimeout)
                return f = setTimeout,
                setTimeout(e, 0);
            try {
                return f(e, 0)
            } catch (t) {
                try {
                    return f.call(null , e, 0)
                } catch (t) {
                    return f.call(this, e, 0)
                }
            }
        }
        function o(e) {
            if (l === clearTimeout)
                return clearTimeout(e);
            if ((l === r || !l) && clearTimeout)
                return l = clearTimeout,
                clearTimeout(e);
            try {
                return l(e)
            } catch (t) {
                try {
                    return l.call(null , e)
                } catch (t) {
                    return l.call(this, e)
                }
            }
        }
        function a() {
            w && d && (w = !1,
            d.length ? p = d.concat(p) : m = -1,
            p.length && s())
        }
        function s() {
            if (!w) {
                var e = i(a);
                w = !0;
                for (var t = p.length; t; ) {
                    for (d = p,
                    p = []; ++m < t; )
                        d && d[m].run();
                    m = -1,
                    t = p.length
                }
                d = null ,
                w = !1,
                o(e)
            }
        }
        function c(e, t) {
            this.fun = e,
            this.array = t
        }
        function u() {}
        var f, l, h = e.exports = {};
        !function() {
            try {
                f = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                f = n
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                l = r
            }
        }();
        var d, p = [], w = !1, m = -1;
        h.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            p.push(new c(e,t)),
            1 !== p.length || w || i(s)
        }
        ,
        c.prototype.run = function() {
            this.fun.apply(null , this.array)
        }
        ,
        h.title = "browser",
        h.browser = !0,
        h.env = {},
        h.argv = [],
        h.version = "",
        h.versions = {},
        h.on = u,
        h.addListener = u,
        h.once = u,
        h.off = u,
        h.removeListener = u,
        h.removeAllListeners = u,
        h.emit = u,
        h.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        h.cwd = function() {
            return "/"
        }
        ,
        h.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        h.umask = function() {
            return 0
        }
    },
    205: function(e, t, n) {
        (function(e, r) {
            function i(e, t) {
                this._id = e,
                this._clearFn = t
            }
            var o = n(803).nextTick
              , a = Function.prototype.apply
              , s = Array.prototype.slice
              , c = {}
              , u = 0;
            t.setTimeout = function() {
                return new i(a.call(setTimeout, window, arguments),clearTimeout)
            }
            ,
            t.setInterval = function() {
                return new i(a.call(setInterval, window, arguments),clearInterval)
            }
            ,
            t.clearTimeout = t.clearInterval = function(e) {
                e.close()
            }
            ,
            i.prototype.unref = i.prototype.ref = function() {}
            ,
            i.prototype.close = function() {
                this._clearFn.call(window, this._id)
            }
            ,
            t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = t
            }
            ,
            t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = -1
            }
            ,
            t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            }
            ,
            t.setImmediate = "function" == typeof e ? e : function(e) {
                var n = u++
                  , r = !(arguments.length < 2) && s.call(arguments, 1);
                return c[n] = !0,
                o(function() {
                    c[n] && (r ? e.apply(null , r) : e.call(null ),
                    t.clearImmediate(n))
                }),
                n
            }
            ,
            t.clearImmediate = "function" == typeof r ? r : function(e) {
                delete c[e]
            }
        }
        ).call(t, n(205).setImmediate, n(205).clearImmediate)
    },
    207: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(510)
          , o = r(i)
          , a = n(88)
          , s = r(a)
          , c = n(244)
          , u = r(c);
        t["default"] = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0,
                u["default"])(t)));
            e.prototype = (0,
            s["default"])(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (o["default"] ? (0,
            o["default"])(e, t) : e.__proto__ = t)
        }
    },
    208: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(244)
          , o = r(i);
        t["default"] = function(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0,
            o["default"])(t)) && "function" != typeof t ? e : t
        }
    },
    243: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(52)
          , o = r(i)
          , a = n(509)
          , s = r(a);
        t["default"] = function c(e, t, n) {
            null === e && (e = Function.prototype);
            var r = (0,
            s["default"])(e, t);
            if (void 0 === r) {
                var i = (0,
                o["default"])(e);
                return null === i ? void 0 : c(i, t, n)
            }
            if ("value"in r)
                return r.value;
            var a = r.get;
            if (void 0 !== a)
                return a.call(n)
        }
    },
    244: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(514)
          , o = r(i)
          , a = n(513)
          , s = r(a)
          , c = "function" == typeof s["default"] && "symbol" == typeof o["default"] ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : typeof e
        }
        ;
        t["default"] = "function" == typeof s["default"] && "symbol" === c(o["default"]) ? function(e) {
            return "undefined" == typeof e ? "undefined" : c(e)
        }
        : function(e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : "undefined" == typeof e ? "undefined" : c(e)
        }
    },
    259: function(e, t, n) {
        function r(e) {
            return e = e || {},
            function(t, n) {
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var i = e[r];
                        n(i && i.name || r, t[r], i && i.printer, i && i.width)
                    }
            }
        }
        function i() {
            Object.defineProperties(this, {
                __printers: {
                    value: {},
                    enumerable: !1
                },
                __cell: {
                    value: function(e, t, n) {
                        this[e] = t,
                        this.__printers[e] = n
                    },
                    enumerable: !1
                }
            })
        }
        function o(e, t, n) {
            function r(e, n) {
                var r = null != t[e].width;
                if (r)
                    f[e] = t[e].width;
                else {
                    if (f[e] > n)
                        return;
                    f[e] = n
                }
            }
            function i(e, t) {
                return e.__printers && e.__printers[t] || a.string
            }
            function o() {
                e.forEach(function(e) {
                    for (var n in t)
                        r(n, i(e, n).call(e, e[n]).length)
                })
            }
            function s(e) {
                var r = ""
                  , i = !0;
                for (var o in t) {
                    i || (r += n),
                    i = !1;
                    var a = f[o];
                    r += c(e(o, a), a)
                }
                return r += "\n"
            }
            function c(e, t) {
                return e.length <= t ? u(e, t) : (e = e.slice(0, t),
                t > 3 && (e = e.slice(0, -3).concat("...")),
                e)
            }
            var u = a.RightPadder()
              , f = {};
            return o(),
            e.map(function(e) {
                return s(function(t, n) {
                    return i(e, t).call(e, e[t], n)
                })
            }).join("")
        }
        function a() {
            this.columns = {},
            this.rows = [],
            this._row = new i
        }
        e.exports = a,
        a.string = function(e) {
            return void 0 === e ? "" : String(e)
        }
        ,
        a.Number = function(e) {
            return function(t, n) {
                if (void 0 === t)
                    return "";
                if ("number" != typeof t)
                    throw new Error(String(t) + " is not a number");
                var r = null == e ? String(t) : t.toFixed(e).toString();
                return a.padLeft(r, n)
            }
        }
        ,
        a.RightPadder = function(e) {
            return e = e || " ",
            function(t, n) {
                for (var r = String(t), i = r.length, o = 0; o < n - i; o++)
                    r += e;
                return r
            }
        }
        ,
        a.LeftPadder = function(e) {
            return e = e || " ",
            function(t, n) {
                for (var r = "", i = String(t), o = 0; o < n - i.length; o++)
                    r += e;
                return r += i
            }
        }
        ,
        a.padLeft = a.LeftPadder(),
        a.printArray = function(e, t, n) {
            t = "function" == typeof t ? t : r(t),
            n = n || function(e) {
                return e.toString()
            }
            ;
            var i = new a
              , o = i.cell.bind(i);
            return e.forEach(function(e) {
                t(e, o),
                i.newRow()
            }),
            n(i)
        }
        ,
        a.printObj = function(e, t, n) {
            t = "function" == typeof t ? t : r(t),
            n = n || function(e) {
                return e.printTransposed(" : ")
            }
            ;
            var i = new a;
            return t(e, i.cell.bind(i)),
            i.newRow(),
            n(i)
        }
        ,
        a.Row = i,
        a.print = o,
        a.prototype.cell = function(e, t, n, r) {
            this._row.__cell(e, t, n);
            var i = this.columns[e] || (this.columns[e] = {});
            return null != r && (i.width = r),
            this
        }
        ,
        a.prototype.newRow = a.prototype.newLine = function() {
            return this.rows.push(this._row),
            this._row = new i,
            this
        }
        ,
        a.prototype.sort = n(585),
        a.aggr = n(584),
        a.prototype.totals = null ,
        a.prototype.total = function(e, t, n) {
            t = t || a.aggr.sum,
            n = n || t.printer,
            this.totals = this.totals || new i;
            var r, o = this.rows;
            return this.totals.__cell(e, null , function(i, a) {
                return null != a ? n(r, a) : (r = o.reduce(function(n, r, i) {
                    return t(n, r[e], i, o.length)
                }, null ),
                n(r))
            }),
            this
        }
        ,
        a.prototype.shift = "  ",
        a.prototype.print = function() {
            return o(this.rows, this.columns, this.shift)
        }
        ,
        a.prototype.printTransposed = function(e) {
            function t(e, t) {
                var n = e.__printers && e.__printers[t];
                if (n)
                    return function(e) {
                        return n(e)
                    }
            }
            var n = new a;
            e && (n.shift = e);
            for (var r in this.columns)
                n.cell("h", r),
                this.rows.forEach(function(e, i) {
                    n.cell("f" + i, e[r], t(e, r))
                }),
                n.newRow();
            return n.print()
        }
        ,
        a.prototype.toString = function() {
            var e = a.RightPadder("-")
              , t = this.createRow(function() {
                return ["", e]
            })
              , n = this.createRow(function(e) {
                return [e]
            })
              , r = [n, t].concat(this.rows);
            return this.totals && (r = r.concat([t, this.totals])),
            o(r, this.columns, this.shift)
        }
        ,
        a.prototype.createRow = function(e) {
            var t = new i;
            for (var n in this.columns) {
                var r = e(n);
                t.__cell(n, r[0], r[1])
            }
            return t
        }
    },
    260: function(e, t, n) {
        "use strict";
        var r = n(18)
          , i = {
            listen: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !1),
                {
                    remove: function() {
                        e.removeEventListener(t, n, !1)
                    }
                }) : e.attachEvent ? (e.attachEvent("on" + t, n),
                {
                    remove: function() {
                        e.detachEvent("on" + t, n)
                    }
                }) : void 0
            },
            capture: function(e, t, n) {
                return e.addEventListener ? (e.addEventListener(t, n, !0),
                {
                    remove: function() {
                        e.removeEventListener(t, n, !0)
                    }
                }) : {
                    remove: r
                }
            },
            registerDefault: function() {}
        };
        e.exports = i
    },
    261: function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e.length;
            if (Array.isArray(e) || "object" != typeof e && "function" != typeof e ? a(!1) : void 0,
            "number" != typeof t ? a(!1) : void 0,
            0 === t || t - 1 in e ? void 0 : a(!1),
            "function" == typeof e.callee ? a(!1) : void 0,
            e.hasOwnProperty)
                try {
                    return Array.prototype.slice.call(e)
                } catch (n) {}
            for (var r = Array(t), i = 0; i < t; i++)
                r[i] = e[i];
            return r
        }
        function i(e) {
            return !!e && ("object" == typeof e || "function" == typeof e) && "length"in e && !("setInterval"in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee"in e || "item"in e)
        }
        function o(e) {
            return i(e) ? Array.isArray(e) ? e.slice() : r(e) : [e]
        }
        var a = n(3);
        e.exports = o
    },
    262: function(e, t) {
        "use strict";
        function n(e) {
            try {
                e.focus()
            } catch (t) {}
        }
        e.exports = n
    },
    263: function(e, t) {
        "use strict";
        function n() {
            if ("undefined" == typeof document)
                return null ;
            try {
                return document.activeElement || document.body
            } catch (e) {
                return document.body
            }
        }
        e.exports = n
    },
    428: function(e, t, n) {
        var r;
        !function() {
            function i(e, t, n) {
                return e.call.apply(e.bind, arguments)
            }
            function o(e, t, n) {
                if (!e)
                    throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var n = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(n, r),
                        e.apply(t, n)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
            function a(e, t, n) {
                return a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? i : o,
                a.apply(null , arguments)
            }
            function s(e, t) {
                this.a = e,
                this.m = t || e,
                this.c = this.m.document
            }
            function c(e, t, n, r) {
                if (t = e.c.createElement(t),
                n)
                    for (var i in n)
                        n.hasOwnProperty(i) && ("style" == i ? t.style.cssText = n[i] : t.setAttribute(i, n[i]));
                return r && t.appendChild(e.c.createTextNode(r)),
                t
            }
            function u(e, t, n) {
                e = e.c.getElementsByTagName(t)[0],
                e || (e = document.documentElement),
                e.insertBefore(n, e.lastChild)
            }
            function f(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }
            function l(e, t, n) {
                t = t || [],
                n = n || [];
                for (var r = e.className.split(/\s+/), i = 0; i < t.length; i += 1) {
                    for (var o = !1, a = 0; a < r.length; a += 1)
                        if (t[i] === r[a]) {
                            o = !0;
                            break
                        }
                    o || r.push(t[i])
                }
                for (t = [],
                i = 0; i < r.length; i += 1) {
                    for (o = !1,
                    a = 0; a < n.length; a += 1)
                        if (r[i] === n[a]) {
                            o = !0;
                            break
                        }
                    o || t.push(r[i])
                }
                e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
            }
            function h(e, t) {
                for (var n = e.className.split(/\s+/), r = 0, i = n.length; r < i; r++)
                    if (n[r] == t)
                        return !0;
                return !1
            }
            function d(e) {
                if ("string" == typeof e.f)
                    return e.f;
                var t = e.m.location.protocol;
                return "about:" == t && (t = e.a.location.protocol),
                "https:" == t ? "https:" : "http:"
            }
            function p(e) {
                return e.m.location.hostname || e.a.location.hostname
            }
            function w(e, t, n) {
                function r() {
                    s && i && o && (s(a),
                    s = null )
                }
                t = c(e, "link", {
                    rel: "stylesheet",
                    href: t,
                    media: "all"
                });
                var i = !1
                  , o = !0
                  , a = null
                  , s = n || null ;
                se ? (t.onload = function() {
                    i = !0,
                    r()
                }
                ,
                t.onerror = function() {
                    i = !0,
                    a = Error("Stylesheet failed to load"),
                    r()
                }
                ) : setTimeout(function() {
                    i = !0,
                    r()
                }, 0),
                u(e, "head", t)
            }
            function m(e, t, n, r) {
                var i = e.c.getElementsByTagName("head")[0];
                if (i) {
                    var o = c(e, "script", {
                        src: t
                    })
                      , a = !1;
                    return o.onload = o.onreadystatechange = function() {
                        a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0,
                        n && n(null ),
                        o.onload = o.onreadystatechange = null ,
                        "HEAD" == o.parentNode.tagName && i.removeChild(o))
                    }
                    ,
                    i.appendChild(o),
                    setTimeout(function() {
                        a || (a = !0,
                        n && n(Error("Script load timeout")))
                    }, r || 5e3),
                    o
                }
                return null
            }
            function g() {
                this.a = 0,
                this.c = null
            }
            function v(e) {
                return e.a++,
                function() {
                    e.a--,
                    y(e)
                }
            }
            function b(e, t) {
                e.c = t,
                y(e)
            }
            function y(e) {
                0 == e.a && e.c && (e.c(),
                e.c = null )
            }
            function _(e) {
                this.a = e || "-"
            }
            function k(e, t) {
                this.c = e,
                this.f = 4,
                this.a = "n";
                var n = (t || "n4").match(/^([nio])([1-9])$/i);
                n && (this.a = n[1],
                this.f = parseInt(n[2], 10))
            }
            function x(e) {
                return P(e) + " " + (e.f + "00") + " 300px " + A(e.c)
            }
            function A(e) {
                var t = [];
                e = e.split(/,\s*/);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n].replace(/['"]/g, "");
                    -1 != r.indexOf(" ") || /^\d/.test(r) ? t.push("'" + r + "'") : t.push(r)
                }
                return t.join(",")
            }
            function S(e) {
                return e.a + e.f
            }
            function P(e) {
                var t = "normal";
                return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"),
                t
            }
            function C(e) {
                var t = 4
                  , n = "n"
                  , r = null ;
                return e && ((r = e.match(/(normal|oblique|italic)/i)) && r[1] && (n = r[1].substr(0, 1).toLowerCase()),
                (r = e.match(/([1-9]00|normal|bold)/i)) && r[1] && (/bold/i.test(r[1]) ? t = 7 : /[1-9]00/.test(r[1]) && (t = parseInt(r[1].substr(0, 1), 10)))),
                n + t
            }
            function E(e, t) {
                this.c = e,
                this.f = e.m.document.documentElement,
                this.h = t,
                this.a = new _("-"),
                this.j = !1 !== t.events,
                this.g = !1 !== t.classes
            }
            function M(e) {
                e.g && l(e.f, [e.a.c("wf", "loading")]),
                T(e, "loading")
            }
            function O(e) {
                if (e.g) {
                    var t = h(e.f, e.a.c("wf", "active"))
                      , n = []
                      , r = [e.a.c("wf", "loading")];
                    t || n.push(e.a.c("wf", "inactive")),
                    l(e.f, n, r)
                }
                T(e, "inactive")
            }
            function T(e, t, n) {
                e.j && e.h[t] && (n ? e.h[t](n.c, S(n)) : e.h[t]())
            }
            function D() {
                this.c = {}
            }
            function I(e, t, n) {
                var r, i = [];
                for (r in t)
                    if (t.hasOwnProperty(r)) {
                        var o = e.c[r];
                        o && i.push(o(t[r], n))
                    }
                return i
            }
            function F(e, t) {
                this.c = e,
                this.f = t,
                this.a = c(this.c, "span", {
                    "aria-hidden": "true"
                }, this.f)
            }
            function R(e) {
                u(e.c, "body", e.a)
            }
            function N(e) {
                return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + A(e.c) + ";" + ("font-style:" + P(e) + ";font-weight:" + (e.f + "00") + ";")
            }
            function L(e, t, n, r, i, o) {
                this.g = e,
                this.j = t,
                this.a = r,
                this.c = n,
                this.f = i || 3e3,
                this.h = o || void 0
            }
            function q(e, t, n, r, i, o, a) {
                this.v = e,
                this.B = t,
                this.c = n,
                this.a = r,
                this.s = a || "BESbswy",
                this.f = {},
                this.w = i || 3e3,
                this.u = o || null ,
                this.o = this.j = this.h = this.g = null ,
                this.g = new F(this.c,this.s),
                this.h = new F(this.c,this.s),
                this.j = new F(this.c,this.s),
                this.o = new F(this.c,this.s),
                e = new k(this.a.c + ",serif",S(this.a)),
                e = N(e),
                this.g.a.style.cssText = e,
                e = new k(this.a.c + ",sans-serif",S(this.a)),
                e = N(e),
                this.h.a.style.cssText = e,
                e = new k("serif",S(this.a)),
                e = N(e),
                this.j.a.style.cssText = e,
                e = new k("sans-serif",S(this.a)),
                e = N(e),
                this.o.a.style.cssText = e,
                R(this.g),
                R(this.h),
                R(this.j),
                R(this.o)
            }
            function j() {
                if (null === ue) {
                    var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    ue = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
                }
                return ue
            }
            function B(e, t, n) {
                for (var r in ce)
                    if (ce.hasOwnProperty(r) && t === e.f[ce[r]] && n === e.f[ce[r]])
                        return !0;
                return !1
            }
            function U(e) {
                var t, n = e.g.a.offsetWidth, r = e.h.a.offsetWidth;
                (t = n === e.f.serif && r === e.f["sans-serif"]) || (t = j() && B(e, n, r)),
                t ? ae() - e.A >= e.w ? j() && B(e, n, r) && (null === e.u || e.u.hasOwnProperty(e.a.c)) ? G(e, e.v) : G(e, e.B) : z(e) : G(e, e.v)
            }
            function z(e) {
                setTimeout(a(function() {
                    U(this)
                }, e), 50)
            }
            function G(e, t) {
                setTimeout(a(function() {
                    f(this.g.a),
                    f(this.h.a),
                    f(this.j.a),
                    f(this.o.a),
                    t(this.a)
                }, e), 0)
            }
            function V(e, t, n) {
                this.c = e,
                this.a = t,
                this.f = 0,
                this.o = this.j = !1,
                this.s = n
            }
            function K(e) {
                0 == --e.f && e.j && (e.o ? (e = e.a,
                e.g && l(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]),
                T(e, "active")) : O(e.a))
            }
            function H(e) {
                this.j = e,
                this.a = new D,
                this.h = 0,
                this.f = this.g = !0
            }
            function Y(e, t, n, r, i) {
                var o = 0 == --e.h;
                (e.f || e.g) && setTimeout(function() {
                    var e = i || null
                      , s = r || null || {};
                    if (0 === n.length && o)
                        O(t.a);
                    else {
                        t.f += n.length,
                        o && (t.j = o);
                        var c, u = [];
                        for (c = 0; c < n.length; c++) {
                            var f = n[c]
                              , h = s[f.c]
                              , d = t.a
                              , p = f;
                            d.g && l(d.f, [d.a.c("wf", p.c, S(p).toString(), "loading")]),
                            T(d, "fontloading", p),
                            d = null ,
                            null === fe && (fe = !!window.FontFace && (!(p = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || 42 < parseInt(p[1], 10))),
                            d = fe ? new L(a(t.g, t),a(t.h, t),t.c,f,t.s,h) : new q(a(t.g, t),a(t.h, t),t.c,f,t.s,e,h),
                            u.push(d)
                        }
                        for (c = 0; c < u.length; c++)
                            u[c].start()
                    }
                }, 0)
            }
            function W(e, t, n) {
                var r = []
                  , i = n.timeout;
                M(t);
                var r = I(e.a, n, e.c)
                  , o = new V(e.c,t,i);
                for (e.h = r.length,
                t = 0,
                n = r.length; t < n; t++)
                    r[t].load(function(t, n, r) {
                        Y(e, o, t, n, r)
                    })
            }
            function Z(e, t) {
                this.c = e,
                this.a = t
            }
            function X(e, t, n) {
                var r = d(e.c);
                return e = (e.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, ""),
                r + "//" + e + "/" + t + ".js" + (n ? "?v=" + n : "")
            }
            function J(e, t) {
                this.c = e,
                this.a = t
            }
            function Q(e, t, n) {
                e ? this.c = e : this.c = t + le,
                this.a = [],
                this.f = [],
                this.g = n || ""
            }
            function $(e, t) {
                for (var n = t.length, r = 0; r < n; r++) {
                    var i = t[r].split(":");
                    3 == i.length && e.f.push(i.pop());
                    var o = "";
                    2 == i.length && "" != i[1] && (o = ":"),
                    e.a.push(i.join(o))
                }
            }
            function ee(e) {
                if (0 == e.a.length)
                    throw Error("No fonts to load!");
                if (-1 != e.c.indexOf("kit="))
                    return e.c;
                for (var t = e.a.length, n = [], r = 0; r < t; r++)
                    n.push(e.a[r].replace(/ /g, "+"));
                return t = e.c + "?family=" + n.join("%7C"),
                0 < e.f.length && (t += "&subset=" + e.f.join(",")),
                0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)),
                t
            }
            function te(e) {
                this.f = e,
                this.a = [],
                this.c = {}
            }
            function ne(e) {
                for (var t = e.f.length, n = 0; n < t; n++) {
                    var r = e.f[n].split(":")
                      , i = r[0].replace(/\+/g, " ")
                      , o = ["n4"];
                    if (2 <= r.length) {
                        var a, s = r[1];
                        if (a = [],
                        s)
                            for (var s = s.split(","), c = s.length, u = 0; u < c; u++) {
                                var f;
                                if (f = s[u],
                                f.match(/^[\w-]+$/)) {
                                    var l = we.exec(f.toLowerCase());
                                    if (null == l)
                                        f = "";
                                    else {
                                        if (f = l[2],
                                        f = null == f || "" == f ? "n" : pe[f],
                                        l = l[1],
                                        null == l || "" == l)
                                            l = "4";
                                        else
                                            var h = de[l]
                                              , l = h ? h : isNaN(l) ? "4" : l.substr(0, 1);
                                        f = [f, l].join("")
                                    }
                                } else
                                    f = "";
                                f && a.push(f)
                            }
                        0 < a.length && (o = a),
                        3 == r.length && (r = r[2],
                        a = [],
                        r = r ? r.split(",") : a,
                        0 < r.length && (r = he[r[0]]) && (e.c[i] = r))
                    }
                    for (e.c[i] || (r = he[i]) && (e.c[i] = r),
                    r = 0; r < o.length; r += 1)
                        e.a.push(new k(i,o[r]))
                }
            }
            function re(e, t) {
                this.c = e,
                this.a = t
            }
            function ie(e, t) {
                this.c = e,
                this.a = t
            }
            function oe(e, t) {
                this.c = e,
                this.f = t,
                this.a = []
            }
            var ae = Date.now || function() {
                return +new Date
            }
              , se = !!window.FontFace;
            _.prototype.c = function(e) {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
                return t.join(this.a)
            }
            ,
            L.prototype.start = function() {
                var e = this.c.m.document
                  , t = this
                  , n = ae()
                  , r = new Promise(function(r, i) {
                    function o() {
                        ae() - n >= t.f ? i() : e.fonts.load(x(t.a), t.h).then(function(e) {
                            1 <= e.length ? r() : setTimeout(o, 25)
                        }, function() {
                            i()
                        })
                    }
                    o()
                }
                )
                  , i = new Promise(function(e, n) {
                    setTimeout(n, t.f)
                }
                );
                Promise.race([i, r]).then(function() {
                    t.g(t.a)
                }, function() {
                    t.j(t.a)
                })
            }
            ;
            var ce = {
                D: "serif",
                C: "sans-serif"
            }
              , ue = null ;
            q.prototype.start = function() {
                this.f.serif = this.j.a.offsetWidth,
                this.f["sans-serif"] = this.o.a.offsetWidth,
                this.A = ae(),
                U(this)
            }
            ;
            var fe = null ;
            V.prototype.g = function(e) {
                var t = this.a;
                t.g && l(t.f, [t.a.c("wf", e.c, S(e).toString(), "active")], [t.a.c("wf", e.c, S(e).toString(), "loading"), t.a.c("wf", e.c, S(e).toString(), "inactive")]),
                T(t, "fontactive", e),
                this.o = !0,
                K(this)
            }
            ,
            V.prototype.h = function(e) {
                var t = this.a;
                if (t.g) {
                    var n = h(t.f, t.a.c("wf", e.c, S(e).toString(), "active"))
                      , r = []
                      , i = [t.a.c("wf", e.c, S(e).toString(), "loading")];
                    n || r.push(t.a.c("wf", e.c, S(e).toString(), "inactive")),
                    l(t.f, r, i)
                }
                T(t, "fontinactive", e),
                K(this)
            }
            ,
            H.prototype.load = function(e) {
                this.c = new s(this.j,e.context || this.j),
                this.g = !1 !== e.events,
                this.f = !1 !== e.classes,
                W(this, new E(this.c,e), e)
            }
            ,
            Z.prototype.load = function(e) {
                function t() {
                    if (i["__mti_fntLst" + n]) {
                        var r, o = i["__mti_fntLst" + n](), a = [];
                        if (o)
                            for (var s = 0; s < o.length; s++) {
                                var c = o[s].fontfamily;
                                void 0 != o[s].fontStyle && void 0 != o[s].fontWeight ? (r = o[s].fontStyle + o[s].fontWeight,
                                a.push(new k(c,r))) : a.push(new k(c))
                            }
                        e(a)
                    } else
                        setTimeout(function() {
                            t()
                        }, 50)
                }
                var n = this.a.projectId
                  , r = this.a.version;
                if (n) {
                    var i = this.c.m;
                    m(this.c, X(this, n, r), function(n) {
                        n ? e([]) : t()
                    }).id = "__MonotypeAPIScript__" + n
                } else
                    e([])
            }
            ,
            J.prototype.load = function(e) {
                var t, n, r = this.a.urls || [], i = this.a.families || [], o = this.a.testStrings || {}, a = new g;
                for (t = 0,
                n = r.length; t < n; t++)
                    w(this.c, r[t], v(a));
                var s = [];
                for (t = 0,
                n = i.length; t < n; t++)
                    if (r = i[t].split(":"),
                    r[1])
                        for (var c = r[1].split(","), u = 0; u < c.length; u += 1)
                            s.push(new k(r[0],c[u]));
                    else
                        s.push(new k(r[0]));
                b(a, function() {
                    e(s, o)
                })
            }
            ;
            var le = "//fonts.googleapis.com/css"
              , he = {
                latin: "BESbswy",
                cyrillic: "йяЖ",
                greek: "αβΣ",
                khmer: "កខគ",
                Hanuman: "កខគ"
            }
              , de = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7"
            }
              , pe = {
                i: "i",
                italic: "i",
                n: "n",
                normal: "n"
            }
              , we = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/
              , me = {
                Arimo: !0,
                Cousine: !0,
                Tinos: !0
            };
            re.prototype.load = function(e) {
                var t = new g
                  , n = this.c
                  , r = new Q(this.a.api,d(n),this.a.text)
                  , i = this.a.families;
                $(r, i);
                var o = new te(i);
                ne(o),
                w(n, ee(r), v(t)),
                b(t, function() {
                    e(o.a, o.c, me)
                })
            }
            ,
            ie.prototype.load = function(e) {
                var t = this.a.id
                  , n = this.c.m;
                t ? m(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function(t) {
                    if (t)
                        e([]);
                    else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                        t = n.Typekit.config.fn;
                        for (var r = [], i = 0; i < t.length; i += 2)
                            for (var o = t[i], a = t[i + 1], s = 0; s < a.length; s++)
                                r.push(new k(o,a[s]));
                        try {
                            n.Typekit.load({
                                events: !1,
                                classes: !1,
                                async: !0
                            })
                        } catch (c) {}
                        e(r)
                    }
                }, 2e3) : e([])
            }
            ,
            oe.prototype.load = function(e) {
                var t = this.f.id
                  , n = this.c.m
                  , r = this;
                t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}),
                n.__webfontfontdeckmodule__[t] = function(t, n) {
                    for (var i = 0, o = n.fonts.length; i < o; ++i) {
                        var a = n.fonts[i];
                        r.a.push(new k(a.name,C("font-weight:" + a.weight + ";font-style:" + a.style)))
                    }
                    e(r.a)
                }
                ,
                m(this.c, d(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + p(this.c) + "/" + t + ".js", function(t) {
                    t && e([])
                })) : e([])
            }
            ;
            var ge = new H(window);
            ge.a.c.custom = function(e, t) {
                return new J(t,e)
            }
            ,
            ge.a.c.fontdeck = function(e, t) {
                return new oe(t,e)
            }
            ,
            ge.a.c.monotype = function(e, t) {
                return new Z(t,e)
            }
            ,
            ge.a.c.typekit = function(e, t) {
                return new ie(t,e)
            }
            ,
            ge.a.c.google = function(e, t) {
                return new re(t,e)
            }
            ;
            var ve = {
                load: a(ge.load, ge)
            };
            r = function() {
                return ve
            }
            .call(t, n, t, e),
            !(void 0 !== r && (e.exports = r))
        }()
    },
    433: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(507)
          , o = r(i)
          , a = n(506)
          , s = r(a);
        t["default"] = function() {
            function e(e, t) {
                var n = []
                  , r = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, c = (0,
                    s["default"])(e); !(r = (a = c.next()).done) && (n.push(a.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (u) {
                    i = !0,
                    o = u
                } finally {
                    try {
                        !r && c["return"] && c["return"]()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if ((0,
                o["default"])(Object(t)))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    },
    436: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(241)
          , o = r(i);
        t["default"] = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return (0,
            o["default"])(e)
        }
    },
    444: function(e, t, n) {
        var r;
        (function(e, i) {
            !function(o) {
                function a(e) {
                    throw RangeError(D[e])
                }
                function s(e, t) {
                    for (var n = e.length, r = []; n--; )
                        r[n] = t(e[n]);
                    return r
                }
                function c(e, t) {
                    var n = e.split("@")
                      , r = "";
                    n.length > 1 && (r = n[0] + "@",
                    e = n[1]),
                    e = e.replace(T, ".");
                    var i = e.split(".")
                      , o = s(i, t).join(".");
                    return r + o
                }
                function u(e) {
                    for (var t, n, r = [], i = 0, o = e.length; i < o; )
                        t = e.charCodeAt(i++),
                        t >= 55296 && t <= 56319 && i < o ? (n = e.charCodeAt(i++),
                        56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t),
                        i--)) : r.push(t);
                    return r
                }
                function f(e) {
                    return s(e, function(e) {
                        var t = "";
                        return e > 65535 && (e -= 65536,
                        t += R(e >>> 10 & 1023 | 55296),
                        e = 56320 | 1023 & e),
                        t += R(e)
                    }).join("")
                }
                function l(e) {
                    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : _
                }
                function h(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }
                function d(e, t, n) {
                    var r = 0;
                    for (e = n ? F(e / S) : e >> 1,
                    e += F(e / t); e > I * x >> 1; r += _)
                        e = F(e / I);
                    return F(r + (I + 1) * e / (e + A))
                }
                function p(e) {
                    var t, n, r, i, o, s, c, u, h, p, w = [], m = e.length, g = 0, v = C, b = P;
                    for (n = e.lastIndexOf(E),
                    n < 0 && (n = 0),
                    r = 0; r < n; ++r)
                        e.charCodeAt(r) >= 128 && a("not-basic"),
                        w.push(e.charCodeAt(r));
                    for (i = n > 0 ? n + 1 : 0; i < m; ) {
                        for (o = g,
                        s = 1,
                        c = _; i >= m && a("invalid-input"),
                        u = l(e.charCodeAt(i++)),
                        (u >= _ || u > F((y - g) / s)) && a("overflow"),
                        g += u * s,
                        h = c <= b ? k : c >= b + x ? x : c - b,
                        !(u < h); c += _)
                            p = _ - h,
                            s > F(y / p) && a("overflow"),
                            s *= p;
                        t = w.length + 1,
                        b = d(g - o, t, 0 == o),
                        F(g / t) > y - v && a("overflow"),
                        v += F(g / t),
                        g %= t,
                        w.splice(g++, 0, v)
                    }
                    return f(w)
                }
                function w(e) {
                    var t, n, r, i, o, s, c, f, l, p, w, m, g, v, b, A = [];
                    for (e = u(e),
                    m = e.length,
                    t = C,
                    n = 0,
                    o = P,
                    s = 0; s < m; ++s)
                        w = e[s],
                        w < 128 && A.push(R(w));
                    for (r = i = A.length,
                    i && A.push(E); r < m; ) {
                        for (c = y,
                        s = 0; s < m; ++s)
                            w = e[s],
                            w >= t && w < c && (c = w);
                        for (g = r + 1,
                        c - t > F((y - n) / g) && a("overflow"),
                        n += (c - t) * g,
                        t = c,
                        s = 0; s < m; ++s)
                            if (w = e[s],
                            w < t && ++n > y && a("overflow"),
                            w == t) {
                                for (f = n,
                                l = _; p = l <= o ? k : l >= o + x ? x : l - o,
                                !(f < p); l += _)
                                    b = f - p,
                                    v = _ - p,
                                    A.push(R(h(p + b % v, 0))),
                                    f = F(b / v);
                                A.push(R(h(f, 0))),
                                o = d(n, g, r == i),
                                n = 0,
                                ++r
                            }
                        ++n,
                        ++t
                    }
                    return A.join("")
                }
                function m(e) {
                    return c(e, function(e) {
                        return M.test(e) ? p(e.slice(4).toLowerCase()) : e
                    })
                }
                function g(e) {
                    return c(e, function(e) {
                        return O.test(e) ? "xn--" + w(e) : e
                    })
                }
                var v = ("object" == typeof t && t && !t.nodeType && t,
                "object" == typeof e && e && !e.nodeType && e,
                "object" == typeof i && i);
                v.global !== v && v.window !== v && v.self !== v || (o = v);
                var b, y = 2147483647, _ = 36, k = 1, x = 26, A = 38, S = 700, P = 72, C = 128, E = "-", M = /^xn--/, O = /[^\x20-\x7E]/, T = /[\x2E\u3002\uFF0E\uFF61]/g, D = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, I = _ - k, F = Math.floor, R = String.fromCharCode;
                b = {
                    version: "1.3.2",
                    ucs2: {
                        decode: u,
                        encode: f
                    },
                    decode: p,
                    encode: w,
                    toASCII: g,
                    toUnicode: m
                },
                r = function() {
                    return b
                }
                .call(t, n, t, e),
                !(void 0 !== r && (e.exports = r))
            }(this)
        }
        ).call(t, n(104)(e), function() {
            return this
        }())
    },
    451: function(e, t) {
        "use strict";
        e.exports = function(e) {
            return e && e.length > 1 ? 255 === e[0] && 216 === e[1] && 255 === e[2] ? {
                ext: "jpg",
                mime: "image/jpeg"
            } : 137 === e[0] && 80 === e[1] && 78 === e[2] && 71 === e[3] ? {
                ext: "png",
                mime: "image/png"
            } : 71 === e[0] && 73 === e[1] && 70 === e[2] ? {
                ext: "gif",
                mime: "image/gif"
            } : 87 === e[8] && 69 === e[9] && 66 === e[10] && 80 === e[11] ? {
                ext: "webp",
                mime: "image/webp"
            } : (73 === e[0] && 73 === e[1] && 42 === e[2] && 0 === e[3] || 77 === e[0] && 77 === e[1] && 0 === e[2] && 42 === e[3]) && 67 === e[8] && 82 === e[9] ? {
                ext: "cr2",
                mime: "image/x-canon-cr2"
            } : 73 === e[0] && 73 === e[1] && 42 === e[2] && 0 === e[3] || 77 === e[0] && 77 === e[1] && 0 === e[2] && 42 === e[3] ? {
                ext: "tif",
                mime: "image/tiff"
            } : 66 === e[0] && 77 === e[1] ? {
                ext: "bmp",
                mime: "image/bmp"
            } : 73 === e[0] && 73 === e[1] && 188 === e[2] ? {
                ext: "jxr",
                mime: "image/vnd.ms-photo"
            } : 56 === e[0] && 66 === e[1] && 80 === e[2] && 83 === e[3] ? {
                ext: "psd",
                mime: "image/vnd.adobe.photoshop"
            } : 80 === e[0] && 75 === e[1] && 3 === e[2] && 4 === e[3] && 109 === e[30] && 105 === e[31] && 109 === e[32] && 101 === e[33] && 116 === e[34] && 121 === e[35] && 112 === e[36] && 101 === e[37] && 97 === e[38] && 112 === e[39] && 112 === e[40] && 108 === e[41] && 105 === e[42] && 99 === e[43] && 97 === e[44] && 116 === e[45] && 105 === e[46] && 111 === e[47] && 110 === e[48] && 47 === e[49] && 101 === e[50] && 112 === e[51] && 117 === e[52] && 98 === e[53] && 43 === e[54] && 122 === e[55] && 105 === e[56] && 112 === e[57] ? {
                ext: "epub",
                mime: "application/epub+zip"
            } : 80 === e[0] && 75 === e[1] && 3 === e[2] && 4 === e[3] && 77 === e[30] && 69 === e[31] && 84 === e[32] && 65 === e[33] && 45 === e[34] && 73 === e[35] && 78 === e[36] && 70 === e[37] && 47 === e[38] && 109 === e[39] && 111 === e[40] && 122 === e[41] && 105 === e[42] && 108 === e[43] && 108 === e[44] && 97 === e[45] && 46 === e[46] && 114 === e[47] && 115 === e[48] && 97 === e[49] ? {
                ext: "xpi",
                mime: "application/x-xpinstall"
            } : 80 !== e[0] || 75 !== e[1] || 3 !== e[2] && 5 !== e[2] && 7 !== e[2] || 4 !== e[3] && 6 !== e[3] && 8 !== e[3] ? 117 === e[257] && 115 === e[258] && 116 === e[259] && 97 === e[260] && 114 === e[261] ? {
                ext: "tar",
                mime: "application/x-tar"
            } : 82 !== e[0] || 97 !== e[1] || 114 !== e[2] || 33 !== e[3] || 26 !== e[4] || 7 !== e[5] || 0 !== e[6] && 1 !== e[6] ? 31 === e[0] && 139 === e[1] && 8 === e[2] ? {
                ext: "gz",
                mime: "application/gzip"
            } : 66 === e[0] && 90 === e[1] && 104 === e[2] ? {
                ext: "bz2",
                mime: "application/x-bzip2"
            } : 55 === e[0] && 122 === e[1] && 188 === e[2] && 175 === e[3] && 39 === e[4] && 28 === e[5] ? {
                ext: "7z",
                mime: "application/x-7z-compressed"
            } : 120 === e[0] && 1 === e[1] ? {
                ext: "dmg",
                mime: "application/x-apple-diskimage"
            } : 0 === e[0] && 0 === e[1] && 0 === e[2] && (24 === e[3] || 32 === e[3]) && 102 === e[4] && 116 === e[5] && 121 === e[6] && 112 === e[7] || 51 === e[0] && 103 === e[1] && 112 === e[2] && 53 === e[3] || 0 === e[0] && 0 === e[1] && 0 === e[2] && 28 === e[3] && 102 === e[4] && 116 === e[5] && 121 === e[6] && 112 === e[7] && 109 === e[8] && 112 === e[9] && 52 === e[10] && 50 === e[11] && 109 === e[16] && 112 === e[17] && 52 === e[18] && 49 === e[19] && 109 === e[20] && 112 === e[21] && 52 === e[22] && 50 === e[23] && 105 === e[24] && 115 === e[25] && 111 === e[26] && 109 === e[27] || 0 === e[0] && 0 === e[1] && 0 === e[2] && 28 === e[3] && 102 === e[4] && 116 === e[5] && 121 === e[6] && 112 === e[7] && 105 === e[8] && 115 === e[9] && 111 === e[10] && 109 === e[11] || 0 === e[0] && 0 === e[1] && 0 === e[2] && 28 === e[3] && 102 === e[4] && 116 === e[5] && 121 === e[6] && 112 === e[7] && 109 === e[8] && 112 === e[9] && 52 === e[10] && 50 === e[11] && 0 === e[12] && 0 === e[13] && 0 === e[14] && 0 === e[15] ? {
                ext: "mp4",
                mime: "video/mp4"
            } : 0 === e[0] && 0 === e[1] && 0 === e[2] && 28 === e[3] && 102 === e[4] && 116 === e[5] && 121 === e[6] && 112 === e[7] && 77 === e[8] && 52 === e[9] && 86 === e[10] ? {
                ext: "m4v",
                mime: "video/x-m4v"
            } : 77 === e[0] && 84 === e[1] && 104 === e[2] && 100 === e[3] ? {
                ext: "mid",
                mime: "audio/midi"
            } : 109 === e[31] && 97 === e[32] && 116 === e[33] && 114 === e[34] && 111 === e[35] && 115 === e[36] && 107 === e[37] && 97 === e[38] ? {
                ext: "mkv",
                mime: "video/x-matroska"
            } : 26 === e[0] && 69 === e[1] && 223 === e[2] && 163 === e[3] ? {
                ext: "webm",
                mime: "video/webm"
            } : 0 === e[0] && 0 === e[1] && 0 === e[2] && 20 === e[3] && 102 === e[4] && 116 === e[5] && 121 === e[6] && 112 === e[7] ? {
                ext: "mov",
                mime: "video/quicktime"
            } : 82 === e[0] && 73 === e[1] && 70 === e[2] && 70 === e[3] && 65 === e[8] && 86 === e[9] && 73 === e[10] ? {
                ext: "avi",
                mime: "video/x-msvideo"
            } : 48 === e[0] && 38 === e[1] && 178 === e[2] && 117 === e[3] && 142 === e[4] && 102 === e[5] && 207 === e[6] && 17 === e[7] && 166 === e[8] && 217 === e[9] ? {
                ext: "wmv",
                mime: "video/x-ms-wmv"
            } : 0 === e[0] && 0 === e[1] && 1 === e[2] && "b" === e[3].toString(16)[0] ? {
                ext: "mpg",
                mime: "video/mpeg"
            } : 73 === e[0] && 68 === e[1] && 51 === e[2] || 255 === e[0] && 251 === e[1] ? {
                ext: "mp3",
                mime: "audio/mpeg"
            } : 102 === e[4] && 116 === e[5] && 121 === e[6] && 112 === e[7] && 77 === e[8] && 52 === e[9] && 65 === e[10] || 77 === e[0] && 52 === e[1] && 65 === e[2] && 32 === e[3] ? {
                ext: "m4a",
                mime: "audio/m4a"
            } : 79 === e[28] && 112 === e[29] && 117 === e[30] && 115 === e[31] && 72 === e[32] && 101 === e[33] && 97 === e[34] && 100 === e[35] ? {
                ext: "opus",
                mime: "audio/opus"
            } : 79 === e[0] && 103 === e[1] && 103 === e[2] && 83 === e[3] ? {
                ext: "ogg",
                mime: "audio/ogg"
            } : 102 === e[0] && 76 === e[1] && 97 === e[2] && 67 === e[3] ? {
                ext: "flac",
                mime: "audio/x-flac"
            } : 82 === e[0] && 73 === e[1] && 70 === e[2] && 70 === e[3] && 87 === e[8] && 65 === e[9] && 86 === e[10] && 69 === e[11] ? {
                ext: "wav",
                mime: "audio/x-wav"
            } : 35 === e[0] && 33 === e[1] && 65 === e[2] && 77 === e[3] && 82 === e[4] && 10 === e[5] ? {
                ext: "amr",
                mime: "audio/amr"
            } : 37 === e[0] && 80 === e[1] && 68 === e[2] && 70 === e[3] ? {
                ext: "pdf",
                mime: "application/pdf"
            } : 77 === e[0] && 90 === e[1] ? {
                ext: "exe",
                mime: "application/x-msdownload"
            } : 67 !== e[0] && 70 !== e[0] || 87 !== e[1] || 83 !== e[2] ? 123 === e[0] && 92 === e[1] && 114 === e[2] && 116 === e[3] && 102 === e[4] ? {
                ext: "rtf",
                mime: "application/rtf"
            } : 119 === e[0] && 79 === e[1] && 70 === e[2] && 70 === e[3] && (0 === e[4] && 1 === e[5] && 0 === e[6] && 0 === e[7] || 79 === e[4] && 84 === e[5] && 84 === e[6] && 79 === e[7]) ? {
                ext: "woff",
                mime: "application/font-woff"
            } : 119 === e[0] && 79 === e[1] && 70 === e[2] && 50 === e[3] && (0 === e[4] && 1 === e[5] && 0 === e[6] && 0 === e[7] || 79 === e[4] && 84 === e[5] && 84 === e[6] && 79 === e[7]) ? {
                ext: "woff2",
                mime: "application/font-woff"
            } : 76 === e[34] && 80 === e[35] && (0 === e[8] && 0 === e[9] && 1 === e[10] || 1 === e[8] && 0 === e[9] && 2 === e[10] || 2 === e[8] && 0 === e[9] && 2 === e[10]) ? {
                ext: "eot",
                mime: "application/octet-stream"
            } : 0 === e[0] && 1 === e[1] && 0 === e[2] && 0 === e[3] && 0 === e[4] ? {
                ext: "ttf",
                mime: "application/font-sfnt"
            } : 79 === e[0] && 84 === e[1] && 84 === e[2] && 79 === e[3] && 0 === e[4] ? {
                ext: "otf",
                mime: "application/font-sfnt"
            } : 0 === e[0] && 0 === e[1] && 1 === e[2] && 0 === e[3] ? {
                ext: "ico",
                mime: "image/x-icon"
            } : 70 === e[0] && 76 === e[1] && 86 === e[2] && 1 === e[3] ? {
                ext: "flv",
                mime: "video/x-flv"
            } : 37 === e[0] && 33 === e[1] ? {
                ext: "ps",
                mime: "application/postscript"
            } : 253 === e[0] && 55 === e[1] && 122 === e[2] && 88 === e[3] && 90 === e[4] && 0 === e[5] ? {
                ext: "xz",
                mime: "application/x-xz"
            } : 83 === e[0] && 81 === e[1] && 76 === e[2] && 105 === e[3] ? {
                ext: "sqlite",
                mime: "application/x-sqlite3"
            } : 78 === e[0] && 69 === e[1] && 83 === e[2] && 26 === e[3] ? {
                ext: "nes",
                mime: "application/x-nintendo-nes-rom"
            } : 67 === e[0] && 114 === e[1] && 50 === e[2] && 52 === e[3] ? {
                ext: "crx",
                mime: "application/x-google-chrome-extension"
            } : 77 === e[0] && 83 === e[1] && 67 === e[2] && 70 === e[3] || 73 === e[0] && 83 === e[1] && 99 === e[2] && 40 === e[3] ? {
                ext: "cab",
                mime: "application/vnd.ms-cab-compressed"
            } : 33 === e[0] && 60 === e[1] && 97 === e[2] && 114 === e[3] && 99 === e[4] && 104 === e[5] && 62 === e[6] && 10 === e[7] && 100 === e[8] && 101 === e[9] && 98 === e[10] && 105 === e[11] && 97 === e[12] && 110 === e[13] && 45 === e[14] && 98 === e[15] && 105 === e[16] && 110 === e[17] && 97 === e[18] && 114 === e[19] && 121 === e[20] ? {
                ext: "deb",
                mime: "application/x-deb"
            } : 33 === e[0] && 60 === e[1] && 97 === e[2] && 114 === e[3] && 99 === e[4] && 104 === e[5] && 62 === e[6] ? {
                ext: "ar",
                mime: "application/x-unix-archive"
            } : 237 === e[0] && 171 === e[1] && 238 === e[2] && 219 === e[3] ? {
                ext: "rpm",
                mime: "application/x-rpm"
            } : 31 === e[0] && 160 === e[1] || 31 === e[0] && 157 === e[1] ? {
                ext: "Z",
                mime: "application/x-compress"
            } : 76 === e[0] && 90 === e[1] && 73 === e[2] && 80 === e[3] ? {
                ext: "lz",
                mime: "application/x-lzip"
            } : 208 === e[0] && 207 === e[1] && 17 === e[2] && 224 === e[3] && 161 === e[4] && 177 === e[5] && 26 === e[6] && 225 === e[7] ? {
                ext: "msi",
                mime: "application/x-msi"
            } : null : {
                ext: "swf",
                mime: "application/x-shockwave-flash"
            } : {
                ext: "rar",
                mime: "application/x-rar-compressed"
            } : {
                ext: "zip",
                mime: "application/zip"
            } : null
        }
    },
    452: function(e, t) {
        var n = window.URL || window.webkitURL;
        e.exports = function(e, t) {
            try {
                var r;
                try {
                    var i = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                    r = new i,
                    r.append(e),
                    r = r.getBlob()
                } catch (o) {
                    r = new Blob([e])
                }
                return new Worker(n.createObjectURL(r))
            } catch (o) {
                return new Worker(t)
            }
        }
    },
    456: function(e, t) {
        e.exports = function(e, t) {
            var n = e.length
              , r = e.indexOf(t) + 1;
            return r > n - 1 && (r = 0),
            e[r]
        }
    },
    583: function(e, t, n) {
        var r;
        (function(i) {
            (function(e, t, n) {
                "use strict";
                function r(e, t) {
                    return "object" != typeof t && (t = t()),
                    Object.keys(t).forEach(function(n) {
                        e[n] = t[n]
                    }),
                    e
                }
                function o(e) {
                    return {
                        from: function(t) {
                            return e.prototype = Object.create(t.prototype),
                            e.prototype.constructor = e,
                            {
                                extend: function(n) {
                                    r(e.prototype, "object" != typeof n ? n(t.prototype) : n)
                                }
                            }
                        }
                    }
                }
                function a(e, t) {
                    return t(e)
                }
                function s(e, t) {
                    function i() {
                        Pe.on("versionchange", function(e) {
                            Pe.close(),
                            Pe.on("error").fire(new pe("Database version changed by other database connection."))
                        })
                    }
                    function l(e) {
                        this._cfg = {
                            version: e,
                            storesSource: null ,
                            dbschema: {},
                            tables: {},
                            contentUpgrade: null
                        },
                        this.stores({})
                    }
                    function p(e, t, n, r) {
                        if (0 === e) {
                            Object.keys(we).forEach(function(e) {
                                _(t, e, we[e].primKey, we[e].indexes)
                            });
                            var i = Pe._createTransaction(Se, ge, we);
                            i.idbtrans = t,
                            i.idbtrans.onerror = T(n, ["populating database"]),
                            i.on("error").subscribe(n),
                            B.newPSD(function() {
                                B.PSD.trans = i;
                                try {
                                    Pe.on("populate").fire(i)
                                } catch (e) {
                                    r.onerror = t.onerror = function(e) {
                                        e.preventDefault()
                                    }
                                    ;
                                    try {
                                        t.abort()
                                    } catch (o) {}
                                    t.db.close(),
                                    n(e)
                                }
                            })
                        } else {
                            var o = []
                              , s = me.filter(function(t) {
                                return t._cfg.version === e
                            })[0];
                            if (!s)
                                throw new pe("Dexie specification of currently installed DB version is missing");
                            we = Pe._dbSchema = s._cfg.dbschema;
                            var c = !1
                              , u = me.filter(function(t) {
                                return t._cfg.version > e
                            });
                            u.forEach(function(e) {
                                var r = we
                                  , i = e._cfg.dbschema;
                                ce(r, t),
                                ce(i, t),
                                we = Pe._dbSchema = i;
                                var s = b(r, i);
                                s.add.forEach(function(e) {
                                    o.push(function(t, n) {
                                        _(t, e[0], e[1].primKey, e[1].indexes),
                                        n()
                                    })
                                }),
                                s.change.forEach(function(e) {
                                    if (e.recreate)
                                        throw new pe("Not yet support for changing primary key");
                                    o.push(function(t, n) {
                                        var r = t.objectStore(e.name);
                                        e.add.forEach(function(e) {
                                            G(r, e)
                                        }),
                                        e.change.forEach(function(e) {
                                            r.deleteIndex(e.name),
                                            G(r, e)
                                        }),
                                        e.del.forEach(function(e) {
                                            r.deleteIndex(e)
                                        }),
                                        n()
                                    })
                                }),
                                e._cfg.contentUpgrade && o.push(function(t, r) {
                                    c = !0;
                                    var o = Pe._createTransaction(Se, [].slice.call(t.db.objectStoreNames, 0), i);
                                    o.idbtrans = t;
                                    var s = 0;
                                    o._promise = a(o._promise, function(e) {
                                        return function(t, n, i) {
                                            function o(e) {
                                                return function() {
                                                    e.apply(this, arguments),
                                                    0 === --s && r()
                                                }
                                            }
                                            return ++s,
                                            e.call(this, t, function(e, t, r) {
                                                arguments[0] = o(e),
                                                arguments[1] = o(t),
                                                n.apply(this, arguments)
                                            }, i)
                                        }
                                    }),
                                    t.onerror = T(n, ["running upgrader function for version", e._cfg.version]),
                                    o.on("error").subscribe(n),
                                    e._cfg.contentUpgrade(o),
                                    0 === s && r()
                                }),
                                c && ae() || o.push(function(e, t) {
                                    M(i, e),
                                    t()
                                })
                            });
                            var f = function() {
                                try {
                                    o.length ? o.shift()(t, f) : S(we, t)
                                } catch (e) {
                                    r.onerror = t.onerror = function(e) {
                                        e.preventDefault()
                                    }
                                    ;
                                    try {
                                        t.abort()
                                    } catch (i) {}
                                    t.db.close(),
                                    n(e)
                                }
                            };
                            f()
                        }
                    }
                    function b(e, t) {
                        var n = {
                            del: [],
                            add: [],
                            change: []
                        };
                        for (var r in e)
                            t[r] || n.del.push(r);
                        for (var r in t) {
                            var i = e[r]
                              , o = t[r];
                            if (i) {
                                var a = {
                                    name: r,
                                    def: t[r],
                                    recreate: !1,
                                    del: [],
                                    add: [],
                                    change: []
                                };
                                if (i.primKey.src !== o.primKey.src)
                                    a.recreate = !0,
                                    n.change.push(a);
                                else {
                                    var s = i.indexes.reduce(function(e, t) {
                                        return e[t.name] = t,
                                        e
                                    }, {})
                                      , c = o.indexes.reduce(function(e, t) {
                                        return e[t.name] = t,
                                        e
                                    }, {});
                                    for (var u in s)
                                        c[u] || a.del.push(u);
                                    for (var u in c) {
                                        var f = s[u]
                                          , l = c[u];
                                        f ? f.src !== l.src && a.change.push(l) : a.add.push(l)
                                    }
                                    (a.recreate || a.del.length > 0 || a.add.length > 0 || a.change.length > 0) && n.change.push(a)
                                }
                            } else
                                n.add.push([r, o])
                        }
                        return n
                    }
                    function _(e, t, n, r) {
                        var i = e.db.createObjectStore(t, n.keyPath ? {
                            keyPath: n.keyPath,
                            autoIncrement: n.auto
                        } : {
                            autoIncrement: n.auto
                        });
                        return r.forEach(function(e) {
                            G(i, e)
                        }),
                        i
                    }
                    function S(e, t) {
                        Object.keys(e).forEach(function(n) {
                            t.db.objectStoreNames.contains(n) || _(t, n, e[n].primKey, e[n].indexes)
                        })
                    }
                    function M(e, t) {
                        for (var r = 0; r < t.db.objectStoreNames.length; ++r) {
                            var i = t.db.objectStoreNames[r];
                            null !== e[i] && e[i] !== n || t.db.deleteObjectStore(i)
                        }
                    }
                    function G(e, t) {
                        e.createIndex(t.name, t.keyPath, {
                            unique: t.unique,
                            multiEntry: t.multi
                        })
                    }
                    function V(e, t) {
                        throw new pe("Table " + t[0] + " not part of transaction. Original Scope Function Source: " + s.Promise.PSD.trans.scopeFunc.toString())
                    }
                    function K(e, t, n, r) {
                        this.name = e,
                        this.schema = n,
                        this.hook = ve[e] ? ve[e].hook : v(null , {
                            creating: [h, c],
                            reading: [f, u],
                            updating: [d, c],
                            deleting: [m, c]
                        }),
                        this._tpf = t,
                        this._collClass = r || Z
                    }
                    function H(e, t, n, r) {
                        K.call(this, e, t, n, r || X)
                    }
                    function Y(e, t, n, r) {
                        function i(e, t, n, r) {
                            return o._promise(e, n, r)
                        }
                        var o = this;
                        this.db = Pe,
                        this.mode = e,
                        this.storeNames = t,
                        this.idbtrans = null ,
                        this.on = v(this, ["complete", "error"], "abort"),
                        this._reculock = 0,
                        this._blockedFuncs = [],
                        this._psd = null ,
                        this.active = !0,
                        this._dbschema = n,
                        r && (this.parent = r),
                        this._tpf = i,
                        this.tables = Object.create(be);
                        for (var a = t.length - 1; a !== -1; --a) {
                            var s = t[a]
                              , c = Pe._tableFactory(e, n[s], i);
                            this.tables[s] = c,
                            this[s] || (this[s] = c)
                        }
                    }
                    function W(e, t, n) {
                        this._ctx = {
                            table: e,
                            index: ":id" === t ? null : t,
                            collClass: e._collClass,
                            or: n
                        }
                    }
                    function Z(e, t) {
                        var n = null
                          , r = null ;
                        if (t)
                            try {
                                n = t()
                            } catch (i) {
                                r = i
                            }
                        var o = e._ctx;
                        this._ctx = {
                            table: o.table,
                            index: o.index,
                            isPrimKey: !o.index || o.table.schema.primKey.keyPath && o.index === o.table.schema.primKey.name,
                            range: n,
                            op: "openCursor",
                            dir: "next",
                            unique: "",
                            algorithm: null ,
                            filter: null ,
                            isMatch: null ,
                            offset: 0,
                            limit: 1 / 0,
                            error: r,
                            or: o.or
                        }
                    }
                    function X() {
                        Z.apply(this, arguments)
                    }
                    function J(e, t) {
                        return e._cfg.version - t._cfg.version
                    }
                    function Q(e, t, n, r, i, o) {
                        n.forEach(function(n) {
                            var a = Pe._tableFactory(r, i[n], t);
                            e.forEach(function(e) {
                                e[n] || (o ? Object.defineProperty(e, n, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        var e = B.PSD && B.PSD.trans;
                                        return e && e.db === Pe ? e.tables[n] : a
                                    }
                                }) : e[n] = a)
                            })
                        })
                    }
                    function $(e) {
                        e.forEach(function(e) {
                            for (var t in e)
                                e[t]instanceof K && delete e[t]
                        })
                    }
                    function ee(e, t, n, r, i, o) {
                        var a = B.PSD;
                        o = o || u,
                        e.onerror || (e.onerror = T(i)),
                        t ? e.onsuccess = k(function(a) {
                            var s = e.result;
                            if (s) {
                                var c = function() {
                                    s["continue"]()
                                };
                                t(s, function(e) {
                                    c = e
                                }, r, i) && n(o(s.value), s, function(e) {
                                    c = e
                                }),
                                c()
                            } else
                                r()
                        }, i, a) : e.onsuccess = k(function(t) {
                            var i = e.result;
                            if (i) {
                                var a = function() {
                                    i["continue"]()
                                };
                                n(o(i.value), i, function(e) {
                                    a = e
                                }),
                                a()
                            } else
                                r()
                        }, i, a)
                    }
                    function te(e) {
                        var t = [];
                        return e.split(",").forEach(function(e) {
                            e = e.trim();
                            var n = e.replace("&", "").replace("++", "").replace("*", "")
                              , r = 0 !== n.indexOf("[") ? n : e.substring(e.indexOf("[") + 1, e.indexOf("]")).split("+");
                            t.push(new R(n,r || null ,e.indexOf("&") !== -1,e.indexOf("*") !== -1,e.indexOf("++") !== -1,Array.isArray(r),r.indexOf(".") !== -1))
                        }),
                        t
                    }
                    function ne(e, t) {
                        return e < t ? -1 : e > t ? 1 : 0
                    }
                    function re(e, t) {
                        return e < t ? 1 : e > t ? -1 : 0
                    }
                    function ie(e) {
                        return function(t, n) {
                            for (var r = 0; ; ) {
                                var i = e(t[r], n[r]);
                                if (0 !== i)
                                    return i;
                                if (++r,
                                r === t.length || r === n.length)
                                    return e(t.length, n.length)
                            }
                        }
                    }
                    function oe(e, t) {
                        return e ? t ? function() {
                            return e.apply(this, arguments) && t.apply(this, arguments)
                        }
                        : e : t
                    }
                    function ae() {
                        return navigator.userAgent.indexOf("Trident") >= 0 || navigator.userAgent.indexOf("MSIE") >= 0
                    }
                    function se() {
                        if (Pe.verno = ye.version / 10,
                        Pe._dbSchema = we = {},
                        ge = [].slice.call(ye.objectStoreNames, 0),
                        0 !== ge.length) {
                            var e = ye.transaction(q(ge), "readonly");
                            ge.forEach(function(t) {
                                for (var n = e.objectStore(t), r = n.keyPath, i = r && "string" == typeof r && r.indexOf(".") !== -1, o = new R(r,r || "",(!1),(!1),(!!n.autoIncrement),r && "string" != typeof r,i), a = [], s = 0; s < n.indexNames.length; ++s) {
                                    var c = n.index(n.indexNames[s]);
                                    r = c.keyPath,
                                    i = r && "string" == typeof r && r.indexOf(".") !== -1;
                                    var u = new R(c.name,r,(!!c.unique),(!!c.multiEntry),(!1),r && "string" != typeof r,i);
                                    a.push(u)
                                }
                                we[t] = new N(t,o,a,{})
                            }),
                            Q([ve], Pe._transPromiseFactory, Object.keys(we), Se, we)
                        }
                    }
                    function ce(e, t) {
                        for (var n = t.db.objectStoreNames, r = 0; r < n.length; ++r)
                            for (var i = n[r], o = t.objectStore(i), a = 0; a < o.indexNames.length; ++a) {
                                var s = o.indexNames[a]
                                  , c = o.index(s).keyPath
                                  , u = "string" == typeof c ? c : "[" + [].slice.call(c).join("+") + "]";
                                if (e[i]) {
                                    var f = e[i].idxByName[u];
                                    f && (f.name = s)
                                }
                            }
                    }
                    var ue = t && t.addons || s.addons
                      , fe = s.dependencies
                      , le = fe.indexedDB
                      , he = fe.IDBKeyRange
                      , de = (fe.IDBTransaction,
                    fe.DOMError,
                    fe.TypeError)
                      , pe = fe.Error
                      , we = this._dbSchema = {}
                      , me = []
                      , ge = []
                      , ve = {}
                      , be = {}
                      , ye = null
                      , _e = !0
                      , ke = null
                      , xe = !1
                      , Ae = "readonly"
                      , Se = "readwrite"
                      , Pe = this
                      , Ce = []
                      , Ee = !0
                      , Me = !!j();
                    this.version = function(e) {
                        if (ye)
                            throw new pe("Cannot add version when database is open");
                        this.verno = Math.max(this.verno, e);
                        var t = me.filter(function(t) {
                            return t._cfg.version === e
                        })[0];
                        return t ? t : (t = new l(e),
                        me.push(t),
                        me.sort(J),
                        t)
                    }
                    ,
                    r(l.prototype, {
                        stores: function(e) {
                            this._cfg.storesSource = this._cfg.storesSource ? r(this._cfg.storesSource, e) : e;
                            var t = {};
                            me.forEach(function(e) {
                                r(t, e._cfg.storesSource)
                            });
                            var n = this._cfg.dbschema = {};
                            return this._parseStoresSpec(t, n),
                            we = Pe._dbSchema = n,
                            $([ve, Pe, be]),
                            Q([be], V, Object.keys(n), Se, n),
                            Q([ve, Pe, this._cfg.tables], Pe._transPromiseFactory, Object.keys(n), Se, n, !0),
                            ge = Object.keys(n),
                            this
                        },
                        upgrade: function(e) {
                            var t = this;
                            return U(function() {
                                e(Pe._createTransaction(Se, Object.keys(t._cfg.dbschema), t._cfg.dbschema))
                            }),
                            this._cfg.contentUpgrade = e,
                            this
                        },
                        _parseStoresSpec: function(e, t) {
                            Object.keys(e).forEach(function(n) {
                                if (null !== e[n]) {
                                    var r = {}
                                      , i = te(e[n])
                                      , o = i.shift();
                                    if (o.multi)
                                        throw new pe("Primary key cannot be multi-valued");
                                    o.keyPath && A(r, o.keyPath, o.auto ? 0 : o.keyPath),
                                    i.forEach(function(e) {
                                        if (e.auto)
                                            throw new pe("Only primary key can be marked as autoIncrement (++)");
                                        if (!e.keyPath)
                                            throw new pe("Index must have a name and cannot be an empty string");
                                        A(r, e.keyPath, e.compound ? e.keyPath.map(function() {
                                            return ""
                                        }) : "")
                                    }),
                                    t[n] = new N(n,o,i,r)
                                }
                            })
                        }
                    }),
                    this._allTables = ve,
                    this._tableFactory = function(e, t, n) {
                        return e === Ae ? new K(t.name,n,t,Z) : new H(t.name,n,t)
                    }
                    ,
                    this._createTransaction = function(e, t, n, r) {
                        return new Y(e,t,n,r)
                    }
                    ,
                    this._transPromiseFactory = function(e, t, n) {
                        if (!_e || B.PSD && B.PSD.letThrough) {
                            var r = Pe._createTransaction(e, t, we);
                            return r._promise(e, function(e, t) {
                                r.error(function(e) {
                                    Pe.on("error").fire(e)
                                }),
                                n(function(t) {
                                    r.complete(function() {
                                        e(t)
                                    })
                                }, t, r)
                            })
                        }
                        var i = new B(function(r, o) {
                            Ce.push({
                                resume: function() {
                                    var a = Pe._transPromiseFactory(e, t, n);
                                    i.onuncatched = a.onuncatched,
                                    a.then(r, o)
                                }
                            })
                        }
                        );
                        return i
                    }
                    ,
                    this._whenReady = function(e) {
                        return new B(z || !_e || B.PSD && B.PSD.letThrough ? e : function(t, n) {
                            Ce.push({
                                resume: function() {
                                    e(t, n)
                                }
                            })
                        }
                        )
                    }
                    ,
                    this.verno = 0,
                    this.open = function() {
                        return new B(function(t, n) {
                            function r(e) {
                                try {
                                    i.transaction.abort()
                                } catch (t) {}
                                xe = !1,
                                ke = e,
                                _e = !1,
                                n(ke),
                                Ce.forEach(function(e) {
                                    e.resume()
                                }),
                                Ce = []
                            }
                            if (z && t(Pe),
                            ye || xe)
                                throw new pe("Database already opened or being opened");
                            var i, o = !1;
                            try {
                                if (ke = null ,
                                xe = !0,
                                me.length > 0 && (Ee = !1),
                                !le)
                                    throw new pe("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using Safari, make sure to include indexedDB polyfill.");
                                if (i = Ee ? le.open(e) : le.open(e, Math.round(10 * Pe.verno)),
                                !i)
                                    throw new pe("IndexedDB API not available");
                                i.onerror = T(r, ["opening database", e]),
                                i.onblocked = function(e) {
                                    Pe.on("blocked").fire(e)
                                }
                                ,
                                i.onupgradeneeded = k(function(t) {
                                    if (Ee && !Pe._allowEmptyDB) {
                                        i.onerror = function(e) {
                                            e.preventDefault()
                                        }
                                        ,
                                        i.transaction.abort(),
                                        i.result.close();
                                        var n = le.deleteDatabase(e);
                                        n.onsuccess = n.onerror = function() {
                                            r(new pe("Database '" + e + "' doesnt exist"))
                                        }
                                    } else {
                                        0 === t.oldVersion && (o = !0),
                                        i.transaction.onerror = T(r);
                                        var a = t.oldVersion > Math.pow(2, 62) ? 0 : t.oldVersion;
                                        p(a / 10, i.transaction, r, i)
                                    }
                                }, r),
                                i.onsuccess = k(function(n) {
                                    xe = !1,
                                    ye = i.result,
                                    Ee ? se() : ye.objectStoreNames.length > 0 && ce(we, ye.transaction(q(ye.objectStoreNames), Ae)),
                                    ye.onversionchange = Pe.on("versionchange").fire,
                                    Me || F(function(t) {
                                        if (t.indexOf(e) === -1)
                                            return t.push(e)
                                    }),
                                    B.newPSD(function() {
                                        function e() {
                                            _e = !1,
                                            Ce.forEach(function(e) {
                                                e.resume()
                                            }),
                                            Ce = [],
                                            t(Pe)
                                        }
                                        B.PSD.letThrough = !0;
                                        try {
                                            var n = Pe.on.ready.fire();
                                            n && "function" == typeof n.then ? n.then(e, function(e) {
                                                ye.close(),
                                                ye = null ,
                                                r(e)
                                            }) : y(e)
                                        } catch (i) {
                                            r(i)
                                        }
                                    })
                                }, r)
                            } catch (a) {
                                r(a)
                            }
                        }
                        )
                    }
                    ,
                    this.close = function() {
                        ye && (ye.close(),
                        ye = null ,
                        _e = !0,
                        ke = null )
                    }
                    ,
                    this["delete"] = function() {
                        var t = arguments;
                        return new B(function(n, r) {
                            function i() {
                                Pe.close();
                                var t = le.deleteDatabase(e);
                                t.onsuccess = function() {
                                    Me || F(function(t) {
                                        var n = t.indexOf(e);
                                        if (n >= 0)
                                            return t.splice(n, 1)
                                    }),
                                    n()
                                }
                                ,
                                t.onerror = T(r, ["deleting", e]),
                                t.onblocked = function() {
                                    Pe.on("blocked").fire()
                                }
                            }
                            if (t.length > 0)
                                throw new pe("Arguments not allowed in db.delete()");
                            xe ? Ce.push({
                                resume: i
                            }) : i()
                        }
                        )
                    }
                    ,
                    this.backendDB = function() {
                        return ye
                    }
                    ,
                    this.isOpen = function() {
                        return null !== ye
                    }
                    ,
                    this.hasFailed = function() {
                        return null !== ke
                    }
                    ,
                    this.dynamicallyOpened = function() {
                        return Ee
                    }
                    ,
                    this.name = e,
                    Object.defineProperty(this, "tables", {
                        get: function() {
                            return Object.keys(ve).map(function(e) {
                                return ve[e]
                            })
                        }
                    }),
                    this.on = v(this, "error", "populate", "blocked", {
                        ready: [g, c],
                        versionchange: [w, c]
                    }),
                    this.on.ready.subscribe = a(this.on.ready.subscribe, function(e) {
                        return function(t, n) {
                            function r() {
                                return n || Pe.on.ready.unsubscribe(r),
                                t.apply(this, arguments)
                            }
                            e.call(this, r),
                            Pe.isOpen() && (_e ? Ce.push({
                                resume: r
                            }) : r())
                        }
                    }),
                    U(function() {
                        Pe.on("populate").fire(Pe._createTransaction(Se, ge, we)),
                        Pe.on("error").fire(new pe)
                    }),
                    this.transaction = function(e, t, n) {
                        function r(t, r) {
                            var o = null ;
                            try {
                                if (c)
                                    throw c;
                                o = Pe._createTransaction(e, u, we, i);
                                var s = u.map(function(e) {
                                    return o.tables[e]
                                });
                                s.push(o);
                                var f, l = 0;
                                B.newPSD(function() {
                                    B.PSD.trans = o,
                                    o.scopeFunc = n,
                                    i && (o.idbtrans = i.idbtrans,
                                    o._promise = a(o._promise, function(e) {
                                        return function(t, n, r) {
                                            function i(e) {
                                                return function(t) {
                                                    var n;
                                                    return B._rootExec(function() {
                                                        n = e(t),
                                                        B._tickFinalize(function() {
                                                            0 === --l && o.active && (o.active = !1,
                                                            o.on.complete.fire())
                                                        })
                                                    }),
                                                    n
                                                }
                                            }
                                            return ++l,
                                            e.call(this, t, function(e, t, r) {
                                                return n(i(e), i(t), r)
                                            }, r)
                                        }
                                    })),
                                    o.complete(function() {
                                        t(f)
                                    }),
                                    o.error(function(e) {
                                        o.idbtrans && (o.idbtrans.onerror = I);
                                        try {
                                            o.abort()
                                        } catch (t) {}
                                        i && (i.active = !1,
                                        i.on.error.fire(e));
                                        var n = r(e);
                                        i || n || Pe.on.error.fire(e)
                                    }),
                                    B._rootExec(function() {
                                        f = n.apply(o, s)
                                    })
                                }),
                                (!o.idbtrans || i && 0 === l) && o._nop()
                            } catch (h) {
                                o && o.idbtrans && (o.idbtrans.onerror = I),
                                o && o.abort(),
                                i && i.on.error.fire(h),
                                y(function() {
                                    r(h) || Pe.on("error").fire(h)
                                })
                            }
                        }
                        t = [].slice.call(arguments, 1, arguments.length - 1),
                        n = arguments[arguments.length - 1];
                        var i = B.PSD && B.PSD.trans;
                        i && i.db === Pe && e.indexOf("!") === -1 || (i = null );
                        var o = e.indexOf("?") !== -1;
                        e = e.replace("!", "").replace("?", "");
                        var s = Array.isArray(t[0]) ? t.reduce(function(e, t) {
                            return e.concat(t)
                        }) : t
                          , c = null
                          , u = s.map(function(e) {
                            return "string" == typeof e ? e : (e instanceof K || (c = c || new de("Invalid type. Arguments following mode must be instances of Table or String")),
                            e.name)
                        });
                        return "r" == e || e == Ae ? e = Ae : "rw" == e || e == Se ? e = Se : c = new pe("Invalid transaction mode: " + e),
                        i && (c || (i && i.mode === Ae && e === Se && (o ? i = null : c = c || new pe("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY")),
                        i && u.forEach(function(e) {
                            i.tables.hasOwnProperty(e) || (o ? i = null : c = c || new pe("Table " + e + " not included in parent transaction. Parent Transaction function: " + i.scopeFunc.toString()))
                        }))),
                        i ? i._promise(e, r, "lock") : Pe._whenReady(r)
                    }
                    ,
                    this.table = function(e) {
                        if (z && Ee)
                            return new H(e);
                        if (!ve.hasOwnProperty(e))
                            throw new pe("Table does not exist");
                        return ve[e]
                    }
                    ,
                    r(K.prototype, function() {
                        function e() {
                            throw new pe("Current Transaction is READONLY")
                        }
                        return {
                            _trans: function(e, t, n) {
                                return this._tpf(e, [this.name], t, n)
                            },
                            _idbstore: function(e, t, n) {
                                if (z)
                                    return new B(t);
                                var r = this;
                                return this._tpf(e, [this.name], function(e, n, i) {
                                    t(e, n, i.idbtrans.objectStore(r.name), i)
                                }, n)
                            },
                            get: function(e, t) {
                                var n = this;
                                return this._idbstore(Ae, function(t, r, i) {
                                    z && t(n.schema.instanceTemplate);
                                    var o = i.get(e);
                                    o.onerror = T(r, ["getting", e, "from", n.name]),
                                    o.onsuccess = function() {
                                        t(n.hook.reading.fire(o.result))
                                    }
                                }).then(t)
                            },
                            where: function(e) {
                                return new W(this,e)
                            },
                            count: function(e) {
                                return this.toCollection().count(e)
                            },
                            offset: function(e) {
                                return this.toCollection().offset(e)
                            },
                            limit: function(e) {
                                return this.toCollection().limit(e)
                            },
                            reverse: function() {
                                return this.toCollection().reverse()
                            },
                            filter: function(e) {
                                return this.toCollection().and(e)
                            },
                            each: function(e) {
                                var t = this;
                                return z && e(t.schema.instanceTemplate),
                                this._idbstore(Ae, function(n, r, i) {
                                    var o = i.openCursor();
                                    o.onerror = T(r, ["calling", "Table.each()", "on", t.name]),
                                    ee(o, null , e, n, r, t.hook.reading.fire)
                                })
                            },
                            toArray: function(e) {
                                var t = this;
                                return this._idbstore(Ae, function(e, n, r) {
                                    z && e([t.schema.instanceTemplate]);
                                    var i = []
                                      , o = r.openCursor();
                                    o.onerror = T(n, ["calling", "Table.toArray()", "on", t.name]),
                                    ee(o, null , function(e) {
                                        i.push(e)
                                    }, function() {
                                        e(i)
                                    }, n, t.hook.reading.fire)
                                }).then(e)
                            },
                            orderBy: function(e) {
                                return new this._collClass(new W(this,e))
                            },
                            toCollection: function() {
                                return new this._collClass(new W(this))
                            },
                            mapToClass: function(e, t) {
                                this.schema.mappedClass = e;
                                var n = Object.create(e.prototype);
                                t && O(n, t),
                                this.schema.instanceTemplate = n;
                                var r = function(t) {
                                    if (!t)
                                        return t;
                                    var n = Object.create(e.prototype);
                                    for (var r in t)
                                        t.hasOwnProperty(r) && (n[r] = t[r]);
                                    return n
                                };
                                return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
                                this.schema.readHook = r,
                                this.hook("reading", r),
                                e
                            },
                            defineClass: function(e) {
                                return this.mapToClass(s.defineClass(e), e)
                            },
                            add: e,
                            put: e,
                            "delete": e,
                            clear: e,
                            update: e
                        }
                    }),
                    o(H).from(K).extend(function() {
                        return {
                            add: function(e, t) {
                                var r = this
                                  , i = this.hook.creating.fire;
                                return this._idbstore(Se, function(o, a, s, u) {
                                    var f = {};
                                    if (i !== c) {
                                        var l = t || (s.keyPath ? x(e, s.keyPath) : n)
                                          , h = i.call(f, l, e, u);
                                        l === n && h !== n && (s.keyPath ? A(e, s.keyPath, h) : t = h)
                                    }
                                    var d = t ? s.add(e, t) : s.add(e);
                                    d.onerror = T(function(e) {
                                        return f.onerror && f.onerror(e),
                                        a(e)
                                    }, ["adding", e, "into", r.name]),
                                    d.onsuccess = function(t) {
                                        var n = s.keyPath;
                                        n && A(e, n, t.target.result),
                                        f.onsuccess && f.onsuccess(t.target.result),
                                        o(d.result)
                                    }
                                })
                            },
                            put: function(e, t) {
                                var r = this
                                  , i = this.hook.creating.fire
                                  , o = this.hook.updating.fire;
                                return i !== c || o !== c ? this._trans(Se, function(i, o, a) {
                                    var s = t || r.schema.primKey.keyPath && x(e, r.schema.primKey.keyPath);
                                    s === n ? a.tables[r.name].add(e).then(i, o) : (a._lock(),
                                    e = C(e),
                                    a.tables[r.name].where(":id").equals(s).modify(function(t) {
                                        this.value = e
                                    }).then(function(n) {
                                        return 0 === n ? a.tables[r.name].add(e, t) : s
                                    })["finally"](function() {
                                        a._unlock()
                                    }).then(i, o))
                                }) : this._idbstore(Se, function(n, i, o) {
                                    var a = t ? o.put(e, t) : o.put(e);
                                    a.onerror = T(i, ["putting", e, "into", r.name]),
                                    a.onsuccess = function(t) {
                                        var r = o.keyPath;
                                        r && A(e, r, t.target.result),
                                        n(a.result)
                                    }
                                })
                            },
                            "delete": function(e) {
                                return this.hook.deleting.subscribers.length ? this.where(":id").equals(e)["delete"]() : this._idbstore(Se, function(t, n, r) {
                                    var i = r["delete"](e);
                                    i.onerror = T(n, ["deleting", e, "from", r.name]),
                                    i.onsuccess = function(e) {
                                        t(i.result)
                                    }
                                })
                            },
                            clear: function() {
                                return this.hook.deleting.subscribers.length ? this.toCollection()["delete"]() : this._idbstore(Se, function(e, t, n) {
                                    var r = n.clear();
                                    r.onerror = T(t, ["clearing", n.name]),
                                    r.onsuccess = function(t) {
                                        e(r.result)
                                    }
                                })
                            },
                            update: function(e, t) {
                                if ("object" != typeof t || Array.isArray(t))
                                    throw new pe("db.update(keyOrObject, modifications). modifications must be an object.");
                                if ("object" != typeof e || Array.isArray(e))
                                    return this.where(":id").equals(e).modify(t);
                                Object.keys(t).forEach(function(n) {
                                    A(e, n, t[n])
                                });
                                var r = x(e, this.schema.primKey.keyPath);
                                return r === n && B.reject(new pe("Object does not contain its primary key")),
                                this.where(":id").equals(r).modify(t)
                            }
                        }
                    }),
                    r(Y.prototype, {
                        _lock: function() {
                            return ++this._reculock,
                            1 === this._reculock && B.PSD && (B.PSD.lockOwnerFor = this),
                            this
                        },
                        _unlock: function() {
                            if (0 === --this._reculock)
                                for (B.PSD && (B.PSD.lockOwnerFor = null ); this._blockedFuncs.length > 0 && !this._locked(); ) {
                                    var e = this._blockedFuncs.shift();
                                    try {
                                        e()
                                    } catch (t) {}
                                }
                            return this
                        },
                        _locked: function() {
                            return this._reculock && (!B.PSD || B.PSD.lockOwnerFor !== this)
                        },
                        _nop: function(e) {
                            this.tables[this.storeNames[0]].get(0).then(e)
                        },
                        _promise: function(e, t, n) {
                            var r = this;
                            return B.newPSD(function() {
                                var i;
                                return r._locked() ? i = new B(function(i, o) {
                                    r._blockedFuncs.push(function() {
                                        r._promise(e, t, n).then(i, o)
                                    })
                                }
                                ) : (i = r.active ? new B(function(i, o) {
                                    if (!r.idbtrans && e) {
                                        if (!ye)
                                            throw new pe(ke ? "Database not open. Following error in populate, ready or upgrade function made Dexie.open() fail: " + ke : "Database not open");
                                        var a = r.idbtrans = ye.transaction(q(r.storeNames), r.mode);
                                        a.onerror = function(e) {
                                            r.on("error").fire(e && e.target.error),
                                            e.preventDefault(),
                                            r.abort()
                                        }
                                        ,
                                        a.onabort = function(e) {
                                            y(function() {
                                                r.on("error").fire(new pe("Transaction aborted for unknown reason"))
                                            }),
                                            r.active = !1,
                                            r.on("abort").fire(e)
                                        }
                                        ,
                                        a.oncomplete = function(e) {
                                            r.active = !1,
                                            r.on("complete").fire(e)
                                        }
                                    }
                                    n && r._lock();
                                    try {
                                        t(i, o, r)
                                    } catch (c) {
                                        s.ignoreTransaction(function() {
                                            r.on("error").fire(c)
                                        }),
                                        r.abort(),
                                        o(c)
                                    }
                                }
                                ) : B.reject(D(new pe("Transaction is inactive. Original Scope Function Source: " + r.scopeFunc.toString()))),
                                r.active && n && i["finally"](function() {
                                    r._unlock()
                                })),
                                i.onuncatched = function(e) {
                                    s.ignoreTransaction(function() {
                                        r.on("error").fire(e)
                                    }),
                                    r.abort()
                                }
                                ,
                                i
                            })
                        },
                        complete: function(e) {
                            return this.on("complete", e)
                        },
                        error: function(e) {
                            return this.on("error", e)
                        },
                        abort: function() {
                            if (this.idbtrans && this.active)
                                try {
                                    this.active = !1,
                                    this.idbtrans.abort(),
                                    this.on.error.fire(new pe("Transaction Aborted"))
                                } catch (e) {}
                        },
                        table: function(e) {
                            if (!this.tables.hasOwnProperty(e))
                                throw new pe("Table " + e + " not in transaction");
                            return this.tables[e]
                        }
                    }),
                    r(W.prototype, function() {
                        function e(e, t) {
                            try {
                                throw t
                            } catch (n) {
                                e._ctx.error = n
                            }
                            return e
                        }
                        function t(e) {
                            return Array.prototype.slice.call(1 === e.length && Array.isArray(e[0]) ? e[0] : e)
                        }
                        function n(e) {
                            return "next" === e ? function(e) {
                                return e.toUpperCase()
                            }
                            : function(e) {
                                return e.toLowerCase()
                            }
                        }
                        function r(e) {
                            return "next" === e ? function(e) {
                                return e.toLowerCase()
                            }
                            : function(e) {
                                return e.toUpperCase()
                            }
                        }
                        function i(e, t, n, r, i, o) {
                            for (var a = Math.min(e.length, r.length), s = -1, c = 0; c < a; ++c) {
                                var u = t[c];
                                if (u !== r[c])
                                    return i(e[c], n[c]) < 0 ? e.substr(0, c) + n[c] + n.substr(c + 1) : i(e[c], r[c]) < 0 ? e.substr(0, c) + r[c] + n.substr(c + 1) : s >= 0 ? e.substr(0, s) + t[s] + n.substr(s + 1) : null ;
                                i(e[c], u) < 0 && (s = c)
                            }
                            return a < r.length && "next" === o ? e + n.substr(e.length) : a < e.length && "prev" === o ? e.substr(0, n.length) : s < 0 ? null : e.substr(0, s) + r[s] + n.substr(s + 1)
                        }
                        function o(e, t, o) {
                            function a(e) {
                                s = n(e),
                                c = r(e),
                                u = "next" === e ? ne : re,
                                f = s(o),
                                l = c(o),
                                h = e
                            }
                            var s, c, u, f, l, h;
                            a("next"),
                            e._ondirectionchange = function(e) {
                                a(e)
                            }
                            ,
                            e._addAlgorithm(function(e, n, r) {
                                var o = e.key;
                                if ("string" != typeof o)
                                    return !1;
                                var a = c(o);
                                if (t(a, l))
                                    return n(function() {
                                        e["continue"]()
                                    }),
                                    !0;
                                var s = i(o, a, f, l, u, h);
                                return n(s ? function() {
                                    e["continue"](s)
                                }
                                : r),
                                !1
                            })
                        }
                        return {
                            between: function(e, t, n, r) {
                                return n = n !== !1,
                                r = r === !0,
                                e > t || e === t && (n || r) && (!n || !r) ? new this._ctx.collClass(this,function() {
                                    return he.only(e)
                                }
                                ).limit(0) : new this._ctx.collClass(this,function() {
                                    return he.bound(e, t, !n, !r)
                                }
                                )
                            },
                            equals: function(e) {
                                return new this._ctx.collClass(this,function() {
                                    return he.only(e)
                                }
                                )
                            },
                            above: function(e) {
                                return new this._ctx.collClass(this,function() {
                                    return he.lowerBound(e, !0)
                                }
                                )
                            },
                            aboveOrEqual: function(e) {
                                return new this._ctx.collClass(this,function() {
                                    return he.lowerBound(e)
                                }
                                )
                            },
                            below: function(e) {
                                return new this._ctx.collClass(this,function() {
                                    return he.upperBound(e, !0)
                                }
                                )
                            },
                            belowOrEqual: function(e) {
                                return new this._ctx.collClass(this,function() {
                                    return he.upperBound(e)
                                }
                                )
                            },
                            startsWith: function(t) {
                                return "string" != typeof t ? e(new this._ctx.collClass(this), new de("String expected")) : this.between(t, t + String.fromCharCode(65535), !0, !0)
                            },
                            startsWithIgnoreCase: function(t) {
                                if ("string" != typeof t)
                                    return e(new this._ctx.collClass(this), new de("String expected"));
                                if ("" === t)
                                    return this.startsWith(t);
                                var n = new this._ctx.collClass(this,function() {
                                    return he.bound(t.toUpperCase(), t.toLowerCase() + String.fromCharCode(65535))
                                }
                                );
                                return o(n, function(e, t) {
                                    return 0 === e.indexOf(t)
                                }, t),
                                n._ondirectionchange = function() {
                                    e(n, new pe("reverse() not supported with WhereClause.startsWithIgnoreCase()"))
                                }
                                ,
                                n
                            },
                            equalsIgnoreCase: function(t) {
                                if ("string" != typeof t)
                                    return e(new this._ctx.collClass(this), new de("String expected"));
                                var n = new this._ctx.collClass(this,function() {
                                    return he.bound(t.toUpperCase(), t.toLowerCase())
                                }
                                );
                                return o(n, function(e, t) {
                                    return e === t
                                }, t),
                                n
                            },
                            anyOf: function(e) {
                                var n = this._ctx
                                  , r = n.table.schema
                                  , i = n.index ? r.idxByName[n.index] : r.primKey
                                  , o = i && i.compound
                                  , a = t(arguments)
                                  , s = o ? ie(ne) : ne;
                                if (a.sort(s),
                                0 === a.length)
                                    return new this._ctx.collClass(this,function() {
                                        return he.only("")
                                    }
                                    ).limit(0);
                                var c = new this._ctx.collClass(this,function() {
                                    return he.bound(a[0], a[a.length - 1])
                                }
                                );
                                c._ondirectionchange = function(e) {
                                    s = "next" === e ? ne : re,
                                    o && (s = ie(s)),
                                    a.sort(s)
                                }
                                ;
                                var u = 0;
                                return c._addAlgorithm(function(e, t, n) {
                                    for (var r = e.key; s(r, a[u]) > 0; )
                                        if (++u,
                                        u === a.length)
                                            return t(n),
                                            !1;
                                    return 0 === s(r, a[u]) ? (t(function() {
                                        e["continue"]()
                                    }),
                                    !0) : (t(function() {
                                        e["continue"](a[u])
                                    }),
                                    !1)
                                }),
                                c
                            },
                            notEqual: function(e) {
                                return this.below(e).or(this._ctx.index).above(e)
                            },
                            noneOf: function(e) {
                                var n = this._ctx
                                  , r = n.table.schema
                                  , i = n.index ? r.idxByName[n.index] : r.primKey
                                  , o = i && i.compound
                                  , a = t(arguments);
                                if (0 === a.length)
                                    return new this._ctx.collClass(this);
                                var s = o ? ie(ne) : ne;
                                a.sort(s);
                                var c = a.reduce(function(e, t) {
                                    return e ? e.concat([[e[e.length - 1][1], t]]) : [[null , t]]
                                }, null );
                                c.push([a[a.length - 1], null ]);
                                var u = this
                                  , f = n.index;
                                return c.reduce(function(e, t) {
                                    return e ? null === t[1] ? e.or(f).above(t[0]) : e.or(f).between(t[0], t[1], !1, !1) : u.below(t[1])
                                }, null )
                            },
                            startsWithAnyOf: function(n) {
                                function r(e) {
                                    return e > s[u]
                                }
                                function i(e) {
                                    return e < a[u]
                                }
                                var o = this._ctx
                                  , a = t(arguments);
                                if (!a.every(function(e) {
                                    return "string" == typeof e
                                }))
                                    return e(new o.collClass(this), new de("startsWithAnyOf() only works with strings"));
                                if (0 === a.length)
                                    return new o.collClass(this,function() {
                                        return he.only("")
                                    }
                                    ).limit(0);
                                var s = a.map(function(e) {
                                    return e + String.fromCharCode(65535)
                                })
                                  , c = ne;
                                a.sort(c);
                                var u = 0
                                  , f = r
                                  , l = new o.collClass(this,function() {
                                    return he.bound(a[0], a[a.length - 1] + String.fromCharCode(65535))
                                }
                                );
                                return l._ondirectionchange = function(e) {
                                    "next" === e ? (f = r,
                                    c = ne) : (f = i,
                                    c = re),
                                    a.sort(c),
                                    s.sort(c)
                                }
                                ,
                                l._addAlgorithm(function(e, t, n) {
                                    for (var r = e.key; f(r); )
                                        if (++u,
                                        u === a.length)
                                            return t(n),
                                            !1;
                                    return r >= a[u] && r <= s[u] ? (t(function() {
                                        e["continue"]()
                                    }),
                                    !0) : (t(function() {
                                        c === ne ? e["continue"](a[u]) : e["continue"](s[u])
                                    }),
                                    !1)
                                }),
                                l
                            }
                        }
                    }),
                    r(Z.prototype, function() {
                        function e(e, t) {
                            e.filter = oe(e.filter, t)
                        }
                        function t(e, t) {
                            e.isMatch = oe(e.isMatch, t)
                        }
                        function n(e, t) {
                            if (e.isPrimKey)
                                return t;
                            var n = e.table.schema.idxByName[e.index];
                            if (!n)
                                throw new pe("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
                            return e.isPrimKey ? t : t.index(n.name)
                        }
                        function r(e, t) {
                            return n(e, t)[e.op](e.range || null , e.dir + e.unique)
                        }
                        function i(e, t, n, i, o) {
                            e.or ? !function() {
                                function a() {
                                    2 === ++f && n()
                                }
                                function s(e, n, r) {
                                    if (!c || c(n, r, a, i)) {
                                        var o = n.primaryKey.toString();
                                        u.hasOwnProperty(o) || (u[o] = !0,
                                        t(e, n, r))
                                    }
                                }
                                var c = e.filter
                                  , u = {}
                                  , f = (e.table.schema.primKey.keyPath,
                                0);
                                e.or._iterate(s, a, i, o),
                                ee(r(e, o), e.algorithm, s, a, i, e.table.hook.reading.fire)
                            }() : ee(r(e, o), oe(e.algorithm, e.filter), t, n, i, e.table.hook.reading.fire)
                        }
                        function o(e) {
                            return e.table.schema.instanceTemplate
                        }
                        return {
                            _read: function(e, t) {
                                var n = this._ctx;
                                return n.error ? n.table._trans(null , function(e, t) {
                                    t(n.error)
                                }) : n.table._idbstore(Ae, e).then(t)
                            },
                            _write: function(e) {
                                var t = this._ctx;
                                return t.error ? t.table._trans(null , function(e, n) {
                                    n(t.error)
                                }) : t.table._idbstore(Se, e, "locked")
                            },
                            _addAlgorithm: function(e) {
                                var t = this._ctx;
                                t.algorithm = oe(t.algorithm, e)
                            },
                            _iterate: function(e, t, n, r) {
                                return i(this._ctx, e, t, n, r)
                            },
                            each: function(e) {
                                var t = this._ctx;
                                return z && e(o(t)),
                                this._read(function(n, r, o) {
                                    i(t, e, n, r, o)
                                })
                            },
                            count: function(e) {
                                if (z)
                                    return B.resolve(0).then(e);
                                var t = this
                                  , r = this._ctx;
                                if (r.filter || r.algorithm || r.or) {
                                    var o = 0;
                                    return this._read(function(e, t, n) {
                                        i(r, function() {
                                            return ++o,
                                            !1
                                        }, function() {
                                            e(o)
                                        }, t, n)
                                    }, e)
                                }
                                return this._read(function(e, i, o) {
                                    var a = n(r, o)
                                      , s = r.range ? a.count(r.range) : a.count();
                                    s.onerror = T(i, ["calling", "count()", "on", t.name]),
                                    s.onsuccess = function(t) {
                                        e(Math.min(t.target.result, Math.max(0, r.limit - r.offset)))
                                    }
                                }, e)
                            },
                            sortBy: function(e, t) {
                                function n(e, t) {
                                    return t ? n(e[i[t]], t - 1) : e[o]
                                }
                                function r(e, t) {
                                    var r = n(e, a)
                                      , i = n(t, a);
                                    return r < i ? -s : r > i ? s : 0
                                }
                                var i = (this._ctx,
                                e.split(".").reverse())
                                  , o = i[0]
                                  , a = i.length - 1
                                  , s = "next" === this._ctx.dir ? 1 : -1;
                                return this.toArray(function(e) {
                                    return e.sort(r)
                                }).then(t)
                            },
                            toArray: function(e) {
                                var t = this._ctx;
                                return this._read(function(e, n, r) {
                                    z && e([o(t)]);
                                    var a = [];
                                    i(t, function(e) {
                                        a.push(e)
                                    }, function() {
                                        e(a)
                                    }, n, r)
                                }, e)
                            },
                            offset: function(t) {
                                var n = this._ctx;
                                return t <= 0 ? this : (n.offset += t,
                                n.or || n.algorithm || n.filter ? e(n, function(e, n, r) {
                                    return --t < 0
                                }) : e(n, function(e, n, r) {
                                    return 0 === t || (1 === t ? (--t,
                                    !1) : (n(function() {
                                        e.advance(t),
                                        t = 0
                                    }),
                                    !1))
                                }),
                                this)
                            },
                            limit: function(t) {
                                return this._ctx.limit = Math.min(this._ctx.limit, t),
                                e(this._ctx, function(e, n, r) {
                                    return --t <= 0 && n(r),
                                    t >= 0
                                }),
                                this
                            },
                            until: function(t, n) {
                                var r = this._ctx;
                                return z && t(o(r)),
                                e(this._ctx, function(e, r, i) {
                                    return !t(e.value) || (r(i),
                                    n)
                                }),
                                this
                            },
                            first: function(e) {
                                return this.limit(1).toArray(function(e) {
                                    return e[0]
                                }).then(e)
                            },
                            last: function(e) {
                                return this.reverse().first(e)
                            },
                            and: function(n) {
                                return z && n(o(this._ctx)),
                                e(this._ctx, function(e) {
                                    return n(e.value)
                                }),
                                t(this._ctx, n),
                                this
                            },
                            or: function(e) {
                                return new W(this._ctx.table,e,this)
                            },
                            reverse: function() {
                                return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev",
                                this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
                                this
                            },
                            desc: function() {
                                return this.reverse()
                            },
                            eachKey: function(e) {
                                var t = this._ctx;
                                return z && e(x(o(this._ctx), this._ctx.index ? this._ctx.table.schema.idxByName[this._ctx.index].keyPath : this._ctx.table.schema.primKey.keyPath)),
                                t.isPrimKey || (t.op = "openKeyCursor"),
                                this.each(function(t, n) {
                                    e(n.key, n)
                                })
                            },
                            eachUniqueKey: function(e) {
                                return this._ctx.unique = "unique",
                                this.eachKey(e)
                            },
                            keys: function(e) {
                                var t = this._ctx;
                                t.isPrimKey || (t.op = "openKeyCursor");
                                var n = [];
                                return z ? new B(this.eachKey.bind(this)).then(function(e) {
                                    return [e]
                                }).then(e) : this.each(function(e, t) {
                                    n.push(t.key)
                                }).then(function() {
                                    return n
                                }).then(e)
                            },
                            uniqueKeys: function(e) {
                                return this._ctx.unique = "unique",
                                this.keys(e)
                            },
                            firstKey: function(e) {
                                return this.limit(1).keys(function(e) {
                                    return e[0]
                                }).then(e)
                            },
                            lastKey: function(e) {
                                return this.reverse().firstKey(e)
                            },
                            distinct: function() {
                                var t = {};
                                return e(this._ctx, function(e) {
                                    var n = e.primaryKey.toString()
                                      , r = t.hasOwnProperty(n);
                                    return t[n] = !0,
                                    !r
                                }),
                                this
                            }
                        }
                    }),
                    o(X).from(Z).extend({
                        modify: function(e) {
                            var t = this
                              , n = this._ctx
                              , i = n.table.hook
                              , o = i.updating.fire
                              , a = i.deleting.fire;
                            return z && "function" == typeof e && e.call({
                                value: n.table.schema.instanceTemplate
                            }, n.table.schema.instanceTemplate),
                            this._write(function(i, s, u, f) {
                                function l(e, t, r) {
                                    S = t.primaryKey;
                                    var i = {
                                        primKey: t.primaryKey,
                                        value: e
                                    };
                                    if (p.call(i, e) !== !1) {
                                        var o = !i.hasOwnProperty("value")
                                          , a = o ? t["delete"]() : t.update(i.value);
                                        ++v,
                                        a.onerror = T(function(e) {
                                            return _.push(e),
                                            k.push(i.primKey),
                                            i.onerror && i.onerror(e),
                                            d(),
                                            !0
                                        }, o ? ["deleting", e, "from", n.table.name] : ["modifying", e, "on", n.table.name]),
                                        a.onsuccess = function(e) {
                                            i.onsuccess && i.onsuccess(i.value),
                                            ++b,
                                            d()
                                        }
                                    } else
                                        i.onsuccess && i.onsuccess(i.value)
                                }
                                function h(e) {
                                    return e && (_.push(e),
                                    k.push(S)),
                                    s(new L("Error modifying one or more objects",_,b,k))
                                }
                                function d() {
                                    y && b + _.length === v && (_.length > 0 ? h() : i(b))
                                }
                                var p;
                                if ("function" == typeof e)
                                    p = o === c && a === c ? e : function(t) {
                                        var n = C(t);
                                        if (e.call(this, t) === !1)
                                            return !1;
                                        if (this.hasOwnProperty("value")) {
                                            var r = E(n, this.value)
                                              , i = o.call(this, r, this.primKey, n, f);
                                            i && (t = this.value,
                                            Object.keys(i).forEach(function(e) {
                                                A(t, e, i[e])
                                            }))
                                        } else
                                            a.call(this, this.primKey, t, f)
                                    }
                                    ;
                                else if (o === c) {
                                    var w = Object.keys(e)
                                      , m = w.length;
                                    p = function(t) {
                                        for (var n = !1, r = 0; r < m; ++r) {
                                            var i = w[r]
                                              , o = e[i];
                                            x(t, i) !== o && (A(t, i, o),
                                            n = !0)
                                        }
                                        return n
                                    }
                                } else {
                                    var g = e;
                                    e = P(g),
                                    p = function(t) {
                                        var n = !1
                                          , i = o.call(this, e, this.primKey, C(t), f);
                                        return i && r(e, i),
                                        Object.keys(e).forEach(function(r) {
                                            var i = e[r];
                                            x(t, r) !== i && (A(t, r, i),
                                            n = !0)
                                        }),
                                        i && (e = P(g)),
                                        n
                                    }
                                }
                                var v = 0
                                  , b = 0
                                  , y = !1
                                  , _ = []
                                  , k = []
                                  , S = null ;
                                t._iterate(l, function() {
                                    y = !0,
                                    d()
                                }, h, u)
                            })
                        },
                        "delete": function() {
                            return this.modify(function() {
                                delete this.value
                            })
                        }
                    }),
                    r(this, {
                        Collection: Z,
                        Table: K,
                        Transaction: Y,
                        Version: l,
                        WhereClause: W,
                        WriteableCollection: X,
                        WriteableTable: H
                    }),
                    i(),
                    ue.forEach(function(e) {
                        e(Pe)
                    })
                }
                function c() {}
                function u(e) {
                    return e
                }
                function f(e, t) {
                    return e === u ? t : function(n) {
                        return t(e(n))
                    }
                }
                function l(e, t) {
                    return function() {
                        e.apply(this, arguments),
                        t.apply(this, arguments)
                    }
                }
                function h(e, t) {
                    return e === c ? t : function() {
                        var r = e.apply(this, arguments);
                        r !== n && (arguments[0] = r);
                        var i = this.onsuccess
                          , o = this.onerror;
                        delete this.onsuccess,
                        delete this.onerror;
                        var a = t.apply(this, arguments);
                        return i && (this.onsuccess = this.onsuccess ? l(i, this.onsuccess) : i),
                        o && (this.onerror = this.onerror ? l(o, this.onerror) : o),
                        a !== n ? a : r
                    }
                }
                function d(e, t) {
                    return e === c ? t : function() {
                        var i = e.apply(this, arguments);
                        i !== n && r(arguments[0], i);
                        var o = this.onsuccess
                          , a = this.onerror;
                        delete this.onsuccess,
                        delete this.onerror;
                        var s = t.apply(this, arguments);
                        return o && (this.onsuccess = this.onsuccess ? l(o, this.onsuccess) : o),
                        a && (this.onerror = this.onerror ? l(a, this.onerror) : a),
                        i === n ? s === n ? n : s : s === n ? i : r(i, s)
                    }
                }
                function p(e, t) {
                    return e === c ? t : function() {
                        return e.apply(this, arguments) !== !1 && t.apply(this, arguments)
                    }
                }
                function w(e, t) {
                    return e === c ? t : function() {
                        return t.apply(this, arguments) !== !1 && e.apply(this, arguments)
                    }
                }
                function m(e, t) {
                    return e === c ? t : function() {
                        e.apply(this, arguments),
                        t.apply(this, arguments)
                    }
                }
                function g(e, t) {
                    return e === c ? t : function() {
                        var n = e.apply(this, arguments);
                        if (n && "function" == typeof n.then) {
                            var r = this
                              , i = arguments;
                            return n.then(function() {
                                return t.apply(r, i)
                            })
                        }
                        return t.apply(this, arguments)
                    }
                }
                function v(t, n) {
                    function r(e, t, n) {
                        if (Array.isArray(e))
                            return o(e);
                        if ("object" == typeof e)
                            return i(e);
                        t || (t = p),
                        n || (n = c);
                        var r = {
                            subscribers: [],
                            fire: n,
                            subscribe: function(e) {
                                r.subscribers.push(e),
                                r.fire = t(r.fire, e)
                            },
                            unsubscribe: function(e) {
                                r.subscribers = r.subscribers.filter(function(t) {
                                    return t !== e
                                }),
                                r.fire = r.subscribers.reduce(t, n)
                            }
                        };
                        return s[e] = u[e] = r,
                        r
                    }
                    function i(t) {
                        Object.keys(t).forEach(function(n) {
                            var i = t[n];
                            if (Array.isArray(i))
                                r(n, t[n][0], t[n][1]);
                            else {
                                if ("asap" !== i)
                                    throw new Error("Invalid event config");
                                var o = r(n, null , function() {
                                    var t = arguments;
                                    o.subscribers.forEach(function(n) {
                                        y(function() {
                                            n.apply(e, t)
                                        })
                                    })
                                });
                                o.subscribe = function(e) {
                                    o.subscribers.indexOf(e) === -1 && o.subscribers.push(e)
                                }
                                ,
                                o.unsubscribe = function(e) {
                                    var t = o.subscribers.indexOf(e);
                                    t !== -1 && o.subscribers.splice(t, 1)
                                }
                            }
                        })
                    }
                    function o(e) {
                        function t() {
                            return !n && void (n = !0)
                        }
                        var n = !1;
                        e.forEach(function(e) {
                            r(e).subscribe(t)
                        })
                    }
                    var a = arguments
                      , s = {}
                      , u = function(e, n) {
                        if (n) {
                            var r = [].slice.call(arguments, 1)
                              , i = s[e];
                            return i.subscribe.apply(i, r),
                            t
                        }
                        if ("string" == typeof e)
                            return s[e]
                    };
                    u.addEventType = r;
                    for (var f = 1, l = a.length; f < l; ++f)
                        r(a[f]);
                    return u
                }
                function b(e) {
                    if (!e)
                        throw new Error("Assertion failed")
                }
                function y(t) {
                    e.setImmediate ? i(t) : setTimeout(t, 0)
                }
                function _(e) {
                    var t = setTimeout(e, 1e3);
                    clearTimeout(t)
                }
                function k(e, t, n) {
                    return function() {
                        var r = B.PSD;
                        B.PSD = n;
                        try {
                            e.apply(this, arguments)
                        } catch (i) {
                            t(i)
                        } finally {
                            B.PSD = r
                        }
                    }
                }
                function x(e, t) {
                    if (e.hasOwnProperty(t))
                        return e[t];
                    if (!t)
                        return e;
                    if ("string" != typeof t) {
                        for (var r = [], i = 0, o = t.length; i < o; ++i) {
                            var a = x(e, t[i]);
                            r.push(a)
                        }
                        return r
                    }
                    var s = t.indexOf(".");
                    if (s !== -1) {
                        var c = e[t.substr(0, s)];
                        return c === n ? n : x(c, t.substr(s + 1))
                    }
                    return n
                }
                function A(e, t, r) {
                    if (e && t !== n)
                        if ("string" != typeof t && "length"in t) {
                            b("string" != typeof r && "length"in r);
                            for (var i = 0, o = t.length; i < o; ++i)
                                A(e, t[i], r[i])
                        } else {
                            var a = t.indexOf(".");
                            if (a !== -1) {
                                var s = t.substr(0, a)
                                  , c = t.substr(a + 1);
                                if ("" === c)
                                    r === n ? delete e[s] : e[s] = r;
                                else {
                                    var u = e[s];
                                    u || (u = e[s] = {}),
                                    A(u, c, r)
                                }
                            } else
                                r === n ? delete e[t] : e[t] = r
                        }
                }
                function S(e, t) {
                    "string" == typeof t ? A(e, t, n) : "length"in t && [].map.call(t, function(t) {
                        A(e, t, n)
                    })
                }
                function P(e) {
                    var t = {};
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }
                function C(e) {
                    if (!e || "object" != typeof e)
                        return e;
                    var t;
                    if (Array.isArray(e)) {
                        t = [];
                        for (var n = 0, r = e.length; n < r; ++n)
                            t.push(C(e[n]))
                    } else if (e instanceof Date)
                        t = new Date,
                        t.setTime(e.getTime());
                    else {
                        t = e.constructor ? Object.create(e.constructor.prototype) : {};
                        for (var i in e)
                            e.hasOwnProperty(i) && (t[i] = C(e[i]))
                    }
                    return t
                }
                function E(e, t) {
                    var r = {};
                    for (var i in e)
                        e.hasOwnProperty(i) && (t.hasOwnProperty(i) ? e[i] !== t[i] && JSON.stringify(e[i]) != JSON.stringify(t[i]) && (r[i] = t[i]) : r[i] = n);
                    for (var i in t)
                        t.hasOwnProperty(i) && !e.hasOwnProperty(i) && (r[i] = t[i]);
                    return r
                }
                function M(e) {
                    if ("function" == typeof e)
                        return new e;
                    if (Array.isArray(e))
                        return [M(e[0])];
                    if (e && "object" == typeof e) {
                        var t = {};
                        return O(t, e),
                        t
                    }
                    return e
                }
                function O(e, t) {
                    Object.keys(t).forEach(function(n) {
                        var r = M(t[n]);
                        e[n] = r
                    })
                }
                function T(e, t) {
                    return function(n) {
                        var r = n && n.target.error || new Error;
                        if (t) {
                            var i = " occurred when " + t.map(function(e) {
                                switch (typeof e) {
                                case "function":
                                    return e();
                                case "string":
                                    return e;
                                default:
                                    return JSON.stringify(e)
                                }
                            }).join(" ");
                            r.name ? r.toString = function() {
                                return r.name + i + (r.message ? ". " + r.message : "")
                            }
                            : r += i
                        }
                        return e(r),
                        n && (n.stopPropagation && n.stopPropagation(),
                        n.preventDefault && n.preventDefault()),
                        !1
                    }
                }
                function D(e) {
                    try {
                        throw e
                    } catch (t) {
                        return t
                    }
                }
                function I(e) {
                    e.preventDefault()
                }
                function F(e) {
                    var t, n = s.dependencies.localStorage;
                    if (!n)
                        return e([]);
                    try {
                        t = JSON.parse(n.getItem("Dexie.DatabaseNames") || "[]")
                    } catch (r) {
                        t = []
                    }
                    e(t) && n.setItem("Dexie.DatabaseNames", JSON.stringify(t))
                }
                function R(e, t, n, r, i, o, a) {
                    this.name = e,
                    this.keyPath = t,
                    this.unique = n,
                    this.multi = r,
                    this.auto = i,
                    this.compound = o,
                    this.dotted = a;
                    var s = "string" == typeof t ? t : t && "[" + [].join.call(t, "+") + "]";
                    this.src = (n ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + s
                }
                function N(e, t, n, r) {
                    this.name = e,
                    this.primKey = t || new R,
                    this.indexes = n || [new R],
                    this.instanceTemplate = r,
                    this.mappedClass = null ,
                    this.idxByName = n.reduce(function(e, t) {
                        return e[t.name] = t,
                        e
                    }, {})
                }
                function L(e, t, n, r) {
                    this.name = "ModifyError",
                    this.failures = t,
                    this.failedKeys = r,
                    this.successCount = n,
                    this.message = t.join("\n")
                }
                function q(e) {
                    return 1 === e.length ? e[0] : e
                }
                function j() {
                    var e = s.dependencies.indexedDB
                      , t = e && (e.getDatabaseNames || e.webkitGetDatabaseNames);
                    return t && t.bind(e)
                }
                var B = function() {
                    function t(e, t) {
                        b.push([e, p.call(arguments, 1)])
                    }
                    function n() {
                        var t = b;
                        b = [];
                        for (var n = 0, r = t.length; n < r; ++n) {
                            var i = t[n];
                            i[0].apply(e, i[1])
                        }
                    }
                    function r(e) {
                        if ("object" != typeof this)
                            throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof e)
                            throw new TypeError("not a function");
                        this._state = null ,
                        this._value = null ,
                        this._deferreds = [],
                        this._catched = !1;
                        var t = this
                          , n = !0;
                        this._PSD = r.PSD;
                        try {
                            d(this, e, function(e) {
                                n ? m(u, t, e) : u(t, e)
                            }, function(e) {
                                return n ? (m(f, t, e),
                                !1) : f(t, e)
                            })
                        } finally {
                            n = !1
                        }
                    }
                    function o(e, i) {
                        if (null === e._state)
                            return void e._deferreds.push(i);
                        var o = e._state ? i.onFulfilled : i.onRejected;
                        if (null === o)
                            return (e._state ? i.resolve : i.reject)(e._value);
                        var a, c = g;
                        g = !1,
                        m = t;
                        try {
                            var u = r.PSD;
                            r.PSD = e._PSD,
                            a = o(e._value),
                            e._state || a && "function" == typeof a.then && a._state === !1 || s(e),
                            i.resolve(a)
                        } catch (f) {
                            var l = i.reject(f);
                            if (!l && e.onuncatched)
                                try {
                                    e.onuncatched(f)
                                } catch (f) {}
                        } finally {
                            if (r.PSD = u,
                            c) {
                                do {
                                    for (; b.length > 0; )
                                        n();
                                    var h = y.pop();
                                    if (h)
                                        try {
                                            h()
                                        } catch (f) {}
                                } while (y.length > 0 || b.length > 0);m = w,
                                g = !0
                            }
                        }
                    }
                    function a(e) {
                        var r = g;
                        g = !1,
                        m = t;
                        try {
                            e()
                        } finally {
                            if (r) {
                                do {
                                    for (; b.length > 0; )
                                        n();
                                    var i = y.pop();
                                    if (i)
                                        try {
                                            i()
                                        } catch (o) {}
                                } while (y.length > 0 || b.length > 0);m = w,
                                g = !0
                            }
                        }
                    }
                    function s(e) {
                        e._catched = !0,
                        e._parent && s(e._parent)
                    }
                    function u(e, t) {
                        var n = r.PSD;
                        r.PSD = e._PSD;
                        try {
                            if (t === e)
                                throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then)
                                return void d(e, function(e, n) {
                                    t.then(e, n)
                                }, function(t) {
                                    u(e, t)
                                }, function(t) {
                                    f(e, t)
                                });
                            e._state = !0,
                            e._value = t,
                            l.call(e)
                        } catch (i) {
                            f(i)
                        } finally {
                            r.PSD = n
                        }
                    }
                    function f(e, t) {
                        var n = r.PSD;
                        if (r.PSD = e._PSD,
                        e._state = !1,
                        e._value = t,
                        l.call(e),
                        !e._catched)
                            try {
                                e.onuncatched && e.onuncatched(e._value),
                                r.on.error.fire(e._value)
                            } catch (i) {}
                        return r.PSD = n,
                        e._catched
                    }
                    function l() {
                        for (var e = 0, t = this._deferreds.length; e < t; e++)
                            o(this, this._deferreds[e]);
                        this._deferreds = []
                    }
                    function h(e, t, n, r) {
                        this.onFulfilled = "function" == typeof e ? e : null ,
                        this.onRejected = "function" == typeof t ? t : null ,
                        this.resolve = n,
                        this.reject = r
                    }
                    function d(e, t, n, r) {
                        var i = !1;
                        try {
                            t(function(e) {
                                i || (i = !0,
                                n(e))
                            }, function(t) {
                                return i ? e._catched : (i = !0,
                                r(t))
                            })
                        } catch (o) {
                            if (i)
                                return;
                            return r(o)
                        }
                    }
                    var p = [].slice
                      , w = "undefined" == typeof i ? function(t, n, r, i) {
                        var o = arguments;
                        setTimeout(function() {
                            t.apply(e, p.call(o, 1))
                        }, 0)
                    }
                    : i;
                    _(function() {
                        w = m = t = function(t) {
                            var n = arguments;
                            setTimeout(function() {
                                t.apply(e, p.call(n, 1))
                            }, 0)
                        }
                    });
                    var m = w
                      , g = !0
                      , b = []
                      , y = [];
                    return r.on = v(null , "error"),
                    r.all = function() {
                        var e = Array.prototype.slice.call(1 === arguments.length && Array.isArray(arguments[0]) ? arguments[0] : arguments);
                        return new r(function(t, n) {
                            function r(o, a) {
                                try {
                                    if (a && ("object" == typeof a || "function" == typeof a)) {
                                        var s = a.then;
                                        if ("function" == typeof s)
                                            return void s.call(a, function(e) {
                                                r(o, e)
                                            }, n)
                                    }
                                    e[o] = a,
                                    0 === --i && t(e)
                                } catch (c) {
                                    n(c)
                                }
                            }
                            if (0 === e.length)
                                return t([]);
                            for (var i = e.length, o = 0; o < e.length; o++)
                                r(o, e[o])
                        }
                        )
                    }
                    ,
                    r.prototype.then = function(e, t) {
                        var n = this
                          , i = new r(function(r, i) {
                            null === n._state ? o(n, new h(e,t,r,i)) : m(o, n, new h(e,t,r,i))
                        }
                        );
                        return i._PSD = this._PSD,
                        i.onuncatched = this.onuncatched,
                        i._parent = this,
                        i
                    }
                    ,
                    r.prototype._then = function(e, t) {
                        o(this, new h(e,t,c,c))
                    }
                    ,
                    r.prototype["catch"] = function(e) {
                        if (1 === arguments.length)
                            return this.then(null , e);
                        var t = arguments[0]
                          , n = arguments[1];
                        return "function" == typeof t ? this.then(null , function(e) {
                            return e instanceof t ? n(e) : r.reject(e)
                        }) : this.then(null , function(e) {
                            return e && e.name === t ? n(e) : r.reject(e)
                        })
                    }
                    ,
                    r.prototype["finally"] = function(e) {
                        return this.then(function(t) {
                            return e(),
                            t
                        }, function(t) {
                            return e(),
                            r.reject(t)
                        })
                    }
                    ,
                    r.prototype.onuncatched = null ,
                    r.resolve = function(e) {
                        var t = new r(function() {}
                        );
                        return t._state = !0,
                        t._value = e,
                        t
                    }
                    ,
                    r.reject = function(e) {
                        var t = new r(function() {}
                        );
                        return t._state = !1,
                        t._value = e,
                        t
                    }
                    ,
                    r.race = function(e) {
                        return new r(function(t, n) {
                            e.map(function(e) {
                                e.then(t, n)
                            })
                        }
                        )
                    }
                    ,
                    r.PSD = null ,
                    r.newPSD = function(e) {
                        var t = r.PSD;
                        r.PSD = t ? Object.create(t) : {};
                        try {
                            return e()
                        } finally {
                            r.PSD = t
                        }
                    }
                    ,
                    r._rootExec = a,
                    r._tickFinalize = function(e) {
                        if (g)
                            throw new Error("Not in a virtual tick");
                        y.push(e)
                    }
                    ,
                    r
                }()
                  , U = function() {}
                  , z = !1;
                o(L).from(Error),
                s["delete"] = function(e) {
                    var t = new s(e)
                      , n = t["delete"]();
                    return n.onblocked = function(e) {
                        return t.on("blocked", e),
                        this
                    }
                    ,
                    n
                }
                ,
                s.exists = function(e) {
                    return new s(e).open().then(function(e) {
                        return e.close(),
                        !0
                    }, function() {
                        return !1
                    })
                }
                ,
                s.getDatabaseNames = function(e) {
                    return new B(function(e, t) {
                        var n = j();
                        if (n) {
                            var r = n();
                            r.onsuccess = function(t) {
                                e([].slice.call(t.target.result, 0))
                            }
                            ,
                            r.onerror = T(t)
                        } else
                            F(function(t) {
                                return e(t),
                                !1
                            })
                    }
                    ).then(e)
                }
                ,
                s.defineClass = function(e) {
                    function t(t) {
                        t ? r(this, t) : z && O(this, e)
                    }
                    return t
                }
                ,
                s.ignoreTransaction = function(e) {
                    return B.newPSD(function() {
                        return B.PSD.trans = null ,
                        e()
                    })
                }
                ,
                s.spawn = function() {
                    return e.console && console.warn("Dexie.spawn() is deprecated. Use Dexie.ignoreTransaction() instead."),
                    s.ignoreTransaction.apply(this, arguments)
                }
                ,
                s.vip = function(e) {
                    return B.newPSD(function() {
                        return B.PSD.letThrough = !0,
                        e()
                    })
                }
                ,
                Object.defineProperty(s, "currentTransaction", {
                    get: function() {
                        return B.PSD && B.PSD.trans || null
                    }
                }),
                s.Promise = B,
                s.derive = o,
                s.extend = r,
                s.override = a,
                s.events = v,
                s.getByKeyPath = x,
                s.setByKeyPath = A,
                s.delByKeyPath = S,
                s.shallowClone = P,
                s.deepClone = C,
                s.addons = [],
                s.fakeAutoComplete = U,
                s.asap = y,
                s.ModifyError = L,
                s.MultiModifyError = L,
                s.IndexSpec = R,
                s.TableSchema = N;
                var G = e.idbModules && e.idbModules.shimIndexedDB ? e.idbModules : {};
                s.dependencies = {
                    indexedDB: G.shimIndexedDB || e.indexedDB || e.mozIndexedDB || e.webkitIndexedDB || e.msIndexedDB,
                    IDBKeyRange: G.IDBKeyRange || e.IDBKeyRange || e.webkitIDBKeyRange,
                    IDBTransaction: G.IDBTransaction || e.IDBTransaction || e.webkitIDBTransaction,
                    Error: e.Error || String,
                    SyntaxError: e.SyntaxError || String,
                    TypeError: e.TypeError || String,
                    DOMError: e.DOMError || String,
                    localStorage: null != ("undefined" != typeof chrome && null !== chrome ? chrome.storage : void 0) ? null : e.localStorage
                },
                s.version = 1.2,
                t("Dexie", s),
                _(function() {
                    s.fakeAutoComplete = U = _,
                    s.fake = z = !0
                })
            }
            ).apply(null , [self || window, function(i, o) {
                r = function() {
                    return o
                }
                .call(t, n, t, e),
                !(void 0 !== r && (e.exports = r))
            }
            ])
        }
        ).call(t, n(205).setImmediate)
    },
    584: function(e, t, n) {
        var r = n(259).padLeft
          , i = t.Printer = function(e, t) {
            return function(n, i) {
                var o = e + " " + t(n);
                return null == i ? o : r(o, i)
            }
        }
        ;
        t.sum = function(e, t) {
            return e = e || 0,
            e += t
        }
        ,
        t.sum.printer = i("∑", String),
        t.avg = function(e, t, n, r) {
            return e = e || 0,
            e += t,
            n + 1 == r ? e / r : e
        }
        ,
        t.avg.printer = i("Avg:", String)
    },
    585: function(e, t) {
        function n(e) {
            if ("function" != typeof e) {
                var t = Array.isArray(e) ? e : Object.keys(this.columns);
                e = r(t)
            }
            return this.rows.sort(e),
            this
        }
        function r(e) {
            var t = e.map(function(e) {
                var t = "asc"
                  , n = /(.*)\|\s*(asc|des)\s*$/.exec(e);
                return n && (e = n[1],
                t = n[2]),
                function(n, r) {
                    var o = i(n[e], r[e]);
                    return "asc" == t ? o : -1 * o
                }
            });
            return function(e, n) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r](e, n);
                    if (0 != i)
                        return i
                }
                return 0
            }
        }
        function i(e, t) {
            return e === t ? 0 : void 0 === e ? 1 : void 0 === t ? -1 : null === e ? 1 : null === t ? -1 : e > t ? 1 : e < t ? -1 : i(String(e), String(t))
        }
        e.exports = n
    },
    586: function(e, t) {
        (function() {
            ("undefined" != typeof t && null !== t ? t : this).ExifReader = function() {
                function e() {
                    var e = this;
                    this._getTagValueAt = {
                        1: function(t) {
                            return e._getByteAt(t)
                        },
                        2: function(t) {
                            return e._getAsciiAt(t)
                        },
                        3: function(t) {
                            return e._getShortAt(t)
                        },
                        4: function(t) {
                            return e._getLongAt(t)
                        },
                        5: function(t) {
                            return e._getRationalAt(t)
                        },
                        7: function(t) {
                            return e._getUndefinedAt(t)
                        },
                        9: function(t) {
                            return e._getSlongAt(t)
                        },
                        10: function(t) {
                            return e._getSrationalAt(t)
                        }
                    },
                    this._tiffHeaderOffset = 0
                }
                return e.prototype._MIN_DATA_BUFFER_LENGTH = 2,
                e.prototype._JPEG_ID_SIZE = 2,
                e.prototype._JPEG_ID = 65496,
                e.prototype._APP_MARKER_SIZE = 2,
                e.prototype._APP0_MARKER = 65504,
                e.prototype._APP1_MARKER = 65505,
                e.prototype._APP15_MARKER = 65519,
                e.prototype._APP_ID_OFFSET = 4,
                e.prototype._BYTES_Exif = 1165519206,
                e.prototype._TIFF_HEADER_OFFSET = 10,
                e.prototype._BYTE_ORDER_BIG_ENDIAN = 18761,
                e.prototype._BYTE_ORDER_LITTLE_ENDIAN = 19789,
                e.prototype.load = function(e) {
                    return this.loadView(new DataView(e))
                }
                ,
                e.prototype.loadView = function(e) {
                    return this._dataView = e,
                    this._tags = {},
                    this._checkImageHeader(),
                    this._readTags()
                }
                ,
                e.prototype._checkImageHeader = function() {
                    var e;
                    if (e = this._dataView,
                    e.byteLength < this._MIN_DATA_BUFFER_LENGTH || e.getUint16(0, !1) !== this._JPEG_ID)
                        throw new Error("Invalid image format");
                    if (this._parseAppMarkers(e),
                    !this._hasExifData())
                        throw new Error("No Exif data")
                }
                ,
                e.prototype._parseAppMarkers = function(e) {
                    var t, n, r;
                    for (t = this._JPEG_ID_SIZE,
                    r = []; ; ) {
                        if (e.byteLength < t + this._APP_ID_OFFSET + 5)
                            break;
                        if (this._isApp1ExifMarker(e, t))
                            n = e.getUint16(t + this._APP_MARKER_SIZE, !1),
                            this._tiffHeaderOffset = t + this._TIFF_HEADER_OFFSET;
                        else {
                            if (!this._isAppMarker(e, t))
                                break;
                            n = e.getUint16(t + this._APP_MARKER_SIZE, !1)
                        }
                        r.push(t += this._APP_MARKER_SIZE + n)
                    }
                    return r
                }
                ,
                e.prototype._isApp1ExifMarker = function(e, t) {
                    return e.getUint16(t, !1) === this._APP1_MARKER && e.getUint32(t + this._APP_ID_OFFSET, !1) === this._BYTES_Exif && 0 === e.getUint8(t + this._APP_ID_OFFSET + 4, !1)
                }
                ,
                e.prototype._isAppMarker = function(e, t) {
                    var n;
                    return n = e.getUint16(t, !1),
                    n >= this._APP0_MARKER && n <= this._APP15_MARKER
                }
                ,
                e.prototype._hasExifData = function() {
                    return 0 !== this._tiffHeaderOffset
                }
                ,
                e.prototype._readTags = function() {
                    return this._setByteOrder(),
                    this._read0thIfd(),
                    this._readExifIfd(),
                    this._readGpsIfd(),
                    this._readInteroperabilityIfd()
                }
                ,
                e.prototype._setByteOrder = function() {
                    if (this._dataView.getUint16(this._tiffHeaderOffset) === this._BYTE_ORDER_BIG_ENDIAN)
                        return this._littleEndian = !0;
                    if (this._dataView.getUint16(this._tiffHeaderOffset) === this._BYTE_ORDER_LITTLE_ENDIAN)
                        return this._littleEndian = !1;
                    throw new Error("Illegal byte order value. Faulty image.")
                }
                ,
                e.prototype._read0thIfd = function() {
                    var e;
                    return e = this._getIfdOffset(),
                    this._readIfd("0th", e)
                }
                ,
                e.prototype._getIfdOffset = function() {
                    return this._tiffHeaderOffset + this._getLongAt(this._tiffHeaderOffset + 4)
                }
                ,
                e.prototype._readExifIfd = function() {
                    var e;
                    if (null != this._tags["Exif IFD Pointer"])
                        return e = this._tiffHeaderOffset + this._tags["Exif IFD Pointer"].value,
                        this._readIfd("exif", e)
                }
                ,
                e.prototype._readGpsIfd = function() {
                    var e;
                    if (null != this._tags["GPS Info IFD Pointer"])
                        return e = this._tiffHeaderOffset + this._tags["GPS Info IFD Pointer"].value,
                        this._readIfd("gps", e)
                }
                ,
                e.prototype._readInteroperabilityIfd = function() {
                    var e;
                    if (null != this._tags["Interoperability IFD Pointer"])
                        return e = this._tiffHeaderOffset + this._tags["Interoperability IFD Pointer"].value,
                        this._readIfd("interoperability", e)
                }
                ,
                e.prototype._readIfd = function(e, t) {
                    var n, r, i, o, a;
                    for (r = this._getShortAt(t),
                    t += 2,
                    a = [],
                    n = o = 0; 0 <= r ? o < r : o > r; n = 0 <= r ? ++o : --o)
                        i = this._readTag(e, t),
                        this._tags[i.name] = {
                            value: i.value,
                            description: i.description
                        },
                        a.push(t += 12);
                    return a
                }
                ,
                e.prototype._readTag = function(e, t) {
                    var n, r, i, o, a, s, c;
                    return n = this._getShortAt(t),
                    a = this._getShortAt(t + 2),
                    r = this._getLongAt(t + 4),
                    this._typeSizes[a] * r <= 4 ? s = this._getTagValue(t + 8, a, r) : (c = this._getLongAt(t + 8),
                    s = this._getTagValue(this._tiffHeaderOffset + c, a, r)),
                    a === this._tagTypes.ASCII && (s = this._splitNullSeparatedAsciiString(s)),
                    null != this._tagNames[e][n] ? (null != this._tagNames[e][n].name && null != this._tagNames[e][n].description ? (o = this._tagNames[e][n].name,
                    i = this._tagNames[e][n].description(s)) : (o = this._tagNames[e][n],
                    i = s instanceof Array ? s.join(", ") : s),
                    {
                        name: o,
                        value: s,
                        description: i
                    }) : {
                        name: "undefined-" + n,
                        value: s,
                        description: s
                    }
                }
                ,
                e.prototype._getTagValue = function(e, t, n) {
                    var r, i, o;
                    return i = function() {
                        var i, a;
                        for (a = [],
                        o = i = 0; 0 <= n ? i < n : i > n; o = 0 <= n ? ++i : --i)
                            r = this._getTagValueAt[t](e),
                            e += this._typeSizes[t],
                            a.push(r);
                        return a
                    }
                    .call(this),
                    1 === i.length ? i = i[0] : t === this._tagTypes.ASCII && (i = this._getAsciiValue(i)),
                    i
                }
                ,
                e.prototype._getAsciiValue = function(e) {
                    var t, n;
                    return n = function() {
                        var n, r, i;
                        for (i = [],
                        n = 0,
                        r = e.length; n < r; n++)
                            t = e[n],
                            i.push(String.fromCharCode(t));
                        return i
                    }()
                }
                ,
                e.prototype._getByteAt = function(e) {
                    return this._dataView.getUint8(e)
                }
                ,
                e.prototype._getAsciiAt = function(e) {
                    return this._dataView.getUint8(e)
                }
                ,
                e.prototype._getShortAt = function(e) {
                    return this._dataView.getUint16(e, this._littleEndian)
                }
                ,
                e.prototype._getLongAt = function(e) {
                    return this._dataView.getUint32(e, this._littleEndian)
                }
                ,
                e.prototype._getRationalAt = function(e) {
                    return this._getLongAt(e) / this._getLongAt(e + 4)
                }
                ,
                e.prototype._getUndefinedAt = function(e) {
                    return this._getByteAt(e)
                }
                ,
                e.prototype._getSlongAt = function(e) {
                    return this._dataView.getInt32(e, this._littleEndian)
                }
                ,
                e.prototype._getSrationalAt = function(e) {
                    return this._getSlongAt(e) / this._getSlongAt(e + 4)
                }
                ,
                e.prototype._splitNullSeparatedAsciiString = function(e) {
                    var t, n, r, i, o;
                    for (r = [],
                    n = 0,
                    i = 0,
                    o = e.length; i < o; i++)
                        t = e[i],
                        "\0" !== t ? (null == r[n] && (r[n] = ""),
                        r[n] += t) : n++;
                    return r
                }
                ,
                e.prototype._typeSizes = {
                    1: 1,
                    2: 1,
                    3: 2,
                    4: 4,
                    5: 8,
                    7: 1,
                    9: 4,
                    10: 8
                },
                e.prototype._tagTypes = {
                    BYTE: 1,
                    ASCII: 2,
                    SHORT: 3,
                    LONG: 4,
                    RATIONAL: 5,
                    UNDEFINED: 7,
                    SLONG: 9,
                    SRATIONAL: 10
                },
                e.prototype._tagNames = {
                    "0th": {
                        256: "ImageWidth",
                        257: "ImageLength",
                        258: "BitsPerSample",
                        259: "Compression",
                        262: "PhotometricInterpretation",
                        270: "ImageDescription",
                        271: "Make",
                        272: "Model",
                        273: "StripOffsets",
                        274: {
                            name: "Orientation",
                            description: function(e) {
                                switch (e) {
                                case 1:
                                    return "top-left";
                                case 2:
                                    return "top-right";
                                case 3:
                                    return "bottom-right";
                                case 4:
                                    return "bottom-left";
                                case 5:
                                    return "left-top";
                                case 6:
                                    return "right-top";
                                case 7:
                                    return "right-bottom";
                                case 8:
                                    return "left-bottom";
                                default:
                                    return "Undefined"
                                }
                            }
                        },
                        277: "SamplesPerPixel",
                        278: "RowsPerStrip",
                        279: "StripByteCounts",
                        282: "XResolution",
                        283: "YResolution",
                        284: "PlanarConfiguration",
                        296: {
                            name: "ResolutionUnit",
                            description: function(e) {
                                switch (e) {
                                case 2:
                                    return "inches";
                                case 3:
                                    return "centimeters";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        301: "TransferFunction",
                        305: "Software",
                        306: "DateTime",
                        315: "Artist",
                        318: "WhitePoint",
                        319: "PrimaryChromaticities",
                        513: "JPEGInterchangeFormat",
                        514: "JPEGInterchangeFormatLength",
                        529: "YCbCrCoefficients",
                        530: "YCbCrSubSampling",
                        531: {
                            name: "YCbCrPositioning",
                            description: function(e) {
                                switch (e) {
                                case 1:
                                    return "centered";
                                case 2:
                                    return "co-sited";
                                default:
                                    return "undefied " + e
                                }
                            }
                        },
                        532: "ReferenceBlackWhite",
                        33432: {
                            name: "Copyright",
                            description: function(e) {
                                return e.join("; ")
                            }
                        },
                        34665: "Exif IFD Pointer",
                        34853: "GPS Info IFD Pointer"
                    },
                    exif: {
                        33434: "ExposureTime",
                        33437: "FNumber",
                        34850: {
                            name: "ExposureProgram",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Undefined";
                                case 1:
                                    return "Manual";
                                case 2:
                                    return "Normal program";
                                case 3:
                                    return "Aperture priority";
                                case 4:
                                    return "Shutter priority";
                                case 5:
                                    return "Creative program";
                                case 6:
                                    return "Action program";
                                case 7:
                                    return "Portrait mode";
                                case 8:
                                    return "Landscape mode";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        34852: "SpectralSensitivity",
                        34855: "ISOSpeedRatings",
                        34856: {
                            name: "OECF",
                            description: function(e) {
                                return "[Raw OECF table data]"
                            }
                        },
                        36864: {
                            name: "ExifVersion",
                            description: function(e) {
                                var t, n, r, i;
                                for (n = "",
                                r = 0,
                                i = e.length; r < i; r++)
                                    t = e[r],
                                    n += String.fromCharCode(t);
                                return n
                            }
                        },
                        36867: "DateTimeOriginal",
                        36868: "DateTimeDigitized",
                        37121: {
                            name: "ComponentsConfiguration",
                            description: function(e) {
                                var t, n, r, i;
                                for (n = "",
                                r = 0,
                                i = e.length; r < i; r++)
                                    switch (t = e[r]) {
                                    case 49:
                                        n += "Y";
                                        break;
                                    case 50:
                                        n += "Cb";
                                        break;
                                    case 51:
                                        n += "Cr";
                                        break;
                                    case 52:
                                        n += "R";
                                        break;
                                    case 53:
                                        n += "G";
                                        break;
                                    case 54:
                                        n += "B"
                                    }
                                return n
                            }
                        },
                        37122: "CompressedBitsPerPixel",
                        37377: "ShutterSpeedValue",
                        37378: "ApertureValue",
                        37379: "BrightnessValue",
                        37380: "ExposureBiasValue",
                        37381: "MaxApertureValue",
                        37382: "SubjectDistance",
                        37383: {
                            name: "MeteringMode",
                            description: function(e) {
                                switch (e) {
                                case 1:
                                    return "Average";
                                case 2:
                                    return "CenterWeightedAverage";
                                case 3:
                                    return "Spot";
                                case 4:
                                    return "MultiSpot";
                                case 5:
                                    return "Pattern";
                                case 6:
                                    return "Partial";
                                case 255:
                                    return "Other";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        37384: {
                            name: "LightSource",
                            description: function(e) {
                                switch (e) {
                                case 1:
                                    return "Daylight";
                                case 2:
                                    return "Fluorescent";
                                case 3:
                                    return "Tungsten (incandescent light)";
                                case 4:
                                    return "Flash";
                                case 9:
                                    return "Fine weather";
                                case 10:
                                    return "Cloudy weather";
                                case 11:
                                    return "Shade";
                                case 12:
                                    return "Daylight fluorescent (D 5700 – 7100K)";
                                case 13:
                                    return "Day white fluorescent (N 4600 – 5400K)";
                                case 14:
                                    return "Cool white fluorescent (W 3900 – 4500K)";
                                case 15:
                                    return "White fluorescent (WW 3200 – 3700K)";
                                case 17:
                                    return "Standard light A";
                                case 18:
                                    return "Standard light B";
                                case 19:
                                    return "Standard light C";
                                case 20:
                                    return "D55";
                                case 21:
                                    return "D65";
                                case 22:
                                    return "D75";
                                case 23:
                                    return "D50";
                                case 24:
                                    return "ISO studio tungsten";
                                case 255:
                                    return "Other light source";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        37385: {
                            name: "Flash",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Flash did not fire";
                                case 1:
                                    return "Flash fired";
                                case 5:
                                    return "Strobe return light not detected";
                                case 7:
                                    return "Strobe return light detected";
                                case 9:
                                    return "Flash fired, compulsory flash mode";
                                case 13:
                                    return "Flash fired, compulsory flash mode, return light not detected";
                                case 15:
                                    return "Flash fired, compulsory flash mode, return light detected";
                                case 16:
                                    return "Flash did not fire, compulsory flash mode";
                                case 24:
                                    return "Flash did not fire, auto mode";
                                case 25:
                                    return "Flash fired, auto mode";
                                case 29:
                                    return "Flash fired, auto mode, return light not detected";
                                case 31:
                                    return "Flash fired, auto mode, return light detected";
                                case 32:
                                    return "No flash function";
                                case 65:
                                    return "Flash fired, red-eye reduction mode";
                                case 69:
                                    return "Flash fired, red-eye reduction mode, return light not detected";
                                case 71:
                                    return "Flash fired, red-eye reduction mode, return light detected";
                                case 73:
                                    return "Flash fired, compulsory flash mode, red-eye reduction mode";
                                case 77:
                                    return "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected";
                                case 79:
                                    return "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected";
                                case 89:
                                    return "Flash fired, auto mode, red-eye reduction mode";
                                case 93:
                                    return "Flash fired, auto mode, return light not detected, red-eye reduction mode";
                                case 95:
                                    return "Flash fired, auto mode, return light detected, red-eye reduction mode";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        37386: "FocalLength",
                        37396: {
                            name: "SubjectArea",
                            description: function(e) {
                                switch (e.length) {
                                case 2:
                                    return "Location; X: " + e[0] + ", Y: " + e[1];
                                case 3:
                                    return "Circle; X: " + e[0] + ", Y: " + e[1] + ", diameter: " + e[2];
                                case 4:
                                    return "Rectangle; X: " + e[0] + ", Y: " + e[1] + ", width: " + e[2] + ", height: " + e[3];
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        37500: {
                            name: "MakerNote",
                            description: function(e) {
                                return "[Raw maker note data]"
                            }
                        },
                        37510: {
                            name: "UserComment",
                            description: function(e) {
                                switch (e.slice(0, 8).map(function(e) {
                                    return String.fromCharCode(e)
                                }).join("")) {
                                case "ASCII\0\0\0":
                                    return e.slice(8, e.length).map(function(e) {
                                        return String.fromCharCode(e)
                                    }).join("");
                                case "JIS\0\0\0\0\0":
                                    return "[JIS encoded text]";
                                case "UNICODE\0":
                                    return "[Unicode encoded text]";
                                case "\0\0\0\0\0\0\0\0":
                                    return "[Undefined encoding]"
                                }
                            }
                        },
                        37520: "SubSecTime",
                        37521: "SubSecTimeOriginal",
                        37522: "SubSecTimeDigitized",
                        40960: {
                            name: "FlashpixVersion",
                            description: function(e) {
                                var t, n, r, i;
                                for (n = "",
                                r = 0,
                                i = e.length; r < i; r++)
                                    t = e[r],
                                    n += String.fromCharCode(t);
                                return n
                            }
                        },
                        40961: {
                            name: "ColorSpace",
                            description: function(e) {
                                switch (e) {
                                case 1:
                                    return "sRGB";
                                case 65535:
                                    return "Uncalibrated";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        40962: "PixelXDimension",
                        40963: "PixelYDimension",
                        40964: "RelatedSoundFile",
                        40965: "Interoperability IFD Pointer",
                        41483: "FlashEnergy",
                        41484: {
                            name: "SpatialFrequencyResponse",
                            description: function(e) {
                                return "[Raw SFR table data]"
                            }
                        },
                        41486: "FocalPlaneXResolution",
                        41487: "FocalPlaneYResolution",
                        41488: {
                            name: "FocalPlaneResolutionUnit",
                            description: function(e) {
                                switch (e) {
                                case 2:
                                    return "inches";
                                case 3:
                                    return "centimeters";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41492: {
                            name: "SubjectLocation",
                            description: function(e) {
                                return "X: " + e[0] + ", Y: " + e[1]
                            }
                        },
                        41493: "ExposureIndex",
                        41495: {
                            name: "SensingMethod",
                            description: function(e) {
                                switch (e) {
                                case 1:
                                    return "Undefined";
                                case 2:
                                    return "One-chip color area sensor";
                                case 3:
                                    return "Two-chip color area sensor";
                                case 4:
                                    return "Three-chip color area sensor";
                                case 5:
                                    return "Color sequential area sensor";
                                case 7:
                                    return "Trilinear sensor";
                                case 8:
                                    return "Color sequential linear sensor";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41728: {
                            name: "FileSource",
                            description: function(e) {
                                switch (e) {
                                case 3:
                                    return "DSC";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41729: {
                            name: "SceneType",
                            description: function(e) {
                                switch (e) {
                                case 1:
                                    return "A directly photographed image";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41730: {
                            name: "CFAPattern",
                            description: function(e) {
                                return "[Raw CFA pattern table data]"
                            }
                        },
                        41985: {
                            name: "CustomRendered",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Normal process";
                                case 1:
                                    return "Custom process";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41986: {
                            name: "ExposureMode",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Auto exposure";
                                case 1:
                                    return "Manual exposure";
                                case 2:
                                    return "Auto bracket";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41987: {
                            name: "WhiteBalance",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Auto white balance";
                                case 1:
                                    return "Manual white balance";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41988: {
                            name: "DigitalZoomRatio",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Digital zoom was not used";
                                default:
                                    return e
                                }
                            }
                        },
                        41989: {
                            name: "FocalLengthIn35mmFilm",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Unknown";
                                default:
                                    return e
                                }
                            }
                        },
                        41990: {
                            name: "SceneCaptureType",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Standard";
                                case 1:
                                    return "Landscape";
                                case 2:
                                    return "Portrait";
                                case 3:
                                    return "Night scene";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41991: {
                            name: "GainControl",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "None";
                                case 1:
                                    return "Low gain up";
                                case 2:
                                    return "High gain up";
                                case 3:
                                    return "Low gain down";
                                case 4:
                                    return "High gain down";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41992: {
                            name: "Contrast",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Normal";
                                case 1:
                                    return "Soft";
                                case 2:
                                    return "Hard";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41993: {
                            name: "Saturation",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Normal";
                                case 1:
                                    return "Low saturation";
                                case 2:
                                    return "High saturation";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41994: {
                            name: "Sharpness",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Normal";
                                case 1:
                                    return "Soft";
                                case 2:
                                    return "Hard";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        41995: {
                            name: "DeviceSettingDescription",
                            description: function(e) {
                                return "[Raw device settings table data]"
                            }
                        },
                        41996: {
                            name: "SubjectDistanceRange",
                            description: function(e) {
                                switch (e) {
                                case 1:
                                    return "Macro";
                                case 2:
                                    return "Close view";
                                case 3:
                                    return "Distant view";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        42016: "ImageUniqueID"
                    },
                    gps: {
                        0: {
                            name: "GPSVersionID",
                            description: function(e) {
                                var t, n;
                                return e[0] === (t = e[1]) && 2 === t && e[2] === (n = e[3]) && 0 === n ? "Version 2.2" : "Unknown"
                            }
                        },
                        1: {
                            name: "GPSLatitudeRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "N":
                                    return "North latitude";
                                case "S":
                                    return "South latitude";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        2: {
                            name: "GPSLatitude",
                            description: function(e) {
                                return e[0] + e[1] / 60 + e[2] / 3600
                            }
                        },
                        3: {
                            name: "GPSLongitudeRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "E":
                                    return "East longitude";
                                case "W":
                                    return "West longitude";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        4: {
                            name: "GPSLongitude",
                            description: function(e) {
                                return e[0] + e[1] / 60 + e[2] / 3600
                            }
                        },
                        5: {
                            name: "GPSAltitudeRef",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Sea level";
                                case 1:
                                    return "Sea level reference (negative value)";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        6: {
                            name: "GPSAltitude",
                            description: function(e) {
                                return e + " m"
                            }
                        },
                        7: {
                            name: "GPSTimeStamp",
                            description: function(e) {
                                var t;
                                return t = function(e) {
                                    var t;
                                    return function() {
                                        var n, r, i;
                                        for (i = [],
                                        t = n = 0,
                                        r = 2 - ("" + Math.floor(e)).length; 0 <= r ? n < r : n > r; t = 0 <= r ? ++n : --n)
                                            i.push("0");
                                        return i
                                    }() + e
                                }
                                ,
                                e.map(t).join(":")
                            }
                        },
                        8: "GPSSatellites",
                        9: {
                            name: "GPSStatus",
                            description: function(e) {
                                switch (e.join("")) {
                                case "A":
                                    return "Measurement in progress";
                                case "V":
                                    return "Measurement Interoperability";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        10: {
                            name: "GPSMeasureMode",
                            description: function(e) {
                                switch (e.join("")) {
                                case "2":
                                    return "2-dimensional measurement";
                                case "3":
                                    return "3-dimensional measurement";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        11: "GPSDOP",
                        12: {
                            name: "GPSSpeedRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "K":
                                    return "Kilometers per hour";
                                case "M":
                                    return "Miles per hour";
                                case "N":
                                    return "Knots";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        13: "GPSSpeed",
                        14: {
                            name: "GPSTrackRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "T":
                                    return "True direction";
                                case "M":
                                    return "Magnetic direction";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        15: "GPSTrack",
                        16: {
                            name: "GPSImgDirectionRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "T":
                                    return "True direction";
                                case "M":
                                    return "Magnetic direction";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        17: "GPSImgDirection",
                        18: "GPSMapDatum",
                        19: {
                            name: "GPSDestLatitudeRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "N":
                                    return "North latitude";
                                case "S":
                                    return "South latitude";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        20: {
                            name: "GPSDestLatitude",
                            description: function(e) {
                                return e[0] + e[1] / 60 + e[2] / 3600
                            }
                        },
                        21: {
                            name: "GPSDestLongitudeRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "E":
                                    return "East longitude";
                                case "W":
                                    return "West longitude";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        22: {
                            name: "GPSDestLongitude",
                            description: function(e) {
                                return e[0] + e[1] / 60 + e[2] / 3600
                            }
                        },
                        23: {
                            name: "GPSDestBearingRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "T":
                                    return "True direction";
                                case "M":
                                    return "Magnetic direction";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        24: "GPSDestBearing",
                        25: {
                            name: "GPSDestDistanceRef",
                            description: function(e) {
                                switch (e.join("")) {
                                case "K":
                                    return "Kilometers";
                                case "M":
                                    return "Miles";
                                case "N":
                                    return "Knots";
                                default:
                                    return "Unknown"
                                }
                            }
                        },
                        26: "GPSDestDistance",
                        27: {
                            name: "GPSProcessingMethod",
                            description: function(e) {
                                switch (e.slice(0, 8).map(function(e) {
                                    return String.fromCharCode(e)
                                }).join("")) {
                                case "ASCII\0\0\0":
                                    return e.slice(8, e.length).map(function(e) {
                                        return String.fromCharCode(e)
                                    }).join("");
                                case "JIS\0\0\0\0\0":
                                    return "[JIS encoded text]";
                                case "UNICODE\0":
                                    return "[Unicode encoded text]";
                                case "\0\0\0\0\0\0\0\0":
                                    return "[Undefined encoding]"
                                }
                            }
                        },
                        28: {
                            name: "GPSAreaInformation",
                            description: function(e) {
                                switch (e.slice(0, 8).map(function(e) {
                                    return String.fromCharCode(e)
                                }).join("")) {
                                case "ASCII\0\0\0":
                                    return e.slice(8, e.length).map(function(e) {
                                        return String.fromCharCode(e)
                                    }).join("");
                                case "JIS\0\0\0\0\0":
                                    return "[JIS encoded text]";
                                case "UNICODE\0":
                                    return "[Unicode encoded text]";
                                case "\0\0\0\0\0\0\0\0":
                                    return "[Undefined encoding]"
                                }
                            }
                        },
                        29: "GPSDateStamp",
                        30: {
                            name: "GPSDifferential",
                            description: function(e) {
                                switch (e) {
                                case 0:
                                    return "Measurement without differential correction";
                                case 1:
                                    return "Differential correction applied";
                                default:
                                    return "Unknown"
                                }
                            }
                        }
                    },
                    interoperability: {
                        1: "InteroperabilityIndex",
                        2: "UnknownInteroperabilityTag0x0002",
                        4097: "UnknownInteroperabilityTag0x1001",
                        4098: "UnknownInteroperabilityTag0x1002"
                    }
                },
                e.prototype.getTagValue = function(e) {
                    return null != this._tags[e] ? this._tags[e].value : void 0;
                }
                ,
                e.prototype.getTagDescription = function(e) {
                    return null != this._tags[e] ? this._tags[e].description : void 0
                }
                ,
                e.prototype.getAllTags = function() {
                    return this._tags
                }
                ,
                e
            }()
        }
        ).call(this)
    },
    589: function(e, t) {
        "use strict";
        function n(e) {
            return e.split("/")
        }
        var r = {
            isImage: function(e) {
                return "image" === n(e)[0]
            },
            isJpeg: function(e) {
                var t = n(e);
                return r.isImage(e) && ("jpeg" === t[1] || "pjpeg" === t[1])
            }
        };
        e.exports = r
    },
    590: function(e, t) {
        "use strict";
        function n(e) {
            return e.replace(r, function(e, t) {
                return t.toUpperCase()
            })
        }
        var r = /-(.)/g;
        e.exports = n
    },
    591: function(e, t, n) {
        "use strict";
        function r(e) {
            return i(e.replace(o, "ms-"))
        }
        var i = n(590)
          , o = /^-ms-/;
        e.exports = r
    },
    592: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return !(!e || !t) && (e === t || !i(e) && (i(t) ? r(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
        }
        var i = n(599);
        e.exports = r
    },
    593: function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e.match(f);
            return t && t[1].toLowerCase()
        }
        function i(e, t) {
            var n = u;
            u ? void 0 : c(!1);
            var i = r(e)
              , o = i && s(i);
            if (o) {
                n.innerHTML = o[1] + e + o[2];
                for (var f = o[0]; f--; )
                    n = n.lastChild
            } else
                n.innerHTML = e;
            var l = n.getElementsByTagName("script");
            l.length && (t ? void 0 : c(!1),
            a(l).forEach(t));
            for (var h = Array.from(n.childNodes); n.lastChild; )
                n.removeChild(n.lastChild);
            return h
        }
        var o = n(17)
          , a = n(261)
          , s = n(594)
          , c = n(3)
          , u = o.canUseDOM ? document.createElement("div") : null
          , f = /^\s*<(\w+)/;
        e.exports = i
    },
    594: function(e, t, n) {
        "use strict";
        function r(e) {
            return a ? void 0 : o(!1),
            h.hasOwnProperty(e) || (e = "*"),
            s.hasOwnProperty(e) || ("*" === e ? a.innerHTML = "<link />" : a.innerHTML = "<" + e + "></" + e + ">",
            s[e] = !a.firstChild),
            s[e] ? h[e] : null
        }
        var i = n(17)
          , o = n(3)
          , a = i.canUseDOM ? document.createElement("div") : null
          , s = {}
          , c = [1, '<select multiple="true">', "</select>"]
          , u = [1, "<table>", "</table>"]
          , f = [3, "<table><tbody><tr>", "</tr></tbody></table>"]
          , l = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"]
          , h = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: c,
            option: c,
            caption: u,
            colgroup: u,
            tbody: u,
            tfoot: u,
            thead: u,
            td: f,
            th: f
        }
          , d = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
        d.forEach(function(e) {
            h[e] = l,
            s[e] = !0
        }),
        e.exports = r
    },
    595: function(e, t) {
        "use strict";
        function n(e) {
            return e === window ? {
                x: window.pageXOffset || document.documentElement.scrollLeft,
                y: window.pageYOffset || document.documentElement.scrollTop
            } : {
                x: e.scrollLeft,
                y: e.scrollTop
            }
        }
        e.exports = n
    },
    596: function(e, t) {
        "use strict";
        function n(e) {
            return e.replace(r, "-$1").toLowerCase()
        }
        var r = /([A-Z])/g;
        e.exports = n
    },
    597: function(e, t, n) {
        "use strict";
        function r(e) {
            return i(e).replace(o, "-ms-")
        }
        var i = n(596)
          , o = /^ms-/;
        e.exports = r
    },
    598: function(e, t) {
        "use strict";
        function n(e) {
            return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
        }
        e.exports = n
    },
    599: function(e, t, n) {
        "use strict";
        function r(e) {
            return i(e) && 3 == e.nodeType
        }
        var i = n(598);
        e.exports = r
    },
    600: function(e, t) {
        "use strict";
        function n(e) {
            var t = {};
            return function(n) {
                return t.hasOwnProperty(n) || (t[n] = e.call(this, n)),
                t[n]
            }
        }
        e.exports = n
    },
    612: function(e, t, n) {
        /**
	 * filesize
	 *
	 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
	 * @copyright 2014 Jason Mulligan
	 * @license BSD-3 <https://raw.github.com/avoidwork/filesize.js/master/LICENSE>
	 * @link http://filesizejs.com
	 * @module filesize
	 * @version 2.0.4
	 */
        !function(t) {
            "use strict";
            function n(e, t) {
                var n, c, u, f, l, h, d, p, w, m, g, v, b = "", y = !1, _ = 0;
                if (isNaN(e))
                    throw new Error("Invalid arguments");
                return t = t || {},
                u = t.bits === !0,
                p = t.unix === !0,
                c = void 0 !== t.base ? t.base : p ? 2 : 10,
                d = void 0 !== t.round ? t.round : p ? 1 : 2,
                w = void 0 !== t.spacer ? t.spacer : p ? "" : " ",
                v = void 0 !== t.suffixes ? t.suffixes : {},
                h = Number(e),
                l = h < 0,
                f = c > 2 ? 1e3 : 1024,
                l && (h = -h),
                0 === h ? p ? b = "0" : (m = "B",
                b = "0" + w + (v[m] || m)) : (n = Math.floor(Math.log(h) / Math.log(1e3)),
                n > 8 && (_ *= 1e3 * (n - 8),
                n = 8),
                _ = 2 === c ? h / Math.pow(2, 10 * n) : h / Math.pow(1e3, n),
                u && (_ = 8 * _,
                _ > f && (_ /= f,
                n++)),
                b = _.toFixed(n > 0 ? d : 0),
                m = s[u ? "bits" : "bytes"][n],
                !y && p ? (u && r.test(m) && (m = m.toLowerCase()),
                m = m.charAt(0),
                g = b.replace(o, ""),
                "B" === m ? m = "" : u || "k" !== m || (m = "K"),
                a.test(g) && (b = parseInt(b, i).toString()),
                b += w + (v[m] || m)) : p || (b += w + (v[m] || m))),
                l && (b = "-" + b),
                b
            }
            var r = /b$/
              , i = 10
              , o = /.*\./
              , a = /^0$/
              , s = {
                bits: ["B", "kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
                bytes: ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
            };
            e.exports = n
        }(this)
    },
    617: function(e, t) {
        function n(e) {
            if (e = e || {},
            "object" != typeof e)
                throw new TypeError("Options must be an object");
            var t = ".";
            this.storage = {},
            this.separator = e.separator || t
        }
        var r = Array.prototype.slice;
        n.prototype.add = function(e, t) {
            var n = this.storage[e] || (this.storage[e] = []);
            n.push(t)
        }
        ,
        n.prototype.remove = function(e) {
            var t, n;
            for (t in this.storage)
                n = this.storage[t],
                n.some(function(t, r) {
                    if (t === e)
                        return n.splice(r, 1),
                        !0
                })
        }
        ,
        n.prototype.get = function(e) {
            var t, n = [];
            for (t in this.storage)
                e && e !== t && 0 !== t.indexOf(e + this.separator) || (n = n.concat(this.storage[t]));
            return n
        }
        ,
        n.prototype.getGrouped = function(e) {
            var t, n = {};
            for (t in this.storage)
                e && e !== t && 0 !== t.indexOf(e + this.separator) || (n[t] = r.call(this.storage[t]));
            return n
        }
        ,
        n.prototype.getAll = function(e) {
            var t, n = {};
            for (t in this.storage)
                e !== t && 0 !== t.indexOf(e + this.separator) || (n[t] = r.call(this.storage[t]));
            return n
        }
        ,
        n.prototype.run = function(e, t) {
            var n = r.call(arguments, 2);
            this.get(e).forEach(function(e) {
                e.apply(t || this, n)
            })
        }
        ,
        e.exports = n
    },
    618: function(e, t, n) {
        function r(e) {
            return e.replace(/[^A-Za-z0-9]/g, function(e) {
                return i[e] || e
            })
        }
        var i = n(619);
        r.isLatin = function(e) {
            return e === r(e)
        }
        ,
        e.exports = r
    },
    619: function(e, t) {
        e.exports = {
            "Á": "A",
            "Ă": "A",
            "Ắ": "A",
            "Ặ": "A",
            "Ằ": "A",
            "Ẳ": "A",
            "Ẵ": "A",
            "Ǎ": "A",
            "Â": "A",
            "Ấ": "A",
            "Ậ": "A",
            "Ầ": "A",
            "Ẩ": "A",
            "Ẫ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ạ": "A",
            "Ȁ": "A",
            "À": "A",
            "Ả": "A",
            "Ȃ": "A",
            "Ā": "A",
            "Ą": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ḁ": "A",
            "Ⱥ": "A",
            "Ã": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ɓ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ć": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ď": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḋ": "D",
            "Ḍ": "D",
            "Ɗ": "D",
            "Ḏ": "D",
            "ǲ": "D",
            "ǅ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "É": "E",
            "Ĕ": "E",
            "Ě": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ê": "E",
            "Ế": "E",
            "Ệ": "E",
            "Ề": "E",
            "Ể": "E",
            "Ễ": "E",
            "Ḙ": "E",
            "Ë": "E",
            "Ė": "E",
            "Ẹ": "E",
            "Ȅ": "E",
            "È": "E",
            "Ẻ": "E",
            "Ȇ": "E",
            "Ē": "E",
            "Ḗ": "E",
            "Ḕ": "E",
            "Ę": "E",
            "Ɇ": "E",
            "Ẽ": "E",
            "Ḛ": "E",
            "Ꝫ": "ET",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ǵ": "G",
            "Ğ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ĝ": "G",
            "Ġ": "G",
            "Ɠ": "G",
            "Ḡ": "G",
            "Ǥ": "G",
            "Ḫ": "H",
            "Ȟ": "H",
            "Ḩ": "H",
            "Ĥ": "H",
            "Ⱨ": "H",
            "Ḧ": "H",
            "Ḣ": "H",
            "Ḥ": "H",
            "Ħ": "H",
            "Í": "I",
            "Ĭ": "I",
            "Ǐ": "I",
            "Î": "I",
            "Ï": "I",
            "Ḯ": "I",
            "İ": "I",
            "Ị": "I",
            "Ȉ": "I",
            "Ì": "I",
            "Ỉ": "I",
            "Ȋ": "I",
            "Ī": "I",
            "Į": "I",
            "Ɨ": "I",
            "Ĩ": "I",
            "Ḭ": "I",
            "Ꝺ": "D",
            "Ꝼ": "F",
            "Ᵹ": "G",
            "Ꞃ": "R",
            "Ꞅ": "S",
            "Ꞇ": "T",
            "Ꝭ": "IS",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ķ": "K",
            "Ⱪ": "K",
            "Ꝃ": "K",
            "Ḳ": "K",
            "Ƙ": "K",
            "Ḵ": "K",
            "Ꝁ": "K",
            "Ꝅ": "K",
            "Ĺ": "L",
            "Ƚ": "L",
            "Ľ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ḻ": "L",
            "Ŀ": "L",
            "Ɫ": "L",
            "ǈ": "L",
            "Ł": "L",
            "Ǉ": "LJ",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ń": "N",
            "Ň": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṅ": "N",
            "Ṇ": "N",
            "Ǹ": "N",
            "Ɲ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "ǋ": "N",
            "Ñ": "N",
            "Ǌ": "NJ",
            "Ó": "O",
            "Ŏ": "O",
            "Ǒ": "O",
            "Ô": "O",
            "Ố": "O",
            "Ộ": "O",
            "Ồ": "O",
            "Ổ": "O",
            "Ỗ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ọ": "O",
            "Ő": "O",
            "Ȍ": "O",
            "Ò": "O",
            "Ỏ": "O",
            "Ơ": "O",
            "Ớ": "O",
            "Ợ": "O",
            "Ờ": "O",
            "Ở": "O",
            "Ỡ": "O",
            "Ȏ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Ō": "O",
            "Ṓ": "O",
            "Ṑ": "O",
            "Ɵ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ṏ": "O",
            "Ȭ": "O",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ɛ": "E",
            "Ɔ": "O",
            "Ȣ": "OU",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ꝓ": "P",
            "Ƥ": "P",
            "Ꝕ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝙ": "Q",
            "Ꝗ": "Q",
            "Ŕ": "R",
            "Ř": "R",
            "Ŗ": "R",
            "Ṙ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꜿ": "C",
            "Ǝ": "E",
            "Ś": "S",
            "Ṥ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ş": "S",
            "Ŝ": "S",
            "Ș": "S",
            "Ṡ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "ẞ": "SS",
            "Ť": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ț": "T",
            "Ⱦ": "T",
            "Ṫ": "T",
            "Ṭ": "T",
            "Ƭ": "T",
            "Ṯ": "T",
            "Ʈ": "T",
            "Ŧ": "T",
            "Ɐ": "A",
            "Ꞁ": "L",
            "Ɯ": "M",
            "Ʌ": "V",
            "Ꜩ": "TZ",
            "Ú": "U",
            "Ŭ": "U",
            "Ǔ": "U",
            "Û": "U",
            "Ṷ": "U",
            "Ü": "U",
            "Ǘ": "U",
            "Ǚ": "U",
            "Ǜ": "U",
            "Ǖ": "U",
            "Ṳ": "U",
            "Ụ": "U",
            "Ű": "U",
            "Ȕ": "U",
            "Ù": "U",
            "Ủ": "U",
            "Ư": "U",
            "Ứ": "U",
            "Ự": "U",
            "Ừ": "U",
            "Ử": "U",
            "Ữ": "U",
            "Ȗ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ų": "U",
            "Ů": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ṵ": "U",
            "Ꝟ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ṽ": "V",
            "Ꝡ": "VY",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẅ": "W",
            "Ẇ": "W",
            "Ẉ": "W",
            "Ẁ": "W",
            "Ⱳ": "W",
            "Ẍ": "X",
            "Ẋ": "X",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ÿ": "Y",
            "Ẏ": "Y",
            "Ỵ": "Y",
            "Ỳ": "Y",
            "Ƴ": "Y",
            "Ỷ": "Y",
            "Ỿ": "Y",
            "Ȳ": "Y",
            "Ɏ": "Y",
            "Ỹ": "Y",
            "Ź": "Z",
            "Ž": "Z",
            "Ẑ": "Z",
            "Ⱬ": "Z",
            "Ż": "Z",
            "Ẓ": "Z",
            "Ȥ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ĳ": "IJ",
            "Œ": "OE",
            "ᴀ": "A",
            "ᴁ": "AE",
            "ʙ": "B",
            "ᴃ": "B",
            "ᴄ": "C",
            "ᴅ": "D",
            "ᴇ": "E",
            "ꜰ": "F",
            "ɢ": "G",
            "ʛ": "G",
            "ʜ": "H",
            "ɪ": "I",
            "ʁ": "R",
            "ᴊ": "J",
            "ᴋ": "K",
            "ʟ": "L",
            "ᴌ": "L",
            "ᴍ": "M",
            "ɴ": "N",
            "ᴏ": "O",
            "ɶ": "OE",
            "ᴐ": "O",
            "ᴕ": "OU",
            "ᴘ": "P",
            "ʀ": "R",
            "ᴎ": "N",
            "ᴙ": "R",
            "ꜱ": "S",
            "ᴛ": "T",
            "ⱻ": "E",
            "ᴚ": "R",
            "ᴜ": "U",
            "ᴠ": "V",
            "ᴡ": "W",
            "ʏ": "Y",
            "ᴢ": "Z",
            "á": "a",
            "ă": "a",
            "ắ": "a",
            "ặ": "a",
            "ằ": "a",
            "ẳ": "a",
            "ẵ": "a",
            "ǎ": "a",
            "â": "a",
            "ấ": "a",
            "ậ": "a",
            "ầ": "a",
            "ẩ": "a",
            "ẫ": "a",
            "ä": "a",
            "ǟ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ạ": "a",
            "ȁ": "a",
            "à": "a",
            "ả": "a",
            "ȃ": "a",
            "ā": "a",
            "ą": "a",
            "ᶏ": "a",
            "ẚ": "a",
            "å": "a",
            "ǻ": "a",
            "ḁ": "a",
            "ⱥ": "a",
            "ã": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ḃ": "b",
            "ḅ": "b",
            "ɓ": "b",
            "ḇ": "b",
            "ᵬ": "b",
            "ᶀ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɵ": "o",
            "ć": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ĉ": "c",
            "ɕ": "c",
            "ċ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ď": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ȡ": "d",
            "ḋ": "d",
            "ḍ": "d",
            "ɗ": "d",
            "ᶑ": "d",
            "ḏ": "d",
            "ᵭ": "d",
            "ᶁ": "d",
            "đ": "d",
            "ɖ": "d",
            "ƌ": "d",
            "ı": "i",
            "ȷ": "j",
            "ɟ": "j",
            "ʄ": "j",
            "ǳ": "dz",
            "ǆ": "dz",
            "é": "e",
            "ĕ": "e",
            "ě": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ê": "e",
            "ế": "e",
            "ệ": "e",
            "ề": "e",
            "ể": "e",
            "ễ": "e",
            "ḙ": "e",
            "ë": "e",
            "ė": "e",
            "ẹ": "e",
            "ȅ": "e",
            "è": "e",
            "ẻ": "e",
            "ȇ": "e",
            "ē": "e",
            "ḗ": "e",
            "ḕ": "e",
            "ⱸ": "e",
            "ę": "e",
            "ᶒ": "e",
            "ɇ": "e",
            "ẽ": "e",
            "ḛ": "e",
            "ꝫ": "et",
            "ḟ": "f",
            "ƒ": "f",
            "ᵮ": "f",
            "ᶂ": "f",
            "ǵ": "g",
            "ğ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ĝ": "g",
            "ġ": "g",
            "ɠ": "g",
            "ḡ": "g",
            "ᶃ": "g",
            "ǥ": "g",
            "ḫ": "h",
            "ȟ": "h",
            "ḩ": "h",
            "ĥ": "h",
            "ⱨ": "h",
            "ḧ": "h",
            "ḣ": "h",
            "ḥ": "h",
            "ɦ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ƕ": "hv",
            "í": "i",
            "ĭ": "i",
            "ǐ": "i",
            "î": "i",
            "ï": "i",
            "ḯ": "i",
            "ị": "i",
            "ȉ": "i",
            "ì": "i",
            "ỉ": "i",
            "ȋ": "i",
            "ī": "i",
            "į": "i",
            "ᶖ": "i",
            "ɨ": "i",
            "ĩ": "i",
            "ḭ": "i",
            "ꝺ": "d",
            "ꝼ": "f",
            "ᵹ": "g",
            "ꞃ": "r",
            "ꞅ": "s",
            "ꞇ": "t",
            "ꝭ": "is",
            "ǰ": "j",
            "ĵ": "j",
            "ʝ": "j",
            "ɉ": "j",
            "ḱ": "k",
            "ǩ": "k",
            "ķ": "k",
            "ⱪ": "k",
            "ꝃ": "k",
            "ḳ": "k",
            "ƙ": "k",
            "ḵ": "k",
            "ᶄ": "k",
            "ꝁ": "k",
            "ꝅ": "k",
            "ĺ": "l",
            "ƚ": "l",
            "ɬ": "l",
            "ľ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ȴ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ḻ": "l",
            "ŀ": "l",
            "ɫ": "l",
            "ᶅ": "l",
            "ɭ": "l",
            "ł": "l",
            "ǉ": "lj",
            "ſ": "s",
            "ẜ": "s",
            "ẛ": "s",
            "ẝ": "s",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ᵯ": "m",
            "ᶆ": "m",
            "ń": "n",
            "ň": "n",
            "ņ": "n",
            "ṋ": "n",
            "ȵ": "n",
            "ṅ": "n",
            "ṇ": "n",
            "ǹ": "n",
            "ɲ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ᵰ": "n",
            "ᶇ": "n",
            "ɳ": "n",
            "ñ": "n",
            "ǌ": "nj",
            "ó": "o",
            "ŏ": "o",
            "ǒ": "o",
            "ô": "o",
            "ố": "o",
            "ộ": "o",
            "ồ": "o",
            "ổ": "o",
            "ỗ": "o",
            "ö": "o",
            "ȫ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ọ": "o",
            "ő": "o",
            "ȍ": "o",
            "ò": "o",
            "ỏ": "o",
            "ơ": "o",
            "ớ": "o",
            "ợ": "o",
            "ờ": "o",
            "ở": "o",
            "ỡ": "o",
            "ȏ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ⱺ": "o",
            "ō": "o",
            "ṓ": "o",
            "ṑ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "õ": "o",
            "ṍ": "o",
            "ṏ": "o",
            "ȭ": "o",
            "ƣ": "oi",
            "ꝏ": "oo",
            "ɛ": "e",
            "ᶓ": "e",
            "ɔ": "o",
            "ᶗ": "o",
            "ȣ": "ou",
            "ṕ": "p",
            "ṗ": "p",
            "ꝓ": "p",
            "ƥ": "p",
            "ᵱ": "p",
            "ᶈ": "p",
            "ꝕ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝙ": "q",
            "ʠ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ŕ": "r",
            "ř": "r",
            "ŗ": "r",
            "ṙ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ȑ": "r",
            "ɾ": "r",
            "ᵳ": "r",
            "ȓ": "r",
            "ṟ": "r",
            "ɼ": "r",
            "ᵲ": "r",
            "ᶉ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ↄ": "c",
            "ꜿ": "c",
            "ɘ": "e",
            "ɿ": "r",
            "ś": "s",
            "ṥ": "s",
            "š": "s",
            "ṧ": "s",
            "ş": "s",
            "ŝ": "s",
            "ș": "s",
            "ṡ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ʂ": "s",
            "ᵴ": "s",
            "ᶊ": "s",
            "ȿ": "s",
            "ɡ": "g",
            "ß": "ss",
            "ᴑ": "o",
            "ᴓ": "o",
            "ᴝ": "u",
            "ť": "t",
            "ţ": "t",
            "ṱ": "t",
            "ț": "t",
            "ȶ": "t",
            "ẗ": "t",
            "ⱦ": "t",
            "ṫ": "t",
            "ṭ": "t",
            "ƭ": "t",
            "ṯ": "t",
            "ᵵ": "t",
            "ƫ": "t",
            "ʈ": "t",
            "ŧ": "t",
            "ᵺ": "th",
            "ɐ": "a",
            "ᴂ": "ae",
            "ǝ": "e",
            "ᵷ": "g",
            "ɥ": "h",
            "ʮ": "h",
            "ʯ": "h",
            "ᴉ": "i",
            "ʞ": "k",
            "ꞁ": "l",
            "ɯ": "m",
            "ɰ": "m",
            "ᴔ": "oe",
            "ɹ": "r",
            "ɻ": "r",
            "ɺ": "r",
            "ⱹ": "r",
            "ʇ": "t",
            "ʌ": "v",
            "ʍ": "w",
            "ʎ": "y",
            "ꜩ": "tz",
            "ú": "u",
            "ŭ": "u",
            "ǔ": "u",
            "û": "u",
            "ṷ": "u",
            "ü": "u",
            "ǘ": "u",
            "ǚ": "u",
            "ǜ": "u",
            "ǖ": "u",
            "ṳ": "u",
            "ụ": "u",
            "ű": "u",
            "ȕ": "u",
            "ù": "u",
            "ủ": "u",
            "ư": "u",
            "ứ": "u",
            "ự": "u",
            "ừ": "u",
            "ử": "u",
            "ữ": "u",
            "ȗ": "u",
            "ū": "u",
            "ṻ": "u",
            "ų": "u",
            "ᶙ": "u",
            "ů": "u",
            "ũ": "u",
            "ṹ": "u",
            "ṵ": "u",
            "ᵫ": "ue",
            "ꝸ": "um",
            "ⱴ": "v",
            "ꝟ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ᶌ": "v",
            "ⱱ": "v",
            "ṽ": "v",
            "ꝡ": "vy",
            "ẃ": "w",
            "ŵ": "w",
            "ẅ": "w",
            "ẇ": "w",
            "ẉ": "w",
            "ẁ": "w",
            "ⱳ": "w",
            "ẘ": "w",
            "ẍ": "x",
            "ẋ": "x",
            "ᶍ": "x",
            "ý": "y",
            "ŷ": "y",
            "ÿ": "y",
            "ẏ": "y",
            "ỵ": "y",
            "ỳ": "y",
            "ƴ": "y",
            "ỷ": "y",
            "ỿ": "y",
            "ȳ": "y",
            "ẙ": "y",
            "ɏ": "y",
            "ỹ": "y",
            "ź": "z",
            "ž": "z",
            "ẑ": "z",
            "ʑ": "z",
            "ⱬ": "z",
            "ż": "z",
            "ẓ": "z",
            "ȥ": "z",
            "ẕ": "z",
            "ᵶ": "z",
            "ᶎ": "z",
            "ʐ": "z",
            "ƶ": "z",
            "ɀ": "z",
            "ﬀ": "ff",
            "ﬃ": "ffi",
            "ﬄ": "ffl",
            "ﬁ": "fi",
            "ﬂ": "fl",
            "ĳ": "ij",
            "œ": "oe",
            "ﬆ": "st",
            "ₐ": "a",
            "ₑ": "e",
            "ᵢ": "i",
            "ⱼ": "j",
            "ₒ": "o",
            "ᵣ": "r",
            "ᵤ": "u",
            "ᵥ": "v",
            "ₓ": "x",
            "Ё": "YO",
            "Й": "I",
            "Ц": "TS",
            "У": "U",
            "К": "K",
            "Е": "E",
            "Н": "N",
            "Г": "G",
            "Ш": "SH",
            "Щ": "SCH",
            "З": "Z",
            "Х": "H",
            "Ъ": "",
            "ё": "yo",
            "й": "i",
            "ц": "ts",
            "у": "u",
            "к": "k",
            "е": "e",
            "н": "n",
            "г": "g",
            "ш": "sh",
            "щ": "sch",
            "з": "z",
            "х": "h",
            "ъ": "",
            "Ф": "F",
            "Ы": "I",
            "В": "V",
            "А": "A",
            "П": "P",
            "Р": "R",
            "О": "O",
            "Л": "L",
            "Д": "D",
            "Ж": "ZH",
            "Э": "E",
            "ф": "f",
            "ы": "i",
            "в": "v",
            "а": "a",
            "п": "p",
            "р": "r",
            "о": "o",
            "л": "l",
            "д": "d",
            "ж": "zh",
            "э": "e",
            "Я": "Ya",
            "Ч": "CH",
            "С": "S",
            "М": "M",
            "И": "I",
            "Т": "T",
            "Ь": "",
            "Б": "B",
            "Ю": "YU",
            "я": "ya",
            "ч": "ch",
            "с": "s",
            "м": "m",
            "и": "i",
            "т": "t",
            "ь": "",
            "б": "b",
            "ю": "yu"
        }
    },
    731: function(e, t, n) {
        var r;
        !function(i, o, a) {
            function s(e, t, n) {
                return e.addEventListener ? void e.addEventListener(t, n, !1) : void e.attachEvent("on" + t, n)
            }
            function c(e) {
                if ("keypress" == e.type) {
                    var t = String.fromCharCode(e.which);
                    return e.shiftKey || (t = t.toLowerCase()),
                    t
                }
                return _[e.which] ? _[e.which] : k[e.which] ? k[e.which] : String.fromCharCode(e.which).toLowerCase()
            }
            function u(e, t) {
                return e.sort().join(",") === t.sort().join(",")
            }
            function f(e) {
                var t = [];
                return e.shiftKey && t.push("shift"),
                e.altKey && t.push("alt"),
                e.ctrlKey && t.push("ctrl"),
                e.metaKey && t.push("meta"),
                t
            }
            function l(e) {
                return e.preventDefault ? void e.preventDefault() : void (e.returnValue = !1)
            }
            function h(e) {
                return e.stopPropagation ? void e.stopPropagation() : void (e.cancelBubble = !0)
            }
            function d(e) {
                return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
            }
            function p() {
                if (!y) {
                    y = {};
                    for (var e in _)
                        e > 95 && e < 112 || _.hasOwnProperty(e) && (y[_[e]] = e)
                }
                return y
            }
            function w(e, t, n) {
                return n || (n = p()[e] ? "keydown" : "keypress"),
                "keypress" == n && t.length && (n = "keydown"),
                n
            }
            function m(e) {
                return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus"),
                e.split("+"))
            }
            function g(e, t) {
                var n, r, i, o = [];
                for (n = m(e),
                i = 0; i < n.length; ++i)
                    r = n[i],
                    A[r] && (r = A[r]),
                    t && "keypress" != t && x[r] && (r = x[r],
                    o.push("shift")),
                    d(r) && o.push(r);
                return t = w(r, o, t),
                {
                    key: r,
                    modifiers: o,
                    action: t
                }
            }
            function v(e, t) {
                return null !== e && e !== o && (e === t || v(e.parentNode, t))
            }
            function b(e) {
                function t(e) {
                    e = e || {};
                    var t, n = !1;
                    for (t in y)
                        e[t] ? n = !0 : y[t] = 0;
                    n || (x = !1)
                }
                function n(e, t, n, r, i, o) {
                    var a, s, c = [], f = n.type;
                    if (!m._callbacks[e])
                        return [];
                    for ("keyup" == f && d(e) && (t = [e]),
                    a = 0; a < m._callbacks[e].length; ++a)
                        if (s = m._callbacks[e][a],
                        (r || !s.seq || y[s.seq] == s.level) && f == s.action && ("keypress" == f && !n.metaKey && !n.ctrlKey || u(t, s.modifiers))) {
                            var l = !r && s.combo == i
                              , h = r && s.seq == r && s.level == o;
                            (l || h) && m._callbacks[e].splice(a, 1),
                            c.push(s)
                        }
                    return c
                }
                function r(e, t, n, r) {
                    m.stopCallback(t, t.target || t.srcElement, n, r) || e(t, n) === !1 && (l(t),
                    h(t))
                }
                function i(e) {
                    "number" != typeof e.which && (e.which = e.keyCode);
                    var t = c(e);
                    if (t)
                        return "keyup" == e.type && _ === t ? void (_ = !1) : void m.handleKey(t, f(e), e)
                }
                function a() {
                    clearTimeout(v),
                    v = setTimeout(t, 1e3)
                }
                function p(e, n, i, o) {
                    function s(t) {
                        return function() {
                            x = t,
                            ++y[e],
                            a()
                        }
                    }
                    function u(n) {
                        r(i, n, e),
                        "keyup" !== o && (_ = c(n)),
                        setTimeout(t, 10)
                    }
                    y[e] = 0;
                    for (var f = 0; f < n.length; ++f) {
                        var l = f + 1 === n.length
                          , h = l ? u : s(o || g(n[f + 1]).action);
                        w(n[f], h, o, e, f)
                    }
                }
                function w(e, t, r, i, o) {
                    m._directMap[e + ":" + r] = t,
                    e = e.replace(/\s+/g, " ");
                    var a, s = e.split(" ");
                    return s.length > 1 ? void p(e, s, t, r) : (a = g(e, r),
                    m._callbacks[a.key] = m._callbacks[a.key] || [],
                    n(a.key, a.modifiers, {
                        type: a.action
                    }, i, e, o),
                    void m._callbacks[a.key][i ? "unshift" : "push"]({
                        callback: t,
                        modifiers: a.modifiers,
                        action: a.action,
                        seq: i,
                        level: o,
                        combo: e
                    }))
                }
                var m = this;
                if (e = e || o,
                !(m instanceof b))
                    return new b(e);
                m.target = e,
                m._callbacks = {},
                m._directMap = {};
                var v, y = {}, _ = !1, k = !1, x = !1;
                m._handleKey = function(e, i, o) {
                    var a, s = n(e, i, o), c = {}, u = 0, f = !1;
                    for (a = 0; a < s.length; ++a)
                        s[a].seq && (u = Math.max(u, s[a].level));
                    for (a = 0; a < s.length; ++a)
                        if (s[a].seq) {
                            if (s[a].level != u)
                                continue;
                            f = !0,
                            c[s[a].seq] = 1,
                            r(s[a].callback, o, s[a].combo, s[a].seq)
                        } else
                            f || r(s[a].callback, o, s[a].combo);
                    var l = "keypress" == o.type && k;
                    o.type != x || d(e) || l || t(c),
                    k = f && "keydown" == o.type
                }
                ,
                m._bindMultiple = function(e, t, n) {
                    for (var r = 0; r < e.length; ++r)
                        w(e[r], t, n)
                }
                ,
                s(e, "keypress", i),
                s(e, "keydown", i),
                s(e, "keyup", i)
            }
            if (i) {
                for (var y, _ = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta"
                }, k = {
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, x = {
                    "~": "`",
                    "!": "1",
                    "@": "2",
                    "#": "3",
                    $: "4",
                    "%": "5",
                    "^": "6",
                    "&": "7",
                    "*": "8",
                    "(": "9",
                    ")": "0",
                    _: "-",
                    "+": "=",
                    ":": ";",
                    '"': "'",
                    "<": ",",
                    ">": ".",
                    "?": "/",
                    "|": "\\"
                }, A = {
                    option: "alt",
                    command: "meta",
                    "return": "enter",
                    escape: "esc",
                    plus: "+",
                    mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                }, S = 1; S < 20; ++S)
                    _[111 + S] = "f" + S;
                for (S = 0; S <= 9; ++S)
                    _[S + 96] = S;
                b.prototype.bind = function(e, t, n) {
                    var r = this;
                    return e = e instanceof Array ? e : [e],
                    r._bindMultiple.call(r, e, t, n),
                    r
                }
                ,
                b.prototype.unbind = function(e, t) {
                    var n = this;
                    return n.bind.call(n, e, function() {}, t)
                }
                ,
                b.prototype.trigger = function(e, t) {
                    var n = this;
                    return n._directMap[e + ":" + t] && n._directMap[e + ":" + t]({}, e),
                    n
                }
                ,
                b.prototype.reset = function() {
                    var e = this;
                    return e._callbacks = {},
                    e._directMap = {},
                    e
                }
                ,
                b.prototype.stopCallback = function(e, t) {
                    var n = this;
                    return !((" " + t.className + " ").indexOf(" mousetrap ") > -1) && (!v(t, n.target) && ("INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable))
                }
                ,
                b.prototype.handleKey = function() {
                    var e = this;
                    return e._handleKey.apply(e, arguments)
                }
                ,
                b.addKeycodes = function(e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (_[t] = e[t]);
                    y = null
                }
                ,
                b.init = function() {
                    var e = b(o);
                    for (var t in e)
                        "_" !== t.charAt(0) && (b[t] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(t))
                }
                ,
                b.init(),
                i.Mousetrap = b,
                "undefined" != typeof e && e.exports && (e.exports = b),
                r = function() {
                    return b
                }
                .call(t, n, t, e),
                !(r !== a && (e.exports = r))
            }
        }("undefined" != typeof window ? window : null , "undefined" != typeof window ? document : null )
    },
    732: function(e, t) {
        "use strict";
        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.exports = function(e, t, r, i) {
            t = t || "&",
            r = r || "=";
            var o = {};
            if ("string" != typeof e || 0 === e.length)
                return o;
            var a = /\+/g;
            e = e.split(t);
            var s = 1e3;
            i && "number" == typeof i.maxKeys && (s = i.maxKeys);
            var c = e.length;
            s > 0 && c > s && (c = s);
            for (var u = 0; u < c; ++u) {
                var f, l, h, d, p = e[u].replace(a, "%20"), w = p.indexOf(r);
                w >= 0 ? (f = p.substr(0, w),
                l = p.substr(w + 1)) : (f = p,
                l = ""),
                h = decodeURIComponent(f),
                d = decodeURIComponent(l),
                n(o, h) ? Array.isArray(o[h]) ? o[h].push(d) : o[h] = [o[h], d] : o[h] = d
            }
            return o
        }
    },
    733: function(e, t) {
        "use strict";
        var n = function(e) {
            switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
            }
        };
        e.exports = function(e, t, r, i) {
            return t = t || "&",
            r = r || "=",
            null === e && (e = void 0),
            "object" == typeof e ? Object.keys(e).map(function(i) {
                var o = encodeURIComponent(n(i)) + r;
                return Array.isArray(e[i]) ? e[i].map(function(e) {
                    return o + encodeURIComponent(n(e))
                }).join(t) : o + encodeURIComponent(n(e[i]))
            }).join(t) : i ? encodeURIComponent(n(i)) + r + encodeURIComponent(n(e)) : ""
        }
    },
    734: function(e, t, n) {
        "use strict";
        t.decode = t.parse = n(732),
        t.encode = t.stringify = n(733)
    },
    803: function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(e) {
            if (f === setTimeout)
                return setTimeout(e, 0);
            if ((f === n || !f) && setTimeout)
                return f = setTimeout,
                setTimeout(e, 0);
            try {
                return f(e, 0)
            } catch (t) {
                try {
                    return f.call(null , e, 0)
                } catch (t) {
                    return f.call(this, e, 0)
                }
            }
        }
        function o(e) {
            if (l === clearTimeout)
                return clearTimeout(e);
            if ((l === r || !l) && clearTimeout)
                return l = clearTimeout,
                clearTimeout(e);
            try {
                return l(e)
            } catch (t) {
                try {
                    return l.call(null , e)
                } catch (t) {
                    return l.call(this, e)
                }
            }
        }
        function a() {
            w && d && (w = !1,
            d.length ? p = d.concat(p) : m = -1,
            p.length && s())
        }
        function s() {
            if (!w) {
                var e = i(a);
                w = !0;
                for (var t = p.length; t; ) {
                    for (d = p,
                    p = []; ++m < t; )
                        d && d[m].run();
                    m = -1,
                    t = p.length
                }
                d = null ,
                w = !1,
                o(e)
            }
        }
        function c(e, t) {
            this.fun = e,
            this.array = t
        }
        function u() {}
        var f, l, h = e.exports = {};
        !function() {
            try {
                f = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                f = n
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                l = r
            }
        }();
        var d, p = [], w = !1, m = -1;
        h.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            p.push(new c(e,t)),
            1 !== p.length || w || i(s)
        }
        ,
        c.prototype.run = function() {
            this.fun.apply(null , this.array)
        }
        ,
        h.title = "browser",
        h.browser = !0,
        h.env = {},
        h.argv = [],
        h.version = "",
        h.versions = {},
        h.on = u,
        h.addListener = u,
        h.once = u,
        h.off = u,
        h.removeListener = u,
        h.removeAllListeners = u,
        h.emit = u,
        h.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        h.cwd = function() {
            return "/"
        }
        ,
        h.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        h.umask = function() {
            return 0
        }
    },
    804: function(e, t, n) {
        var r;
        !function(i, o) {
            "use strict";
            var a = "0.7.9"
              , s = ""
              , c = "?"
              , u = "function"
              , f = "undefined"
              , l = "object"
              , h = "string"
              , d = "major"
              , p = "model"
              , w = "name"
              , m = "type"
              , g = "vendor"
              , v = "version"
              , b = "architecture"
              , y = "console"
              , _ = "mobile"
              , k = "tablet"
              , x = "smarttv"
              , A = "wearable"
              , S = "embedded"
              , P = {
                extend: function(e, t) {
                    for (var n in t)
                        "browser cpu device engine os".indexOf(n) !== -1 && t[n].length % 2 === 0 && (e[n] = t[n].concat(e[n]));
                    return e
                },
                has: function(e, t) {
                    return "string" == typeof e && t.toLowerCase().indexOf(e.toLowerCase()) !== -1
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return typeof e === h ? e.split(".")[0] : o
                }
            }
              , C = {
                rgx: function() {
                    for (var e, t, n, r, i, a, s, c = 0, h = arguments; c < h.length && !a; ) {
                        var d = h[c]
                          , p = h[c + 1];
                        if (typeof e === f) {
                            e = {};
                            for (r in p)
                                i = p[r],
                                typeof i === l ? e[i[0]] = o : e[i] = o
                        }
                        for (t = n = 0; t < d.length && !a; )
                            if (a = d[t++].exec(this.getUA()))
                                for (r = 0; r < p.length; r++)
                                    s = a[++n],
                                    i = p[r],
                                    typeof i === l && i.length > 0 ? 2 == i.length ? typeof i[1] == u ? e[i[0]] = i[1].call(this, s) : e[i[0]] = i[1] : 3 == i.length ? typeof i[1] !== u || i[1].exec && i[1].test ? e[i[0]] = s ? s.replace(i[1], i[2]) : o : e[i[0]] = s ? i[1].call(this, s, i[2]) : o : 4 == i.length && (e[i[0]] = s ? i[3].call(this, s.replace(i[1], i[2])) : o) : e[i] = s ? s : o;
                        c += 2
                    }
                    return e
                },
                str: function(e, t) {
                    for (var n in t)
                        if (typeof t[n] === l && t[n].length > 0) {
                            for (var r = 0; r < t[n].length; r++)
                                if (P.has(t[n][r], e))
                                    return n === c ? o : n
                        } else if (P.has(t[n], e))
                            return n === c ? o : n;
                    return e
                }
            }
              , E = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2000: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            }
              , M = {
                browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [w, v], [/\s(opr)\/([\w\.]+)/i], [[w, "Opera"], v], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i], [w, v], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[w, "IE"], v], [/(edge)\/((\d+)?[\w\.]+)/i], [w, v], [/(yabrowser)\/([\w\.]+)/i], [[w, "Yandex"], v], [/(comodo_dragon)\/([\w\.]+)/i], [[w, /_/g, " "], v], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i], [w, v], [/(dolfin)\/([\w\.]+)/i], [[w, "Dolphin"], v], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[w, "Chrome"], v], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [v, [w, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [v, [w, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [v, [w, "Facebook"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [v, [w, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [v, w], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [w, [v, C.str, E.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [w, v], [/(navigator|netscape)\/([\w\.-]+)/i], [[w, "Netscape"], v], [/fxios\/([\w\.-]+)/i], [v, [w, "Firefox"]], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [w, v]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[b, "amd64"]], [/(ia32(?=;))/i], [[b, P.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[b, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[b, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[b, /ower/, "", P.lowerize]], [/(sun4\w)[;\)]/i], [[b, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[b, P.lowerize]]],
                device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [p, g, [m, k]], [/applecoremedia\/[\w\.]+ \((ipad)/], [p, [g, "Apple"], [m, k]], [/(apple\s{0,1}tv)/i], [[p, "Apple TV"], [g, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [g, p, [m, k]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [p, [g, "Amazon"], [m, k]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[p, C.str, E.device.amazon.model], [g, "Amazon"], [m, _]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [p, g, [m, _]], [/\((ip[honed|\s\w*]+);/i], [p, [g, "Apple"], [m, _]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [g, p, [m, _]], [/\(bb10;\s(\w+)/i], [p, [g, "BlackBerry"], [m, _]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [p, [g, "Asus"], [m, k]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[g, "Sony"], [p, "Xperia Tablet"], [m, k]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[g, "Sony"], [p, "Xperia Phone"], [m, _]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [g, p, [m, y]], [/android.+;\s(shield)\sbuild/i], [p, [g, "Nvidia"], [m, y]], [/(playstation\s[3portablevi]+)/i], [p, [g, "Sony"], [m, y]], [/(sprint\s(\w+))/i], [[g, C.str, E.device.sprint.vendor], [p, C.str, E.device.sprint.model], [m, _]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [g, p, [m, k]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [g, [p, /_/g, " "], [m, _]], [/(nexus\s9)/i], [p, [g, "HTC"], [m, k]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [p, [g, "Microsoft"], [m, y]], [/(kin\.[onetw]{3})/i], [[p, /\./g, " "], [g, "Microsoft"], [m, _]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i], [p, [g, "Motorola"], [m, _]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [p, [g, "Motorola"], [m, k]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[g, "Samsung"], p, [m, k]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[g, "Samsung"], p, [m, _]], [/(samsung);smarttv/i], [g, p, [m, x]], [/\(dtv[\);].+(aquos)/i], [p, [g, "Sharp"], [m, x]], [/sie-(\w+)*/i], [p, [g, "Siemens"], [m, _]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[g, "Nokia"], p, [m, _]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [p, [g, "Acer"], [m, k]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[g, "LG"], p, [m, k]], [/(lg) netcast\.tv/i], [g, p, [m, x]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [p, [g, "LG"], [m, _]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [p, [g, "Lenovo"], [m, k]], [/linux;.+((jolla));/i], [g, p, [m, _]], [/((pebble))app\/[\d\.]+\s/i], [g, p, [m, A]], [/android.+;\s(glass)\s\d/i], [p, [g, "Google"], [m, A]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[p, /_/g, " "], [g, "Xiaomi"], [m, _]], [/(mobile|tablet);.+rv\:.+gecko\//i], [[m, P.lowerize], g, p]],
                engine: [[/windows.+\sedge\/([\w\.]+)/i], [v, [w, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [w, v], [/rv\:([\w\.]+).*(gecko)/i], [v, w]],
                os: [[/microsoft\s(windows)\s(vista|xp)/i], [w, v], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [w, [v, C.str, E.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[w, "Windows"], [v, C.str, E.os.windows.version]], [/\((bb)(10);/i], [[w, "BlackBerry"], v], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [w, v], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[w, "Symbian"], v], [/\((series40);/i], [w], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[w, "Firefox OS"], v], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [w, v], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[w, "Chromium OS"], v], [/(sunos)\s?([\w\.]+\d)*/i], [[w, "Solaris"], v], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [w, v], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[w, "iOS"], [v, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[w, "Mac OS"], [v, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [w, v]]
            }
              , O = function(e, t) {
                if (!(this instanceof O))
                    return new O(e,t).getResult();
                var n = e || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : s)
                  , r = t ? P.extend(M, t) : M;
                return this.getBrowser = function() {
                    var e = C.rgx.apply(this, r.browser);
                    return e.major = P.major(e.version),
                    e
                }
                ,
                this.getCPU = function() {
                    return C.rgx.apply(this, r.cpu)
                }
                ,
                this.getDevice = function() {
                    return C.rgx.apply(this, r.device)
                }
                ,
                this.getEngine = function() {
                    return C.rgx.apply(this, r.engine)
                }
                ,
                this.getOS = function() {
                    return C.rgx.apply(this, r.os)
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return n
                }
                ,
                this.setUA = function(e) {
                    return n = e,
                    this
                }
                ,
                this.setUA(n),
                this
            };
            O.VERSION = a,
            O.BROWSER = {
                NAME: w,
                MAJOR: d,
                VERSION: v
            },
            O.CPU = {
                ARCHITECTURE: b
            },
            O.DEVICE = {
                MODEL: p,
                VENDOR: g,
                TYPE: m,
                CONSOLE: y,
                MOBILE: _,
                SMARTTV: x,
                TABLET: k,
                WEARABLE: A,
                EMBEDDED: S
            },
            O.ENGINE = {
                NAME: w,
                VERSION: v
            },
            O.OS = {
                NAME: w,
                VERSION: v
            },
            typeof t !== f ? (typeof e !== f && e.exports && (t = e.exports = O),
            t.UAParser = O) : "function" === u && n(807) ? (r = function() {
                return O
            }
            .call(t, n, t, e),
            !(r !== o && (e.exports = r))) : i.UAParser = O;
            var T = i.jQuery || i.Zepto;
            if (typeof T !== f) {
                var D = new O;
                T.ua = D.getResult(),
                T.ua.get = function() {
                    return D.getUA()
                }
                ,
                T.ua.set = function(e) {
                    D.setUA(e);
                    var t = D.getResult();
                    for (var n in t)
                        T.ua[n] = t[n]
                }
            }
        }("object" == typeof window ? window : this)
    },
    805: function(e, t, n) {
        function r() {
            this.protocol = null ,
            this.slashes = null ,
            this.auth = null ,
            this.host = null ,
            this.port = null ,
            this.hostname = null ,
            this.hash = null ,
            this.search = null ,
            this.query = null ,
            this.pathname = null ,
            this.path = null ,
            this.href = null
        }
        function i(e, t, n) {
            if (e && u(e) && e instanceof r)
                return e;
            var i = new r;
            return i.parse(e, t, n),
            i
        }
        function o(e) {
            return c(e) && (e = i(e)),
            e instanceof r ? e.format() : r.prototype.format.call(e)
        }
        function a(e, t) {
            return i(e, !1, !0).resolve(t)
        }
        function s(e, t) {
            return e ? i(e, !1, !0).resolveObject(t) : t
        }
        function c(e) {
            return "string" == typeof e
        }
        function u(e) {
            return "object" == typeof e && null !== e
        }
        function f(e) {
            return null === e
        }
        function l(e) {
            return null == e
        }
        var h = n(444);
        t.parse = i,
        t.resolve = a,
        t.resolveObject = s,
        t.format = o,
        t.Url = r;
        var d = /^([a-z0-9.+-]+:)/i
          , p = /:[0-9]*$/
          , w = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
          , m = ["{", "}", "|", "\\", "^", "`"].concat(w)
          , g = ["'"].concat(m)
          , v = ["%", "/", "?", ";", "#"].concat(g)
          , b = ["/", "?", "#"]
          , y = 255
          , _ = /^[a-z0-9A-Z_-]{0,63}$/
          , k = /^([a-z0-9A-Z_-]{0,63})(.*)$/
          , x = {
            javascript: !0,
            "javascript:": !0
        }
          , A = {
            javascript: !0,
            "javascript:": !0
        }
          , S = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        }
          , P = n(734);
        r.prototype.parse = function(e, t, n) {
            if (!c(e))
                throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var r = e;
            r = r.trim();
            var i = d.exec(r);
            if (i) {
                i = i[0];
                var o = i.toLowerCase();
                this.protocol = o,
                r = r.substr(i.length)
            }
            if (n || i || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var a = "//" === r.substr(0, 2);
                !a || i && A[i] || (r = r.substr(2),
                this.slashes = !0)
            }
            if (!A[i] && (a || i && !S[i])) {
                for (var s = -1, u = 0; u < b.length; u++) {
                    var f = r.indexOf(b[u]);
                    f !== -1 && (s === -1 || f < s) && (s = f)
                }
                var l, p;
                p = s === -1 ? r.lastIndexOf("@") : r.lastIndexOf("@", s),
                p !== -1 && (l = r.slice(0, p),
                r = r.slice(p + 1),
                this.auth = decodeURIComponent(l)),
                s = -1;
                for (var u = 0; u < v.length; u++) {
                    var f = r.indexOf(v[u]);
                    f !== -1 && (s === -1 || f < s) && (s = f)
                }
                s === -1 && (s = r.length),
                this.host = r.slice(0, s),
                r = r.slice(s),
                this.parseHost(),
                this.hostname = this.hostname || "";
                var w = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!w)
                    for (var m = this.hostname.split(/\./), u = 0, C = m.length; u < C; u++) {
                        var E = m[u];
                        if (E && !E.match(_)) {
                            for (var M = "", O = 0, T = E.length; O < T; O++)
                                M += E.charCodeAt(O) > 127 ? "x" : E[O];
                            if (!M.match(_)) {
                                var D = m.slice(0, u)
                                  , I = m.slice(u + 1)
                                  , F = E.match(k);
                                F && (D.push(F[1]),
                                I.unshift(F[2])),
                                I.length && (r = "/" + I.join(".") + r),
                                this.hostname = D.join(".");
                                break
                            }
                        }
                    }
                if (this.hostname.length > y ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
                !w) {
                    for (var R = this.hostname.split("."), N = [], u = 0; u < R.length; ++u) {
                        var L = R[u];
                        N.push(L.match(/[^A-Za-z0-9_-]/) ? "xn--" + h.encode(L) : L)
                    }
                    this.hostname = N.join(".")
                }
                var q = this.port ? ":" + this.port : ""
                  , j = this.hostname || "";
                this.host = j + q,
                this.href += this.host,
                w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
                "/" !== r[0] && (r = "/" + r))
            }
            if (!x[o])
                for (var u = 0, C = g.length; u < C; u++) {
                    var B = g[u]
                      , U = encodeURIComponent(B);
                    U === B && (U = escape(B)),
                    r = r.split(B).join(U)
                }
            var z = r.indexOf("#");
            z !== -1 && (this.hash = r.substr(z),
            r = r.slice(0, z));
            var G = r.indexOf("?");
            if (G !== -1 ? (this.search = r.substr(G),
            this.query = r.substr(G + 1),
            t && (this.query = P.parse(this.query)),
            r = r.slice(0, G)) : t && (this.search = "",
            this.query = {}),
            r && (this.pathname = r),
            S[o] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search) {
                var q = this.pathname || ""
                  , L = this.search || "";
                this.path = q + L
            }
            return this.href = this.format(),
            this
        }
        ,
        r.prototype.format = function() {
            var e = this.auth || "";
            e && (e = encodeURIComponent(e),
            e = e.replace(/%3A/i, ":"),
            e += "@");
            var t = this.protocol || ""
              , n = this.pathname || ""
              , r = this.hash || ""
              , i = !1
              , o = "";
            this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"),
            this.port && (i += ":" + this.port)),
            this.query && u(this.query) && Object.keys(this.query).length && (o = P.stringify(this.query));
            var a = this.search || o && "?" + o || "";
            return t && ":" !== t.substr(-1) && (t += ":"),
            this.slashes || (!t || S[t]) && i !== !1 ? (i = "//" + (i || ""),
            n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""),
            r && "#" !== r.charAt(0) && (r = "#" + r),
            a && "?" !== a.charAt(0) && (a = "?" + a),
            n = n.replace(/[?#]/g, function(e) {
                return encodeURIComponent(e)
            }),
            a = a.replace("#", "%23"),
            t + i + n + a + r
        }
        ,
        r.prototype.resolve = function(e) {
            return this.resolveObject(i(e, !1, !0)).format()
        }
        ,
        r.prototype.resolveObject = function(e) {
            if (c(e)) {
                var t = new r;
                t.parse(e, !1, !0),
                e = t
            }
            var n = new r;
            if (Object.keys(this).forEach(function(e) {
                n[e] = this[e]
            }, this),
            n.hash = e.hash,
            "" === e.href)
                return n.href = n.format(),
                n;
            if (e.slashes && !e.protocol)
                return Object.keys(e).forEach(function(t) {
                    "protocol" !== t && (n[t] = e[t])
                }),
                S[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"),
                n.href = n.format(),
                n;
            if (e.protocol && e.protocol !== n.protocol) {
                if (!S[e.protocol])
                    return Object.keys(e).forEach(function(t) {
                        n[t] = e[t]
                    }),
                    n.href = n.format(),
                    n;
                if (n.protocol = e.protocol,
                e.host || A[e.protocol])
                    n.pathname = e.pathname;
                else {
                    for (var i = (e.pathname || "").split("/"); i.length && !(e.host = i.shift()); )
                        ;
                    e.host || (e.host = ""),
                    e.hostname || (e.hostname = ""),
                    "" !== i[0] && i.unshift(""),
                    i.length < 2 && i.unshift(""),
                    n.pathname = i.join("/")
                }
                if (n.search = e.search,
                n.query = e.query,
                n.host = e.host || "",
                n.auth = e.auth,
                n.hostname = e.hostname || e.host,
                n.port = e.port,
                n.pathname || n.search) {
                    var o = n.pathname || ""
                      , a = n.search || "";
                    n.path = o + a
                }
                return n.slashes = n.slashes || e.slashes,
                n.href = n.format(),
                n
            }
            var s = n.pathname && "/" === n.pathname.charAt(0)
              , u = e.host || e.pathname && "/" === e.pathname.charAt(0)
              , h = u || s || n.host && e.pathname
              , d = h
              , p = n.pathname && n.pathname.split("/") || []
              , i = e.pathname && e.pathname.split("/") || []
              , w = n.protocol && !S[n.protocol];
            if (w && (n.hostname = "",
            n.port = null ,
            n.host && ("" === p[0] ? p[0] = n.host : p.unshift(n.host)),
            n.host = "",
            e.protocol && (e.hostname = null ,
            e.port = null ,
            e.host && ("" === i[0] ? i[0] = e.host : i.unshift(e.host)),
            e.host = null ),
            h = h && ("" === i[0] || "" === p[0])),
            u)
                n.host = e.host || "" === e.host ? e.host : n.host,
                n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname,
                n.search = e.search,
                n.query = e.query,
                p = i;
            else if (i.length)
                p || (p = []),
                p.pop(),
                p = p.concat(i),
                n.search = e.search,
                n.query = e.query;
            else if (!l(e.search)) {
                if (w) {
                    n.hostname = n.host = p.shift();
                    var m = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                    m && (n.auth = m.shift(),
                    n.host = n.hostname = m.shift())
                }
                return n.search = e.search,
                n.query = e.query,
                f(n.pathname) && f(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                n.href = n.format(),
                n
            }
            if (!p.length)
                return n.pathname = null ,
                n.search ? n.path = "/" + n.search : n.path = null ,
                n.href = n.format(),
                n;
            for (var g = p.slice(-1)[0], v = (n.host || e.host) && ("." === g || ".." === g) || "" === g, b = 0, y = p.length; y >= 0; y--)
                g = p[y],
                "." == g ? p.splice(y, 1) : ".." === g ? (p.splice(y, 1),
                b++) : b && (p.splice(y, 1),
                b--);
            if (!h && !d)
                for (; b--; b)
                    p.unshift("..");
            !h || "" === p[0] || p[0] && "/" === p[0].charAt(0) || p.unshift(""),
            v && "/" !== p.join("/").substr(-1) && p.push("");
            var _ = "" === p[0] || p[0] && "/" === p[0].charAt(0);
            if (w) {
                n.hostname = n.host = _ ? "" : p.length ? p.shift() : "";
                var m = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                m && (n.auth = m.shift(),
                n.host = n.hostname = m.shift())
            }
            return h = h || n.host && p.length,
            h && !_ && p.unshift(""),
            p.length ? n.pathname = p.join("/") : (n.pathname = null ,
            n.path = null ),
            f(n.pathname) && f(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            n.auth = e.auth || n.auth,
            n.slashes = n.slashes || e.slashes,
            n.href = n.format(),
            n
        }
        ,
        r.prototype.parseHost = function() {
            var e = this.host
              , t = p.exec(e);
            t && (t = t[0],
            ":" !== t && (this.port = t.substr(1)),
            e = e.substr(0, e.length - t.length)),
            e && (this.hostname = e)
        }
    },
    807: function(e, t) {
        (function(t) {
            e.exports = t
        }
        ).call(t, {})
    },
    808: function(module, exports) {
        function ba(e) {
            eval.call(null , e)
        }
        function assert(e, t) {
            e || z("Assertion failed: " + t)
        }
        function ga(a) {
            var b = e["_" + a];
            if (!b)
                try {
                    b = eval("_" + a)
                } catch (c) {}
            return assert(b, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)"),
            b
        }
        function ma(e, t, n) {
            switch (n = n || "i8",
            "*" === n.charAt(n.length - 1) && (n = "i32"),
            n) {
            case "i1":
                D[e >> 0] = t;
                break;
            case "i8":
                D[e >> 0] = t;
                break;
            case "i16":
                E[e >> 1] = t;
                break;
            case "i32":
                F[e >> 2] = t;
                break;
            case "i64":
                fa = [t >>> 0, (da = t,
                1 <= +na(da) ? 0 < da ? (0 | oa(+pa(da / 4294967296), 4294967295)) >>> 0 : ~~+qa((da - +(~~da >>> 0)) / 4294967296) >>> 0 : 0)],
                F[e >> 2] = fa[0],
                F[e + 4 >> 2] = fa[1];
                break;
            case "float":
                ra[e >> 2] = t;
                break;
            case "double":
                sa[e >> 3] = t;
                break;
            default:
                z("invalid type for setValue: " + n)
            }
        }
        function ta(e, t) {
            switch (t = t || "i8",
            "*" === t.charAt(t.length - 1) && (t = "i32"),
            t) {
            case "i1":
                return D[e >> 0];
            case "i8":
                return D[e >> 0];
            case "i16":
                return E[e >> 1];
            case "i32":
                return F[e >> 2];
            case "i64":
                return F[e >> 2];
            case "float":
                return ra[e >> 2];
            case "double":
                return sa[e >> 3];
            default:
                z("invalid type for setValue: " + t)
            }
            return null
        }
        function G(e, t, r, i) {
            var o, a;
            "number" == typeof e ? (o = !0,
            a = e) : (o = !1,
            a = e.length);
            var s = "string" == typeof t ? t : null ;
            if (r = 4 == r ? i : [ua, n.W, n.Ia, n.P][void 0 === r ? 2 : r](Math.max(a, s ? 1 : t.length)),
            o) {
                for (i = r,
                assert(0 == (3 & r)),
                e = r + (a & -4); i < e; i += 4)
                    F[i >> 2] = 0;
                for (e = r + a; i < e; )
                    D[i++ >> 0] = 0;
                return r
            }
            if ("i8" === s)
                return e.subarray || e.slice ? H.set(e, r) : H.set(new Uint8Array(e), r),
                r;
            i = 0;
            for (var c, u; i < a; ) {
                var f = e[i];
                "function" == typeof f && (f = n.sd(f)),
                o = s || t[i],
                0 === o ? i++ : ("i64" == o && (o = "i32"),
                ma(r + i, f, o),
                u !== o && (c = n.Aa(o),
                u = o),
                i += c)
            }
            return r
        }
        function la(t, n) {
            if (0 === n || !t)
                return "";
            for (var r, i = 0, o = 0; (r = H[t + o >> 0],
            i |= r,
            0 != r || n) && (o++,
            !n || o != n); )
                ;
            if (n || (n = o),
            r = "",
            128 > i) {
                for (; 0 < n; )
                    i = String.fromCharCode.apply(String, H.subarray(t, t + Math.min(n, 1024))),
                    r = r ? r + i : i,
                    t += 1024,
                    n -= 1024;
                return r
            }
            return e.UTF8ToString(t)
        }
        function za(e, t) {
            for (var n, r, i, o, a, s, c = ""; ; ) {
                if (n = e[t++],
                !n)
                    return c;
                128 & n ? (r = 63 & e[t++],
                192 == (224 & n) ? c += String.fromCharCode((31 & n) << 6 | r) : (i = 63 & e[t++],
                224 == (240 & n) ? n = (15 & n) << 12 | r << 6 | i : (o = 63 & e[t++],
                240 == (248 & n) ? n = (7 & n) << 18 | r << 12 | i << 6 | o : (a = 63 & e[t++],
                248 == (252 & n) ? n = (3 & n) << 24 | r << 18 | i << 12 | o << 6 | a : (s = 63 & e[t++],
                n = (1 & n) << 30 | r << 24 | i << 18 | o << 12 | a << 6 | s))),
                65536 > n ? c += String.fromCharCode(n) : (n -= 65536,
                c += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)))) : c += String.fromCharCode(n)
            }
        }
        function Aa(e, t, n, r) {
            if (!(0 < r))
                return 0;
            var i = n;
            r = n + r - 1;
            for (var o = 0; o < e.length; ++o) {
                var a = e.charCodeAt(o);
                if (55296 <= a && 57343 >= a && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++o)),
                127 >= a) {
                    if (n >= r)
                        break;
                    t[n++] = a
                } else {
                    if (2047 >= a) {
                        if (n + 1 >= r)
                            break;
                        t[n++] = 192 | a >> 6
                    } else {
                        if (65535 >= a) {
                            if (n + 2 >= r)
                                break;
                            t[n++] = 224 | a >> 12
                        } else {
                            if (2097151 >= a) {
                                if (n + 3 >= r)
                                    break;
                                t[n++] = 240 | a >> 18
                            } else {
                                if (67108863 >= a) {
                                    if (n + 4 >= r)
                                        break;
                                    t[n++] = 248 | a >> 24
                                } else {
                                    if (n + 5 >= r)
                                        break;
                                    t[n++] = 252 | a >> 30,
                                    t[n++] = 128 | a >> 24 & 63
                                }
                                t[n++] = 128 | a >> 18 & 63
                            }
                            t[n++] = 128 | a >> 12 & 63
                        }
                        t[n++] = 128 | a >> 6 & 63
                    }
                    t[n++] = 128 | 63 & a
                }
            }
            return t[n] = 0,
            n - i
        }
        function Ba(e) {
            for (var t = 0, n = 0; n < e.length; ++n) {
                var r = e.charCodeAt(n);
                55296 <= r && 57343 >= r && (r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++n)),
                127 >= r ? ++t : t = 2047 >= r ? t + 2 : 65535 >= r ? t + 3 : 2097151 >= r ? t + 4 : 67108863 >= r ? t + 5 : t + 6
            }
            return t
        }
        function Ca(t) {
            function r(e, n, i) {
                n = n || 1 / 0;
                var o, a = "", s = [];
                if ("N" === t[u]) {
                    for (u++,
                    "K" === t[u] && u++,
                    o = []; "E" !== t[u]; )
                        if ("S" === t[u]) {
                            u++;
                            var c = t.indexOf("_", u);
                            o.push(l[t.substring(u, c) || 0] || "?"),
                            u = c + 1
                        } else if ("C" === t[u])
                            o.push(o[o.length - 1]),
                            u += 2;
                        else {
                            var c = parseInt(t.substr(u))
                              , d = c.toString().length;
                            if (!c || !d) {
                                u--;
                                break
                            }
                            var p = t.substr(u + d, c);
                            o.push(p),
                            l.push(p),
                            u += d + c
                        }
                    if (u++,
                    o = o.join("::"),
                    n--,
                    0 === n)
                        return e ? [o] : o
                } else
                    ("K" === t[u] || h && "L" === t[u]) && u++,
                    (c = parseInt(t.substr(u))) && (d = c.toString().length,
                    o = t.substr(u + d, c),
                    u += d + c);
                h = !1,
                "I" === t[u] ? (u++,
                c = r(!0),
                d = r(!0, 1, !0),
                a += d[0] + " " + o + "<" + c.join(", ") + ">") : a = o;
                e: for (; u < t.length && 0 < n--; )
                    if (o = t[u++],
                    o in f)
                        s.push(f[o]);
                    else
                        switch (o) {
                        case "P":
                            s.push(r(!0, 1, !0)[0] + "*");
                            break;
                        case "R":
                            s.push(r(!0, 1, !0)[0] + "&");
                            break;
                        case "L":
                            u++,
                            c = t.indexOf("E", u) - u,
                            s.push(t.substr(u, c)),
                            u += c + 2;
                            break;
                        case "A":
                            if (c = parseInt(t.substr(u)),
                            u += c.toString().length,
                            "_" !== t[u])
                                throw "?";
                            u++,
                            s.push(r(!0, 1, !0)[0] + " [" + c + "]");
                            break;
                        case "E":
                            break e;
                        default:
                            a += "?" + o;
                            break e
                        }
                return i || 1 !== s.length || "void" !== s[0] || (s = []),
                e ? (a && s.push(a + "?"),
                s) : a + ("(" + s.join(", ") + ")")
            }
            var i = !!e.___cxa_demangle;
            if (i)
                try {
                    var o = ua(t.length);
                    ka(t.substr(1), o);
                    var a = ua(4)
                      , s = e.___cxa_demangle(o, 0, 0, a);
                    if (0 === ta(a, "i32") && s)
                        return la(s)
                } catch (c) {} finally {
                    o && Da(o),
                    a && Da(a),
                    s && Da(s)
                }
            var u = 3
              , f = {
                v: "void",
                b: "bool",
                c: "char",
                s: "short",
                i: "int",
                l: "long",
                f: "float",
                d: "double",
                w: "wchar_t",
                a: "signed char",
                h: "unsigned char",
                t: "unsigned short",
                j: "unsigned int",
                m: "unsigned long",
                x: "long long",
                y: "unsigned long long",
                z: "..."
            }
              , l = []
              , h = !0
              , o = t;
            try {
                if ("Object._main" == t || "_main" == t)
                    return "main()";
                if ("number" == typeof t && (t = la(t)),
                "_" !== t[0] || "_" !== t[1] || "Z" !== t[2])
                    return t;
                switch (t[3]) {
                case "n":
                    return "operator new()";
                case "d":
                    return "operator delete()"
                }
                o = r()
            } catch (d) {
                o += "?"
            }
            return 0 <= o.indexOf("?") && !i && n.M("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"),
            o
        }
        function Ea() {
            return Fa().replace(/__Z[\w\d_]+/g, function(e) {
                var t = Ca(e);
                return e === t ? e : e + " [" + t + "]"
            })
        }
        function Fa() {
            var e = Error();
            if (!e.stack) {
                try {
                    throw Error(0)
                } catch (t) {
                    e = t
                }
                if (!e.stack)
                    return "(no stack trace available)"
            }
            return e.stack.toString()
        }
        function Ga() {
            var e = v;
            return 0 < e % 4096 && (e += 4096 - e % 4096),
            e
        }
        function Oa(e) {
            for (; 0 < e.length; ) {
                var t = e.shift();
                if ("function" == typeof t)
                    t();
                else {
                    var r = t.Qa;
                    "number" == typeof r ? void 0 === t.T ? n.J("v", r) : n.J("vi", r, [t.T]) : r(void 0 === t.T ? null : t.T)
                }
            }
        }
        function Ta(e) {
            Pa.unshift(e)
        }
        function Ua(e) {
            Sa.unshift(e)
        }
        function Va(e, t, n) {
            return n = Array(0 < n ? n : Ba(e) + 1),
            e = Aa(e, n, 0, n.length),
            t && (n.length = e),
            n
        }
        function ka(e, t, n) {
            for (e = Va(e, n),
            n = 0; n < e.length; )
                D[t + n >> 0] = e[n],
                n += 1
        }
        function ja(e, t) {
            for (var n = 0; n < e.length; n++)
                D[t++ >> 0] = e[n]
        }
        function ya(e, t, n) {
            for (var r = 0; r < e.length; ++r)
                D[t++ >> 0] = e.charCodeAt(r);
            n || (D[t >> 0] = 0)
        }
        function Ya() {
            L++,
            e.monitorRunDependencies && e.monitorRunDependencies(L)
        }
        function Za() {
            if (L--,
            e.monitorRunDependencies && e.monitorRunDependencies(L),
            0 == L && (null !== Wa && (clearInterval(Wa),
            Wa = null ),
            Xa)) {
                var t = Xa;
                Xa = null ,
                t()
            }
        }
        function eb(e, t) {
            K.push(function() {
                n.J("vi", e, [t])
            }),
            eb.level = K.length
        }
        function ib(t) {
            return e.___errno_location && (F[e.___errno_location() >> 2] = t),
            t
        }
        function jb(e, t) {
            for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                var i = e[r];
                "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1),
                n++) : n && (e.splice(r, 1),
                n--)
            }
            if (t)
                for (; n--; n)
                    e.unshift("..");
            return e
        }
        function N(e) {
            var t = "/" === e.charAt(0)
              , n = "/" === e.substr(-1);
            return (e = jb(e.split("/").filter(function(e) {
                return !!e
            }), !t).join("/")) || t || (e = "."),
            e && n && (e += "/"),
            (t ? "/" : "") + e
        }
        function kb(e) {
            var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
            return e = t[0],
            t = t[1],
            e || t ? (t && (t = t.substr(0, t.length - 1)),
            e + t) : "."
        }
        function lb(e) {
            if ("/" === e)
                return "/";
            var t = e.lastIndexOf("/");
            return -1 === t ? e : e.substr(t + 1)
        }
        function mb() {
            for (var e = "", t = !1, n = arguments.length - 1; -1 <= n && !t; n--) {
                if (t = 0 <= n ? arguments[n] : "/",
                "string" != typeof t)
                    throw new TypeError("Arguments to path.resolve must be strings");
                if (!t)
                    return "";
                e = t + "/" + e,
                t = "/" === t.charAt(0)
            }
            return e = jb(e.split("/").filter(function(e) {
                return !!e
            }), !t).join("/"),
            (t ? "/" : "") + e || "."
        }
        function ob(e, t) {
            nb[e] = {
                input: [],
                output: [],
                L: t
            },
            pb(e, qb)
        }
        function T(e, t) {
            if (e = mb("/", e),
            t = t || {},
            !e)
                return {
                    path: "",
                    g: null
                };
            var n, r = {
                za: !0,
                ka: 0
            };
            for (n in r)
                void 0 === t[n] && (t[n] = r[n]);
            if (8 < t.ka)
                throw new O(M.aa);
            var r = jb(e.split("/").filter(function(e) {
                return !!e
            }), !1)
              , i = xb;
            n = "/";
            for (var o = 0; o < r.length; o++) {
                var a = o === r.length - 1;
                if (a && t.parent)
                    break;
                if (i = wb(i, r[o]),
                n = N(n + "/" + r[o]),
                i.R && (!a || a && t.za) && (i = i.R.root),
                !a || t.ga)
                    for (a = 0; 40960 === (61440 & i.mode); )
                        if (i = Db(n),
                        n = mb(kb(n), i),
                        i = T(n, {
                            ka: t.ka
                        }).g,
                        40 < a++)
                            throw new O(M.aa)
            }
            return {
                path: n,
                g: i
            }
        }
        function U(e) {
            for (var t; ; ) {
                if (e === e.parent)
                    return e = e.A.Fa,
                    t ? "/" !== e[e.length - 1] ? e + "/" + t : e + t : e;
                t = t ? e.name + "/" + t : e.name,
                e = e.parent
            }
        }
        function Eb(e, t) {
            for (var n = 0, r = 0; r < t.length; r++)
                n = (n << 5) - n + t.charCodeAt(r) | 0;
            return (e + n >>> 0) % R.length
        }
        function Fb(e) {
            var t = Eb(e.parent.id, e.name);
            e.K = R[t],
            R[t] = e
        }
        function wb(e, t) {
            var n;
            if (n = (n = Gb(e, "x")) ? n : e.k.lookup ? 0 : M.Y)
                throw new O(n,e);
            for (n = R[Eb(e.id, t)]; n; n = n.K) {
                var r = n.name;
                if (n.parent.id === e.id && r === t)
                    return n
            }
            return e.k.lookup(e, t)
        }
        function ub(e, t, n, r) {
            return Hb || (Hb = function(e, t, n, r) {
                e || (e = this),
                this.parent = e,
                this.A = e.A,
                this.R = null ,
                this.id = Ab++,
                this.name = t,
                this.mode = n,
                this.k = {},
                this.n = {},
                this.rdev = r
            }
            ,
            Hb.prototype = {},
            Object.defineProperties(Hb.prototype, {
                read: {
                    get: function() {
                        return 365 === (365 & this.mode)
                    },
                    set: function(e) {
                        e ? this.mode |= 365 : this.mode &= -366
                    }
                },
                write: {
                    get: function() {
                        return 146 === (146 & this.mode)
                    },
                    set: function(e) {
                        e ? this.mode |= 146 : this.mode &= -147
                    }
                },
                Xa: {
                    get: function() {
                        return 16384 === (61440 & this.mode)
                    }
                },
                Ca: {
                    get: function() {
                        return 8192 === (61440 & this.mode)
                    }
                }
            })),
            e = new Hb(e,t,n,r),
            Fb(e),
            e
        }
        function Gb(e, t) {
            return Cb ? 0 : (-1 === t.indexOf("r") || 292 & e.mode) && (-1 === t.indexOf("w") || 146 & e.mode) && (-1 === t.indexOf("x") || 73 & e.mode) ? 0 : M.Y
        }
        function Jb(e, t) {
            try {
                return wb(e, t),
                M.pa
            } catch (n) {}
            return Gb(e, "wx")
        }
        function Kb() {
            var e;
            e = 4096;
            for (var t = 0; t <= e; t++)
                if (!zb[t])
                    return t;
            throw new O(M.Ja)
        }
        function Lb(e) {
            Mb || (Mb = function() {}
            ,
            Mb.prototype = {},
            Object.defineProperties(Mb.prototype, {
                object: {
                    get: function() {
                        return this.g
                    },
                    set: function(e) {
                        this.g = e
                    }
                },
                vd: {
                    get: function() {
                        return 1 !== (2097155 & this.flags)
                    }
                },
                wd: {
                    get: function() {
                        return 0 !== (2097155 & this.flags)
                    }
                },
                ud: {
                    get: function() {
                        return 1024 & this.flags
                    }
                }
            }));
            var t, n = new Mb;
            for (t in e)
                n[t] = e[t];
            return e = n,
            n = Kb(),
            e.fd = n,
            zb[n] = e
        }
        function pb(e, t) {
            yb[e] = {
                n: t
            }
        }
        function Nb(e, t) {
            var n, r = "/" === t, i = !t;
            if (r && xb)
                throw new O(M.$);
            if (!r && !i) {
                if (n = T(t, {
                    za: !1
                }),
                t = n.path,
                n = n.g,
                n.R)
                    throw new O(M.$);
                if (16384 !== (61440 & n.mode))
                    throw new O(M.qa)
            }
            var i = {
                type: e,
                Ad: {},
                Fa: t,
                Ya: []
            }
              , o = e.A(i);
            o.A = i,
            i.root = o,
            r ? xb = o : n && (n.R = i,
            n.A && n.A.Ya.push(i))
        }
        function Ob(e, t, n) {
            var r = T(e, {
                parent: !0
            }).g;
            if (e = lb(e),
            !e || "." === e || ".." === e)
                throw new O(M.u);
            var i = Jb(r, e);
            if (i)
                throw new O(i);
            if (!r.k.V)
                throw new O(M.G);
            return r.k.V(r, e, t, n)
        }
        function Pb(e, t) {
            return t = 4095 & (void 0 !== t ? t : 438),
            t |= 32768,
            Ob(e, t, 0)
        }
        function V(e, t) {
            return t = 1023 & (void 0 !== t ? t : 511),
            t |= 16384,
            Ob(e, t, 0)
        }
        function Qb(e, t, n) {
            return "undefined" == typeof n && (n = t,
            t = 438),
            Ob(e, 8192 | t, n)
        }
        function Rb(e, t) {
            if (!mb(e))
                throw new O(M.B);
            var n = T(t, {
                parent: !0
            }).g;
            if (!n)
                throw new O(M.B);
            var r = lb(t)
              , i = Jb(n, r);
            if (i)
                throw new O(i);
            if (!n.k.symlink)
                throw new O(M.G);
            return n.k.symlink(n, r, e)
        }
        function Db(e) {
            if (e = T(e).g,
            !e)
                throw new O(M.B);
            if (!e.k.readlink)
                throw new O(M.u);
            return mb(U(e.parent), e.k.readlink(e))
        }
        function Sb(e, t) {
            var n;
            if (n = "string" == typeof e ? T(e, {
                ga: !0
            }).g : e,
            !n.k.p)
                throw new O(M.G);
            n.k.p(n, {
                mode: 4095 & t | n.mode & -4096,
                timestamp: Date.now()
            })
        }
        function Tb(t, n) {
            var r;
            if ("" === t)
                throw new O(M.B);
            var i;
            if ("string" == typeof n) {
                if (i = Ib[n],
                "undefined" == typeof i)
                    throw Error("Unknown file open mode: " + n)
            } else
                i = n;
            n = i,
            r = 64 & n ? 4095 & ("undefined" == typeof r ? 438 : r) | 32768 : 0;
            var o;
            if ("object" == typeof t)
                o = t;
            else {
                t = N(t);
                try {
                    o = T(t, {
                        ga: !(131072 & n)
                    }).g
                } catch (a) {}
            }
            if (i = !1,
            64 & n)
                if (o) {
                    if (128 & n)
                        throw new O(M.pa)
                } else
                    o = Ob(t, r, 0),
                    i = !0;
            if (!o)
                throw new O(M.B);
            if (8192 === (61440 & o.mode) && (n &= -513),
            65536 & n && 16384 !== (61440 & o.mode))
                throw new O(M.qa);
            if (!i && (o ? 40960 === (61440 & o.mode) ? r = M.aa : 16384 === (61440 & o.mode) && (0 !== (2097155 & n) || 512 & n) ? r = M.N : (r = ["r", "w", "rw"][3 & n],
            512 & n && (r += "w"),
            r = Gb(o, r)) : r = M.B,
            r))
                throw new O(r);
            if (512 & n) {
                r = o;
                var s;
                if (s = "string" == typeof r ? T(r, {
                    ga: !0
                }).g : r,
                !s.k.p)
                    throw new O(M.G);
                if (16384 === (61440 & s.mode))
                    throw new O(M.N);
                if (32768 !== (61440 & s.mode))
                    throw new O(M.u);
                if (r = Gb(s, "w"))
                    throw new O(r);
                s.k.p(s, {
                    size: 0,
                    timestamp: Date.now()
                })
            }
            n &= -641,
            o = Lb({
                g: o,
                path: U(o),
                flags: n,
                seekable: !0,
                position: 0,
                n: o.n,
                eb: [],
                error: !1
            }),
            o.n.open && o.n.open(o),
            !e.logReadFiles || 1 & n || (Ub || (Ub = {}),
            t in Ub || (Ub[t] = 1,
            e.printErr("read file: " + t)));
            try {
                S.onOpenFile && (s = 0,
                1 !== (2097155 & n) && (s |= 1),
                0 !== (2097155 & n) && (s |= 2),
                S.onOpenFile(t, s))
            } catch (c) {
                console.log("FS.trackingDelegate['onOpenFile']('" + t + "', flags) threw an exception: " + c.message)
            }
            return o
        }
        function Vb(e) {
            e.ia && (e.ia = null );
            try {
                e.n.close && e.n.close(e)
            } catch (t) {
                throw t
            } finally {
                zb[e.fd] = null
            }
        }
        function Wb(e, t, n) {
            if (!e.seekable || !e.n.I)
                throw new O(M.da);
            e.position = e.n.I(e, t, n),
            e.eb = []
        }
        function Xb(e, t, n, r, i, o) {
            if (0 > r || 0 > i)
                throw new O(M.u);
            if (0 === (2097155 & e.flags))
                throw new O(M.Z);
            if (16384 === (61440 & e.g.mode))
                throw new O(M.N);
            if (!e.n.write)
                throw new O(M.u);
            1024 & e.flags && Wb(e, 0, 2);
            var a = !0;
            if ("undefined" == typeof i)
                i = e.position,
                a = !1;
            else if (!e.seekable)
                throw new O(M.da);
            t = e.n.write(e, t, n, r, i, o),
            a || (e.position += t);
            try {
                e.path && S.onWriteToFile && S.onWriteToFile(e.path)
            } catch (s) {
                console.log("FS.trackingDelegate['onWriteToFile']('" + path + "') threw an exception: " + s.message)
            }
            return t
        }
        function Yb() {
            O || (O = function(e, t) {
                this.g = t,
                this.bb = function(e) {
                    this.Q = e;
                    for (var t in M)
                        if (M[t] === e) {
                            this.code = t;
                            break
                        }
                }
                ,
                this.bb(e),
                this.message = hb[e]
            }
            ,
            O.prototype = Error(),
            O.prototype.constructor = O,
            [M.B].forEach(function(e) {
                vb[e] = new O(e),
                vb[e].stack = "<generic error, no stack>"
            }))
        }
        function $b(e, t) {
            var n = 0;
            return e && (n |= 365),
            t && (n |= 146),
            n
        }
        function ac(e, t, n, r) {
            return e = N(("string" == typeof e ? e : U(e)) + "/" + t),
            Pb(e, $b(n, r))
        }
        function bc(e, t, n, r, i, o) {
            if (e = t ? N(("string" == typeof e ? e : U(e)) + "/" + t) : e,
            r = $b(r, i),
            i = Pb(e, r),
            n) {
                if ("string" == typeof n) {
                    e = Array(n.length),
                    t = 0;
                    for (var a = n.length; t < a; ++t)
                        e[t] = n.charCodeAt(t);
                    n = e
                }
                Sb(i, 146 | r),
                e = Tb(i, "w"),
                Xb(e, n, 0, n.length, 0, o),
                Vb(e),
                Sb(i, r)
            }
            return i
        }
        function W(e, t, n, r) {
            e = N(("string" == typeof e ? e : U(e)) + "/" + t),
            t = $b(!!n, !!r),
            W.Da || (W.Da = 64);
            var i = W.Da++ << 8 | 0;
            return pb(i, {
                open: function(e) {
                    e.seekable = !1
                },
                close: function() {
                    r && r.buffer && r.buffer.length && r(10)
                },
                read: function(e, t, r, i) {
                    for (var o = 0, a = 0; a < i; a++) {
                        var s;
                        try {
                            s = n()
                        } catch (c) {
                            throw new O(M.F)
                        }
                        if (void 0 === s && 0 === o)
                            throw new O(M.oa);
                        if (null === s || void 0 === s)
                            break;
                        o++,
                        t[r + a] = s
                    }
                    return o && (e.g.timestamp = Date.now()),
                    o
                },
                write: function(e, t, n, i) {
                    for (var o = 0; o < i; o++)
                        try {
                            r(t[n + o])
                        } catch (a) {
                            throw new O(M.F)
                        }
                    return i && (e.g.timestamp = Date.now()),
                    o
                }
            }),
            Qb(e, t, i)
        }
        function cc(t) {
            if (t.Ca || t.Xa || t.link || t.e)
                return !0;
            var n = !0;
            if ("undefined" != typeof XMLHttpRequest)
                throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
            if (!e.read)
                throw Error("Cannot load without read() or XMLHttpRequest.");
            try {
                t.e = Va(e.read(t.url), !0),
                t.o = t.e.length
            } catch (r) {
                n = !1
            }
            return n || ib(M.F),
            n
        }
        function X() {
            return ec += 4,
            F[ec - 4 >> 2]
        }
        function fc() {
            var e;
            if (e = X(),
            e = zb[e],
            !e)
                throw new O(M.Z);
            return e
        }
        function wa(e) {
            wa.C || (v = Ga(),
            wa.C = !0,
            assert(n.P),
            wa.Ra = n.P,
            n.P = function() {
                z("cannot dynamically allocate, sbrk now has control")
            }
            );
            var t = v;
            return 0 == e || wa.Ra(e) ? t : 4294967295
        }
        function hc(e, t) {
            if (ic = e,
            jc = t,
            !kc)
                return 1;
            if (0 == e)
                Y = function() {
                    setTimeout(lc, t)
                }
                ,
                mc = "timeout";
            else if (1 == e)
                Y = function() {
                    nc(lc)
                }
                ,
                mc = "rAF";
            else if (2 == e) {
                if (!window.setImmediate) {
                    var n = [];
                    window.addEventListener("message", function(e) {
                        e.source === window && "__emcc" === e.data && (e.stopPropagation(),
                        n.shift()())
                    }, !0),
                    window.setImmediate = function(e) {
                        n.push(e),
                        window.postMessage("__emcc", "*")
                    }
                }
                Y = function() {
                    window.setImmediate(lc)
                }
                ,
                mc = "immediate"
            }
            return 0
        }
        function oc(t, r, i, o, a) {
            e.noExitRuntime = !0,
            assert(!kc, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),
            kc = t,
            pc = o;
            var s = qc;
            if (lc = function() {
                if (!A)
                    if (0 < rc.length) {
                        var r = Date.now()
                          , i = rc.shift();
                        if (i.Qa(i.T),
                        sc) {
                            var a = sc
                              , c = 0 == a % 1 ? a - 1 : Math.floor(a);
                            sc = i.ld ? c : (8 * a + (c + .5)) / 9
                        }
                        console.log('main loop blocker "' + i.name + '" took ' + (Date.now() - r) + " ms"),
                        tc(),
                        setTimeout(lc, 0)
                    } else
                        s < qc || (uc = uc + 1 | 0,
                        1 == ic && 1 < jc && 0 != uc % jc ? Y() : ("timeout" === mc && e.fa && (e.S("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),
                        mc = ""),
                        vc(function() {
                            "undefined" != typeof o ? n.J("vi", t, [o]) : n.J("v", t)
                        }),
                        s < qc || ("object" == typeof SDL && SDL.audio && SDL.audio.Za && SDL.audio.Za(),
                        Y())))
            }
            ,
            a || (r && 0 < r ? hc(0, 1e3 / r) : hc(1, 1),
            Y()),
            i)
                throw "SimulateInfiniteLoop"
        }
        function tc() {
            if (e.setStatus) {
                var t = e.statusMessage || "Please wait..."
                  , n = sc
                  , r = wc.nd;
                n ? n < r ? e.setStatus(t + " (" + (r - n) + "/" + r + ")") : e.setStatus(t) : e.setStatus("")
            }
        }
        function vc(t) {
            if (!(A || e.preMainLoop && !1 === e.preMainLoop())) {
                try {
                    t()
                } catch (n) {
                    if (n instanceof xc)
                        return;
                    throw n && "object" == typeof n && n.stack && e.S("exception thrown: " + [n, n.stack]),
                    n
                }
                e.postMainLoop && e.postMainLoop()
            }
        }
        function Bc() {
            function t() {
                zc = document.pointerLockElement === i || document.mozPointerLockElement === i || document.webkitPointerLockElement === i || document.msPointerLockElement === i
            }
            if (e.preloadPlugins || (e.preloadPlugins = []),
            !Cc) {
                Cc = !0;
                try {
                    Dc = !0
                } catch (r) {
                    Dc = !1,
                    console.log("warning: no blob constructor, cannot create blobs with mimetypes")
                }
                Ec = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : Dc ? null : console.log("warning: no BlobBuilder"),
                Fc = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0,
                e.Ha || "undefined" != typeof Fc || (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),
                e.Ha = !0),
                e.preloadPlugins.push({
                    canHandle: function(t) {
                        return !e.Ha && /\.(jpg|jpeg|png|bmp)$/i.test(t)
                    },
                    handle: function(t, r, i, o) {
                        var a = null ;
                        if (Dc)
                            try {
                                a = new Blob([t],{
                                    type: Gc(r)
                                }),
                                a.size !== t.length && (a = new Blob([new Uint8Array(t).buffer],{
                                    type: Gc(r)
                                }))
                            } catch (s) {
                                n.M("Blob constructor present but fails: " + s + "; falling back to blob builder")
                            }
                        a || (a = new Ec,
                        a.append(new Uint8Array(t).buffer),
                        a = a.getBlob());
                        var c = Fc.createObjectURL(a)
                          , u = new Image;
                        u.onload = function() {
                            assert(u.complete, "Image " + r + " could not be decoded");
                            var n = document.createElement("canvas");
                            n.width = u.width,
                            n.height = u.height,
                            n.getContext("2d").drawImage(u, 0, 0),
                            e.preloadedImages[r] = n,
                            Fc.revokeObjectURL(c),
                            i && i(t)
                        }
                        ,
                        u.onerror = function() {
                            console.log("Image " + c + " could not be decoded"),
                            o && o()
                        }
                        ,
                        u.src = c
                    }
                }),
                e.preloadPlugins.push({
                    canHandle: function(t) {
                        return !e.zd && t.substr(-4)in {
                            ".ogg": 1,
                            ".wav": 1,
                            ".mp3": 1
                        }
                    },
                    handle: function(t, n, r, i) {
                        function o(i) {
                            s || (s = !0,
                            e.preloadedAudios[n] = i,
                            r && r(t))
                        }
                        function a() {
                            s || (s = !0,
                            e.preloadedAudios[n] = new Audio,
                            i && i())
                        }
                        var s = !1;
                        if (!Dc)
                            return a();
                        try {
                            var c = new Blob([t],{
                                type: Gc(n)
                            })
                        } catch (u) {
                            return a()
                        }
                        var c = Fc.createObjectURL(c)
                          , f = new Audio;
                        f.addEventListener("canplaythrough", function() {
                            o(f)
                        }, !1),
                        f.onerror = function() {
                            if (!s) {
                                console.log("warning: browser could not fully decode audio " + n + ", trying slower base64 approach");
                                for (var e = "", r = 0, i = 0, a = 0; a < t.length; a++)
                                    for (r = r << 8 | t[a],
                                    i += 8; 6 <= i; )
                                        var c = r >> i - 6 & 63
                                          , i = i - 6
                                          , e = e + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[c];
                                2 == i ? (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(3 & r) << 4],
                                e += "==") : 4 == i && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(15 & r) << 2],
                                e += "="),
                                f.src = "data:audio/x-" + n.substr(-3) + ";base64," + e,
                                o(f)
                            }
                        }
                        ,
                        f.src = c,
                        Hc(function() {
                            o(f)
                        })
                    }
                });
                var i = e.canvas;
                i && (i.la = i.requestPointerLock || i.mozRequestPointerLock || i.webkitRequestPointerLock || i.msRequestPointerLock || function() {}
                ,
                i.wa = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}
                ,
                i.wa = i.wa.bind(document),
                document.addEventListener("pointerlockchange", t, !1),
                document.addEventListener("mozpointerlockchange", t, !1),
                document.addEventListener("webkitpointerlockchange", t, !1),
                document.addEventListener("mspointerlockchange", t, !1),
                e.elementPointerLock && i.addEventListener("click", function(e) {
                    !zc && i.la && (i.la(),
                    e.preventDefault())
                }, !1))
            }
        }
        function Ic(t, n, r, i) {
            if (n && e.fa && t == e.canvas)
                return e.fa;
            var o, a;
            if (n) {
                if (a = {
                    antialias: !1,
                    alpha: !1
                },
                i)
                    for (var s in i)
                        a[s] = i[s];
                (a = GL.createContext(t, a)) && (o = GL.getContext(a).cd),
                t.style.backgroundColor = "black"
            } else
                o = t.getContext("2d");
            return o ? (r && (n || assert("undefined" == typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),
            e.fa = o,
            n && GL.yd(a),
            e.Dd = n,
            Ac.forEach(function(e) {
                e()
            }),
            Bc()),
            o) : null
        }
        function Mc(t, n, r) {
            function i() {
                yc = !1;
                var t = o.parentNode;
                (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === t ? (o.ua = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen || document.exitFullscreen || function() {}
                ,
                o.ua = o.ua.bind(document),
                Kc && o.la(),
                yc = !0,
                Lc && Nc()) : (t.parentNode.insertBefore(o, t),
                t.parentNode.removeChild(t),
                Lc && Oc()),
                e.onFullScreen && e.onFullScreen(yc),
                Pc(o)
            }
            Kc = t,
            Lc = n,
            Qc = r,
            "undefined" == typeof Kc && (Kc = !0),
            "undefined" == typeof Lc && (Lc = !1),
            "undefined" == typeof Qc && (Qc = null );
            var o = e.canvas;
            Jc || (Jc = !0,
            document.addEventListener("fullscreenchange", i, !1),
            document.addEventListener("mozfullscreenchange", i, !1),
            document.addEventListener("webkitfullscreenchange", i, !1),
            document.addEventListener("MSFullscreenChange", i, !1));
            var a = document.createElement("div");
            o.parentNode.insertBefore(a, o),
            a.appendChild(o),
            a.C = a.requestFullScreen || a.mozRequestFullScreen || a.msRequestFullscreen || (a.webkitRequestFullScreen ? function() {
                a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
            }
            : null ),
            r ? a.C({
                Ed: r
            }) : a.C()
        }
        function Sc(e) {
            var t = Date.now();
            if (0 === Rc)
                Rc = t + 1e3 / 60;
            else
                for (; t + 2 >= Rc; )
                    Rc += 1e3 / 60;
            t = Math.max(Rc - t, 0),
            setTimeout(e, t)
        }
        function nc(e) {
            "undefined" == typeof window ? Sc(e) : (window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || Sc),
            window.requestAnimationFrame(e))
        }
        function Hc(t) {
            e.noExitRuntime = !0,
            setTimeout(function() {
                A || t()
            }, 1e4)
        }
        function Gc(e) {
            return {
                jpg: "image/jpeg",
                jpeg: "image/jpeg",
                png: "image/png",
                bmp: "image/bmp",
                ogg: "audio/ogg",
                wav: "audio/wav",
                mp3: "audio/mpeg"
            }[e.substr(e.lastIndexOf(".") + 1)]
        }
        function Tc(e, t, n) {
            var r = new XMLHttpRequest;
            r.open("GET", e, !0),
            r.responseType = "arraybuffer",
            r.onload = function() {
                200 == r.status || 0 == r.status && r.response ? t(r.response) : n()
            }
            ,
            r.onerror = n,
            r.send(null )
        }
        function Uc(e, t, n) {
            Tc(e, function(n) {
                assert(n, 'Loading data file "' + e + '" failed (no arrayBuffer).'),
                t(new Uint8Array(n)),
                Za()
            }, function() {
                if (!n)
                    throw 'Loading data file "' + e + '" failed.';
                n()
            }),
            Ya()
        }
        function Wc() {
            var t = e.canvas;
            Vc.forEach(function(e) {
                e(t.width, t.height)
            })
        }
        function Nc() {
            if ("undefined" != typeof SDL) {
                var e = Ia[SDL.screen + 0 * n.H >> 2];
                F[SDL.screen + 0 * n.H >> 2] = 8388608 | e
            }
            Wc()
        }
        function Oc() {
            if ("undefined" != typeof SDL) {
                var e = Ia[SDL.screen + 0 * n.H >> 2];
                F[SDL.screen + 0 * n.H >> 2] = e & -8388609
            }
            Wc()
        }
        function Pc(t, n, r) {
            n && r ? (t.fb = n,
            t.Va = r) : (n = t.fb,
            r = t.Va);
            var i = n
              , o = r;
            if (e.forcedAspectRatio && 0 < e.forcedAspectRatio && (i / o < e.forcedAspectRatio ? i = Math.round(o * e.forcedAspectRatio) : o = Math.round(i / e.forcedAspectRatio)),
            (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement || document.msFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement) === t.parentNode && "undefined" != typeof screen)
                var a = Math.min(screen.width / i, screen.height / o)
                  , i = Math.round(i * a)
                  , o = Math.round(o * a);
            Lc ? (t.width != i && (t.width = i),
            t.height != o && (t.height = o),
            "undefined" != typeof t.style && (t.style.removeProperty("width"),
            t.style.removeProperty("height"))) : (t.width != n && (t.width = n),
            t.height != r && (t.height = r),
            "undefined" != typeof t.style && (i != n || o != r ? (t.style.setProperty("width", i + "px", "important"),
            t.style.setProperty("height", o + "px", "important")) : (t.style.removeProperty("width"),
            t.style.removeProperty("height"))))
        }
        function xc(e) {
            this.name = "ExitStatus",
            this.message = "Program terminated with exit(" + e + ")",
            this.status = e
        }
        function $c(t) {
            function n() {
                if (!e.calledRun && (e.calledRun = !0,
                !A)) {
                    if (xa || (xa = !0,
                    Oa(Qa)),
                    Oa(Ra),
                    e.onRuntimeInitialized && e.onRuntimeInitialized(),
                    e._main && bd && e.callMain(t),
                    e.postRun)
                        for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length; )
                            Ua(e.postRun.shift());
                    Oa(Sa)
                }
            }
            if (t = t || e.arguments,
            null === Yc && (Yc = Date.now()),
            !(0 < L)) {
                if (e.preRun)
                    for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; )
                        Ta(e.preRun.shift());
                Oa(Pa),
                0 < L || e.calledRun || (e.setStatus ? (e.setStatus("Running..."),
                setTimeout(function() {
                    setTimeout(function() {
                        e.setStatus("")
                    }, 1),
                    n()
                }, 1)) : n())
            }
        }
        function ad(t, n) {
            if (!n || !e.noExitRuntime)
                throw !e.noExitRuntime && (A = !0,
                m = void 0,
                Oa(K),
                e.onExit) && e.onExit(t),
                new xc(t)
        }
        function z(t) {
            void 0 !== t ? (e.print(t),
            e.S(t),
            t = JSON.stringify(t)) : t = "",
            A = !0;
            var n = "abort(" + t + ") at " + Ea() + "\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";
            throw cd && cd.forEach(function(e) {
                n = e(n, t)
            }),
            n
        }
        var e = {}, aa = {}, l;
        for (l in e)
            e.hasOwnProperty(l) && (aa[l] = e[l]);
        e.read = function(e) {
            var t = new XMLHttpRequest;
            return t.open("GET", e, !1),
            t.send(null ),
            t.responseText
        }
        ,
        "undefined" != typeof arguments && (e.arguments = arguments),
        "undefined" != typeof console ? (e.print || (e.print = function(e) {
            console.log(e)
        }
        ),
        e.printErr || (e.printErr = function(e) {
            console.log(e)
        }
        )) : e.print || (e.print = function() {}
        ),
        "undefined" == typeof e.setWindowTitle && (e.setWindowTitle = function(e) {
            document.title = e
        }
        ),
        !e.load && e.read && (e.load = function(t) {
            ba(e.read(t))
        }
        ),
        e.print || (e.print = function() {}
        ),
        e.printErr || (e.printErr = e.print),
        e.arguments || (e.arguments = []),
        e.thisProgram || (e.thisProgram = "./this.program"),
        e.print = e.print,
        e.S = e.printErr,
        e.preRun = [],
        e.postRun = [];
        for (l in aa)
            aa.hasOwnProperty(l) && (e[l] = aa[l]);
        var n = {
            cb: function(e) {
                ca = e
            },
            Ua: function() {
                return ca
            },
            na: function() {
                return m
            },
            X: function(e) {
                m = e
            },
            Aa: function(e) {
                switch (e) {
                case "i1":
                case "i8":
                    return 1;
                case "i16":
                    return 2;
                case "i32":
                    return 4;
                case "i64":
                    return 8;
                case "float":
                    return 4;
                case "double":
                    return 8;
                default:
                    return "*" === e[e.length - 1] ? n.H : "i" === e[0] ? (e = parseInt(e.substr(1)),
                    assert(0 === e % 8),
                    e / 8) : 0
                }
            },
            Ta: function(e) {
                return Math.max(n.Aa(e), n.H)
            },
            dd: 16,
            Bd: function(e, t) {
                return "double" === t || "i64" === t ? 7 & e && (assert(4 === (7 & e)),
                e += 4) : assert(0 === (3 & e)),
                e
            },
            od: function(e, t, r) {
                return r || "i64" != e && "double" != e ? e ? Math.min(t || (e ? n.Ta(e) : 0), n.H) : Math.min(t, 8) : 8
            },
            J: function(t, n, r) {
                return r && r.length ? (r.splice || (r = Array.prototype.slice.call(r)),
                r.splice(0, 0, n),
                e["dynCall_" + t].apply(null , r)) : e["dynCall_" + t].call(null , n)
            },
            U: [],
            Ma: function(e) {
                for (var t = 0; t < n.U.length; t++)
                    if (!n.U[t])
                        return n.U[t] = e,
                        2 * (1 + t);
                throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."
            },
            $a: function(e) {
                n.U[(e - 2) / 2] = null
            },
            M: function(t) {
                n.M.ma || (n.M.ma = {}),
                n.M.ma[t] || (n.M.ma[t] = 1,
                e.S(t))
            },
            ha: {},
            rd: function(e, t) {
                assert(t),
                n.ha[t] || (n.ha[t] = {});
                var r = n.ha[t];
                return r[e] || (r[e] = function() {
                    return n.J(t, e, arguments)
                }
                ),
                r[e]
            },
            pd: function() {
                throw "You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"
            },
            W: function(e) {
                var t = m;
                return m = m + e | 0,
                m = m + 15 & -16,
                t
            },
            Ia: function(e) {
                var t = p;
                return p = p + e | 0,
                p = p + 15 & -16,
                t
            },
            P: function(e) {
                var t = v;
                return v = v + e | 0,
                v = v + 15 & -16,
                (e = v >= w) && (z("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + w + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 "),
                e = !0),
                e ? (v = t,
                0) : t
            },
            ea: function(e, t) {
                return Math.ceil(e / (t ? t : 16)) * (t ? t : 16)
            },
            xd: function(e, t, n) {
                return n ? +(e >>> 0) + 4294967296 * +(t >>> 0) : +(e >>> 0) + 4294967296 * +(0 | t)
            },
            La: 8,
            H: 4,
            ed: 0
        };
        e.Runtime = n,
        n.addFunction = n.Ma,
        n.removeFunction = n.$a;
        var A = !1, da, fa, ca, ha, ia;
        !function() {
            function a(e) {
                return e = e.toString().match(d).slice(1),
                {
                    arguments: e[0],
                    body: e[1],
                    returnValue: e[2]
                }
            }
            var b = {
                stackSave: function() {
                    n.na()
                },
                stackRestore: function() {
                    n.X()
                },
                arrayToC: function(e) {
                    var t = n.W(e.length);
                    return ja(e, t),
                    t
                },
                stringToC: function(e) {
                    var t = 0;
                    return null !== e && void 0 !== e && 0 !== e && (t = n.W((e.length << 2) + 1),
                    ka(e, t)),
                    t
                }
            }
              , c = {
                string: b.stringToC,
                array: b.arrayToC
            };
            ia = function(e, t, r, i, o) {
                e = ga(e);
                var a = []
                  , s = 0;
                if (i)
                    for (var u = 0; u < i.length; u++) {
                        var f = c[r[u]];
                        f ? (0 === s && (s = n.na()),
                        a[u] = f(i[u])) : a[u] = i[u]
                    }
                if (r = e.apply(null , a),
                "string" === t && (r = la(r)),
                0 !== s) {
                    if (o && o.async)
                        return void EmterpreterAsync.hd.push(function() {
                            n.X(s)
                        });
                    n.X(s)
                }
                return r
            }
            ;
            var d = /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/, f = {}, h;
            for (h in b)
                b.hasOwnProperty(h) && (f[h] = a(b[h]));
            ha = function(b, c, d) {
                d = d || [];
                var h = ga(b);
                b = d.every(function(e) {
                    return "number" === e
                });
                var u = "string" !== c;
                if (u && b)
                    return h;
                var q = d.map(function(e, t) {
                    return "$" + t
                });
                c = "(function(" + q.join(",") + ") {";
                var y = d.length;
                if (!b) {
                    c += "var stack = " + f.stackSave.body + ";";
                    for (var B = 0; B < y; B++) {
                        var J = q[B]
                          , ea = d[B];
                        "number" !== ea && (ea = f[ea + "ToC"],
                        c += "var " + ea.arguments + " = " + J + ";",
                        c += ea.body + ";",
                        c += J + "=" + ea.returnValue + ";")
                    }
                }
                return d = a(function() {
                    return h
                }).returnValue,
                c += "var ret = " + d + "(" + q.join(",") + ");",
                u || (d = a(function() {
                    return la
                }).returnValue,
                c += "ret = " + d + "(ret);"),
                b || (c += f.stackRestore.body.replace("()", "(stack)") + ";"),
                eval(c + "return ret})")
            }
        }(),
        e.ccall = ia,
        e.cwrap = ha,
        e.setValue = ma,
        e.getValue = ta,
        e.ALLOC_NORMAL = 0,
        e.ALLOC_STACK = 1,
        e.ALLOC_STATIC = 2,
        e.ALLOC_DYNAMIC = 3,
        e.ALLOC_NONE = 4,
        e.allocate = G,
        e.getMemory = function(e) {
            return va ? "undefined" != typeof wa && !wa.C || !xa ? n.P(e) : ua(e) : n.Ia(e)
        }
        ,
        e.Pointer_stringify = la,
        e.AsciiToString = function(e) {
            for (var t = ""; ; ) {
                var n = D[e++ >> 0];
                if (!n)
                    return t;
                t += String.fromCharCode(n)
            }
        }
        ,
        e.stringToAscii = function(e, t) {
            return ya(e, t, !1)
        }
        ,
        e.UTF8ArrayToString = za,
        e.UTF8ToString = function(e) {
            return za(H, e)
        }
        ,
        e.stringToUTF8Array = Aa,
        e.stringToUTF8 = function(e, t, n) {
            return Aa(e, H, t, n)
        }
        ,
        e.lengthBytesUTF8 = Ba,
        e.UTF16ToString = function(e) {
            for (var t = 0, n = ""; ; ) {
                var r = E[e + 2 * t >> 1];
                if (0 == r)
                    return n;
                ++t,
                n += String.fromCharCode(r)
            }
        }
        ,
        e.stringToUTF16 = function(e, t, n) {
            if (void 0 === n && (n = 2147483647),
            2 > n)
                return 0;
            n -= 2;
            var r = t;
            n = n < 2 * e.length ? n / 2 : e.length;
            for (var i = 0; i < n; ++i)
                E[t >> 1] = e.charCodeAt(i),
                t += 2;
            return E[t >> 1] = 0,
            t - r
        }
        ,
        e.lengthBytesUTF16 = function(e) {
            return 2 * e.length
        }
        ,
        e.UTF32ToString = function(e) {
            for (var t = 0, n = ""; ; ) {
                var r = F[e + 4 * t >> 2];
                if (0 == r)
                    return n;
                ++t,
                65536 <= r ? (r -= 65536,
                n += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)) : n += String.fromCharCode(r)
            }
        }
        ,
        e.stringToUTF32 = function(e, t, n) {
            if (void 0 === n && (n = 2147483647),
            4 > n)
                return 0;
            var r = t;
            n = r + n - 4;
            for (var i = 0; i < e.length; ++i) {
                var o = e.charCodeAt(i);
                if (55296 <= o && 57343 >= o)
                    var a = e.charCodeAt(++i)
                      , o = 65536 + ((1023 & o) << 10) | 1023 & a;
                if (F[t >> 2] = o,
                t += 4,
                t + 4 > n)
                    break
            }
            return F[t >> 2] = 0,
            t - r
        }
        ,
        e.lengthBytesUTF32 = function(e) {
            for (var t = 0, n = 0; n < e.length; ++n) {
                var r = e.charCodeAt(n);
                55296 <= r && 57343 >= r && ++n,
                t += 4
            }
            return t
        }
        ,
        e.stackTrace = function() {
            return Ea()
        }
        ;
        for (var D, H, E, Ha, F, Ia, ra, sa, Ja = 0, p = 0, va = !1, Ka = 0, m = 0, La = 0, Ma = 0, v = 0, Na = e.TOTAL_STACK || 5242880, w = e.TOTAL_MEMORY || 16777216, I = 65536; I < w || I < 2 * Na; )
            I = 16777216 > I ? 2 * I : I + 16777216;
        I !== w && (w = I),
        assert("undefined" != typeof Int32Array && "undefined" != typeof Float64Array && !!new Int32Array(1).subarray && !!new Int32Array(1).set, "JS engine does not provide full typed array support");
        var buffer;
        buffer = new ArrayBuffer(w),
        D = new Int8Array(buffer),
        E = new Int16Array(buffer),
        F = new Int32Array(buffer),
        H = new Uint8Array(buffer),
        Ha = new Uint16Array(buffer),
        Ia = new Uint32Array(buffer),
        ra = new Float32Array(buffer),
        sa = new Float64Array(buffer),
        F[0] = 255,
        assert(255 === H[0] && 0 === H[3], "Typed arrays 2 must be run on a little-endian system"),
        e.HEAP = void 0,
        e.buffer = buffer,
        e.HEAP8 = D,
        e.HEAP16 = E,
        e.HEAP32 = F,
        e.HEAPU8 = H,
        e.HEAPU16 = Ha,
        e.HEAPU32 = Ia,
        e.HEAPF32 = ra,
        e.HEAPF64 = sa;
        var Pa = []
          , Qa = []
          , Ra = []
          , K = []
          , Sa = []
          , xa = !1;
        e.addOnPreRun = Ta,
        e.addOnInit = function(e) {
            Qa.unshift(e)
        }
        ,
        e.addOnPreMain = function(e) {
            Ra.unshift(e)
        }
        ,
        e.addOnExit = function(e) {
            K.unshift(e)
        }
        ,
        e.addOnPostRun = Ua,
        e.intArrayFromString = Va,
        e.intArrayToString = function(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                255 < r && (r &= 255),
                t.push(String.fromCharCode(r))
            }
            return t.join("")
        }
        ,
        e.writeStringToMemory = ka,
        e.writeArrayToMemory = ja,
        e.writeAsciiToMemory = ya,
        Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function(e, t) {
            var n = 65535 & e
              , r = 65535 & t;
            return n * r + ((e >>> 16) * r + n * (t >>> 16) << 16) | 0
        }
        ),
        Math.td = Math.imul,
        Math.clz32 || (Math.clz32 = function(e) {
            e >>>= 0;
            for (var t = 0; 32 > t; t++)
                if (e & 1 << 31 - t)
                    return t;
            return 32
        }
        ),
        Math.kd = Math.clz32;
        var na = Math.abs
          , qa = Math.ceil
          , pa = Math.floor
          , oa = Math.min
          , L = 0
          , Wa = null
          , Xa = null ;
        e.addRunDependency = Ya,
        e.removeRunDependency = Za,
        e.preloadedImages = {},
        e.preloadedAudios = {},
        Ja = 8,
        p = Ja + 1696,
        Qa.push(),
        G([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 164, 2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", 4, n.La);
        var $a = n.ea(G(12, "i8", 2), 8);
        assert(0 == $a % 8),
        e._bitshift64Ashr = ab,
        e._i64Subtract = bb,
        e._i64Add = cb,
        e._memset = db,
        e._bitshift64Lshr = fb,
        e._bitshift64Shl = gb;
        var M = {
            G: 1,
            B: 2,
            Qc: 3,
            Nb: 4,
            F: 5,
            sa: 6,
            gb: 7,
            kc: 8,
            Z: 9,
            ub: 10,
            oa: 11,
            $c: 11,
            Ka: 12,
            Y: 13,
            Gb: 14,
            wc: 15,
            $: 16,
            pa: 17,
            ad: 18,
            ba: 19,
            qa: 20,
            N: 21,
            u: 22,
            fc: 23,
            Ja: 24,
            O: 25,
            Xc: 26,
            Hb: 27,
            sc: 28,
            da: 29,
            Nc: 30,
            Zb: 31,
            Gc: 32,
            Db: 33,
            Kc: 34,
            oc: 42,
            Kb: 43,
            vb: 44,
            Qb: 45,
            Rb: 46,
            Sb: 47,
            Yb: 48,
            Yc: 49,
            ic: 50,
            Pb: 51,
            Ab: 35,
            lc: 37,
            mb: 52,
            pb: 53,
            bd: 54,
            gc: 55,
            qb: 56,
            rb: 57,
            Bb: 35,
            sb: 59,
            uc: 60,
            jc: 61,
            Uc: 62,
            tc: 63,
            pc: 64,
            qc: 65,
            Mc: 66,
            mc: 67,
            jb: 68,
            Rc: 69,
            wb: 70,
            Hc: 71,
            ac: 72,
            Eb: 73,
            ob: 74,
            Bc: 76,
            nb: 77,
            Lc: 78,
            Tb: 79,
            Ub: 80,
            Xb: 81,
            Wb: 82,
            Vb: 83,
            vc: 38,
            ra: 39,
            bc: 36,
            aa: 40,
            Cc: 95,
            Fc: 96,
            zb: 104,
            hc: 105,
            kb: 97,
            Jc: 91,
            zc: 88,
            rc: 92,
            Oc: 108,
            yb: 111,
            hb: 98,
            xb: 103,
            ec: 101,
            cc: 100,
            Vc: 110,
            Ib: 112,
            Jb: 113,
            Mb: 115,
            lb: 114,
            Cb: 89,
            $b: 90,
            Ic: 93,
            Pc: 94,
            ib: 99,
            dc: 102,
            Ob: 106,
            xc: 107,
            Wc: 109,
            Zc: 87,
            Fb: 122,
            Sc: 116,
            Ac: 95,
            nc: 123,
            Lb: 84,
            Dc: 75,
            tb: 125,
            yc: 131,
            Ec: 130,
            Tc: 86
        }
          , hb = {
            0: "Success",
            1: "Not super-user",
            2: "No such file or directory",
            3: "No such process",
            4: "Interrupted system call",
            5: "I/O error",
            6: "No such device or address",
            7: "Arg list too long",
            8: "Exec format error",
            9: "Bad file number",
            10: "No children",
            11: "No more processes",
            12: "Not enough core",
            13: "Permission denied",
            14: "Bad address",
            15: "Block device required",
            16: "Mount device busy",
            17: "File exists",
            18: "Cross-device link",
            19: "No such device",
            20: "Not a directory",
            21: "Is a directory",
            22: "Invalid argument",
            23: "Too many open files in system",
            24: "Too many open files",
            25: "Not a typewriter",
            26: "Text file busy",
            27: "File too large",
            28: "No space left on device",
            29: "Illegal seek",
            30: "Read only file system",
            31: "Too many links",
            32: "Broken pipe",
            33: "Math arg out of domain of func",
            34: "Math result not representable",
            35: "File locking deadlock error",
            36: "File or path name too long",
            37: "No record locks available",
            38: "Function not implemented",
            39: "Directory not empty",
            40: "Too many symbolic links",
            42: "No message of desired type",
            43: "Identifier removed",
            44: "Channel number out of range",
            45: "Level 2 not synchronized",
            46: "Level 3 halted",
            47: "Level 3 reset",
            48: "Link number out of range",
            49: "Protocol driver not attached",
            50: "No CSI structure available",
            51: "Level 2 halted",
            52: "Invalid exchange",
            53: "Invalid request descriptor",
            54: "Exchange full",
            55: "No anode",
            56: "Invalid request code",
            57: "Invalid slot",
            59: "Bad font file fmt",
            60: "Device not a stream",
            61: "No data (for no delay io)",
            62: "Timer expired",
            63: "Out of streams resources",
            64: "Machine is not on the network",
            65: "Package not installed",
            66: "The object is remote",
            67: "The link has been severed",
            68: "Advertise error",
            69: "Srmount error",
            70: "Communication error on send",
            71: "Protocol error",
            72: "Multihop attempted",
            73: "Cross mount point (not really error)",
            74: "Trying to read unreadable message",
            75: "Value too large for defined data type",
            76: "Given log. name not unique",
            77: "f.d. invalid for this operation",
            78: "Remote address changed",
            79: "Can   access a needed shared lib",
            80: "Accessing a corrupted shared lib",
            81: ".lib section in a.out corrupted",
            82: "Attempting to link in too many libs",
            83: "Attempting to exec a shared library",
            84: "Illegal byte sequence",
            86: "Streams pipe error",
            87: "Too many users",
            88: "Socket operation on non-socket",
            89: "Destination address required",
            90: "Message too long",
            91: "Protocol wrong type for socket",
            92: "Protocol not available",
            93: "Unknown protocol",
            94: "Socket type not supported",
            95: "Not supported",
            96: "Protocol family not supported",
            97: "Address family not supported by protocol family",
            98: "Address already in use",
            99: "Address not available",
            100: "Network interface is not configured",
            101: "Network is unreachable",
            102: "Connection reset by network",
            103: "Connection aborted",
            104: "Connection reset by peer",
            105: "No buffer space available",
            106: "Socket is already connected",
            107: "Socket is not connected",
            108: "Can't send after socket shutdown",
            109: "Too many references",
            110: "Connection timed out",
            111: "Connection refused",
            112: "Host is down",
            113: "Host is unreachable",
            114: "Socket already connected",
            115: "Connection already in progress",
            116: "Stale file handle",
            122: "Quota exceeded",
            123: "No medium (in tape drive)",
            125: "Operation canceled",
            130: "Previous owner died",
            131: "State not recoverable"
        }
          , nb = []
          , qb = {
            open: function(e) {
                var t = nb[e.g.rdev];
                if (!t)
                    throw new O(M.ba);
                e.tty = t,
                e.seekable = !1
            },
            close: function(e) {
                e.tty.L.flush(e.tty)
            },
            flush: function(e) {
                e.tty.L.flush(e.tty)
            },
            read: function(e, t, n, r) {
                if (!e.tty || !e.tty.L.Ba)
                    throw new O(M.sa);
                for (var i = 0, o = 0; o < r; o++) {
                    var a;
                    try {
                        a = e.tty.L.Ba(e.tty)
                    } catch (s) {
                        throw new O(M.F)
                    }
                    if (void 0 === a && 0 === i)
                        throw new O(M.oa);
                    if (null === a || void 0 === a)
                        break;
                    i++,
                    t[n + o] = a
                }
                return i && (e.g.timestamp = Date.now()),
                i
            },
            write: function(e, t, n, r) {
                if (!e.tty || !e.tty.L.ja)
                    throw new O(M.sa);
                for (var i = 0; i < r; i++)
                    try {
                        e.tty.L.ja(e.tty, t[n + i])
                    } catch (o) {
                        throw new O(M.F)
                    }
                return r && (e.g.timestamp = Date.now()),
                i
            }
        }
          , rb = {
            Ba: function(e) {
                if (!e.input.length) {
                    var t = null ;
                    if ("undefined" != typeof window && "function" == typeof window.prompt ? (t = window.prompt("Input: "),
                    null !== t && (t += "\n")) : "function" == typeof readline && (t = readline(),
                    null !== t && (t += "\n")),
                    !t)
                        return null ;
                    e.input = Va(t, !0)
                }
                return e.input.shift()
            },
            ja: function(t, n) {
                null === n || 10 === n ? (e.print(za(t.output, 0)),
                t.output = []) : 0 != n && t.output.push(n)
            },
            flush: function(t) {
                t.output && 0 < t.output.length && (e.print(za(t.output, 0)),
                t.output = [])
            }
        }
          , sb = {
            ja: function(t, n) {
                null === n || 10 === n ? (e.printErr(za(t.output, 0)),
                t.output = []) : 0 != n && t.output.push(n)
            },
            flush: function(t) {
                t.output && 0 < t.output.length && (e.printErr(za(t.output, 0)),
                t.output = [])
            }
        }
          , P = {
            q: null ,
            A: function() {
                return P.createNode(null , "/", 16895, 0)
            },
            createNode: function(e, t, n, r) {
                if (24576 === (61440 & n) || 4096 === (61440 & n))
                    throw new O(M.G);
                return P.q || (P.q = {
                    dir: {
                        g: {
                            D: P.k.D,
                            p: P.k.p,
                            lookup: P.k.lookup,
                            V: P.k.V,
                            rename: P.k.rename,
                            unlink: P.k.unlink,
                            rmdir: P.k.rmdir,
                            readdir: P.k.readdir,
                            symlink: P.k.symlink
                        },
                        stream: {
                            I: P.n.I
                        }
                    },
                    file: {
                        g: {
                            D: P.k.D,
                            p: P.k.p
                        },
                        stream: {
                            I: P.n.I,
                            read: P.n.read,
                            write: P.n.write,
                            ta: P.n.ta,
                            Ea: P.n.Ea,
                            Ga: P.n.Ga
                        }
                    },
                    link: {
                        g: {
                            D: P.k.D,
                            p: P.k.p,
                            readlink: P.k.readlink
                        },
                        stream: {}
                    },
                    va: {
                        g: {
                            D: P.k.D,
                            p: P.k.p
                        },
                        stream: tb
                    }
                }),
                n = ub(e, t, n, r),
                16384 === (61440 & n.mode) ? (n.k = P.q.dir.g,
                n.n = P.q.dir.stream,
                n.e = {}) : 32768 === (61440 & n.mode) ? (n.k = P.q.file.g,
                n.n = P.q.file.stream,
                n.o = 0,
                n.e = null ) : 40960 === (61440 & n.mode) ? (n.k = P.q.link.g,
                n.n = P.q.link.stream) : 8192 === (61440 & n.mode) && (n.k = P.q.va.g,
                n.n = P.q.va.stream),
                n.timestamp = Date.now(),
                e && (e.e[t] = n),
                n
            },
            Sa: function(e) {
                if (e.e && e.e.subarray) {
                    for (var t = [], n = 0; n < e.o; ++n)
                        t.push(e.e[n]);
                    return t
                }
                return e.e
            },
            qd: function(e) {
                return e.e ? e.e.subarray ? e.e.subarray(0, e.o) : new Uint8Array(e.e) : new Uint8Array
            },
            ya: function(e, t) {
                if (e.e && e.e.subarray && t > e.e.length && (e.e = P.Sa(e),
                e.o = e.e.length),
                !e.e || e.e.subarray) {
                    var n = e.e ? e.e.buffer.byteLength : 0;
                    n >= t || (t = Math.max(t, n * (1048576 > n ? 2 : 1.125) | 0),
                    0 != n && (t = Math.max(t, 256)),
                    n = e.e,
                    e.e = new Uint8Array(t),
                    0 < e.o && e.e.set(n.subarray(0, e.o), 0))
                } else
                    for (!e.e && 0 < t && (e.e = []); e.e.length < t; )
                        e.e.push(0)
            },
            ab: function(e, t) {
                if (e.o != t)
                    if (0 == t)
                        e.e = null ,
                        e.o = 0;
                    else {
                        if (!e.e || e.e.subarray) {
                            var n = e.e;
                            e.e = new Uint8Array(new ArrayBuffer(t)),
                            n && e.e.set(n.subarray(0, Math.min(t, e.o)))
                        } else if (e.e || (e.e = []),
                        e.e.length > t)
                            e.e.length = t;
                        else
                            for (; e.e.length < t; )
                                e.e.push(0);
                        e.o = t
                    }
            },
            k: {
                D: function(e) {
                    var t = {};
                    return t.dev = 8192 === (61440 & e.mode) ? e.id : 1,
                    t.ino = e.id,
                    t.mode = e.mode,
                    t.nlink = 1,
                    t.uid = 0,
                    t.gid = 0,
                    t.rdev = e.rdev,
                    16384 === (61440 & e.mode) ? t.size = 4096 : 32768 === (61440 & e.mode) ? t.size = e.o : 40960 === (61440 & e.mode) ? t.size = e.link.length : t.size = 0,
                    t.atime = new Date(e.timestamp),
                    t.mtime = new Date(e.timestamp),
                    t.ctime = new Date(e.timestamp),
                    t.Pa = 4096,
                    t.blocks = Math.ceil(t.size / t.Pa),
                    t
                },
                p: function(e, t) {
                    void 0 !== t.mode && (e.mode = t.mode),
                    void 0 !== t.timestamp && (e.timestamp = t.timestamp),
                    void 0 !== t.size && P.ab(e, t.size)
                },
                lookup: function() {
                    throw vb[M.B]
                },
                V: function(e, t, n, r) {
                    return P.createNode(e, t, n, r)
                },
                rename: function(e, t, n) {
                    if (16384 === (61440 & e.mode)) {
                        var r;
                        try {
                            r = wb(t, n)
                        } catch (i) {}
                        if (r)
                            for (var o in r.e)
                                throw new O(M.ra)
                    }
                    delete e.parent.e[e.name],
                    e.name = n,
                    t.e[n] = e,
                    e.parent = t
                },
                unlink: function(e, t) {
                    delete e.e[t]
                },
                rmdir: function(e, t) {
                    var n, r = wb(e, t);
                    for (n in r.e)
                        throw new O(M.ra);
                    delete e.e[t]
                },
                readdir: function(e) {
                    var t, n = [".", ".."];
                    for (t in e.e)
                        e.e.hasOwnProperty(t) && n.push(t);
                    return n
                },
                symlink: function(e, t, n) {
                    return e = P.createNode(e, t, 41471, 0),
                    e.link = n,
                    e
                },
                readlink: function(e) {
                    if (40960 !== (61440 & e.mode))
                        throw new O(M.u);
                    return e.link
                }
            },
            n: {
                read: function(e, t, n, r, i) {
                    var o = e.g.e;
                    if (i >= e.g.o)
                        return 0;
                    if (e = Math.min(e.g.o - i, r),
                    assert(0 <= e),
                    8 < e && o.subarray)
                        t.set(o.subarray(i, i + e), n);
                    else
                        for (r = 0; r < e; r++)
                            t[n + r] = o[i + r];
                    return e
                },
                write: function(e, t, n, r, i, o) {
                    if (!r)
                        return 0;
                    if (e = e.g,
                    e.timestamp = Date.now(),
                    t.subarray && (!e.e || e.e.subarray)) {
                        if (o)
                            return e.e = t.subarray(n, n + r),
                            e.o = r;
                        if (0 === e.o && 0 === i)
                            return e.e = new Uint8Array(t.subarray(n, n + r)),
                            e.o = r;
                        if (i + r <= e.o)
                            return e.e.set(t.subarray(n, n + r), i),
                            r
                    }
                    if (P.ya(e, i + r),
                    e.e.subarray && t.subarray)
                        e.e.set(t.subarray(n, n + r), i);
                    else
                        for (o = 0; o < r; o++)
                            e.e[i + o] = t[n + o];
                    return e.o = Math.max(e.o, i + r),
                    r
                },
                I: function(e, t, n) {
                    if (1 === n ? t += e.position : 2 === n && 32768 === (61440 & e.g.mode) && (t += e.g.o),
                    0 > t)
                        throw new O(M.u);
                    return t
                },
                ta: function(e, t, n) {
                    P.ya(e.g, t + n),
                    e.g.o = Math.max(e.g.o, t + n)
                },
                Ea: function(e, t, n, r, i, o, a) {
                    if (32768 !== (61440 & e.g.mode))
                        throw new O(M.ba);
                    if (n = e.g.e,
                    2 & a || n.buffer !== t && n.buffer !== t.buffer) {
                        if ((0 < i || i + r < e.g.o) && (n = n.subarray ? n.subarray(i, i + r) : Array.prototype.slice.call(n, i, i + r)),
                        e = !0,
                        r = ua(r),
                        !r)
                            throw new O(M.Ka);
                        t.set(n, r)
                    } else
                        e = !1,
                        r = n.byteOffset;
                    return {
                        Cd: r,
                        gd: e
                    }
                },
                Ga: function(e, t, n, r, i) {
                    if (32768 !== (61440 & e.g.mode))
                        throw new O(M.ba);
                    return 2 & i ? 0 : (P.n.write(e, t, 0, r, n, !1),
                    0)
                }
            }
        };
        G(1, "i32*", 2),
        G(1, "i32*", 2),
        G(1, "i32*", 2);
        var xb = null , yb = [null ], zb = [], Ab = 1, R = null , Cb = !0, S = {}, O = null , vb = {}, Ib = {
            r: 0,
            rs: 1052672,
            "r+": 2,
            w: 577,
            wx: 705,
            xw: 705,
            "w+": 578,
            "wx+": 706,
            "xw+": 706,
            a: 1089,
            ax: 1217,
            xa: 1217,
            "a+": 1090,
            "ax+": 1218,
            "xa+": 1218
        }, tb = {
            open: function(e) {
                e.n = yb[e.g.rdev].n,
                e.n.open && e.n.open(e)
            },
            I: function() {
                throw new O(M.da)
            }
        }, Zb, dc = {}, Hb, Mb, Ub, ec = 0;
        e._memcpy = gc;
        var Y = null , mc = "", qc = 0, kc = null , pc = 0, ic = 0, jc = 0, uc = 0, rc = [], wc = {}, lc, sc, yc = !1, zc = !1, Ac = [], Jc = !1, Kc = void 0, Lc = void 0, Rc = 0, Vc = [], Cc, Dc, Ec, Fc, Qc;
        Yb(),
        R = Array(4096),
        Nb(P, "/"),
        V("/tmp"),
        V("/home"),
        V("/home/web_user"),
        function() {
            V("/dev"),
            pb(259, {
                read: function() {
                    return 0
                },
                write: function(e, t, n, r) {
                    return r
                }
            }),
            Qb("/dev/null", 259),
            ob(1280, rb),
            ob(1536, sb),
            Qb("/dev/tty", 1280),
            Qb("/dev/tty1", 1536);
            var e;
            if ("undefined" != typeof crypto) {
                var t = new Uint8Array(1);
                e = function() {
                    return crypto.getRandomValues(t),
                    t[0]
                }
            } else
                e = function() {
                    return 256 * Math.random() | 0
                }
                ;
            W("/dev", "random", e),
            W("/dev", "urandom", e),
            V("/dev/shm"),
            V("/dev/shm/tmp")
        }(),
        V("/proc"),
        V("/proc/self"),
        V("/proc/self/fd"),
        Nb({
            A: function() {
                var e = ub("/proc/self", "fd", 16895, 73);
                return e.k = {
                    lookup: function(e, t) {
                        var n = zb[+t];
                        if (!n)
                            throw new O(M.Z);
                        var r = {
                            parent: null ,
                            A: {
                                Fa: "fake"
                            },
                            k: {
                                readlink: function() {
                                    return n.path
                                }
                            }
                        };
                        return r.parent = r
                    }
                },
                e
            }
        }, "/proc/self/fd"),
        Qa.unshift(function() {
            if (!e.noFSInit && !Zb) {
                assert(!Zb, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),
                Zb = !0,
                Yb(),
                e.stdin = e.stdin,
                e.stdout = e.stdout,
                e.stderr = e.stderr,
                e.stdin ? W("/dev", "stdin", e.stdin) : Rb("/dev/tty", "/dev/stdin"),
                e.stdout ? W("/dev", "stdout", null , e.stdout) : Rb("/dev/tty", "/dev/stdout"),
                e.stderr ? W("/dev", "stderr", null , e.stderr) : Rb("/dev/tty1", "/dev/stderr");
                var t = Tb("/dev/stdin", "r");
                assert(0 === t.fd, "invalid handle for stdin (" + t.fd + ")"),
                t = Tb("/dev/stdout", "w"),
                assert(1 === t.fd, "invalid handle for stdout (" + t.fd + ")"),
                t = Tb("/dev/stderr", "w"),
                assert(2 === t.fd, "invalid handle for stderr (" + t.fd + ")")
            }
        }),
        Ra.push(function() {
            Cb = !1
        }),
        K.push(function() {
            Zb = !1;
            var t = e._fflush;
            for (t && t(0),
            t = 0; t < zb.length; t++) {
                var n = zb[t];
                n && Vb(n)
            }
        }),
        e.FS_createFolder = function(e, t, n, r) {
            return e = N(("string" == typeof e ? e : U(e)) + "/" + t),
            V(e, $b(n, r))
        }
        ,
        e.FS_createPath = function(e, t) {
            e = "string" == typeof e ? e : U(e);
            for (var n = t.split("/").reverse(); n.length; ) {
                var r = n.pop();
                if (r) {
                    var i = N(e + "/" + r);
                    try {
                        V(i)
                    } catch (o) {}
                    e = i
                }
            }
            return i
        }
        ,
        e.FS_createDataFile = bc,
        e.FS_createPreloadedFile = function(t, n, r, i, o, a, s, c, u, f) {
            function l(r) {
                function l(e) {
                    f && f(),
                    c || bc(t, n, e, i, o, u),
                    a && a(),
                    Za()
                }
                var d = !1;
                e.preloadPlugins.forEach(function(e) {
                    !d && e.canHandle(h) && (e.handle(r, h, l, function() {
                        s && s(),
                        Za()
                    }),
                    d = !0)
                }),
                d || l(r)
            }
            Bc();
            var h = n ? mb(N(t + "/" + n)) : t;
            Ya(),
            "string" == typeof r ? Uc(r, function(e) {
                l(e)
            }, s) : l(r)
        }
        ,
        e.FS_createLazyFile = function(e, t, n, r, i) {
            if ("undefined" != typeof XMLHttpRequest)
                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            n = {
                Ca: !1,
                url: n
            };
            var o = ac(e, t, r, i);
            n.e ? o.e = n.e : n.url && (o.e = null ,
            o.url = n.url),
            Object.defineProperty(o, "usedBytes", {
                get: function() {
                    return this.e.length
                }
            });
            var a = {};
            return Object.keys(o.n).forEach(function(e) {
                var t = o.n[e];
                a[e] = function() {
                    if (!cc(o))
                        throw new O(M.F);
                    return t.apply(null , arguments)
                }
            }),
            a.read = function(e, t, n, r, i) {
                if (!cc(o))
                    throw new O(M.F);
                if (e = e.g.e,
                i >= e.length)
                    return 0;
                if (r = Math.min(e.length - i, r),
                assert(0 <= r),
                e.slice)
                    for (var a = 0; a < r; a++)
                        t[n + a] = e[i + a];
                else
                    for (a = 0; a < r; a++)
                        t[n + a] = e.get(i + a);
                return r
            }
            ,
            o.n = a,
            o
        }
        ,
        e.FS_createLink = function(e, t, n) {
            return e = N(("string" == typeof e ? e : U(e)) + "/" + t),
            Rb(n, e)
        }
        ,
        e.FS_createDevice = W,
        e.FS_unlink = function(e) {
            var t, n = T(e, {
                parent: !0
            }).g, r = lb(e), i = wb(n, r);
            e: {
                try {
                    t = wb(n, r)
                } catch (o) {
                    t = o.Q;
                    break e
                }
                var a = Gb(n, "wx");
                t = a ? a : 16384 === (61440 & t.mode) ? M.N : 0
            }
            if (t)
                throw t === M.N && (t = M.G),
                new O(t);
            if (!n.k.unlink)
                throw new O(M.G);
            if (i.R)
                throw new O(M.$);
            try {
                S.willDeletePath && S.willDeletePath(e)
            } catch (s) {
                console.log("FS.trackingDelegate['willDeletePath']('" + e + "') threw an exception: " + s.message)
            }
            if (n.k.unlink(n, r),
            n = Eb(i.parent.id, i.name),
            R[n] === i)
                R[n] = i.K;
            else
                for (n = R[n]; n; ) {
                    if (n.K === i) {
                        n.K = i.K;
                        break
                    }
                    n = n.K
                }
            try {
                S.onDeletePath && S.onDeletePath(e)
            } catch (c) {
                console.log("FS.trackingDelegate['onDeletePath']('" + e + "') threw an exception: " + c.message)
            }
        }
        ,
        Qa.unshift(function() {}),
        K.push(function() {}),
        e.requestFullScreen = function(e, t, n) {
            Mc(e, t, n)
        }
        ,
        e.requestAnimationFrame = function(e) {
            nc(e)
        }
        ,
        e.setCanvasSize = function(t, n, r) {
            Pc(e.canvas, t, n),
            r || Wc()
        }
        ,
        e.pauseMainLoop = function() {
            Y = null ,
            qc++
        }
        ,
        e.resumeMainLoop = function() {
            qc++;
            var e = ic
              , t = jc
              , n = kc;
            kc = null ,
            oc(n, 0, !1, pc, !0),
            hc(e, t),
            Y()
        }
        ,
        e.getUserMedia = function() {
            window.C || (window.C = navigator.getUserMedia || navigator.mozGetUserMedia),
            window.C(void 0)
        }
        ,
        e.createContext = function(e, t, n, r) {
            return Ic(e, t, n, r)
        }
        ,
        Ka = m = n.ea(p),
        va = !0,
        La = Ka + Na,
        Ma = v = n.ea(La),
        assert(Ma < w, "TOTAL_MEMORY not big enough for stack");
        var Xc = G([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 3);
        e.Na = {
            Math: Math,
            Int8Array: Int8Array,
            Int16Array: Int16Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array,
            Uint16Array: Uint16Array,
            Uint32Array: Uint32Array,
            Float32Array: Float32Array,
            Float64Array: Float64Array,
            NaN: NaN,
            Infinity: 1 / 0
        },
        e.Oa = {
            abort: z,
            assert: assert,
            invoke_ii: function(t, n) {
                try {
                    return e.dynCall_ii(t, n)
                } catch (r) {
                    if ("number" != typeof r && "longjmp" !== r)
                        throw r;
                    Z.setThrew(1, 0)
                }
            },
            invoke_iiii: function(t, n, r, i) {
                try {
                    return e.dynCall_iiii(t, n, r, i)
                } catch (o) {
                    if ("number" != typeof o && "longjmp" !== o)
                        throw o;
                    Z.setThrew(1, 0)
                }
            },
            invoke_vi: function(t, n) {
                try {
                    e.dynCall_vi(t, n)
                } catch (r) {
                    if ("number" != typeof r && "longjmp" !== r)
                        throw r;
                    Z.setThrew(1, 0)
                }
            },
            _pthread_cleanup_pop: function() {
                assert(eb.level == K.length, "cannot pop if something else added meanwhile!"),
                K.pop(),
                eb.level = K.length
            },
            ___lock: function() {},
            _emscripten_set_main_loop: oc,
            _pthread_self: function() {
                return 0
            },
            ___syscall6: function(e, t) {
                ec = t;
                try {
                    var n = fc();
                    return Vb(n),
                    0
                } catch (r) {
                    return "undefined" != typeof dc && r instanceof O || z(r),
                    -r.Q
                }
            },
            _emscripten_set_main_loop_timing: hc,
            _abort: function() {
                e.abort()
            },
            _sbrk: wa,
            _time: function(e) {
                var t = Date.now() / 1e3 | 0;
                return e && (F[e >> 2] = t),
                t
            },
            ___setErrNo: ib,
            _emscripten_memcpy_big: function(e, t, n) {
                return H.set(H.subarray(t, t + n), e),
                e
            },
            ___syscall54: function(e, t) {
                ec = t;
                try {
                    var n = fc()
                      , r = X();
                    switch (r) {
                    case 21505:
                        return n.tty ? 0 : -M.O;
                    case 21506:
                        return n.tty ? 0 : -M.O;
                    case 21519:
                        if (!n.tty)
                            return -M.O;
                        var i = X();
                        return F[i >> 2] = 0;
                    case 21520:
                        return n.tty ? -M.u : -M.O;
                    case 21531:
                        if (i = X(),
                        !n.n.Wa)
                            throw new O(M.O);
                        return n.n.Wa(n, r, i);
                    default:
                        z("bad ioctl syscall " + r)
                    }
                } catch (o) {
                    return "undefined" != typeof dc && o instanceof O || z(o),
                    -o.Q
                }
            },
            ___unlock: function() {},
            ___syscall140: function(e, t) {
                ec = t;
                try {
                    var n = fc()
                      , r = X()
                      , i = X()
                      , o = X()
                      , a = X();
                    return assert(0 === r),
                    Wb(n, i, a),
                    F[o >> 2] = n.position,
                    n.ia && 0 === i && 0 === a && (n.ia = null ),
                    0
                } catch (s) {
                    return "undefined" != typeof dc && s instanceof O || z(s),
                    -s.Q
                }
            },
            _pthread_cleanup_push: eb,
            _sysconf: function(e) {
                switch (e) {
                case 30:
                    return 4096;
                case 85:
                    return I / 4096;
                case 132:
                case 133:
                case 12:
                case 137:
                case 138:
                case 15:
                case 235:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 149:
                case 13:
                case 10:
                case 236:
                case 153:
                case 9:
                case 21:
                case 22:
                case 159:
                case 154:
                case 14:
                case 77:
                case 78:
                case 139:
                case 80:
                case 81:
                case 82:
                case 68:
                case 67:
                case 164:
                case 11:
                case 29:
                case 47:
                case 48:
                case 95:
                case 52:
                case 51:
                case 46:
                    return 200809;
                case 79:
                    return 0;
                case 27:
                case 246:
                case 127:
                case 128:
                case 23:
                case 24:
                case 160:
                case 161:
                case 181:
                case 182:
                case 242:
                case 183:
                case 184:
                case 243:
                case 244:
                case 245:
                case 165:
                case 178:
                case 179:
                case 49:
                case 50:
                case 168:
                case 169:
                case 175:
                case 170:
                case 171:
                case 172:
                case 97:
                case 76:
                case 32:
                case 173:
                case 35:
                    return -1;
                case 176:
                case 177:
                case 7:
                case 155:
                case 8:
                case 157:
                case 125:
                case 126:
                case 92:
                case 93:
                case 129:
                case 130:
                case 131:
                case 94:
                case 91:
                    return 1;
                case 74:
                case 60:
                case 69:
                case 70:
                case 4:
                    return 1024;
                case 31:
                case 42:
                case 72:
                    return 32;
                case 87:
                case 26:
                case 33:
                    return 2147483647;
                case 34:
                case 1:
                    return 47839;
                case 38:
                case 36:
                    return 99;
                case 43:
                case 37:
                    return 2048;
                case 0:
                    return 2097152;
                case 3:
                    return 65536;
                case 28:
                    return 32768;
                case 44:
                    return 32767;
                case 75:
                    return 16384;
                case 39:
                    return 1e3;
                case 89:
                    return 700;
                case 71:
                    return 256;
                case 40:
                    return 255;
                case 2:
                    return 100;
                case 180:
                    return 64;
                case 25:
                    return 20;
                case 5:
                    return 16;
                case 6:
                    return 6;
                case 73:
                    return 4;
                case 84:
                    return "object" == typeof navigator ? navigator.hardwareConcurrency || 1 : 1
                }
                return ib(M.u),
                -1
            },
            ___syscall146: function(e, t) {
                ec = t;
                try {
                    var n, r = fc(), i = X();
                    e: {
                        for (var o = X(), a = 0, s = 0; s < o; s++) {
                            var c = Xb(r, D, F[i + 8 * s >> 2], F[i + (8 * s + 4) >> 2], void 0);
                            if (0 > c) {
                                n = -1;
                                break e
                            }
                            a += c
                        }
                        n = a
                    }
                    return n
                } catch (u) {
                    return "undefined" != typeof dc && u instanceof O || z(u),
                    -u.Q
                }
            },
            STACKTOP: m,
            STACK_MAX: La,
            tempDoublePtr: $a,
            ABORT: A,
            cttz_i8: Xc
        };
        var Z = function(e, t, n) {
            "avoid using asm because chrome 47+ is broken";
            function r(e) {
                e = 0 | e;
                var t = 0;
                return t = W,
                W = W + e | 0,
                W = W + 15 & -16,
                0 | t
            }
            function i() {
                return 0 | W
            }
            function o(e) {
                e = 0 | e,
                W = e
            }
            function a(e, t) {
                e = 0 | e,
                t = 0 | t,
                W = e,
                Z = t
            }
            function s(e, t) {
                e = 0 | e,
                t = 0 | t,
                Q || (Q = e,
                $ = t)
            }
            function c(e) {
                e = 0 | e,
                ee = e
            }
            function u() {
                return 0 | ee
            }
            function f(e, t, n) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n;
                var r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0
                  , c = 0
                  , u = 0
                  , f = 0
                  , p = 0
                  , w = 0
                  , m = 0
                  , g = 0
                  , v = 0
                  , b = 0
                  , y = 0
                  , _ = 0
                  , k = 0
                  , x = 0
                  , A = 0
                  , S = 0
                  , P = 0
                  , C = 0
                  , F = 0
                  , R = 0
                  , N = 0
                  , q = 0
                  , j = 0
                  , B = 0
                  , U = 0
                  , z = 0
                  , G = 0
                  , V = 0
                  , Z = 0
                  , X = 0
                  , J = 0
                  , Q = 0
                  , $ = 0
                  , ne = 0
                  , re = 0
                  , ie = 0
                  , oe = 0
                  , ae = 0
                  , se = 0
                  , ce = 0
                  , ue = 0
                  , fe = 0
                  , le = 0
                  , he = 0
                  , de = 0
                  , pe = 0
                  , we = 0
                  , me = 0
                  , ge = 0
                  , ve = 0
                  , be = 0
                  , ye = 0
                  , _e = 0
                  , ke = 0
                  , xe = 0
                  , Ae = 0
                  , Se = 0
                  , Pe = 0
                  , Ce = 0
                  , Ee = 0
                  , Me = 0
                  , Oe = 0
                  , Te = 0
                  , De = 0
                  , Ie = 0
                  , Fe = 0
                  , Re = 0
                  , Ne = 0
                  , Le = 0
                  , qe = 0
                  , je = 0
                  , Be = 0
                  , Ue = 0
                  , ze = 0
                  , Ge = 0
                  , Ve = 0
                  , Ke = 0
                  , He = 0
                  , Ye = 0
                  , We = 0
                  , Ze = 0
                  , Xe = 0
                  , Je = 0
                  , Qe = 0
                  , $e = 0
                  , et = 0
                  , tt = 0
                  , nt = 0
                  , rt = 0
                  , it = 0
                  , ot = 0
                  , at = 0
                  , st = 0
                  , ct = 0
                  , ut = 0
                  , ft = 0
                  , lt = 0
                  , ht = 0
                  , dt = 0
                  , pt = 0
                  , wt = 0
                  , mt = 0
                  , gt = 0
                  , vt = 0
                  , bt = 0
                  , yt = 0
                  , _t = 0
                  , kt = 0
                  , xt = 0
                  , At = 0
                  , St = 0
                  , Pt = 0
                  , Ct = 0
                  , Et = 0
                  , Mt = 0
                  , Ot = 0
                  , Tt = 0
                  , Dt = 0
                  , It = 0
                  , Ft = 0
                  , Rt = 0
                  , Nt = 0
                  , Lt = 0
                  , qt = 0
                  , jt = 0
                  , Bt = 0
                  , Ut = 0
                  , zt = 0
                  , Gt = 0
                  , Vt = 0
                  , Kt = 0
                  , Ht = 0
                  , Yt = 0
                  , Wt = 0
                  , Zt = 0
                  , Xt = 0
                  , Jt = 0
                  , Qt = 0
                  , $t = 0
                  , en = 0
                  , tn = 0
                  , nn = 0
                  , rn = 0
                  , on = 0
                  , an = 0
                  , sn = 0
                  , cn = 0
                  , un = 0
                  , fn = 0
                  , ln = 0
                  , hn = 0
                  , dn = 0
                  , pn = 0
                  , wn = 0
                  , mn = 0
                  , gn = 0
                  , vn = 0
                  , bn = 0
                  , yn = 0
                  , _n = 0
                  , kn = 0
                  , xn = 0
                  , An = 0
                  , Sn = 0
                  , Pn = 0
                  , Cn = 0
                  , En = 0
                  , Mn = 0
                  , On = 0
                  , Tn = 0
                  , Dn = 0
                  , In = 0
                  , Fn = 0;
                r = W,
                W = W + 2640 | 0,
                i = r + 2456 | 0,
                o = r + 2304 | 0,
                a = r + 2152 | 0,
                s = r + 2e3 | 0,
                c = r + 1848 | 0,
                u = r + 1696 | 0,
                f = r + 1544 | 0,
                p = r + 1392 | 0,
                w = r + 1240 | 0,
                m = r + 1088 | 0,
                g = r + 936 | 0,
                v = r + 784 | 0,
                b = r + 632 | 0,
                y = r + 480 | 0,
                _ = r + 328 | 0,
                k = r + 248 | 0,
                x = r + 168 | 0,
                A = r + 80 | 0,
                S = r,
                P = r + 2608 | 0,
                C = P,
                F = t,
                t = C + 32 | 0;
                do
                    K[C >> 0] = 0 | K[F >> 0],
                    C = C + 1 | 0,
                    F = F + 1 | 0;
                while ((0 | C) < (0 | t));K[P >> 0] = 248 & (0 | Y[P >> 0]),
                R = P + 31 | 0,
                K[R >> 0] = 63 & (0 | Y[R >> 0]) | 64,
                R = 0 | Y[n >> 0],
                N = 0 | I(0 | Y[n + 1 >> 0] | 0, 0, 8),
                q = ee,
                j = 0 | I(0 | Y[n + 2 >> 0] | 0, 0, 16),
                B = q | ee,
                q = 0 | Y[n + 3 >> 0],
                U = 0 | I(0 | q, 0, 24),
                z = k,
                H[z >> 2] = N | R | j | 50331648 & U,
                H[z + 4 >> 2] = B,
                B = 0 | I(0 | Y[n + 4 >> 0] | 0, 0, 8),
                z = ee,
                U = 0 | I(0 | Y[n + 5 >> 0] | 0, 0, 16),
                j = z | ee,
                z = 0 | Y[n + 6 >> 0],
                R = 0 | I(0 | z, 0, 24),
                N = 0 | D(B | q | U | R | 0, j | ee | 0, 2),
                j = k + 8 | 0,
                H[j >> 2] = 33554431 & N,
                H[j + 4 >> 2] = 0,
                j = 0 | I(0 | Y[n + 7 >> 0] | 0, 0, 8),
                N = ee,
                R = 0 | I(0 | Y[n + 8 >> 0] | 0, 0, 16),
                U = N | ee,
                N = 0 | Y[n + 9 >> 0],
                q = 0 | I(0 | N, 0, 24),
                B = 0 | D(j | z | R | q | 0, U | ee | 0, 3),
                U = k + 16 | 0,
                H[U >> 2] = 67108863 & B,
                H[U + 4 >> 2] = 0,
                U = 0 | I(0 | Y[n + 10 >> 0] | 0, 0, 8),
                B = ee,
                q = 0 | I(0 | Y[n + 11 >> 0] | 0, 0, 16),
                R = B | ee,
                B = 0 | Y[n + 12 >> 0],
                z = 0 | I(0 | B, 0, 24),
                j = 0 | D(U | N | q | z | 0, R | ee | 0, 5),
                R = k + 24 | 0,
                H[R >> 2] = 33554431 & j,
                H[R + 4 >> 2] = 0,
                R = 0 | I(0 | Y[n + 13 >> 0] | 0, 0, 8),
                j = ee,
                z = 0 | I(0 | Y[n + 14 >> 0] | 0, 0, 16),
                q = j | ee,
                j = 0 | I(0 | Y[n + 15 >> 0] | 0, 0, 24),
                N = 0 | D(R | B | z | j | 0, q | ee | 0, 6),
                q = k + 32 | 0,
                H[q >> 2] = 67108863 & N,
                H[q + 4 >> 2] = 0,
                q = 0 | Y[n + 16 >> 0],
                N = 0 | I(0 | Y[n + 17 >> 0] | 0, 0, 8),
                j = ee,
                z = 0 | I(0 | Y[n + 18 >> 0] | 0, 0, 16),
                B = j | ee,
                j = 0 | Y[n + 19 >> 0],
                R = 0 | I(0 | j, 0, 24),
                U = k + 40 | 0,
                H[U >> 2] = N | q | z | 16777216 & R,
                H[U + 4 >> 2] = B,
                B = 0 | I(0 | Y[n + 20 >> 0] | 0, 0, 8),
                U = ee,
                R = 0 | I(0 | Y[n + 21 >> 0] | 0, 0, 16),
                z = U | ee,
                U = 0 | Y[n + 22 >> 0],
                q = 0 | I(0 | U, 0, 24),
                N = 0 | D(B | j | R | q | 0, z | ee | 0, 1),
                z = k + 48 | 0,
                H[z >> 2] = 67108863 & N,
                H[z + 4 >> 2] = 0,
                z = 0 | I(0 | Y[n + 23 >> 0] | 0, 0, 8),
                N = ee,
                q = 0 | I(0 | Y[n + 24 >> 0] | 0, 0, 16),
                R = N | ee,
                N = 0 | Y[n + 25 >> 0],
                j = 0 | I(0 | N, 0, 24),
                B = 0 | D(z | U | q | j | 0, R | ee | 0, 3),
                R = k + 56 | 0,
                H[R >> 2] = 33554431 & B,
                H[R + 4 >> 2] = 0,
                R = 0 | I(0 | Y[n + 26 >> 0] | 0, 0, 8),
                B = ee,
                j = 0 | I(0 | Y[n + 27 >> 0] | 0, 0, 16),
                q = B | ee,
                B = 0 | Y[n + 28 >> 0],
                U = 0 | I(0 | B, 0, 24),
                z = 0 | D(R | N | j | U | 0, q | ee | 0, 4),
                q = k + 64 | 0,
                H[q >> 2] = 67108863 & z,
                H[q + 4 >> 2] = 0,
                q = 0 | I(0 | Y[n + 29 >> 0] | 0, 0, 8),
                z = ee,
                U = 0 | I(0 | Y[n + 30 >> 0] | 0, 0, 16),
                j = z | ee,
                z = 0 | I(0 | Y[n + 31 >> 0] | 0, 0, 24),
                n = 0 | D(q | B | U | z | 0, j | ee | 0, 6),
                j = k + 72 | 0,
                H[j >> 2] = 33554431 & n,
                H[j + 4 >> 2] = 0,
                0 | T(0 | w, 0, 152),
                j = w,
                H[j >> 2] = 1,
                H[j + 4 >> 2] = 0,
                0 | T(0 | m, 0, 152),
                j = m,
                H[j >> 2] = 1,
                H[j + 4 >> 2] = 0,
                0 | T(0 | g, 0, 152),
                0 | T(0 | v, 0, 152),
                0 | T(0 | b, 0, 152),
                j = b,
                H[j >> 2] = 1,
                H[j + 4 >> 2] = 0,
                0 | T(0 | y, 0, 152),
                0 | T(0 | _, 0, 152),
                j = _,
                H[j >> 2] = 1,
                H[j + 4 >> 2] = 0,
                C = p + 80 | 0,
                t = C + 72 | 0;
                do
                    H[C >> 2] = 0,
                    C = C + 4 | 0;
                while ((0 | C) < (0 | t));C = p,
                F = k,
                t = C + 80 | 0;
                do
                    H[C >> 2] = H[F >> 2],
                    C = C + 4 | 0,
                    F = F + 4 | 0;
                while ((0 | C) < (0 | t));for (j = s + 144 | 0,
                n = s + 64 | 0,
                z = s + 136 | 0,
                U = s + 56 | 0,
                B = s + 128 | 0,
                q = s + 48 | 0,
                N = s + 120 | 0,
                R = s + 40 | 0,
                G = s + 112 | 0,
                V = s + 32 | 0,
                Z = s + 104 | 0,
                X = s + 24 | 0,
                J = s + 96 | 0,
                Q = s + 16 | 0,
                $ = s + 88 | 0,
                ne = s + 8 | 0,
                re = s + 80 | 0,
                ie = c + 144 | 0,
                oe = c + 64 | 0,
                ae = c + 136 | 0,
                se = c + 56 | 0,
                ce = c + 128 | 0,
                ue = c + 48 | 0,
                fe = c + 120 | 0,
                le = c + 40 | 0,
                he = c + 112 | 0,
                de = c + 32 | 0,
                pe = c + 104 | 0,
                we = c + 24 | 0,
                me = c + 96 | 0,
                ge = c + 16 | 0,
                ve = c + 88 | 0,
                be = c + 8 | 0,
                ye = c + 80 | 0,
                _e = s + 72 | 0,
                ke = c + 72 | 0,
                xe = o + 8 | 0,
                Ae = a + 8 | 0,
                Se = o + 16 | 0,
                Pe = a + 16 | 0,
                Ce = o + 24 | 0,
                Ee = a + 24 | 0,
                Me = o + 32 | 0,
                Oe = a + 32 | 0,
                Te = o + 40 | 0,
                De = a + 40 | 0,
                Ie = o + 48 | 0,
                Fe = a + 48 | 0,
                Re = o + 56 | 0,
                Ne = a + 56 | 0,
                Le = o + 64 | 0,
                qe = a + 64 | 0,
                je = o + 72 | 0,
                Be = a + 72 | 0,
                Ue = i + 80 | 0,
                ze = i + 8 | 0,
                Ge = i + 16 | 0,
                Ve = i + 24 | 0,
                Ke = i + 32 | 0,
                He = i + 40 | 0,
                Ye = i + 48 | 0,
                We = i + 56 | 0,
                Ze = i + 64 | 0,
                Xe = i + 72 | 0,
                Je = 0,
                Qe = p,
                $e = v,
                v = w,
                et = b,
                b = m,
                tt = y,
                y = g,
                g = _; ; ) {
                    for (_ = 0 | K[P + (31 - Je) >> 0],
                    nt = 0,
                    rt = Qe,
                    it = $e,
                    ot = v,
                    at = et,
                    st = b,
                    ct = tt,
                    ut = y,
                    ft = g; ; ) {
                        lt = 255 & _,
                        ht = 0 | M(0, 0, lt >>> 7 | 0, 0),
                        dt = ee,
                        pt = 0;
                        do
                            wt = st + (pt << 3) | 0,
                            mt = wt,
                            gt = 0 | H[mt >> 2],
                            vt = 0 | H[mt + 4 >> 2],
                            mt = rt + (pt << 3) | 0,
                            bt = mt,
                            yt = 0 | H[bt >> 2],
                            _t = 0 | H[bt + 4 >> 2],
                            bt = (yt ^ gt) & ht,
                            kt = (_t ^ vt) & dt,
                            vt = 0 | E(0, bt ^ gt | 0, 32),
                            gt = wt,
                            H[gt >> 2] = vt,
                            H[gt + 4 >> 2] = ee,
                            gt = 0 | E(0, bt ^ yt | 0, 32),
                            yt = mt,
                            H[yt >> 2] = gt,
                            H[yt + 4 >> 2] = ee,
                            pt = pt + 1 | 0;
                        while (10 != (0 | pt));xt = 0;
                        do
                            pt = ut + (xt << 3) | 0,
                            yt = pt,
                            gt = 0 | H[yt >> 2],
                            mt = 0 | H[yt + 4 >> 2],
                            yt = ot + (xt << 3) | 0,
                            bt = yt,
                            vt = 0 | H[bt >> 2],
                            wt = 0 | H[bt + 4 >> 2],
                            bt = (vt ^ gt) & ht,
                            _t = (wt ^ mt) & dt,
                            mt = 0 | E(0, bt ^ gt | 0, 32),
                            gt = pt,
                            H[gt >> 2] = mt,
                            H[gt + 4 >> 2] = ee,
                            gt = 0 | E(0, bt ^ vt | 0, 32),
                            vt = yt,
                            H[vt >> 2] = gt,
                            H[vt + 4 >> 2] = ee,
                            xt = xt + 1 | 0;
                        while (10 != (0 | xt));vt = st,
                        gt = 0 | H[vt >> 2],
                        yt = 0 | H[vt + 4 >> 2],
                        vt = st + 8 | 0,
                        bt = vt,
                        mt = 0 | H[bt >> 2],
                        pt = 0 | H[bt + 4 >> 2],
                        bt = st + 16 | 0,
                        wt = bt,
                        _t = 0 | H[wt >> 2],
                        kt = 0 | H[wt + 4 >> 2],
                        wt = st + 24 | 0,
                        At = wt,
                        St = 0 | H[At >> 2],
                        Pt = 0 | H[At + 4 >> 2],
                        At = st + 32 | 0,
                        Ct = At,
                        Et = 0 | H[Ct >> 2],
                        Mt = 0 | H[Ct + 4 >> 2],
                        Ct = st + 40 | 0,
                        Ot = Ct,
                        Tt = 0 | H[Ot >> 2],
                        Dt = 0 | H[Ot + 4 >> 2],
                        Ot = st + 48 | 0,
                        It = Ot,
                        Ft = 0 | H[It >> 2],
                        Rt = 0 | H[It + 4 >> 2],
                        It = st + 56 | 0,
                        Nt = It,
                        Lt = 0 | H[Nt >> 2],
                        qt = 0 | H[Nt + 4 >> 2],
                        Nt = st + 64 | 0,
                        jt = Nt,
                        Bt = 0 | H[jt >> 2],
                        Ut = 0 | H[jt + 4 >> 2],
                        jt = st + 72 | 0,
                        zt = jt,
                        Gt = 0 | H[zt >> 2],
                        Vt = 0 | H[zt + 4 >> 2],
                        zt = ut,
                        Kt = 0 | H[zt >> 2],
                        Ht = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | Kt, 0 | Ht, 0 | gt, 0 | yt),
                        Yt = st,
                        H[Yt >> 2] = zt,
                        H[Yt + 4 >> 2] = ee,
                        Yt = ut + 8 | 0,
                        zt = Yt,
                        Wt = 0 | H[zt >> 2],
                        Zt = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | Wt, 0 | Zt, 0 | mt, 0 | pt),
                        Xt = vt,
                        H[Xt >> 2] = zt,
                        H[Xt + 4 >> 2] = ee,
                        Xt = ut + 16 | 0,
                        zt = Xt,
                        vt = 0 | H[zt >> 2],
                        Jt = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | vt, 0 | Jt, 0 | _t, 0 | kt),
                        Qt = bt,
                        H[Qt >> 2] = zt,
                        H[Qt + 4 >> 2] = ee,
                        Qt = ut + 24 | 0,
                        zt = Qt,
                        bt = 0 | H[zt >> 2],
                        $t = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | bt, 0 | $t, 0 | St, 0 | Pt),
                        en = wt,
                        H[en >> 2] = zt,
                        H[en + 4 >> 2] = ee,
                        en = ut + 32 | 0,
                        zt = en,
                        wt = 0 | H[zt >> 2],
                        tn = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | wt, 0 | tn, 0 | Et, 0 | Mt),
                        nn = At,
                        H[nn >> 2] = zt,
                        H[nn + 4 >> 2] = ee,
                        nn = ut + 40 | 0,
                        zt = nn,
                        At = 0 | H[zt >> 2],
                        rn = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | At, 0 | rn, 0 | Tt, 0 | Dt),
                        on = Ct,
                        H[on >> 2] = zt,
                        H[on + 4 >> 2] = ee,
                        on = ut + 48 | 0,
                        zt = on,
                        Ct = 0 | H[zt >> 2],
                        an = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | Ct, 0 | an, 0 | Ft, 0 | Rt),
                        sn = Ot,
                        H[sn >> 2] = zt,
                        H[sn + 4 >> 2] = ee,
                        sn = ut + 56 | 0,
                        zt = sn,
                        Ot = 0 | H[zt >> 2],
                        cn = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | Ot, 0 | cn, 0 | Lt, 0 | qt),
                        un = It,
                        H[un >> 2] = zt,
                        H[un + 4 >> 2] = ee,
                        un = ut + 64 | 0,
                        zt = un,
                        It = 0 | H[zt >> 2],
                        fn = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | It, 0 | fn, 0 | Bt, 0 | Ut),
                        ln = Nt,
                        H[ln >> 2] = zt,
                        H[ln + 4 >> 2] = ee,
                        ln = ut + 72 | 0,
                        zt = ln,
                        Nt = 0 | H[zt >> 2],
                        hn = 0 | H[zt + 4 >> 2],
                        zt = 0 | O(0 | Nt, 0 | hn, 0 | Gt, 0 | Vt),
                        dn = jt,
                        H[dn >> 2] = zt,
                        H[dn + 4 >> 2] = ee,
                        dn = 0 | M(0 | gt, 0 | yt, 0 | Kt, 0 | Ht),
                        Ht = ut,
                        H[Ht >> 2] = dn,
                        H[Ht + 4 >> 2] = ee,
                        Ht = 0 | M(0 | mt, 0 | pt, 0 | Wt, 0 | Zt),
                        Zt = Yt,
                        H[Zt >> 2] = Ht,
                        H[Zt + 4 >> 2] = ee,
                        Zt = 0 | M(0 | _t, 0 | kt, 0 | vt, 0 | Jt),
                        Jt = Xt,
                        H[Jt >> 2] = Zt,
                        H[Jt + 4 >> 2] = ee,
                        Jt = 0 | M(0 | St, 0 | Pt, 0 | bt, 0 | $t),
                        $t = Qt,
                        H[$t >> 2] = Jt,
                        H[$t + 4 >> 2] = ee,
                        $t = 0 | M(0 | Et, 0 | Mt, 0 | wt, 0 | tn),
                        tn = en,
                        H[tn >> 2] = $t,
                        H[tn + 4 >> 2] = ee,
                        tn = 0 | M(0 | Tt, 0 | Dt, 0 | At, 0 | rn),
                        rn = nn,
                        H[rn >> 2] = tn,
                        H[rn + 4 >> 2] = ee,
                        rn = 0 | M(0 | Ft, 0 | Rt, 0 | Ct, 0 | an),
                        an = on,
                        H[an >> 2] = rn,
                        H[an + 4 >> 2] = ee,
                        an = 0 | M(0 | Lt, 0 | qt, 0 | Ot, 0 | cn),
                        cn = sn,
                        H[cn >> 2] = an,
                        H[cn + 4 >> 2] = ee,
                        cn = 0 | M(0 | Bt, 0 | Ut, 0 | It, 0 | fn),
                        fn = un,
                        H[fn >> 2] = cn,
                        H[fn + 4 >> 2] = ee,
                        fn = 0 | M(0 | Gt, 0 | Vt, 0 | Nt, 0 | hn),
                        hn = ln,
                        H[hn >> 2] = fn,
                        H[hn + 4 >> 2] = ee,
                        hn = rt,
                        fn = 0 | H[hn >> 2],
                        ln = 0 | H[hn + 4 >> 2],
                        hn = rt + 8 | 0,
                        Nt = hn,
                        Vt = 0 | H[Nt >> 2],
                        Gt = 0 | H[Nt + 4 >> 2],
                        Nt = rt + 16 | 0,
                        cn = Nt,
                        un = 0 | H[cn >> 2],
                        It = 0 | H[cn + 4 >> 2],
                        cn = rt + 24 | 0,
                        Ut = cn,
                        Bt = 0 | H[Ut >> 2],
                        an = 0 | H[Ut + 4 >> 2],
                        Ut = rt + 32 | 0,
                        sn = Ut,
                        Ot = 0 | H[sn >> 2],
                        qt = 0 | H[sn + 4 >> 2],
                        sn = rt + 40 | 0,
                        Lt = sn,
                        rn = 0 | H[Lt >> 2],
                        on = 0 | H[Lt + 4 >> 2],
                        Lt = rt + 48 | 0,
                        Ct = Lt,
                        Rt = 0 | H[Ct >> 2],
                        Ft = 0 | H[Ct + 4 >> 2],
                        Ct = rt + 56 | 0,
                        tn = Ct,
                        nn = 0 | H[tn >> 2],
                        At = 0 | H[tn + 4 >> 2],
                        tn = rt + 64 | 0,
                        Dt = tn,
                        Tt = 0 | H[Dt >> 2],
                        $t = 0 | H[Dt + 4 >> 2],
                        Dt = rt + 72 | 0,
                        en = Dt,
                        wt = 0 | H[en >> 2],
                        Mt = 0 | H[en + 4 >> 2],
                        en = ot,
                        Et = 0 | H[en >> 2],
                        Jt = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | Et, 0 | Jt, 0 | fn, 0 | ln),
                        Qt = rt,
                        H[Qt >> 2] = en,
                        H[Qt + 4 >> 2] = ee,
                        Qt = ot + 8 | 0,
                        en = Qt,
                        bt = 0 | H[en >> 2],
                        Pt = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | bt, 0 | Pt, 0 | Vt, 0 | Gt),
                        St = hn,
                        H[St >> 2] = en,
                        H[St + 4 >> 2] = ee,
                        St = ot + 16 | 0,
                        en = St,
                        hn = 0 | H[en >> 2],
                        Zt = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | hn, 0 | Zt, 0 | un, 0 | It),
                        Xt = Nt,
                        H[Xt >> 2] = en,
                        H[Xt + 4 >> 2] = ee,
                        Xt = ot + 24 | 0,
                        en = Xt,
                        Nt = 0 | H[en >> 2],
                        vt = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | Nt, 0 | vt, 0 | Bt, 0 | an),
                        kt = cn,
                        H[kt >> 2] = en,
                        H[kt + 4 >> 2] = ee,
                        kt = ot + 32 | 0,
                        en = kt,
                        cn = 0 | H[en >> 2],
                        _t = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | cn, 0 | _t, 0 | Ot, 0 | qt),
                        Ht = Ut,
                        H[Ht >> 2] = en,
                        H[Ht + 4 >> 2] = ee,
                        Ht = ot + 40 | 0,
                        en = Ht,
                        Ut = 0 | H[en >> 2],
                        Yt = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | Ut, 0 | Yt, 0 | rn, 0 | on),
                        Wt = sn,
                        H[Wt >> 2] = en,
                        H[Wt + 4 >> 2] = ee,
                        Wt = ot + 48 | 0,
                        en = Wt,
                        sn = 0 | H[en >> 2],
                        pt = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | sn, 0 | pt, 0 | Rt, 0 | Ft),
                        mt = Lt,
                        H[mt >> 2] = en,
                        H[mt + 4 >> 2] = ee,
                        mt = ot + 56 | 0,
                        en = mt,
                        Lt = 0 | H[en >> 2],
                        dn = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | Lt, 0 | dn, 0 | nn, 0 | At),
                        Kt = Ct,
                        H[Kt >> 2] = en,
                        H[Kt + 4 >> 2] = ee,
                        Kt = ot + 64 | 0,
                        en = Kt,
                        Ct = 0 | H[en >> 2],
                        yt = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | Ct, 0 | yt, 0 | Tt, 0 | $t),
                        gt = tn,
                        H[gt >> 2] = en,
                        H[gt + 4 >> 2] = ee,
                        gt = ot + 72 | 0,
                        en = gt,
                        tn = 0 | H[en >> 2],
                        zt = 0 | H[en + 4 >> 2],
                        en = 0 | O(0 | tn, 0 | zt, 0 | wt, 0 | Mt),
                        jt = Dt,
                        H[jt >> 2] = en,
                        H[jt + 4 >> 2] = ee,
                        jt = 0 | M(0 | fn, 0 | ln, 0 | Et, 0 | Jt),
                        Jt = ot,
                        H[Jt >> 2] = jt,
                        H[Jt + 4 >> 2] = ee,
                        Jt = 0 | M(0 | Vt, 0 | Gt, 0 | bt, 0 | Pt),
                        Pt = Qt,
                        H[Pt >> 2] = Jt,
                        H[Pt + 4 >> 2] = ee,
                        Pt = 0 | M(0 | un, 0 | It, 0 | hn, 0 | Zt),
                        Zt = St,
                        H[Zt >> 2] = Pt,
                        H[Zt + 4 >> 2] = ee,
                        Zt = 0 | M(0 | Bt, 0 | an, 0 | Nt, 0 | vt),
                        vt = Xt,
                        H[vt >> 2] = Zt,
                        H[vt + 4 >> 2] = ee,
                        vt = 0 | M(0 | Ot, 0 | qt, 0 | cn, 0 | _t),
                        _t = kt,
                        H[_t >> 2] = vt,
                        H[_t + 4 >> 2] = ee,
                        _t = 0 | M(0 | rn, 0 | on, 0 | Ut, 0 | Yt),
                        Yt = Ht,
                        H[Yt >> 2] = _t,
                        H[Yt + 4 >> 2] = ee,
                        Yt = 0 | M(0 | Rt, 0 | Ft, 0 | sn, 0 | pt),
                        pt = Wt,
                        H[pt >> 2] = Yt,
                        H[pt + 4 >> 2] = ee,
                        pt = 0 | M(0 | nn, 0 | At, 0 | Lt, 0 | dn),
                        dn = mt,
                        H[dn >> 2] = pt,
                        H[dn + 4 >> 2] = ee,
                        dn = 0 | M(0 | Tt, 0 | $t, 0 | Ct, 0 | yt),
                        yt = Kt,
                        H[yt >> 2] = dn,
                        H[yt + 4 >> 2] = ee,
                        yt = 0 | M(0 | wt, 0 | Mt, 0 | tn, 0 | zt),
                        zt = gt,
                        H[zt >> 2] = yt,
                        H[zt + 4 >> 2] = ee,
                        h(s, rt, ut),
                        h(c, st, ot),
                        zt = j,
                        yt = 0 | H[zt >> 2],
                        gt = 0 | H[zt + 4 >> 2],
                        zt = n,
                        tn = 0 | H[zt >> 2],
                        Mt = 0 | H[zt + 4 >> 2],
                        zt = 0 | L(0 | yt, 0 | gt, 18, 0),
                        wt = ee,
                        dn = 0 | O(0 | tn, 0 | Mt, 0 | yt, 0 | gt),
                        gt = 0 | O(0 | dn, 0 | ee, 0 | zt, 0 | wt),
                        wt = n,
                        H[wt >> 2] = gt,
                        H[wt + 4 >> 2] = ee,
                        wt = z,
                        gt = 0 | H[wt >> 2],
                        zt = 0 | H[wt + 4 >> 2],
                        wt = U,
                        dn = 0 | H[wt >> 2],
                        yt = 0 | H[wt + 4 >> 2],
                        wt = 0 | L(0 | gt, 0 | zt, 18, 0),
                        Mt = ee,
                        tn = 0 | O(0 | dn, 0 | yt, 0 | gt, 0 | zt),
                        zt = 0 | O(0 | tn, 0 | ee, 0 | wt, 0 | Mt),
                        Mt = U,
                        H[Mt >> 2] = zt,
                        H[Mt + 4 >> 2] = ee,
                        Mt = B,
                        zt = 0 | H[Mt >> 2],
                        wt = 0 | H[Mt + 4 >> 2],
                        Mt = q,
                        tn = 0 | H[Mt >> 2],
                        gt = 0 | H[Mt + 4 >> 2],
                        Mt = 0 | L(0 | zt, 0 | wt, 18, 0),
                        yt = ee,
                        dn = 0 | O(0 | tn, 0 | gt, 0 | zt, 0 | wt),
                        wt = 0 | O(0 | dn, 0 | ee, 0 | Mt, 0 | yt),
                        yt = q,
                        H[yt >> 2] = wt,
                        H[yt + 4 >> 2] = ee,
                        yt = N,
                        wt = 0 | H[yt >> 2],
                        Mt = 0 | H[yt + 4 >> 2],
                        yt = R,
                        dn = 0 | H[yt >> 2],
                        zt = 0 | H[yt + 4 >> 2],
                        yt = 0 | L(0 | wt, 0 | Mt, 18, 0),
                        gt = ee,
                        tn = 0 | O(0 | dn, 0 | zt, 0 | wt, 0 | Mt),
                        Mt = 0 | O(0 | tn, 0 | ee, 0 | yt, 0 | gt),
                        gt = R,
                        H[gt >> 2] = Mt,
                        H[gt + 4 >> 2] = ee,
                        gt = G,
                        Mt = 0 | H[gt >> 2],
                        yt = 0 | H[gt + 4 >> 2],
                        gt = V,
                        tn = 0 | H[gt >> 2],
                        wt = 0 | H[gt + 4 >> 2],
                        gt = 0 | L(0 | Mt, 0 | yt, 18, 0),
                        zt = ee,
                        dn = 0 | O(0 | tn, 0 | wt, 0 | Mt, 0 | yt),
                        yt = 0 | O(0 | dn, 0 | ee, 0 | gt, 0 | zt),
                        zt = V,
                        H[zt >> 2] = yt,
                        H[zt + 4 >> 2] = ee,
                        zt = Z,
                        yt = 0 | H[zt >> 2],
                        gt = 0 | H[zt + 4 >> 2],
                        zt = X,
                        dn = 0 | H[zt >> 2],
                        Mt = 0 | H[zt + 4 >> 2],
                        zt = 0 | L(0 | yt, 0 | gt, 18, 0),
                        wt = ee,
                        tn = 0 | O(0 | dn, 0 | Mt, 0 | yt, 0 | gt),
                        gt = 0 | O(0 | tn, 0 | ee, 0 | zt, 0 | wt),
                        wt = X,
                        H[wt >> 2] = gt,
                        H[wt + 4 >> 2] = ee,
                        wt = J,
                        gt = 0 | H[wt >> 2],
                        zt = 0 | H[wt + 4 >> 2],
                        wt = Q,
                        tn = 0 | H[wt >> 2],
                        yt = 0 | H[wt + 4 >> 2],
                        wt = 0 | L(0 | gt, 0 | zt, 18, 0),
                        Mt = ee,
                        dn = 0 | O(0 | tn, 0 | yt, 0 | gt, 0 | zt),
                        zt = 0 | O(0 | dn, 0 | ee, 0 | wt, 0 | Mt),
                        Mt = Q,
                        H[Mt >> 2] = zt,
                        H[Mt + 4 >> 2] = ee,
                        Mt = $,
                        zt = 0 | H[Mt >> 2],
                        wt = 0 | H[Mt + 4 >> 2],
                        Mt = ne,
                        dn = 0 | H[Mt >> 2],
                        gt = 0 | H[Mt + 4 >> 2],
                        Mt = 0 | L(0 | zt, 0 | wt, 18, 0),
                        yt = ee,
                        tn = 0 | O(0 | dn, 0 | gt, 0 | zt, 0 | wt),
                        wt = 0 | O(0 | tn, 0 | ee, 0 | Mt, 0 | yt),
                        yt = ne,
                        H[yt >> 2] = wt,
                        H[yt + 4 >> 2] = ee,
                        yt = re,
                        wt = 0 | H[yt >> 2],
                        Mt = 0 | H[yt + 4 >> 2],
                        yt = s,
                        tn = 0 | H[yt >> 2],
                        zt = 0 | H[yt + 4 >> 2],
                        yt = 0 | L(0 | wt, 0 | Mt, 18, 0),
                        gt = ee,
                        dn = 0 | O(0 | tn, 0 | zt, 0 | wt, 0 | Mt),
                        Mt = 0 | O(0 | dn, 0 | ee, 0 | yt, 0 | gt),
                        gt = ee,
                        yt = s,
                        H[yt >> 2] = Mt,
                        H[yt + 4 >> 2] = gt,
                        yt = re,
                        H[yt >> 2] = 0,
                        H[yt + 4 >> 2] = 0,
                        yt = gt,
                        gt = Mt,
                        Mt = 0;
                        do
                            dn = 0 | O(yt >> 31 >>> 6 | 0, 0, 0 | gt, 0 | yt),
                            wt = 0 | E(0 | dn, 0 | ee, 26),
                            dn = ee,
                            zt = 0 | I(0 | wt, 0 | dn, 26),
                            tn = 0 | M(0 | gt, 0 | yt, 0 | zt, 0 | ee),
                            zt = s + (Mt << 3) | 0,
                            H[zt >> 2] = tn,
                            H[zt + 4 >> 2] = ee,
                            zt = s + ((1 | Mt) << 3) | 0,
                            tn = zt,
                            Kt = 0 | O(0 | wt, 0 | dn, 0 | H[tn >> 2], 0 | H[tn + 4 >> 2]),
                            tn = ee,
                            dn = 0 | O(tn >> 31 >>> 7 | 0, 0, 0 | Kt, 0 | tn),
                            wt = 0 | E(0 | dn, 0 | ee, 25),
                            dn = ee,
                            Ct = 0 | I(0 | wt, 0 | dn, 25),
                            $t = 0 | M(0 | Kt, 0 | tn, 0 | Ct, 0 | ee),
                            Ct = zt,
                            H[Ct >> 2] = $t,
                            H[Ct + 4 >> 2] = ee,
                            Mt = Mt + 2 | 0,
                            Ct = s + (Mt << 3) | 0,
                            $t = Ct,
                            gt = 0 | O(0 | wt, 0 | dn, 0 | H[$t >> 2], 0 | H[$t + 4 >> 2]),
                            yt = ee,
                            $t = Ct,
                            H[$t >> 2] = gt,
                            H[$t + 4 >> 2] = yt;
                        while (Mt >>> 0 < 10);Mt = re,
                        yt = 0 | H[Mt >> 2],
                        gt = 0 | H[Mt + 4 >> 2],
                        Mt = s,
                        $t = 0 | H[Mt >> 2],
                        Ct = 0 | H[Mt + 4 >> 2],
                        Mt = 0 | L(0 | yt, 0 | gt, 18, 0),
                        dn = ee,
                        wt = 0 | O(0 | $t, 0 | Ct, 0 | yt, 0 | gt),
                        gt = 0 | O(0 | wt, 0 | ee, 0 | Mt, 0 | dn),
                        dn = ee,
                        Mt = re,
                        H[Mt >> 2] = 0,
                        H[Mt + 4 >> 2] = 0,
                        Mt = 0 | O(dn >> 31 >>> 6 | 0, 0, 0 | gt, 0 | dn),
                        wt = 0 | E(0 | Mt, 0 | ee, 26),
                        Mt = ee,
                        yt = 0 | I(0 | wt, 0 | Mt, 26),
                        Ct = 0 | M(0 | gt, 0 | dn, 0 | yt, 0 | ee),
                        yt = ee,
                        dn = s,
                        H[dn >> 2] = Ct,
                        H[dn + 4 >> 2] = yt,
                        dn = ne,
                        gt = 0 | O(0 | wt, 0 | Mt, 0 | H[dn >> 2], 0 | H[dn + 4 >> 2]),
                        dn = ee,
                        Mt = ne,
                        H[Mt >> 2] = gt,
                        H[Mt + 4 >> 2] = dn,
                        Mt = ie,
                        wt = 0 | H[Mt >> 2],
                        $t = 0 | H[Mt + 4 >> 2],
                        Mt = oe,
                        zt = 0 | H[Mt >> 2],
                        tn = 0 | H[Mt + 4 >> 2],
                        Mt = 0 | L(0 | wt, 0 | $t, 18, 0),
                        Kt = ee,
                        Tt = 0 | O(0 | zt, 0 | tn, 0 | wt, 0 | $t),
                        $t = 0 | O(0 | Tt, 0 | ee, 0 | Mt, 0 | Kt),
                        Kt = oe,
                        H[Kt >> 2] = $t,
                        H[Kt + 4 >> 2] = ee,
                        Kt = ae,
                        $t = 0 | H[Kt >> 2],
                        Mt = 0 | H[Kt + 4 >> 2],
                        Kt = se,
                        Tt = 0 | H[Kt >> 2],
                        wt = 0 | H[Kt + 4 >> 2],
                        Kt = 0 | L(0 | $t, 0 | Mt, 18, 0),
                        tn = ee,
                        zt = 0 | O(0 | Tt, 0 | wt, 0 | $t, 0 | Mt),
                        Mt = 0 | O(0 | zt, 0 | ee, 0 | Kt, 0 | tn),
                        tn = se,
                        H[tn >> 2] = Mt,
                        H[tn + 4 >> 2] = ee,
                        tn = ce,
                        Mt = 0 | H[tn >> 2],
                        Kt = 0 | H[tn + 4 >> 2],
                        tn = ue,
                        zt = 0 | H[tn >> 2],
                        $t = 0 | H[tn + 4 >> 2],
                        tn = 0 | L(0 | Mt, 0 | Kt, 18, 0),
                        wt = ee,
                        Tt = 0 | O(0 | zt, 0 | $t, 0 | Mt, 0 | Kt),
                        Kt = 0 | O(0 | Tt, 0 | ee, 0 | tn, 0 | wt),
                        wt = ue,
                        H[wt >> 2] = Kt,
                        H[wt + 4 >> 2] = ee,
                        wt = fe,
                        Kt = 0 | H[wt >> 2],
                        tn = 0 | H[wt + 4 >> 2],
                        wt = le,
                        Tt = 0 | H[wt >> 2],
                        Mt = 0 | H[wt + 4 >> 2],
                        wt = 0 | L(0 | Kt, 0 | tn, 18, 0),
                        $t = ee,
                        zt = 0 | O(0 | Tt, 0 | Mt, 0 | Kt, 0 | tn),
                        tn = 0 | O(0 | zt, 0 | ee, 0 | wt, 0 | $t),
                        $t = le,
                        H[$t >> 2] = tn,
                        H[$t + 4 >> 2] = ee,
                        $t = he,
                        tn = 0 | H[$t >> 2],
                        wt = 0 | H[$t + 4 >> 2],
                        $t = de,
                        zt = 0 | H[$t >> 2],
                        Kt = 0 | H[$t + 4 >> 2],
                        $t = 0 | L(0 | tn, 0 | wt, 18, 0),
                        Mt = ee,
                        Tt = 0 | O(0 | zt, 0 | Kt, 0 | tn, 0 | wt),
                        wt = 0 | O(0 | Tt, 0 | ee, 0 | $t, 0 | Mt),
                        Mt = de,
                        H[Mt >> 2] = wt,
                        H[Mt + 4 >> 2] = ee,
                        Mt = pe,
                        wt = 0 | H[Mt >> 2],
                        $t = 0 | H[Mt + 4 >> 2],
                        Mt = we,
                        Tt = 0 | H[Mt >> 2],
                        tn = 0 | H[Mt + 4 >> 2],
                        Mt = 0 | L(0 | wt, 0 | $t, 18, 0),
                        Kt = ee,
                        zt = 0 | O(0 | Tt, 0 | tn, 0 | wt, 0 | $t),
                        $t = 0 | O(0 | zt, 0 | ee, 0 | Mt, 0 | Kt),
                        Kt = we,
                        H[Kt >> 2] = $t,
                        H[Kt + 4 >> 2] = ee,
                        Kt = me,
                        $t = 0 | H[Kt >> 2],
                        Mt = 0 | H[Kt + 4 >> 2],
                        Kt = ge,
                        zt = 0 | H[Kt >> 2],
                        wt = 0 | H[Kt + 4 >> 2],
                        Kt = 0 | L(0 | $t, 0 | Mt, 18, 0),
                        tn = ee,
                        Tt = 0 | O(0 | zt, 0 | wt, 0 | $t, 0 | Mt),
                        Mt = 0 | O(0 | Tt, 0 | ee, 0 | Kt, 0 | tn),
                        tn = ge,
                        H[tn >> 2] = Mt,
                        H[tn + 4 >> 2] = ee,
                        tn = ve,
                        Mt = 0 | H[tn >> 2],
                        Kt = 0 | H[tn + 4 >> 2],
                        tn = be,
                        Tt = 0 | H[tn >> 2],
                        $t = 0 | H[tn + 4 >> 2],
                        tn = 0 | L(0 | Mt, 0 | Kt, 18, 0),
                        wt = ee,
                        zt = 0 | O(0 | Tt, 0 | $t, 0 | Mt, 0 | Kt),
                        Kt = 0 | O(0 | zt, 0 | ee, 0 | tn, 0 | wt),
                        wt = be,
                        H[wt >> 2] = Kt,
                        H[wt + 4 >> 2] = ee,
                        wt = ye,
                        Kt = 0 | H[wt >> 2],
                        tn = 0 | H[wt + 4 >> 2],
                        wt = c,
                        zt = 0 | H[wt >> 2],
                        Mt = 0 | H[wt + 4 >> 2],
                        wt = 0 | L(0 | Kt, 0 | tn, 18, 0),
                        $t = ee,
                        Tt = 0 | O(0 | zt, 0 | Mt, 0 | Kt, 0 | tn),
                        tn = 0 | O(0 | Tt, 0 | ee, 0 | wt, 0 | $t),
                        $t = ee,
                        wt = c,
                        H[wt >> 2] = tn,
                        H[wt + 4 >> 2] = $t,
                        wt = ye,
                        H[wt >> 2] = 0,
                        H[wt + 4 >> 2] = 0,
                        wt = $t,
                        $t = tn,
                        tn = 0;
                        do
                            Tt = 0 | O(wt >> 31 >>> 6 | 0, 0, 0 | $t, 0 | wt),
                            Kt = 0 | E(0 | Tt, 0 | ee, 26),
                            Tt = ee,
                            Mt = 0 | I(0 | Kt, 0 | Tt, 26),
                            zt = 0 | M(0 | $t, 0 | wt, 0 | Mt, 0 | ee),
                            Mt = c + (tn << 3) | 0,
                            H[Mt >> 2] = zt,
                            H[Mt + 4 >> 2] = ee,
                            Mt = c + ((1 | tn) << 3) | 0,
                            zt = Mt,
                            pt = 0 | O(0 | Kt, 0 | Tt, 0 | H[zt >> 2], 0 | H[zt + 4 >> 2]),
                            zt = ee,
                            Tt = 0 | O(zt >> 31 >>> 7 | 0, 0, 0 | pt, 0 | zt),
                            Kt = 0 | E(0 | Tt, 0 | ee, 25),
                            Tt = ee,
                            mt = 0 | I(0 | Kt, 0 | Tt, 25),
                            Lt = 0 | M(0 | pt, 0 | zt, 0 | mt, 0 | ee),
                            mt = Mt,
                            H[mt >> 2] = Lt,
                            H[mt + 4 >> 2] = ee,
                            tn = tn + 2 | 0,
                            mt = c + (tn << 3) | 0,
                            Lt = mt,
                            $t = 0 | O(0 | Kt, 0 | Tt, 0 | H[Lt >> 2], 0 | H[Lt + 4 >> 2]),
                            wt = ee,
                            Lt = mt,
                            H[Lt >> 2] = $t,
                            H[Lt + 4 >> 2] = wt;
                        while (tn >>> 0 < 10);tn = ye,
                        wt = 0 | H[tn >> 2],
                        $t = 0 | H[tn + 4 >> 2],
                        tn = c,
                        Lt = 0 | H[tn >> 2],
                        mt = 0 | H[tn + 4 >> 2],
                        tn = 0 | L(0 | wt, 0 | $t, 18, 0),
                        Tt = ee,
                        Kt = 0 | O(0 | Lt, 0 | mt, 0 | wt, 0 | $t),
                        $t = 0 | O(0 | Kt, 0 | ee, 0 | tn, 0 | Tt),
                        Tt = ee,
                        tn = ye,
                        H[tn >> 2] = 0,
                        H[tn + 4 >> 2] = 0,
                        tn = 0 | O(Tt >> 31 >>> 6 | 0, 0, 0 | $t, 0 | Tt),
                        Kt = 0 | E(0 | tn, 0 | ee, 26),
                        tn = ee,
                        wt = 0 | I(0 | Kt, 0 | tn, 26),
                        mt = 0 | M(0 | $t, 0 | Tt, 0 | wt, 0 | ee),
                        wt = ee,
                        Tt = be,
                        $t = 0 | O(0 | Kt, 0 | tn, 0 | H[Tt >> 2], 0 | H[Tt + 4 >> 2]),
                        Tt = ee,
                        tn = Q,
                        Kt = 0 | H[tn >> 2],
                        Lt = 0 | H[tn + 4 >> 2],
                        tn = X,
                        Mt = 0 | H[tn >> 2],
                        zt = 0 | H[tn + 4 >> 2],
                        tn = V,
                        pt = 0 | H[tn >> 2],
                        At = 0 | H[tn + 4 >> 2],
                        tn = R,
                        nn = 0 | H[tn >> 2],
                        Yt = 0 | H[tn + 4 >> 2],
                        tn = q,
                        Wt = 0 | H[tn >> 2],
                        sn = 0 | H[tn + 4 >> 2],
                        tn = U,
                        Ft = 0 | H[tn >> 2],
                        Rt = 0 | H[tn + 4 >> 2],
                        tn = n,
                        _t = 0 | H[tn >> 2],
                        Ht = 0 | H[tn + 4 >> 2],
                        tn = _e,
                        Ut = 0 | H[tn >> 2],
                        on = 0 | H[tn + 4 >> 2],
                        tn = 0 | O(0 | mt, 0 | wt, 0 | Ct, 0 | yt),
                        rn = s,
                        H[rn >> 2] = tn,
                        H[rn + 4 >> 2] = ee,
                        rn = 0 | O(0 | $t, 0 | Tt, 0 | gt, 0 | dn),
                        tn = ne,
                        H[tn >> 2] = rn,
                        H[tn + 4 >> 2] = ee,
                        tn = ge,
                        rn = 0 | H[tn >> 2],
                        vt = 0 | H[tn + 4 >> 2],
                        tn = 0 | O(0 | rn, 0 | vt, 0 | Kt, 0 | Lt),
                        kt = Q,
                        H[kt >> 2] = tn,
                        H[kt + 4 >> 2] = ee,
                        kt = we,
                        tn = 0 | H[kt >> 2],
                        cn = 0 | H[kt + 4 >> 2],
                        kt = 0 | O(0 | tn, 0 | cn, 0 | Mt, 0 | zt),
                        qt = X,
                        H[qt >> 2] = kt,
                        H[qt + 4 >> 2] = ee,
                        qt = de,
                        kt = 0 | H[qt >> 2],
                        Ot = 0 | H[qt + 4 >> 2],
                        qt = 0 | O(0 | kt, 0 | Ot, 0 | pt, 0 | At),
                        Zt = V,
                        H[Zt >> 2] = qt,
                        H[Zt + 4 >> 2] = ee,
                        Zt = le,
                        qt = 0 | H[Zt >> 2],
                        Xt = 0 | H[Zt + 4 >> 2],
                        Zt = 0 | O(0 | qt, 0 | Xt, 0 | nn, 0 | Yt),
                        Nt = R,
                        H[Nt >> 2] = Zt,
                        H[Nt + 4 >> 2] = ee,
                        Nt = ue,
                        Zt = 0 | H[Nt >> 2],
                        an = 0 | H[Nt + 4 >> 2],
                        Nt = 0 | O(0 | Zt, 0 | an, 0 | Wt, 0 | sn),
                        Bt = q,
                        H[Bt >> 2] = Nt,
                        H[Bt + 4 >> 2] = ee,
                        Bt = se,
                        Nt = 0 | H[Bt >> 2],
                        Pt = 0 | H[Bt + 4 >> 2],
                        Bt = 0 | O(0 | Nt, 0 | Pt, 0 | Ft, 0 | Rt),
                        St = U,
                        H[St >> 2] = Bt,
                        H[St + 4 >> 2] = ee,
                        St = oe,
                        Bt = 0 | H[St >> 2],
                        hn = 0 | H[St + 4 >> 2],
                        St = 0 | O(0 | Bt, 0 | hn, 0 | _t, 0 | Ht),
                        It = n,
                        H[It >> 2] = St,
                        H[It + 4 >> 2] = ee,
                        It = ke,
                        St = 0 | H[It >> 2],
                        un = 0 | H[It + 4 >> 2],
                        It = 0 | O(0 | St, 0 | un, 0 | Ut, 0 | on),
                        Jt = _e,
                        H[Jt >> 2] = It,
                        H[Jt + 4 >> 2] = ee,
                        Jt = 0 | M(0 | Ct, 0 | yt, 0 | mt, 0 | wt),
                        wt = c,
                        H[wt >> 2] = Jt,
                        H[wt + 4 >> 2] = ee,
                        wt = 0 | M(0 | gt, 0 | dn, 0 | $t, 0 | Tt),
                        Tt = be,
                        H[Tt >> 2] = wt,
                        H[Tt + 4 >> 2] = ee,
                        Tt = 0 | M(0 | Kt, 0 | Lt, 0 | rn, 0 | vt),
                        vt = ge,
                        H[vt >> 2] = Tt,
                        H[vt + 4 >> 2] = ee,
                        vt = 0 | M(0 | Mt, 0 | zt, 0 | tn, 0 | cn),
                        cn = we,
                        H[cn >> 2] = vt,
                        H[cn + 4 >> 2] = ee,
                        cn = 0 | M(0 | pt, 0 | At, 0 | kt, 0 | Ot),
                        Ot = de,
                        H[Ot >> 2] = cn,
                        H[Ot + 4 >> 2] = ee,
                        Ot = 0 | M(0 | nn, 0 | Yt, 0 | qt, 0 | Xt),
                        Xt = le,
                        H[Xt >> 2] = Ot,
                        H[Xt + 4 >> 2] = ee,
                        Xt = 0 | M(0 | Wt, 0 | sn, 0 | Zt, 0 | an),
                        an = ue,
                        H[an >> 2] = Xt,
                        H[an + 4 >> 2] = ee,
                        an = 0 | M(0 | Ft, 0 | Rt, 0 | Nt, 0 | Pt),
                        Pt = se,
                        H[Pt >> 2] = an,
                        H[Pt + 4 >> 2] = ee,
                        Pt = 0 | M(0 | _t, 0 | Ht, 0 | Bt, 0 | hn),
                        hn = oe,
                        H[hn >> 2] = Pt,
                        H[hn + 4 >> 2] = ee,
                        hn = 0 | M(0 | Ut, 0 | on, 0 | St, 0 | un),
                        un = ke,
                        H[un >> 2] = hn,
                        H[un + 4 >> 2] = ee,
                        d(f, s),
                        d(u, c),
                        h(c, u, k),
                        un = ie,
                        hn = 0 | H[un >> 2],
                        St = 0 | H[un + 4 >> 2],
                        un = oe,
                        on = 0 | H[un >> 2],
                        Ut = 0 | H[un + 4 >> 2],
                        un = 0 | L(0 | hn, 0 | St, 18, 0),
                        Pt = ee,
                        Bt = 0 | O(0 | on, 0 | Ut, 0 | hn, 0 | St),
                        St = 0 | O(0 | Bt, 0 | ee, 0 | un, 0 | Pt),
                        Pt = oe,
                        H[Pt >> 2] = St,
                        H[Pt + 4 >> 2] = ee,
                        Pt = ae,
                        St = 0 | H[Pt >> 2],
                        un = 0 | H[Pt + 4 >> 2],
                        Pt = se,
                        Bt = 0 | H[Pt >> 2],
                        hn = 0 | H[Pt + 4 >> 2],
                        Pt = 0 | L(0 | St, 0 | un, 18, 0),
                        Ut = ee,
                        on = 0 | O(0 | Bt, 0 | hn, 0 | St, 0 | un),
                        un = 0 | O(0 | on, 0 | ee, 0 | Pt, 0 | Ut),
                        Ut = se,
                        H[Ut >> 2] = un,
                        H[Ut + 4 >> 2] = ee,
                        Ut = ce,
                        un = 0 | H[Ut >> 2],
                        Pt = 0 | H[Ut + 4 >> 2],
                        Ut = ue,
                        on = 0 | H[Ut >> 2],
                        St = 0 | H[Ut + 4 >> 2],
                        Ut = 0 | L(0 | un, 0 | Pt, 18, 0),
                        hn = ee,
                        Bt = 0 | O(0 | on, 0 | St, 0 | un, 0 | Pt),
                        Pt = 0 | O(0 | Bt, 0 | ee, 0 | Ut, 0 | hn),
                        hn = ue,
                        H[hn >> 2] = Pt,
                        H[hn + 4 >> 2] = ee,
                        hn = fe,
                        Pt = 0 | H[hn >> 2],
                        Ut = 0 | H[hn + 4 >> 2],
                        hn = le,
                        Bt = 0 | H[hn >> 2],
                        un = 0 | H[hn + 4 >> 2],
                        hn = 0 | L(0 | Pt, 0 | Ut, 18, 0),
                        St = ee,
                        on = 0 | O(0 | Bt, 0 | un, 0 | Pt, 0 | Ut),
                        Ut = 0 | O(0 | on, 0 | ee, 0 | hn, 0 | St),
                        St = le,
                        H[St >> 2] = Ut,
                        H[St + 4 >> 2] = ee,
                        St = he,
                        Ut = 0 | H[St >> 2],
                        hn = 0 | H[St + 4 >> 2],
                        St = de,
                        on = 0 | H[St >> 2],
                        Pt = 0 | H[St + 4 >> 2],
                        St = 0 | L(0 | Ut, 0 | hn, 18, 0),
                        un = ee,
                        Bt = 0 | O(0 | on, 0 | Pt, 0 | Ut, 0 | hn),
                        hn = 0 | O(0 | Bt, 0 | ee, 0 | St, 0 | un),
                        un = de,
                        H[un >> 2] = hn,
                        H[un + 4 >> 2] = ee,
                        un = pe,
                        hn = 0 | H[un >> 2],
                        St = 0 | H[un + 4 >> 2],
                        un = we,
                        Bt = 0 | H[un >> 2],
                        Ut = 0 | H[un + 4 >> 2],
                        un = 0 | L(0 | hn, 0 | St, 18, 0),
                        Pt = ee,
                        on = 0 | O(0 | Bt, 0 | Ut, 0 | hn, 0 | St),
                        St = 0 | O(0 | on, 0 | ee, 0 | un, 0 | Pt),
                        Pt = we,
                        H[Pt >> 2] = St,
                        H[Pt + 4 >> 2] = ee,
                        Pt = me,
                        St = 0 | H[Pt >> 2],
                        un = 0 | H[Pt + 4 >> 2],
                        Pt = ge,
                        on = 0 | H[Pt >> 2],
                        hn = 0 | H[Pt + 4 >> 2],
                        Pt = 0 | L(0 | St, 0 | un, 18, 0),
                        Ut = ee,
                        Bt = 0 | O(0 | on, 0 | hn, 0 | St, 0 | un),
                        un = 0 | O(0 | Bt, 0 | ee, 0 | Pt, 0 | Ut),
                        Ut = ge,
                        H[Ut >> 2] = un,
                        H[Ut + 4 >> 2] = ee,
                        Ut = ve,
                        un = 0 | H[Ut >> 2],
                        Pt = 0 | H[Ut + 4 >> 2],
                        Ut = be,
                        Bt = 0 | H[Ut >> 2],
                        St = 0 | H[Ut + 4 >> 2],
                        Ut = 0 | L(0 | un, 0 | Pt, 18, 0),
                        hn = ee,
                        on = 0 | O(0 | Bt, 0 | St, 0 | un, 0 | Pt),
                        Pt = 0 | O(0 | on, 0 | ee, 0 | Ut, 0 | hn),
                        hn = be,
                        H[hn >> 2] = Pt,
                        H[hn + 4 >> 2] = ee,
                        hn = ye,
                        Pt = 0 | H[hn >> 2],
                        Ut = 0 | H[hn + 4 >> 2],
                        hn = c,
                        on = 0 | H[hn >> 2],
                        un = 0 | H[hn + 4 >> 2],
                        hn = 0 | L(0 | Pt, 0 | Ut, 18, 0),
                        St = ee,
                        Bt = 0 | O(0 | on, 0 | un, 0 | Pt, 0 | Ut),
                        Ut = 0 | O(0 | Bt, 0 | ee, 0 | hn, 0 | St),
                        St = ee,
                        hn = c,
                        H[hn >> 2] = Ut,
                        H[hn + 4 >> 2] = St,
                        hn = ye,
                        H[hn >> 2] = 0,
                        H[hn + 4 >> 2] = 0,
                        hn = St,
                        St = Ut,
                        Ut = 0;
                        do
                            Bt = 0 | O(hn >> 31 >>> 6 | 0, 0, 0 | St, 0 | hn),
                            Pt = 0 | E(0 | Bt, 0 | ee, 26),
                            Bt = ee,
                            un = 0 | I(0 | Pt, 0 | Bt, 26),
                            on = 0 | M(0 | St, 0 | hn, 0 | un, 0 | ee),
                            un = c + (Ut << 3) | 0,
                            H[un >> 2] = on,
                            H[un + 4 >> 2] = ee,
                            un = c + ((1 | Ut) << 3) | 0,
                            on = un,
                            Ht = 0 | O(0 | Pt, 0 | Bt, 0 | H[on >> 2], 0 | H[on + 4 >> 2]),
                            on = ee,
                            Bt = 0 | O(on >> 31 >>> 7 | 0, 0, 0 | Ht, 0 | on),
                            Pt = 0 | E(0 | Bt, 0 | ee, 25),
                            Bt = ee,
                            _t = 0 | I(0 | Pt, 0 | Bt, 25),
                            an = 0 | M(0 | Ht, 0 | on, 0 | _t, 0 | ee),
                            _t = un,
                            H[_t >> 2] = an,
                            H[_t + 4 >> 2] = ee,
                            Ut = Ut + 2 | 0,
                            _t = c + (Ut << 3) | 0,
                            an = _t,
                            St = 0 | O(0 | Pt, 0 | Bt, 0 | H[an >> 2], 0 | H[an + 4 >> 2]),
                            hn = ee,
                            an = _t,
                            H[an >> 2] = St,
                            H[an + 4 >> 2] = hn;
                        while (Ut >>> 0 < 10);Ut = ye,
                        hn = 0 | H[Ut >> 2],
                        St = 0 | H[Ut + 4 >> 2],
                        Ut = c,
                        dn = 0 | H[Ut >> 2],
                        gt = 0 | H[Ut + 4 >> 2],
                        Ut = 0 | L(0 | hn, 0 | St, 18, 0),
                        yt = ee,
                        Ct = 0 | O(0 | dn, 0 | gt, 0 | hn, 0 | St),
                        St = 0 | O(0 | Ct, 0 | ee, 0 | Ut, 0 | yt),
                        yt = ee,
                        Ut = ye,
                        H[Ut >> 2] = 0,
                        H[Ut + 4 >> 2] = 0,
                        Ut = 0 | O(yt >> 31 >>> 6 | 0, 0, 0 | St, 0 | yt),
                        Ct = 0 | E(0 | Ut, 0 | ee, 26),
                        Ut = ee,
                        hn = 0 | I(0 | Ct, 0 | Ut, 26),
                        gt = 0 | M(0 | St, 0 | yt, 0 | hn, 0 | ee),
                        hn = c,
                        H[hn >> 2] = gt,
                        H[hn + 4 >> 2] = ee,
                        hn = be,
                        gt = 0 | O(0 | Ct, 0 | Ut, 0 | H[hn >> 2], 0 | H[hn + 4 >> 2]),
                        hn = be,
                        H[hn >> 2] = gt,
                        H[hn + 4 >> 2] = ee,
                        C = it,
                        F = f,
                        t = C + 80 | 0;
                        do
                            H[C >> 2] = H[F >> 2],
                            C = C + 4 | 0,
                            F = F + 4 | 0;
                        while ((0 | C) < (0 | t));C = at,
                        F = c,
                        t = C + 80 | 0;
                        do
                            H[C >> 2] = H[F >> 2],
                            C = C + 4 | 0,
                            F = F + 4 | 0;
                        while ((0 | C) < (0 | t));d(o, st),
                        d(a, ut),
                        h(ct, o, a),
                        hn = ct + 144 | 0,
                        gt = 0 | H[hn >> 2],
                        Ut = 0 | H[hn + 4 >> 2],
                        hn = ct + 64 | 0,
                        Ct = hn,
                        yt = 0 | H[Ct >> 2],
                        St = 0 | H[Ct + 4 >> 2],
                        Ct = 0 | L(0 | gt, 0 | Ut, 18, 0),
                        dn = ee,
                        an = 0 | O(0 | yt, 0 | St, 0 | gt, 0 | Ut),
                        Ut = 0 | O(0 | an, 0 | ee, 0 | Ct, 0 | dn),
                        dn = hn,
                        H[dn >> 2] = Ut,
                        H[dn + 4 >> 2] = ee,
                        dn = ct + 136 | 0,
                        Ut = 0 | H[dn >> 2],
                        hn = 0 | H[dn + 4 >> 2],
                        dn = ct + 56 | 0,
                        Ct = dn,
                        an = 0 | H[Ct >> 2],
                        gt = 0 | H[Ct + 4 >> 2],
                        Ct = 0 | L(0 | Ut, 0 | hn, 18, 0),
                        St = ee,
                        yt = 0 | O(0 | an, 0 | gt, 0 | Ut, 0 | hn),
                        hn = 0 | O(0 | yt, 0 | ee, 0 | Ct, 0 | St),
                        St = dn,
                        H[St >> 2] = hn,
                        H[St + 4 >> 2] = ee,
                        St = ct + 128 | 0,
                        hn = 0 | H[St >> 2],
                        dn = 0 | H[St + 4 >> 2],
                        St = ct + 48 | 0,
                        Ct = St,
                        yt = 0 | H[Ct >> 2],
                        Ut = 0 | H[Ct + 4 >> 2],
                        Ct = 0 | L(0 | hn, 0 | dn, 18, 0),
                        gt = ee,
                        an = 0 | O(0 | yt, 0 | Ut, 0 | hn, 0 | dn),
                        dn = 0 | O(0 | an, 0 | ee, 0 | Ct, 0 | gt),
                        gt = St,
                        H[gt >> 2] = dn,
                        H[gt + 4 >> 2] = ee,
                        gt = ct + 120 | 0,
                        dn = 0 | H[gt >> 2],
                        St = 0 | H[gt + 4 >> 2],
                        gt = ct + 40 | 0,
                        Ct = gt,
                        an = 0 | H[Ct >> 2],
                        hn = 0 | H[Ct + 4 >> 2],
                        Ct = 0 | L(0 | dn, 0 | St, 18, 0),
                        Ut = ee,
                        yt = 0 | O(0 | an, 0 | hn, 0 | dn, 0 | St),
                        St = 0 | O(0 | yt, 0 | ee, 0 | Ct, 0 | Ut),
                        Ut = gt,
                        H[Ut >> 2] = St,
                        H[Ut + 4 >> 2] = ee,
                        Ut = ct + 112 | 0,
                        St = 0 | H[Ut >> 2],
                        gt = 0 | H[Ut + 4 >> 2],
                        Ut = ct + 32 | 0,
                        Ct = Ut,
                        yt = 0 | H[Ct >> 2],
                        dn = 0 | H[Ct + 4 >> 2],
                        Ct = 0 | L(0 | St, 0 | gt, 18, 0),
                        hn = ee,
                        an = 0 | O(0 | yt, 0 | dn, 0 | St, 0 | gt),
                        gt = 0 | O(0 | an, 0 | ee, 0 | Ct, 0 | hn),
                        hn = Ut,
                        H[hn >> 2] = gt,
                        H[hn + 4 >> 2] = ee,
                        hn = ct + 104 | 0,
                        gt = 0 | H[hn >> 2],
                        Ut = 0 | H[hn + 4 >> 2],
                        hn = ct + 24 | 0,
                        Ct = hn,
                        an = 0 | H[Ct >> 2],
                        St = 0 | H[Ct + 4 >> 2],
                        Ct = 0 | L(0 | gt, 0 | Ut, 18, 0),
                        dn = ee,
                        yt = 0 | O(0 | an, 0 | St, 0 | gt, 0 | Ut),
                        Ut = 0 | O(0 | yt, 0 | ee, 0 | Ct, 0 | dn),
                        dn = hn,
                        H[dn >> 2] = Ut,
                        H[dn + 4 >> 2] = ee,
                        dn = ct + 96 | 0,
                        Ut = 0 | H[dn >> 2],
                        hn = 0 | H[dn + 4 >> 2],
                        dn = ct + 16 | 0,
                        Ct = dn,
                        yt = 0 | H[Ct >> 2],
                        gt = 0 | H[Ct + 4 >> 2],
                        Ct = 0 | L(0 | Ut, 0 | hn, 18, 0),
                        St = ee,
                        an = 0 | O(0 | yt, 0 | gt, 0 | Ut, 0 | hn),
                        hn = 0 | O(0 | an, 0 | ee, 0 | Ct, 0 | St),
                        St = dn,
                        H[St >> 2] = hn,
                        H[St + 4 >> 2] = ee,
                        St = ct + 88 | 0,
                        hn = 0 | H[St >> 2],
                        dn = 0 | H[St + 4 >> 2],
                        St = ct + 8 | 0,
                        Ct = St,
                        an = 0 | H[Ct >> 2],
                        Ut = 0 | H[Ct + 4 >> 2],
                        Ct = 0 | L(0 | hn, 0 | dn, 18, 0),
                        gt = ee,
                        yt = 0 | O(0 | an, 0 | Ut, 0 | hn, 0 | dn),
                        dn = 0 | O(0 | yt, 0 | ee, 0 | Ct, 0 | gt),
                        gt = St,
                        H[gt >> 2] = dn,
                        H[gt + 4 >> 2] = ee,
                        gt = ct + 80 | 0,
                        dn = gt,
                        Ct = 0 | H[dn >> 2],
                        yt = 0 | H[dn + 4 >> 2],
                        dn = ct,
                        hn = 0 | H[dn >> 2],
                        Ut = 0 | H[dn + 4 >> 2],
                        dn = 0 | L(0 | Ct, 0 | yt, 18, 0),
                        an = ee,
                        _t = 0 | O(0 | hn, 0 | Ut, 0 | Ct, 0 | yt),
                        yt = 0 | O(0 | _t, 0 | ee, 0 | dn, 0 | an),
                        an = ee,
                        dn = ct,
                        H[dn >> 2] = yt,
                        H[dn + 4 >> 2] = an,
                        dn = gt,
                        H[dn >> 2] = 0,
                        H[dn + 4 >> 2] = 0,
                        dn = an,
                        an = yt,
                        yt = 0;
                        do
                            _t = 0 | O(dn >> 31 >>> 6 | 0, 0, 0 | an, 0 | dn),
                            Ct = 0 | E(0 | _t, 0 | ee, 26),
                            _t = ee,
                            Ut = 0 | I(0 | Ct, 0 | _t, 26),
                            hn = 0 | M(0 | an, 0 | dn, 0 | Ut, 0 | ee),
                            Ut = ct + (yt << 3) | 0,
                            H[Ut >> 2] = hn,
                            H[Ut + 4 >> 2] = ee,
                            Ut = ct + ((1 | yt) << 3) | 0,
                            hn = Ut,
                            Bt = 0 | O(0 | Ct, 0 | _t, 0 | H[hn >> 2], 0 | H[hn + 4 >> 2]),
                            hn = ee,
                            _t = 0 | O(hn >> 31 >>> 7 | 0, 0, 0 | Bt, 0 | hn),
                            Ct = 0 | E(0 | _t, 0 | ee, 25),
                            _t = ee,
                            Pt = 0 | I(0 | Ct, 0 | _t, 25),
                            un = 0 | M(0 | Bt, 0 | hn, 0 | Pt, 0 | ee),
                            Pt = Ut,
                            H[Pt >> 2] = un,
                            H[Pt + 4 >> 2] = ee,
                            yt = yt + 2 | 0,
                            Pt = ct + (yt << 3) | 0,
                            un = Pt,
                            an = 0 | O(0 | Ct, 0 | _t, 0 | H[un >> 2], 0 | H[un + 4 >> 2]),
                            dn = ee,
                            un = Pt,
                            H[un >> 2] = an,
                            H[un + 4 >> 2] = dn;
                        while (yt >>> 0 < 10);yt = gt,
                        dn = 0 | H[yt >> 2],
                        an = 0 | H[yt + 4 >> 2],
                        yt = ct,
                        un = 0 | H[yt >> 2],
                        Pt = 0 | H[yt + 4 >> 2],
                        yt = 0 | L(0 | dn, 0 | an, 18, 0),
                        _t = ee,
                        Ct = 0 | O(0 | un, 0 | Pt, 0 | dn, 0 | an),
                        an = 0 | O(0 | Ct, 0 | ee, 0 | yt, 0 | _t),
                        _t = ee,
                        yt = gt,
                        H[yt >> 2] = 0,
                        H[yt + 4 >> 2] = 0,
                        yt = 0 | O(_t >> 31 >>> 6 | 0, 0, 0 | an, 0 | _t),
                        Ct = 0 | E(0 | yt, 0 | ee, 26),
                        yt = ee,
                        dn = 0 | I(0 | Ct, 0 | yt, 26),
                        Pt = 0 | M(0 | an, 0 | _t, 0 | dn, 0 | ee),
                        dn = ct,
                        H[dn >> 2] = Pt,
                        H[dn + 4 >> 2] = ee,
                        dn = St,
                        Pt = 0 | O(0 | Ct, 0 | yt, 0 | H[dn >> 2], 0 | H[dn + 4 >> 2]),
                        dn = St,
                        H[dn >> 2] = Pt,
                        H[dn + 4 >> 2] = ee,
                        dn = o,
                        Pt = 0 | H[dn >> 2],
                        yt = 0 | H[dn + 4 >> 2],
                        dn = a,
                        Ct = 0 | M(0 | Pt, 0 | yt, 0 | H[dn >> 2], 0 | H[dn + 4 >> 2]),
                        dn = ee,
                        _t = a,
                        H[_t >> 2] = Ct,
                        H[_t + 4 >> 2] = dn,
                        _t = xe,
                        an = 0 | H[_t >> 2],
                        un = 0 | H[_t + 4 >> 2],
                        _t = Ae,
                        Ut = 0 | M(0 | an, 0 | un, 0 | H[_t >> 2], 0 | H[_t + 4 >> 2]),
                        _t = ee,
                        hn = Ae,
                        H[hn >> 2] = Ut,
                        H[hn + 4 >> 2] = _t,
                        hn = Se,
                        Bt = 0 | H[hn >> 2],
                        on = 0 | H[hn + 4 >> 2],
                        hn = Pe,
                        Ht = 0 | M(0 | Bt, 0 | on, 0 | H[hn >> 2], 0 | H[hn + 4 >> 2]),
                        hn = ee,
                        Nt = Pe,
                        H[Nt >> 2] = Ht,
                        H[Nt + 4 >> 2] = hn,
                        Nt = Ce,
                        Rt = 0 | H[Nt >> 2],
                        Ft = 0 | H[Nt + 4 >> 2],
                        Nt = Ee,
                        Xt = 0 | M(0 | Rt, 0 | Ft, 0 | H[Nt >> 2], 0 | H[Nt + 4 >> 2]),
                        Nt = ee,
                        Zt = Ee,
                        H[Zt >> 2] = Xt,
                        H[Zt + 4 >> 2] = Nt,
                        Zt = Me,
                        sn = 0 | H[Zt >> 2],
                        Wt = 0 | H[Zt + 4 >> 2],
                        Zt = Oe,
                        Ot = 0 | M(0 | sn, 0 | Wt, 0 | H[Zt >> 2], 0 | H[Zt + 4 >> 2]),
                        Zt = ee,
                        qt = Oe,
                        H[qt >> 2] = Ot,
                        H[qt + 4 >> 2] = Zt,
                        qt = Te,
                        Yt = 0 | H[qt >> 2],
                        nn = 0 | H[qt + 4 >> 2],
                        qt = De,
                        cn = 0 | M(0 | Yt, 0 | nn, 0 | H[qt >> 2], 0 | H[qt + 4 >> 2]),
                        qt = ee,
                        kt = De,
                        H[kt >> 2] = cn,
                        H[kt + 4 >> 2] = qt,
                        kt = Ie,
                        At = 0 | H[kt >> 2],
                        pt = 0 | H[kt + 4 >> 2],
                        kt = Fe,
                        vt = 0 | M(0 | At, 0 | pt, 0 | H[kt >> 2], 0 | H[kt + 4 >> 2]),
                        kt = ee,
                        tn = Fe,
                        H[tn >> 2] = vt,
                        H[tn + 4 >> 2] = kt,
                        tn = Re,
                        zt = 0 | H[tn >> 2],
                        Mt = 0 | H[tn + 4 >> 2],
                        tn = Ne,
                        Tt = 0 | M(0 | zt, 0 | Mt, 0 | H[tn >> 2], 0 | H[tn + 4 >> 2]),
                        tn = ee,
                        rn = Ne,
                        H[rn >> 2] = Tt,
                        H[rn + 4 >> 2] = tn,
                        rn = Le,
                        Lt = 0 | H[rn >> 2],
                        Kt = 0 | H[rn + 4 >> 2],
                        rn = qe,
                        wt = 0 | M(0 | Lt, 0 | Kt, 0 | H[rn >> 2], 0 | H[rn + 4 >> 2]),
                        rn = ee,
                        $t = qe,
                        H[$t >> 2] = wt,
                        H[$t + 4 >> 2] = rn,
                        $t = je,
                        Jt = 0 | H[$t >> 2],
                        mt = 0 | H[$t + 4 >> 2],
                        $t = Be,
                        It = 0 | M(0 | Jt, 0 | mt, 0 | H[$t >> 2], 0 | H[$t + 4 >> 2]),
                        $t = ee,
                        Qt = Be,
                        H[Qt >> 2] = It,
                        H[Qt + 4 >> 2] = $t,
                        C = Ue,
                        t = C + 72 | 0;
                        do
                            H[C >> 2] = 0,
                            C = C + 4 | 0;
                        while ((0 | C) < (0 | t));St = 0 | L(0 | Ct, 0 | dn, 121665, 0),
                        gt = ee,
                        Qt = i,
                        H[Qt >> 2] = St,
                        H[Qt + 4 >> 2] = gt,
                        Qt = 0 | L(0 | Ut, 0 | _t, 121665, 0),
                        bt = ze,
                        H[bt >> 2] = Qt,
                        H[bt + 4 >> 2] = ee,
                        bt = 0 | L(0 | Ht, 0 | hn, 121665, 0),
                        Qt = Ge,
                        H[Qt >> 2] = bt,
                        H[Qt + 4 >> 2] = ee,
                        Qt = 0 | L(0 | Xt, 0 | Nt, 121665, 0),
                        bt = Ve,
                        H[bt >> 2] = Qt,
                        H[bt + 4 >> 2] = ee,
                        bt = 0 | L(0 | Ot, 0 | Zt, 121665, 0),
                        Qt = Ke,
                        H[Qt >> 2] = bt,
                        H[Qt + 4 >> 2] = ee,
                        Qt = 0 | L(0 | cn, 0 | qt, 121665, 0),
                        bt = He,
                        H[bt >> 2] = Qt,
                        H[bt + 4 >> 2] = ee,
                        bt = 0 | L(0 | vt, 0 | kt, 121665, 0),
                        Qt = Ye,
                        H[Qt >> 2] = bt,
                        H[Qt + 4 >> 2] = ee,
                        Qt = 0 | L(0 | Tt, 0 | tn, 121665, 0),
                        bt = We,
                        H[bt >> 2] = Qt,
                        H[bt + 4 >> 2] = ee,
                        bt = 0 | L(0 | wt, 0 | rn, 121665, 0),
                        Qt = Ze,
                        H[Qt >> 2] = bt,
                        H[Qt + 4 >> 2] = ee,
                        Qt = 0 | L(0 | It, 0 | $t, 121665, 0),
                        bt = Xe,
                        H[bt >> 2] = Qt,
                        H[bt + 4 >> 2] = ee,
                        bt = Ue,
                        H[bt >> 2] = 0,
                        H[bt + 4 >> 2] = 0,
                        bt = gt,
                        gt = St,
                        St = 0;
                        do
                            Qt = 0 | O(bt >> 31 >>> 6 | 0, 0, 0 | gt, 0 | bt),
                            Gt = 0 | E(0 | Qt, 0 | ee, 26),
                            Qt = ee,
                            Vt = 0 | I(0 | Gt, 0 | Qt, 26),
                            jt = 0 | M(0 | gt, 0 | bt, 0 | Vt, 0 | ee),
                            Vt = i + (St << 3) | 0,
                            H[Vt >> 2] = jt,
                            H[Vt + 4 >> 2] = ee,
                            Vt = i + ((1 | St) << 3) | 0,
                            jt = Vt,
                            Et = 0 | O(0 | Gt, 0 | Qt, 0 | H[jt >> 2], 0 | H[jt + 4 >> 2]),
                            jt = ee,
                            Qt = 0 | O(jt >> 31 >>> 7 | 0, 0, 0 | Et, 0 | jt),
                            Gt = 0 | E(0 | Qt, 0 | ee, 25),
                            Qt = ee,
                            ln = 0 | I(0 | Gt, 0 | Qt, 25),
                            fn = 0 | M(0 | Et, 0 | jt, 0 | ln, 0 | ee),
                            ln = Vt,
                            H[ln >> 2] = fn,
                            H[ln + 4 >> 2] = ee,
                            St = St + 2 | 0,
                            ln = i + (St << 3) | 0,
                            fn = ln,
                            gt = 0 | O(0 | Gt, 0 | Qt, 0 | H[fn >> 2], 0 | H[fn + 4 >> 2]),
                            bt = ee,
                            fn = ln,
                            H[fn >> 2] = gt,
                            H[fn + 4 >> 2] = bt;
                        while (St >>> 0 < 10);St = Ue,
                        bt = 0 | H[St >> 2],
                        gt = 0 | H[St + 4 >> 2],
                        St = i,
                        $t = 0 | H[St >> 2],
                        It = 0 | H[St + 4 >> 2],
                        St = 0 | L(0 | bt, 0 | gt, 18, 0),
                        rn = ee,
                        wt = 0 | O(0 | $t, 0 | It, 0 | bt, 0 | gt),
                        gt = 0 | O(0 | wt, 0 | ee, 0 | St, 0 | rn),
                        rn = ee,
                        St = Ue,
                        H[St >> 2] = 0,
                        H[St + 4 >> 2] = 0,
                        St = 0 | O(rn >> 31 >>> 6 | 0, 0, 0 | gt, 0 | rn),
                        wt = 0 | E(0 | St, 0 | ee, 26),
                        St = ee,
                        bt = 0 | I(0 | wt, 0 | St, 26),
                        It = ee,
                        $t = ze,
                        tn = 0 | H[$t >> 2],
                        Tt = 0 | H[$t + 4 >> 2],
                        $t = 0 | O(0 | gt, 0 | rn, 0 | Pt, 0 | yt),
                        rn = 0 | M(0 | $t, 0 | ee, 0 | bt, 0 | It),
                        It = i,
                        H[It >> 2] = rn,
                        H[It + 4 >> 2] = ee,
                        It = 0 | O(0 | tn, 0 | Tt, 0 | an, 0 | un),
                        Tt = 0 | O(0 | It, 0 | ee, 0 | wt, 0 | St),
                        St = ze,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = Ge,
                        Tt = 0 | O(0 | H[St >> 2], 0 | H[St + 4 >> 2], 0 | Bt, 0 | on),
                        St = Ge,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = Ve,
                        Tt = 0 | O(0 | H[St >> 2], 0 | H[St + 4 >> 2], 0 | Rt, 0 | Ft),
                        St = Ve,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = Ke,
                        Tt = 0 | O(0 | H[St >> 2], 0 | H[St + 4 >> 2], 0 | sn, 0 | Wt),
                        St = Ke,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = He,
                        Tt = 0 | O(0 | H[St >> 2], 0 | H[St + 4 >> 2], 0 | Yt, 0 | nn),
                        St = He,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = Ye,
                        Tt = 0 | O(0 | H[St >> 2], 0 | H[St + 4 >> 2], 0 | At, 0 | pt),
                        St = Ye,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = We,
                        Tt = 0 | O(0 | H[St >> 2], 0 | H[St + 4 >> 2], 0 | zt, 0 | Mt),
                        St = We,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = Ze,
                        Tt = 0 | O(0 | H[St >> 2], 0 | H[St + 4 >> 2], 0 | Lt, 0 | Kt),
                        St = Ze,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = Xe,
                        Tt = 0 | O(0 | H[St >> 2], 0 | H[St + 4 >> 2], 0 | Jt, 0 | mt),
                        St = Xe,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        h(ft, a, i),
                        St = ft + 144 | 0,
                        Tt = 0 | H[St >> 2],
                        wt = 0 | H[St + 4 >> 2],
                        St = ft + 64 | 0,
                        It = St,
                        tn = 0 | H[It >> 2],
                        rn = 0 | H[It + 4 >> 2],
                        It = 0 | L(0 | Tt, 0 | wt, 18, 0),
                        bt = ee,
                        $t = 0 | O(0 | tn, 0 | rn, 0 | Tt, 0 | wt),
                        wt = 0 | O(0 | $t, 0 | ee, 0 | It, 0 | bt),
                        bt = St,
                        H[bt >> 2] = wt,
                        H[bt + 4 >> 2] = ee,
                        bt = ft + 136 | 0,
                        wt = 0 | H[bt >> 2],
                        St = 0 | H[bt + 4 >> 2],
                        bt = ft + 56 | 0,
                        It = bt,
                        $t = 0 | H[It >> 2],
                        Tt = 0 | H[It + 4 >> 2],
                        It = 0 | L(0 | wt, 0 | St, 18, 0),
                        rn = ee,
                        tn = 0 | O(0 | $t, 0 | Tt, 0 | wt, 0 | St),
                        St = 0 | O(0 | tn, 0 | ee, 0 | It, 0 | rn),
                        rn = bt,
                        H[rn >> 2] = St,
                        H[rn + 4 >> 2] = ee,
                        rn = ft + 128 | 0,
                        St = 0 | H[rn >> 2],
                        bt = 0 | H[rn + 4 >> 2],
                        rn = ft + 48 | 0,
                        It = rn,
                        tn = 0 | H[It >> 2],
                        wt = 0 | H[It + 4 >> 2],
                        It = 0 | L(0 | St, 0 | bt, 18, 0),
                        Tt = ee,
                        $t = 0 | O(0 | tn, 0 | wt, 0 | St, 0 | bt),
                        bt = 0 | O(0 | $t, 0 | ee, 0 | It, 0 | Tt),
                        Tt = rn,
                        H[Tt >> 2] = bt,
                        H[Tt + 4 >> 2] = ee,
                        Tt = ft + 120 | 0,
                        bt = 0 | H[Tt >> 2],
                        rn = 0 | H[Tt + 4 >> 2],
                        Tt = ft + 40 | 0,
                        It = Tt,
                        $t = 0 | H[It >> 2],
                        St = 0 | H[It + 4 >> 2],
                        It = 0 | L(0 | bt, 0 | rn, 18, 0),
                        wt = ee,
                        tn = 0 | O(0 | $t, 0 | St, 0 | bt, 0 | rn),
                        rn = 0 | O(0 | tn, 0 | ee, 0 | It, 0 | wt),
                        wt = Tt,
                        H[wt >> 2] = rn,
                        H[wt + 4 >> 2] = ee,
                        wt = ft + 112 | 0,
                        rn = 0 | H[wt >> 2],
                        Tt = 0 | H[wt + 4 >> 2],
                        wt = ft + 32 | 0,
                        It = wt,
                        tn = 0 | H[It >> 2],
                        bt = 0 | H[It + 4 >> 2],
                        It = 0 | L(0 | rn, 0 | Tt, 18, 0),
                        St = ee,
                        $t = 0 | O(0 | tn, 0 | bt, 0 | rn, 0 | Tt),
                        Tt = 0 | O(0 | $t, 0 | ee, 0 | It, 0 | St),
                        St = wt,
                        H[St >> 2] = Tt,
                        H[St + 4 >> 2] = ee,
                        St = ft + 104 | 0,
                        Tt = 0 | H[St >> 2],
                        wt = 0 | H[St + 4 >> 2],
                        St = ft + 24 | 0,
                        It = St,
                        $t = 0 | H[It >> 2],
                        rn = 0 | H[It + 4 >> 2],
                        It = 0 | L(0 | Tt, 0 | wt, 18, 0),
                        bt = ee,
                        tn = 0 | O(0 | $t, 0 | rn, 0 | Tt, 0 | wt),
                        wt = 0 | O(0 | tn, 0 | ee, 0 | It, 0 | bt),
                        bt = St,
                        H[bt >> 2] = wt,
                        H[bt + 4 >> 2] = ee,
                        bt = ft + 96 | 0,
                        wt = 0 | H[bt >> 2],
                        St = 0 | H[bt + 4 >> 2],
                        bt = ft + 16 | 0,
                        It = bt,
                        tn = 0 | H[It >> 2],
                        Tt = 0 | H[It + 4 >> 2],
                        It = 0 | L(0 | wt, 0 | St, 18, 0),
                        rn = ee,
                        $t = 0 | O(0 | tn, 0 | Tt, 0 | wt, 0 | St),
                        St = 0 | O(0 | $t, 0 | ee, 0 | It, 0 | rn),
                        rn = bt,
                        H[rn >> 2] = St,
                        H[rn + 4 >> 2] = ee,
                        rn = ft + 88 | 0,
                        St = 0 | H[rn >> 2],
                        bt = 0 | H[rn + 4 >> 2],
                        rn = ft + 8 | 0,
                        It = rn,
                        $t = 0 | H[It >> 2],
                        wt = 0 | H[It + 4 >> 2],
                        It = 0 | L(0 | St, 0 | bt, 18, 0),
                        Tt = ee,
                        tn = 0 | O(0 | $t, 0 | wt, 0 | St, 0 | bt),
                        bt = 0 | O(0 | tn, 0 | ee, 0 | It, 0 | Tt),
                        Tt = rn,
                        H[Tt >> 2] = bt,
                        H[Tt + 4 >> 2] = ee,
                        Tt = ft + 80 | 0,
                        bt = Tt,
                        It = 0 | H[bt >> 2],
                        tn = 0 | H[bt + 4 >> 2],
                        bt = ft,
                        St = 0 | H[bt >> 2],
                        wt = 0 | H[bt + 4 >> 2],
                        bt = 0 | L(0 | It, 0 | tn, 18, 0),
                        $t = ee,
                        gt = 0 | O(0 | St, 0 | wt, 0 | It, 0 | tn),
                        tn = 0 | O(0 | gt, 0 | ee, 0 | bt, 0 | $t),
                        $t = ee,
                        bt = ft,
                        H[bt >> 2] = tn,
                        H[bt + 4 >> 2] = $t,
                        bt = Tt,
                        H[bt >> 2] = 0,
                        H[bt + 4 >> 2] = 0,
                        bt = $t,
                        $t = tn,
                        tn = 0;
                        do
                            gt = 0 | O(bt >> 31 >>> 6 | 0, 0, 0 | $t, 0 | bt),
                            It = 0 | E(0 | gt, 0 | ee, 26),
                            gt = ee,
                            wt = 0 | I(0 | It, 0 | gt, 26),
                            St = 0 | M(0 | $t, 0 | bt, 0 | wt, 0 | ee),
                            wt = ft + (tn << 3) | 0,
                            H[wt >> 2] = St,
                            H[wt + 4 >> 2] = ee,
                            wt = ft + ((1 | tn) << 3) | 0,
                            St = wt,
                            kt = 0 | O(0 | It, 0 | gt, 0 | H[St >> 2], 0 | H[St + 4 >> 2]),
                            St = ee,
                            gt = 0 | O(St >> 31 >>> 7 | 0, 0, 0 | kt, 0 | St),
                            It = 0 | E(0 | gt, 0 | ee, 25),
                            gt = ee,
                            vt = 0 | I(0 | It, 0 | gt, 25),
                            qt = 0 | M(0 | kt, 0 | St, 0 | vt, 0 | ee),
                            vt = wt,
                            H[vt >> 2] = qt,
                            H[vt + 4 >> 2] = ee,
                            tn = tn + 2 | 0,
                            vt = ft + (tn << 3) | 0,
                            qt = vt,
                            $t = 0 | O(0 | It, 0 | gt, 0 | H[qt >> 2], 0 | H[qt + 4 >> 2]),
                            bt = ee,
                            qt = vt,
                            H[qt >> 2] = $t,
                            H[qt + 4 >> 2] = bt;
                        while (tn >>> 0 < 10);tn = Tt,
                        bt = 0 | H[tn >> 2],
                        $t = 0 | H[tn + 4 >> 2],
                        tn = ft,
                        mt = 0 | H[tn >> 2],
                        Jt = 0 | H[tn + 4 >> 2],
                        tn = 0 | L(0 | bt, 0 | $t, 18, 0),
                        Kt = ee,
                        Lt = 0 | O(0 | mt, 0 | Jt, 0 | bt, 0 | $t),
                        $t = 0 | O(0 | Lt, 0 | ee, 0 | tn, 0 | Kt),
                        Kt = ee,
                        tn = Tt,
                        H[tn >> 2] = 0,
                        H[tn + 4 >> 2] = 0,
                        tn = 0 | O(Kt >> 31 >>> 6 | 0, 0, 0 | $t, 0 | Kt),
                        Lt = 0 | E(0 | tn, 0 | ee, 26),
                        tn = ee,
                        bt = 0 | I(0 | Lt, 0 | tn, 26),
                        Jt = 0 | M(0 | $t, 0 | Kt, 0 | bt, 0 | ee),
                        bt = ft,
                        H[bt >> 2] = Jt,
                        H[bt + 4 >> 2] = ee,
                        bt = rn,
                        Jt = 0 | O(0 | Lt, 0 | tn, 0 | H[bt >> 2], 0 | H[bt + 4 >> 2]),
                        bt = rn,
                        H[bt >> 2] = Jt,
                        H[bt + 4 >> 2] = ee,
                        bt = 0;
                        do
                            Jt = ct + (bt << 3) | 0,
                            tn = Jt,
                            Lt = 0 | H[tn >> 2],
                            Kt = 0 | H[tn + 4 >> 2],
                            tn = it + (bt << 3) | 0,
                            $t = tn,
                            mt = 0 | H[$t >> 2],
                            Mt = 0 | H[$t + 4 >> 2],
                            $t = (mt ^ Lt) & ht,
                            zt = (Mt ^ Kt) & dt,
                            Kt = 0 | E(0, $t ^ Lt | 0, 32),
                            Lt = Jt,
                            H[Lt >> 2] = Kt,
                            H[Lt + 4 >> 2] = ee,
                            Lt = 0 | E(0, $t ^ mt | 0, 32),
                            mt = tn,
                            H[mt >> 2] = Lt,
                            H[mt + 4 >> 2] = ee,
                            bt = bt + 1 | 0;
                        while (10 != (0 | bt));pn = 0;
                        do
                            bt = ft + (pn << 3) | 0,
                            rn = bt,
                            Tt = 0 | H[rn >> 2],
                            mt = 0 | H[rn + 4 >> 2],
                            rn = at + (pn << 3) | 0,
                            Lt = rn,
                            tn = 0 | H[Lt >> 2],
                            $t = 0 | H[Lt + 4 >> 2],
                            Lt = (tn ^ Tt) & ht,
                            Kt = ($t ^ mt) & dt,
                            mt = 0 | E(0, Lt ^ Tt | 0, 32),
                            Tt = bt,
                            H[Tt >> 2] = mt,
                            H[Tt + 4 >> 2] = ee,
                            Tt = 0 | E(0, Lt ^ tn | 0, 32),
                            tn = rn,
                            H[tn >> 2] = Tt,
                            H[tn + 4 >> 2] = ee,
                            pn = pn + 1 | 0;
                        while (10 != (0 | pn));if (nt = nt + 1 | 0,
                        8 == (0 | nt)) {
                            wn = rt,
                            mn = it,
                            gn = ot,
                            vn = at,
                            bn = st,
                            yn = ct,
                            _n = ut,
                            kn = ft;
                            break
                        }
                        dt = ft,
                        ht = ct,
                        tn = at,
                        Tt = it,
                        _ = lt << 1 & 255,
                        ft = ut,
                        ut = dt,
                        ct = st,
                        st = ht,
                        at = ot,
                        ot = tn,
                        it = rt,
                        rt = Tt
                    }
                    if (rt = Je + 1 | 0,
                    32 == (0 | rt)) {
                        xn = yn,
                        An = kn;
                        break
                    }
                    Je = rt,
                    Qe = mn,
                    $e = wn,
                    v = vn,
                    et = gn,
                    b = yn,
                    tt = bn,
                    y = kn,
                    g = _n
                }
                C = x,
                F = xn,
                t = C + 80 | 0;
                do
                    H[C >> 2] = H[F >> 2],
                    C = C + 4 | 0,
                    F = F + 4 | 0;
                while ((0 | C) < (0 | t));C = A,
                F = An,
                t = C + 80 | 0;
                do
                    H[C >> 2] = H[F >> 2],
                    C = C + 4 | 0,
                    F = F + 4 | 0;
                while ((0 | C) < (0 | t));d(i, A),
                d(m, i),
                d(w, m),
                l(o, w, A),
                l(a, o, i),
                d(w, a),
                l(s, w, o),
                d(w, s),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                l(c, w, s),
                d(w, c),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                l(u, m, c),
                d(w, u),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                l(w, m, u),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                l(f, w, c),
                d(w, f),
                d(m, w),
                c = 2;
                do
                    d(w, m),
                    d(m, w),
                    c = c + 2 | 0;
                while ((0 | c) < 50);l(p, m, f),
                d(m, p),
                d(w, m),
                c = 2;
                do
                    d(m, w),
                    d(w, m),
                    c = c + 2 | 0;
                while ((0 | c) < 100);l(m, w, p),
                d(w, m),
                d(m, w),
                p = 2;
                do
                    d(w, m),
                    d(m, w),
                    p = p + 2 | 0;
                while ((0 | p) < 50);for (l(w, m, f),
                d(m, w),
                d(w, m),
                d(m, w),
                d(w, m),
                d(m, w),
                l(S, m, a),
                l(A, x, S),
                S = 0 | H[A >> 2],
                H[i >> 2] = S,
                x = i + 4 | 0,
                H[x >> 2] = H[A + 8 >> 2],
                a = i + 8 | 0,
                H[a >> 2] = H[A + 16 >> 2],
                m = i + 12 | 0,
                H[m >> 2] = H[A + 24 >> 2],
                w = i + 16 | 0,
                H[w >> 2] = H[A + 32 >> 2],
                f = i + 20 | 0,
                H[f >> 2] = H[A + 40 >> 2],
                p = i + 24 | 0,
                H[p >> 2] = H[A + 48 >> 2],
                c = i + 28 | 0,
                H[c >> 2] = H[A + 56 >> 2],
                u = i + 32 | 0,
                H[u >> 2] = H[A + 64 >> 2],
                s = i + 36 | 0,
                H[s >> 2] = H[A + 72 >> 2],
                A = S,
                S = 0; ; ) {
                    if (o = i + (S << 2) | 0,
                    F = A >> 31 & A,
                    1 & S ? (t = F >> 25,
                    H[o >> 2] = (0 | te(t, -33554432)) + A,
                    o = S + 1 | 0,
                    F = i + (o << 2) | 0,
                    xn = (0 | H[F >> 2]) + t | 0,
                    H[F >> 2] = xn,
                    Sn = xn,
                    Pn = o) : (C = F >> 26,
                    H[o >> 2] = (0 | te(C, -67108864)) + A,
                    t = S + 1 | 0,
                    An = i + (t << 2) | 0,
                    xn = (0 | H[An >> 2]) + C | 0,
                    H[An >> 2] = xn,
                    Sn = xn,
                    Pn = t),
                    9 == (0 | Pn))
                        break;
                    A = Sn,
                    S = Pn
                }
                for (Pn = 0 | H[s >> 2],
                S = (Pn >> 31 & Pn) >> 25,
                H[s >> 2] = (0 | te(S, -33554432)) + Pn,
                Pn = (19 * S | 0) + (0 | H[i >> 2]) | 0,
                H[i >> 2] = Pn,
                S = Pn,
                Pn = 0; ; ) {
                    if (Sn = i + (Pn << 2) | 0,
                    A = S >> 31 & S,
                    1 & Pn ? (t = A >> 25,
                    H[Sn >> 2] = (0 | te(t, -33554432)) + S,
                    Sn = Pn + 1 | 0,
                    A = i + (Sn << 2) | 0,
                    xn = (0 | H[A >> 2]) + t | 0,
                    H[A >> 2] = xn,
                    Cn = Sn,
                    En = xn) : (o = A >> 26,
                    H[Sn >> 2] = (0 | te(o, -67108864)) + S,
                    xn = Pn + 1 | 0,
                    F = i + (xn << 2) | 0,
                    t = (0 | H[F >> 2]) + o | 0,
                    H[F >> 2] = t,
                    Cn = xn,
                    En = t),
                    9 == (0 | Cn))
                        break;
                    S = En,
                    Pn = Cn
                }
                for (Cn = 0 | H[s >> 2],
                Pn = (Cn >> 31 & Cn) >> 25,
                H[s >> 2] = (0 | te(Pn, -33554432)) + Cn,
                Cn = (19 * Pn | 0) + (0 | H[i >> 2]) | 0,
                Pn = (Cn >> 31 & Cn) >> 26,
                En = (0 | te(Pn, -67108864)) + Cn | 0,
                H[i >> 2] = En,
                H[x >> 2] = Pn + (0 | H[x >> 2]),
                Pn = En,
                En = 0; ; ) {
                    if (Cn = i + (En << 2) | 0,
                    1 & En ? (H[Cn >> 2] = 33554431 & Pn,
                    Cn = En + 1 | 0,
                    Sn = i + (Cn << 2) | 0,
                    S = (0 | H[Sn >> 2]) + (Pn >> 25) | 0,
                    H[Sn >> 2] = S,
                    Mn = Cn,
                    On = S) : (H[Cn >> 2] = 67108863 & Pn,
                    S = En + 1 | 0,
                    xn = i + (S << 2) | 0,
                    Sn = (0 | H[xn >> 2]) + (Pn >> 26) | 0,
                    H[xn >> 2] = Sn,
                    Mn = S,
                    On = Sn),
                    9 == (0 | Mn))
                        break;
                    Pn = On,
                    En = Mn
                }
                for (Mn = 0 | H[s >> 2],
                H[s >> 2] = 33554431 & Mn,
                En = (19 * (Mn >> 25) | 0) + (0 | H[i >> 2]) | 0,
                H[i >> 2] = En,
                Mn = En,
                En = 0; ; ) {
                    if (On = i + (En << 2) | 0,
                    1 & En ? (H[On >> 2] = 33554431 & Mn,
                    On = En + 1 | 0,
                    Cn = i + (On << 2) | 0,
                    Pn = (0 | H[Cn >> 2]) + (Mn >> 25) | 0,
                    H[Cn >> 2] = Pn,
                    Tn = On,
                    Dn = Pn) : (H[On >> 2] = 67108863 & Mn,
                    Pn = En + 1 | 0,
                    S = i + (Pn << 2) | 0,
                    Cn = (0 | H[S >> 2]) + (Mn >> 26) | 0,
                    H[S >> 2] = Cn,
                    Tn = Pn,
                    Dn = Cn),
                    9 == (0 | Tn))
                        break;
                    Mn = Dn,
                    En = Tn
                }
                for (Tn = 0 | H[s >> 2],
                En = 33554431 & Tn,
                H[s >> 2] = En,
                Dn = (19 * (Tn >> 25) | 0) + (0 | H[i >> 2]) | 0,
                H[i >> 2] = Dn,
                Tn = 1,
                Mn = ~(Dn + -67108845 >> 31); ; ) {
                    if (Pn = 0 | H[i + (Tn << 2) >> 2],
                    1 & Tn ? (Cn = Pn << 16 & (Pn ^ -33554432),
                    Pn = Cn << 8 & Cn,
                    Cn = Pn << 4 & Pn,
                    Pn = Cn << 2 & Cn,
                    In = Pn << 1 & Pn) : (On = Pn << 16 & (Pn ^ -67108864),
                    Cn = On << 8 & On,
                    On = Cn << 4 & Cn,
                    Cn = On << 2 & On,
                    In = Cn << 1 & Cn),
                    Pn = In >> 31 & Mn,
                    Tn = Tn + 1 | 0,
                    10 == (0 | Tn)) {
                        Fn = Pn;
                        break
                    }
                    Mn = Pn
                }
                return Mn = Dn - (67108845 & Fn) | 0,
                H[i >> 2] = Mn,
                i = 67108863 & Fn,
                Dn = 33554431 & Fn,
                Tn = (0 | H[x >> 2]) - Dn | 0,
                In = Tn << 2,
                Pn = (0 | H[a >> 2]) - i | 0,
                Cn = Pn << 3,
                On = (0 | H[m >> 2]) - Dn | 0,
                S = On << 5,
                Sn = (0 | H[w >> 2]) - Fn | 0,
                Fn = Sn << 6,
                xn = (0 | H[f >> 2]) - Dn | 0,
                H[f >> 2] = xn,
                f = (0 | H[p >> 2]) - i | 0,
                A = f << 1,
                t = (0 | H[c >> 2]) - Dn | 0,
                F = t << 3,
                o = (0 | H[u >> 2]) - i << 4,
                H[x >> 2] = In,
                H[a >> 2] = Cn,
                H[m >> 2] = S,
                H[w >> 2] = Fn,
                H[p >> 2] = A,
                H[c >> 2] = F,
                H[u >> 2] = o,
                H[s >> 2] = En - Dn << 6,
                K[e >> 0] = Mn,
                K[e + 1 >> 0] = Mn >>> 8,
                K[e + 2 >> 0] = Mn >>> 16,
                K[e + 3 >> 0] = In | Mn >>> 24,
                K[e + 4 >> 0] = Tn >>> 6,
                K[e + 5 >> 0] = Tn >>> 14,
                K[e + 6 >> 0] = Cn | Tn >>> 22,
                K[e + 7 >> 0] = Pn >>> 5,
                K[e + 8 >> 0] = Pn >>> 13,
                K[e + 9 >> 0] = S | Pn >>> 21,
                K[e + 10 >> 0] = On >>> 3,
                K[e + 11 >> 0] = On >>> 11,
                K[e + 12 >> 0] = Fn | On >>> 19,
                K[e + 13 >> 0] = Sn >>> 2,
                K[e + 14 >> 0] = Sn >>> 10,
                K[e + 15 >> 0] = Sn >>> 18,
                K[e + 16 >> 0] = xn,
                K[e + 17 >> 0] = xn >>> 8,
                K[e + 18 >> 0] = xn >>> 16,
                K[e + 19 >> 0] = xn >>> 24 | A,
                K[e + 20 >> 0] = f >>> 7,
                K[e + 21 >> 0] = f >>> 15,
                K[e + 22 >> 0] = f >>> 23 | F,
                K[e + 23 >> 0] = t >>> 5,
                K[e + 24 >> 0] = t >>> 13,
                F = 0 | H[u >> 2],
                K[e + 25 >> 0] = t >>> 21 | F,
                K[e + 26 >> 0] = F >>> 8,
                K[e + 27 >> 0] = F >>> 16,
                t = 0 | H[s >> 2],
                K[e + 28 >> 0] = F >>> 24 | t,
                K[e + 29 >> 0] = t >>> 8,
                K[e + 30 >> 0] = t >>> 16,
                K[e + 31 >> 0] = t >>> 24,
                W = r,
                0
            }
            function l(e, t, n) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n;
                var r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0
                  , c = 0
                  , u = 0
                  , f = 0
                  , l = 0
                  , d = 0
                  , p = 0
                  , w = 0;
                r = W,
                W = W + 160 | 0,
                i = r,
                h(i, t, n),
                n = i + 144 | 0,
                t = 0 | H[n >> 2],
                o = 0 | H[n + 4 >> 2],
                n = i + 64 | 0,
                a = n,
                s = 0 | H[a >> 2],
                c = 0 | H[a + 4 >> 2],
                a = 0 | L(0 | t, 0 | o, 18, 0),
                u = ee,
                f = 0 | O(0 | s, 0 | c, 0 | t, 0 | o),
                o = 0 | O(0 | f, 0 | ee, 0 | a, 0 | u),
                u = n,
                H[u >> 2] = o,
                H[u + 4 >> 2] = ee,
                u = i + 136 | 0,
                o = 0 | H[u >> 2],
                n = 0 | H[u + 4 >> 2],
                u = i + 56 | 0,
                a = u,
                f = 0 | H[a >> 2],
                t = 0 | H[a + 4 >> 2],
                a = 0 | L(0 | o, 0 | n, 18, 0),
                c = ee,
                s = 0 | O(0 | f, 0 | t, 0 | o, 0 | n),
                n = 0 | O(0 | s, 0 | ee, 0 | a, 0 | c),
                c = u,
                H[c >> 2] = n,
                H[c + 4 >> 2] = ee,
                c = i + 128 | 0,
                n = 0 | H[c >> 2],
                u = 0 | H[c + 4 >> 2],
                c = i + 48 | 0,
                a = c,
                s = 0 | H[a >> 2],
                o = 0 | H[a + 4 >> 2],
                a = 0 | L(0 | n, 0 | u, 18, 0),
                t = ee,
                f = 0 | O(0 | s, 0 | o, 0 | n, 0 | u),
                u = 0 | O(0 | f, 0 | ee, 0 | a, 0 | t),
                t = c,
                H[t >> 2] = u,
                H[t + 4 >> 2] = ee,
                t = i + 120 | 0,
                u = 0 | H[t >> 2],
                c = 0 | H[t + 4 >> 2],
                t = i + 40 | 0,
                a = t,
                f = 0 | H[a >> 2],
                n = 0 | H[a + 4 >> 2],
                a = 0 | L(0 | u, 0 | c, 18, 0),
                o = ee,
                s = 0 | O(0 | f, 0 | n, 0 | u, 0 | c),
                c = 0 | O(0 | s, 0 | ee, 0 | a, 0 | o),
                o = t,
                H[o >> 2] = c,
                H[o + 4 >> 2] = ee,
                o = i + 112 | 0,
                c = 0 | H[o >> 2],
                t = 0 | H[o + 4 >> 2],
                o = i + 32 | 0,
                a = o,
                s = 0 | H[a >> 2],
                u = 0 | H[a + 4 >> 2],
                a = 0 | L(0 | c, 0 | t, 18, 0),
                n = ee,
                f = 0 | O(0 | s, 0 | u, 0 | c, 0 | t),
                t = 0 | O(0 | f, 0 | ee, 0 | a, 0 | n),
                n = o,
                H[n >> 2] = t,
                H[n + 4 >> 2] = ee,
                n = i + 104 | 0,
                t = 0 | H[n >> 2],
                o = 0 | H[n + 4 >> 2],
                n = i + 24 | 0,
                a = n,
                f = 0 | H[a >> 2],
                c = 0 | H[a + 4 >> 2],
                a = 0 | L(0 | t, 0 | o, 18, 0),
                u = ee,
                s = 0 | O(0 | f, 0 | c, 0 | t, 0 | o),
                o = 0 | O(0 | s, 0 | ee, 0 | a, 0 | u),
                u = n,
                H[u >> 2] = o,
                H[u + 4 >> 2] = ee,
                u = i + 96 | 0,
                o = 0 | H[u >> 2],
                n = 0 | H[u + 4 >> 2],
                u = i + 16 | 0,
                a = u,
                s = 0 | H[a >> 2],
                t = 0 | H[a + 4 >> 2],
                a = 0 | L(0 | o, 0 | n, 18, 0),
                c = ee,
                f = 0 | O(0 | s, 0 | t, 0 | o, 0 | n),
                n = 0 | O(0 | f, 0 | ee, 0 | a, 0 | c),
                c = u,
                H[c >> 2] = n,
                H[c + 4 >> 2] = ee,
                c = i + 88 | 0,
                n = 0 | H[c >> 2],
                u = 0 | H[c + 4 >> 2],
                c = i + 8 | 0,
                a = c,
                f = 0 | H[a >> 2],
                o = 0 | H[a + 4 >> 2],
                a = 0 | L(0 | n, 0 | u, 18, 0),
                t = ee,
                s = 0 | O(0 | f, 0 | o, 0 | n, 0 | u),
                u = 0 | O(0 | s, 0 | ee, 0 | a, 0 | t),
                t = c,
                H[t >> 2] = u,
                H[t + 4 >> 2] = ee,
                t = i + 80 | 0,
                u = t,
                a = 0 | H[u >> 2],
                s = 0 | H[u + 4 >> 2],
                u = i,
                n = 0 | H[u >> 2],
                o = 0 | H[u + 4 >> 2],
                u = 0 | L(0 | a, 0 | s, 18, 0),
                f = ee,
                l = 0 | O(0 | n, 0 | o, 0 | a, 0 | s),
                s = 0 | O(0 | l, 0 | ee, 0 | u, 0 | f),
                f = ee,
                u = i,
                H[u >> 2] = s,
                H[u + 4 >> 2] = f,
                u = t,
                H[u >> 2] = 0,
                H[u + 4 >> 2] = 0,
                u = f,
                f = s,
                s = 0;
                do
                    l = 0 | O(u >> 31 >>> 6 | 0, 0, 0 | f, 0 | u),
                    a = 0 | E(0 | l, 0 | ee, 26),
                    l = ee,
                    o = 0 | I(0 | a, 0 | l, 26),
                    n = 0 | M(0 | f, 0 | u, 0 | o, 0 | ee),
                    o = i + (s << 3) | 0,
                    H[o >> 2] = n,
                    H[o + 4 >> 2] = ee,
                    o = i + ((1 | s) << 3) | 0,
                    n = o,
                    d = 0 | O(0 | a, 0 | l, 0 | H[n >> 2], 0 | H[n + 4 >> 2]),
                    n = ee,
                    l = 0 | O(n >> 31 >>> 7 | 0, 0, 0 | d, 0 | n),
                    a = 0 | E(0 | l, 0 | ee, 25),
                    l = ee,
                    p = 0 | I(0 | a, 0 | l, 25),
                    w = 0 | M(0 | d, 0 | n, 0 | p, 0 | ee),
                    p = o,
                    H[p >> 2] = w,
                    H[p + 4 >> 2] = ee,
                    s = s + 2 | 0,
                    p = i + (s << 3) | 0,
                    w = p,
                    f = 0 | O(0 | a, 0 | l, 0 | H[w >> 2], 0 | H[w + 4 >> 2]),
                    u = ee,
                    w = p,
                    H[w >> 2] = f,
                    H[w + 4 >> 2] = u;
                while (s >>> 0 < 10);s = t,
                u = 0 | H[s >> 2],
                f = 0 | H[s + 4 >> 2],
                s = i,
                w = 0 | H[s >> 2],
                p = 0 | H[s + 4 >> 2],
                s = 0 | L(0 | u, 0 | f, 18, 0),
                l = ee,
                a = 0 | O(0 | w, 0 | p, 0 | u, 0 | f),
                f = 0 | O(0 | a, 0 | ee, 0 | s, 0 | l),
                l = ee,
                s = t,
                H[s >> 2] = 0,
                H[s + 4 >> 2] = 0,
                s = 0 | O(l >> 31 >>> 6 | 0, 0, 0 | f, 0 | l),
                t = 0 | E(0 | s, 0 | ee, 26),
                s = ee,
                a = 0 | I(0 | t, 0 | s, 26),
                u = 0 | M(0 | f, 0 | l, 0 | a, 0 | ee),
                a = i,
                H[a >> 2] = u,
                H[a + 4 >> 2] = ee,
                a = c,
                u = 0 | O(0 | t, 0 | s, 0 | H[a >> 2], 0 | H[a + 4 >> 2]),
                a = c,
                H[a >> 2] = u,
                H[a + 4 >> 2] = ee,
                a = e,
                e = i,
                i = a + 80 | 0;
                do
                    H[a >> 2] = H[e >> 2],
                    a = a + 4 | 0,
                    e = e + 4 | 0;
                while ((0 | a) < (0 | i));W = r
            }
            function h(e, t, n) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n;
                var r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0
                  , c = 0
                  , u = 0
                  , f = 0
                  , l = 0
                  , h = 0
                  , d = 0
                  , p = 0
                  , w = 0
                  , m = 0
                  , g = 0
                  , v = 0
                  , b = 0
                  , y = 0
                  , _ = 0
                  , k = 0
                  , x = 0
                  , A = 0
                  , S = 0;
                r = 0 | E(0, 0 | H[t >> 2], 32),
                i = ee,
                o = 0 | E(0, 0 | H[n >> 2], 32),
                a = 0 | L(0 | o, 0 | ee, 0 | r, 0 | i),
                i = e,
                H[i >> 2] = a,
                H[i + 4 >> 2] = ee,
                i = 0 | E(0, 0 | H[t >> 2], 32),
                a = ee,
                r = n + 8 | 0,
                o = 0 | E(0, 0 | H[r >> 2], 32),
                s = 0 | L(0 | o, 0 | ee, 0 | i, 0 | a),
                a = ee,
                i = t + 8 | 0,
                o = 0 | E(0, 0 | H[i >> 2], 32),
                c = ee,
                u = 0 | E(0, 0 | H[n >> 2], 32),
                f = 0 | L(0 | u, 0 | ee, 0 | o, 0 | c),
                c = 0 | O(0 | f, 0 | ee, 0 | s, 0 | a),
                a = e + 8 | 0,
                H[a >> 2] = c,
                H[a + 4 >> 2] = ee,
                a = 0 | E(0, 0 | H[i >> 2], 31),
                c = ee,
                s = 0 | E(0, 0 | H[r >> 2], 32),
                f = 0 | L(0 | s, 0 | ee, 0 | a, 0 | c),
                c = ee,
                a = 0 | E(0, 0 | H[t >> 2], 32),
                s = ee,
                o = n + 16 | 0,
                u = 0 | E(0, 0 | H[o >> 2], 32),
                l = 0 | L(0 | u, 0 | ee, 0 | a, 0 | s),
                s = 0 | O(0 | l, 0 | ee, 0 | f, 0 | c),
                c = ee,
                f = t + 16 | 0,
                l = 0 | E(0, 0 | H[f >> 2], 32),
                a = ee,
                u = 0 | E(0, 0 | H[n >> 2], 32),
                h = 0 | L(0 | u, 0 | ee, 0 | l, 0 | a),
                a = 0 | O(0 | s, 0 | c, 0 | h, 0 | ee),
                h = e + 16 | 0,
                H[h >> 2] = a,
                H[h + 4 >> 2] = ee,
                h = 0 | E(0, 0 | H[i >> 2], 32),
                a = ee,
                c = 0 | E(0, 0 | H[o >> 2], 32),
                s = 0 | L(0 | c, 0 | ee, 0 | h, 0 | a),
                a = ee,
                h = 0 | E(0, 0 | H[f >> 2], 32),
                c = ee,
                l = 0 | E(0, 0 | H[r >> 2], 32),
                u = 0 | L(0 | l, 0 | ee, 0 | h, 0 | c),
                c = 0 | O(0 | u, 0 | ee, 0 | s, 0 | a),
                a = ee,
                s = 0 | E(0, 0 | H[t >> 2], 32),
                u = ee,
                h = n + 24 | 0,
                l = 0 | E(0, 0 | H[h >> 2], 32),
                d = 0 | L(0 | l, 0 | ee, 0 | s, 0 | u),
                u = 0 | O(0 | c, 0 | a, 0 | d, 0 | ee),
                d = ee,
                a = t + 24 | 0,
                c = 0 | E(0, 0 | H[a >> 2], 32),
                s = ee,
                l = 0 | E(0, 0 | H[n >> 2], 32),
                p = 0 | L(0 | l, 0 | ee, 0 | c, 0 | s),
                s = 0 | O(0 | u, 0 | d, 0 | p, 0 | ee),
                p = e + 24 | 0,
                H[p >> 2] = s,
                H[p + 4 >> 2] = ee,
                p = 0 | E(0, 0 | H[f >> 2], 32),
                s = ee,
                d = 0 | E(0, 0 | H[o >> 2], 32),
                u = 0 | L(0 | d, 0 | ee, 0 | p, 0 | s),
                s = ee,
                p = 0 | E(0, 0 | H[i >> 2], 32),
                d = ee,
                c = 0 | E(0, 0 | H[h >> 2], 32),
                l = 0 | L(0 | c, 0 | ee, 0 | p, 0 | d),
                d = ee,
                p = 0 | E(0, 0 | H[a >> 2], 32),
                c = ee,
                w = 0 | E(0, 0 | H[r >> 2], 32),
                m = 0 | L(0 | w, 0 | ee, 0 | p, 0 | c),
                c = 0 | O(0 | m, 0 | ee, 0 | l, 0 | d),
                d = 0 | I(0 | c, 0 | ee, 1),
                c = 0 | O(0 | d, 0 | ee, 0 | u, 0 | s),
                s = ee,
                u = 0 | E(0, 0 | H[t >> 2], 32),
                d = ee,
                l = n + 32 | 0,
                m = 0 | E(0, 0 | H[l >> 2], 32),
                p = 0 | L(0 | m, 0 | ee, 0 | u, 0 | d),
                d = 0 | O(0 | c, 0 | s, 0 | p, 0 | ee),
                p = ee,
                s = t + 32 | 0,
                c = 0 | E(0, 0 | H[s >> 2], 32),
                u = ee,
                m = 0 | E(0, 0 | H[n >> 2], 32),
                w = 0 | L(0 | m, 0 | ee, 0 | c, 0 | u),
                u = 0 | O(0 | d, 0 | p, 0 | w, 0 | ee),
                w = e + 32 | 0,
                H[w >> 2] = u,
                H[w + 4 >> 2] = ee,
                w = 0 | E(0, 0 | H[f >> 2], 32),
                u = ee,
                p = 0 | E(0, 0 | H[h >> 2], 32),
                d = 0 | L(0 | p, 0 | ee, 0 | w, 0 | u),
                u = ee,
                w = 0 | E(0, 0 | H[a >> 2], 32),
                p = ee,
                c = 0 | E(0, 0 | H[o >> 2], 32),
                m = 0 | L(0 | c, 0 | ee, 0 | w, 0 | p),
                p = 0 | O(0 | m, 0 | ee, 0 | d, 0 | u),
                u = ee,
                d = 0 | E(0, 0 | H[i >> 2], 32),
                m = ee,
                w = 0 | E(0, 0 | H[l >> 2], 32),
                c = 0 | L(0 | w, 0 | ee, 0 | d, 0 | m),
                m = 0 | O(0 | p, 0 | u, 0 | c, 0 | ee),
                c = ee,
                u = 0 | E(0, 0 | H[s >> 2], 32),
                p = ee,
                d = 0 | E(0, 0 | H[r >> 2], 32),
                w = 0 | L(0 | d, 0 | ee, 0 | u, 0 | p),
                p = 0 | O(0 | m, 0 | c, 0 | w, 0 | ee),
                w = ee,
                c = 0 | E(0, 0 | H[t >> 2], 32),
                m = ee,
                u = n + 40 | 0,
                d = 0 | E(0, 0 | H[u >> 2], 32),
                g = 0 | L(0 | d, 0 | ee, 0 | c, 0 | m),
                m = 0 | O(0 | p, 0 | w, 0 | g, 0 | ee),
                g = ee,
                w = t + 40 | 0,
                p = 0 | E(0, 0 | H[w >> 2], 32),
                c = ee,
                d = 0 | E(0, 0 | H[n >> 2], 32),
                v = 0 | L(0 | d, 0 | ee, 0 | p, 0 | c),
                c = 0 | O(0 | m, 0 | g, 0 | v, 0 | ee),
                v = e + 40 | 0,
                H[v >> 2] = c,
                H[v + 4 >> 2] = ee,
                v = 0 | E(0, 0 | H[a >> 2], 32),
                c = ee,
                g = 0 | E(0, 0 | H[h >> 2], 32),
                m = 0 | L(0 | g, 0 | ee, 0 | v, 0 | c),
                c = ee,
                v = 0 | E(0, 0 | H[i >> 2], 32),
                g = ee,
                p = 0 | E(0, 0 | H[u >> 2], 32),
                d = 0 | L(0 | p, 0 | ee, 0 | v, 0 | g),
                g = 0 | O(0 | d, 0 | ee, 0 | m, 0 | c),
                c = ee,
                m = 0 | E(0, 0 | H[w >> 2], 32),
                d = ee,
                v = 0 | E(0, 0 | H[r >> 2], 32),
                p = 0 | L(0 | v, 0 | ee, 0 | m, 0 | d),
                d = 0 | O(0 | g, 0 | c, 0 | p, 0 | ee),
                p = 0 | I(0 | d, 0 | ee, 1),
                d = ee,
                c = 0 | E(0, 0 | H[f >> 2], 32),
                g = ee,
                m = 0 | E(0, 0 | H[l >> 2], 32),
                v = 0 | L(0 | m, 0 | ee, 0 | c, 0 | g),
                g = 0 | O(0 | p, 0 | d, 0 | v, 0 | ee),
                v = ee,
                d = 0 | E(0, 0 | H[s >> 2], 32),
                p = ee,
                c = 0 | E(0, 0 | H[o >> 2], 32),
                m = 0 | L(0 | c, 0 | ee, 0 | d, 0 | p),
                p = 0 | O(0 | g, 0 | v, 0 | m, 0 | ee),
                m = ee,
                v = 0 | E(0, 0 | H[t >> 2], 32),
                g = ee,
                d = n + 48 | 0,
                c = 0 | E(0, 0 | H[d >> 2], 32),
                b = 0 | L(0 | c, 0 | ee, 0 | v, 0 | g),
                g = 0 | O(0 | p, 0 | m, 0 | b, 0 | ee),
                b = ee,
                m = t + 48 | 0,
                p = 0 | E(0, 0 | H[m >> 2], 32),
                v = ee,
                c = 0 | E(0, 0 | H[n >> 2], 32),
                y = 0 | L(0 | c, 0 | ee, 0 | p, 0 | v),
                v = 0 | O(0 | g, 0 | b, 0 | y, 0 | ee),
                y = e + 48 | 0,
                H[y >> 2] = v,
                H[y + 4 >> 2] = ee,
                y = 0 | E(0, 0 | H[a >> 2], 32),
                v = ee,
                b = 0 | E(0, 0 | H[l >> 2], 32),
                g = 0 | L(0 | b, 0 | ee, 0 | y, 0 | v),
                v = ee,
                y = 0 | E(0, 0 | H[s >> 2], 32),
                b = ee,
                p = 0 | E(0, 0 | H[h >> 2], 32),
                c = 0 | L(0 | p, 0 | ee, 0 | y, 0 | b),
                b = 0 | O(0 | c, 0 | ee, 0 | g, 0 | v),
                v = ee,
                g = 0 | E(0, 0 | H[f >> 2], 32),
                c = ee,
                y = 0 | E(0, 0 | H[u >> 2], 32),
                p = 0 | L(0 | y, 0 | ee, 0 | g, 0 | c),
                c = 0 | O(0 | b, 0 | v, 0 | p, 0 | ee),
                p = ee,
                v = 0 | E(0, 0 | H[w >> 2], 32),
                b = ee,
                g = 0 | E(0, 0 | H[o >> 2], 32),
                y = 0 | L(0 | g, 0 | ee, 0 | v, 0 | b),
                b = 0 | O(0 | c, 0 | p, 0 | y, 0 | ee),
                y = ee,
                p = 0 | E(0, 0 | H[i >> 2], 32),
                c = ee,
                v = 0 | E(0, 0 | H[d >> 2], 32),
                g = 0 | L(0 | v, 0 | ee, 0 | p, 0 | c),
                c = 0 | O(0 | b, 0 | y, 0 | g, 0 | ee),
                g = ee,
                y = 0 | E(0, 0 | H[m >> 2], 32),
                b = ee,
                p = 0 | E(0, 0 | H[r >> 2], 32),
                v = 0 | L(0 | p, 0 | ee, 0 | y, 0 | b),
                b = 0 | O(0 | c, 0 | g, 0 | v, 0 | ee),
                v = ee,
                g = 0 | E(0, 0 | H[t >> 2], 32),
                c = ee,
                y = n + 56 | 0,
                p = 0 | E(0, 0 | H[y >> 2], 32),
                _ = 0 | L(0 | p, 0 | ee, 0 | g, 0 | c),
                c = 0 | O(0 | b, 0 | v, 0 | _, 0 | ee),
                _ = ee,
                v = t + 56 | 0,
                b = 0 | E(0, 0 | H[v >> 2], 32),
                g = ee,
                p = 0 | E(0, 0 | H[n >> 2], 32),
                k = 0 | L(0 | p, 0 | ee, 0 | b, 0 | g),
                g = 0 | O(0 | c, 0 | _, 0 | k, 0 | ee),
                k = e + 56 | 0,
                H[k >> 2] = g,
                H[k + 4 >> 2] = ee,
                k = 0 | E(0, 0 | H[s >> 2], 32),
                g = ee,
                _ = 0 | E(0, 0 | H[l >> 2], 32),
                c = 0 | L(0 | _, 0 | ee, 0 | k, 0 | g),
                g = ee,
                k = 0 | E(0, 0 | H[a >> 2], 32),
                _ = ee,
                b = 0 | E(0, 0 | H[u >> 2], 32),
                p = 0 | L(0 | b, 0 | ee, 0 | k, 0 | _),
                _ = ee,
                k = 0 | E(0, 0 | H[w >> 2], 32),
                b = ee,
                x = 0 | E(0, 0 | H[h >> 2], 32),
                A = 0 | L(0 | x, 0 | ee, 0 | k, 0 | b),
                b = 0 | O(0 | A, 0 | ee, 0 | p, 0 | _),
                _ = ee,
                p = 0 | E(0, 0 | H[i >> 2], 32),
                A = ee,
                k = 0 | E(0, 0 | H[y >> 2], 32),
                x = 0 | L(0 | k, 0 | ee, 0 | p, 0 | A),
                A = 0 | O(0 | b, 0 | _, 0 | x, 0 | ee),
                x = ee,
                _ = 0 | E(0, 0 | H[v >> 2], 32),
                b = ee,
                p = 0 | E(0, 0 | H[r >> 2], 32),
                k = 0 | L(0 | p, 0 | ee, 0 | _, 0 | b),
                b = 0 | O(0 | A, 0 | x, 0 | k, 0 | ee),
                k = 0 | I(0 | b, 0 | ee, 1),
                b = 0 | O(0 | k, 0 | ee, 0 | c, 0 | g),
                g = ee,
                c = 0 | E(0, 0 | H[f >> 2], 32),
                k = ee,
                x = 0 | E(0, 0 | H[d >> 2], 32),
                A = 0 | L(0 | x, 0 | ee, 0 | c, 0 | k),
                k = 0 | O(0 | b, 0 | g, 0 | A, 0 | ee),
                A = ee,
                g = 0 | E(0, 0 | H[m >> 2], 32),
                b = ee,
                c = 0 | E(0, 0 | H[o >> 2], 32),
                x = 0 | L(0 | c, 0 | ee, 0 | g, 0 | b),
                b = 0 | O(0 | k, 0 | A, 0 | x, 0 | ee),
                x = ee,
                A = 0 | E(0, 0 | H[t >> 2], 32),
                k = ee,
                g = n + 64 | 0,
                c = 0 | E(0, 0 | H[g >> 2], 32),
                _ = 0 | L(0 | c, 0 | ee, 0 | A, 0 | k),
                k = 0 | O(0 | b, 0 | x, 0 | _, 0 | ee),
                _ = ee,
                x = t + 64 | 0,
                b = 0 | E(0, 0 | H[x >> 2], 32),
                A = ee,
                c = 0 | E(0, 0 | H[n >> 2], 32),
                p = 0 | L(0 | c, 0 | ee, 0 | b, 0 | A),
                A = 0 | O(0 | k, 0 | _, 0 | p, 0 | ee),
                p = e + 64 | 0,
                H[p >> 2] = A,
                H[p + 4 >> 2] = ee,
                p = 0 | E(0, 0 | H[s >> 2], 32),
                A = ee,
                _ = 0 | E(0, 0 | H[u >> 2], 32),
                k = 0 | L(0 | _, 0 | ee, 0 | p, 0 | A),
                A = ee,
                p = 0 | E(0, 0 | H[w >> 2], 32),
                _ = ee,
                b = 0 | E(0, 0 | H[l >> 2], 32),
                c = 0 | L(0 | b, 0 | ee, 0 | p, 0 | _),
                _ = 0 | O(0 | c, 0 | ee, 0 | k, 0 | A),
                A = ee,
                k = 0 | E(0, 0 | H[a >> 2], 32),
                c = ee,
                p = 0 | E(0, 0 | H[d >> 2], 32),
                b = 0 | L(0 | p, 0 | ee, 0 | k, 0 | c),
                c = 0 | O(0 | _, 0 | A, 0 | b, 0 | ee),
                b = ee,
                A = 0 | E(0, 0 | H[m >> 2], 32),
                _ = ee,
                k = 0 | E(0, 0 | H[h >> 2], 32),
                p = 0 | L(0 | k, 0 | ee, 0 | A, 0 | _),
                _ = 0 | O(0 | c, 0 | b, 0 | p, 0 | ee),
                p = ee,
                b = 0 | E(0, 0 | H[f >> 2], 32),
                c = ee,
                A = 0 | E(0, 0 | H[y >> 2], 32),
                k = 0 | L(0 | A, 0 | ee, 0 | b, 0 | c),
                c = 0 | O(0 | _, 0 | p, 0 | k, 0 | ee),
                k = ee,
                p = 0 | E(0, 0 | H[v >> 2], 32),
                _ = ee,
                b = 0 | E(0, 0 | H[o >> 2], 32),
                A = 0 | L(0 | b, 0 | ee, 0 | p, 0 | _),
                _ = 0 | O(0 | c, 0 | k, 0 | A, 0 | ee),
                A = ee,
                k = 0 | E(0, 0 | H[i >> 2], 32),
                c = ee,
                p = 0 | E(0, 0 | H[g >> 2], 32),
                b = 0 | L(0 | p, 0 | ee, 0 | k, 0 | c),
                c = 0 | O(0 | _, 0 | A, 0 | b, 0 | ee),
                b = ee,
                A = 0 | E(0, 0 | H[x >> 2], 32),
                _ = ee,
                k = 0 | E(0, 0 | H[r >> 2], 32),
                p = 0 | L(0 | k, 0 | ee, 0 | A, 0 | _),
                _ = 0 | O(0 | c, 0 | b, 0 | p, 0 | ee),
                p = ee,
                b = 0 | E(0, 0 | H[t >> 2], 32),
                c = ee,
                A = n + 72 | 0,
                k = 0 | E(0, 0 | H[A >> 2], 32),
                S = 0 | L(0 | k, 0 | ee, 0 | b, 0 | c),
                c = 0 | O(0 | _, 0 | p, 0 | S, 0 | ee),
                S = ee,
                p = t + 72 | 0,
                t = 0 | E(0, 0 | H[p >> 2], 32),
                _ = ee,
                b = 0 | E(0, 0 | H[n >> 2], 32),
                n = 0 | L(0 | b, 0 | ee, 0 | t, 0 | _),
                _ = 0 | O(0 | c, 0 | S, 0 | n, 0 | ee),
                n = e + 72 | 0,
                H[n >> 2] = _,
                H[n + 4 >> 2] = ee,
                n = 0 | E(0, 0 | H[w >> 2], 32),
                _ = ee,
                S = 0 | E(0, 0 | H[u >> 2], 32),
                c = 0 | L(0 | S, 0 | ee, 0 | n, 0 | _),
                _ = ee,
                n = 0 | E(0, 0 | H[a >> 2], 32),
                S = ee,
                t = 0 | E(0, 0 | H[y >> 2], 32),
                b = 0 | L(0 | t, 0 | ee, 0 | n, 0 | S),
                S = 0 | O(0 | b, 0 | ee, 0 | c, 0 | _),
                _ = ee,
                c = 0 | E(0, 0 | H[v >> 2], 32),
                b = ee,
                n = 0 | E(0, 0 | H[h >> 2], 32),
                t = 0 | L(0 | n, 0 | ee, 0 | c, 0 | b),
                b = 0 | O(0 | S, 0 | _, 0 | t, 0 | ee),
                t = ee,
                _ = 0 | E(0, 0 | H[i >> 2], 32),
                i = ee,
                S = 0 | E(0, 0 | H[A >> 2], 32),
                c = 0 | L(0 | S, 0 | ee, 0 | _, 0 | i),
                i = 0 | O(0 | b, 0 | t, 0 | c, 0 | ee),
                c = ee,
                t = 0 | E(0, 0 | H[p >> 2], 32),
                b = ee,
                _ = 0 | E(0, 0 | H[r >> 2], 32),
                r = 0 | L(0 | _, 0 | ee, 0 | t, 0 | b),
                b = 0 | O(0 | i, 0 | c, 0 | r, 0 | ee),
                r = 0 | I(0 | b, 0 | ee, 1),
                b = ee,
                c = 0 | E(0, 0 | H[s >> 2], 32),
                i = ee,
                t = 0 | E(0, 0 | H[d >> 2], 32),
                _ = 0 | L(0 | t, 0 | ee, 0 | c, 0 | i),
                i = 0 | O(0 | r, 0 | b, 0 | _, 0 | ee),
                _ = ee,
                b = 0 | E(0, 0 | H[m >> 2], 32),
                r = ee,
                c = 0 | E(0, 0 | H[l >> 2], 32),
                t = 0 | L(0 | c, 0 | ee, 0 | b, 0 | r),
                r = 0 | O(0 | i, 0 | _, 0 | t, 0 | ee),
                t = ee,
                _ = 0 | E(0, 0 | H[f >> 2], 32),
                i = ee,
                b = 0 | E(0, 0 | H[g >> 2], 32),
                c = 0 | L(0 | b, 0 | ee, 0 | _, 0 | i),
                i = 0 | O(0 | r, 0 | t, 0 | c, 0 | ee),
                c = ee,
                t = 0 | E(0, 0 | H[x >> 2], 32),
                r = ee,
                _ = 0 | E(0, 0 | H[o >> 2], 32),
                b = 0 | L(0 | _, 0 | ee, 0 | t, 0 | r),
                r = 0 | O(0 | i, 0 | c, 0 | b, 0 | ee),
                b = e + 80 | 0,
                H[b >> 2] = r,
                H[b + 4 >> 2] = ee,
                b = 0 | E(0, 0 | H[w >> 2], 32),
                r = ee,
                c = 0 | E(0, 0 | H[d >> 2], 32),
                i = 0 | L(0 | c, 0 | ee, 0 | b, 0 | r),
                r = ee,
                b = 0 | E(0, 0 | H[m >> 2], 32),
                c = ee,
                t = 0 | E(0, 0 | H[u >> 2], 32),
                _ = 0 | L(0 | t, 0 | ee, 0 | b, 0 | c),
                c = 0 | O(0 | _, 0 | ee, 0 | i, 0 | r),
                r = ee,
                i = 0 | E(0, 0 | H[s >> 2], 32),
                _ = ee,
                b = 0 | E(0, 0 | H[y >> 2], 32),
                t = 0 | L(0 | b, 0 | ee, 0 | i, 0 | _),
                _ = 0 | O(0 | c, 0 | r, 0 | t, 0 | ee),
                t = ee,
                r = 0 | E(0, 0 | H[v >> 2], 32),
                c = ee,
                i = 0 | E(0, 0 | H[l >> 2], 32),
                b = 0 | L(0 | i, 0 | ee, 0 | r, 0 | c),
                c = 0 | O(0 | _, 0 | t, 0 | b, 0 | ee),
                b = ee,
                t = 0 | E(0, 0 | H[a >> 2], 32),
                _ = ee,
                r = 0 | E(0, 0 | H[g >> 2], 32),
                i = 0 | L(0 | r, 0 | ee, 0 | t, 0 | _),
                _ = 0 | O(0 | c, 0 | b, 0 | i, 0 | ee),
                i = ee,
                b = 0 | E(0, 0 | H[x >> 2], 32),
                c = ee,
                t = 0 | E(0, 0 | H[h >> 2], 32),
                r = 0 | L(0 | t, 0 | ee, 0 | b, 0 | c),
                c = 0 | O(0 | _, 0 | i, 0 | r, 0 | ee),
                r = ee,
                i = 0 | E(0, 0 | H[f >> 2], 32),
                f = ee,
                _ = 0 | E(0, 0 | H[A >> 2], 32),
                b = 0 | L(0 | _, 0 | ee, 0 | i, 0 | f),
                f = 0 | O(0 | c, 0 | r, 0 | b, 0 | ee),
                b = ee,
                r = 0 | E(0, 0 | H[p >> 2], 32),
                c = ee,
                i = 0 | E(0, 0 | H[o >> 2], 32),
                o = 0 | L(0 | i, 0 | ee, 0 | r, 0 | c),
                c = 0 | O(0 | f, 0 | b, 0 | o, 0 | ee),
                o = e + 88 | 0,
                H[o >> 2] = c,
                H[o + 4 >> 2] = ee,
                o = 0 | E(0, 0 | H[m >> 2], 32),
                c = ee,
                b = 0 | E(0, 0 | H[d >> 2], 32),
                f = 0 | L(0 | b, 0 | ee, 0 | o, 0 | c),
                c = ee,
                o = 0 | E(0, 0 | H[w >> 2], 32),
                b = ee,
                r = 0 | E(0, 0 | H[y >> 2], 32),
                i = 0 | L(0 | r, 0 | ee, 0 | o, 0 | b),
                b = ee,
                o = 0 | E(0, 0 | H[v >> 2], 32),
                r = ee,
                _ = 0 | E(0, 0 | H[u >> 2], 32),
                t = 0 | L(0 | _, 0 | ee, 0 | o, 0 | r),
                r = 0 | O(0 | t, 0 | ee, 0 | i, 0 | b),
                b = ee,
                i = 0 | E(0, 0 | H[a >> 2], 32),
                a = ee,
                t = 0 | E(0, 0 | H[A >> 2], 32),
                o = 0 | L(0 | t, 0 | ee, 0 | i, 0 | a),
                a = 0 | O(0 | r, 0 | b, 0 | o, 0 | ee),
                o = ee,
                b = 0 | E(0, 0 | H[p >> 2], 32),
                r = ee,
                i = 0 | E(0, 0 | H[h >> 2], 32),
                h = 0 | L(0 | i, 0 | ee, 0 | b, 0 | r),
                r = 0 | O(0 | a, 0 | o, 0 | h, 0 | ee),
                h = 0 | I(0 | r, 0 | ee, 1),
                r = 0 | O(0 | h, 0 | ee, 0 | f, 0 | c),
                c = ee,
                f = 0 | E(0, 0 | H[s >> 2], 32),
                h = ee,
                o = 0 | E(0, 0 | H[g >> 2], 32),
                a = 0 | L(0 | o, 0 | ee, 0 | f, 0 | h),
                h = 0 | O(0 | r, 0 | c, 0 | a, 0 | ee),
                a = ee,
                c = 0 | E(0, 0 | H[x >> 2], 32),
                r = ee,
                f = 0 | E(0, 0 | H[l >> 2], 32),
                o = 0 | L(0 | f, 0 | ee, 0 | c, 0 | r),
                r = 0 | O(0 | h, 0 | a, 0 | o, 0 | ee),
                o = e + 96 | 0,
                H[o >> 2] = r,
                H[o + 4 >> 2] = ee,
                o = 0 | E(0, 0 | H[m >> 2], 32),
                r = ee,
                a = 0 | E(0, 0 | H[y >> 2], 32),
                h = 0 | L(0 | a, 0 | ee, 0 | o, 0 | r),
                r = ee,
                o = 0 | E(0, 0 | H[v >> 2], 32),
                a = ee,
                c = 0 | E(0, 0 | H[d >> 2], 32),
                f = 0 | L(0 | c, 0 | ee, 0 | o, 0 | a),
                a = 0 | O(0 | f, 0 | ee, 0 | h, 0 | r),
                r = ee,
                h = 0 | E(0, 0 | H[w >> 2], 32),
                f = ee,
                o = 0 | E(0, 0 | H[g >> 2], 32),
                c = 0 | L(0 | o, 0 | ee, 0 | h, 0 | f),
                f = 0 | O(0 | a, 0 | r, 0 | c, 0 | ee),
                c = ee,
                r = 0 | E(0, 0 | H[x >> 2], 32),
                a = ee,
                h = 0 | E(0, 0 | H[u >> 2], 32),
                o = 0 | L(0 | h, 0 | ee, 0 | r, 0 | a),
                a = 0 | O(0 | f, 0 | c, 0 | o, 0 | ee),
                o = ee,
                c = 0 | E(0, 0 | H[s >> 2], 32),
                s = ee,
                f = 0 | E(0, 0 | H[A >> 2], 32),
                r = 0 | L(0 | f, 0 | ee, 0 | c, 0 | s),
                s = 0 | O(0 | a, 0 | o, 0 | r, 0 | ee),
                r = ee,
                o = 0 | E(0, 0 | H[p >> 2], 32),
                a = ee,
                c = 0 | E(0, 0 | H[l >> 2], 32),
                l = 0 | L(0 | c, 0 | ee, 0 | o, 0 | a),
                a = 0 | O(0 | s, 0 | r, 0 | l, 0 | ee),
                l = e + 104 | 0,
                H[l >> 2] = a,
                H[l + 4 >> 2] = ee,
                l = 0 | E(0, 0 | H[v >> 2], 32),
                a = ee,
                r = 0 | E(0, 0 | H[y >> 2], 32),
                s = 0 | L(0 | r, 0 | ee, 0 | l, 0 | a),
                a = ee,
                l = 0 | E(0, 0 | H[w >> 2], 32),
                w = ee,
                r = 0 | E(0, 0 | H[A >> 2], 32),
                o = 0 | L(0 | r, 0 | ee, 0 | l, 0 | w),
                w = 0 | O(0 | o, 0 | ee, 0 | s, 0 | a),
                a = ee,
                s = 0 | E(0, 0 | H[p >> 2], 32),
                o = ee,
                l = 0 | E(0, 0 | H[u >> 2], 32),
                u = 0 | L(0 | l, 0 | ee, 0 | s, 0 | o),
                o = 0 | O(0 | w, 0 | a, 0 | u, 0 | ee),
                u = 0 | I(0 | o, 0 | ee, 1),
                o = ee,
                a = 0 | E(0, 0 | H[m >> 2], 32),
                w = ee,
                s = 0 | E(0, 0 | H[g >> 2], 32),
                l = 0 | L(0 | s, 0 | ee, 0 | a, 0 | w),
                w = 0 | O(0 | u, 0 | o, 0 | l, 0 | ee),
                l = ee,
                o = 0 | E(0, 0 | H[x >> 2], 32),
                u = ee,
                a = 0 | E(0, 0 | H[d >> 2], 32),
                s = 0 | L(0 | a, 0 | ee, 0 | o, 0 | u),
                u = 0 | O(0 | w, 0 | l, 0 | s, 0 | ee),
                s = e + 112 | 0,
                H[s >> 2] = u,
                H[s + 4 >> 2] = ee,
                s = 0 | E(0, 0 | H[v >> 2], 32),
                u = ee,
                l = 0 | E(0, 0 | H[g >> 2], 32),
                w = 0 | L(0 | l, 0 | ee, 0 | s, 0 | u),
                u = ee,
                s = 0 | E(0, 0 | H[x >> 2], 32),
                l = ee,
                o = 0 | E(0, 0 | H[y >> 2], 32),
                a = 0 | L(0 | o, 0 | ee, 0 | s, 0 | l),
                l = 0 | O(0 | a, 0 | ee, 0 | w, 0 | u),
                u = ee,
                w = 0 | E(0, 0 | H[m >> 2], 32),
                m = ee,
                a = 0 | E(0, 0 | H[A >> 2], 32),
                s = 0 | L(0 | a, 0 | ee, 0 | w, 0 | m),
                m = 0 | O(0 | l, 0 | u, 0 | s, 0 | ee),
                s = ee,
                u = 0 | E(0, 0 | H[p >> 2], 32),
                l = ee,
                w = 0 | E(0, 0 | H[d >> 2], 32),
                d = 0 | L(0 | w, 0 | ee, 0 | u, 0 | l),
                l = 0 | O(0 | m, 0 | s, 0 | d, 0 | ee),
                d = e + 120 | 0,
                H[d >> 2] = l,
                H[d + 4 >> 2] = ee,
                d = 0 | E(0, 0 | H[x >> 2], 32),
                l = ee,
                s = 0 | E(0, 0 | H[g >> 2], 32),
                m = 0 | L(0 | s, 0 | ee, 0 | d, 0 | l),
                l = ee,
                d = 0 | E(0, 0 | H[v >> 2], 32),
                v = ee,
                s = 0 | E(0, 0 | H[A >> 2], 32),
                u = 0 | L(0 | s, 0 | ee, 0 | d, 0 | v),
                v = ee,
                d = 0 | E(0, 0 | H[p >> 2], 32),
                s = ee,
                w = 0 | E(0, 0 | H[y >> 2], 32),
                y = 0 | L(0 | w, 0 | ee, 0 | d, 0 | s),
                s = 0 | O(0 | y, 0 | ee, 0 | u, 0 | v),
                v = 0 | I(0 | s, 0 | ee, 1),
                s = 0 | O(0 | v, 0 | ee, 0 | m, 0 | l),
                l = e + 128 | 0,
                H[l >> 2] = s,
                H[l + 4 >> 2] = ee,
                l = 0 | E(0, 0 | H[x >> 2], 32),
                x = ee,
                s = 0 | E(0, 0 | H[A >> 2], 32),
                m = 0 | L(0 | s, 0 | ee, 0 | l, 0 | x),
                x = ee,
                l = 0 | E(0, 0 | H[p >> 2], 32),
                s = ee,
                v = 0 | E(0, 0 | H[g >> 2], 32),
                g = 0 | L(0 | v, 0 | ee, 0 | l, 0 | s),
                s = 0 | O(0 | g, 0 | ee, 0 | m, 0 | x),
                x = e + 136 | 0,
                H[x >> 2] = s,
                H[x + 4 >> 2] = ee,
                x = 0 | E(0, 0 | H[p >> 2], 31),
                p = ee,
                s = 0 | E(0, 0 | H[A >> 2], 32),
                A = 0 | L(0 | s, 0 | ee, 0 | x, 0 | p),
                p = e + 144 | 0,
                H[p >> 2] = A,
                H[p + 4 >> 2] = ee
            }
            function d(e, t) {
                e = 0 | e,
                t = 0 | t;
                var n = 0
                  , r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0
                  , c = 0
                  , u = 0
                  , f = 0
                  , l = 0
                  , h = 0
                  , d = 0
                  , p = 0
                  , w = 0
                  , m = 0
                  , g = 0
                  , v = 0
                  , b = 0
                  , y = 0
                  , _ = 0
                  , k = 0
                  , x = 0
                  , A = 0
                  , S = 0
                  , P = 0
                  , C = 0
                  , T = 0
                  , D = 0
                  , F = 0
                  , R = 0
                  , N = 0
                  , q = 0
                  , j = 0
                  , B = 0
                  , U = 0
                  , z = 0
                  , G = 0
                  , V = 0
                  , K = 0
                  , Y = 0;
                n = W,
                W = W + 160 | 0,
                r = n,
                i = 0 | H[t >> 2],
                o = 0 | E(0, 0 | i, 32),
                a = ee,
                s = 0 | L(0 | o, 0 | a, 0 | o, 0 | a),
                c = r,
                H[c >> 2] = s,
                H[c + 4 >> 2] = ee,
                c = 0 | E(0, 0 | i, 31),
                i = ee,
                s = t + 8 | 0,
                u = 0 | H[s >> 2],
                f = 0 | E(0, 0 | u, 32),
                l = ee,
                h = 0 | L(0 | f, 0 | l, 0 | c, 0 | i),
                d = r + 8 | 0,
                p = d,
                H[p >> 2] = h,
                H[p + 4 >> 2] = ee,
                p = 0 | L(0 | f, 0 | l, 0 | f, 0 | l),
                h = ee,
                w = t + 16 | 0,
                m = 0 | E(0, 0 | H[w >> 2], 32),
                g = ee,
                v = 0 | L(0 | m, 0 | g, 0 | o, 0 | a),
                b = 0 | O(0 | v, 0 | ee, 0 | p, 0 | h),
                h = 0 | I(0 | b, 0 | ee, 1),
                b = r + 16 | 0,
                p = b,
                H[p >> 2] = h,
                H[p + 4 >> 2] = ee,
                p = 0 | L(0 | m, 0 | g, 0 | f, 0 | l),
                h = ee,
                v = t + 24 | 0,
                y = 0 | E(0, 0 | H[v >> 2], 32),
                _ = ee,
                k = 0 | L(0 | y, 0 | _, 0 | o, 0 | a),
                x = 0 | O(0 | k, 0 | ee, 0 | p, 0 | h),
                h = 0 | I(0 | x, 0 | ee, 1),
                x = r + 24 | 0,
                p = x,
                H[p >> 2] = h,
                H[p + 4 >> 2] = ee,
                p = 0 | L(0 | m, 0 | g, 0 | m, 0 | g),
                h = ee,
                k = 0 | E(0, 0 | u, 30),
                A = 0 | L(0 | y, 0 | _, 0 | k, 0 | ee),
                k = 0 | O(0 | A, 0 | ee, 0 | p, 0 | h),
                h = ee,
                p = t + 32 | 0,
                A = 0 | E(0, 0 | H[p >> 2], 32),
                S = ee,
                P = 0 | L(0 | A, 0 | S, 0 | c, 0 | i),
                i = 0 | O(0 | k, 0 | h, 0 | P, 0 | ee),
                P = r + 32 | 0,
                h = P,
                H[h >> 2] = i,
                H[h + 4 >> 2] = ee,
                h = 0 | L(0 | y, 0 | _, 0 | m, 0 | g),
                i = ee,
                k = 0 | L(0 | A, 0 | S, 0 | f, 0 | l),
                c = 0 | O(0 | k, 0 | ee, 0 | h, 0 | i),
                i = ee,
                h = t + 40 | 0,
                k = 0 | E(0, 0 | H[h >> 2], 32),
                C = ee,
                T = 0 | L(0 | k, 0 | C, 0 | o, 0 | a),
                D = 0 | O(0 | c, 0 | i, 0 | T, 0 | ee),
                T = 0 | I(0 | D, 0 | ee, 1),
                D = r + 40 | 0,
                i = D,
                H[i >> 2] = T,
                H[i + 4 >> 2] = ee,
                i = 0 | L(0 | y, 0 | _, 0 | y, 0 | _),
                T = ee,
                c = 0 | L(0 | A, 0 | S, 0 | m, 0 | g),
                F = 0 | O(0 | c, 0 | ee, 0 | i, 0 | T),
                T = ee,
                i = t + 48 | 0,
                c = 0 | E(0, 0 | H[i >> 2], 32),
                R = ee,
                N = 0 | L(0 | c, 0 | R, 0 | o, 0 | a),
                q = 0 | O(0 | F, 0 | T, 0 | N, 0 | ee),
                N = ee,
                T = 0 | E(0, 0 | u, 31),
                u = 0 | L(0 | k, 0 | C, 0 | T, 0 | ee),
                T = 0 | O(0 | q, 0 | N, 0 | u, 0 | ee),
                u = 0 | I(0 | T, 0 | ee, 1),
                T = r + 48 | 0,
                N = T,
                H[N >> 2] = u,
                H[N + 4 >> 2] = ee,
                N = 0 | L(0 | A, 0 | S, 0 | y, 0 | _),
                u = ee,
                q = 0 | L(0 | k, 0 | C, 0 | m, 0 | g),
                F = 0 | O(0 | q, 0 | ee, 0 | N, 0 | u),
                u = ee,
                N = 0 | L(0 | c, 0 | R, 0 | f, 0 | l),
                q = 0 | O(0 | F, 0 | u, 0 | N, 0 | ee),
                N = ee,
                u = t + 56 | 0,
                F = 0 | E(0, 0 | H[u >> 2], 32),
                j = ee,
                B = 0 | L(0 | F, 0 | j, 0 | o, 0 | a),
                U = 0 | O(0 | q, 0 | N, 0 | B, 0 | ee),
                B = 0 | I(0 | U, 0 | ee, 1),
                U = r + 56 | 0,
                N = U,
                H[N >> 2] = B,
                H[N + 4 >> 2] = ee,
                N = 0 | L(0 | A, 0 | S, 0 | A, 0 | S),
                B = ee,
                q = 0 | L(0 | c, 0 | R, 0 | m, 0 | g),
                z = ee,
                G = t + 64 | 0,
                V = 0 | E(0, 0 | H[G >> 2], 32),
                K = ee,
                Y = 0 | L(0 | V, 0 | K, 0 | o, 0 | a),
                a = 0 | O(0 | Y, 0 | ee, 0 | q, 0 | z),
                z = ee,
                q = 0 | L(0 | F, 0 | j, 0 | f, 0 | l),
                l = ee,
                f = 0 | L(0 | k, 0 | C, 0 | y, 0 | _),
                Y = 0 | O(0 | f, 0 | ee, 0 | q, 0 | l),
                l = 0 | I(0 | Y, 0 | ee, 1),
                Y = 0 | O(0 | a, 0 | z, 0 | l, 0 | ee),
                l = 0 | I(0 | Y, 0 | ee, 1),
                Y = 0 | O(0 | l, 0 | ee, 0 | N, 0 | B),
                B = r + 64 | 0,
                N = B,
                H[N >> 2] = Y,
                H[N + 4 >> 2] = ee,
                N = 0 | L(0 | k, 0 | C, 0 | A, 0 | S),
                Y = ee,
                l = 0 | L(0 | c, 0 | R, 0 | y, 0 | _),
                _ = 0 | O(0 | l, 0 | ee, 0 | N, 0 | Y),
                Y = ee,
                N = 0 | L(0 | F, 0 | j, 0 | m, 0 | g),
                g = 0 | O(0 | _, 0 | Y, 0 | N, 0 | ee),
                N = ee,
                Y = 0 | E(0, 0 | H[s >> 2], 32),
                s = ee,
                _ = 0 | L(0 | V, 0 | K, 0 | Y, 0 | s),
                m = 0 | O(0 | g, 0 | N, 0 | _, 0 | ee),
                _ = ee,
                N = 0 | E(0, 0 | H[t >> 2], 32),
                g = ee,
                l = 0 | H[t + 72 >> 2],
                t = 0 | E(0, 0 | l, 32),
                y = ee,
                z = 0 | L(0 | t, 0 | y, 0 | N, 0 | g),
                g = 0 | O(0 | m, 0 | _, 0 | z, 0 | ee),
                z = 0 | I(0 | g, 0 | ee, 1),
                g = r + 72 | 0,
                H[g >> 2] = z,
                H[g + 4 >> 2] = ee,
                g = 0 | L(0 | k, 0 | C, 0 | k, 0 | C),
                z = ee,
                _ = 0 | L(0 | c, 0 | R, 0 | A, 0 | S),
                S = 0 | O(0 | _, 0 | ee, 0 | g, 0 | z),
                z = ee,
                g = 0 | E(0, 0 | H[w >> 2], 32),
                w = ee,
                _ = 0 | L(0 | V, 0 | K, 0 | g, 0 | w),
                A = 0 | O(0 | S, 0 | z, 0 | _, 0 | ee),
                _ = ee,
                z = 0 | E(0, 0 | H[v >> 2], 32),
                v = ee,
                S = 0 | L(0 | F, 0 | j, 0 | z, 0 | v),
                m = ee,
                N = 0 | L(0 | t, 0 | y, 0 | Y, 0 | s),
                s = 0 | O(0 | N, 0 | ee, 0 | S, 0 | m),
                m = 0 | I(0 | s, 0 | ee, 1),
                s = 0 | O(0 | A, 0 | _, 0 | m, 0 | ee),
                m = 0 | I(0 | s, 0 | ee, 1),
                s = r + 80 | 0,
                _ = s,
                H[_ >> 2] = m,
                H[_ + 4 >> 2] = ee,
                _ = 0 | L(0 | c, 0 | R, 0 | k, 0 | C),
                C = ee,
                k = 0 | E(0, 0 | H[p >> 2], 32),
                p = ee,
                m = 0 | L(0 | F, 0 | j, 0 | k, 0 | p),
                A = 0 | O(0 | m, 0 | ee, 0 | _, 0 | C),
                C = ee,
                _ = 0 | L(0 | V, 0 | K, 0 | z, 0 | v),
                m = 0 | O(0 | A, 0 | C, 0 | _, 0 | ee),
                _ = ee,
                C = 0 | L(0 | t, 0 | y, 0 | g, 0 | w),
                w = 0 | O(0 | m, 0 | _, 0 | C, 0 | ee),
                C = ee,
                _ = 0 | I(0 | w, 0 | C, 1),
                m = ee,
                g = r + 88 | 0,
                H[g >> 2] = _,
                H[g + 4 >> 2] = m,
                g = 0 | L(0 | c, 0 | R, 0 | c, 0 | R),
                R = ee,
                c = 0 | L(0 | V, 0 | K, 0 | k, 0 | p),
                A = ee,
                S = 0 | H[h >> 2],
                h = 0 | E(0, 0 | S, 32),
                N = ee,
                Y = 0 | L(0 | F, 0 | j, 0 | h, 0 | N),
                a = ee,
                q = 0 | L(0 | t, 0 | y, 0 | z, 0 | v),
                v = 0 | O(0 | q, 0 | ee, 0 | Y, 0 | a),
                a = 0 | I(0 | v, 0 | ee, 1),
                v = 0 | O(0 | a, 0 | ee, 0 | c, 0 | A),
                A = 0 | I(0 | v, 0 | ee, 1),
                v = 0 | O(0 | A, 0 | ee, 0 | g, 0 | R),
                R = ee,
                g = r + 96 | 0,
                H[g >> 2] = v,
                H[g + 4 >> 2] = R,
                g = 0 | E(0, 0 | H[i >> 2], 32),
                i = ee,
                A = 0 | L(0 | F, 0 | j, 0 | g, 0 | i),
                j = ee,
                F = 0 | L(0 | V, 0 | K, 0 | h, 0 | N),
                N = 0 | O(0 | F, 0 | ee, 0 | A, 0 | j),
                j = ee,
                A = 0 | L(0 | t, 0 | y, 0 | k, 0 | p),
                p = 0 | O(0 | N, 0 | j, 0 | A, 0 | ee),
                A = ee,
                j = 0 | I(0 | p, 0 | A, 1),
                N = ee,
                k = r + 104 | 0,
                H[k >> 2] = j,
                H[k + 4 >> 2] = N,
                k = 0 | H[u >> 2],
                u = 0 | E(0, 0 | k, 32),
                F = ee,
                h = 0 | L(0 | u, 0 | F, 0 | u, 0 | F),
                c = ee,
                a = 0 | L(0 | V, 0 | K, 0 | g, 0 | i),
                K = 0 | O(0 | a, 0 | ee, 0 | h, 0 | c),
                c = ee,
                h = 0 | E(0, 0 | S, 31),
                S = 0 | L(0 | t, 0 | y, 0 | h, 0 | ee),
                h = 0 | O(0 | K, 0 | c, 0 | S, 0 | ee),
                S = ee,
                c = 0 | I(0 | h, 0 | S, 1),
                K = ee,
                a = r + 112 | 0,
                H[a >> 2] = c,
                H[a + 4 >> 2] = K,
                a = 0 | H[G >> 2],
                G = 0 | E(0, 0 | a, 32),
                V = ee,
                Y = 0 | L(0 | G, 0 | V, 0 | u, 0 | F),
                F = ee,
                u = 0 | L(0 | t, 0 | y, 0 | g, 0 | i),
                i = 0 | O(0 | u, 0 | ee, 0 | Y, 0 | F),
                F = ee,
                Y = 0 | I(0 | i, 0 | F, 1),
                u = ee,
                g = r + 120 | 0,
                H[g >> 2] = Y,
                H[g + 4 >> 2] = u,
                g = 0 | L(0 | G, 0 | V, 0 | G, 0 | V),
                V = ee,
                G = 0 | E(0, 0 | k, 30),
                k = 0 | L(0 | t, 0 | y, 0 | G, 0 | ee),
                G = 0 | O(0 | k, 0 | ee, 0 | g, 0 | V),
                V = ee,
                g = r + 128 | 0,
                H[g >> 2] = G,
                H[g + 4 >> 2] = V,
                g = 0 | E(0, 0 | a, 31),
                a = 0 | L(0 | t, 0 | y, 0 | g, 0 | ee),
                g = ee,
                k = r + 136 | 0,
                H[k >> 2] = a,
                H[k + 4 >> 2] = g,
                k = 0 | E(0, 0 | l, 31),
                l = 0 | L(0 | k, 0 | ee, 0 | t, 0 | y),
                y = ee,
                t = r + 144 | 0,
                H[t >> 2] = l,
                H[t + 4 >> 2] = y,
                t = B,
                k = 0 | H[t >> 2],
                q = 0 | H[t + 4 >> 2],
                t = 0 | L(0 | l, 0 | y, 18, 0),
                z = ee,
                f = 0 | O(0 | l, 0 | y, 0 | k, 0 | q),
                q = 0 | O(0 | f, 0 | ee, 0 | t, 0 | z),
                z = B,
                H[z >> 2] = q,
                H[z + 4 >> 2] = ee,
                z = U,
                q = 0 | H[z >> 2],
                B = 0 | H[z + 4 >> 2],
                z = 0 | L(0 | a, 0 | g, 18, 0),
                t = ee,
                f = 0 | O(0 | q, 0 | B, 0 | a, 0 | g),
                g = 0 | O(0 | f, 0 | ee, 0 | z, 0 | t),
                t = U,
                H[t >> 2] = g,
                H[t + 4 >> 2] = ee,
                t = T,
                g = 0 | H[t >> 2],
                U = 0 | H[t + 4 >> 2],
                t = 0 | L(0 | G, 0 | V, 18, 0),
                z = ee,
                f = 0 | O(0 | g, 0 | U, 0 | G, 0 | V),
                V = 0 | O(0 | f, 0 | ee, 0 | t, 0 | z),
                z = T,
                H[z >> 2] = V,
                H[z + 4 >> 2] = ee,
                z = D,
                V = 0 | H[z >> 2],
                T = 0 | H[z + 4 >> 2],
                z = 0 | L(0 | i, 0 | F, 36, 0),
                F = ee,
                i = 0 | O(0 | V, 0 | T, 0 | Y, 0 | u),
                u = 0 | O(0 | i, 0 | ee, 0 | z, 0 | F),
                F = D,
                H[F >> 2] = u,
                H[F + 4 >> 2] = ee,
                F = P,
                u = 0 | H[F >> 2],
                D = 0 | H[F + 4 >> 2],
                F = 0 | L(0 | h, 0 | S, 36, 0),
                S = ee,
                h = 0 | O(0 | u, 0 | D, 0 | c, 0 | K),
                K = 0 | O(0 | h, 0 | ee, 0 | F, 0 | S),
                S = P,
                H[S >> 2] = K,
                H[S + 4 >> 2] = ee,
                S = x,
                K = 0 | H[S >> 2],
                P = 0 | H[S + 4 >> 2],
                S = 0 | L(0 | p, 0 | A, 36, 0),
                A = ee,
                p = 0 | O(0 | K, 0 | P, 0 | j, 0 | N),
                N = 0 | O(0 | p, 0 | ee, 0 | S, 0 | A),
                A = x,
                H[A >> 2] = N,
                H[A + 4 >> 2] = ee,
                A = b,
                N = 0 | H[A >> 2],
                x = 0 | H[A + 4 >> 2],
                A = 0 | L(0 | v, 0 | R, 18, 0),
                S = ee,
                p = 0 | O(0 | N, 0 | x, 0 | v, 0 | R),
                R = 0 | O(0 | p, 0 | ee, 0 | A, 0 | S),
                S = b,
                H[S >> 2] = R,
                H[S + 4 >> 2] = ee,
                S = d,
                R = 0 | H[S >> 2],
                b = 0 | H[S + 4 >> 2],
                S = 0 | L(0 | w, 0 | C, 36, 0),
                C = ee,
                w = 0 | O(0 | R, 0 | b, 0 | _, 0 | m),
                m = 0 | O(0 | w, 0 | ee, 0 | S, 0 | C),
                C = d,
                H[C >> 2] = m,
                H[C + 4 >> 2] = ee,
                C = s,
                m = 0 | H[C >> 2],
                S = 0 | H[C + 4 >> 2],
                C = r,
                w = 0 | H[C >> 2],
                _ = 0 | H[C + 4 >> 2],
                C = 0 | L(0 | m, 0 | S, 18, 0),
                b = ee,
                R = 0 | O(0 | w, 0 | _, 0 | m, 0 | S),
                S = 0 | O(0 | R, 0 | ee, 0 | C, 0 | b),
                b = ee,
                C = r,
                H[C >> 2] = S,
                H[C + 4 >> 2] = b,
                C = s,
                H[C >> 2] = 0,
                H[C + 4 >> 2] = 0,
                C = b,
                b = S,
                S = 0;
                do
                    R = 0 | O(C >> 31 >>> 6 | 0, 0, 0 | b, 0 | C),
                    m = 0 | E(0 | R, 0 | ee, 26),
                    R = ee,
                    _ = 0 | I(0 | m, 0 | R, 26),
                    w = 0 | M(0 | b, 0 | C, 0 | _, 0 | ee),
                    _ = r + (S << 3) | 0,
                    H[_ >> 2] = w,
                    H[_ + 4 >> 2] = ee,
                    _ = r + ((1 | S) << 3) | 0,
                    w = _,
                    A = 0 | O(0 | m, 0 | R, 0 | H[w >> 2], 0 | H[w + 4 >> 2]),
                    w = ee,
                    R = 0 | O(w >> 31 >>> 7 | 0, 0, 0 | A, 0 | w),
                    m = 0 | E(0 | R, 0 | ee, 25),
                    R = ee,
                    p = 0 | I(0 | m, 0 | R, 25),
                    v = 0 | M(0 | A, 0 | w, 0 | p, 0 | ee),
                    p = _,
                    H[p >> 2] = v,
                    H[p + 4 >> 2] = ee,
                    S = S + 2 | 0,
                    p = r + (S << 3) | 0,
                    v = p,
                    b = 0 | O(0 | m, 0 | R, 0 | H[v >> 2], 0 | H[v + 4 >> 2]),
                    C = ee,
                    v = p,
                    H[v >> 2] = b,
                    H[v + 4 >> 2] = C;
                while (S >>> 0 < 10);S = s,
                C = 0 | H[S >> 2],
                b = 0 | H[S + 4 >> 2],
                S = r,
                v = 0 | H[S >> 2],
                p = 0 | H[S + 4 >> 2],
                S = 0 | L(0 | C, 0 | b, 18, 0),
                R = ee,
                m = 0 | O(0 | v, 0 | p, 0 | C, 0 | b),
                b = 0 | O(0 | m, 0 | ee, 0 | S, 0 | R),
                R = ee,
                S = s,
                H[S >> 2] = 0,
                H[S + 4 >> 2] = 0,
                S = 0 | O(R >> 31 >>> 6 | 0, 0, 0 | b, 0 | R),
                s = 0 | E(0 | S, 0 | ee, 26),
                S = ee,
                m = 0 | I(0 | s, 0 | S, 26),
                C = 0 | M(0 | b, 0 | R, 0 | m, 0 | ee),
                m = r,
                H[m >> 2] = C,
                H[m + 4 >> 2] = ee,
                m = d,
                C = 0 | O(0 | s, 0 | S, 0 | H[m >> 2], 0 | H[m + 4 >> 2]),
                m = d,
                H[m >> 2] = C,
                H[m + 4 >> 2] = ee,
                m = e,
                e = r,
                r = m + 80 | 0;
                do
                    H[m >> 2] = H[e >> 2],
                    m = m + 4 | 0,
                    e = e + 4 | 0;
                while ((0 | m) < (0 | r));W = n
            }
            function p() {
                var e = 0;
                return e = 0 | H[2] ? 0 | H[(0 | ae()) + 60 >> 2] : 56,
                0 | e
            }
            function w(e) {
                e = 0 | e;
                var t = 0;
                return e >>> 0 > 4294963200 ? (H[(0 | p()) >> 2] = 0 - e,
                t = -1) : t = e,
                0 | t
            }
            function m(e) {
                return e = 0 | e,
                0
            }
            function g(e) {
                e = 0 | e
            }
            function v(e) {
                e = 0 | e;
                var t = 0
                  , n = 0;
                return t = W,
                W = W + 16 | 0,
                n = t,
                H[n >> 2] = H[e + 60 >> 2],
                e = 0 | w(0 | se(6, 0 | n)),
                W = t,
                0 | e
            }
            function b(e, t, n) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n;
                var r = 0
                  , i = 0
                  , o = 0
                  , a = 0;
                return r = W,
                W = W + 32 | 0,
                i = r,
                o = r + 20 | 0,
                H[i >> 2] = H[e + 60 >> 2],
                H[i + 4 >> 2] = 0,
                H[i + 8 >> 2] = t,
                H[i + 12 >> 2] = o,
                H[i + 16 >> 2] = n,
                (0 | w(0 | pe(140, 0 | i))) < 0 ? (H[o >> 2] = -1,
                a = -1) : a = 0 | H[o >> 2],
                W = r,
                0 | a
            }
            function y(e, t, n) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n;
                var r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0
                  , c = 0
                  , u = 0
                  , f = 0
                  , l = 0
                  , h = 0
                  , d = 0
                  , p = 0
                  , m = 0
                  , g = 0
                  , v = 0
                  , b = 0
                  , y = 0
                  , _ = 0
                  , k = 0
                  , x = 0
                  , A = 0;
                for (r = W,
                W = W + 48 | 0,
                i = r + 16 | 0,
                o = r,
                a = r + 32 | 0,
                s = e + 28 | 0,
                c = 0 | H[s >> 2],
                H[a >> 2] = c,
                u = e + 20 | 0,
                f = (0 | H[u >> 2]) - c | 0,
                H[a + 4 >> 2] = f,
                H[a + 8 >> 2] = t,
                H[a + 12 >> 2] = n,
                t = e + 60 | 0,
                c = e + 44 | 0,
                l = a,
                a = 2,
                h = f + n | 0; ; ) {
                    if (0 | H[2] ? (we(1, 0 | e),
                    H[o >> 2] = H[t >> 2],
                    H[o + 4 >> 2] = l,
                    H[o + 8 >> 2] = a,
                    f = 0 | w(0 | ge(146, 0 | o)),
                    ie(0),
                    d = f) : (H[i >> 2] = H[t >> 2],
                    H[i + 4 >> 2] = l,
                    H[i + 8 >> 2] = a,
                    d = 0 | w(0 | ge(146, 0 | i))),
                    (0 | h) == (0 | d)) {
                        p = 6;
                        break
                    }
                    if ((0 | d) < 0) {
                        m = l,
                        g = a,
                        p = 8;
                        break
                    }
                    f = h - d | 0,
                    v = 0 | H[l + 4 >> 2],
                    d >>> 0 <= v >>> 0 ? 2 == (0 | a) ? (H[s >> 2] = (0 | H[s >> 2]) + d,
                    b = v,
                    y = d,
                    _ = l,
                    k = 2) : (b = v,
                    y = d,
                    _ = l,
                    k = a) : (x = 0 | H[c >> 2],
                    H[s >> 2] = x,
                    H[u >> 2] = x,
                    b = 0 | H[l + 12 >> 2],
                    y = d - v | 0,
                    _ = l + 8 | 0,
                    k = a + -1 | 0),
                    H[_ >> 2] = (0 | H[_ >> 2]) + y,
                    H[_ + 4 >> 2] = b - y,
                    l = _,
                    a = k,
                    h = f
                }
                return 6 == (0 | p) ? (h = 0 | H[c >> 2],
                H[e + 16 >> 2] = h + (0 | H[e + 48 >> 2]),
                c = h,
                H[s >> 2] = c,
                H[u >> 2] = c,
                A = n) : 8 == (0 | p) && (H[e + 16 >> 2] = 0,
                H[s >> 2] = 0,
                H[u >> 2] = 0,
                H[e >> 2] = 32 | H[e >> 2],
                A = 2 == (0 | g) ? 0 : n - (0 | H[m + 4 >> 2]) | 0),
                W = r,
                0 | A
            }
            function _(e, t, n) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n;
                var r = 0
                  , i = 0;
                return r = W,
                W = W + 80 | 0,
                i = r,
                H[e + 36 >> 2] = 3,
                (0 == (64 & H[e >> 2] | 0) ? (H[i >> 2] = H[e + 60 >> 2],
                H[i + 4 >> 2] = 21505,
                H[i + 8 >> 2] = r + 12,
                0 != (0 | he(54, 0 | i))) : 0) && (K[e + 75 >> 0] = -1),
                i = 0 | y(e, t, n),
                W = r,
                0 | i
            }
            function k(e) {
                e = 0 | e;
                var t = 0
                  , n = 0
                  , r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0;
                do
                    if (e) {
                        if ((0 | H[e + 76 >> 2]) <= -1) {
                            t = 0 | A(e);
                            break
                        }
                        n = 0 == (0 | m(e)),
                        r = 0 | A(e),
                        n ? t = r : (g(e),
                        t = r)
                    } else {
                        if (i = 0 | H[13] ? 0 | k(0 | H[13]) : 0,
                        oe(36),
                        r = 0 | H[8])
                            for (n = r,
                            r = i; ; ) {
                                if (a = (0 | H[n + 76 >> 2]) > -1 ? 0 | m(n) : 0,
                                s = (0 | H[n + 20 >> 2]) >>> 0 > (0 | H[n + 28 >> 2]) >>> 0 ? 0 | A(n) | r : r,
                                a && g(n),
                                n = 0 | H[n + 56 >> 2],
                                !n) {
                                    o = s;
                                    break
                                }
                                r = s
                            }
                        else
                            o = i;
                        de(36),
                        t = o
                    }
                while (0);return 0 | t
            }
            function x(e) {
                e = 0 | e,
                0 | H[e + 68 >> 2] || g(e)
            }
            function A(e) {
                e = 0 | e;
                var t = 0
                  , n = 0
                  , r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0;
                return t = e + 20 | 0,
                n = e + 28 | 0,
                ((0 | H[t >> 2]) >>> 0 > (0 | H[n >> 2]) >>> 0 ? (0 | be[3 & H[e + 36 >> 2]](e, 0, 0),
                0 == (0 | H[t >> 2])) : 0) ? r = -1 : (i = e + 4 | 0,
                o = 0 | H[i >> 2],
                a = e + 8 | 0,
                s = 0 | H[a >> 2],
                o >>> 0 < s >>> 0 && 0 | be[3 & H[e + 40 >> 2]](e, o - s | 0, 1),
                H[e + 16 >> 2] = 0,
                H[n >> 2] = 0,
                H[t >> 2] = 0,
                H[a >> 2] = 0,
                H[i >> 2] = 0,
                r = 0),
                0 | r
            }
            function S(e) {
                e = 0 | e;
                var t = 0
                  , n = 0
                  , r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0
                  , c = 0
                  , u = 0
                  , f = 0
                  , l = 0
                  , h = 0
                  , d = 0
                  , w = 0
                  , m = 0
                  , g = 0
                  , v = 0
                  , b = 0
                  , y = 0
                  , _ = 0
                  , k = 0
                  , x = 0
                  , A = 0
                  , S = 0
                  , P = 0
                  , C = 0
                  , E = 0
                  , M = 0
                  , O = 0
                  , T = 0
                  , D = 0
                  , I = 0
                  , F = 0
                  , R = 0
                  , N = 0
                  , L = 0
                  , q = 0
                  , j = 0
                  , B = 0
                  , U = 0
                  , z = 0
                  , G = 0
                  , V = 0
                  , K = 0
                  , Y = 0
                  , W = 0
                  , Z = 0
                  , X = 0
                  , J = 0
                  , Q = 0
                  , $ = 0
                  , ee = 0
                  , te = 0
                  , ne = 0
                  , re = 0
                  , ie = 0
                  , oe = 0
                  , ae = 0
                  , se = 0
                  , le = 0
                  , he = 0
                  , de = 0
                  , pe = 0
                  , we = 0
                  , ge = 0
                  , ve = 0
                  , be = 0
                  , ye = 0
                  , _e = 0
                  , ke = 0
                  , xe = 0
                  , Ae = 0
                  , Se = 0
                  , Pe = 0
                  , Ce = 0
                  , Ee = 0
                  , Me = 0
                  , Oe = 0
                  , Te = 0
                  , De = 0
                  , Ie = 0
                  , Fe = 0
                  , Re = 0
                  , Ne = 0
                  , Le = 0
                  , qe = 0
                  , je = 0
                  , Be = 0
                  , Ue = 0
                  , ze = 0
                  , Ge = 0;
                do
                    if (e >>> 0 < 245) {
                        if (t = e >>> 0 < 11 ? 16 : e + 11 & -8,
                        n = t >>> 3,
                        r = 0 | H[43],
                        i = r >>> n,
                        3 & i) {
                            o = (1 & i ^ 1) + n | 0,
                            a = 212 + (o << 1 << 2) | 0,
                            s = a + 8 | 0,
                            c = 0 | H[s >> 2],
                            u = c + 8 | 0,
                            f = 0 | H[u >> 2];
                            do
                                if ((0 | a) != (0 | f)) {
                                    if (f >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                    l = f + 12 | 0,
                                    (0 | H[l >> 2]) == (0 | c)) {
                                        H[l >> 2] = a,
                                        H[s >> 2] = f;
                                        break
                                    }
                                    ce()
                                } else
                                    H[43] = r & ~(1 << o);
                            while (0);return f = o << 3,
                            H[c + 4 >> 2] = 3 | f,
                            s = c + f + 4 | 0,
                            H[s >> 2] = 1 | H[s >> 2],
                            h = u,
                            0 | h
                        }
                        if (s = 0 | H[45],
                        t >>> 0 > s >>> 0) {
                            if (i) {
                                f = 2 << n,
                                a = i << n & (f | 0 - f),
                                f = (a & 0 - a) + -1 | 0,
                                a = f >>> 12 & 16,
                                l = f >>> a,
                                f = l >>> 5 & 8,
                                d = l >>> f,
                                l = d >>> 2 & 4,
                                w = d >>> l,
                                d = w >>> 1 & 2,
                                m = w >>> d,
                                w = m >>> 1 & 1,
                                g = (f | a | l | d | w) + (m >>> w) | 0,
                                w = 212 + (g << 1 << 2) | 0,
                                m = w + 8 | 0,
                                d = 0 | H[m >> 2],
                                l = d + 8 | 0,
                                a = 0 | H[l >> 2];
                                do
                                    if ((0 | w) != (0 | a)) {
                                        if (a >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                        f = a + 12 | 0,
                                        (0 | H[f >> 2]) == (0 | d)) {
                                            H[f >> 2] = w,
                                            H[m >> 2] = a,
                                            v = 0 | H[45];
                                            break
                                        }
                                        ce()
                                    } else
                                        H[43] = r & ~(1 << g),
                                        v = s;
                                while (0);return s = (g << 3) - t | 0,
                                H[d + 4 >> 2] = 3 | t,
                                r = d + t | 0,
                                H[r + 4 >> 2] = 1 | s,
                                H[r + s >> 2] = s,
                                v && (a = 0 | H[48],
                                m = v >>> 3,
                                w = 212 + (m << 1 << 2) | 0,
                                n = 0 | H[43],
                                i = 1 << m,
                                n & i ? (m = w + 8 | 0,
                                u = 0 | H[m >> 2],
                                u >>> 0 < (0 | H[47]) >>> 0 ? ce() : (b = m,
                                y = u)) : (H[43] = n | i,
                                b = w + 8 | 0,
                                y = w),
                                H[b >> 2] = a,
                                H[y + 12 >> 2] = a,
                                H[a + 8 >> 2] = y,
                                H[a + 12 >> 2] = w),
                                H[45] = s,
                                H[48] = r,
                                h = l,
                                0 | h
                            }
                            if (r = 0 | H[44]) {
                                for (s = (r & 0 - r) + -1 | 0,
                                r = s >>> 12 & 16,
                                w = s >>> r,
                                s = w >>> 5 & 8,
                                a = w >>> s,
                                w = a >>> 2 & 4,
                                i = a >>> w,
                                a = i >>> 1 & 2,
                                n = i >>> a,
                                i = n >>> 1 & 1,
                                u = 0 | H[476 + ((s | r | w | a | i) + (n >>> i) << 2) >> 2],
                                i = (H[u + 4 >> 2] & -8) - t | 0,
                                n = u,
                                a = u; ; ) {
                                    if (u = 0 | H[n + 16 >> 2])
                                        x = u;
                                    else {
                                        if (w = 0 | H[n + 20 >> 2],
                                        !w) {
                                            _ = i,
                                            k = a;
                                            break
                                        }
                                        x = w
                                    }
                                    u = (H[x + 4 >> 2] & -8) - t | 0,
                                    w = u >>> 0 < i >>> 0,
                                    i = w ? u : i,
                                    n = x,
                                    a = w ? x : a
                                }
                                a = 0 | H[47],
                                k >>> 0 < a >>> 0 && ce(),
                                n = k + t | 0,
                                k >>> 0 >= n >>> 0 && ce(),
                                i = 0 | H[k + 24 >> 2],
                                l = 0 | H[k + 12 >> 2];
                                do
                                    if ((0 | l) == (0 | k)) {
                                        if (d = k + 20 | 0,
                                        g = 0 | H[d >> 2])
                                            S = g,
                                            P = d;
                                        else {
                                            if (w = k + 16 | 0,
                                            u = 0 | H[w >> 2],
                                            !u) {
                                                A = 0;
                                                break
                                            }
                                            S = u,
                                            P = w
                                        }
                                        for (; ; )
                                            if (d = S + 20 | 0,
                                            g = 0 | H[d >> 2])
                                                S = g,
                                                P = d;
                                            else {
                                                if (d = S + 16 | 0,
                                                g = 0 | H[d >> 2],
                                                !g) {
                                                    C = S,
                                                    E = P;
                                                    break
                                                }
                                                S = g,
                                                P = d
                                            }
                                        if (!(E >>> 0 < a >>> 0)) {
                                            H[E >> 2] = 0,
                                            A = C;
                                            break
                                        }
                                        ce()
                                    } else {
                                        if (d = 0 | H[k + 8 >> 2],
                                        d >>> 0 < a >>> 0 && ce(),
                                        g = d + 12 | 0,
                                        (0 | H[g >> 2]) != (0 | k) && ce(),
                                        w = l + 8 | 0,
                                        (0 | H[w >> 2]) == (0 | k)) {
                                            H[g >> 2] = l,
                                            H[w >> 2] = d,
                                            A = l;
                                            break
                                        }
                                        ce()
                                    }
                                while (0);do
                                    if (i) {
                                        if (l = 0 | H[k + 28 >> 2],
                                        a = 476 + (l << 2) | 0,
                                        (0 | k) == (0 | H[a >> 2])) {
                                            if (H[a >> 2] = A,
                                            !A) {
                                                H[44] = H[44] & ~(1 << l);
                                                break
                                            }
                                        } else if (i >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                        l = i + 16 | 0,
                                        (0 | H[l >> 2]) == (0 | k) ? H[l >> 2] = A : H[i + 20 >> 2] = A,
                                        !A)
                                            break;
                                        l = 0 | H[47],
                                        A >>> 0 < l >>> 0 && ce(),
                                        H[A + 24 >> 2] = i,
                                        a = 0 | H[k + 16 >> 2];
                                        do
                                            if (a) {
                                                if (!(a >>> 0 < l >>> 0)) {
                                                    H[A + 16 >> 2] = a,
                                                    H[a + 24 >> 2] = A;
                                                    break
                                                }
                                                ce()
                                            }
                                        while (0);if (a = 0 | H[k + 20 >> 2]) {
                                            if (!(a >>> 0 < (0 | H[47]) >>> 0)) {
                                                H[A + 20 >> 2] = a,
                                                H[a + 24 >> 2] = A;
                                                break
                                            }
                                            ce()
                                        }
                                    }
                                while (0);return _ >>> 0 < 16 ? (i = _ + t | 0,
                                H[k + 4 >> 2] = 3 | i,
                                a = k + i + 4 | 0,
                                H[a >> 2] = 1 | H[a >> 2]) : (H[k + 4 >> 2] = 3 | t,
                                H[n + 4 >> 2] = 1 | _,
                                H[n + _ >> 2] = _,
                                a = 0 | H[45],
                                a && (i = 0 | H[48],
                                l = a >>> 3,
                                a = 212 + (l << 1 << 2) | 0,
                                d = 0 | H[43],
                                w = 1 << l,
                                d & w ? (l = a + 8 | 0,
                                g = 0 | H[l >> 2],
                                g >>> 0 < (0 | H[47]) >>> 0 ? ce() : (M = l,
                                O = g)) : (H[43] = d | w,
                                M = a + 8 | 0,
                                O = a),
                                H[M >> 2] = i,
                                H[O + 12 >> 2] = i,
                                H[i + 8 >> 2] = O,
                                H[i + 12 >> 2] = a),
                                H[45] = _,
                                H[48] = n),
                                h = k + 8 | 0,
                                0 | h
                            }
                            T = t
                        } else
                            T = t
                    } else if (e >>> 0 <= 4294967231)
                        if (a = e + 11 | 0,
                        i = a & -8,
                        w = 0 | H[44]) {
                            d = 0 - i | 0,
                            g = a >>> 8,
                            g ? i >>> 0 > 16777215 ? D = 31 : (a = (g + 1048320 | 0) >>> 16 & 8,
                            l = g << a,
                            g = (l + 520192 | 0) >>> 16 & 4,
                            u = l << g,
                            l = (u + 245760 | 0) >>> 16 & 2,
                            r = 14 - (g | a | l) + (u << l >>> 15) | 0,
                            D = i >>> (r + 7 | 0) & 1 | r << 1) : D = 0,
                            r = 0 | H[476 + (D << 2) >> 2];
                            e: do
                                if (r)
                                    for (l = d,
                                    u = 0,
                                    a = i << (31 == (0 | D) ? 0 : 25 - (D >>> 1) | 0),
                                    g = r,
                                    s = 0; ; ) {
                                        if (m = H[g + 4 >> 2] & -8,
                                        c = m - i | 0,
                                        c >>> 0 < l >>> 0) {
                                            if ((0 | m) == (0 | i)) {
                                                L = c,
                                                q = g,
                                                j = g,
                                                N = 90;
                                                break e
                                            }
                                            B = c,
                                            U = g
                                        } else
                                            B = l,
                                            U = s;
                                        if (c = 0 | H[g + 20 >> 2],
                                        g = 0 | H[g + 16 + (a >>> 31 << 2) >> 2],
                                        m = 0 == (0 | c) | (0 | c) == (0 | g) ? u : c,
                                        c = 0 == (0 | g)) {
                                            I = B,
                                            F = m,
                                            R = U,
                                            N = 86;
                                            break
                                        }
                                        l = B,
                                        u = m,
                                        a <<= 1 & c ^ 1,
                                        s = U
                                    }
                                else
                                    I = d,
                                    F = 0,
                                    R = 0,
                                    N = 86;
                            while (0);if (86 == (0 | N)) {
                                if (0 == (0 | F) & 0 == (0 | R)) {
                                    if (r = 2 << D,
                                    d = w & (r | 0 - r),
                                    !d) {
                                        T = i;
                                        break
                                    }
                                    r = (d & 0 - d) + -1 | 0,
                                    d = r >>> 12 & 16,
                                    t = r >>> d,
                                    r = t >>> 5 & 8,
                                    n = t >>> r,
                                    t = n >>> 2 & 4,
                                    s = n >>> t,
                                    n = s >>> 1 & 2,
                                    a = s >>> n,
                                    s = a >>> 1 & 1,
                                    z = 0 | H[476 + ((r | d | t | n | s) + (a >>> s) << 2) >> 2]
                                } else
                                    z = F;
                                z ? (L = I,
                                q = z,
                                j = R,
                                N = 90) : (G = I,
                                V = R)
                            }
                            if (90 == (0 | N))
                                for (; ; )
                                    if (N = 0,
                                    s = (H[q + 4 >> 2] & -8) - i | 0,
                                    a = s >>> 0 < L >>> 0,
                                    n = a ? s : L,
                                    s = a ? q : j,
                                    a = 0 | H[q + 16 >> 2])
                                        L = n,
                                        q = a,
                                        j = s,
                                        N = 90;
                                    else {
                                        if (q = 0 | H[q + 20 >> 2],
                                        !q) {
                                            G = n,
                                            V = s;
                                            break
                                        }
                                        L = n,
                                        j = s,
                                        N = 90
                                    }
                            if (0 != (0 | V) ? G >>> 0 < ((0 | H[45]) - i | 0) >>> 0 : 0) {
                                w = 0 | H[47],
                                V >>> 0 < w >>> 0 && ce(),
                                s = V + i | 0,
                                V >>> 0 >= s >>> 0 && ce(),
                                n = 0 | H[V + 24 >> 2],
                                a = 0 | H[V + 12 >> 2];
                                do
                                    if ((0 | a) == (0 | V)) {
                                        if (t = V + 20 | 0,
                                        d = 0 | H[t >> 2])
                                            Y = d,
                                            W = t;
                                        else {
                                            if (r = V + 16 | 0,
                                            u = 0 | H[r >> 2],
                                            !u) {
                                                K = 0;
                                                break
                                            }
                                            Y = u,
                                            W = r
                                        }
                                        for (; ; )
                                            if (t = Y + 20 | 0,
                                            d = 0 | H[t >> 2])
                                                Y = d,
                                                W = t;
                                            else {
                                                if (t = Y + 16 | 0,
                                                d = 0 | H[t >> 2],
                                                !d) {
                                                    Z = Y,
                                                    X = W;
                                                    break
                                                }
                                                Y = d,
                                                W = t
                                            }
                                        if (!(X >>> 0 < w >>> 0)) {
                                            H[X >> 2] = 0,
                                            K = Z;
                                            break
                                        }
                                        ce()
                                    } else {
                                        if (t = 0 | H[V + 8 >> 2],
                                        t >>> 0 < w >>> 0 && ce(),
                                        d = t + 12 | 0,
                                        (0 | H[d >> 2]) != (0 | V) && ce(),
                                        r = a + 8 | 0,
                                        (0 | H[r >> 2]) == (0 | V)) {
                                            H[d >> 2] = a,
                                            H[r >> 2] = t,
                                            K = a;
                                            break
                                        }
                                        ce()
                                    }
                                while (0);do
                                    if (n) {
                                        if (a = 0 | H[V + 28 >> 2],
                                        w = 476 + (a << 2) | 0,
                                        (0 | V) == (0 | H[w >> 2])) {
                                            if (H[w >> 2] = K,
                                            !K) {
                                                H[44] = H[44] & ~(1 << a);
                                                break
                                            }
                                        } else if (n >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                        a = n + 16 | 0,
                                        (0 | H[a >> 2]) == (0 | V) ? H[a >> 2] = K : H[n + 20 >> 2] = K,
                                        !K)
                                            break;
                                        a = 0 | H[47],
                                        K >>> 0 < a >>> 0 && ce(),
                                        H[K + 24 >> 2] = n,
                                        w = 0 | H[V + 16 >> 2];
                                        do
                                            if (w) {
                                                if (!(w >>> 0 < a >>> 0)) {
                                                    H[K + 16 >> 2] = w,
                                                    H[w + 24 >> 2] = K;
                                                    break
                                                }
                                                ce()
                                            }
                                        while (0);if (w = 0 | H[V + 20 >> 2]) {
                                            if (!(w >>> 0 < (0 | H[47]) >>> 0)) {
                                                H[K + 20 >> 2] = w,
                                                H[w + 24 >> 2] = K;
                                                break
                                            }
                                            ce()
                                        }
                                    }
                                while (0);do
                                    if (G >>> 0 >= 16) {
                                        if (H[V + 4 >> 2] = 3 | i,
                                        H[s + 4 >> 2] = 1 | G,
                                        H[s + G >> 2] = G,
                                        n = G >>> 3,
                                        G >>> 0 < 256) {
                                            w = 212 + (n << 1 << 2) | 0,
                                            a = 0 | H[43],
                                            t = 1 << n,
                                            a & t ? (n = w + 8 | 0,
                                            r = 0 | H[n >> 2],
                                            r >>> 0 < (0 | H[47]) >>> 0 ? ce() : (J = n,
                                            Q = r)) : (H[43] = a | t,
                                            J = w + 8 | 0,
                                            Q = w),
                                            H[J >> 2] = s,
                                            H[Q + 12 >> 2] = s,
                                            H[s + 8 >> 2] = Q,
                                            H[s + 12 >> 2] = w;
                                            break
                                        }
                                        if (w = G >>> 8,
                                        w ? G >>> 0 > 16777215 ? $ = 31 : (t = (w + 1048320 | 0) >>> 16 & 8,
                                        a = w << t,
                                        w = (a + 520192 | 0) >>> 16 & 4,
                                        r = a << w,
                                        a = (r + 245760 | 0) >>> 16 & 2,
                                        n = 14 - (w | t | a) + (r << a >>> 15) | 0,
                                        $ = G >>> (n + 7 | 0) & 1 | n << 1) : $ = 0,
                                        n = 476 + ($ << 2) | 0,
                                        H[s + 28 >> 2] = $,
                                        a = s + 16 | 0,
                                        H[a + 4 >> 2] = 0,
                                        H[a >> 2] = 0,
                                        a = 0 | H[44],
                                        r = 1 << $,
                                        !(a & r)) {
                                            H[44] = a | r,
                                            H[n >> 2] = s,
                                            H[s + 24 >> 2] = n,
                                            H[s + 12 >> 2] = s,
                                            H[s + 8 >> 2] = s;
                                            break
                                        }
                                        for (r = G << (31 == (0 | $) ? 0 : 25 - ($ >>> 1) | 0),
                                        a = 0 | H[n >> 2]; ; ) {
                                            if ((H[a + 4 >> 2] & -8 | 0) == (0 | G)) {
                                                ee = a,
                                                N = 148;
                                                break
                                            }
                                            if (n = a + 16 + (r >>> 31 << 2) | 0,
                                            t = 0 | H[n >> 2],
                                            !t) {
                                                te = n,
                                                ne = a,
                                                N = 145;
                                                break
                                            }
                                            r <<= 1,
                                            a = t
                                        }
                                        if (145 == (0 | N)) {
                                            if (!(te >>> 0 < (0 | H[47]) >>> 0)) {
                                                H[te >> 2] = s,
                                                H[s + 24 >> 2] = ne,
                                                H[s + 12 >> 2] = s,
                                                H[s + 8 >> 2] = s;
                                                break
                                            }
                                            ce()
                                        } else if (148 == (0 | N)) {
                                            if (a = ee + 8 | 0,
                                            r = 0 | H[a >> 2],
                                            t = 0 | H[47],
                                            r >>> 0 >= t >>> 0 & ee >>> 0 >= t >>> 0) {
                                                H[r + 12 >> 2] = s,
                                                H[a >> 2] = s,
                                                H[s + 8 >> 2] = r,
                                                H[s + 12 >> 2] = ee,
                                                H[s + 24 >> 2] = 0;
                                                break
                                            }
                                            ce()
                                        }
                                    } else
                                        r = G + i | 0,
                                        H[V + 4 >> 2] = 3 | r,
                                        a = V + r + 4 | 0,
                                        H[a >> 2] = 1 | H[a >> 2];
                                while (0);return h = V + 8 | 0,
                                0 | h
                            }
                            T = i
                        } else
                            T = i;
                    else
                        T = -1;
                while (0);if (V = 0 | H[45],
                V >>> 0 >= T >>> 0)
                    return G = V - T | 0,
                    ee = 0 | H[48],
                    G >>> 0 > 15 ? (ne = ee + T | 0,
                    H[48] = ne,
                    H[45] = G,
                    H[ne + 4 >> 2] = 1 | G,
                    H[ne + G >> 2] = G,
                    H[ee + 4 >> 2] = 3 | T) : (H[45] = 0,
                    H[48] = 0,
                    H[ee + 4 >> 2] = 3 | V,
                    G = ee + V + 4 | 0,
                    H[G >> 2] = 1 | H[G >> 2]),
                    h = ee + 8 | 0,
                    0 | h;
                if (ee = 0 | H[46],
                ee >>> 0 > T >>> 0)
                    return G = ee - T | 0,
                    H[46] = G,
                    ee = 0 | H[49],
                    V = ee + T | 0,
                    H[49] = V,
                    H[V + 4 >> 2] = 1 | G,
                    H[ee + 4 >> 2] = 3 | T,
                    h = ee + 8 | 0,
                    0 | h;
                do
                    if (!(0 | H[161])) {
                        if (ee = 0 | me(30),
                        !(ee + -1 & ee)) {
                            H[163] = ee,
                            H[162] = ee,
                            H[164] = -1,
                            H[165] = -1,
                            H[166] = 0,
                            H[154] = 0,
                            H[161] = (0 | fe(0)) & -16 ^ 1431655768;
                            break
                        }
                        ce()
                    }
                while (0);if (ee = T + 48 | 0,
                G = 0 | H[163],
                V = T + 47 | 0,
                ne = G + V | 0,
                te = 0 - G | 0,
                G = ne & te,
                G >>> 0 <= T >>> 0)
                    return h = 0,
                    0 | h;
                if ($ = 0 | H[153],
                0 != (0 | $) ? (Q = 0 | H[151],
                J = Q + G | 0,
                J >>> 0 <= Q >>> 0 | J >>> 0 > $ >>> 0) : 0)
                    return h = 0,
                    0 | h;
                e: do
                    if (4 & H[154])
                        N = 190;
                    else {
                        $ = 0 | H[49];
                        t: do
                            if ($) {
                                for (J = 620; ; ) {
                                    if (Q = 0 | H[J >> 2],
                                    Q >>> 0 <= $ >>> 0 ? (K = J + 4 | 0,
                                    (Q + (0 | H[K >> 2]) | 0) >>> 0 > $ >>> 0) : 0) {
                                        re = J,
                                        ie = K;
                                        break
                                    }
                                    if (J = 0 | H[J + 8 >> 2],
                                    !J) {
                                        N = 173;
                                        break t
                                    }
                                }
                                if (J = ne - (0 | H[46]) & te,
                                J >>> 0 < 2147483647)
                                    if (K = 0 | ue(0 | J),
                                    (0 | K) == ((0 | H[re >> 2]) + (0 | H[ie >> 2]) | 0)) {
                                        if ((0 | K) != -1) {
                                            oe = K,
                                            ae = J,
                                            N = 193;
                                            break e
                                        }
                                    } else
                                        se = K,
                                        le = J,
                                        N = 183
                            } else
                                N = 173;
                        while (0);do
                            if ((173 == (0 | N) ? ($ = 0 | ue(0),
                            (0 | $) != -1) : 0) && (i = $,
                            J = 0 | H[162],
                            K = J + -1 | 0,
                            he = K & i ? G - i + (K + i & 0 - J) | 0 : G,
                            J = 0 | H[151],
                            i = J + he | 0,
                            he >>> 0 > T >>> 0 & he >>> 0 < 2147483647)) {
                                if (K = 0 | H[153],
                                0 != (0 | K) ? i >>> 0 <= J >>> 0 | i >>> 0 > K >>> 0 : 0)
                                    break;
                                if (K = 0 | ue(0 | he),
                                (0 | K) == (0 | $)) {
                                    oe = $,
                                    ae = he,
                                    N = 193;
                                    break e
                                }
                                se = K,
                                le = he,
                                N = 183
                            }
                        while (0);t: do
                            if (183 == (0 | N)) {
                                K = 0 - le | 0;
                                do {
                                    if (ee >>> 0 > le >>> 0 & (le >>> 0 < 2147483647 & (0 | se) != -1) ? ($ = 0 | H[163],
                                    i = V - le + $ & 0 - $,
                                    i >>> 0 < 2147483647) : 0) {
                                        if ((0 | ue(0 | i)) == -1) {
                                            0 | ue(0 | K);
                                            break t
                                        }
                                        de = i + le | 0;
                                        break
                                    }
                                    de = le
                                } while (0);if ((0 | se) != -1) {
                                    oe = se,
                                    ae = de,
                                    N = 193;
                                    break e
                                }
                            }
                        while (0);H[154] = 4 | H[154],
                        N = 190
                    }
                while (0);if ((((190 == (0 | N) ? G >>> 0 < 2147483647 : 0) ? (de = 0 | ue(0 | G),
                G = 0 | ue(0),
                de >>> 0 < G >>> 0 & ((0 | de) != -1 & (0 | G) != -1)) : 0) ? (se = G - de | 0,
                se >>> 0 > (T + 40 | 0) >>> 0) : 0) && (oe = de,
                ae = se,
                N = 193),
                193 == (0 | N)) {
                    se = (0 | H[151]) + ae | 0,
                    H[151] = se,
                    se >>> 0 > (0 | H[152]) >>> 0 && (H[152] = se),
                    se = 0 | H[49];
                    do
                        if (se) {
                            de = 620;
                            do {
                                if (G = 0 | H[de >> 2],
                                le = de + 4 | 0,
                                V = 0 | H[le >> 2],
                                (0 | oe) == (G + V | 0)) {
                                    pe = G,
                                    we = le,
                                    ge = V,
                                    ve = de,
                                    N = 203;
                                    break
                                }
                                de = 0 | H[de + 8 >> 2]
                            } while (0 != (0 | de));if ((203 == (0 | N) ? 0 == (8 & H[ve + 12 >> 2] | 0) : 0) ? se >>> 0 < oe >>> 0 & se >>> 0 >= pe >>> 0 : 0) {
                                H[we >> 2] = ge + ae,
                                de = se + 8 | 0,
                                V = 0 == (7 & de | 0) ? 0 : 0 - de & 7,
                                de = se + V | 0,
                                le = ae - V + (0 | H[46]) | 0,
                                H[49] = de,
                                H[46] = le,
                                H[de + 4 >> 2] = 1 | le,
                                H[de + le + 4 >> 2] = 40,
                                H[50] = H[165];
                                break
                            }
                            for (le = 0 | H[47],
                            oe >>> 0 < le >>> 0 ? (H[47] = oe,
                            be = oe) : be = le,
                            le = oe + ae | 0,
                            de = 620; ; ) {
                                if ((0 | H[de >> 2]) == (0 | le)) {
                                    ye = de,
                                    _e = de,
                                    N = 211;
                                    break
                                }
                                if (de = 0 | H[de + 8 >> 2],
                                !de) {
                                    ke = 620;
                                    break
                                }
                            }
                            if (211 == (0 | N)) {
                                if (!(8 & H[_e + 12 >> 2])) {
                                    H[ye >> 2] = oe,
                                    de = _e + 4 | 0,
                                    H[de >> 2] = (0 | H[de >> 2]) + ae,
                                    de = oe + 8 | 0,
                                    V = oe + (0 == (7 & de | 0) ? 0 : 0 - de & 7) | 0,
                                    de = le + 8 | 0,
                                    G = le + (0 == (7 & de | 0) ? 0 : 0 - de & 7) | 0,
                                    de = V + T | 0,
                                    ee = G - V - T | 0,
                                    H[V + 4 >> 2] = 3 | T;
                                    do
                                        if ((0 | G) != (0 | se)) {
                                            if ((0 | G) == (0 | H[48])) {
                                                he = (0 | H[45]) + ee | 0,
                                                H[45] = he,
                                                H[48] = de,
                                                H[de + 4 >> 2] = 1 | he,
                                                H[de + he >> 2] = he;
                                                break
                                            }
                                            if (he = 0 | H[G + 4 >> 2],
                                            1 == (3 & he | 0)) {
                                                ie = he & -8,
                                                re = he >>> 3;
                                                e: do
                                                    if (he >>> 0 >= 256) {
                                                        te = 0 | H[G + 24 >> 2],
                                                        ne = 0 | H[G + 12 >> 2];
                                                        do
                                                            if ((0 | ne) == (0 | G)) {
                                                                if (K = G + 16 | 0,
                                                                i = K + 4 | 0,
                                                                $ = 0 | H[i >> 2])
                                                                    Ae = $,
                                                                    Se = i;
                                                                else {
                                                                    if (J = 0 | H[K >> 2],
                                                                    !J) {
                                                                        xe = 0;
                                                                        break
                                                                    }
                                                                    Ae = J,
                                                                    Se = K
                                                                }
                                                                for (; ; )
                                                                    if (i = Ae + 20 | 0,
                                                                    $ = 0 | H[i >> 2])
                                                                        Ae = $,
                                                                        Se = i;
                                                                    else {
                                                                        if (i = Ae + 16 | 0,
                                                                        $ = 0 | H[i >> 2],
                                                                        !$) {
                                                                            Pe = Ae,
                                                                            Ce = Se;
                                                                            break
                                                                        }
                                                                        Ae = $,
                                                                        Se = i
                                                                    }
                                                                if (!(Ce >>> 0 < be >>> 0)) {
                                                                    H[Ce >> 2] = 0,
                                                                    xe = Pe;
                                                                    break
                                                                }
                                                                ce()
                                                            } else {
                                                                if (i = 0 | H[G + 8 >> 2],
                                                                i >>> 0 < be >>> 0 && ce(),
                                                                $ = i + 12 | 0,
                                                                (0 | H[$ >> 2]) != (0 | G) && ce(),
                                                                K = ne + 8 | 0,
                                                                (0 | H[K >> 2]) == (0 | G)) {
                                                                    H[$ >> 2] = ne,
                                                                    H[K >> 2] = i,
                                                                    xe = ne;
                                                                    break
                                                                }
                                                                ce()
                                                            }
                                                        while (0);if (!te)
                                                            break;
                                                        ne = 0 | H[G + 28 >> 2],
                                                        i = 476 + (ne << 2) | 0;
                                                        do {
                                                            if ((0 | G) == (0 | H[i >> 2])) {
                                                                if (H[i >> 2] = xe,
                                                                xe)
                                                                    break;
                                                                H[44] = H[44] & ~(1 << ne);
                                                                break e
                                                            }
                                                            if (te >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                                            K = te + 16 | 0,
                                                            (0 | H[K >> 2]) == (0 | G) ? H[K >> 2] = xe : H[te + 20 >> 2] = xe,
                                                            !xe)
                                                                break e
                                                        } while (0);ne = 0 | H[47],
                                                        xe >>> 0 < ne >>> 0 && ce(),
                                                        H[xe + 24 >> 2] = te,
                                                        i = G + 16 | 0,
                                                        K = 0 | H[i >> 2];
                                                        do
                                                            if (K) {
                                                                if (!(K >>> 0 < ne >>> 0)) {
                                                                    H[xe + 16 >> 2] = K,
                                                                    H[K + 24 >> 2] = xe;
                                                                    break
                                                                }
                                                                ce()
                                                            }
                                                        while (0);if (K = 0 | H[i + 4 >> 2],
                                                        !K)
                                                            break;
                                                        if (!(K >>> 0 < (0 | H[47]) >>> 0)) {
                                                            H[xe + 20 >> 2] = K,
                                                            H[K + 24 >> 2] = xe;
                                                            break
                                                        }
                                                        ce()
                                                    } else {
                                                        K = 0 | H[G + 8 >> 2],
                                                        ne = 0 | H[G + 12 >> 2],
                                                        te = 212 + (re << 1 << 2) | 0;
                                                        do
                                                            if ((0 | K) != (0 | te)) {
                                                                if (K >>> 0 < be >>> 0 && ce(),
                                                                (0 | H[K + 12 >> 2]) == (0 | G))
                                                                    break;
                                                                ce()
                                                            }
                                                        while (0);if ((0 | ne) == (0 | K)) {
                                                            H[43] = H[43] & ~(1 << re);
                                                            break
                                                        }
                                                        do
                                                            if ((0 | ne) == (0 | te))
                                                                Ee = ne + 8 | 0;
                                                            else {
                                                                if (ne >>> 0 < be >>> 0 && ce(),
                                                                i = ne + 8 | 0,
                                                                (0 | H[i >> 2]) == (0 | G)) {
                                                                    Ee = i;
                                                                    break
                                                                }
                                                                ce()
                                                            }
                                                        while (0);H[K + 12 >> 2] = ne,
                                                        H[Ee >> 2] = K
                                                    }
                                                while (0);Me = G + ie | 0,
                                                Oe = ie + ee | 0
                                            } else
                                                Me = G,
                                                Oe = ee;
                                            if (re = Me + 4 | 0,
                                            H[re >> 2] = H[re >> 2] & -2,
                                            H[de + 4 >> 2] = 1 | Oe,
                                            H[de + Oe >> 2] = Oe,
                                            re = Oe >>> 3,
                                            Oe >>> 0 < 256) {
                                                he = 212 + (re << 1 << 2) | 0,
                                                te = 0 | H[43],
                                                i = 1 << re;
                                                do
                                                    if (te & i) {
                                                        if (re = he + 8 | 0,
                                                        $ = 0 | H[re >> 2],
                                                        $ >>> 0 >= (0 | H[47]) >>> 0) {
                                                            Te = re,
                                                            De = $;
                                                            break
                                                        }
                                                        ce()
                                                    } else
                                                        H[43] = te | i,
                                                        Te = he + 8 | 0,
                                                        De = he;
                                                while (0);H[Te >> 2] = de,
                                                H[De + 12 >> 2] = de,
                                                H[de + 8 >> 2] = De,
                                                H[de + 12 >> 2] = he;
                                                break
                                            }
                                            i = Oe >>> 8;
                                            do
                                                if (i) {
                                                    if (Oe >>> 0 > 16777215) {
                                                        Ie = 31;
                                                        break
                                                    }
                                                    te = (i + 1048320 | 0) >>> 16 & 8,
                                                    ie = i << te,
                                                    $ = (ie + 520192 | 0) >>> 16 & 4,
                                                    re = ie << $,
                                                    ie = (re + 245760 | 0) >>> 16 & 2,
                                                    J = 14 - ($ | te | ie) + (re << ie >>> 15) | 0,
                                                    Ie = Oe >>> (J + 7 | 0) & 1 | J << 1
                                                } else
                                                    Ie = 0;
                                            while (0);if (i = 476 + (Ie << 2) | 0,
                                            H[de + 28 >> 2] = Ie,
                                            he = de + 16 | 0,
                                            H[he + 4 >> 2] = 0,
                                            H[he >> 2] = 0,
                                            he = 0 | H[44],
                                            J = 1 << Ie,
                                            !(he & J)) {
                                                H[44] = he | J,
                                                H[i >> 2] = de,
                                                H[de + 24 >> 2] = i,
                                                H[de + 12 >> 2] = de,
                                                H[de + 8 >> 2] = de;
                                                break
                                            }
                                            for (J = Oe << (31 == (0 | Ie) ? 0 : 25 - (Ie >>> 1) | 0),
                                            he = 0 | H[i >> 2]; ; ) {
                                                if ((H[he + 4 >> 2] & -8 | 0) == (0 | Oe)) {
                                                    Fe = he,
                                                    N = 281;
                                                    break
                                                }
                                                if (i = he + 16 + (J >>> 31 << 2) | 0,
                                                ie = 0 | H[i >> 2],
                                                !ie) {
                                                    Re = i,
                                                    Ne = he,
                                                    N = 278;
                                                    break
                                                }
                                                J <<= 1,
                                                he = ie
                                            }
                                            if (278 == (0 | N)) {
                                                if (!(Re >>> 0 < (0 | H[47]) >>> 0)) {
                                                    H[Re >> 2] = de,
                                                    H[de + 24 >> 2] = Ne,
                                                    H[de + 12 >> 2] = de,
                                                    H[de + 8 >> 2] = de;
                                                    break
                                                }
                                                ce()
                                            } else if (281 == (0 | N)) {
                                                if (he = Fe + 8 | 0,
                                                J = 0 | H[he >> 2],
                                                ie = 0 | H[47],
                                                J >>> 0 >= ie >>> 0 & Fe >>> 0 >= ie >>> 0) {
                                                    H[J + 12 >> 2] = de,
                                                    H[he >> 2] = de,
                                                    H[de + 8 >> 2] = J,
                                                    H[de + 12 >> 2] = Fe,
                                                    H[de + 24 >> 2] = 0;
                                                    break
                                                }
                                                ce()
                                            }
                                        } else
                                            J = (0 | H[46]) + ee | 0,
                                            H[46] = J,
                                            H[49] = de,
                                            H[de + 4 >> 2] = 1 | J;
                                    while (0);return h = V + 8 | 0,
                                    0 | h
                                }
                                ke = 620
                            }
                            for (; ; ) {
                                if (de = 0 | H[ke >> 2],
                                de >>> 0 <= se >>> 0 ? (ee = de + (0 | H[ke + 4 >> 2]) | 0,
                                ee >>> 0 > se >>> 0) : 0) {
                                    Le = ee;
                                    break
                                }
                                ke = 0 | H[ke + 8 >> 2]
                            }
                            V = Le + -47 | 0,
                            ee = V + 8 | 0,
                            de = V + (0 == (7 & ee | 0) ? 0 : 0 - ee & 7) | 0,
                            ee = se + 16 | 0,
                            V = de >>> 0 < ee >>> 0 ? se : de,
                            de = V + 8 | 0,
                            G = oe + 8 | 0,
                            le = 0 == (7 & G | 0) ? 0 : 0 - G & 7,
                            G = oe + le | 0,
                            J = ae + -40 - le | 0,
                            H[49] = G,
                            H[46] = J,
                            H[G + 4 >> 2] = 1 | J,
                            H[G + J + 4 >> 2] = 40,
                            H[50] = H[165],
                            J = V + 4 | 0,
                            H[J >> 2] = 27,
                            H[de >> 2] = H[155],
                            H[de + 4 >> 2] = H[156],
                            H[de + 8 >> 2] = H[157],
                            H[de + 12 >> 2] = H[158],
                            H[155] = oe,
                            H[156] = ae,
                            H[158] = 0,
                            H[157] = de,
                            de = V + 24 | 0;
                            do
                                de = de + 4 | 0,
                                H[de >> 2] = 7;
                            while ((de + 4 | 0) >>> 0 < Le >>> 0);if ((0 | V) != (0 | se)) {
                                if (de = V - se | 0,
                                H[J >> 2] = H[J >> 2] & -2,
                                H[se + 4 >> 2] = 1 | de,
                                H[V >> 2] = de,
                                G = de >>> 3,
                                de >>> 0 < 256) {
                                    le = 212 + (G << 1 << 2) | 0,
                                    he = 0 | H[43],
                                    ie = 1 << G,
                                    he & ie ? (G = le + 8 | 0,
                                    i = 0 | H[G >> 2],
                                    i >>> 0 < (0 | H[47]) >>> 0 ? ce() : (qe = G,
                                    je = i)) : (H[43] = he | ie,
                                    qe = le + 8 | 0,
                                    je = le),
                                    H[qe >> 2] = se,
                                    H[je + 12 >> 2] = se,
                                    H[se + 8 >> 2] = je,
                                    H[se + 12 >> 2] = le;
                                    break
                                }
                                if (le = de >>> 8,
                                le ? de >>> 0 > 16777215 ? Be = 31 : (ie = (le + 1048320 | 0) >>> 16 & 8,
                                he = le << ie,
                                le = (he + 520192 | 0) >>> 16 & 4,
                                i = he << le,
                                he = (i + 245760 | 0) >>> 16 & 2,
                                G = 14 - (le | ie | he) + (i << he >>> 15) | 0,
                                Be = de >>> (G + 7 | 0) & 1 | G << 1) : Be = 0,
                                G = 476 + (Be << 2) | 0,
                                H[se + 28 >> 2] = Be,
                                H[se + 20 >> 2] = 0,
                                H[ee >> 2] = 0,
                                he = 0 | H[44],
                                i = 1 << Be,
                                !(he & i)) {
                                    H[44] = he | i,
                                    H[G >> 2] = se,
                                    H[se + 24 >> 2] = G,
                                    H[se + 12 >> 2] = se,
                                    H[se + 8 >> 2] = se;
                                    break
                                }
                                for (i = de << (31 == (0 | Be) ? 0 : 25 - (Be >>> 1) | 0),
                                he = 0 | H[G >> 2]; ; ) {
                                    if ((H[he + 4 >> 2] & -8 | 0) == (0 | de)) {
                                        Ue = he,
                                        N = 307;
                                        break
                                    }
                                    if (G = he + 16 + (i >>> 31 << 2) | 0,
                                    ie = 0 | H[G >> 2],
                                    !ie) {
                                        ze = G,
                                        Ge = he,
                                        N = 304;
                                        break
                                    }
                                    i <<= 1,
                                    he = ie
                                }
                                if (304 == (0 | N)) {
                                    if (!(ze >>> 0 < (0 | H[47]) >>> 0)) {
                                        H[ze >> 2] = se,
                                        H[se + 24 >> 2] = Ge,
                                        H[se + 12 >> 2] = se,
                                        H[se + 8 >> 2] = se;
                                        break
                                    }
                                    ce()
                                } else if (307 == (0 | N)) {
                                    if (he = Ue + 8 | 0,
                                    i = 0 | H[he >> 2],
                                    de = 0 | H[47],
                                    i >>> 0 >= de >>> 0 & Ue >>> 0 >= de >>> 0) {
                                        H[i + 12 >> 2] = se,
                                        H[he >> 2] = se,
                                        H[se + 8 >> 2] = i,
                                        H[se + 12 >> 2] = Ue,
                                        H[se + 24 >> 2] = 0;
                                        break
                                    }
                                    ce()
                                }
                            }
                        } else {
                            i = 0 | H[47],
                            0 == (0 | i) | oe >>> 0 < i >>> 0 && (H[47] = oe),
                            H[155] = oe,
                            H[156] = ae,
                            H[158] = 0,
                            H[52] = H[161],
                            H[51] = -1,
                            i = 0;
                            do
                                he = 212 + (i << 1 << 2) | 0,
                                H[he + 12 >> 2] = he,
                                H[he + 8 >> 2] = he,
                                i = i + 1 | 0;
                            while (32 != (0 | i));i = oe + 8 | 0,
                            he = 0 == (7 & i | 0) ? 0 : 0 - i & 7,
                            i = oe + he | 0,
                            de = ae + -40 - he | 0,
                            H[49] = i,
                            H[46] = de,
                            H[i + 4 >> 2] = 1 | de,
                            H[i + de + 4 >> 2] = 40,
                            H[50] = H[165]
                        }
                    while (0);if (ae = 0 | H[46],
                    ae >>> 0 > T >>> 0)
                        return oe = ae - T | 0,
                        H[46] = oe,
                        ae = 0 | H[49],
                        se = ae + T | 0,
                        H[49] = se,
                        H[se + 4 >> 2] = 1 | oe,
                        H[ae + 4 >> 2] = 3 | T,
                        h = ae + 8 | 0,
                        0 | h
                }
                return H[(0 | p()) >> 2] = 12,
                h = 0,
                0 | h
            }
            function P(e) {
                e = 0 | e;
                var t = 0
                  , n = 0
                  , r = 0
                  , i = 0
                  , o = 0
                  , a = 0
                  , s = 0
                  , c = 0
                  , u = 0
                  , f = 0
                  , l = 0
                  , h = 0
                  , d = 0
                  , p = 0
                  , w = 0
                  , m = 0
                  , g = 0
                  , v = 0
                  , b = 0
                  , y = 0
                  , _ = 0
                  , k = 0
                  , x = 0
                  , A = 0
                  , S = 0
                  , P = 0
                  , C = 0
                  , E = 0
                  , M = 0
                  , O = 0
                  , T = 0
                  , D = 0
                  , I = 0
                  , F = 0
                  , R = 0
                  , N = 0;
                if (e) {
                    t = e + -8 | 0,
                    n = 0 | H[47],
                    t >>> 0 < n >>> 0 && ce(),
                    r = 0 | H[e + -4 >> 2],
                    e = 3 & r,
                    1 == (0 | e) && ce(),
                    i = r & -8,
                    o = t + i | 0;
                    do
                        if (1 & r)
                            l = t,
                            h = i;
                        else {
                            if (a = 0 | H[t >> 2],
                            !e)
                                return;
                            if (s = t + (0 - a) | 0,
                            c = a + i | 0,
                            s >>> 0 < n >>> 0 && ce(),
                            (0 | s) == (0 | H[48])) {
                                if (u = o + 4 | 0,
                                f = 0 | H[u >> 2],
                                3 != (3 & f | 0)) {
                                    l = s,
                                    h = c;
                                    break
                                }
                                return H[45] = c,
                                H[u >> 2] = f & -2,
                                H[s + 4 >> 2] = 1 | c,
                                void (H[s + c >> 2] = c)
                            }
                            if (f = a >>> 3,
                            a >>> 0 < 256) {
                                if (a = 0 | H[s + 8 >> 2],
                                u = 0 | H[s + 12 >> 2],
                                d = 212 + (f << 1 << 2) | 0,
                                (0 | a) != (0 | d) && (a >>> 0 < n >>> 0 && ce(),
                                (0 | H[a + 12 >> 2]) != (0 | s) && ce()),
                                (0 | u) == (0 | a)) {
                                    H[43] = H[43] & ~(1 << f),
                                    l = s,
                                    h = c;
                                    break
                                }
                                (0 | u) != (0 | d) ? (u >>> 0 < n >>> 0 && ce(),
                                d = u + 8 | 0,
                                (0 | H[d >> 2]) == (0 | s) ? p = d : ce()) : p = u + 8 | 0,
                                H[a + 12 >> 2] = u,
                                H[p >> 2] = a,
                                l = s,
                                h = c;
                                break
                            }
                            a = 0 | H[s + 24 >> 2],
                            u = 0 | H[s + 12 >> 2];
                            do
                                if ((0 | u) == (0 | s)) {
                                    if (d = s + 16 | 0,
                                    f = d + 4 | 0,
                                    w = 0 | H[f >> 2])
                                        v = w,
                                        b = f;
                                    else {
                                        if (m = 0 | H[d >> 2],
                                        !m) {
                                            g = 0;
                                            break
                                        }
                                        v = m,
                                        b = d
                                    }
                                    for (; ; )
                                        if (f = v + 20 | 0,
                                        w = 0 | H[f >> 2])
                                            v = w,
                                            b = f;
                                        else {
                                            if (f = v + 16 | 0,
                                            w = 0 | H[f >> 2],
                                            !w) {
                                                y = v,
                                                _ = b;
                                                break
                                            }
                                            v = w,
                                            b = f
                                        }
                                    if (!(_ >>> 0 < n >>> 0)) {
                                        H[_ >> 2] = 0,
                                        g = y;
                                        break
                                    }
                                    ce()
                                } else {
                                    if (f = 0 | H[s + 8 >> 2],
                                    f >>> 0 < n >>> 0 && ce(),
                                    w = f + 12 | 0,
                                    (0 | H[w >> 2]) != (0 | s) && ce(),
                                    d = u + 8 | 0,
                                    (0 | H[d >> 2]) == (0 | s)) {
                                        H[w >> 2] = u,
                                        H[d >> 2] = f,
                                        g = u;
                                        break
                                    }
                                    ce()
                                }
                            while (0);if (a) {
                                if (u = 0 | H[s + 28 >> 2],
                                f = 476 + (u << 2) | 0,
                                (0 | s) == (0 | H[f >> 2])) {
                                    if (H[f >> 2] = g,
                                    !g) {
                                        H[44] = H[44] & ~(1 << u),
                                        l = s,
                                        h = c;
                                        break
                                    }
                                } else if (a >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                u = a + 16 | 0,
                                (0 | H[u >> 2]) == (0 | s) ? H[u >> 2] = g : H[a + 20 >> 2] = g,
                                !g) {
                                    l = s,
                                    h = c;
                                    break
                                }
                                u = 0 | H[47],
                                g >>> 0 < u >>> 0 && ce(),
                                H[g + 24 >> 2] = a,
                                f = s + 16 | 0,
                                d = 0 | H[f >> 2];
                                do
                                    if (d) {
                                        if (!(d >>> 0 < u >>> 0)) {
                                            H[g + 16 >> 2] = d,
                                            H[d + 24 >> 2] = g;
                                            break
                                        }
                                        ce()
                                    }
                                while (0);if (d = 0 | H[f + 4 >> 2]) {
                                    if (!(d >>> 0 < (0 | H[47]) >>> 0)) {
                                        H[g + 20 >> 2] = d,
                                        H[d + 24 >> 2] = g,
                                        l = s,
                                        h = c;
                                        break
                                    }
                                    ce()
                                } else
                                    l = s,
                                    h = c
                            } else
                                l = s,
                                h = c
                        }
                    while (0);if (l >>> 0 >= o >>> 0 && ce(),
                    i = o + 4 | 0,
                    t = 0 | H[i >> 2],
                    1 & t || ce(),
                    2 & t)
                        H[i >> 2] = t & -2,
                        H[l + 4 >> 2] = 1 | h,
                        H[l + h >> 2] = h,
                        E = h;
                    else {
                        if ((0 | o) == (0 | H[49])) {
                            if (g = (0 | H[46]) + h | 0,
                            H[46] = g,
                            H[49] = l,
                            H[l + 4 >> 2] = 1 | g,
                            (0 | l) != (0 | H[48]))
                                return;
                            return H[48] = 0,
                            void (H[45] = 0)
                        }
                        if ((0 | o) == (0 | H[48]))
                            return g = (0 | H[45]) + h | 0,
                            H[45] = g,
                            H[48] = l,
                            H[l + 4 >> 2] = 1 | g,
                            void (H[l + g >> 2] = g);
                        g = (t & -8) + h | 0,
                        n = t >>> 3;
                        do
                            if (t >>> 0 >= 256) {
                                y = 0 | H[o + 24 >> 2],
                                _ = 0 | H[o + 12 >> 2];
                                do
                                    if ((0 | _) == (0 | o)) {
                                        if (b = o + 16 | 0,
                                        v = b + 4 | 0,
                                        p = 0 | H[v >> 2])
                                            x = p,
                                            A = v;
                                        else {
                                            if (e = 0 | H[b >> 2],
                                            !e) {
                                                k = 0;
                                                break
                                            }
                                            x = e,
                                            A = b
                                        }
                                        for (; ; )
                                            if (v = x + 20 | 0,
                                            p = 0 | H[v >> 2])
                                                x = p,
                                                A = v;
                                            else {
                                                if (v = x + 16 | 0,
                                                p = 0 | H[v >> 2],
                                                !p) {
                                                    S = x,
                                                    P = A;
                                                    break
                                                }
                                                x = p,
                                                A = v
                                            }
                                        if (!(P >>> 0 < (0 | H[47]) >>> 0)) {
                                            H[P >> 2] = 0,
                                            k = S;
                                            break
                                        }
                                        ce()
                                    } else {
                                        if (v = 0 | H[o + 8 >> 2],
                                        v >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                        p = v + 12 | 0,
                                        (0 | H[p >> 2]) != (0 | o) && ce(),
                                        b = _ + 8 | 0,
                                        (0 | H[b >> 2]) == (0 | o)) {
                                            H[p >> 2] = _,
                                            H[b >> 2] = v,
                                            k = _;
                                            break
                                        }
                                        ce()
                                    }
                                while (0);if (y) {
                                    if (_ = 0 | H[o + 28 >> 2],
                                    c = 476 + (_ << 2) | 0,
                                    (0 | o) == (0 | H[c >> 2])) {
                                        if (H[c >> 2] = k,
                                        !k) {
                                            H[44] = H[44] & ~(1 << _);
                                            break
                                        }
                                    } else if (y >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                    _ = y + 16 | 0,
                                    (0 | H[_ >> 2]) == (0 | o) ? H[_ >> 2] = k : H[y + 20 >> 2] = k,
                                    !k)
                                        break;
                                    _ = 0 | H[47],
                                    k >>> 0 < _ >>> 0 && ce(),
                                    H[k + 24 >> 2] = y,
                                    c = o + 16 | 0,
                                    s = 0 | H[c >> 2];
                                    do
                                        if (s) {
                                            if (!(s >>> 0 < _ >>> 0)) {
                                                H[k + 16 >> 2] = s,
                                                H[s + 24 >> 2] = k;
                                                break
                                            }
                                            ce()
                                        }
                                    while (0);if (s = 0 | H[c + 4 >> 2]) {
                                        if (!(s >>> 0 < (0 | H[47]) >>> 0)) {
                                            H[k + 20 >> 2] = s,
                                            H[s + 24 >> 2] = k;
                                            break
                                        }
                                        ce()
                                    }
                                }
                            } else {
                                if (s = 0 | H[o + 8 >> 2],
                                _ = 0 | H[o + 12 >> 2],
                                y = 212 + (n << 1 << 2) | 0,
                                (0 | s) != (0 | y) && (s >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                (0 | H[s + 12 >> 2]) != (0 | o) && ce()),
                                (0 | _) == (0 | s)) {
                                    H[43] = H[43] & ~(1 << n);
                                    break
                                }
                                (0 | _) != (0 | y) ? (_ >>> 0 < (0 | H[47]) >>> 0 && ce(),
                                y = _ + 8 | 0,
                                (0 | H[y >> 2]) == (0 | o) ? C = y : ce()) : C = _ + 8 | 0,
                                H[s + 12 >> 2] = _,
                                H[C >> 2] = s
                            }
                        while (0);if (H[l + 4 >> 2] = 1 | g,
                        H[l + g >> 2] = g,
                        (0 | l) == (0 | H[48]))
                            return void (H[45] = g);
                        E = g
                    }
                    if (h = E >>> 3,
                    E >>> 0 < 256)
                        return t = 212 + (h << 1 << 2) | 0,
                        i = 0 | H[43],
                        g = 1 << h,
                        i & g ? (h = t + 8 | 0,
                        C = 0 | H[h >> 2],
                        C >>> 0 < (0 | H[47]) >>> 0 ? ce() : (M = h,
                        O = C)) : (H[43] = i | g,
                        M = t + 8 | 0,
                        O = t),
                        H[M >> 2] = l,
                        H[O + 12 >> 2] = l,
                        H[l + 8 >> 2] = O,
                        void (H[l + 12 >> 2] = t);
                    t = E >>> 8,
                    t ? E >>> 0 > 16777215 ? T = 31 : (O = (t + 1048320 | 0) >>> 16 & 8,
                    M = t << O,
                    t = (M + 520192 | 0) >>> 16 & 4,
                    g = M << t,
                    M = (g + 245760 | 0) >>> 16 & 2,
                    i = 14 - (t | O | M) + (g << M >>> 15) | 0,
                    T = E >>> (i + 7 | 0) & 1 | i << 1) : T = 0,
                    i = 476 + (T << 2) | 0,
                    H[l + 28 >> 2] = T,
                    H[l + 20 >> 2] = 0,
                    H[l + 16 >> 2] = 0,
                    M = 0 | H[44],
                    g = 1 << T;
                    do
                        if (M & g) {
                            for (O = E << (31 == (0 | T) ? 0 : 25 - (T >>> 1) | 0),
                            t = 0 | H[i >> 2]; ; ) {
                                if ((H[t + 4 >> 2] & -8 | 0) == (0 | E)) {
                                    D = t,
                                    I = 130;
                                    break
                                }
                                if (C = t + 16 + (O >>> 31 << 2) | 0,
                                h = 0 | H[C >> 2],
                                !h) {
                                    F = C,
                                    R = t,
                                    I = 127;
                                    break
                                }
                                O <<= 1,
                                t = h
                            }
                            if (127 == (0 | I)) {
                                if (!(F >>> 0 < (0 | H[47]) >>> 0)) {
                                    H[F >> 2] = l,
                                    H[l + 24 >> 2] = R,
                                    H[l + 12 >> 2] = l,
                                    H[l + 8 >> 2] = l;
                                    break
                                }
                                ce()
                            } else if (130 == (0 | I)) {
                                if (t = D + 8 | 0,
                                O = 0 | H[t >> 2],
                                c = 0 | H[47],
                                O >>> 0 >= c >>> 0 & D >>> 0 >= c >>> 0) {
                                    H[O + 12 >> 2] = l,
                                    H[t >> 2] = l,
                                    H[l + 8 >> 2] = O,
                                    H[l + 12 >> 2] = D,
                                    H[l + 24 >> 2] = 0;
                                    break
                                }
                                ce()
                            }
                        } else
                            H[44] = M | g,
                            H[i >> 2] = l,
                            H[l + 24 >> 2] = i,
                            H[l + 12 >> 2] = l,
                            H[l + 8 >> 2] = l;
                    while (0);if (l = (0 | H[51]) + -1 | 0,
                    H[51] = l,
                    !l) {
                        for (N = 628; ; ) {
                            if (l = 0 | H[N >> 2],
                            !l)
                                break;
                            N = l + 8 | 0
                        }
                        H[51] = -1
                    }
                }
            }
            function C() {}
            function E(e, t, n) {
                return e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                (0 | n) < 32 ? (ee = t >> n,
                e >>> n | (t & (1 << n) - 1) << 32 - n) : (ee = (0 | t) < 0 ? -1 : 0,
                t >> n - 32 | 0)
            }
            function M(e, t, n, r) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                r = 0 | r;
                var i = 0;
                return i = t - r >>> 0,
                i = t - r - (n >>> 0 > e >>> 0 | 0) >>> 0,
                0 | (ee = i,
                e - n >>> 0 | 0)
            }
            function O(e, t, n, r) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                r = 0 | r;
                var i = 0;
                return i = e + n >>> 0,
                0 | (ee = t + r + (i >>> 0 < e >>> 0 | 0) >>> 0,
                0 | i)
            }
            function T(e, t, n) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n;
                var r = 0
                  , i = 0
                  , o = 0
                  , a = 0;
                if (r = e + n | 0,
                (0 | n) >= 20) {
                    if (t = 255 & t,
                    i = 3 & e,
                    o = t | t << 8 | t << 16 | t << 24,
                    a = r & -4,
                    i)
                        for (i = e + 4 - i | 0; (0 | e) < (0 | i); )
                            K[e >> 0] = t,
                            e = e + 1 | 0;
                    for (; (0 | e) < (0 | a); )
                        H[e >> 2] = o,
                        e = e + 4 | 0
                }
                for (; (0 | e) < (0 | r); )
                    K[e >> 0] = t,
                    e = e + 1 | 0;
                return e - n | 0
            }
            function D(e, t, n) {
                return e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                (0 | n) < 32 ? (ee = t >>> n,
                e >>> n | (t & (1 << n) - 1) << 32 - n) : (ee = 0,
                t >>> n - 32 | 0)
            }
            function I(e, t, n) {
                return e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                (0 | n) < 32 ? (ee = t << n | (e & (1 << n) - 1 << 32 - n) >>> 32 - n,
                e << n) : (ee = e << n - 32,
                0)
            }
            function F(e, t, n) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n;
                var r = 0;
                if ((0 | n) >= 4096)
                    return 0 | le(0 | e, 0 | t, 0 | n);
                if (r = 0 | e,
                (3 & e) == (3 & t)) {
                    for (; 3 & e; ) {
                        if (!n)
                            return 0 | r;
                        K[e >> 0] = 0 | K[t >> 0],
                        e = e + 1 | 0,
                        t = t + 1 | 0,
                        n = n - 1 | 0
                    }
                    for (; (0 | n) >= 4; )
                        H[e >> 2] = H[t >> 2],
                        e = e + 4 | 0,
                        t = t + 4 | 0,
                        n = n - 4 | 0
                }
                for (; (0 | n) > 0; )
                    K[e >> 0] = 0 | K[t >> 0],
                    e = e + 1 | 0,
                    t = t + 1 | 0,
                    n = n - 1 | 0;
                return 0 | r
            }
            function R(e) {
                e = 0 | e;
                var t = 0;
                return t = 0 | K[J + (255 & e) >> 0],
                (0 | t) < 8 ? 0 | t : (t = 0 | K[J + (e >> 8 & 255) >> 0],
                (0 | t) < 8 ? t + 8 | 0 : (t = 0 | K[J + (e >> 16 & 255) >> 0],
                (0 | t) < 8 ? t + 16 | 0 : (0 | K[J + (e >>> 24) >> 0]) + 24 | 0))
            }
            function N(e, t) {
                e = 0 | e,
                t = 0 | t;
                var n = 0
                  , r = 0
                  , i = 0
                  , o = 0;
                return n = 65535 & e,
                r = 65535 & t,
                i = 0 | te(r, n),
                o = e >>> 16,
                e = (i >>> 16) + (0 | te(r, o)) | 0,
                r = t >>> 16,
                t = 0 | te(r, n),
                0 | (ee = (e >>> 16) + (0 | te(r, o)) + (((65535 & e) + t | 0) >>> 16) | 0,
                e + t << 16 | 65535 & i | 0)
            }
            function L(e, t, n, r) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                r = 0 | r;
                var i = 0
                  , o = 0;
                return i = e,
                e = n,
                n = 0 | N(i, e),
                o = ee,
                0 | (ee = (0 | te(t, e)) + (0 | te(r, i)) + o | 0 & o,
                0 | n | 0)
            }
            function q(e, t, n, r, i) {
                e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                r = 0 | r,
                i = 0 | i;
                var o = 0
                  , a = 0
                  , s = 0
                  , c = 0
                  , u = 0
                  , f = 0
                  , l = 0
                  , h = 0
                  , d = 0
                  , p = 0
                  , w = 0
                  , m = 0
                  , g = 0
                  , v = 0
                  , b = 0
                  , y = 0
                  , _ = 0
                  , k = 0
                  , x = 0
                  , A = 0
                  , S = 0
                  , P = 0
                  , C = 0
                  , E = 0
                  , T = 0
                  , D = 0
                  , I = 0;
                if (o = e,
                a = t,
                s = a,
                c = n,
                u = r,
                f = u,
                !s)
                    return l = 0 != (0 | i),
                    f ? l ? (H[i >> 2] = 0 | e,
                    H[i + 4 >> 2] = 0 & t,
                    h = 0,
                    d = 0,
                    0 | (ee = h,
                    d)) : (h = 0,
                    d = 0,
                    0 | (ee = h,
                    d)) : (l && (H[i >> 2] = (o >>> 0) % (c >>> 0),
                    H[i + 4 >> 2] = 0),
                    h = 0,
                    d = (o >>> 0) / (c >>> 0) >>> 0,
                    0 | (ee = h,
                    d));
                l = 0 == (0 | f);
                do {
                    if (c) {
                        if (!l) {
                            if (p = (0 | ne(0 | f)) - (0 | ne(0 | s)) | 0,
                            p >>> 0 <= 31) {
                                w = p + 1 | 0,
                                m = 31 - p | 0,
                                g = p - 31 >> 31,
                                v = w,
                                b = o >>> (w >>> 0) & g | s << m,
                                y = s >>> (w >>> 0) & g,
                                _ = 0,
                                k = o << m;
                                break
                            }
                            return i ? (H[i >> 2] = 0 | e,
                            H[i + 4 >> 2] = a | 0 & t,
                            h = 0,
                            d = 0,
                            0 | (ee = h,
                            d)) : (h = 0,
                            d = 0,
                            0 | (ee = h,
                            d))
                        }
                        if (m = c - 1 | 0,
                        m & c) {
                            g = (0 | ne(0 | c)) + 33 - (0 | ne(0 | s)) | 0,
                            w = 64 - g | 0,
                            p = 32 - g | 0,
                            x = p >> 31,
                            A = g - 32 | 0,
                            S = A >> 31,
                            v = g,
                            b = p - 1 >> 31 & s >>> (A >>> 0) | (s << p | o >>> (g >>> 0)) & S,
                            y = S & s >>> (g >>> 0),
                            _ = o << w & x,
                            k = (s << w | o >>> (A >>> 0)) & x | o << p & g - 33 >> 31;
                            break
                        }
                        return i && (H[i >> 2] = m & o,
                        H[i + 4 >> 2] = 0),
                        1 == (0 | c) ? (h = a | 0 & t,
                        d = 0 | e | 0,
                        0 | (ee = h,
                        d)) : (m = 0 | R(0 | c),
                        h = s >>> (m >>> 0) | 0,
                        d = s << 32 - m | o >>> (m >>> 0) | 0,
                        0 | (ee = h,
                        d))
                    }
                    if (l)
                        return i && (H[i >> 2] = (s >>> 0) % (c >>> 0),
                        H[i + 4 >> 2] = 0),
                        h = 0,
                        d = (s >>> 0) / (c >>> 0) >>> 0,
                        0 | (ee = h,
                        d);
                    if (!o)
                        return i && (H[i >> 2] = 0,
                        H[i + 4 >> 2] = (s >>> 0) % (f >>> 0)),
                        h = 0,
                        d = (s >>> 0) / (f >>> 0) >>> 0,
                        0 | (ee = h,
                        d);
                    if (m = f - 1 | 0,
                    !(m & f))
                        return i && (H[i >> 2] = 0 | e,
                        H[i + 4 >> 2] = m & s | 0 & t),
                        h = 0,
                        d = s >>> ((0 | R(0 | f)) >>> 0),
                        0 | (ee = h,
                        d);
                    if (m = (0 | ne(0 | f)) - (0 | ne(0 | s)) | 0,
                    m >>> 0 <= 30) {
                        g = m + 1 | 0,
                        p = 31 - m | 0,
                        v = g,
                        b = s << p | o >>> (g >>> 0),
                        y = s >>> (g >>> 0),
                        _ = 0,
                        k = o << p;
                        break
                    }
                    return i ? (H[i >> 2] = 0 | e,
                    H[i + 4 >> 2] = a | 0 & t,
                    h = 0,
                    d = 0,
                    0 | (ee = h,
                    d)) : (h = 0,
                    d = 0,
                    0 | (ee = h,
                    d))
                } while (0);if (v) {
                    t = 0 | n | 0,
                    n = u | 0 & r,
                    r = 0 | O(0 | t, 0 | n, -1, -1),
                    u = ee,
                    a = k,
                    k = _,
                    _ = y,
                    y = b,
                    b = v,
                    v = 0;
                    do
                        e = a,
                        a = k >>> 31 | a << 1,
                        k = v | k << 1,
                        o = y << 1 | e >>> 31 | 0,
                        e = y >>> 31 | _ << 1 | 0,
                        0 | M(r, u, o, e),
                        s = ee,
                        f = s >> 31 | ((0 | s) < 0 ? -1 : 0) << 1,
                        v = 1 & f,
                        y = 0 | M(o, e, f & t, (((0 | s) < 0 ? -1 : 0) >> 31 | ((0 | s) < 0 ? -1 : 0) << 1) & n),
                        _ = ee,
                        b = b - 1 | 0;
                    while (0 != (0 | b));P = a,
                    C = k,
                    E = _,
                    T = y,
                    D = 0,
                    I = v
                } else
                    P = k,
                    C = _,
                    E = y,
                    T = b,
                    D = 0,
                    I = 0;
                return v = C,
                C = 0,
                i && (H[i >> 2] = T,
                H[i + 4 >> 2] = E),
                h = (0 | v) >>> 31 | (P | C) << 1 | 0 & (C << 1 | v >>> 31) | D,
                d = (v << 1 | 0) & -2 | I,
                0 | (ee = h,
                d)
            }
            function j(e, t) {
                return e = 0 | e,
                t = 0 | t,
                0 | ve[1 & e](0 | t)
            }
            function B(e, t, n, r) {
                return e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                r = 0 | r,
                0 | be[3 & e](0 | t, 0 | n, 0 | r)
            }
            function U(e, t) {
                e = 0 | e,
                t = 0 | t,
                ye[1 & e](0 | t)
            }
            function z(e) {
                return e = 0 | e,
                re(0),
                0
            }
            function G(e, t, n) {
                return e = 0 | e,
                t = 0 | t,
                n = 0 | n,
                re(1),
                0
            }
            function V(e) {
                e = 0 | e,
                re(2)
            }
            var K = new e.Int8Array(n)
              , H = (new e.Int16Array(n),
            new e.Int32Array(n))
              , Y = new e.Uint8Array(n)
              , W = (new e.Uint16Array(n),
            new e.Uint32Array(n),
            new e.Float32Array(n),
            new e.Float64Array(n),
            0 | t.STACKTOP)
              , Z = 0 | t.STACK_MAX
              , X = 0 | t.tempDoublePtr
              , J = (0 | t.ABORT,
            0 | t.cttz_i8)
              , Q = 0
              , $ = 0
              , ee = (e.NaN,
            e.Infinity,
            0)
              , te = (e.Math.floor,
            e.Math.abs,
            e.Math.sqrt,
            e.Math.pow,
            e.Math.cos,
            e.Math.sin,
            e.Math.tan,
            e.Math.acos,
            e.Math.asin,
            e.Math.atan,
            e.Math.atan2,
            e.Math.exp,
            e.Math.log,
            e.Math.ceil,
            e.Math.imul)
              , ne = (e.Math.min,
            e.Math.clz32)
              , re = t.abort
              , ie = (t.assert,
            t.invoke_ii,
            t.invoke_iiii,
            t.invoke_vi,
            t._pthread_cleanup_pop)
              , oe = t.___lock
              , ae = (t._emscripten_set_main_loop,
            t._pthread_self)
              , se = t.___syscall6
              , ce = (t._emscripten_set_main_loop_timing,
            t._abort)
              , ue = t._sbrk
              , fe = t._time
              , le = (t.___setErrNo,
            t._emscripten_memcpy_big)
              , he = t.___syscall54
              , de = t.___unlock
              , pe = t.___syscall140
              , we = t._pthread_cleanup_push
              , me = t._sysconf
              , ge = t.___syscall146
              , ve = [z, v]
              , be = [G, _, b, y]
              , ye = [V, x];
            return {
                _curve25519_donna: f,
                _free: P,
                _i64Add: O,
                _bitshift64Ashr: E,
                _i64Subtract: M,
                _memset: T,
                _malloc: S,
                _memcpy: F,
                _bitshift64Lshr: D,
                _fflush: k,
                ___errno_location: p,
                _bitshift64Shl: I,
                runPostSets: C,
                stackAlloc: r,
                stackSave: i,
                stackRestore: o,
                establishStackSpace: a,
                setThrew: s,
                setTempRet0: c,
                getTempRet0: u,
                dynCall_ii: j,
                dynCall_iiii: B,
                dynCall_vi: U
            }
        }(e.Na, e.Oa, buffer);
        e._curve25519_donna = Z._curve25519_donna;
        var Da = e._free = Z._free;
        e.runPostSets = Z.runPostSets;
        var cb = e._i64Add = Z._i64Add
          , ab = e._bitshift64Ashr = Z._bitshift64Ashr
          , bb = e._i64Subtract = Z._i64Subtract
          , db = e._memset = Z._memset
          , ua = e._malloc = Z._malloc
          , gc = e._memcpy = Z._memcpy
          , fb = e._bitshift64Lshr = Z._bitshift64Lshr;
        e._fflush = Z._fflush,
        e.___errno_location = Z.___errno_location;
        var gb = e._bitshift64Shl = Z._bitshift64Shl;
        e.dynCall_ii = Z.dynCall_ii,
        e.dynCall_iiii = Z.dynCall_iiii,
        e.dynCall_vi = Z.dynCall_vi,
        n.W = Z.stackAlloc,
        n.na = Z.stackSave,
        n.X = Z.stackRestore,
        n.md = Z.establishStackSpace,
        n.cb = Z.setTempRet0,
        n.Ua = Z.getTempRet0,
        xc.prototype = Error(),
        xc.prototype.constructor = xc;
        var Yc = null
          , Xa = function t() {
            e.calledRun || $c(),
            e.calledRun || (Xa = t)
        };
        e.callMain = e.jd = function(t) {
            function n() {
                for (var e = 0; 3 > e; e++)
                    i.push(0)
            }
            assert(0 == L, "cannot call main when async dependencies remain! (listen on __ATMAIN__)"),
            assert(0 == Pa.length, "cannot call main when preRun functions remain to be called"),
            t = t || [],
            xa || (xa = !0,
            Oa(Qa));
            var r = t.length + 1
              , i = [G(Va(e.thisProgram), "i8", 0)];
            n();
            for (var o = 0; o < r - 1; o += 1)
                i.push(G(Va(t[o]), "i8", 0)),
                n();
            i.push(0),
            i = G(i, "i32", 0);
            try {
                var a = e._main(r, i, 0);
                ad(a, !0)
            } catch (s) {
                if (!(s instanceof xc)) {
                    if ("SimulateInfiniteLoop" != s)
                        throw s && "object" == typeof s && s.stack && e.S("exception thrown: " + [s, s.stack]),
                        s;
                    e.noExitRuntime = !0
                }
            } finally {}
        }
        ,
        e.run = e.run = $c,
        e.exit = e.exit = ad;
        var cd = [];
        if (e.abort = e.abort = z,
        e.preInit)
            for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length; )
                e.preInit.pop()();
        var bd = !0;
        e.noInitialRun && (bd = !1),
        $c(),
        module.exports = e
    },
    890: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(223)
          , o = r(i);
        t["default"] = o["default"] || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
    },
    891: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(242)
          , o = r(i);
        t["default"] = function(e, t, n) {
            return t in e ? (0,
            o["default"])(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
    },
    892: function(e, t) {
        "use strict";
        t.__esModule = !0,
        t["default"] = function(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
    },
    895: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e) {
            if ("file" == e.kind)
                return e.getAsFile()
        }
        var o = n(589)
          , a = n(261)
          , s = n(18)
          , c = new RegExp("\r\n","g")
          , u = "\n"
          , f = {
            "text/rtf": 1,
            "text/html": 1
        }
          , l = function() {
            function e(t) {
                r(this, e),
                this.data = t,
                this.types = t.types ? a(t.types) : []
            }
            return e.prototype.isRichText = function() {
                return !(!this.getHTML() || !this.getText()) || !this.isImage() && this.types.some(function(e) {
                    return f[e]
                })
            }
            ,
            e.prototype.getText = function() {
                var e;
                return this.data.getData && (this.types.length ? this.types.indexOf("text/plain") != -1 && (e = this.data.getData("text/plain")) : e = this.data.getData("Text")),
                e ? e.replace(c, u) : null
            }
            ,
            e.prototype.getHTML = function() {
                if (this.data.getData) {
                    if (!this.types.length)
                        return this.data.getData("Text");
                    if (this.types.indexOf("text/html") != -1)
                        return this.data.getData("text/html")
                }
            }
            ,
            e.prototype.isLink = function() {
                return this.types.some(function(e) {
                    return e.indexOf("Url") != -1 || e.indexOf("text/uri-list") != -1 || e.indexOf("text/x-moz-url")
                })
            }
            ,
            e.prototype.getLink = function() {
                if (this.data.getData) {
                    if (this.types.indexOf("text/x-moz-url") != -1) {
                        var e = this.data.getData("text/x-moz-url").split("\n");
                        return e[0]
                    }
                    return this.types.indexOf("text/uri-list") != -1 ? this.data.getData("text/uri-list") : this.data.getData("url")
                }
                return null
            }
            ,
            e.prototype.isImage = function t() {
                var t = this.types.some(function(e) {
                    return e.indexOf("application/x-moz-file") != -1
                });
                if (t)
                    return !0;
                for (var e = this.getFiles(), n = 0; n < e.length; n++) {
                    var r = e[n].type;
                    if (!o.isImage(r))
                        return !1
                }
                return !0
            }
            ,
            e.prototype.getCount = function() {
                return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null
            }
            ,
            e.prototype.getFiles = function() {
                return this.data.items ? Array.prototype.slice.call(this.data.items).map(i).filter(s.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : []
            }
            ,
            e.prototype.hasFiles = function() {
                return this.getFiles().length > 0
            }
            ,
            e
        }();
        e.exports = l
    },
    896: function(e, t, n) {
        "use strict";
        var r = function(e, t, n, r, i, o, a, s) {
            if (!e) {
                var c;
                if (void 0 === t)
                    c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, i, o, a, s]
                      , f = 0;
                    c = new Error(t.replace(/%s/g, function() {
                        return u[f++]
                    })),
                    c.name = "Invariant Violation"
                }
                throw c.framesToPop = 1,
                c
            }
        };
        e.exports = r
    },
    900: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var i = n(241)
          , o = r(i);
        t["default"] = function(e) {
            return Array.isArray(e) ? e : (0,
            o["default"])(e)
        }
    },
    901: function(e, t, n) {
        function r(e) {
            return e.replace(/([A-Z][a-z])|([a-z][A-Z])|([A-Z])/g, function(e) {
                return 1 == e.length ? e.toLowerCase() : e[0] == e[0].toUpperCase() ? " " + e.toLowerCase() : e[0] + " " + e[1].toLowerCase()
            }).replace(/^\s+|\s+$/g, "")
        }
        var i = n(586).ExifReader;
        e.exports = function(e) {
            var t = new i;
            t.load(e);
            var n = t.getAllTags()
              , o = {};
            for (var a in n)
                o[r(a)] = n[a].description;
            return o
        }
    },
    983: function(e, t) {
        function n(e, t) {
            this.count = e,
            this.dataCodewords = t,
            this.__defineGetter__("Count", function() {
                return this.count
            }),
            this.__defineGetter__("DataCodewords", function() {
                return this.dataCodewords
            })
        }
        function r(e, t, n) {
            this.ecCodewordsPerBlock = e,
            n ? this.ecBlocks = new Array(t,n) : this.ecBlocks = new Array(t),
            this.__defineGetter__("ECCodewordsPerBlock", function() {
                return this.ecCodewordsPerBlock
            }),
            this.__defineGetter__("TotalECCodewords", function() {
                return this.ecCodewordsPerBlock * this.NumBlocks
            }),
            this.__defineGetter__("NumBlocks", function() {
                for (var e = 0, t = 0; t < this.ecBlocks.length; t++)
                    e += this.ecBlocks[t].length;
                return e
            }),
            this.getECBlocks = function() {
                return this.ecBlocks
            }
        }
        function i(e, t, n, r, i, o) {
            this.versionNumber = e,
            this.alignmentPatternCenters = t,
            this.ecBlocks = new Array(n,r,i,o);
            for (var a = 0, s = n.ECCodewordsPerBlock, c = n.getECBlocks(), u = 0; u < c.length; u++) {
                var f = c[u];
                a += f.Count * (f.DataCodewords + s)
            }
            this.totalCodewords = a,
            this.__defineGetter__("VersionNumber", function() {
                return this.versionNumber
            }),
            this.__defineGetter__("AlignmentPatternCenters", function() {
                return this.alignmentPatternCenters
            }),
            this.__defineGetter__("TotalCodewords", function() {
                return this.totalCodewords
            }),
            this.__defineGetter__("DimensionForVersion", function() {
                return 17 + 4 * this.versionNumber
            }),
            this.buildFunctionPattern = function() {
                var e = this.DimensionForVersion
                  , t = new l(e);
                t.setRegion(0, 0, 9, 9),
                t.setRegion(e - 8, 0, 8, 9),
                t.setRegion(0, e - 8, 9, 8);
                for (var n = this.alignmentPatternCenters.length, r = 0; r < n; r++)
                    for (var i = this.alignmentPatternCenters[r] - 2, o = 0; o < n; o++)
                        0 == r && (0 == o || o == n - 1) || r == n - 1 && 0 == o || t.setRegion(this.alignmentPatternCenters[o] - 2, i, 5, 5);
                return t.setRegion(6, 9, 1, e - 17),
                t.setRegion(9, 6, e - 17, 1),
                this.versionNumber > 6 && (t.setRegion(e - 11, 0, 3, 6),
                t.setRegion(0, e - 11, 6, 3)),
                t
            }
            ,
            this.getECBlocksForLevel = function(e) {
                return this.ecBlocks[e.ordinal()]
            }
        }
        function o() {
            return new Array(new i(1,new Array,new r(7,new n(1,19)),new r(10,new n(1,16)),new r(13,new n(1,13)),new r(17,new n(1,9))),new i(2,new Array(6,18),new r(10,new n(1,34)),new r(16,new n(1,28)),new r(22,new n(1,22)),new r(28,new n(1,16))),new i(3,new Array(6,22),new r(15,new n(1,55)),new r(26,new n(1,44)),new r(18,new n(2,17)),new r(22,new n(2,13))),new i(4,new Array(6,26),new r(20,new n(1,80)),new r(18,new n(2,32)),new r(26,new n(2,24)),new r(16,new n(4,9))),new i(5,new Array(6,30),new r(26,new n(1,108)),new r(24,new n(2,43)),new r(18,new n(2,15),new n(2,16)),new r(22,new n(2,11),new n(2,12))),new i(6,new Array(6,34),new r(18,new n(2,68)),new r(16,new n(4,27)),new r(24,new n(4,19)),new r(28,new n(4,15))),new i(7,new Array(6,22,38),new r(20,new n(2,78)),new r(18,new n(4,31)),new r(18,new n(2,14),new n(4,15)),new r(26,new n(4,13),new n(1,14))),new i(8,new Array(6,24,42),new r(24,new n(2,97)),new r(22,new n(2,38),new n(2,39)),new r(22,new n(4,18),new n(2,19)),new r(26,new n(4,14),new n(2,15))),new i(9,new Array(6,26,46),new r(30,new n(2,116)),new r(22,new n(3,36),new n(2,37)),new r(20,new n(4,16),new n(4,17)),new r(24,new n(4,12),new n(4,13))),new i(10,new Array(6,28,50),new r(18,new n(2,68),new n(2,69)),new r(26,new n(4,43),new n(1,44)),new r(24,new n(6,19),new n(2,20)),new r(28,new n(6,15),new n(2,16))),new i(11,new Array(6,30,54),new r(20,new n(4,81)),new r(30,new n(1,50),new n(4,51)),new r(28,new n(4,22),new n(4,23)),new r(24,new n(3,12),new n(8,13))),new i(12,new Array(6,32,58),new r(24,new n(2,92),new n(2,93)),new r(22,new n(6,36),new n(2,37)),new r(26,new n(4,20),new n(6,21)),new r(28,new n(7,14),new n(4,15))),new i(13,new Array(6,34,62),new r(26,new n(4,107)),new r(22,new n(8,37),new n(1,38)),new r(24,new n(8,20),new n(4,21)),new r(22,new n(12,11),new n(4,12))),new i(14,new Array(6,26,46,66),new r(30,new n(3,115),new n(1,116)),new r(24,new n(4,40),new n(5,41)),new r(20,new n(11,16),new n(5,17)),new r(24,new n(11,12),new n(5,13))),new i(15,new Array(6,26,48,70),new r(22,new n(5,87),new n(1,88)),new r(24,new n(5,41),new n(5,42)),new r(30,new n(5,24),new n(7,25)),new r(24,new n(11,12),new n(7,13))),new i(16,new Array(6,26,50,74),new r(24,new n(5,98),new n(1,99)),new r(28,new n(7,45),new n(3,46)),new r(24,new n(15,19),new n(2,20)),new r(30,new n(3,15),new n(13,16))),new i(17,new Array(6,30,54,78),new r(28,new n(1,107),new n(5,108)),new r(28,new n(10,46),new n(1,47)),new r(28,new n(1,22),new n(15,23)),new r(28,new n(2,14),new n(17,15))),new i(18,new Array(6,30,56,82),new r(30,new n(5,120),new n(1,121)),new r(26,new n(9,43),new n(4,44)),new r(28,new n(17,22),new n(1,23)),new r(28,new n(2,14),new n(19,15))),new i(19,new Array(6,30,58,86),new r(28,new n(3,113),new n(4,114)),new r(26,new n(3,44),new n(11,45)),new r(26,new n(17,21),new n(4,22)),new r(26,new n(9,13),new n(16,14))),new i(20,new Array(6,34,62,90),new r(28,new n(3,107),new n(5,108)),new r(26,new n(3,41),new n(13,42)),new r(30,new n(15,24),new n(5,25)),new r(28,new n(15,15),new n(10,16))),new i(21,new Array(6,28,50,72,94),new r(28,new n(4,116),new n(4,117)),new r(26,new n(17,42)),new r(28,new n(17,22),new n(6,23)),new r(30,new n(19,16),new n(6,17))),new i(22,new Array(6,26,50,74,98),new r(28,new n(2,111),new n(7,112)),new r(28,new n(17,46)),new r(30,new n(7,24),new n(16,25)),new r(24,new n(34,13))),new i(23,new Array(6,30,54,74,102),new r(30,new n(4,121),new n(5,122)),new r(28,new n(4,47),new n(14,48)),new r(30,new n(11,24),new n(14,25)),new r(30,new n(16,15),new n(14,16))),new i(24,new Array(6,28,54,80,106),new r(30,new n(6,117),new n(4,118)),new r(28,new n(6,45),new n(14,46)),new r(30,new n(11,24),new n(16,25)),new r(30,new n(30,16),new n(2,17))),new i(25,new Array(6,32,58,84,110),new r(26,new n(8,106),new n(4,107)),new r(28,new n(8,47),new n(13,48)),new r(30,new n(7,24),new n(22,25)),new r(30,new n(22,15),new n(13,16))),new i(26,new Array(6,30,58,86,114),new r(28,new n(10,114),new n(2,115)),new r(28,new n(19,46),new n(4,47)),new r(28,new n(28,22),new n(6,23)),new r(30,new n(33,16),new n(4,17))),new i(27,new Array(6,34,62,90,118),new r(30,new n(8,122),new n(4,123)),new r(28,new n(22,45),new n(3,46)),new r(30,new n(8,23),new n(26,24)),new r(30,new n(12,15),new n(28,16))),new i(28,new Array(6,26,50,74,98,122),new r(30,new n(3,117),new n(10,118)),new r(28,new n(3,45),new n(23,46)),new r(30,new n(4,24),new n(31,25)),new r(30,new n(11,15),new n(31,16))),new i(29,new Array(6,30,54,78,102,126),new r(30,new n(7,116),new n(7,117)),new r(28,new n(21,45),new n(7,46)),new r(30,new n(1,23),new n(37,24)),new r(30,new n(19,15),new n(26,16))),new i(30,new Array(6,26,52,78,104,130),new r(30,new n(5,115),new n(10,116)),new r(28,new n(19,47),new n(10,48)),new r(30,new n(15,24),new n(25,25)),new r(30,new n(23,15),new n(25,16))),new i(31,new Array(6,30,56,82,108,134),new r(30,new n(13,115),new n(3,116)),new r(28,new n(2,46),new n(29,47)),new r(30,new n(42,24),new n(1,25)),new r(30,new n(23,15),new n(28,16))),new i(32,new Array(6,34,60,86,112,138),new r(30,new n(17,115)),new r(28,new n(10,46),new n(23,47)),new r(30,new n(10,24),new n(35,25)),new r(30,new n(19,15),new n(35,16))),new i(33,new Array(6,30,58,86,114,142),new r(30,new n(17,115),new n(1,116)),new r(28,new n(14,46),new n(21,47)),new r(30,new n(29,24),new n(19,25)),new r(30,new n(11,15),new n(46,16))),new i(34,new Array(6,34,62,90,118,146),new r(30,new n(13,115),new n(6,116)),new r(28,new n(14,46),new n(23,47)),new r(30,new n(44,24),new n(7,25)),new r(30,new n(59,16),new n(1,17))),new i(35,new Array(6,30,54,78,102,126,150),new r(30,new n(12,121),new n(7,122)),new r(28,new n(12,47),new n(26,48)),new r(30,new n(39,24),new n(14,25)),new r(30,new n(22,15),new n(41,16))),new i(36,new Array(6,24,50,76,102,128,154),new r(30,new n(6,121),new n(14,122)),new r(28,new n(6,47),new n(34,48)),new r(30,new n(46,24),new n(10,25)),new r(30,new n(2,15),new n(64,16))),new i(37,new Array(6,28,54,80,106,132,158),new r(30,new n(17,122),new n(4,123)),new r(28,new n(29,46),new n(14,47)),new r(30,new n(49,24),new n(10,25)),new r(30,new n(24,15),new n(46,16))),new i(38,new Array(6,32,58,84,110,136,162),new r(30,new n(4,122),new n(18,123)),new r(28,new n(13,46),new n(32,47)),new r(30,new n(48,24),new n(14,25)),new r(30,new n(42,15),new n(32,16))),new i(39,new Array(6,26,54,82,110,138,166),new r(30,new n(20,117),new n(4,118)),new r(28,new n(40,47),new n(7,48)),new r(30,new n(43,24),new n(22,25)),new r(30,new n(10,15),new n(67,16))),new i(40,new Array(6,30,58,86,114,142,170),new r(30,new n(19,118),new n(6,119)),new r(28,new n(18,47),new n(31,48)),new r(30,new n(34,24),new n(34,25)),new r(30,new n(20,15),new n(61,16))))
        }
        function a(e, t, n, r, i, o, s, c, u) {
            this.a11 = e,
            this.a12 = r,
            this.a13 = s,
            this.a21 = t,
            this.a22 = i,
            this.a23 = c,
            this.a31 = n,
            this.a32 = o,
            this.a33 = u,
            this.transformPoints1 = function(e) {
                for (var t = e.length, n = this.a11, r = this.a12, i = this.a13, o = this.a21, a = this.a22, s = this.a23, c = this.a31, u = this.a32, f = this.a33, l = 0; l < t; l += 2) {
                    var h = e[l]
                      , d = e[l + 1]
                      , p = i * h + s * d + f;
                    e[l] = (n * h + o * d + c) / p,
                    e[l + 1] = (r * h + a * d + u) / p
                }
            }
            ,
            this.transformPoints2 = function(e, t) {
                for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r]
                      , o = t[r]
                      , a = this.a13 * i + this.a23 * o + this.a33;
                    e[r] = (this.a11 * i + this.a21 * o + this.a31) / a,
                    t[r] = (this.a12 * i + this.a22 * o + this.a32) / a
                }
            }
            ,
            this.buildAdjoint = function() {
                return new a(this.a22 * this.a33 - this.a23 * this.a32,this.a23 * this.a31 - this.a21 * this.a33,this.a21 * this.a32 - this.a22 * this.a31,this.a13 * this.a32 - this.a12 * this.a33,this.a11 * this.a33 - this.a13 * this.a31,this.a12 * this.a31 - this.a11 * this.a32,this.a12 * this.a23 - this.a13 * this.a22,this.a13 * this.a21 - this.a11 * this.a23,this.a11 * this.a22 - this.a12 * this.a21)
            }
            ,
            this.times = function(e) {
                return new a(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13,this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23,this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33,this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13,this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23,this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33,this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13,this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23,this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33)
            }
        }
        function s(e, t) {
            this.bits = e,
            this.points = t
        }
        function c(e) {
            this.image = e,
            this.resultPointCallback = null ,
            this.sizeOfBlackWhiteBlackRun = function(e, t, n, r) {
                var i = Math.abs(r - t) > Math.abs(n - e);
                if (i) {
                    var o = e;
                    e = t,
                    t = o,
                    o = n,
                    n = r,
                    r = o
                }
                for (var a = Math.abs(n - e), s = Math.abs(r - t), c = -a >> 1, u = t < r ? 1 : -1, f = e < n ? 1 : -1, l = 0, h = e, d = t; h != n; h += f) {
                    var p = i ? d : h
                      , w = i ? h : d;
                    if (1 == l ? this.image[p + w * qrcode.width] && l++ : this.image[p + w * qrcode.width] || l++,
                    3 == l) {
                        var m = h - e
                          , g = d - t;
                        return Math.sqrt(m * m + g * g)
                    }
                    if (c += s,
                    c > 0) {
                        if (d == r)
                            break;
                        d += u,
                        c -= a
                    }
                }
                var v = n - e
                  , b = r - t;
                return Math.sqrt(v * v + b * b)
            }
            ,
            this.sizeOfBlackWhiteBlackRunBothWays = function(e, t, n, r) {
                var i = this.sizeOfBlackWhiteBlackRun(e, t, n, r)
                  , o = 1
                  , a = e - (n - e);
                a < 0 ? (o = e / (e - a),
                a = 0) : a >= qrcode.width && (o = (qrcode.width - 1 - e) / (a - e),
                a = qrcode.width - 1);
                var s = Math.floor(t - (r - t) * o);
                return o = 1,
                s < 0 ? (o = t / (t - s),
                s = 0) : s >= qrcode.height && (o = (qrcode.height - 1 - t) / (s - t),
                s = qrcode.height - 1),
                a = Math.floor(e + (a - e) * o),
                i += this.sizeOfBlackWhiteBlackRun(e, t, a, s),
                i - 1
            }
            ,
            this.calculateModuleSizeOneWay = function(e, t) {
                var n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.X), Math.floor(e.Y), Math.floor(t.X), Math.floor(t.Y))
                  , r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.X), Math.floor(t.Y), Math.floor(e.X), Math.floor(e.Y));
                return isNaN(n) ? r / 7 : isNaN(r) ? n / 7 : (n + r) / 14
            }
            ,
            this.calculateModuleSize = function(e, t, n) {
                return (this.calculateModuleSizeOneWay(e, t) + this.calculateModuleSizeOneWay(e, n)) / 2
            }
            ,
            this.distance = function(e, t) {
                return xDiff = e.X - t.X,
                yDiff = e.Y - t.Y,
                Math.sqrt(xDiff * xDiff + yDiff * yDiff)
            }
            ,
            this.computeDimension = function(e, t, n, r) {
                var i = Math.round(this.distance(e, t) / r)
                  , o = Math.round(this.distance(e, n) / r)
                  , a = (i + o >> 1) + 7;
                switch (3 & a) {
                case 0:
                    a++;
                    break;
                case 2:
                    a--;
                    break;
                case 3:
                    throw "Error"
                }
                return a
            }
            ,
            this.findAlignmentInRegion = function(e, t, n, r) {
                var i = Math.floor(r * e)
                  , o = Math.max(0, t - i)
                  , a = Math.min(qrcode.width - 1, t + i);
                if (a - o < 3 * e)
                    throw "Error";
                var s = Math.max(0, n - i)
                  , c = Math.min(qrcode.height - 1, n + i)
                  , u = new T(this.image,o,s,a - o,c - s,e,this.resultPointCallback);
                return u.find()
            }
            ,
            this.createTransform = function(e, t, n, r, i) {
                var o, s, c, u, f = i - 3.5;
                null != r ? (o = r.X,
                s = r.Y,
                c = u = f - 3) : (o = t.X - e.X + n.X,
                s = t.Y - e.Y + n.Y,
                c = u = f);
                var l = a.quadrilateralToQuadrilateral(3.5, 3.5, f, 3.5, c, u, 3.5, f, e.X, e.Y, t.X, t.Y, o, s, n.X, n.Y);
                return l
            }
            ,
            this.sampleGrid = function(e, t, n) {
                var r = GridSampler;
                return r.sampleGrid3(e, n, t)
            }
            ,
            this.processFinderPatternInfo = function(e) {
                var t = e.TopLeft
                  , n = e.TopRight
                  , r = e.BottomLeft
                  , o = this.calculateModuleSize(t, n, r);
                if (o < 1)
                    throw "Error";
                var a = this.computeDimension(t, n, r, o)
                  , c = i.getProvisionalVersionForDimension(a)
                  , u = c.DimensionForVersion - 7
                  , f = null ;
                if (c.AlignmentPatternCenters.length > 0)
                    for (var l = n.X - t.X + r.X, h = n.Y - t.Y + r.Y, d = 1 - 3 / u, p = Math.floor(t.X + d * (l - t.X)), w = Math.floor(t.Y + d * (h - t.Y)), m = 4; m <= 16; m <<= 1) {
                        f = this.findAlignmentInRegion(o, p, w, m);
                        break
                    }
                var g, v = this.createTransform(t, n, r, f, a), b = this.sampleGrid(this.image, v, a);
                return g = null == f ? new Array(r,t,n) : new Array(r,t,n,f),
                new s(b,g)
            }
            ,
            this.detect = function() {
                var e = (new M).findFinderPattern(this.image);
                return this.processFinderPatternInfo(e)
            }
        }
        function u(e) {
            this.errorCorrectionLevel = f.forBits(e >> 3 & 3),
            this.dataMask = 7 & e,
            this.__defineGetter__("ErrorCorrectionLevel", function() {
                return this.errorCorrectionLevel
            }),
            this.__defineGetter__("DataMask", function() {
                return this.dataMask
            }),
            this.GetHashCode = function() {
                return this.errorCorrectionLevel.ordinal() << 3 | dataMask
            }
            ,
            this.Equals = function(e) {
                var t = e;
                return this.errorCorrectionLevel == t.errorCorrectionLevel && this.dataMask == t.dataMask
            }
        }
        function f(e, t, n) {
            this.ordinal_Renamed_Field = e,
            this.bits = t,
            this.name = n,
            this.__defineGetter__("Bits", function() {
                return this.bits
            }),
            this.__defineGetter__("Name", function() {
                return this.name
            }),
            this.ordinal = function() {
                return this.ordinal_Renamed_Field
            }
        }
        function l(e, t) {
            if (t || (t = e),
            e < 1 || t < 1)
                throw "Both dimensions must be greater than 0";
            this.width = e,
            this.height = t;
            var n = e >> 5;
            0 != (31 & e) && n++,
            this.rowSize = n,
            this.bits = new Array(n * t);
            for (var r = 0; r < this.bits.length; r++)
                this.bits[r] = 0;
            this.__defineGetter__("Width", function() {
                return this.width
            }),
            this.__defineGetter__("Height", function() {
                return this.height
            }),
            this.__defineGetter__("Dimension", function() {
                if (this.width != this.height)
                    throw "Can't call getDimension() on a non-square matrix";
                return this.width
            }),
            this.get_Renamed = function(e, t) {
                var n = t * this.rowSize + (e >> 5);
                return 0 != (1 & P(this.bits[n], 31 & e))
            }
            ,
            this.set_Renamed = function(e, t) {
                var n = t * this.rowSize + (e >> 5);
                this.bits[n] |= 1 << (31 & e)
            }
            ,
            this.flip = function(e, t) {
                var n = t * this.rowSize + (e >> 5);
                this.bits[n] ^= 1 << (31 & e)
            }
            ,
            this.clear = function() {
                for (var e = this.bits.length, t = 0; t < e; t++)
                    this.bits[t] = 0
            }
            ,
            this.setRegion = function(e, t, n, r) {
                if (t < 0 || e < 0)
                    throw "Left and top must be nonnegative";
                if (r < 1 || n < 1)
                    throw "Height and width must be at least 1";
                var i = e + n
                  , o = t + r;
                if (o > this.height || i > this.width)
                    throw "The region must fit inside the matrix";
                for (var a = t; a < o; a++)
                    for (var s = a * this.rowSize, c = e; c < i; c++)
                        this.bits[s + (c >> 5)] |= 1 << (31 & c)
            }
        }
        function h(e, t) {
            this.numDataCodewords = e,
            this.codewords = t,
            this.__defineGetter__("NumDataCodewords", function() {
                return this.numDataCodewords
            }),
            this.__defineGetter__("Codewords", function() {
                return this.codewords
            })
        }
        function d(e) {
            var t = e.Dimension;
            if (t < 21 || 1 != (3 & t))
                throw "Error BitMatrixParser";
            this.bitMatrix = e,
            this.parsedVersion = null ,
            this.parsedFormatInfo = null ,
            this.copyBit = function(e, t, n) {
                return this.bitMatrix.get_Renamed(e, t) ? n << 1 | 1 : n << 1
            }
            ,
            this.readFormatInformation = function() {
                if (null != this.parsedFormatInfo)
                    return this.parsedFormatInfo;
                for (var e = 0, t = 0; t < 6; t++)
                    e = this.copyBit(t, 8, e);
                e = this.copyBit(7, 8, e),
                e = this.copyBit(8, 8, e),
                e = this.copyBit(8, 7, e);
                for (var n = 5; n >= 0; n--)
                    e = this.copyBit(8, n, e);
                if (this.parsedFormatInfo = u.decodeFormatInformation(e),
                null != this.parsedFormatInfo)
                    return this.parsedFormatInfo;
                var r = this.bitMatrix.Dimension;
                e = 0;
                for (var i = r - 8, t = r - 1; t >= i; t--)
                    e = this.copyBit(t, 8, e);
                for (var n = r - 7; n < r; n++)
                    e = this.copyBit(8, n, e);
                if (this.parsedFormatInfo = u.decodeFormatInformation(e),
                null != this.parsedFormatInfo)
                    return this.parsedFormatInfo;
                throw "Error readFormatInformation"
            }
            ,
            this.readVersion = function() {
                if (null != this.parsedVersion)
                    return this.parsedVersion;
                var e = this.bitMatrix.Dimension
                  , t = e - 17 >> 2;
                if (t <= 6)
                    return i.getVersionForNumber(t);
                for (var n = 0, r = e - 11, o = 5; o >= 0; o--)
                    for (var a = e - 9; a >= r; a--)
                        n = this.copyBit(a, o, n);
                if (this.parsedVersion = i.decodeVersionInformation(n),
                null != this.parsedVersion && this.parsedVersion.DimensionForVersion == e)
                    return this.parsedVersion;
                n = 0;
                for (var a = 5; a >= 0; a--)
                    for (var o = e - 9; o >= r; o--)
                        n = this.copyBit(a, o, n);
                if (this.parsedVersion = i.decodeVersionInformation(n),
                null != this.parsedVersion && this.parsedVersion.DimensionForVersion == e)
                    return this.parsedVersion;
                throw "Error readVersion"
            }
            ,
            this.readCodewords = function() {
                var e = this.readFormatInformation()
                  , t = this.readVersion()
                  , n = DataMask.forReference(e.DataMask)
                  , r = this.bitMatrix.Dimension;
                n.unmaskBitMatrix(this.bitMatrix, r);
                for (var i = t.buildFunctionPattern(), o = !0, a = new Array(t.TotalCodewords), s = 0, c = 0, u = 0, f = r - 1; f > 0; f -= 2) {
                    6 == f && f--;
                    for (var l = 0; l < r; l++)
                        for (var h = o ? r - 1 - l : l, d = 0; d < 2; d++)
                            i.get_Renamed(f - d, h) || (u++,
                            c <<= 1,
                            this.bitMatrix.get_Renamed(f - d, h) && (c |= 1),
                            8 == u && (a[s++] = c,
                            u = 0,
                            c = 0));
                    o ^= !0
                }
                if (s != t.TotalCodewords)
                    throw "Error readCodewords";
                return a
            }
        }
        function w() {
            this.unmaskBitMatrix = function(e, t) {
                for (var n = 0; n < t; n++)
                    for (var r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n)
            }
            ,
            this.isMasked = function(e, t) {
                return 0 == (e + t & 1)
            }
        }
        function m() {
            this.unmaskBitMatrix = function(e, t) {
                for (var n = 0; n < t; n++)
                    for (var r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n)
            }
            ,
            this.isMasked = function(e, t) {
                return 0 == (1 & e)
            }
        }
        function g() {
            this.unmaskBitMatrix = function(e, t) {
                for (var n = 0; n < t; n++)
                    for (var r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n)
            }
            ,
            this.isMasked = function(e, t) {
                return t % 3 == 0
            }
        }
        function v() {
            this.unmaskBitMatrix = function(e, t) {
                for (var n = 0; n < t; n++)
                    for (var r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n)
            }
            ,
            this.isMasked = function(e, t) {
                return (e + t) % 3 == 0
            }
        }
        function b() {
            this.unmaskBitMatrix = function(e, t) {
                for (var n = 0; n < t; n++)
                    for (var r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n)
            }
            ,
            this.isMasked = function(e, t) {
                return 0 == (P(e, 1) + t / 3 & 1)
            }
        }
        function y() {
            this.unmaskBitMatrix = function(e, t) {
                for (var n = 0; n < t; n++)
                    for (var r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n)
            }
            ,
            this.isMasked = function(e, t) {
                var n = e * t;
                return (1 & n) + n % 3 == 0
            }
        }
        function _() {
            this.unmaskBitMatrix = function(e, t) {
                for (var n = 0; n < t; n++)
                    for (var r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n)
            }
            ,
            this.isMasked = function(e, t) {
                var n = e * t;
                return 0 == ((1 & n) + n % 3 & 1)
            }
        }
        function k() {
            this.unmaskBitMatrix = function(e, t) {
                for (var n = 0; n < t; n++)
                    for (var r = 0; r < t; r++)
                        this.isMasked(n, r) && e.flip(r, n)
            }
            ,
            this.isMasked = function(e, t) {
                return 0 == ((e + t & 1) + e * t % 3 & 1)
            }
        }
        function x(e) {
            this.field = e,
            this.decode = function(e, t) {
                for (var n = new A(this.field,e), r = new Array(t), i = 0; i < r.length; i++)
                    r[i] = 0;
                for (var o = !1, a = !0, i = 0; i < t; i++) {
                    var s = n.evaluateAt(this.field.exp(o ? i + 1 : i));
                    r[r.length - 1 - i] = s,
                    0 != s && (a = !1)
                }
                if (!a)
                    for (var c = new A(this.field,r), u = this.runEuclideanAlgorithm(this.field.buildMonomial(t, 1), c, t), f = u[0], l = u[1], h = this.findErrorLocations(f), d = this.findErrorMagnitudes(l, h, o), i = 0; i < h.length; i++) {
                        var p = e.length - 1 - this.field.log(h[i]);
                        if (p < 0)
                            throw "ReedSolomonException Bad error location";
                        e[p] = S.addOrSubtract(e[p], d[i])
                    }
            }
            ,
            this.runEuclideanAlgorithm = function(e, t, n) {
                if (e.Degree < t.Degree) {
                    var r = e;
                    e = t,
                    t = r
                }
                for (var i = e, o = t, a = this.field.One, s = this.field.Zero, c = this.field.Zero, u = this.field.One; o.Degree >= Math.floor(n / 2); ) {
                    var f = i
                      , l = a
                      , h = c;
                    if (i = o,
                    a = s,
                    c = u,
                    i.Zero)
                        throw "r_{i-1} was zero";
                    o = f;
                    for (var d = this.field.Zero, p = i.getCoefficient(i.Degree), w = this.field.inverse(p); o.Degree >= i.Degree && !o.Zero; ) {
                        var m = o.Degree - i.Degree
                          , g = this.field.multiply(o.getCoefficient(o.Degree), w);
                        d = d.addOrSubtract(this.field.buildMonomial(m, g)),
                        o = o.addOrSubtract(i.multiplyByMonomial(m, g))
                    }
                    s = d.multiply1(a).addOrSubtract(l),
                    u = d.multiply1(c).addOrSubtract(h)
                }
                var v = u.getCoefficient(0);
                if (0 == v)
                    throw "ReedSolomonException sigmaTilde(0) was zero";
                var b = this.field.inverse(v)
                  , y = u.multiply2(b)
                  , _ = o.multiply2(b);
                return new Array(y,_)
            }
            ,
            this.findErrorLocations = function(e) {
                var t = e.Degree;
                if (1 == t)
                    return new Array(e.getCoefficient(1));
                for (var n = new Array(t), r = 0, i = 1; i < 256 && r < t; i++)
                    0 == e.evaluateAt(i) && (n[r] = this.field.inverse(i),
                    r++);
                if (r != t)
                    throw "Error locator degree does not match number of roots";
                return n
            }
            ,
            this.findErrorMagnitudes = function(e, t, n) {
                for (var r = t.length, i = new Array(r), o = 0; o < r; o++) {
                    for (var a = this.field.inverse(t[o]), s = 1, c = 0; c < r; c++)
                        o != c && (s = this.field.multiply(s, S.addOrSubtract(1, this.field.multiply(t[c], a))));
                    i[o] = this.field.multiply(e.evaluateAt(a), this.field.inverse(s)),
                    n && (i[o] = this.field.multiply(i[o], a))
                }
                return i
            }
        }
        function A(e, t) {
            if (null == t || 0 == t.length)
                throw "System.ArgumentException";
            this.field = e;
            var n = t.length;
            if (n > 1 && 0 == t[0]) {
                for (var r = 1; r < n && 0 == t[r]; )
                    r++;
                if (r == n)
                    this.coefficients = e.Zero.coefficients;
                else {
                    this.coefficients = new Array(n - r);
                    for (var i = 0; i < this.coefficients.length; i++)
                        this.coefficients[i] = 0;
                    for (var o = 0; o < this.coefficients.length; o++)
                        this.coefficients[o] = t[r + o]
                }
            } else
                this.coefficients = t;
            this.__defineGetter__("Zero", function() {
                return 0 == this.coefficients[0]
            }),
            this.__defineGetter__("Degree", function() {
                return this.coefficients.length - 1
            }),
            this.__defineGetter__("Coefficients", function() {
                return this.coefficients;
            }),
            this.getCoefficient = function(e) {
                return this.coefficients[this.coefficients.length - 1 - e]
            }
            ,
            this.evaluateAt = function(e) {
                if (0 == e)
                    return this.getCoefficient(0);
                var t = this.coefficients.length;
                if (1 == e) {
                    for (var n = 0, r = 0; r < t; r++)
                        n = S.addOrSubtract(n, this.coefficients[r]);
                    return n
                }
                for (var i = this.coefficients[0], r = 1; r < t; r++)
                    i = S.addOrSubtract(this.field.multiply(e, i), this.coefficients[r]);
                return i
            }
            ,
            this.addOrSubtract = function(t) {
                if (this.field != t.field)
                    throw "GF256Polys do not have same GF256 field";
                if (this.Zero)
                    return t;
                if (t.Zero)
                    return this;
                var n = this.coefficients
                  , r = t.coefficients;
                if (n.length > r.length) {
                    var i = n;
                    n = r,
                    r = i
                }
                for (var o = new Array(r.length), a = r.length - n.length, s = 0; s < a; s++)
                    o[s] = r[s];
                for (var c = a; c < r.length; c++)
                    o[c] = S.addOrSubtract(n[c - a], r[c]);
                return new A(e,o)
            }
            ,
            this.multiply1 = function(e) {
                if (this.field != e.field)
                    throw "GF256Polys do not have same GF256 field";
                if (this.Zero || e.Zero)
                    return this.field.Zero;
                for (var t = this.coefficients, n = t.length, r = e.coefficients, i = r.length, o = new Array(n + i - 1), a = 0; a < n; a++)
                    for (var s = t[a], c = 0; c < i; c++)
                        o[a + c] = S.addOrSubtract(o[a + c], this.field.multiply(s, r[c]));
                return new A(this.field,o)
            }
            ,
            this.multiply2 = function(e) {
                if (0 == e)
                    return this.field.Zero;
                if (1 == e)
                    return this;
                for (var t = this.coefficients.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = this.field.multiply(this.coefficients[r], e);
                return new A(this.field,n)
            }
            ,
            this.multiplyByMonomial = function(e, t) {
                if (e < 0)
                    throw "System.ArgumentException";
                if (0 == t)
                    return this.field.Zero;
                for (var n = this.coefficients.length, r = new Array(n + e), i = 0; i < r.length; i++)
                    r[i] = 0;
                for (var i = 0; i < n; i++)
                    r[i] = this.field.multiply(this.coefficients[i], t);
                return new A(this.field,r)
            }
            ,
            this.divide = function(e) {
                if (this.field != e.field)
                    throw "GF256Polys do not have same GF256 field";
                if (e.Zero)
                    throw "Divide by 0";
                for (var t = this.field.Zero, n = this, r = e.getCoefficient(e.Degree), i = this.field.inverse(r); n.Degree >= e.Degree && !n.Zero; ) {
                    var o = n.Degree - e.Degree
                      , a = this.field.multiply(n.getCoefficient(n.Degree), i)
                      , s = e.multiplyByMonomial(o, a)
                      , c = this.field.buildMonomial(o, a);
                    t = t.addOrSubtract(c),
                    n = n.addOrSubtract(s)
                }
                return new Array(t,n)
            }
        }
        function S(e) {
            this.expTable = new Array(256),
            this.logTable = new Array(256);
            for (var t = 1, n = 0; n < 256; n++)
                this.expTable[n] = t,
                t <<= 1,
                t >= 256 && (t ^= e);
            for (var n = 0; n < 255; n++)
                this.logTable[this.expTable[n]] = n;
            var r = new Array(1);
            r[0] = 0,
            this.zero = new A(this,new Array(r));
            var i = new Array(1);
            i[0] = 1,
            this.one = new A(this,new Array(i)),
            this.__defineGetter__("Zero", function() {
                return this.zero
            }),
            this.__defineGetter__("One", function() {
                return this.one
            }),
            this.buildMonomial = function(e, t) {
                if (e < 0)
                    throw "System.ArgumentException";
                if (0 == t)
                    return zero;
                for (var n = new Array(e + 1), r = 0; r < n.length; r++)
                    n[r] = 0;
                return n[0] = t,
                new A(this,n)
            }
            ,
            this.exp = function(e) {
                return this.expTable[e]
            }
            ,
            this.log = function(e) {
                if (0 == e)
                    throw "System.ArgumentException";
                return this.logTable[e]
            }
            ,
            this.inverse = function(e) {
                if (0 == e)
                    throw "System.ArithmeticException";
                return this.expTable[255 - this.logTable[e]]
            }
            ,
            this.multiply = function(e, t) {
                return 0 == e || 0 == t ? 0 : 1 == e ? t : 1 == t ? e : this.expTable[(this.logTable[e] + this.logTable[t]) % 255]
            }
        }
        function P(e, t) {
            return e >= 0 ? e >> t : (e >> t) + (2 << ~t)
        }
        function C(e, t, n) {
            this.x = e,
            this.y = t,
            this.count = 1,
            this.estimatedModuleSize = n,
            this.__defineGetter__("EstimatedModuleSize", function() {
                return this.estimatedModuleSize
            }),
            this.__defineGetter__("Count", function() {
                return this.count
            }),
            this.__defineGetter__("X", function() {
                return this.x
            }),
            this.__defineGetter__("Y", function() {
                return this.y
            }),
            this.incrementCount = function() {
                this.count++
            }
            ,
            this.aboutEquals = function(e, t, n) {
                if (Math.abs(t - this.y) <= e && Math.abs(n - this.x) <= e) {
                    var r = Math.abs(e - this.estimatedModuleSize);
                    return r <= 1 || r / this.estimatedModuleSize <= 1
                }
                return !1
            }
        }
        function E(e) {
            this.bottomLeft = e[0],
            this.topLeft = e[1],
            this.topRight = e[2],
            this.__defineGetter__("BottomLeft", function() {
                return this.bottomLeft
            }),
            this.__defineGetter__("TopLeft", function() {
                return this.topLeft
            }),
            this.__defineGetter__("TopRight", function() {
                return this.topRight
            })
        }
        function M() {
            this.image = null ,
            this.possibleCenters = [],
            this.hasSkipped = !1,
            this.crossCheckStateCount = new Array(0,0,0,0,0),
            this.resultPointCallback = null ,
            this.__defineGetter__("CrossCheckStateCount", function() {
                return this.crossCheckStateCount[0] = 0,
                this.crossCheckStateCount[1] = 0,
                this.crossCheckStateCount[2] = 0,
                this.crossCheckStateCount[3] = 0,
                this.crossCheckStateCount[4] = 0,
                this.crossCheckStateCount
            }),
            this.foundPatternCross = function(e) {
                for (var t = 0, n = 0; n < 5; n++) {
                    var r = e[n];
                    if (0 == r)
                        return !1;
                    t += r
                }
                if (t < 7)
                    return !1;
                var i = Math.floor((t << G) / 7)
                  , o = Math.floor(i / 2);
                return Math.abs(i - (e[0] << G)) < o && Math.abs(i - (e[1] << G)) < o && Math.abs(3 * i - (e[2] << G)) < 3 * o && Math.abs(i - (e[3] << G)) < o && Math.abs(i - (e[4] << G)) < o
            }
            ,
            this.centerFromEnd = function(e, t) {
                return t - e[4] - e[3] - e[2] / 2
            }
            ,
            this.crossCheckVertical = function(e, t, n, r) {
                for (var i = this.image, o = qrcode.height, a = this.CrossCheckStateCount, s = e; s >= 0 && i[t + s * qrcode.width]; )
                    a[2]++,
                    s--;
                if (s < 0)
                    return NaN;
                for (; s >= 0 && !i[t + s * qrcode.width] && a[1] <= n; )
                    a[1]++,
                    s--;
                if (s < 0 || a[1] > n)
                    return NaN;
                for (; s >= 0 && i[t + s * qrcode.width] && a[0] <= n; )
                    a[0]++,
                    s--;
                if (a[0] > n)
                    return NaN;
                for (s = e + 1; s < o && i[t + s * qrcode.width]; )
                    a[2]++,
                    s++;
                if (s == o)
                    return NaN;
                for (; s < o && !i[t + s * qrcode.width] && a[3] < n; )
                    a[3]++,
                    s++;
                if (s == o || a[3] >= n)
                    return NaN;
                for (; s < o && i[t + s * qrcode.width] && a[4] < n; )
                    a[4]++,
                    s++;
                if (a[4] >= n)
                    return NaN;
                var c = a[0] + a[1] + a[2] + a[3] + a[4];
                return 5 * Math.abs(c - r) >= 2 * r ? NaN : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : NaN
            }
            ,
            this.crossCheckHorizontal = function(e, t, n, r) {
                for (var i = this.image, o = qrcode.width, a = this.CrossCheckStateCount, s = e; s >= 0 && i[s + t * qrcode.width]; )
                    a[2]++,
                    s--;
                if (s < 0)
                    return NaN;
                for (; s >= 0 && !i[s + t * qrcode.width] && a[1] <= n; )
                    a[1]++,
                    s--;
                if (s < 0 || a[1] > n)
                    return NaN;
                for (; s >= 0 && i[s + t * qrcode.width] && a[0] <= n; )
                    a[0]++,
                    s--;
                if (a[0] > n)
                    return NaN;
                for (s = e + 1; s < o && i[s + t * qrcode.width]; )
                    a[2]++,
                    s++;
                if (s == o)
                    return NaN;
                for (; s < o && !i[s + t * qrcode.width] && a[3] < n; )
                    a[3]++,
                    s++;
                if (s == o || a[3] >= n)
                    return NaN;
                for (; s < o && i[s + t * qrcode.width] && a[4] < n; )
                    a[4]++,
                    s++;
                if (a[4] >= n)
                    return NaN;
                var c = a[0] + a[1] + a[2] + a[3] + a[4];
                return 5 * Math.abs(c - r) >= r ? NaN : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : NaN
            }
            ,
            this.handlePossibleCenter = function(e, t, n) {
                var r = e[0] + e[1] + e[2] + e[3] + e[4]
                  , i = this.centerFromEnd(e, n)
                  , o = this.crossCheckVertical(t, Math.floor(i), e[2], r);
                if (!isNaN(o) && (i = this.crossCheckHorizontal(Math.floor(i), Math.floor(o), e[2], r),
                !isNaN(i))) {
                    for (var a = r / 7, s = !1, c = this.possibleCenters.length, u = 0; u < c; u++) {
                        var f = this.possibleCenters[u];
                        if (f.aboutEquals(a, o, i)) {
                            f.incrementCount(),
                            s = !0;
                            break
                        }
                    }
                    if (!s) {
                        var l = new C(i,o,a);
                        this.possibleCenters.push(l),
                        null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(l)
                    }
                    return !0
                }
                return !1
            }
            ,
            this.selectBestPatterns = function() {
                var e = this.possibleCenters.length;
                if (e < 3)
                    throw "Couldn't find enough finder patterns";
                if (e > 3) {
                    for (var t = 0, n = 0, r = 0; r < e; r++) {
                        var i = this.possibleCenters[r].EstimatedModuleSize;
                        t += i,
                        n += i * i
                    }
                    var o = t / e;
                    this.possibleCenters.sort(function(e, t) {
                        var n = Math.abs(t.EstimatedModuleSize - o)
                          , r = Math.abs(e.EstimatedModuleSize - o);
                        return n < r ? -1 : n == r ? 0 : 1
                    });
                    for (var a = Math.sqrt(n / e - o * o), s = Math.max(.2 * o, a), r = this.possibleCenters.length - 1; r >= 0; r--) {
                        var c = this.possibleCenters[r];
                        Math.abs(c.EstimatedModuleSize - o) > s && this.possibleCenters.remove(r)
                    }
                }
                return this.possibleCenters.length > 3 && this.possibleCenters.sort(function(e, t) {
                    return e.count > t.count ? -1 : e.count < t.count ? 1 : 0
                }),
                new Array(this.possibleCenters[0],this.possibleCenters[1],this.possibleCenters[2])
            }
            ,
            this.findRowSkip = function() {
                var e = this.possibleCenters.length;
                if (e <= 1)
                    return 0;
                for (var t = null , n = 0; n < e; n++) {
                    var r = this.possibleCenters[n];
                    if (r.Count >= V) {
                        if (null != t)
                            return this.hasSkipped = !0,
                            Math.floor((Math.abs(t.X - r.X) - Math.abs(t.Y - r.Y)) / 2);
                        t = r
                    }
                }
                return 0
            }
            ,
            this.haveMultiplyConfirmedCenters = function() {
                for (var e = 0, t = 0, n = this.possibleCenters.length, r = 0; r < n; r++) {
                    var i = this.possibleCenters[r];
                    i.Count >= V && (e++,
                    t += i.EstimatedModuleSize)
                }
                if (e < 3)
                    return !1;
                for (var o = t / n, a = 0, r = 0; r < n; r++)
                    i = this.possibleCenters[r],
                    a += Math.abs(i.EstimatedModuleSize - o);
                return a <= .05 * t
            }
            ,
            this.findFinderPattern = function(e) {
                var t = !1;
                this.image = e;
                var n = qrcode.height
                  , r = qrcode.width
                  , i = Math.floor(3 * n / (4 * z));
                (i < U || t) && (i = U);
                for (var o = !1, a = new Array(5), s = i - 1; s < n && !o; s += i) {
                    a[0] = 0,
                    a[1] = 0,
                    a[2] = 0,
                    a[3] = 0,
                    a[4] = 0;
                    for (var c = 0, u = 0; u < r; u++)
                        if (e[u + s * qrcode.width])
                            1 == (1 & c) && c++,
                            a[c]++;
                        else if (0 == (1 & c))
                            if (4 == c)
                                if (this.foundPatternCross(a)) {
                                    var f = this.handlePossibleCenter(a, s, u);
                                    if (f)
                                        if (i = 2,
                                        this.hasSkipped)
                                            o = this.haveMultiplyConfirmedCenters();
                                        else {
                                            var l = this.findRowSkip();
                                            l > a[2] && (s += l - a[2] - i,
                                            u = r - 1)
                                        }
                                    else {
                                        do
                                            u++;
                                        while (u < r && !e[u + s * qrcode.width]);u--
                                    }
                                    c = 0,
                                    a[0] = 0,
                                    a[1] = 0,
                                    a[2] = 0,
                                    a[3] = 0,
                                    a[4] = 0
                                } else
                                    a[0] = a[2],
                                    a[1] = a[3],
                                    a[2] = a[4],
                                    a[3] = 1,
                                    a[4] = 0,
                                    c = 3;
                            else
                                a[++c]++;
                        else
                            a[c]++;
                    if (this.foundPatternCross(a)) {
                        var f = this.handlePossibleCenter(a, s, r);
                        f && (i = a[0],
                        this.hasSkipped && (o = haveMultiplyConfirmedCenters()))
                    }
                }
                var h = this.selectBestPatterns();
                return qrcode.orderBestPatterns(h),
                new E(h)
            }
        }
        function O(e, t, n) {
            this.x = e,
            this.y = t,
            this.count = 1,
            this.estimatedModuleSize = n,
            this.__defineGetter__("EstimatedModuleSize", function() {
                return this.estimatedModuleSize
            }),
            this.__defineGetter__("Count", function() {
                return this.count
            }),
            this.__defineGetter__("X", function() {
                return Math.floor(this.x)
            }),
            this.__defineGetter__("Y", function() {
                return Math.floor(this.y)
            }),
            this.incrementCount = function() {
                this.count++
            }
            ,
            this.aboutEquals = function(e, t, n) {
                if (Math.abs(t - this.y) <= e && Math.abs(n - this.x) <= e) {
                    var r = Math.abs(e - this.estimatedModuleSize);
                    return r <= 1 || r / this.estimatedModuleSize <= 1
                }
                return !1
            }
        }
        function T(e, t, n, r, i, o, a) {
            this.image = e,
            this.possibleCenters = new Array,
            this.startX = t,
            this.startY = n,
            this.width = r,
            this.height = i,
            this.moduleSize = o,
            this.crossCheckStateCount = new Array(0,0,0),
            this.resultPointCallback = a,
            this.centerFromEnd = function(e, t) {
                return t - e[2] - e[1] / 2
            }
            ,
            this.foundPatternCross = function(e) {
                for (var t = this.moduleSize, n = t / 2, r = 0; r < 3; r++)
                    if (Math.abs(t - e[r]) >= n)
                        return !1;
                return !0
            }
            ,
            this.crossCheckVertical = function(e, t, n, r) {
                var i = this.image
                  , o = qrcode.height
                  , a = this.crossCheckStateCount;
                a[0] = 0,
                a[1] = 0,
                a[2] = 0;
                for (var s = e; s >= 0 && i[t + s * qrcode.width] && a[1] <= n; )
                    a[1]++,
                    s--;
                if (s < 0 || a[1] > n)
                    return NaN;
                for (; s >= 0 && !i[t + s * qrcode.width] && a[0] <= n; )
                    a[0]++,
                    s--;
                if (a[0] > n)
                    return NaN;
                for (s = e + 1; s < o && i[t + s * qrcode.width] && a[1] <= n; )
                    a[1]++,
                    s++;
                if (s == o || a[1] > n)
                    return NaN;
                for (; s < o && !i[t + s * qrcode.width] && a[2] <= n; )
                    a[2]++,
                    s++;
                if (a[2] > n)
                    return NaN;
                var c = a[0] + a[1] + a[2];
                return 5 * Math.abs(c - r) >= 2 * r ? NaN : this.foundPatternCross(a) ? this.centerFromEnd(a, s) : NaN
            }
            ,
            this.handlePossibleCenter = function(e, t, n) {
                var r = e[0] + e[1] + e[2]
                  , i = this.centerFromEnd(e, n)
                  , o = this.crossCheckVertical(t, Math.floor(i), 2 * e[1], r);
                if (!isNaN(o)) {
                    for (var a = (e[0] + e[1] + e[2]) / 3, s = this.possibleCenters.length, c = 0; c < s; c++) {
                        var u = this.possibleCenters[c];
                        if (u.aboutEquals(a, o, i))
                            return new O(i,o,a)
                    }
                    var f = new O(i,o,a);
                    this.possibleCenters.push(f),
                    null != this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(f)
                }
                return null
            }
            ,
            this.find = function() {
                for (var t = this.startX, i = this.height, o = t + r, a = n + (i >> 1), s = new Array(0,0,0), c = 0; c < i; c++) {
                    var u = a + (0 == (1 & c) ? c + 1 >> 1 : -(c + 1 >> 1));
                    s[0] = 0,
                    s[1] = 0,
                    s[2] = 0;
                    for (var f = t; f < o && !e[f + qrcode.width * u]; )
                        f++;
                    for (var l = 0; f < o; ) {
                        if (e[f + u * qrcode.width])
                            if (1 == l)
                                s[l]++;
                            else if (2 == l) {
                                if (this.foundPatternCross(s)) {
                                    var h = this.handlePossibleCenter(s, u, f);
                                    if (null != h)
                                        return h
                                }
                                s[0] = s[2],
                                s[1] = 1,
                                s[2] = 0,
                                l = 1
                            } else
                                s[++l]++;
                        else
                            1 == l && l++,
                            s[l]++;
                        f++
                    }
                    if (this.foundPatternCross(s)) {
                        var h = this.handlePossibleCenter(s, u, o);
                        if (null != h)
                            return h
                    }
                }
                if (0 != this.possibleCenters.length)
                    return this.possibleCenters[0];
                throw "Couldn't find enough alignment patterns"
            }
        }
        function D(e, t, n) {
            this.blockPointer = 0,
            this.bitPointer = 7,
            this.dataLength = 0,
            this.blocks = e,
            this.numErrorCorrectionCode = n,
            t <= 9 ? this.dataLengthMode = 0 : t >= 10 && t <= 26 ? this.dataLengthMode = 1 : t >= 27 && t <= 40 && (this.dataLengthMode = 2),
            this.getNextBits = function(e) {
                var t = 0;
                if (e < this.bitPointer + 1) {
                    for (var n = 0, r = 0; r < e; r++)
                        n += 1 << r;
                    return n <<= this.bitPointer - e + 1,
                    t = (this.blocks[this.blockPointer] & n) >> this.bitPointer - e + 1,
                    this.bitPointer -= e,
                    t
                }
                if (e < this.bitPointer + 1 + 8) {
                    for (var i = 0, r = 0; r < this.bitPointer + 1; r++)
                        i += 1 << r;
                    return t = (this.blocks[this.blockPointer] & i) << e - (this.bitPointer + 1),
                    this.blockPointer++,
                    t += this.blocks[this.blockPointer] >> 8 - (e - (this.bitPointer + 1)),
                    this.bitPointer = this.bitPointer - e % 8,
                    this.bitPointer < 0 && (this.bitPointer = 8 + this.bitPointer),
                    t
                }
                if (e < this.bitPointer + 1 + 16) {
                    for (var i = 0, o = 0, r = 0; r < this.bitPointer + 1; r++)
                        i += 1 << r;
                    var a = (this.blocks[this.blockPointer] & i) << e - (this.bitPointer + 1);
                    this.blockPointer++;
                    var s = this.blocks[this.blockPointer] << e - (this.bitPointer + 1 + 8);
                    this.blockPointer++;
                    for (var r = 0; r < e - (this.bitPointer + 1 + 8); r++)
                        o += 1 << r;
                    o <<= 8 - (e - (this.bitPointer + 1 + 8));
                    var c = (this.blocks[this.blockPointer] & o) >> 8 - (e - (this.bitPointer + 1 + 8));
                    return t = a + s + c,
                    this.bitPointer = this.bitPointer - (e - 8) % 8,
                    this.bitPointer < 0 && (this.bitPointer = 8 + this.bitPointer),
                    t
                }
                return 0
            }
            ,
            this.NextMode = function() {
                return this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2 ? 0 : this.getNextBits(4)
            }
            ,
            this.getDataLength = function(e) {
                for (var t = 0; ; ) {
                    if (e >> t == 1)
                        break;
                    t++
                }
                return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][t])
            }
            ,
            this.getRomanAndFigureString = function(e) {
                var t = e
                  , n = 0
                  , r = ""
                  , i = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":");
                do
                    if (t > 1) {
                        n = this.getNextBits(11);
                        var o = Math.floor(n / 45)
                          , a = n % 45;
                        r += i[o],
                        r += i[a],
                        t -= 2
                    } else
                        1 == t && (n = this.getNextBits(6),
                        r += i[n],
                        t -= 1);
                while (t > 0);return r
            }
            ,
            this.getFigureString = function(e) {
                var t = e
                  , n = 0
                  , r = "";
                do
                    t >= 3 ? (n = this.getNextBits(10),
                    n < 100 && (r += "0"),
                    n < 10 && (r += "0"),
                    t -= 3) : 2 == t ? (n = this.getNextBits(7),
                    n < 10 && (r += "0"),
                    t -= 2) : 1 == t && (n = this.getNextBits(4),
                    t -= 1),
                    r += n;
                while (t > 0);return r
            }
            ,
            this.get8bitByteArray = function(e) {
                var t = e
                  , n = 0
                  , r = new Array;
                do
                    n = this.getNextBits(8),
                    r.push(n),
                    t--;
                while (t > 0);return r
            }
            ,
            this.getKanjiString = function(e) {
                var t = e
                  , n = 0
                  , r = "";
                do {
                    n = getNextBits(13);
                    var i = n % 192
                      , o = n / 192
                      , a = (o << 8) + i
                      , s = 0;
                    s = a + 33088 <= 40956 ? a + 33088 : a + 49472,
                    r += String.fromCharCode(s),
                    t--
                } while (t > 0);return r
            }
            ,
            this.__defineGetter__("DataByte", function() {
                for (var e = new Array, t = 1, n = 2, r = 4, i = 8; ; ) {
                    var o = this.NextMode();
                    if (0 == o) {
                        if (e.length > 0)
                            break;
                        throw "Empty data block"
                    }
                    if (o != t && o != n && o != r && o != i)
                        throw "Invalid mode: " + o + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
                    if (dataLength = this.getDataLength(o),
                    dataLength < 1)
                        throw "Invalid data length: " + dataLength;
                    switch (o) {
                    case t:
                        for (var a = this.getFigureString(dataLength), s = new Array(a.length), c = 0; c < a.length; c++)
                            s[c] = a.charCodeAt(c);
                        e.push(s);
                        break;
                    case n:
                        for (var a = this.getRomanAndFigureString(dataLength), s = new Array(a.length), c = 0; c < a.length; c++)
                            s[c] = a.charCodeAt(c);
                        e.push(s);
                        break;
                    case r:
                        var u = this.get8bitByteArray(dataLength);
                        e.push(u);
                        break;
                    case i:
                        var a = this.getKanjiString(dataLength);
                        e.push(a)
                    }
                }
                return e
            })
        }
        GridSampler = {},
        GridSampler.checkAndNudgePoints = function(e, t) {
            for (var n = qrcode.width, r = qrcode.height, i = !0, o = 0; o < t.length && i; o += 2) {
                var a = Math.floor(t[o])
                  , s = Math.floor(t[o + 1]);
                if (a < -1 || a > n || s < -1 || s > r)
                    throw "Error.checkAndNudgePoints ";
                i = !1,
                a == -1 ? (t[o] = 0,
                i = !0) : a == n && (t[o] = n - 1,
                i = !0),
                s == -1 ? (t[o + 1] = 0,
                i = !0) : s == r && (t[o + 1] = r - 1,
                i = !0)
            }
            i = !0;
            for (var o = t.length - 2; o >= 0 && i; o -= 2) {
                var a = Math.floor(t[o])
                  , s = Math.floor(t[o + 1]);
                if (a < -1 || a > n || s < -1 || s > r)
                    throw "Error.checkAndNudgePoints ";
                i = !1,
                a == -1 ? (t[o] = 0,
                i = !0) : a == n && (t[o] = n - 1,
                i = !0),
                s == -1 ? (t[o + 1] = 0,
                i = !0) : s == r && (t[o + 1] = r - 1,
                i = !0)
            }
        }
        ,
        GridSampler.sampleGrid3 = function(e, t, n) {
            for (var r = new l(t), i = new Array(t << 1), o = 0; o < t; o++) {
                for (var a = i.length, s = o + .5, c = 0; c < a; c += 2)
                    i[c] = (c >> 1) + .5,
                    i[c + 1] = s;
                n.transformPoints1(i),
                GridSampler.checkAndNudgePoints(e, i);
                try {
                    for (var c = 0; c < a; c += 2) {
                        var u = 4 * Math.floor(i[c]) + Math.floor(i[c + 1]) * qrcode.width * 4
                          , f = e[Math.floor(i[c]) + qrcode.width * Math.floor(i[c + 1])];
                        qrcode.imagedata.data[u] = f ? 255 : 0,
                        qrcode.imagedata.data[u + 1] = f ? 255 : 0,
                        qrcode.imagedata.data[u + 2] = 0,
                        qrcode.imagedata.data[u + 3] = 255,
                        f && r.set_Renamed(c >> 1, o)
                    }
                } catch (h) {
                    throw "Error.checkAndNudgePoints"
                }
            }
            return r
        }
        ,
        GridSampler.sampleGridx = function(e, t, n, r, i, o, s, c, u, f, l, h, d, p, w, m, g, v) {
            var b = a.quadrilateralToQuadrilateral(n, r, i, o, s, c, u, f, l, h, d, p, w, m, g, v);
            return GridSampler.sampleGrid3(e, t, b)
        }
        ,
        i.VERSION_DECODE_INFO = new Array(31892,34236,39577,42195,48118,51042,55367,58893,63784,68472,70749,76311,79154,84390,87683,92361,96236,102084,102881,110507,110734,117786,119615,126325,127568,133589,136944,141498,145311,150283,152622,158308,161089,167017),
        i.VERSIONS = o(),
        i.getVersionForNumber = function(e) {
            if (e < 1 || e > 40)
                throw "ArgumentException";
            return i.VERSIONS[e - 1]
        }
        ,
        i.getProvisionalVersionForDimension = function(e) {
            if (e % 4 != 1)
                throw "Error getProvisionalVersionForDimension";
            try {
                return i.getVersionForNumber(e - 17 >> 2)
            } catch (t) {
                throw "Error getVersionForNumber"
            }
        }
        ,
        i.decodeVersionInformation = function(e) {
            for (var t = 4294967295, n = 0, r = 0; r < i.VERSION_DECODE_INFO.length; r++) {
                var o = i.VERSION_DECODE_INFO[r];
                if (o == e)
                    return this.getVersionForNumber(r + 7);
                var a = u.numBitsDiffering(e, o);
                a < t && (n = r + 7,
                t = a)
            }
            return t <= 3 ? this.getVersionForNumber(n) : null
        }
        ,
        a.quadrilateralToQuadrilateral = function(e, t, n, r, i, o, a, s, c, u, f, l, h, d, p, w) {
            var m = this.quadrilateralToSquare(e, t, n, r, i, o, a, s)
              , g = this.squareToQuadrilateral(c, u, f, l, h, d, p, w);
            return g.times(m)
        }
        ,
        a.squareToQuadrilateral = function(e, t, n, r, i, o, s, c) {
            return dy2 = c - o,
            dy3 = t - r + o - c,
            0 == dy2 && 0 == dy3 ? new a(n - e,i - n,e,r - t,o - r,t,0,0,1) : (dx1 = n - i,
            dx2 = s - i,
            dx3 = e - n + i - s,
            dy1 = r - o,
            denominator = dx1 * dy2 - dx2 * dy1,
            a13 = (dx3 * dy2 - dx2 * dy3) / denominator,
            a23 = (dx1 * dy3 - dx3 * dy1) / denominator,
            new a(n - e + a13 * n,s - e + a23 * s,e,r - t + a13 * r,c - t + a23 * c,t,a13,a23,1))
        }
        ,
        a.quadrilateralToSquare = function(e, t, n, r, i, o, a, s) {
            return this.squareToQuadrilateral(e, t, n, r, i, o, a, s).buildAdjoint()
        }
        ;
        var I = 21522
          , F = new Array(new Array(21522,0),new Array(20773,1),new Array(24188,2),new Array(23371,3),new Array(17913,4),new Array(16590,5),new Array(20375,6),new Array(19104,7),new Array(30660,8),new Array(29427,9),new Array(32170,10),new Array(30877,11),new Array(26159,12),new Array(25368,13),new Array(27713,14),new Array(26998,15),new Array(5769,16),new Array(5054,17),new Array(7399,18),new Array(6608,19),new Array(1890,20),new Array(597,21),new Array(3340,22),new Array(2107,23),new Array(13663,24),new Array(12392,25),new Array(16177,26),new Array(14854,27),new Array(9396,28),new Array(8579,29),new Array(11994,30),new Array(11245,31))
          , R = new Array(0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4);
        u.numBitsDiffering = function(e, t) {
            return e ^= t,
            R[15 & e] + R[15 & P(e, 4)] + R[15 & P(e, 8)] + R[15 & P(e, 12)] + R[15 & P(e, 16)] + R[15 & P(e, 20)] + R[15 & P(e, 24)] + R[15 & P(e, 28)]
        }
        ,
        u.decodeFormatInformation = function(e) {
            var t = u.doDecodeFormatInformation(e);
            return null != t ? t : u.doDecodeFormatInformation(e ^ I)
        }
        ,
        u.doDecodeFormatInformation = function(e) {
            for (var t = 4294967295, n = 0, r = 0; r < F.length; r++) {
                var i = F[r]
                  , o = i[0];
                if (o == e)
                    return new u(i[1]);
                var a = this.numBitsDiffering(e, o);
                a < t && (n = i[1],
                t = a)
            }
            return t <= 3 ? new u(n) : null
        }
        ,
        f.forBits = function(e) {
            if (e < 0 || e >= B.length)
                throw "ArgumentException";
            return B[e]
        }
        ;
        var N = new f(0,1,"L")
          , L = new f(1,0,"M")
          , q = new f(2,3,"Q")
          , j = new f(3,2,"H")
          , B = new Array(L,N,j,q);
        h.getDataBlocks = function(e, t, n) {
            if (e.length != t.TotalCodewords)
                throw "ArgumentException";
            for (var r = t.getECBlocksForLevel(n), i = 0, o = r.getECBlocks(), a = 0; a < o.length; a++)
                i += o[a].Count;
            for (var s = new Array(i), c = 0, u = 0; u < o.length; u++)
                for (var f = o[u], a = 0; a < f.Count; a++) {
                    var l = f.DataCodewords
                      , d = r.ECCodewordsPerBlock + l;
                    s[c++] = new h(l,new Array(d))
                }
            for (var p = s[0].codewords.length, w = s.length - 1; w >= 0; ) {
                var m = s[w].codewords.length;
                if (m == p)
                    break;
                w--
            }
            w++;
            for (var g = p - r.ECCodewordsPerBlock, v = 0, a = 0; a < g; a++)
                for (var u = 0; u < c; u++)
                    s[u].codewords[a] = e[v++];
            for (var u = w; u < c; u++)
                s[u].codewords[g] = e[v++];
            for (var b = s[0].codewords.length, a = g; a < b; a++)
                for (var u = 0; u < c; u++) {
                    var y = u < w ? a : a + 1;
                    s[u].codewords[y] = e[v++]
                }
            return s
        }
        ,
        DataMask = {},
        DataMask.forReference = function(e) {
            if (e < 0 || e > 7)
                throw "System.ArgumentException";
            return DataMask.DATA_MASKS[e]
        }
        ,
        DataMask.DATA_MASKS = new Array(new w,new m,new g,new v,new b,new y,new _,new k),
        S.QR_CODE_FIELD = new S(285),
        S.DATA_MATRIX_FIELD = new S(301),
        S.addOrSubtract = function(e, t) {
            return e ^ t
        }
        ,
        Decoder = {},
        Decoder.rsDecoder = new x(S.QR_CODE_FIELD),
        Decoder.correctErrors = function(e, t) {
            for (var n = e.length, r = new Array(n), i = 0; i < n; i++)
                r[i] = 255 & e[i];
            var o = e.length - t;
            try {
                Decoder.rsDecoder.decode(r, o)
            } catch (a) {
                throw a
            }
            for (var i = 0; i < t; i++)
                e[i] = r[i]
        }
        ,
        Decoder.decode = function(e) {
            for (var t = new d(e), n = t.readVersion(), r = t.readFormatInformation().ErrorCorrectionLevel, i = t.readCodewords(), o = h.getDataBlocks(i, n, r), a = 0, s = 0; s < o.length; s++)
                a += o[s].NumDataCodewords;
            for (var c = new Array(a), u = 0, f = 0; f < o.length; f++) {
                var l = o[f]
                  , p = l.Codewords
                  , w = l.NumDataCodewords;
                Decoder.correctErrors(p, w);
                for (var s = 0; s < w; s++)
                    c[u++] = p[s]
            }
            var m = new D(c,n.VersionNumber,r.Bits);
            return m
        }
        ,
        qrcode = {},
        qrcode.imagedata = null ,
        qrcode.width = 0,
        qrcode.height = 0,
        qrcode.qrCodeSymbol = null ,
        qrcode.debug = !1,
        qrcode.maxImgSize = 1048576,
        qrcode.sizeOfDataLengthInfo = [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]],
        qrcode.callback = null ,
        qrcode.decode = function(e) {
            if (0 == arguments.length) {
                var t = document.getElementById("qr-canvas")
                  , n = t.getContext("2d");
                return qrcode.width = t.width,
                qrcode.height = t.height,
                qrcode.imagedata = n.getImageData(0, 0, qrcode.width, qrcode.height),
                qrcode.result = qrcode.process(n),
                null != qrcode.callback && qrcode.callback(qrcode.result),
                qrcode.result
            }
            var r = new Image;
            r.crossOrigin = "Anonymous",
            r.onload = function() {
                var e = document.createElement("canvas")
                  , t = e.getContext("2d")
                  , n = r.height
                  , i = r.width;
                if (r.width * r.height > qrcode.maxImgSize) {
                    var o = r.width / r.height;
                    n = Math.sqrt(qrcode.maxImgSize / o),
                    i = o * n
                }
                e.width = i,
                e.height = n,
                t.drawImage(r, 0, 0, e.width, e.height),
                qrcode.width = e.width,
                qrcode.height = e.height;
                try {
                    qrcode.imagedata = t.getImageData(0, 0, e.width, e.height)
                } catch (a) {
                    return qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!",
                    void (null != qrcode.callback && qrcode.callback(qrcode.result))
                }
                try {
                    qrcode.result = qrcode.process(t)
                } catch (a) {
                    qrcode.result = "error decoding QR Code"
                }
                null != qrcode.callback && qrcode.callback(qrcode.result)
            }
            ,
            r.src = e
        }
        ,
        qrcode.isUrl = function(e) {
            var t = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return t.test(e)
        }
        ,
        qrcode.decode_url = function(e) {
            var t = "";
            try {
                t = escape(e)
            } catch (n) {
                t = e
            }
            var r = "";
            try {
                r = decodeURIComponent(t)
            } catch (n) {
                r = t
            }
            return r
        }
        ,
        qrcode.decode_utf8 = function(e) {
            return qrcode.isUrl(e) ? qrcode.decode_url(e) : e
        }
        ,
        qrcode.process = function(e) {
            var t = ((new Date).getTime(),
            qrcode.grayScaleToBitmap(qrcode.grayscale()));
            if (qrcode.debug) {
                for (var n = 0; n < qrcode.height; n++)
                    for (var r = 0; r < qrcode.width; r++) {
                        var i = 4 * r + n * qrcode.width * 4;
                        qrcode.imagedata.data[i] = (t[r + n * qrcode.width],
                        0),
                        qrcode.imagedata.data[i + 1] = (t[r + n * qrcode.width],
                        0),
                        qrcode.imagedata.data[i + 2] = t[r + n * qrcode.width] ? 255 : 0
                    }
                e.putImageData(qrcode.imagedata, 0, 0)
            }
            var o = new c(t)
              , a = o.detect();
            qrcode.debug && e.putImageData(qrcode.imagedata, 0, 0);
            var s = Decoder.decode(a.bits)
              , u = s.DataByte;
            return u
        }
        ,
        qrcode.getPixel = function(e, t) {
            if (qrcode.width < e)
                throw "point error";
            if (qrcode.height < t)
                throw "point error";
            return point = 4 * e + t * qrcode.width * 4,
            p = (33 * qrcode.imagedata.data[point] + 34 * qrcode.imagedata.data[point + 1] + 33 * qrcode.imagedata.data[point + 2]) / 100,
            p
        }
        ,
        qrcode.binarize = function(e) {
            for (var t = new Array(qrcode.width * qrcode.height), n = 0; n < qrcode.height; n++)
                for (var r = 0; r < qrcode.width; r++) {
                    var i = qrcode.getPixel(r, n);
                    t[r + n * qrcode.width] = i <= e
                }
            return t
        }
        ,
        qrcode.getMiddleBrightnessPerArea = function(e) {
            for (var t = 4, n = Math.floor(qrcode.width / t), r = Math.floor(qrcode.height / t), i = new Array(t), o = 0; o < t; o++) {
                i[o] = new Array(t);
                for (var a = 0; a < t; a++)
                    i[o][a] = new Array(0,0)
            }
            for (var s = 0; s < t; s++)
                for (var c = 0; c < t; c++) {
                    i[c][s][0] = 255;
                    for (var u = 0; u < r; u++)
                        for (var f = 0; f < n; f++) {
                            var l = e[n * c + f + (r * s + u) * qrcode.width];
                            l < i[c][s][0] && (i[c][s][0] = l),
                            l > i[c][s][1] && (i[c][s][1] = l)
                        }
                }
            for (var h = new Array(t), d = 0; d < t; d++)
                h[d] = new Array(t);
            for (var s = 0; s < t; s++)
                for (var c = 0; c < t; c++)
                    h[c][s] = Math.floor((i[c][s][0] + i[c][s][1]) / 2);
            return h
        }
        ,
        qrcode.grayScaleToBitmap = function(e) {
            for (var t = qrcode.getMiddleBrightnessPerArea(e), n = t.length, r = Math.floor(qrcode.width / n), i = Math.floor(qrcode.height / n), o = new Array(qrcode.height * qrcode.width), a = 0; a < n; a++)
                for (var s = 0; s < n; s++)
                    for (var c = 0; c < i; c++)
                        for (var u = 0; u < r; u++)
                            o[r * s + u + (i * a + c) * qrcode.width] = e[r * s + u + (i * a + c) * qrcode.width] < t[s][a];
            return o
        }
        ,
        qrcode.grayscale = function() {
            for (var e = new Array(qrcode.width * qrcode.height), t = 0; t < qrcode.height; t++)
                for (var n = 0; n < qrcode.width; n++) {
                    var r = qrcode.getPixel(n, t);
                    e[n + t * qrcode.width] = r
                }
            return e
        }
        ,
        Array.prototype.remove = function(e, t) {
            var n = this.slice((t || e) + 1 || this.length);
            return this.length = e < 0 ? this.length + e : e,
            this.push.apply(this, n)
        }
        ;
        var U = 3
          , z = 57
          , G = 8
          , V = 2;
        qrcode.orderBestPatterns = function(e) {
            function t(e, t) {
                return xDiff = e.X - t.X,
                yDiff = e.Y - t.Y,
                Math.sqrt(xDiff * xDiff + yDiff * yDiff)
            }
            function n(e, t, n) {
                var r = t.x
                  , i = t.y;
                return (n.x - r) * (e.y - i) - (n.y - i) * (e.x - r)
            }
            var r, i, o, a = t(e[0], e[1]), s = t(e[1], e[2]), c = t(e[0], e[2]);
            if (s >= a && s >= c ? (i = e[0],
            r = e[1],
            o = e[2]) : c >= s && c >= a ? (i = e[1],
            r = e[0],
            o = e[2]) : (i = e[2],
            r = e[0],
            o = e[1]),
            n(r, i, o) < 0) {
                var u = r;
                r = o,
                o = u
            }
            e[0] = r,
            e[1] = i,
            e[2] = o
        }
        ,
        e.exports = qrcode
    }
});
