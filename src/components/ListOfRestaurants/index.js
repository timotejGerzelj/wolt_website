import React, { Fragment, useState, useEffect, useReducer, useContext } from "react"
import { RestaurantsAPIContext } from 'contexts/RestaurantsAPI'
import  Restaurant from "components/Restaurant" 

const ListOfRestaurants = () => {
    const { restaurants, loader, error, ascending, descending } = useContext(RestaurantsAPIContext)
  return (
    <Fragment>
      {loader && <p>Loading my dude</p>}
      {error && <p>REEEEEEEEEE error</p>}
      <div>
        <button onClick={ ascending}  ><svg className="w-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-alpha-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160zm400 128H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z" class=""></path></svg></button>
        <button onClick={ descending}><svg className="w-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-alpha-up-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160zm272 64h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 65.63V48a16 16 0 0 0-16-16H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 190.37V208a16 16 0 0 0 16 16zm159.06 234.62l-59.27-160A16 16 0 0 0 372.72 288h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 480h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 480H432a16 16 0 0 0 15.06-21.38zM335.61 400L352 352l16.39 48z" class=""></path></svg></button>
      </div>
      <ul className="grid grid-cols-3 gap-30 text-xl font-sans">
        {restaurants.map((restaurant, i) => (
          <li key={ i } className= "border-2 border-gray-900" >
            <Restaurant city={restaurant.city} picture={restaurant.image} name={restaurant.name} tags={restaurant.tags} />
          </li>
        ))}
      </ul>
      );
    </Fragment>
  )
}

export default ListOfRestaurants