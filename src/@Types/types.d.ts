declare module "*.svg" {
    const content: any;
    export default content;
}
  interface themeProp {

  theme: string, 
    toggleTheme: () => void,

}
  interface themeToggle {
    toggleTheme: React.MouseEventHandler
    theme: string,

  }