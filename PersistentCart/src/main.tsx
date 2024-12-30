import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store, persistor } from "./store.ts"
import { PersistGate } from "redux-persist/integration/react"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Provider store={store}>
        <PersistGate loading={<>loading...</>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  </StrictMode>
)
