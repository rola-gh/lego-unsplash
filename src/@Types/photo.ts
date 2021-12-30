export interface IPhoto {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string, full: string, thumb: string };
  color: string | null;
  alt_description: string;
  user: {
    username: string;
    name: string;
  };
}
