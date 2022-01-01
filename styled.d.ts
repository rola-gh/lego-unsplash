import 'styled-components';
import {Theme} from './src/Utils/Theme/theme'
//  export interface ITheme {
//   main: string, 
//   Text:string,
//   theme: string,
//   body:string,
// }
 declare module 'styled-components' {
  export  interface DefaultTheme extends Theme {}
  // export interface DefaultTheme {
  //   theme: string,
    
  // }
 }
