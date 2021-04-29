export interface Product {
  id?: number;
  imageId?: number;
  name: string;
  description: string;
  price: number;
  quantity?: number;
  unit: string;
  locale: string;
  categoryID: number;
  inPromotion: boolean;
  outOfStock: boolean;
  outOfSeason: boolean;
  subTotal?: number;
}
