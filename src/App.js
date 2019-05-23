import React from 'react';
import Card from './Card';
import { quotes } from './Quotes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        id: 1
    }
  }



    render() {
      return (
        <div className="tc">
          <h1>Cheesy inspirational quotes</h1>
          <button
            className="button"
            onClick={changeQuote}>
            Next quote
            </button>
          <Card quotes={quotes}/>
        </div>
      )
    }
    changeQuote() {
      this.setState(function() {
        return {
          id: 2
          }
        })
      }
  }

// const App = () => {
//   return (
//     <div className='tc'>
//       <h1>Cheesy inspirational quotes</h1>
//       <CardList quotes={quotes}/>
//     </div>
//   )
// }


export default App;
