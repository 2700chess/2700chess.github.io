function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./Board.stories-Co3lUmOc.js",
      "./styled-components.browser.esm-D848Jn1s.js",
      "./index-Cu9bd8lq.js",
      "./Board-D97at8dN.js",
      "./util-5knA4vmh.js",
      "./Board-BoiixOBD.css",
      "./Box-I8wZGDRa.js",
      "./extends-CCbyfPlC.js",
      "./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js",
      "./Controls.stories-CryjEw1C.js",
      "./index-UwMaM7Nz.js",
      "./FenInput.stories-C7RA4PDd.js",
      "./index-LBzdyCsK.js",
      "./moment-B1M2hmvy.js",
      "./index-7dmntjiV.js",
      "./inheritsLoose-B7h9gheN.js",
      "./GameList.stories-D3GQTwm6.js",
      "./GameMetadata.stories-DoyYaMCi.js",
      "./hooks-BKjqg-wg.js",
      "./PlayingSide-CxMBjoKM.js",
      "./Sliced-CBmddyFN.js",
      "./GameStatus-C3p6vaOi.js",
      "./Time-dLlJDQP3.js",
      "./GameStatus.stories-Bp4pcXQU.js",
      "./PlayingSide.stories-CfJPv4e4.js",
      "./PrettyMoves.stories-CYHIRCr9.js",
      "./PromotionSelect.stories-DCsmpzkv.js",
      "./Sliced.stories-DOXsn2vi.js",
      "./Tablebase.stories-vxj_YiVV.js",
      "./Termometer.stories-CewbuIod.js",
      "./Time.stories-Dh4JOZyZ.js",
      "./entry-preview-BsoMDd9s.js",
      "./react-18-ZytopnYu.js",
      "./entry-preview-docs-CRkqrHhQ.js",
      "./getPrototype-DkXlm8sv.js",
      "./index-DrFu-skq.js",
      "./preview-DzbRFJg_.js",
      "./index-B_J8iUie.js",
      "./preview-CwqMn10d.js",
      "./preview-BAz7FMXc.js",
      "./preview-BaIEwN7w.js",
      "./preview-Fd1AO6zv.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import "../sb-preview/runtime.js";
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const r of e)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && c(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(e) {
    const r = {};
    return (
      e.integrity && (r.integrity = e.integrity),
      e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = m(e);
    fetch(e.href, r);
  }
})();
const R = "modulepreload",
  P = function (_, n) {
    return new URL(_, n).href;
  },
  d = {},
  t = function (n, m, c) {
    let e = Promise.resolve();
    if (m && m.length > 0) {
      const r = document.getElementsByTagName("link"),
        o = document.querySelector("meta[property=csp-nonce]"),
        E =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      e = Promise.all(
        m.map((i) => {
          if (((i = P(i, c)), i in d)) return;
          d[i] = !0;
          const a = i.endsWith(".css"),
            O = a ? '[rel="stylesheet"]' : "";
          if (!!c)
            for (let u = r.length - 1; u >= 0; u--) {
              const l = r[u];
              if (l.href === i && (!a || l.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${i}"]${O}`)) return;
          const s = document.createElement("link");
          if (
            ((s.rel = a ? "stylesheet" : R),
            a || ((s.as = "script"), (s.crossOrigin = "")),
            (s.href = i),
            E && s.setAttribute("nonce", E),
            document.head.appendChild(s),
            a)
          )
            return new Promise((u, l) => {
              s.addEventListener("load", u),
                s.addEventListener("error", () =>
                  l(new Error(`Unable to preload CSS for ${i}`))
                );
            });
        })
      );
    }
    return e
      .then(() => n())
      .catch((r) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = r), window.dispatchEvent(o), !o.defaultPrevented))
          throw r;
      });
  },
  { createBrowserChannel: f } = __STORYBOOK_MODULE_CHANNELS__,
  { addons: T } = __STORYBOOK_MODULE_PREVIEW_API__,
  p = f({ page: "preview" });
T.setChannel(p);
window.__STORYBOOK_ADDONS_CHANNEL__ = p;
window.CONFIG_TYPE === "DEVELOPMENT" &&
  (window.__STORYBOOK_SERVER_CHANNEL__ = p);
const L = {
  "./src/components/Board.stories.tsx": async () =>
    t(
      () => import("./Board.stories-Co3lUmOc.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      import.meta.url
    ),
  "./src/components/Controls.stories.tsx": async () =>
    t(
      () => import("./Controls.stories-CryjEw1C.js"),
      __vite__mapDeps([9, 1, 2, 10]),
      import.meta.url
    ),
  "./src/components/FenInput.stories.tsx": async () =>
    t(
      () => import("./FenInput.stories-C7RA4PDd.js"),
      __vite__mapDeps([11, 1, 2, 12, 13, 4, 14, 7, 15]),
      import.meta.url
    ),
  "./src/components/GameList.stories.tsx": async () =>
    t(
      () => import("./GameList.stories-D3GQTwm6.js"),
      __vite__mapDeps([16, 1, 2, 14, 7, 15, 6, 8]),
      import.meta.url
    ),
  "./src/components/GameMetadata.stories.tsx": async () =>
    t(
      () => import("./GameMetadata.stories-DoyYaMCi.js"),
      __vite__mapDeps([
        17, 1, 2, 18, 4, 14, 7, 15, 13, 19, 12, 20, 6, 8, 21, 22, 10,
      ]),
      import.meta.url
    ),
  "./src/components/GameStatus.stories.tsx": async () =>
    t(
      () => import("./GameStatus.stories-Bp4pcXQU.js"),
      __vite__mapDeps([23, 1, 2, 21, 22, 10, 14, 7, 15, 6, 8]),
      import.meta.url
    ),
  "./src/components/PlayingSide.stories.tsx": async () =>
    t(
      () => import("./PlayingSide.stories-CfJPv4e4.js"),
      __vite__mapDeps([24, 1, 2, 19, 12, 13, 4, 14, 7, 15, 20, 6, 8]),
      import.meta.url
    ),
  "./src/components/PrettyMoves.stories.tsx": async () =>
    t(
      () => import("./PrettyMoves.stories-CYHIRCr9.js"),
      __vite__mapDeps([25, 1, 2, 4, 12, 13, 14, 7, 15, 3, 5, 6, 8]),
      import.meta.url
    ),
  "./src/components/PromotionSelect.stories.tsx": async () =>
    t(
      () => import("./PromotionSelect.stories-DCsmpzkv.js"),
      __vite__mapDeps([26, 1, 2, 18, 4, 14, 7, 15, 13]),
      import.meta.url
    ),
  "./src/components/Sliced.stories.ts": async () =>
    t(
      () => import("./Sliced.stories-DOXsn2vi.js"),
      __vite__mapDeps([27, 20, 1, 2]),
      import.meta.url
    ),
  "./src/components/Tablebase.stories.tsx": async () =>
    t(
      () => import("./Tablebase.stories-vxj_YiVV.js"),
      __vite__mapDeps([28, 1, 2, 18, 4, 14, 7, 15, 13, 12, 6, 8]),
      import.meta.url
    ),
  "./src/components/Termometer.stories.tsx": async () =>
    t(
      () => import("./Termometer.stories-CewbuIod.js"),
      __vite__mapDeps([29, 1, 2, 14, 7, 15, 6, 8]),
      import.meta.url
    ),
  "./src/components/Time.stories.tsx": async () =>
    t(
      () => import("./Time.stories-Dh4JOZyZ.js"),
      __vite__mapDeps([30, 1, 2, 22, 10, 14, 7, 15]),
      import.meta.url
    ),
};
async function v(_) {
  return L[_]();
}
const {
    composeConfigs: y,
    PreviewWeb: A,
    ClientApi: w,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  I = async () => {
    const _ = await Promise.all([
      t(
        () => import("./entry-preview-BsoMDd9s.js"),
        __vite__mapDeps([31, 2, 32]),
        import.meta.url
      ),
      t(
        () => import("./entry-preview-docs-CRkqrHhQ.js"),
        __vite__mapDeps([33, 34, 2, 35]),
        import.meta.url
      ),
      t(
        () => import("./preview-DzbRFJg_.js"),
        __vite__mapDeps([36, 37]),
        import.meta.url
      ),
      t(() => import("./preview-Uc1k9p7A.js"), [], import.meta.url),
      t(() => import("./preview-DbT1mggi.js"), [], import.meta.url),
      t(
        () => import("./preview-CwqMn10d.js"),
        __vite__mapDeps([38, 35]),
        import.meta.url
      ),
      t(() => import("./preview-B4GcaC1c.js"), [], import.meta.url),
      t(() => import("./preview-Db4Idchh.js"), [], import.meta.url),
      t(
        () => import("./preview-BAz7FMXc.js"),
        __vite__mapDeps([39, 35]),
        import.meta.url
      ),
      t(() => import("./preview-Cv3rAi2i.js"), [], import.meta.url),
      t(() => import("./preview-CUxMZTHj.js"), [], import.meta.url),
      t(
        () => import("./preview-BaIEwN7w.js"),
        __vite__mapDeps([40, 41]),
        import.meta.url
      ),
    ]);
    return y(_);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new A(v, I);
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
export { t as _ };
