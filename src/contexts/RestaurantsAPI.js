import React from 'react'
import { useReducedRestaurantAPI  } from "hooks/useReducedRestaurantAPI"

export const RestaurantsAPIContext = React.createContext()

export function RestaurantProvider( {children} ) {
    const { restaurants, loader, error, ascending, descending } = useReducedRestaurantAPI()
    return (
    <RestaurantsAPIContext.Provider value={{ restaurants, loader, error, ascending, descending }}>
        {children}
    </RestaurantsAPIContext.Provider>
    )       
}