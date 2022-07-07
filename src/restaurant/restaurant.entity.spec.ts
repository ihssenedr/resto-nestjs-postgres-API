import { Restaurant } from './restaurant.entity';

describe('RestaurantEntity', () => {
  it('should be defined', () => {
    expect(new Restaurant()).toBeDefined();
  });
});
