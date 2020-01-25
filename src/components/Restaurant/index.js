import React from "react"

const Restaurant= (props) =>  {
    const { city, picture, name, tags } = props 
    return (
        <div>

            <img className="w-full h-200 object-cover border-solid border-2 border-gray-600" src={ picture } />
            <div className="font-medium"> { name }  </div>
            <div > { city } </div> 
            <div> {  tags.map(( food, id) => (
                <div key= { id } className="text-gray-600"><span aria-hidden="true">#</span>{ food }</div>
            ))  } </div>
        </div>
    )
}

export default Restaurant;
