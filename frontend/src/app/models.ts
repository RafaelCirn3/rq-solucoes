export interface Product {
  id: number;
  name: string;
  model: string;
  category: string;
  application: string;
  image: string;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  products: Product[];
}
