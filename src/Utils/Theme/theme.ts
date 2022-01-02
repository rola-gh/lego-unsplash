export interface Theme  {
  body: string, 
  text: string, 
  primary: string,
  gradient: string,
}

export const lightTheme:Theme = {
  body: '#fff',
  text: '#121212',
  primary: '#6200ee',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme:Theme = {
  body: '#121212',
  text: '#fff',
  primary: '#bb86fc',
  gradient: 'linear-gradient(#091236, #1E215D)',
};