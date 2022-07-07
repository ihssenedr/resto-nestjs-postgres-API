import { Menu } from './../menu/menu.entity';

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string[];
  contact: string;
  timing: string;
  adresse?: string;
  license?: string;
  foodCard: Menu;
}
