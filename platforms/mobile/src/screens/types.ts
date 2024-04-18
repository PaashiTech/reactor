import {
  MeStackRouteProps,
  OnboardingStackRouteProps,
  StackRouteProps,
} from "../navigation/navigators/types";

export interface UnmzNavScreen {
  key:
    | keyof StackRouteProps
    | keyof MeStackRouteProps
    | keyof OnboardingStackRouteProps;
  title: string;
  content: React.FC<any>;
  headerBackground?: "plain" | "linear-gradient";
}
