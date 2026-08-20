export * from "./components";
import components from "./components";

// 导入所有 iconfont 图标
import "./utils/icon-fonts/iconfont.css";

export const install = app => {
  components.forEach(com => app.use(com));
};

export default install;
