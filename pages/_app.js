import { defineCustomElements, applyPolyfills } from "col-pci-wc/loader";

export default function App({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }
  return <Component {...pageProps} />;
}
