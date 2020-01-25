import React, { Fragment, useState, useEffect, useReducer } from "react"
import { RestaurantProvider } from "contexts/RestaurantsAPI"
import ListOfRestaurants from "components/ListOfRestaurants"
const App = () => {
  return (
    <Fragment>
      <RestaurantProvider> <ListOfRestaurants /> </RestaurantProvider>
    </Fragment>
  )
}

export default App