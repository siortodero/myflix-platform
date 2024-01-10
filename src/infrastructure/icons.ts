import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const initIconSet = () => {
  library.add(fab, fas);
  config.styleDefault = "solid";
};
