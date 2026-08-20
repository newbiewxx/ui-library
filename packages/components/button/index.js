// 每个组件的文件下均包含一个 index.js，用于导出组件
import AButton from "./src/index.vue";
import { componentInstall } from "@ui-library/utils";

export default componentInstall(AButton);
export { AButton };

