import React from 'react';
import {Input} from 'react-materialize';
import "../static/showCake.css";

class ShowCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rating: '5', comment: ''}
    // console.log(this.state);
    // console.log(this.props);
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onRatingSubmit(this.state.rating, this.state.comment, this.props.cake._id);
  }

  render() {
    let ratingAvg = 0;
    let comments = [];
    if(!this.props.cake) {
      return <div></div>
    }
    if (this.props.cake.ratings.length) {
      for(let i = 0; i < this.props.cake.ratings.length; i++) {
        ratingAvg += this.props.cake.ratings[i].rating;
      }
      ratingAvg = ratingAvg / this.props.cake.ratings.length;
      comments = this.props.cake.ratings.map(rating =>  {
        return (
          <p className="comment">"{rating.comment}" - Rating: {rating.rating} </p>
        )
      })
    }else {
      ratingAvg = <div style={{color: "red"}}>Not rated</div>
      comments = <div className="comment" style={{color: "red"}}>No Comments</div>
    }
    return  (
      <div className="row showCake">
        <div className="col">
          <h4>{this.props.cake.title}</h4>
          <img src={this.props.cake.url} alt="CakeIMG" />
          <h5>Rating Average: {ratingAvg}</h5>
          <h5>Comments:</h5>
            <div className="row comments">
              {comments}
            </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <Input type="textarea" label="Comment" name="comment" value={this.state.comment} onChange={this.onInputChange} />
          </div>
          <div className="input-field">
            <Input type="number" id="rating" label="Rate this cake" name="rating"  defaultValue="5" min="1" max="5" onChange={this.onInputChange} />
          </div>
          <button type="submit" className="waves-effect waves-light grey darken-1 btn">Submit Rating</button>
        </form>
      </div>
    )
  }
}

export default ShowCake;
