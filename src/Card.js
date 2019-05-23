import React from 'react';

const Card = ({ quotes }) => {
  return (
    <div className='tc bg-near-white dib br3 pa3 ma2 grow bw3 br2 w5 fw1 shadow5'>
     {quotes.map((input) => {
       if (input.id === 3) {
         return (
           <div key="input.id">
           <img src={`https://source.unsplash.com/random/200x200`} alt="inspirational"/>
            <h3>{input.quote}</h3>
            <p>{input.byline}</p>
            </div>
          )
         }}
      )}
    </div>
  )
}

export default Card;
