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
  componentDidUpdate() {
    this.getCakes();
  }

  onFormSubmit = async (title, url) => {
    console.log(title, url);
    let resp = await Service.postNew(title, url);
    console.log(resp);
  };

  onRatingSubmit = async (rating, comment, id) => {
    // console.log(rating);
    let resp = await Service.postReview(rating, comment, id);
    console.log(resp);
  };

  getCakes = async () => {
    let response = await Service.getAll();
    // console.log(response.cakes);
    this.setState({
      cakes: response.cakes,
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
        <hr />
        <div className="row componentRow">
          <div id="comp1" className="col componentCol">
            <CakeList cakes={this.state.cakes} onCakeSelect={this.onCakeSelect} />
          </div>
          <div id="comp2" className="col componentCol">
            <ShowCake cake={this.state.selectedCake} onRatingSubmit={this.onRatingSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
