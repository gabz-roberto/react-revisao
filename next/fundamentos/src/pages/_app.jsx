import "../styles/globals.css";
// referencia ao CSS que global da aplicação
import "../styles/app.css";

// Função que exibirá as páginas da aplicação
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
