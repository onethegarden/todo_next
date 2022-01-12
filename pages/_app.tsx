import type { AppProps } from "next/app";
import "../styles/Todo.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
