export interface Article {
  type: string;
  title: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
  url: string;
  image: string;
}
