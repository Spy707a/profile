!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).i18nextify = t());
})(this, function () {
  "use strict";
  function e(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);
      t &&
        (u = u.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, u);
    }
    return n;
  }
  function t(t) {
    for (var u = 1; u < arguments.length; u++) {
      var r = null != arguments[u] ? arguments[u] : {};
      u % 2
        ? e(Object(r), !0).forEach(function (e) {
            n(t, e, r[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
        : e(Object(r)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return t;
  }
  function n(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var u = (e) => "string" == typeof e,
    r = () => {
      var e,
        t,
        n = new Promise((n, u) => {
          (e = n), (t = u);
        });
      return (n.resolve = e), (n.reject = t), n;
    },
    o = (e) => (null == e ? "" : "" + e),
    i = /###/g,
    a = (e) => (e && e.indexOf("###") > -1 ? e.replace(i, ".") : e),
    s = (e) => !e || u(e),
    l = (e, t, n) => {
      for (var r = u(t) ? t.split(".") : t, o = 0; o < r.length - 1; ) {
        if (s(e)) return {};
        var i = a(r[o]);
        !e[i] && n && (e[i] = new n()),
          (e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {}),
          ++o;
      }
      return s(e) ? {} : { obj: e, k: a(r[o]) };
    },
    c = (e, t, n) => {
      var { obj: u, k: r } = l(e, t, Object);
      if (void 0 === u && 1 !== t.length) {
        for (
          var o = t[t.length - 1],
            i = t.slice(0, t.length - 1),
            a = l(e, i, Object);
          void 0 === a.obj && i.length;

        )
          (o = "".concat(i[i.length - 1], ".").concat(o)),
            (i = i.slice(0, i.length - 1)),
            (a = l(e, i, Object)) &&
              a.obj &&
              void 0 !== a.obj["".concat(a.k, ".").concat(o)] &&
              (a.obj = void 0);
        a.obj["".concat(a.k, ".").concat(o)] = n;
      } else u[r] = n;
    },
    p = (e, t) => {
      var { obj: n, k: u } = l(e, t);
      if (n) return n[u];
    },
    h = (e, t, n) => {
      var u = p(e, n);
      return void 0 !== u ? u : p(t, n);
    },
    d = (e, t, n) => {
      for (var r in t)
        "__proto__" !== r &&
          "constructor" !== r &&
          (r in e
            ? u(e[r]) ||
              e[r] instanceof String ||
              u(t[r]) ||
              t[r] instanceof String
              ? n && (e[r] = t[r])
              : d(e[r], t[r], n)
            : (e[r] = t[r]));
      return e;
    },
    f = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
    g = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
    },
    v = (e) => (u(e) ? e.replace(/[&<>"'\/]/g, (e) => g[e]) : e);
  var m = [" ", ",", "?", "!", ";"],
    A = new (class {
      constructor(e) {
        (this.capacity = e),
          (this.regExpMap = new Map()),
          (this.regExpQueue = []);
      }
      getRegExp(e) {
        var t = this.regExpMap.get(e);
        if (void 0 !== t) return t;
        var n = new RegExp(e);
        return (
          this.regExpQueue.length === this.capacity &&
            this.regExpMap.delete(this.regExpQueue.shift()),
          this.regExpMap.set(e, n),
          this.regExpQueue.push(e),
          n
        );
      }
    })(20),
    y = function (e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
      if (e) {
        if (e[t]) return e[t];
        for (var u = t.split(n), r = e, o = 0; o < u.length; ) {
          if (!r || "object" != typeof r) return;
          for (var i = void 0, a = "", s = o; s < u.length; ++s)
            if ((s !== o && (a += n), void 0 !== (i = r[(a += u[s])]))) {
              if (
                ["string", "number", "boolean"].indexOf(typeof i) > -1 &&
                s < u.length - 1
              )
                continue;
              o += s - o + 1;
              break;
            }
          r = i;
        }
        return r;
      }
    },
    E = (e) => e && e.replace("_", "-"),
    C = {
      type: "logger",
      log(e) {
        this.output("log", e);
      },
      warn(e) {
        this.output("warn", e);
      },
      error(e) {
        this.output("error", e);
      },
      output(e, t) {
        console && console[e] && console[e].apply(console, t);
      },
    };
  class b {
    constructor(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      this.init(e, t);
    }
    init(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.prefix = t.prefix || "i18next:"),
        (this.logger = e || C),
        (this.options = t),
        (this.debug = t.debug);
    }
    log() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.forward(t, "log", "", !0);
    }
    warn() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.forward(t, "warn", "", !0);
    }
    error() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.forward(t, "error", "");
    }
    deprecate() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
    }
    forward(e, t, n, r) {
      return r && !this.debug
        ? null
        : (u(e[0]) &&
            (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
          this.logger[t](e));
    }
    create(e) {
      return new b(
        this.logger,
        t(
          t({}, { prefix: "".concat(this.prefix, ":").concat(e, ":") }),
          this.options
        )
      );
    }
    clone(e) {
      return (
        ((e = e || this.options).prefix = e.prefix || this.prefix),
        new b(this.logger, e)
      );
    }
  }
  var F = new b();
  class D {
    constructor() {
      this.observers = {};
    }
    on(e, t) {
      return (
        e.split(" ").forEach((e) => {
          this.observers[e] || (this.observers[e] = new Map());
          var n = this.observers[e].get(t) || 0;
          this.observers[e].set(t, n + 1);
        }),
        this
      );
    }
    off(e, t) {
      this.observers[e] &&
        (t ? this.observers[e].delete(t) : delete this.observers[e]);
    }
    emit(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1;
        u < t;
        u++
      )
        n[u - 1] = arguments[u];
      this.observers[e] &&
        Array.from(this.observers[e].entries()).forEach((e) => {
          for (var [t, u] = e, r = 0; r < u; r++) t(...n);
        });
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((t) => {
          for (var [u, r] = t, o = 0; o < r; o++) u.apply(u, [e, ...n]);
        });
    }
  }
  class w extends D {
    constructor(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { ns: ["translation"], defaultNS: "translation" };
      super(),
        (this.data = e || {}),
        (this.options = t),
        void 0 === this.options.keySeparator &&
          (this.options.keySeparator = "."),
        void 0 === this.options.ignoreJSONStructure &&
          (this.options.ignoreJSONStructure = !0);
    }
    addNamespaces(e) {
      this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
    }
    removeNamespaces(e) {
      var t = this.options.ns.indexOf(e);
      t > -1 && this.options.ns.splice(t, 1);
    }
    getResource(e, t, n) {
      var r,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        i =
          void 0 !== o.keySeparator
            ? o.keySeparator
            : this.options.keySeparator,
        a =
          void 0 !== o.ignoreJSONStructure
            ? o.ignoreJSONStructure
            : this.options.ignoreJSONStructure;
      e.indexOf(".") > -1
        ? (r = e.split("."))
        : ((r = [e, t]),
          n &&
            (Array.isArray(n)
              ? r.push(...n)
              : u(n) && i
              ? r.push(...n.split(i))
              : r.push(n)));
      var s = p(this.data, r);
      return (
        !s &&
          !t &&
          !n &&
          e.indexOf(".") > -1 &&
          ((e = r[0]), (t = r[1]), (n = r.slice(2).join("."))),
        !s && a && u(n)
          ? y(this.data && this.data[e] && this.data[e][t], n, i)
          : s
      );
    }
    addResource(e, t, n, u) {
      var r =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : { silent: !1 },
        o =
          void 0 !== r.keySeparator
            ? r.keySeparator
            : this.options.keySeparator,
        i = [e, t];
      n && (i = i.concat(o ? n.split(o) : n)),
        e.indexOf(".") > -1 && ((u = t), (t = (i = e.split("."))[1])),
        this.addNamespaces(t),
        c(this.data, i, u),
        r.silent || this.emit("added", e, t, n, u);
    }
    addResources(e, t, n) {
      var r =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : { silent: !1 };
      for (var o in n)
        (u(n[o]) || Array.isArray(n[o])) &&
          this.addResource(e, t, o, n[o], { silent: !0 });
      r.silent || this.emit("added", e, t, n);
    }
    addResourceBundle(e, n, u, r, o) {
      var i =
          arguments.length > 5 && void 0 !== arguments[5]
            ? arguments[5]
            : { silent: !1, skipCopy: !1 },
        a = [e, n];
      e.indexOf(".") > -1 && ((r = u), (u = n), (n = (a = e.split("."))[1])),
        this.addNamespaces(n);
      var s = p(this.data, a) || {};
      i.skipCopy || (u = JSON.parse(JSON.stringify(u))),
        r ? d(s, u, o) : (s = t(t({}, s), u)),
        c(this.data, a, s),
        i.silent || this.emit("added", e, n, u);
    }
    removeResourceBundle(e, t) {
      this.hasResourceBundle(e, t) && delete this.data[e][t],
        this.removeNamespaces(t),
        this.emit("removed", e, t);
    }
    hasResourceBundle(e, t) {
      return void 0 !== this.getResource(e, t);
    }
    getResourceBundle(e, n) {
      return (
        n || (n = this.options.defaultNS),
        "v1" === this.options.compatibilityAPI
          ? t(t({}, {}), this.getResource(e, n))
          : this.getResource(e, n)
      );
    }
    getDataByLanguage(e) {
      return this.data[e];
    }
    hasLanguageSomeTranslations(e) {
      var t = this.getDataByLanguage(e);
      return !!((t && Object.keys(t)) || []).find(
        (e) => t[e] && Object.keys(t[e]).length > 0
      );
    }
    toJSON() {
      return this.data;
    }
  }
  var B = {
      processors: {},
      addPostProcessor(e) {
        this.processors[e.name] = e;
      },
      handle(e, t, n, u, r) {
        return (
          e.forEach((e) => {
            this.processors[e] && (t = this.processors[e].process(t, n, u, r));
          }),
          t
        );
      },
    },
    x = {};
  class O extends D {
    constructor(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(),
        ((e, t, n) => {
          e.forEach((e) => {
            t[e] && (n[e] = t[e]);
          });
        })(
          [
            "resourceStore",
            "languageUtils",
            "pluralResolver",
            "interpolator",
            "backendConnector",
            "i18nFormat",
            "utils",
          ],
          e,
          this
        ),
        (this.options = t),
        void 0 === this.options.keySeparator &&
          (this.options.keySeparator = "."),
        (this.logger = F.create("translator"));
    }
    changeLanguage(e) {
      e && (this.language = e);
    }
    exists(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { interpolation: {} };
      if (null == e) return !1;
      var n = this.resolve(e, t);
      return n && void 0 !== n.res;
    }
    extractFromKey(e, t) {
      var n =
        void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
      void 0 === n && (n = ":");
      var r =
          void 0 !== t.keySeparator
            ? t.keySeparator
            : this.options.keySeparator,
        o = t.ns || this.options.defaultNS || [],
        i = n && e.indexOf(n) > -1,
        a = !(
          this.options.userDefinedKeySeparator ||
          t.keySeparator ||
          this.options.userDefinedNsSeparator ||
          t.nsSeparator ||
          ((e, t, n) => {
            (t = t || ""), (n = n || "");
            var u = m.filter((e) => t.indexOf(e) < 0 && n.indexOf(e) < 0);
            if (0 === u.length) return !0;
            var r = A.getRegExp(
                "(".concat(u.map((e) => ("?" === e ? "\\?" : e)).join("|"), ")")
              ),
              o = !r.test(e);
            if (!o) {
              var i = e.indexOf(n);
              i > 0 && !r.test(e.substring(0, i)) && (o = !0);
            }
            return o;
          })(e, n, r)
        );
      if (i && !a) {
        var s = e.match(this.interpolator.nestingRegexp);
        if (s && s.length > 0) return { key: e, namespaces: u(o) ? [o] : o };
        var l = e.split(n);
        (n !== r || (n === r && this.options.ns.indexOf(l[0]) > -1)) &&
          (o = l.shift()),
          (e = l.join(r));
      }
      return { key: e, namespaces: u(o) ? [o] : o };
    }
    translate(e, n, r) {
      if (
        ("object" != typeof n &&
          this.options.overloadTranslationOptionHandler &&
          (n = this.options.overloadTranslationOptionHandler(arguments)),
        "object" == typeof n && (n = t({}, n)),
        n || (n = {}),
        null == e)
      )
        return "";
      Array.isArray(e) || (e = [String(e)]);
      var o =
          void 0 !== n.returnDetails
            ? n.returnDetails
            : this.options.returnDetails,
        i =
          void 0 !== n.keySeparator
            ? n.keySeparator
            : this.options.keySeparator,
        { key: a, namespaces: s } = this.extractFromKey(e[e.length - 1], n),
        l = s[s.length - 1],
        c = n.lng || this.language,
        p = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (c && "cimode" === c.toLowerCase()) {
        if (p) {
          var h = n.nsSeparator || this.options.nsSeparator;
          return o
            ? {
                res: "".concat(l).concat(h).concat(a),
                usedKey: a,
                exactUsedKey: a,
                usedLng: c,
                usedNS: l,
                usedParams: this.getUsedParamsDetails(n),
              }
            : "".concat(l).concat(h).concat(a);
        }
        return o
          ? {
              res: a,
              usedKey: a,
              exactUsedKey: a,
              usedLng: c,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : a;
      }
      var d = this.resolve(e, n),
        f = d && d.res,
        g = (d && d.usedKey) || a,
        v = (d && d.exactUsedKey) || a,
        m = Object.prototype.toString.apply(f),
        A = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
        y = !this.i18nFormat || this.i18nFormat.handleAsObject,
        E = !u(f) && "boolean" != typeof f && "number" != typeof f;
      if (
        !(
          y &&
          f &&
          E &&
          ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(
            m
          ) < 0
        ) ||
        (u(A) && Array.isArray(f))
      )
        if (y && u(A) && Array.isArray(f))
          (f = f.join(A)) && (f = this.extendTranslation(f, e, n, r));
        else {
          var C = !1,
            b = !1,
            F = void 0 !== n.count && !u(n.count),
            D = O.hasDefaultValue(n),
            w = F ? this.pluralResolver.getSuffix(c, n.count, n) : "",
            B =
              n.ordinal && F
                ? this.pluralResolver.getSuffix(c, n.count, { ordinal: !1 })
                : "",
            x =
              F &&
              !n.ordinal &&
              0 === n.count &&
              this.pluralResolver.shouldUseIntlApi(),
            k =
              (x &&
                n[
                  "defaultValue".concat(this.options.pluralSeparator, "zero")
                ]) ||
              n["defaultValue".concat(w)] ||
              n["defaultValue".concat(B)] ||
              n.defaultValue;
          !this.isValidLookup(f) && D && ((C = !0), (f = k)),
            this.isValidLookup(f) || ((b = !0), (f = a));
          var S =
              (n.missingKeyNoValueFallbackToKey ||
                this.options.missingKeyNoValueFallbackToKey) &&
              b
                ? void 0
                : f,
            N = D && k !== f && this.options.updateMissing;
          if (b || C || N) {
            if (
              (this.logger.log(
                N ? "updateKey" : "missingKey",
                c,
                l,
                a,
                N ? k : f
              ),
              i)
            ) {
              var L = this.resolve(a, t(t({}, n), {}, { keySeparator: !1 }));
              L &&
                L.res &&
                this.logger.warn(
                  "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                );
            }
            var P = [],
              T = this.languageUtils.getFallbackCodes(
                this.options.fallbackLng,
                n.lng || this.language
              );
            if ("fallback" === this.options.saveMissingTo && T && T[0])
              for (var j = 0; j < T.length; j++) P.push(T[j]);
            else
              "all" === this.options.saveMissingTo
                ? (P = this.languageUtils.toResolveHierarchy(
                    n.lng || this.language
                  ))
                : P.push(n.lng || this.language);
            var R = (e, t, u) => {
              var r = D && u !== f ? u : S;
              this.options.missingKeyHandler
                ? this.options.missingKeyHandler(e, l, t, r, N, n)
                : this.backendConnector &&
                  this.backendConnector.saveMissing &&
                  this.backendConnector.saveMissing(e, l, t, r, N, n),
                this.emit("missingKey", e, l, t, f);
            };
            this.options.saveMissing &&
              (this.options.saveMissingPlurals && F
                ? P.forEach((e) => {
                    var t = this.pluralResolver.getSuffixes(e, n);
                    x &&
                      n[
                        "defaultValue".concat(
                          this.options.pluralSeparator,
                          "zero"
                        )
                      ] &&
                      t.indexOf(
                        "".concat(this.options.pluralSeparator, "zero")
                      ) < 0 &&
                      t.push("".concat(this.options.pluralSeparator, "zero")),
                      t.forEach((t) => {
                        R([e], a + t, n["defaultValue".concat(t)] || k);
                      });
                  })
                : R(P, a, k));
          }
          (f = this.extendTranslation(f, e, n, d, r)),
            b &&
              f === a &&
              this.options.appendNamespaceToMissingKey &&
              (f = "".concat(l, ":").concat(a)),
            (b || C) &&
              this.options.parseMissingKeyHandler &&
              (f =
                "v1" !== this.options.compatibilityAPI
                  ? this.options.parseMissingKeyHandler(
                      this.options.appendNamespaceToMissingKey
                        ? "".concat(l, ":").concat(a)
                        : a,
                      C ? f : void 0
                    )
                  : this.options.parseMissingKeyHandler(f));
        }
      else {
        if (!n.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler ||
            this.logger.warn(
              "accessing an object - but returnObjects options is not enabled!"
            );
          var I = this.options.returnedObjectHandler
            ? this.options.returnedObjectHandler(
                g,
                f,
                t(t({}, n), {}, { ns: s })
              )
            : "key '"
                .concat(a, " (")
                .concat(
                  this.language,
                  ")' returned an object instead of string."
                );
          return o
            ? ((d.res = I), (d.usedParams = this.getUsedParamsDetails(n)), d)
            : I;
        }
        if (i) {
          var U = Array.isArray(f),
            M = U ? [] : {},
            V = U ? v : g;
          for (var H in f)
            if (Object.prototype.hasOwnProperty.call(f, H)) {
              var q = "".concat(V).concat(i).concat(H);
              (M[H] = this.translate(
                q,
                t(t({}, n), { joinArrays: !1, ns: s })
              )),
                M[H] === q && (M[H] = f[H]);
            }
          f = M;
        }
      }
      return o
        ? ((d.res = f), (d.usedParams = this.getUsedParamsDetails(n)), d)
        : f;
    }
    extendTranslation(e, n, r, o, i) {
      var a = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        e = this.i18nFormat.parse(
          e,
          t(t({}, this.options.interpolation.defaultVariables), r),
          r.lng || this.language || o.usedLng,
          o.usedNS,
          o.usedKey,
          { resolved: o }
        );
      else if (!r.skipInterpolation) {
        r.interpolation &&
          this.interpolator.init(
            t(t({}, r), {
              interpolation: t(
                t({}, this.options.interpolation),
                r.interpolation
              ),
            })
          );
        var s,
          l =
            u(e) &&
            (r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
              ? r.interpolation.skipOnVariables
              : this.options.interpolation.skipOnVariables);
        if (l) {
          var c = e.match(this.interpolator.nestingRegexp);
          s = c && c.length;
        }
        var p = r.replace && !u(r.replace) ? r.replace : r;
        if (
          (this.options.interpolation.defaultVariables &&
            (p = t(t({}, this.options.interpolation.defaultVariables), p)),
          (e = this.interpolator.interpolate(
            e,
            p,
            r.lng || this.language || o.usedLng,
            r
          )),
          l)
        ) {
          var h = e.match(this.interpolator.nestingRegexp);
          s < (h && h.length) && (r.nest = !1);
        }
        !r.lng &&
          "v1" !== this.options.compatibilityAPI &&
          o &&
          o.res &&
          (r.lng = this.language || o.usedLng),
          !1 !== r.nest &&
            (e = this.interpolator.nest(
              e,
              function () {
                for (
                  var e = arguments.length, t = new Array(e), u = 0;
                  u < e;
                  u++
                )
                  t[u] = arguments[u];
                return i && i[0] === t[0] && !r.context
                  ? (a.logger.warn(
                      "It seems you are nesting recursively key: "
                        .concat(t[0], " in key: ")
                        .concat(n[0])
                    ),
                    null)
                  : a.translate(...t, n);
              },
              r
            )),
          r.interpolation && this.interpolator.reset();
      }
      var d = r.postProcess || this.options.postProcess,
        f = u(d) ? [d] : d;
      return (
        null != e &&
          f &&
          f.length &&
          !1 !== r.applyPostProcessor &&
          (e = B.handle(
            f,
            e,
            n,
            this.options && this.options.postProcessPassResolved
              ? t(
                  {
                    i18nResolved: t(
                      t({}, o),
                      {},
                      { usedParams: this.getUsedParamsDetails(r) }
                    ),
                  },
                  r
                )
              : r,
            this
          )),
        e
      );
    }
    resolve(e) {
      var t,
        n,
        r,
        o,
        i,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return (
        u(e) && (e = [e]),
        e.forEach((e) => {
          if (!this.isValidLookup(t)) {
            var s = this.extractFromKey(e, a),
              l = s.key;
            n = l;
            var c = s.namespaces;
            this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
            var p = void 0 !== a.count && !u(a.count),
              h =
                p &&
                !a.ordinal &&
                0 === a.count &&
                this.pluralResolver.shouldUseIntlApi(),
              d =
                void 0 !== a.context &&
                (u(a.context) || "number" == typeof a.context) &&
                "" !== a.context,
              f = a.lngs
                ? a.lngs
                : this.languageUtils.toResolveHierarchy(
                    a.lng || this.language,
                    a.fallbackLng
                  );
            c.forEach((e) => {
              this.isValidLookup(t) ||
                ((i = e),
                !x["".concat(f[0], "-").concat(e)] &&
                  this.utils &&
                  this.utils.hasLoadedNamespace &&
                  !this.utils.hasLoadedNamespace(i) &&
                  ((x["".concat(f[0], "-").concat(e)] = !0),
                  this.logger.warn(
                    'key "'
                      .concat(n, '" for languages "')
                      .concat(
                        f.join(", "),
                        '" won\'t get resolved as namespace "'
                      )
                      .concat(i, '" was not yet loaded'),
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                  )),
                f.forEach((n) => {
                  if (!this.isValidLookup(t)) {
                    o = n;
                    var u,
                      i = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(i, l, n, e, a);
                    else {
                      var s;
                      p && (s = this.pluralResolver.getSuffix(n, a.count, a));
                      var c = "".concat(this.options.pluralSeparator, "zero"),
                        f = ""
                          .concat(this.options.pluralSeparator, "ordinal")
                          .concat(this.options.pluralSeparator);
                      if (
                        (p &&
                          (i.push(l + s),
                          a.ordinal &&
                            0 === s.indexOf(f) &&
                            i.push(
                              l + s.replace(f, this.options.pluralSeparator)
                            ),
                          h && i.push(l + c)),
                        d)
                      ) {
                        var g = ""
                          .concat(l)
                          .concat(this.options.contextSeparator)
                          .concat(a.context);
                        i.push(g),
                          p &&
                            (i.push(g + s),
                            a.ordinal &&
                              0 === s.indexOf(f) &&
                              i.push(
                                g + s.replace(f, this.options.pluralSeparator)
                              ),
                            h && i.push(g + c));
                      }
                    }
                    for (; (u = i.pop()); )
                      this.isValidLookup(t) ||
                        ((r = u), (t = this.getResource(n, e, u, a)));
                  }
                }));
            });
          }
        }),
        { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
      );
    }
    isValidLookup(e) {
      return !(
        void 0 === e ||
        (!this.options.returnNull && null === e) ||
        (!this.options.returnEmptyString && "" === e)
      );
    }
    getResource(e, t, n) {
      var u =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource
        ? this.i18nFormat.getResource(e, t, n, u)
        : this.resourceStore.getResource(e, t, n, u);
    }
    getUsedParamsDetails() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.replace && !u(e.replace),
        r = n ? e.replace : e;
      if (
        (n && void 0 !== e.count && (r.count = e.count),
        this.options.interpolation.defaultVariables &&
          (r = t(t({}, this.options.interpolation.defaultVariables), r)),
        !n)
      )
        for (var o of ((r = t({}, r)),
        [
          "defaultValue",
          "ordinal",
          "context",
          "replace",
          "lng",
          "lngs",
          "fallbackLng",
          "ns",
          "keySeparator",
          "nsSeparator",
          "returnObjects",
          "returnDetails",
          "joinArrays",
          "postProcess",
          "interpolation",
        ]))
          delete r[o];
      return r;
    }
    static hasDefaultValue(e) {
      for (var t in e)
        if (
          Object.prototype.hasOwnProperty.call(e, t) &&
          "defaultValue" === t.substring(0, "defaultValue".length) &&
          void 0 !== e[t]
        )
          return !0;
      return !1;
    }
  }
  var k = (e) => e.charAt(0).toUpperCase() + e.slice(1);
  class S {
    constructor(e) {
      (this.options = e),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = F.create("languageUtils"));
    }
    getScriptPartFromCode(e) {
      if (!(e = E(e)) || e.indexOf("-") < 0) return null;
      var t = e.split("-");
      return 2 === t.length
        ? null
        : (t.pop(),
          "x" === t[t.length - 1].toLowerCase()
            ? null
            : this.formatLanguageCode(t.join("-")));
    }
    getLanguagePartFromCode(e) {
      if (!(e = E(e)) || e.indexOf("-") < 0) return e;
      var t = e.split("-");
      return this.formatLanguageCode(t[0]);
    }
    formatLanguageCode(e) {
      if (u(e) && e.indexOf("-") > -1) {
        if ("undefined" != typeof Intl && void 0 !== Intl.getCanonicalLocales)
          try {
            var t = Intl.getCanonicalLocales(e)[0];
            if ((t && this.options.lowerCaseLng && (t = t.toLowerCase()), t))
              return t;
          } catch (e) {}
        var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
          r = e.split("-");
        return (
          this.options.lowerCaseLng
            ? (r = r.map((e) => e.toLowerCase()))
            : 2 === r.length
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = k(r[1].toLowerCase())))
            : 3 === r.length &&
              ((r[0] = r[0].toLowerCase()),
              2 === r[1].length && (r[1] = r[1].toUpperCase()),
              "sgn" !== r[0] &&
                2 === r[2].length &&
                (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = k(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 &&
                (r[2] = k(r[2].toLowerCase()))),
          r.join("-")
        );
      }
      return this.options.cleanCode || this.options.lowerCaseLng
        ? e.toLowerCase()
        : e;
    }
    isSupportedCode(e) {
      return (
        ("languageOnly" === this.options.load ||
          this.options.nonExplicitSupportedLngs) &&
          (e = this.getLanguagePartFromCode(e)),
        !this.supportedLngs ||
          !this.supportedLngs.length ||
          this.supportedLngs.indexOf(e) > -1
      );
    }
    getBestMatchFromCodes(e) {
      return e
        ? (e.forEach((e) => {
            if (!t) {
              var n = this.formatLanguageCode(e);
              (this.options.supportedLngs && !this.isSupportedCode(n)) ||
                (t = n);
            }
          }),
          !t &&
            this.options.supportedLngs &&
            e.forEach((e) => {
              if (!t) {
                var n = this.getLanguagePartFromCode(e);
                if (this.isSupportedCode(n)) return (t = n);
                t = this.options.supportedLngs.find((e) =>
                  e === n
                    ? e
                    : e.indexOf("-") < 0 && n.indexOf("-") < 0
                    ? void 0
                    : (e.indexOf("-") > 0 &&
                        n.indexOf("-") < 0 &&
                        e.substring(0, e.indexOf("-")) === n) ||
                      (0 === e.indexOf(n) && n.length > 1)
                    ? e
                    : void 0
                );
              }
            }),
          t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
          t)
        : null;
      var t;
    }
    getFallbackCodes(e, t) {
      if (!e) return [];
      if (
        ("function" == typeof e && (e = e(t)),
        u(e) && (e = [e]),
        Array.isArray(e))
      )
        return e;
      if (!t) return e.default || [];
      var n = e[t];
      return (
        n || (n = e[this.getScriptPartFromCode(t)]),
        n || (n = e[this.formatLanguageCode(t)]),
        n || (n = e[this.getLanguagePartFromCode(t)]),
        n || (n = e.default),
        n || []
      );
    }
    toResolveHierarchy(e, t) {
      var n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
        r = [],
        o = (e) => {
          e &&
            (this.isSupportedCode(e)
              ? r.push(e)
              : this.logger.warn(
                  "rejecting language code not found in supportedLngs: ".concat(
                    e
                  )
                ));
        };
      return (
        u(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
          ? ("languageOnly" !== this.options.load &&
              o(this.formatLanguageCode(e)),
            "languageOnly" !== this.options.load &&
              "currentOnly" !== this.options.load &&
              o(this.getScriptPartFromCode(e)),
            "currentOnly" !== this.options.load &&
              o(this.getLanguagePartFromCode(e)))
          : u(e) && o(this.formatLanguageCode(e)),
        n.forEach((e) => {
          r.indexOf(e) < 0 && o(this.formatLanguageCode(e));
        }),
        r
      );
    }
  }
  var N = [
      {
        lngs: [
          "ach",
          "ak",
          "am",
          "arn",
          "br",
          "fil",
          "gun",
          "ln",
          "mfe",
          "mg",
          "mi",
          "oc",
          "pt",
          "pt-BR",
          "tg",
          "tl",
          "ti",
          "tr",
          "uz",
          "wa",
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          "af",
          "an",
          "ast",
          "az",
          "bg",
          "bn",
          "ca",
          "da",
          "de",
          "dev",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fi",
          "fo",
          "fur",
          "fy",
          "gl",
          "gu",
          "ha",
          "hi",
          "hu",
          "hy",
          "ia",
          "it",
          "kk",
          "kn",
          "ku",
          "lb",
          "mai",
          "ml",
          "mn",
          "mr",
          "nah",
          "nap",
          "nb",
          "ne",
          "nl",
          "nn",
          "no",
          "nso",
          "pa",
          "pap",
          "pms",
          "ps",
          "pt-PT",
          "rm",
          "sco",
          "se",
          "si",
          "so",
          "son",
          "sq",
          "sv",
          "sw",
          "ta",
          "te",
          "tk",
          "ur",
          "yo",
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          "ay",
          "bo",
          "cgg",
          "fa",
          "ht",
          "id",
          "ja",
          "jbo",
          "ka",
          "km",
          "ko",
          "ky",
          "lo",
          "ms",
          "sah",
          "su",
          "th",
          "tt",
          "ug",
          "vi",
          "wo",
          "zh",
        ],
        nr: [1],
        fc: 3,
      },
      {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4,
      },
      { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
      { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
      { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
      { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
      { lngs: ["fr"], nr: [1, 2], fc: 9 },
      { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
      { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
      { lngs: ["is"], nr: [1, 2], fc: 12 },
      { lngs: ["jv"], nr: [0, 1], fc: 13 },
      { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
      { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
      { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
      { lngs: ["mk"], nr: [1, 2], fc: 17 },
      { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
      { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
      { lngs: ["or"], nr: [2, 1], fc: 2 },
      { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
      { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
      { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
    ],
    L = {
      1: (e) => Number(e > 1),
      2: (e) => Number(1 != e),
      3: (e) => 0,
      4: (e) =>
        Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        ),
      5: (e) =>
        Number(
          0 == e
            ? 0
            : 1 == e
            ? 1
            : 2 == e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5
        ),
      6: (e) => Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2),
      7: (e) =>
        Number(
          1 == e
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        ),
      8: (e) => Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3),
      9: (e) => Number(e >= 2),
      10: (e) => Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
      11: (e) =>
        Number(
          1 == e || 11 == e
            ? 0
            : 2 == e || 12 == e
            ? 1
            : e > 2 && e < 20
            ? 2
            : 3
        ),
      12: (e) => Number(e % 10 != 1 || e % 100 == 11),
      13: (e) => Number(0 !== e),
      14: (e) => Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3),
      15: (e) =>
        Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        ),
      16: (e) => Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2),
      17: (e) => Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
      18: (e) => Number(0 == e ? 0 : 1 == e ? 1 : 2),
      19: (e) =>
        Number(
          1 == e
            ? 0
            : 0 == e || (e % 100 > 1 && e % 100 < 11)
            ? 1
            : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3
        ),
      20: (e) =>
        Number(1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
      21: (e) =>
        Number(
          e % 100 == 1
            ? 1
            : e % 100 == 2
            ? 2
            : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0
        ),
      22: (e) =>
        Number(
          1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
        ),
    },
    P = ["v1", "v2", "v3"],
    T = ["v4"],
    j = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
  class R {
    constructor(e) {
      var t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.languageUtils = e),
        (this.options = n),
        (this.logger = F.create("pluralResolver")),
        (this.options.compatibilityJSON &&
          !T.includes(this.options.compatibilityJSON)) ||
          ("undefined" != typeof Intl && Intl.PluralRules) ||
          ((this.options.compatibilityJSON = "v3"),
          this.logger.error(
            "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
          )),
        (this.rules =
          ((t = {}),
          N.forEach((e) => {
            e.lngs.forEach((n) => {
              t[n] = { numbers: e.nr, plurals: L[e.fc] };
            });
          }),
          t)),
        (this.pluralRulesCache = {});
    }
    addRule(e, t) {
      this.rules[e] = t;
    }
    clearCache() {
      this.pluralRulesCache = {};
    }
    getRule(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.shouldUseIntlApi()) {
        var n,
          u = E("dev" === e ? "en" : e),
          r = t.ordinal ? "ordinal" : "cardinal",
          o = JSON.stringify({ cleanedCode: u, type: r });
        if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
        try {
          n = new Intl.PluralRules(u, { type: r });
        } catch (u) {
          if (!e.match(/-|_/)) return;
          var i = this.languageUtils.getLanguagePartFromCode(e);
          n = this.getRule(i, t);
        }
        return (this.pluralRulesCache[o] = n), n;
      }
      return (
        this.rules[e] ||
        this.rules[this.languageUtils.getLanguagePartFromCode(e)]
      );
    }
    needsPlural(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = this.getRule(e, t);
      return this.shouldUseIntlApi()
        ? n && n.resolvedOptions().pluralCategories.length > 1
        : n && n.numbers.length > 1;
    }
    getPluralFormsOfKey(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return this.getSuffixes(e, n).map((e) => "".concat(t).concat(e));
    }
    getSuffixes(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = this.getRule(e, t);
      return n
        ? this.shouldUseIntlApi()
          ? n
              .resolvedOptions()
              .pluralCategories.sort((e, t) => j[e] - j[t])
              .map((e) =>
                ""
                  .concat(this.options.prepend)
                  .concat(
                    t.ordinal ? "ordinal".concat(this.options.prepend) : ""
                  )
                  .concat(e)
              )
          : n.numbers.map((n) => this.getSuffix(e, n, t))
        : [];
    }
    getSuffix(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = this.getRule(e, n);
      return u
        ? this.shouldUseIntlApi()
          ? ""
              .concat(this.options.prepend)
              .concat(n.ordinal ? "ordinal".concat(this.options.prepend) : "")
              .concat(u.select(t))
          : this.getSuffixRetroCompatible(u, t)
        : (this.logger.warn("no plural rule found for: ".concat(e)), "");
    }
    getSuffixRetroCompatible(e, t) {
      var n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
        u = e.numbers[n];
      this.options.simplifyPluralSuffix &&
        2 === e.numbers.length &&
        1 === e.numbers[0] &&
        (2 === u ? (u = "plural") : 1 === u && (u = ""));
      var r = () =>
        this.options.prepend && u.toString()
          ? this.options.prepend + u.toString()
          : u.toString();
      return "v1" === this.options.compatibilityJSON
        ? 1 === u
          ? ""
          : "number" == typeof u
          ? "_plural_".concat(u.toString())
          : r()
        : "v2" === this.options.compatibilityJSON ||
          (this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0])
        ? r()
        : this.options.prepend && n.toString()
        ? this.options.prepend + n.toString()
        : n.toString();
    }
    shouldUseIntlApi() {
      return !P.includes(this.options.compatibilityJSON);
    }
  }
  var I = function (e, t, n) {
      var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
        o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        i = h(e, t, n);
      return (
        !i && o && u(n) && void 0 === (i = y(e, n, r)) && (i = y(t, n, r)), i
      );
    },
    U = (e) => e.replace(/\$/g, "$$$$");
  class M {
    constructor() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (this.logger = F.create("interpolator")),
        (this.options = e),
        (this.format =
          (e.interpolation && e.interpolation.format) || ((e) => e)),
        this.init(e);
    }
    init() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      e.interpolation || (e.interpolation = { escapeValue: !0 });
      var {
        escape: t,
        escapeValue: n,
        useRawValueToEscape: u,
        prefix: r,
        prefixEscaped: o,
        suffix: i,
        suffixEscaped: a,
        formatSeparator: s,
        unescapeSuffix: l,
        unescapePrefix: c,
        nestingPrefix: p,
        nestingPrefixEscaped: h,
        nestingSuffix: d,
        nestingSuffixEscaped: g,
        nestingOptionsSeparator: m,
        maxReplaces: A,
        alwaysFormat: y,
      } = e.interpolation;
      (this.escape = void 0 !== t ? t : v),
        (this.escapeValue = void 0 === n || n),
        (this.useRawValueToEscape = void 0 !== u && u),
        (this.prefix = r ? f(r) : o || "{{"),
        (this.suffix = i ? f(i) : a || "}}"),
        (this.formatSeparator = s || ","),
        (this.unescapePrefix = l ? "" : c || "-"),
        (this.unescapeSuffix = this.unescapePrefix ? "" : l || ""),
        (this.nestingPrefix = p ? f(p) : h || f("$t(")),
        (this.nestingSuffix = d ? f(d) : g || f(")")),
        (this.nestingOptionsSeparator = m || ","),
        (this.maxReplaces = A || 1e3),
        (this.alwaysFormat = void 0 !== y && y),
        this.resetRegExp();
    }
    reset() {
      this.options && this.init(this.options);
    }
    resetRegExp() {
      var e = (e, t) =>
        e && e.source === t ? ((e.lastIndex = 0), e) : new RegExp(t, "g");
      (this.regexp = e(
        this.regexp,
        "".concat(this.prefix, "(.+?)").concat(this.suffix)
      )),
        (this.regexpUnescape = e(
          this.regexpUnescape,
          ""
            .concat(this.prefix)
            .concat(this.unescapePrefix, "(.+?)")
            .concat(this.unescapeSuffix)
            .concat(this.suffix)
        )),
        (this.nestingRegexp = e(
          this.nestingRegexp,
          "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix)
        ));
    }
    interpolate(e, n, r, i) {
      var a,
        s,
        l,
        c =
          (this.options &&
            this.options.interpolation &&
            this.options.interpolation.defaultVariables) ||
          {},
        p = (e) => {
          if (e.indexOf(this.formatSeparator) < 0) {
            var u = I(
              n,
              c,
              e,
              this.options.keySeparator,
              this.options.ignoreJSONStructure
            );
            return this.alwaysFormat
              ? this.format(
                  u,
                  void 0,
                  r,
                  t(t(t({}, i), n), {}, { interpolationkey: e })
                )
              : u;
          }
          var o = e.split(this.formatSeparator),
            a = o.shift().trim(),
            s = o.join(this.formatSeparator).trim();
          return this.format(
            I(
              n,
              c,
              a,
              this.options.keySeparator,
              this.options.ignoreJSONStructure
            ),
            s,
            r,
            t(t(t({}, i), n), {}, { interpolationkey: a })
          );
        };
      this.resetRegExp();
      var h =
          (i && i.missingInterpolationHandler) ||
          this.options.missingInterpolationHandler,
        d =
          i && i.interpolation && void 0 !== i.interpolation.skipOnVariables
            ? i.interpolation.skipOnVariables
            : this.options.interpolation.skipOnVariables;
      return (
        [
          { regex: this.regexpUnescape, safeValue: (e) => U(e) },
          {
            regex: this.regexp,
            safeValue: (e) => (this.escapeValue ? U(this.escape(e)) : U(e)),
          },
        ].forEach((t) => {
          for (l = 0; (a = t.regex.exec(e)); ) {
            var n = a[1].trim();
            if (void 0 === (s = p(n)))
              if ("function" == typeof h) {
                var r = h(e, a, i);
                s = u(r) ? r : "";
              } else if (i && Object.prototype.hasOwnProperty.call(i, n))
                s = "";
              else {
                if (d) {
                  s = a[0];
                  continue;
                }
                this.logger.warn(
                  "missed to pass in variable "
                    .concat(n, " for interpolating ")
                    .concat(e)
                ),
                  (s = "");
              }
            else u(s) || this.useRawValueToEscape || (s = o(s));
            var c = t.safeValue(s);
            if (
              ((e = e.replace(a[0], c)),
              d
                ? ((t.regex.lastIndex += s.length),
                  (t.regex.lastIndex -= a[0].length))
                : (t.regex.lastIndex = 0),
              ++l >= this.maxReplaces)
            )
              break;
          }
        }),
        e
      );
    }
    nest(e, n) {
      for (
        var r,
          i,
          a,
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = (e, n) => {
            var u = this.nestingOptionsSeparator;
            if (e.indexOf(u) < 0) return e;
            var r = e.split(new RegExp("".concat(u, "[ ]*{"))),
              o = "{".concat(r[1]);
            e = r[0];
            var i = (o = this.interpolate(o, a)).match(/'/g),
              s = o.match(/"/g);
            ((i && i.length % 2 == 0 && !s) || s.length % 2 != 0) &&
              (o = o.replace(/'/g, '"'));
            try {
              (a = JSON.parse(o)), n && (a = t(t({}, n), a));
            } catch (t) {
              return (
                this.logger.warn(
                  "failed parsing options string in nesting for key ".concat(e),
                  t
                ),
                "".concat(e).concat(u).concat(o)
              );
            }
            return (
              a.defaultValue &&
                a.defaultValue.indexOf(this.prefix) > -1 &&
                delete a.defaultValue,
              e
            );
          };
        (r = this.nestingRegexp.exec(e));

      ) {
        var c = [];
        ((a =
          (a = t({}, s)).replace && !u(a.replace)
            ? a.replace
            : a).applyPostProcessor = !1),
          delete a.defaultValue;
        var p = !1;
        if (-1 !== r[0].indexOf(this.formatSeparator) && !/{.*}/.test(r[1])) {
          var h = r[1].split(this.formatSeparator).map((e) => e.trim());
          (r[1] = h.shift()), (c = h), (p = !0);
        }
        if ((i = n(l.call(this, r[1].trim(), a), a)) && r[0] === e && !u(i))
          return i;
        u(i) || (i = o(i)),
          i ||
            (this.logger.warn(
              "missed to resolve ".concat(r[1], " for nesting ").concat(e)
            ),
            (i = "")),
          p &&
            (i = c.reduce(
              (e, n) =>
                this.format(
                  e,
                  n,
                  s.lng,
                  t(t({}, s), {}, { interpolationkey: r[1].trim() })
                ),
              i.trim()
            )),
          (e = e.replace(r[0], i)),
          (this.regexp.lastIndex = 0);
      }
      return e;
    }
  }
  var V = (e) => {
    var n = {};
    return (u, r, o) => {
      var i = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (i = t(t({}, i), {}, { [o.interpolationkey]: void 0 }));
      var a = r + JSON.stringify(i),
        s = n[a];
      return s || ((s = e(E(r), o)), (n[a] = s)), s(u);
    };
  };
  class H {
    constructor() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (this.logger = F.create("formatter")),
        (this.options = e),
        (this.formats = {
          number: V((e, n) => {
            var u = new Intl.NumberFormat(e, t({}, n));
            return (e) => u.format(e);
          }),
          currency: V((e, n) => {
            var u = new Intl.NumberFormat(
              e,
              t(t({}, n), {}, { style: "currency" })
            );
            return (e) => u.format(e);
          }),
          datetime: V((e, n) => {
            var u = new Intl.DateTimeFormat(e, t({}, n));
            return (e) => u.format(e);
          }),
          relativetime: V((e, n) => {
            var u = new Intl.RelativeTimeFormat(e, t({}, n));
            return (e) => u.format(e, n.range || "day");
          }),
          list: V((e, n) => {
            var u = new Intl.ListFormat(e, t({}, n));
            return (e) => u.format(e);
          }),
        }),
        this.init(e);
    }
    init(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { interpolation: {} };
      this.formatSeparator = t.interpolation.formatSeparator || ",";
    }
    add(e, t) {
      this.formats[e.toLowerCase().trim()] = t;
    }
    addCached(e, t) {
      this.formats[e.toLowerCase().trim()] = V(t);
    }
    format(e, n, u) {
      var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = n.split(this.formatSeparator);
      if (
        o.length > 1 &&
        o[0].indexOf("(") > 1 &&
        o[0].indexOf(")") < 0 &&
        o.find((e) => e.indexOf(")") > -1)
      ) {
        var i = o.findIndex((e) => e.indexOf(")") > -1);
        o[0] = [o[0], ...o.splice(1, i)].join(this.formatSeparator);
      }
      return o.reduce((e, n) => {
        var { formatName: o, formatOptions: i } = ((e) => {
          var t = e.toLowerCase().trim(),
            n = {};
          if (e.indexOf("(") > -1) {
            var u = e.split("(");
            t = u[0].toLowerCase().trim();
            var r = u[1].substring(0, u[1].length - 1);
            if ("currency" === t && r.indexOf(":") < 0)
              n.currency || (n.currency = r.trim());
            else if ("relativetime" === t && r.indexOf(":") < 0)
              n.range || (n.range = r.trim());
            else {
              r.split(";").forEach((e) => {
                if (e) {
                  var [t, ...u] = e.split(":"),
                    r = u
                      .join(":")
                      .trim()
                      .replace(/^'+|'+$/g, ""),
                    o = t.trim();
                  n[o] || (n[o] = r),
                    "false" === r && (n[o] = !1),
                    "true" === r && (n[o] = !0),
                    isNaN(r) || (n[o] = parseInt(r, 10));
                }
              });
            }
          }
          return { formatName: t, formatOptions: n };
        })(n);
        if (this.formats[o]) {
          var a = e;
          try {
            var s =
                (r && r.formatParams && r.formatParams[r.interpolationkey]) ||
                {},
              l = s.locale || s.lng || r.locale || r.lng || u;
            a = this.formats[o](e, l, t(t(t({}, i), r), s));
          } catch (e) {
            this.logger.warn(e);
          }
          return a;
        }
        return (
          this.logger.warn("there was no format function for ".concat(o)), e
        );
      }, e);
    }
  }
  class q extends D {
    constructor(e, t, n) {
      var u =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      super(),
        (this.backend = e),
        (this.store = t),
        (this.services = n),
        (this.languageUtils = n.languageUtils),
        (this.options = u),
        (this.logger = F.create("backendConnector")),
        (this.waitingReads = []),
        (this.maxParallelReads = u.maxParallelReads || 10),
        (this.readingCalls = 0),
        (this.maxRetries = u.maxRetries >= 0 ? u.maxRetries : 5),
        (this.retryTimeout = u.retryTimeout >= 1 ? u.retryTimeout : 350),
        (this.state = {}),
        (this.queue = []),
        this.backend && this.backend.init && this.backend.init(n, u.backend, u);
    }
    queueLoad(e, t, n, u) {
      var r = {},
        o = {},
        i = {},
        a = {};
      return (
        e.forEach((e) => {
          var u = !0;
          t.forEach((t) => {
            var i = "".concat(e, "|").concat(t);
            !n.reload && this.store.hasResourceBundle(e, t)
              ? (this.state[i] = 2)
              : this.state[i] < 0 ||
                (1 === this.state[i]
                  ? void 0 === o[i] && (o[i] = !0)
                  : ((this.state[i] = 1),
                    (u = !1),
                    void 0 === o[i] && (o[i] = !0),
                    void 0 === r[i] && (r[i] = !0),
                    void 0 === a[t] && (a[t] = !0)));
          }),
            u || (i[e] = !0);
        }),
        (Object.keys(r).length || Object.keys(o).length) &&
          this.queue.push({
            pending: o,
            pendingCount: Object.keys(o).length,
            loaded: {},
            errors: [],
            callback: u,
          }),
        {
          toLoad: Object.keys(r),
          pending: Object.keys(o),
          toLoadLanguages: Object.keys(i),
          toLoadNamespaces: Object.keys(a),
        }
      );
    }
    loaded(e, t, n) {
      var u = e.split("|"),
        r = u[0],
        o = u[1];
      t && this.emit("failedLoading", r, o, t),
        !t &&
          n &&
          this.store.addResourceBundle(r, o, n, void 0, void 0, {
            skipCopy: !0,
          }),
        (this.state[e] = t ? -1 : 2),
        t && n && (this.state[e] = 0);
      var i = {};
      this.queue.forEach((n) => {
        ((e, t, n, u) => {
          var { obj: r, k: o } = l(e, t, Object);
          (r[o] = r[o] || []), r[o].push(n);
        })(n.loaded, [r], o),
          ((e, t) => {
            void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--);
          })(n, e),
          t && n.errors.push(t),
          0 !== n.pendingCount ||
            n.done ||
            (Object.keys(n.loaded).forEach((e) => {
              i[e] || (i[e] = {});
              var t = n.loaded[e];
              t.length &&
                t.forEach((t) => {
                  void 0 === i[e][t] && (i[e][t] = !0);
                });
            }),
            (n.done = !0),
            n.errors.length ? n.callback(n.errors) : n.callback());
      }),
        this.emit("loaded", i),
        (this.queue = this.queue.filter((e) => !e.done));
    }
    read(e, t, n) {
      var u =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        r =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : this.retryTimeout,
        o = arguments.length > 5 ? arguments[5] : void 0;
      if (!e.length) return o(null, {});
      if (this.readingCalls >= this.maxParallelReads)
        this.waitingReads.push({
          lng: e,
          ns: t,
          fcName: n,
          tried: u,
          wait: r,
          callback: o,
        });
      else {
        this.readingCalls++;
        var i = (i, a) => {
            if ((this.readingCalls--, this.waitingReads.length > 0)) {
              var s = this.waitingReads.shift();
              this.read(s.lng, s.ns, s.fcName, s.tried, s.wait, s.callback);
            }
            i && a && u < this.maxRetries
              ? setTimeout(() => {
                  this.read.call(this, e, t, n, u + 1, 2 * r, o);
                }, r)
              : o(i, a);
          },
          a = this.backend[n].bind(this.backend);
        if (2 !== a.length) return a(e, t, i);
        try {
          var s = a(e, t);
          s && "function" == typeof s.then
            ? s.then((e) => i(null, e)).catch(i)
            : i(null, s);
        } catch (e) {
          i(e);
        }
      }
    }
    prepareLoading(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return (
          this.logger.warn(
            "No backend was added via i18next.use. Will not load resources."
          ),
          r && r()
        );
      u(e) && (e = this.languageUtils.toResolveHierarchy(e)), u(t) && (t = [t]);
      var o = this.queueLoad(e, t, n, r);
      if (!o.toLoad.length) return o.pending.length || r(), null;
      o.toLoad.forEach((e) => {
        this.loadOne(e);
      });
    }
    load(e, t, n) {
      this.prepareLoading(e, t, {}, n);
    }
    reload(e, t, n) {
      this.prepareLoading(e, t, { reload: !0 }, n);
    }
    loadOne(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = e.split("|"),
        u = n[0],
        r = n[1];
      this.read(u, r, "read", void 0, void 0, (n, o) => {
        n &&
          this.logger.warn(
            ""
              .concat(t, "loading namespace ")
              .concat(r, " for language ")
              .concat(u, " failed"),
            n
          ),
          !n &&
            o &&
            this.logger.log(
              ""
                .concat(t, "loaded namespace ")
                .concat(r, " for language ")
                .concat(u),
              o
            ),
          this.loaded(e, n, o);
      });
    }
    saveMissing(e, n, u, r, o) {
      var i =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
        a =
          arguments.length > 6 && void 0 !== arguments[6]
            ? arguments[6]
            : () => {};
      if (
        this.services.utils &&
        this.services.utils.hasLoadedNamespace &&
        !this.services.utils.hasLoadedNamespace(n)
      )
        this.logger.warn(
          'did not save key "'
            .concat(u, '" as the namespace "')
            .concat(n, '" was not yet loaded'),
          "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
        );
      else if (null != u && "" !== u) {
        if (this.backend && this.backend.create) {
          var s = t(t({}, i), {}, { isUpdate: o }),
            l = this.backend.create.bind(this.backend);
          if (l.length < 6)
            try {
              var c;
              (c = 5 === l.length ? l(e, n, u, r, s) : l(e, n, u, r)) &&
              "function" == typeof c.then
                ? c.then((e) => a(null, e)).catch(a)
                : a(null, c);
            } catch (e) {
              a(e);
            }
          else l(e, n, u, r, a, s);
        }
        e && e[0] && this.store.addResource(e[0], n, u, r);
      }
    }
  }
  var _ = () => ({
      debug: !1,
      initImmediate: !0,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: !1,
      supportedLngs: !1,
      nonExplicitSupportedLngs: !1,
      load: "all",
      preload: !1,
      simplifyPluralSuffix: !0,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: !1,
      saveMissing: !1,
      updateMissing: !1,
      saveMissingTo: "fallback",
      saveMissingPlurals: !0,
      missingKeyHandler: !1,
      missingInterpolationHandler: !1,
      postProcess: !1,
      postProcessPassResolved: !1,
      returnNull: !1,
      returnEmptyString: !0,
      returnObjects: !1,
      joinArrays: !1,
      returnedObjectHandler: !1,
      parseMissingKeyHandler: !1,
      appendNamespaceToMissingKey: !1,
      appendNamespaceToCIMode: !1,
      overloadTranslationOptionHandler: (e) => {
        var t = {};
        if (
          ("object" == typeof e[1] && (t = e[1]),
          u(e[1]) && (t.defaultValue = e[1]),
          u(e[2]) && (t.tDescription = e[2]),
          "object" == typeof e[2] || "object" == typeof e[3])
        ) {
          var n = e[3] || e[2];
          Object.keys(n).forEach((e) => {
            t[e] = n[e];
          });
        }
        return t;
      },
      interpolation: {
        escapeValue: !0,
        format: (e) => e,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0,
      },
    }),
    z = (e) => (
      u(e.ns) && (e.ns = [e.ns]),
      u(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
      u(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
      e.supportedLngs &&
        e.supportedLngs.indexOf("cimode") < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
      e
    ),
    K = () => {};
  class J extends D {
    constructor() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 ? arguments[1] : void 0;
      if (
        (super(),
        (this.options = z(t)),
        (this.services = {}),
        (this.logger = F),
        (this.modules = { external: [] }),
        (e = this),
        Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
          "function" == typeof e[t] && (e[t] = e[t].bind(e));
        }),
        n && !this.isInitialized && !t.isClone)
      ) {
        if (!this.options.initImmediate) return this.init(t, n), this;
        setTimeout(() => {
          this.init(t, n);
        }, 0);
      }
    }
    init() {
      var e = this,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        o = arguments.length > 1 ? arguments[1] : void 0;
      (this.isInitializing = !0),
        "function" == typeof n && ((o = n), (n = {})),
        !n.defaultNS &&
          !1 !== n.defaultNS &&
          n.ns &&
          (u(n.ns)
            ? (n.defaultNS = n.ns)
            : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
      var i = _();
      (this.options = t(t(t({}, i), this.options), z(n))),
        "v1" !== this.options.compatibilityAPI &&
          (this.options.interpolation = t(
            t({}, i.interpolation),
            this.options.interpolation
          )),
        void 0 !== n.keySeparator &&
          (this.options.userDefinedKeySeparator = n.keySeparator),
        void 0 !== n.nsSeparator &&
          (this.options.userDefinedNsSeparator = n.nsSeparator);
      var a = (e) => (e ? ("function" == typeof e ? new e() : e) : null);
      if (!this.options.isClone) {
        var s;
        this.modules.logger
          ? F.init(a(this.modules.logger), this.options)
          : F.init(null, this.options),
          this.modules.formatter
            ? (s = this.modules.formatter)
            : "undefined" != typeof Intl && (s = H);
        var l = new S(this.options);
        this.store = new w(this.options.resources, this.options);
        var c = this.services;
        (c.logger = F),
          (c.resourceStore = this.store),
          (c.languageUtils = l),
          (c.pluralResolver = new R(l, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix,
          })),
          !s ||
            (this.options.interpolation.format &&
              this.options.interpolation.format !== i.interpolation.format) ||
            ((c.formatter = a(s)),
            c.formatter.init(c, this.options),
            (this.options.interpolation.format = c.formatter.format.bind(
              c.formatter
            ))),
          (c.interpolator = new M(this.options)),
          (c.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
          }),
          (c.backendConnector = new q(
            a(this.modules.backend),
            c.resourceStore,
            c,
            this.options
          )),
          c.backendConnector.on("*", function (t) {
            for (
              var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), r = 1;
              r < n;
              r++
            )
              u[r - 1] = arguments[r];
            e.emit(t, ...u);
          }),
          this.modules.languageDetector &&
            ((c.languageDetector = a(this.modules.languageDetector)),
            c.languageDetector.init &&
              c.languageDetector.init(c, this.options.detection, this.options)),
          this.modules.i18nFormat &&
            ((c.i18nFormat = a(this.modules.i18nFormat)),
            c.i18nFormat.init && c.i18nFormat.init(this)),
          (this.translator = new O(this.services, this.options)),
          this.translator.on("*", function (t) {
            for (
              var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), r = 1;
              r < n;
              r++
            )
              u[r - 1] = arguments[r];
            e.emit(t, ...u);
          }),
          this.modules.external.forEach((e) => {
            e.init && e.init(this);
          });
      }
      if (
        ((this.format = this.options.interpolation.format),
        o || (o = K),
        this.options.fallbackLng &&
          !this.services.languageDetector &&
          !this.options.lng)
      ) {
        var p = this.services.languageUtils.getFallbackCodes(
          this.options.fallbackLng
        );
        p.length > 0 && "dev" !== p[0] && (this.options.lng = p[0]);
      }
      this.services.languageDetector ||
        this.options.lng ||
        this.logger.warn(
          "init: no languageDetector is used and no lng is defined"
        );
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((t) => {
        this[t] = function () {
          return e.store[t](...arguments);
        };
      });
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((t) => {
        this[t] = function () {
          return e.store[t](...arguments), e;
        };
      });
      var h = r(),
        d = () => {
          var e = (e, t) => {
            (this.isInitializing = !1),
              this.isInitialized &&
                !this.initializedStoreOnce &&
                this.logger.warn(
                  "init: i18next is already initialized. You should call init just once!"
                ),
              (this.isInitialized = !0),
              this.options.isClone ||
                this.logger.log("initialized", this.options),
              this.emit("initialized", this.options),
              h.resolve(t),
              o(e, t);
          };
          if (
            this.languages &&
            "v1" !== this.options.compatibilityAPI &&
            !this.isInitialized
          )
            return e(null, this.t.bind(this));
          this.changeLanguage(this.options.lng, e);
        };
      return (
        this.options.resources || !this.options.initImmediate
          ? d()
          : setTimeout(d, 0),
        h
      );
    }
    loadResources(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K,
        n = u(e) ? e : this.language;
      if (
        ("function" == typeof e && (t = e),
        !this.options.resources || this.options.partialBundledLanguages)
      ) {
        if (
          n &&
          "cimode" === n.toLowerCase() &&
          (!this.options.preload || 0 === this.options.preload.length)
        )
          return t();
        var r = [],
          o = (e) => {
            e &&
              "cimode" !== e &&
              this.services.languageUtils.toResolveHierarchy(e).forEach((e) => {
                "cimode" !== e && r.indexOf(e) < 0 && r.push(e);
              });
          };
        if (n) o(n);
        else
          this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((e) => o(e));
        this.options.preload && this.options.preload.forEach((e) => o(e)),
          this.services.backendConnector.load(r, this.options.ns, (e) => {
            e ||
              this.resolvedLanguage ||
              !this.language ||
              this.setResolvedLanguage(this.language),
              t(e);
          });
      } else t(null);
    }
    reloadResources(e, t, n) {
      var u = r();
      return (
        "function" == typeof e && ((n = e), (e = void 0)),
        "function" == typeof t && ((n = t), (t = void 0)),
        e || (e = this.languages),
        t || (t = this.options.ns),
        n || (n = K),
        this.services.backendConnector.reload(e, t, (e) => {
          u.resolve(), n(e);
        }),
        u
      );
    }
    use(e) {
      if (!e)
        throw new Error(
          "You are passing an undefined module! Please check the object you are passing to i18next.use()"
        );
      if (!e.type)
        throw new Error(
          "You are passing a wrong module! Please check the object you are passing to i18next.use()"
        );
      return (
        "backend" === e.type && (this.modules.backend = e),
        ("logger" === e.type || (e.log && e.warn && e.error)) &&
          (this.modules.logger = e),
        "languageDetector" === e.type && (this.modules.languageDetector = e),
        "i18nFormat" === e.type && (this.modules.i18nFormat = e),
        "postProcessor" === e.type && B.addPostProcessor(e),
        "formatter" === e.type && (this.modules.formatter = e),
        "3rdParty" === e.type && this.modules.external.push(e),
        this
      );
    }
    setResolvedLanguage(e) {
      if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
        for (var t = 0; t < this.languages.length; t++) {
          var n = this.languages[t];
          if (
            !(["cimode", "dev"].indexOf(n) > -1) &&
            this.store.hasLanguageSomeTranslations(n)
          ) {
            this.resolvedLanguage = n;
            break;
          }
        }
    }
    changeLanguage(e, t) {
      var n = this;
      this.isLanguageChangingTo = e;
      var o = r();
      this.emit("languageChanging", e);
      var i = (e) => {
          (this.language = e),
            (this.languages =
              this.services.languageUtils.toResolveHierarchy(e)),
            (this.resolvedLanguage = void 0),
            this.setResolvedLanguage(e);
        },
        a = (e, u) => {
          u
            ? (i(u),
              this.translator.changeLanguage(u),
              (this.isLanguageChangingTo = void 0),
              this.emit("languageChanged", u),
              this.logger.log("languageChanged", u))
            : (this.isLanguageChangingTo = void 0),
            o.resolve(function () {
              return n.t(...arguments);
            }),
            t &&
              t(e, function () {
                return n.t(...arguments);
              });
        },
        s = (t) => {
          e || t || !this.services.languageDetector || (t = []);
          var n = u(t)
            ? t
            : this.services.languageUtils.getBestMatchFromCodes(t);
          n &&
            (this.language || i(n),
            this.translator.language || this.translator.changeLanguage(n),
            this.services.languageDetector &&
              this.services.languageDetector.cacheUserLanguage &&
              this.services.languageDetector.cacheUserLanguage(n)),
            this.loadResources(n, (e) => {
              a(e, n);
            });
        };
      return (
        e ||
        !this.services.languageDetector ||
        this.services.languageDetector.async
          ? !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
            ? 0 === this.services.languageDetector.detect.length
              ? this.services.languageDetector.detect().then(s)
              : this.services.languageDetector.detect(s)
            : s(e)
          : s(this.services.languageDetector.detect()),
        o
      );
    }
    getFixedT(e, n, r) {
      var o = this,
        i = function e(n, u) {
          var i;
          if ("object" != typeof u) {
            for (
              var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), l = 2;
              l < a;
              l++
            )
              s[l - 2] = arguments[l];
            i = o.options.overloadTranslationOptionHandler([n, u].concat(s));
          } else i = t({}, u);
          (i.lng = i.lng || e.lng),
            (i.lngs = i.lngs || e.lngs),
            (i.ns = i.ns || e.ns),
            "" !== i.keyPrefix &&
              (i.keyPrefix = i.keyPrefix || r || e.keyPrefix);
          var c,
            p = o.options.keySeparator || ".";
          return (
            (c =
              i.keyPrefix && Array.isArray(n)
                ? n.map((e) => "".concat(i.keyPrefix).concat(p).concat(e))
                : i.keyPrefix
                ? "".concat(i.keyPrefix).concat(p).concat(n)
                : n),
            o.t(c, i)
          );
        };
      return (
        u(e) ? (i.lng = e) : (i.lngs = e), (i.ns = n), (i.keyPrefix = r), i
      );
    }
    t() {
      return this.translator && this.translator.translate(...arguments);
    }
    exists() {
      return this.translator && this.translator.exists(...arguments);
    }
    setDefaultNamespace(e) {
      this.options.defaultNS = e;
    }
    hasLoadedNamespace(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!this.isInitialized)
        return (
          this.logger.warn(
            "hasLoadedNamespace: i18next was not initialized",
            this.languages
          ),
          !1
        );
      if (!this.languages || !this.languages.length)
        return (
          this.logger.warn(
            "hasLoadedNamespace: i18n.languages were undefined or empty",
            this.languages
          ),
          !1
        );
      var n = t.lng || this.resolvedLanguage || this.languages[0],
        u = !!this.options && this.options.fallbackLng,
        r = this.languages[this.languages.length - 1];
      if ("cimode" === n.toLowerCase()) return !0;
      var o = (e, t) => {
        var n =
          this.services.backendConnector.state["".concat(e, "|").concat(t)];
        return -1 === n || 0 === n || 2 === n;
      };
      if (t.precheck) {
        var i = t.precheck(this, o);
        if (void 0 !== i) return i;
      }
      return (
        !!this.hasResourceBundle(n, e) ||
        !(
          this.services.backendConnector.backend &&
          (!this.options.resources || this.options.partialBundledLanguages)
        ) ||
        !(!o(n, e) || (u && !o(r, e)))
      );
    }
    loadNamespaces(e, t) {
      var n = r();
      return this.options.ns
        ? (u(e) && (e = [e]),
          e.forEach((e) => {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
          }),
          this.loadResources((e) => {
            n.resolve(), t && t(e);
          }),
          n)
        : (t && t(), Promise.resolve());
    }
    loadLanguages(e, t) {
      var n = r();
      u(e) && (e = [e]);
      var o = this.options.preload || [],
        i = e.filter(
          (e) =>
            o.indexOf(e) < 0 && this.services.languageUtils.isSupportedCode(e)
        );
      return i.length
        ? ((this.options.preload = o.concat(i)),
          this.loadResources((e) => {
            n.resolve(), t && t(e);
          }),
          n)
        : (t && t(), Promise.resolve());
    }
    dir(e) {
      if (
        (e ||
          (e =
            this.resolvedLanguage ||
            (this.languages && this.languages.length > 0
              ? this.languages[0]
              : this.language)),
        !e)
      )
        return "rtl";
      var t = (this.services && this.services.languageUtils) || new S(_());
      return [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ].indexOf(t.getLanguagePartFromCode(e)) > -1 ||
        e.toLowerCase().indexOf("-arab") > 1
        ? "rtl"
        : "ltr";
    }
    static createInstance() {
      return new J(
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
    cloneInstance() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K,
        u = e.forkResourceStore;
      u && delete e.forkResourceStore;
      var r = t(t(t({}, this.options), e), { isClone: !0 }),
        o = new J(r);
      (void 0 === e.debug && void 0 === e.prefix) ||
        (o.logger = o.logger.clone(e));
      return (
        ["store", "services", "language"].forEach((e) => {
          o[e] = this[e];
        }),
        (o.services = t({}, this.services)),
        (o.services.utils = {
          hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
        }),
        u &&
          ((o.store = new w(this.store.data, r)),
          (o.services.resourceStore = o.store)),
        (o.translator = new O(o.services, r)),
        o.translator.on("*", function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1;
            u < t;
            u++
          )
            n[u - 1] = arguments[u];
          o.emit(e, ...n);
        }),
        o.init(r, n),
        (o.translator.options = r),
        (o.translator.backendConnector.services.utils = {
          hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
        }),
        o
      );
    }
    toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage,
      };
    }
  }
  var W = J.createInstance();
  W.createInstance = J.createInstance;
  var X;
  W.createInstance,
    W.dir,
    W.init,
    W.loadResources,
    W.reloadResources,
    W.use,
    W.changeLanguage,
    W.getFixedT,
    W.t,
    W.exists,
    W.setDefaultNamespace,
    W.hasLoadedNamespace,
    W.loadNamespaces,
    W.loadLanguages;
  function G(e) {
    return (G =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function $() {
    return (
      "function" == typeof XMLHttpRequest ||
      "object" ===
        ("undefined" == typeof XMLHttpRequest ? "undefined" : G(XMLHttpRequest))
    );
  }
  if (
    ("function" == typeof fetch &&
      (X =
        "undefined" != typeof global && global.fetch
          ? global.fetch
          : "undefined" != typeof window && window.fetch
          ? window.fetch
          : fetch),
    "undefined" != typeof require && "undefined" == typeof window)
  ) {
    var Y = X || require("cross-fetch");
    Y.default && (Y = Y.default),
      (exports.default = Y),
      (module.exports = exports.default);
  }
  var Q,
    Z,
    ee,
    te = Object.freeze({ __proto__: null });
  function ne(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);
      t &&
        (u = u.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, u);
    }
    return n;
  }
  function ue(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? ne(Object(n), !0).forEach(function (t) {
            re(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ne(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function re(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != oe(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var u = n.call(e, t || "default");
            if ("object" != oe(u)) return u;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == oe(t) ? t : t + "";
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function oe(e) {
    return (oe =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  "function" == typeof fetch &&
    (Q =
      "undefined" != typeof global && global.fetch
        ? global.fetch
        : "undefined" != typeof window && window.fetch
        ? window.fetch
        : fetch),
    $() &&
      ("undefined" != typeof global && global.XMLHttpRequest
        ? (Z = global.XMLHttpRequest)
        : "undefined" != typeof window &&
          window.XMLHttpRequest &&
          (Z = window.XMLHttpRequest)),
    "function" == typeof ActiveXObject &&
      ("undefined" != typeof global && global.ActiveXObject
        ? (ee = global.ActiveXObject)
        : "undefined" != typeof window &&
          window.ActiveXObject &&
          (ee = window.ActiveXObject)),
    Q || !te || Z || ee || (Q = te),
    "function" != typeof Q && (Q = void 0);
  var ie = function (e, t) {
      if (t && "object" === oe(t)) {
        var n = "";
        for (var u in t)
          n += "&" + encodeURIComponent(u) + "=" + encodeURIComponent(t[u]);
        if (!n) return e;
        e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1);
      }
      return e;
    },
    ae = function (e, t, n, u) {
      var r = function (e) {
        if (!e.ok) return n(e.statusText || "Error", { status: e.status });
        e.text()
          .then(function (t) {
            n(null, { status: e.status, data: t });
          })
          .catch(n);
      };
      if (u) {
        var o = u(e, t);
        if (o instanceof Promise) return void o.then(r).catch(n);
      }
      "function" == typeof fetch
        ? fetch(e, t).then(r).catch(n)
        : Q(e, t).then(r).catch(n);
    },
    se = !1,
    le = function (e, t, n, u) {
      return (
        "function" == typeof n && ((u = n), (n = void 0)),
        (u = u || function () {}),
        Q && 0 !== t.indexOf("file:")
          ? (function (e, t, n, u) {
              e.queryStringParams && (t = ie(t, e.queryStringParams));
              var r = ue(
                {},
                "function" == typeof e.customHeaders
                  ? e.customHeaders()
                  : e.customHeaders
              );
              "undefined" == typeof window &&
                "undefined" != typeof global &&
                void 0 !== global.process &&
                global.process.versions &&
                global.process.versions.node &&
                (r["User-Agent"] = "i18next-http-backend (node/"
                  .concat(global.process.version, "; ")
                  .concat(global.process.platform, " ")
                  .concat(global.process.arch, ")")),
                n && (r["Content-Type"] = "application/json");
              var o =
                  "function" == typeof e.requestOptions
                    ? e.requestOptions(n)
                    : e.requestOptions,
                i = ue(
                  {
                    method: n ? "POST" : "GET",
                    body: n ? e.stringify(n) : void 0,
                    headers: r,
                  },
                  se ? {} : o
                ),
                a =
                  "function" == typeof e.alternateFetch &&
                  e.alternateFetch.length >= 1
                    ? e.alternateFetch
                    : void 0;
              try {
                ae(t, i, u, a);
              } catch (e) {
                if (
                  !o ||
                  0 === Object.keys(o).length ||
                  !e.message ||
                  e.message.indexOf("not implemented") < 0
                )
                  return u(e);
                try {
                  Object.keys(o).forEach(function (e) {
                    delete i[e];
                  }),
                    ae(t, i, u, a),
                    (se = !0);
                } catch (e) {
                  u(e);
                }
              }
            })(e, t, n, u)
          : $() || "function" == typeof ActiveXObject
          ? (function (e, t, n, u) {
              n && "object" === oe(n) && (n = ie("", n).slice(1)),
                e.queryStringParams && (t = ie(t, e.queryStringParams));
              try {
                var r;
                (r = Z ? new Z() : new ee("MSXML2.XMLHTTP.3.0")).open(
                  n ? "POST" : "GET",
                  t,
                  1
                ),
                  e.crossDomain ||
                    r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                  (r.withCredentials = !!e.withCredentials),
                  n &&
                    r.setRequestHeader(
                      "Content-Type",
                      "application/x-www-form-urlencoded"
                    ),
                  r.overrideMimeType && r.overrideMimeType("application/json");
                var o = e.customHeaders;
                if ((o = "function" == typeof o ? o() : o))
                  for (var i in o) r.setRequestHeader(i, o[i]);
                (r.onreadystatechange = function () {
                  r.readyState > 3 &&
                    u(r.status >= 400 ? r.statusText : null, {
                      status: r.status,
                      data: r.responseText,
                    });
                }),
                  r.send(n);
              } catch (e) {
                console && console.log(e);
              }
            })(e, t, n, u)
          : void u(new Error("No fetch and no xhr implementation found!"))
      );
    };
  function ce(e) {
    return (ce =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function pe(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);
      t &&
        (u = u.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, u);
    }
    return n;
  }
  function he(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? pe(Object(n), !0).forEach(function (t) {
            ge(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pe(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function de(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function fe(e, t) {
    for (var n = 0; n < t.length; n++) {
      var u = t[n];
      (u.enumerable = u.enumerable || !1),
        (u.configurable = !0),
        "value" in u && (u.writable = !0),
        Object.defineProperty(e, ve(u.key), u);
    }
  }
  function ge(e, t, n) {
    return (
      (t = ve(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function ve(e) {
    var t = (function (e, t) {
      if ("object" != ce(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var u = n.call(e, t || "default");
        if ("object" != ce(u)) return u;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == ce(t) ? t : t + "";
  }
  var me = function () {
      return {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
        addPath: "/locales/add/{{lng}}/{{ns}}",
        parse: function (e) {
          return JSON.parse(e);
        },
        stringify: JSON.stringify,
        parsePayload: function (e, t, n) {
          return ge({}, t, n || "");
        },
        parseLoadPayload: function (e, t) {},
        request: le,
        reloadInterval: "undefined" == typeof window && 36e5,
        customHeaders: {},
        queryStringParams: {},
        crossDomain: !1,
        withCredentials: !1,
        overrideMimeType: !1,
        requestOptions: {
          mode: "cors",
          credentials: "same-origin",
          cache: "default",
        },
      };
    },
    Ae = (function (e, t, n) {
      return (
        t && fe(e.prototype, t),
        n && fe(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    })(
      function e(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          u =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        de(this, e),
          (this.services = t),
          (this.options = n),
          (this.allOptions = u),
          (this.type = "backend"),
          this.init(t, n, u);
      },
      [
        {
          key: "init",
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            if (
              ((this.services = e),
              (this.options = he(he(he({}, me()), this.options || {}), n)),
              (this.allOptions = u),
              this.services && this.options.reloadInterval)
            ) {
              var r = setInterval(function () {
                return t.reload();
              }, this.options.reloadInterval);
              "object" === ce(r) && "function" == typeof r.unref && r.unref();
            }
          },
        },
        {
          key: "readMulti",
          value: function (e, t, n) {
            this._readAny(e, e, t, t, n);
          },
        },
        {
          key: "read",
          value: function (e, t, n) {
            this._readAny([e], e, [t], t, n);
          },
        },
        {
          key: "_readAny",
          value: function (e, t, n, u, r) {
            var o,
              i = this,
              a = this.options.loadPath;
            "function" == typeof this.options.loadPath &&
              (a = this.options.loadPath(e, n)),
              (a = (function (e) {
                return !!e && "function" == typeof e.then;
              })((o = a))
                ? o
                : Promise.resolve(o)).then(function (o) {
                if (!o) return r(null, {});
                var a = i.services.interpolator.interpolate(o, {
                  lng: e.join("+"),
                  ns: n.join("+"),
                });
                i.loadUrl(a, r, t, u);
              });
          },
        },
        {
          key: "loadUrl",
          value: function (e, t, n, u) {
            var r = this,
              o = "string" == typeof n ? [n] : n,
              i = "string" == typeof u ? [u] : u,
              a = this.options.parseLoadPayload(o, i);
            this.options.request(this.options, e, a, function (o, i) {
              if (i && ((i.status >= 500 && i.status < 600) || !i.status))
                return t(
                  "failed loading " + e + "; status code: " + i.status,
                  !0
                );
              if (i && i.status >= 400 && i.status < 500)
                return t(
                  "failed loading " + e + "; status code: " + i.status,
                  !1
                );
              if (!i && o && o.message) {
                var a = o.message.toLowerCase();
                if (
                  ["failed", "fetch", "network", "load"].find(function (e) {
                    return a.indexOf(e) > -1;
                  })
                )
                  return t("failed loading " + e + ": " + o.message, !0);
              }
              if (o) return t(o, !1);
              var s, l;
              try {
                s =
                  "string" == typeof i.data
                    ? r.options.parse(i.data, n, u)
                    : i.data;
              } catch (t) {
                l = "failed parsing " + e + " to json";
              }
              if (l) return t(l, !1);
              t(null, s);
            });
          },
        },
        {
          key: "create",
          value: function (e, t, n, u, r) {
            var o = this;
            if (this.options.addPath) {
              "string" == typeof e && (e = [e]);
              var i = this.options.parsePayload(t, n, u),
                a = 0,
                s = [],
                l = [];
              e.forEach(function (n) {
                var u = o.options.addPath;
                "function" == typeof o.options.addPath &&
                  (u = o.options.addPath(n, t));
                var c = o.services.interpolator.interpolate(u, {
                  lng: n,
                  ns: t,
                });
                o.options.request(o.options, c, i, function (t, n) {
                  (a += 1),
                    s.push(t),
                    l.push(n),
                    a === e.length && "function" == typeof r && r(s, l);
                });
              });
            }
          },
        },
        {
          key: "reload",
          value: function () {
            var e = this,
              t = this.services,
              n = t.backendConnector,
              u = t.languageUtils,
              r = t.logger,
              o = n.language;
            if (!o || "cimode" !== o.toLowerCase()) {
              var i = [],
                a = function (e) {
                  u.toResolveHierarchy(e).forEach(function (e) {
                    i.indexOf(e) < 0 && i.push(e);
                  });
                };
              a(o),
                this.allOptions.preload &&
                  this.allOptions.preload.forEach(function (e) {
                    return a(e);
                  }),
                i.forEach(function (t) {
                  e.allOptions.ns.forEach(function (e) {
                    n.read(t, e, "read", null, null, function (u, o) {
                      u &&
                        r.warn(
                          "loading namespace "
                            .concat(e, " for language ")
                            .concat(t, " failed"),
                          u
                        ),
                        !u &&
                          o &&
                          r.log(
                            "loaded namespace "
                              .concat(e, " for language ")
                              .concat(t),
                            o
                          ),
                        n.loaded("".concat(t, "|").concat(e), u, o);
                    });
                  });
                });
            }
          },
        },
      ]
    );
  function ye(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Ee(e) {
    return (Ee =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function Ce(e) {
    var t = (function (e, t) {
      if ("object" !== Ee(e) || null === e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 !== n) {
        var u = n.call(e, t || "default");
        if ("object" !== Ee(u)) return u;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === Ee(t) ? t : String(t);
  }
  function be(e, t) {
    for (var n = 0; n < t.length; n++) {
      var u = t[n];
      (u.enumerable = u.enumerable || !1),
        (u.configurable = !0),
        "value" in u && (u.writable = !0),
        Object.defineProperty(e, Ce(u.key), u);
    }
  }
  Ae.type = "backend";
  var Fe = [],
    De = Fe.forEach,
    we = Fe.slice;
  function Be(e) {
    return (
      De.call(we.call(arguments, 1), function (t) {
        if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n]);
      }),
      e
    );
  }
  var xe = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    Oe = function (e, t, n) {
      var u = n || {};
      u.path = u.path || "/";
      var r = encodeURIComponent(t),
        o = "".concat(e, "=").concat(r);
      if (u.maxAge > 0) {
        var i = u.maxAge - 0;
        if (Number.isNaN(i)) throw new Error("maxAge should be a Number");
        o += "; Max-Age=".concat(Math.floor(i));
      }
      if (u.domain) {
        if (!xe.test(u.domain)) throw new TypeError("option domain is invalid");
        o += "; Domain=".concat(u.domain);
      }
      if (u.path) {
        if (!xe.test(u.path)) throw new TypeError("option path is invalid");
        o += "; Path=".concat(u.path);
      }
      if (u.expires) {
        if ("function" != typeof u.expires.toUTCString)
          throw new TypeError("option expires is invalid");
        o += "; Expires=".concat(u.expires.toUTCString());
      }
      if (
        (u.httpOnly && (o += "; HttpOnly"),
        u.secure && (o += "; Secure"),
        u.sameSite)
      )
        switch (
          "string" == typeof u.sameSite ? u.sameSite.toLowerCase() : u.sameSite
        ) {
          case !0:
            o += "; SameSite=Strict";
            break;
          case "lax":
            o += "; SameSite=Lax";
            break;
          case "strict":
            o += "; SameSite=Strict";
            break;
          case "none":
            o += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      return o;
    },
    ke = function (e, t, n, u) {
      var r =
        arguments.length > 4 && void 0 !== arguments[4]
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      n &&
        ((r.expires = new Date()),
        r.expires.setTime(r.expires.getTime() + 60 * n * 1e3)),
        u && (r.domain = u),
        (document.cookie = Oe(e, encodeURIComponent(t), r));
    },
    Se = function (e) {
      for (
        var t = "".concat(e, "="), n = document.cookie.split(";"), u = 0;
        u < n.length;
        u++
      ) {
        for (var r = n[u]; " " === r.charAt(0); ) r = r.substring(1, r.length);
        if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
      }
      return null;
    },
    Ne = {
      name: "cookie",
      lookup: function (e) {
        var t;
        if (e.lookupCookie && "undefined" != typeof document) {
          var n = Se(e.lookupCookie);
          n && (t = n);
        }
        return t;
      },
      cacheUserLanguage: function (e, t) {
        t.lookupCookie &&
          "undefined" != typeof document &&
          ke(
            t.lookupCookie,
            e,
            t.cookieMinutes,
            t.cookieDomain,
            t.cookieOptions
          );
      },
    },
    Le = {
      name: "querystring",
      lookup: function (e) {
        var t;
        if ("undefined" != typeof window) {
          var n = window.location.search;
          !window.location.search &&
            window.location.hash &&
            window.location.hash.indexOf("?") > -1 &&
            (n = window.location.hash.substring(
              window.location.hash.indexOf("?")
            ));
          for (var u = n.substring(1).split("&"), r = 0; r < u.length; r++) {
            var o = u[r].indexOf("=");
            if (o > 0)
              u[r].substring(0, o) === e.lookupQuerystring &&
                (t = u[r].substring(o + 1));
          }
        }
        return t;
      },
    },
    Pe = null,
    Te = function () {
      if (null !== Pe) return Pe;
      try {
        Pe = "undefined" !== window && null !== window.localStorage;
        window.localStorage.setItem("i18next.translate.boo", "foo"),
          window.localStorage.removeItem("i18next.translate.boo");
      } catch (e) {
        Pe = !1;
      }
      return Pe;
    },
    je = {
      name: "localStorage",
      lookup: function (e) {
        var t;
        if (e.lookupLocalStorage && Te()) {
          var n = window.localStorage.getItem(e.lookupLocalStorage);
          n && (t = n);
        }
        return t;
      },
      cacheUserLanguage: function (e, t) {
        t.lookupLocalStorage &&
          Te() &&
          window.localStorage.setItem(t.lookupLocalStorage, e);
      },
    },
    Re = null,
    Ie = function () {
      if (null !== Re) return Re;
      try {
        Re = "undefined" !== window && null !== window.sessionStorage;
        window.sessionStorage.setItem("i18next.translate.boo", "foo"),
          window.sessionStorage.removeItem("i18next.translate.boo");
      } catch (e) {
        Re = !1;
      }
      return Re;
    },
    Ue = {
      name: "sessionStorage",
      lookup: function (e) {
        var t;
        if (e.lookupSessionStorage && Ie()) {
          var n = window.sessionStorage.getItem(e.lookupSessionStorage);
          n && (t = n);
        }
        return t;
      },
      cacheUserLanguage: function (e, t) {
        t.lookupSessionStorage &&
          Ie() &&
          window.sessionStorage.setItem(t.lookupSessionStorage, e);
      },
    },
    Me = {
      name: "navigator",
      lookup: function (e) {
        var t = [];
        if ("undefined" != typeof navigator) {
          if (navigator.languages)
            for (var n = 0; n < navigator.languages.length; n++)
              t.push(navigator.languages[n]);
          navigator.userLanguage && t.push(navigator.userLanguage),
            navigator.language && t.push(navigator.language);
        }
        return t.length > 0 ? t : void 0;
      },
    },
    Ve = {
      name: "htmlTag",
      lookup: function (e) {
        var t,
          n =
            e.htmlTag ||
            ("undefined" != typeof document ? document.documentElement : null);
        return (
          n &&
            "function" == typeof n.getAttribute &&
            (t = n.getAttribute("lang")),
          t
        );
      },
    },
    He = {
      name: "path",
      lookup: function (e) {
        var t;
        if ("undefined" != typeof window) {
          var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
          if (n instanceof Array)
            if ("number" == typeof e.lookupFromPathIndex) {
              if ("string" != typeof n[e.lookupFromPathIndex]) return;
              t = n[e.lookupFromPathIndex].replace("/", "");
            } else t = n[0].replace("/", "");
        }
        return t;
      },
    },
    qe = {
      name: "subdomain",
      lookup: function (e) {
        var t =
            "number" == typeof e.lookupFromSubdomainIndex
              ? e.lookupFromSubdomainIndex + 1
              : 1,
          n =
            "undefined" != typeof window &&
            window.location &&
            window.location.hostname &&
            window.location.hostname.match(
              /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
            );
        if (n) return n[t];
      },
    },
    _e = !1;
  try {
    document.cookie, (_e = !0);
  } catch (e) {}
  var ze = [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
  ];
  function Ke() {
    return {
      order: ze,
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      caches: ["localStorage"],
      excludeCacheFor: ["cimode"],
      convertDetectedLanguage: function (e) {
        return e;
      },
    };
  }
  _e || ze.splice(1, 1);
  var Je = (function () {
    return (
      (e = function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ye(this, e),
          (this.type = "languageDetector"),
          (this.detectors = {}),
          this.init(t, n);
      }),
      (t = [
        {
          key: "init",
          value: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            (this.services = e || { languageUtils: {} }),
              (this.options = Be(t, this.options || {}, Ke())),
              "string" == typeof this.options.convertDetectedLanguage &&
                this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
                (this.options.convertDetectedLanguage = function (e) {
                  return e.replace("-", "_");
                }),
              this.options.lookupFromUrlIndex &&
                (this.options.lookupFromPathIndex =
                  this.options.lookupFromUrlIndex),
              (this.i18nOptions = n),
              this.addDetector(Ne),
              this.addDetector(Le),
              this.addDetector(je),
              this.addDetector(Ue),
              this.addDetector(Me),
              this.addDetector(Ve),
              this.addDetector(He),
              this.addDetector(qe);
          },
        },
        {
          key: "addDetector",
          value: function (e) {
            return (this.detectors[e.name] = e), this;
          },
        },
        {
          key: "detect",
          value: function (e) {
            var t = this;
            e || (e = this.options.order);
            var n = [];
            return (
              e.forEach(function (e) {
                if (t.detectors[e]) {
                  var u = t.detectors[e].lookup(t.options);
                  u && "string" == typeof u && (u = [u]),
                    u && (n = n.concat(u));
                }
              }),
              (n = n.map(function (e) {
                return t.options.convertDetectedLanguage(e);
              })),
              this.services.languageUtils.getBestMatchFromCodes
                ? n
                : n.length > 0
                ? n[0]
                : null
            );
          },
        },
        {
          key: "cacheUserLanguage",
          value: function (e, t) {
            var n = this;
            t || (t = this.options.caches),
              t &&
                ((this.options.excludeCacheFor &&
                  this.options.excludeCacheFor.indexOf(e) > -1) ||
                  t.forEach(function (t) {
                    n.detectors[t] &&
                      n.detectors[t].cacheUserLanguage(e, n.options);
                  }));
          },
        },
      ]) && be(e.prototype, t),
      n && be(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
    var e, t, n;
  })();
  Je.type = "languageDetector";
  class We extends class {
    constructor() {
      this.observers = {};
    }
    on(e, t) {
      return (
        e.split(" ").forEach((e) => {
          (this.observers[e] = this.observers[e] || []),
            this.observers[e].push(t);
        }),
        this
      );
    }
    off(e, t) {
      this.observers[e] &&
        (t
          ? (this.observers[e] = this.observers[e].filter((e) => e !== t))
          : delete this.observers[e]);
    }
    emit(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), u = 1;
        u < t;
        u++
      )
        n[u - 1] = arguments[u];
      this.observers[e] &&
        [].concat(this.observers[e]).forEach((e) => {
          e(...n);
        });
      this.observers["*"] &&
        [].concat(this.observers["*"]).forEach((t) => {
          t.apply(t, [e, ...n]);
        });
    }
  } {
    constructor(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      super(),
        (this.ele = e),
        (this.options = t),
        (this.observer = this.create()),
        (this.internalChange = !0);
    }
    create() {
      var e,
        t = () => {
          e && window.clearTimeout(e),
            (e = setTimeout(() => {
              this.internalChange && (this.internalChange = !1);
            }, 200));
        },
        n = new MutationObserver((e) => {
          this.internalChange && t(),
            this.internalChange || this.emit("changed", e);
        });
      return (
        n.observe(this.ele, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
        }),
        n
      );
    }
    reset() {
      this.internalChange = !0;
    }
  }
  var Xe = [],
    Ge = !1,
    $e = !1;
  function Ye() {
    if (!Ge) {
      Ge = !0;
      for (var e = 0; e < Xe.length; e++) Xe[e].fn.call(window, Xe[e].ctx);
      Xe = [];
    }
  }
  function Qe() {
    "complete" === document.readyState && Ye();
  }
  function Ze(e, t) {
    Ge
      ? setTimeout(function () {
          e(t);
        }, 1)
      : (Xe.push({ fn: e, ctx: t }),
        "complete" === document.readyState ||
        (!document.attachEvent && "interactive" === document.readyState)
          ? setTimeout(Ye, 1)
          : $e ||
            (document.addEventListener
              ? (document.addEventListener("DOMContentLoaded", Ye, !1),
                window.addEventListener("load", Ye, !1))
              : (document.attachEvent("onreadystatechange", Qe),
                window.attachEvent("onload", Ye)),
            ($e = !0)));
  }
  var et =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function tt(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var nt = function (e) {
    return e && "VirtualNode" === e.type && "2" === e.version;
  };
  var ut = function (e) {
    return e && "Widget" === e.type;
  };
  var rt = function (e) {
    return e && "Thunk" === e.type;
  };
  var ot = function (e) {
    return (
      e &&
      (("function" == typeof e.hook && !e.hasOwnProperty("hook")) ||
        ("function" == typeof e.unhook && !e.hasOwnProperty("unhook")))
    );
  };
  var it = lt,
    at = {},
    st = [];
  function lt(e, t, n, u, r) {
    (this.tagName = e),
      (this.properties = t || at),
      (this.children = n || st),
      (this.key = null != u ? String(u) : void 0),
      (this.namespace = "string" == typeof r ? r : null);
    var o,
      i = (n && n.length) || 0,
      a = 0,
      s = !1,
      l = !1,
      c = !1;
    for (var p in t)
      if (t.hasOwnProperty(p)) {
        var h = t[p];
        ot(h) && h.unhook && (o || (o = {}), (o[p] = h));
      }
    for (var d = 0; d < i; d++) {
      var f = n[d];
      nt(f)
        ? ((a += f.count || 0),
          !s && f.hasWidgets && (s = !0),
          !l && f.hasThunks && (l = !0),
          c || (!f.hooks && !f.descendantHooks) || (c = !0))
        : !s && ut(f)
        ? "function" == typeof f.destroy && (s = !0)
        : !l && rt(f) && (l = !0);
    }
    (this.count = i + a),
      (this.hasWidgets = s),
      (this.hasThunks = l),
      (this.hooks = o),
      (this.descendantHooks = c);
  }
  (lt.prototype.version = "2"), (lt.prototype.type = "VirtualNode");
  var ct = pt;
  function pt(e) {
    this.text = String(e);
  }
  (pt.prototype.version = "2"), (pt.prototype.type = "VirtualText");
  var ht = dt;
  function dt(e) {
    this.text = String(e);
  }
  (dt.prototype.type = "Widget"),
    (dt.prototype.init = function () {
      return document.createComment(this.text);
    }),
    (dt.prototype.update = function (e, t) {
      this.text !== e.text && (t.nodeValue = this.text);
    });
  var ft = tt(function (e) {
      function t(e, r) {
        return 1 == e.nodeType
          ? (function (e) {
              for (
                var r = e.tagName,
                  o =
                    "http://www.w3.org/1999/xhtml" == e.namespaceURI
                      ? null
                      : e.namespaceURI,
                  i = (function (e) {
                    for (var t = {}, r = 0; r < n.length; r++) {
                      var o = n[r];
                      if (e[o])
                        if ("style" != o) {
                          if ("img" !== e.tagName.toLowerCase() || "href" !== o)
                            if ("attributes" != o)
                              ("tabIndex" == o && -1 === e.tabIndex) ||
                                ("contentEditable" == o &&
                                  "inherit" === e[o]) ||
                                ("object" != typeof e[o] && (t[o] = e[o]));
                            else {
                              for (
                                var i = Array.prototype.slice.call(e[o]),
                                  a = {},
                                  s = 0;
                                s < i.length;
                                s++
                              ) {
                                var l = i[s].name;
                                t[l] || t[u[l]] || (a[l] = e.getAttribute(l));
                              }
                              t[o] = a;
                            }
                        } else {
                          var c = {};
                          if (void 0 !== e.style.length)
                            for (var p = 0; p < e.style.length; p++)
                              (h = e.style[p]),
                                (c[h] = e.style.getPropertyValue(h));
                          else
                            for (var h in e.style)
                              e.style[h] &&
                                e.style.hasOwnProperty(h) &&
                                (c[h] = e.style[h]);
                          Object.keys(c).length && (t[o] = c);
                        }
                    }
                    return t;
                  })(e),
                  a = [],
                  s = 0;
                s < e.childNodes.length;
                s++
              )
                a.push(t(e.childNodes[s]));
              return new it(r, i, a, null, o);
            })(e)
          : 3 == e.nodeType
          ? new ct(e.nodeValue)
          : 8 == e.nodeType
          ? new ht(e.nodeValue)
          : void 0;
      }
      /*!
       * vdom-virtualize
       * Copyright 2014 by Marcel Klehr <mklehr@gmx.net>
       *
       * (MIT LICENSE)
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      e.exports = t;
      var n = (e.exports.properties = [
          "accept",
          "accessKey",
          "action",
          "alt",
          "async",
          "autoComplete",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "checked",
          "className",
          "colSpan",
          "content",
          "contentEditable",
          "controls",
          "crossOrigin",
          "data",
          "defer",
          "dir",
          "download",
          "draggable",
          "encType",
          "formNoValidate",
          "href",
          "hrefLang",
          "htmlFor",
          "httpEquiv",
          "icon",
          "id",
          "label",
          "lang",
          "list",
          "loop",
          "max",
          "mediaGroup",
          "method",
          "min",
          "multiple",
          "muted",
          "name",
          "noValidate",
          "pattern",
          "placeholder",
          "poster",
          "preload",
          "radioGroup",
          "readOnly",
          "rel",
          "required",
          "rowSpan",
          "sandbox",
          "scope",
          "scrollLeft",
          "scrolling",
          "scrollTop",
          "selected",
          "span",
          "spellCheck",
          "src",
          "srcDoc",
          "srcSet",
          "start",
          "step",
          "style",
          "tabIndex",
          "target",
          "title",
          "type",
          "value",
          "autoCapitalize",
          "autoCorrect",
          "property",
          "attributes",
        ]),
        u = (e.exports.attrBlacklist = { class: "className" });
    }),
    gt = (ft.properties, ft.attrBlacklist, Array.isArray),
    vt = Object.prototype.toString,
    mt =
      gt ||
      function (e) {
        return "[object Array]" === vt.call(e);
      };
  (yt.NONE = 0),
    (yt.VTEXT = 1),
    (yt.VNODE = 2),
    (yt.WIDGET = 3),
    (yt.PROPS = 4),
    (yt.ORDER = 5),
    (yt.INSERT = 6),
    (yt.REMOVE = 7),
    (yt.THUNK = 8);
  var At = yt;
  function yt(e, t, n) {
    (this.type = Number(e)), (this.vNode = t), (this.patch = n);
  }
  (yt.prototype.version = "2"), (yt.prototype.type = "VirtualPatch");
  var Et = function (e) {
    return e && "VirtualText" === e.type && "2" === e.version;
  };
  var Ct = function (e, t) {
    var n = e,
      u = t;
    rt(t) && (u = bt(t, e));
    rt(e) && (n = bt(e, null));
    return { a: n, b: u };
  };
  function bt(e, t) {
    var n = e.vnode;
    if ((n || (n = e.vnode = e.render(t)), !(nt(n) || Et(n) || ut(n))))
      throw new Error("thunk did not return a valid node");
    return n;
  }
  var Ft = function (e) {
      return "object" == typeof e && null !== e;
    },
    Dt = function e(t, n) {
      var u;
      for (var r in t) {
        r in n || ((u = u || {})[r] = void 0);
        var o = t[r],
          i = n[r];
        if (o !== i)
          if (Ft(o) && Ft(i))
            if (wt(i) !== wt(o)) (u = u || {})[r] = i;
            else if (ot(i)) (u = u || {})[r] = i;
            else {
              var a = e(o, i);
              a && ((u = u || {})[r] = a);
            }
          else (u = u || {})[r] = i;
      }
      for (var s in n) s in t || ((u = u || {})[s] = n[s]);
      return u;
    };
  function wt(e) {
    return Object.getPrototypeOf
      ? Object.getPrototypeOf(e)
      : e.__proto__
      ? e.__proto__
      : e.constructor
      ? e.constructor.prototype
      : void 0;
  }
  function Bt(e, t) {
    var n = { a: e };
    return xt(e, t, n, 0), n;
  }
  function xt(e, t, n, u) {
    if (e !== t) {
      var r = n[u],
        o = !1;
      if (rt(e) || rt(t)) kt(e, t, n, u);
      else if (null == t)
        ut(e) || (Ot(e, n, u), (r = n[u])),
          (r = Lt(r, new At(At.REMOVE, e, t)));
      else if (nt(t))
        if (nt(e))
          if (
            e.tagName === t.tagName &&
            e.namespace === t.namespace &&
            e.key === t.key
          ) {
            var i = Dt(e.properties, t.properties);
            i && (r = Lt(r, new At(At.PROPS, e, i))),
              (r = (function (e, t, n, u, r) {
                for (
                  var o = e.children,
                    i = (function (e, t) {
                      var n = Nt(t),
                        u = n.keys,
                        r = n.free;
                      if (r.length === t.length)
                        return { children: t, moves: null };
                      var o = Nt(e),
                        i = o.keys;
                      if (o.free.length === e.length)
                        return { children: t, moves: null };
                      for (
                        var a = [], s = 0, l = r.length, c = 0, p = 0;
                        p < e.length;
                        p++
                      ) {
                        var h,
                          d = e[p];
                        d.key
                          ? u.hasOwnProperty(d.key)
                            ? ((h = u[d.key]), a.push(t[h]))
                            : ((h = p - c++), a.push(null))
                          : s < l
                          ? ((h = r[s++]), a.push(t[h]))
                          : ((h = p - c++), a.push(null));
                      }
                      for (
                        var f = s >= r.length ? t.length : r[s], g = 0;
                        g < t.length;
                        g++
                      ) {
                        var v = t[g];
                        v.key
                          ? i.hasOwnProperty(v.key) || a.push(v)
                          : g >= f && a.push(v);
                      }
                      for (
                        var m, A = a.slice(), y = 0, E = [], C = [], b = 0;
                        b < t.length;

                      ) {
                        var F = t[b];
                        for (m = A[y]; null === m && A.length; )
                          E.push(St(A, y, null)), (m = A[y]);
                        m && m.key === F.key
                          ? (y++, b++)
                          : F.key
                          ? (m && m.key && u[m.key] !== b + 1
                              ? (E.push(St(A, y, m.key)),
                                (m = A[y]) && m.key === F.key
                                  ? y++
                                  : C.push({ key: F.key, to: b }))
                              : C.push({ key: F.key, to: b }),
                            b++)
                          : m && m.key && E.push(St(A, y, m.key));
                      }
                      for (; y < A.length; )
                        (m = A[y]), E.push(St(A, y, m && m.key));
                      if (E.length === c && !C.length)
                        return { children: a, moves: null };
                      return { children: a, moves: { removes: E, inserts: C } };
                    })(o, t.children),
                    a = i.children,
                    s = o.length,
                    l = a.length,
                    c = s > l ? s : l,
                    p = 0;
                  p < c;
                  p++
                ) {
                  var h = o[p],
                    d = a[p];
                  (r += 1),
                    h
                      ? xt(h, d, n, r)
                      : d && (u = Lt(u, new At(At.INSERT, null, d))),
                    nt(h) && h.count && (r += h.count);
                }
                i.moves && (u = Lt(u, new At(At.ORDER, e, i.moves)));
                return u;
              })(e, t, n, r, u));
          } else (r = Lt(r, new At(At.VNODE, e, t))), (o = !0);
        else (r = Lt(r, new At(At.VNODE, e, t))), (o = !0);
      else
        Et(t)
          ? Et(e)
            ? e.text !== t.text && (r = Lt(r, new At(At.VTEXT, e, t)))
            : ((r = Lt(r, new At(At.VTEXT, e, t))), (o = !0))
          : ut(t) && (ut(e) || (o = !0), (r = Lt(r, new At(At.WIDGET, e, t))));
      r && (n[u] = r), o && Ot(e, n, u);
    }
  }
  function Ot(e, t, n) {
    !(function e(t, n, u) {
      if (nt(t)) {
        if (
          (t.hooks &&
            (n[u] = Lt(
              n[u],
              new At(
                At.PROPS,
                t,
                (function (e) {
                  var t = {};
                  for (var n in e) t[n] = void 0;
                  return t;
                })(t.hooks)
              )
            )),
          t.descendantHooks || t.hasThunks)
        )
          for (var r = t.children, o = r.length, i = 0; i < o; i++) {
            var a = r[i];
            e(a, n, (u += 1)), nt(a) && a.count && (u += a.count);
          }
      } else rt(t) && kt(t, null, n, u);
    })(e, t, n),
      (function e(t, n, u) {
        if (ut(t))
          "function" == typeof t.destroy &&
            (n[u] = Lt(n[u], new At(At.REMOVE, t, null)));
        else if (nt(t) && (t.hasWidgets || t.hasThunks))
          for (var r = t.children, o = r.length, i = 0; i < o; i++) {
            var a = r[i];
            e(a, n, (u += 1)), nt(a) && a.count && (u += a.count);
          }
        else rt(t) && kt(t, null, n, u);
      })(e, t, n);
  }
  function kt(e, t, n, u) {
    var r = Ct(e, t),
      o = Bt(r.a, r.b);
    (function (e) {
      for (var t in e) if ("a" !== t) return !0;
      return !1;
    })(o) && (n[u] = new At(At.THUNK, null, o));
  }
  function St(e, t, n) {
    return e.splice(t, 1), { from: t, key: n };
  }
  function Nt(e) {
    for (var t = {}, n = [], u = e.length, r = 0; r < u; r++) {
      var o = e[r];
      o.key ? (t[o.key] = r) : n.push(r);
    }
    return { keys: t, free: n };
  }
  function Lt(e, t) {
    return e ? (mt(e) ? e.push(t) : (e = [e, t]), e) : t;
  }
  var Pt = Bt,
    Tt = Array.prototype.slice,
    jt = function (e, t) {
      "length" in e || (e = [e]);
      e = Tt.call(e);
      for (; e.length; ) {
        var n = e.shift(),
          u = t(n);
        if (u) return u;
        n.childNodes &&
          n.childNodes.length &&
          (e = Tt.call(n.childNodes).concat(e));
      }
    };
  var Rt = It;
  function It(e, t) {
    if (!(this instanceof It)) return new It(e, t);
    (this.data = e),
      (this.nodeValue = e),
      (this.length = e.length),
      (this.ownerDocument = t || null);
  }
  (It.prototype.nodeType = 8),
    (It.prototype.nodeName = "#comment"),
    (It.prototype.toString = function () {
      return "[object Comment]";
    });
  var Ut = Mt;
  function Mt(e, t) {
    if (!(this instanceof Mt)) return new Mt(e);
    (this.data = e || ""),
      (this.length = this.data.length),
      (this.ownerDocument = t || null);
  }
  (Mt.prototype.type = "DOMTextNode"),
    (Mt.prototype.nodeType = 3),
    (Mt.prototype.nodeName = "#text"),
    (Mt.prototype.toString = function () {
      return this.data;
    }),
    (Mt.prototype.replaceData = function (e, t, n) {
      var u = this.data,
        r = u.substring(0, e),
        o = u.substring(e + t, u.length);
      (this.data = r + n + o), (this.length = this.data.length);
    });
  var Vt = function (e) {
    var t = this,
      n = e.type;
    e.target || (e.target = t);
    t.listeners || (t.listeners = {});
    var u = t.listeners[n];
    if (u)
      return u.forEach(function (n) {
        (e.currentTarget = t), "function" == typeof n ? n(e) : n.handleEvent(e);
      });
    t.parentNode && t.parentNode.dispatchEvent(e);
  };
  var Ht = function (e, t) {
    this.listeners || (this.listeners = {});
    this.listeners[e] || (this.listeners[e] = []);
    -1 === this.listeners[e].indexOf(t) && this.listeners[e].push(t);
  };
  var qt = function (e, t) {
    if (!this.listeners) return;
    if (!this.listeners[e]) return;
    var n = this.listeners[e],
      u = n.indexOf(t);
    -1 !== u && n.splice(u, 1);
  };
  var _t = Kt,
    zt = [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ];
  function Kt(e) {
    switch (e.nodeType) {
      case 3:
        return Xt(e.data);
      case 8:
        return "\x3c!--" + e.data + "--\x3e";
      default:
        return (function (e) {
          var t = [],
            n = e.tagName;
          "http://www.w3.org/1999/xhtml" === e.namespaceURI &&
            (n = n.toLowerCase());
          t.push(
            "<" +
              n +
              (function (e) {
                var t = [];
                for (var n in e) Jt(e, n) && t.push({ name: n, value: e[n] });
                for (var u in e._attributes)
                  for (var r in e._attributes[u]) {
                    var o = e._attributes[u][r],
                      i = (o.prefix ? o.prefix + ":" : "") + r;
                    t.push({ name: i, value: o.value });
                  }
                e.className && t.push({ name: "class", value: e.className });
                return t.length ? Wt(t) : "";
              })(e) +
              (function (e) {
                var t = e.dataset,
                  n = [];
                for (var u in t) n.push({ name: "data-" + u, value: t[u] });
                return n.length ? Wt(n) : "";
              })(e)
          ),
            zt.indexOf(n) > -1
              ? t.push(" />")
              : (t.push(">"),
                e.childNodes.length
                  ? t.push.apply(t, e.childNodes.map(Kt))
                  : e.textContent || e.innerText
                  ? t.push(Xt(e.textContent || e.innerText))
                  : e.innerHTML && t.push(e.innerHTML),
                t.push("</" + n + ">"));
          return t.join("");
        })(e);
    }
  }
  function Jt(e, t) {
    var n = typeof e[t];
    return (
      ("style" === t && Object.keys(e.style).length > 0) ||
      (e.hasOwnProperty(t) &&
        ("string" === n || "boolean" === n || "number" === n) &&
        "nodeName" !== t &&
        "className" !== t &&
        "tagName" !== t &&
        "textContent" !== t &&
        "innerText" !== t &&
        "namespaceURI" !== t &&
        "innerHTML" !== t)
    );
  }
  function Wt(e) {
    var t = [];
    return (
      e.forEach(function (e) {
        var n = e.name,
          u = e.value;
        "style" === n &&
          (u = (function (e) {
            if ("string" == typeof e) return e;
            var t = "";
            return (
              Object.keys(e).forEach(function (n) {
                var u = e[n];
                (n = n.replace(/[A-Z]/g, function (e) {
                  return "-" + e.toLowerCase();
                })),
                  (t += n + ":" + u + ";");
              }),
              t
            );
          })(u)),
          t.push(n + '="' + (Xt(u).replace(/"/g, "&quot;") + '"'));
      }),
      t.length ? " " + t.join(" ") : ""
    );
  }
  function Xt(e) {
    var t = "";
    return (
      "string" == typeof e ? (t = e) : e && (t = e.toString()),
      t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    );
  }
  var Gt = "http://www.w3.org/1999/xhtml",
    $t = Yt;
  function Yt(e, t, n) {
    if (!(this instanceof Yt)) return new Yt(e);
    var u = void 0 === n ? Gt : n || null;
    (this.tagName = u === Gt ? String(e).toUpperCase() : e),
      (this.nodeName = this.tagName),
      (this.className = ""),
      (this.dataset = {}),
      (this.childNodes = []),
      (this.parentNode = null),
      (this.style = {}),
      (this.ownerDocument = t || null),
      (this.namespaceURI = u),
      (this._attributes = {}),
      "INPUT" === this.tagName && (this.type = "text");
  }
  (Yt.prototype.type = "DOMElement"),
    (Yt.prototype.nodeType = 1),
    (Yt.prototype.appendChild = function (e) {
      return (
        e.parentNode && e.parentNode.removeChild(e),
        this.childNodes.push(e),
        (e.parentNode = this),
        e
      );
    }),
    (Yt.prototype.replaceChild = function (e, t) {
      e.parentNode && e.parentNode.removeChild(e);
      var n = this.childNodes.indexOf(t);
      return (
        (t.parentNode = null),
        (this.childNodes[n] = e),
        (e.parentNode = this),
        t
      );
    }),
    (Yt.prototype.removeChild = function (e) {
      var t = this.childNodes.indexOf(e);
      return this.childNodes.splice(t, 1), (e.parentNode = null), e;
    }),
    (Yt.prototype.insertBefore = function (e, t) {
      e.parentNode && e.parentNode.removeChild(e);
      var n = null == t ? -1 : this.childNodes.indexOf(t);
      return (
        n > -1 ? this.childNodes.splice(n, 0, e) : this.childNodes.push(e),
        (e.parentNode = this),
        e
      );
    }),
    (Yt.prototype.setAttributeNS = function (e, t, n) {
      var u = null,
        r = t,
        o = t.indexOf(":");
      (o > -1 && ((u = t.substr(0, o)), (r = t.substr(o + 1))),
      "INPUT" === this.tagName && "type" === t)
        ? (this.type = n)
        : ((this._attributes[e] || (this._attributes[e] = {}))[r] = {
            value: n,
            prefix: u,
          });
    }),
    (Yt.prototype.getAttributeNS = function (e, t) {
      var n = this._attributes[e],
        u = n && n[t] && n[t].value;
      return "INPUT" === this.tagName && "type" === t
        ? this.type
        : "string" != typeof u
        ? null
        : u;
    }),
    (Yt.prototype.removeAttributeNS = function (e, t) {
      var n = this._attributes[e];
      n && delete n[t];
    }),
    (Yt.prototype.hasAttributeNS = function (e, t) {
      var n = this._attributes[e];
      return !!n && t in n;
    }),
    (Yt.prototype.setAttribute = function (e, t) {
      return this.setAttributeNS(null, e, t);
    }),
    (Yt.prototype.getAttribute = function (e) {
      return this.getAttributeNS(null, e);
    }),
    (Yt.prototype.removeAttribute = function (e) {
      return this.removeAttributeNS(null, e);
    }),
    (Yt.prototype.hasAttribute = function (e) {
      return this.hasAttributeNS(null, e);
    }),
    (Yt.prototype.removeEventListener = qt),
    (Yt.prototype.addEventListener = Ht),
    (Yt.prototype.dispatchEvent = Vt),
    (Yt.prototype.focus = function () {}),
    (Yt.prototype.toString = function () {
      return _t(this);
    }),
    (Yt.prototype.getElementsByClassName = function (e) {
      var t = e.split(" "),
        n = [];
      return (
        jt(this, function (e) {
          if (1 === e.nodeType) {
            var u = (e.className || "").split(" ");
            t.every(function (e) {
              return -1 !== u.indexOf(e);
            }) && n.push(e);
          }
        }),
        n
      );
    }),
    (Yt.prototype.getElementsByTagName = function (e) {
      e = e.toLowerCase();
      var t = [];
      return (
        jt(this.childNodes, function (n) {
          1 !== n.nodeType ||
            ("*" !== e && n.tagName.toLowerCase() !== e) ||
            t.push(n);
        }),
        t
      );
    }),
    (Yt.prototype.contains = function (e) {
      return (
        jt(this, function (t) {
          return e === t;
        }) || !1
      );
    });
  var Qt = Zt;
  function Zt(e) {
    if (!(this instanceof Zt)) return new Zt();
    (this.childNodes = []),
      (this.parentNode = null),
      (this.ownerDocument = e || null);
  }
  (Zt.prototype.type = "DocumentFragment"),
    (Zt.prototype.nodeType = 11),
    (Zt.prototype.nodeName = "#document-fragment"),
    (Zt.prototype.appendChild = $t.prototype.appendChild),
    (Zt.prototype.replaceChild = $t.prototype.replaceChild),
    (Zt.prototype.removeChild = $t.prototype.removeChild),
    (Zt.prototype.toString = function () {
      return this.childNodes
        .map(function (e) {
          return String(e);
        })
        .join("");
    });
  var en = tn;
  function tn(e) {}
  (tn.prototype.initEvent = function (e, t, n) {
    (this.type = e), (this.bubbles = t), (this.cancelable = n);
  }),
    (tn.prototype.preventDefault = function () {});
  var nn = un;
  function un() {
    if (!(this instanceof un)) return new un();
    (this.head = this.createElement("head")),
      (this.body = this.createElement("body")),
      (this.documentElement = this.createElement("html")),
      this.documentElement.appendChild(this.head),
      this.documentElement.appendChild(this.body),
      (this.childNodes = [this.documentElement]),
      (this.nodeType = 9);
  }
  var rn = un.prototype;
  (rn.createTextNode = function (e) {
    return new Ut(e, this);
  }),
    (rn.createElementNS = function (e, t) {
      var n = null === e ? null : String(e);
      return new $t(t, this, n);
    }),
    (rn.createElement = function (e) {
      return new $t(e, this);
    }),
    (rn.createDocumentFragment = function () {
      return new Qt(this);
    }),
    (rn.createEvent = function (e) {
      return new en(e);
    }),
    (rn.createComment = function (e) {
      return new Rt(e, this);
    }),
    (rn.getElementById = function (e) {
      return (
        (e = String(e)),
        jt(this.childNodes, function (t) {
          if (String(t.id) === e) return t;
        }) || null
      );
    }),
    (rn.getElementsByClassName = $t.prototype.getElementsByClassName),
    (rn.getElementsByTagName = $t.prototype.getElementsByTagName),
    (rn.contains = $t.prototype.contains),
    (rn.removeEventListener = qt),
    (rn.addEventListener = Ht),
    (rn.dispatchEvent = Vt);
  var on,
    an = new nn(),
    sn = void 0 !== et ? et : "undefined" != typeof window ? window : {};
  "undefined" != typeof document
    ? (on = document)
    : (on = sn["__GLOBAL_DOCUMENT_CACHE@4"]) ||
      (on = sn["__GLOBAL_DOCUMENT_CACHE@4"] = an);
  var ln = on,
    cn = function (e, t, n) {
      for (var u in t) {
        var r = t[u];
        void 0 === r
          ? pn(e, u, r, n)
          : ot(r)
          ? (pn(e, u, r, n), r.hook && r.hook(e, u, n ? n[u] : void 0))
          : Ft(r)
          ? hn(e, t, n, u, r)
          : (e[u] = r);
      }
    };
  function pn(e, t, n, u) {
    if (u) {
      var r = u[t];
      if (ot(r)) r.unhook && r.unhook(e, t, n);
      else if ("attributes" === t) for (var o in r) e.removeAttribute(o);
      else if ("style" === t) for (var i in r) e.style[i] = "";
      else e[t] = "string" == typeof r ? "" : null;
    }
  }
  function hn(e, t, n, u, r) {
    var o = n ? n[u] : void 0;
    if ("attributes" !== u)
      if (o && Ft(o) && dn(o) !== dn(r)) e[u] = r;
      else {
        Ft(e[u]) || (e[u] = {});
        var i = "style" === u ? "" : void 0;
        for (var a in r) {
          var s = r[a];
          e[u][a] = void 0 === s ? i : s;
        }
      }
    else
      for (var l in r) {
        var c = r[l];
        void 0 === c ? e.removeAttribute(l) : e.setAttribute(l, c);
      }
  }
  function dn(e) {
    return Object.getPrototypeOf
      ? Object.getPrototypeOf(e)
      : e.__proto__
      ? e.__proto__
      : e.constructor
      ? e.constructor.prototype
      : void 0;
  }
  var fn = function e(t, n) {
    var u = (n && n.document) || ln,
      r = n ? n.warn : null;
    if (((t = Ct(t).a), ut(t))) return t.init();
    if (Et(t)) return u.createTextNode(t.text);
    if (!nt(t)) return r && r("Item is not a valid virtual dom node", t), null;
    var o =
        null === t.namespace
          ? u.createElement(t.tagName)
          : u.createElementNS(t.namespace, t.tagName),
      i = t.properties;
    cn(o, i);
    for (var a = t.children, s = 0; s < a.length; s++) {
      var l = e(a[s], n);
      l && o.appendChild(l);
    }
    return o;
  };
  var gn = {},
    vn = function (e, t, n, u) {
      return n && 0 !== n.length
        ? (n.sort(An),
          (function e(t, n, u, r, o) {
            if (((r = r || {}), t)) {
              mn(u, o, o) && (r[o] = t);
              var i = n.children;
              if (i)
                for (var a = t.childNodes, s = 0; s < n.children.length; s++) {
                  o += 1;
                  var l = i[s] || gn,
                    c = o + (l.count || 0);
                  mn(u, o, c) && e(a[s], l, u, r, o), (o = c);
                }
            }
            return r;
          })(e, t, n, u, 0))
        : {};
    };
  function mn(e, t, n) {
    if (0 === e.length) return !1;
    for (var u, r, o = 0, i = e.length - 1; o <= i; ) {
      if (((r = e[(u = ((i + o) / 2) >> 0)]), o === i)) return r >= t && r <= n;
      if (r < t) o = u + 1;
      else {
        if (!(r > n)) return !0;
        i = u - 1;
      }
    }
    return !1;
  }
  function An(e, t) {
    return e > t ? 1 : -1;
  }
  var yn = function (e, t) {
    if (ut(e) && ut(t))
      return "name" in e && "name" in t ? e.id === t.id : e.init === t.init;
    return !1;
  };
  var En = function (e, t, n) {
    var u = e.type,
      r = e.vNode,
      o = e.patch;
    switch (u) {
      case At.REMOVE:
        return (function (e, t) {
          var n = e.parentNode;
          n && n.removeChild(e);
          return Cn(e, t), null;
        })(t, r);
      case At.INSERT:
        return (function (e, t, n) {
          var u = n.render(t, n);
          e && e.appendChild(u);
          return e;
        })(t, o, n);
      case At.VTEXT:
        return (function (e, t, n, u) {
          var r;
          if (3 === e.nodeType) e.replaceData(0, e.length, n.text), (r = e);
          else {
            var o = e.parentNode;
            (r = u.render(n, u)), o && r !== e && o.replaceChild(r, e);
          }
          return r;
        })(t, 0, o, n);
      case At.WIDGET:
        return (function (e, t, n, u) {
          var r,
            o = yn(t, n);
          r = o ? n.update(t, e) || e : u.render(n, u);
          var i = e.parentNode;
          i && r !== e && i.replaceChild(r, e);
          o || Cn(e, t);
          return r;
        })(t, r, o, n);
      case At.VNODE:
        return (function (e, t, n, u) {
          var r = e.parentNode,
            o = u.render(n, u);
          r && o !== e && r.replaceChild(o, e);
          return o;
        })(t, 0, o, n);
      case At.ORDER:
        return (
          (function (e, t) {
            for (
              var n, u, r, o = e.childNodes, i = {}, a = 0;
              a < t.removes.length;
              a++
            )
              (u = t.removes[a]),
                (n = o[u.from]),
                u.key && (i[u.key] = n),
                e.removeChild(n);
            for (var s = o.length, l = 0; l < t.inserts.length; l++)
              (r = t.inserts[l]),
                (n = i[r.key]),
                e.insertBefore(n, r.to >= s++ ? null : o[r.to]);
          })(t, o),
          t
        );
      case At.PROPS:
        return cn(t, o, r.properties), t;
      case At.THUNK:
        return (function (e, t) {
          e && t && e !== t && e.parentNode && e.parentNode.replaceChild(t, e);
          return t;
        })(t, n.patch(t, o, n));
      default:
        return t;
    }
  };
  function Cn(e, t) {
    "function" == typeof t.destroy && ut(t) && t.destroy(e);
  }
  function bn(e, t, n) {
    var u = (function (e) {
      var t = [];
      for (var n in e) "a" !== n && t.push(Number(n));
      return t;
    })(t);
    if (0 === u.length) return e;
    var r = vn(e, t.a, u),
      o = e.ownerDocument;
    n.document || o === ln || (n.document = o);
    for (var i = 0; i < u.length; i++) {
      var a = u[i];
      e = Fn(e, r[a], t[a], n);
    }
    return e;
  }
  function Fn(e, t, n, u) {
    if (!t) return e;
    var r;
    if (mt(n))
      for (var o = 0; o < n.length; o++)
        (r = En(n[o], t, u)), t === e && (e = r);
    else (r = En(n, t, u)), t === e && (e = r);
    return e;
  }
  var Dn = function e(t, n, u) {
      return (
        ((u = u || {}).patch = u.patch && u.patch !== e ? u.patch : bn),
        (u.render = u.render || fn),
        u.patch(t, n, u)
      );
    },
    wn = tt(function (e, t) {
      e.exports = (function () {
        var e = r(function (e) {
            return e;
          }),
          t = o(
            r(function (e) {
              var t = e.length;
              return new e.constructor(t);
            }),
            [
              "BYTES_PER_ELEMENT",
              "get",
              "set",
              "slice",
              "subarray",
              "buffer",
              "length",
              "byteOffset",
              "byteLength",
            ]
          );
        function n(e) {
          return "[object " + e + "]";
        }
        var u = {};
        function r(e) {
          return function (t, n, u) {
            n.push(t);
            var r = e(t);
            return u.push(r), r;
          };
        }
        function o(e, t) {
          return function (n, u, r) {
            var o = this;
            return Object.getOwnPropertyNames(n)
              .filter(function (e) {
                return !t || -1 === t.indexOf(e);
              })
              .reduce(function (e, t) {
                var i = u.indexOf(n[t]);
                return (e[t] = -1 === i ? o(n[t]) : r[i]), e;
              }, e(n, u, r));
          };
        }
        return (
          (u[n("RegExp")] = r(function (e) {
            return new RegExp(e);
          })),
          (u[n("Date")] = r(function (e) {
            return new Date(e.getTime());
          })),
          (u[n("Function")] = o(
            r(function (e) {
              return (
                (n = (function (e) {
                  for (var t = [], n = 1; n <= e; n++) t.push("arg" + n);
                  return t;
                })((t = e).length)),
                (u = "return false || function "),
                (u += t.name + "("),
                (u += n.join(", ") + ") {\n"),
                (u += "return fn.apply(this, arguments);\n"),
                (u += "};"),
                Function("fn", u)(t)
              );
              var t, n, u;
            }),
            ["caller", "arguments"]
          )),
          (u[n("Object")] = o(
            r(function (e) {
              return Object.create(Object.getPrototypeOf(e));
            })
          )),
          (u[n("Array")] = o(
            r(function (e) {
              return [];
            })
          )),
          ["Null", "Undefined", "Number", "String", "Boolean"]
            .map(n)
            .forEach(function (t) {
              u[t] = e;
            }),
          [
            "Int8Array",
            "Uint8Array",
            "Uint8ClampedArray",
            "Int16Array",
            "Uint16Array",
            "Int32Array",
            "Uint32Array",
            "Float32Array",
            "Float64Array",
          ]
            .map(n)
            .forEach(function (e) {
              u[e] = t;
            }),
          function (e) {
            var t = [],
              n = [];
            return (function e(r) {
              var o = Object.prototype.toString.call(r);
              return u[o].call(e, r, t, n);
            })(e);
          }
        );
      })();
    });
  class Bn {
    constructor() {}
    start() {
      this.started = new Date().getTime();
    }
    end() {
      return (this.ended = new Date().getTime()), this.ended - this.started;
    }
  }
  /*!
   * escape-html
   * Copyright(c) 2012-2013 TJ Holowaychuk
   * Copyright(c) 2015 Andreas Lubbe
   * Copyright(c) 2015 Tiancheng "Timothy" Gu
   * MIT Licensed
   */ var xn = /["'&<>]/,
    On = function (e) {
      var t,
        n = "" + e,
        u = xn.exec(n);
      if (!u) return n;
      var r = "",
        o = 0,
        i = 0;
      for (o = u.index; o < n.length; o++) {
        switch (n.charCodeAt(o)) {
          case 34:
            t = "&quot;";
            break;
          case 38:
            t = "&amp;";
            break;
          case 39:
            t = "&#39;";
            break;
          case 60:
            t = "&lt;";
            break;
          case 62:
            t = "&gt;";
            break;
          default:
            continue;
        }
        i !== o && (r += n.substring(i, o)), (i = o + 1), (r += t);
      }
      return i !== o ? r + n.substring(i, o) : r;
    };
  var kn = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        for (var u in n) Sn.call(n, u) && (e[u] = n[u]);
      }
      return e;
    },
    Sn = Object.prototype.hasOwnProperty;
  var Nn = Ln;
  function Ln(e) {
    if (!(this instanceof Ln)) return new Ln(e);
    this.value = e;
  }
  Ln.prototype.hook = function (e, t) {
    e[t] !== this.value && (e[t] = this.value);
  };
  var Pn = Tn;
  function Tn(e, t) {
    if (!(this instanceof Tn)) return new Tn(e, t);
    (this.namespace = e), (this.value = t);
  }
  (Tn.prototype.hook = function (e, t, n) {
    (n &&
      "AttributeHook" === n.type &&
      n.value === this.value &&
      n.namespace === this.namespace) ||
      e.setAttributeNS(this.namespace, t, this.value);
  }),
    (Tn.prototype.unhook = function (e, t, n) {
      if (!n || "AttributeHook" !== n.type || n.namespace !== this.namespace) {
        var u = t.indexOf(":"),
          r = u > -1 ? t.substr(u + 1) : t;
        e.removeAttributeNS(this.namespace, r);
      }
    }),
    (Tn.prototype.type = "AttributeHook");
  var jn,
    Rn,
    In = {
      tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: { İ: "i", I: "ı", İ: "i" },
      },
      az: { regexp: /[\u0130]/g, map: { İ: "i", I: "ı", İ: "i" } },
      lt: {
        regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
        map: { I: "i̇", J: "j̇", Į: "į̇", Ì: "i̇̀", Í: "i̇́", Ĩ: "i̇̃" },
      },
    },
    Un =
      /[^\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g,
    Mn =
      /([\u0061-\u007A\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0561-\u0587\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7FA\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])([\u0041-\u005A\u00C0-\u00D6\u00D8-\u00DE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA\uFF21-\uFF3A\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])/g,
    Vn =
      /([\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([^\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])/g,
    Hn = function (e, t, n) {
      if (null == e) return "";
      return (
        (n = n || " "),
        (function (e, t) {
          var n = In[t];
          return (
            (e = null == e ? "" : String(e)),
            n &&
              (e = e.replace(n.regexp, function (e) {
                return n.map[e];
              })),
            e.toLowerCase()
          );
        })(
          (e = String(e)
            .replace(Mn, "$1 $2")
            .replace(Vn, "$1 $2")
            .replace(Un, function (e, t, u) {
              return 0 === t || t === u.length - e.length ? "" : n;
            })),
          t
        )
      );
    },
    qn = function (e, t) {
      return Hn(e, t, "-");
    },
    _n = { BOOLEAN: 1, OVERLOADED_BOOLEAN: 2 },
    zn = {
      attributeTypes: _n,
      properties: {
        accept: !0,
        acceptCharset: !0,
        accessKey: !0,
        action: !0,
        allowFullScreen: _n.BOOLEAN,
        allowTransparency: !0,
        alt: !0,
        async: _n.BOOLEAN,
        autocomplete: !0,
        autofocus: _n.BOOLEAN,
        autoplay: _n.BOOLEAN,
        cellPadding: !0,
        cellSpacing: !0,
        charset: !0,
        checked: _n.BOOLEAN,
        classID: !0,
        className: !0,
        cols: !0,
        colSpan: !0,
        content: !0,
        contentEditable: !0,
        contextMenu: !0,
        controls: _n.BOOLEAN,
        coords: !0,
        crossOrigin: !0,
        data: !0,
        dateTime: !0,
        defer: _n.BOOLEAN,
        dir: !0,
        disabled: _n.BOOLEAN,
        download: _n.OVERLOADED_BOOLEAN,
        draggable: !0,
        enctype: !0,
        form: !0,
        formAction: !0,
        formEncType: !0,
        formMethod: !0,
        formNoValidate: _n.BOOLEAN,
        formTarget: !0,
        frameBorder: !0,
        headers: !0,
        height: !0,
        hidden: _n.BOOLEAN,
        href: !0,
        hreflang: !0,
        htmlFor: !0,
        httpEquiv: !0,
        icon: !0,
        id: !0,
        label: !0,
        lang: !0,
        list: !0,
        loop: _n.BOOLEAN,
        manifest: !0,
        marginHeight: !0,
        marginWidth: !0,
        max: !0,
        maxLength: !0,
        media: !0,
        mediaGroup: !0,
        method: !0,
        min: !0,
        multiple: _n.BOOLEAN,
        muted: _n.BOOLEAN,
        name: !0,
        noValidate: _n.BOOLEAN,
        open: !0,
        pattern: !0,
        placeholder: !0,
        poster: !0,
        preload: !0,
        radiogroup: !0,
        readOnly: _n.BOOLEAN,
        rel: !0,
        required: _n.BOOLEAN,
        role: !0,
        rows: !0,
        rowSpan: !0,
        sandbox: !0,
        scope: !0,
        scrolling: !0,
        seamless: _n.BOOLEAN,
        selected: _n.BOOLEAN,
        shape: !0,
        size: !0,
        sizes: !0,
        span: !0,
        spellcheck: !0,
        src: !0,
        srcdoc: !0,
        srcset: !0,
        start: !0,
        step: !0,
        style: !0,
        tabIndex: !0,
        target: !0,
        title: !0,
        type: !0,
        useMap: !0,
        value: !0,
        width: !0,
        wmode: !0,
        autocapitalize: !0,
        autocorrect: !0,
        itemProp: !0,
        itemScope: _n.BOOLEAN,
        itemType: !0,
        property: !0,
      },
      attributeNames: {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
      },
    },
    Kn = zn.attributeTypes,
    Jn = zn.properties,
    Wn = zn.attributeNames,
    Xn =
      ((jn = function (e) {
        return On(e) + '="';
      }),
      (Rn = {}),
      function (e) {
        return Rn.hasOwnProperty(e) ? Rn[e] : (Rn[e] = jn.call(this, e));
      }),
    Gn = function (e, t, n) {
      if (Jn.hasOwnProperty(e)) {
        if (
          (function (e, t) {
            var n = Jn[e];
            return (
              null == t ||
              (n === Kn.BOOLEAN && !t) ||
              (n === Kn.OVERLOADED_BOOLEAN && !1 === t)
            );
          })(e, t)
        )
          return "";
        e = (Wn[e] || e).toLowerCase();
        var u = Jn[e];
        return u === Kn.BOOLEAN || (u === Kn.OVERLOADED_BOOLEAN && !0 === t)
          ? On(e)
          : Xn(e) + On(t) + '"';
      }
      if (n) return null == t ? "" : Xn(e) + On(t) + '"';
      return null;
    };
  var $n = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
    Yn = Qn;
  function Qn(e, t) {
    return e
      ? (rt(e) && (e = e.render()),
        ut(e) && e.render && (e = e.render()),
        nt(e)
          ? (function (e) {
              var t = e.properties,
                n = "<" + e.tagName.toLowerCase();
              for (var u in t) {
                var r = t[u];
                if (null != r)
                  if ("attributes" != u)
                    if ("dataset" != u) {
                      if ("style" == u) {
                        var o = "";
                        for (var i in (r = kn({}, r)))
                          o += qn(i) + ": " + r[i] + "; ";
                        r = o.trim();
                      }
                      if (r instanceof Nn || r instanceof Pn)
                        n += " " + Gn(u, r.value, !0);
                      else {
                        var a = Gn(u, r);
                        a && (n += " " + a);
                      }
                    } else
                      for (var s in (r = kn({}, r)))
                        n += " " + Gn("data-" + qn(s), r[s], !0);
                  else
                    for (var l in (r = kn({}, r))) n += " " + Gn(l, r[l], !0);
              }
              return n + ">";
            })(e) +
            (function (e) {
              var t = e.properties.innerHTML;
              if (null != t) return t;
              var n = "";
              if (e.children && e.children.length)
                for (var u = 0, r = e.children.length; u < r; u++) {
                  var o = e.children[u];
                  n += Qn(o, e);
                }
              return n;
            })(e) +
            (function (e) {
              var t = e.tagName.toLowerCase();
              return $n[t] ? "" : "</" + t + ">";
            })(e)
          : Et(e)
          ? !t ||
            ("script" !== t.tagName.toLowerCase() &&
              "style" !== t.tagName.toLowerCase())
            ? On(String(e.text))
            : String(e.text)
          : "")
      : "";
  }
  var Zn,
    eu = {
      abbr: "abbr",
      accept: "accept",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      allowtransparency: "allowTransparency",
      alt: "alt",
      async: "async",
      autocomplete: "autoComplete",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charset",
      checked: "checked",
      cite: "cite",
      class: "className",
      cols: "cols",
      colspan: "colSpan",
      command: "command",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      coords: "coords",
      crossorigin: "crossOrigin",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      download: "download",
      draggable: "draggable",
      dropzone: "dropzone",
      enctype: "encType",
      for: "htmlFor",
      form: "form",
      formaction: "formAction",
      formenctype: "formEncType",
      formmethod: "formMethod",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameBorder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      inputmode: "inputMode",
      ismap: "isMap",
      itemid: "itemId",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      manifest: "manifest",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      ping: "ping",
      placeholder: "placeholder",
      poster: "poster",
      preload: "preload",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      rel: "rel",
      required: "required",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      sortable: "sortable",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      translate: "translate",
      type: "type",
      typemustmatch: "typeMustMatch",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
    },
    tu = "http://www.w3.org/1999/xlink",
    nu = "http://www.w3.org/XML/1998/namespace",
    uu = {
      about: null,
      "accent-height": null,
      accumulate: null,
      additive: null,
      "alignment-baseline": null,
      alphabetic: null,
      amplitude: null,
      "arabic-form": null,
      ascent: null,
      attributeName: null,
      attributeType: null,
      azimuth: null,
      bandwidth: null,
      baseFrequency: null,
      baseProfile: null,
      "baseline-shift": null,
      bbox: null,
      begin: null,
      bias: null,
      by: null,
      calcMode: null,
      "cap-height": null,
      class: null,
      clip: null,
      "clip-path": null,
      "clip-rule": null,
      clipPathUnits: null,
      color: null,
      "color-interpolation": null,
      "color-interpolation-filters": null,
      "color-profile": null,
      "color-rendering": null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      datatype: null,
      defaultAction: null,
      descent: null,
      diffuseConstant: null,
      direction: null,
      display: null,
      divisor: null,
      "dominant-baseline": null,
      dur: null,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: null,
      "enable-background": null,
      end: null,
      "ev:event": "http://www.w3.org/2001/xml-events",
      event: null,
      exponent: null,
      externalResourcesRequired: null,
      fill: null,
      "fill-opacity": null,
      "fill-rule": null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      "flood-color": null,
      "flood-opacity": null,
      focusHighlight: null,
      focusable: null,
      "font-family": null,
      "font-size": null,
      "font-size-adjust": null,
      "font-stretch": null,
      "font-style": null,
      "font-variant": null,
      "font-weight": null,
      format: null,
      from: null,
      fx: null,
      fy: null,
      g1: null,
      g2: null,
      "glyph-name": null,
      "glyph-orientation-horizontal": null,
      "glyph-orientation-vertical": null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: null,
      height: null,
      "horiz-adv-x": null,
      "horiz-origin-x": null,
      "horiz-origin-y": null,
      id: null,
      ideographic: null,
      "image-rendering": null,
      in: null,
      in2: null,
      initialVisibility: null,
      intercept: null,
      k: null,
      k1: null,
      k2: null,
      k3: null,
      k4: null,
      kernelMatrix: null,
      kernelUnitLength: null,
      kerning: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      lang: null,
      lengthAdjust: null,
      "letter-spacing": null,
      "lighting-color": null,
      limitingConeAngle: null,
      local: null,
      "marker-end": null,
      "marker-mid": null,
      "marker-start": null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: null,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      "nav-down": null,
      "nav-down-left": null,
      "nav-down-right": null,
      "nav-left": null,
      "nav-next": null,
      "nav-prev": null,
      "nav-right": null,
      "nav-up": null,
      "nav-up-left": null,
      "nav-up-right": null,
      numOctaves: null,
      observer: null,
      offset: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      "overline-position": null,
      "overline-thickness": null,
      "panose-1": null,
      path: null,
      pathLength: null,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      playbackOrder: null,
      "pointer-events": null,
      points: null,
      pointsAtX: null,
      pointsAtY: null,
      pointsAtZ: null,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: null,
      r: null,
      radius: null,
      refX: null,
      refY: null,
      rel: null,
      "rendering-intent": null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: null,
      requiredFeatures: null,
      requiredFonts: null,
      requiredFormats: null,
      resource: null,
      restart: null,
      result: null,
      rev: null,
      role: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      "shape-rendering": null,
      slope: null,
      snapshotTime: null,
      spacing: null,
      specularConstant: null,
      specularExponent: null,
      spreadMethod: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      "stop-color": null,
      "stop-opacity": null,
      "strikethrough-position": null,
      "strikethrough-thickness": null,
      string: null,
      stroke: null,
      "stroke-dasharray": null,
      "stroke-dashoffset": null,
      "stroke-linecap": null,
      "stroke-linejoin": null,
      "stroke-miterlimit": null,
      "stroke-opacity": null,
      "stroke-width": null,
      surfaceScale: null,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: null,
      tableValues: null,
      target: null,
      targetX: null,
      targetY: null,
      "text-anchor": null,
      "text-decoration": null,
      "text-rendering": null,
      textLength: null,
      timelineBegin: null,
      title: null,
      to: null,
      transform: null,
      transformBehavior: null,
      type: null,
      typeof: null,
      u1: null,
      u2: null,
      "underline-position": null,
      "underline-thickness": null,
      unicode: null,
      "unicode-bidi": null,
      "unicode-range": null,
      "units-per-em": null,
      "v-alphabetic": null,
      "v-hanging": null,
      "v-ideographic": null,
      "v-mathematical": null,
      values: null,
      version: null,
      "vert-adv-y": null,
      "vert-origin-x": null,
      "vert-origin-y": null,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      "word-spacing": null,
      "writing-mode": null,
      x: null,
      "x-height": null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      "xlink:actuate": tu,
      "xlink:arcrole": tu,
      "xlink:href": tu,
      "xlink:role": tu,
      "xlink:show": tu,
      "xlink:title": tu,
      "xlink:type": tu,
      "xml:base": nu,
      "xml:id": nu,
      "xml:lang": nu,
      "xml:space": nu,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    ru = function (e, t) {
      if (!e) return ou(document.createTextNode(""));
      if ("string" == typeof e) {
        if (!("DOMParser" in window))
          throw new Error(
            "DOMParser is not available, so parsing string to DOM node is not possible."
          );
        var n = (Zn = Zn || new DOMParser()).parseFromString(e, "text/html");
        e = n.body.firstChild
          ? n.getElementsByTagName("body")[0].firstChild
          : n.head.firstChild &&
            ("TITLE" !== n.head.firstChild.tagName || n.title)
          ? n.head.firstChild
          : n.firstChild && "HTML" !== n.firstChild.tagName
          ? n.firstChild
          : document.createTextNode("");
      }
      if ("object" != typeof e || !e || !e.nodeType)
        throw new Error("invalid dom node", e);
      return ou(e, t);
    };
  function ou(e, t) {
    return 3 === e.nodeType
      ? (function (e) {
          return new ct(e.nodeValue);
        })(e)
      : 1 === e.nodeType || 9 === e.nodeType
      ? (function (e, t) {
          var n =
              "http://www.w3.org/1999/xhtml" !== e.namespaceURI
                ? e.namespaceURI
                : null,
            u = t && e.getAttribute(t) ? e.getAttribute(t) : null;
          return new it(
            e.tagName,
            (function (e) {
              var t,
                n,
                u = {};
              if (!e.hasAttributes()) return u;
              e.namespaceURI &&
                "http://www.w3.org/1999/xhtml" !== e.namespaceURI &&
                (t = e.namespaceURI);
              for (var r = 0; r < e.attributes.length; r++)
                (n =
                  "style" == e.attributes[r].name
                    ? su(e)
                    : t
                    ? au(e.attributes[r])
                    : iu(e.attributes[r])).ns
                  ? (u[n.name] = { namespace: n.ns, value: n.value })
                  : n.isAttr
                  ? (u.attributes || (u.attributes = {}),
                    (u.attributes[n.name] = n.value))
                  : (u[n.name] = n.value);
              return u;
            })(e),
            (function (e, t) {
              for (var n = [], u = 0; u < e.childNodes.length; u++)
                n.push(ou(e.childNodes[u], t));
              return n;
            })(e, t),
            u,
            n
          );
        })(e, t)
      : new ct("");
  }
  function iu(e) {
    var t, n, u;
    return (
      0 === (t = eu[e.name] ? eu[e.name] : e.name).indexOf("data-") ||
      0 === t.indexOf("aria-")
        ? ((n = e.value), (u = !0))
        : (n = e.value),
      { name: t, value: n, isAttr: u || !1 }
    );
  }
  function au(e) {
    return { name: e.name, value: e.value, ns: uu[e.name] || "" };
  }
  function su(e) {
    for (var t = e.style, n = {}, u = 0; u < t.length; ++u) {
      var r = t.item(u);
      (n[r] = String(t[r])),
        n[r].indexOf("url") > -1 && (n[r] = n[r].replace(/\"/g, ""));
    }
    return { name: "style", value: n };
  }
  function lu(e, t, n) {
    var u;
    return function () {
      var r = this,
        o = arguments,
        i = function () {
          (u = null), n || e.apply(r, o);
        },
        a = n && !u;
      clearTimeout(u), (u = setTimeout(i, t)), a && e.apply(r, o);
    };
  }
  function cu(e, t) {
    return (
      e.properties && e.properties.attributes && e.properties.attributes[t]
    );
  }
  function pu(e, t, n) {
    function u(e) {
      return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
    }
    function r() {
      return !e || "string" == typeof e;
    }
    for (
      var o = "string" != typeof t ? [].concat(t) : t.split(".");
      o.length > 1;

    ) {
      if (r()) return {};
      var i = u(o.shift());
      !e[i] && n && (e[i] = new n()), (e = e[i]);
    }
    return r() ? {} : { obj: e, k: u(o.shift()) };
  }
  function hu(e, t, n) {
    var { obj: u, k: r } = pu(e, t, Object);
    u[r] = n;
  }
  function du(e, t) {
    var { obj: n, k: u } = pu(e, t);
    if (n) return n[u];
  }
  function fu() {
    var e = location.pathname;
    if ("/" === e) return "root";
    var t = e.split("/"),
      n = "root";
    return (
      t.forEach((e) => {
        e && (n += "_".concat(e));
      }),
      n
    );
  }
  var gu = ["SVG", "RECT", "PATH"],
    vu = (e) => {
      if (e.namespace) e.ns.push(e.namespace), (e.defaultNS = e.namespace);
      else if (e.namespaceFromPath) {
        var t = fu();
        e.ns.push(t), (e.defaultNS = t);
      }
      return (
        e.ns.length || (e.ns = ["translation"]),
        e.ignoreTags &&
          (e.ignoreTags = e.ignoreTags.map((e) =>
            gu.indexOf(e) > -1 ? e.toLowerCase() : e.toUpperCase()
          )),
        e.ignoreCleanIndentFor &&
          (e.ignoreCleanIndentFor = e.ignoreCleanIndentFor.map((e) =>
            e.toUpperCase()
          )),
        e.inlineTags &&
          (e.inlineTags = e.inlineTags.map((e) => e.toUpperCase())),
        e.ignoreInlineOn &&
          (e.ignoreInlineOn = e.ignoreInlineOn.map((e) => e.toUpperCase())),
        e.mergeTags && (e.mergeTags = e.mergeTags.map((e) => e.toUpperCase())),
        (e.translateAttributes = e.translateAttributes.reduce((e, t) => {
          var n = { attr: t };
          if (t.indexOf("#") > -1) {
            var [u, r] = t.split("#");
            if (((n.attr = u), r.indexOf(".") > -1)) {
              var [o, i] = r.split(".");
              (n.ele = o.toUpperCase()), (n.cond = i.toLowerCase().split("="));
            } else
              r.indexOf("=") > -1
                ? (n.cond = r.toLowerCase().split("="))
                : (n.ele = r.toUpperCase());
          }
          return e.push(n), e;
        }, [])),
        e
      );
    };
  function mu(e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { retranslate: !1 };
    return (
      !(!t || !t.retranslate) ||
      !e.properties ||
      !e.properties.attributes ||
      "" !== e.properties.attributes.localized
    );
  }
  function Au(e) {
    var t =
      !e.properties ||
      !e.properties.attributes ||
      "" !== e.properties.attributes.translated;
    (t && e.tagName && W.options.ignoreTags.indexOf(e.tagName) > -1 && (t = !1),
    t && W.options.ignoreClasses && e.properties && e.properties.className) &&
      e.properties.className.split(" ").forEach((e) => {
        t && W.options.ignoreClasses.indexOf(e) > -1 && (t = !1);
      });
    return (
      t &&
        W.options.ignoreIds &&
        W.options.ignoreIds.indexOf(e.properties && e.properties.id) > -1 &&
        (t = !1),
      t
    );
  }
  function yu(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 ? arguments[2] : void 0,
      u = e.trim(),
      r = n || e.trim();
    return (
      t.defaultValue || (t.defaultValue = e),
      (u && !W.options.ignoreWithoutKey) ||
      (u && W.options.ignoreWithoutKey && n)
        ? W.t(r, t)
        : e
    );
  }
  var Eu = ["src", "href"],
    Cu = new RegExp("%7B%7B(.+?)%7D%7D", "g");
  function bu(e, n) {
    var u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = arguments.length > 3 ? arguments[3] : void 0,
      o = arguments.length > 4 ? arguments[4] : void 0,
      i = arguments.length > 5 ? arguments[5] : void 0;
    return n
      ? (W.options.translateAttributes.forEach((a) => {
          if (!a.ele || e.tagName === a.ele) {
            if (a.cond && 2 === a.cond.length) {
              var s = du(n, a.cond[0]) || du(n.attributes, a.cond[0]);
              if (!s || s !== a.cond[1]) return;
            }
            var l = !1,
              c = du(n, a.attr);
            if (
              (c || ((c = du(n.attributes, a.attr)) && (l = !0)), i.retranslate)
            ) {
              var p =
                e.properties &&
                e.properties &&
                e.properties.attributes["".concat(a.attr, "-i18next-orgval")];
              p || (p = c), (c = p);
            }
            c &&
              (o &&
                (e.properties.attributes["".concat(a.attr, "-i18next-orgval")] =
                  c),
              hu(
                l ? n.attributes : n,
                a.attr,
                yu(c, t({}, u), r ? "".concat(r, ".").concat(a.attr) : "")
              ));
          }
        }),
        Eu.forEach((e) => {
          var o = du(n, e);
          if (
            (o && (o = o.replace(/\{\{/g, "%7B%7B").replace(/\}\}/g, "%7D%7D")),
            o && o.indexOf("%7B") > -1)
          ) {
            var i = [];
            o.split(Cu).reduce((n, o, i) => {
              if (0 === o.length) return n;
              if (i && i % 2 != 0) {
                var a = yu(o, t({}, u), r ? "".concat(r, ".").concat(e) : "");
                a &&
                  0 == a.indexOf("http") &&
                  n[i - 1] &&
                  0 === n[i - 1].indexOf("http") &&
                  n.splice(i - 1, 1),
                  n.push(a);
              } else n.push(o);
              return n;
            }, i),
              i.length && hu(n, e, i.join(""));
          }
        }),
        n)
      : n;
  }
  function Fu(e, n) {
    var u = cu(n, "i18next-options");
    if (u)
      try {
        u = JSON.parse(u);
      } catch (e) {
        console.warn("failed parsing options on node", n);
      }
    return (
      u &&
        u.inlineTags &&
        (u.inlineTags = u.inlineTags.map((e) => e.toUpperCase())),
      t(t({}, e || {}), u || {})
    );
  }
  function Du(e, t) {
    return W.options.cleanIndent ? e.replace(/\n +/g, t) : e;
  }
  function wu(e, t) {
    if (
      !e.children ||
      !e.children.length ||
      W.options.ignoreInlineOn.indexOf(e.tagName) > -1
    )
      return !1;
    if (W.options.mergeTags.indexOf(e.tagName) > -1) return !0;
    var n = t.inlineTags || W.options.inlineTags,
      u = t.additionalInlineTags ? n.concat(t.additionalInlineTags) : n,
      r = !0,
      o = !1;
    return (
      e.children.forEach((e) => {
        !e.text &&
          e.tagName &&
          u.indexOf(e.tagName.toUpperCase()) < 0 &&
          (r = !1),
          e.tagName && (o = !0);
      }),
      r && o
    );
  }
  function Bu(e, t) {
    var n = new Bn();
    n.start();
    var u = (function e(t, n, u, r) {
      var o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        i = arguments.length > 5 ? arguments[5] : void 0,
        a = Au(t),
        s = mu(t, i),
        l = mu(t);
      n = Fu(n, t);
      var c = 0 === o ? r : "";
      o > 0 &&
        r &&
        !W.options.ignoreWithoutKey &&
        (c = "".concat(r, ".").concat(o));
      var p = cu(t, W.options.keyAttr) || c,
        h = cu(t, "merge");
      if ("false" !== h && ("" === h || wu(t, n))) {
        if (a && s) {
          var d = new it("I18NEXTIFYDUMMY", null, t.children),
            f = Du(Yn(d), "")
              .replace("<i18nextifydummy>", "")
              .replace("</i18nextifydummy>", "");
          if (i.retranslate) {
            var g =
              t.properties &&
              t.properties.attributes &&
              t.properties.attributes["i18next-orgval"];
            g ||
              (g =
                u &&
                u.properties &&
                u.properties.attributes &&
                u.properties.attributes["i18next-orgval-".concat(o)]),
              g || (g = f),
              (f = g);
          }
          var v = "<i18nextifydummy>".concat(yu(f, n, p), "</i18nextifydummy>"),
            m = ru((v || "").trim());
          (t.children = m.children),
            l && t.properties && t.properties.attributes
              ? (t.properties.attributes["i18next-orgval"] = f)
              : l &&
                u &&
                u.properties &&
                u.properties.attributes &&
                (u.properties.attributes["i18next-orgval-".concat(o)] = f),
            t.properties &&
              t.properties.attributes &&
              (t.properties.attributes.localized = "");
        }
        return t;
      }
      if (
        (t.children &&
          t.children.forEach((u, r) => {
            ((a && s && u.text) || (!u.text && Au(u))) &&
              e(u, n, t, p, t.children.length > 1 ? r + 1 : r, i);
          }),
        t.text && !t.properties && "Widget" === t.type)
      )
        return t;
      if (a && s) {
        if (t.text) {
          var A,
            y = t.text,
            E = t.text;
          if (i.retranslate) {
            var C =
              t.properties &&
              t.properties.attributes &&
              t.properties.attributes["i18next-orgval"];
            C ||
              (C =
                u &&
                u.properties &&
                u.properties.attributes &&
                u.properties.attributes["i18next-orgval-".concat(o)]),
              C || (C = t.text),
              (y = C),
              (E = C);
          }
          var b = W.options.ignoreCleanIndentFor.indexOf(u.tagName) > -1;
          if (!b && ((y = Du(y, "\n")), W.options.cleanWhitespace)) {
            var F = /^\s*(.*[^\s])\s*$/g;
            A = F.exec(y);
          }
          if (!b && A && A.length > 1 && W.options.cleanWhitespace) {
            var D = yu(A[1], n, p || "");
            t.text = y.replace(A[1], D);
          } else t.text = yu(y, n, p || "");
          l && t.properties && t.properties.attributes
            ? E && (t.properties.attributes["i18next-orgval"] = E)
            : l &&
              u &&
              u.properties &&
              u.properties.attributes &&
              E &&
              (u.properties.attributes["i18next-orgval-".concat(o)] = E);
        }
        t.properties && (t.properties = bu(t, t.properties, n, p, l, i)),
          t.properties &&
            t.properties.attributes &&
            (t.properties.attributes.localized = "");
      }
      return t;
    })(e, null, null, null, null, { retranslate: t });
    return (
      W.services.logger.log("localization took: ".concat(n.end(), "ms")), u
    );
  }
  function xu(e, t) {
    var n = {};
    return (
      (n.render = function (n) {
        var u = (function (e) {
            var t = new Bn();
            t.start();
            var n = ft(e);
            return (
              W.services.logger.log(
                "virtualization took: ".concat(t.end(), "ms")
              ),
              n
            );
          })(e),
          r = Bu(wn(u), n),
          o = Pt(u, r);
        o[0] && t.reset(), (e = Dn(e, o));
      }),
      (n.debouncedRender = lu(n.render, 200)),
      n
    );
  }
  var Ou = {};
  var ku = lu(function () {
    W.services.logger.log(
      "missing resources: \n" + JSON.stringify(Ou, null, 2)
    );
  }, 2e3);
  function Su(e, t, n, u) {
    "string" == typeof e && (e = [e]),
      e || (e = []),
      e.forEach((e) => {
        hu(Ou, [e, t, n], u), ku();
      }),
      W.services.backendConnector &&
        W.services.backendConnector.saveMissing &&
        W.services.backendConnector.saveMissing(e, t, n, u);
  }
  function Nu() {
    var e = document.getElementById("i18nextify");
    return {
      autorun: !0,
      ele: document.body,
      keyAttr: "i18next-key",
      ignoreWithoutKey: !1,
      ignoreTags: ["SCRIPT"],
      ignoreIds: [],
      ignoreClasses: [],
      translateAttributes: [
        "placeholder",
        "title",
        "alt",
        "value#input.type=button",
        "value#input.type=submit",
      ],
      mergeTags: [],
      inlineTags: [],
      ignoreInlineOn: [],
      cleanIndent: !0,
      ignoreCleanIndentFor: ["PRE", "CODE"],
      cleanWhitespace: !0,
      nsSeparator: "#||#",
      keySeparator: "#|#",
      debug:
        window.location.search &&
        window.location.search.indexOf("debug=true") > -1,
      saveMissing:
        window.location.search &&
        window.location.search.indexOf("saveMissing=true") > -1,
      namespace: !1,
      namespaceFromPath: !1,
      missingKeyHandler: Su,
      ns: [],
      onInitialTranslate: () => {},
      fallbackLng:
        (e &&
          (e.getAttribute("fallbacklng") || e.getAttribute("fallbackLng"))) ||
        void 0,
    };
  }
  var Lu = !1,
    Pu = !1;
  Ze(() => {
    (Lu = !0), Pu || Ru();
  }),
    W.use(Ae),
    W.use(Je);
  var Tu = {};
  var ju = [];
  function Ru() {
    var e,
      n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    function u(t) {
      for (var u = 0; u < t.length; u++) {
        var r = t[u];
        if (
          n.ignoreTags.indexOf(r.tagName) < 0 &&
          n.ignoreIds.indexOf(r.id) < 0 &&
          n.ignoreClasses.indexOf(r.className) < 0 &&
          !r.attributes.localized &&
          !r.attributes.translated
        ) {
          var o = xu(r, e);
          ju.push(o), o.render();
        }
      }
    }
    function r(e, t, u) {
      var o = !0;
      setTimeout(() => {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          if (
            n.ignoreTags.indexOf(i.tagName) < 0 &&
            n.ignoreIds.indexOf(i.id) < 0 &&
            n.ignoreClasses.indexOf(i.className) < 0 &&
            !i.attributes.localized &&
            !i.attributes.translated
          ) {
            o && r(e, 100, u), (o = !1);
            break;
          }
        }
        o && u();
      }, t);
    }
    (n = t(t(t({}, Nu()), Tu), n)),
      (n = vu(n)).ele || (delete n.ele, (Tu = n)),
      (Pu = !0);
    var o = 1;
    function i() {
      if (!(o -= 1)) {
        n.ele || (n.ele = document.body);
        var t = n.ele.children;
        (e = new We(n.ele)),
          u(t),
          e.on("changed", (e) => {
            ju.forEach((e) => e.debouncedRender()), u(t);
          }),
          r(t, 0, () => {
            if (
              (n.ele.style &&
                "none" === n.ele.style.display &&
                (n.ele.style.display = "block"),
              window.document.title)
            ) {
              var e =
                window.document.getElementsByTagName("title").length > 0 &&
                window.document
                  .getElementsByTagName("title")[0]
                  .getAttribute(W.options.keyAttr);
              window.document.title = W.t(e || window.document.title);
            }
            if (
              window.document.querySelector('meta[name="description"]') &&
              window.document.querySelector('meta[name="description"]').content
            ) {
              var t =
                window.document
                  .querySelector('meta[name="description"]')
                  .getAttribute(W.options.keyAttr) ||
                window.document.querySelector('meta[name="description"]')
                  .content;
              window.document
                .querySelector('meta[name="description"]')
                .setAttribute("content", W.t(t));
            }
            n.onInitialTranslate();
          });
      }
    }
    if (
      (Lu || o++,
      !1 === n.autorun && o++,
      W.on("languageChanged", (e) => {
        window.document.documentElement.lang = e;
      }),
      W.init(n, i),
      Lu || Ze(i),
      !1 === n.autorun)
    )
      return { start: i };
  }
  return {
    init: Ru,
    i18next: W,
    changeNamespace: function (e) {
      !e && Tu.namespaceFromPath && (e = fu()),
        Tu.ns.push(e),
        (Tu.defaultNS = e),
        W.loadNamespaces(Tu.ns, () => {
          W.setDefaultNamespace(e);
        });
    },
    forceRerender: function () {
      ju.forEach((e) => {
        e.render(!0);
      });
    },
  };
});
