import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persitor, store } from "redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persitor}>
      <App />
    </PersistGate>
  </Provider>
);
