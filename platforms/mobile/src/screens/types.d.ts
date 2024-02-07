export interface Screen {
  key: keyof UnmzStackNavRouteProps;
  title: string;
  content: ScreenComponentType<any, any>;
  background: "plain" | "linear-gradient";
}

export type UnmzStackNavRouteProps = {
  "0010": {};
  "0012.b.1": {
    confirmScreenId: keyof UnmzStackNavRouteProps;
    sentToType: string;
    sentToValue: string;
  };
  "0012.f.1": {};
  "0012.k": {};
};
