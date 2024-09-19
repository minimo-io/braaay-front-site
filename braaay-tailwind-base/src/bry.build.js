/**
 * We are including Alpine.js, Guide.js
 */

// Alpine

(() => {
    var rt = !1,
        nt = !1,
        U = [],
        it = -1;
    function qt(e) {
        Cn(e);
    }
    function Cn(e) {
        U.includes(e) || U.push(e), Tn();
    }
    function Ee(e) {
        let t = U.indexOf(e);
        t !== -1 && t > it && U.splice(t, 1);
    }
    function Tn() {
        !nt && !rt && ((rt = !0), queueMicrotask(Rn));
    }
    function Rn() {
        (rt = !1), (nt = !0);
        for (let e = 0; e < U.length; e++) U[e](), (it = e);
        (U.length = 0), (it = -1), (nt = !1);
    }
    var R,
        D,
        L,
        st,
        ot = !0;
    function Ut(e) {
        (ot = !1), e(), (ot = !0);
    }
    function Wt(e) {
        (R = e.reactive),
            (L = e.release),
            (D = (t) =>
                e.effect(t, {
                    scheduler: (r) => {
                        ot ? qt(r) : r();
                    },
                })),
            (st = e.raw);
    }
    function at(e) {
        D = e;
    }
    function Gt(e) {
        let t = () => {};
        return [
            (n) => {
                let i = D(n);
                return (
                    e._x_effects ||
                        ((e._x_effects = new Set()),
                        (e._x_runEffects = () => {
                            e._x_effects.forEach((o) => o());
                        })),
                    e._x_effects.add(i),
                    (t = () => {
                        i !== void 0 && (e._x_effects.delete(i), L(i));
                    }),
                    i
                );
            },
            () => {
                t();
            },
        ];
    }
    function ve(e, t) {
        let r = !0,
            n,
            i = D(() => {
                let o = e();
                JSON.stringify(o),
                    r
                        ? (n = o)
                        : queueMicrotask(() => {
                              t(o, n), (n = o);
                          }),
                    (r = !1);
            });
        return () => L(i);
    }
    var Jt = [],
        Yt = [],
        Xt = [];
    function Zt(e) {
        Xt.push(e);
    }
    function ee(e, t) {
        typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : ((t = e), Yt.push(t));
    }
    function Ae(e) {
        Jt.push(e);
    }
    function Oe(e, t, r) {
        e._x_attributeCleanups || (e._x_attributeCleanups = {}),
            e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
            e._x_attributeCleanups[t].push(r);
    }
    function ct(e, t) {
        e._x_attributeCleanups &&
            Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
                (t === void 0 || t.includes(r)) && (n.forEach((i) => i()), delete e._x_attributeCleanups[r]);
            });
    }
    function Qt(e) {
        if (e._x_cleanups) for (; e._x_cleanups.length; ) e._x_cleanups.pop()();
    }
    var lt = new MutationObserver(pt),
        ut = !1;
    function le() {
        lt.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), (ut = !0);
    }
    function ft() {
        Mn(), lt.disconnect(), (ut = !1);
    }
    var ce = [];
    function Mn() {
        let e = lt.takeRecords();
        ce.push(() => e.length > 0 && pt(e));
        let t = ce.length;
        queueMicrotask(() => {
            if (ce.length === t) for (; ce.length > 0; ) ce.shift()();
        });
    }
    function _(e) {
        if (!ut) return e();
        ft();
        let t = e();
        return le(), t;
    }
    var dt = !1,
        Se = [];
    function er() {
        dt = !0;
    }
    function tr() {
        (dt = !1), pt(Se), (Se = []);
    }
    function pt(e) {
        if (dt) {
            Se = Se.concat(e);
            return;
        }
        let t = new Set(),
            r = new Set(),
            n = new Map(),
            i = new Map();
        for (let o = 0; o < e.length; o++)
            if (
                !e[o].target._x_ignoreMutationObserver &&
                (e[o].type === "childList" &&
                    (e[o].addedNodes.forEach((s) => s.nodeType === 1 && t.add(s)),
                    e[o].removedNodes.forEach((s) => s.nodeType === 1 && r.add(s))),
                e[o].type === "attributes")
            ) {
                let s = e[o].target,
                    a = e[o].attributeName,
                    c = e[o].oldValue,
                    l = () => {
                        n.has(s) || n.set(s, []), n.get(s).push({ name: a, value: s.getAttribute(a) });
                    },
                    u = () => {
                        i.has(s) || i.set(s, []), i.get(s).push(a);
                    };
                s.hasAttribute(a) && c === null ? l() : s.hasAttribute(a) ? (u(), l()) : u();
            }
        i.forEach((o, s) => {
            ct(s, o);
        }),
            n.forEach((o, s) => {
                Jt.forEach((a) => a(s, o));
            });
        for (let o of r) t.has(o) || Yt.forEach((s) => s(o));
        t.forEach((o) => {
            (o._x_ignoreSelf = !0), (o._x_ignore = !0);
        });
        for (let o of t)
            r.has(o) ||
                (o.isConnected &&
                    (delete o._x_ignoreSelf,
                    delete o._x_ignore,
                    Xt.forEach((s) => s(o)),
                    (o._x_ignore = !0),
                    (o._x_ignoreSelf = !0)));
        t.forEach((o) => {
            delete o._x_ignoreSelf, delete o._x_ignore;
        }),
            (t = null),
            (r = null),
            (n = null),
            (i = null);
    }
    function Ce(e) {
        return F(j(e));
    }
    function P(e, t, r) {
        return (
            (e._x_dataStack = [t, ...j(r || e)]),
            () => {
                e._x_dataStack = e._x_dataStack.filter((n) => n !== t);
            }
        );
    }
    function j(e) {
        return e._x_dataStack
            ? e._x_dataStack
            : typeof ShadowRoot == "function" && e instanceof ShadowRoot
            ? j(e.host)
            : e.parentNode
            ? j(e.parentNode)
            : [];
    }
    function F(e) {
        return new Proxy({ objects: e }, Nn);
    }
    var Nn = {
        ownKeys({ objects: e }) {
            return Array.from(new Set(e.flatMap((t) => Object.keys(t))));
        },
        has({ objects: e }, t) {
            return t == Symbol.unscopables
                ? !1
                : e.some((r) => Object.prototype.hasOwnProperty.call(r, t) || Reflect.has(r, t));
        },
        get({ objects: e }, t, r) {
            return t == "toJSON" ? Dn : Reflect.get(e.find((n) => Reflect.has(n, t)) || {}, t, r);
        },
        set({ objects: e }, t, r, n) {
            let i = e.find((s) => Object.prototype.hasOwnProperty.call(s, t)) || e[e.length - 1],
                o = Object.getOwnPropertyDescriptor(i, t);
            return o?.set && o?.get ? o.set.call(n, r) || !0 : Reflect.set(i, t, r);
        },
    };
    function Dn() {
        return Reflect.ownKeys(this).reduce((t, r) => ((t[r] = Reflect.get(this, r)), t), {});
    }
    function Te(e) {
        let t = (n) => typeof n == "object" && !Array.isArray(n) && n !== null,
            r = (n, i = "") => {
                Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([o, { value: s, enumerable: a }]) => {
                    if (a === !1 || s === void 0 || (typeof s == "object" && s !== null && s.__v_skip)) return;
                    let c = i === "" ? o : `${i}.${o}`;
                    typeof s == "object" && s !== null && s._x_interceptor
                        ? (n[o] = s.initialize(e, c, o))
                        : t(s) && s !== n && !(s instanceof Element) && r(s, c);
                });
            };
        return r(e);
    }
    function Re(e, t = () => {}) {
        let r = {
            initialValue: void 0,
            _x_interceptor: !0,
            initialize(n, i, o) {
                return e(
                    this.initialValue,
                    () => Pn(n, i),
                    (s) => mt(n, i, s),
                    i,
                    o
                );
            },
        };
        return (
            t(r),
            (n) => {
                if (typeof n == "object" && n !== null && n._x_interceptor) {
                    let i = r.initialize.bind(r);
                    r.initialize = (o, s, a) => {
                        let c = n.initialize(o, s, a);
                        return (r.initialValue = c), i(o, s, a);
                    };
                } else r.initialValue = n;
                return r;
            }
        );
    }
    function Pn(e, t) {
        return t.split(".").reduce((r, n) => r[n], e);
    }
    function mt(e, t, r) {
        if ((typeof t == "string" && (t = t.split(".")), t.length === 1)) e[t[0]] = r;
        else {
            if (t.length === 0) throw error;
            return e[t[0]] || (e[t[0]] = {}), mt(e[t[0]], t.slice(1), r);
        }
    }
    var rr = {};
    function y(e, t) {
        rr[e] = t;
    }
    function ue(e, t) {
        return (
            Object.entries(rr).forEach(([r, n]) => {
                let i = null;
                function o() {
                    if (i) return i;
                    {
                        let [s, a] = _t(t);
                        return (i = { interceptor: Re, ...s }), ee(t, a), i;
                    }
                }
                Object.defineProperty(e, `$${r}`, {
                    get() {
                        return n(t, o());
                    },
                    enumerable: !1,
                });
            }),
            e
        );
    }
    function nr(e, t, r, ...n) {
        try {
            return r(...n);
        } catch (i) {
            te(i, e, t);
        }
    }
    function te(e, t, r = void 0) {
        (e = Object.assign(e ?? { message: "No error message given." }, { el: t, expression: r })),
            console.warn(
                `Alpine Expression Error: ${e.message}

${
    r
        ? 'Expression: "' +
          r +
          `"

`
        : ""
}`,
                t
            ),
            setTimeout(() => {
                throw e;
            }, 0);
    }
    var Me = !0;
    function De(e) {
        let t = Me;
        Me = !1;
        let r = e();
        return (Me = t), r;
    }
    function M(e, t, r = {}) {
        let n;
        return x(e, t)((i) => (n = i), r), n;
    }
    function x(...e) {
        return ir(...e);
    }
    var ir = gt;
    function or(e) {
        ir = e;
    }
    function gt(e, t) {
        let r = {};
        ue(r, e);
        let n = [r, ...j(e)],
            i = typeof t == "function" ? In(n, t) : Ln(n, t, e);
        return nr.bind(null, e, t, i);
    }
    function In(e, t) {
        return (r = () => {}, { scope: n = {}, params: i = [] } = {}) => {
            let o = t.apply(F([n, ...e]), i);
            Ne(r, o);
        };
    }
    var ht = {};
    function kn(e, t) {
        if (ht[e]) return ht[e];
        let r = Object.getPrototypeOf(async function () {}).constructor,
            n = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(async()=>{ ${e} })()` : e,
            o = (() => {
                try {
                    let s = new r(
                        ["__self", "scope"],
                        `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`
                    );
                    return Object.defineProperty(s, "name", { value: `[Alpine] ${e}` }), s;
                } catch (s) {
                    return te(s, t, e), Promise.resolve();
                }
            })();
        return (ht[e] = o), o;
    }
    function Ln(e, t, r) {
        let n = kn(t, r);
        return (i = () => {}, { scope: o = {}, params: s = [] } = {}) => {
            (n.result = void 0), (n.finished = !1);
            let a = F([o, ...e]);
            if (typeof n == "function") {
                let c = n(n, a).catch((l) => te(l, r, t));
                n.finished
                    ? (Ne(i, n.result, a, s, r), (n.result = void 0))
                    : c
                          .then((l) => {
                              Ne(i, l, a, s, r);
                          })
                          .catch((l) => te(l, r, t))
                          .finally(() => (n.result = void 0));
            }
        };
    }
    function Ne(e, t, r, n, i) {
        if (Me && typeof t == "function") {
            let o = t.apply(r, n);
            o instanceof Promise ? o.then((s) => Ne(e, s, r, n)).catch((s) => te(s, i, t)) : e(o);
        } else typeof t == "object" && t instanceof Promise ? t.then((o) => e(o)) : e(t);
    }
    var bt = "x-";
    function C(e = "") {
        return bt + e;
    }
    function sr(e) {
        bt = e;
    }
    var Pe = {};
    function d(e, t) {
        return (
            (Pe[e] = t),
            {
                before(r) {
                    if (!Pe[r]) {
                        console.warn(
                            String.raw`Cannot find directive \`${r}\`. \`${e}\` will use the default order of execution`
                        );
                        return;
                    }
                    let n = W.indexOf(r);
                    W.splice(n >= 0 ? n : W.indexOf("DEFAULT"), 0, e);
                },
            }
        );
    }
    function ar(e) {
        return Object.keys(Pe).includes(e);
    }
    function de(e, t, r) {
        if (((t = Array.from(t)), e._x_virtualDirectives)) {
            let o = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({ name: a, value: c })),
                s = wt(o);
            (o = o.map((a) =>
                s.find((c) => c.name === a.name) ? { name: `x-bind:${a.name}`, value: `"${a.value}"` } : a
            )),
                (t = t.concat(o));
        }
        let n = {};
        return t
            .map(ur((o, s) => (n[o] = s)))
            .filter(dr)
            .map(jn(n, r))
            .sort(Fn)
            .map((o) => $n(e, o));
    }
    function wt(e) {
        return Array.from(e)
            .map(ur())
            .filter((t) => !dr(t));
    }
    var xt = !1,
        fe = new Map(),
        cr = Symbol();
    function lr(e) {
        xt = !0;
        let t = Symbol();
        (cr = t), fe.set(t, []);
        let r = () => {
                for (; fe.get(t).length; ) fe.get(t).shift()();
                fe.delete(t);
            },
            n = () => {
                (xt = !1), r();
            };
        e(r), n();
    }
    function _t(e) {
        let t = [],
            r = (a) => t.push(a),
            [n, i] = Gt(e);
        return (
            t.push(i),
            [
                { Alpine: B, effect: n, cleanup: r, evaluateLater: x.bind(x, e), evaluate: M.bind(M, e) },
                () => t.forEach((a) => a()),
            ]
        );
    }
    function $n(e, t) {
        let r = () => {},
            n = Pe[t.type] || r,
            [i, o] = _t(e);
        Oe(e, t.original, o);
        let s = () => {
            e._x_ignore ||
                e._x_ignoreSelf ||
                (n.inline && n.inline(e, t, i), (n = n.bind(n, e, t, i)), xt ? fe.get(cr).push(n) : n());
        };
        return (s.runCleanups = o), s;
    }
    var Ie =
            (e, t) =>
            ({ name: r, value: n }) => (r.startsWith(e) && (r = r.replace(e, t)), { name: r, value: n }),
        ke = (e) => e;
    function ur(e = () => {}) {
        return ({ name: t, value: r }) => {
            let { name: n, value: i } = fr.reduce((o, s) => s(o), { name: t, value: r });
            return n !== t && e(n, t), { name: n, value: i };
        };
    }
    var fr = [];
    function re(e) {
        fr.push(e);
    }
    function dr({ name: e }) {
        return pr().test(e);
    }
    var pr = () => new RegExp(`^${bt}([^:^.]+)\\b`);
    function jn(e, t) {
        return ({ name: r, value: n }) => {
            let i = r.match(pr()),
                o = r.match(/:([a-zA-Z0-9\-_:]+)/),
                s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                a = t || e[r] || r;
            return {
                type: i ? i[1] : null,
                value: o ? o[1] : null,
                modifiers: s.map((c) => c.replace(".", "")),
                expression: n,
                original: a,
            };
        };
    }
    var yt = "DEFAULT",
        W = [
            "ignore",
            "ref",
            "data",
            "id",
            "anchor",
            "bind",
            "init",
            "for",
            "model",
            "modelable",
            "transition",
            "show",
            "if",
            yt,
            "teleport",
        ];
    function Fn(e, t) {
        let r = W.indexOf(e.type) === -1 ? yt : e.type,
            n = W.indexOf(t.type) === -1 ? yt : t.type;
        return W.indexOf(r) - W.indexOf(n);
    }
    function G(e, t, r = {}) {
        e.dispatchEvent(new CustomEvent(t, { detail: r, bubbles: !0, composed: !0, cancelable: !0 }));
    }
    function T(e, t) {
        if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
            Array.from(e.children).forEach((i) => T(i, t));
            return;
        }
        let r = !1;
        if ((t(e, () => (r = !0)), r)) return;
        let n = e.firstElementChild;
        for (; n; ) T(n, t, !1), (n = n.nextElementSibling);
    }
    function E(e, ...t) {
        console.warn(`Alpine Warning: ${e}`, ...t);
    }
    var mr = !1;
    function _r() {
        mr &&
            E(
                "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
            ),
            (mr = !0),
            document.body ||
                E(
                    "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
                ),
            G(document, "alpine:init"),
            G(document, "alpine:initializing"),
            le(),
            Zt((t) => S(t, T)),
            ee((t) => vt(t)),
            Ae((t, r) => {
                de(t, r).forEach((n) => n());
            });
        let e = (t) => !J(t.parentElement, !0);
        Array.from(document.querySelectorAll(xr().join(",")))
            .filter(e)
            .forEach((t) => {
                S(t);
            }),
            G(document, "alpine:initialized"),
            setTimeout(() => {
                Bn();
            });
    }
    var Et = [],
        hr = [];
    function gr() {
        return Et.map((e) => e());
    }
    function xr() {
        return Et.concat(hr).map((e) => e());
    }
    function Le(e) {
        Et.push(e);
    }
    function $e(e) {
        hr.push(e);
    }
    function J(e, t = !1) {
        return z(e, (r) => {
            if ((t ? xr() : gr()).some((i) => r.matches(i))) return !0;
        });
    }
    function z(e, t) {
        if (e) {
            if (t(e)) return e;
            if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement)) return z(e.parentElement, t);
        }
    }
    function yr(e) {
        return gr().some((t) => e.matches(t));
    }
    var br = [];
    function wr(e) {
        br.push(e);
    }
    function S(e, t = T, r = () => {}) {
        lr(() => {
            t(e, (n, i) => {
                r(n, i), br.forEach((o) => o(n, i)), de(n, n.attributes).forEach((o) => o()), n._x_ignore && i();
            });
        });
    }
    function vt(e, t = T) {
        t(e, (r) => {
            ct(r), Qt(r);
        });
    }
    function Bn() {
        [
            ["ui", "dialog", ["[x-dialog], [x-popover]"]],
            ["anchor", "anchor", ["[x-anchor]"]],
            ["sort", "sort", ["[x-sort]"]],
        ].forEach(([t, r, n]) => {
            ar(r) ||
                n.some((i) => {
                    if (document.querySelector(i)) return E(`found "${i}", but missing ${t} plugin`), !0;
                });
        });
    }
    var St = [],
        At = !1;
    function ne(e = () => {}) {
        return (
            queueMicrotask(() => {
                At ||
                    setTimeout(() => {
                        je();
                    });
            }),
            new Promise((t) => {
                St.push(() => {
                    e(), t();
                });
            })
        );
    }
    function je() {
        for (At = !1; St.length; ) St.shift()();
    }
    function Er() {
        At = !0;
    }
    function pe(e, t) {
        return Array.isArray(t)
            ? vr(e, t.join(" "))
            : typeof t == "object" && t !== null
            ? zn(e, t)
            : typeof t == "function"
            ? pe(e, t())
            : vr(e, t);
    }
    function vr(e, t) {
        let r = (o) => o.split(" ").filter(Boolean),
            n = (o) =>
                o
                    .split(" ")
                    .filter((s) => !e.classList.contains(s))
                    .filter(Boolean),
            i = (o) => (
                e.classList.add(...o),
                () => {
                    e.classList.remove(...o);
                }
            );
        return (t = t === !0 ? (t = "") : t || ""), i(n(t));
    }
    function zn(e, t) {
        let r = (a) => a.split(" ").filter(Boolean),
            n = Object.entries(t)
                .flatMap(([a, c]) => (c ? r(a) : !1))
                .filter(Boolean),
            i = Object.entries(t)
                .flatMap(([a, c]) => (c ? !1 : r(a)))
                .filter(Boolean),
            o = [],
            s = [];
        return (
            i.forEach((a) => {
                e.classList.contains(a) && (e.classList.remove(a), s.push(a));
            }),
            n.forEach((a) => {
                e.classList.contains(a) || (e.classList.add(a), o.push(a));
            }),
            () => {
                s.forEach((a) => e.classList.add(a)), o.forEach((a) => e.classList.remove(a));
            }
        );
    }
    function Y(e, t) {
        return typeof t == "object" && t !== null ? Kn(e, t) : Hn(e, t);
    }
    function Kn(e, t) {
        let r = {};
        return (
            Object.entries(t).forEach(([n, i]) => {
                (r[n] = e.style[n]), n.startsWith("--") || (n = Vn(n)), e.style.setProperty(n, i);
            }),
            setTimeout(() => {
                e.style.length === 0 && e.removeAttribute("style");
            }),
            () => {
                Y(e, r);
            }
        );
    }
    function Hn(e, t) {
        let r = e.getAttribute("style", t);
        return (
            e.setAttribute("style", t),
            () => {
                e.setAttribute("style", r || "");
            }
        );
    }
    function Vn(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function me(e, t = () => {}) {
        let r = !1;
        return function () {
            r ? t.apply(this, arguments) : ((r = !0), e.apply(this, arguments));
        };
    }
    d("transition", (e, { value: t, modifiers: r, expression: n }, { evaluate: i }) => {
        typeof n == "function" && (n = i(n)), n !== !1 && (!n || typeof n == "boolean" ? Un(e, r, t) : qn(e, n, t));
    });
    function qn(e, t, r) {
        Sr(e, pe, ""),
            {
                enter: (i) => {
                    e._x_transition.enter.during = i;
                },
                "enter-start": (i) => {
                    e._x_transition.enter.start = i;
                },
                "enter-end": (i) => {
                    e._x_transition.enter.end = i;
                },
                leave: (i) => {
                    e._x_transition.leave.during = i;
                },
                "leave-start": (i) => {
                    e._x_transition.leave.start = i;
                },
                "leave-end": (i) => {
                    e._x_transition.leave.end = i;
                },
            }[r](t);
    }
    function Un(e, t, r) {
        Sr(e, Y);
        let n = !t.includes("in") && !t.includes("out") && !r,
            i = n || t.includes("in") || ["enter"].includes(r),
            o = n || t.includes("out") || ["leave"].includes(r);
        t.includes("in") && !n && (t = t.filter((g, b) => b < t.indexOf("out"))),
            t.includes("out") && !n && (t = t.filter((g, b) => b > t.indexOf("out")));
        let s = !t.includes("opacity") && !t.includes("scale"),
            a = s || t.includes("opacity"),
            c = s || t.includes("scale"),
            l = a ? 0 : 1,
            u = c ? _e(t, "scale", 95) / 100 : 1,
            p = _e(t, "delay", 0) / 1e3,
            m = _e(t, "origin", "center"),
            w = "opacity, transform",
            $ = _e(t, "duration", 150) / 1e3,
            we = _e(t, "duration", 75) / 1e3,
            f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
        i &&
            ((e._x_transition.enter.during = {
                transformOrigin: m,
                transitionDelay: `${p}s`,
                transitionProperty: w,
                transitionDuration: `${$}s`,
                transitionTimingFunction: f,
            }),
            (e._x_transition.enter.start = { opacity: l, transform: `scale(${u})` }),
            (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
            o &&
                ((e._x_transition.leave.during = {
                    transformOrigin: m,
                    transitionDelay: `${p}s`,
                    transitionProperty: w,
                    transitionDuration: `${we}s`,
                    transitionTimingFunction: f,
                }),
                (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
                (e._x_transition.leave.end = { opacity: l, transform: `scale(${u})` }));
    }
    function Sr(e, t, r = {}) {
        e._x_transition ||
            (e._x_transition = {
                enter: { during: r, start: r, end: r },
                leave: { during: r, start: r, end: r },
                in(n = () => {}, i = () => {}) {
                    Fe(e, t, { during: this.enter.during, start: this.enter.start, end: this.enter.end }, n, i);
                },
                out(n = () => {}, i = () => {}) {
                    Fe(e, t, { during: this.leave.during, start: this.leave.start, end: this.leave.end }, n, i);
                },
            });
    }
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function (e, t, r, n) {
        let i = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout,
            o = () => i(r);
        if (t) {
            e._x_transition && (e._x_transition.enter || e._x_transition.leave)
                ? e._x_transition.enter &&
                  (Object.entries(e._x_transition.enter.during).length ||
                      Object.entries(e._x_transition.enter.start).length ||
                      Object.entries(e._x_transition.enter.end).length)
                    ? e._x_transition.in(r)
                    : o()
                : e._x_transition
                ? e._x_transition.in(r)
                : o();
            return;
        }
        (e._x_hidePromise = e._x_transition
            ? new Promise((s, a) => {
                  e._x_transition.out(
                      () => {},
                      () => s(n)
                  ),
                      e._x_transitioning && e._x_transitioning.beforeCancel(() => a({ isFromCancelledTransition: !0 }));
              })
            : Promise.resolve(n)),
            queueMicrotask(() => {
                let s = Ar(e);
                s
                    ? (s._x_hideChildren || (s._x_hideChildren = []), s._x_hideChildren.push(e))
                    : i(() => {
                          let a = (c) => {
                              let l = Promise.all([c._x_hidePromise, ...(c._x_hideChildren || []).map(a)]).then(([u]) =>
                                  u?.()
                              );
                              return delete c._x_hidePromise, delete c._x_hideChildren, l;
                          };
                          a(e).catch((c) => {
                              if (!c.isFromCancelledTransition) throw c;
                          });
                      });
            });
    };
    function Ar(e) {
        let t = e.parentNode;
        if (t) return t._x_hidePromise ? t : Ar(t);
    }
    function Fe(e, t, { during: r, start: n, end: i } = {}, o = () => {}, s = () => {}) {
        if (
            (e._x_transitioning && e._x_transitioning.cancel(),
            Object.keys(r).length === 0 && Object.keys(n).length === 0 && Object.keys(i).length === 0)
        ) {
            o(), s();
            return;
        }
        let a, c, l;
        Wn(e, {
            start() {
                a = t(e, n);
            },
            during() {
                c = t(e, r);
            },
            before: o,
            end() {
                a(), (l = t(e, i));
            },
            after: s,
            cleanup() {
                c(), l();
            },
        });
    }
    function Wn(e, t) {
        let r,
            n,
            i,
            o = me(() => {
                _(() => {
                    (r = !0),
                        n || t.before(),
                        i || (t.end(), je()),
                        t.after(),
                        e.isConnected && t.cleanup(),
                        delete e._x_transitioning;
                });
            });
        (e._x_transitioning = {
            beforeCancels: [],
            beforeCancel(s) {
                this.beforeCancels.push(s);
            },
            cancel: me(function () {
                for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
                o();
            }),
            finish: o,
        }),
            _(() => {
                t.start(), t.during();
            }),
            Er(),
            requestAnimationFrame(() => {
                if (r) return;
                let s = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
                    a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
                s === 0 && (s = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
                    _(() => {
                        t.before();
                    }),
                    (n = !0),
                    requestAnimationFrame(() => {
                        r ||
                            (_(() => {
                                t.end();
                            }),
                            je(),
                            setTimeout(e._x_transitioning.finish, s + a),
                            (i = !0));
                    });
            });
    }
    function _e(e, t, r) {
        if (e.indexOf(t) === -1) return r;
        let n = e[e.indexOf(t) + 1];
        if (!n || (t === "scale" && isNaN(n))) return r;
        if (t === "duration" || t === "delay") {
            let i = n.match(/([0-9]+)ms/);
            if (i) return i[1];
        }
        return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
            ? [n, e[e.indexOf(t) + 2]].join(" ")
            : n;
    }
    var I = !1;
    function A(e, t = () => {}) {
        return (...r) => (I ? t(...r) : e(...r));
    }
    function Or(e) {
        return (...t) => I && e(...t);
    }
    var Cr = [];
    function K(e) {
        Cr.push(e);
    }
    function Tr(e, t) {
        Cr.forEach((r) => r(e, t)),
            (I = !0),
            Mr(() => {
                S(t, (r, n) => {
                    n(r, () => {});
                });
            }),
            (I = !1);
    }
    var Be = !1;
    function Rr(e, t) {
        t._x_dataStack || (t._x_dataStack = e._x_dataStack),
            (I = !0),
            (Be = !0),
            Mr(() => {
                Gn(t);
            }),
            (I = !1),
            (Be = !1);
    }
    function Gn(e) {
        let t = !1;
        S(e, (n, i) => {
            T(n, (o, s) => {
                if (t && yr(o)) return s();
                (t = !0), i(o, s);
            });
        });
    }
    function Mr(e) {
        let t = D;
        at((r, n) => {
            let i = t(r);
            return L(i), () => {};
        }),
            e(),
            at(t);
    }
    function he(e, t, r, n = []) {
        switch (
            (e._x_bindings || (e._x_bindings = R({})), (e._x_bindings[t] = r), (t = n.includes("camel") ? ri(t) : t), t)
        ) {
            case "value":
                Jn(e, r);
                break;
            case "style":
                Xn(e, r);
                break;
            case "class":
                Yn(e, r);
                break;
            case "selected":
            case "checked":
                Zn(e, t, r);
                break;
            default:
                Dr(e, t, r);
                break;
        }
    }
    function Jn(e, t) {
        if (e.type === "radio")
            e.attributes.value === void 0 && (e.value = t),
                window.fromModel &&
                    (typeof t == "boolean" ? (e.checked = ge(e.value) === t) : (e.checked = Nr(e.value, t)));
        else if (e.type === "checkbox")
            Number.isInteger(t)
                ? (e.value = t)
                : !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t)
                ? (e.value = String(t))
                : Array.isArray(t)
                ? (e.checked = t.some((r) => Nr(r, e.value)))
                : (e.checked = !!t);
        else if (e.tagName === "SELECT") ti(e, t);
        else {
            if (e.value === t) return;
            e.value = t === void 0 ? "" : t;
        }
    }
    function Yn(e, t) {
        e._x_undoAddedClasses && e._x_undoAddedClasses(), (e._x_undoAddedClasses = pe(e, t));
    }
    function Xn(e, t) {
        e._x_undoAddedStyles && e._x_undoAddedStyles(), (e._x_undoAddedStyles = Y(e, t));
    }
    function Zn(e, t, r) {
        Dr(e, t, r), ei(e, t, r);
    }
    function Dr(e, t, r) {
        [null, void 0, !1].includes(r) && ni(t) ? e.removeAttribute(t) : (Pr(t) && (r = t), Qn(e, t, r));
    }
    function Qn(e, t, r) {
        e.getAttribute(t) != r && e.setAttribute(t, r);
    }
    function ei(e, t, r) {
        e[t] !== r && (e[t] = r);
    }
    function ti(e, t) {
        let r = [].concat(t).map((n) => n + "");
        Array.from(e.options).forEach((n) => {
            n.selected = r.includes(n.value);
        });
    }
    function ri(e) {
        return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
    }
    function Nr(e, t) {
        return e == t;
    }
    function ge(e) {
        return [1, "1", "true", "on", "yes", !0].includes(e)
            ? !0
            : [0, "0", "false", "off", "no", !1].includes(e)
            ? !1
            : e
            ? Boolean(e)
            : null;
    }
    function Pr(e) {
        return [
            "disabled",
            "checked",
            "required",
            "readonly",
            "open",
            "selected",
            "autofocus",
            "itemscope",
            "multiple",
            "novalidate",
            "allowfullscreen",
            "allowpaymentrequest",
            "formnovalidate",
            "autoplay",
            "controls",
            "loop",
            "muted",
            "playsinline",
            "default",
            "ismap",
            "reversed",
            "async",
            "defer",
            "nomodule",
        ].includes(e);
    }
    function ni(e) {
        return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e);
    }
    function Ir(e, t, r) {
        return e._x_bindings && e._x_bindings[t] !== void 0 ? e._x_bindings[t] : Lr(e, t, r);
    }
    function kr(e, t, r, n = !0) {
        if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
        if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
            let i = e._x_inlineBindings[t];
            return (i.extract = n), De(() => M(e, i.expression));
        }
        return Lr(e, t, r);
    }
    function Lr(e, t, r) {
        let n = e.getAttribute(t);
        return n === null ? (typeof r == "function" ? r() : r) : n === "" ? !0 : Pr(t) ? !![t, "true"].includes(n) : n;
    }
    function ze(e, t) {
        var r;
        return function () {
            var n = this,
                i = arguments,
                o = function () {
                    (r = null), e.apply(n, i);
                };
            clearTimeout(r), (r = setTimeout(o, t));
        };
    }
    function Ke(e, t) {
        let r;
        return function () {
            let n = this,
                i = arguments;
            r || (e.apply(n, i), (r = !0), setTimeout(() => (r = !1), t));
        };
    }
    function He({ get: e, set: t }, { get: r, set: n }) {
        let i = !0,
            o,
            s,
            a = D(() => {
                let c = e(),
                    l = r();
                if (i) n(Ot(c)), (i = !1);
                else {
                    let u = JSON.stringify(c),
                        p = JSON.stringify(l);
                    u !== o ? n(Ot(c)) : u !== p && t(Ot(l));
                }
                (o = JSON.stringify(e())), (s = JSON.stringify(r()));
            });
        return () => {
            L(a);
        };
    }
    function Ot(e) {
        return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
    }
    function $r(e) {
        (Array.isArray(e) ? e : [e]).forEach((r) => r(B));
    }
    var X = {},
        jr = !1;
    function Fr(e, t) {
        if ((jr || ((X = R(X)), (jr = !0)), t === void 0)) return X[e];
        (X[e] = t),
            typeof t == "object" &&
                t !== null &&
                t.hasOwnProperty("init") &&
                typeof t.init == "function" &&
                X[e].init(),
            Te(X[e]);
    }
    function Br() {
        return X;
    }
    var zr = {};
    function Kr(e, t) {
        let r = typeof t != "function" ? () => t : t;
        return e instanceof Element ? Ct(e, r()) : ((zr[e] = r), () => {});
    }
    function Hr(e) {
        return (
            Object.entries(zr).forEach(([t, r]) => {
                Object.defineProperty(e, t, {
                    get() {
                        return (...n) => r(...n);
                    },
                });
            }),
            e
        );
    }
    function Ct(e, t, r) {
        let n = [];
        for (; n.length; ) n.pop()();
        let i = Object.entries(t).map(([s, a]) => ({ name: s, value: a })),
            o = wt(i);
        return (
            (i = i.map((s) =>
                o.find((a) => a.name === s.name) ? { name: `x-bind:${s.name}`, value: `"${s.value}"` } : s
            )),
            de(e, i, r).map((s) => {
                n.push(s.runCleanups), s();
            }),
            () => {
                for (; n.length; ) n.pop()();
            }
        );
    }
    var Vr = {};
    function qr(e, t) {
        Vr[e] = t;
    }
    function Ur(e, t) {
        return (
            Object.entries(Vr).forEach(([r, n]) => {
                Object.defineProperty(e, r, {
                    get() {
                        return (...i) => n.bind(t)(...i);
                    },
                    enumerable: !1,
                });
            }),
            e
        );
    }
    var ii = {
            get reactive() {
                return R;
            },
            get release() {
                return L;
            },
            get effect() {
                return D;
            },
            get raw() {
                return st;
            },
            version: "3.14.1",
            flushAndStopDeferringMutations: tr,
            dontAutoEvaluateFunctions: De,
            disableEffectScheduling: Ut,
            startObservingMutations: le,
            stopObservingMutations: ft,
            setReactivityEngine: Wt,
            onAttributeRemoved: Oe,
            onAttributesAdded: Ae,
            closestDataStack: j,
            skipDuringClone: A,
            onlyDuringClone: Or,
            addRootSelector: Le,
            addInitSelector: $e,
            interceptClone: K,
            addScopeToNode: P,
            deferMutations: er,
            mapAttributes: re,
            evaluateLater: x,
            interceptInit: wr,
            setEvaluator: or,
            mergeProxies: F,
            extractProp: kr,
            findClosest: z,
            onElRemoved: ee,
            closestRoot: J,
            destroyTree: vt,
            interceptor: Re,
            transition: Fe,
            setStyles: Y,
            mutateDom: _,
            directive: d,
            entangle: He,
            throttle: Ke,
            debounce: ze,
            evaluate: M,
            initTree: S,
            nextTick: ne,
            prefixed: C,
            prefix: sr,
            plugin: $r,
            magic: y,
            store: Fr,
            start: _r,
            clone: Rr,
            cloneNode: Tr,
            bound: Ir,
            $data: Ce,
            watch: ve,
            walk: T,
            data: qr,
            bind: Kr,
        },
        B = ii;
    function Tt(e, t) {
        let r = Object.create(null),
            n = e.split(",");
        for (let i = 0; i < n.length; i++) r[n[i]] = !0;
        return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i];
    }
    var oi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
    var Ms = Tt(
        oi +
            ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
    );
    var Wr = Object.freeze({}),
        Ns = Object.freeze([]);
    var si = Object.prototype.hasOwnProperty,
        xe = (e, t) => si.call(e, t),
        H = Array.isArray,
        ie = (e) => Gr(e) === "[object Map]";
    var ai = (e) => typeof e == "string",
        Ve = (e) => typeof e == "symbol",
        ye = (e) => e !== null && typeof e == "object";
    var ci = Object.prototype.toString,
        Gr = (e) => ci.call(e),
        Rt = (e) => Gr(e).slice(8, -1);
    var qe = (e) => ai(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
    var Ue = (e) => {
            let t = Object.create(null);
            return (r) => t[r] || (t[r] = e(r));
        },
        li = /-(\w)/g,
        Ds = Ue((e) => e.replace(li, (t, r) => (r ? r.toUpperCase() : ""))),
        ui = /\B([A-Z])/g,
        Ps = Ue((e) => e.replace(ui, "-$1").toLowerCase()),
        Mt = Ue((e) => e.charAt(0).toUpperCase() + e.slice(1)),
        Is = Ue((e) => (e ? `on${Mt(e)}` : "")),
        Nt = (e, t) => e !== t && (e === e || t === t);
    var Dt = new WeakMap(),
        be = [],
        k,
        Z = Symbol("iterate"),
        Pt = Symbol("Map key iterate");
    function fi(e) {
        return e && e._isEffect === !0;
    }
    function en(e, t = Wr) {
        fi(e) && (e = e.raw);
        let r = pi(e, t);
        return t.lazy || r(), r;
    }
    function tn(e) {
        e.active && (rn(e), e.options.onStop && e.options.onStop(), (e.active = !1));
    }
    var di = 0;
    function pi(e, t) {
        let r = function () {
            if (!r.active) return e();
            if (!be.includes(r)) {
                rn(r);
                try {
                    return _i(), be.push(r), (k = r), e();
                } finally {
                    be.pop(), nn(), (k = be[be.length - 1]);
                }
            }
        };
        return (
            (r.id = di++),
            (r.allowRecurse = !!t.allowRecurse),
            (r._isEffect = !0),
            (r.active = !0),
            (r.raw = e),
            (r.deps = []),
            (r.options = t),
            r
        );
    }
    function rn(e) {
        let { deps: t } = e;
        if (t.length) {
            for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0;
        }
    }
    var oe = !0,
        kt = [];
    function mi() {
        kt.push(oe), (oe = !1);
    }
    function _i() {
        kt.push(oe), (oe = !0);
    }
    function nn() {
        let e = kt.pop();
        oe = e === void 0 ? !0 : e;
    }
    function N(e, t, r) {
        if (!oe || k === void 0) return;
        let n = Dt.get(e);
        n || Dt.set(e, (n = new Map()));
        let i = n.get(r);
        i || n.set(r, (i = new Set())),
            i.has(k) ||
                (i.add(k),
                k.deps.push(i),
                k.options.onTrack && k.options.onTrack({ effect: k, target: e, type: t, key: r }));
    }
    function q(e, t, r, n, i, o) {
        let s = Dt.get(e);
        if (!s) return;
        let a = new Set(),
            c = (u) => {
                u &&
                    u.forEach((p) => {
                        (p !== k || p.allowRecurse) && a.add(p);
                    });
            };
        if (t === "clear") s.forEach(c);
        else if (r === "length" && H(e))
            s.forEach((u, p) => {
                (p === "length" || p >= n) && c(u);
            });
        else
            switch ((r !== void 0 && c(s.get(r)), t)) {
                case "add":
                    H(e) ? qe(r) && c(s.get("length")) : (c(s.get(Z)), ie(e) && c(s.get(Pt)));
                    break;
                case "delete":
                    H(e) || (c(s.get(Z)), ie(e) && c(s.get(Pt)));
                    break;
                case "set":
                    ie(e) && c(s.get(Z));
                    break;
            }
        let l = (u) => {
            u.options.onTrigger &&
                u.options.onTrigger({ effect: u, target: e, key: r, type: t, newValue: n, oldValue: i, oldTarget: o }),
                u.options.scheduler ? u.options.scheduler(u) : u();
        };
        a.forEach(l);
    }
    var hi = Tt("__proto__,__v_isRef,__isVue"),
        on = new Set(
            Object.getOwnPropertyNames(Symbol)
                .map((e) => Symbol[e])
                .filter(Ve)
        ),
        gi = sn();
    var xi = sn(!0);
    var Jr = yi();
    function yi() {
        let e = {};
        return (
            ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
                e[t] = function (...r) {
                    let n = h(this);
                    for (let o = 0, s = this.length; o < s; o++) N(n, "get", o + "");
                    let i = n[t](...r);
                    return i === -1 || i === !1 ? n[t](...r.map(h)) : i;
                };
            }),
            ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
                e[t] = function (...r) {
                    mi();
                    let n = h(this)[t].apply(this, r);
                    return nn(), n;
                };
            }),
            e
        );
    }
    function sn(e = !1, t = !1) {
        return function (n, i, o) {
            if (i === "__v_isReactive") return !e;
            if (i === "__v_isReadonly") return e;
            if (i === "__v_raw" && o === (e ? (t ? ki : un) : t ? Ii : ln).get(n)) return n;
            let s = H(n);
            if (!e && s && xe(Jr, i)) return Reflect.get(Jr, i, o);
            let a = Reflect.get(n, i, o);
            return (Ve(i) ? on.has(i) : hi(i)) || (e || N(n, "get", i), t)
                ? a
                : It(a)
                ? !s || !qe(i)
                    ? a.value
                    : a
                : ye(a)
                ? e
                    ? fn(a)
                    : Qe(a)
                : a;
        };
    }
    var bi = wi();
    function wi(e = !1) {
        return function (r, n, i, o) {
            let s = r[n];
            if (!e && ((i = h(i)), (s = h(s)), !H(r) && It(s) && !It(i))) return (s.value = i), !0;
            let a = H(r) && qe(n) ? Number(n) < r.length : xe(r, n),
                c = Reflect.set(r, n, i, o);
            return r === h(o) && (a ? Nt(i, s) && q(r, "set", n, i, s) : q(r, "add", n, i)), c;
        };
    }
    function Ei(e, t) {
        let r = xe(e, t),
            n = e[t],
            i = Reflect.deleteProperty(e, t);
        return i && r && q(e, "delete", t, void 0, n), i;
    }
    function vi(e, t) {
        let r = Reflect.has(e, t);
        return (!Ve(t) || !on.has(t)) && N(e, "has", t), r;
    }
    function Si(e) {
        return N(e, "iterate", H(e) ? "length" : Z), Reflect.ownKeys(e);
    }
    var Ai = { get: gi, set: bi, deleteProperty: Ei, has: vi, ownKeys: Si },
        Oi = {
            get: xi,
            set(e, t) {
                return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
            },
            deleteProperty(e, t) {
                return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
            },
        };
    var Lt = (e) => (ye(e) ? Qe(e) : e),
        $t = (e) => (ye(e) ? fn(e) : e),
        jt = (e) => e,
        Ze = (e) => Reflect.getPrototypeOf(e);
    function We(e, t, r = !1, n = !1) {
        e = e.__v_raw;
        let i = h(e),
            o = h(t);
        t !== o && !r && N(i, "get", t), !r && N(i, "get", o);
        let { has: s } = Ze(i),
            a = n ? jt : r ? $t : Lt;
        if (s.call(i, t)) return a(e.get(t));
        if (s.call(i, o)) return a(e.get(o));
        e !== i && e.get(t);
    }
    function Ge(e, t = !1) {
        let r = this.__v_raw,
            n = h(r),
            i = h(e);
        return e !== i && !t && N(n, "has", e), !t && N(n, "has", i), e === i ? r.has(e) : r.has(e) || r.has(i);
    }
    function Je(e, t = !1) {
        return (e = e.__v_raw), !t && N(h(e), "iterate", Z), Reflect.get(e, "size", e);
    }
    function Yr(e) {
        e = h(e);
        let t = h(this);
        return Ze(t).has.call(t, e) || (t.add(e), q(t, "add", e, e)), this;
    }
    function Xr(e, t) {
        t = h(t);
        let r = h(this),
            { has: n, get: i } = Ze(r),
            o = n.call(r, e);
        o ? cn(r, n, e) : ((e = h(e)), (o = n.call(r, e)));
        let s = i.call(r, e);
        return r.set(e, t), o ? Nt(t, s) && q(r, "set", e, t, s) : q(r, "add", e, t), this;
    }
    function Zr(e) {
        let t = h(this),
            { has: r, get: n } = Ze(t),
            i = r.call(t, e);
        i ? cn(t, r, e) : ((e = h(e)), (i = r.call(t, e)));
        let o = n ? n.call(t, e) : void 0,
            s = t.delete(e);
        return i && q(t, "delete", e, void 0, o), s;
    }
    function Qr() {
        let e = h(this),
            t = e.size !== 0,
            r = ie(e) ? new Map(e) : new Set(e),
            n = e.clear();
        return t && q(e, "clear", void 0, void 0, r), n;
    }
    function Ye(e, t) {
        return function (n, i) {
            let o = this,
                s = o.__v_raw,
                a = h(s),
                c = t ? jt : e ? $t : Lt;
            return !e && N(a, "iterate", Z), s.forEach((l, u) => n.call(i, c(l), c(u), o));
        };
    }
    function Xe(e, t, r) {
        return function (...n) {
            let i = this.__v_raw,
                o = h(i),
                s = ie(o),
                a = e === "entries" || (e === Symbol.iterator && s),
                c = e === "keys" && s,
                l = i[e](...n),
                u = r ? jt : t ? $t : Lt;
            return (
                !t && N(o, "iterate", c ? Pt : Z),
                {
                    next() {
                        let { value: p, done: m } = l.next();
                        return m ? { value: p, done: m } : { value: a ? [u(p[0]), u(p[1])] : u(p), done: m };
                    },
                    [Symbol.iterator]() {
                        return this;
                    },
                }
            );
        };
    }
    function V(e) {
        return function (...t) {
            {
                let r = t[0] ? `on key "${t[0]}" ` : "";
                console.warn(`${Mt(e)} operation ${r}failed: target is readonly.`, h(this));
            }
            return e === "delete" ? !1 : this;
        };
    }
    function Ci() {
        let e = {
                get(o) {
                    return We(this, o);
                },
                get size() {
                    return Je(this);
                },
                has: Ge,
                add: Yr,
                set: Xr,
                delete: Zr,
                clear: Qr,
                forEach: Ye(!1, !1),
            },
            t = {
                get(o) {
                    return We(this, o, !1, !0);
                },
                get size() {
                    return Je(this);
                },
                has: Ge,
                add: Yr,
                set: Xr,
                delete: Zr,
                clear: Qr,
                forEach: Ye(!1, !0),
            },
            r = {
                get(o) {
                    return We(this, o, !0);
                },
                get size() {
                    return Je(this, !0);
                },
                has(o) {
                    return Ge.call(this, o, !0);
                },
                add: V("add"),
                set: V("set"),
                delete: V("delete"),
                clear: V("clear"),
                forEach: Ye(!0, !1),
            },
            n = {
                get(o) {
                    return We(this, o, !0, !0);
                },
                get size() {
                    return Je(this, !0);
                },
                has(o) {
                    return Ge.call(this, o, !0);
                },
                add: V("add"),
                set: V("set"),
                delete: V("delete"),
                clear: V("clear"),
                forEach: Ye(!0, !0),
            };
        return (
            ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
                (e[o] = Xe(o, !1, !1)), (r[o] = Xe(o, !0, !1)), (t[o] = Xe(o, !1, !0)), (n[o] = Xe(o, !0, !0));
            }),
            [e, r, t, n]
        );
    }
    var [Ti, Ri, Mi, Ni] = Ci();
    function an(e, t) {
        let r = t ? (e ? Ni : Mi) : e ? Ri : Ti;
        return (n, i, o) =>
            i === "__v_isReactive"
                ? !e
                : i === "__v_isReadonly"
                ? e
                : i === "__v_raw"
                ? n
                : Reflect.get(xe(r, i) && i in n ? r : n, i, o);
    }
    var Di = { get: an(!1, !1) };
    var Pi = { get: an(!0, !1) };
    function cn(e, t, r) {
        let n = h(r);
        if (n !== r && t.call(e, n)) {
            let i = Rt(e);
            console.warn(
                `Reactive ${i} contains both the raw and reactive versions of the same object${
                    i === "Map" ? " as keys" : ""
                }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
            );
        }
    }
    var ln = new WeakMap(),
        Ii = new WeakMap(),
        un = new WeakMap(),
        ki = new WeakMap();
    function Li(e) {
        switch (e) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0;
        }
    }
    function $i(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : Li(Rt(e));
    }
    function Qe(e) {
        return e && e.__v_isReadonly ? e : dn(e, !1, Ai, Di, ln);
    }
    function fn(e) {
        return dn(e, !0, Oi, Pi, un);
    }
    function dn(e, t, r, n, i) {
        if (!ye(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e;
        if (e.__v_raw && !(t && e.__v_isReactive)) return e;
        let o = i.get(e);
        if (o) return o;
        let s = $i(e);
        if (s === 0) return e;
        let a = new Proxy(e, s === 2 ? n : r);
        return i.set(e, a), a;
    }
    function h(e) {
        return (e && h(e.__v_raw)) || e;
    }
    function It(e) {
        return Boolean(e && e.__v_isRef === !0);
    }
    y("nextTick", () => ne);
    y("dispatch", (e) => G.bind(G, e));
    y("watch", (e, { evaluateLater: t, cleanup: r }) => (n, i) => {
        let o = t(n),
            a = ve(() => {
                let c;
                return o((l) => (c = l)), c;
            }, i);
        r(a);
    });
    y("store", Br);
    y("data", (e) => Ce(e));
    y("root", (e) => J(e));
    y("refs", (e) => (e._x_refs_proxy || (e._x_refs_proxy = F(ji(e))), e._x_refs_proxy));
    function ji(e) {
        let t = [];
        return (
            z(e, (r) => {
                r._x_refs && t.push(r._x_refs);
            }),
            t
        );
    }
    var Ft = {};
    function Bt(e) {
        return Ft[e] || (Ft[e] = 0), ++Ft[e];
    }
    function pn(e, t) {
        return z(e, (r) => {
            if (r._x_ids && r._x_ids[t]) return !0;
        });
    }
    function mn(e, t) {
        e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Bt(t));
    }
    y("id", (e, { cleanup: t }) => (r, n = null) => {
        let i = `${r}${n ? `-${n}` : ""}`;
        return Fi(e, i, t, () => {
            let o = pn(e, r),
                s = o ? o._x_ids[r] : Bt(r);
            return n ? `${r}-${s}-${n}` : `${r}-${s}`;
        });
    });
    K((e, t) => {
        e._x_id && (t._x_id = e._x_id);
    });
    function Fi(e, t, r, n) {
        if ((e._x_id || (e._x_id = {}), e._x_id[t])) return e._x_id[t];
        let i = n();
        return (
            (e._x_id[t] = i),
            r(() => {
                delete e._x_id[t];
            }),
            i
        );
    }
    y("el", (e) => e);
    _n("Focus", "focus", "focus");
    _n("Persist", "persist", "persist");
    function _n(e, t, r) {
        y(t, (n) =>
            E(
                `You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
                n
            )
        );
    }
    d("modelable", (e, { expression: t }, { effect: r, evaluateLater: n, cleanup: i }) => {
        let o = n(t),
            s = () => {
                let u;
                return o((p) => (u = p)), u;
            },
            a = n(`${t} = __placeholder`),
            c = (u) => a(() => {}, { scope: { __placeholder: u } }),
            l = s();
        c(l),
            queueMicrotask(() => {
                if (!e._x_model) return;
                e._x_removeModelListeners.default();
                let u = e._x_model.get,
                    p = e._x_model.set,
                    m = He(
                        {
                            get() {
                                return u();
                            },
                            set(w) {
                                p(w);
                            },
                        },
                        {
                            get() {
                                return s();
                            },
                            set(w) {
                                c(w);
                            },
                        }
                    );
                i(m);
            });
    });
    d("teleport", (e, { modifiers: t, expression: r }, { cleanup: n }) => {
        e.tagName.toLowerCase() !== "template" && E("x-teleport can only be used on a <template> tag", e);
        let i = hn(r),
            o = e.content.cloneNode(!0).firstElementChild;
        (e._x_teleport = o),
            (o._x_teleportBack = e),
            e.setAttribute("data-teleport-template", !0),
            o.setAttribute("data-teleport-target", !0),
            e._x_forwardEvents &&
                e._x_forwardEvents.forEach((a) => {
                    o.addEventListener(a, (c) => {
                        c.stopPropagation(), e.dispatchEvent(new c.constructor(c.type, c));
                    });
                }),
            P(o, {}, e);
        let s = (a, c, l) => {
            l.includes("prepend")
                ? c.parentNode.insertBefore(a, c)
                : l.includes("append")
                ? c.parentNode.insertBefore(a, c.nextSibling)
                : c.appendChild(a);
        };
        _(() => {
            s(o, i, t),
                A(() => {
                    S(o), (o._x_ignore = !0);
                })();
        }),
            (e._x_teleportPutBack = () => {
                let a = hn(r);
                _(() => {
                    s(e._x_teleport, a, t);
                });
            }),
            n(() => o.remove());
    });
    var Bi = document.createElement("div");
    function hn(e) {
        let t = A(
            () => document.querySelector(e),
            () => Bi
        )();
        return t || E(`Cannot find x-teleport element for selector: "${e}"`), t;
    }
    var gn = () => {};
    gn.inline = (e, { modifiers: t }, { cleanup: r }) => {
        t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
            r(() => {
                t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
            });
    };
    d("ignore", gn);
    d(
        "effect",
        A((e, { expression: t }, { effect: r }) => {
            r(x(e, t));
        })
    );
    function se(e, t, r, n) {
        let i = e,
            o = (c) => n(c),
            s = {},
            a = (c, l) => (u) => l(c, u);
        if (
            (r.includes("dot") && (t = zi(t)),
            r.includes("camel") && (t = Ki(t)),
            r.includes("passive") && (s.passive = !0),
            r.includes("capture") && (s.capture = !0),
            r.includes("window") && (i = window),
            r.includes("document") && (i = document),
            r.includes("debounce"))
        ) {
            let c = r[r.indexOf("debounce") + 1] || "invalid-wait",
                l = et(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
            o = ze(o, l);
        }
        if (r.includes("throttle")) {
            let c = r[r.indexOf("throttle") + 1] || "invalid-wait",
                l = et(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
            o = Ke(o, l);
        }
        return (
            r.includes("prevent") &&
                (o = a(o, (c, l) => {
                    l.preventDefault(), c(l);
                })),
            r.includes("stop") &&
                (o = a(o, (c, l) => {
                    l.stopPropagation(), c(l);
                })),
            r.includes("once") &&
                (o = a(o, (c, l) => {
                    c(l), i.removeEventListener(t, o, s);
                })),
            (r.includes("away") || r.includes("outside")) &&
                ((i = document),
                (o = a(o, (c, l) => {
                    e.contains(l.target) ||
                        (l.target.isConnected !== !1 &&
                            ((e.offsetWidth < 1 && e.offsetHeight < 1) || (e._x_isShown !== !1 && c(l))));
                }))),
            r.includes("self") &&
                (o = a(o, (c, l) => {
                    l.target === e && c(l);
                })),
            (Vi(t) || yn(t)) &&
                (o = a(o, (c, l) => {
                    qi(l, r) || c(l);
                })),
            i.addEventListener(t, o, s),
            () => {
                i.removeEventListener(t, o, s);
            }
        );
    }
    function zi(e) {
        return e.replace(/-/g, ".");
    }
    function Ki(e) {
        return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
    }
    function et(e) {
        return !Array.isArray(e) && !isNaN(e);
    }
    function Hi(e) {
        return [" ", "_"].includes(e)
            ? e
            : e
                  .replace(/([a-z])([A-Z])/g, "$1-$2")
                  .replace(/[_\s]/, "-")
                  .toLowerCase();
    }
    function Vi(e) {
        return ["keydown", "keyup"].includes(e);
    }
    function yn(e) {
        return ["contextmenu", "click", "mouse"].some((t) => e.includes(t));
    }
    function qi(e, t) {
        let r = t.filter(
            (o) =>
                ![
                    "window",
                    "document",
                    "prevent",
                    "stop",
                    "once",
                    "capture",
                    "self",
                    "away",
                    "outside",
                    "passive",
                ].includes(o)
        );
        if (r.includes("debounce")) {
            let o = r.indexOf("debounce");
            r.splice(o, et((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
        }
        if (r.includes("throttle")) {
            let o = r.indexOf("throttle");
            r.splice(o, et((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
        }
        if (r.length === 0 || (r.length === 1 && xn(e.key).includes(r[0]))) return !1;
        let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o) => r.includes(o));
        return (
            (r = r.filter((o) => !i.includes(o))),
            !(
                i.length > 0 &&
                i.filter((s) => ((s === "cmd" || s === "super") && (s = "meta"), e[`${s}Key`])).length === i.length &&
                (yn(e.type) || xn(e.key).includes(r[0]))
            )
        );
    }
    function xn(e) {
        if (!e) return [];
        e = Hi(e);
        let t = {
            ctrl: "control",
            slash: "/",
            space: " ",
            spacebar: " ",
            cmd: "meta",
            esc: "escape",
            up: "arrow-up",
            down: "arrow-down",
            left: "arrow-left",
            right: "arrow-right",
            period: ".",
            comma: ",",
            equal: "=",
            minus: "-",
            underscore: "_",
        };
        return (
            (t[e] = e),
            Object.keys(t)
                .map((r) => {
                    if (t[r] === e) return r;
                })
                .filter((r) => r)
        );
    }
    d("model", (e, { modifiers: t, expression: r }, { effect: n, cleanup: i }) => {
        let o = e;
        t.includes("parent") && (o = e.parentNode);
        let s = x(o, r),
            a;
        typeof r == "string"
            ? (a = x(o, `${r} = __placeholder`))
            : typeof r == "function" && typeof r() == "string"
            ? (a = x(o, `${r()} = __placeholder`))
            : (a = () => {});
        let c = () => {
                let m;
                return s((w) => (m = w)), bn(m) ? m.get() : m;
            },
            l = (m) => {
                let w;
                s(($) => (w = $)), bn(w) ? w.set(m) : a(() => {}, { scope: { __placeholder: m } });
            };
        typeof r == "string" &&
            e.type === "radio" &&
            _(() => {
                e.hasAttribute("name") || e.setAttribute("name", r);
            });
        var u =
            e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy")
                ? "change"
                : "input";
        let p = I
            ? () => {}
            : se(e, u, t, (m) => {
                  l(zt(e, t, m, c()));
              });
        if (
            (t.includes("fill") &&
                ([void 0, null, ""].includes(c()) ||
                    (e.type === "checkbox" && Array.isArray(c())) ||
                    (e.tagName.toLowerCase() === "select" && e.multiple)) &&
                l(zt(e, t, { target: e }, c())),
            e._x_removeModelListeners || (e._x_removeModelListeners = {}),
            (e._x_removeModelListeners.default = p),
            i(() => e._x_removeModelListeners.default()),
            e.form)
        ) {
            let m = se(e.form, "reset", [], (w) => {
                ne(() => e._x_model && e._x_model.set(zt(e, t, { target: e }, c())));
            });
            i(() => m());
        }
        (e._x_model = {
            get() {
                return c();
            },
            set(m) {
                l(m);
            },
        }),
            (e._x_forceModelUpdate = (m) => {
                m === void 0 && typeof r == "string" && r.match(/\./) && (m = ""),
                    (window.fromModel = !0),
                    _(() => he(e, "value", m)),
                    delete window.fromModel;
            }),
            n(() => {
                let m = c();
                (t.includes("unintrusive") && document.activeElement.isSameNode(e)) || e._x_forceModelUpdate(m);
            });
    });
    function zt(e, t, r, n) {
        return _(() => {
            if (r instanceof CustomEvent && r.detail !== void 0)
                return r.detail !== null && r.detail !== void 0 ? r.detail : r.target.value;
            if (e.type === "checkbox")
                if (Array.isArray(n)) {
                    let i = null;
                    return (
                        t.includes("number")
                            ? (i = Kt(r.target.value))
                            : t.includes("boolean")
                            ? (i = ge(r.target.value))
                            : (i = r.target.value),
                        r.target.checked ? (n.includes(i) ? n : n.concat([i])) : n.filter((o) => !Ui(o, i))
                    );
                } else return r.target.checked;
            else {
                if (e.tagName.toLowerCase() === "select" && e.multiple)
                    return t.includes("number")
                        ? Array.from(r.target.selectedOptions).map((i) => {
                              let o = i.value || i.text;
                              return Kt(o);
                          })
                        : t.includes("boolean")
                        ? Array.from(r.target.selectedOptions).map((i) => {
                              let o = i.value || i.text;
                              return ge(o);
                          })
                        : Array.from(r.target.selectedOptions).map((i) => i.value || i.text);
                {
                    let i;
                    return (
                        e.type === "radio" ? (r.target.checked ? (i = r.target.value) : (i = n)) : (i = r.target.value),
                        t.includes("number") ? Kt(i) : t.includes("boolean") ? ge(i) : t.includes("trim") ? i.trim() : i
                    );
                }
            }
        });
    }
    function Kt(e) {
        let t = e ? parseFloat(e) : null;
        return Wi(t) ? t : e;
    }
    function Ui(e, t) {
        return e == t;
    }
    function Wi(e) {
        return !Array.isArray(e) && !isNaN(e);
    }
    function bn(e) {
        return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function";
    }
    d("cloak", (e) => queueMicrotask(() => _(() => e.removeAttribute(C("cloak")))));
    $e(() => `[${C("init")}]`);
    d(
        "init",
        A((e, { expression: t }, { evaluate: r }) => (typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)))
    );
    d("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
        let i = n(t);
        r(() => {
            i((o) => {
                _(() => {
                    e.textContent = o;
                });
            });
        });
    });
    d("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
        let i = n(t);
        r(() => {
            i((o) => {
                _(() => {
                    (e.innerHTML = o), (e._x_ignoreSelf = !0), S(e), delete e._x_ignoreSelf;
                });
            });
        });
    });
    re(Ie(":", ke(C("bind:"))));
    var wn = (e, { value: t, modifiers: r, expression: n, original: i }, { effect: o, cleanup: s }) => {
        if (!t) {
            let c = {};
            Hr(c),
                x(e, n)(
                    (u) => {
                        Ct(e, u, i);
                    },
                    { scope: c }
                );
            return;
        }
        if (t === "key") return Gi(e, n);
        if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract) return;
        let a = x(e, n);
        o(() =>
            a((c) => {
                c === void 0 && typeof n == "string" && n.match(/\./) && (c = ""), _(() => he(e, t, c, r));
            })
        ),
            s(() => {
                e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedStyles && e._x_undoAddedStyles();
            });
    };
    wn.inline = (e, { value: t, modifiers: r, expression: n }) => {
        t &&
            (e._x_inlineBindings || (e._x_inlineBindings = {}),
            (e._x_inlineBindings[t] = { expression: n, extract: !1 }));
    };
    d("bind", wn);
    function Gi(e, t) {
        e._x_keyExpression = t;
    }
    Le(() => `[${C("data")}]`);
    d("data", (e, { expression: t }, { cleanup: r }) => {
        if (Ji(e)) return;
        t = t === "" ? "{}" : t;
        let n = {};
        ue(n, e);
        let i = {};
        Ur(i, n);
        let o = M(e, t, { scope: i });
        (o === void 0 || o === !0) && (o = {}), ue(o, e);
        let s = R(o);
        Te(s);
        let a = P(e, s);
        s.init && M(e, s.init),
            r(() => {
                s.destroy && M(e, s.destroy), a();
            });
    });
    K((e, t) => {
        e._x_dataStack && ((t._x_dataStack = e._x_dataStack), t.setAttribute("data-has-alpine-state", !0));
    });
    function Ji(e) {
        return I ? (Be ? !0 : e.hasAttribute("data-has-alpine-state")) : !1;
    }
    d("show", (e, { modifiers: t, expression: r }, { effect: n }) => {
        let i = x(e, r);
        e._x_doHide ||
            (e._x_doHide = () => {
                _(() => {
                    e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0);
                });
            }),
            e._x_doShow ||
                (e._x_doShow = () => {
                    _(() => {
                        e.style.length === 1 && e.style.display === "none"
                            ? e.removeAttribute("style")
                            : e.style.removeProperty("display");
                    });
                });
        let o = () => {
                e._x_doHide(), (e._x_isShown = !1);
            },
            s = () => {
                e._x_doShow(), (e._x_isShown = !0);
            },
            a = () => setTimeout(s),
            c = me(
                (p) => (p ? s() : o()),
                (p) => {
                    typeof e._x_toggleAndCascadeWithTransitions == "function"
                        ? e._x_toggleAndCascadeWithTransitions(e, p, s, o)
                        : p
                        ? a()
                        : o();
                }
            ),
            l,
            u = !0;
        n(() =>
            i((p) => {
                (!u && p === l) || (t.includes("immediate") && (p ? a() : o()), c(p), (l = p), (u = !1));
            })
        );
    });
    d("for", (e, { expression: t }, { effect: r, cleanup: n }) => {
        let i = Xi(t),
            o = x(e, i.items),
            s = x(e, e._x_keyExpression || "index");
        (e._x_prevKeys = []),
            (e._x_lookup = {}),
            r(() => Yi(e, i, o, s)),
            n(() => {
                Object.values(e._x_lookup).forEach((a) => a.remove()), delete e._x_prevKeys, delete e._x_lookup;
            });
    });
    function Yi(e, t, r, n) {
        let i = (s) => typeof s == "object" && !Array.isArray(s),
            o = e;
        r((s) => {
            Zi(s) && s >= 0 && (s = Array.from(Array(s).keys(), (f) => f + 1)), s === void 0 && (s = []);
            let a = e._x_lookup,
                c = e._x_prevKeys,
                l = [],
                u = [];
            if (i(s))
                s = Object.entries(s).map(([f, g]) => {
                    let b = En(t, g, f, s);
                    n(
                        (v) => {
                            u.includes(v) && E("Duplicate key on x-for", e), u.push(v);
                        },
                        { scope: { index: f, ...b } }
                    ),
                        l.push(b);
                });
            else
                for (let f = 0; f < s.length; f++) {
                    let g = En(t, s[f], f, s);
                    n(
                        (b) => {
                            u.includes(b) && E("Duplicate key on x-for", e), u.push(b);
                        },
                        { scope: { index: f, ...g } }
                    ),
                        l.push(g);
                }
            let p = [],
                m = [],
                w = [],
                $ = [];
            for (let f = 0; f < c.length; f++) {
                let g = c[f];
                u.indexOf(g) === -1 && w.push(g);
            }
            c = c.filter((f) => !w.includes(f));
            let we = "template";
            for (let f = 0; f < u.length; f++) {
                let g = u[f],
                    b = c.indexOf(g);
                if (b === -1) c.splice(f, 0, g), p.push([we, f]);
                else if (b !== f) {
                    let v = c.splice(f, 1)[0],
                        O = c.splice(b - 1, 1)[0];
                    c.splice(f, 0, O), c.splice(b, 0, v), m.push([v, O]);
                } else $.push(g);
                we = g;
            }
            for (let f = 0; f < w.length; f++) {
                let g = w[f];
                a[g]._x_effects && a[g]._x_effects.forEach(Ee), a[g].remove(), (a[g] = null), delete a[g];
            }
            for (let f = 0; f < m.length; f++) {
                let [g, b] = m[f],
                    v = a[g],
                    O = a[b],
                    Q = document.createElement("div");
                _(() => {
                    O || E('x-for ":key" is undefined or invalid', o, b, a),
                        O.after(Q),
                        v.after(O),
                        O._x_currentIfEl && O.after(O._x_currentIfEl),
                        Q.before(v),
                        v._x_currentIfEl && v.after(v._x_currentIfEl),
                        Q.remove();
                }),
                    O._x_refreshXForScope(l[u.indexOf(b)]);
            }
            for (let f = 0; f < p.length; f++) {
                let [g, b] = p[f],
                    v = g === "template" ? o : a[g];
                v._x_currentIfEl && (v = v._x_currentIfEl);
                let O = l[b],
                    Q = u[b],
                    ae = document.importNode(o.content, !0).firstElementChild,
                    Vt = R(O);
                P(ae, Vt, o),
                    (ae._x_refreshXForScope = (Sn) => {
                        Object.entries(Sn).forEach(([An, On]) => {
                            Vt[An] = On;
                        });
                    }),
                    _(() => {
                        v.after(ae), A(() => S(ae))();
                    }),
                    typeof Q == "object" && E("x-for key cannot be an object, it must be a string or an integer", o),
                    (a[Q] = ae);
            }
            for (let f = 0; f < $.length; f++) a[$[f]]._x_refreshXForScope(l[u.indexOf($[f])]);
            o._x_prevKeys = u;
        });
    }
    function Xi(e) {
        let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
            r = /^\s*\(|\)\s*$/g,
            n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
            i = e.match(n);
        if (!i) return;
        let o = {};
        o.items = i[2].trim();
        let s = i[1].replace(r, "").trim(),
            a = s.match(t);
        return (
            a
                ? ((o.item = s.replace(t, "").trim()), (o.index = a[1].trim()), a[2] && (o.collection = a[2].trim()))
                : (o.item = s),
            o
        );
    }
    function En(e, t, r, n) {
        let i = {};
        return (
            /^\[.*\]$/.test(e.item) && Array.isArray(t)
                ? e.item
                      .replace("[", "")
                      .replace("]", "")
                      .split(",")
                      .map((s) => s.trim())
                      .forEach((s, a) => {
                          i[s] = t[a];
                      })
                : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
                ? e.item
                      .replace("{", "")
                      .replace("}", "")
                      .split(",")
                      .map((s) => s.trim())
                      .forEach((s) => {
                          i[s] = t[s];
                      })
                : (i[e.item] = t),
            e.index && (i[e.index] = r),
            e.collection && (i[e.collection] = n),
            i
        );
    }
    function Zi(e) {
        return !Array.isArray(e) && !isNaN(e);
    }
    function vn() {}
    vn.inline = (e, { expression: t }, { cleanup: r }) => {
        let n = J(e);
        n._x_refs || (n._x_refs = {}), (n._x_refs[t] = e), r(() => delete n._x_refs[t]);
    };
    d("ref", vn);
    d("if", (e, { expression: t }, { effect: r, cleanup: n }) => {
        e.tagName.toLowerCase() !== "template" && E("x-if can only be used on a <template> tag", e);
        let i = x(e, t),
            o = () => {
                if (e._x_currentIfEl) return e._x_currentIfEl;
                let a = e.content.cloneNode(!0).firstElementChild;
                return (
                    P(a, {}, e),
                    _(() => {
                        e.after(a), A(() => S(a))();
                    }),
                    (e._x_currentIfEl = a),
                    (e._x_undoIf = () => {
                        T(a, (c) => {
                            c._x_effects && c._x_effects.forEach(Ee);
                        }),
                            a.remove(),
                            delete e._x_currentIfEl;
                    }),
                    a
                );
            },
            s = () => {
                e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
            };
        r(() =>
            i((a) => {
                a ? o() : s();
            })
        ),
            n(() => e._x_undoIf && e._x_undoIf());
    });
    d("id", (e, { expression: t }, { evaluate: r }) => {
        r(t).forEach((i) => mn(e, i));
    });
    K((e, t) => {
        e._x_ids && (t._x_ids = e._x_ids);
    });
    re(Ie("@", ke(C("on:"))));
    d(
        "on",
        A((e, { value: t, modifiers: r, expression: n }, { cleanup: i }) => {
            let o = n ? x(e, n) : () => {};
            e.tagName.toLowerCase() === "template" &&
                (e._x_forwardEvents || (e._x_forwardEvents = []),
                e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
            let s = se(e, t, r, (a) => {
                o(() => {}, { scope: { $event: a }, params: [a] });
            });
            i(() => s());
        })
    );
    tt("Collapse", "collapse", "collapse");
    tt("Intersect", "intersect", "intersect");
    tt("Focus", "trap", "focus");
    tt("Mask", "mask", "mask");
    function tt(e, t, r) {
        d(t, (n) =>
            E(
                `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
                n
            )
        );
    }
    B.setEvaluator(gt);
    B.setReactivityEngine({ reactive: Qe, effect: en, release: tn, raw: h });
    var Ht = B;
    window.Alpine = Ht;
    queueMicrotask(() => {
        Ht.start();
    });
})();

/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Glide = e());
})(this, function () {
    "use strict";
    function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
                (i = i.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, i);
        }
        return n;
    }
    function e(e) {
        for (var n = 1; n < arguments.length; n++) {
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2
                ? t(Object(i), !0).forEach(function (t) {
                      s(e, t, i[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                : t(Object(i)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                  });
        }
        return e;
    }
    function n(t) {
        return (
            (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                      }),
            n(t)
        );
    }
    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
        }
    }
    function o(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), t;
    }
    function s(t, e, n) {
        return (
            e in t
                ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (t[e] = n),
            t
        );
    }
    function u(t) {
        return (
            (u = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            u(t)
        );
    }
    function a(t, e) {
        return (
            (a =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                }),
            a(t, e)
        );
    }
    function c(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return (function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        })(t);
    }
    function l(t) {
        var e = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (t) {
                return !1;
            }
        })();
        return function () {
            var n,
                i = u(t);
            if (e) {
                var r = u(this).constructor;
                n = Reflect.construct(i, arguments, r);
            } else n = i.apply(this, arguments);
            return c(this, n);
        };
    }
    function f(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); );
        return t;
    }
    function d() {
        return (
            (d =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get
                    : function (t, e, n) {
                          var i = f(t, e);
                          if (i) {
                              var r = Object.getOwnPropertyDescriptor(i, e);
                              return r.get ? r.get.call(arguments.length < 3 ? t : n) : r.value;
                          }
                      }),
            d.apply(this, arguments)
        );
    }
    var h = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perSwipe: "",
        touchRatio: 0.5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        waitForTransition: !0,
        throttle: 10,
        direction: "ltr",
        peek: 0,
        cloningRatio: 1,
        breakpoints: {},
        classes: {
            swipeable: "glide--swipeable",
            dragging: "glide--dragging",
            direction: { ltr: "glide--ltr", rtl: "glide--rtl" },
            type: { slider: "glide--slider", carousel: "glide--carousel" },
            slide: { clone: "glide__slide--clone", active: "glide__slide--active" },
            arrow: { disabled: "glide__arrow--disabled" },
            nav: { active: "glide__bullet--active" },
        },
    };
    function v(t) {
        console.error("[Glide warn]: ".concat(t));
    }
    function p(t) {
        return parseInt(t);
    }
    function m(t) {
        return "string" == typeof t;
    }
    function g(t) {
        var e = n(t);
        return "function" === e || ("object" === e && !!t);
    }
    function y(t) {
        return "function" == typeof t;
    }
    function b(t) {
        return void 0 === t;
    }
    function w(t) {
        return t.constructor === Array;
    }
    function _(t, e, n) {
        var i = {};
        for (var r in e) y(e[r]) ? (i[r] = e[r](t, i, n)) : v("Extension must be a function");
        for (var o in i) y(i[o].mount) && i[o].mount();
        return i;
    }
    function k(t, e, n) {
        Object.defineProperty(t, e, n);
    }
    function S(t, n) {
        var i = Object.assign({}, t, n);
        if (n.hasOwnProperty("classes")) {
            i.classes = Object.assign({}, t.classes, n.classes);
            ["direction", "type", "slide", "arrow", "nav"].forEach(function (r) {
                n.classes.hasOwnProperty(r) && (i.classes[r] = e(e({}, t.classes[r]), n.classes[r]));
            });
        }
        return n.hasOwnProperty("breakpoints") && (i.breakpoints = Object.assign({}, t.breakpoints, n.breakpoints)), i;
    }
    var O = (function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t), (this.events = e), (this.hop = e.hasOwnProperty);
            }
            return (
                o(t, [
                    {
                        key: "on",
                        value: function (t, e) {
                            if (!w(t)) {
                                this.hop.call(this.events, t) || (this.events[t] = []);
                                var n = this.events[t].push(e) - 1;
                                return {
                                    remove: function () {
                                        delete this.events[t][n];
                                    },
                                };
                            }
                            for (var i = 0; i < t.length; i++) this.on(t[i], e);
                        },
                    },
                    {
                        key: "emit",
                        value: function (t, e) {
                            if (w(t)) for (var n = 0; n < t.length; n++) this.emit(t[n], e);
                            else
                                this.hop.call(this.events, t) &&
                                    this.events[t].forEach(function (t) {
                                        t(e || {});
                                    });
                        },
                    },
                ]),
                t
            );
        })(),
        H = (function () {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, t),
                    (this._c = {}),
                    (this._t = []),
                    (this._e = new O()),
                    (this.disabled = !1),
                    (this.selector = e),
                    (this.settings = S(h, n)),
                    (this.index = this.settings.startAt);
            }
            return (
                o(t, [
                    {
                        key: "mount",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return (
                                this._e.emit("mount.before"),
                                g(t) ? (this._c = _(this, t, this._e)) : v("You need to provide a object on `mount()`"),
                                this._e.emit("mount.after"),
                                this
                            );
                        },
                    },
                    {
                        key: "mutate",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            return w(t) ? (this._t = t) : v("You need to provide a array on `mutate()`"), this;
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return (
                                (this.settings = S(this.settings, t)),
                                t.hasOwnProperty("startAt") && (this.index = t.startAt),
                                this._e.emit("update"),
                                this
                            );
                        },
                    },
                    {
                        key: "go",
                        value: function (t) {
                            return this._c.Run.make(t), this;
                        },
                    },
                    {
                        key: "move",
                        value: function (t) {
                            return this._c.Transition.disable(), this._c.Move.make(t), this;
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return this._e.emit("destroy"), this;
                        },
                    },
                    {
                        key: "play",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return t && (this.settings.autoplay = t), this._e.emit("play"), this;
                        },
                    },
                    {
                        key: "pause",
                        value: function () {
                            return this._e.emit("pause"), this;
                        },
                    },
                    {
                        key: "disable",
                        value: function () {
                            return (this.disabled = !0), this;
                        },
                    },
                    {
                        key: "enable",
                        value: function () {
                            return (this.disabled = !1), this;
                        },
                    },
                    {
                        key: "on",
                        value: function (t, e) {
                            return this._e.on(t, e), this;
                        },
                    },
                    {
                        key: "isType",
                        value: function (t) {
                            return this.settings.type === t;
                        },
                    },
                    {
                        key: "settings",
                        get: function () {
                            return this._o;
                        },
                        set: function (t) {
                            g(t) ? (this._o = t) : v("Options must be an `object` instance.");
                        },
                    },
                    {
                        key: "index",
                        get: function () {
                            return this._i;
                        },
                        set: function (t) {
                            this._i = p(t);
                        },
                    },
                    {
                        key: "type",
                        get: function () {
                            return this.settings.type;
                        },
                    },
                    {
                        key: "disabled",
                        get: function () {
                            return this._d;
                        },
                        set: function (t) {
                            this._d = !!t;
                        },
                    },
                ]),
                t
            );
        })();
    function T() {
        return new Date().getTime();
    }
    function x(t, e) {
        var n,
            i,
            r,
            o,
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            u = 0,
            a = function () {
                (u = !1 === s.leading ? 0 : T()), (n = null), (o = t.apply(i, r)), n || (i = r = null);
            },
            c = function () {
                var c = T();
                u || !1 !== s.leading || (u = c);
                var l = e - (c - u);
                return (
                    (i = this),
                    (r = arguments),
                    l <= 0 || l > e
                        ? (n && (clearTimeout(n), (n = null)), (u = c), (o = t.apply(i, r)), n || (i = r = null))
                        : n || !1 === s.trailing || (n = setTimeout(a, l)),
                    o
                );
            };
        return (
            (c.cancel = function () {
                clearTimeout(n), (u = 0), (n = i = r = null);
            }),
            c
        );
    }
    var j = { ltr: ["marginLeft", "marginRight"], rtl: ["marginRight", "marginLeft"] };
    function A(t) {
        if (t && t.parentNode) {
            for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
        return [];
    }
    function P(t) {
        return Array.prototype.slice.call(t);
    }
    var R = (function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, t), (this.listeners = e);
        }
        return (
            o(t, [
                {
                    key: "on",
                    value: function (t, e, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        m(t) && (t = [t]);
                        for (var r = 0; r < t.length; r++)
                            (this.listeners[t[r]] = n), e.addEventListener(t[r], this.listeners[t[r]], i);
                    },
                },
                {
                    key: "off",
                    value: function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        m(t) && (t = [t]);
                        for (var i = 0; i < t.length; i++) e.removeEventListener(t[i], this.listeners[t[i]], n);
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        delete this.listeners;
                    },
                },
            ]),
            t
        );
    })();
    var E = ["ltr", "rtl"],
        L = { ">": "<", "<": ">", "=": "=" };
    function z(t, e) {
        return {
            modify: function (t) {
                return e.Direction.is("rtl") ? -t : t;
            },
        };
    }
    function C(t, e) {
        return {
            modify: function (t) {
                var n = Math.floor(t / e.Sizes.slideWidth);
                return t + e.Gaps.value * n;
            },
        };
    }
    function M(t, e) {
        return {
            modify: function (t) {
                return t + e.Clones.grow / 2;
            },
        };
    }
    function D(t, e) {
        return {
            modify: function (n) {
                if (t.settings.focusAt >= 0) {
                    var i = e.Peek.value;
                    return g(i) ? n - i.before : n - i;
                }
                return n;
            },
        };
    }
    function B(t, e) {
        return {
            modify: function (n) {
                var i = e.Gaps.value,
                    r = e.Sizes.width,
                    o = t.settings.focusAt,
                    s = e.Sizes.slideWidth;
                return "center" === o ? n - (r / 2 - s / 2) : n - s * o - i * o;
            },
        };
    }
    var W = !1;
    try {
        var q = Object.defineProperty({}, "passive", {
            get: function () {
                W = !0;
            },
        });
        window.addEventListener("testPassive", null, q), window.removeEventListener("testPassive", null, q);
    } catch (t) {}
    var I = W,
        V = ["touchstart", "mousedown"],
        G = ["touchmove", "mousemove"],
        F = ["touchend", "touchcancel", "mouseup", "mouseleave"],
        N = ["mousedown", "mousemove", "mouseup", "mouseleave"];
    var Y = '[data-glide-el^="controls"]',
        X = "".concat(Y, ' [data-glide-dir*="<"]'),
        K = "".concat(Y, ' [data-glide-dir*=">"]');
    function J(t) {
        return g(t)
            ? ((e = t),
              Object.keys(e)
                  .sort()
                  .reduce(function (t, n) {
                      return (t[n] = e[n]), t[n], t;
                  }, {}))
            : (v("Breakpoints option must be an object"), {});
        var e;
    }
    var Q = {
            Html: function (t, e, n) {
                var i = {
                    mount: function () {
                        (this.root = t.selector),
                            (this.track = this.root.querySelector('[data-glide-el="track"]')),
                            this.collectSlides();
                    },
                    collectSlides: function () {
                        this.slides = P(this.wrapper.children).filter(function (e) {
                            return !e.classList.contains(t.settings.classes.slide.clone);
                        });
                    },
                };
                return (
                    k(i, "root", {
                        get: function () {
                            return i._r;
                        },
                        set: function (t) {
                            m(t) && (t = document.querySelector(t)),
                                null !== t ? (i._r = t) : v("Root element must be a existing Html node");
                        },
                    }),
                    k(i, "track", {
                        get: function () {
                            return i._t;
                        },
                        set: function (t) {
                            i._t = t;
                        },
                    }),
                    k(i, "wrapper", {
                        get: function () {
                            return i.track.children[0];
                        },
                    }),
                    n.on("update", function () {
                        i.collectSlides();
                    }),
                    i
                );
            },
            Translate: function (t, e, n) {
                var i = {
                    set: function (n) {
                        var i = (function (t, e, n) {
                                var i = [C, M, D, B].concat(t._t, [z]);
                                return {
                                    mutate: function (r) {
                                        for (var o = 0; o < i.length; o++) {
                                            var s = i[o];
                                            y(s) && y(s().modify)
                                                ? (r = s(t, e, n).modify(r))
                                                : v(
                                                      "Transformer should be a function that returns an object with `modify()` method"
                                                  );
                                        }
                                        return r;
                                    },
                                };
                            })(t, e).mutate(n),
                            r = "translate3d(".concat(-1 * i, "px, 0px, 0px)");
                        (e.Html.wrapper.style.mozTransform = r),
                            (e.Html.wrapper.style.webkitTransform = r),
                            (e.Html.wrapper.style.transform = r);
                    },
                    remove: function () {
                        e.Html.wrapper.style.transform = "";
                    },
                    getStartIndex: function () {
                        var n = e.Sizes.length,
                            i = t.index,
                            r = t.settings.perView;
                        return e.Run.isOffset(">") || e.Run.isOffset("|>") ? n + (i - r) : (i + r) % n;
                    },
                    getTravelDistance: function () {
                        var n = e.Sizes.slideWidth * t.settings.perView;
                        return e.Run.isOffset(">") || e.Run.isOffset("|>") ? -1 * n : n;
                    },
                };
                return (
                    n.on("move", function (r) {
                        if (!t.isType("carousel") || !e.Run.isOffset()) return i.set(r.movement);
                        e.Transition.after(function () {
                            n.emit("translate.jump"), i.set(e.Sizes.slideWidth * t.index);
                        });
                        var o = e.Sizes.slideWidth * e.Translate.getStartIndex();
                        return i.set(o - e.Translate.getTravelDistance());
                    }),
                    n.on("destroy", function () {
                        i.remove();
                    }),
                    i
                );
            },
            Transition: function (t, e, n) {
                var i = !1,
                    r = {
                        compose: function (e) {
                            var n = t.settings;
                            return i
                                ? "".concat(e, " 0ms ").concat(n.animationTimingFunc)
                                : "".concat(e, " ").concat(this.duration, "ms ").concat(n.animationTimingFunc);
                        },
                        set: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                            e.Html.wrapper.style.transition = this.compose(t);
                        },
                        remove: function () {
                            e.Html.wrapper.style.transition = "";
                        },
                        after: function (t) {
                            setTimeout(function () {
                                t();
                            }, this.duration);
                        },
                        enable: function () {
                            (i = !1), this.set();
                        },
                        disable: function () {
                            (i = !0), this.set();
                        },
                    };
                return (
                    k(r, "duration", {
                        get: function () {
                            var n = t.settings;
                            return t.isType("slider") && e.Run.offset ? n.rewindDuration : n.animationDuration;
                        },
                    }),
                    n.on("move", function () {
                        r.set();
                    }),
                    n.on(["build.before", "resize", "translate.jump"], function () {
                        r.disable();
                    }),
                    n.on("run", function () {
                        r.enable();
                    }),
                    n.on("destroy", function () {
                        r.remove();
                    }),
                    r
                );
            },
            Direction: function (t, e, n) {
                var i = {
                    mount: function () {
                        this.value = t.settings.direction;
                    },
                    resolve: function (t) {
                        var e = t.slice(0, 1);
                        return this.is("rtl") ? t.split(e).join(L[e]) : t;
                    },
                    is: function (t) {
                        return this.value === t;
                    },
                    addClass: function () {
                        e.Html.root.classList.add(t.settings.classes.direction[this.value]);
                    },
                    removeClass: function () {
                        e.Html.root.classList.remove(t.settings.classes.direction[this.value]);
                    },
                };
                return (
                    k(i, "value", {
                        get: function () {
                            return i._v;
                        },
                        set: function (t) {
                            E.indexOf(t) > -1 ? (i._v = t) : v("Direction value must be `ltr` or `rtl`");
                        },
                    }),
                    n.on(["destroy", "update"], function () {
                        i.removeClass();
                    }),
                    n.on("update", function () {
                        i.mount();
                    }),
                    n.on(["build.before", "update"], function () {
                        i.addClass();
                    }),
                    i
                );
            },
            Peek: function (t, e, n) {
                var i = {
                    mount: function () {
                        this.value = t.settings.peek;
                    },
                };
                return (
                    k(i, "value", {
                        get: function () {
                            return i._v;
                        },
                        set: function (t) {
                            g(t) ? ((t.before = p(t.before)), (t.after = p(t.after))) : (t = p(t)), (i._v = t);
                        },
                    }),
                    k(i, "reductor", {
                        get: function () {
                            var e = i.value,
                                n = t.settings.perView;
                            return g(e) ? e.before / n + e.after / n : (2 * e) / n;
                        },
                    }),
                    n.on(["resize", "update"], function () {
                        i.mount();
                    }),
                    i
                );
            },
            Sizes: function (t, e, n) {
                var i = {
                    setupSlides: function () {
                        for (var t = "".concat(this.slideWidth, "px"), n = e.Html.slides, i = 0; i < n.length; i++)
                            n[i].style.width = t;
                    },
                    setupWrapper: function () {
                        e.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
                    },
                    remove: function () {
                        for (var t = e.Html.slides, n = 0; n < t.length; n++) t[n].style.width = "";
                        e.Html.wrapper.style.width = "";
                    },
                };
                return (
                    k(i, "length", {
                        get: function () {
                            return e.Html.slides.length;
                        },
                    }),
                    k(i, "width", {
                        get: function () {
                            return e.Html.track.offsetWidth;
                        },
                    }),
                    k(i, "wrapperSize", {
                        get: function () {
                            return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow;
                        },
                    }),
                    k(i, "slideWidth", {
                        get: function () {
                            return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor;
                        },
                    }),
                    n.on(["build.before", "resize", "update"], function () {
                        i.setupSlides(), i.setupWrapper();
                    }),
                    n.on("destroy", function () {
                        i.remove();
                    }),
                    i
                );
            },
            Gaps: function (t, e, n) {
                var i = {
                    apply: function (t) {
                        for (var n = 0, i = t.length; n < i; n++) {
                            var r = t[n].style,
                                o = e.Direction.value;
                            (r[j[o][0]] = 0 !== n ? "".concat(this.value / 2, "px") : ""),
                                n !== t.length - 1 ? (r[j[o][1]] = "".concat(this.value / 2, "px")) : (r[j[o][1]] = "");
                        }
                    },
                    remove: function (t) {
                        for (var e = 0, n = t.length; e < n; e++) {
                            var i = t[e].style;
                            (i.marginLeft = ""), (i.marginRight = "");
                        }
                    },
                };
                return (
                    k(i, "value", {
                        get: function () {
                            return p(t.settings.gap);
                        },
                    }),
                    k(i, "grow", {
                        get: function () {
                            return i.value * e.Sizes.length;
                        },
                    }),
                    k(i, "reductor", {
                        get: function () {
                            var e = t.settings.perView;
                            return (i.value * (e - 1)) / e;
                        },
                    }),
                    n.on(
                        ["build.after", "update"],
                        x(function () {
                            i.apply(e.Html.wrapper.children);
                        }, 30)
                    ),
                    n.on("destroy", function () {
                        i.remove(e.Html.wrapper.children);
                    }),
                    i
                );
            },
            Move: function (t, e, n) {
                var i = {
                    mount: function () {
                        this._o = 0;
                    },
                    make: function () {
                        var t = this,
                            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        (this.offset = i),
                            n.emit("move", { movement: this.value }),
                            e.Transition.after(function () {
                                n.emit("move.after", { movement: t.value });
                            });
                    },
                };
                return (
                    k(i, "offset", {
                        get: function () {
                            return i._o;
                        },
                        set: function (t) {
                            i._o = b(t) ? 0 : p(t);
                        },
                    }),
                    k(i, "translate", {
                        get: function () {
                            return e.Sizes.slideWidth * t.index;
                        },
                    }),
                    k(i, "value", {
                        get: function () {
                            var t = this.offset,
                                n = this.translate;
                            return e.Direction.is("rtl") ? n + t : n - t;
                        },
                    }),
                    n.on(["build.before", "run"], function () {
                        i.make();
                    }),
                    i
                );
            },
            Clones: function (t, e, n) {
                var i = {
                    mount: function () {
                        (this.items = []), t.isType("carousel") && (this.items = this.collect());
                    },
                    collect: function () {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            i = e.Html.slides,
                            r = t.settings,
                            o = r.perView,
                            s = r.classes,
                            u = r.cloningRatio;
                        if (i.length > 0)
                            for (
                                var a = +!!t.settings.peek,
                                    c = o + a + Math.round(o / 2),
                                    l = i.slice(0, c).reverse(),
                                    f = i.slice(-1 * c),
                                    d = 0;
                                d < Math.max(u, Math.floor(o / i.length));
                                d++
                            ) {
                                for (var h = 0; h < l.length; h++) {
                                    var v = l[h].cloneNode(!0);
                                    v.classList.add(s.slide.clone), n.push(v);
                                }
                                for (var p = 0; p < f.length; p++) {
                                    var m = f[p].cloneNode(!0);
                                    m.classList.add(s.slide.clone), n.unshift(m);
                                }
                            }
                        return n;
                    },
                    append: function () {
                        for (
                            var t = this.items,
                                n = e.Html,
                                i = n.wrapper,
                                r = n.slides,
                                o = Math.floor(t.length / 2),
                                s = t.slice(0, o).reverse(),
                                u = t.slice(-1 * o).reverse(),
                                a = "".concat(e.Sizes.slideWidth, "px"),
                                c = 0;
                            c < u.length;
                            c++
                        )
                            i.appendChild(u[c]);
                        for (var l = 0; l < s.length; l++) i.insertBefore(s[l], r[0]);
                        for (var f = 0; f < t.length; f++) t[f].style.width = a;
                    },
                    remove: function () {
                        for (var t = this.items, n = 0; n < t.length; n++) e.Html.wrapper.removeChild(t[n]);
                    },
                };
                return (
                    k(i, "grow", {
                        get: function () {
                            return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length;
                        },
                    }),
                    n.on("update", function () {
                        i.remove(), i.mount(), i.append();
                    }),
                    n.on("build.before", function () {
                        t.isType("carousel") && i.append();
                    }),
                    n.on("destroy", function () {
                        i.remove();
                    }),
                    i
                );
            },
            Resize: function (t, e, n) {
                var i = new R(),
                    r = {
                        mount: function () {
                            this.bind();
                        },
                        bind: function () {
                            i.on(
                                "resize",
                                window,
                                x(function () {
                                    n.emit("resize");
                                }, t.settings.throttle)
                            );
                        },
                        unbind: function () {
                            i.off("resize", window);
                        },
                    };
                return (
                    n.on("destroy", function () {
                        r.unbind(), i.destroy();
                    }),
                    r
                );
            },
            Build: function (t, e, n) {
                var i = {
                    mount: function () {
                        n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after");
                    },
                    typeClass: function () {
                        e.Html.root.classList.add(t.settings.classes.type[t.settings.type]);
                    },
                    activeClass: function () {
                        var n = t.settings.classes,
                            i = e.Html.slides[t.index];
                        i &&
                            (i.classList.add(n.slide.active),
                            A(i).forEach(function (t) {
                                t.classList.remove(n.slide.active);
                            }));
                    },
                    removeClasses: function () {
                        var n = t.settings.classes,
                            i = n.type,
                            r = n.slide;
                        e.Html.root.classList.remove(i[t.settings.type]),
                            e.Html.slides.forEach(function (t) {
                                t.classList.remove(r.active);
                            });
                    },
                };
                return (
                    n.on(["destroy", "update"], function () {
                        i.removeClasses();
                    }),
                    n.on(["resize", "update"], function () {
                        i.mount();
                    }),
                    n.on("move.after", function () {
                        i.activeClass();
                    }),
                    i
                );
            },
            Run: function (t, e, n) {
                var i = {
                    mount: function () {
                        this._o = !1;
                    },
                    make: function (i) {
                        var r = this;
                        t.disabled ||
                            (!t.settings.waitForTransition || t.disable(),
                            (this.move = i),
                            n.emit("run.before", this.move),
                            this.calculate(),
                            n.emit("run", this.move),
                            e.Transition.after(function () {
                                r.isStart() && n.emit("run.start", r.move),
                                    r.isEnd() && n.emit("run.end", r.move),
                                    r.isOffset() && ((r._o = !1), n.emit("run.offset", r.move)),
                                    n.emit("run.after", r.move),
                                    t.enable();
                            }));
                    },
                    calculate: function () {
                        var e = this.move,
                            n = this.length,
                            r = e.steps,
                            o = e.direction,
                            s = 1;
                        if ("=" === o) return t.settings.bound && p(r) > n ? void (t.index = n) : void (t.index = r);
                        if (">" !== o || ">" !== r)
                            if ("<" !== o || "<" !== r) {
                                if (
                                    ("|" === o && (s = t.settings.perView || 1), ">" === o || ("|" === o && ">" === r))
                                ) {
                                    var u = (function (e) {
                                        var n = t.index;
                                        if (t.isType("carousel")) return n + e;
                                        return n + (e - (n % e));
                                    })(s);
                                    return (
                                        u > n && (this._o = !0),
                                        void (t.index = (function (e, n) {
                                            var r = i.length;
                                            if (e <= r) return e;
                                            if (t.isType("carousel")) return e - (r + 1);
                                            if (t.settings.rewind) return i.isBound() && !i.isEnd() ? r : 0;
                                            if (i.isBound()) return r;
                                            return Math.floor(r / n) * n;
                                        })(u, s))
                                    );
                                }
                                if ("<" === o || ("|" === o && "<" === r)) {
                                    var a = (function (e) {
                                        var n = t.index;
                                        if (t.isType("carousel")) return n - e;
                                        return (Math.ceil(n / e) - 1) * e;
                                    })(s);
                                    return (
                                        a < 0 && (this._o = !0),
                                        void (t.index = (function (e, n) {
                                            var r = i.length;
                                            if (e >= 0) return e;
                                            if (t.isType("carousel")) return e + (r + 1);
                                            if (t.settings.rewind)
                                                return i.isBound() && i.isStart() ? r : Math.floor(r / n) * n;
                                            return 0;
                                        })(a, s))
                                    );
                                }
                                v("Invalid direction pattern [".concat(o).concat(r, "] has been used"));
                            } else t.index = 0;
                        else t.index = n;
                    },
                    isStart: function () {
                        return t.index <= 0;
                    },
                    isEnd: function () {
                        return t.index >= this.length;
                    },
                    isOffset: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        return t
                            ? !!this._o &&
                                  ("|>" === t
                                      ? "|" === this.move.direction && ">" === this.move.steps
                                      : "|<" === t
                                      ? "|" === this.move.direction && "<" === this.move.steps
                                      : this.move.direction === t)
                            : this._o;
                    },
                    isBound: function () {
                        return t.isType("slider") && "center" !== t.settings.focusAt && t.settings.bound;
                    },
                };
                return (
                    k(i, "move", {
                        get: function () {
                            return this._m;
                        },
                        set: function (t) {
                            var e = t.substr(1);
                            this._m = { direction: t.substr(0, 1), steps: e ? (p(e) ? p(e) : e) : 0 };
                        },
                    }),
                    k(i, "length", {
                        get: function () {
                            var n = t.settings,
                                i = e.Html.slides.length;
                            return this.isBound() ? i - 1 - (p(n.perView) - 1) + p(n.focusAt) : i - 1;
                        },
                    }),
                    k(i, "offset", {
                        get: function () {
                            return this._o;
                        },
                    }),
                    i
                );
            },
            Swipe: function (t, e, n) {
                var i = new R(),
                    r = 0,
                    o = 0,
                    s = 0,
                    u = !1,
                    a = !!I && { passive: !0 },
                    c = {
                        mount: function () {
                            this.bindSwipeStart();
                        },
                        start: function (e) {
                            if (!u && !t.disabled) {
                                this.disable();
                                var i = this.touches(e);
                                (r = null),
                                    (o = p(i.pageX)),
                                    (s = p(i.pageY)),
                                    this.bindSwipeMove(),
                                    this.bindSwipeEnd(),
                                    n.emit("swipe.start");
                            }
                        },
                        move: function (i) {
                            if (!t.disabled) {
                                var u = t.settings,
                                    a = u.touchAngle,
                                    c = u.touchRatio,
                                    l = u.classes,
                                    f = this.touches(i),
                                    d = p(f.pageX) - o,
                                    h = p(f.pageY) - s,
                                    v = Math.abs(d << 2),
                                    m = Math.abs(h << 2),
                                    g = Math.sqrt(v + m),
                                    y = Math.sqrt(m);
                                if (!((180 * (r = Math.asin(y / g))) / Math.PI < a)) return !1;
                                i.stopPropagation(),
                                    e.Move.make(d * parseFloat(c)),
                                    e.Html.root.classList.add(l.dragging),
                                    n.emit("swipe.move");
                            }
                        },
                        end: function (i) {
                            if (!t.disabled) {
                                var s = t.settings,
                                    u = s.perSwipe,
                                    a = s.touchAngle,
                                    c = s.classes,
                                    l = this.touches(i),
                                    f = this.threshold(i),
                                    d = l.pageX - o,
                                    h = (180 * r) / Math.PI;
                                this.enable(),
                                    d > f && h < a
                                        ? e.Run.make(e.Direction.resolve("".concat(u, "<")))
                                        : d < -f && h < a
                                        ? e.Run.make(e.Direction.resolve("".concat(u, ">")))
                                        : e.Move.make(),
                                    e.Html.root.classList.remove(c.dragging),
                                    this.unbindSwipeMove(),
                                    this.unbindSwipeEnd(),
                                    n.emit("swipe.end");
                            }
                        },
                        bindSwipeStart: function () {
                            var n = this,
                                r = t.settings,
                                o = r.swipeThreshold,
                                s = r.dragThreshold;
                            o &&
                                i.on(
                                    V[0],
                                    e.Html.wrapper,
                                    function (t) {
                                        n.start(t);
                                    },
                                    a
                                ),
                                s &&
                                    i.on(
                                        V[1],
                                        e.Html.wrapper,
                                        function (t) {
                                            n.start(t);
                                        },
                                        a
                                    );
                        },
                        unbindSwipeStart: function () {
                            i.off(V[0], e.Html.wrapper, a), i.off(V[1], e.Html.wrapper, a);
                        },
                        bindSwipeMove: function () {
                            var n = this;
                            i.on(
                                G,
                                e.Html.wrapper,
                                x(function (t) {
                                    n.move(t);
                                }, t.settings.throttle),
                                a
                            );
                        },
                        unbindSwipeMove: function () {
                            i.off(G, e.Html.wrapper, a);
                        },
                        bindSwipeEnd: function () {
                            var t = this;
                            i.on(F, e.Html.wrapper, function (e) {
                                t.end(e);
                            });
                        },
                        unbindSwipeEnd: function () {
                            i.off(F, e.Html.wrapper);
                        },
                        touches: function (t) {
                            return N.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0];
                        },
                        threshold: function (e) {
                            var n = t.settings;
                            return N.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold;
                        },
                        enable: function () {
                            return (u = !1), e.Transition.enable(), this;
                        },
                        disable: function () {
                            return (u = !0), e.Transition.disable(), this;
                        },
                    };
                return (
                    n.on("build.after", function () {
                        e.Html.root.classList.add(t.settings.classes.swipeable);
                    }),
                    n.on("destroy", function () {
                        c.unbindSwipeStart(), c.unbindSwipeMove(), c.unbindSwipeEnd(), i.destroy();
                    }),
                    c
                );
            },
            Images: function (t, e, n) {
                var i = new R(),
                    r = {
                        mount: function () {
                            this.bind();
                        },
                        bind: function () {
                            i.on("dragstart", e.Html.wrapper, this.dragstart);
                        },
                        unbind: function () {
                            i.off("dragstart", e.Html.wrapper);
                        },
                        dragstart: function (t) {
                            t.preventDefault();
                        },
                    };
                return (
                    n.on("destroy", function () {
                        r.unbind(), i.destroy();
                    }),
                    r
                );
            },
            Anchors: function (t, e, n) {
                var i = new R(),
                    r = !1,
                    o = !1,
                    s = {
                        mount: function () {
                            (this._a = e.Html.wrapper.querySelectorAll("a")), this.bind();
                        },
                        bind: function () {
                            i.on("click", e.Html.wrapper, this.click);
                        },
                        unbind: function () {
                            i.off("click", e.Html.wrapper);
                        },
                        click: function (t) {
                            o && (t.stopPropagation(), t.preventDefault());
                        },
                        detach: function () {
                            if (((o = !0), !r)) {
                                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !1;
                                r = !0;
                            }
                            return this;
                        },
                        attach: function () {
                            if (((o = !1), r)) {
                                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !0;
                                r = !1;
                            }
                            return this;
                        },
                    };
                return (
                    k(s, "items", {
                        get: function () {
                            return s._a;
                        },
                    }),
                    n.on("swipe.move", function () {
                        s.detach();
                    }),
                    n.on("swipe.end", function () {
                        e.Transition.after(function () {
                            s.attach();
                        });
                    }),
                    n.on("destroy", function () {
                        s.attach(), s.unbind(), i.destroy();
                    }),
                    s
                );
            },
            Controls: function (t, e, n) {
                var i = new R(),
                    r = !!I && { passive: !0 },
                    o = {
                        mount: function () {
                            (this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]')),
                                (this._c = e.Html.root.querySelectorAll(Y)),
                                (this._arrowControls = {
                                    previous: e.Html.root.querySelectorAll(X),
                                    next: e.Html.root.querySelectorAll(K),
                                }),
                                this.addBindings();
                        },
                        setActive: function () {
                            for (var t = 0; t < this._n.length; t++) this.addClass(this._n[t].children);
                        },
                        removeActive: function () {
                            for (var t = 0; t < this._n.length; t++) this.removeClass(this._n[t].children);
                        },
                        addClass: function (e) {
                            var n = t.settings,
                                i = e[t.index];
                            i &&
                                (i.classList.add(n.classes.nav.active),
                                A(i).forEach(function (t) {
                                    t.classList.remove(n.classes.nav.active);
                                }));
                        },
                        removeClass: function (e) {
                            var n = e[t.index];
                            null == n || n.classList.remove(t.settings.classes.nav.active);
                        },
                        setArrowState: function () {
                            if (!t.settings.rewind) {
                                var n = o._arrowControls.next,
                                    i = o._arrowControls.previous;
                                this.resetArrowState(n, i),
                                    0 === t.index && this.disableArrow(i),
                                    t.index === e.Run.length && this.disableArrow(n);
                            }
                        },
                        resetArrowState: function () {
                            for (var e = t.settings, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                                i[r] = arguments[r];
                            i.forEach(function (t) {
                                P(t).forEach(function (t) {
                                    t.classList.remove(e.classes.arrow.disabled);
                                });
                            });
                        },
                        disableArrow: function () {
                            for (var e = t.settings, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                                i[r] = arguments[r];
                            i.forEach(function (t) {
                                P(t).forEach(function (t) {
                                    t.classList.add(e.classes.arrow.disabled);
                                });
                            });
                        },
                        addBindings: function () {
                            for (var t = 0; t < this._c.length; t++) this.bind(this._c[t].children);
                        },
                        removeBindings: function () {
                            for (var t = 0; t < this._c.length; t++) this.unbind(this._c[t].children);
                        },
                        bind: function (t) {
                            for (var e = 0; e < t.length; e++)
                                i.on("click", t[e], this.click), i.on("touchstart", t[e], this.click, r);
                        },
                        unbind: function (t) {
                            for (var e = 0; e < t.length; e++) i.off(["click", "touchstart"], t[e]);
                        },
                        click: function (t) {
                            I || "touchstart" !== t.type || t.preventDefault();
                            var n = t.currentTarget.getAttribute("data-glide-dir");
                            e.Run.make(e.Direction.resolve(n));
                        },
                    };
                return (
                    k(o, "items", {
                        get: function () {
                            return o._c;
                        },
                    }),
                    n.on(["mount.after", "move.after"], function () {
                        o.setActive();
                    }),
                    n.on(["mount.after", "run"], function () {
                        o.setArrowState();
                    }),
                    n.on("destroy", function () {
                        o.removeBindings(), o.removeActive(), i.destroy();
                    }),
                    o
                );
            },
            Keyboard: function (t, e, n) {
                var i = new R(),
                    r = {
                        mount: function () {
                            t.settings.keyboard && this.bind();
                        },
                        bind: function () {
                            i.on("keyup", document, this.press);
                        },
                        unbind: function () {
                            i.off("keyup", document);
                        },
                        press: function (n) {
                            var i = t.settings.perSwipe;
                            ["ArrowRight", "ArrowLeft"].includes(n.code) &&
                                e.Run.make(
                                    e.Direction.resolve(
                                        "".concat(i).concat({ ArrowRight: ">", ArrowLeft: "<" }[n.code])
                                    )
                                );
                        },
                    };
                return (
                    n.on(["destroy", "update"], function () {
                        r.unbind();
                    }),
                    n.on("update", function () {
                        r.mount();
                    }),
                    n.on("destroy", function () {
                        i.destroy();
                    }),
                    r
                );
            },
            Autoplay: function (t, e, n) {
                var i = new R(),
                    r = {
                        mount: function () {
                            this.enable(), this.start(), t.settings.hoverpause && this.bind();
                        },
                        enable: function () {
                            this._e = !0;
                        },
                        disable: function () {
                            this._e = !1;
                        },
                        start: function () {
                            var i = this;
                            this._e &&
                                (this.enable(),
                                t.settings.autoplay &&
                                    b(this._i) &&
                                    (this._i = setInterval(function () {
                                        i.stop(), e.Run.make(">"), i.start(), n.emit("autoplay");
                                    }, this.time)));
                        },
                        stop: function () {
                            this._i = clearInterval(this._i);
                        },
                        bind: function () {
                            var t = this;
                            i.on("mouseover", e.Html.root, function () {
                                t._e && t.stop();
                            }),
                                i.on("mouseout", e.Html.root, function () {
                                    t._e && t.start();
                                });
                        },
                        unbind: function () {
                            i.off(["mouseover", "mouseout"], e.Html.root);
                        },
                    };
                return (
                    k(r, "time", {
                        get: function () {
                            var n = e.Html.slides[t.index].getAttribute("data-glide-autoplay");
                            return p(n || t.settings.autoplay);
                        },
                    }),
                    n.on(["destroy", "update"], function () {
                        r.unbind();
                    }),
                    n.on(["run.before", "swipe.start", "update"], function () {
                        r.stop();
                    }),
                    n.on(["pause", "destroy"], function () {
                        r.disable(), r.stop();
                    }),
                    n.on(["run.after", "swipe.end"], function () {
                        r.start();
                    }),
                    n.on(["play"], function () {
                        r.enable(), r.start();
                    }),
                    n.on("update", function () {
                        r.mount();
                    }),
                    n.on("destroy", function () {
                        i.destroy();
                    }),
                    r
                );
            },
            Breakpoints: function (t, e, n) {
                var i = new R(),
                    r = t.settings,
                    o = J(r.breakpoints),
                    s = Object.assign({}, r),
                    u = {
                        match: function (t) {
                            if (void 0 !== window.matchMedia)
                                for (var e in t)
                                    if (
                                        t.hasOwnProperty(e) &&
                                        window.matchMedia("(max-width: ".concat(e, "px)")).matches
                                    )
                                        return t[e];
                            return s;
                        },
                    };
                return (
                    Object.assign(r, u.match(o)),
                    i.on(
                        "resize",
                        window,
                        x(function () {
                            t.settings = S(r, u.match(o));
                        }, t.settings.throttle)
                    ),
                    n.on("update", function () {
                        (o = J(o)), (s = Object.assign({}, r));
                    }),
                    n.on("destroy", function () {
                        i.off("resize", window);
                    }),
                    u
                );
            },
        },
        U = (function (t) {
            !(function (t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    e && a(t, e);
            })(n, t);
            var e = l(n);
            function n() {
                return i(this, n), e.apply(this, arguments);
            }
            return (
                o(n, [
                    {
                        key: "mount",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return d(u(n.prototype), "mount", this).call(this, Object.assign({}, Q, t));
                        },
                    },
                ]),
                n
            );
        })(H);
    return U;
});
