import { Item } from "src/item/item";

export class CreateMenuDTO{
    name: string;
    items: Item[];
    specialOffer: string;
}