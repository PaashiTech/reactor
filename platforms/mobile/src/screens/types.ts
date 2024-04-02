import {
  MeStackRouteProps,
  StackRouteProps,
} from "../navigation/navigators/types";

export interface UnmzNavScreen {
  key: keyof StackRouteProps | keyof MeStackRouteProps;
  title: string;
  content: React.FC<any>;
  headerBackground?: "plain" | "linear-gradient";
}
