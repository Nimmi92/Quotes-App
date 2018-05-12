import React, { Component } from 'react';
import Quote from './components/Quote';
import history from '../node_modules/history/index';



class App extends Component {

  state = {
    quoteToday : undefined,
    quoteAuthor : undefined,
    reloadQuoteIn : 50000
  }
  getQuote = async (e) => {
      const quote_call = await fetch(`https://favqs.com/api/qotd`);
      const quote_response = await quote_call.json();
      console.log(quote_response);
      this.setState({
        quoteToday : quote_response.quote.body,
        quoteAuthor : quote_response.quote.author
      })
  }
  componentDidMount() {
    this.getQuote();
    if(this.state.reloadQuoteIn) {
      this.interval = setInterval(() => {
       this.getQuote();
      }, this.state.reloadQuoteIn);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        
        <Quote quote={this.state}/>
      </div>
    );
  }
}

export default App;

