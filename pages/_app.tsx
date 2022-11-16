import { AppType } from "next/app";
import { SSRProvider } from "react-aria";
import "styles/global.css";

const Application: AppType = ({ Component, pageProps }) => {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
};

export default Application;
