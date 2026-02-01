import React from 'react'
import Pizza from './Pizza'

function Menu({pizzaData}) {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-700">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pizzaData.map((pizza) => (
          <Pizza 
            key={pizza.name}
            photoName={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu