import { tamaguiConfig } from "@unmaze/config";

export type Conf = typeof tamaguiConfig;

declare module "@unmaze/views" {
  interface TamaguiCustomConfig extends Conf {}
}
