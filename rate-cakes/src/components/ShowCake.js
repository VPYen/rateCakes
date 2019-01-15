import React from 'react';
import {Input} from 'react-materialize';
import "../static/showCake.css";

class ShowCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rating: '', comment: ''}
    console.log(this.state);
    console.log(this.props);
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onRatingSubmit(this.state.rating, this.state.comment, this.props.cake._id);
  }

  render() {
    let reviewAvg = 0;
    if(!this.props.cake) {
      return <div></div>
    }
    if (this.props.cake.reviews) {
      for(let i = 0; i < this.state.cake.reviews.length; i++) {
        reviewAvg += this.state.cake.reviews[i].rating;
      }
      reviewAvg = reviewAvg / this.state.cake.reviews.length;
    }else {
      reviewAvg = "N/A"
    }
    return  (
      <div className="row showCake">
        <div className="col">
          <h4 className="thisCake">{this.props.cake.title}</h4>
          <h5>Rating Average: {reviewAvg}</h5>
          <img src={this.props.cake.url} alt="CakeIMG" />
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
              <Input type="select" label="Rate this cake" name="rating" value={this.state.rating} onChange={this.onInputChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Input>
            </div>
            <div className="input-field">
              <Input type="textarea" label="Comment" name="comment" value={this.state.comment} onChange={this.onInputChange} />
            </div>
            <button type="submit" className="waves-effect waves-light grey darken-1 btn">Submit Rating</button>
          </form>
      </div>
    )
  }
}

export default ShowCake;
