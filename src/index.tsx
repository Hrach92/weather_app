import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./providers/searchProvider";
import SwitchProvider from "./providers/switchProvider";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SwitchProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </SwitchProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
