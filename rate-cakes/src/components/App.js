import React from 'react';
import '../static/app.css'
import CakeList from './CakeList.js';
// import CakeItem from './CakeItem.js';
import Service from './Service.js';
import NewCake from './NewCake.js';
import ShowCake from './ShowCake.js'

class App extends React.Component  {
  state = {cakes: [], selectedCake: null};

  componentDidMount() {
    this.getCakes();
  }

  onFormSubmit = async (title, url) => {
    console.log(title, url);
    let resp = await Service.postNew(title, url);
    console.log(resp);
    // this.getCakes();
  };

  onRatingSubmit = async (rating, id) => {
    console.log(rating);
    let resp = await Service.postReview(rating, id);
    console.log(resp);
    // this.getCakes();
  };

  getCakes = async () => {
    let response = await Service.getAll();
    // console.log(response.cakes);
    this.setState({
      cakes: response.cakes,
      selectedCake : response.cakes[0]
    });
  };

  onCakeSelect = (cake) => {
    //console.log("From selectedCake", cake);
    this.setState({selectedCake: cake});
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Rate My Cake</h1>
        <NewCake onFormSubmit={this.onFormSubmit} />
        <CakeList cakes={this.state.cakes} onCakeSelect={this.onCakeSelect} />
        <ShowCake cake={this.state.selectedCake} />
      </div>
    )
  }

}

export default App;
