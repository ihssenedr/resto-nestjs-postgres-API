import { Item } from 'src/item/item';

export interface Menu {
  id: string;
  items: Item[];
  specialOffer: string;
}
