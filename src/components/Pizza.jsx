import React from 'react'

function Pizza({name, ingredients, price, photoName, soldOut}) {
  return (
    <div className={`flex flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${soldOut ? 'opacity-70' : ''}`}>
      {/* Left side - Image */}
      <div className="w-48 h-48 flex-shrink-0">
        <img 
          src={photoName} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right side - Details */}
      <div className="flex flex-col justify-center p-6 text-left flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 italic mb-3">{ingredients}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-semibold text-amber-600">LKR {price}.00</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${soldOut ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
            {soldOut ? 'Sold Out' : 'Available'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Pizza