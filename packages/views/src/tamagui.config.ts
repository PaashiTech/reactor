import { createTamagui } from "tamagui";
import { shorthands } from "@tamagui/shorthands";

import { animations } from "./Constants/animations";
import { fonts } from "./Constants/fonts";
import { media } from "./Constants/media";
import { themes } from "./Constants/themes";
import { tokens } from "./Constants/tokens";

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
