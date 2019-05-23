import React from 'react';
import Card from './Card';

const CardList = ({ quotes }) => {
  return (
    <div>
      {
        quotes.map((user, i) => {
          return (
            <Card
              key = {i}
              quote={quotes[i].quote}
              byline={quotes[i].byline}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
