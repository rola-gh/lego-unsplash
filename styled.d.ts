import 'styled-components';
import {Theme} from './src/Utils/Theme/theme'
interface ITheme {
  main?: string, 
  Text?:string,
  theme:string
}
declare module 'styled-components' {
  export  interface DefaultTheme extends Theme {}
  // export interface DefaultTheme {
  // colors: {
  //     main: string;
  //     secondary: string;
  //   };
  // }
}