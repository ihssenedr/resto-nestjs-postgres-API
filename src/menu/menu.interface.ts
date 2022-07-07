import { Item } from './../item/item';

export interface Menu {
  id: number;
  items: Item[];
  specialOffer: string;
}
