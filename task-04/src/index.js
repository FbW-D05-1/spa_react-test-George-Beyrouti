import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <App />
    </UserProvider>
);