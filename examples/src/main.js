import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AUi from "../../packages";

const app = createApp(App);
app.use(AUi);
app.mount("#app");

