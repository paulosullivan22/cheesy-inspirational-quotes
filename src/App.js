import React from 'react';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        id: 1
    }
  }

  changeQuote = () => {
    this.setState(
       {
        id: this.state.id++
        }
      )
    }

    render() {
      return (
        <div className="tc">
          <h1>Cheesy inspirational quotes</h1>
          <button
            id="button"
            onClick={this.changeQuote}
            >
            Next quote
            </button>
          <Card  id={this.state.id}/>
        </div>
      )
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
