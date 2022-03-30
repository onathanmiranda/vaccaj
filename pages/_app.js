import "./style/global.scss";
import "@material/react-material-icon/index.scss";

import { LessonsContextProvider, PlayerContextProvider } from "../contexts";

function MyApp({ Component, pageProps }) {
  return (
    <LessonsContextProvider>
      <PlayerContextProvider>
        <Component {...pageProps} />
      </PlayerContextProvider>
    </LessonsContextProvider>
  );
}

export default MyApp;
