import { tamaguiConfig } from "@unmaze/config";

export type Conf = typeof tamaguiConfig;

declare module "@unmaze/web" {
  interface TamaguiCustomConfig extends Conf {}
}
