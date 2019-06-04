import React from 'react';
import { quotes } from './Quotes';


const Card = ({ id, quotes }) => {
  return (
    <div>

        {quotes.map(el => {
          <div>{el.quote}</div>
        }) }

      </div>
    )
  }
      // {
      //    quotes.find(el => el.id === 1).map(el => {
      //      <div>{el.quotes}</div>
      //    })
      //  }


    // <div className='tc bg-near-white dib br3 pa3 ma2 grow bw3 br2 w5 fw1 shadow5'>
    //  // {quotes.map((input) => {
    //  //   if (input.id === 1) {
    //  //     return (
    //  //       <div key="input.id">
    //  //       <img src={`input.pic`} alt="inspirational"/>
    //  //        <h3>{input.quote}</h3>
    //  //        <p>{input.byline}</p>
    //  //        </div>
    //  //      )
    //  //     }}
    //  //  )}
    //  // {
    //  //   quotes.find(el=>el.id === id).map(el=>{
    //  //     <div>el.quote</div>
    //  //   })
    //  // }
    //  test
    // </div>


export default Card;
