import { StackRouteProps } from "../navigation/navigators/types";

export interface UnmzNavScreen {
  key: keyof StackRouteProps;
  title: string;
  content: React.FC<any>;
  headerBackground?: "plain" | "linear-gradient";
}
