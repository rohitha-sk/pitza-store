import React from 'react'

function Pizza({name, ingredients, price, photoName, soldOut}) {

    const hasData = name && ingredients && price;

    return(
      <>
       {hasData ? (
    <div className={`flex flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${soldOut ? 'opacity-70' : ''}`}>
      {/* Left side - Image */}
      <div className="w-48 h-48 flex-shrink-0">
        <img 
          src={photoName || "https://i.imgur.com/OnwEDW3.jpg"} 
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
    ):(
  <div className="flex flex-row bg-gray-100 rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300">
          {/* Left side - Placeholder Image */}
          <div className="w-48 h-48 flex-shrink-0 bg-gray-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          
          {/* Right side - Empty State */}
          <div className="flex flex-col justify-center items-center p-6 text-center flex-grow">
            <p className="text-gray-400 text-lg font-medium">No pizza data available</p>
            <p className="text-gray-300 text-sm mt-1">Check back later</p>
          </div>
        </div>
    )}
    </>
    )
   

}

export default Pizza