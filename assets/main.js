(function () {
        const H = document.createElement("link").relList;
        if (H && H.supports && H.supports("modulepreload")) return;
        for (const O of document.querySelectorAll('link[rel="modulepreload"]'))
          m(O);
        new MutationObserver((O) => {
          for (const B of O)
            if (B.type === "childList")
              for (const V of B.addedNodes)
                V.tagName === "LINK" && V.rel === "modulepreload" && m(V);
        }).observe(document, { childList: !0, subtree: !0 });
        function j(O) {
          const B = {};
          return (
            O.integrity && (B.integrity = O.integrity),
            O.referrerPolicy && (B.referrerPolicy = O.referrerPolicy),
            O.crossOrigin === "use-credentials"
              ? (B.credentials = "include")
              : O.crossOrigin === "anonymous"
                ? (B.credentials = "omit")
                : (B.credentials = "same-origin"),
            B
          );
        }
        function m(O) {
          if (O.ep) return;
          O.ep = !0;
          const B = j(O);
          fetch(O.href, B);
        }
      })();
      var cf = { exports: {} },
        bu = {};
      var hd;
      function Iy() {
        if (hd) return bu;
        hd = 1;
        var A = Symbol.for("react.transitional.element"),
          H = Symbol.for("react.fragment");
        function j(m, O, B) {
          var V = null;
          if (
            (B !== void 0 && (V = "" + B),
            O.key !== void 0 && (V = "" + O.key),
            "key" in O)
          ) {
            B = {};
            for (var U in O) U !== "key" && (B[U] = O[U]);
          } else B = O;
          return (
            (O = B.ref),
            {
              $typeof: A,
              type: m,
              key: V,
              ref: O !== void 0 ? O : null,
              props: B,
            }
          );
        }
        return ((bu.Fragment = H), (bu.jsx = j), (bu.jsxs = j), bu);
      }
      var gd;
      function Py() {
        return (gd || ((gd = 1), (cf.exports = Iy())), cf.exports);
      }
      var o = Py(),
        ff = { exports: {} },
        Q = {};
      var pd;
      function l0() {
        if (pd) return Q;
        pd = 1;
        var A = Symbol.for("react.transitional.element"),
          H = Symbol.for("react.portal"),
          j = Symbol.for("react.fragment"),
          m = Symbol.for("react.strict_mode"),
          O = Symbol.for("react.profiler"),
          B = Symbol.for("react.consumer"),
          V = Symbol.for("react.context"),
          U = Symbol.for("react.forward_ref"),
          C = Symbol.for("react.suspense"),
          T = Symbol.for("react.memo"),
          tl = Symbol.for("react.lazy"),
          Y = Symbol.for("react.activity"),
          ml = Symbol.iterator;
        function kl(r) {
          return r === null || typeof r != "object"
            ? null
            : ((r = (ml && r[ml]) || r["@@iterator"]),
              typeof r == "function" ? r : null);
        }
        var Yl = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          Hl = Object.assign,
          Dt = {};
        function $l(r, z, _) {
          ((this.props = r),
            (this.context = z),
            (this.refs = Dt),
            (this.updater = _ || Yl));
        }
        (($l.prototype.isReactComponent = {}),
          ($l.prototype.setState = function (r, z) {
            if (typeof r != "object" && typeof r != "function" && r != null)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, r, z, "setState");
          }),
          ($l.prototype.forceUpdate = function (r) {
            this.updater.enqueueForceUpdate(this, r, "forceUpdate");
          }));
        function $t() {}
        $t.prototype = $l.prototype;
        function Cl(r, z, _) {
          ((this.props = r),
            (this.context = z),
            (this.refs = Dt),
            (this.updater = _ || Yl));
        }
        var ft = (Cl.prototype = new $t());
        ((ft.constructor = Cl),
          Hl(ft, $l.prototype),
          (ft.isPureReactComponent = !0));
        var Tt = Array.isArray;
        function Gl() {}
        var $ = { H: null, A: null, T: null, S: null },
          Ql = Object.prototype.hasOwnProperty;
        function At(r, z, _) {
          var D = _.ref;
          return {
            $typeof: A,
            type: r,
            key: z,
            ref: D !== void 0 ? D : null,
            props: _,
          };
        }
        function Ze(r, z) {
          return At(r.type, z, r.props);
        }
        function Et(r) {
          return typeof r == "object" && r !== null && r.$typeof === A;
        }
        function Xl(r) {
          var z = { "=": "=0", ":": "=2" };
          return (
            "$" +
            r.replace(/[=:]/g, function (_) {
              return z[_];
            })
          );
        }
        var ze = /\/+/g;
        function Nt(r, z) {
          return typeof r == "object" && r !== null && r.key != null
            ? Xl("" + r.key)
            : z.toString(36);
        }
        function St(r) {
          switch (r.status) {
            case "fulfilled":
              return r.value;
            case "rejected":
              throw r.reason;
            default:
              switch (
                (typeof r.status == "string"
                  ? r.then(Gl, Gl)
                  : ((r.status = "pending"),
                    r.then(
                      function (z) {
                        r.status === "pending" &&
                          ((r.status = "fulfilled"), (r.value = z));
                      },
                      function (z) {
                        r.status === "pending" &&
                          ((r.status = "rejected"), (r.reason = z));
                      },
                    )),
                r.status)
              ) {
                case "fulfilled":
                  return r.value;
                case "rejected":
                  throw r.reason;
              }
          }
          throw r;
        }
        function S(r, z, _, D, X) {
          var K = typeof r;
          (K === "undefined" || K === "boolean") && (r = null);
          var el = !1;
          if (r === null) el = !0;
          else
            switch (K) {
              case "bigint":
              case "string":
              case "number":
                el = !0;
                break;
              case "object":
                switch (r.$typeof) {
                  case A:
                  case H:
                    el = !0;
                    break;
                  case tl:
                    return ((el = r._init), S(el(r._payload), z, _, D, X));
                }
            }
          if (el)
            return (
              (X = X(r)),
              (el = D === "" ? "." + Nt(r, 0) : D),
              Tt(X)
                ? ((_ = ""),
                  el != null && (_ = el.replace(ze, "___PLACEHOLDER_script_/") + "/"),
                  S(X, z, _, "", function (_a) {
                    return _a;
                  }))
                : X != null &&
                  (Et(X) &&
                    (X = Ze(
                      X,
                      _ +
                        (X.key == null || (r && r.key === X.key)
                          ? ""
                          : ("" + X.key).replace(ze, "___PLACEHOLDER_script_/") + "/") +
                        el,
                    )),
                  z.push(X)),
              1
            );
          el = 0;
          var Bl = D === "" ? "." : D + ":";
          if (Tt(r))
            for (var pl = 0; pl < r.length; pl++)
              ((D = r[pl]), (K = Bl + Nt(D, pl)), (el += S(D, z, _, K, X)));
          else if (((pl = kl(r)), typeof pl == "function"))
            for (r = pl.call(r), pl = 0; !(D = r.next()).done; )
              ((D = D.value), (K = Bl + Nt(D, pl++)), (el += S(D, z, _, K, X)));
          else if (K === "object") {
            if (typeof r.then == "function") return S(St(r), z, _, D, X);
            throw (
              (z = String(r)),
              Error(
                "Objects are not valid as a React child (found: " +
                  (z === "[object Object]"
                    ? "object with keys {" + Object.keys(r).join(", ") + "}"
                    : z) +
                  "). If you meant to render a collection of children, use an array instead.",
              )
            );
          }
          return el;
        }
        function E(r, z, _) {
          if (r == null) return r;
          var D = [],
            X = 0;
          return (
            S(r, D, "", "", function (K) {
              return z.call(_, K, X++);
            }),
            D
          );
        }
        function G(r) {
          if (r._status === -1) {
            var z = r._result;
            ((z = z()),
              z.then(
                function (_) {
                  (r._status === 0 || r._status === -1) &&
                    ((r._status = 1), (r._result = _));
                },
                function (_) {
                  (r._status === 0 || r._status === -1) &&
                    ((r._status = 2), (r._result = _));
                },
              ),
              r._status === -1 && ((r._status = 0), (r._result = z)));
          }
          if (r._status === 1) return r._result.default;
          throw r._result;
        }
        var nl =
            typeof reportError == "function"
              ? reportError
              : function (r) {
                  if (
                    typeof window == "object" &&
                    typeof window.ErrorEvent == "function"
                  ) {
                    var z = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        typeof r == "object" &&
                        r !== null &&
                        typeof r.message == "string"
                          ? String(r.message)
                          : String(r),
                      error: r,
                    });
                    if (!window.dispatchEvent(z)) return;
                  } else if (
                    typeof process == "object" &&
                    typeof process.emit == "function"
                  ) {
                    process.emit("uncaughtException", r);
                    return;
                  }
                  console.error(r);
                },
          sl = {
            map: E,
            forEach: function (r, z, _) {
              E(
                r,
                function () {
                  z.apply(this, arguments);
                },
                _,
              );
            },
            count: function (r) {
              var z = 0;
              return (
                E(r, function () {
                  z++;
                }),
                z
              );
            },
            toArray: function (r) {
              return (
                E(r, function (z) {
                  return z;
                }) || []
              );
            },
            only: function (r) {
              if (!Et(r))
                throw Error(
                  "React.Children.only expected to receive a single React element child.",
                );
              return r;
            },
          };
        return (
          (Q.Activity = Y),
          (Q.Children = sl),
          (Q.Component = $l),
          (Q.Fragment = j),
          (Q.Profiler = O),
          (Q.PureComponent = Cl),
          (Q.StrictMode = m),
          (Q.Suspense = C),
          (Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            $),
          (Q.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (r) {
              return $.H.useMemoCache(r);
            },
          }),
          (Q.cache = function (r) {
            return function () {
              return r.apply(null, arguments);
            };
          }),
          (Q.cacheSignal = function () {
            return null;
          }),
          (Q.cloneElement = function (r, z, _) {
            if (r == null)
              throw Error(
                "The argument must be a React element, but you passed " +
                  r +
                  ".",
              );
            var D = Hl({}, r.props),
              X = r.key;
            if (z != null)
              for (K in (z.key !== void 0 && (X = "" + z.key), z))
                !Ql.call(z, K) ||
                  K === "key" ||
                  K === "__self" ||
                  K === "__source" ||
                  (K === "ref" && z.ref === void 0) ||
                  (D[K] = z[K]);
            var K = arguments.length - 2;
            if (K === 1) D.children = _;
            else if (1 < K) {
              for (var el = Array(K), Bl = 0; Bl < K; Bl++)
                el[Bl] = arguments[Bl + 2];
              D.children = el;
            }
            return At(r.type, X, D);
          }),
          (Q.createContext = function (r) {
            return (
              (r = {
                $typeof: V,
                _currentValue: r,
                _currentValue2: r,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }),
              (r.Provider = r),
              (r.Consumer = { $typeof: B, _context: r }),
              r
            );
          }),
          (Q.createElement = function (r, z, _) {
            var D,
              X = {},
              K = null;
            if (z != null)
              for (D in (z.key !== void 0 && (K = "" + z.key), z))
                Ql.call(z, D) &&
                  D !== "key" &&
                  D !== "__self" &&
                  D !== "__source" &&
                  (X[D] = z[D]);
            var el = arguments.length - 2;
            if (el === 1) X.children = _;
            else if (1 < el) {
              for (var Bl = Array(el), pl = 0; pl < el; pl++)
                Bl[pl] = arguments[pl + 2];
              X.children = Bl;
            }
            if (r && r.defaultProps)
              for (D in ((el = r.defaultProps), el))
                X[D] === void 0 && (X[D] = el[D]);
            return At(r, K, X);
          }),
          (Q.createRef = function () {
            return { current: null };
          }),
          (Q.forwardRef = function (r) {
            return { $typeof: U, render: r };
          }),
          (Q.isValidElement = Et),
          (Q.lazy = function (r) {
            return {
              $typeof: tl,
              _payload: { _status: -1, _result: r },
              _init: G,
            };
          }),
          (Q.memo = function (r, z) {
            return { $typeof: T, type: r, compare: z === void 0 ? null : z };
          }),
          (Q.startTransition = function (r) {
            var z = $.T,
              _ = {};
            $.T = _;
            try {
              var D = r(),
                X = $.S;
              (X !== null && X(_, D),
                typeof D == "object" &&
                  D !== null &&
                  typeof D.then == "function" &&
                  D.then(Gl, nl));
            } catch (K) {
              nl(K);
            } finally {
              (z !== null && _.types !== null && (z.types = _.types),
                ($.T = z));
            }
          }),
          (Q.unstable_useCacheRefresh = function () {
            return $.H.useCacheRefresh();
          }),
          (Q.use = function (r) {
            return $.H.use(r);
          }),
          (Q.useActionState = function (r, z, _) {
            return $.H.useActionState(r, z, _);
          }),
          (Q.useCallback = function (r, z) {
            return $.H.useCallback(r, z);
          }),
          (Q.useContext = function (r) {
            return $.H.useContext(r);
          }),
          (Q.useDebugValue = function () {}),
          (Q.useDeferredValue = function (r, z) {
            return $.H.useDeferredValue(r, z);
          }),
          (Q.useEffect = function (r, z) {
            return $.H.useEffect(r, z);
          }),
          (Q.useEffectEvent = function (r) {
            return $.H.useEffectEvent(r);
          }),
          (Q.useId = function () {
            return $.H.useId();
          }),
          (Q.useImperativeHandle = function (r, z, _) {
            return $.H.useImperativeHandle(r, z, _);
          }),
          (Q.useInsertionEffect = function (r, z) {
            return $.H.useInsertionEffect(r, z);
          }),
          (Q.useLayoutEffect = function (r, z) {
            return $.H.useLayoutEffect(r, z);
          }),
          (Q.useMemo = function (r, z) {
            return $.H.useMemo(r, z);
          }),
          (Q.useOptimistic = function (r, z) {
            return $.H.useOptimistic(r, z);
          }),
          (Q.useReducer = function (r, z, _) {
            return $.H.useReducer(r, z, _);
          }),
          (Q.useRef = function (r) {
            return $.H.useRef(r);
          }),
          (Q.useState = function (r) {
            return $.H.useState(r);
          }),
          (Q.useSyncExternalStore = function (r, z, _) {
            return $.H.useSyncExternalStore(r, z, _);
          }),
          (Q.useTransition = function () {
            return $.H.useTransition();
          }),
          (Q.version = "19.2.3"),
          Q
        );
      }
      var Sd;
      function mf() {
        return (Sd || ((Sd = 1), (ff.exports = l0())), ff.exports);
      }
      var ct = mf(),
        sf = { exports: {} },
        xu = {},
        of = { exports: {} },
        rf = {};
      var bd;
      function t0() {
        return (
          bd ||
            ((bd = 1),
            (function (A) {
              function H(S, E) {
                var G = S.length;
                S.push(E);
                l: for (; 0 < G; ) {
                  var nl = (G - 1) >>> 1,
                    sl = S[nl];
                  if (0 < O(sl, E)) ((S[nl] = E), (S[G] = sl), (G = nl));
                  else break l;
                }
              }
              function j(S) {
                return S.length === 0 ? null : S[0];
              }
              function m(S) {
                if (S.length === 0) return null;
                var E = S[0],
                  G = S.pop();
                if (G !== E) {
                  S[0] = G;
                  l: for (var nl = 0, sl = S.length, r = sl >>> 1; nl < r; ) {
                    var z = 2 * (nl + 1) - 1,
                      _ = S[z],
                      D = z + 1,
                      X = S[D];
                    if (0 > O(_, G))
                      D < sl && 0 > O(X, _)
                        ? ((S[nl] = X), (S[D] = G), (nl = D))
                        : ((S[nl] = _), (S[z] = G), (nl = z));
                    else if (D < sl && 0 > O(X, G))
                      ((S[nl] = X), (S[D] = G), (nl = D));
                    else break l;
                  }
                }
                return E;
              }
              function O(S, E) {
                var G = S.sortIndex - E.sortIndex;
                return G !== 0 ? G : S.id - E.id;
              }
              if (
                ((A.unstable_now = void 0),
                typeof performance == "object" &&
                  typeof performance.now == "function")
              ) {
                var B = performance;
                A.unstable_now = function () {
                  return B.now();
                };
              } else {
                var V = Date,
                  U = V.now();
                A.unstable_now = function () {
                  return V.now() - U;
                };
              }
              var C = [],
                T = [],
                tl = 1,
                Y = null,
                ml = 3,
                kl = !1,
                Yl = !1,
                Hl = !1,
                Dt = !1,
                $l = typeof setTimeout == "function" ? setTimeout : null,
                $t = typeof clearTimeout == "function" ? clearTimeout : null,
                Cl = typeof setImmediate < "u" ? setImmediate : null;
              function ft(S) {
                for (var E = j(T); E !== null; ) {
                  if (E.callback === null) m(T);
                  else if (E.startTime <= S)
                    (m(T), (E.sortIndex = E.expirationTime), H(C, E));
                  else break;
                  E = j(T);
                }
              }
              function Tt(S) {
                if (((Hl = !1), ft(S), !Yl))
                  if (j(C) !== null) ((Yl = !0), Gl || ((Gl = !0), Xl()));
                  else {
                    var E = j(T);
                    E !== null && St(Tt, E.startTime - S);
                  }
              }
              var Gl = !1,
                $ = -1,
                Ql = 5,
                At = -1;
              function Ze() {
                return Dt ? !0 : !(A.unstable_now() - At < Ql);
              }
              function Et() {
                if (((Dt = !1), Gl)) {
                  var S = A.unstable_now();
                  At = S;
                  var E = !0;
                  try {
                    l: {
                      ((Yl = !1),
                        Hl && ((Hl = !1), $t($), ($ = -1)),
                        (kl = !0));
                      var G = ml;
                      try {
                        t: {
                          for (
                            ft(S), Y = j(C);
                            Y !== null && !(Y.expirationTime > S && Ze());
                          ) {
                            var nl = Y.callback;
                            if (typeof nl == "function") {
                              ((Y.callback = null), (ml = Y.priorityLevel));
                              var sl = nl(Y.expirationTime <= S);
                              if (
                                ((S = A.unstable_now()),
                                typeof sl == "function")
                              ) {
                                ((Y.callback = sl), ft(S), (E = !0));
                                break t;
                              }
                              (Y === j(C) && m(C), ft(S));
                            } else m(C);
                            Y = j(C);
                          }
                          if (Y !== null) E = !0;
                          else {
                            var r = j(T);
                            (r !== null && St(Tt, r.startTime - S), (E = !1));
                          }
                        }
                        break l;
                      } finally {
                        ((Y = null), (ml = G), (kl = !1));
                      }
                      E = void 0;
                    }
                  } finally {
                    E ? Xl() : (Gl = !1);
                  }
                }
              }
              var Xl;
              if (typeof Cl == "function")
                Xl = function () {
                  Cl(Et);
                };
              else if (typeof MessageChannel < "u") {
                var ze = new MessageChannel(),
                  Nt = ze.port2;
                ((ze.port1.onmessage = Et),
                  (Xl = function () {
                    Nt.postMessage(null);
                  }));
              } else
                Xl = function () {
                  $l(Et, 0);
                };
              function St(S, E) {
                $ = $l(function () {
                  S(A.unstable_now());
                }, E);
              }
              ((A.unstable_IdlePriority = 5),
                (A.unstable_ImmediatePriority = 1),
                (A.unstable_LowPriority = 4),
                (A.unstable_NormalPriority = 3),
                (A.unstable_Profiling = null),
                (A.unstable_UserBlockingPriority = 2),
                (A.unstable_cancelCallback = function (S) {
                  S.callback = null;
                }),
                (A.unstable_forceFrameRate = function (S) {
                  0 > S || 125 < S
                    ? console.error(
                        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                      )
                    : (Ql = 0 < S ? Math.floor(1e3 / S) : 5);
                }),
                (A.unstable_getCurrentPriorityLevel = function () {
                  return ml;
                }),
                (A.unstable_next = function (S) {
                  switch (ml) {
                    case 1:
                    case 2:
                    case 3:
                      var E = 3;
                      break;
                    default:
                      E = ml;
                  }
                  var G = ml;
                  ml = E;
                  try {
                    return S();
                  } finally {
                    ml = G;
                  }
                }),
                (A.unstable_requestPaint = function () {
                  Dt = !0;
                }),
                (A.unstable_runWithPriority = function (S, E) {
                  switch (S) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      break;
                    default:
                      S = 3;
                  }
                  var G = ml;
                  ml = S;
                  try {
                    return E();
                  } finally {
                    ml = G;
                  }
                }),
                (A.unstable_scheduleCallback = function (S, E, G) {
                  var nl = A.unstable_now();
                  switch (
                    (typeof G == "object" && G !== null
                      ? ((G = G.delay),
                        (G = typeof G == "number" && 0 < G ? nl + G : nl))
                      : (G = nl),
                    S)
                  ) {
                    case 1:
                      var sl = -1;
                      break;
                    case 2:
                      sl = 250;
                      break;
                    case 5:
                      sl = 1073741823;
                      break;
                    case 4:
                      sl = 1e4;
                      break;
                    default:
                      sl = 5e3;
                  }
                  return (
                    (sl = G + sl),
                    (S = {
                      id: tl++,
                      callback: E,
                      priorityLevel: S,
                      startTime: G,
                      expirationTime: sl,
                      sortIndex: -1,
                    }),
                    G > nl
                      ? ((S.sortIndex = G),
                        H(T, S),
                        j(C) === null &&
                          S === j(T) &&
                          (Hl ? ($t($), ($ = -1)) : (Hl = !0), St(Tt, G - nl)))
                      : ((S.sortIndex = sl),
                        H(C, S),
                        Yl || kl || ((Yl = !0), Gl || ((Gl = !0), Xl()))),
                    S
                  );
                }),
                (A.unstable_shouldYield = Ze),
                (A.unstable_wrapCallback = function (S) {
                  var E = ml;
                  return function () {
                    var G = ml;
                    ml = E;
                    try {
                      return S.apply(this, arguments);
                    } finally {
                      ml = G;
                    }
                  };
                }));
            })(rf)),
          rf
        );
      }
      var xd;
      function e0() {
        return (xd || ((xd = 1), (of.exports = t0())), of.exports);
      }
      var df = { exports: {} },
        Rl = {};
      var zd;
      function a0() {
        if (zd) return Rl;
        zd = 1;
        var A = mf();
        function H(C) {
          var T = "https://react.dev/errors/" + C;
          if (1 < arguments.length) {
            T += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var tl = 2; tl < arguments.length; tl++)
              T += "&args[]=" + encodeURIComponent(arguments[tl]);
          }
          return (
            "Minified React error #" +
            C +
            "; visit " +
            T +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function j() {}
        var m = {
            d: {
              f: j,
              r: function () {
                throw Error(H(522));
              },
              D: j,
              C: j,
              L: j,
              m: j,
              X: j,
              S: j,
              M: j,
            },
            p: 0,
            findDOMNode: null,
          },
          O = Symbol.for("react.portal");
        function B(C, T, tl) {
          var Y =
            3 < arguments.length && arguments[3] !== void 0
              ? arguments[3]
              : null;
          return {
            $typeof: O,
            key: Y == null ? null : "" + Y,
            children: C,
            containerInfo: T,
            implementation: tl,
          };
        }
        var V =
          A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function U(C, T) {
          if (C === "font") return "";
          if (typeof T == "string") return T === "use-credentials" ? T : "";
        }
        return (
          (Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
          (Rl.createPortal = function (C, T) {
            var tl =
              2 < arguments.length && arguments[2] !== void 0
                ? arguments[2]
                : null;
            if (
              !T ||
              (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
            )
              throw Error(H(299));
            return B(C, T, null, tl);
          }),
          (Rl.flushSync = function (C) {
            var T = V.T,
              tl = m.p;
            try {
              if (((V.T = null), (m.p = 2), C)) return C();
            } finally {
              ((V.T = T), (m.p = tl), m.d.f());
            }
          }),
          (Rl.preconnect = function (C, T) {
            typeof C == "string" &&
              (T
                ? ((T = T.crossOrigin),
                  (T =
                    typeof T == "string"
                      ? T === "use-credentials"
                        ? T
                        : ""
                      : void 0))
                : (T = null),
              m.d.C(C, T));
          }),
          (Rl.prefetchDNS = function (C) {
            typeof C == "string" && m.d.D(C);
          }),
          (Rl.preinit = function (C, T) {
            if (typeof C == "string" && T && typeof T.as == "string") {
              var tl = T.as,
                Y = U(tl, T.crossOrigin),
                ml = typeof T.integrity == "string" ? T.integrity : void 0,
                kl =
                  typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
              tl === "style"
                ? m.d.S(
                    C,
                    typeof T.precedence == "string" ? T.precedence : void 0,
                    { crossOrigin: Y, integrity: ml, fetchPriority: kl },
                  )
                : tl === "script" &&
                  m.d.X(C, {
                    crossOrigin: Y,
                    integrity: ml,
                    fetchPriority: kl,
                    nonce: typeof T.nonce == "string" ? T.nonce : void 0,
                  });
            }
          }),
          (Rl.preinitModule = function (C, T) {
            if (typeof C == "string")
              if (typeof T == "object" && T !== null) {
                if (T.as == null || T.as === "script") {
                  var tl = U(T.as, T.crossOrigin);
                  m.d.M(C, {
                    crossOrigin: tl,
                    integrity:
                      typeof T.integrity == "string" ? T.integrity : void 0,
                    nonce: typeof T.nonce == "string" ? T.nonce : void 0,
                  });
                }
              } else T == null && m.d.M(C);
          }),
          (Rl.preload = function (C, T) {
            if (
              typeof C == "string" &&
              typeof T == "object" &&
              T !== null &&
              typeof T.as == "string"
            ) {
              var tl = T.as,
                Y = U(tl, T.crossOrigin);
              m.d.L(C, tl, {
                crossOrigin: Y,
                integrity:
                  typeof T.integrity == "string" ? T.integrity : void 0,
                nonce: typeof T.nonce == "string" ? T.nonce : void 0,
                type: typeof T.type == "string" ? T.type : void 0,
                fetchPriority:
                  typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
                referrerPolicy:
                  typeof T.referrerPolicy == "string"
                    ? T.referrerPolicy
                    : void 0,
                imageSrcSet:
                  typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
                imageSizes:
                  typeof T.imageSizes == "string" ? T.imageSizes : void 0,
                media: typeof T.media == "string" ? T.media : void 0,
              });
            }
          }),
          (Rl.preloadModule = function (C, T) {
            if (typeof C == "string")
              if (T) {
                var tl = U(T.as, T.crossOrigin);
                m.d.m(C, {
                  as:
                    typeof T.as == "string" && T.as !== "script"
                      ? T.as
                      : void 0,
                  crossOrigin: tl,
                  integrity:
                    typeof T.integrity == "string" ? T.integrity : void 0,
                });
              } else m.d.m(C);
          }),
          (Rl.requestFormReset = function (C) {
            m.d.r(C);
          }),
          (Rl.unstable_batchedUpdates = function (C, T) {
            return C(T);
          }),
          (Rl.useFormState = function (C, T, tl) {
            return V.H.useFormState(C, T, tl);
          }),
          (Rl.useFormStatus = function () {
            return V.H.useHostTransitionStatus();
          }),
          (Rl.version = "19.2.3"),
          Rl
        );
      }
      var Td;
      function u0() {
        if (Td) return df.exports;
        Td = 1;
        function A() {
          if (
            !(
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
            } catch (H) {
              console.error(H);
            }
        }
        return (A(), (df.exports = a0()), df.exports);
      }
      var Ad;
      function n0() {
        if (Ad) return xu;
        Ad = 1;
        var A = e0(),
          H = mf(),
          j = u0();
        function m(l) {
          var t = "https://react.dev/errors/" + l;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
              t += "&args[]=" + encodeURIComponent(arguments[e]);
          }
          return (
            "Minified React error #" +
            l +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function O(l) {
          return !(
            !l ||
            (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
          );
        }
        function B(l) {
          var t = l,
            e = l;
          if (l.alternate) for (; t.return; ) t = t.return;
          else {
            l = t;
            do
              ((t = l),
                (t.flags & 4098) !== 0 && (e = t.return),
                (l = t.return));
            while (l);
          }
          return t.tag === 3 ? e : null;
        }
        function V(l) {
          if (l.tag === 13) {
            var t = l.memoizedState;
            if (
              (t === null &&
                ((l = l.alternate), l !== null && (t = l.memoizedState)),
              t !== null)
            )
              return t.dehydrated;
          }
          return null;
        }
        function U(l) {
          if (l.tag === 31) {
            var t = l.memoizedState;
            if (
              (t === null &&
                ((l = l.alternate), l !== null && (t = l.memoizedState)),
              t !== null)
            )
              return t.dehydrated;
          }
          return null;
        }
        function C(l) {
          if (B(l) !== l) throw Error(m(188));
        }
        function T(l) {
          var t = l.alternate;
          if (!t) {
            if (((t = B(l)), t === null)) throw Error(m(188));
            return t !== l ? null : l;
          }
          for (var e = l, a = t; ; ) {
            var u = e.return;
            if (u === null) break;
            var n = u.alternate;
            if (n === null) {
              if (((a = u.return), a !== null)) {
                e = a;
                continue;
              }
              break;
            }
            if (u.child === n.child) {
              for (n = u.child; n; ) {
                if (n === e) return (C(u), l);
                if (n === a) return (C(u), t);
                n = n.sibling;
              }
              throw Error(m(188));
            }
            if (e.return !== a.return) ((e = u), (a = n));
            else {
              for (var i = !1, c = u.child; c; ) {
                if (c === e) {
                  ((i = !0), (e = u), (a = n));
                  break;
                }
                if (c === a) {
                  ((i = !0), (a = u), (e = n));
                  break;
                }
                c = c.sibling;
              }
              if (!i) {
                for (c = n.child; c; ) {
                  if (c === e) {
                    ((i = !0), (e = n), (a = u));
                    break;
                  }
                  if (c === a) {
                    ((i = !0), (a = n), (e = u));
                    break;
                  }
                  c = c.sibling;
                }
                if (!i) throw Error(m(189));
              }
            }
            if (e.alternate !== a) throw Error(m(190));
          }
          if (e.tag !== 3) throw Error(m(188));
          return e.stateNode.current === e ? l : t;
        }
        function tl(l) {
          var t = l.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6) return l;
          for (l = l.child; l !== null; ) {
            if (((t = tl(l)), t !== null)) return t;
            l = l.sibling;
          }
          return null;
        }
        var Y = Object.assign,
          ml = Symbol.for("react.element"),
          kl = Symbol.for("react.transitional.element"),
          Yl = Symbol.for("react.portal"),
          Hl = Symbol.for("react.fragment"),
          Dt = Symbol.for("react.strict_mode"),
          $l = Symbol.for("react.profiler"),
          $t = Symbol.for("react.consumer"),
          Cl = Symbol.for("react.context"),
          ft = Symbol.for("react.forward_ref"),
          Tt = Symbol.for("react.suspense"),
          Gl = Symbol.for("react.suspense_list"),
          $ = Symbol.for("react.memo"),
          Ql = Symbol.for("react.lazy"),
          At = Symbol.for("react.activity"),
          Ze = Symbol.for("react.memo_cache_sentinel"),
          Et = Symbol.iterator;
        function Xl(l) {
          return l === null || typeof l != "object"
            ? null
            : ((l = (Et && l[Et]) || l["@@iterator"]),
              typeof l == "function" ? l : null);
        }
        var ze = Symbol.for("react.client.reference");
        function Nt(l) {
          if (l == null) return null;
          if (typeof l == "function")
            return l.$typeof === ze ? null : l.displayName || l.name || null;
          if (typeof l == "string") return l;
          switch (l) {
            case Hl:
              return "Fragment";
            case $l:
              return "Profiler";
            case Dt:
              return "StrictMode";
            case Tt:
              return "Suspense";
            case Gl:
              return "SuspenseList";
            case At:
              return "Activity";
          }
          if (typeof l == "object")
            switch (l.$typeof) {
              case Yl:
                return "Portal";
              case Cl:
                return l.displayName || "Context";
              case $t:
                return (l._context.displayName || "Context") + ".Consumer";
              case ft:
                var t = l.render;
                return (
                  (l = l.displayName),
                  l ||
                    ((l = t.displayName || t.name || ""),
                    (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
                  l
                );
              case $:
                return (
                  (t = l.displayName || null),
                  t !== null ? t : Nt(l.type) || "Memo"
                );
              case Ql:
                ((t = l._payload), (l = l._init));
                try {
                  return Nt(l(t));
                } catch {}
            }
          return null;
        }
        var St = Array.isArray,
          S = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          E = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          G = { pending: !1, data: null, method: null, action: null },
          nl = [],
          sl = -1;
        function r(l) {
          return { current: l };
        }
        function z(l) {
          0 > sl || ((l.current = nl[sl]), (nl[sl] = null), sl--);
        }
        function _(l, t) {
          (sl++, (nl[sl] = l.current), (l.current = t));
        }
        var D = r(null),
          X = r(null),
          K = r(null),
          el = r(null);
        function Bl(l, t) {
          switch ((_(K, t), _(X, l), _(D, null), t.nodeType)) {
            case 9:
            case 11:
              l = (l = t.documentElement) && (l = l.namespaceURI) ? Gr(l) : 0;
              break;
            default:
              if (((l = t.tagName), (t = t.namespaceURI)))
                ((t = Gr(t)), (l = Qr(t, l)));
              else
                switch (l) {
                  case "svg":
                    l = 1;
                    break;
                  case "math":
                    l = 2;
                    break;
                  default:
                    l = 0;
                }
          }
          (z(D), _(D, l));
        }
        function pl() {
          (z(D), z(X), z(K));
        }
        function _a(l) {
          l.memoizedState !== null && _(el, l);
          var t = D.current,
            e = Qr(t, l.type);
          t !== e && (_(X, l), _(D, e));
        }
        function Tu(l) {
          (X.current === l && (z(D), z(X)),
            el.current === l && (z(el), (hu._currentValue = G)));
        }
        var Zn, yf;
        function Te(l) {
          if (Zn === void 0)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              ((Zn = (t && t[1]) || ""),
                (yf =
                  -1 <
                  e.stack.indexOf(`
    at`)
                    ? " (<anonymous>)"
                    : -1 < e.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return (
            `
` +
            Zn +
            l +
            yf
          );
        }
        var Vn = !1;
        function Ln(l, t) {
          if (!l || Vn) return "";
          Vn = !0;
          var e = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var a = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var x = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(x.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      typeof Reflect == "object" && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(x, []);
                      } catch (g) {
                        var h = g;
                      }
                      Reflect.construct(l, [], x);
                    } else {
                      try {
                        x.call();
                      } catch (g) {
                        h = g;
                      }
                      l.call(x.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (g) {
                      h = g;
                    }
                    (x = l()) &&
                      typeof x.catch == "function" &&
                      x.catch(function () {});
                  }
                } catch (g) {
                  if (g && h && typeof g.stack == "string")
                    return [g.stack, h.stack];
                }
                return [null, null];
              },
            };
            a.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(
              a.DetermineComponentFrameRoot,
              "name",
            );
            u &&
              u.configurable &&
              Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var n = a.DetermineComponentFrameRoot(),
              i = n[0],
              c = n[1];
            if (i && c) {
              var f = i.split(`
`),
                v = c.split(`
`);
              for (
                u = a = 0;
                a < f.length && !f[a].includes("DetermineComponentFrameRoot");
              )
                a++;
              for (
                ;
                u < v.length && !v[u].includes("DetermineComponentFrameRoot");
              )
                u++;
              if (a === f.length || u === v.length)
                for (
                  a = f.length - 1, u = v.length - 1;
                  1 <= a && 0 <= u && f[a] !== v[u];
                )
                  u--;
              for (; 1 <= a && 0 <= u; a--, u--)
                if (f[a] !== v[u]) {
                  if (a !== 1 || u !== 1)
                    do
                      if ((a--, u--, 0 > u || f[a] !== v[u])) {
                        var p =
                          `
` + f[a].replace(" at new ", " at ");
                        return (
                          l.displayName &&
                            p.includes("<anonymous>") &&
                            (p = p.replace("<anonymous>", l.displayName)),
                          p
                        );
                      }
                    while (1 <= a && 0 <= u);
                  break;
                }
            }
          } finally {
            ((Vn = !1), (Error.prepareStackTrace = e));
          }
          return (e = l ? l.displayName || l.name : "") ? Te(e) : "";
        }
        function Od(l, t) {
          switch (l.tag) {
            case 26:
            case 27:
            case 5:
              return Te(l.type);
            case 16:
              return Te("Lazy");
            case 13:
              return l.child !== t && t !== null
                ? Te("Suspense Fallback")
                : Te("Suspense");
            case 19:
              return Te("SuspenseList");
            case 0:
            case 15:
              return Ln(l.type, !1);
            case 11:
              return Ln(l.type.render, !1);
            case 1:
              return Ln(l.type, !0);
            case 31:
              return Te("Activity");
            default:
              return "";
          }
        }
        function vf(l) {
          try {
            var t = "",
              e = null;
            do ((t += Od(l, e)), (e = l), (l = l.return));
            while (l);
            return t;
          } catch (a) {
            return (
              `
Error generating stack: ` +
              a.message +
              `
` +
              a.stack
            );
          }
        }
        var Kn = Object.prototype.hasOwnProperty,
          Jn = A.unstable_scheduleCallback,
          wn = A.unstable_cancelCallback,
          Dd = A.unstable_shouldYield,
          Nd = A.unstable_requestPaint,
          Fl = A.unstable_now,
          Ud = A.unstable_getCurrentPriorityLevel,
          hf = A.unstable_ImmediatePriority,
          gf = A.unstable_UserBlockingPriority,
          Au = A.unstable_NormalPriority,
          Cd = A.unstable_LowPriority,
          pf = A.unstable_IdlePriority,
          Rd = A.log,
          Hd = A.unstable_setDisableYieldValue,
          Ma = null,
          Il = null;
        function Ft(l) {
          if (
            (typeof Rd == "function" && Hd(l),
            Il && typeof Il.setStrictMode == "function")
          )
            try {
              Il.setStrictMode(Ma, l);
            } catch {}
        }
        var Pl = Math.clz32 ? Math.clz32 : Yd,
          Bd = Math.log,
          qd = Math.LN2;
        function Yd(l) {
          return ((l >>>= 0), l === 0 ? 32 : (31 - ((Bd(l) / qd) | 0)) | 0);
        }
        var Eu = 256,
          ju = 262144,
          _u = 4194304;
        function Ae(l) {
          var t = l & 42;
          if (t !== 0) return t;
          switch (l & -l) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
              return l & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return l & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return l & 62914560;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return l;
          }
        }
        function Mu(l, t, e) {
          var a = l.pendingLanes;
          if (a === 0) return 0;
          var u = 0,
            n = l.suspendedLanes,
            i = l.pingedLanes;
          l = l.warmLanes;
          var c = a & 134217727;
          return (
            c !== 0
              ? ((a = c & ~n),
                a !== 0
                  ? (u = Ae(a))
                  : ((i &= c),
                    i !== 0
                      ? (u = Ae(i))
                      : e || ((e = c & ~l), e !== 0 && (u = Ae(e)))))
              : ((c = a & ~n),
                c !== 0
                  ? (u = Ae(c))
                  : i !== 0
                    ? (u = Ae(i))
                    : e || ((e = a & ~l), e !== 0 && (u = Ae(e)))),
            u === 0
              ? 0
              : t !== 0 &&
                  t !== u &&
                  (t & n) === 0 &&
                  ((n = u & -u),
                  (e = t & -t),
                  n >= e || (n === 32 && (e & 4194048) !== 0))
                ? t
                : u
          );
        }
        function Oa(l, t) {
          return (
            (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
          );
        }
        function Gd(l, t) {
          switch (l) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
              return -1;
            default:
              return -1;
          }
        }
        function Sf() {
          var l = _u;
          return ((_u <<= 1), (_u & 62914560) === 0 && (_u = 4194304), l);
        }
        function Wn(l) {
          for (var t = [], e = 0; 31 > e; e++) t.push(l);
          return t;
        }
        function Da(l, t) {
          ((l.pendingLanes |= t),
            t !== 268435456 &&
              ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
        }
        function Qd(l, t, e, a, u, n) {
          var i = l.pendingLanes;
          ((l.pendingLanes = e),
            (l.suspendedLanes = 0),
            (l.pingedLanes = 0),
            (l.warmLanes = 0),
            (l.expiredLanes &= e),
            (l.entangledLanes &= e),
            (l.errorRecoveryDisabledLanes &= e),
            (l.shellSuspendCounter = 0));
          var c = l.entanglements,
            f = l.expirationTimes,
            v = l.hiddenUpdates;
          for (e = i & ~e; 0 < e; ) {
            var p = 31 - Pl(e),
              x = 1 << p;
            ((c[p] = 0), (f[p] = -1));
            var h = v[p];
            if (h !== null)
              for (v[p] = null, p = 0; p < h.length; p++) {
                var g = h[p];
                g !== null && (g.lane &= -536870913);
              }
            e &= ~x;
          }
          (a !== 0 && bf(l, a, 0),
            n !== 0 &&
              u === 0 &&
              l.tag !== 0 &&
              (l.suspendedLanes |= n & ~(i & ~t)));
        }
        function bf(l, t, e) {
          ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
          var a = 31 - Pl(t);
          ((l.entangledLanes |= t),
            (l.entanglements[a] =
              l.entanglements[a] | 1073741824 | (e & 261930)));
        }
        function xf(l, t) {
          var e = (l.entangledLanes |= t);
          for (l = l.entanglements; e; ) {
            var a = 31 - Pl(e),
              u = 1 << a;
            ((u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u));
          }
        }
        function zf(l, t) {
          var e = t & -t;
          return (
            (e = (e & 42) !== 0 ? 1 : kn(e)),
            (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
          );
        }
        function kn(l) {
          switch (l) {
            case 2:
              l = 1;
              break;
            case 8:
              l = 4;
              break;
            case 32:
              l = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              l = 128;
              break;
            case 268435456:
              l = 134217728;
              break;
            default:
              l = 0;
          }
          return l;
        }
        function $n(l) {
          return (
            (l &= -l),
            2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
          );
        }
        function Tf() {
          var l = E.p;
          return l !== 0
            ? l
            : ((l = window.event), l === void 0 ? 32 : sd(l.type));
        }
        function Af(l, t) {
          var e = E.p;
          try {
            return ((E.p = l), t());
          } finally {
            E.p = e;
          }
        }
        var It = Math.random().toString(36).slice(2),
          Ml = "__reactFiber$" + It,
          Zl = "__reactProps$" + It,
          Ve = "__reactContainer$" + It,
          Fn = "__reactEvents$" + It,
          Xd = "__reactListeners$" + It,
          Zd = "__reactHandles$" + It,
          Ef = "__reactResources$" + It,
          Na = "__reactMarker$" + It;
        function In(l) {
          (delete l[Ml],
            delete l[Zl],
            delete l[Fn],
            delete l[Xd],
            delete l[Zd]);
        }
        function Le(l) {
          var t = l[Ml];
          if (t) return t;
          for (var e = l.parentNode; e; ) {
            if ((t = e[Ve] || e[Ml])) {
              if (
                ((e = t.alternate),
                t.child !== null || (e !== null && e.child !== null))
              )
                for (l = wr(l); l !== null; ) {
                  if ((e = l[Ml])) return e;
                  l = wr(l);
                }
              return t;
            }
            ((l = e), (e = l.parentNode));
          }
          return null;
        }
        function Ke(l) {
          if ((l = l[Ml] || l[Ve])) {
            var t = l.tag;
            if (
              t === 5 ||
              t === 6 ||
              t === 13 ||
              t === 31 ||
              t === 26 ||
              t === 27 ||
              t === 3
            )
              return l;
          }
          return null;
        }
        function Ua(l) {
          var t = l.tag;
          if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
          throw Error(m(33));
        }
        function Je(l) {
          var t = l[Ef];
          return (
            t ||
              (t = l[Ef] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function jl(l) {
          l[Na] = !0;
        }
        var jf = new Set(),
          _f = {};
        function Ee(l, t) {
          (we(l, t), we(l + "Capture", t));
        }
        function we(l, t) {
          for (_f[l] = t, l = 0; l < t.length; l++) jf.add(t[l]);
        }
        var Vd = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
          ),
          Mf = {},
          Of = {};
        function Ld(l) {
          return Kn.call(Of, l)
            ? !0
            : Kn.call(Mf, l)
              ? !1
              : Vd.test(l)
                ? (Of[l] = !0)
                : ((Mf[l] = !0), !1);
        }
        function Ou(l, t, e) {
          if (Ld(t))
            if (e === null) l.removeAttribute(t);
            else {
              switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                  l.removeAttribute(t);
                  return;
                case "boolean":
                  var a = t.toLowerCase().slice(0, 5);
                  if (a !== "data-" && a !== "aria-") {
                    l.removeAttribute(t);
                    return;
                  }
              }
              l.setAttribute(t, "" + e);
            }
        }
        function Du(l, t, e) {
          if (e === null) l.removeAttribute(t);
          else {
            switch (typeof e) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                l.removeAttribute(t);
                return;
            }
            l.setAttribute(t, "" + e);
          }
        }
        function Ut(l, t, e, a) {
          if (a === null) l.removeAttribute(e);
          else {
            switch (typeof a) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                l.removeAttribute(e);
                return;
            }
            l.setAttributeNS(t, e, "" + a);
          }
        }
        function st(l) {
          switch (typeof l) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return l;
            case "object":
              return l;
            default:
              return "";
          }
        }
        function Df(l) {
          var t = l.type;
          return (
            (l = l.nodeName) &&
            l.toLowerCase() === "input" &&
            (t === "checkbox" || t === "radio")
          );
        }
        function Kd(l, t, e) {
          var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
          if (
            !l.hasOwnProperty(t) &&
            typeof a < "u" &&
            typeof a.get == "function" &&
            typeof a.set == "function"
          ) {
            var u = a.get,
              n = a.set;
            return (
              Object.defineProperty(l, t, {
                configurable: !0,
                get: function () {
                  return u.call(this);
                },
                set: function (i) {
                  ((e = "" + i), n.call(this, i));
                },
              }),
              Object.defineProperty(l, t, { enumerable: a.enumerable }),
              {
                getValue: function () {
                  return e;
                },
                setValue: function (i) {
                  e = "" + i;
                },
                stopTracking: function () {
                  ((l._valueTracker = null), delete l[t]);
                },
              }
            );
          }
        }
        function Pn(l) {
          if (!l._valueTracker) {
            var t = Df(l) ? "checked" : "value";
            l._valueTracker = Kd(l, t, "" + l[t]);
          }
        }
        function Nf(l) {
          if (!l) return !1;
          var t = l._valueTracker;
          if (!t) return !0;
          var e = t.getValue(),
            a = "";
          return (
            l && (a = Df(l) ? (l.checked ? "true" : "false") : l.value),
            (l = a),
            l !== e ? (t.setValue(l), !0) : !1
          );
        }
        function Nu(l) {
          if (
            ((l = l || (typeof document < "u" ? document : void 0)),
            typeof l > "u")
          )
            return null;
          try {
            return l.activeElement || l.body;
          } catch {
            return l.body;
          }
        }
        var Jd = /[\n"\\]/g;
        function ot(l) {
          return l.replace(Jd, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " ";
          });
        }
        function li(l, t, e, a, u, n, i, c) {
          ((l.name = ""),
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol" &&
            typeof i != "boolean"
              ? (l.type = i)
              : l.removeAttribute("type"),
            t != null
              ? i === "number"
                ? ((t === 0 && l.value === "") || l.value != t) &&
                  (l.value = "" + st(t))
                : l.value !== "" + st(t) && (l.value = "" + st(t))
              : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
            t != null
              ? ti(l, i, st(t))
              : e != null
                ? ti(l, i, st(e))
                : a != null && l.removeAttribute("value"),
            u == null && n != null && (l.defaultChecked = !!n),
            u != null &&
              (l.checked = u && typeof u != "function" && typeof u != "symbol"),
            c != null &&
            typeof c != "function" &&
            typeof c != "symbol" &&
            typeof c != "boolean"
              ? (l.name = "" + st(c))
              : l.removeAttribute("name"));
        }
        function Uf(l, t, e, a, u, n, i, c) {
          if (
            (n != null &&
              typeof n != "function" &&
              typeof n != "symbol" &&
              typeof n != "boolean" &&
              (l.type = n),
            t != null || e != null)
          ) {
            if (!((n !== "submit" && n !== "reset") || t != null)) {
              Pn(l);
              return;
            }
            ((e = e != null ? "" + st(e) : ""),
              (t = t != null ? "" + st(t) : e),
              c || t === l.value || (l.value = t),
              (l.defaultValue = t));
          }
          ((a = a ?? u),
            (a = typeof a != "function" && typeof a != "symbol" && !!a),
            (l.checked = c ? l.checked : !!a),
            (l.defaultChecked = !!a),
            i != null &&
              typeof i != "function" &&
              typeof i != "symbol" &&
              typeof i != "boolean" &&
              (l.name = i),
            Pn(l));
        }
        function ti(l, t, e) {
          (t === "number" && Nu(l.ownerDocument) === l) ||
            l.defaultValue === "" + e ||
            (l.defaultValue = "" + e);
        }
        function We(l, t, e, a) {
          if (((l = l.options), t)) {
            t = {};
            for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
            for (e = 0; e < l.length; e++)
              ((u = t.hasOwnProperty("$" + l[e].value)),
                l[e].selected !== u && (l[e].selected = u),
                u && a && (l[e].defaultSelected = !0));
          } else {
            for (e = "" + st(e), t = null, u = 0; u < l.length; u++) {
              if (l[u].value === e) {
                ((l[u].selected = !0), a && (l[u].defaultSelected = !0));
                return;
              }
              t !== null || l[u].disabled || (t = l[u]);
            }
            t !== null && (t.selected = !0);
          }
        }
        function Cf(l, t, e) {
          if (
            t != null &&
            ((t = "" + st(t)), t !== l.value && (l.value = t), e == null)
          ) {
            l.defaultValue !== t && (l.defaultValue = t);
            return;
          }
          l.defaultValue = e != null ? "" + st(e) : "";
        }
        function Rf(l, t, e, a) {
          if (t == null) {
            if (a != null) {
              if (e != null) throw Error(m(92));
              if (St(a)) {
                if (1 < a.length) throw Error(m(93));
                a = a[0];
              }
              e = a;
            }
            (e == null && (e = ""), (t = e));
          }
          ((e = st(t)),
            (l.defaultValue = e),
            (a = l.textContent),
            a === e && a !== "" && a !== null && (l.value = a),
            Pn(l));
        }
        function ke(l, t) {
          if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
              e.nodeValue = t;
              return;
            }
          }
          l.textContent = t;
        }
        var wd = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " ",
          ),
        );
        function Hf(l, t, e) {
          var a = t.indexOf("--") === 0;
          e == null || typeof e == "boolean" || e === ""
            ? a
              ? l.setProperty(t, "")
              : t === "float"
                ? (l.cssFloat = "")
                : (l[t] = "")
            : a
              ? l.setProperty(t, e)
              : typeof e != "number" || e === 0 || wd.has(t)
                ? t === "float"
                  ? (l.cssFloat = e)
                  : (l[t] = ("" + e).trim())
                : (l[t] = e + "px");
        }
        function Bf(l, t, e) {
          if (t != null && typeof t != "object") throw Error(m(62));
          if (((l = l.style), e != null)) {
            for (var a in e)
              !e.hasOwnProperty(a) ||
                (t != null && t.hasOwnProperty(a)) ||
                (a.indexOf("--") === 0
                  ? l.setProperty(a, "")
                  : a === "float"
                    ? (l.cssFloat = "")
                    : (l[a] = ""));
            for (var u in t)
              ((a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Hf(l, u, a));
          } else for (var n in t) t.hasOwnProperty(n) && Hf(l, n, t[n]);
        }
        function ei(l) {
          if (l.indexOf("-") === -1) return !1;
          switch (l) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Wd = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          kd =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Uu(l) {
          return kd.test("" + l)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : l;
        }
        function Ct() {}
        var ai = null;
        function ui(l) {
          return (
            (l = l.target || l.srcElement || window),
            l.correspondingUseElement && (l = l.correspondingUseElement),
            l.nodeType === 3 ? l.parentNode : l
          );
        }
        var $e = null,
          Fe = null;
        function qf(l) {
          var t = Ke(l);
          if (t && (l = t.stateNode)) {
            var e = l[Zl] || null;
            l: switch (((l = t.stateNode), t.type)) {
              case "input":
                if (
                  (li(
                    l,
                    e.value,
                    e.defaultValue,
                    e.defaultValue,
                    e.checked,
                    e.defaultChecked,
                    e.type,
                    e.name,
                  ),
                  (t = e.name),
                  e.type === "radio" && t != null)
                ) {
                  for (e = l; e.parentNode; ) e = e.parentNode;
                  for (
                    e = e.querySelectorAll(
                      'input[name="' + ot("" + t) + '"][type="radio"]',
                    ),
                      t = 0;
                    t < e.length;
                    t++
                  ) {
                    var a = e[t];
                    if (a !== l && a.form === l.form) {
                      var u = a[Zl] || null;
                      if (!u) throw Error(m(90));
                      li(
                        a,
                        u.value,
                        u.defaultValue,
                        u.defaultValue,
                        u.checked,
                        u.defaultChecked,
                        u.type,
                        u.name,
                      );
                    }
                  }
                  for (t = 0; t < e.length; t++)
                    ((a = e[t]), a.form === l.form && Nf(a));
                }
                break l;
              case "textarea":
                Cf(l, e.value, e.defaultValue);
                break l;
              case "select":
                ((t = e.value), t != null && We(l, !!e.multiple, t, !1));
            }
          }
        }
        var ni = !1;
        function Yf(l, t, e) {
          if (ni) return l(t, e);
          ni = !0;
          try {
            var a = l(t);
            return a;
          } finally {
            if (
              ((ni = !1),
              ($e !== null || Fe !== null) &&
                (bn(), $e && ((t = $e), (l = Fe), (Fe = $e = null), qf(t), l)))
            )
              for (t = 0; t < l.length; t++) qf(l[t]);
          }
        }
        function Ca(l, t) {
          var e = l.stateNode;
          if (e === null) return null;
          var a = e[Zl] || null;
          if (a === null) return null;
          e = a[t];
          l: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              ((a = !a.disabled) ||
                ((l = l.type),
                (a = !(
                  l === "button" ||
                  l === "input" ||
                  l === "select" ||
                  l === "textarea"
                ))),
                (l = !a));
              break l;
            default:
              l = !1;
          }
          if (l) return null;
          if (e && typeof e != "function") throw Error(m(231, t, typeof e));
          return e;
        }
        var Rt = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
          ),
          ii = !1;
        if (Rt)
          try {
            var Ra = {};
            (Object.defineProperty(Ra, "passive", {
              get: function () {
                ii = !0;
              },
            }),
              window.addEventListener("test", Ra, Ra),
              window.removeEventListener("test", Ra, Ra));
          } catch {
            ii = !1;
          }
        var Pt = null,
          ci = null,
          Cu = null;
        function Gf() {
          if (Cu) return Cu;
          var l,
            t = ci,
            e = t.length,
            a,
            u = "value" in Pt ? Pt.value : Pt.textContent,
            n = u.length;
          for (l = 0; l < e && t[l] === u[l]; l++);
          var i = e - l;
          for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
          return (Cu = u.slice(l, 1 < a ? 1 - a : void 0));
        }
        function Ru(l) {
          var t = l.keyCode;
          return (
            "charCode" in l
              ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
              : (l = t),
            l === 10 && (l = 13),
            32 <= l || l === 13 ? l : 0
          );
        }
        function Hu() {
          return !0;
        }
        function Qf() {
          return !1;
        }
        function Vl(l) {
          function t(e, a, u, n, i) {
            ((this._reactName = e),
              (this._targetInst = u),
              (this.type = a),
              (this.nativeEvent = n),
              (this.target = i),
              (this.currentTarget = null));
            for (var c in l)
              l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(n) : n[c]));
            return (
              (this.isDefaultPrevented = (
                n.defaultPrevented != null
                  ? n.defaultPrevented
                  : n.returnValue === !1
              )
                ? Hu
                : Qf),
              (this.isPropagationStopped = Qf),
              this
            );
          }
          return (
            Y(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : typeof e.returnValue != "unknown" && (e.returnValue = !1),
                  (this.isDefaultPrevented = Hu));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : typeof e.cancelBubble != "unknown" &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Hu));
              },
              persist: function () {},
              isPersistent: Hu,
            }),
            t
          );
        }
        var je = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (l) {
              return l.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Bu = Vl(je),
          Ha = Y({}, je, { view: 0, detail: 0 }),
          $d = Vl(Ha),
          fi,
          si,
          Ba,
          qu = Y({}, Ha, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: ri,
            button: 0,
            buttons: 0,
            relatedTarget: function (l) {
              return l.relatedTarget === void 0
                ? l.fromElement === l.srcElement
                  ? l.toElement
                  : l.fromElement
                : l.relatedTarget;
            },
            movementX: function (l) {
              return "movementX" in l
                ? l.movementX
                : (l !== Ba &&
                    (Ba && l.type === "mousemove"
                      ? ((fi = l.screenX - Ba.screenX),
                        (si = l.screenY - Ba.screenY))
                      : (si = fi = 0),
                    (Ba = l)),
                  fi);
            },
            movementY: function (l) {
              return "movementY" in l ? l.movementY : si;
            },
          }),
          Xf = Vl(qu),
          Fd = Y({}, qu, { dataTransfer: 0 }),
          Id = Vl(Fd),
          Pd = Y({}, Ha, { relatedTarget: 0 }),
          oi = Vl(Pd),
          lm = Y({}, je, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0,
          }),
          tm = Vl(lm),
          em = Y({}, je, {
            clipboardData: function (l) {
              return "clipboardData" in l
                ? l.clipboardData
                : window.clipboardData;
            },
          }),
          am = Vl(em),
          um = Y({}, je, { data: 0 }),
          Zf = Vl(um),
          nm = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          im = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          cm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function fm(l) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(l)
            : (l = cm[l])
              ? !!t[l]
              : !1;
        }
        function ri() {
          return fm;
        }
        var sm = Y({}, Ha, {
            key: function (l) {
              if (l.key) {
                var t = nm[l.key] || l.key;
                if (t !== "Unidentified") return t;
              }
              return l.type === "keypress"
                ? ((l = Ru(l)), l === 13 ? "Enter" : String.fromCharCode(l))
                : l.type === "keydown" || l.type === "keyup"
                  ? im[l.keyCode] || "Unidentified"
                  : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ri,
            charCode: function (l) {
              return l.type === "keypress" ? Ru(l) : 0;
            },
            keyCode: function (l) {
              return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
            },
            which: function (l) {
              return l.type === "keypress"
                ? Ru(l)
                : l.type === "keydown" || l.type === "keyup"
                  ? l.keyCode
                  : 0;
            },
          }),
          om = Vl(sm),
          rm = Y({}, qu, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          }),
          Vf = Vl(rm),
          dm = Y({}, Ha, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ri,
          }),
          mm = Vl(dm),
          ym = Y({}, je, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          vm = Vl(ym),
          hm = Y({}, qu, {
            deltaX: function (l) {
              return "deltaX" in l
                ? l.deltaX
                : "wheelDeltaX" in l
                  ? -l.wheelDeltaX
                  : 0;
            },
            deltaY: function (l) {
              return "deltaY" in l
                ? l.deltaY
                : "wheelDeltaY" in l
                  ? -l.wheelDeltaY
                  : "wheelDelta" in l
                    ? -l.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          gm = Vl(hm),
          pm = Y({}, je, { newState: 0, oldState: 0 }),
          Sm = Vl(pm),
          bm = [9, 13, 27, 32],
          di = Rt && "CompositionEvent" in window,
          qa = null;
        Rt && "documentMode" in document && (qa = document.documentMode);
        var xm = Rt && "TextEvent" in window && !qa,
          Lf = Rt && (!di || (qa && 8 < qa && 11 >= qa)),
          Kf = " ",
          Jf = !1;
        function wf(l, t) {
          switch (l) {
            case "keyup":
              return bm.indexOf(t.keyCode) !== -1;
            case "keydown":
              return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wf(l) {
          return (
            (l = l.detail),
            typeof l == "object" && "data" in l ? l.data : null
          );
        }
        var Ie = !1;
        function zm(l, t) {
          switch (l) {
            case "compositionend":
              return Wf(t);
            case "keypress":
              return t.which !== 32 ? null : ((Jf = !0), Kf);
            case "textInput":
              return ((l = t.data), l === Kf && Jf ? null : l);
            default:
              return null;
          }
        }
        function Tm(l, t) {
          if (Ie)
            return l === "compositionend" || (!di && wf(l, t))
              ? ((l = Gf()), (Cu = ci = Pt = null), (Ie = !1), l)
              : null;
          switch (l) {
            case "paste":
              return null;
            case "keypress":
              if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
              ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
              }
              return null;
            case "compositionend":
              return Lf && t.locale !== "ko" ? null : t.data;
            default:
              return null;
          }
        }
        var Am = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function kf(l) {
          var t = l && l.nodeName && l.nodeName.toLowerCase();
          return t === "input" ? !!Am[l.type] : t === "textarea";
        }
        function $f(l, t, e, a) {
          ($e ? (Fe ? Fe.push(a) : (Fe = [a])) : ($e = a),
            (t = _n(t, "onChange")),
            0 < t.length &&
              ((e = new Bu("onChange", "change", null, e, a)),
              l.push({ event: e, listeners: t })));
        }
        var Ya = null,
          Ga = null;
        function Em(l) {
          Cr(l, 0);
        }
        function Yu(l) {
          var t = Ua(l);
          if (Nf(t)) return l;
        }
        function Ff(l, t) {
          if (l === "change") return t;
        }
        var If = !1;
        if (Rt) {
          var mi;
          if (Rt) {
            var yi = "oninput" in document;
            if (!yi) {
              var Pf = document.createElement("div");
              (Pf.setAttribute("oninput", "return;"),
                (yi = typeof Pf.oninput == "function"));
            }
            mi = yi;
          } else mi = !1;
          If = mi && (!document.documentMode || 9 < document.documentMode);
        }
        function ls() {
          Ya && (Ya.detachEvent("onpropertychange", ts), (Ga = Ya = null));
        }
        function ts(l) {
          if (l.propertyName === "value" && Yu(Ga)) {
            var t = [];
            ($f(t, Ga, l, ui(l)), Yf(Em, t));
          }
        }
        function jm(l, t, e) {
          l === "focusin"
            ? (ls(), (Ya = t), (Ga = e), Ya.attachEvent("onpropertychange", ts))
            : l === "focusout" && ls();
        }
        function _m(l) {
          if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return Yu(Ga);
        }
        function Mm(l, t) {
          if (l === "click") return Yu(t);
        }
        function Om(l, t) {
          if (l === "input" || l === "change") return Yu(t);
        }
        function Dm(l, t) {
          return (
            (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t)
          );
        }
        var lt = typeof Object.is == "function" ? Object.is : Dm;
        function Qa(l, t) {
          if (lt(l, t)) return !0;
          if (
            typeof l != "object" ||
            l === null ||
            typeof t != "object" ||
            t === null
          )
            return !1;
          var e = Object.keys(l),
            a = Object.keys(t);
          if (e.length !== a.length) return !1;
          for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!Kn.call(t, u) || !lt(l[u], t[u])) return !1;
          }
          return !0;
        }
        function es(l) {
          for (; l && l.firstChild; ) l = l.firstChild;
          return l;
        }
        function as(l, t) {
          var e = es(l);
          l = 0;
          for (var a; e; ) {
            if (e.nodeType === 3) {
              if (((a = l + e.textContent.length), l <= t && a >= t))
                return { node: e, offset: t - l };
              l = a;
            }
            l: {
              for (; e; ) {
                if (e.nextSibling) {
                  e = e.nextSibling;
                  break l;
                }
                e = e.parentNode;
              }
              e = void 0;
            }
            e = es(e);
          }
        }
        function us(l, t) {
          return l && t
            ? l === t
              ? !0
              : l && l.nodeType === 3
                ? !1
                : t && t.nodeType === 3
                  ? us(l, t.parentNode)
                  : "contains" in l
                    ? l.contains(t)
                    : l.compareDocumentPosition
                      ? !!(l.compareDocumentPosition(t) & 16)
                      : !1
            : !1;
        }
        function ns(l) {
          l =
            l != null &&
            l.ownerDocument != null &&
            l.ownerDocument.defaultView != null
              ? l.ownerDocument.defaultView
              : window;
          for (var t = Nu(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
              var e = typeof t.contentWindow.location.href == "string";
            } catch {
              e = !1;
            }
            if (e) l = t.contentWindow;
            else break;
            t = Nu(l.document);
          }
          return t;
        }
        function vi(l) {
          var t = l && l.nodeName && l.nodeName.toLowerCase();
          return (
            t &&
            ((t === "input" &&
              (l.type === "text" ||
                l.type === "search" ||
                l.type === "tel" ||
                l.type === "url" ||
                l.type === "password")) ||
              t === "textarea" ||
              l.contentEditable === "true")
          );
        }
        var Nm =
            Rt && "documentMode" in document && 11 >= document.documentMode,
          Pe = null,
          hi = null,
          Xa = null,
          gi = !1;
        function is(l, t, e) {
          var a =
            e.window === e
              ? e.document
              : e.nodeType === 9
                ? e
                : e.ownerDocument;
          gi ||
            Pe == null ||
            Pe !== Nu(a) ||
            ((a = Pe),
            "selectionStart" in a && vi(a)
              ? (a = { start: a.selectionStart, end: a.selectionEnd })
              : ((a = (
                  (a.ownerDocument && a.ownerDocument.defaultView) ||
                  window
                ).getSelection()),
                (a = {
                  anchorNode: a.anchorNode,
                  anchorOffset: a.anchorOffset,
                  focusNode: a.focusNode,
                  focusOffset: a.focusOffset,
                })),
            (Xa && Qa(Xa, a)) ||
              ((Xa = a),
              (a = _n(hi, "onSelect")),
              0 < a.length &&
                ((t = new Bu("onSelect", "select", null, t, e)),
                l.push({ event: t, listeners: a }),
                (t.target = Pe))));
        }
        function _e(l, t) {
          var e = {};
          return (
            (e[l.toLowerCase()] = t.toLowerCase()),
            (e["Webkit" + l] = "webkit" + t),
            (e["Moz" + l] = "moz" + t),
            e
          );
        }
        var la = {
            animationend: _e("Animation", "AnimationEnd"),
            animationiteration: _e("Animation", "AnimationIteration"),
            animationstart: _e("Animation", "AnimationStart"),
            transitionrun: _e("Transition", "TransitionRun"),
            transitionstart: _e("Transition", "TransitionStart"),
            transitioncancel: _e("Transition", "TransitionCancel"),
            transitionend: _e("Transition", "TransitionEnd"),
          },
          pi = {},
          cs = {};
        Rt &&
          ((cs = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete la.animationend.animation,
            delete la.animationiteration.animation,
            delete la.animationstart.animation),
          "TransitionEvent" in window || delete la.transitionend.transition);
        function Me(l) {
          if (pi[l]) return pi[l];
          if (!la[l]) return l;
          var t = la[l],
            e;
          for (e in t)
            if (t.hasOwnProperty(e) && e in cs) return (pi[l] = t[e]);
          return l;
        }
        var fs = Me("animationend"),
          ss = Me("animationiteration"),
          os = Me("animationstart"),
          Um = Me("transitionrun"),
          Cm = Me("transitionstart"),
          Rm = Me("transitioncancel"),
          rs = Me("transitionend"),
          ds = new Map(),
          Si =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        Si.push("scrollEnd");
        function bt(l, t) {
          (ds.set(l, t), Ee(t, [l]));
        }
        var Gu =
            typeof reportError == "function"
              ? reportError
              : function (l) {
                  if (
                    typeof window == "object" &&
                    typeof window.ErrorEvent == "function"
                  ) {
                    var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        typeof l == "object" &&
                        l !== null &&
                        typeof l.message == "string"
                          ? String(l.message)
                          : String(l),
                      error: l,
                    });
                    if (!window.dispatchEvent(t)) return;
                  } else if (
                    typeof process == "object" &&
                    typeof process.emit == "function"
                  ) {
                    process.emit("uncaughtException", l);
                    return;
                  }
                  console.error(l);
                },
          rt = [],
          ta = 0,
          bi = 0;
        function Qu() {
          for (var l = ta, t = (bi = ta = 0); t < l; ) {
            var e = rt[t];
            rt[t++] = null;
            var a = rt[t];
            rt[t++] = null;
            var u = rt[t];
            rt[t++] = null;
            var n = rt[t];
            if (((rt[t++] = null), a !== null && u !== null)) {
              var i = a.pending;
              (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
                (a.pending = u));
            }
            n !== 0 && ms(e, u, n);
          }
        }
        function Xu(l, t, e, a) {
          ((rt[ta++] = l),
            (rt[ta++] = t),
            (rt[ta++] = e),
            (rt[ta++] = a),
            (bi |= a),
            (l.lanes |= a),
            (l = l.alternate),
            l !== null && (l.lanes |= a));
        }
        function xi(l, t, e, a) {
          return (Xu(l, t, e, a), Zu(l));
        }
        function Oe(l, t) {
          return (Xu(l, null, null, t), Zu(l));
        }
        function ms(l, t, e) {
          l.lanes |= e;
          var a = l.alternate;
          a !== null && (a.lanes |= e);
          for (var u = !1, n = l.return; n !== null; )
            ((n.childLanes |= e),
              (a = n.alternate),
              a !== null && (a.childLanes |= e),
              n.tag === 22 &&
                ((l = n.stateNode),
                l === null || l._visibility & 1 || (u = !0)),
              (l = n),
              (n = n.return));
          return l.tag === 3
            ? ((n = l.stateNode),
              u &&
                t !== null &&
                ((u = 31 - Pl(e)),
                (l = n.hiddenUpdates),
                (a = l[u]),
                a === null ? (l[u] = [t]) : a.push(t),
                (t.lane = e | 536870912)),
              n)
            : null;
        }
        function Zu(l) {
          if (50 < su) throw ((su = 0), (Dc = null), Error(m(185)));
          for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
          return l.tag === 3 ? l.stateNode : null;
        }
        var ea = {};
        function Hm(l, t, e, a) {
          ((this.tag = l),
            (this.key = e),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function tt(l, t, e, a) {
          return new Hm(l, t, e, a);
        }
        function zi(l) {
          return ((l = l.prototype), !(!l || !l.isReactComponent));
        }
        function Ht(l, t) {
          var e = l.alternate;
          return (
            e === null
              ? ((e = tt(l.tag, t, l.key, l.mode)),
                (e.elementType = l.elementType),
                (e.type = l.type),
                (e.stateNode = l.stateNode),
                (e.alternate = l),
                (l.alternate = e))
              : ((e.pendingProps = t),
                (e.type = l.type),
                (e.flags = 0),
                (e.subtreeFlags = 0),
                (e.deletions = null)),
            (e.flags = l.flags & 65011712),
            (e.childLanes = l.childLanes),
            (e.lanes = l.lanes),
            (e.child = l.child),
            (e.memoizedProps = l.memoizedProps),
            (e.memoizedState = l.memoizedState),
            (e.updateQueue = l.updateQueue),
            (t = l.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (e.sibling = l.sibling),
            (e.index = l.index),
            (e.ref = l.ref),
            (e.refCleanup = l.refCleanup),
            e
          );
        }
        function ys(l, t) {
          l.flags &= 65011714;
          var e = l.alternate;
          return (
            e === null
              ? ((l.childLanes = 0),
                (l.lanes = t),
                (l.child = null),
                (l.subtreeFlags = 0),
                (l.memoizedProps = null),
                (l.memoizedState = null),
                (l.updateQueue = null),
                (l.dependencies = null),
                (l.stateNode = null))
              : ((l.childLanes = e.childLanes),
                (l.lanes = e.lanes),
                (l.child = e.child),
                (l.subtreeFlags = 0),
                (l.deletions = null),
                (l.memoizedProps = e.memoizedProps),
                (l.memoizedState = e.memoizedState),
                (l.updateQueue = e.updateQueue),
                (l.type = e.type),
                (t = e.dependencies),
                (l.dependencies =
                  t === null
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            l
          );
        }
        function Vu(l, t, e, a, u, n) {
          var i = 0;
          if (((a = l), typeof l == "function")) zi(l) && (i = 1);
          else if (typeof l == "string")
            i = Qy(l, e, D.current)
              ? 26
              : l === "html" || l === "head" || l === "body"
                ? 27
                : 5;
          else
            l: switch (l) {
              case At:
                return (
                  (l = tt(31, e, t, u)),
                  (l.elementType = At),
                  (l.lanes = n),
                  l
                );
              case Hl:
                return De(e.children, u, n, t);
              case Dt:
                ((i = 8), (u |= 24));
                break;
              case $l:
                return (
                  (l = tt(12, e, t, u | 2)),
                  (l.elementType = $l),
                  (l.lanes = n),
                  l
                );
              case Tt:
                return (
                  (l = tt(13, e, t, u)),
                  (l.elementType = Tt),
                  (l.lanes = n),
                  l
                );
              case Gl:
                return (
                  (l = tt(19, e, t, u)),
                  (l.elementType = Gl),
                  (l.lanes = n),
                  l
                );
              default:
                if (typeof l == "object" && l !== null)
                  switch (l.$typeof) {
                    case Cl:
                      i = 10;
                      break l;
                    case $t:
                      i = 9;
                      break l;
                    case ft:
                      i = 11;
                      break l;
                    case $:
                      i = 14;
                      break l;
                    case Ql:
                      ((i = 16), (a = null));
                      break l;
                  }
                ((i = 29),
                  (e = Error(m(130, l === null ? "null" : typeof l, ""))),
                  (a = null));
            }
          return (
            (t = tt(i, e, t, u)),
            (t.elementType = l),
            (t.type = a),
            (t.lanes = n),
            t
          );
        }
        function De(l, t, e, a) {
          return ((l = tt(7, l, a, t)), (l.lanes = e), l);
        }
        function Ti(l, t, e) {
          return ((l = tt(6, l, null, t)), (l.lanes = e), l);
        }
        function vs(l) {
          var t = tt(18, null, null, 0);
          return ((t.stateNode = l), t);
        }
        function Ai(l, t, e) {
          return (
            (t = tt(4, l.children !== null ? l.children : [], l.key, t)),
            (t.lanes = e),
            (t.stateNode = {
              containerInfo: l.containerInfo,
              pendingChildren: null,
              implementation: l.implementation,
            }),
            t
          );
        }
        var hs = new WeakMap();
        function dt(l, t) {
          if (typeof l == "object" && l !== null) {
            var e = hs.get(l);
            return e !== void 0
              ? e
              : ((t = { value: l, source: t, stack: vf(t) }), hs.set(l, t), t);
          }
          return { value: l, source: t, stack: vf(t) };
        }
        var aa = [],
          ua = 0,
          Lu = null,
          Za = 0,
          mt = [],
          yt = 0,
          le = null,
          jt = 1,
          _t = "";
        function Bt(l, t) {
          ((aa[ua++] = Za), (aa[ua++] = Lu), (Lu = l), (Za = t));
        }
        function gs(l, t, e) {
          ((mt[yt++] = jt), (mt[yt++] = _t), (mt[yt++] = le), (le = l));
          var a = jt;
          l = _t;
          var u = 32 - Pl(a) - 1;
          ((a &= ~(1 << u)), (e += 1));
          var n = 32 - Pl(t) + u;
          if (30 < n) {
            var i = u - (u % 5);
            ((n = (a & ((1 << i) - 1)).toString(32)),
              (a >>= i),
              (u -= i),
              (jt = (1 << (32 - Pl(t) + u)) | (e << u) | a),
              (_t = n + l));
          } else ((jt = (1 << n) | (e << u) | a), (_t = l));
        }
        function Ei(l) {
          l.return !== null && (Bt(l, 1), gs(l, 1, 0));
        }
        function ji(l) {
          for (; l === Lu; )
            ((Lu = aa[--ua]),
              (aa[ua] = null),
              (Za = aa[--ua]),
              (aa[ua] = null));
          for (; l === le; )
            ((le = mt[--yt]),
              (mt[yt] = null),
              (_t = mt[--yt]),
              (mt[yt] = null),
              (jt = mt[--yt]),
              (mt[yt] = null));
        }
        function ps(l, t) {
          ((mt[yt++] = jt),
            (mt[yt++] = _t),
            (mt[yt++] = le),
            (jt = t.id),
            (_t = t.overflow),
            (le = l));
        }
        var Ol = null,
          rl = null,
          F = !1,
          te = null,
          vt = !1,
          _i = Error(m(519));
        function ee(l) {
          var t = Error(
            m(
              418,
              1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                ? "text"
                : "HTML",
              "",
            ),
          );
          throw (Va(dt(t, l)), _i);
        }
        function Ss(l) {
          var t = l.stateNode,
            e = l.type,
            a = l.memoizedProps;
          switch (((t[Ml] = l), (t[Zl] = a), e)) {
            case "dialog":
              (w("cancel", t), w("close", t));
              break;
            case "iframe":
            case "object":
            case "embed":
              w("load", t);
              break;
            case "video":
            case "audio":
              for (e = 0; e < ru.length; e++) w(ru[e], t);
              break;
            case "source":
              w("error", t);
              break;
            case "img":
            case "image":
            case "link":
              (w("error", t), w("load", t));
              break;
            case "details":
              w("toggle", t);
              break;
            case "input":
              (w("invalid", t),
                Uf(
                  t,
                  a.value,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name,
                  !0,
                ));
              break;
            case "select":
              w("invalid", t);
              break;
            case "textarea":
              (w("invalid", t), Rf(t, a.value, a.defaultValue, a.children));
          }
          ((e = a.children),
            (typeof e != "string" &&
              typeof e != "number" &&
              typeof e != "bigint") ||
            t.textContent === "" + e ||
            a.suppressHydrationWarning === !0 ||
            qr(t.textContent, e)
              ? (a.popover != null && (w("beforetoggle", t), w("toggle", t)),
                a.onScroll != null && w("scroll", t),
                a.onScrollEnd != null && w("scrollend", t),
                a.onClick != null && (t.onclick = Ct),
                (t = !0))
              : (t = !1),
            t || ee(l, !0));
        }
        function bs(l) {
          for (Ol = l.return; Ol; )
            switch (Ol.tag) {
              case 5:
              case 31:
              case 13:
                vt = !1;
                return;
              case 27:
              case 3:
                vt = !0;
                return;
              default:
                Ol = Ol.return;
            }
        }
        function na(l) {
          if (l !== Ol) return !1;
          if (!F) return (bs(l), (F = !0), !1);
          var t = l.tag,
            e;
          if (
            ((e = t !== 3 && t !== 27) &&
              ((e = t === 5) &&
                ((e = l.type),
                (e =
                  !(e !== "form" && e !== "button") ||
                  Kc(l.type, l.memoizedProps))),
              (e = !e)),
            e && rl && ee(l),
            bs(l),
            t === 13)
          ) {
            if (
              ((l = l.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(m(317));
            rl = Jr(l);
          } else if (t === 31) {
            if (
              ((l = l.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(m(317));
            rl = Jr(l);
          } else
            t === 27
              ? ((t = rl),
                he(l.type) ? ((l = $c), ($c = null), (rl = l)) : (rl = t))
              : (rl = Ol ? gt(l.stateNode.nextSibling) : null);
          return !0;
        }
        function Ne() {
          ((rl = Ol = null), (F = !1));
        }
        function Mi() {
          var l = te;
          return (
            l !== null &&
              (wl === null ? (wl = l) : wl.push.apply(wl, l), (te = null)),
            l
          );
        }
        function Va(l) {
          te === null ? (te = [l]) : te.push(l);
        }
        var Oi = r(null),
          Ue = null,
          qt = null;
        function ae(l, t, e) {
          (_(Oi, t._currentValue), (t._currentValue = e));
        }
        function Yt(l) {
          ((l._currentValue = Oi.current), z(Oi));
        }
        function Di(l, t, e) {
          for (; l !== null; ) {
            var a = l.alternate;
            if (
              ((l.childLanes & t) !== t
                ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
                : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
              l === e)
            )
              break;
            l = l.return;
          }
        }
        function Ni(l, t, e, a) {
          var u = l.child;
          for (u !== null && (u.return = l); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
              var i = u.child;
              n = n.firstContext;
              l: for (; n !== null; ) {
                var c = n;
                n = u;
                for (var f = 0; f < t.length; f++)
                  if (c.context === t[f]) {
                    ((n.lanes |= e),
                      (c = n.alternate),
                      c !== null && (c.lanes |= e),
                      Di(n.return, e, l),
                      a || (i = null));
                    break l;
                  }
                n = c.next;
              }
            } else if (u.tag === 18) {
              if (((i = u.return), i === null)) throw Error(m(341));
              ((i.lanes |= e),
                (n = i.alternate),
                n !== null && (n.lanes |= e),
                Di(i, e, l),
                (i = null));
            } else i = u.child;
            if (i !== null) i.return = u;
            else
              for (i = u; i !== null; ) {
                if (i === l) {
                  i = null;
                  break;
                }
                if (((u = i.sibling), u !== null)) {
                  ((u.return = i.return), (i = u));
                  break;
                }
                i = i.return;
              }
            u = i;
          }
        }
        function ia(l, t, e, a) {
          l = null;
          for (var u = t, n = !1; u !== null; ) {
            if (!n) {
              if ((u.flags & 524288) !== 0) n = !0;
              else if ((u.flags & 262144) !== 0) break;
            }
            if (u.tag === 10) {
              var i = u.alternate;
              if (i === null) throw Error(m(387));
              if (((i = i.memoizedProps), i !== null)) {
                var c = u.type;
                lt(u.pendingProps.value, i.value) ||
                  (l !== null ? l.push(c) : (l = [c]));
              }
            } else if (u === el.current) {
              if (((i = u.alternate), i === null)) throw Error(m(387));
              i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
                (l !== null ? l.push(hu) : (l = [hu]));
            }
            u = u.return;
          }
          (l !== null && Ni(t, l, e, a), (t.flags |= 262144));
        }
        function Ku(l) {
          for (l = l.firstContext; l !== null; ) {
            if (!lt(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next;
          }
          return !1;
        }
        function Ce(l) {
          ((Ue = l),
            (qt = null),
            (l = l.dependencies),
            l !== null && (l.firstContext = null));
        }
        function Dl(l) {
          return xs(Ue, l);
        }
        function Ju(l, t) {
          return (Ue === null && Ce(l), xs(l, t));
        }
        function xs(l, t) {
          var e = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: e, next: null }), qt === null)
          ) {
            if (l === null) throw Error(m(308));
            ((qt = t),
              (l.dependencies = { lanes: 0, firstContext: t }),
              (l.flags |= 524288));
          } else qt = qt.next = t;
          return e;
        }
        var Bm =
            typeof AbortController < "u"
              ? AbortController
              : function () {
                  var l = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (e, a) {
                        l.push(a);
                      },
                    });
                  this.abort = function () {
                    ((t.aborted = !0),
                      l.forEach(function (e) {
                        return e();
                      }));
                  };
                },
          qm = A.unstable_scheduleCallback,
          Ym = A.unstable_NormalPriority,
          xl = {
            $typeof: Cl,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Ui() {
          return { controller: new Bm(), data: new Map(), refCount: 0 };
        }
        function La(l) {
          (l.refCount--,
            l.refCount === 0 &&
              qm(Ym, function () {
                l.controller.abort();
              }));
        }
        var Ka = null,
          Ci = 0,
          ca = 0,
          fa = null;
        function Gm(l, t) {
          if (Ka === null) {
            var e = (Ka = []);
            ((Ci = 0),
              (ca = Bc()),
              (fa = {
                status: "pending",
                value: void 0,
                then: function (a) {
                  e.push(a);
                },
              }));
          }
          return (Ci++, t.then(zs, zs), t);
        }
        function zs() {
          if (--Ci === 0 && Ka !== null) {
            fa !== null && (fa.status = "fulfilled");
            var l = Ka;
            ((Ka = null), (ca = 0), (fa = null));
            for (var t = 0; t < l.length; t++) (0, l[t])();
          }
        }
        function Qm(l, t) {
          var e = [],
            a = {
              status: "pending",
              value: null,
              reason: null,
              then: function (u) {
                e.push(u);
              },
            };
          return (
            l.then(
              function () {
                ((a.status = "fulfilled"), (a.value = t));
                for (var u = 0; u < e.length; u++) (0, e[u])(t);
              },
              function (u) {
                for (
                  a.status = "rejected", a.reason = u, u = 0;
                  u < e.length;
                  u++
                )
                  (0, e[u])(void 0);
              },
            ),
            a
          );
        }
        var Ts = S.S;
        S.S = function (l, t) {
          ((cr = Fl()),
            typeof t == "object" &&
              t !== null &&
              typeof t.then == "function" &&
              Gm(l, t),
            Ts !== null && Ts(l, t));
        };
        var Re = r(null);
        function Ri() {
          var l = Re.current;
          return l !== null ? l : ol.pooledCache;
        }
        function wu(l, t) {
          t === null ? _(Re, Re.current) : _(Re, t.pool);
        }
        function As() {
          var l = Ri();
          return l === null ? null : { parent: xl._currentValue, pool: l };
        }
        var sa = Error(m(460)),
          Hi = Error(m(474)),
          Wu = Error(m(542)),
          ku = { then: function () {} };
        function Es(l) {
          return ((l = l.status), l === "fulfilled" || l === "rejected");
        }
        function js(l, t, e) {
          switch (
            ((e = l[e]),
            e === void 0 ? l.push(t) : e !== t && (t.then(Ct, Ct), (t = e)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw ((l = t.reason), Ms(l), l);
            default:
              if (typeof t.status == "string") t.then(Ct, Ct);
              else {
                if (((l = ol), l !== null && 100 < l.shellSuspendCounter))
                  throw Error(m(482));
                ((l = t),
                  (l.status = "pending"),
                  l.then(
                    function (a) {
                      if (t.status === "pending") {
                        var u = t;
                        ((u.status = "fulfilled"), (u.value = a));
                      }
                    },
                    function (a) {
                      if (t.status === "pending") {
                        var u = t;
                        ((u.status = "rejected"), (u.reason = a));
                      }
                    },
                  ));
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  throw ((l = t.reason), Ms(l), l);
              }
              throw ((Be = t), sa);
          }
        }
        function He(l) {
          try {
            var t = l._init;
            return t(l._payload);
          } catch (e) {
            throw e !== null &&
              typeof e == "object" &&
              typeof e.then == "function"
              ? ((Be = e), sa)
              : e;
          }
        }
        var Be = null;
        function _s() {
          if (Be === null) throw Error(m(459));
          var l = Be;
          return ((Be = null), l);
        }
        function Ms(l) {
          if (l === sa || l === Wu) throw Error(m(483));
        }
        var oa = null,
          Ja = 0;
        function $u(l) {
          var t = Ja;
          return ((Ja += 1), oa === null && (oa = []), js(oa, l, t));
        }
        function wa(l, t) {
          ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
        }
        function Fu(l, t) {
          throw t.$typeof === ml
            ? Error(m(525))
            : ((l = Object.prototype.toString.call(t)),
              Error(
                m(
                  31,
                  l === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : l,
                ),
              ));
        }
        function Os(l) {
          function t(d, s) {
            if (l) {
              var y = d.deletions;
              y === null ? ((d.deletions = [s]), (d.flags |= 16)) : y.push(s);
            }
          }
          function e(d, s) {
            if (!l) return null;
            for (; s !== null; ) (t(d, s), (s = s.sibling));
            return null;
          }
          function a(d) {
            for (var s = new Map(); d !== null; )
              (d.key !== null ? s.set(d.key, d) : s.set(d.index, d),
                (d = d.sibling));
            return s;
          }
          function u(d, s) {
            return ((d = Ht(d, s)), (d.index = 0), (d.sibling = null), d);
          }
          function n(d, s, y) {
            return (
              (d.index = y),
              l
                ? ((y = d.alternate),
                  y !== null
                    ? ((y = y.index), y < s ? ((d.flags |= 67108866), s) : y)
                    : ((d.flags |= 67108866), s))
                : ((d.flags |= 1048576), s)
            );
          }
          function i(d) {
            return (l && d.alternate === null && (d.flags |= 67108866), d);
          }
          function c(d, s, y, b) {
            return s === null || s.tag !== 6
              ? ((s = Ti(y, d.mode, b)), (s.return = d), s)
              : ((s = u(s, y)), (s.return = d), s);
          }
          function f(d, s, y, b) {
            var R = y.type;
            return R === Hl
              ? p(d, s, y.props.children, b, y.key)
              : s !== null &&
                  (s.elementType === R ||
                    (typeof R == "object" &&
                      R !== null &&
                      R.$typeof === Ql &&
                      He(R) === s.type))
                ? ((s = u(s, y.props)), wa(s, y), (s.return = d), s)
                : ((s = Vu(y.type, y.key, y.props, null, d.mode, b)),
                  wa(s, y),
                  (s.return = d),
                  s);
          }
          function v(d, s, y, b) {
            return s === null ||
              s.tag !== 4 ||
              s.stateNode.containerInfo !== y.containerInfo ||
              s.stateNode.implementation !== y.implementation
              ? ((s = Ai(y, d.mode, b)), (s.return = d), s)
              : ((s = u(s, y.children || [])), (s.return = d), s);
          }
          function p(d, s, y, b, R) {
            return s === null || s.tag !== 7
              ? ((s = De(y, d.mode, b, R)), (s.return = d), s)
              : ((s = u(s, y)), (s.return = d), s);
          }
          function x(d, s, y) {
            if (
              (typeof s == "string" && s !== "") ||
              typeof s == "number" ||
              typeof s == "bigint"
            )
              return ((s = Ti("" + s, d.mode, y)), (s.return = d), s);
            if (typeof s == "object" && s !== null) {
              switch (s.$typeof) {
                case kl:
                  return (
                    (y = Vu(s.type, s.key, s.props, null, d.mode, y)),
                    wa(y, s),
                    (y.return = d),
                    y
                  );
                case Yl:
                  return ((s = Ai(s, d.mode, y)), (s.return = d), s);
                case Ql:
                  return ((s = He(s)), x(d, s, y));
              }
              if (St(s) || Xl(s))
                return ((s = De(s, d.mode, y, null)), (s.return = d), s);
              if (typeof s.then == "function") return x(d, $u(s), y);
              if (s.$typeof === Cl) return x(d, Ju(d, s), y);
              Fu(d, s);
            }
            return null;
          }
          function h(d, s, y, b) {
            var R = s !== null ? s.key : null;
            if (
              (typeof y == "string" && y !== "") ||
              typeof y == "number" ||
              typeof y == "bigint"
            )
              return R !== null ? null : c(d, s, "" + y, b);
            if (typeof y == "object" && y !== null) {
              switch (y.$typeof) {
                case kl:
                  return y.key === R ? f(d, s, y, b) : null;
                case Yl:
                  return y.key === R ? v(d, s, y, b) : null;
                case Ql:
                  return ((y = He(y)), h(d, s, y, b));
              }
              if (St(y) || Xl(y))
                return R !== null ? null : p(d, s, y, b, null);
              if (typeof y.then == "function") return h(d, s, $u(y), b);
              if (y.$typeof === Cl) return h(d, s, Ju(d, y), b);
              Fu(d, y);
            }
            return null;
          }
          function g(d, s, y, b, R) {
            if (
              (typeof b == "string" && b !== "") ||
              typeof b == "number" ||
              typeof b == "bigint"
            )
              return ((d = d.get(y) || null), c(s, d, "" + b, R));
            if (typeof b == "object" && b !== null) {
              switch (b.$typeof) {
                case kl:
                  return (
                    (d = d.get(b.key === null ? y : b.key) || null),
                    f(s, d, b, R)
                  );
                case Yl:
                  return (
                    (d = d.get(b.key === null ? y : b.key) || null),
                    v(s, d, b, R)
                  );
                case Ql:
                  return ((b = He(b)), g(d, s, y, b, R));
              }
              if (St(b) || Xl(b))
                return ((d = d.get(y) || null), p(s, d, b, R, null));
              if (typeof b.then == "function") return g(d, s, y, $u(b), R);
              if (b.$typeof === Cl) return g(d, s, y, Ju(s, b), R);
              Fu(s, b);
            }
            return null;
          }
          function M(d, s, y, b) {
            for (
              var R = null, I = null, N = s, L = (s = 0), k = null;
              N !== null && L < y.length;
              L++
            ) {
              N.index > L ? ((k = N), (N = null)) : (k = N.sibling);
              var P = h(d, N, y[L], b);
              if (P === null) {
                N === null && (N = k);
                break;
              }
              (l && N && P.alternate === null && t(d, N),
                (s = n(P, s, L)),
                I === null ? (R = P) : (I.sibling = P),
                (I = P),
                (N = k));
            }
            if (L === y.length) return (e(d, N), F && Bt(d, L), R);
            if (N === null) {
              for (; L < y.length; L++)
                ((N = x(d, y[L], b)),
                  N !== null &&
                    ((s = n(N, s, L)),
                    I === null ? (R = N) : (I.sibling = N),
                    (I = N)));
              return (F && Bt(d, L), R);
            }
            for (N = a(N); L < y.length; L++)
              ((k = g(N, d, L, y[L], b)),
                k !== null &&
                  (l &&
                    k.alternate !== null &&
                    N.delete(k.key === null ? L : k.key),
                  (s = n(k, s, L)),
                  I === null ? (R = k) : (I.sibling = k),
                  (I = k)));
            return (
              l &&
                N.forEach(function (xe) {
                  return t(d, xe);
                }),
              F && Bt(d, L),
              R
            );
          }
          function q(d, s, y, b) {
            if (y == null) throw Error(m(151));
            for (
              var R = null,
                I = null,
                N = s,
                L = (s = 0),
                k = null,
                P = y.next();
              N !== null && !P.done;
              L++, P = y.next()
            ) {
              N.index > L ? ((k = N), (N = null)) : (k = N.sibling);
              var xe = h(d, N, P.value, b);
              if (xe === null) {
                N === null && (N = k);
                break;
              }
              (l && N && xe.alternate === null && t(d, N),
                (s = n(xe, s, L)),
                I === null ? (R = xe) : (I.sibling = xe),
                (I = xe),
                (N = k));
            }
            if (P.done) return (e(d, N), F && Bt(d, L), R);
            if (N === null) {
              for (; !P.done; L++, P = y.next())
                ((P = x(d, P.value, b)),
                  P !== null &&
                    ((s = n(P, s, L)),
                    I === null ? (R = P) : (I.sibling = P),
                    (I = P)));
              return (F && Bt(d, L), R);
            }
            for (N = a(N); !P.done; L++, P = y.next())
              ((P = g(N, d, L, P.value, b)),
                P !== null &&
                  (l &&
                    P.alternate !== null &&
                    N.delete(P.key === null ? L : P.key),
                  (s = n(P, s, L)),
                  I === null ? (R = P) : (I.sibling = P),
                  (I = P)));
            return (
              l &&
                N.forEach(function (Fy) {
                  return t(d, Fy);
                }),
              F && Bt(d, L),
              R
            );
          }
          function fl(d, s, y, b) {
            if (
              (typeof y == "object" &&
                y !== null &&
                y.type === Hl &&
                y.key === null &&
                (y = y.props.children),
              typeof y == "object" && y !== null)
            ) {
              switch (y.$typeof) {
                case kl:
                  l: {
                    for (var R = y.key; s !== null; ) {
                      if (s.key === R) {
                        if (((R = y.type), R === Hl)) {
                          if (s.tag === 7) {
                            (e(d, s.sibling),
                              (b = u(s, y.props.children)),
                              (b.return = d),
                              (d = b));
                            break l;
                          }
                        } else if (
                          s.elementType === R ||
                          (typeof R == "object" &&
                            R !== null &&
                            R.$typeof === Ql &&
                            He(R) === s.type)
                        ) {
                          (e(d, s.sibling),
                            (b = u(s, y.props)),
                            wa(b, y),
                            (b.return = d),
                            (d = b));
                          break l;
                        }
                        e(d, s);
                        break;
                      } else t(d, s);
                      s = s.sibling;
                    }
                    y.type === Hl
                      ? ((b = De(y.props.children, d.mode, b, y.key)),
                        (b.return = d),
                        (d = b))
                      : ((b = Vu(y.type, y.key, y.props, null, d.mode, b)),
                        wa(b, y),
                        (b.return = d),
                        (d = b));
                  }
                  return i(d);
                case Yl:
                  l: {
                    for (R = y.key; s !== null; ) {
                      if (s.key === R)
                        if (
                          s.tag === 4 &&
                          s.stateNode.containerInfo === y.containerInfo &&
                          s.stateNode.implementation === y.implementation
                        ) {
                          (e(d, s.sibling),
                            (b = u(s, y.children || [])),
                            (b.return = d),
                            (d = b));
                          break l;
                        } else {
                          e(d, s);
                          break;
                        }
                      else t(d, s);
                      s = s.sibling;
                    }
                    ((b = Ai(y, d.mode, b)), (b.return = d), (d = b));
                  }
                  return i(d);
                case Ql:
                  return ((y = He(y)), fl(d, s, y, b));
              }
              if (St(y)) return M(d, s, y, b);
              if (Xl(y)) {
                if (((R = Xl(y)), typeof R != "function")) throw Error(m(150));
                return ((y = R.call(y)), q(d, s, y, b));
              }
              if (typeof y.then == "function") return fl(d, s, $u(y), b);
              if (y.$typeof === Cl) return fl(d, s, Ju(d, y), b);
              Fu(d, y);
            }
            return (typeof y == "string" && y !== "") ||
              typeof y == "number" ||
              typeof y == "bigint"
              ? ((y = "" + y),
                s !== null && s.tag === 6
                  ? (e(d, s.sibling), (b = u(s, y)), (b.return = d), (d = b))
                  : (e(d, s), (b = Ti(y, d.mode, b)), (b.return = d), (d = b)),
                i(d))
              : e(d, s);
          }
          return function (d, s, y, b) {
            try {
              Ja = 0;
              var R = fl(d, s, y, b);
              return ((oa = null), R);
            } catch (N) {
              if (N === sa || N === Wu) throw N;
              var I = tt(29, N, null, d.mode);
              return ((I.lanes = b), (I.return = d), I);
            } finally {
            }
          };
        }
        var qe = Os(!0),
          Ds = Os(!1),
          ue = !1;
        function Bi(l) {
          l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function qi(l, t) {
          ((l = l.updateQueue),
            t.updateQueue === l &&
              (t.updateQueue = {
                baseState: l.baseState,
                firstBaseUpdate: l.firstBaseUpdate,
                lastBaseUpdate: l.lastBaseUpdate,
                shared: l.shared,
                callbacks: null,
              }));
        }
        function ne(l) {
          return { lane: l, tag: 0, payload: null, callback: null, next: null };
        }
        function ie(l, t, e) {
          var a = l.updateQueue;
          if (a === null) return null;
          if (((a = a.shared), (ll & 2) !== 0)) {
            var u = a.pending;
            return (
              u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
              (a.pending = t),
              (t = Zu(l)),
              ms(l, null, e),
              t
            );
          }
          return (Xu(l, a, t, e), Zu(l));
        }
        function Wa(l, t, e) {
          if (
            ((t = t.updateQueue),
            t !== null && ((t = t.shared), (e & 4194048) !== 0))
          ) {
            var a = t.lanes;
            ((a &= l.pendingLanes), (e |= a), (t.lanes = e), xf(l, e));
          }
        }
        function Yi(l, t) {
          var e = l.updateQueue,
            a = l.alternate;
          if (a !== null && ((a = a.updateQueue), e === a)) {
            var u = null,
              n = null;
            if (((e = e.firstBaseUpdate), e !== null)) {
              do {
                var i = {
                  lane: e.lane,
                  tag: e.tag,
                  payload: e.payload,
                  callback: null,
                  next: null,
                };
                (n === null ? (u = n = i) : (n = n.next = i), (e = e.next));
              } while (e !== null);
              n === null ? (u = n = t) : (n = n.next = t);
            } else u = n = t;
            ((e = {
              baseState: a.baseState,
              firstBaseUpdate: u,
              lastBaseUpdate: n,
              shared: a.shared,
              callbacks: a.callbacks,
            }),
              (l.updateQueue = e));
            return;
          }
          ((l = e.lastBaseUpdate),
            l === null ? (e.firstBaseUpdate = t) : (l.next = t),
            (e.lastBaseUpdate = t));
        }
        var Gi = !1;
        function ka() {
          if (Gi) {
            var l = fa;
            if (l !== null) throw l;
          }
        }
        function $a(l, t, e, a) {
          Gi = !1;
          var u = l.updateQueue;
          ue = !1;
          var n = u.firstBaseUpdate,
            i = u.lastBaseUpdate,
            c = u.shared.pending;
          if (c !== null) {
            u.shared.pending = null;
            var f = c,
              v = f.next;
            ((f.next = null), i === null ? (n = v) : (i.next = v), (i = f));
            var p = l.alternate;
            p !== null &&
              ((p = p.updateQueue),
              (c = p.lastBaseUpdate),
              c !== i &&
                (c === null ? (p.firstBaseUpdate = v) : (c.next = v),
                (p.lastBaseUpdate = f)));
          }
          if (n !== null) {
            var x = u.baseState;
            ((i = 0), (p = v = f = null), (c = n));
            do {
              var h = c.lane & -536870913,
                g = h !== c.lane;
              if (g ? (W & h) === h : (a & h) === h) {
                (h !== 0 && h === ca && (Gi = !0),
                  p !== null &&
                    (p = p.next =
                      {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null,
                      }));
                l: {
                  var M = l,
                    q = c;
                  h = t;
                  var fl = e;
                  switch (q.tag) {
                    case 1:
                      if (((M = q.payload), typeof M == "function")) {
                        x = M.call(fl, x, h);
                        break l;
                      }
                      x = M;
                      break l;
                    case 3:
                      M.flags = (M.flags & -65537) | 128;
                    case 0:
                      if (
                        ((M = q.payload),
                        (h = typeof M == "function" ? M.call(fl, x, h) : M),
                        h == null)
                      )
                        break l;
                      x = Y({}, x, h);
                      break l;
                    case 2:
                      ue = !0;
                  }
                }
                ((h = c.callback),
                  h !== null &&
                    ((l.flags |= 64),
                    g && (l.flags |= 8192),
                    (g = u.callbacks),
                    g === null ? (u.callbacks = [h]) : g.push(h)));
              } else
                ((g = {
                  lane: h,
                  tag: c.tag,
                  payload: c.payload,
                  callback: c.callback,
                  next: null,
                }),
                  p === null ? ((v = p = g), (f = x)) : (p = p.next = g),
                  (i |= h));
              if (((c = c.next), c === null)) {
                if (((c = u.shared.pending), c === null)) break;
                ((g = c),
                  (c = g.next),
                  (g.next = null),
                  (u.lastBaseUpdate = g),
                  (u.shared.pending = null));
              }
            } while (!0);
            (p === null && (f = x),
              (u.baseState = f),
              (u.firstBaseUpdate = v),
              (u.lastBaseUpdate = p),
              n === null && (u.shared.lanes = 0),
              (re |= i),
              (l.lanes = i),
              (l.memoizedState = x));
          }
        }
        function Ns(l, t) {
          if (typeof l != "function") throw Error(m(191, l));
          l.call(t);
        }
        function Us(l, t) {
          var e = l.callbacks;
          if (e !== null)
            for (l.callbacks = null, l = 0; l < e.length; l++) Ns(e[l], t);
        }
        var ra = r(null),
          Iu = r(0);
        function Cs(l, t) {
          ((l = wt), _(Iu, l), _(ra, t), (wt = l | t.baseLanes));
        }
        function Qi() {
          (_(Iu, wt), _(ra, ra.current));
        }
        function Xi() {
          ((wt = Iu.current), z(ra), z(Iu));
        }
        var et = r(null),
          ht = null;
        function ce(l) {
          var t = l.alternate;
          (_(Sl, Sl.current & 1),
            _(et, l),
            ht === null &&
              (t === null || ra.current !== null || t.memoizedState !== null) &&
              (ht = l));
        }
        function Zi(l) {
          (_(Sl, Sl.current), _(et, l), ht === null && (ht = l));
        }
        function Rs(l) {
          l.tag === 22
            ? (_(Sl, Sl.current), _(et, l), ht === null && (ht = l))
            : fe();
        }
        function fe() {
          (_(Sl, Sl.current), _(et, et.current));
        }
        function at(l) {
          (z(et), ht === l && (ht = null), z(Sl));
        }
        var Sl = r(0);
        function Pu(l) {
          for (var t = l; t !== null; ) {
            if (t.tag === 13) {
              var e = t.memoizedState;
              if (
                e !== null &&
                ((e = e.dehydrated), e === null || Wc(e) || kc(e))
              )
                return t;
            } else if (
              t.tag === 19 &&
              (t.memoizedProps.revealOrder === "forwards" ||
                t.memoizedProps.revealOrder === "backwards" ||
                t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
                t.memoizedProps.revealOrder === "together")
            ) {
              if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        var Gt = 0,
          Z = null,
          il = null,
          zl = null,
          ln = !1,
          da = !1,
          Ye = !1,
          tn = 0,
          Fa = 0,
          ma = null,
          Xm = 0;
        function hl() {
          throw Error(m(321));
        }
        function Vi(l, t) {
          if (t === null) return !1;
          for (var e = 0; e < t.length && e < l.length; e++)
            if (!lt(l[e], t[e])) return !1;
          return !0;
        }
        function Li(l, t, e, a, u, n) {
          return (
            (Gt = n),
            (Z = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (S.H = l === null || l.memoizedState === null ? po : nc),
            (Ye = !1),
            (n = e(a, u)),
            (Ye = !1),
            da && (n = Bs(t, e, a, u)),
            Hs(l),
            n
          );
        }
        function Hs(l) {
          S.H = lu;
          var t = il !== null && il.next !== null;
          if (
            ((Gt = 0),
            (zl = il = Z = null),
            (ln = !1),
            (Fa = 0),
            (ma = null),
            t)
          )
            throw Error(m(300));
          l === null ||
            Tl ||
            ((l = l.dependencies), l !== null && Ku(l) && (Tl = !0));
        }
        function Bs(l, t, e, a) {
          Z = l;
          var u = 0;
          do {
            if ((da && (ma = null), (Fa = 0), (da = !1), 25 <= u))
              throw Error(m(301));
            if (((u += 1), (zl = il = null), l.updateQueue != null)) {
              var n = l.updateQueue;
              ((n.lastEffect = null),
                (n.events = null),
                (n.stores = null),
                n.memoCache != null && (n.memoCache.index = 0));
            }
            ((S.H = So), (n = t(e, a)));
          } while (da);
          return n;
        }
        function Zm() {
          var l = S.H,
            t = l.useState()[0];
          return (
            (t = typeof t.then == "function" ? Ia(t) : t),
            (l = l.useState()[0]),
            (il !== null ? il.memoizedState : null) !== l && (Z.flags |= 1024),
            t
          );
        }
        function Ki() {
          var l = tn !== 0;
          return ((tn = 0), l);
        }
        function Ji(l, t, e) {
          ((t.updateQueue = l.updateQueue),
            (t.flags &= -2053),
            (l.lanes &= ~e));
        }
        function wi(l) {
          if (ln) {
            for (l = l.memoizedState; l !== null; ) {
              var t = l.queue;
              (t !== null && (t.pending = null), (l = l.next));
            }
            ln = !1;
          }
          ((Gt = 0),
            (zl = il = Z = null),
            (da = !1),
            (Fa = tn = 0),
            (ma = null));
        }
        function ql() {
          var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            zl === null ? (Z.memoizedState = zl = l) : (zl = zl.next = l),
            zl
          );
        }
        function bl() {
          if (il === null) {
            var l = Z.alternate;
            l = l !== null ? l.memoizedState : null;
          } else l = il.next;
          var t = zl === null ? Z.memoizedState : zl.next;
          if (t !== null) ((zl = t), (il = l));
          else {
            if (l === null)
              throw Z.alternate === null ? Error(m(467)) : Error(m(310));
            ((il = l),
              (l = {
                memoizedState: il.memoizedState,
                baseState: il.baseState,
                baseQueue: il.baseQueue,
                queue: il.queue,
                next: null,
              }),
              zl === null ? (Z.memoizedState = zl = l) : (zl = zl.next = l));
          }
          return zl;
        }
        function en() {
          return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null,
          };
        }
        function Ia(l) {
          var t = Fa;
          return (
            (Fa += 1),
            ma === null && (ma = []),
            (l = js(ma, l, t)),
            (t = Z),
            (zl === null ? t.memoizedState : zl.next) === null &&
              ((t = t.alternate),
              (S.H = t === null || t.memoizedState === null ? po : nc)),
            l
          );
        }
        function an(l) {
          if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return Ia(l);
            if (l.$typeof === Cl) return Dl(l);
          }
          throw Error(m(438, String(l)));
        }
        function Wi(l) {
          var t = null,
            e = Z.updateQueue;
          if ((e !== null && (t = e.memoCache), t == null)) {
            var a = Z.alternate;
            a !== null &&
              ((a = a.updateQueue),
              a !== null &&
                ((a = a.memoCache),
                a != null &&
                  (t = {
                    data: a.data.map(function (u) {
                      return u.slice();
                    }),
                    index: 0,
                  })));
          }
          if (
            (t == null && (t = { data: [], index: 0 }),
            e === null && ((e = en()), (Z.updateQueue = e)),
            (e.memoCache = t),
            (e = t.data[t.index]),
            e === void 0)
          )
            for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ze;
          return (t.index++, e);
        }
        function Qt(l, t) {
          return typeof t == "function" ? t(l) : t;
        }
        function un(l) {
          var t = bl();
          return ki(t, il, l);
        }
        function ki(l, t, e) {
          var a = l.queue;
          if (a === null) throw Error(m(311));
          a.lastRenderedReducer = e;
          var u = l.baseQueue,
            n = a.pending;
          if (n !== null) {
            if (u !== null) {
              var i = u.next;
              ((u.next = n.next), (n.next = i));
            }
            ((t.baseQueue = u = n), (a.pending = null));
          }
          if (((n = l.baseState), u === null)) l.memoizedState = n;
          else {
            t = u.next;
            var c = (i = null),
              f = null,
              v = t,
              p = !1;
            do {
              var x = v.lane & -536870913;
              if (x !== v.lane ? (W & x) === x : (Gt & x) === x) {
                var h = v.revertLane;
                if (h === 0)
                  (f !== null &&
                    (f = f.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null,
                      }),
                    x === ca && (p = !0));
                else if ((Gt & h) === h) {
                  ((v = v.next), h === ca && (p = !0));
                  continue;
                } else
                  ((x = {
                    lane: 0,
                    revertLane: v.revertLane,
                    gesture: null,
                    action: v.action,
                    hasEagerState: v.hasEagerState,
                    eagerState: v.eagerState,
                    next: null,
                  }),
                    f === null ? ((c = f = x), (i = n)) : (f = f.next = x),
                    (Z.lanes |= h),
                    (re |= h));
                ((x = v.action),
                  Ye && e(n, x),
                  (n = v.hasEagerState ? v.eagerState : e(n, x)));
              } else
                ((h = {
                  lane: x,
                  revertLane: v.revertLane,
                  gesture: v.gesture,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
                  f === null ? ((c = f = h), (i = n)) : (f = f.next = h),
                  (Z.lanes |= x),
                  (re |= x));
              v = v.next;
            } while (v !== null && v !== t);
            if (
              (f === null ? (i = n) : (f.next = c),
              !lt(n, l.memoizedState) &&
                ((Tl = !0), p && ((e = fa), e !== null)))
            )
              throw e;
            ((l.memoizedState = n),
              (l.baseState = i),
              (l.baseQueue = f),
              (a.lastRenderedState = n));
          }
          return (u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
        }
        function $i(l) {
          var t = bl(),
            e = t.queue;
          if (e === null) throw Error(m(311));
          e.lastRenderedReducer = l;
          var a = e.dispatch,
            u = e.pending,
            n = t.memoizedState;
          if (u !== null) {
            e.pending = null;
            var i = (u = u.next);
            do ((n = l(n, i.action)), (i = i.next));
            while (i !== u);
            (lt(n, t.memoizedState) || (Tl = !0),
              (t.memoizedState = n),
              t.baseQueue === null && (t.baseState = n),
              (e.lastRenderedState = n));
          }
          return [n, a];
        }
        function qs(l, t, e) {
          var a = Z,
            u = bl(),
            n = F;
          if (n) {
            if (e === void 0) throw Error(m(407));
            e = e();
          } else e = t();
          var i = !lt((il || u).memoizedState, e);
          if (
            (i && ((u.memoizedState = e), (Tl = !0)),
            (u = u.queue),
            Pi(Qs.bind(null, a, u, l), [l]),
            u.getSnapshot !== t ||
              i ||
              (zl !== null && zl.memoizedState.tag & 1))
          ) {
            if (
              ((a.flags |= 2048),
              ya(9, { destroy: void 0 }, Gs.bind(null, a, u, e, t), null),
              ol === null)
            )
              throw Error(m(349));
            n || (Gt & 127) !== 0 || Ys(a, t, e);
          }
          return e;
        }
        function Ys(l, t, e) {
          ((l.flags |= 16384),
            (l = { getSnapshot: t, value: e }),
            (t = Z.updateQueue),
            t === null
              ? ((t = en()), (Z.updateQueue = t), (t.stores = [l]))
              : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l)));
        }
        function Gs(l, t, e, a) {
          ((t.value = e), (t.getSnapshot = a), Xs(t) && Zs(l));
        }
        function Qs(l, t, e) {
          return e(function () {
            Xs(t) && Zs(l);
          });
        }
        function Xs(l) {
          var t = l.getSnapshot;
          l = l.value;
          try {
            var e = t();
            return !lt(l, e);
          } catch {
            return !0;
          }
        }
        function Zs(l) {
          var t = Oe(l, 2);
          t !== null && Wl(t, l, 2);
        }
        function Fi(l) {
          var t = ql();
          if (typeof l == "function") {
            var e = l;
            if (((l = e()), Ye)) {
              Ft(!0);
              try {
                e();
              } finally {
                Ft(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = l),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Qt,
              lastRenderedState: l,
            }),
            t
          );
        }
        function Vs(l, t, e, a) {
          return (
            (l.baseState = e),
            ki(l, il, typeof a == "function" ? a : Qt)
          );
        }
        function Vm(l, t, e, a, u) {
          if (fn(l)) throw Error(m(485));
          if (((l = t.action), l !== null)) {
            var n = {
              payload: u,
              action: l,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (i) {
                n.listeners.push(i);
              },
            };
            (S.T !== null ? e(!0) : (n.isTransition = !1),
              a(n),
              (e = t.pending),
              e === null
                ? ((n.next = t.pending = n), Ls(t, n))
                : ((n.next = e.next), (t.pending = e.next = n)));
          }
        }
        function Ls(l, t) {
          var e = t.action,
            a = t.payload,
            u = l.state;
          if (t.isTransition) {
            var n = S.T,
              i = {};
            S.T = i;
            try {
              var c = e(u, a),
                f = S.S;
              (f !== null && f(i, c), Ks(l, t, c));
            } catch (v) {
              Ii(l, t, v);
            } finally {
              (n !== null && i.types !== null && (n.types = i.types),
                (S.T = n));
            }
          } else
            try {
              ((n = e(u, a)), Ks(l, t, n));
            } catch (v) {
              Ii(l, t, v);
            }
        }
        function Ks(l, t, e) {
          e !== null && typeof e == "object" && typeof e.then == "function"
            ? e.then(
                function (a) {
                  Js(l, t, a);
                },
                function (a) {
                  return Ii(l, t, a);
                },
              )
            : Js(l, t, e);
        }
        function Js(l, t, e) {
          ((t.status = "fulfilled"),
            (t.value = e),
            ws(t),
            (l.state = e),
            (t = l.pending),
            t !== null &&
              ((e = t.next),
              e === t
                ? (l.pending = null)
                : ((e = e.next), (t.next = e), Ls(l, e))));
        }
        function Ii(l, t, e) {
          var a = l.pending;
          if (((l.pending = null), a !== null)) {
            a = a.next;
            do ((t.status = "rejected"), (t.reason = e), ws(t), (t = t.next));
            while (t !== a);
          }
          l.action = null;
        }
        function ws(l) {
          l = l.listeners;
          for (var t = 0; t < l.length; t++) (0, l[t])();
        }
        function Ws(l, t) {
          return t;
        }
        function ks(l, t) {
          if (F) {
            var e = ol.formState;
            if (e !== null) {
              l: {
                var a = Z;
                if (F) {
                  if (rl) {
                    t: {
                      for (var u = rl, n = vt; u.nodeType !== 8; ) {
                        if (!n) {
                          u = null;
                          break t;
                        }
                        if (((u = gt(u.nextSibling)), u === null)) {
                          u = null;
                          break t;
                        }
                      }
                      ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
                    }
                    if (u) {
                      ((rl = gt(u.nextSibling)), (a = u.data === "F!"));
                      break l;
                    }
                  }
                  ee(a);
                }
                a = !1;
              }
              a && (t = e[0]);
            }
          }
          return (
            (e = ql()),
            (e.memoizedState = e.baseState = t),
            (a = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ws,
              lastRenderedState: t,
            }),
            (e.queue = a),
            (e = vo.bind(null, Z, a)),
            (a.dispatch = e),
            (a = Fi(!1)),
            (n = uc.bind(null, Z, !1, a.queue)),
            (a = ql()),
            (u = { state: t, dispatch: null, action: l, pending: null }),
            (a.queue = u),
            (e = Vm.bind(null, Z, u, n, e)),
            (u.dispatch = e),
            (a.memoizedState = l),
            [t, e, !1]
          );
        }
        function $s(l) {
          var t = bl();
          return Fs(t, il, l);
        }
        function Fs(l, t, e) {
          if (
            ((t = ki(l, t, Ws)[0]),
            (l = un(Qt)[0]),
            typeof t == "object" && t !== null && typeof t.then == "function")
          )
            try {
              var a = Ia(t);
            } catch (i) {
              throw i === sa ? Wu : i;
            }
          else a = t;
          t = bl();
          var u = t.queue,
            n = u.dispatch;
          return (
            e !== t.memoizedState &&
              ((Z.flags |= 2048),
              ya(9, { destroy: void 0 }, Lm.bind(null, u, e), null)),
            [a, n, l]
          );
        }
        function Lm(l, t) {
          l.action = t;
        }
        function Is(l) {
          var t = bl(),
            e = il;
          if (e !== null) return Fs(t, e, l);
          (bl(), (t = t.memoizedState), (e = bl()));
          var a = e.queue.dispatch;
          return ((e.memoizedState = l), [t, a, !1]);
        }
        function ya(l, t, e, a) {
          return (
            (l = { tag: l, create: e, deps: a, inst: t, next: null }),
            (t = Z.updateQueue),
            t === null && ((t = en()), (Z.updateQueue = t)),
            (e = t.lastEffect),
            e === null
              ? (t.lastEffect = l.next = l)
              : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
            l
          );
        }
        function Ps() {
          return bl().memoizedState;
        }
        function nn(l, t, e, a) {
          var u = ql();
          ((Z.flags |= l),
            (u.memoizedState = ya(
              1 | t,
              { destroy: void 0 },
              e,
              a === void 0 ? null : a,
            )));
        }
        function cn(l, t, e, a) {
          var u = bl();
          a = a === void 0 ? null : a;
          var n = u.memoizedState.inst;
          il !== null && a !== null && Vi(a, il.memoizedState.deps)
            ? (u.memoizedState = ya(t, n, e, a))
            : ((Z.flags |= l), (u.memoizedState = ya(1 | t, n, e, a)));
        }
        function lo(l, t) {
          nn(8390656, 8, l, t);
        }
        function Pi(l, t) {
          cn(2048, 8, l, t);
        }
        function Km(l) {
          Z.flags |= 4;
          var t = Z.updateQueue;
          if (t === null) ((t = en()), (Z.updateQueue = t), (t.events = [l]));
          else {
            var e = t.events;
            e === null ? (t.events = [l]) : e.push(l);
          }
        }
        function to(l) {
          var t = bl().memoizedState;
          return (
            Km({ ref: t, nextImpl: l }),
            function () {
              if ((ll & 2) !== 0) throw Error(m(440));
              return t.impl.apply(void 0, arguments);
            }
          );
        }
        function eo(l, t) {
          return cn(4, 2, l, t);
        }
        function ao(l, t) {
          return cn(4, 4, l, t);
        }
        function uo(l, t) {
          if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function () {
              typeof e == "function" ? e() : t(null);
            };
          }
          if (t != null)
            return (
              (l = l()),
              (t.current = l),
              function () {
                t.current = null;
              }
            );
        }
        function no(l, t, e) {
          ((e = e != null ? e.concat([l]) : null),
            cn(4, 4, uo.bind(null, t, l), e));
        }
        function lc() {}
        function io(l, t) {
          var e = bl();
          t = t === void 0 ? null : t;
          var a = e.memoizedState;
          return t !== null && Vi(t, a[1])
            ? a[0]
            : ((e.memoizedState = [l, t]), l);
        }
        function co(l, t) {
          var e = bl();
          t = t === void 0 ? null : t;
          var a = e.memoizedState;
          if (t !== null && Vi(t, a[1])) return a[0];
          if (((a = l()), Ye)) {
            Ft(!0);
            try {
              l();
            } finally {
              Ft(!1);
            }
          }
          return ((e.memoizedState = [a, t]), a);
        }
        function tc(l, t, e) {
          return e === void 0 || ((Gt & 1073741824) !== 0 && (W & 261930) === 0)
            ? (l.memoizedState = t)
            : ((l.memoizedState = e), (l = sr()), (Z.lanes |= l), (re |= l), e);
        }
        function fo(l, t, e, a) {
          return lt(e, t)
            ? e
            : ra.current !== null
              ? ((l = tc(l, e, a)), lt(l, t) || (Tl = !0), l)
              : (Gt & 42) === 0 ||
                  ((Gt & 1073741824) !== 0 && (W & 261930) === 0)
                ? ((Tl = !0), (l.memoizedState = e))
                : ((l = sr()), (Z.lanes |= l), (re |= l), t);
        }
        function so(l, t, e, a, u) {
          var n = E.p;
          E.p = n !== 0 && 8 > n ? n : 8;
          var i = S.T,
            c = {};
          ((S.T = c), uc(l, !1, t, e));
          try {
            var f = u(),
              v = S.S;
            if (
              (v !== null && v(c, f),
              f !== null && typeof f == "object" && typeof f.then == "function")
            ) {
              var p = Qm(f, a);
              Pa(l, t, p, it(l));
            } else Pa(l, t, a, it(l));
          } catch (x) {
            Pa(
              l,
              t,
              { then: function () {}, status: "rejected", reason: x },
              it(),
            );
          } finally {
            ((E.p = n),
              i !== null && c.types !== null && (i.types = c.types),
              (S.T = i));
          }
        }
        function Jm() {}
        function ec(l, t, e, a) {
          if (l.tag !== 5) throw Error(m(476));
          var u = oo(l).queue;
          so(
            l,
            u,
            t,
            G,
            e === null
              ? Jm
              : function () {
                  return (ro(l), e(a));
                },
          );
        }
        function oo(l) {
          var t = l.memoizedState;
          if (t !== null) return t;
          t = {
            memoizedState: G,
            baseState: G,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Qt,
              lastRenderedState: G,
            },
            next: null,
          };
          var e = {};
          return (
            (t.next = {
              memoizedState: e,
              baseState: e,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: e,
              },
              next: null,
            }),
            (l.memoizedState = t),
            (l = l.alternate),
            l !== null && (l.memoizedState = t),
            t
          );
        }
        function ro(l) {
          var t = oo(l);
          (t.next === null && (t = l.alternate.memoizedState),
            Pa(l, t.next.queue, {}, it()));
        }
        function ac() {
          return Dl(hu);
        }
        function mo() {
          return bl().memoizedState;
        }
        function yo() {
          return bl().memoizedState;
        }
        function wm(l) {
          for (var t = l.return; t !== null; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var e = it();
                l = ne(e);
                var a = ie(t, l, e);
                (a !== null && (Wl(a, t, e), Wa(a, t, e)),
                  (t = { cache: Ui() }),
                  (l.payload = t));
                return;
            }
            t = t.return;
          }
        }
        function Wm(l, t, e) {
          var a = it();
          ((e = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            fn(l)
              ? ho(t, e)
              : ((e = xi(l, t, e, a)),
                e !== null && (Wl(e, l, a), go(e, t, a))));
        }
        function vo(l, t, e) {
          var a = it();
          Pa(l, t, e, a);
        }
        function Pa(l, t, e, a) {
          var u = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (fn(l)) ho(t, u);
          else {
            var n = l.alternate;
            if (
              l.lanes === 0 &&
              (n === null || n.lanes === 0) &&
              ((n = t.lastRenderedReducer), n !== null)
            )
              try {
                var i = t.lastRenderedState,
                  c = n(i, e);
                if (((u.hasEagerState = !0), (u.eagerState = c), lt(c, i)))
                  return (Xu(l, t, u, 0), ol === null && Qu(), !1);
              } catch {
              } finally {
              }
            if (((e = xi(l, t, u, a)), e !== null))
              return (Wl(e, l, a), go(e, t, a), !0);
          }
          return !1;
        }
        function uc(l, t, e, a) {
          if (
            ((a = {
              lane: 2,
              revertLane: Bc(),
              gesture: null,
              action: a,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            fn(l))
          ) {
            if (t) throw Error(m(479));
          } else ((t = xi(l, e, a, 2)), t !== null && Wl(t, l, 2));
        }
        function fn(l) {
          var t = l.alternate;
          return l === Z || (t !== null && t === Z);
        }
        function ho(l, t) {
          da = ln = !0;
          var e = l.pending;
          (e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
            (l.pending = t));
        }
        function go(l, t, e) {
          if ((e & 4194048) !== 0) {
            var a = t.lanes;
            ((a &= l.pendingLanes), (e |= a), (t.lanes = e), xf(l, e));
          }
        }
        var lu = {
          readContext: Dl,
          use: an,
          useCallback: hl,
          useContext: hl,
          useEffect: hl,
          useImperativeHandle: hl,
          useLayoutEffect: hl,
          useInsertionEffect: hl,
          useMemo: hl,
          useReducer: hl,
          useRef: hl,
          useState: hl,
          useDebugValue: hl,
          useDeferredValue: hl,
          useTransition: hl,
          useSyncExternalStore: hl,
          useId: hl,
          useHostTransitionStatus: hl,
          useFormState: hl,
          useActionState: hl,
          useOptimistic: hl,
          useMemoCache: hl,
          useCacheRefresh: hl,
        };
        lu.useEffectEvent = hl;
        var po = {
            readContext: Dl,
            use: an,
            useCallback: function (l, t) {
              return ((ql().memoizedState = [l, t === void 0 ? null : t]), l);
            },
            useContext: Dl,
            useEffect: lo,
            useImperativeHandle: function (l, t, e) {
              ((e = e != null ? e.concat([l]) : null),
                nn(4194308, 4, uo.bind(null, t, l), e));
            },
            useLayoutEffect: function (l, t) {
              return nn(4194308, 4, l, t);
            },
            useInsertionEffect: function (l, t) {
              nn(4, 2, l, t);
            },
            useMemo: function (l, t) {
              var e = ql();
              t = t === void 0 ? null : t;
              var a = l();
              if (Ye) {
                Ft(!0);
                try {
                  l();
                } finally {
                  Ft(!1);
                }
              }
              return ((e.memoizedState = [a, t]), a);
            },
            useReducer: function (l, t, e) {
              var a = ql();
              if (e !== void 0) {
                var u = e(t);
                if (Ye) {
                  Ft(!0);
                  try {
                    e(t);
                  } finally {
                    Ft(!1);
                  }
                }
              } else u = t;
              return (
                (a.memoizedState = a.baseState = u),
                (l = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: l,
                  lastRenderedState: u,
                }),
                (a.queue = l),
                (l = l.dispatch = Wm.bind(null, Z, l)),
                [a.memoizedState, l]
              );
            },
            useRef: function (l) {
              var t = ql();
              return ((l = { current: l }), (t.memoizedState = l));
            },
            useState: function (l) {
              l = Fi(l);
              var t = l.queue,
                e = vo.bind(null, Z, t);
              return ((t.dispatch = e), [l.memoizedState, e]);
            },
            useDebugValue: lc,
            useDeferredValue: function (l, t) {
              var e = ql();
              return tc(e, l, t);
            },
            useTransition: function () {
              var l = Fi(!1);
              return (
                (l = so.bind(null, Z, l.queue, !0, !1)),
                (ql().memoizedState = l),
                [!1, l]
              );
            },
            useSyncExternalStore: function (l, t, e) {
              var a = Z,
                u = ql();
              if (F) {
                if (e === void 0) throw Error(m(407));
                e = e();
              } else {
                if (((e = t()), ol === null)) throw Error(m(349));
                (W & 127) !== 0 || Ys(a, t, e);
              }
              u.memoizedState = e;
              var n = { value: e, getSnapshot: t };
              return (
                (u.queue = n),
                lo(Qs.bind(null, a, n, l), [l]),
                (a.flags |= 2048),
                ya(9, { destroy: void 0 }, Gs.bind(null, a, n, e, t), null),
                e
              );
            },
            useId: function () {
              var l = ql(),
                t = ol.identifierPrefix;
              if (F) {
                var e = _t,
                  a = jt;
                ((e = (a & ~(1 << (32 - Pl(a) - 1))).toString(32) + e),
                  (t = "_" + t + "R_" + e),
                  (e = tn++),
                  0 < e && (t += "H" + e.toString(32)),
                  (t += "_"));
              } else ((e = Xm++), (t = "_" + t + "r_" + e.toString(32) + "_"));
              return (l.memoizedState = t);
            },
            useHostTransitionStatus: ac,
            useFormState: ks,
            useActionState: ks,
            useOptimistic: function (l) {
              var t = ql();
              t.memoizedState = t.baseState = l;
              var e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (t.queue = e),
                (t = uc.bind(null, Z, !0, e)),
                (e.dispatch = t),
                [l, t]
              );
            },
            useMemoCache: Wi,
            useCacheRefresh: function () {
              return (ql().memoizedState = wm.bind(null, Z));
            },
            useEffectEvent: function (l) {
              var t = ql(),
                e = { impl: l };
              return (
                (t.memoizedState = e),
                function () {
                  if ((ll & 2) !== 0) throw Error(m(440));
                  return e.impl.apply(void 0, arguments);
                }
              );
            },
          },
          nc = {
            readContext: Dl,
            use: an,
            useCallback: io,
            useContext: Dl,
            useEffect: Pi,
            useImperativeHandle: no,
            useInsertionEffect: eo,
            useLayoutEffect: ao,
            useMemo: co,
            useReducer: un,
            useRef: Ps,
            useState: function () {
              return un(Qt);
            },
            useDebugValue: lc,
            useDeferredValue: function (l, t) {
              var e = bl();
              return fo(e, il.memoizedState, l, t);
            },
            useTransition: function () {
              var l = un(Qt)[0],
                t = bl().memoizedState;
              return [typeof l == "boolean" ? l : Ia(l), t];
            },
            useSyncExternalStore: qs,
            useId: mo,
            useHostTransitionStatus: ac,
            useFormState: $s,
            useActionState: $s,
            useOptimistic: function (l, t) {
              var e = bl();
              return Vs(e, il, l, t);
            },
            useMemoCache: Wi,
            useCacheRefresh: yo,
          };
        nc.useEffectEvent = to;
        var So = {
          readContext: Dl,
          use: an,
          useCallback: io,
          useContext: Dl,
          useEffect: Pi,
          useImperativeHandle: no,
          useInsertionEffect: eo,
          useLayoutEffect: ao,
          useMemo: co,
          useReducer: $i,
          useRef: Ps,
          useState: function () {
            return $i(Qt);
          },
          useDebugValue: lc,
          useDeferredValue: function (l, t) {
            var e = bl();
            return il === null ? tc(e, l, t) : fo(e, il.memoizedState, l, t);
          },
          useTransition: function () {
            var l = $i(Qt)[0],
              t = bl().memoizedState;
            return [typeof l == "boolean" ? l : Ia(l), t];
          },
          useSyncExternalStore: qs,
          useId: mo,
          useHostTransitionStatus: ac,
          useFormState: Is,
          useActionState: Is,
          useOptimistic: function (l, t) {
            var e = bl();
            return il !== null
              ? Vs(e, il, l, t)
              : ((e.baseState = l), [l, e.queue.dispatch]);
          },
          useMemoCache: Wi,
          useCacheRefresh: yo,
        };
        So.useEffectEvent = to;
        function ic(l, t, e, a) {
          ((t = l.memoizedState),
            (e = e(a, t)),
            (e = e == null ? t : Y({}, t, e)),
            (l.memoizedState = e),
            l.lanes === 0 && (l.updateQueue.baseState = e));
        }
        var cc = {
          enqueueSetState: function (l, t, e) {
            l = l._reactInternals;
            var a = it(),
              u = ne(a);
            ((u.payload = t),
              e != null && (u.callback = e),
              (t = ie(l, u, a)),
              t !== null && (Wl(t, l, a), Wa(t, l, a)));
          },
          enqueueReplaceState: function (l, t, e) {
            l = l._reactInternals;
            var a = it(),
              u = ne(a);
            ((u.tag = 1),
              (u.payload = t),
              e != null && (u.callback = e),
              (t = ie(l, u, a)),
              t !== null && (Wl(t, l, a), Wa(t, l, a)));
          },
          enqueueForceUpdate: function (l, t) {
            l = l._reactInternals;
            var e = it(),
              a = ne(e);
            ((a.tag = 2),
              t != null && (a.callback = t),
              (t = ie(l, a, e)),
              t !== null && (Wl(t, l, e), Wa(t, l, e)));
          },
        };
        function bo(l, t, e, a, u, n, i) {
          return (
            (l = l.stateNode),
            typeof l.shouldComponentUpdate == "function"
              ? l.shouldComponentUpdate(a, n, i)
              : t.prototype && t.prototype.isPureReactComponent
                ? !Qa(e, a) || !Qa(u, n)
                : !0
          );
        }
        function xo(l, t, e, a) {
          ((l = t.state),
            typeof t.componentWillReceiveProps == "function" &&
              t.componentWillReceiveProps(e, a),
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
              t.UNSAFE_componentWillReceiveProps(e, a),
            t.state !== l && cc.enqueueReplaceState(t, t.state, null));
        }
        function Ge(l, t) {
          var e = t;
          if ("ref" in t) {
            e = {};
            for (var a in t) a !== "ref" && (e[a] = t[a]);
          }
          if ((l = l.defaultProps)) {
            e === t && (e = Y({}, e));
            for (var u in l) e[u] === void 0 && (e[u] = l[u]);
          }
          return e;
        }
        function zo(l) {
          Gu(l);
        }
        function To(l) {
          console.error(l);
        }
        function Ao(l) {
          Gu(l);
        }
        function sn(l, t) {
          try {
            var e = l.onUncaughtError;
            e(t.value, { componentStack: t.stack });
          } catch (a) {
            setTimeout(function () {
              throw a;
            });
          }
        }
        function Eo(l, t, e) {
          try {
            var a = l.onCaughtError;
            a(e.value, {
              componentStack: e.stack,
              errorBoundary: t.tag === 1 ? t.stateNode : null,
            });
          } catch (u) {
            setTimeout(function () {
              throw u;
            });
          }
        }
        function fc(l, t, e) {
          return (
            (e = ne(e)),
            (e.tag = 3),
            (e.payload = { element: null }),
            (e.callback = function () {
              sn(l, t);
            }),
            e
          );
        }
        function jo(l) {
          return ((l = ne(l)), (l.tag = 3), l);
        }
        function _o(l, t, e, a) {
          var u = e.type.getDerivedStateFromError;
          if (typeof u == "function") {
            var n = a.value;
            ((l.payload = function () {
              return u(n);
            }),
              (l.callback = function () {
                Eo(t, e, a);
              }));
          }
          var i = e.stateNode;
          i !== null &&
            typeof i.componentDidCatch == "function" &&
            (l.callback = function () {
              (Eo(t, e, a),
                typeof u != "function" &&
                  (de === null ? (de = new Set([this])) : de.add(this)));
              var c = a.stack;
              this.componentDidCatch(a.value, {
                componentStack: c !== null ? c : "",
              });
            });
        }
        function km(l, t, e, a, u) {
          if (
            ((e.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            if (
              ((t = e.alternate),
              t !== null && ia(t, e, u, !0),
              (e = et.current),
              e !== null)
            ) {
              switch (e.tag) {
                case 31:
                case 13:
                  return (
                    ht === null
                      ? xn()
                      : e.alternate === null && gl === 0 && (gl = 3),
                    (e.flags &= -257),
                    (e.flags |= 65536),
                    (e.lanes = u),
                    a === ku
                      ? (e.flags |= 16384)
                      : ((t = e.updateQueue),
                        t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                        Cc(l, a, u)),
                    !1
                  );
                case 22:
                  return (
                    (e.flags |= 65536),
                    a === ku
                      ? (e.flags |= 16384)
                      : ((t = e.updateQueue),
                        t === null
                          ? ((t = {
                              transitions: null,
                              markerInstances: null,
                              retryQueue: new Set([a]),
                            }),
                            (e.updateQueue = t))
                          : ((e = t.retryQueue),
                            e === null
                              ? (t.retryQueue = new Set([a]))
                              : e.add(a)),
                        Cc(l, a, u)),
                    !1
                  );
              }
              throw Error(m(435, e.tag));
            }
            return (Cc(l, a, u), xn(), !1);
          }
          if (F)
            return (
              (t = et.current),
              t !== null
                ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                  (t.flags |= 65536),
                  (t.lanes = u),
                  a !== _i && ((l = Error(m(422), { cause: a })), Va(dt(l, e))))
                : (a !== _i &&
                    ((t = Error(m(423), { cause: a })), Va(dt(t, e))),
                  (l = l.current.alternate),
                  (l.flags |= 65536),
                  (u &= -u),
                  (l.lanes |= u),
                  (a = dt(a, e)),
                  (u = fc(l.stateNode, a, u)),
                  Yi(l, u),
                  gl !== 4 && (gl = 2)),
              !1
            );
          var n = Error(m(520), { cause: a });
          if (
            ((n = dt(n, e)),
            fu === null ? (fu = [n]) : fu.push(n),
            gl !== 4 && (gl = 2),
            t === null)
          )
            return !0;
          ((a = dt(a, e)), (e = t));
          do {
            switch (e.tag) {
              case 3:
                return (
                  (e.flags |= 65536),
                  (l = u & -u),
                  (e.lanes |= l),
                  (l = fc(e.stateNode, a, l)),
                  Yi(e, l),
                  !1
                );
              case 1:
                if (
                  ((t = e.type),
                  (n = e.stateNode),
                  (e.flags & 128) === 0 &&
                    (typeof t.getDerivedStateFromError == "function" ||
                      (n !== null &&
                        typeof n.componentDidCatch == "function" &&
                        (de === null || !de.has(n)))))
                )
                  return (
                    (e.flags |= 65536),
                    (u &= -u),
                    (e.lanes |= u),
                    (u = jo(u)),
                    _o(u, l, e, a),
                    Yi(e, u),
                    !1
                  );
            }
            e = e.return;
          } while (e !== null);
          return !1;
        }
        var sc = Error(m(461)),
          Tl = !1;
        function Nl(l, t, e, a) {
          t.child = l === null ? Ds(t, null, e, a) : qe(t, l.child, e, a);
        }
        function Mo(l, t, e, a, u) {
          e = e.render;
          var n = t.ref;
          if ("ref" in a) {
            var i = {};
            for (var c in a) c !== "ref" && (i[c] = a[c]);
          } else i = a;
          return (
            Ce(t),
            (a = Li(l, t, e, i, n, u)),
            (c = Ki()),
            l !== null && !Tl
              ? (Ji(l, t, u), Xt(l, t, u))
              : (F && c && Ei(t), (t.flags |= 1), Nl(l, t, a, u), t.child)
          );
        }
        function Oo(l, t, e, a, u) {
          if (l === null) {
            var n = e.type;
            return typeof n == "function" &&
              !zi(n) &&
              n.defaultProps === void 0 &&
              e.compare === null
              ? ((t.tag = 15), (t.type = n), Do(l, t, n, a, u))
              : ((l = Vu(e.type, null, a, t, t.mode, u)),
                (l.ref = t.ref),
                (l.return = t),
                (t.child = l));
          }
          if (((n = l.child), !gc(l, u))) {
            var i = n.memoizedProps;
            if (
              ((e = e.compare),
              (e = e !== null ? e : Qa),
              e(i, a) && l.ref === t.ref)
            )
              return Xt(l, t, u);
          }
          return (
            (t.flags |= 1),
            (l = Ht(n, a)),
            (l.ref = t.ref),
            (l.return = t),
            (t.child = l)
          );
        }
        function Do(l, t, e, a, u) {
          if (l !== null) {
            var n = l.memoizedProps;
            if (Qa(n, a) && l.ref === t.ref)
              if (((Tl = !1), (t.pendingProps = a = n), gc(l, u)))
                (l.flags & 131072) !== 0 && (Tl = !0);
              else return ((t.lanes = l.lanes), Xt(l, t, u));
          }
          return oc(l, t, e, a, u);
        }
        function No(l, t, e, a) {
          var u = a.children,
            n = l !== null ? l.memoizedState : null;
          if (
            (l === null &&
              t.stateNode === null &&
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            a.mode === "hidden")
          ) {
            if ((t.flags & 128) !== 0) {
              if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
                for (a = t.child = l.child, u = 0; a !== null; )
                  ((u = u | a.lanes | a.childLanes), (a = a.sibling));
                a = u & ~n;
              } else ((a = 0), (t.child = null));
              return Uo(l, t, n, e, a);
            }
            if ((e & 536870912) !== 0)
              ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                l !== null && wu(t, n !== null ? n.cachePool : null),
                n !== null ? Cs(t, n) : Qi(),
                Rs(t));
            else
              return (
                (a = t.lanes = 536870912),
                Uo(l, t, n !== null ? n.baseLanes | e : e, e, a)
              );
          } else
            n !== null
              ? (wu(t, n.cachePool), Cs(t, n), fe(), (t.memoizedState = null))
              : (l !== null && wu(t, null), Qi(), fe());
          return (Nl(l, t, u, e), t.child);
        }
        function tu(l, t) {
          return (
            (l !== null && l.tag === 22) ||
              t.stateNode !== null ||
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            t.sibling
          );
        }
        function Uo(l, t, e, a, u) {
          var n = Ri();
          return (
            (n = n === null ? null : { parent: xl._currentValue, pool: n }),
            (t.memoizedState = { baseLanes: e, cachePool: n }),
            l !== null && wu(t, null),
            Qi(),
            Rs(t),
            l !== null && ia(l, t, a, !0),
            (t.childLanes = u),
            null
          );
        }
        function on(l, t) {
          return (
            (t = dn({ mode: t.mode, children: t.children }, l.mode)),
            (t.ref = l.ref),
            (l.child = t),
            (t.return = l),
            t
          );
        }
        function Co(l, t, e) {
          return (
            qe(t, l.child, null, e),
            (l = on(t, t.pendingProps)),
            (l.flags |= 2),
            at(t),
            (t.memoizedState = null),
            l
          );
        }
        function $m(l, t, e) {
          var a = t.pendingProps,
            u = (t.flags & 128) !== 0;
          if (((t.flags &= -129), l === null)) {
            if (F) {
              if (a.mode === "hidden")
                return ((l = on(t, a)), (t.lanes = 536870912), tu(null, l));
              if (
                (Zi(t),
                (l = rl)
                  ? ((l = Kr(l, vt)),
                    (l = l !== null && l.data === "&" ? l : null),
                    l !== null &&
                      ((t.memoizedState = {
                        dehydrated: l,
                        treeContext:
                          le !== null ? { id: jt, overflow: _t } : null,
                        retryLane: 536870912,
                        hydrationErrors: null,
                      }),
                      (e = vs(l)),
                      (e.return = t),
                      (t.child = e),
                      (Ol = t),
                      (rl = null)))
                  : (l = null),
                l === null)
              )
                throw ee(t);
              return ((t.lanes = 536870912), null);
            }
            return on(t, a);
          }
          var n = l.memoizedState;
          if (n !== null) {
            var i = n.dehydrated;
            if ((Zi(t), u))
              if (t.flags & 256) ((t.flags &= -257), (t = Co(l, t, e)));
              else if (t.memoizedState !== null)
                ((t.child = l.child), (t.flags |= 128), (t = null));
              else throw Error(m(558));
            else if (
              (Tl || ia(l, t, e, !1), (u = (e & l.childLanes) !== 0), Tl || u)
            ) {
              if (
                ((a = ol),
                a !== null && ((i = zf(a, e)), i !== 0 && i !== n.retryLane))
              )
                throw ((n.retryLane = i), Oe(l, i), Wl(a, l, i), sc);
              (xn(), (t = Co(l, t, e)));
            } else
              ((l = n.treeContext),
                (rl = gt(i.nextSibling)),
                (Ol = t),
                (F = !0),
                (te = null),
                (vt = !1),
                l !== null && ps(t, l),
                (t = on(t, a)),
                (t.flags |= 4096));
            return t;
          }
          return (
            (l = Ht(l.child, { mode: a.mode, children: a.children })),
            (l.ref = t.ref),
            (t.child = l),
            (l.return = t),
            l
          );
        }
        function rn(l, t) {
          var e = t.ref;
          if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
          else {
            if (typeof e != "function" && typeof e != "object")
              throw Error(m(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816);
          }
        }
        function oc(l, t, e, a, u) {
          return (
            Ce(t),
            (e = Li(l, t, e, a, void 0, u)),
            (a = Ki()),
            l !== null && !Tl
              ? (Ji(l, t, u), Xt(l, t, u))
              : (F && a && Ei(t), (t.flags |= 1), Nl(l, t, e, u), t.child)
          );
        }
        function Ro(l, t, e, a, u, n) {
          return (
            Ce(t),
            (t.updateQueue = null),
            (e = Bs(t, a, e, u)),
            Hs(l),
            (a = Ki()),
            l !== null && !Tl
              ? (Ji(l, t, n), Xt(l, t, n))
              : (F && a && Ei(t), (t.flags |= 1), Nl(l, t, e, n), t.child)
          );
        }
        function Ho(l, t, e, a, u) {
          if ((Ce(t), t.stateNode === null)) {
            var n = ea,
              i = e.contextType;
            (typeof i == "object" && i !== null && (n = Dl(i)),
              (n = new e(a, n)),
              (t.memoizedState =
                n.state !== null && n.state !== void 0 ? n.state : null),
              (n.updater = cc),
              (t.stateNode = n),
              (n._reactInternals = t),
              (n = t.stateNode),
              (n.props = a),
              (n.state = t.memoizedState),
              (n.refs = {}),
              Bi(t),
              (i = e.contextType),
              (n.context = typeof i == "object" && i !== null ? Dl(i) : ea),
              (n.state = t.memoizedState),
              (i = e.getDerivedStateFromProps),
              typeof i == "function" &&
                (ic(t, e, i, a), (n.state = t.memoizedState)),
              typeof e.getDerivedStateFromProps == "function" ||
                typeof n.getSnapshotBeforeUpdate == "function" ||
                (typeof n.UNSAFE_componentWillMount != "function" &&
                  typeof n.componentWillMount != "function") ||
                ((i = n.state),
                typeof n.componentWillMount == "function" &&
                  n.componentWillMount(),
                typeof n.UNSAFE_componentWillMount == "function" &&
                  n.UNSAFE_componentWillMount(),
                i !== n.state && cc.enqueueReplaceState(n, n.state, null),
                $a(t, a, n, u),
                ka(),
                (n.state = t.memoizedState)),
              typeof n.componentDidMount == "function" && (t.flags |= 4194308),
              (a = !0));
          } else if (l === null) {
            n = t.stateNode;
            var c = t.memoizedProps,
              f = Ge(e, c);
            n.props = f;
            var v = n.context,
              p = e.contextType;
            ((i = ea), typeof p == "object" && p !== null && (i = Dl(p)));
            var x = e.getDerivedStateFromProps;
            ((p =
              typeof x == "function" ||
              typeof n.getSnapshotBeforeUpdate == "function"),
              (c = t.pendingProps !== c),
              p ||
                (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
                  typeof n.componentWillReceiveProps != "function") ||
                ((c || v !== i) && xo(t, n, a, i)),
              (ue = !1));
            var h = t.memoizedState;
            ((n.state = h),
              $a(t, a, n, u),
              ka(),
              (v = t.memoizedState),
              c || h !== v || ue
                ? (typeof x == "function" &&
                    (ic(t, e, x, a), (v = t.memoizedState)),
                  (f = ue || bo(t, e, f, a, h, v, i))
                    ? (p ||
                        (typeof n.UNSAFE_componentWillMount != "function" &&
                          typeof n.componentWillMount != "function") ||
                        (typeof n.componentWillMount == "function" &&
                          n.componentWillMount(),
                        typeof n.UNSAFE_componentWillMount == "function" &&
                          n.UNSAFE_componentWillMount()),
                      typeof n.componentDidMount == "function" &&
                        (t.flags |= 4194308))
                    : (typeof n.componentDidMount == "function" &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = a),
                      (t.memoizedState = v)),
                  (n.props = a),
                  (n.state = v),
                  (n.context = i),
                  (a = f))
                : (typeof n.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (a = !1)));
          } else {
            ((n = t.stateNode),
              qi(l, t),
              (i = t.memoizedProps),
              (p = Ge(e, i)),
              (n.props = p),
              (x = t.pendingProps),
              (h = n.context),
              (v = e.contextType),
              (f = ea),
              typeof v == "object" && v !== null && (f = Dl(v)),
              (c = e.getDerivedStateFromProps),
              (v =
                typeof c == "function" ||
                typeof n.getSnapshotBeforeUpdate == "function") ||
                (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
                  typeof n.componentWillReceiveProps != "function") ||
                ((i !== x || h !== f) && xo(t, n, a, f)),
              (ue = !1),
              (h = t.memoizedState),
              (n.state = h),
              $a(t, a, n, u),
              ka());
            var g = t.memoizedState;
            i !== x ||
            h !== g ||
            ue ||
            (l !== null && l.dependencies !== null && Ku(l.dependencies))
              ? (typeof c == "function" &&
                  (ic(t, e, c, a), (g = t.memoizedState)),
                (p =
                  ue ||
                  bo(t, e, p, a, h, g, f) ||
                  (l !== null && l.dependencies !== null && Ku(l.dependencies)))
                  ? (v ||
                      (typeof n.UNSAFE_componentWillUpdate != "function" &&
                        typeof n.componentWillUpdate != "function") ||
                      (typeof n.componentWillUpdate == "function" &&
                        n.componentWillUpdate(a, g, f),
                      typeof n.UNSAFE_componentWillUpdate == "function" &&
                        n.UNSAFE_componentWillUpdate(a, g, f)),
                    typeof n.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof n.getSnapshotBeforeUpdate == "function" &&
                      (t.flags |= 1024))
                  : (typeof n.componentDidUpdate != "function" ||
                      (i === l.memoizedProps && h === l.memoizedState) ||
                      (t.flags |= 4),
                    typeof n.getSnapshotBeforeUpdate != "function" ||
                      (i === l.memoizedProps && h === l.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = a),
                    (t.memoizedState = g)),
                (n.props = a),
                (n.state = g),
                (n.context = f),
                (a = p))
              : (typeof n.componentDidUpdate != "function" ||
                  (i === l.memoizedProps && h === l.memoizedState) ||
                  (t.flags |= 4),
                typeof n.getSnapshotBeforeUpdate != "function" ||
                  (i === l.memoizedProps && h === l.memoizedState) ||
                  (t.flags |= 1024),
                (a = !1));
          }
          return (
            (n = a),
            rn(l, t),
            (a = (t.flags & 128) !== 0),
            n || a
              ? ((n = t.stateNode),
                (e =
                  a && typeof e.getDerivedStateFromError != "function"
                    ? null
                    : n.render()),
                (t.flags |= 1),
                l !== null && a
                  ? ((t.child = qe(t, l.child, null, u)),
                    (t.child = qe(t, null, e, u)))
                  : Nl(l, t, e, u),
                (t.memoizedState = n.state),
                (l = t.child))
              : (l = Xt(l, t, u)),
            l
          );
        }
        function Bo(l, t, e, a) {
          return (Ne(), (t.flags |= 256), Nl(l, t, e, a), t.child);
        }
        var rc = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function dc(l) {
          return { baseLanes: l, cachePool: As() };
        }
        function mc(l, t, e) {
          return ((l = l !== null ? l.childLanes & ~e : 0), t && (l |= nt), l);
        }
        function qo(l, t, e) {
          var a = t.pendingProps,
            u = !1,
            n = (t.flags & 128) !== 0,
            i;
          if (
            ((i = n) ||
              (i =
                l !== null && l.memoizedState === null
                  ? !1
                  : (Sl.current & 2) !== 0),
            i && ((u = !0), (t.flags &= -129)),
            (i = (t.flags & 32) !== 0),
            (t.flags &= -33),
            l === null)
          ) {
            if (F) {
              if (
                (u ? ce(t) : fe(),
                (l = rl)
                  ? ((l = Kr(l, vt)),
                    (l = l !== null && l.data !== "&" ? l : null),
                    l !== null &&
                      ((t.memoizedState = {
                        dehydrated: l,
                        treeContext:
                          le !== null ? { id: jt, overflow: _t } : null,
                        retryLane: 536870912,
                        hydrationErrors: null,
                      }),
                      (e = vs(l)),
                      (e.return = t),
                      (t.child = e),
                      (Ol = t),
                      (rl = null)))
                  : (l = null),
                l === null)
              )
                throw ee(t);
              return (kc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var c = a.children;
            return (
              (a = a.fallback),
              u
                ? (fe(),
                  (u = t.mode),
                  (c = dn({ mode: "hidden", children: c }, u)),
                  (a = De(a, u, e, null)),
                  (c.return = t),
                  (a.return = t),
                  (c.sibling = a),
                  (t.child = c),
                  (a = t.child),
                  (a.memoizedState = dc(e)),
                  (a.childLanes = mc(l, i, e)),
                  (t.memoizedState = rc),
                  tu(null, a))
                : (ce(t), yc(t, c))
            );
          }
          var f = l.memoizedState;
          if (f !== null && ((c = f.dehydrated), c !== null)) {
            if (n)
              t.flags & 256
                ? (ce(t), (t.flags &= -257), (t = vc(l, t, e)))
                : t.memoizedState !== null
                  ? (fe(), (t.child = l.child), (t.flags |= 128), (t = null))
                  : (fe(),
                    (c = a.fallback),
                    (u = t.mode),
                    (a = dn({ mode: "visible", children: a.children }, u)),
                    (c = De(c, u, e, null)),
                    (c.flags |= 2),
                    (a.return = t),
                    (c.return = t),
                    (a.sibling = c),
                    (t.child = a),
                    qe(t, l.child, null, e),
                    (a = t.child),
                    (a.memoizedState = dc(e)),
                    (a.childLanes = mc(l, i, e)),
                    (t.memoizedState = rc),
                    (t = tu(null, a)));
            else if ((ce(t), kc(c))) {
              if (((i = c.nextSibling && c.nextSibling.dataset), i))
                var v = i.dgst;
              ((i = v),
                (a = Error(m(419))),
                (a.stack = ""),
                (a.digest = i),
                Va({ value: a, source: null, stack: null }),
                (t = vc(l, t, e)));
            } else if (
              (Tl || ia(l, t, e, !1), (i = (e & l.childLanes) !== 0), Tl || i)
            ) {
              if (
                ((i = ol),
                i !== null && ((a = zf(i, e)), a !== 0 && a !== f.retryLane))
              )
                throw ((f.retryLane = a), Oe(l, a), Wl(i, l, a), sc);
              (Wc(c) || xn(), (t = vc(l, t, e)));
            } else
              Wc(c)
                ? ((t.flags |= 192), (t.child = l.child), (t = null))
                : ((l = f.treeContext),
                  (rl = gt(c.nextSibling)),
                  (Ol = t),
                  (F = !0),
                  (te = null),
                  (vt = !1),
                  l !== null && ps(t, l),
                  (t = yc(t, a.children)),
                  (t.flags |= 4096));
            return t;
          }
          return u
            ? (fe(),
              (c = a.fallback),
              (u = t.mode),
              (f = l.child),
              (v = f.sibling),
              (a = Ht(f, { mode: "hidden", children: a.children })),
              (a.subtreeFlags = f.subtreeFlags & 65011712),
              v !== null
                ? (c = Ht(v, c))
                : ((c = De(c, u, e, null)), (c.flags |= 2)),
              (c.return = t),
              (a.return = t),
              (a.sibling = c),
              (t.child = a),
              tu(null, a),
              (a = t.child),
              (c = l.child.memoizedState),
              c === null
                ? (c = dc(e))
                : ((u = c.cachePool),
                  u !== null
                    ? ((f = xl._currentValue),
                      (u = u.parent !== f ? { parent: f, pool: f } : u))
                    : (u = As()),
                  (c = { baseLanes: c.baseLanes | e, cachePool: u })),
              (a.memoizedState = c),
              (a.childLanes = mc(l, i, e)),
              (t.memoizedState = rc),
              tu(l.child, a))
            : (ce(t),
              (e = l.child),
              (l = e.sibling),
              (e = Ht(e, { mode: "visible", children: a.children })),
              (e.return = t),
              (e.sibling = null),
              l !== null &&
                ((i = t.deletions),
                i === null
                  ? ((t.deletions = [l]), (t.flags |= 16))
                  : i.push(l)),
              (t.child = e),
              (t.memoizedState = null),
              e);
        }
        function yc(l, t) {
          return (
            (t = dn({ mode: "visible", children: t }, l.mode)),
            (t.return = l),
            (l.child = t)
          );
        }
        function dn(l, t) {
          return ((l = tt(22, l, null, t)), (l.lanes = 0), l);
        }
        function vc(l, t, e) {
          return (
            qe(t, l.child, null, e),
            (l = yc(t, t.pendingProps.children)),
            (l.flags |= 2),
            (t.memoizedState = null),
            l
          );
        }
        function Yo(l, t, e) {
          l.lanes |= t;
          var a = l.alternate;
          (a !== null && (a.lanes |= t), Di(l.return, t, e));
        }
        function hc(l, t, e, a, u, n) {
          var i = l.memoizedState;
          i === null
            ? (l.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: e,
                tailMode: u,
                treeForkCount: n,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = a),
              (i.tail = e),
              (i.tailMode = u),
              (i.treeForkCount = n));
        }
        function Go(l, t, e) {
          var a = t.pendingProps,
            u = a.revealOrder,
            n = a.tail;
          a = a.children;
          var i = Sl.current,
            c = (i & 2) !== 0;
          if (
            (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
            _(Sl, i),
            Nl(l, t, a, e),
            (a = F ? Za : 0),
            !c && l !== null && (l.flags & 128) !== 0)
          )
            l: for (l = t.child; l !== null; ) {
              if (l.tag === 13) l.memoizedState !== null && Yo(l, e, t);
              else if (l.tag === 19) Yo(l, e, t);
              else if (l.child !== null) {
                ((l.child.return = l), (l = l.child));
                continue;
              }
              if (l === t) break l;
              for (; l.sibling === null; ) {
                if (l.return === null || l.return === t) break l;
                l = l.return;
              }
              ((l.sibling.return = l.return), (l = l.sibling));
            }
          switch (u) {
            case "forwards":
              for (e = t.child, u = null; e !== null; )
                ((l = e.alternate),
                  l !== null && Pu(l) === null && (u = e),
                  (e = e.sibling));
              ((e = u),
                e === null
                  ? ((u = t.child), (t.child = null))
                  : ((u = e.sibling), (e.sibling = null)),
                hc(t, !1, u, e, n, a));
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (e = null, u = t.child, t.child = null; u !== null; ) {
                if (((l = u.alternate), l !== null && Pu(l) === null)) {
                  t.child = u;
                  break;
                }
                ((l = u.sibling), (u.sibling = e), (e = u), (u = l));
              }
              hc(t, !0, e, null, n, a);
              break;
            case "together":
              hc(t, !1, null, null, void 0, a);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function Xt(l, t, e) {
          if (
            (l !== null && (t.dependencies = l.dependencies),
            (re |= t.lanes),
            (e & t.childLanes) === 0)
          )
            if (l !== null) {
              if ((ia(l, t, e, !1), (e & t.childLanes) === 0)) return null;
            } else return null;
          if (l !== null && t.child !== l.child) throw Error(m(153));
          if (t.child !== null) {
            for (
              l = t.child, e = Ht(l, l.pendingProps), t.child = e, e.return = t;
              l.sibling !== null;
            )
              ((l = l.sibling),
                (e = e.sibling = Ht(l, l.pendingProps)),
                (e.return = t));
            e.sibling = null;
          }
          return t.child;
        }
        function gc(l, t) {
          return (l.lanes & t) !== 0
            ? !0
            : ((l = l.dependencies), !!(l !== null && Ku(l)));
        }
        function Fm(l, t, e) {
          switch (t.tag) {
            case 3:
              (Bl(t, t.stateNode.containerInfo),
                ae(t, xl, l.memoizedState.cache),
                Ne());
              break;
            case 27:
            case 5:
              _a(t);
              break;
            case 4:
              Bl(t, t.stateNode.containerInfo);
              break;
            case 10:
              ae(t, t.type, t.memoizedProps.value);
              break;
            case 31:
              if (t.memoizedState !== null)
                return ((t.flags |= 128), Zi(t), null);
              break;
            case 13:
              var a = t.memoizedState;
              if (a !== null)
                return a.dehydrated !== null
                  ? (ce(t), (t.flags |= 128), null)
                  : (e & t.child.childLanes) !== 0
                    ? qo(l, t, e)
                    : (ce(t), (l = Xt(l, t, e)), l !== null ? l.sibling : null);
              ce(t);
              break;
            case 19:
              var u = (l.flags & 128) !== 0;
              if (
                ((a = (e & t.childLanes) !== 0),
                a || (ia(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
                u)
              ) {
                if (a) return Go(l, t, e);
                t.flags |= 128;
              }
              if (
                ((u = t.memoizedState),
                u !== null &&
                  ((u.rendering = null),
                  (u.tail = null),
                  (u.lastEffect = null)),
                _(Sl, Sl.current),
                a)
              )
                break;
              return null;
            case 22:
              return ((t.lanes = 0), No(l, t, e, t.pendingProps));
            case 24:
              ae(t, xl, l.memoizedState.cache);
          }
          return Xt(l, t, e);
        }
        function Qo(l, t, e) {
          if (l !== null)
            if (l.memoizedProps !== t.pendingProps) Tl = !0;
            else {
              if (!gc(l, e) && (t.flags & 128) === 0)
                return ((Tl = !1), Fm(l, t, e));
              Tl = (l.flags & 131072) !== 0;
            }
          else
            ((Tl = !1), F && (t.flags & 1048576) !== 0 && gs(t, Za, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              l: {
                var a = t.pendingProps;
                if (
                  ((l = He(t.elementType)),
                  (t.type = l),
                  typeof l == "function")
                )
                  zi(l)
                    ? ((a = Ge(l, a)), (t.tag = 1), (t = Ho(null, t, l, a, e)))
                    : ((t.tag = 0), (t = oc(null, t, l, a, e)));
                else {
                  if (l != null) {
                    var u = l.$typeof;
                    if (u === ft) {
                      ((t.tag = 11), (t = Mo(null, t, l, a, e)));
                      break l;
                    } else if (u === $) {
                      ((t.tag = 14), (t = Oo(null, t, l, a, e)));
                      break l;
                    }
                  }
                  throw ((t = Nt(l) || l), Error(m(306, t, "")));
                }
              }
              return t;
            case 0:
              return oc(l, t, t.type, t.pendingProps, e);
            case 1:
              return (
                (a = t.type),
                (u = Ge(a, t.pendingProps)),
                Ho(l, t, a, u, e)
              );
            case 3:
              l: {
                if ((Bl(t, t.stateNode.containerInfo), l === null))
                  throw Error(m(387));
                a = t.pendingProps;
                var n = t.memoizedState;
                ((u = n.element), qi(l, t), $a(t, a, null, e));
                var i = t.memoizedState;
                if (
                  ((a = i.cache),
                  ae(t, xl, a),
                  a !== n.cache && Ni(t, [xl], e, !0),
                  ka(),
                  (a = i.element),
                  n.isDehydrated)
                )
                  if (
                    ((n = { element: a, isDehydrated: !1, cache: i.cache }),
                    (t.updateQueue.baseState = n),
                    (t.memoizedState = n),
                    t.flags & 256)
                  ) {
                    t = Bo(l, t, a, e);
                    break l;
                  } else if (a !== u) {
                    ((u = dt(Error(m(424)), t)), Va(u), (t = Bo(l, t, a, e)));
                    break l;
                  } else {
                    switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                      case 9:
                        l = l.body;
                        break;
                      default:
                        l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
                    }
                    for (
                      rl = gt(l.firstChild),
                        Ol = t,
                        F = !0,
                        te = null,
                        vt = !0,
                        e = Ds(t, null, a, e),
                        t.child = e;
                      e;
                    )
                      ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
                  }
                else {
                  if ((Ne(), a === u)) {
                    t = Xt(l, t, e);
                    break l;
                  }
                  Nl(l, t, a, e);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                rn(l, t),
                l === null
                  ? (e = Fr(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = e)
                    : F ||
                      ((e = t.type),
                      (l = t.pendingProps),
                      (a = Mn(K.current).createElement(e)),
                      (a[Ml] = t),
                      (a[Zl] = l),
                      Ul(a, e, l),
                      jl(a),
                      (t.stateNode = a))
                  : (t.memoizedState = Fr(
                      t.type,
                      l.memoizedProps,
                      t.pendingProps,
                      l.memoizedState,
                    )),
                null
              );
            case 27:
              return (
                _a(t),
                l === null &&
                  F &&
                  ((a = t.stateNode = Wr(t.type, t.pendingProps, K.current)),
                  (Ol = t),
                  (vt = !0),
                  (u = rl),
                  he(t.type) ? (($c = u), (rl = gt(a.firstChild))) : (rl = u)),
                Nl(l, t, t.pendingProps.children, e),
                rn(l, t),
                l === null && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                l === null &&
                  F &&
                  ((u = a = rl) &&
                    ((a = _y(a, t.type, t.pendingProps, vt)),
                    a !== null
                      ? ((t.stateNode = a),
                        (Ol = t),
                        (rl = gt(a.firstChild)),
                        (vt = !1),
                        (u = !0))
                      : (u = !1)),
                  u || ee(t)),
                _a(t),
                (u = t.type),
                (n = t.pendingProps),
                (i = l !== null ? l.memoizedProps : null),
                (a = n.children),
                Kc(u, n)
                  ? (a = null)
                  : i !== null && Kc(u, i) && (t.flags |= 32),
                t.memoizedState !== null &&
                  ((u = Li(l, t, Zm, null, null, e)), (hu._currentValue = u)),
                rn(l, t),
                Nl(l, t, a, e),
                t.child
              );
            case 6:
              return (
                l === null &&
                  F &&
                  ((l = e = rl) &&
                    ((e = My(e, t.pendingProps, vt)),
                    e !== null
                      ? ((t.stateNode = e), (Ol = t), (rl = null), (l = !0))
                      : (l = !1)),
                  l || ee(t)),
                null
              );
            case 13:
              return qo(l, t, e);
            case 4:
              return (
                Bl(t, t.stateNode.containerInfo),
                (a = t.pendingProps),
                l === null ? (t.child = qe(t, null, a, e)) : Nl(l, t, a, e),
                t.child
              );
            case 11:
              return Mo(l, t, t.type, t.pendingProps, e);
            case 7:
              return (Nl(l, t, t.pendingProps, e), t.child);
            case 8:
              return (Nl(l, t, t.pendingProps.children, e), t.child);
            case 12:
              return (Nl(l, t, t.pendingProps.children, e), t.child);
            case 10:
              return (
                (a = t.pendingProps),
                ae(t, t.type, a.value),
                Nl(l, t, a.children, e),
                t.child
              );
            case 9:
              return (
                (u = t.type._context),
                (a = t.pendingProps.children),
                Ce(t),
                (u = Dl(u)),
                (a = a(u)),
                (t.flags |= 1),
                Nl(l, t, a, e),
                t.child
              );
            case 14:
              return Oo(l, t, t.type, t.pendingProps, e);
            case 15:
              return Do(l, t, t.type, t.pendingProps, e);
            case 19:
              return Go(l, t, e);
            case 31:
              return $m(l, t, e);
            case 22:
              return No(l, t, e, t.pendingProps);
            case 24:
              return (
                Ce(t),
                (a = Dl(xl)),
                l === null
                  ? ((u = Ri()),
                    u === null &&
                      ((u = ol),
                      (n = Ui()),
                      (u.pooledCache = n),
                      n.refCount++,
                      n !== null && (u.pooledCacheLanes |= e),
                      (u = n)),
                    (t.memoizedState = { parent: a, cache: u }),
                    Bi(t),
                    ae(t, xl, u))
                  : ((l.lanes & e) !== 0 &&
                      (qi(l, t), $a(t, null, null, e), ka()),
                    (u = l.memoizedState),
                    (n = t.memoizedState),
                    u.parent !== a
                      ? ((u = { parent: a, cache: a }),
                        (t.memoizedState = u),
                        t.lanes === 0 &&
                          (t.memoizedState = t.updateQueue.baseState = u),
                        ae(t, xl, a))
                      : ((a = n.cache),
                        ae(t, xl, a),
                        a !== u.cache && Ni(t, [xl], e, !0))),
                Nl(l, t, t.pendingProps.children, e),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(m(156, t.tag));
        }
        function Zt(l) {
          l.flags |= 4;
        }
        function pc(l, t, e, a, u) {
          if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
            if (((l.flags |= 16777216), (u & 335544128) === u))
              if (l.stateNode.complete) l.flags |= 8192;
              else if (mr()) l.flags |= 8192;
              else throw ((Be = ku), Hi);
          } else l.flags &= -16777217;
        }
        function Xo(l, t) {
          if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
          else if (((l.flags |= 16777216), !ed(t)))
            if (mr()) l.flags |= 8192;
            else throw ((Be = ku), Hi);
        }
        function mn(l, t) {
          (t !== null && (l.flags |= 4),
            l.flags & 16384 &&
              ((t = l.tag !== 22 ? Sf() : 536870912),
              (l.lanes |= t),
              (pa |= t)));
        }
        function eu(l, t) {
          if (!F)
            switch (l.tailMode) {
              case "hidden":
                t = l.tail;
                for (var e = null; t !== null; )
                  (t.alternate !== null && (e = t), (t = t.sibling));
                e === null ? (l.tail = null) : (e.sibling = null);
                break;
              case "collapsed":
                e = l.tail;
                for (var a = null; e !== null; )
                  (e.alternate !== null && (a = e), (e = e.sibling));
                a === null
                  ? t || l.tail === null
                    ? (l.tail = null)
                    : (l.tail.sibling = null)
                  : (a.sibling = null);
            }
        }
        function dl(l) {
          var t = l.alternate !== null && l.alternate.child === l.child,
            e = 0,
            a = 0;
          if (t)
            for (var u = l.child; u !== null; )
              ((e |= u.lanes | u.childLanes),
                (a |= u.subtreeFlags & 65011712),
                (a |= u.flags & 65011712),
                (u.return = l),
                (u = u.sibling));
          else
            for (u = l.child; u !== null; )
              ((e |= u.lanes | u.childLanes),
                (a |= u.subtreeFlags),
                (a |= u.flags),
                (u.return = l),
                (u = u.sibling));
          return ((l.subtreeFlags |= a), (l.childLanes = e), t);
        }
        function Im(l, t, e) {
          var a = t.pendingProps;
          switch ((ji(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return (dl(t), null);
            case 1:
              return (dl(t), null);
            case 3:
              return (
                (e = t.stateNode),
                (a = null),
                l !== null && (a = l.memoizedState.cache),
                t.memoizedState.cache !== a && (t.flags |= 2048),
                Yt(xl),
                pl(),
                e.pendingContext &&
                  ((e.context = e.pendingContext), (e.pendingContext = null)),
                (l === null || l.child === null) &&
                  (na(t)
                    ? Zt(t)
                    : l === null ||
                      (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                      ((t.flags |= 1024), Mi())),
                dl(t),
                null
              );
            case 26:
              var u = t.type,
                n = t.memoizedState;
              return (
                l === null
                  ? (Zt(t),
                    n !== null
                      ? (dl(t), Xo(t, n))
                      : (dl(t), pc(t, u, null, a, e)))
                  : n
                    ? n !== l.memoizedState
                      ? (Zt(t), dl(t), Xo(t, n))
                      : (dl(t), (t.flags &= -16777217))
                    : ((l = l.memoizedProps),
                      l !== a && Zt(t),
                      dl(t),
                      pc(t, u, l, a, e)),
                null
              );
            case 27:
              if (
                (Tu(t),
                (e = K.current),
                (u = t.type),
                l !== null && t.stateNode != null)
              )
                l.memoizedProps !== a && Zt(t);
              else {
                if (!a) {
                  if (t.stateNode === null) throw Error(m(166));
                  return (dl(t), null);
                }
                ((l = D.current),
                  na(t)
                    ? Ss(t)
                    : ((l = Wr(u, a, e)), (t.stateNode = l), Zt(t)));
              }
              return (dl(t), null);
            case 5:
              if ((Tu(t), (u = t.type), l !== null && t.stateNode != null))
                l.memoizedProps !== a && Zt(t);
              else {
                if (!a) {
                  if (t.stateNode === null) throw Error(m(166));
                  return (dl(t), null);
                }
                if (((n = D.current), na(t))) Ss(t);
                else {
                  var i = Mn(K.current);
                  switch (n) {
                    case 1:
                      n = i.createElementNS("http://www.w3.org/2000/svg", u);
                      break;
                    case 2:
                      n = i.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        u,
                      );
                      break;
                    default:
                      switch (u) {
                        case "svg":
                          n = i.createElementNS(
                            "http://www.w3.org/2000/svg",
                            u,
                          );
                          break;
                        case "math":
                          n = i.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            u,
                          );
                          break;
                        case "script":
                          ((n = i.createElement("div")),
                            (n.innerHTML = "<script><\/script>"),
                            (n = n.removeChild(n.firstChild)));
                          break;
                        case "select":
                          ((n =
                            typeof a.is == "string"
                              ? i.createElement("select", { is: a.is })
                              : i.createElement("select")),
                            a.multiple
                              ? (n.multiple = !0)
                              : a.size && (n.size = a.size));
                          break;
                        default:
                          n =
                            typeof a.is == "string"
                              ? i.createElement(u, { is: a.is })
                              : i.createElement(u);
                      }
                  }
                  ((n[Ml] = t), (n[Zl] = a));
                  l: for (i = t.child; i !== null; ) {
                    if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
                    else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                      ((i.child.return = i), (i = i.child));
                      continue;
                    }
                    if (i === t) break l;
                    for (; i.sibling === null; ) {
                      if (i.return === null || i.return === t) break l;
                      i = i.return;
                    }
                    ((i.sibling.return = i.return), (i = i.sibling));
                  }
                  t.stateNode = n;
                  l: switch ((Ul(n, u, a), u)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a = !!a.autoFocus;
                      break l;
                    case "img":
                      a = !0;
                      break l;
                    default:
                      a = !1;
                  }
                  a && Zt(t);
                }
              }
              return (
                dl(t),
                pc(
                  t,
                  t.type,
                  l === null ? null : l.memoizedProps,
                  t.pendingProps,
                  e,
                ),
                null
              );
            case 6:
              if (l && t.stateNode != null) l.memoizedProps !== a && Zt(t);
              else {
                if (typeof a != "string" && t.stateNode === null)
                  throw Error(m(166));
                if (((l = K.current), na(t))) {
                  if (
                    ((l = t.stateNode),
                    (e = t.memoizedProps),
                    (a = null),
                    (u = Ol),
                    u !== null)
                  )
                    switch (u.tag) {
                      case 27:
                      case 5:
                        a = u.memoizedProps;
                    }
                  ((l[Ml] = t),
                    (l = !!(
                      l.nodeValue === e ||
                      (a !== null && a.suppressHydrationWarning === !0) ||
                      qr(l.nodeValue, e)
                    )),
                    l || ee(t, !0));
                } else
                  ((l = Mn(l).createTextNode(a)),
                    (l[Ml] = t),
                    (t.stateNode = l));
              }
              return (dl(t), null);
            case 31:
              if (
                ((e = t.memoizedState), l === null || l.memoizedState !== null)
              ) {
                if (((a = na(t)), e !== null)) {
                  if (l === null) {
                    if (!a) throw Error(m(318));
                    if (
                      ((l = t.memoizedState),
                      (l = l !== null ? l.dehydrated : null),
                      !l)
                    )
                      throw Error(m(557));
                    l[Ml] = t;
                  } else
                    (Ne(),
                      (t.flags & 128) === 0 && (t.memoizedState = null),
                      (t.flags |= 4));
                  (dl(t), (l = !1));
                } else
                  ((e = Mi()),
                    l !== null &&
                      l.memoizedState !== null &&
                      (l.memoizedState.hydrationErrors = e),
                    (l = !0));
                if (!l) return t.flags & 256 ? (at(t), t) : (at(t), null);
                if ((t.flags & 128) !== 0) throw Error(m(558));
              }
              return (dl(t), null);
            case 13:
              if (
                ((a = t.memoizedState),
                l === null ||
                  (l.memoizedState !== null &&
                    l.memoizedState.dehydrated !== null))
              ) {
                if (((u = na(t)), a !== null && a.dehydrated !== null)) {
                  if (l === null) {
                    if (!u) throw Error(m(318));
                    if (
                      ((u = t.memoizedState),
                      (u = u !== null ? u.dehydrated : null),
                      !u)
                    )
                      throw Error(m(317));
                    u[Ml] = t;
                  } else
                    (Ne(),
                      (t.flags & 128) === 0 && (t.memoizedState = null),
                      (t.flags |= 4));
                  (dl(t), (u = !1));
                } else
                  ((u = Mi()),
                    l !== null &&
                      l.memoizedState !== null &&
                      (l.memoizedState.hydrationErrors = u),
                    (u = !0));
                if (!u) return t.flags & 256 ? (at(t), t) : (at(t), null);
              }
              return (
                at(t),
                (t.flags & 128) !== 0
                  ? ((t.lanes = e), t)
                  : ((e = a !== null),
                    (l = l !== null && l.memoizedState !== null),
                    e &&
                      ((a = t.child),
                      (u = null),
                      a.alternate !== null &&
                        a.alternate.memoizedState !== null &&
                        a.alternate.memoizedState.cachePool !== null &&
                        (u = a.alternate.memoizedState.cachePool.pool),
                      (n = null),
                      a.memoizedState !== null &&
                        a.memoizedState.cachePool !== null &&
                        (n = a.memoizedState.cachePool.pool),
                      n !== u && (a.flags |= 2048)),
                    e !== l && e && (t.child.flags |= 8192),
                    mn(t, t.updateQueue),
                    dl(t),
                    null)
              );
            case 4:
              return (
                pl(),
                l === null && Qc(t.stateNode.containerInfo),
                dl(t),
                null
              );
            case 10:
              return (Yt(t.type), dl(t), null);
            case 19:
              if ((z(Sl), (a = t.memoizedState), a === null))
                return (dl(t), null);
              if (((u = (t.flags & 128) !== 0), (n = a.rendering), n === null))
                if (u) eu(a, !1);
                else {
                  if (gl !== 0 || (l !== null && (l.flags & 128) !== 0))
                    for (l = t.child; l !== null; ) {
                      if (((n = Pu(l)), n !== null)) {
                        for (
                          t.flags |= 128,
                            eu(a, !1),
                            l = n.updateQueue,
                            t.updateQueue = l,
                            mn(t, l),
                            t.subtreeFlags = 0,
                            l = e,
                            e = t.child;
                          e !== null;
                        )
                          (ys(e, l), (e = e.sibling));
                        return (
                          _(Sl, (Sl.current & 1) | 2),
                          F && Bt(t, a.treeForkCount),
                          t.child
                        );
                      }
                      l = l.sibling;
                    }
                  a.tail !== null &&
                    Fl() > pn &&
                    ((t.flags |= 128),
                    (u = !0),
                    eu(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!u)
                  if (((l = Pu(n)), l !== null)) {
                    if (
                      ((t.flags |= 128),
                      (u = !0),
                      (l = l.updateQueue),
                      (t.updateQueue = l),
                      mn(t, l),
                      eu(a, !0),
                      a.tail === null &&
                        a.tailMode === "hidden" &&
                        !n.alternate &&
                        !F)
                    )
                      return (dl(t), null);
                  } else
                    2 * Fl() - a.renderingStartTime > pn &&
                      e !== 536870912 &&
                      ((t.flags |= 128),
                      (u = !0),
                      eu(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((n.sibling = t.child), (t.child = n))
                  : ((l = a.last),
                    l !== null ? (l.sibling = n) : (t.child = n),
                    (a.last = n));
              }
              return a.tail !== null
                ? ((l = a.tail),
                  (a.rendering = l),
                  (a.tail = l.sibling),
                  (a.renderingStartTime = Fl()),
                  (l.sibling = null),
                  (e = Sl.current),
                  _(Sl, u ? (e & 1) | 2 : e & 1),
                  F && Bt(t, a.treeForkCount),
                  l)
                : (dl(t), null);
            case 22:
            case 23:
              return (
                at(t),
                Xi(),
                (a = t.memoizedState !== null),
                l !== null
                  ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
                  : a && (t.flags |= 8192),
                a
                  ? (e & 536870912) !== 0 &&
                    (t.flags & 128) === 0 &&
                    (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                  : dl(t),
                (e = t.updateQueue),
                e !== null && mn(t, e.retryQueue),
                (e = null),
                l !== null &&
                  l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (e = l.memoizedState.cachePool.pool),
                (a = null),
                t.memoizedState !== null &&
                  t.memoizedState.cachePool !== null &&
                  (a = t.memoizedState.cachePool.pool),
                a !== e && (t.flags |= 2048),
                l !== null && z(Re),
                null
              );
            case 24:
              return (
                (e = null),
                l !== null && (e = l.memoizedState.cache),
                t.memoizedState.cache !== e && (t.flags |= 2048),
                Yt(xl),
                dl(t),
                null
              );
            case 25:
              return null;
            case 30:
              return null;
          }
          throw Error(m(156, t.tag));
        }
        function Pm(l, t) {
          switch ((ji(t), t.tag)) {
            case 1:
              return (
                (l = t.flags),
                l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
              );
            case 3:
              return (
                Yt(xl),
                pl(),
                (l = t.flags),
                (l & 65536) !== 0 && (l & 128) === 0
                  ? ((t.flags = (l & -65537) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return (Tu(t), null);
            case 31:
              if (t.memoizedState !== null) {
                if ((at(t), t.alternate === null)) throw Error(m(340));
                Ne();
              }
              return (
                (l = t.flags),
                l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
              );
            case 13:
              if (
                (at(t),
                (l = t.memoizedState),
                l !== null && l.dehydrated !== null)
              ) {
                if (t.alternate === null) throw Error(m(340));
                Ne();
              }
              return (
                (l = t.flags),
                l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
              );
            case 19:
              return (z(Sl), null);
            case 4:
              return (pl(), null);
            case 10:
              return (Yt(t.type), null);
            case 22:
            case 23:
              return (
                at(t),
                Xi(),
                l !== null && z(Re),
                (l = t.flags),
                l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
              );
            case 24:
              return (Yt(xl), null);
            case 25:
              return null;
            default:
              return null;
          }
        }
        function Zo(l, t) {
          switch ((ji(t), t.tag)) {
            case 3:
              (Yt(xl), pl());
              break;
            case 26:
            case 27:
            case 5:
              Tu(t);
              break;
            case 4:
              pl();
              break;
            case 31:
              t.memoizedState !== null && at(t);
              break;
            case 13:
              at(t);
              break;
            case 19:
              z(Sl);
              break;
            case 10:
              Yt(t.type);
              break;
            case 22:
            case 23:
              (at(t), Xi(), l !== null && z(Re));
              break;
            case 24:
              Yt(xl);
          }
        }
        function au(l, t) {
          try {
            var e = t.updateQueue,
              a = e !== null ? e.lastEffect : null;
            if (a !== null) {
              var u = a.next;
              e = u;
              do {
                if ((e.tag & l) === l) {
                  a = void 0;
                  var n = e.create,
                    i = e.inst;
                  ((a = n()), (i.destroy = a));
                }
                e = e.next;
              } while (e !== u);
            }
          } catch (c) {
            ul(t, t.return, c);
          }
        }
        function se(l, t, e) {
          try {
            var a = t.updateQueue,
              u = a !== null ? a.lastEffect : null;
            if (u !== null) {
              var n = u.next;
              a = n;
              do {
                if ((a.tag & l) === l) {
                  var i = a.inst,
                    c = i.destroy;
                  if (c !== void 0) {
                    ((i.destroy = void 0), (u = t));
                    var f = e,
                      v = c;
                    try {
                      v();
                    } catch (p) {
                      ul(u, f, p);
                    }
                  }
                }
                a = a.next;
              } while (a !== n);
            }
          } catch (p) {
            ul(t, t.return, p);
          }
        }
        function Vo(l) {
          var t = l.updateQueue;
          if (t !== null) {
            var e = l.stateNode;
            try {
              Us(t, e);
            } catch (a) {
              ul(l, l.return, a);
            }
          }
        }
        function Lo(l, t, e) {
          ((e.props = Ge(l.type, l.memoizedProps)),
            (e.state = l.memoizedState));
          try {
            e.componentWillUnmount();
          } catch (a) {
            ul(l, t, a);
          }
        }
        function uu(l, t) {
          try {
            var e = l.ref;
            if (e !== null) {
              switch (l.tag) {
                case 26:
                case 27:
                case 5:
                  var a = l.stateNode;
                  break;
                case 30:
                  a = l.stateNode;
                  break;
                default:
                  a = l.stateNode;
              }
              typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
            }
          } catch (u) {
            ul(l, t, u);
          }
        }
        function Mt(l, t) {
          var e = l.ref,
            a = l.refCleanup;
          if (e !== null)
            if (typeof a == "function")
              try {
                a();
              } catch (u) {
                ul(l, t, u);
              } finally {
                ((l.refCleanup = null),
                  (l = l.alternate),
                  l != null && (l.refCleanup = null));
              }
            else if (typeof e == "function")
              try {
                e(null);
              } catch (u) {
                ul(l, t, u);
              }
            else e.current = null;
        }
        function Ko(l) {
          var t = l.type,
            e = l.memoizedProps,
            a = l.stateNode;
          try {
            l: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e.autoFocus && a.focus();
                break l;
              case "img":
                e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
            }
          } catch (u) {
            ul(l, l.return, u);
          }
        }
        function Sc(l, t, e) {
          try {
            var a = l.stateNode;
            (xy(a, l.type, e, t), (a[Zl] = t));
          } catch (u) {
            ul(l, l.return, u);
          }
        }
        function Jo(l) {
          return (
            l.tag === 5 ||
            l.tag === 3 ||
            l.tag === 26 ||
            (l.tag === 27 && he(l.type)) ||
            l.tag === 4
          );
        }
        function bc(l) {
          l: for (;;) {
            for (; l.sibling === null; ) {
              if (l.return === null || Jo(l.return)) return null;
              l = l.return;
            }
            for (
              l.sibling.return = l.return, l = l.sibling;
              l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
            ) {
              if (
                (l.tag === 27 && he(l.type)) ||
                l.flags & 2 ||
                l.child === null ||
                l.tag === 4
              )
                continue l;
              ((l.child.return = l), (l = l.child));
            }
            if (!(l.flags & 2)) return l.stateNode;
          }
        }
        function xc(l, t, e) {
          var a = l.tag;
          if (a === 5 || a === 6)
            ((l = l.stateNode),
              t
                ? (e.nodeType === 9
                    ? e.body
                    : e.nodeName === "HTML"
                      ? e.ownerDocument.body
                      : e
                  ).insertBefore(l, t)
                : ((t =
                    e.nodeType === 9
                      ? e.body
                      : e.nodeName === "HTML"
                        ? e.ownerDocument.body
                        : e),
                  t.appendChild(l),
                  (e = e._reactRootContainer),
                  e != null || t.onclick !== null || (t.onclick = Ct)));
          else if (
            a !== 4 &&
            (a === 27 && he(l.type) && ((e = l.stateNode), (t = null)),
            (l = l.child),
            l !== null)
          )
            for (xc(l, t, e), l = l.sibling; l !== null; )
              (xc(l, t, e), (l = l.sibling));
        }
        function yn(l, t, e) {
          var a = l.tag;
          if (a === 5 || a === 6)
            ((l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l));
          else if (
            a !== 4 &&
            (a === 27 && he(l.type) && (e = l.stateNode),
            (l = l.child),
            l !== null)
          )
            for (yn(l, t, e), l = l.sibling; l !== null; )
              (yn(l, t, e), (l = l.sibling));
        }
        function wo(l) {
          var t = l.stateNode,
            e = l.memoizedProps;
          try {
            for (var a = l.type, u = t.attributes; u.length; )
              t.removeAttributeNode(u[0]);
            (Ul(t, a, e), (t[Ml] = l), (t[Zl] = e));
          } catch (n) {
            ul(l, l.return, n);
          }
        }
        var Vt = !1,
          Al = !1,
          zc = !1,
          Wo = typeof WeakSet == "function" ? WeakSet : Set,
          _l = null;
        function ly(l, t) {
          if (((l = l.containerInfo), (Vc = Hn), (l = ns(l)), vi(l))) {
            if ("selectionStart" in l)
              var e = { start: l.selectionStart, end: l.selectionEnd };
            else
              l: {
                e = ((e = l.ownerDocument) && e.defaultView) || window;
                var a = e.getSelection && e.getSelection();
                if (a && a.rangeCount !== 0) {
                  e = a.anchorNode;
                  var u = a.anchorOffset,
                    n = a.focusNode;
                  a = a.focusOffset;
                  try {
                    (e.nodeType, n.nodeType);
                  } catch {
                    e = null;
                    break l;
                  }
                  var i = 0,
                    c = -1,
                    f = -1,
                    v = 0,
                    p = 0,
                    x = l,
                    h = null;
                  t: for (;;) {
                    for (
                      var g;
                      x !== e || (u !== 0 && x.nodeType !== 3) || (c = i + u),
                        x !== n || (a !== 0 && x.nodeType !== 3) || (f = i + a),
                        x.nodeType === 3 && (i += x.nodeValue.length),
                        (g = x.firstChild) !== null;
                    )
                      ((h = x), (x = g));
                    for (;;) {
                      if (x === l) break t;
                      if (
                        (h === e && ++v === u && (c = i),
                        h === n && ++p === a && (f = i),
                        (g = x.nextSibling) !== null)
                      )
                        break;
                      ((x = h), (h = x.parentNode));
                    }
                    x = g;
                  }
                  e = c === -1 || f === -1 ? null : { start: c, end: f };
                } else e = null;
              }
            e = e || { start: 0, end: 0 };
          } else e = null;
          for (
            Lc = { focusedElem: l, selectionRange: e }, Hn = !1, _l = t;
            _l !== null;
          )
            if (
              ((t = _l),
              (l = t.child),
              (t.subtreeFlags & 1028) !== 0 && l !== null)
            )
              ((l.return = t), (_l = l));
            else
              for (; _l !== null; ) {
                switch (((t = _l), (n = t.alternate), (l = t.flags), t.tag)) {
                  case 0:
                    if (
                      (l & 4) !== 0 &&
                      ((l = t.updateQueue),
                      (l = l !== null ? l.events : null),
                      l !== null)
                    )
                      for (e = 0; e < l.length; e++)
                        ((u = l[e]), (u.ref.impl = u.nextImpl));
                    break;
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if ((l & 1024) !== 0 && n !== null) {
                      ((l = void 0),
                        (e = t),
                        (u = n.memoizedProps),
                        (n = n.memoizedState),
                        (a = e.stateNode));
                      try {
                        var M = Ge(e.type, u);
                        ((l = a.getSnapshotBeforeUpdate(M, n)),
                          (a.__reactInternalSnapshotBeforeUpdate = l));
                      } catch (q) {
                        ul(e, e.return, q);
                      }
                    }
                    break;
                  case 3:
                    if ((l & 1024) !== 0) {
                      if (
                        ((l = t.stateNode.containerInfo),
                        (e = l.nodeType),
                        e === 9)
                      )
                        wc(l);
                      else if (e === 1)
                        switch (l.nodeName) {
                          case "HEAD":
                          case "HTML":
                          case "BODY":
                            wc(l);
                            break;
                          default:
                            l.textContent = "";
                        }
                    }
                    break;
                  case 5:
                  case 26:
                  case 27:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    if ((l & 1024) !== 0) throw Error(m(163));
                }
                if (((l = t.sibling), l !== null)) {
                  ((l.return = t.return), (_l = l));
                  break;
                }
                _l = t.return;
              }
        }
        function ko(l, t, e) {
          var a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (Kt(l, e), a & 4 && au(5, e));
              break;
            case 1:
              if ((Kt(l, e), a & 4))
                if (((l = e.stateNode), t === null))
                  try {
                    l.componentDidMount();
                  } catch (i) {
                    ul(e, e.return, i);
                  }
                else {
                  var u = Ge(e.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    l.componentDidUpdate(
                      u,
                      t,
                      l.__reactInternalSnapshotBeforeUpdate,
                    );
                  } catch (i) {
                    ul(e, e.return, i);
                  }
                }
              (a & 64 && Vo(e), a & 512 && uu(e, e.return));
              break;
            case 3:
              if ((Kt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
                if (((t = null), e.child !== null))
                  switch (e.child.tag) {
                    case 27:
                    case 5:
                      t = e.child.stateNode;
                      break;
                    case 1:
                      t = e.child.stateNode;
                  }
                try {
                  Us(l, t);
                } catch (i) {
                  ul(e, e.return, i);
                }
              }
              break;
            case 27:
              t === null && a & 4 && wo(e);
            case 26:
            case 5:
              (Kt(l, e),
                t === null && a & 4 && Ko(e),
                a & 512 && uu(e, e.return));
              break;
            case 12:
              Kt(l, e);
              break;
            case 31:
              (Kt(l, e), a & 4 && Io(l, e));
              break;
            case 13:
              (Kt(l, e),
                a & 4 && Po(l, e),
                a & 64 &&
                  ((l = e.memoizedState),
                  l !== null &&
                    ((l = l.dehydrated),
                    l !== null && ((e = sy.bind(null, e)), Oy(l, e)))));
              break;
            case 22:
              if (((a = e.memoizedState !== null || Vt), !a)) {
                ((t = (t !== null && t.memoizedState !== null) || Al),
                  (u = Vt));
                var n = Al;
                ((Vt = a),
                  (Al = t) && !n
                    ? Jt(l, e, (e.subtreeFlags & 8772) !== 0)
                    : Kt(l, e),
                  (Vt = u),
                  (Al = n));
              }
              break;
            case 30:
              break;
            default:
              Kt(l, e);
          }
        }
        function $o(l) {
          var t = l.alternate;
          (t !== null && ((l.alternate = null), $o(t)),
            (l.child = null),
            (l.deletions = null),
            (l.sibling = null),
            l.tag === 5 && ((t = l.stateNode), t !== null && In(t)),
            (l.stateNode = null),
            (l.return = null),
            (l.dependencies = null),
            (l.memoizedProps = null),
            (l.memoizedState = null),
            (l.pendingProps = null),
            (l.stateNode = null),
            (l.updateQueue = null));
        }
        var yl = null,
          Ll = !1;
        function Lt(l, t, e) {
          for (e = e.child; e !== null; ) (Fo(l, t, e), (e = e.sibling));
        }
        function Fo(l, t, e) {
          if (Il && typeof Il.onCommitFiberUnmount == "function")
            try {
              Il.onCommitFiberUnmount(Ma, e);
            } catch {}
          switch (e.tag) {
            case 26:
              (Al || Mt(e, t),
                Lt(l, t, e),
                e.memoizedState
                  ? e.memoizedState.count--
                  : e.stateNode &&
                    ((e = e.stateNode), e.parentNode.removeChild(e)));
              break;
            case 27:
              Al || Mt(e, t);
              var a = yl,
                u = Ll;
              (he(e.type) && ((yl = e.stateNode), (Ll = !1)),
                Lt(l, t, e),
                mu(e.stateNode),
                (yl = a),
                (Ll = u));
              break;
            case 5:
              Al || Mt(e, t);
            case 6:
              if (
                ((a = yl),
                (u = Ll),
                (yl = null),
                Lt(l, t, e),
                (yl = a),
                (Ll = u),
                yl !== null)
              )
                if (Ll)
                  try {
                    (yl.nodeType === 9
                      ? yl.body
                      : yl.nodeName === "HTML"
                        ? yl.ownerDocument.body
                        : yl
                    ).removeChild(e.stateNode);
                  } catch (n) {
                    ul(e, t, n);
                  }
                else
                  try {
                    yl.removeChild(e.stateNode);
                  } catch (n) {
                    ul(e, t, n);
                  }
              break;
            case 18:
              yl !== null &&
                (Ll
                  ? ((l = yl),
                    Vr(
                      l.nodeType === 9
                        ? l.body
                        : l.nodeName === "HTML"
                          ? l.ownerDocument.body
                          : l,
                      e.stateNode,
                    ),
                    ja(l))
                  : Vr(yl, e.stateNode));
              break;
            case 4:
              ((a = yl),
                (u = Ll),
                (yl = e.stateNode.containerInfo),
                (Ll = !0),
                Lt(l, t, e),
                (yl = a),
                (Ll = u));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (se(2, e, t), Al || se(4, e, t), Lt(l, t, e));
              break;
            case 1:
              (Al ||
                (Mt(e, t),
                (a = e.stateNode),
                typeof a.componentWillUnmount == "function" && Lo(e, t, a)),
                Lt(l, t, e));
              break;
            case 21:
              Lt(l, t, e);
              break;
            case 22:
              ((Al = (a = Al) || e.memoizedState !== null),
                Lt(l, t, e),
                (Al = a));
              break;
            default:
              Lt(l, t, e);
          }
        }
        function Io(l, t) {
          if (
            t.memoizedState === null &&
            ((l = t.alternate),
            l !== null && ((l = l.memoizedState), l !== null))
          ) {
            l = l.dehydrated;
            try {
              ja(l);
            } catch (e) {
              ul(t, t.return, e);
            }
          }
        }
        function Po(l, t) {
          if (
            t.memoizedState === null &&
            ((l = t.alternate),
            l !== null &&
              ((l = l.memoizedState),
              l !== null && ((l = l.dehydrated), l !== null)))
          )
            try {
              ja(l);
            } catch (e) {
              ul(t, t.return, e);
            }
        }
        function ty(l) {
          switch (l.tag) {
            case 31:
            case 13:
            case 19:
              var t = l.stateNode;
              return (t === null && (t = l.stateNode = new Wo()), t);
            case 22:
              return (
                (l = l.stateNode),
                (t = l._retryCache),
                t === null && (t = l._retryCache = new Wo()),
                t
              );
            default:
              throw Error(m(435, l.tag));
          }
        }
        function vn(l, t) {
          var e = ty(l);
          t.forEach(function (a) {
            if (!e.has(a)) {
              e.add(a);
              var u = oy.bind(null, l, a);
              a.then(u, u);
            }
          });
        }
        function Kl(l, t) {
          var e = t.deletions;
          if (e !== null)
            for (var a = 0; a < e.length; a++) {
              var u = e[a],
                n = l,
                i = t,
                c = i;
              l: for (; c !== null; ) {
                switch (c.tag) {
                  case 27:
                    if (he(c.type)) {
                      ((yl = c.stateNode), (Ll = !1));
                      break l;
                    }
                    break;
                  case 5:
                    ((yl = c.stateNode), (Ll = !1));
                    break l;
                  case 3:
                  case 4:
                    ((yl = c.stateNode.containerInfo), (Ll = !0));
                    break l;
                }
                c = c.return;
              }
              if (yl === null) throw Error(m(160));
              (Fo(n, i, u),
                (yl = null),
                (Ll = !1),
                (n = u.alternate),
                n !== null && (n.return = null),
                (u.return = null));
            }
          if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; ) (lr(t, l), (t = t.sibling));
        }
        var xt = null;
        function lr(l, t) {
          var e = l.alternate,
            a = l.flags;
          switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (Kl(t, l),
                Jl(l),
                a & 4 && (se(3, l, l.return), au(3, l), se(5, l, l.return)));
              break;
            case 1:
              (Kl(t, l),
                Jl(l),
                a & 512 && (Al || e === null || Mt(e, e.return)),
                a & 64 &&
                  Vt &&
                  ((l = l.updateQueue),
                  l !== null &&
                    ((a = l.callbacks),
                    a !== null &&
                      ((e = l.shared.hiddenCallbacks),
                      (l.shared.hiddenCallbacks =
                        e === null ? a : e.concat(a))))));
              break;
            case 26:
              var u = xt;
              if (
                (Kl(t, l),
                Jl(l),
                a & 512 && (Al || e === null || Mt(e, e.return)),
                a & 4)
              ) {
                var n = e !== null ? e.memoizedState : null;
                if (((a = l.memoizedState), e === null))
                  if (a === null)
                    if (l.stateNode === null) {
                      l: {
                        ((a = l.type),
                          (e = l.memoizedProps),
                          (u = u.ownerDocument || u));
                        t: switch (a) {
                          case "title":
                            ((n = u.getElementsByTagName("title")[0]),
                              (!n ||
                                n[Na] ||
                                n[Ml] ||
                                n.namespaceURI ===
                                  "http://www.w3.org/2000/svg" ||
                                n.hasAttribute("itemprop")) &&
                                ((n = u.createElement(a)),
                                u.head.insertBefore(
                                  n,
                                  u.querySelector("head > title"),
                                )),
                              Ul(n, a, e),
                              (n[Ml] = l),
                              jl(n),
                              (a = n));
                            break l;
                          case "link":
                            var i = ld("link", "href", u).get(
                              a + (e.href || ""),
                            );
                            if (i) {
                              for (var c = 0; c < i.length; c++)
                                if (
                                  ((n = i[c]),
                                  n.getAttribute("href") ===
                                    (e.href == null || e.href === ""
                                      ? null
                                      : e.href) &&
                                    n.getAttribute("rel") ===
                                      (e.rel == null ? null : e.rel) &&
                                    n.getAttribute("title") ===
                                      (e.title == null ? null : e.title) &&
                                    n.getAttribute("crossorigin") ===
                                      (e.crossOrigin == null
                                        ? null
                                        : e.crossOrigin))
                                ) {
                                  i.splice(c, 1);
                                  break t;
                                }
                            }
                            ((n = u.createElement(a)),
                              Ul(n, a, e),
                              u.head.appendChild(n));
                            break;
                          case "meta":
                            if (
                              (i = ld("meta", "content", u).get(
                                a + (e.content || ""),
                              ))
                            ) {
                              for (c = 0; c < i.length; c++)
                                if (
                                  ((n = i[c]),
                                  n.getAttribute("content") ===
                                    (e.content == null
                                      ? null
                                      : "" + e.content) &&
                                    n.getAttribute("name") ===
                                      (e.name == null ? null : e.name) &&
                                    n.getAttribute("property") ===
                                      (e.property == null
                                        ? null
                                        : e.property) &&
                                    n.getAttribute("http-equiv") ===
                                      (e.httpEquiv == null
                                        ? null
                                        : e.httpEquiv) &&
                                    n.getAttribute("charset") ===
                                      (e.charSet == null ? null : e.charSet))
                                ) {
                                  i.splice(c, 1);
                                  break t;
                                }
                            }
                            ((n = u.createElement(a)),
                              Ul(n, a, e),
                              u.head.appendChild(n));
                            break;
                          default:
                            throw Error(m(468, a));
                        }
                        ((n[Ml] = l), jl(n), (a = n));
                      }
                      l.stateNode = a;
                    } else td(u, l.type, l.stateNode);
                  else l.stateNode = Pr(u, a, l.memoizedProps);
                else
                  n !== a
                    ? (n === null
                        ? e.stateNode !== null &&
                          ((e = e.stateNode), e.parentNode.removeChild(e))
                        : n.count--,
                      a === null
                        ? td(u, l.type, l.stateNode)
                        : Pr(u, a, l.memoizedProps))
                    : a === null &&
                      l.stateNode !== null &&
                      Sc(l, l.memoizedProps, e.memoizedProps);
              }
              break;
            case 27:
              (Kl(t, l),
                Jl(l),
                a & 512 && (Al || e === null || Mt(e, e.return)),
                e !== null && a & 4 && Sc(l, l.memoizedProps, e.memoizedProps));
              break;
            case 5:
              if (
                (Kl(t, l),
                Jl(l),
                a & 512 && (Al || e === null || Mt(e, e.return)),
                l.flags & 32)
              ) {
                u = l.stateNode;
                try {
                  ke(u, "");
                } catch (M) {
                  ul(l, l.return, M);
                }
              }
              (a & 4 &&
                l.stateNode != null &&
                ((u = l.memoizedProps),
                Sc(l, u, e !== null ? e.memoizedProps : u)),
                a & 1024 && (zc = !0));
              break;
            case 6:
              if ((Kl(t, l), Jl(l), a & 4)) {
                if (l.stateNode === null) throw Error(m(162));
                ((a = l.memoizedProps), (e = l.stateNode));
                try {
                  e.nodeValue = a;
                } catch (M) {
                  ul(l, l.return, M);
                }
              }
              break;
            case 3:
              if (
                ((Nn = null),
                (u = xt),
                (xt = On(t.containerInfo)),
                Kl(t, l),
                (xt = u),
                Jl(l),
                a & 4 && e !== null && e.memoizedState.isDehydrated)
              )
                try {
                  ja(t.containerInfo);
                } catch (M) {
                  ul(l, l.return, M);
                }
              zc && ((zc = !1), tr(l));
              break;
            case 4:
              ((a = xt),
                (xt = On(l.stateNode.containerInfo)),
                Kl(t, l),
                Jl(l),
                (xt = a));
              break;
            case 12:
              (Kl(t, l), Jl(l));
              break;
            case 31:
              (Kl(t, l),
                Jl(l),
                a & 4 &&
                  ((a = l.updateQueue),
                  a !== null && ((l.updateQueue = null), vn(l, a))));
              break;
            case 13:
              (Kl(t, l),
                Jl(l),
                l.child.flags & 8192 &&
                  (l.memoizedState !== null) !=
                    (e !== null && e.memoizedState !== null) &&
                  (gn = Fl()),
                a & 4 &&
                  ((a = l.updateQueue),
                  a !== null && ((l.updateQueue = null), vn(l, a))));
              break;
            case 22:
              u = l.memoizedState !== null;
              var f = e !== null && e.memoizedState !== null,
                v = Vt,
                p = Al;
              if (
                ((Vt = v || u),
                (Al = p || f),
                Kl(t, l),
                (Al = p),
                (Vt = v),
                Jl(l),
                a & 8192)
              )
                l: for (
                  t = l.stateNode,
                    t._visibility = u ? t._visibility & -2 : t._visibility | 1,
                    u && (e === null || f || Vt || Al || Qe(l)),
                    e = null,
                    t = l;
                  ;
                ) {
                  if (t.tag === 5 || t.tag === 26) {
                    if (e === null) {
                      f = e = t;
                      try {
                        if (((n = f.stateNode), u))
                          ((i = n.style),
                            typeof i.setProperty == "function"
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none"));
                        else {
                          c = f.stateNode;
                          var x = f.memoizedProps.style,
                            h =
                              x != null && x.hasOwnProperty("display")
                                ? x.display
                                : null;
                          c.style.display =
                            h == null || typeof h == "boolean"
                              ? ""
                              : ("" + h).trim();
                        }
                      } catch (M) {
                        ul(f, f.return, M);
                      }
                    }
                  } else if (t.tag === 6) {
                    if (e === null) {
                      f = t;
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (M) {
                        ul(f, f.return, M);
                      }
                    }
                  } else if (t.tag === 18) {
                    if (e === null) {
                      f = t;
                      try {
                        var g = f.stateNode;
                        u ? Lr(g, !0) : Lr(f.stateNode, !1);
                      } catch (M) {
                        ul(f, f.return, M);
                      }
                    }
                  } else if (
                    ((t.tag !== 22 && t.tag !== 23) ||
                      t.memoizedState === null ||
                      t === l) &&
                    t.child !== null
                  ) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                  }
                  if (t === l) break l;
                  for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l) break l;
                    (e === t && (e = null), (t = t.return));
                  }
                  (e === t && (e = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling));
                }
              a & 4 &&
                ((a = l.updateQueue),
                a !== null &&
                  ((e = a.retryQueue),
                  e !== null && ((a.retryQueue = null), vn(l, e))));
              break;
            case 19:
              (Kl(t, l),
                Jl(l),
                a & 4 &&
                  ((a = l.updateQueue),
                  a !== null && ((l.updateQueue = null), vn(l, a))));
              break;
            case 30:
              break;
            case 21:
              break;
            default:
              (Kl(t, l), Jl(l));
          }
        }
        function Jl(l) {
          var t = l.flags;
          if (t & 2) {
            try {
              for (var e, a = l.return; a !== null; ) {
                if (Jo(a)) {
                  e = a;
                  break;
                }
                a = a.return;
              }
              if (e == null) throw Error(m(160));
              switch (e.tag) {
                case 27:
                  var u = e.stateNode,
                    n = bc(l);
                  yn(l, n, u);
                  break;
                case 5:
                  var i = e.stateNode;
                  e.flags & 32 && (ke(i, ""), (e.flags &= -33));
                  var c = bc(l);
                  yn(l, c, i);
                  break;
                case 3:
                case 4:
                  var f = e.stateNode.containerInfo,
                    v = bc(l);
                  xc(l, v, f);
                  break;
                default:
                  throw Error(m(161));
              }
            } catch (p) {
              ul(l, l.return, p);
            }
            l.flags &= -3;
          }
          t & 4096 && (l.flags &= -4097);
        }
        function tr(l) {
          if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
              var t = l;
              (tr(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                (l = l.sibling));
            }
        }
        function Kt(l, t) {
          if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
              (ko(l, t.alternate, t), (t = t.sibling));
        }
        function Qe(l) {
          for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (se(4, t, t.return), Qe(t));
                break;
              case 1:
                Mt(t, t.return);
                var e = t.stateNode;
                (typeof e.componentWillUnmount == "function" &&
                  Lo(t, t.return, e),
                  Qe(t));
                break;
              case 27:
                mu(t.stateNode);
              case 26:
              case 5:
                (Mt(t, t.return), Qe(t));
                break;
              case 22:
                t.memoizedState === null && Qe(t);
                break;
              case 30:
                Qe(t);
                break;
              default:
                Qe(t);
            }
            l = l.sibling;
          }
        }
        function Jt(l, t, e) {
          for (
            e = e && (t.subtreeFlags & 8772) !== 0, t = t.child;
            t !== null;
          ) {
            var a = t.alternate,
              u = l,
              n = t,
              i = n.flags;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                (Jt(u, n, e), au(4, n));
                break;
              case 1:
                if (
                  (Jt(u, n, e),
                  (a = n),
                  (u = a.stateNode),
                  typeof u.componentDidMount == "function")
                )
                  try {
                    u.componentDidMount();
                  } catch (v) {
                    ul(a, a.return, v);
                  }
                if (((a = n), (u = a.updateQueue), u !== null)) {
                  var c = a.stateNode;
                  try {
                    var f = u.shared.hiddenCallbacks;
                    if (f !== null)
                      for (
                        u.shared.hiddenCallbacks = null, u = 0;
                        u < f.length;
                        u++
                      )
                        Ns(f[u], c);
                  } catch (v) {
                    ul(a, a.return, v);
                  }
                }
                (e && i & 64 && Vo(n), uu(n, n.return));
                break;
              case 27:
                wo(n);
              case 26:
              case 5:
                (Jt(u, n, e),
                  e && a === null && i & 4 && Ko(n),
                  uu(n, n.return));
                break;
              case 12:
                Jt(u, n, e);
                break;
              case 31:
                (Jt(u, n, e), e && i & 4 && Io(u, n));
                break;
              case 13:
                (Jt(u, n, e), e && i & 4 && Po(u, n));
                break;
              case 22:
                (n.memoizedState === null && Jt(u, n, e), uu(n, n.return));
                break;
              case 30:
                break;
              default:
                Jt(u, n, e);
            }
            t = t.sibling;
          }
        }
        function Tc(l, t) {
          var e = null;
          (l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
            (l = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (l = t.memoizedState.cachePool.pool),
            l !== e && (l != null && l.refCount++, e != null && La(e)));
        }
        function Ac(l, t) {
          ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && La(l)));
        }
        function zt(l, t, e, a) {
          if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) (er(l, t, e, a), (t = t.sibling));
        }
        function er(l, t, e, a) {
          var u = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (zt(l, t, e, a), u & 2048 && au(9, t));
              break;
            case 1:
              zt(l, t, e, a);
              break;
            case 3:
              (zt(l, t, e, a),
                u & 2048 &&
                  ((l = null),
                  t.alternate !== null && (l = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache),
                  t !== l && (t.refCount++, l != null && La(l))));
              break;
            case 12:
              if (u & 2048) {
                (zt(l, t, e, a), (l = t.stateNode));
                try {
                  var n = t.memoizedProps,
                    i = n.id,
                    c = n.onPostCommit;
                  typeof c == "function" &&
                    c(
                      i,
                      t.alternate === null ? "mount" : "update",
                      l.passiveEffectDuration,
                      -0,
                    );
                } catch (f) {
                  ul(t, t.return, f);
                }
              } else zt(l, t, e, a);
              break;
            case 31:
              zt(l, t, e, a);
              break;
            case 13:
              zt(l, t, e, a);
              break;
            case 23:
              break;
            case 22:
              ((n = t.stateNode),
                (i = t.alternate),
                t.memoizedState !== null
                  ? n._visibility & 2
                    ? zt(l, t, e, a)
                    : nu(l, t)
                  : n._visibility & 2
                    ? zt(l, t, e, a)
                    : ((n._visibility |= 2),
                      va(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
                u & 2048 && Tc(i, t));
              break;
            case 24:
              (zt(l, t, e, a), u & 2048 && Ac(t.alternate, t));
              break;
            default:
              zt(l, t, e, a);
          }
        }
        function va(l, t, e, a, u) {
          for (
            u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
            t !== null;
          ) {
            var n = l,
              i = t,
              c = e,
              f = a,
              v = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                (va(n, i, c, f, u), au(8, i));
                break;
              case 23:
                break;
              case 22:
                var p = i.stateNode;
                (i.memoizedState !== null
                  ? p._visibility & 2
                    ? va(n, i, c, f, u)
                    : nu(n, i)
                  : ((p._visibility |= 2), va(n, i, c, f, u)),
                  u && v & 2048 && Tc(i.alternate, i));
                break;
              case 24:
                (va(n, i, c, f, u), u && v & 2048 && Ac(i.alternate, i));
                break;
              default:
                va(n, i, c, f, u);
            }
            t = t.sibling;
          }
        }
        function nu(l, t) {
          if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
              var e = l,
                a = t,
                u = a.flags;
              switch (a.tag) {
                case 22:
                  (nu(e, a), u & 2048 && Tc(a.alternate, a));
                  break;
                case 24:
                  (nu(e, a), u & 2048 && Ac(a.alternate, a));
                  break;
                default:
                  nu(e, a);
              }
              t = t.sibling;
            }
        }
        var iu = 8192;
        function ha(l, t, e) {
          if (l.subtreeFlags & iu)
            for (l = l.child; l !== null; ) (ar(l, t, e), (l = l.sibling));
        }
        function ar(l, t, e) {
          switch (l.tag) {
            case 26:
              (ha(l, t, e),
                l.flags & iu &&
                  l.memoizedState !== null &&
                  Xy(e, xt, l.memoizedState, l.memoizedProps));
              break;
            case 5:
              ha(l, t, e);
              break;
            case 3:
            case 4:
              var a = xt;
              ((xt = On(l.stateNode.containerInfo)), ha(l, t, e), (xt = a));
              break;
            case 22:
              l.memoizedState === null &&
                ((a = l.alternate),
                a !== null && a.memoizedState !== null
                  ? ((a = iu), (iu = 16777216), ha(l, t, e), (iu = a))
                  : ha(l, t, e));
              break;
            default:
              ha(l, t, e);
          }
        }
        function ur(l) {
          var t = l.alternate;
          if (t !== null && ((l = t.child), l !== null)) {
            t.child = null;
            do ((t = l.sibling), (l.sibling = null), (l = t));
            while (l !== null);
          }
        }
        function cu(l) {
          var t = l.deletions;
          if ((l.flags & 16) !== 0) {
            if (t !== null)
              for (var e = 0; e < t.length; e++) {
                var a = t[e];
                ((_l = a), ir(a, l));
              }
            ur(l);
          }
          if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; ) (nr(l), (l = l.sibling));
        }
        function nr(l) {
          switch (l.tag) {
            case 0:
            case 11:
            case 15:
              (cu(l), l.flags & 2048 && se(9, l, l.return));
              break;
            case 3:
              cu(l);
              break;
            case 12:
              cu(l);
              break;
            case 22:
              var t = l.stateNode;
              l.memoizedState !== null &&
              t._visibility & 2 &&
              (l.return === null || l.return.tag !== 13)
                ? ((t._visibility &= -3), hn(l))
                : cu(l);
              break;
            default:
              cu(l);
          }
        }
        function hn(l) {
          var t = l.deletions;
          if ((l.flags & 16) !== 0) {
            if (t !== null)
              for (var e = 0; e < t.length; e++) {
                var a = t[e];
                ((_l = a), ir(a, l));
              }
            ur(l);
          }
          for (l = l.child; l !== null; ) {
            switch (((t = l), t.tag)) {
              case 0:
              case 11:
              case 15:
                (se(8, t, t.return), hn(t));
                break;
              case 22:
                ((e = t.stateNode),
                  e._visibility & 2 && ((e._visibility &= -3), hn(t)));
                break;
              default:
                hn(t);
            }
            l = l.sibling;
          }
        }
        function ir(l, t) {
          for (; _l !== null; ) {
            var e = _l;
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                se(8, e, t);
                break;
              case 23:
              case 22:
                if (
                  e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null
                ) {
                  var a = e.memoizedState.cachePool.pool;
                  a != null && a.refCount++;
                }
                break;
              case 24:
                La(e.memoizedState.cache);
            }
            if (((a = e.child), a !== null)) ((a.return = e), (_l = a));
            else
              l: for (e = l; _l !== null; ) {
                a = _l;
                var u = a.sibling,
                  n = a.return;
                if (($o(a), a === e)) {
                  _l = null;
                  break l;
                }
                if (u !== null) {
                  ((u.return = n), (_l = u));
                  break l;
                }
                _l = n;
              }
          }
        }
        var ey = {
            getCacheForType: function (l) {
              var t = Dl(xl),
                e = t.data.get(l);
              return (e === void 0 && ((e = l()), t.data.set(l, e)), e);
            },
            cacheSignal: function () {
              return Dl(xl).controller.signal;
            },
          },
          ay = typeof WeakMap == "function" ? WeakMap : Map,
          ll = 0,
          ol = null,
          J = null,
          W = 0,
          al = 0,
          ut = null,
          oe = !1,
          ga = !1,
          Ec = !1,
          wt = 0,
          gl = 0,
          re = 0,
          Xe = 0,
          jc = 0,
          nt = 0,
          pa = 0,
          fu = null,
          wl = null,
          _c = !1,
          gn = 0,
          cr = 0,
          pn = 1 / 0,
          Sn = null,
          de = null,
          El = 0,
          me = null,
          Sa = null,
          Wt = 0,
          Mc = 0,
          Oc = null,
          fr = null,
          su = 0,
          Dc = null;
        function it() {
          return (ll & 2) !== 0 && W !== 0
            ? W & -W
            : S.T !== null
              ? Bc()
              : Tf();
        }
        function sr() {
          if (nt === 0)
            if ((W & 536870912) === 0 || F) {
              var l = ju;
              ((ju <<= 1), (ju & 3932160) === 0 && (ju = 262144), (nt = l));
            } else nt = 536870912;
          return ((l = et.current), l !== null && (l.flags |= 32), nt);
        }
        function Wl(l, t, e) {
          (((l === ol && (al === 2 || al === 9)) ||
            l.cancelPendingCommit !== null) &&
            (ba(l, 0), ye(l, W, nt, !1)),
            Da(l, e),
            ((ll & 2) === 0 || l !== ol) &&
              (l === ol &&
                ((ll & 2) === 0 && (Xe |= e), gl === 4 && ye(l, W, nt, !1)),
              Ot(l)));
        }
        function or(l, t, e) {
          if ((ll & 6) !== 0) throw Error(m(327));
          var a =
              (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Oa(l, t),
            u = a ? iy(l, t) : Uc(l, t, !0),
            n = a;
          do {
            if (u === 0) {
              ga && !a && ye(l, t, 0, !1);
              break;
            } else {
              if (((e = l.current.alternate), n && !uy(e))) {
                ((u = Uc(l, t, !1)), (n = !1));
                continue;
              }
              if (u === 2) {
                if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
                else
                  ((i = l.pendingLanes & -536870913),
                    (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
                if (i !== 0) {
                  t = i;
                  l: {
                    var c = l;
                    u = fu;
                    var f = c.current.memoizedState.isDehydrated;
                    if (
                      (f && (ba(c, i).flags |= 256),
                      (i = Uc(c, i, !1)),
                      i !== 2)
                    ) {
                      if (Ec && !f) {
                        ((c.errorRecoveryDisabledLanes |= n),
                          (Xe |= n),
                          (u = 4));
                        break l;
                      }
                      ((n = wl),
                        (wl = u),
                        n !== null &&
                          (wl === null ? (wl = n) : wl.push.apply(wl, n)));
                    }
                    u = i;
                  }
                  if (((n = !1), u !== 2)) continue;
                }
              }
              if (u === 1) {
                (ba(l, 0), ye(l, t, 0, !0));
                break;
              }
              l: {
                switch (((a = l), (n = u), n)) {
                  case 0:
                  case 1:
                    throw Error(m(345));
                  case 4:
                    if ((t & 4194048) !== t) break;
                  case 6:
                    ye(a, t, nt, !oe);
                    break l;
                  case 2:
                    wl = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(m(329));
                }
                if ((t & 62914560) === t && ((u = gn + 300 - Fl()), 10 < u)) {
                  if ((ye(a, t, nt, !oe), Mu(a, 0, !0) !== 0)) break l;
                  ((Wt = t),
                    (a.timeoutHandle = Xr(
                      rr.bind(
                        null,
                        a,
                        e,
                        wl,
                        Sn,
                        _c,
                        t,
                        nt,
                        Xe,
                        pa,
                        oe,
                        n,
                        "Throttled",
                        -0,
                        0,
                      ),
                      u,
                    )));
                  break l;
                }
                rr(a, e, wl, Sn, _c, t, nt, Xe, pa, oe, n, null, -0, 0);
              }
            }
            break;
          } while (!0);
          Ot(l);
        }
        function rr(l, t, e, a, u, n, i, c, f, v, p, x, h, g) {
          if (
            ((l.timeoutHandle = -1),
            (x = t.subtreeFlags),
            x & 8192 || (x & 16785408) === 16785408)
          ) {
            ((x = {
              stylesheets: null,
              count: 0,
              imgCount: 0,
              imgBytes: 0,
              suspenseyImages: [],
              waitingForImages: !0,
              waitingForViewTransition: !1,
              unsuspend: Ct,
            }),
              ar(t, n, x));
            var M =
              (n & 62914560) === n
                ? gn - Fl()
                : (n & 4194048) === n
                  ? cr - Fl()
                  : 0;
            if (((M = Zy(x, M)), M !== null)) {
              ((Wt = n),
                (l.cancelPendingCommit = M(
                  Sr.bind(null, l, t, n, e, a, u, i, c, f, p, x, null, h, g),
                )),
                ye(l, n, i, !v));
              return;
            }
          }
          Sr(l, t, n, e, a, u, i, c, f);
        }
        function uy(l) {
          for (var t = l; ; ) {
            var e = t.tag;
            if (
              (e === 0 || e === 11 || e === 15) &&
              t.flags & 16384 &&
              ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
            )
              for (var a = 0; a < e.length; a++) {
                var u = e[a],
                  n = u.getSnapshot;
                u = u.value;
                try {
                  if (!lt(n(), u)) return !1;
                } catch {
                  return !1;
                }
              }
            if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
              ((e.return = t), (t = e));
            else {
              if (t === l) break;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === l) return !0;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
          }
          return !0;
        }
        function ye(l, t, e, a) {
          ((t &= ~jc),
            (t &= ~Xe),
            (l.suspendedLanes |= t),
            (l.pingedLanes &= ~t),
            a && (l.warmLanes |= t),
            (a = l.expirationTimes));
          for (var u = t; 0 < u; ) {
            var n = 31 - Pl(u),
              i = 1 << n;
            ((a[n] = -1), (u &= ~i));
          }
          e !== 0 && bf(l, e, t);
        }
        function bn() {
          return (ll & 6) === 0 ? (ou(0), !1) : !0;
        }
        function Nc() {
          if (J !== null) {
            if (al === 0) var l = J.return;
            else
              ((l = J),
                (qt = Ue = null),
                wi(l),
                (oa = null),
                (Ja = 0),
                (l = J));
            for (; l !== null; ) (Zo(l.alternate, l), (l = l.return));
            J = null;
          }
        }
        function ba(l, t) {
          var e = l.timeoutHandle;
          (e !== -1 && ((l.timeoutHandle = -1), Ay(e)),
            (e = l.cancelPendingCommit),
            e !== null && ((l.cancelPendingCommit = null), e()),
            (Wt = 0),
            Nc(),
            (ol = l),
            (J = e = Ht(l.current, null)),
            (W = t),
            (al = 0),
            (ut = null),
            (oe = !1),
            (ga = Oa(l, t)),
            (Ec = !1),
            (pa = nt = jc = Xe = re = gl = 0),
            (wl = fu = null),
            (_c = !1),
            (t & 8) !== 0 && (t |= t & 32));
          var a = l.entangledLanes;
          if (a !== 0)
            for (l = l.entanglements, a &= t; 0 < a; ) {
              var u = 31 - Pl(a),
                n = 1 << u;
              ((t |= l[u]), (a &= ~n));
            }
          return ((wt = t), Qu(), e);
        }
        function dr(l, t) {
          ((Z = null),
            (S.H = lu),
            t === sa || t === Wu
              ? ((t = _s()), (al = 3))
              : t === Hi
                ? ((t = _s()), (al = 4))
                : (al =
                    t === sc
                      ? 8
                      : t !== null &&
                          typeof t == "object" &&
                          typeof t.then == "function"
                        ? 6
                        : 1),
            (ut = t),
            J === null && ((gl = 1), sn(l, dt(t, l.current))));
        }
        function mr() {
          var l = et.current;
          return l === null
            ? !0
            : (W & 4194048) === W
              ? ht === null
              : (W & 62914560) === W || (W & 536870912) !== 0
                ? l === ht
                : !1;
        }
        function yr() {
          var l = S.H;
          return ((S.H = lu), l === null ? lu : l);
        }
        function vr() {
          var l = S.A;
          return ((S.A = ey), l);
        }
        function xn() {
          ((gl = 4),
            oe || ((W & 4194048) !== W && et.current !== null) || (ga = !0),
            ((re & 134217727) === 0 && (Xe & 134217727) === 0) ||
              ol === null ||
              ye(ol, W, nt, !1));
        }
        function Uc(l, t, e) {
          var a = ll;
          ll |= 2;
          var u = yr(),
            n = vr();
          ((ol !== l || W !== t) && ((Sn = null), ba(l, t)), (t = !1));
          var i = gl;
          l: do
            try {
              if (al !== 0 && J !== null) {
                var c = J,
                  f = ut;
                switch (al) {
                  case 8:
                    (Nc(), (i = 6));
                    break l;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    et.current === null && (t = !0);
                    var v = al;
                    if (((al = 0), (ut = null), xa(l, c, f, v), e && ga)) {
                      i = 0;
                      break l;
                    }
                    break;
                  default:
                    ((v = al), (al = 0), (ut = null), xa(l, c, f, v));
                }
              }
              (ny(), (i = gl));
              break;
            } catch (p) {
              dr(l, p);
            }
          while (!0);
          return (
            t && l.shellSuspendCounter++,
            (qt = Ue = null),
            (ll = a),
            (S.H = u),
            (S.A = n),
            J === null && ((ol = null), (W = 0), Qu()),
            i
          );
        }
        function ny() {
          for (; J !== null; ) hr(J);
        }
        function iy(l, t) {
          var e = ll;
          ll |= 2;
          var a = yr(),
            u = vr();
          ol !== l || W !== t
            ? ((Sn = null), (pn = Fl() + 500), ba(l, t))
            : (ga = Oa(l, t));
          l: do
            try {
              if (al !== 0 && J !== null) {
                t = J;
                var n = ut;
                t: switch (al) {
                  case 1:
                    ((al = 0), (ut = null), xa(l, t, n, 1));
                    break;
                  case 2:
                  case 9:
                    if (Es(n)) {
                      ((al = 0), (ut = null), gr(t));
                      break;
                    }
                    ((t = function () {
                      ((al !== 2 && al !== 9) || ol !== l || (al = 7), Ot(l));
                    }),
                      n.then(t, t));
                    break l;
                  case 3:
                    al = 7;
                    break l;
                  case 4:
                    al = 5;
                    break l;
                  case 7:
                    Es(n)
                      ? ((al = 0), (ut = null), gr(t))
                      : ((al = 0), (ut = null), xa(l, t, n, 7));
                    break;
                  case 5:
                    var i = null;
                    switch (J.tag) {
                      case 26:
                        i = J.memoizedState;
                      case 5:
                      case 27:
                        var c = J;
                        if (i ? ed(i) : c.stateNode.complete) {
                          ((al = 0), (ut = null));
                          var f = c.sibling;
                          if (f !== null) J = f;
                          else {
                            var v = c.return;
                            v !== null ? ((J = v), zn(v)) : (J = null);
                          }
                          break t;
                        }
                    }
                    ((al = 0), (ut = null), xa(l, t, n, 5));
                    break;
                  case 6:
                    ((al = 0), (ut = null), xa(l, t, n, 6));
                    break;
                  case 8:
                    (Nc(), (gl = 6));
                    break l;
                  default:
                    throw Error(m(462));
                }
              }
              cy();
              break;
            } catch (p) {
              dr(l, p);
            }
          while (!0);
          return (
            (qt = Ue = null),
            (S.H = a),
            (S.A = u),
            (ll = e),
            J !== null ? 0 : ((ol = null), (W = 0), Qu(), gl)
          );
        }
        function cy() {
          for (; J !== null && !Dd(); ) hr(J);
        }
        function hr(l) {
          var t = Qo(l.alternate, l, wt);
          ((l.memoizedProps = l.pendingProps), t === null ? zn(l) : (J = t));
        }
        function gr(l) {
          var t = l,
            e = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Ro(e, t, t.pendingProps, t.type, void 0, W);
              break;
            case 11:
              t = Ro(e, t, t.pendingProps, t.type.render, t.ref, W);
              break;
            case 5:
              wi(t);
            default:
              (Zo(e, t), (t = J = ys(t, wt)), (t = Qo(e, t, wt)));
          }
          ((l.memoizedProps = l.pendingProps), t === null ? zn(l) : (J = t));
        }
        function xa(l, t, e, a) {
          ((qt = Ue = null), wi(t), (oa = null), (Ja = 0));
          var u = t.return;
          try {
            if (km(l, u, t, e, W)) {
              ((gl = 1), sn(l, dt(e, l.current)), (J = null));
              return;
            }
          } catch (n) {
            if (u !== null) throw ((J = u), n);
            ((gl = 1), sn(l, dt(e, l.current)), (J = null));
            return;
          }
          t.flags & 32768
            ? (F || a === 1
                ? (l = !0)
                : ga || (W & 536870912) !== 0
                  ? (l = !1)
                  : ((oe = l = !0),
                    (a === 2 || a === 9 || a === 3 || a === 6) &&
                      ((a = et.current),
                      a !== null && a.tag === 13 && (a.flags |= 16384))),
              pr(t, l))
            : zn(t);
        }
        function zn(l) {
          var t = l;
          do {
            if ((t.flags & 32768) !== 0) {
              pr(t, oe);
              return;
            }
            l = t.return;
            var e = Im(t.alternate, t, wt);
            if (e !== null) {
              J = e;
              return;
            }
            if (((t = t.sibling), t !== null)) {
              J = t;
              return;
            }
            J = t = l;
          } while (t !== null);
          gl === 0 && (gl = 5);
        }
        function pr(l, t) {
          do {
            var e = Pm(l.alternate, l);
            if (e !== null) {
              ((e.flags &= 32767), (J = e));
              return;
            }
            if (
              ((e = l.return),
              e !== null &&
                ((e.flags |= 32768),
                (e.subtreeFlags = 0),
                (e.deletions = null)),
              !t && ((l = l.sibling), l !== null))
            ) {
              J = l;
              return;
            }
            J = l = e;
          } while (l !== null);
          ((gl = 6), (J = null));
        }
        function Sr(l, t, e, a, u, n, i, c, f) {
          l.cancelPendingCommit = null;
          do Tn();
          while (El !== 0);
          if ((ll & 6) !== 0) throw Error(m(327));
          if (t !== null) {
            if (t === l.current) throw Error(m(177));
            if (
              ((n = t.lanes | t.childLanes),
              (n |= bi),
              Qd(l, e, n, i, c, f),
              l === ol && ((J = ol = null), (W = 0)),
              (Sa = t),
              (me = l),
              (Wt = e),
              (Mc = n),
              (Oc = u),
              (fr = a),
              (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                ? ((l.callbackNode = null),
                  (l.callbackPriority = 0),
                  ry(Au, function () {
                    return (Ar(), null);
                  }))
                : ((l.callbackNode = null), (l.callbackPriority = 0)),
              (a = (t.flags & 13878) !== 0),
              (t.subtreeFlags & 13878) !== 0 || a)
            ) {
              ((a = S.T),
                (S.T = null),
                (u = E.p),
                (E.p = 2),
                (i = ll),
                (ll |= 4));
              try {
                ly(l, t, e);
              } finally {
                ((ll = i), (E.p = u), (S.T = a));
              }
            }
            ((El = 1), br(), xr(), zr());
          }
        }
        function br() {
          if (El === 1) {
            El = 0;
            var l = me,
              t = Sa,
              e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
              ((e = S.T), (S.T = null));
              var a = E.p;
              E.p = 2;
              var u = ll;
              ll |= 4;
              try {
                lr(t, l);
                var n = Lc,
                  i = ns(l.containerInfo),
                  c = n.focusedElem,
                  f = n.selectionRange;
                if (
                  i !== c &&
                  c &&
                  c.ownerDocument &&
                  us(c.ownerDocument.documentElement, c)
                ) {
                  if (f !== null && vi(c)) {
                    var v = f.start,
                      p = f.end;
                    if ((p === void 0 && (p = v), "selectionStart" in c))
                      ((c.selectionStart = v),
                        (c.selectionEnd = Math.min(p, c.value.length)));
                    else {
                      var x = c.ownerDocument || document,
                        h = (x && x.defaultView) || window;
                      if (h.getSelection) {
                        var g = h.getSelection(),
                          M = c.textContent.length,
                          q = Math.min(f.start, M),
                          fl = f.end === void 0 ? q : Math.min(f.end, M);
                        !g.extend && q > fl && ((i = fl), (fl = q), (q = i));
                        var d = as(c, q),
                          s = as(c, fl);
                        if (
                          d &&
                          s &&
                          (g.rangeCount !== 1 ||
                            g.anchorNode !== d.node ||
                            g.anchorOffset !== d.offset ||
                            g.focusNode !== s.node ||
                            g.focusOffset !== s.offset)
                        ) {
                          var y = x.createRange();
                          (y.setStart(d.node, d.offset),
                            g.removeAllRanges(),
                            q > fl
                              ? (g.addRange(y), g.extend(s.node, s.offset))
                              : (y.setEnd(s.node, s.offset), g.addRange(y)));
                        }
                      }
                    }
                  }
                  for (x = [], g = c; (g = g.parentNode); )
                    g.nodeType === 1 &&
                      x.push({
                        element: g,
                        left: g.scrollLeft,
                        top: g.scrollTop,
                      });
                  for (
                    typeof c.focus == "function" && c.focus(), c = 0;
                    c < x.length;
                    c++
                  ) {
                    var b = x[c];
                    ((b.element.scrollLeft = b.left),
                      (b.element.scrollTop = b.top));
                  }
                }
                ((Hn = !!Vc), (Lc = Vc = null));
              } finally {
                ((ll = u), (E.p = a), (S.T = e));
              }
            }
            ((l.current = t), (El = 2));
          }
        }
        function xr() {
          if (El === 2) {
            El = 0;
            var l = me,
              t = Sa,
              e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
              ((e = S.T), (S.T = null));
              var a = E.p;
              E.p = 2;
              var u = ll;
              ll |= 4;
              try {
                ko(l, t.alternate, t);
              } finally {
                ((ll = u), (E.p = a), (S.T = e));
              }
            }
            El = 3;
          }
        }
        function zr() {
          if (El === 4 || El === 3) {
            ((El = 0), Nd());
            var l = me,
              t = Sa,
              e = Wt,
              a = fr;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
              ? (El = 5)
              : ((El = 0), (Sa = me = null), Tr(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (
              (u === 0 && (de = null),
              $n(e),
              (t = t.stateNode),
              Il && typeof Il.onCommitFiberRoot == "function")
            )
              try {
                Il.onCommitFiberRoot(
                  Ma,
                  t,
                  void 0,
                  (t.current.flags & 128) === 128,
                );
              } catch {}
            if (a !== null) {
              ((t = S.T), (u = E.p), (E.p = 2), (S.T = null));
              try {
                for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
                  var c = a[i];
                  n(c.value, { componentStack: c.stack });
                }
              } finally {
                ((S.T = t), (E.p = u));
              }
            }
            ((Wt & 3) !== 0 && Tn(),
              Ot(l),
              (u = l.pendingLanes),
              (e & 261930) !== 0 && (u & 42) !== 0
                ? l === Dc
                  ? su++
                  : ((su = 0), (Dc = l))
                : (su = 0),
              ou(0));
          }
        }
        function Tr(l, t) {
          (l.pooledCacheLanes &= t) === 0 &&
            ((t = l.pooledCache), t != null && ((l.pooledCache = null), La(t)));
        }
        function Tn() {
          return (br(), xr(), zr(), Ar());
        }
        function Ar() {
          if (El !== 5) return !1;
          var l = me,
            t = Mc;
          Mc = 0;
          var e = $n(Wt),
            a = S.T,
            u = E.p;
          try {
            ((E.p = 32 > e ? 32 : e), (S.T = null), (e = Oc), (Oc = null));
            var n = me,
              i = Wt;
            if (((El = 0), (Sa = me = null), (Wt = 0), (ll & 6) !== 0))
              throw Error(m(331));
            var c = ll;
            if (
              ((ll |= 4),
              nr(n.current),
              er(n, n.current, i, e),
              (ll = c),
              ou(0, !1),
              Il && typeof Il.onPostCommitFiberRoot == "function")
            )
              try {
                Il.onPostCommitFiberRoot(Ma, n);
              } catch {}
            return !0;
          } finally {
            ((E.p = u), (S.T = a), Tr(l, t));
          }
        }
        function Er(l, t, e) {
          ((t = dt(e, t)),
            (t = fc(l.stateNode, t, 2)),
            (l = ie(l, t, 2)),
            l !== null && (Da(l, 2), Ot(l)));
        }
        function ul(l, t, e) {
          if (l.tag === 3) Er(l, l, e);
          else
            for (; t !== null; ) {
              if (t.tag === 3) {
                Er(t, l, e);
                break;
              } else if (t.tag === 1) {
                var a = t.stateNode;
                if (
                  typeof t.type.getDerivedStateFromError == "function" ||
                  (typeof a.componentDidCatch == "function" &&
                    (de === null || !de.has(a)))
                ) {
                  ((l = dt(e, l)),
                    (e = jo(2)),
                    (a = ie(t, e, 2)),
                    a !== null && (_o(e, a, t, l), Da(a, 2), Ot(a)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cc(l, t, e) {
          var a = l.pingCache;
          if (a === null) {
            a = l.pingCache = new ay();
            var u = new Set();
            a.set(t, u);
          } else
            ((u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u)));
          u.has(e) ||
            ((Ec = !0), u.add(e), (l = fy.bind(null, l, t, e)), t.then(l, l));
        }
        function fy(l, t, e) {
          var a = l.pingCache;
          (a !== null && a.delete(t),
            (l.pingedLanes |= l.suspendedLanes & e),
            (l.warmLanes &= ~e),
            ol === l &&
              (W & e) === e &&
              (gl === 4 || (gl === 3 && (W & 62914560) === W && 300 > Fl() - gn)
                ? (ll & 2) === 0 && ba(l, 0)
                : (jc |= e),
              pa === W && (pa = 0)),
            Ot(l));
        }
        function jr(l, t) {
          (t === 0 && (t = Sf()),
            (l = Oe(l, t)),
            l !== null && (Da(l, t), Ot(l)));
        }
        function sy(l) {
          var t = l.memoizedState,
            e = 0;
          (t !== null && (e = t.retryLane), jr(l, e));
        }
        function oy(l, t) {
          var e = 0;
          switch (l.tag) {
            case 31:
            case 13:
              var a = l.stateNode,
                u = l.memoizedState;
              u !== null && (e = u.retryLane);
              break;
            case 19:
              a = l.stateNode;
              break;
            case 22:
              a = l.stateNode._retryCache;
              break;
            default:
              throw Error(m(314));
          }
          (a !== null && a.delete(t), jr(l, e));
        }
        function ry(l, t) {
          return Jn(l, t);
        }
        var An = null,
          za = null,
          Rc = !1,
          En = !1,
          Hc = !1,
          ve = 0;
        function Ot(l) {
          (l !== za &&
            l.next === null &&
            (za === null ? (An = za = l) : (za = za.next = l)),
            (En = !0),
            Rc || ((Rc = !0), my()));
        }
        function ou(l, t) {
          if (!Hc && En) {
            Hc = !0;
            do
              for (var e = !1, a = An; a !== null; ) {
                if (l !== 0) {
                  var u = a.pendingLanes;
                  if (u === 0) var n = 0;
                  else {
                    var i = a.suspendedLanes,
                      c = a.pingedLanes;
                    ((n = (1 << (31 - Pl(42 | l) + 1)) - 1),
                      (n &= u & ~(i & ~c)),
                      (n =
                        n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
                  }
                  n !== 0 && ((e = !0), Dr(a, n));
                } else
                  ((n = W),
                    (n = Mu(
                      a,
                      a === ol ? n : 0,
                      a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
                    )),
                    (n & 3) === 0 || Oa(a, n) || ((e = !0), Dr(a, n)));
                a = a.next;
              }
            while (e);
            Hc = !1;
          }
        }
        function dy() {
          _r();
        }
        function _r() {
          En = Rc = !1;
          var l = 0;
          ve !== 0 && Ty() && (l = ve);
          for (var t = Fl(), e = null, a = An; a !== null; ) {
            var u = a.next,
              n = Mr(a, t);
            (n === 0
              ? ((a.next = null),
                e === null ? (An = u) : (e.next = u),
                u === null && (za = e))
              : ((e = a), (l !== 0 || (n & 3) !== 0) && (En = !0)),
              (a = u));
          }
          ((El !== 0 && El !== 5) || ou(l), ve !== 0 && (ve = 0));
        }
        function Mr(l, t) {
          for (
            var e = l.suspendedLanes,
              a = l.pingedLanes,
              u = l.expirationTimes,
              n = l.pendingLanes & -62914561;
            0 < n;
          ) {
            var i = 31 - Pl(n),
              c = 1 << i,
              f = u[i];
            (f === -1
              ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = Gd(c, t))
              : f <= t && (l.expiredLanes |= c),
              (n &= ~c));
          }
          if (
            ((t = ol),
            (e = W),
            (e = Mu(
              l,
              l === t ? e : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
            )),
            (a = l.callbackNode),
            e === 0 ||
              (l === t && (al === 2 || al === 9)) ||
              l.cancelPendingCommit !== null)
          )
            return (
              a !== null && a !== null && wn(a),
              (l.callbackNode = null),
              (l.callbackPriority = 0)
            );
          if ((e & 3) === 0 || Oa(l, e)) {
            if (((t = e & -e), t === l.callbackPriority)) return t;
            switch ((a !== null && wn(a), $n(e))) {
              case 2:
              case 8:
                e = gf;
                break;
              case 32:
                e = Au;
                break;
              case 268435456:
                e = pf;
                break;
              default:
                e = Au;
            }
            return (
              (a = Or.bind(null, l)),
              (e = Jn(e, a)),
              (l.callbackPriority = t),
              (l.callbackNode = e),
              t
            );
          }
          return (
            a !== null && a !== null && wn(a),
            (l.callbackPriority = 2),
            (l.callbackNode = null),
            2
          );
        }
        function Or(l, t) {
          if (El !== 0 && El !== 5)
            return ((l.callbackNode = null), (l.callbackPriority = 0), null);
          var e = l.callbackNode;
          if (Tn() && l.callbackNode !== e) return null;
          var a = W;
          return (
            (a = Mu(
              l,
              l === ol ? a : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
            )),
            a === 0
              ? null
              : (or(l, a, t),
                Mr(l, Fl()),
                l.callbackNode != null && l.callbackNode === e
                  ? Or.bind(null, l)
                  : null)
          );
        }
        function Dr(l, t) {
          if (Tn()) return null;
          or(l, t, !0);
        }
        function my() {
          Ey(function () {
            (ll & 6) !== 0 ? Jn(hf, dy) : _r();
          });
        }
        function Bc() {
          if (ve === 0) {
            var l = ca;
            (l === 0 &&
              ((l = Eu), (Eu <<= 1), (Eu & 261888) === 0 && (Eu = 256)),
              (ve = l));
          }
          return ve;
        }
        function Nr(l) {
          return l == null || typeof l == "symbol" || typeof l == "boolean"
            ? null
            : typeof l == "function"
              ? l
              : Uu("" + l);
        }
        function Ur(l, t) {
          var e = t.ownerDocument.createElement("input");
          return (
            (e.name = t.name),
            (e.value = t.value),
            l.id && e.setAttribute("form", l.id),
            t.parentNode.insertBefore(e, t),
            (l = new FormData(l)),
            e.parentNode.removeChild(e),
            l
          );
        }
        function yy(l, t, e, a, u) {
          if (t === "submit" && e && e.stateNode === u) {
            var n = Nr((u[Zl] || null).action),
              i = a.submitter;
            i &&
              ((t = (t = i[Zl] || null)
                ? Nr(t.formAction)
                : i.getAttribute("formAction")),
              t !== null && ((n = t), (i = null)));
            var c = new Bu("action", "action", null, a, u);
            l.push({
              event: c,
              listeners: [
                {
                  instance: null,
                  listener: function () {
                    if (a.defaultPrevented) {
                      if (ve !== 0) {
                        var f = i ? Ur(u, i) : new FormData(u);
                        ec(
                          e,
                          { pending: !0, data: f, method: u.method, action: n },
                          null,
                          f,
                        );
                      }
                    } else
                      typeof n == "function" &&
                        (c.preventDefault(),
                        (f = i ? Ur(u, i) : new FormData(u)),
                        ec(
                          e,
                          { pending: !0, data: f, method: u.method, action: n },
                          n,
                          f,
                        ));
                  },
                  currentTarget: u,
                },
              ],
            });
          }
        }
        for (var qc = 0; qc < Si.length; qc++) {
          var Yc = Si[qc],
            vy = Yc.toLowerCase(),
            hy = Yc[0].toUpperCase() + Yc.slice(1);
          bt(vy, "on" + hy);
        }
        (bt(fs, "onAnimationEnd"),
          bt(ss, "onAnimationIteration"),
          bt(os, "onAnimationStart"),
          bt("dblclick", "onDoubleClick"),
          bt("focusin", "onFocus"),
          bt("focusout", "onBlur"),
          bt(Um, "onTransitionRun"),
          bt(Cm, "onTransitionStart"),
          bt(Rm, "onTransitionCancel"),
          bt(rs, "onTransitionEnd"),
          we("onMouseEnter", ["mouseout", "mouseover"]),
          we("onMouseLeave", ["mouseout", "mouseover"]),
          we("onPointerEnter", ["pointerout", "pointerover"]),
          we("onPointerLeave", ["pointerout", "pointerover"]),
          Ee(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          Ee(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          Ee("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          Ee(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          Ee(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          Ee(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ));
        var ru =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          gy = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(ru),
          );
        function Cr(l, t) {
          t = (t & 4) !== 0;
          for (var e = 0; e < l.length; e++) {
            var a = l[e],
              u = a.event;
            a = a.listeners;
            l: {
              var n = void 0;
              if (t)
                for (var i = a.length - 1; 0 <= i; i--) {
                  var c = a[i],
                    f = c.instance,
                    v = c.currentTarget;
                  if (((c = c.listener), f !== n && u.isPropagationStopped()))
                    break l;
                  ((n = c), (u.currentTarget = v));
                  try {
                    n(u);
                  } catch (p) {
                    Gu(p);
                  }
                  ((u.currentTarget = null), (n = f));
                }
              else
                for (i = 0; i < a.length; i++) {
                  if (
                    ((c = a[i]),
                    (f = c.instance),
                    (v = c.currentTarget),
                    (c = c.listener),
                    f !== n && u.isPropagationStopped())
                  )
                    break l;
                  ((n = c), (u.currentTarget = v));
                  try {
                    n(u);
                  } catch (p) {
                    Gu(p);
                  }
                  ((u.currentTarget = null), (n = f));
                }
            }
          }
        }
        function w(l, t) {
          var e = t[Fn];
          e === void 0 && (e = t[Fn] = new Set());
          var a = l + "__bubble";
          e.has(a) || (Rr(t, l, 2, !1), e.add(a));
        }
        function Gc(l, t, e) {
          var a = 0;
          (t && (a |= 4), Rr(e, l, a, t));
        }
        var jn = "_reactListening" + Math.random().toString(36).slice(2);
        function Qc(l) {
          if (!l[jn]) {
            ((l[jn] = !0),
              jf.forEach(function (e) {
                e !== "selectionchange" &&
                  (gy.has(e) || Gc(e, !1, l), Gc(e, !0, l));
              }));
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[jn] || ((t[jn] = !0), Gc("selectionchange", !1, t));
          }
        }
        function Rr(l, t, e, a) {
          switch (sd(t)) {
            case 2:
              var u = Ky;
              break;
            case 8:
              u = Jy;
              break;
            default:
              u = tf;
          }
          ((e = u.bind(null, t, e, l)),
            (u = void 0),
            !ii ||
              (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
              (u = !0),
            a
              ? u !== void 0
                ? l.addEventListener(t, e, { capture: !0, passive: u })
                : l.addEventListener(t, e, !0)
              : u !== void 0
                ? l.addEventListener(t, e, { passive: u })
                : l.addEventListener(t, e, !1));
        }
        function Xc(l, t, e, a, u) {
          var n = a;
          if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            l: for (;;) {
              if (a === null) return;
              var i = a.tag;
              if (i === 3 || i === 4) {
                var c = a.stateNode.containerInfo;
                if (c === u) break;
                if (i === 4)
                  for (i = a.return; i !== null; ) {
                    var f = i.tag;
                    if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                      return;
                    i = i.return;
                  }
                for (; c !== null; ) {
                  if (((i = Le(c)), i === null)) return;
                  if (
                    ((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)
                  ) {
                    a = n = i;
                    continue l;
                  }
                  c = c.parentNode;
                }
              }
              a = a.return;
            }
          Yf(function () {
            var v = n,
              p = ui(e),
              x = [];
            l: {
              var h = ds.get(l);
              if (h !== void 0) {
                var g = Bu,
                  M = l;
                switch (l) {
                  case "keypress":
                    if (Ru(e) === 0) break l;
                  case "keydown":
                  case "keyup":
                    g = om;
                    break;
                  case "focusin":
                    ((M = "focus"), (g = oi));
                    break;
                  case "focusout":
                    ((M = "blur"), (g = oi));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    g = oi;
                    break;
                  case "click":
                    if (e.button === 2) break l;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    g = Xf;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    g = Id;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    g = mm;
                    break;
                  case fs:
                  case ss:
                  case os:
                    g = tm;
                    break;
                  case rs:
                    g = vm;
                    break;
                  case "scroll":
                  case "scrollend":
                    g = $d;
                    break;
                  case "wheel":
                    g = gm;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    g = am;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    g = Vf;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    g = Sm;
                }
                var q = (t & 4) !== 0,
                  fl = !q && (l === "scroll" || l === "scrollend"),
                  d = q ? (h !== null ? h + "Capture" : null) : h;
                q = [];
                for (var s = v, y; s !== null; ) {
                  var b = s;
                  if (
                    ((y = b.stateNode),
                    (b = b.tag),
                    (b !== 5 && b !== 26 && b !== 27) ||
                      y === null ||
                      d === null ||
                      ((b = Ca(s, d)), b != null && q.push(du(s, b, y))),
                    fl)
                  )
                    break;
                  s = s.return;
                }
                0 < q.length &&
                  ((h = new g(h, M, null, e, p)),
                  x.push({ event: h, listeners: q }));
              }
            }
            if ((t & 7) === 0) {
              l: {
                if (
                  ((h = l === "mouseover" || l === "pointerover"),
                  (g = l === "mouseout" || l === "pointerout"),
                  h &&
                    e !== ai &&
                    (M = e.relatedTarget || e.fromElement) &&
                    (Le(M) || M[Ve]))
                )
                  break l;
                if (
                  (g || h) &&
                  ((h =
                    p.window === p
                      ? p
                      : (h = p.ownerDocument)
                        ? h.defaultView || h.parentWindow
                        : window),
                  g
                    ? ((M = e.relatedTarget || e.toElement),
                      (g = v),
                      (M = M ? Le(M) : null),
                      M !== null &&
                        ((fl = B(M)),
                        (q = M.tag),
                        M !== fl || (q !== 5 && q !== 27 && q !== 6)) &&
                        (M = null))
                    : ((g = null), (M = v)),
                  g !== M)
                ) {
                  if (
                    ((q = Xf),
                    (b = "onMouseLeave"),
                    (d = "onMouseEnter"),
                    (s = "mouse"),
                    (l === "pointerout" || l === "pointerover") &&
                      ((q = Vf),
                      (b = "onPointerLeave"),
                      (d = "onPointerEnter"),
                      (s = "pointer")),
                    (fl = g == null ? h : Ua(g)),
                    (y = M == null ? h : Ua(M)),
                    (h = new q(b, s + "leave", g, e, p)),
                    (h.target = fl),
                    (h.relatedTarget = y),
                    (b = null),
                    Le(p) === v &&
                      ((q = new q(d, s + "enter", M, e, p)),
                      (q.target = y),
                      (q.relatedTarget = fl),
                      (b = q)),
                    (fl = b),
                    g && M)
                  )
                    t: {
                      for (q = py, d = g, s = M, y = 0, b = d; b; b = q(b)) y++;
                      b = 0;
                      for (var R = s; R; R = q(R)) b++;
                      for (; 0 < y - b; ) ((d = q(d)), y--);
                      for (; 0 < b - y; ) ((s = q(s)), b--);
                      for (; y--; ) {
                        if (d === s || (s !== null && d === s.alternate)) {
                          q = d;
                          break t;
                        }
                        ((d = q(d)), (s = q(s)));
                      }
                      q = null;
                    }
                  else q = null;
                  (g !== null && Hr(x, h, g, q, !1),
                    M !== null && fl !== null && Hr(x, fl, M, q, !0));
                }
              }
              l: {
                if (
                  ((h = v ? Ua(v) : window),
                  (g = h.nodeName && h.nodeName.toLowerCase()),
                  g === "select" || (g === "input" && h.type === "file"))
                )
                  var I = Ff;
                else if (kf(h))
                  if (If) I = Om;
                  else {
                    I = _m;
                    var N = jm;
                  }
                else
                  ((g = h.nodeName),
                    !g ||
                    g.toLowerCase() !== "input" ||
                    (h.type !== "checkbox" && h.type !== "radio")
                      ? v && ei(v.elementType) && (I = Ff)
                      : (I = Mm));
                if (I && (I = I(l, v))) {
                  $f(x, I, e, p);
                  break l;
                }
                (N && N(l, h, v),
                  l === "focusout" &&
                    v &&
                    h.type === "number" &&
                    v.memoizedProps.value != null &&
                    ti(h, "number", h.value));
              }
              switch (((N = v ? Ua(v) : window), l)) {
                case "focusin":
                  (kf(N) || N.contentEditable === "true") &&
                    ((Pe = N), (hi = v), (Xa = null));
                  break;
                case "focusout":
                  Xa = hi = Pe = null;
                  break;
                case "mousedown":
                  gi = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((gi = !1), is(x, e, p));
                  break;
                case "selectionchange":
                  if (Nm) break;
                case "keydown":
                case "keyup":
                  is(x, e, p);
              }
              var L;
              if (di)
                l: {
                  switch (l) {
                    case "compositionstart":
                      var k = "onCompositionStart";
                      break l;
                    case "compositionend":
                      k = "onCompositionEnd";
                      break l;
                    case "compositionupdate":
                      k = "onCompositionUpdate";
                      break l;
                  }
                  k = void 0;
                }
              else
                Ie
                  ? wf(l, e) && (k = "onCompositionEnd")
                  : l === "keydown" &&
                    e.keyCode === 229 &&
                    (k = "onCompositionStart");
              (k &&
                (Lf &&
                  e.locale !== "ko" &&
                  (Ie || k !== "onCompositionStart"
                    ? k === "onCompositionEnd" && Ie && (L = Gf())
                    : ((Pt = p),
                      (ci = "value" in Pt ? Pt.value : Pt.textContent),
                      (Ie = !0))),
                (N = _n(v, k)),
                0 < N.length &&
                  ((k = new Zf(k, l, null, e, p)),
                  x.push({ event: k, listeners: N }),
                  L
                    ? (k.data = L)
                    : ((L = Wf(e)), L !== null && (k.data = L)))),
                (L = xm ? zm(l, e) : Tm(l, e)) &&
                  ((k = _n(v, "onBeforeInput")),
                  0 < k.length &&
                    ((N = new Zf("onBeforeInput", "beforeinput", null, e, p)),
                    x.push({ event: N, listeners: k }),
                    (N.data = L))),
                yy(x, l, v, e, p));
            }
            Cr(x, t);
          });
        }
        function du(l, t, e) {
          return { instance: l, listener: t, currentTarget: e };
        }
        function _n(l, t) {
          for (var e = t + "Capture", a = []; l !== null; ) {
            var u = l,
              n = u.stateNode;
            if (
              ((u = u.tag),
              (u !== 5 && u !== 26 && u !== 27) ||
                n === null ||
                ((u = Ca(l, e)),
                u != null && a.unshift(du(l, u, n)),
                (u = Ca(l, t)),
                u != null && a.push(du(l, u, n))),
              l.tag === 3)
            )
              return a;
            l = l.return;
          }
          return [];
        }
        function py(l) {
          if (l === null) return null;
          do l = l.return;
          while (l && l.tag !== 5 && l.tag !== 27);
          return l || null;
        }
        function Hr(l, t, e, a, u) {
          for (var n = t._reactName, i = []; e !== null && e !== a; ) {
            var c = e,
              f = c.alternate,
              v = c.stateNode;
            if (((c = c.tag), f !== null && f === a)) break;
            ((c !== 5 && c !== 26 && c !== 27) ||
              v === null ||
              ((f = v),
              u
                ? ((v = Ca(e, n)), v != null && i.unshift(du(e, v, f)))
                : u || ((v = Ca(e, n)), v != null && i.push(du(e, v, f)))),
              (e = e.return));
          }
          i.length !== 0 && l.push({ event: t, listeners: i });
        }
        var Sy = /\r\n?/g,
          by = /\u0000|\uFFFD/g;
        function Br(l) {
          return (typeof l == "string" ? l : "" + l)
            .replace(
              Sy,
              `
`,
            )
            .replace(by, "");
        }
        function qr(l, t) {
          return ((t = Br(t)), Br(l) === t);
        }
        function cl(l, t, e, a, u, n) {
          switch (e) {
            case "children":
              typeof a == "string"
                ? t === "body" || (t === "textarea" && a === "") || ke(l, a)
                : (typeof a == "number" || typeof a == "bigint") &&
                  t !== "body" &&
                  ke(l, "" + a);
              break;
            case "className":
              Du(l, "class", a);
              break;
            case "tabIndex":
              Du(l, "tabindex", a);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              Du(l, e, a);
              break;
            case "style":
              Bf(l, a, n);
              break;
            case "data":
              if (t !== "object") {
                Du(l, "data", a);
                break;
              }
            case "src":
            case "href":
              if (a === "" && (t !== "a" || e !== "href")) {
                l.removeAttribute(e);
                break;
              }
              if (
                a == null ||
                typeof a == "function" ||
                typeof a == "symbol" ||
                typeof a == "boolean"
              ) {
                l.removeAttribute(e);
                break;
              }
              ((a = Uu("" + a)), l.setAttribute(e, a));
              break;
            case "action":
            case "formAction":
              if (typeof a == "function") {
                l.setAttribute(
                  e,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
              } else
                typeof n == "function" &&
                  (e === "formAction"
                    ? (t !== "input" && cl(l, t, "name", u.name, u, null),
                      cl(l, t, "formEncType", u.formEncType, u, null),
                      cl(l, t, "formMethod", u.formMethod, u, null),
                      cl(l, t, "formTarget", u.formTarget, u, null))
                    : (cl(l, t, "encType", u.encType, u, null),
                      cl(l, t, "method", u.method, u, null),
                      cl(l, t, "target", u.target, u, null)));
              if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break;
              }
              ((a = Uu("" + a)), l.setAttribute(e, a));
              break;
            case "onClick":
              a != null && (l.onclick = Ct);
              break;
            case "onScroll":
              a != null && w("scroll", l);
              break;
            case "onScrollEnd":
              a != null && w("scrollend", l);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                  throw Error(m(61));
                if (((e = a.__html), e != null)) {
                  if (u.children != null) throw Error(m(60));
                  l.innerHTML = e;
                }
              }
              break;
            case "multiple":
              l.multiple = a && typeof a != "function" && typeof a != "symbol";
              break;
            case "muted":
              l.muted = a && typeof a != "function" && typeof a != "symbol";
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
              break;
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                a == null ||
                typeof a == "function" ||
                typeof a == "boolean" ||
                typeof a == "symbol"
              ) {
                l.removeAttribute("xlink:href");
                break;
              }
              ((e = Uu("" + a)),
                l.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  e,
                ));
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              a != null && typeof a != "function" && typeof a != "symbol"
                ? l.setAttribute(e, "" + a)
                : l.removeAttribute(e);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              a && typeof a != "function" && typeof a != "symbol"
                ? l.setAttribute(e, "")
                : l.removeAttribute(e);
              break;
            case "capture":
            case "download":
              a === !0
                ? l.setAttribute(e, "")
                : a !== !1 &&
                    a != null &&
                    typeof a != "function" &&
                    typeof a != "symbol"
                  ? l.setAttribute(e, a)
                  : l.removeAttribute(e);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol" &&
              !isNaN(a) &&
              1 <= a
                ? l.setAttribute(e, a)
                : l.removeAttribute(e);
              break;
            case "rowSpan":
            case "start":
              a == null ||
              typeof a == "function" ||
              typeof a == "symbol" ||
              isNaN(a)
                ? l.removeAttribute(e)
                : l.setAttribute(e, a);
              break;
            case "popover":
              (w("beforetoggle", l), w("toggle", l), Ou(l, "popover", a));
              break;
            case "xlinkActuate":
              Ut(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
              break;
            case "xlinkArcrole":
              Ut(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
              break;
            case "xlinkRole":
              Ut(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
              break;
            case "xlinkShow":
              Ut(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
              break;
            case "xlinkTitle":
              Ut(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
              break;
            case "xlinkType":
              Ut(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
              break;
            case "xmlBase":
              Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
              break;
            case "xmlLang":
              Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
              break;
            case "xmlSpace":
              Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
              break;
            case "is":
              Ou(l, "is", a);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < e.length) ||
                (e[0] !== "o" && e[0] !== "O") ||
                (e[1] !== "n" && e[1] !== "N")) &&
                ((e = Wd.get(e) || e), Ou(l, e, a));
          }
        }
        function Zc(l, t, e, a, u, n) {
          switch (e) {
            case "style":
              Bf(l, a, n);
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                  throw Error(m(61));
                if (((e = a.__html), e != null)) {
                  if (u.children != null) throw Error(m(60));
                  l.innerHTML = e;
                }
              }
              break;
            case "children":
              typeof a == "string"
                ? ke(l, a)
                : (typeof a == "number" || typeof a == "bigint") &&
                  ke(l, "" + a);
              break;
            case "onScroll":
              a != null && w("scroll", l);
              break;
            case "onScrollEnd":
              a != null && w("scrollend", l);
              break;
            case "onClick":
              a != null && (l.onclick = Ct);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              if (!_f.hasOwnProperty(e))
                l: {
                  if (
                    e[0] === "o" &&
                    e[1] === "n" &&
                    ((u = e.endsWith("Capture")),
                    (t = e.slice(2, u ? e.length - 7 : void 0)),
                    (n = l[Zl] || null),
                    (n = n != null ? n[e] : null),
                    typeof n == "function" && l.removeEventListener(t, n, u),
                    typeof a == "function")
                  ) {
                    (typeof n != "function" &&
                      n !== null &&
                      (e in l
                        ? (l[e] = null)
                        : l.hasAttribute(e) && l.removeAttribute(e)),
                      l.addEventListener(t, a, u));
                    break l;
                  }
                  e in l
                    ? (l[e] = a)
                    : a === !0
                      ? l.setAttribute(e, "")
                      : Ou(l, e, a);
                }
          }
        }
        function Ul(l, t, e) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              (w("error", l), w("load", l));
              var a = !1,
                u = !1,
                n;
              for (n in e)
                if (e.hasOwnProperty(n)) {
                  var i = e[n];
                  if (i != null)
                    switch (n) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        u = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(m(137, t));
                      default:
                        cl(l, t, n, i, e, null);
                    }
                }
              (u && cl(l, t, "srcSet", e.srcSet, e, null),
                a && cl(l, t, "src", e.src, e, null));
              return;
            case "input":
              w("invalid", l);
              var c = (n = i = u = null),
                f = null,
                v = null;
              for (a in e)
                if (e.hasOwnProperty(a)) {
                  var p = e[a];
                  if (p != null)
                    switch (a) {
                      case "name":
                        u = p;
                        break;
                      case "type":
                        i = p;
                        break;
                      case "checked":
                        f = p;
                        break;
                      case "defaultChecked":
                        v = p;
                        break;
                      case "value":
                        n = p;
                        break;
                      case "defaultValue":
                        c = p;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (p != null) throw Error(m(137, t));
                        break;
                      default:
                        cl(l, t, a, p, e, null);
                    }
                }
              Uf(l, n, c, f, v, i, u, !1);
              return;
            case "select":
              (w("invalid", l), (a = i = n = null));
              for (u in e)
                if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
                  switch (u) {
                    case "value":
                      n = c;
                      break;
                    case "defaultValue":
                      i = c;
                      break;
                    case "multiple":
                      a = c;
                    default:
                      cl(l, t, u, c, e, null);
                  }
              ((t = n),
                (e = i),
                (l.multiple = !!a),
                t != null ? We(l, !!a, t, !1) : e != null && We(l, !!a, e, !0));
              return;
            case "textarea":
              (w("invalid", l), (n = u = a = null));
              for (i in e)
                if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
                  switch (i) {
                    case "value":
                      a = c;
                      break;
                    case "defaultValue":
                      u = c;
                      break;
                    case "children":
                      n = c;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (c != null) throw Error(m(91));
                      break;
                    default:
                      cl(l, t, i, c, e, null);
                  }
              Rf(l, a, u, n);
              return;
            case "option":
              for (f in e)
                if (e.hasOwnProperty(f) && ((a = e[f]), a != null))
                  switch (f) {
                    case "selected":
                      l.selected =
                        a && typeof a != "function" && typeof a != "symbol";
                      break;
                    default:
                      cl(l, t, f, a, e, null);
                  }
              return;
            case "dialog":
              (w("beforetoggle", l),
                w("toggle", l),
                w("cancel", l),
                w("close", l));
              break;
            case "iframe":
            case "object":
              w("load", l);
              break;
            case "video":
            case "audio":
              for (a = 0; a < ru.length; a++) w(ru[a], l);
              break;
            case "image":
              (w("error", l), w("load", l));
              break;
            case "details":
              w("toggle", l);
              break;
            case "embed":
            case "source":
            case "link":
              (w("error", l), w("load", l));
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (v in e)
                if (e.hasOwnProperty(v) && ((a = e[v]), a != null))
                  switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(m(137, t));
                    default:
                      cl(l, t, v, a, e, null);
                  }
              return;
            default:
              if (ei(t)) {
                for (p in e)
                  e.hasOwnProperty(p) &&
                    ((a = e[p]), a !== void 0 && Zc(l, t, p, a, e, void 0));
                return;
              }
          }
          for (c in e)
            e.hasOwnProperty(c) &&
              ((a = e[c]), a != null && cl(l, t, c, a, e, null));
        }
        function xy(l, t, e, a) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "input":
              var u = null,
                n = null,
                i = null,
                c = null,
                f = null,
                v = null,
                p = null;
              for (g in e) {
                var x = e[g];
                if (e.hasOwnProperty(g) && x != null)
                  switch (g) {
                    case "checked":
                      break;
                    case "value":
                      break;
                    case "defaultValue":
                      f = x;
                    default:
                      a.hasOwnProperty(g) || cl(l, t, g, null, a, x);
                  }
              }
              for (var h in a) {
                var g = a[h];
                if (
                  ((x = e[h]), a.hasOwnProperty(h) && (g != null || x != null))
                )
                  switch (h) {
                    case "type":
                      n = g;
                      break;
                    case "name":
                      u = g;
                      break;
                    case "checked":
                      v = g;
                      break;
                    case "defaultChecked":
                      p = g;
                      break;
                    case "value":
                      i = g;
                      break;
                    case "defaultValue":
                      c = g;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (g != null) throw Error(m(137, t));
                      break;
                    default:
                      g !== x && cl(l, t, h, g, a, x);
                  }
              }
              li(l, i, c, f, v, p, n, u);
              return;
            case "select":
              g = i = c = h = null;
              for (n in e)
                if (((f = e[n]), e.hasOwnProperty(n) && f != null))
                  switch (n) {
                    case "value":
                      break;
                    case "multiple":
                      g = f;
                    default:
                      a.hasOwnProperty(n) || cl(l, t, n, null, a, f);
                  }
              for (u in a)
                if (
                  ((n = a[u]),
                  (f = e[u]),
                  a.hasOwnProperty(u) && (n != null || f != null))
                )
                  switch (u) {
                    case "value":
                      h = n;
                      break;
                    case "defaultValue":
                      c = n;
                      break;
                    case "multiple":
                      i = n;
                    default:
                      n !== f && cl(l, t, u, n, a, f);
                  }
              ((t = c),
                (e = i),
                (a = g),
                h != null
                  ? We(l, !!e, h, !1)
                  : !!a != !!e &&
                    (t != null
                      ? We(l, !!e, t, !0)
                      : We(l, !!e, e ? [] : "", !1)));
              return;
            case "textarea":
              g = h = null;
              for (c in e)
                if (
                  ((u = e[c]),
                  e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
                )
                  switch (c) {
                    case "value":
                      break;
                    case "children":
                      break;
                    default:
                      cl(l, t, c, null, a, u);
                  }
              for (i in a)
                if (
                  ((u = a[i]),
                  (n = e[i]),
                  a.hasOwnProperty(i) && (u != null || n != null))
                )
                  switch (i) {
                    case "value":
                      h = u;
                      break;
                    case "defaultValue":
                      g = u;
                      break;
                    case "children":
                      break;
                    case "dangerouslySetInnerHTML":
                      if (u != null) throw Error(m(91));
                      break;
                    default:
                      u !== n && cl(l, t, i, u, a, n);
                  }
              Cf(l, h, g);
              return;
            case "option":
              for (var M in e)
                if (
                  ((h = e[M]),
                  e.hasOwnProperty(M) && h != null && !a.hasOwnProperty(M))
                )
                  switch (M) {
                    case "selected":
                      l.selected = !1;
                      break;
                    default:
                      cl(l, t, M, null, a, h);
                  }
              for (f in a)
                if (
                  ((h = a[f]),
                  (g = e[f]),
                  a.hasOwnProperty(f) && h !== g && (h != null || g != null))
                )
                  switch (f) {
                    case "selected":
                      l.selected =
                        h && typeof h != "function" && typeof h != "symbol";
                      break;
                    default:
                      cl(l, t, f, h, a, g);
                  }
              return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
              for (var q in e)
                ((h = e[q]),
                  e.hasOwnProperty(q) &&
                    h != null &&
                    !a.hasOwnProperty(q) &&
                    cl(l, t, q, null, a, h));
              for (v in a)
                if (
                  ((h = a[v]),
                  (g = e[v]),
                  a.hasOwnProperty(v) && h !== g && (h != null || g != null))
                )
                  switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (h != null) throw Error(m(137, t));
                      break;
                    default:
                      cl(l, t, v, h, a, g);
                  }
              return;
            default:
              if (ei(t)) {
                for (var fl in e)
                  ((h = e[fl]),
                    e.hasOwnProperty(fl) &&
                      h !== void 0 &&
                      !a.hasOwnProperty(fl) &&
                      Zc(l, t, fl, void 0, a, h));
                for (p in a)
                  ((h = a[p]),
                    (g = e[p]),
                    !a.hasOwnProperty(p) ||
                      h === g ||
                      (h === void 0 && g === void 0) ||
                      Zc(l, t, p, h, a, g));
                return;
              }
          }
          for (var d in e)
            ((h = e[d]),
              e.hasOwnProperty(d) &&
                h != null &&
                !a.hasOwnProperty(d) &&
                cl(l, t, d, null, a, h));
          for (x in a)
            ((h = a[x]),
              (g = e[x]),
              !a.hasOwnProperty(x) ||
                h === g ||
                (h == null && g == null) ||
                cl(l, t, x, h, a, g));
        }
        function Yr(l) {
          switch (l) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
              return !0;
            default:
              return !1;
          }
        }
        function zy() {
          if (typeof performance.getEntriesByType == "function") {
            for (
              var l = 0,
                t = 0,
                e = performance.getEntriesByType("resource"),
                a = 0;
              a < e.length;
              a++
            ) {
              var u = e[a],
                n = u.transferSize,
                i = u.initiatorType,
                c = u.duration;
              if (n && c && Yr(i)) {
                for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
                  var f = e[a],
                    v = f.startTime;
                  if (v > c) break;
                  var p = f.transferSize,
                    x = f.initiatorType;
                  p &&
                    Yr(x) &&
                    ((f = f.responseEnd),
                    (i += p * (f < c ? 1 : (c - v) / (f - v))));
                }
                if (
                  (--a, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l)
                )
                  break;
              }
            }
            if (0 < l) return t / l / 1e6;
          }
          return navigator.connection &&
            ((l = navigator.connection.downlink), typeof l == "number")
            ? l
            : 5;
        }
        var Vc = null,
          Lc = null;
        function Mn(l) {
          return l.nodeType === 9 ? l : l.ownerDocument;
        }
        function Gr(l) {
          switch (l) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Qr(l, t) {
          if (l === 0)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return l === 1 && t === "foreignObject" ? 0 : l;
        }
        function Kc(l, t) {
          return (
            l === "textarea" ||
            l === "noscript" ||
            typeof t.children == "string" ||
            typeof t.children == "number" ||
            typeof t.children == "bigint" ||
            (typeof t.dangerouslySetInnerHTML == "object" &&
              t.dangerouslySetInnerHTML !== null &&
              t.dangerouslySetInnerHTML.__html != null)
          );
        }
        var Jc = null;
        function Ty() {
          var l = window.event;
          return l && l.type === "popstate"
            ? l === Jc
              ? !1
              : ((Jc = l), !0)
            : ((Jc = null), !1);
        }
        var Xr = typeof setTimeout == "function" ? setTimeout : void 0,
          Ay = typeof clearTimeout == "function" ? clearTimeout : void 0,
          Zr = typeof Promise == "function" ? Promise : void 0,
          Ey =
            typeof queueMicrotask == "function"
              ? queueMicrotask
              : typeof Zr < "u"
                ? function (l) {
                    return Zr.resolve(null).then(l).catch(jy);
                  }
                : Xr;
        function jy(l) {
          setTimeout(function () {
            throw l;
          });
        }
        function he(l) {
          return l === "head";
        }
        function Vr(l, t) {
          var e = t,
            a = 0;
          do {
            var u = e.nextSibling;
            if ((l.removeChild(e), u && u.nodeType === 8))
              if (((e = u.data), e === "/$" || e === "/&")) {
                if (a === 0) {
                  (l.removeChild(u), ja(t));
                  return;
                }
                a--;
              } else if (
                e === "$" ||
                e === "$?" ||
                e === "$~" ||
                e === "$!" ||
                e === "&"
              )
                a++;
              else if (e === "html") mu(l.ownerDocument.documentElement);
              else if (e === "head") {
                ((e = l.ownerDocument.head), mu(e));
                for (var n = e.firstChild; n; ) {
                  var i = n.nextSibling,
                    c = n.nodeName;
                  (n[Na] ||
                    c === "SCRIPT" ||
                    c === "STYLE" ||
                    (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
                    e.removeChild(n),
                    (n = i));
                }
              } else e === "body" && mu(l.ownerDocument.body);
            e = u;
          } while (e);
          ja(t);
        }
        function Lr(l, t) {
          var e = l;
          l = 0;
          do {
            var a = e.nextSibling;
            if (
              (e.nodeType === 1
                ? t
                  ? ((e._stashedDisplay = e.style.display),
                    (e.style.display = "none"))
                  : ((e.style.display = e._stashedDisplay || ""),
                    e.getAttribute("style") === "" &&
                      e.removeAttribute("style"))
                : e.nodeType === 3 &&
                  (t
                    ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
                    : (e.nodeValue = e._stashedText || "")),
              a && a.nodeType === 8)
            )
              if (((e = a.data), e === "/$")) {
                if (l === 0) break;
                l--;
              } else
                (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
            e = a;
          } while (e);
        }
        function wc(l) {
          var t = l.firstChild;
          for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var e = t;
            switch (((t = t.nextSibling), e.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (wc(e), In(e));
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if (e.rel.toLowerCase() === "stylesheet") continue;
            }
            l.removeChild(e);
          }
        }
        function _y(l, t, e, a) {
          for (; l.nodeType === 1; ) {
            var u = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
              if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
            } else if (a) {
              if (!l[Na])
                switch (t) {
                  case "meta":
                    if (!l.hasAttribute("itemprop")) break;
                    return l;
                  case "link":
                    if (
                      ((n = l.getAttribute("rel")),
                      n === "stylesheet" && l.hasAttribute("data-precedence"))
                    )
                      break;
                    if (
                      n !== u.rel ||
                      l.getAttribute("href") !==
                        (u.href == null || u.href === "" ? null : u.href) ||
                      l.getAttribute("crossorigin") !==
                        (u.crossOrigin == null ? null : u.crossOrigin) ||
                      l.getAttribute("title") !==
                        (u.title == null ? null : u.title)
                    )
                      break;
                    return l;
                  case "style":
                    if (l.hasAttribute("data-precedence")) break;
                    return l;
                  case "script":
                    if (
                      ((n = l.getAttribute("src")),
                      (n !== (u.src == null ? null : u.src) ||
                        l.getAttribute("type") !==
                          (u.type == null ? null : u.type) ||
                        l.getAttribute("crossorigin") !==
                          (u.crossOrigin == null ? null : u.crossOrigin)) &&
                        n &&
                        l.hasAttribute("async") &&
                        !l.hasAttribute("itemprop"))
                    )
                      break;
                    return l;
                  default:
                    return l;
                }
            } else if (t === "input" && l.type === "hidden") {
              var n = u.name == null ? null : "" + u.name;
              if (u.type === "hidden" && l.getAttribute("name") === n) return l;
            } else return l;
            if (((l = gt(l.nextSibling)), l === null)) break;
          }
          return null;
        }
        function My(l, t, e) {
          if (t === "") return null;
          for (; l.nodeType !== 3; )
            if (
              ((l.nodeType !== 1 ||
                l.nodeName !== "INPUT" ||
                l.type !== "hidden") &&
                !e) ||
              ((l = gt(l.nextSibling)), l === null)
            )
              return null;
          return l;
        }
        function Kr(l, t) {
          for (; l.nodeType !== 8; )
            if (
              ((l.nodeType !== 1 ||
                l.nodeName !== "INPUT" ||
                l.type !== "hidden") &&
                !t) ||
              ((l = gt(l.nextSibling)), l === null)
            )
              return null;
          return l;
        }
        function Wc(l) {
          return l.data === "$?" || l.data === "$~";
        }
        function kc(l) {
          return (
            l.data === "$!" ||
            (l.data === "$?" && l.ownerDocument.readyState !== "loading")
          );
        }
        function Oy(l, t) {
          var e = l.ownerDocument;
          if (l.data === "$~") l._reactRetry = t;
          else if (l.data !== "$?" || e.readyState !== "loading") t();
          else {
            var a = function () {
              (t(), e.removeEventListener("DOMContentLoaded", a));
            };
            (e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a));
          }
        }
        function gt(l) {
          for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
              if (
                ((t = l.data),
                t === "$" ||
                  t === "$!" ||
                  t === "$?" ||
                  t === "$~" ||
                  t === "&" ||
                  t === "F!" ||
                  t === "F")
              )
                break;
              if (t === "/$" || t === "/&") return null;
            }
          }
          return l;
        }
        var $c = null;
        function Jr(l) {
          l = l.nextSibling;
          for (var t = 0; l; ) {
            if (l.nodeType === 8) {
              var e = l.data;
              if (e === "/$" || e === "/&") {
                if (t === 0) return gt(l.nextSibling);
                t--;
              } else
                (e !== "$" &&
                  e !== "$!" &&
                  e !== "$?" &&
                  e !== "$~" &&
                  e !== "&") ||
                  t++;
            }
            l = l.nextSibling;
          }
          return null;
        }
        function wr(l) {
          l = l.previousSibling;
          for (var t = 0; l; ) {
            if (l.nodeType === 8) {
              var e = l.data;
              if (
                e === "$" ||
                e === "$!" ||
                e === "$?" ||
                e === "$~" ||
                e === "&"
              ) {
                if (t === 0) return l;
                t--;
              } else (e !== "/$" && e !== "/&") || t++;
            }
            l = l.previousSibling;
          }
          return null;
        }
        function Wr(l, t, e) {
          switch (((t = Mn(e)), l)) {
            case "html":
              if (((l = t.documentElement), !l)) throw Error(m(452));
              return l;
            case "head":
              if (((l = t.head), !l)) throw Error(m(453));
              return l;
            case "body":
              if (((l = t.body), !l)) throw Error(m(454));
              return l;
            default:
              throw Error(m(451));
          }
        }
        function mu(l) {
          for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
          In(l);
        }
        var pt = new Map(),
          kr = new Set();
        function On(l) {
          return typeof l.getRootNode == "function"
            ? l.getRootNode()
            : l.nodeType === 9
              ? l
              : l.ownerDocument;
        }
        var kt = E.d;
        E.d = { f: Dy, r: Ny, D: Uy, C: Cy, L: Ry, m: Hy, X: qy, S: By, M: Yy };
        function Dy() {
          var l = kt.f(),
            t = bn();
          return l || t;
        }
        function Ny(l) {
          var t = Ke(l);
          t !== null && t.tag === 5 && t.type === "form" ? ro(t) : kt.r(l);
        }
        var Ta = typeof document > "u" ? null : document;
        function $r(l, t, e) {
          var a = Ta;
          if (a && typeof t == "string" && t) {
            var u = ot(t);
            ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
              typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
              kr.has(u) ||
                (kr.add(u),
                (l = { rel: l, crossOrigin: e, href: t }),
                a.querySelector(u) === null &&
                  ((t = a.createElement("link")),
                  Ul(t, "link", l),
                  jl(t),
                  a.head.appendChild(t))));
          }
        }
        function Uy(l) {
          (kt.D(l), $r("dns-prefetch", l, null));
        }
        function Cy(l, t) {
          (kt.C(l, t), $r("preconnect", l, t));
        }
        function Ry(l, t, e) {
          kt.L(l, t, e);
          var a = Ta;
          if (a && l && t) {
            var u = 'link[rel="preload"][as="' + ot(t) + '"]';
            t === "image" && e && e.imageSrcSet
              ? ((u += '[imagesrcset="' + ot(e.imageSrcSet) + '"]'),
                typeof e.imageSizes == "string" &&
                  (u += '[imagesizes="' + ot(e.imageSizes) + '"]'))
              : (u += '[href="' + ot(l) + '"]');
            var n = u;
            switch (t) {
              case "style":
                n = Aa(l);
                break;
              case "script":
                n = Ea(l);
            }
            pt.has(n) ||
              ((l = Y(
                {
                  rel: "preload",
                  href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                  as: t,
                },
                e,
              )),
              pt.set(n, l),
              a.querySelector(u) !== null ||
                (t === "style" && a.querySelector(yu(n))) ||
                (t === "script" && a.querySelector(vu(n))) ||
                ((t = a.createElement("link")),
                Ul(t, "link", l),
                jl(t),
                a.head.appendChild(t)));
          }
        }
        function Hy(l, t) {
          kt.m(l, t);
          var e = Ta;
          if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script",
              u =
                'link[rel="modulepreload"][as="' +
                ot(a) +
                '"][href="' +
                ot(l) +
                '"]',
              n = u;
            switch (a) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                n = Ea(l);
            }
            if (
              !pt.has(n) &&
              ((l = Y({ rel: "modulepreload", href: l }, t)),
              pt.set(n, l),
              e.querySelector(u) === null)
            ) {
              switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  if (e.querySelector(vu(n))) return;
              }
              ((a = e.createElement("link")),
                Ul(a, "link", l),
                jl(a),
                e.head.appendChild(a));
            }
          }
        }
        function By(l, t, e) {
          kt.S(l, t, e);
          var a = Ta;
          if (a && l) {
            var u = Je(a).hoistableStyles,
              n = Aa(l);
            t = t || "default";
            var i = u.get(n);
            if (!i) {
              var c = { loading: 0, preload: null };
              if ((i = a.querySelector(yu(n)))) c.loading = 5;
              else {
                ((l = Y(
                  { rel: "stylesheet", href: l, "data-precedence": t },
                  e,
                )),
                  (e = pt.get(n)) && Fc(l, e));
                var f = (i = a.createElement("link"));
                (jl(f),
                  Ul(f, "link", l),
                  (f._p = new Promise(function (v, p) {
                    ((f.onload = v), (f.onerror = p));
                  })),
                  f.addEventListener("load", function () {
                    c.loading |= 1;
                  }),
                  f.addEventListener("error", function () {
                    c.loading |= 2;
                  }),
                  (c.loading |= 4),
                  Dn(i, t, a));
              }
              ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
                u.set(n, i));
            }
          }
        }
        function qy(l, t) {
          kt.X(l, t);
          var e = Ta;
          if (e && l) {
            var a = Je(e).hoistableScripts,
              u = Ea(l),
              n = a.get(u);
            n ||
              ((n = e.querySelector(vu(u))),
              n ||
                ((l = Y({ src: l, async: !0 }, t)),
                (t = pt.get(u)) && Ic(l, t),
                (n = e.createElement("script")),
                jl(n),
                Ul(n, "link", l),
                e.head.appendChild(n)),
              (n = { type: "script", instance: n, count: 1, state: null }),
              a.set(u, n));
          }
        }
        function Yy(l, t) {
          kt.M(l, t);
          var e = Ta;
          if (e && l) {
            var a = Je(e).hoistableScripts,
              u = Ea(l),
              n = a.get(u);
            n ||
              ((n = e.querySelector(vu(u))),
              n ||
                ((l = Y({ src: l, async: !0, type: "module" }, t)),
                (t = pt.get(u)) && Ic(l, t),
                (n = e.createElement("script")),
                jl(n),
                Ul(n, "link", l),
                e.head.appendChild(n)),
              (n = { type: "script", instance: n, count: 1, state: null }),
              a.set(u, n));
          }
        }
        function Fr(l, t, e, a) {
          var u = (u = K.current) ? On(u) : null;
          if (!u) throw Error(m(446));
          switch (l) {
            case "meta":
            case "title":
              return null;
            case "style":
              return typeof e.precedence == "string" &&
                typeof e.href == "string"
                ? ((t = Aa(e.href)),
                  (e = Je(u).hoistableStyles),
                  (a = e.get(t)),
                  a ||
                    ((a = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    e.set(t, a)),
                  a)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                e.rel === "stylesheet" &&
                typeof e.href == "string" &&
                typeof e.precedence == "string"
              ) {
                l = Aa(e.href);
                var n = Je(u).hoistableStyles,
                  i = n.get(l);
                if (
                  (i ||
                    ((u = u.ownerDocument || u),
                    (i = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    n.set(l, i),
                    (n = u.querySelector(yu(l))) &&
                      !n._p &&
                      ((i.instance = n), (i.state.loading = 5)),
                    pt.has(l) ||
                      ((e = {
                        rel: "preload",
                        as: "style",
                        href: e.href,
                        crossOrigin: e.crossOrigin,
                        integrity: e.integrity,
                        media: e.media,
                        hrefLang: e.hrefLang,
                        referrerPolicy: e.referrerPolicy,
                      }),
                      pt.set(l, e),
                      n || Gy(u, l, e, i.state))),
                  t && a === null)
                )
                  throw Error(m(528, ""));
                return i;
              }
              if (t && a !== null) throw Error(m(529, ""));
              return null;
            case "script":
              return (
                (t = e.async),
                (e = e.src),
                typeof e == "string" &&
                t &&
                typeof t != "function" &&
                typeof t != "symbol"
                  ? ((t = Ea(e)),
                    (e = Je(u).hoistableScripts),
                    (a = e.get(t)),
                    a ||
                      ((a = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      e.set(t, a)),
                    a)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(m(444, l));
          }
        }
        function Aa(l) {
          return 'href="' + ot(l) + '"';
        }
        function yu(l) {
          return 'link[rel="stylesheet"][' + l + "]";
        }
        function Ir(l) {
          return Y({}, l, {
            "data-precedence": l.precedence,
            precedence: null,
          });
        }
        function Gy(l, t, e, a) {
          l.querySelector('link[rel="preload"][as="style"][' + t + "]")
            ? (a.loading = 1)
            : ((t = l.createElement("link")),
              (a.preload = t),
              t.addEventListener("load", function () {
                return (a.loading |= 1);
              }),
              t.addEventListener("error", function () {
                return (a.loading |= 2);
              }),
              Ul(t, "link", e),
              jl(t),
              l.head.appendChild(t));
        }
        function Ea(l) {
          return '[src="' + ot(l) + '"]';
        }
        function vu(l) {
          return "script[async]" + l;
        }
        function Pr(l, t, e) {
          if ((t.count++, t.instance === null))
            switch (t.type) {
              case "style":
                var a = l.querySelector(
                  'style[data-href~="' + ot(e.href) + '"]',
                );
                if (a) return ((t.instance = a), jl(a), a);
                var u = Y({}, e, {
                  "data-href": e.href,
                  "data-precedence": e.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  (a = (l.ownerDocument || l).createElement("style")),
                  jl(a),
                  Ul(a, "style", u),
                  Dn(a, e.precedence, l),
                  (t.instance = a)
                );
              case "stylesheet":
                u = Aa(e.href);
                var n = l.querySelector(yu(u));
                if (n)
                  return ((t.state.loading |= 4), (t.instance = n), jl(n), n);
                ((a = Ir(e)),
                  (u = pt.get(u)) && Fc(a, u),
                  (n = (l.ownerDocument || l).createElement("link")),
                  jl(n));
                var i = n;
                return (
                  (i._p = new Promise(function (c, f) {
                    ((i.onload = c), (i.onerror = f));
                  })),
                  Ul(n, "link", a),
                  (t.state.loading |= 4),
                  Dn(n, e.precedence, l),
                  (t.instance = n)
                );
              case "script":
                return (
                  (n = Ea(e.src)),
                  (u = l.querySelector(vu(n)))
                    ? ((t.instance = u), jl(u), u)
                    : ((a = e),
                      (u = pt.get(n)) && ((a = Y({}, e)), Ic(a, u)),
                      (l = l.ownerDocument || l),
                      (u = l.createElement("script")),
                      jl(u),
                      Ul(u, "link", a),
                      l.head.appendChild(u),
                      (t.instance = u))
                );
              case "void":
                return null;
              default:
                throw Error(m(443, t.type));
            }
          else
            t.type === "stylesheet" &&
              (t.state.loading & 4) === 0 &&
              ((a = t.instance),
              (t.state.loading |= 4),
              Dn(a, e.precedence, l));
          return t.instance;
        }
        function Dn(l, t, e) {
          for (
            var a = e.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]',
              ),
              u = a.length ? a[a.length - 1] : null,
              n = u,
              i = 0;
            i < a.length;
            i++
          ) {
            var c = a[i];
            if (c.dataset.precedence === t) n = c;
            else if (n !== u) break;
          }
          n
            ? n.parentNode.insertBefore(l, n.nextSibling)
            : ((t = e.nodeType === 9 ? e.head : e),
              t.insertBefore(l, t.firstChild));
        }
        function Fc(l, t) {
          (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
            l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
            l.title == null && (l.title = t.title));
        }
        function Ic(l, t) {
          (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
            l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
            l.integrity == null && (l.integrity = t.integrity));
        }
        var Nn = null;
        function ld(l, t, e) {
          if (Nn === null) {
            var a = new Map(),
              u = (Nn = new Map());
            u.set(e, a);
          } else
            ((u = Nn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a)));
          if (a.has(l)) return a;
          for (
            a.set(l, null), e = e.getElementsByTagName(l), u = 0;
            u < e.length;
            u++
          ) {
            var n = e[u];
            if (
              !(
                n[Na] ||
                n[Ml] ||
                (l === "link" && n.getAttribute("rel") === "stylesheet")
              ) &&
              n.namespaceURI !== "http://www.w3.org/2000/svg"
            ) {
              var i = n.getAttribute(t) || "";
              i = l + i;
              var c = a.get(i);
              c ? c.push(n) : a.set(i, [n]);
            }
          }
          return a;
        }
        function td(l, t, e) {
          ((l = l.ownerDocument || l),
            l.head.insertBefore(
              e,
              t === "title" ? l.querySelector("head > title") : null,
            ));
        }
        function Qy(l, t, e) {
          if (e === 1 || t.itemProp != null) return !1;
          switch (l) {
            case "meta":
            case "title":
              return !0;
            case "style":
              if (
                typeof t.precedence != "string" ||
                typeof t.href != "string" ||
                t.href === ""
              )
                break;
              return !0;
            case "link":
              if (
                typeof t.rel != "string" ||
                typeof t.href != "string" ||
                t.href === "" ||
                t.onLoad ||
                t.onError
              )
                break;
              switch (t.rel) {
                case "stylesheet":
                  return (
                    (l = t.disabled),
                    typeof t.precedence == "string" && l == null
                  );
                default:
                  return !0;
              }
            case "script":
              if (
                t.async &&
                typeof t.async != "function" &&
                typeof t.async != "symbol" &&
                !t.onLoad &&
                !t.onError &&
                t.src &&
                typeof t.src == "string"
              )
                return !0;
          }
          return !1;
        }
        function ed(l) {
          return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
        }
        function Xy(l, t, e, a) {
          if (
            e.type === "stylesheet" &&
            (typeof a.media != "string" ||
              matchMedia(a.media).matches !== !1) &&
            (e.state.loading & 4) === 0
          ) {
            if (e.instance === null) {
              var u = Aa(a.href),
                n = t.querySelector(yu(u));
              if (n) {
                ((t = n._p),
                  t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function" &&
                    (l.count++, (l = Un.bind(l)), t.then(l, l)),
                  (e.state.loading |= 4),
                  (e.instance = n),
                  jl(n));
                return;
              }
              ((n = t.ownerDocument || t),
                (a = Ir(a)),
                (u = pt.get(u)) && Fc(a, u),
                (n = n.createElement("link")),
                jl(n));
              var i = n;
              ((i._p = new Promise(function (c, f) {
                ((i.onload = c), (i.onerror = f));
              })),
                Ul(n, "link", a),
                (e.instance = n));
            }
            (l.stylesheets === null && (l.stylesheets = new Map()),
              l.stylesheets.set(e, t),
              (t = e.state.preload) &&
                (e.state.loading & 3) === 0 &&
                (l.count++,
                (e = Un.bind(l)),
                t.addEventListener("load", e),
                t.addEventListener("error", e)));
          }
        }
        var Pc = 0;
        function Zy(l, t) {
          return (
            l.stylesheets && l.count === 0 && Rn(l, l.stylesheets),
            0 < l.count || 0 < l.imgCount
              ? function (e) {
                  var a = setTimeout(function () {
                    if ((l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
                      var n = l.unsuspend;
                      ((l.unsuspend = null), n());
                    }
                  }, 6e4 + t);
                  0 < l.imgBytes && Pc === 0 && (Pc = 62500 * zy());
                  var u = setTimeout(
                    function () {
                      if (
                        ((l.waitingForImages = !1),
                        l.count === 0 &&
                          (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend))
                      ) {
                        var n = l.unsuspend;
                        ((l.unsuspend = null), n());
                      }
                    },
                    (l.imgBytes > Pc ? 50 : 800) + t,
                  );
                  return (
                    (l.unsuspend = e),
                    function () {
                      ((l.unsuspend = null), clearTimeout(a), clearTimeout(u));
                    }
                  );
                }
              : null
          );
        }
        function Un() {
          if (
            (this.count--,
            this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
          ) {
            if (this.stylesheets) Rn(this, this.stylesheets);
            else if (this.unsuspend) {
              var l = this.unsuspend;
              ((this.unsuspend = null), l());
            }
          }
        }
        var Cn = null;
        function Rn(l, t) {
          ((l.stylesheets = null),
            l.unsuspend !== null &&
              (l.count++,
              (Cn = new Map()),
              t.forEach(Vy, l),
              (Cn = null),
              Un.call(l)));
        }
        function Vy(l, t) {
          if (!(t.state.loading & 4)) {
            var e = Cn.get(l);
            if (e) var a = e.get(null);
            else {
              ((e = new Map()), Cn.set(l, e));
              for (
                var u = l.querySelectorAll(
                    "link[data-precedence],style[data-precedence]",
                  ),
                  n = 0;
                n < u.length;
                n++
              ) {
                var i = u[n];
                (i.nodeName === "LINK" ||
                  i.getAttribute("media") !== "not all") &&
                  (e.set(i.dataset.precedence, i), (a = i));
              }
              a && e.set(null, a);
            }
            ((u = t.instance),
              (i = u.getAttribute("data-precedence")),
              (n = e.get(i) || a),
              n === a && e.set(null, u),
              e.set(i, u),
              this.count++,
              (a = Un.bind(this)),
              u.addEventListener("load", a),
              u.addEventListener("error", a),
              n
                ? n.parentNode.insertBefore(u, n.nextSibling)
                : ((l = l.nodeType === 9 ? l.head : l),
                  l.insertBefore(u, l.firstChild)),
              (t.state.loading |= 4));
          }
        }
        var hu = {
          $typeof: Cl,
          Provider: null,
          Consumer: null,
          _currentValue: G,
          _currentValue2: G,
          _threadCount: 0,
        };
        function Ly(l, t, e, a, u, n, i, c, f) {
          ((this.tag = 1),
            (this.containerInfo = l),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Wn(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Wn(0)),
            (this.hiddenUpdates = Wn(null)),
            (this.identifierPrefix = a),
            (this.onUncaughtError = u),
            (this.onCaughtError = n),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = f),
            (this.incompleteTransitions = new Map()));
        }
        function ad(l, t, e, a, u, n, i, c, f, v, p, x) {
          return (
            (l = new Ly(l, t, e, i, f, v, p, x, c)),
            (t = 1),
            n === !0 && (t |= 24),
            (n = tt(3, null, null, t)),
            (l.current = n),
            (n.stateNode = l),
            (t = Ui()),
            t.refCount++,
            (l.pooledCache = t),
            t.refCount++,
            (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
            Bi(n),
            l
          );
        }
        function ud(l) {
          return l ? ((l = ea), l) : ea;
        }
        function nd(l, t, e, a, u, n) {
          ((u = ud(u)),
            a.context === null ? (a.context = u) : (a.pendingContext = u),
            (a = ne(t)),
            (a.payload = { element: e }),
            (n = n === void 0 ? null : n),
            n !== null && (a.callback = n),
            (e = ie(l, a, t)),
            e !== null && (Wl(e, l, t), Wa(e, l, t)));
        }
        function id(l, t) {
          if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t;
          }
        }
        function lf(l, t) {
          (id(l, t), (l = l.alternate) && id(l, t));
        }
        function cd(l) {
          if (l.tag === 13 || l.tag === 31) {
            var t = Oe(l, 67108864);
            (t !== null && Wl(t, l, 67108864), lf(l, 67108864));
          }
        }
        function fd(l) {
          if (l.tag === 13 || l.tag === 31) {
            var t = it();
            t = kn(t);
            var e = Oe(l, t);
            (e !== null && Wl(e, l, t), lf(l, t));
          }
        }
        var Hn = !0;
        function Ky(l, t, e, a) {
          var u = S.T;
          S.T = null;
          var n = E.p;
          try {
            ((E.p = 2), tf(l, t, e, a));
          } finally {
            ((E.p = n), (S.T = u));
          }
        }
        function Jy(l, t, e, a) {
          var u = S.T;
          S.T = null;
          var n = E.p;
          try {
            ((E.p = 8), tf(l, t, e, a));
          } finally {
            ((E.p = n), (S.T = u));
          }
        }
        function tf(l, t, e, a) {
          if (Hn) {
            var u = ef(a);
            if (u === null) (Xc(l, t, a, Bn, e), od(l, a));
            else if (Wy(u, l, t, e, a)) a.stopPropagation();
            else if ((od(l, a), t & 4 && -1 < wy.indexOf(l))) {
              for (; u !== null; ) {
                var n = Ke(u);
                if (n !== null)
                  switch (n.tag) {
                    case 3:
                      if (
                        ((n = n.stateNode),
                        n.current.memoizedState.isDehydrated)
                      ) {
                        var i = Ae(n.pendingLanes);
                        if (i !== 0) {
                          var c = n;
                          for (
                            c.pendingLanes |= 2, c.entangledLanes |= 2;
                            i;
                          ) {
                            var f = 1 << (31 - Pl(i));
                            ((c.entanglements[1] |= f), (i &= ~f));
                          }
                          (Ot(n), (ll & 6) === 0 && ((pn = Fl() + 500), ou(0)));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      ((c = Oe(n, 2)),
                        c !== null && Wl(c, n, 2),
                        bn(),
                        lf(n, 2));
                  }
                if (((n = ef(a)), n === null && Xc(l, t, a, Bn, e), n === u))
                  break;
                u = n;
              }
              u !== null && a.stopPropagation();
            } else Xc(l, t, a, null, e);
          }
        }
        function ef(l) {
          return ((l = ui(l)), af(l));
        }
        var Bn = null;
        function af(l) {
          if (((Bn = null), (l = Le(l)), l !== null)) {
            var t = B(l);
            if (t === null) l = null;
            else {
              var e = t.tag;
              if (e === 13) {
                if (((l = V(t)), l !== null)) return l;
                l = null;
              } else if (e === 31) {
                if (((l = U(t)), l !== null)) return l;
                l = null;
              } else if (e === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return t.tag === 3 ? t.stateNode.containerInfo : null;
                l = null;
              } else t !== l && (l = null);
            }
          }
          return ((Bn = l), null);
        }
        function sd(l) {
          switch (l) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (Ud()) {
                case hf:
                  return 2;
                case gf:
                  return 8;
                case Au:
                case Cd:
                  return 32;
                case pf:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var uf = !1,
          ge = null,
          pe = null,
          Se = null,
          gu = new Map(),
          pu = new Map(),
          be = [],
          wy =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " ",
            );
        function od(l, t) {
          switch (l) {
            case "focusin":
            case "focusout":
              ge = null;
              break;
            case "dragenter":
            case "dragleave":
              pe = null;
              break;
            case "mouseover":
            case "mouseout":
              Se = null;
              break;
            case "pointerover":
            case "pointerout":
              gu.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              pu.delete(t.pointerId);
          }
        }
        function Su(l, t, e, a, u, n) {
          return l === null || l.nativeEvent !== n
            ? ((l = {
                blockedOn: t,
                domEventName: e,
                eventSystemFlags: a,
                nativeEvent: n,
                targetContainers: [u],
              }),
              t !== null && ((t = Ke(t)), t !== null && cd(t)),
              l)
            : ((l.eventSystemFlags |= a),
              (t = l.targetContainers),
              u !== null && t.indexOf(u) === -1 && t.push(u),
              l);
        }
        function Wy(l, t, e, a, u) {
          switch (t) {
            case "focusin":
              return ((ge = Su(ge, l, t, e, a, u)), !0);
            case "dragenter":
              return ((pe = Su(pe, l, t, e, a, u)), !0);
            case "mouseover":
              return ((Se = Su(Se, l, t, e, a, u)), !0);
            case "pointerover":
              var n = u.pointerId;
              return (gu.set(n, Su(gu.get(n) || null, l, t, e, a, u)), !0);
            case "gotpointercapture":
              return (
                (n = u.pointerId),
                pu.set(n, Su(pu.get(n) || null, l, t, e, a, u)),
                !0
              );
          }
          return !1;
        }
        function rd(l) {
          var t = Le(l.target);
          if (t !== null) {
            var e = B(t);
            if (e !== null) {
              if (((t = e.tag), t === 13)) {
                if (((t = V(e)), t !== null)) {
                  ((l.blockedOn = t),
                    Af(l.priority, function () {
                      fd(e);
                    }));
                  return;
                }
              } else if (t === 31) {
                if (((t = U(e)), t !== null)) {
                  ((l.blockedOn = t),
                    Af(l.priority, function () {
                      fd(e);
                    }));
                  return;
                }
              } else if (
                t === 3 &&
                e.stateNode.current.memoizedState.isDehydrated
              ) {
                l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                return;
              }
            }
          }
          l.blockedOn = null;
        }
        function qn(l) {
          if (l.blockedOn !== null) return !1;
          for (var t = l.targetContainers; 0 < t.length; ) {
            var e = ef(l.nativeEvent);
            if (e === null) {
              e = l.nativeEvent;
              var a = new e.constructor(e.type, e);
              ((ai = a), e.target.dispatchEvent(a), (ai = null));
            } else
              return ((t = Ke(e)), t !== null && cd(t), (l.blockedOn = e), !1);
            t.shift();
          }
          return !0;
        }
        function dd(l, t, e) {
          qn(l) && e.delete(t);
        }
        function ky() {
          ((uf = !1),
            ge !== null && qn(ge) && (ge = null),
            pe !== null && qn(pe) && (pe = null),
            Se !== null && qn(Se) && (Se = null),
            gu.forEach(dd),
            pu.forEach(dd));
        }
        function Yn(l, t) {
          l.blockedOn === t &&
            ((l.blockedOn = null),
            uf ||
              ((uf = !0),
              A.unstable_scheduleCallback(A.unstable_NormalPriority, ky)));
        }
        var Gn = null;
        function md(l) {
          Gn !== l &&
            ((Gn = l),
            A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
              Gn === l && (Gn = null);
              for (var t = 0; t < l.length; t += 3) {
                var e = l[t],
                  a = l[t + 1],
                  u = l[t + 2];
                if (typeof a != "function") {
                  if (af(a || e) === null) continue;
                  break;
                }
                var n = Ke(e);
                n !== null &&
                  (l.splice(t, 3),
                  (t -= 3),
                  ec(
                    n,
                    { pending: !0, data: u, method: e.method, action: a },
                    a,
                    u,
                  ));
              }
            }));
        }
        function ja(l) {
          function t(f) {
            return Yn(f, l);
          }
          (ge !== null && Yn(ge, l),
            pe !== null && Yn(pe, l),
            Se !== null && Yn(Se, l),
            gu.forEach(t),
            pu.forEach(t));
          for (var e = 0; e < be.length; e++) {
            var a = be[e];
            a.blockedOn === l && (a.blockedOn = null);
          }
          for (; 0 < be.length && ((e = be[0]), e.blockedOn === null); )
            (rd(e), e.blockedOn === null && be.shift());
          if (((e = (l.ownerDocument || l).$reactFormReplay), e != null))
            for (a = 0; a < e.length; a += 3) {
              var u = e[a],
                n = e[a + 1],
                i = u[Zl] || null;
              if (typeof n == "function") i || md(e);
              else if (i) {
                var c = null;
                if (n && n.hasAttribute("formAction")) {
                  if (((u = n), (i = n[Zl] || null))) c = i.formAction;
                  else if (af(u) !== null) continue;
                } else c = i.action;
                (typeof c == "function"
                  ? (e[a + 1] = c)
                  : (e.splice(a, 3), (a -= 3)),
                  md(e));
              }
            }
        }
        function yd() {
          function l(n) {
            n.canIntercept &&
              n.info === "react-transition" &&
              n.intercept({
                handler: function () {
                  return new Promise(function (i) {
                    return (u = i);
                  });
                },
                focusReset: "manual",
                scroll: "manual",
              });
          }
          function t() {
            (u !== null && (u(), (u = null)), a || setTimeout(e, 20));
          }
          function e() {
            if (!a && !navigation.transition) {
              var n = navigation.currentEntry;
              n &&
                n.url != null &&
                navigation.navigate(n.url, {
                  state: n.getState(),
                  info: "react-transition",
                  history: "replace",
                });
            }
          }
          if (typeof navigation == "object") {
            var a = !1,
              u = null;
            return (
              navigation.addEventListener("navigate", l),
              navigation.addEventListener("navigatesuccess", t),
              navigation.addEventListener("navigateerror", t),
              setTimeout(e, 100),
              function () {
                ((a = !0),
                  navigation.removeEventListener("navigate", l),
                  navigation.removeEventListener("navigatesuccess", t),
                  navigation.removeEventListener("navigateerror", t),
                  u !== null && (u(), (u = null)));
              }
            );
          }
        }
        function nf(l) {
          this._internalRoot = l;
        }
        ((Qn.prototype.render = nf.prototype.render =
          function (l) {
            var t = this._internalRoot;
            if (t === null) throw Error(m(409));
            var e = t.current,
              a = it();
            nd(e, a, l, t, null, null);
          }),
          (Qn.prototype.unmount = nf.prototype.unmount =
            function () {
              var l = this._internalRoot;
              if (l !== null) {
                this._internalRoot = null;
                var t = l.containerInfo;
                (nd(l.current, 2, null, l, null, null), bn(), (t[Ve] = null));
              }
            }));
        function Qn(l) {
          this._internalRoot = l;
        }
        Qn.prototype.unstable_scheduleHydration = function (l) {
          if (l) {
            var t = Tf();
            l = { blockedOn: null, target: l, priority: t };
            for (
              var e = 0;
              e < be.length && t !== 0 && t < be[e].priority;
              e++
            );
            (be.splice(e, 0, l), e === 0 && rd(l));
          }
        };
        var vd = H.version;
        if (vd !== "19.2.3") throw Error(m(527, vd, "19.2.3"));
        E.findDOMNode = function (l) {
          var t = l._reactInternals;
          if (t === void 0)
            throw typeof l.render == "function"
              ? Error(m(188))
              : ((l = Object.keys(l).join(",")), Error(m(268, l)));
          return (
            (l = T(t)),
            (l = l !== null ? tl(l) : null),
            (l = l === null ? null : l.stateNode),
            l
          );
        };
        var $y = {
          bundleType: 0,
          version: "19.2.3",
          rendererPackageName: "react-dom",
          currentDispatcherRef: S,
          reconcilerVersion: "19.2.3",
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
          var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Xn.isDisabled && Xn.supportsFiber)
            try {
              ((Ma = Xn.inject($y)), (Il = Xn));
            } catch {}
        }
        return (
          (xu.createRoot = function (l, t) {
            if (!O(l)) throw Error(m(299));
            var e = !1,
              a = "",
              u = zo,
              n = To,
              i = Ao;
            return (
              t != null &&
                (t.unstable_strictMode === !0 && (e = !0),
                t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
                t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
                t.onCaughtError !== void 0 && (n = t.onCaughtError),
                t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
              (t = ad(l, 1, !1, null, null, e, a, null, u, n, i, yd)),
              (l[Ve] = t.current),
              Qc(l),
              new nf(t)
            );
          }),
          (xu.hydrateRoot = function (l, t, e) {
            if (!O(l)) throw Error(m(299));
            var a = !1,
              u = "",
              n = zo,
              i = To,
              c = Ao,
              f = null;
            return (
              e != null &&
                (e.unstable_strictMode === !0 && (a = !0),
                e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
                e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
                e.onCaughtError !== void 0 && (i = e.onCaughtError),
                e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
                e.formState !== void 0 && (f = e.formState)),
              (t = ad(l, 1, !0, t, e ?? null, a, u, f, n, i, c, yd)),
              (t.context = ud(null)),
              (e = t.current),
              (a = it()),
              (a = kn(a)),
              (u = ne(a)),
              (u.callback = null),
              ie(e, u, a),
              (e = a),
              (t.current.lanes = e),
              Da(t, e),
              Ot(t),
              (l[Ve] = t.current),
              Qc(l),
              new Qn(t)
            );
          }),
          (xu.version = "19.2.3"),
          xu
        );
      }
      var Ed;
      function i0() {
        if (Ed) return sf.exports;
        Ed = 1;
        function A() {
          if (
            !(
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
            } catch (H) {
              console.error(H);
            }
        }
        return (A(), (sf.exports = n0()), sf.exports);
      }
      var c0 = i0();
      function vl({
        name: A,
        size: H = "md",
        filled: j = !1,
        className: m = "",
        style: O,
      }) {
        if (A === "github_svg_logo") {
          return o.jsx("span", {
            className: `ms-${H} ${m}`,
            style: { ...O, display: "inline-flex", alignItems: "center", justifyContent: "center" },
            children: o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", children: o.jsx("path", { d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" }) })
          });
        }
        return o.jsx("span", {
          className: `material-symbols-rounded ms-${H} ${j ? "ms-filled" : ""} ${m}`,
          style: O,
          children: A,
        });
      }
      const jd = [
          { label: "Home", href: "/", id: "home" },
          { label: "About", href: "/about/", id: "about" },
          { label: "Projects", href: "/projects/", id: "projects" },
          { label: "Contact", href: "/contact/", id: "contact" },
        ],
        _d = [
          { name: "Employee Relations", level: 95, category: "Human Resources" },
          { name: "Statutory Compliance", level: 90, category: "Human Resources" },
          { name: "Recruitment", level: 85, category: "Human Resources" },
          { name: "Welfare Admin", level: 92, category: "Human Resources" },
          { name: "Payroll Management", level: 85, category: "Human Resources" },
          { name: "Performance Appraisal", level: 88, category: "Human Resources" },
          { name: "Training & Development", level: 90, category: "Human Resources" },
          { name: "MS Office Suite", level: 98, category: "Computer Knowledge" },
          { name: "HRIS Software", level: 95, category: "Computer Knowledge" },
          { name: "Data Management", level: 95, category: "Computer Knowledge" },
          { name: "HTML / CSS", level: 80, category: "Web Design" },
          { name: "UI/UX Concepts", level: 75, category: "Web Design" },
          { name: "Web Formatting", level: 78, category: "Web Design" },
        ],
        f0 = [
          {
            title: "AAA",
            description: ":iphone: Curated list of THE BEST FOSS Android apps to maximize your freedom & privacy!",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/AAA",
            icon: "folder",
          },
          {
            title: "awesome-icons",
            description: "A curated list of awesome Web Font Icons",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/awesome-icons",
            icon: "folder",
          },
          {
            title: "awesome-stock-resources",
            description: ":city_sunrise: A collection of links for free stock photography, video and Illustration websites",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/awesome-stock-resources",
            icon: "folder",
          },
          {
            title: "bootswatch",
            description: "Themes for Bootstrap",
            tags: ["JavaScript"],
            link: "https://github.com/solomonrajan/bootswatch",
            icon: "javascript",
          },
          {
            title: "config",
            description: "No description provided.",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/config",
            icon: "folder",
          },
          {
            title: "Course-Piracy-Index",
            description: "Course Piracy Index ðŸ´â€â˜ ï¸",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/Course-Piracy-Index",
            icon: "folder",
          },
          {
            title: "Google-Sans-web-fonts",
            description: "Google Sans, Google Sans Display & Gallery Icons web fonts",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/Google-Sans-web-fonts",
            icon: "folder",
          },
          {
            title: "google_drive_in_file_explorer",
            description: "Enables Google Drive for Desktop to show in Windows File Explorer, same as the way that OneDrive or DropBox does!",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/google_drive_in_file_explorer",
            icon: "folder",
          },
          {
            title: "google_fonts",
            description: "This repository contains collections of various Google fonts used in Google websites and apps.",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/google_fonts",
            icon: "folder",
          },
          {
            title: "hugo-theme-stack",
            description: "Card-style Hugo theme designed for bloggers",
            tags: ["HTML"],
            link: "https://github.com/solomonrajan/hugo-theme-stack",
            icon: "folder",
          },
          {
            title: "KMS_VL_ALL_AIO",
            description: "Smart Activation Script",
            tags: ["Batchfile"],
            link: "https://github.com/solomonrajan/KMS_VL_ALL_AIO",
            icon: "folder",
          },
          {
            title: "LimitlessPhotos",
            description: "ðŸ¤– Magisk/KernelSU module to unlock unlimited, original quality backup plan on Google Photos.",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/LimitlessPhotos",
            icon: "folder",
          },
          {
            title: "MediaCreationTool.bat",
            description: "Universal MCT wrapper script for all Windows 10/11 versions from 1507 to 21H2!",
            tags: ["Batchfile"],
            link: "https://github.com/solomonrajan/MediaCreationTool.bat",
            icon: "folder",
          },
          {
            title: "mit-license",
            description: "Hosted MIT License with details controlled through this repo",
            tags: ["CSS"],
            link: "https://github.com/solomonrajan/mit-license",
            icon: "folder",
          },
          {
            title: "mozilla-type-family",
            description: "A collection of custom fonts for Mozilla",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/mozilla-type-family",
            icon: "folder",
          },
          {
            title: "Music-Megathread",
            description: "A Comprehensive List For All Music ðŸŽ¶ Lovers. It's a treasure trove of music resources to enhance your listening experience and discover new music.",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/Music-Megathread",
            icon: "folder",
          },
          {
            title: "nerd-fonts",
            description: "Iconic font aggregator, collection, & patcher. 3,600+ icons, 50+ patched fonts: Hack, Source Code Pro, more. Glyph collections: Font Awesome, Material Design Icons, Octicons, & more",
            tags: ["CSS"],
            link: "https://github.com/solomonrajan/nerd-fonts",
            icon: "folder",
          },
          {
            title: "platform-tools_and_google_usb_driver",
            description: "PowerShell Script for download and config platform-tools and Google USB Driver as Environment Variable in Windows.",
            tags: ["PowerShell"],
            link: "https://github.com/solomonrajan/platform-tools_and_google_usb_driver",
            icon: "folder",
          },
          {
            title: "solomonrajan",
            description: "A short description about me!",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/solomonrajan",
            icon: "folder",
          },
          {
            title: "solomonrajan.github.io",
            description: "No description provided.",
            tags: ["HTML"],
            link: "https://github.com/solomonrajan/solomonrajan.github.io",
            icon: "folder",
          },
          {
            title: "Spacewar_fastboot_flasher",
            description: "A script to flash Nothing Phone (1) stock OTA images via fastboot",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/Spacewar_fastboot_flasher",
            icon: "folder",
          },
          {
            title: "Test",
            description: "Fully responsive personal portfolio website",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/Test",
            icon: "folder",
          },
          {
            title: "warengonzaga_copy",
            description: "Warengonzaga's Personal GitHub ReadMe. ðŸ’»ðŸ’–â˜•",
            tags: ["GitHub"],
            link: "https://github.com/solomonrajan/warengonzaga_copy",
            icon: "folder",
          },
          {
            title: "WHD",
            description: "WHDownloader backup repo",
            tags: ["PowerShell"],
            link: "https://github.com/solomonrajan/WHD",
            icon: "folder",
          }
        ],
        Md = [
          {
            role: "Senior Frontend Engineer",
            company: "TechCorp Inc.",
            period: "Jan 2022 â€“ Present",
            bullets: [
              "Led redesign of the main dashboard, improving load time by 40% and boosting user engagement.",
              "Architected a reusable component library used across 5 product teams.",
              "Mentored 4 junior developers through code reviews and 1-on-1 sessions.",
              "Integrated WebSocket-based real-time notifications reducing support tickets by 25%.",
            ],
          },
          {
            role: "Full-Stack Developer",
            company: "StartupXYZ",
            period: "Mar 2020 â€“ Dec 2021",
            bullets: [
              "Built an end-to-end e-commerce platform serving 50,000+ monthly users.",
              "Designed RESTful APIs using Node.js and PostgreSQL, reducing query time by 35%.",
              "Implemented CI/CD pipelines using GitHub Actions and Docker.",
            ],
          },
          {
            role: "Junior Web Developer",
            company: "Digital Agency Co.",
            period: "Jun 2018 â€“ Feb 2020",
            bullets: [
              "Delivered 20+ responsive websites for clients across healthcare, retail, and finance.",
              "Collaborated with designers to implement pixel-perfect UI from Figma mockups.",
              "Optimized site performance achieving 90+ Lighthouse scores.",
            ],
          },
        ],
        s0 = [
          {
            icon: "mail",
            label: "Email",
            value: "alex@example.com",
            href: "mailto:alex@example.com",
          },
          {
            icon: "language",
            label: "Website",
            value: "alexjohnson.dev",
            href: "#",
          },
          {
            icon: "work",
            label: "LinkedIn",
            value: "linkedin.com/in/alexjohnson",
            href: "#",
          },
          {
                        icon: "github_svg_logo",
            label: "GitHub",
            value: "github.com/solomonrajan/",
            href: "#",
          },
        ];
        const blogData = [
          {
            id: 1,
            title: "Creating a Positive Workplace Culture",
            description: "Explore strategies for building an inclusive and supportive work environment that promotes employee well-being and productivity.",
            tags: ["HR Management", "Culture", "Wellness"],
            link: "/blog/post-1/",
            icon: "sentiment_satisfied",
            date: "May 20, 2026",
            readTime: "5 min read",
            category: "HR Management",
            thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23915500' width='400' height='250'/%3E%3Ctext x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EPositive Workplace%3C/text%3E%3C/svg%3E",
            content: `
        <h2>Building the Foundation</h2>
        <p>A positive workplace culture doesn't happen by accident. It requires intentional effort, consistent messaging, and genuine commitment from leadership. When employees feel valued and respected, they're more engaged, productive, and loyal to the organization.</p>
        
        <h3>Key Components of Workplace Culture</h3>
        <p>The strongest workplace cultures are built on a foundation of trust, transparency, and respect. These three pillars create an environment where employees feel safe to express their ideas, take calculated risks, and contribute their best work.</p>
        
        <ul>
          <li><strong>Trust:</strong> Managers must be consistent in their words and actions, keeping commitments and being honest about challenges.</li>
          <li><strong>Transparency:</strong> Communication about company decisions, goals, and performance helps employees understand the bigger picture.</li>
          <li><strong>Respect:</strong> Valuing diverse perspectives and backgrounds enriches the team and fosters innovation.</li>
        </ul>

        <h3>Practical Steps to Implement</h3>
        <p>Start with these actionable strategies:</p>
        <ol>
          <li>Establish clear core values and live by them</li>
          <li>Create regular feedback mechanisms (both formal and informal)</li>
          <li>Recognize and celebrate achievements, big and small</li>
          <li>Invest in professional development opportunities</li>
          <li>Foster inclusive team-building activities</li>
          <li>Lead by example - show the behavior you expect</li>
        </ol>

        <blockquote>
          "Culture is not just one aspect of the thing; it IS the thing." â€” Jim Sinegal, Costco founder
        </blockquote>

        <h2>Measuring Culture Success</h2>
        <p>How do you know if your workplace culture is thriving? Look for indicators like:</p>
        <ul>
          <li>Low employee turnover rates</li>
          <li>High engagement scores in surveys</li>
          <li>Strong internal referrals for new hires</li>
          <li>Reduced absenteeism</li>
          <li>Employee advocacy and positive word-of-mouth</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Creating a positive workplace culture is an ongoing journey, not a destination. It requires consistency, care, and the willingness to adapt. When you prioritize culture, you're investing in your most valuable assetâ€”your people. The benefits extend far beyond employee satisfaction; they directly impact your bottom line through improved productivity, innovation, and business results.</p>
            `
          },
          {
            id: 2,
            title: "Employee Welfare Programs That Matter",
            description: "Comprehensive guide to implementing effective welfare programs that truly impact employee satisfaction and retention.",
            tags: ["Employee Welfare", "Programs", "Benefits"],
            link: "/blog/post-2/",
            icon: "health_and_safety",
            date: "May 15, 2026",
            readTime: "7 min read",
            category: "Employee Welfare",
            thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%236d5d3e' width='400' height='250'/%3E%3Ctext x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EEmployee Welfare%3C/text%3E%3C/svg%3E",
            content: `
        <h2>Beyond Basic Benefits</h2>
        <p>Modern employee welfare programs go far beyond health insurance and retirement plans. Today's employees expect a holistic approach to their well-being that addresses physical, mental, financial, and professional development needs.</p>
        
        <h3>The Evolution of Welfare Programs</h3>
        <p>Ten years ago, welfare programs were primarily focused on basic health coverage and retirement benefits. Today, forward-thinking organizations recognize that employee welfare is a strategic investment that drives retention, productivity, and company culture.</p>

        <blockquote>
          The most successful welfare programs are those that are regularly evaluated and adjusted based on employee feedback and changing needs.
        </blockquote>

        <h2>Essential Components of Modern Welfare</h2>
        <h3>1. Physical Health & Wellness</h3>
        <ul>
          <li>Comprehensive health insurance coverage</li>
          <li>Wellness programs (fitness memberships, health screenings)</li>
          <li>Ergonomic assessments and equipment</li>
          <li>Mental health support (counseling services)</li>
        </ul>

        <h3>2. Financial Security</h3>
        <ul>
          <li>Competitive salaries and bonuses</li>
          <li>Retirement planning assistance</li>
          <li>Emergency financial assistance programs</li>
          <li>Financial literacy training</li>
        </ul>

        <h3>3. Work-Life Balance</h3>
        <ul>
          <li>Flexible working arrangements</li>
          <li>Remote work options</li>
          <li>Paid leave (vacation, sick, parental)</li>
          <li>Sabbatical opportunities</li>
        </ul>

        <h3>4. Professional Development</h3>
        <ul>
          <li>Training and skill-building programs</li>
          <li>Career advancement opportunities</li>
          <li>Mentorship programs</li>
          <li>Conference attendance and learning budgets</li>
        </ul>

        <h2>Implementing a Welfare Program</h2>
        <p>Start by conducting an employee needs assessment to understand what matters most to your workforce. Different generations and roles may prioritize different benefits.</p>

        <h2>Measuring Impact</h2>
        <p>Track metrics like employee engagement scores, retention rates, absenteeism, and productivity to measure the true impact of your welfare programs.</p>
            `
          },
          {
            id: 3,
            title: "Navigating Statutory Compliance in 2026",
            description: "A detailed overview of current labor laws, compliance requirements, and best practices for staying updated with regulations.",
            tags: ["Compliance", "Legal", "Regulations"],
            link: "/blog/post-3/",
            icon: "gavel",
            date: "May 10, 2026",
            readTime: "8 min read",
            category: "Compliance",
            thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%234e6145' width='400' height='250'/%3E%3Ctext x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3ECompliance Guide%3C/text%3E%3C/svg%3E",
            content: `
        <h2>Understanding the Compliance Landscape</h2>
        <p>Employment law is constantly evolving, and staying compliant is not just a legal requirementâ€”it's essential for protecting your organization and your employees. The regulatory environment in 2026 presents new challenges and opportunities for businesses of all sizes.</p>

        <h2>Key Areas of Focus</h2>
        <h3>1. Wage and Hour Compliance</h3>
        <p>Ensure proper classification of employees vs. contractors, maintain accurate time records, and understand minimum wage requirements across different jurisdictions.</p>

        <h3>2. Health and Safety Standards</h3>
        <p>Maintain safe working conditions, provide necessary safety training, and keep thorough incident records. Regular audits help identify potential issues before they become problems.</p>

        <h3>3. Anti-Discrimination and Harassment Policies</h3>
        <p>Implement clear policies, provide regular training, and establish effective complaint procedures. Document all incidents and follow up appropriately.</p>

        <h3>4. Data Protection and Privacy</h3>
        <p>Protect employee personal information, understand regulations like data protection laws, and implement strong cybersecurity measures.</p>

        <blockquote>
          Non-compliance doesn't just result in finesâ€”it damages your reputation and employee trust.
        </blockquote>

        <h2>Best Practices for Maintaining Compliance</h2>
        <ul>
          <li>Establish a compliance committee or assign a dedicated compliance officer</li>
          <li>Conduct regular compliance audits</li>
          <li>Maintain comprehensive documentation</li>
          <li>Stay informed about regulatory changes</li>
          <li>Provide regular training to managers and HR staff</li>
          <li>Work with legal counsel when needed</li>
        </ul>

        <h2>Common Compliance Pitfalls</h2>
        <p>Many organizations struggle with:</p>
        <ul>
          <li>Inconsistent application of policies</li>
          <li>Inadequate documentation</li>
          <li>Outdated policies and procedures</li>
          <li>Insufficient training and communication</li>
          <li>Reactive rather than proactive approach</li>
        </ul>

        <h2>Looking Forward</h2>
        <p>The key to sustained compliance is treating it as an ongoing commitment rather than a one-time effort. Regular reviews, updates, and employee education will help your organization stay ahead of regulatory changes.</p>
            `
          },
          {
            id: 4,
            title: "Effective Communication in Remote Teams",
            description: "Best practices for maintaining clear communication and team cohesion in distributed work environments.",
            tags: ["Team Management", "Remote-work", "Communication"],
            link: "/blog/post-4/",
            icon: "forum",
            date: "May 5, 2026",
            readTime: "6 min read",
            category: "Team Management",
            thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23915500' width='400' height='250'/%3E%3Ctext x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3ERemote Communication%3C/text%3E%3C/svg%3E",
            content: `
        <h2>The Challenge of Remote Communication</h2>
        <p>Remote work has become the new normal for many organizations, but it presents unique communication challenges. Without the informal interactions of an office environment, intentional communication strategies become critical.</p>

        <h2>Communication Tools and Platforms</h2>
        <h3>Synchronous Communication</h3>
        <ul>
          <li>Video meetings for important discussions and relationship building</li>
          <li>Real-time chat for quick questions and immediate feedback</li>
          <li>Phone calls for sensitive or complex conversations</li>
        </ul>

        <h3>Asynchronous Communication</h3>
        <ul>
          <li>Email for formal communications and documentation</li>
          <li>Project management tools for task updates</li>
          <li>Recorded video messages for detailed explanations</li>
          <li>Documentation and wikis for company knowledge</li>
        </ul>

        <blockquote>
          The best remote teams are intentional about how they communicate and choose the right tool for the right message.
        </blockquote>

        <h2>Establishing Communication Norms</h2>
        <p>Your team should agree on:</p>
        <ul>
          <li>Expected response times for different communication types</li>
          <li>When synchronous vs. asynchronous communication is appropriate</li>
          <li>How to handle urgent vs. non-urgent matters</li>
          <li>Meeting guidelines and expectations</li>
          <li>Communication preferences for different team members</li>
        </ul>

        <h2>Building Team Cohesion Remotely</h2>
        <p>Don't let distance create emotional distance. Invest in:</p>
        <ul>
          <li>Regular team check-ins focused on connection, not just work</li>
          <li>Virtual team-building activities that are inclusive and voluntary</li>
          <li>One-on-one conversations between managers and team members</li>
          <li>Celebrating wins and milestones as a team</li>
          <li>Creating informal spaces for casual conversation (virtual water cooler)</li>
        </ul>

        <h3>Making Remote Meetings Effective</h3>
        <ul>
          <li>Set a clear agenda and share it in advance</li>
          <li>Start with a few minutes of casual conversation</li>
          <li>Use video to build connection</li>
          <li>Encourage participation from quiet team members</li>
          <li>End with clear action items and follow-up</li>
          <li>Keep meetings focused and on time</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Remote communication requires more intentionality, not less. By establishing clear norms, choosing the right tools, and prioritizing human connection, you can build a strong remote team that communicates effectively and feels genuinely connected.</p>
            `
          },
          {
            id: 5,
            title: "The Future of Work: Hybrid Models",
            description: "An analysis of hybrid work models and how organizations can prepare for the upcoming decade of transformation.",
            tags: ["Future", "Hybrid", "Strategy"],
            link: "/blog/post-5/",
            icon: "work",
            date: "May 25, 2026",
            readTime: "7 min read",
            category: "Future",
            thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%232e5c8a' width='400' height='250'/%3E%3Ctext x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EFuture of Work%3C/text%3E%3C/svg%3E",
            content: `
        <h2>The Paradigm Shift</h2>
        <p>The traditional 9-to-5 office model is rapidly evolving. Hybrid work models, offering a mix of remote and on-site days, are no longer just a perkâ€”they are becoming a core business strategy. Organizations that adapt to this shift will attract and retain top talent.</p>
        
        <h3>Designing the Hybrid Strategy</h3>
        <p>There is no one-size-fits-all approach to hybrid work. Some teams require intense collaboration in person, while others thrive in deep, uninterrupted remote focus. The key is flexibility and continuous feedback.</p>
        
        <ul>
          <li><strong>Asynchronous Collaboration:</strong> Move away from constant meetings and embrace tools that allow work to happen on different schedules.</li>
          <li><strong>Office as a Hub:</strong> Redesign the physical office to be a center for collaboration, socialization, and innovation, rather than rows of desks for solitary work.</li>
          <li><strong>Equity:</strong> Ensure that remote workers have the same access to opportunities, visibility, and promotions as those in the office.</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>The future of work is not just about where we work, but how we work. Embracing hybrid models requires a fundamental shift in leadership style, focusing on outcomes rather than hours spent at a desk.</p>
            `
          },
          {
            id: 6,
            title: "AI in Human Resources",
            description: "How artificial intelligence is streamlining recruitment, onboarding, and employee engagement processes.",
            tags: ["AI", "Recruitment", "Technology"],
            link: "/blog/post-6/",
            icon: "smart_toy",
            date: "May 28, 2026",
            readTime: "6 min read",
            category: "Technology",
            thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23673ab7' width='400' height='250'/%3E%3Ctext x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EAI in HR%3C/text%3E%3C/svg%3E",
            content: `
        <h2>The AI Revolution in HR</h2>
        <p>Artificial Intelligence is no longer a futuristic conceptâ€”it is actively reshaping how Human Resources departments operate. From screening resumes in seconds to predicting employee turnover, AI tools are empowering HR professionals to focus more on the 'Human' aspect of their roles.</p>
        
        <h3>Streamlining Recruitment</h3>
        <p>Recruitment has historically been a time-consuming process. Today, AI-powered Applicant Tracking Systems (ATS) can instantly analyze thousands of resumes to identify the best candidates based on skills, experience, and cultural fit.</p>
        
        <ul>
          <li><strong>Chatbots:</strong> Automated assistants can handle initial candidate inquiries, schedule interviews, and provide status updates 24/7.</li>
          <li><strong>Bias Reduction:</strong> When properly calibrated, AI can help remove unconscious human bias from the initial resume screening process.</li>
        </ul>

        <h2>Predictive Analytics for Retention</h2>
        <p>AI isn't just for hiring. Advanced predictive models analyze employee dataâ€”such as engagement scores, promotion history, and compensationâ€”to flag individuals who might be at high risk of leaving, allowing management to intervene proactively.</p>

        <h2>Conclusion</h2>
        <p>While AI brings incredible efficiency, it will never replace the empathy, judgment, and emotional intelligence required in HR. Instead, it serves as a powerful co-pilot, handling administrative burdens so HR leaders can focus on strategic initiatives and employee well-being.</p>
            `
          },
          {
            id: 7,
            title: "Mastering Employee Retention",
            description: "Proven strategies for keeping your top performers engaged, motivated, and committed to your organization's mission.",
            tags: ["Retention", "Leadership", "Engagement"],
            link: "/blog/post-7/",
            icon: "handshake",
            date: "June 2, 2026",
            readTime: "8 min read",
            category: "Leadership",
            thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect fill='%23e91e63' width='400' height='250'/%3E%3Ctext x='50%' y='50%' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='Arial'%3EEmployee Retention%3C/text%3E%3C/svg%3E",
            content: `
        <h2>The High Cost of Turnover</h2>
        <p>Replacing an employee can cost a company anywhere from one-half to two times the employee's annual salary. But the true cost goes beyond financesâ€”turnover damages team morale, disrupts workflows, and leads to a loss of institutional knowledge.</p>
        
        <h3>Why Do Employees Leave?</h3>
        <p>Contrary to popular belief, compensation is rarely the sole reason an employee resigns. Often, it comes down to a lack of growth opportunities, poor management, or feeling undervalued.</p>
        
        <ul>
          <li><strong>Lack of Recognition:</strong> Employees need to feel their hard work is seen and appreciated.</li>
          <li><strong>Stagnation:</strong> Top performers crave challenges and clear paths for career advancement.</li>
          <li><strong>Toxic Culture:</strong> A negative work environment will drive away good talent faster than a low salary.</li>
        </ul>

        <h2>Strategies for Retaining Top Talent</h2>
        <p>Retention starts on day one. A robust onboarding program sets the tone for an employee's entire tenure. From there, consistent management and open communication are key.</p>
        
        <ol>
          <li>Implement regular 'stay interviews' instead of just exit interviews.</li>
          <li>Offer personalized professional development plans.</li>
          <li>Ensure leaders are trained in emotional intelligence and active listening.</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Retention is a continuous effort. By fostering an environment where employees feel valued, challenged, and supported, organizations can build loyal, high-performing teams that drive long-term success.</p>
            `
          }
        ];
      function o0() {
        return window.CURRENT_PAGE || "home";
      }
      function r0() {
        const [A, H] = ct.useState(0);
        return (
          ct.useEffect(() => {
            const j = () => H(window.scrollY);
            return (
              window.addEventListener("scroll", j, { passive: !0 }),
              () => window.removeEventListener("scroll", j)
            );
          }, []),
          A
        );
      }
      function zu(A = 0.15) {
        const H = ct.useRef(null),
          [j, m] = ct.useState(!1);
        return (
          ct.useEffect(() => {
            const O = H.current;
            if (!O) return;
            const B = new IntersectionObserver(
              ([V]) => {
                V.isIntersecting && (m(!0), B.disconnect());
              },
              { threshold: A },
            );
            return (B.observe(O), () => B.disconnect());
          }, [A]),
          { ref: H, inView: j }
        );
      }
      function d0() {
        const A = r0(),
          H = o0(),
          [j, m] = ct.useState(!1),
          O = A > 8,
          B = ct.useCallback((V) => {
            m(!1);
            window.location.href = V;
          }, []);
        return o.jsxs(o.Fragment, {
          children: [
            o.jsxs("header", {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: "background-color 0.3s ease",
                backgroundColor: "transparent",
              },
              children: [
                O && o.jsx("div", {
                  style: {
                    position: "absolute", top: 0, left: 0, right: 0, height: "128px",
                    zIndex: -1, pointerEvents: "none",
                    backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                    maskImage: "linear-gradient(to bottom, black 64px, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 64px, transparent 100%)"
                  }
                }),
                o.jsxs("nav", {
                  style: {
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 24px",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                  children: [
                    (window.CURRENT_PAGE || "home") === "home" ? o.jsxs("div", {
                      className: "animate-fade-up available-badge",
                      style: {
                        margin: 0,
                        padding: "6px 12px",
                        fontSize: "12px",
                        backgroundColor: "var(--md-sys-color-tertiary-container)",
                        color: "var(--md-sys-color-on-tertiary-container)",
                        borderRadius: "24px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      },
                      children: [
                        o.jsxs("span", {
                          style: {
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "12px",
                            height: "12px",
                          },
                          children: [
                            o.jsx("span", {
                              style: {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                backgroundColor: "var(--md-sys-color-tertiary)",
                                animation: "md3-ripple 2s cubic-bezier(0.2, 0, 0, 1) infinite",
                              },
                            }),
                            o.jsx("span", {
                              style: {
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "var(--md-sys-color-tertiary)",
                                zIndex: 1,
                              },
                            }),
                          ],
                        }),
                        "Available for work",
                      ],
                    }) : o.jsx("div", {}),
                    o.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      },
                      className: "hidden-mobile",
                      children: [
                        jd.map((V) => {
                          const U = H === V.id;
                          return o.jsx(
                            "button",
                            {
                              onClick: () => B(V.href),
                              style: {
                                background: U
                                  ? "var(--md-sys-color-secondary-container)"
                                  : "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "8px 16px",
                                borderRadius: "100px",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: U
                                  ? "var(--md-sys-color-on-secondary-container)"
                                  : "var(--md-sys-color-on-surface-variant)",
                                transition: "all 0.2s ease",
                                letterSpacing: "0.1px",
                              },
                              children: V.label,
                            },
                            V.href,
                          );
                        }),
                        o.jsx("div", { style: { width: "12px" } }),
                        o.jsxs("button", {
                          onClick: () => B("/contact/"),
                          className: "md3-btn-filled assistant-glow",
                          style: { padding: "8px 20px", fontSize: "14px" },
                          children: [
                            o.jsx(vl, { name: "handshake", size: "sm" }),
                            "Hire Me",
                          ],
                        }),
                      ],
                    }),
                    o.jsx("button", {
                      onClick: () => m(!j),
                      style: {
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px",
                        borderRadius: "50%",
                        color: "var(--md-sys-color-on-surface)",
                        display: "none",
                      },
                      className: "show-mobile",
                      "aria-label": "Menu",
                      children: o.jsx(vl, {
                        name: j ? "close" : "menu",
                        size: "md",
                      }),
                    }),
                  ],
                }),
                j &&
                  o.jsxs("div", {
                    style: {
                      backgroundColor: "var(--md-sys-color-surface-container)",
                      borderTop:
                        "1px solid var(--md-sys-color-outline-variant)",
                      padding: "8px 16px 16px",
                    },
                    children: [
                      jd.map((V) => {
                        const U = H === V.id;
                        return o.jsx(
                          "button",
                          {
                            onClick: () => B(V.href),
                            style: {
                              display: "flex",
                              alignItems: "center",
                              width: "100%",
                              padding: "12px 16px",
                              borderRadius: "100px",
                              background: U
                                ? "var(--md-sys-color-secondary-container)"
                                : "none",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "14px",
                              fontWeight: 500,
                              color: U
                                ? "var(--md-sys-color-on-secondary-container)"
                                : "var(--md-sys-color-on-surface-variant)",
                              textAlign: "left",
                              transition: "all 0.2s ease",
                            },
                            children: V.label,
                          },
                          V.href,
                        );
                      }),
                      o.jsx("div", {
                        style: { padding: "8px 16px 0" },
                        children: o.jsxs("button", {
                          onClick: () => B("/contact/"),
                          className: "md3-btn-filled assistant-glow",
                          style: { width: "100%", justifyContent: "center" },
                          children: [
                            o.jsx(vl, { name: "handshake", size: "sm" }),
                            "Hire Me",
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            o.jsx("style", {
              children: `
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `,
            }),
          ],
        });
      }
      function ISTClock() {
        const [time, setTime] = ct.useState("");
        ct.useEffect(() => {
          const update = () => {
            const now = new Date();
            const timeString = new Intl.DateTimeFormat("en-IN", {
              timeZone: "Asia/Kolkata",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: true
            }).format(now);
            setTime(timeString + " IST");
          };
          update();
          const int = setInterval(update, 1000);
          return () => clearInterval(int);
        }, []);
        return o.jsxs("div", {
          style: { display: "flex", alignItems: "center", gap: "8px", marginTop: "24px", color: "var(--md-sys-color-on-surface-variant)", fontSize: "15px", fontWeight: "600", letterSpacing: "0.5px" },
          children: [
            o.jsx("span", { className: "material-symbols-rounded", style: { fontSize: "18px", color: "var(--md-sys-color-primary)" }, children: "schedule" }),
            o.jsx("span", { children: time })
          ]
        });
      }
      function m0() {
        return o.jsxs("section", {
          id: "home",
          style: {
            minHeight: "100vh",
            backgroundColor: "var(--md-sys-color-surface)",
            display: "flex",
            alignItems: "center",
            padding: "96px 24px 64px",
            position: "relative",
            overflow: "hidden",
          },
          children: [
            o.jsxs("div", {
              style: {
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                overflow: "hidden",
              },
              children: [
                o.jsx("div", {
                  style: {
                    position: "absolute",
                    top: "-10%",
                    right: "-5%",
                    width: "clamp(280px,40vw,520px)",
                    height: "clamp(280px,40vw,520px)",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, color-mix(in srgb, var(--md-sys-color-primary-container) 60%, transparent), transparent 70%)",
                    filter: "blur(48px)",
                  },
                }),
                o.jsx("div", {
                  style: {
                    position: "absolute",
                    bottom: "5%",
                    left: "-5%",
                    width: "clamp(200px,30vw,380px)",
                    height: "clamp(200px,30vw,380px)",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, color-mix(in srgb, var(--md-sys-color-tertiary-container) 50%, transparent), transparent 70%)",
                    filter: "blur(48px)",
                  },
                }),
              ],
            }),
            o.jsxs("div", {
              style: {
                maxWidth: "1200px",
                margin: "0 auto",
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
              },
              className: "hero-grid",
              children: [
                o.jsxs("div", {
                  children: [

                    o.jsx("h1", {
                      className: "animate-fade-up delay-1",
                      style: {
                        fontSize: "clamp(36px, 5vw, 64px)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        margin: "0 0 8px",
                        color: "var(--md-sys-color-on-surface)",
                        letterSpacing: "-1px",
                      },
                      children: "Hi, I'm",
                    }),
                    o.jsx("h1", {
                      className: "animate-fade-up delay-2",
                      style: {
                        fontSize: "clamp(36px, 5vw, 64px)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        margin: "0 0 24px",
                        background:
                          "linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-tertiary))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-1px",
                      },
                      children: "Solomon Rajan",
                    }),
                    o.jsx("p", {
                      className: "animate-fade-up delay-2",
                      style: {
                        fontSize: "clamp(16px, 2vw, 20px)",
                        fontWeight: 500,
                        color: "var(--md-sys-color-primary)",
                        marginBottom: "16px",
                      },
                      children: "Personnel Executive & Welfare Officer",
                    }),
                    o.jsx("p", {
                      className: "animate-fade-up delay-3",
                      style: {
                        fontSize: "16px",
                        color: "var(--md-sys-color-on-surface-variant)",
                        lineHeight: 1.7,
                        marginBottom: "40px",
                        maxWidth: "480px",
                        textAlign: "justify",
                      },
                      children:
                        "I manage employee relations, statutory compliance, and workforce welfare with a people-first approach. Passionate about building positive workplace culture, ensuring labour law compliance, and creating efficient HR and welfare systems.",
                    }),
                    o.jsxs("div", {
                      className: "animate-fade-up delay-4",
                      style: {
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginBottom: "48px",
                      },
                      children: [
                        o.jsxs("a", {
                          href: "/resume.pdf",
                          download: !0,
                          className: "md3-btn-filled",
                          style: { fontSize: "15px", padding: "12px 28px", textDecoration: "none" },
                          children: [
                            o.jsx(vl, { name: "download", size: "sm" }),
                            "Download Resume",
                          ],
                        }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "animate-fade-up delay-5",
                      style: { display: "flex", flexDirection: "column", gap: "12px" },
                      children: [
                        o.jsx("div", {
                          style: { display: "flex", gap: "32px", flexWrap: "wrap" },
                          children: [
                            { value: "5+", label: "Years Exp." },
                            { value: "4", label: "Projects" },
                            { value: "3", label: "Company" },
                          ].map((A) =>
                            o.jsxs(
                              "div",
                              {
                                children: [
                                  o.jsx("div", {
                                    style: {
                                      fontSize: "28px",
                                      fontWeight: 800,
                                      color: "var(--md-sys-color-primary)",
                                      lineHeight: 1,
                                    },
                                    children: A.value,
                                  }),
                                  o.jsx("div", {
                                    style: {
                                      fontSize: "13px",
                                      color:
                                        "var(--md-sys-color-on-surface-variant)",
                                      marginTop: "4px",
                                      fontWeight: 500,
                                    },
                                    children: A.label,
                                  }),
                                ],
                              },
                              A.label,
                            ),
                          ),
                        }),
                      ]
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "animate-fade delay-2 hero-avatar",
                  style: { display: "flex", justifyContent: "center" },
                  children: o.jsxs("div", {
                    style: {
                      width: "clamp(260px, 32vw, 380px)",
                      height: "clamp(260px, 32vw, 380px)",
                      borderRadius: "28px",
                      backgroundColor: "var(--md-sys-color-primary-container)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      boxShadow: "var(--md-elevation-3)",
                    },
                    children: [
                      o.jsx("span", {
                        style: { fontSize: "clamp(80px, 12vw, 140px)" },
                        children: o.jsx("img", { src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Office%20Worker%20Medium-Light%20Skin%20Tone.png", alt: "", style: { width: "1.8em", height: "1.8em", verticalAlign: "middle" } }),
                      }),
                      [
                        {
                          icon: "health_and_safety",
                          label: "Welfare Expert",
                          top: "-16px",
                          left: "16px",
                        },
                        {
                          icon: "balance",
                          label: "Compliance Pro",
                          bottom: "-16px",
                          right: "16px",
                        },
                      ].map((A) =>
                        o.jsxs(
                          "div",
                          {
                            style: {
                              position: "absolute",
                              ...(A.top ? { top: A.top } : {}),
                              ...(A.bottom ? { bottom: A.bottom } : {}),
                              ...(A.left ? { left: A.left } : {}),
                              ...(A.right ? { right: A.right } : {}),
                              backgroundColor:
                                "var(--md-sys-color-surface-container-low)",
                              borderRadius: "12px",
                              padding: "8px 14px",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              boxShadow: "var(--md-elevation-2)",
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "var(--md-sys-color-on-surface)",
                              whiteSpace: "nowrap",
                            },
                            children: [
                              o.jsx(vl, {
                                name: A.icon,
                                size: "sm",
                                filled: !0,
                                className: "",
                                style: { color: "var(--md-sys-color-primary)" },
                              }),
                              A.label,
                            ],
                          },
                          A.label,
                        ),
                      ),
                    ],
                  }),
                }),
              ],
            }),
            o.jsx("style", {
              children: `
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }
        .available-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          background-color: var(--md-sys-color-tertiary-container);
          color: var(--md-sys-color-on-tertiary-container);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1px;
          margin-bottom: 24px;
          border: none;
          box-shadow: none;
          transition: transform 400ms cubic-bezier(0.2, 0, 0, 1), border-radius 400ms cubic-bezier(0.2, 0, 0, 1);
          cursor: default;
        }
        .available-badge:hover {
          transform: scale(1.02);
          border-radius: 12px 4px 12px 4px;
        }
        @keyframes md3-ripple {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(2); opacity: 0.2; }
          100% { transform: scale(3); opacity: 0; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-avatar { order: -1; }
        }
      `,
            }),
          ],
        });
      }
      function y0() {
        const { ref: A, inView: H } = zu();
        return o.jsxs("section", {
          id: "about",
          ref: A,
          style: {
            padding: "96px 24px 64px 24px",
            backgroundColor: "var(--md-sys-color-surface-container-low)",
            position: "relative",
            zIndex: 4,
          },
          children: [
            o.jsx("div", {
              style: { maxWidth: "1200px", margin: "0 auto" },
              children: o.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "64px",
                  alignItems: "center",
                },
                className: "about-grid",
                children: [
                  o.jsx("div", {
                    className: H ? "animate-fade-up" : "",
                    style: { display: "flex", justifyContent: "center" },
                    children: o.jsxs("div", {
                      style: { position: "relative", display: "inline-block" },
                      children: [
                        o.jsx("div", {
                          style: {
                            width: "clamp(240px, 28vw, 320px)",
                            height: "clamp(240px, 28vw, 320px)",
                            borderRadius: "50%",
                            backgroundColor:
                              "var(--md-sys-color-primary-container)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "clamp(80px, 10vw, 120px)",
                            boxShadow: "var(--md-elevation-2)",
                          },
                          children: o.jsx("img", { src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Slightly%20Smiling%20Face.png", alt: "Slightly Smiling Face", style: { width: "1em", height: "1em", verticalAlign: "middle" } }),
                        }),
                        o.jsxs("div", {
                          style: {
                            position: "absolute",
                            bottom: "-12px",
                            right: "-12px",
                            backgroundColor:
                              "var(--md-sys-color-surface-container-low)",
                            borderRadius: "16px",
                            padding: "12px 20px",
                            boxShadow: "var(--md-elevation-2)",
                            textAlign: "center",
                          },
                          children: [
                            o.jsx("div", {
                              style: {
                                fontSize: "22px",
                                fontWeight: 800,
                                color: "var(--md-sys-color-primary)",
                                lineHeight: 1,
                              },
                              children: "5+",
                            }),
                            o.jsx("div", {
                              style: {
                                fontSize: "12px",
                                color: "var(--md-sys-color-on-surface-variant)",
                                fontWeight: 500,
                                marginTop: "2px",
                              },
                              children: "Years",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  o.jsxs("div", {
                    className: H ? "animate-fade-up delay-2" : "",
                    children: [
                      o.jsx("div", {
                        className: "section-label",
                        children: "Who I Am",
                      }),
                      o.jsx("h2", {
                        className: "section-title",
                        children: "About Me",
                      }),
                      o.jsx("p", {
                        style: {
                          color: "var(--md-sys-color-on-surface-variant)",
                          lineHeight: 1.8,
                          marginBottom: "24px",
                          fontSize: "16px", textAlign: "justify",
                        },
                        children:
                          "I'm a dedicated Personnel Executive & Welfare Officer with extensive experience in managing employee relations, statutory compliance, and workforce welfare. I specialize in fostering a positive work environment, implementing HR best practices, and driving organizational success through a people-first approach.",
                      }),
                      o.jsx("p", {
                        style: {
                          color: "var(--md-sys-color-on-surface-variant)",
                          lineHeight: 1.8,
                          marginBottom: "32px",
                          fontSize: "16px", textAlign: "justify",
                        },
                        children:
                          "Outside of work, I am passionate about mentoring professionals, staying updated with employment laws, and exploring new strategies to enhance workplace well-being.",
                      }),
                      o.jsx("div", {
                        style: {
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "12px",
                          marginBottom: "32px",
                        },
                        children: [
                          {
                            icon: "location_on",
                            label: "Location",
                            value: "Kottayam, Kerala",
                          },
                          {
                            icon: "school",
                            label: "Degree",
                            value: "Master Of Social Work",
                          },
                          {
                            icon: "schedule",
                            label: "Experience",
                            value: "5+ Years",
                          },
                          {
                            icon: "translate",
                            label: "Languages",
                            value: "English, Malayalam, Tamil, Hindi",
                          },
                        ].map((j) =>
                          o.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "12px",
                                padding: "16px",
                                borderRadius: "12px",
                                backgroundColor:
                                  "var(--md-sys-color-surface-container)",
                              },
                              children: [
                                o.jsx("div", {
                                  style: {
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    backgroundColor:
                                      "var(--md-sys-color-primary-container)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                  },
                                  children: o.jsx(vl, {
                                    name: j.icon,
                                    size: "sm",
                                    style: {
                                      color:
                                        "var(--md-sys-color-on-primary-container)",
                                    },
                                  }),
                                }),
                                o.jsxs("div", {
                                  children: [
                                    o.jsx("div", {
                                      style: {
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        color:
                                          "var(--md-sys-color-on-surface-variant)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.8px",
                                      },
                                      children: j.label,
                                    }),
                                    o.jsx("div", {
                                      style: {
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "var(--md-sys-color-on-surface)",
                                        marginTop: "2px",
                                      },
                                      children: j.value,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            j.label,
                          ),
                        ),
                      }),
                      o.jsxs("a", {
                        href: "/resume.pdf",
                        download: !0,
                        className: "md3-btn-filled",
                        style: { textDecoration: "none" },
                        children: [
                          o.jsx(vl, { name: "download", size: "sm" }),
                          "Download Resume",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            o.jsx("style", {
              children: `
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @keyframes move-wave {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animated-wave {
          animation: move-wave 12s linear infinite;
        }
      `,
            }),
            o.jsx("div", {
              style: {
                position: "absolute",
                bottom: "-59px",
                left: 0,
                width: "100%",
                overflow: "hidden",
                lineHeight: 0,
                zIndex: 0,
              },
              dangerouslySetInnerHTML: {
                __html: `<svg class="animated-wave" viewBox="0 0 2880 320" preserveAspectRatio="none" style="display: block; width: 200%; height: 60px;"><path fill="var(--md-sys-color-surface-container-low)" d="M0,160 C 67,214 133,93 200,160 C 350,310 500,10 650,160 C 733,243 817,94 900,160 C 1080,304 1260,16 1440,160 C 1507,214 1573,93 1640,160 C 1790,310 1940,10 2090,160 C 2173,243 2257,94 2340,160 C 2520,304 2700,16 2880,160 V0 H0 Z"></path></svg>`
              }
            }),
          ],
        });
      }
      function SkillCounter({ target, inView }) {
        const [count, setCount] = ct.useState(0);
        ct.useEffect(() => {
          if (inView) {
            const duration = 1200;
            const startTime = performance.now();
            const updateCounter = (currentTime) => {
              const elapsed = currentTime - startTime;
              if (elapsed < duration) {
                const progress = elapsed / duration;
                const easeOut = progress * (2 - progress);
                setCount(Math.floor(easeOut * target));
                requestAnimationFrame(updateCounter);
              } else {
                setCount(target);
              }
            };
            requestAnimationFrame(updateCounter);
          } else {
            setCount(0);
          }
        }, [target, inView]);
        return count;
      }
      function v0() {
        const { ref: A, inView: H } = zu(),
          [j, m] = ct.useState("All"),
          O = ["All", "Human Resources", "Computer Knowledge", "Web Design"],
          B = j === "All" ? _d : _d.filter((U) => U.category === j),
          V = [
            "Team Leadership",
            "Conflict Resolution",
            "Communication",
            "Documentation",
            "Problem Solving",
            "Time Management",
            "Web Designing",
            "Office Management",
          ];
        return o.jsx("section", {
          id: "skills",
          ref: A,
          style: {
            padding: "96px 24px",
            backgroundColor: "var(--md-sys-color-surface)",
          },
          children: o.jsxs("div", {
            style: { maxWidth: "1200px", margin: "0 auto" },
            children: [
              o.jsxs("div", {
                style: { textAlign: "center", marginBottom: "48px" },
                children: [
                  o.jsx("div", {
                    className: "section-label",
                    style: { justifyContent: "center", display: "block" },
                    children: "What I Do",
                  }),
                  o.jsx("h2", {
                    className: "section-title",
                    style: { textAlign: "center", margin: "8px auto 12px" },
                    children: "Skills & Technologies",
                  }),
                  o.jsx("p", {
                    className: "section-subtitle",
                    style: { textAlign: "center", margin: "0 auto" },
                    children:
                      "Core HR competencies, skills, and technologies I am proficient in.",
                  }),
                ],
              }),
              o.jsx("div", {
                style: {
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginBottom: "40px",
                },
                children: O.map((U) =>
                  o.jsxs(
                    "button",
                    {
                      onClick: () => m(U),
                      className: `md3-chip ${j === U ? "active" : ""}`,
                      children: [
                        j === U && o.jsx(vl, { name: "check", size: "sm" }),
                        U,
                      ],
                    },
                    U,
                  ),
                ),
              }),
              o.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "16px",
                  marginBottom: "48px",
                },
                children: B.map((U, C) =>
                  o.jsxs(
                    "div",
                    {
                      style: {
                        padding: "20px",
                        borderRadius: "12px",
                        backgroundColor:
                          "var(--md-sys-color-surface-container-low)",
                      },
                      className: H
                        ? `animate-fade-up delay-${Math.min(C + 1, 5)}`
                        : "",
                      children: [
                        o.jsxs("div", {
                          style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "12px",
                          },
                          children: [
                            o.jsx("span", {
                              style: {
                                fontWeight: 600,
                                fontSize: "15px",
                                color: "var(--md-sys-color-on-surface)",
                              },
                              children: U.name,
                            }),
                            o.jsxs("span", {
                              style: {
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "var(--md-sys-color-primary)",
                                backgroundColor:
                                  "var(--md-sys-color-primary-container)",
                                padding: "2px 10px",
                                borderRadius: "100px",
                              },
                              children: [o.jsx(SkillCounter, { target: U.level, inView: H }), "%"],
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          className: "progress-track",
                          children: o.jsx("div", {
                            className: "progress-indicator",
                            style: { width: H ? `${U.level}%` : "0%" },
                          }),
                        }),
                        o.jsx("div", {
                          style: {
                            fontSize: "11px",
                            color: "var(--md-sys-color-on-surface-variant)",
                            marginTop: "8px",
                            fontWeight: 500,
                          },
                          children: U.category,
                        }),
                      ],
                    },
                    U.name,
                  ),
                ),
              }),
              o.jsxs("div", {
                style: {
                  padding: "24px",
                  borderRadius: "16px",
                  backgroundColor: "var(--md-sys-color-surface-container-low)",
                },
                children: [
                  o.jsx("h3", {
                    style: {
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--md-sys-color-on-surface-variant)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "16px",
                    },
                    children: "Also familiar with",
                  }),
                  o.jsx("div", {
                    style: { display: "flex", gap: "8px", flexWrap: "wrap" },
                    children: V.map((U) =>
                      o.jsx(
                        "span",
                        {
                          style: {
                            padding: "6px 14px",
                            borderRadius: "8px",
                            fontSize: "13px",
                            fontWeight: 500,
                            backgroundColor:
                              "var(--md-sys-color-surface-container)",
                            color: "var(--md-sys-color-on-surface-variant)",
                            border:
                              "1px solid var(--md-sys-color-outline-variant)",
                          },
                          children: U,
                        },
                        U,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function h0() {
        const { ref: A, inView: H } = zu();
        return o.jsx("section", {
          id: "projects",
          ref: A,
          style: {
            padding: "96px 24px",
            backgroundColor: "var(--md-sys-color-surface-container-low)",
          },
          children: o.jsxs("div", {
            style: { maxWidth: "1200px", margin: "0 auto" },
            children: [
              o.jsxs("div", {
                style: { textAlign: "center", marginBottom: "48px" },
                children: [
                  o.jsx("div", {
                    className: "section-label",
                    style: { display: "block" },
                    children: "My Work",
                  }),
                  o.jsx("h2", {
                    className: "section-title",
                    style: { textAlign: "center", margin: "8px auto 12px" },
                    children: "Featured Projects",
                  }),
                  o.jsx("p", {
                    className: "section-subtitle",
                    style: { textAlign: "center", margin: "0 auto" },
                    children:
                      "A showcase of key initiatives and programs I have successfully executed.",
                  }),
                ],
              }),
              o.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "16px",
                },
                children: f0.map((j, m) =>
                  o.jsxs(
                    "div",
                    {
                      className: `md3-card md3-project-card ${H ? `animate-fade-up delay-${Math.min(m + 1, 5)}` : ""}`,
                      style: {
                        padding: "0",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "var(--md-sys-color-surface)",
                      },
                      children: [
                        o.jsxs("div", {
                          style: {
                            padding: "20px",
                            margin: "16px 16px 0 16px",
                            backgroundColor: "var(--md-sys-color-surface-container-highest)",
                            borderRadius: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                          },
                          children: [
                            o.jsx("div", {
                              style: {
                                width: "52px",
                                height: "52px",
                                borderRadius: "14px",
                                backgroundColor:
                                  "var(--md-sys-color-primary-container)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              },
                              children: o.jsx(vl, {
                                name: j.icon,
                                size: "lg",
                                filled: !0,
                                style: { color: "var(--md-sys-color-on-primary-container)" },
                              }),
                            }),
                            o.jsx("h3", {
                              style: {
                                margin: 0,
                                fontSize: "16px",
                                fontWeight: 700,
                                color:
                                  "var(--md-sys-color-on-surface)",
                                lineHeight: 1.3,
                              },
                              children: j.title,
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          style: {
                            padding: "20px 24px",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                          },
                          children: [
                            o.jsx("p", {
                              style: {
                                fontSize: "14px",
                                color: "var(--md-sys-color-on-surface-variant)",
                                lineHeight: 1.7,
                                marginBottom: "20px",
                                flex: 1,
                              },
                              children: j.description,
                            }),
                            o.jsx("div", {
                              style: {
                                display: "flex",
                                gap: "6px",
                                flexWrap: "wrap",
                                marginBottom: "20px",
                              },
                              children: j.tags.map((O) =>
                                o.jsx(
                                  "span",
                                  {
                                    style: {
                                      padding: "4px 10px",
                                      borderRadius: "6px",
                                      fontSize: "12px",
                                      fontWeight: 500,
                                      backgroundColor:
                                        "var(--md-sys-color-surface-container)",
                                      color:
                                        "var(--md-sys-color-on-surface-variant)",
                                      border:
                                        "1px solid var(--md-sys-color-outline-variant)",
                                    },
                                    children: O,
                                  },
                                  O,
                                ),
                              ),
                            }),
                            o.jsxs("a", {
                              href: j.link,
                              className: "md3-btn-filled",
                              style: {
                                textDecoration: "none",
                                alignSelf: "flex-start",
                              },
                              children: [
                                "View Project",
                                o.jsx(vl, {
                                  name: "arrow_forward",
                                  size: "sm",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    j.title,
                  ),
                ),
              }),
            ],
          }),
        });
      }
      function eduComponent() {
        const { ref: A, inView: H } = zu();
        return o.jsxs("section", {
          id: "education",
          ref: A,
          style: {
            padding: "96px 24px",
            backgroundColor: "var(--md-sys-color-surface-container-low)",
            position: "relative",
            zIndex: 2,
          },
          children: [
            o.jsxs("div", {
            style: { maxWidth: "800px", margin: "0 auto" },
            children: [
              o.jsxs("div", {
                style: { textAlign: "center", marginBottom: "56px" },
                children: [
                  o.jsx("div", {
                    className: "section-label",
                    style: { display: "block" },
                    children: "Academic Background",
                  }),
                  o.jsx("h2", {
                    className: "section-title",
                    style: { textAlign: "center", margin: "8px auto 12px" },
                    children: "Education",
                  }),
                  o.jsx("p", {
                    className: "section-subtitle",
                    style: { textAlign: "center", margin: "0 auto" },
                    children: "My formal training and academic achievements.",
                  }),
                ],
              }),
              o.jsx("div", {
                style: { position: "relative" },
                children: [
                  {
                    degree: "Master of Social Work (MSW) in Human Resources",
                    institution: "Loyola College, Chennai",
                    year: "2018 - 2020",
                    description: "Specialized in industrial relations, labor welfare, and organizational behavior.",
                    icon: "school",
                  },
                  {
                    degree: "Bachelor of Arts in Sociology",
                    institution: "Madras Christian College",
                    year: "2015 - 2018",
                    description: "Graduated with honors. Focused on social dynamics and human psychology.",
                    icon: "history_edu",
                  },
                ].map((edu, idx, arr) => {
                  const isLast = idx === arr.length - 1;
                  return o.jsxs("div", {
                    key: idx,
                    className: H ? `animate-fade-up delay-${Math.min(idx + 1, 5)}` : "",
                    style: { display: "flex", gap: "0", marginBottom: "0" },
                    children: [
                      o.jsxs("div", {
                        style: {
                            display: "flex", flexDirection: "column", alignItems: "center",
                            flexShrink: 0, width: "56px"
                        },
                        children: [
                            o.jsx("div", {
                              style: {
                                width: "44px", height: "44px", borderRadius: "50%",
                                backgroundColor: "var(--md-sys-color-primary-container)",
                                color: "var(--md-sys-color-on-primary-container)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexShrink: 0, zIndex: 1, border: "2px solid var(--md-sys-color-primary)"
                              },
                              children: o.jsx("span", {
                                className: "material-symbols-rounded",
                                children: edu.icon,
                              }),
                            }),
                            !isLast && o.jsx("div", {
                                style: {
                                    width: "2px", flex: 1, backgroundColor: "var(--md-sys-color-outline-variant)",
                                    marginTop: "0", minHeight: "100%"
                                }
                            })
                        ]
                      }),
                      o.jsx("div", {
                        style: { flex: 1, paddingLeft: "20px", paddingBottom: isLast ? "0" : "32px", paddingTop: "0" },
                        children: o.jsxs("div", {
                          style: {
                            padding: "20px 24px",
                            borderRadius: "12px",
                            backgroundColor: "var(--md-sys-color-surface)",
                            marginBottom: "0",
                          },
                          children: [
                            o.jsxs("div", {
                              style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                flexWrap: "wrap",
                                gap: "8px",
                                marginBottom: "8px",
                              },
                              children: [
                                o.jsxs("div", {
                                  children: [
                                    o.jsx("h3", {
                                      style: { margin: 0, fontSize: "17px", fontWeight: 700, color: "var(--md-sys-color-on-surface)" },
                                      children: edu.degree,
                                    }),
                                    o.jsxs("div", {
                                      style: { display: "flex", alignItems: "center", gap: "6px", marginTop: "4px", color: "var(--md-sys-color-primary)", fontWeight: 600, fontSize: "14px" },
                                      children: [
                                        o.jsx(vl, { name: "account_balance", size: "sm" }),
                                        edu.institution,
                                      ],
                                    }),
                                  ],
                                }),
                                o.jsxs("span", {
                                  style: { display: "flex", alignItems: "center", gap: "4px", padding: "4px 12px", borderRadius: "100px", fontSize: "12px", fontWeight: 500, backgroundColor: "var(--md-sys-color-surface-container)", color: "var(--md-sys-color-on-surface-variant)", border: "1px solid var(--md-sys-color-outline-variant)", whiteSpace: "nowrap" },
                                  children: [
                                    o.jsx(vl, { name: "calendar_month", size: "sm" }),
                                    edu.year,
                                  ],
                                }),
                              ],
                            }),
                            o.jsx("div", { className: "md3-divider", style: { margin: "12px 0" } }),
                            o.jsx("p", {
                              style: { margin: 0, fontSize: "14px", color: "var(--md-sys-color-on-surface-variant)", lineHeight: 1.6 },
                              children: edu.description,
                            }),
                        ],
                        })
                      })
                    ],
                  });
                }),
              }),
            ],
          }),
          o.jsx("div", {
            style: {
              position: "absolute",
              bottom: "-59px",
              left: 0,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
              zIndex: 0,
            },
            dangerouslySetInnerHTML: {
              __html: `<svg class="animated-wave" viewBox="0 0 2880 320" preserveAspectRatio="none" style="display: block; width: 200%; height: 60px;"><path fill="var(--md-sys-color-surface-container-low)" d="M0,160 C 67,214 133,93 200,160 C 350,310 500,10 650,160 C 733,243 817,94 900,160 C 1080,304 1260,16 1440,160 C 1507,214 1573,93 1640,160 C 1790,310 1940,10 2090,160 C 2173,243 2257,94 2340,160 C 2520,304 2700,16 2880,160 V0 H0 Z"></path></svg>`
            }
          }),
        ],
      });
    }
      function g0() {
        const { ref: A, inView: H } = zu();
        return o.jsxs("section", {
          id: "experience",
          ref: A,
          style: {
            padding: "96px 24px",
            backgroundColor: "var(--md-sys-color-surface-container)",
            position: "relative",
            zIndex: 3,
          },
          children: [
            o.jsxs("div", {
            style: { maxWidth: "800px", margin: "0 auto" },
            children: [
              o.jsxs("div", {
                style: { textAlign: "center", marginBottom: "56px" },
                children: [
                  o.jsx("div", {
                    className: "section-label",
                    style: { display: "block" },
                    children: "My Journey",
                  }),
                  o.jsx("h2", {
                    className: "section-title",
                    style: { textAlign: "center", margin: "8px auto 12px" },
                    children: "Work Experience",
                  }),
                  o.jsx("p", {
                    className: "section-subtitle",
                    style: { textAlign: "center", margin: "0 auto" },
                    children:
                      "Companies and roles I've had the pleasure of working with.",
                  }),
                ],
              }),
              o.jsx("div", {
                style: { position: "relative" },
                children: Md.map((j, m) => {
                  const O = m === Md.length - 1;
                  return o.jsxs(
                    "div",
                    {
                      className: H ? `animate-fade-up delay-${m + 1}` : "",
                      style: { display: "flex", gap: "0", marginBottom: "0" },
                      children: [
                        o.jsxs("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flexShrink: 0,
                            width: "56px",
                          },
                          children: [
                            o.jsx("div", {
                              style: {
                                width: "44px",
                                height: "44px",
                                borderRadius: "50%",
                                backgroundColor:
                                  "var(--md-sys-color-primary-container)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                border: "2px solid var(--md-sys-color-primary)",
                                zIndex: 1,
                              },
                              children: o.jsx(vl, {
                                name: "work",
                                size: "sm",
                                filled: !0,
                                style: {
                                  color:
                                    "var(--md-sys-color-on-primary-container)",
                                },
                              }),
                            }),
                            !O &&
                              o.jsx("div", {
                                style: {
                                  width: "2px",
                                  flex: 1,
                                  backgroundColor:
                                    "var(--md-sys-color-outline-variant)",
                                  marginTop: "0",
                                  minHeight: "100%",
                                },
                              }),
                          ],
                        }),
                        o.jsx("div", {
                          style: {
                            flex: 1,
                            paddingLeft: "20px",
                            paddingBottom: O ? "0" : "32px",
                            paddingTop: "0",
                          },
                          children: o.jsxs("div", {
                            style: {
                              padding: "20px 24px",
                              borderRadius: "12px",
                              backgroundColor:
                                "var(--md-sys-color-surface)",
                              marginBottom: "0",
                            },
                            children: [
                              o.jsxs("div", {
                                style: {
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-start",
                                  flexWrap: "wrap",
                                  gap: "8px",
                                  marginBottom: "8px",
                                },
                                children: [
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("h3", {
                                        style: {
                                          margin: 0,
                                          fontSize: "17px",
                                          fontWeight: 700,
                                          color:
                                            "var(--md-sys-color-on-surface)",
                                        },
                                        children: j.role,
                                      }),
                                      o.jsxs("div", {
                                        style: {
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "6px",
                                          marginTop: "4px",
                                          color: "var(--md-sys-color-primary)",
                                          fontWeight: 600,
                                          fontSize: "14px",
                                        },
                                        children: [
                                          o.jsx(vl, {
                                            name: "apartment",
                                            size: "sm",
                                          }),
                                          j.company,
                                        ],
                                      }),
                                    ],
                                  }),
                                  o.jsxs("span", {
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "4px",
                                      padding: "4px 12px",
                                      borderRadius: "100px",
                                      fontSize: "12px",
                                      fontWeight: 500,
                                      backgroundColor:
                                        "var(--md-sys-color-surface-container)",
                                      color:
                                        "var(--md-sys-color-on-surface-variant)",
                                      border:
                                        "1px solid var(--md-sys-color-outline-variant)",
                                      whiteSpace: "nowrap",
                                    },
                                    children: [
                                      o.jsx(vl, {
                                        name: "calendar_month",
                                        size: "sm",
                                      }),
                                      j.period,
                                    ],
                                  }),
                                ],
                              }),
                              o.jsx("div", {
                                className: "md3-divider",
                                style: { margin: "12px 0" },
                              }),
                              o.jsx("ul", {
                                style: {
                                  margin: 0,
                                  padding: 0,
                                  listStyle: "none",
                                },
                                children: j.bullets.map((B, V) =>
                                  o.jsxs(
                                    "li",
                                    {
                                      style: {
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "10px",
                                        padding: "6px 0",
                                        fontSize: "14px",
                                        color:
                                          "var(--md-sys-color-on-surface-variant)",
                                        lineHeight: 1.6,
                                      },
                                      children: [
                                        o.jsx(vl, {
                                          name: "check_circle",
                                          size: "sm",
                                          filled: !0,
                                          style: {
                                            color:
                                              "var(--md-sys-color-primary)",
                                            flexShrink: 0,
                                            marginTop: "2px",
                                          },
                                        }),
                                        B,
                                      ],
                                    },
                                    V,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    j.role,
                  );
                }),
              }),
            ],
          }),
          o.jsx("div", {
            style: {
              position: "absolute",
              bottom: "-59px",
              left: 0,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
              zIndex: 0,
            },
            dangerouslySetInnerHTML: {
              __html: `<svg class="animated-wave" viewBox="0 0 2880 320" preserveAspectRatio="none" style="display: block; width: 200%; height: 60px;"><path fill="var(--md-sys-color-surface-container)" d="M0,160 C 67,214 133,93 200,160 C 350,310 500,10 650,160 C 733,243 817,94 900,160 C 1080,304 1260,16 1440,160 C 1507,214 1573,93 1640,160 C 1790,310 1940,10 2090,160 C 2173,243 2257,94 2340,160 C 2520,304 2700,16 2880,160 V0 H0 Z"></path></svg>`
            }
          }),
        ],
      });
    }
      function p0() {
        const { ref: A, inView: H } = zu(),
          [j, m] = ct.useState({
            name: "",
            email: "",
            subject: "",
            message: "",
          }),
          [O, B] = ct.useState(!1),
          V = (U) => {
            U.preventDefault();
            fetch("https://formsubmit.co/ajax/77dss3dv@duck.com", {
              method: "POST",
              headers: { "Content-Type": "application/json", "Accept": "application/json" },
              body: JSON.stringify({
                name: j.name,
                email: j.email,
                subject: j.subject,
                message: j.message,
                _captcha: "false"
              })
            }).then(() => {
              B(!0);
              setTimeout(() => B(!1), 4e3);
              m({ name: "", email: "", subject: "", message: "" });
            }).catch(e => console.error(e));
          };
        return o.jsxs("section", {
          id: "contact",
          ref: A,
          style: {
            padding: "96px 24px",
            backgroundColor: "var(--md-sys-color-surface)",
          },
          children: [
            o.jsxs("div", {
              style: { maxWidth: "1200px", margin: "0 auto" },
              children: [
                o.jsxs("div", {
                  style: { textAlign: "center", marginBottom: "56px" },
                  children: [
                    o.jsx("div", {
                      className: "section-label",
                      style: { display: "block" },
                      children: "Get In Touch",
                    }),
                    o.jsx("h2", {
                      className: "section-title",
                      style: { textAlign: "center", margin: "8px auto 12px" },
                      children: "Contact Me",
                    }),
                    o.jsx("p", {
                      className: "section-subtitle",
                      style: { textAlign: "center", margin: "0 auto" },
                      children:
                        "Have a project in mind or just want to chat? I'd love to hear from you.",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1.5fr",
                    gap: "32px",
                  },
                  className: "contact-grid",
                  children: [
                    o.jsxs("div", {
                      className: H ? "animate-fade-up" : "",
                      children: [
                        o.jsxs("div", {
                          style: { marginBottom: "24px" },
                          children: [
                            o.jsx("h3", {
                              style: {
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "var(--md-sys-color-on-surface)",
                                marginBottom: "8px",
                              },
                              children: "Let's work together",
                            }),
                            o.jsx("p", {
                              style: {
                                fontSize: "15px",
                                color: "var(--md-sys-color-on-surface-variant)",
                                lineHeight: 1.7,
                              },
                              children:
                                "I'm currently open to new opportunities and job vacancies in the Human Resources field. Whether you have a project, an idea, or just want to connect — reach out!",
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                          },
                          children: s0.map((U) =>
                            o.jsxs(
                              "a",
                              {
                                href: U.href,
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "16px",
                                  padding: "16px",
                                  borderRadius: "12px",
                                  backgroundColor:
                                    "var(--md-sys-color-surface-container)",
                                  textDecoration: "none",
                                  transition: "background-color 0.2s ease",
                                },
                                onMouseEnter: (C) =>
                                  (C.currentTarget.style.backgroundColor =
                                    "var(--md-sys-color-surface-container-high)"),
                                onMouseLeave: (C) =>
                                  (C.currentTarget.style.backgroundColor =
                                    "var(--md-sys-color-surface-container)"),
                                children: [
                                  o.jsx("div", {
                                    style: {
                                      width: "44px",
                                      height: "44px",
                                      borderRadius: "12px",
                                      backgroundColor:
                                        "var(--md-sys-color-primary-container)",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      flexShrink: 0,
                                    },
                                    children: o.jsx(vl, {
                                      name: U.icon,
                                      size: "sm",
                                      filled: !0,
                                      style: {
                                        color:
                                          "var(--md-sys-color-on-primary-container)",
                                      },
                                    }),
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("div", {
                                        style: {
                                          fontSize: "12px",
                                          fontWeight: 600,
                                          color:
                                            "var(--md-sys-color-on-surface-variant)",
                                          textTransform: "uppercase",
                                          letterSpacing: "0.6px",
                                        },
                                        children: U.label,
                                      }),
                                      o.jsx("div", {
                                        style: {
                                          fontSize: "14px",
                                          fontWeight: 600,
                                          color:
                                            "var(--md-sys-color-on-surface)",
                                          marginTop: "2px",
                                        },
                                        children: U.value,
                                      }),
                                    ],
                                  }),
                                  o.jsx(vl, {
                                    name: "open_in_new",
                                    size: "sm",
                                    style: {
                                      marginLeft: "auto",
                                      color:
                                        "var(--md-sys-color-on-surface-variant)",
                                    },
                                  }),
                                ],
                              },
                              U.label,
                            ),
                          ),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: H ? "animate-fade-up delay-2" : "",
                      style: {
                        padding: "32px",
                        borderRadius: "16px",
                        backgroundColor:
                          "var(--md-sys-color-surface-container)",
                      },
                      children: [
                        O &&
                          o.jsxs("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "16px",
                              borderRadius: "12px",
                              backgroundColor:
                                "var(--md-sys-color-tertiary-container)",
                              color:
                                "var(--md-sys-color-on-tertiary-container)",
                              marginBottom: "24px",
                              fontSize: "14px",
                              fontWeight: 500,
                            },
                            children: [
                              o.jsx(vl, {
                                name: "check_circle",
                                size: "md",
                                filled: !0,
                              }),
                              "Message sent! I'll get back to you soon.",
                            ],
                          }),
                        o.jsxs("form", {
                          onSubmit: V,
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                          },
                          children: [
                            o.jsxs("div", {
                              style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "16px",
                              },
                              className: "form-row",
                              children: [
                                o.jsxs("div", {
                                  children: [
                                    o.jsx("label", {
                                      style: {
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color:
                                          "var(--md-sys-color-on-surface-variant)",
                                        display: "block",
                                        marginBottom: "6px",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.6px",
                                      },
                                      children: "Name",
                                    }),
                                    o.jsx("input", {
                                      required: !0,
                                      placeholder: "John Doe",
                                      className: "md3-field",
                                      value: j.name,
                                      onChange: (U) =>
                                        m({ ...j, name: U.target.value }),
                                    }),
                                  ],
                                }),
                                o.jsxs("div", {
                                  children: [
                                    o.jsx("label", {
                                      style: {
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color:
                                          "var(--md-sys-color-on-surface-variant)",
                                        display: "block",
                                        marginBottom: "6px",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.6px",
                                      },
                                      children: "Email",
                                    }),
                                    o.jsx("input", {
                                      required: !0,
                                      type: "email",
                                      placeholder: "john@example.com",
                                      className: "md3-field",
                                      value: j.email,
                                      onChange: (U) =>
                                        m({ ...j, email: U.target.value }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("label", {
                                  style: {
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    color:
                                      "var(--md-sys-color-on-surface-variant)",
                                    display: "block",
                                    marginBottom: "6px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.6px",
                                  },
                                  children: "Subject",
                                }),
                                o.jsx("input", {
                                  required: !0,
                                  placeholder: "Project Inquiry",
                                  className: "md3-field",
                                  value: j.subject,
                                  onChange: (U) =>
                                    m({ ...j, subject: U.target.value }),
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("label", {
                                  style: {
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    color:
                                      "var(--md-sys-color-on-surface-variant)",
                                    display: "block",
                                    marginBottom: "6px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.6px",
                                  },
                                  children: "Message",
                                }),
                                o.jsx("textarea", {
                                  required: !0,
                                  rows: 5,
                                  placeholder: "Tell me about your project...",
                                  className: "md3-field",
                                  style: { resize: "vertical" },
                                  value: j.message,
                                  onChange: (U) =>
                                    m({ ...j, message: U.target.value }),
                                }),
                              ],
                            }),
                            o.jsxs("button", {
                              type: "submit",
                              className: "md3-btn-filled",
                              style: {
                                alignSelf: "flex-end",
                                fontSize: "15px",
                                padding: "12px 32px",
                              },
                              children: [
                                o.jsx(vl, {
                                  name: "send",
                                  size: "sm",
                                  filled: !0,
                                }),
                                "Send Message",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("style", {
              children: `
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `,
            }),
          ],
        });
      }
      function S0() {
        return o.jsx("footer", {
          style: {
            backgroundColor: "var(--md-sys-color-surface-container-highest)",
            borderTop: "1px solid var(--md-sys-color-outline-variant)",
            padding: "32px 24px",
          },
          children: o.jsxs("div", {
            style: {
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            },
            children: [
              o.jsxs("div", {
                style: { display: "flex", alignItems: "center", gap: "10px" },
                children: [
                  o.jsx("div", {
                    style: {
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "var(--md-sys-color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: o.jsx(vl, {
                      name: "code",
                      size: "sm",
                      style: {
                        color: "var(--md-sys-color-on-primary)",
                        fontSize: "16px",
                      },
                    }),
                  }),
                  o.jsx("span", { style: { fontWeight: 700, fontSize: "16px", color: "var(--md-sys-color-on-surface)", }, children: "Solomon Rajan", }),
                ],
              }),
              o.jsxs("p", {
                style: {
                  fontSize: "13px",
                  color: "var(--md-sys-color-on-surface-variant)",
                  margin: 0,
                  textAlign: "center",
                },
                children: [
                  "Built with React & Material Design 3 Â· Â© ",
                  new Date().getFullYear(),
                ],
              }),
              o.jsx("div", {
                style: { display: "flex", gap: "8px" },
                children: [
                  { icon: "mail", href: "mailto:alex@example.com" },
                  { icon: "language", href: "#" },
                  { icon: "code", href: "#" },
                ].map((A) =>
                  o.jsx(
                    "a",
                    {
                      href: A.href,
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--md-sys-color-on-surface-variant)",
                        transition:
                          "background-color 0.2s ease, color 0.2s ease",
                        textDecoration: "none",
                      },
                      onMouseEnter: (H) => {
                        ((H.currentTarget.style.backgroundColor =
                          "var(--md-sys-color-surface-container)"),
                          (H.currentTarget.style.color =
                            "var(--md-sys-color-primary)"));
                      },
                      onMouseLeave: (H) => {
                        ((H.currentTarget.style.backgroundColor =
                          "transparent"),
                          (H.currentTarget.style.color =
                            "var(--md-sys-color-on-surface-variant)"));
                      },
                      children: o.jsx(vl, { name: A.icon, size: "sm" }),
                    },
                    A.icon,
                  ),
                ),
              }),
            ],
          }),
        });
            }
      function blogComponent() {
        const { ref: A, inView: H } = zu();
        return o.jsx("section", {
          id: "blog",
          ref: A,
          style: {
            padding: "96px 24px",
            backgroundColor: "var(--md-sys-color-surface-container-low)",
          },
          children: o.jsxs("div", {
            style: { maxWidth: "1200px", margin: "0 auto" },
            children: [
              o.jsxs("div", {
                style: { textAlign: "center", marginBottom: "48px" },
                children: [
                  o.jsx("div", {
                    className: "section-label",
                    style: { display: "block" },
                    children: "Insights",
                  }),
                  o.jsx("h2", {
                    className: "section-title",
                    style: { textAlign: "center", margin: "8px auto 12px" },
                    children: "Blog & Articles",
                  }),
                  o.jsx("p", {
                    className: "section-subtitle",
                    style: { textAlign: "center", margin: "0 auto" },
                    children: "Thoughts, insights, and professional perspectives.",
                  }),
                ],
              }),
              o.jsx("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "16px",
                },
                children: blogData.map((j, m) =>
                  o.jsxs(
                    "div",
                    {
                      className: `md3-card ${H ? `animate-fade-up delay-${Math.min(m + 1, 5)}` : ""}`,
                      style: { padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" },
                      children: [
                        o.jsx("div", {
                          style: {
                            width: "100%",
                            height: "180px",
                            backgroundImage: `url("${j.thumbnail}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }
                        }),
                        o.jsxs("div", {
                          style: { padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1, backgroundColor: "var(--md-sys-color-surface-container-lowest)" },
                          children: [
                            o.jsx("div", {
                                style: { display: "flex", gap: "8px", marginBottom: "12px", alignItems: "center" },
                                children: [
                                    o.jsx("span", { className: "material-symbols-rounded", style: { fontSize: "16px", color: "var(--md-sys-color-on-surface-variant)" }, children: j.icon }),
                                    o.jsx("span", { style: { fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--md-sys-color-on-surface-variant)" }, children: j.category })
                                ]
                            }),
                            o.jsx("h3", { style: { fontSize: "20px", fontWeight: "600", margin: "0 0 12px 0", color: "var(--md-sys-color-on-surface)", lineHeight: "1.3" }, children: j.title }),
                            o.jsx("p", { style: { fontSize: "15px", color: "var(--md-sys-color-on-surface-variant)", marginBottom: "24px", lineHeight: "1.6", flexGrow: 1 }, children: j.description }),
                            o.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }, children: j.tags.map((X) => o.jsx("span", { className: "md3-chip", children: X }, X)) }),
                            o.jsxs("div", {
                              style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" },
                              children: [
                                o.jsx("span", { style: { fontSize: "13px", color: "var(--md-sys-color-outline)" }, children: j.readTime }),
                                o.jsx("a", {
                                  href: j.link, className: "md3-btn-filled", style: { textDecoration: "none", padding: "10px 24px", borderRadius: "100px", fontSize: "14px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "8px" },
                                  children: [ "Read Article", o.jsx("span", { className: "material-symbols-rounded", style: { fontSize: "18px" }, children: "arrow_forward" }) ]
                                })
                              ]
                            })
                          ],
                        }),
                      ],
                    },
                    m
                  )
                ),
              }),
            ],
          }),
        });
      }

      function blogPostComponent() {
        const { ref: A, inView: H } = zu();
        const pageMatch = (window.CURRENT_PAGE || "").match(/blog\/post-(\d+)/);
        const postId = pageMatch ? parseInt(pageMatch[1]) : 1;
        const post = blogData.find(p => p.id === postId);

        if (!post) {
            return o.jsxs("div", {
                style: { padding: "96px 24px", textAlign: "center", minHeight: "60vh" },
                children: [
                    o.jsx("h2", { children: "Post not found" }),
                    o.jsx("a", { href: "/blog", className: "md3-button", children: "Back to Blog" })
                ]
            });
        }

        // We use document.title side-effect dynamically.
        if (typeof document !== 'undefined') {
            document.title = `${post.title} - Solomon Rajan`;
        }

        return o.jsxs("article", {
          style: { maxWidth: "800px", margin: "0 auto", padding: "80px 24px 60px" },
          children: [
            o.jsxs("a", {
                href: "/blog/",
                style: { display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--md-sys-color-primary)", textDecoration: "none", fontWeight: "500", marginBottom: "32px" },
                children: [
                    o.jsx("span", { className: "material-symbols-rounded", children: "arrow_back" }),
                    "Back to Blog"
                ]
            }),
            o.jsxs("div", {
                className: `article-hero ${H ? 'animate-fade-up' : ''}`,
                ref: A,
                style: { marginBottom: "40px" },
                children: [
                    o.jsx("img", { src: post.thumbnail, alt: post.title, style: { width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px", marginBottom: "24px" } }),
                    o.jsxs("div", {
                        style: { marginBottom: "24px" },
                        children: [
                            o.jsx("span", {
                                style: { display: "inline-block", backgroundColor: "var(--md-sys-color-primary)", color: "var(--md-sys-color-on-primary)", padding: "6px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", marginBottom: "12px" },
                                children: post.category
                            }),
                            o.jsx("h1", {
                                style: { fontSize: "clamp(28px, 6vw, 42px)", fontWeight: "700", marginBottom: "16px", lineHeight: "1.3", color: "var(--md-sys-color-on-surface)" },
                                children: post.title
                            }),
                            o.jsxs("div", {
                                style: { display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "24px", fontSize: "14px", color: "var(--md-sys-color-outline)" },
                                children: [
                                    o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [ o.jsx("span", { className: "material-symbols-rounded", children: "calendar_today" }), post.date ] }),
                                    o.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [ o.jsx("span", { className: "material-symbols-rounded", children: "schedule" }), post.readTime ] })
                                ]
                            }),
                            o.jsx("p", {
                                style: { fontSize: "18px", color: "var(--md-sys-color-outline)", lineHeight: "1.6", fontWeight: "500", borderLeft: "4px solid var(--md-sys-color-primary)", paddingLeft: "16px", marginBottom: "32px" },
                                children: post.description
                            }),
                            o.jsx("div", {
                                style: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px", paddingBottom: "32px", borderBottom: "1px solid var(--md-sys-color-outline-variant)" },
                                children: post.tags.map((X) => o.jsx("span", { className: "md3-chip", children: X }, X))
                            })
                        ]
                    })
                ]
            }),
            o.jsx("div", {
                className: "article-content",
                style: { fontSize: "16px", lineHeight: "1.8", color: "var(--md-sys-color-on-surface)", textAlign: "justify" },
                dangerouslySetInnerHTML: { __html: post.content }
            }),
            o.jsx("div", {
                style: { marginTop: "60px", paddingTop: "32px", borderTop: "1px solid var(--md-sys-color-outline-variant)" },
                children: o.jsxs("a", {
                    href: "/blog/",
                    style: { display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--md-sys-color-primary)", textDecoration: "none", fontWeight: "500", marginBottom: "32px" },
                    children: [
                        o.jsx("span", { className: "material-symbols-rounded", children: "arrow_back" }),
                        "Back to All Posts"
                    ]
                })
            })
          ]
        });
      }
      function b0() {
        const currentPage = window.CURRENT_PAGE || "home";
        return o.jsxs("div", {
          style: { minHeight: "100vh" },
          children: [
            o.jsx(d0, {}),
            o.jsxs("main", {
              children: [
                currentPage === "home" && o.jsx(m0, {}),
                currentPage === "about" && o.jsxs(ct.Fragment, { children: [o.jsx(y0, {}), o.jsx(g0, {}), o.jsx(eduComponent, {}), o.jsx(v0, {})] }),
                currentPage === "skills" && o.jsx(v0, {}),
                currentPage === "projects" && o.jsx(h0, {}),
                currentPage === "experience" && o.jsx(g0, {}),
                currentPage === "contact" && o.jsx(p0, {}), currentPage === "blog" && o.jsx(blogComponent, {}), currentPage.startsWith("blog/post-") && o.jsx(blogPostComponent, {}),
              ],
            }),
          ],
        });
      }
      c0.createRoot(document.getElementById("root")).render(
        o.jsx(ct.StrictMode, { children: o.jsx(b0, {}) }),
      );