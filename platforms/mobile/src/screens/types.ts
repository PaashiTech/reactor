export interface UnmzNavScreen {
  key: string;
  title: string;
  content: React.FC<any>;
  headerBackground?: "plain" | "linear-gradient";
}
