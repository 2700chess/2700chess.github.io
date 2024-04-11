function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./DocsRenderer-K4EAMTCU-CQZ9ptKz.js",
      "./iframe-BnNJRw71.js",
      "./index-Cu9bd8lq.js",
      "./react-18-ZytopnYu.js",
      "./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js",
      "./extends-CCbyfPlC.js",
      "./index-B_J8iUie.js",
      "./inheritsLoose-B7h9gheN.js",
      "./getPrototype-DkXlm8sv.js",
      "./index-DrFu-skq.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { _ as a } from "./iframe-BnNJRw71.js";
import "../sb-preview/runtime.js";
const { global: s } = __STORYBOOK_MODULE_GLOBAL__;
var _ = Object.entries(s.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return o.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  n = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import("./DocsRenderer-K4EAMTCU-CQZ9ptKz.js").then((r) => r.D),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          import.meta.url
        );
        return new e();
      },
      stories: {
        filter: (e) => {
          var r;
          return (
            (e.tags || []).filter((t) => _[t]).length === 0 &&
            !((r = e.parameters.docs) != null && r.disable)
          );
        },
      },
    },
  };
export { n as parameters };
