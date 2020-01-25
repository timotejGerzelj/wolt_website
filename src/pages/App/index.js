import React, { Fragment, useState, useEffect, useReducer } from "react"
import { useReducedRestaurantAPI } from "hooks/useReducedRestaurantAPI"

const App = () => {
  const { restaurants, loader, error } = useReducedRestaurantAPI()

  return (
    <Fragment>
      {loader && <p>Loading my dude</p>}
      {error && <p>REEEEEEEEEE error</p>}
      <ul>
        {restaurants.map((restaurant, i) => (
          <li key={i}>
            <div>
              {restaurant.city},{restaurant.delivery_price},{restaurant.name}
            </div>
          </li>
        ))}
      </ul>
      );
    </Fragment>
  )
}

export default App
