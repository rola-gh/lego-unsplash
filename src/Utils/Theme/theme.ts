interface Theme  {
  body: string, 
  text: string, 
  primary:string
}

export const lightTheme :Theme = {
  body: '#fff',
  text: '#121212',
  primary: '#6200ee',
};

export const darkTheme:Theme = {
  body: '#121212',
  text: '#fff',
  primary: '#bb86fc',
};

// export type Theme = typeof lightTheme