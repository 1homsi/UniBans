import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Layout from "./Layout";

ReactDOM.render(Layout, document.getElementById("root"));

serviceWorker.unregister();
