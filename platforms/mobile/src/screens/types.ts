export interface Screen {
  title: string;
  content: React.FC<any>;
  headerBackground: "plain" | "linear-gradient";
}
