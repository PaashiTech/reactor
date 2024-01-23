import { createTamagui } from "tamagui";
import { shorthands } from "@tamagui/shorthands";

import { animations } from "./constants/animations";
import { fonts } from "./constants/fonts";
// import { media } from "./constants/media";
import { themes } from "./constants/themes";
import { tokens } from "./constants/tokens";

export const config = createTamagui({
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes,
  tokens,
  // media,
});

type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so that custom types
  // work everywhere `tamagui` is imported
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
