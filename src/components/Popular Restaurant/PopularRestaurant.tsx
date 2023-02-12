import React from 'react';
import RestaurantCard from './RestaurantCard';
import data from '../../epicure.json';

const PopularRestaurant: React.FC = () => {

      return (
          <div>
            <RestaurantCard restaurantImgSrc={`${data.restaurants[0].image}`} restaurantImgAlt={'claroImg'} restaurantName={'claro'} chefName={'yossi'} ratingSrc={1} />
          </div>
      )
}
export default PopularRestaurant;