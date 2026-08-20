import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AUi from "../../packages";

// 全量导入主题包
import "@ui-library/theme/src/index.scss";

// 按需导入
// import "@ui-library/theme/src/button.scss";

const app = createApp(App);
app.use(AUi);
app.mount("#app");

