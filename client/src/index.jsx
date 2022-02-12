import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AuthLayout from "./AuthLayout";

ReactDOM.render(AuthLayout, document.getElementById("root"));

serviceWorker.unregister();
