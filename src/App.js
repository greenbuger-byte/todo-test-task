import { BrowserRouter } from "react-router-dom";
import { Provider} from "react-redux";

import GlobalStyle from "./theme/global";
import Routes from "./routes";
import configureStore from './store';


function App() {
  const store = configureStore();

  return (
      <Provider store={store}>
          <BrowserRouter>
              <GlobalStyle />
              <Routes />
          </BrowserRouter>
      </Provider>

  );
}

export default App;
