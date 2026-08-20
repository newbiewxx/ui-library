export * from "./components";
import components from "./components";

export const install = app => {
  components.forEach(com => app.use(com));
};

export default install;
