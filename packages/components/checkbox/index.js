import { componentInstall } from "@ui-library/utils";
import Checkbox from "./src/index.vue";
import CheckboxGroup from "./src/checkbox-group.vue";

const ACheckbox = componentInstall(Checkbox);
const ACheckboxGroup = componentInstall(CheckboxGroup);
export { ACheckbox, ACheckboxGroup };
export default { ACheckbox, ACheckboxGroup };
