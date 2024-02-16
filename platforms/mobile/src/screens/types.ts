export interface Screen {
  title: string;
  content: React.FC<any>;
  background: "plain" | "linear-gradient";
}
