import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { AuthContextProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
