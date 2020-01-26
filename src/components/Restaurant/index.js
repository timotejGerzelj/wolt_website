import React from "react"

const Restaurant= (props) =>  {
    const { city, picture, name, tags } = props 
    return (
        <div className="hover:shadow-2xl border-solid border-1 border-gray-600 hover:border-width-0">

            <img className="w-full h-200" src={ picture } />
    <div className="pl-3 pb-2">
        <div className="font-medium"> { name }  </div>
            <div > { city } </div> 
            <div> {  tags.map(( food, id) => (
                <div key= { id } className="text-gray-600 italic"><span aria-hidden="true">#</span>{ food }</div>
            ))  } </div>
        </div>
    </div>
    )
}

export default Restaurant;
