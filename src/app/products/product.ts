export interface IProduct {
  id: number;
  barcode: string;
  description: string;
  imageUrl: string;
  name: string;
  categoryId: number;
  missingProducts: any[];
}
