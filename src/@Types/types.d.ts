declare module "*.svg" {
  const content: any;
  export default content;
}
export interface themeProp {
  theme: string;
  toggleTheme: () => void;
}
export interface themeToggle {
  theme: string;
  toggleTheme: React.MouseEventHandler;
}
