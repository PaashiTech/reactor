import { createTamagui } from "tamagui";
import { shorthands } from "@tamagui/shorthands";

import { animations } from "./animations";
import { fonts } from "./fonts";
import { media } from "./media";
import { themes } from "./themes";
import { tokens } from "./tokens";

export const tamaguiConfig = createTamagui({
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes,
  tokens,
  media,
});

export default tamaguiConfig;
