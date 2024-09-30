import React from 'react'

export default function () {
  return (
    
        <div className="somewhat-scooper">
                <h1 className='somelocal mt-4'>Special Pizzas</h1>
             <div className="card-list">
                    {SpecialpizzaData.map((card, index) => (
                      <CardComponent
                            key={index}
                            imgSrc={card.imgSrc}
                            title={card.title}
                            text={card.text}
                            price={card.price}
                            buttontext={card.buttontext}
                        />
                     ))}
                </div>
        </div>
    
  )
}
